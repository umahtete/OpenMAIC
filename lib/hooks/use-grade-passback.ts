'use client';

import { useCallback, useRef } from 'react';
import { createLogger } from '@/lib/logger';

const log = createLogger('GradePassback');

interface GradeSubmission {
  scoreGiven: number;
  scoreMaximum: number;
  activityProgress?: string;
  gradingProgress?: string;
  comment?: string;
}

export function useGradePassback() {
  const submittedRef = useRef<Set<string>>(new Set());

  const submitGrade = useCallback(async (
    sceneId: string,
    submission: GradeSubmission,
  ) => {
    if (submittedRef.current.has(sceneId)) {
      log.debug('Already submitted grade for scene:', sceneId);
      return;
    }

    try {
      const res = await fetch('/api/grades/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scoreGiven: submission.scoreGiven,
          scoreMaximum: submission.scoreMaximum,
          activityProgress: submission.activityProgress || 'Completed',
          gradingProgress: submission.gradingProgress || 'FullyGraded',
          comment: submission.comment,
        }),
      });

      if (res.ok) {
        submittedRef.current.add(sceneId);
        log.info('Grade submitted for scene:', sceneId, submission.scoreGiven + '/' + submission.scoreMaximum);
      } else {
        const data = await res.json().catch(() => ({}));
        if (res.status === 401) {
          log.debug('No LTI session — grade passback skipped (not launched via LTI)');
        } else {
          log.warn('Grade submission failed:', res.status, data.error || data.message);
        }
      }
    } catch (err) {
      log.warn('Grade submission error:', err);
    }
  }, []);

  const submitProgress = useCallback(async (
    sceneId: string,
    progress: number,
  ) => {
    try {
      const res = await fetch('/api/grades/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scoreGiven: progress,
          scoreMaximum: 100,
          activityProgress: 'InProgress',
          gradingProgress: 'Pending',
          comment: `Scene progress: ${progress}%`,
        }),
      });

      if (res.ok) {
        log.debug('Progress submitted for scene:', sceneId);
      }
    } catch (err) {
      log.debug('Progress submission skipped:', err);
    }
  }, []);

  return { submitGrade, submitProgress };
}
