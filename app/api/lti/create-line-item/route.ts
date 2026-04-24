import { NextRequest, NextResponse } from 'next/server';
import { getLTIPlatformConfig } from '@/lib/lti/config';
import { getPrivateKey, getKeyId } from '@/lib/lti/keys';
import { SignJWT } from 'jose';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

// Derive scoresUrl from lineItemUrl, inserting /scores BEFORE any query string
// Handles Moodle's URL format: .../lineitems/{id}/lineitem → .../lineitems/{id}/scores
function deriveScoresUrl(lineItemUrl: string): string {
  const [path, query] = lineItemUrl.split('?');
  let basePath = path.endsWith('/') ? path.slice(0, -1) : path;
  // Moodle appends /lineitem to individual lineitem URLs, but scores are at /scores
  // without the /lineitem suffix. Strip it if present.
  if (basePath.endsWith('/lineitem')) {
    basePath = basePath.slice(0, -'/lineitem'.length);
  }
  return query ? `${basePath}/scores?${query}` : `${basePath}/scores`;
}

export async function POST(request: NextRequest) {
  const steps: { step: string; status: string; data?: unknown }[] = [];

  try {
    const body = await request.json();
    const resourceLinkId = body.resourceLinkId;

    if (!resourceLinkId) {
      return NextResponse.json({ error: 'resourceLinkId is required' }, { status: 400 });
    }

    const force = body.force === true;

    const lineItem = await prisma.ltiLineItem.findFirst({ where: { resourceLinkId } });

    if (!lineItem) {
      return NextResponse.json({ error: 'No line item record found' }, { status: 404 });
    }

    steps.push({ step: 'db_record', status: 'ok', data: { id: lineItem.id, lineItemsUrl: lineItem.lineItemsUrl, lineItemUrl: lineItem.lineItemUrl, scoresUrl: lineItem.scoresUrl } });

    if (lineItem.scoresUrl && !force) {
      return NextResponse.json({ message: 'Already has scoresUrl', scoresUrl: lineItem.scoresUrl, steps });
    }

    // If force=true, clear existing data
    if (force) {
      await prisma.ltiLineItem.update({
        where: { id: lineItem.id },
        data: { lineItemUrl: '', scoresUrl: null },
      });
      lineItem.lineItemUrl = '';
      lineItem.scoresUrl = null;
      steps.push({ step: 'force_cleared', status: 'ok' });
    }

    if (!lineItem.lineItemsUrl) {
      return NextResponse.json({ error: 'No lineItemsUrl stored', steps }, { status: 400 });
    }

    const platformConfig = getLTIPlatformConfig();
    steps.push({ step: 'platform_config', status: 'ok', data: { issuer: platformConfig.issuer, clientId: platformConfig.clientId, tokenEndpoint: platformConfig.tokenEndpoint } });

    let privateKey;
    try {
      privateKey = await getPrivateKey();
      steps.push({ step: 'private_key', status: 'ok' });
    } catch (err) {
      steps.push({ step: 'private_key', status: 'error', data: { message: err instanceof Error ? err.message : 'Unknown' } });
      return NextResponse.json({ steps }, { status: 500 });
    }

    let kid;
    try {
      kid = await getKeyId();
      steps.push({ step: 'key_id', status: 'ok', data: { kid } });
    } catch (err) {
      steps.push({ step: 'key_id', status: 'error', data: { message: err instanceof Error ? err.message : 'Unknown' } });
      return NextResponse.json({ steps }, { status: 500 });
    }

    const now = Math.floor(Date.now() / 1000);
    const clientAssertion = await new SignJWT({
      iss: platformConfig.clientId,
      sub: platformConfig.clientId,
      aud: platformConfig.tokenEndpoint,
      jti: crypto.randomUUID(),
    })
      .setProtectedHeader({ alg: 'EdDSA', kid })
      .setIssuedAt(now)
      .setExpirationTime(now + 60)
      .sign(privateKey);

    steps.push({ step: 'jwt_created', status: 'ok', data: { length: clientAssertion.length } });

    const tokenBody = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: platformConfig.clientId,
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      client_assertion: clientAssertion,
      scope: 'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem',
    });

    const tokenRes = await fetch(platformConfig.tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenBody.toString(),
    });

    const tokenText = await tokenRes.text();
    let tokenData;
    try { tokenData = JSON.parse(tokenText); } catch { tokenData = tokenText; }

    steps.push({ step: 'token_response', status: tokenRes.ok ? 'ok' : 'error', data: { httpStatus: tokenRes.status, body: tokenData } });

    if (!tokenRes.ok) {
      return NextResponse.json({ steps }, { status: 500 });
    }

    const accessToken = (tokenData as { access_token: string }).access_token;

    // Helper: try GET lineitems with different URL variations and scopes
    const tryGetLineItems = async (url: string, token: string, scope: string) => {
      // Get a token with the specified scope if different from current
      let useToken = token;
      if (scope !== 'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem') {
        const scopeTokenBody = new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: platformConfig.clientId,
          client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
          client_assertion: clientAssertion,
          scope,
        });
        const scopeTokenRes = await fetch(platformConfig.tokenEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: scopeTokenBody.toString(),
        });
        if (scopeTokenRes.ok) {
          const scopeTokenData = await scopeTokenRes.json() as { access_token: string };
          useToken = scopeTokenData.access_token;
        }
      }
      return fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${useToken}`,
          'Accept': 'application/vnd.ims.lis.v2.lineitemcontainer+json',
        },
      });
    };

    // Build URL variations to try (with type_id, without type_id)
    const baseUrl = lineItem.lineItemsUrl.split('?')[0];
    const urlVariations = [
      { url: lineItem.lineItemsUrl, label: 'with_type_id' },
      { url: baseUrl, label: 'without_type_id' },
    ];

    // Also try with readonly scope
    const scopes = [
      'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem',
      'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly',
    ];

    // Step 1: Try GET existing line items with multiple URL/scope combinations
    let getListRes: Response | null = null;
    let getListData: unknown;
    let usedVariation = '';

    for (const variation of urlVariations) {
      for (const scope of scopes) {
        const res = await tryGetLineItems(variation.url, accessToken, scope);
        const text = await res.text();
        let data;
        try { data = JSON.parse(text); } catch { data = text; }

        steps.push({
          step: `get_lineitems_${variation.label}_${scope.split('/').pop()}`,
          status: res.ok ? 'ok' : 'error',
          data: { url: variation.url, scope: scope.split('/').pop(), httpStatus: res.status, body: data },
        });

        if (res.ok) {
          getListRes = res;
          getListData = data;
          usedVariation = variation.label;
          break;
        }
      }
      if (getListRes?.ok) break;
    }

    // Use existing line item if found — match by resourceLinkId
    if (getListRes?.ok && Array.isArray(getListData) && getListData.length > 0) {
      // Find the line item matching our resourceLinkId
      const existing = (getListData as { id: string; resourceLinkId?: string; [key: string]: unknown }[]).find(
        item => String(item.resourceLinkId) === String(resourceLinkId)
      ) || getListData[0] as { id: string; [key: string]: unknown };
      const liUrl = existing.id;
      const scoresUrl = deriveScoresUrl(liUrl);

      steps.push({ step: 'using_existing_lineitem', status: 'ok', data: { lineItemUrl: liUrl, scoresUrl, variation: usedVariation, item: existing } });

      await prisma.ltiLineItem.update({
        where: { id: lineItem.id },
        data: { lineItemUrl: liUrl, scoresUrl },
      });

      steps.push({ step: 'stored_from_existing', status: 'ok', data: { lineItemUrl: liUrl, scoresUrl } });
      return NextResponse.json({ steps });
    }

    // Step 2: Try creating with different content types and URL variations
    const contentTypes = [
      'application/vnd.ims.lis.v2.lineitem+json',
      'application/vnd.ims.lis.v1.lineitem+json',
      'application/json',
    ];

    for (const urlVar of urlVariations) {
      for (const ct of contentTypes) {
        const liRes = await fetch(urlVar.url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': ct,
            'Accept': ct,
          },
          body: JSON.stringify({
            scoreMaximum: 100,
            label: lineItem.label || 'LuxUp AI Tutor',
            resourceId: resourceLinkId,
            tag: 'luxup',
          }),
        });

        const liText = await liRes.text();
        let liData;
        try { liData = JSON.parse(liText); } catch { liData = liText; }

        steps.push({ step: `create_lineitem_${urlVar.label}_${ct.split('/').pop()}`, status: liRes.ok ? 'ok' : 'error', data: { url: urlVar.url, httpStatus: liRes.status, contentType: ct, body: liData } });

        if (liRes.ok) {
          const liUrl = (liData as { id: string }).id;
          const scoresUrl = deriveScoresUrl(liUrl);

          await prisma.ltiLineItem.update({
            where: { id: lineItem.id },
            data: { lineItemUrl: liUrl, scoresUrl },
          });

          steps.push({ step: 'stored_new', status: 'ok', data: { lineItemUrl: liUrl, scoresUrl, usedContentType: ct, usedUrl: urlVar.label } });
          return NextResponse.json({ steps });
        }
      }
    }

    return NextResponse.json({ steps }, { status: 500 });
  } catch (error) {
    steps.push({ step: 'fatal_error', status: 'error', data: { message: error instanceof Error ? error.message : 'Unknown', stack: error instanceof Error ? error.stack : undefined } });
    return NextResponse.json({ steps }, { status: 500 });
  }
}
