/**
 * Grade Passback Service
 * Sends grades back to Moodle via LTI AGS (Assignment and Grade Services)
 */

import { SignJWT } from 'jose';
import { GradePayload, GradePassbackResult, LineItem } from './types';
import { LTISessionData } from '@/lib/lti/provider';
import { getLTIPlatformConfig } from '@/lib/lti/config';
import { getPrivateKey, getKeyId } from '@/lib/lti/keys';
import {
  createGrade,
  getGradesByUserId,
  type ActivityProgress,
  type GradingProgress,
} from '@/lib/lti/stores/grade-store';
import {
  createLineItem as createLineItemRecord,
  getLineItemsForContextFromDb,
} from '@/lib/lti/stores/line-item-store';

export type { ActivityProgress, GradingProgress };

/**
 * Get OAuth2 access token from Moodle for AGS API calls.
 * Uses JWT assertion authentication (LTI 1.3 standard) — signs a JWT with
 * the tool's Ed25519 private key and sends it as client_assertion.
 */
async function getAccessToken(scope: string): Promise<string> {
  const platformConfig = getLTIPlatformConfig();
  const privateKey = await getPrivateKey();
  const kid = await getKeyId();
  const now = Math.floor(Date.now() / 1000);

  // Build the client_assertion JWT per RFC 7523 / LTI 1.3
  const clientAssertion = await new SignJWT({
    iss: platformConfig.clientId,
    sub: platformConfig.clientId,
    aud: platformConfig.tokenEndpoint,
    jti: crypto.randomUUID(),
  })
    .setProtectedHeader({ alg: 'EdDSA', kid })
    .setIssuedAt(now)
    .setExpirationTime(now + 60) // 60 seconds
    .sign(privateKey);

  const response = await fetch(platformConfig.tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: platformConfig.clientId,
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      client_assertion: clientAssertion,
      scope,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get access token: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Create a line item on Moodle via AGS, then store the scores URL.
 * Called during LTI launch when Moodle provides a lineItems container URL
 * but no individual line item.
 */
export async function ensureLineItem(
  lineItemsUrl: string,
  contextId: string,
  resourceLinkId: string,
  label: string,
): Promise<string | null> {
  const { getLineItemsByResourceLinkIdFromDb, upsertAgsEndpoints } = await import('@/lib/lti/stores/line-item-store');

  const existing = await getLineItemsByResourceLinkIdFromDb(resourceLinkId);
  if (existing?.scoresUrl) {
    return existing.scoresUrl;
  }

  try {
    const accessToken = await getAccessToken('https://purl.imsglobal.org/spec/lti-ags/scope/lineitem');

    // Step 1: GET existing line items — Moodle auto-creates grade items for LTI activities
    const getRes = await fetch(lineItemsUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.ims.lis.v2.lineitemcontainer+json, application/vnd.ims.lis.v1.lineitemcontainer+json, application/json',
      },
    });

    if (getRes.ok) {
      const items = await getRes.json();
      if (Array.isArray(items) && items.length > 0) {
        const lineItemUrl = items[0].id;
        const scoresUrl = lineItemUrl.endsWith('/') ? `${lineItemUrl}scores` : `${lineItemUrl}/scores`;

        await upsertAgsEndpoints(contextId, resourceLinkId, {
          lineItems: lineItemsUrl,
          lineItem: lineItemUrl,
          scores: scoresUrl,
        }, label);

        console.log('[AGS] Using existing line item:', { lineItemUrl, scoresUrl });
        return scoresUrl;
      }
    }

    // Step 2: Try creating with different content types (Moodle versions vary)
    const contentTypes = [
      'application/vnd.ims.lis.v2.lineitem+json',
      'application/vnd.ims.lis.v1.lineitem+json',
      'application/json',
    ];

    for (const ct of contentTypes) {
      const response = await fetch(lineItemsUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': ct,
          'Accept': ct,
        },
        body: JSON.stringify({
          scoreMaximum: 100,
          label: label || 'LuxUp AI Tutor',
          resourceId: resourceLinkId,
          tag: 'luxup',
        }),
      });

      if (response.ok) {
        const lineItem = await response.json();
        const lineItemUrl = lineItem.id;
        const scoresUrl = lineItemUrl.endsWith('/') ? `${lineItemUrl}scores` : `${lineItemUrl}/scores`;

        await upsertAgsEndpoints(contextId, resourceLinkId, {
          lineItems: lineItemsUrl,
          lineItem: lineItemUrl,
          scores: scoresUrl,
        }, label);

        console.log('[AGS] Created line item:', { lineItemUrl, scoresUrl, contentType: ct });
        return scoresUrl;
      }

      const errorText = await response.text();
      console.warn(`[AGS] POST with ${ct} failed:`, response.status, errorText);
    }

    console.error('[AGS] All content types failed for line item creation');
    return null;
  } catch (error) {
    console.error('[AGS] Error creating line item:', error);
    return null;
  }
}

/**
 * Submit a score to Moodle's AGS endpoint
 */
