/**
 * Grade Passback Service
 * Sends grades back to Moodle via LTI AGS (Assignment and Grade Services)
 */

import { GradePayload, GradePassbackResult, LineItem } from './types';
import { LTISessionData } from '@/lib/lti/provider';
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
 * Submit a grade to the LMS
 */
export async function submitGrade(
  sessionData: LTISessionData,
  grade: GradePayload
): Promise<GradePassbackResult> {
  try {
    if (!sessionData.resourceLinkId) {
      return {
        success: false,
        error: 'AGS endpoint not available for this session',
      };
    }

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

    console.log('[Grade Passback] Grade submitted:', {
      userId: sessionData.userId,
      score: `${grade.scoreGiven}/${grade.scoreMaximum}`,
      progress: grade.activityProgress,
      gradeId: gradeRecord.id,
    });

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
 * Create a line item for grading
 */
export async function createLineItem(
  sessionData: LTISessionData,
  label: string,
  scoreMaximum: number = 100
): Promise<LineItem> {
  const lineItem = await createLineItemRecord({
    contextId: sessionData.contextId,
    label,
    resourceId: sessionData.resourceLinkId,
    resourceLinkId: sessionData.resourceLinkId,
    scoreMaximum,
  });

  return {
    id: lineItem.id,
    scoreMaximum: lineItem.scoreMaximum,
    label: lineItem.label,
    resourceId: lineItem.resourceId ?? undefined,
    resourceLinkId: lineItem.resourceLinkId ?? undefined,
  };
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
