import { NextRequest, NextResponse } from 'next/server';
import { ensureLineItem } from '@/lib/grades/service';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const resourceLinkId = body.resourceLinkId;

    if (!resourceLinkId) {
      return NextResponse.json({ error: 'resourceLinkId is required' }, { status: 400 });
    }

    const lineItem = await prisma.ltiLineItem.findFirst({
      where: { resourceLinkId },
    });

    if (!lineItem) {
      return NextResponse.json({ error: 'No line item record found for this resourceLinkId' }, { status: 404 });
    }

    if (lineItem.scoresUrl) {
      return NextResponse.json({
        message: 'Line item already has scoresUrl',
        scoresUrl: lineItem.scoresUrl,
        lineItemUrl: lineItem.lineItemUrl,
      });
    }

    if (!lineItem.lineItemsUrl) {
      return NextResponse.json({ error: 'No lineItemsUrl stored' }, { status: 400 });
    }

    const scoresUrl = await ensureLineItem(
      lineItem.lineItemsUrl,
      lineItem.contextId,
      resourceLinkId,
      lineItem.label || 'LuxUp AI Tutor',
    );

    if (scoresUrl) {
      return NextResponse.json({
        success: true,
        scoresUrl,
        message: 'Line item created on Moodle and scoresUrl stored',
      });
    } else {
      return NextResponse.json({
        success: false,
        error: 'ensureLineItem() returned null. Check server logs for OAuth2 or AGS errors.',
        lineItemsUrl: lineItem.lineItemsUrl,
      }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
}
