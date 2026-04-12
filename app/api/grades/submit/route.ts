import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyLTISession } from '@/lib/lti/provider';
import { submitGrade, submitGradeToMoodle } from '@/lib/grades/service';
import { getScoresUrlForResourceLink } from '@/lib/lti/stores/line-item-store';
import { GradePayload } from '@/lib/grades/types';

/**
 * POST /api/grades/submit
 * Submit a grade to Moodle via AGS, with local fallback
 */
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('openmaic_lti_session');

    if (!sessionToken) {
      return NextResponse.json(
        { error: 'No LTI session found' },
        { status: 401 }
      );
    }

    const session = await verifyLTISession(sessionToken.value);
    if (!session) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }

    const body = await request.json();

    const grade: GradePayload = {
      scoreGiven: body.scoreGiven,
      scoreMaximum: body.scoreMaximum || 100,
      activityProgress: body.activityProgress || 'Completed',
      gradingProgress: body.gradingProgress || 'FullyGraded',
      timestamp: new Date().toISOString(),
      userId: session.userId,
      comment: body.comment,
    };

    let result;

    if (session.resourceLinkId) {
      const scoresUrl = await getScoresUrlForResourceLink(session.resourceLinkId);

      if (scoresUrl) {
        console.log('[Grades API] Found stored scores URL for resource link:', session.resourceLinkId);
        result = await submitGradeToMoodle(scoresUrl, session, grade);
      } else {
        console.log('[Grades API] No stored scores URL for resource link, storing locally only');
        result = await submitGrade(session, grade);
      }
    } else {
      console.log('[Grades API] No resourceLinkId in session, storing locally only');
      result = await submitGrade(session, grade);
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        lineItemId: result.lineItemId,
      });
    } else {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('[Grades API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit grade', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
