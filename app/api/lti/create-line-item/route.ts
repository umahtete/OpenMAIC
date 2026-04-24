import { NextRequest, NextResponse } from 'next/server';
import { getLTIPlatformConfig } from '@/lib/lti/config';
import { getPrivateKey, getKeyId } from '@/lib/lti/keys';
import { SignJWT } from 'jose';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const steps: { step: string; status: string; data?: unknown }[] = [];

  try {
    const body = await request.json();
    const resourceLinkId = body.resourceLinkId;

    if (!resourceLinkId) {
      return NextResponse.json({ error: 'resourceLinkId is required' }, { status: 400 });
    }

    const lineItem = await prisma.ltiLineItem.findFirst({ where: { resourceLinkId } });

    if (!lineItem) {
      return NextResponse.json({ error: 'No line item record found' }, { status: 404 });
    }

    steps.push({ step: 'db_record', status: 'ok', data: { id: lineItem.id, lineItemsUrl: lineItem.lineItemsUrl, lineItemUrl: lineItem.lineItemUrl, scoresUrl: lineItem.scoresUrl } });

    if (lineItem.scoresUrl) {
      return NextResponse.json({ message: 'Already has scoresUrl', scoresUrl: lineItem.scoresUrl, steps });
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

    // Step 1: GET existing line items (Moodle auto-creates grade items)
    const getListRes = await fetch(lineItem.lineItemsUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.ims.lis.v2.lineitemcontainer+json',
      },
    });
    const getListText = await getListRes.text();
    let getListData;
    try { getListData = JSON.parse(getListText); } catch { getListData = getListText; }
    steps.push({ step: 'get_existing_lineitems', status: getListRes.ok ? 'ok' : 'error', data: { httpStatus: getListRes.status, body: getListData } });

    // Use existing line item if found
    if (getListRes.ok && Array.isArray(getListData) && getListData.length > 0) {
      const existing = getListData[0] as { id: string; [key: string]: unknown };
      const liUrl = existing.id;
      const scoresUrl = liUrl.endsWith('/') ? `${liUrl}scores` : `${liUrl}/scores`;

      steps.push({ step: 'using_existing_lineitem', status: 'ok', data: { lineItemUrl: liUrl, scoresUrl, item: existing } });

      await prisma.ltiLineItem.update({
        where: { id: lineItem.id },
        data: { lineItemUrl: liUrl, scoresUrl },
      });

      steps.push({ step: 'stored_from_existing', status: 'ok', data: { lineItemUrl: liUrl, scoresUrl } });
      return NextResponse.json({ steps });
    }

    // Step 2: Try creating with different content types
    const contentTypes = [
      'application/vnd.ims.lis.v2.lineitem+json',
      'application/vnd.ims.lis.v1.lineitem+json',
      'application/json',
    ];

    for (const ct of contentTypes) {
      const liRes = await fetch(lineItem.lineItemsUrl, {
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

      steps.push({ step: `create_lineitem_${ct.split('/').pop()}`, status: liRes.ok ? 'ok' : 'error', data: { httpStatus: liRes.status, contentType: ct, body: liData } });

      if (liRes.ok) {
        const liUrl = (liData as { id: string }).id;
        const scoresUrl = liUrl.endsWith('/') ? `${liUrl}scores` : `${liUrl}/scores`;

        await prisma.ltiLineItem.update({
          where: { id: lineItem.id },
          data: { lineItemUrl: liUrl, scoresUrl },
        });

        steps.push({ step: 'stored_new', status: 'ok', data: { lineItemUrl: liUrl, scoresUrl, usedContentType: ct } });
        return NextResponse.json({ steps });
      }
    }

    return NextResponse.json({ steps }, { status: 500 });
  } catch (error) {
    steps.push({ step: 'fatal_error', status: 'error', data: { message: error instanceof Error ? error.message : 'Unknown', stack: error instanceof Error ? error.stack : undefined } });
    return NextResponse.json({ steps }, { status: 500 });
  }
}
