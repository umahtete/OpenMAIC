import { NextRequest, NextResponse } from 'next/server';
import { getLTIPlatformConfig } from '@/lib/lti/config';
import { getPrivateKey, getKeyId } from '@/lib/lti/keys';
import { SignJWT } from 'jose';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const steps: { step: string; status: string; detail?: string; data?: unknown }[] = [];

  try {
    const url = new URL(request.url);
    const testScore = url.searchParams.get('testScore') === '1';
    const resourceLinkId = url.searchParams.get('resourceLinkId') || '1';

    // Step 1: Check config
    const platformConfig = getLTIPlatformConfig();
    steps.push({
      step: '1_platform_config',
      status: 'ok',
      data: {
        issuer: platformConfig.issuer,
        clientId: platformConfig.clientId,
        tokenEndpoint: platformConfig.tokenEndpoint,
        authEndpoint: platformConfig.authEndpoint,
        jwksEndpoint: platformConfig.jwksEndpoint,
      },
    });

    // Step 2: Get private key
    let privateKey;
    try {
      privateKey = await getPrivateKey();
      steps.push({ step: '2_private_key', status: 'ok', detail: 'Key loaded successfully' });
    } catch (err) {
      steps.push({ step: '2_private_key', status: 'error', detail: err instanceof Error ? err.message : 'Unknown error' });
      return NextResponse.json({ steps });
    }

    // Step 3: Get key ID
    let kid;
    try {
      kid = await getKeyId();
      steps.push({ step: '3_key_id', status: 'ok', detail: kid });
    } catch (err) {
      steps.push({ step: '3_key_id', status: 'error', detail: err instanceof Error ? err.message : 'Unknown error' });
      return NextResponse.json({ steps });
    }

    // Step 4: Create JWT assertion
    const now = Math.floor(Date.now() / 1000);
    let clientAssertion: string;
    try {
      clientAssertion = await new SignJWT({
        iss: platformConfig.clientId,
        sub: platformConfig.clientId,
        aud: platformConfig.tokenEndpoint,
        jti: crypto.randomUUID(),
      })
        .setProtectedHeader({ alg: 'EdDSA', kid })
        .setIssuedAt(now)
        .setExpirationTime(now + 60)
        .sign(privateKey);
      steps.push({ step: '4_jwt_assertion', status: 'ok', detail: `JWT created (${clientAssertion.length} chars)` });
    } catch (err) {
      steps.push({ step: '4_jwt_assertion', status: 'error', detail: err instanceof Error ? err.message : 'Unknown error' });
      return NextResponse.json({ steps });
    }

    // Step 5: Request access token with lineitem scope
    const tokenBody = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: platformConfig.clientId,
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      client_assertion: clientAssertion,
      scope: 'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem',
    });

    steps.push({
      step: '5_token_request_params',
      status: 'info',
      data: {
        grant_type: 'client_credentials',
        client_id: platformConfig.clientId,
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        scope: 'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem',
        url: platformConfig.tokenEndpoint,
      },
    });

    let tokenResponse;
    try {
      tokenResponse = await fetch(platformConfig.tokenEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: tokenBody.toString(),
      });

      const tokenText = await tokenResponse.text();
      let tokenData;
      try { tokenData = JSON.parse(tokenText); } catch { tokenData = tokenText; }

      steps.push({
        step: '6_token_response',
        status: tokenResponse.ok ? 'ok' : 'error',
        data: {
          httpStatus: tokenResponse.status,
          httpStatusText: tokenResponse.statusText,
          body: tokenData,
        },
      });

      if (!tokenResponse.ok) {
        return NextResponse.json({ steps });
      }

      // Step 7: Try to create a line item
      const accessToken = tokenData.access_token;
      const lineItemsUrl = 'https://courses.luxuptraining.com/mod/lti/services.php/3/lineitems?type_id=1';

      steps.push({
        step: '7_creating_line_item',
        status: 'info',
        data: {
          url: lineItemsUrl,
          body: {
            scoreMaximum: 100,
            label: 'LuxUp AI Tutor - Test',
            resourceId: '1',
            tag: 'luxup',
          },
        },
      });

      const liResponse = await fetch(lineItemsUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/vnd.ims.lis.v2.lineitem+json',
        },
        body: JSON.stringify({
          scoreMaximum: 100,
          label: 'LuxUp AI Tutor - Test',
          resourceId: '1',
          tag: 'luxup',
        }),
      });

      const liText = await liResponse.text();
      let liData;
      try { liData = JSON.parse(liText); } catch { liData = liText; }

      steps.push({
        step: '8_line_item_response',
        status: liResponse.ok ? 'ok' : 'error',
        data: {
          httpStatus: liResponse.status,
          httpStatusText: liResponse.statusText,
          body: liData,
        },
      });

      // ============================================
      // SCORE SCOPE TEST (testScore=1)
      // ============================================
      if (testScore) {
        // Step 9: Request token with SCORE scope
        const scoreTokenBody = new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: platformConfig.clientId,
          client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
          client_assertion: clientAssertion,
          scope: 'https://purl.imsglobal.org/spec/lti-ags/scope/score',
        });

        steps.push({
          step: '9_score_token_request',
          status: 'info',
          data: { scope: 'https://purl.imsglobal.org/spec/lti-ags/scope/score' },
        });

        let scoreTokenData;
        try {
          const scoreTokenRes = await fetch(platformConfig.tokenEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: scoreTokenBody.toString(),
          });
          const scoreTokenText = await scoreTokenRes.text();
          try { scoreTokenData = JSON.parse(scoreTokenText); } catch { scoreTokenData = scoreTokenText; }

          steps.push({
            step: '10_score_token_response',
            status: scoreTokenRes.ok ? 'ok' : 'error',
            data: {
              httpStatus: scoreTokenRes.status,
              grantedScope: scoreTokenData?.scope,
              hasToken: !!scoreTokenData?.access_token,
              body: scoreTokenData,
            },
          });

          if (scoreTokenRes.ok && scoreTokenData?.access_token) {
            const scoreAccessToken = scoreTokenData.access_token;

            // Determine the scores URL from the line item
            const lineItemId = liData?.id || `https://courses.luxuptraining.com/mod/lti/services.php/3/lineitems/4/lineitem?type_id=1`;
            const [path, query] = lineItemId.split('?');
            const basePath = path.endsWith('/') ? path.slice(0, -1) : path;
            const scoresUrl = query ? `${basePath}/scores?${query}` : `${basePath}/scores`;

            const scorePayload = {
              scoreGiven: 85,
              scoreMaximum: 100,
              userId: 'https://courses.luxuptraining.com:3',
              activityProgress: 'Completed',
              gradingProgress: 'FullyGraded',
              timestamp: new Date().toISOString(),
            };

            steps.push({
              step: '11_score_post_attempt',
              status: 'info',
              data: {
                url: scoresUrl,
                payload: scorePayload,
                tokenScope: scoreTokenData.scope,
              },
            });

            // Try multiple content type variations
            const contentTypes = [
              'application/vnd.ims.lis.v2.score+json',
              'application/json',
            ];

            for (const ct of contentTypes) {
              try {
                const scoreRes = await fetch(scoresUrl, {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${scoreAccessToken}`,
                    'Content-Type': ct,
                    'Accept': ct,
                  },
                  body: JSON.stringify(scorePayload),
                });

                const scoreText = await scoreRes.text();
                let scoreData;
                try { scoreData = JSON.parse(scoreText); } catch { scoreData = scoreText; }

                steps.push({
                  step: `12_score_response_${ct.split('/').pop()}`,
                  status: scoreRes.ok ? 'ok' : 'error',
                  data: {
                    httpStatus: scoreRes.status,
                    contentType: ct,
                    body: scoreData,
                  },
                });

                if (scoreRes.ok) break; // Stop if one works
              } catch (err) {
                steps.push({
                  step: `12_score_error_${ct.split('/').pop()}`,
                  status: 'error',
                  detail: err instanceof Error ? err.message : 'Unknown error',
                });
              }
            }
          }
        } catch (err) {
          steps.push({
            step: 'score_token_error',
            status: 'error',
            detail: err instanceof Error ? err.message : 'Unknown error',
          });
        }
      }

    } catch (err) {
      steps.push({
        step: 'token_or_lineitem_error',
        status: 'error',
        detail: err instanceof Error ? err.message : 'Unknown error',
      });
    }

    return NextResponse.json({ steps });
  } catch (error) {
    return NextResponse.json({
      steps,
      fatal: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
