/**
 * Grade Passback Service
 * Sends grades back to Moodle via LTI AGS (Assignment and Grade Services)
 */

import { GradePayload, GradePassbackResult, LineItem } from './types';
import { LTISessionData } from '@/lib/lti/provider';
import { getLTIPlatformConfig } from '@/lib/lti/config';
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
 * Get OAuth2 access token from Moodle for AGS API calls
 */
async function getAccessToken(): Promise<string> {
  const platformConfig = getLTIPlatformConfig();
  
  const response = await fetch(platformConfig.tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: platformConfig.clientId,
      client_secret: process.env.LTI_CLIENT_SECRET || '',
      scope: 'https://purl.imsglobal.org/spec/lti-ags/scope/score',
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
      'Content-Type': 'application/vnd.ims.lis.v1.score+json',
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
  grade: GradePayload
): Promise<GradePassbackResult> {
  try {
    // Get access token
    const accessToken = await getAccessToken();
    
    // Submit to Moodle
    await submitScoreToMoodle(
      accessToken,
      scoresEndpoint,
      grade.scoreGiven,
      grade.scoreMaximum,
      sessionData.userId,
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
