import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [
      lineItems,
      grades,
      users,
      sessions,
    ] = await Promise.all([
      prisma.ltiLineItem.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20,
      }),
      prisma.ltiGrade.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20,
      }),
      prisma.ltiUser.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20,
        select: {
          id: true,
          sub: true,
          platformId: true,
          email: true,
          name: true,
          roles: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.ltiSession.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
          id: true,
          userId: true,
          platformId: true,
          contextId: true,
          contextLabel: true,
          contextTitle: true,
          resourceLinkId: true,
          resourceLinkTitle: true,
          createdAt: true,
          expiresAt: true,
        },
      }),
    ]);

    return NextResponse.json({
      lineItems,
      grades,
      users,
      sessions,
      summary: {
        lineItemCount: lineItems.length,
        gradeCount: grades.length,
        userCount: users.length,
        lineItemsWithScoresUrl: lineItems.filter(li => li.scoresUrl).length,
        lineItemsWithoutScoresUrl: lineItems.filter(li => !li.scoresUrl).length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
