import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyLTISession } from '@/lib/lti/provider';
import { submitGrade, submitGradeToMoodle } from '@/lib/grades/service';
import { getScoresUrlForResourceLink } from '@/lib/lti/stores/line-item-store';
import prisma from '@/lib/db';
import { GradePayload } from '@/lib/grades/types';

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

    // Resolve platform user ID to database user ID
    const ltiUser = await prisma.ltiUser.findFirst({
      where: { sub: session.userId },
      select: { id: true },
    });

    if (!ltiUser) {
      return NextResponse.json(
        { error: 'LTI user not found in database. User may not have been provisioned.' },
        { status: 400 }
      );
    }

    // Override session userId with the database CUID for grade storage
    const resolvedSession = { ...session, userId: ltiUser.id };

    const body = await request.json();

    const grade: GradePayload = {
      scoreGiven: body.scoreGiven,
      scoreMaximum: body.scoreMaximum || 100,
      activityProgress: body.activityProgress || 'Completed',
      gradingProgress: body.gradingProgress || 'FullyGraded',
      timestamp: new Date().toISOString(),
      userId: ltiUser.id,
      comment: body.comment,
    };

    let result;

    if (resolvedSession.resourceLinkId) {
      const scoresUrl = await getScoresUrlForResourceLink(resolvedSession.resourceLinkId);

      if (scoresUrl) {
        console.log('[Grades API] Found stored scores URL for resource link:', resolvedSession.resourceLinkId);
        result = await submitGradeToMoodle(scoresUrl, resolvedSession, grade, session.userId);
      } else {
        console.log('[Grades API] No stored scores URL for resource link, storing locally only');
        result = await submitGrade(resolvedSession, grade);
      }
    } else {
      console.log('[Grades API] No resourceLinkId in session, storing locally only');
      result = await submitGrade(resolvedSession, grade);
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