async function submitScoreToMoodle(
  accessToken: string,
  scoresEndpoint: string,
  score: number,
  scoreMaximum: number,
  userId: string,
  activityProgress: string,
  gradingProgress: string,
  timestamp: string,
  comment?: string
): Promise<void> {
  const response = await fetch(scoresEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/vnd.ims.lis.v2.score+json',
    },
    body: JSON.stringify({
      scoreGiven: score,
      scoreMaximum: scoreMaximum,
      userId: userId,
      activityProgress: activityProgress,
      gradingProgress: gradingProgress,
      timestamp: timestamp,
      ...(comment && { comment }),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to submit score to Moodle: ${response.status} - ${errorText}`);
  }
}

/**
 * Submit a grade to the LMS
 */
export async function submitGrade(
  sessionData: LTISessionData,
  grade: GradePayload
): Promise<GradePassbackResult> {
  try {
    // Store grade locally first
    const gradeRecord = await createGrade({
      userId: sessionData.userId,
      contextId: sessionData.contextId,
      resourceLinkId: sessionData.resourceLinkId,
      score: grade.scoreGiven,
      scoreMaximum: grade.scoreMaximum,
      activityProgress: grade.activityProgress,
      gradingProgress: grade.gradingProgress,
      timestamp: new Date(grade.timestamp),
    });

    console.log('[Grade Passback] Grade stored locally:', {
      userId: sessionData.userId,
      score: `${grade.scoreGiven}/${grade.scoreMaximum}`,
      progress: grade.activityProgress,
      gradeId: gradeRecord.id,
    });

    // Try to sync to Moodle if AGS endpoint is available
    // Note: This requires the AGS endpoint URL from the LTI launch
    // For now, we store locally and return success
    // TODO: Implement full AGS sync when endpoint URLs are available in session

    return {
      success: true,
      lineItemId: gradeRecord.id,
    };
  } catch (error) {
    console.error('[Grade Passback] Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit a grade directly to Moodle's AGS endpoint
 * Use this when you have the AGS endpoint URL from the LTI launch
 */
export async function submitGradeToMoodle(
  scoresEndpoint: string,
  sessionData: LTISessionData,
  grade: GradePayload,
  platformUserId?: string
): Promise<GradePassbackResult> {
  try {
    // Get access token
    const accessToken = await getAccessToken('https://purl.imsglobal.org/spec/lti-ags/scope/score');
    
    // Submit to Moodle — use platform user ID (sub) for AGS, database ID for local storage
    const agsUserId = platformUserId || sessionData.userId;
    await submitScoreToMoodle(
      accessToken,
      scoresEndpoint,
      grade.scoreGiven,
      grade.scoreMaximum,
      agsUserId,
      grade.activityProgress,
      grade.gradingProgress,
      grade.timestamp,
      grade.comment
    );

    // Also store locally for record keeping
    const gradeRecord = await createGrade({
      userId: sessionData.userId,
      contextId: sessionData.contextId,
      resourceLinkId: sessionData.resourceLinkId,
      score: grade.scoreGiven,
      scoreMaximum: grade.scoreMaximum,
      activityProgress: grade.activityProgress,
      gradingProgress: grade.gradingProgress,
      timestamp: new Date(grade.timestamp),
      submitted: true,
      submittedAt: new Date(),
    });

    console.log('[Grade Passback] Grade synced to Moodle:', {
      userId: sessionData.userId,
      score: `${grade.scoreGiven}/${grade.scoreMaximum}`,
      gradeId: gradeRecord.id,
    });

    return {
      success: true,
      lineItemId: gradeRecord.id,
    };
  } catch (error) {
    console.error('[Grade Passback] Error syncing to Moodle:', error);
    
    // Still store locally even if Moodle sync fails
    try {
      await createGrade({
        userId: sessionData.userId,
        contextId: sessionData.contextId,
        resourceLinkId: sessionData.resourceLinkId,
        score: grade.scoreGiven,
        scoreMaximum: grade.scoreMaximum,
        activityProgress: grade.activityProgress,
        gradingProgress: grade.gradingProgress,
        timestamp: new Date(grade.timestamp),
        submitted: false,
      });
    } catch (storeError) {
      console.error('[Grade Passback] Failed to store grade locally:', storeError);
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get all grades for a user
 */
export async function getGradesForUser(userId: string): Promise<GradePayload[]> {
  const grades = await getGradesByUserId(userId);

  return grades.map((grade) => ({
    scoreGiven: grade.score,
    scoreMaximum: grade.scoreMaximum,
    activityProgress: grade.activityProgress as ActivityProgress,
    gradingProgress: grade.gradingProgress as GradingProgress,
    timestamp: grade.timestamp.toISOString(),
    userId: grade.userId,
  }));
}

/**
 * Get all line items for a context
 */
export async function getLineItems(contextId: string): Promise<LineItem[]> {
  const lineItems = await getLineItemsForContextFromDb(contextId);

  return lineItems.map((item) => ({
    id: item.id,
    scoreMaximum: item.scoreMaximum,
    label: item.label,
    resourceId: item.resourceId ?? undefined,
    resourceLinkId: item.resourceLinkId ?? undefined,
  }));
}
