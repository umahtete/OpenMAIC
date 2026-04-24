// LTI 1.3 OIDC Login Initiation Endpoint
// This endpoint initiates the OIDC authentication flow

import { NextRequest, NextResponse } from 'next/server';
import { 
  getLTIPlatformConfig, 
  getLTIToolConfig, 
  validateLTIConfig,
  LTI_CONFIG 
} from '@/lib/lti/config';
import { generateState, generateNonce, storeState } from '@/lib/lti/provider';

/**
 * GET /api/lti/login
 * Initiates the OIDC login flow for LTI 1.3
 * 
 * This endpoint is called by the platform (Moodle) to start the LTI launch.
 * It redirects to the platform's authentication endpoint with the necessary parameters.
 */
export async function GET(request: NextRequest) {
  try {
    // Validate configuration
    const config = validateLTIConfig();
    if (!config.valid) {
      console.error('LTI configuration missing:', config.missing);
      return NextResponse.json(
        { error: 'LTI not configured', missing: config.missing },
        { status: 500 }
      );
    }

    const platform = getLTIPlatformConfig();
    const tool = getLTIToolConfig();

    // Get parameters from query string (from LTI launch)
    const searchParams = request.nextUrl.searchParams;
    const iss = searchParams.get('iss');
    const loginHint = searchParams.get('login_hint');
    const targetLinkUri = searchParams.get('target_link_uri');
    const ltiMessageHint = searchParams.get('lti_message_hint');
    const clientId = searchParams.get('client_id');

    console.log('[LTI] OIDC login initiation received:', {
      iss,
      loginHint: loginHint?.substring(0, 20),
      targetLinkUri,
      ltiMessageHint: ltiMessageHint?.substring(0, 100),
      isDeepLinkingHint: ltiMessageHint?.includes('ContentItemSelectionRequest') ?? false,
      hasCmid: ltiMessageHint?.includes('cmid') ?? false,
      clientId,
    });

    // Detect deep linking from the lti_message_hint
    // Moodle's contentitem.php sends: {"launchid":"ltilaunch_ContentItemSelectionRequest..."}
    // Regular launch sends: {"cmid":5,"launchid":"ltilaunch1_..."}
    const isDeepLinking = ltiMessageHint?.includes('ContentItemSelectionRequest') ?? false;

    // Validate required parameters
    if (!loginHint) {
      return NextResponse.json(
        { error: 'Missing login_hint parameter' },
        { status: 400 }
      );
    }

    // Verify the issuer matches our configured platform
    if (iss && iss !== platform.issuer) {
      console.warn(`Issuer mismatch: expected ${platform.issuer}, got ${iss}`);
    }

    // Generate state and nonce for security
    const state = generateState();
    const nonce = generateNonce();

    // Store state with nonce for verification in callback
    // Also store whether this is a deep linking request (detected from lti_message_hint)
    await storeState(state, nonce, isDeepLinking, ltiMessageHint || null);

    console.log('[LTI] Stored state:', {
      state: state.substring(0, 8) + '...',
      isDeepLinking,
    });

    // Build the authentication request URL
    const authParams = new URLSearchParams({
      scope: LTI_CONFIG.oidc.scope,
      response_type: LTI_CONFIG.oidc.responseType,
      response_mode: LTI_CONFIG.oidc.responseMode,
      client_id: clientId || platform.clientId,
      redirect_uri: `${tool.url}/api/lti/launch`,
      login_hint: loginHint,
      state: state,
      nonce: nonce,
      prompt: 'none',
    });

    // Add lti_message_hint if provided
    if (ltiMessageHint) {
      authParams.append('lti_message_hint', ltiMessageHint);
    }

    // Redirect to platform's authentication endpoint
    const authUrl = `${platform.authEndpoint}?${authParams.toString()}`;

    console.log('[LTI] Initiating OIDC login:', {
      state,
      platform: platform.issuer,
      authEndpoint: platform.authEndpoint,
    });

    return NextResponse.redirect(authUrl);
  } catch (error) {
    console.error('[LTI] Login initiation failed:', error);
    return NextResponse.json(
      { error: 'Login initiation failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/lti/login
 * Alternative entry point for platforms that use POST for login initiation
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Convert FormData to URLSearchParams for GET handler
    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      searchParams.append(key, value.toString());
    });

    // Create a new request with the form data as query params
    const url = new URL(request.url);
    searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    const newRequest = new NextRequest(url, {
      method: 'GET',
      headers: request.headers,
    });

    return GET(newRequest);
  } catch (error) {
    console.error('[LTI] POST login failed:', error);
    return NextResponse.json(
      { error: 'Login failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
