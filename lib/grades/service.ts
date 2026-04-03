/**
 * Grade Passback Service
 * Sends grades back to Moodle via LTI AGS (Assignment and Grade Services)
 */

import { GradePayload, GradePassbackResult, LineItem } from './types';
import { LTISessionData } from '@/lib/lti/provider';

/**
 * In-memory grade store (replace with database in production)
 */
const gradeStore: Map<string, GradePayload> = new Map();
const lineItemStore: Map<string, LineItem> = new Map();

/**
 * Submit a grade to Moodle
 */
export async function submitGrade(
  sessionData: LTISessionData,
  grade: GradePayload
): Promise<GradePassbackResult> {
  try {
    // Check if AGS endpoint is available in the session
    const agsEndpoint = sessionData.resourceLinkId; // This would be the AGS line item URL
    
    if (!agsEndpoint) {
      return {
        success: false,
        error: 'AGS endpoint not available for this session',
      };
    }
    
    // In production, this would make an HTTP POST to the AGS endpoint
    // For now, we store the grade locally
    const gradeId = `${sessionData.userId}:${sessionData.contextId}:${Date.now()}`;
    gradeStore.set(gradeId, grade);
    
    console.log('[Grade Passback] Grade submitted:', {
      userId: sessionData.userId,
      score: `${grade.scoreGiven}/${grade.scoreMaximum}`,
      progress: grade.activityProgress,
    });
    
    return {
      success: true,
      lineItemId: gradeId,
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
  const lineItemId = `${sessionData.contextId}:${label}`;
  
  const lineItem: LineItem = {
    id: lineItemId,
    scoreMaximum,
    label,
    resourceId: sessionData.resourceLinkId,
  };
  
  lineItemStore.set(lineItemId, lineItem);
  
  return lineItem;
}

/**
 * Get all grades for a user
 */
export async function getGradesForUser(userId: string): Promise<GradePayload[]> {
  const grades: GradePayload[] = [];
  
  for (const [id, grade] of gradeStore.entries()) {
    if (id.startsWith(userId)) {
      grades.push(grade);
    }
  }
  
  return grades;
}

/**
 * Get all line items for a context
 */
export async function getLineItemsForContext(contextId: string): Promise<LineItem[]> {
  const lineItems: LineItem[] = [];
  
  for (const [id, item] of lineItemStore.entries()) {
    if (id.startsWith(contextId)) {
      lineItems.push(item);
    }
  }
  
  return lineItems;
}
