import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyLTISession } from '@/lib/lti/provider';
import { submitGrade, submitGradeToMoodle } from '@/lib/grades/service';
import { getScoresUrlForResourceLink, getLineItemsByResourceLinkIdFromDb } from '@/lib/lti/stores/line-item-store';
import prisma from '@/lib/db';
import { GradePayload } from '@/lib/grades/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Support two modes:
    // 1. Session-based: uses cookie session for userId and resourceLinkId
    // 2. Direct: uses body params (resourceLinkId, userId as platform sub)
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('openmaic_lti_session');
    let platformUserId: string;
    let resourceLinkId: string;

    if (sessionToken) {
      // Session-based mode
      const session = await verifyLTISession(sessionToken.value);
      if (!session) {
        return NextResponse.json(
          { error: 'Invalid or expired session' },
          { status: 401 }
        );
      }
      platformUserId = session.userId;
      resourceLinkId = session.resourceLinkId || body.resourceLinkId;
    } else if (body.resourceLinkId && body.userId) {
      // Direct mode — userId is the platform sub (e.g. "https://courses.luxuptraining.com:3")
      platformUserId = body.userId;
      resourceLinkId = body.resourceLinkId;
    } else {
      return NextResponse.json(
        { error: 'No LTI session found and missing resourceLinkId/userId in body' },
        { status: 401 }
      );
    }

    // Resolve platform user ID to database user ID
    const ltiUser = await prisma.ltiUser.findFirst({
      where: { sub: platformUserId },
      select: { id: true },
    });

    if (!ltiUser) {
      return NextResponse.json(
        { error: 'LTI user not found in database', details: { platformUserId } },
        { status: 400 }
      );
    }

    const grade: GradePayload = {
      scoreGiven: body.score ?? body.scoreGiven,
      scoreMaximum: body.scoreMaximum || 100,
      activityProgress: body.activityProgress || 'Completed',
      gradingProgress: body.gradingProgress || 'FullyGraded',
      timestamp: new Date().toISOString(),
      userId: ltiUser.id,
      comment: body.comment,
    };

    const scoresUrl = await getScoresUrlForResourceLink(resourceLinkId);

    // Look up the line item record to get contextId for the session data
    const lineItemRecord = await getLineItemsByResourceLinkIdFromDb(resourceLinkId);
    const contextId = lineItemRecord?.contextId || body.contextId || 'unknown';

    let result;
    if (scoresUrl) {
      console.log('[Grades API] Found stored scores URL for resource link:', resourceLinkId, '| contextId:', contextId);
      result = await submitGradeToMoodle(
        scoresUrl,
        { userId: platformUserId, resourceLinkId, contextId } as any,
        grade,
        platformUserId,
      );
    } else {
      console.log('[Grades API] No stored scores URL, storing locally only');
      result = await submitGrade({ userId: platformUserId, resourceLinkId, contextId } as any, grade);
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        lineItemId: result.lineItemId,
        scoresUrl,
        grade,
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
