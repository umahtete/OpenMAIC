/**
 * Grade Passback Types
 */

export interface GradePayload {
  scoreGiven: number;
  scoreMaximum: number;
  activityProgress: 'Initialized' | 'Started' | 'InProgress' | 'Submitted' | 'Completed';
  gradingProgress: 'NotReady' | 'Failed' | 'Pending' | 'PendingManual' | 'FullyGraded';
  timestamp: string;
  userId: string;
  comment?: string;
}

export interface GradePassbackResult {
  success: boolean;
  error?: string;
  lineItemId?: string;
}

export interface LineItem {
  id: string;
  scoreMaximum: number;
  label?: string;
  resourceId?: string;
  resourceLinkId?: string;
}
