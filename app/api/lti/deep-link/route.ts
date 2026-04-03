/**
 * Deep Linking Endpoint
 * Handles content selection from Moodle
 */

import { NextRequest, NextResponse } from 'next/server';
import { createDeepLinkingResponse, getAvailableContentItems } from '@/lib/deep-linking/service';

/**
 * GET /api/lti/deep-link
 * Returns available content items for selection
 */
export async function GET(request: NextRequest) {
  const contentItems = getAvailableContentItems();
  
  return NextResponse.json({
    success: true,
    content_items: contentItems,
  });
}

/**
 * POST /api/lti/deep-link
 * Submits selected content items back to Moodle
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content_items, deep_linking_settings, deployment_id } = body;
    
    if (!content_items || !deep_linking_settings || !deployment_id) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }
    
    const jwt = await createDeepLinkingResponse(
      content_items,
      deep_linking_settings,
      deployment_id
    );
    
    return NextResponse.json({
      success: true,
      jwt,
    });
  } catch (error) {
    console.error('[Deep Linking] Error:', error);
    return NextResponse.json(
      { error: 'Failed to create deep linking response', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
