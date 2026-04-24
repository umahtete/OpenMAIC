/**
 * Deep Linking Endpoint
 * Handles content selection from Moodle
 */

import { NextRequest, NextResponse } from 'next/server';
import { createDeepLinkingResponseJWT } from '@/lib/lti/deep-linking';

/**
 * POST /api/lti/deep-link
 * Creates a deep linking response JWT and returns it for client-side form submission
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content_item, deep_link_return_url, deep_linking_settings_data, deployment_id } = body;

    if (!content_item || !deep_link_return_url || !deployment_id) {
      return NextResponse.json(
        { error: 'Missing required parameters: content_item, deep_link_return_url, deployment_id' },
        { status: 400 }
      );
    }

    const settings = {
      deep_link_return_url,
      accept_types: ['ltiResourceLink'],
      data: deep_linking_settings_data,
    };

    const contentItems = [
      {
        type: content_item.type || 'ltiResourceLink',
        title: content_item.title,
        url: content_item.url,
        text: content_item.text,
        custom: content_item.custom,
      },
    ];

    const jwt = await createDeepLinkingResponseJWT(
      settings,
      contentItems,
      deployment_id
    );

    return NextResponse.json({
      success: true,
      jwt,
      return_url: deep_link_return_url,
    });
  } catch (error) {
    console.error('[Deep Linking] Error:', error);
    return NextResponse.json(
      { error: 'Failed to create deep linking response', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
