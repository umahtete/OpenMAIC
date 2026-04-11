// LTI 1.3 Launch Endpoint
// This endpoint receives the id_token from the platform after OIDC authentication

import { NextRequest, NextResponse } from 'next/server';
import { 
  verifyLTIToken, 
  extractLaunchContext, 
  mapMoodleRoleToLuxUpRole,
  getAndDeleteState,
  createLTISession,
  LTISessionData
} from '@/lib/lti/provider';
import { LTI_CONFIG } from '@/lib/lti/config';

/**
 * Return an HTML error page that can be displayed inside Moodle's iframe.
 * JSON responses show as "undefined" in Moodle's modal.
 */
function htmlError(title: string, message: string, status: number = 500): NextResponse {
  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>${title}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8f9fa; color: #1e3a5f; }
  .error-card { background: white; border-radius: 12px; padding: 2rem; max-width: 480px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
  .error-card h2 { margin: 0 0 0.5rem; color: #dc2626; }
  .error-card p { margin: 0 0 1rem; color: #64748b; font-size: 0.9rem; }
  .error-card code { background: #f1f5f9; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem; }
</style>
</head>
<body>
  <div class="error-card">
    <h2>${title}</h2>
    <p>${message}</p>
  </div>
</body>
</html>`;
  return new NextResponse(html, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

/**
 * POST /api/lti/launch
 * Handles the LTI 1.3 launch after OIDC authentication
 * 
 * This endpoint receives the id_token from Moodle and:
 * 1. Validates the token
 * 2. Extracts user context
 * 3. Creates a session
 * 4. Redirects to the appropriate content
 */
export async function POST(request: NextRequest) {
  console.log('[LTI] Launch request received from:', request.headers.get('origin') || 'unknown');

  try {
    const formData = await request.formData();
    const idToken = formData.get('id_token')?.toString();
    const state = formData.get('state')?.toString();

    // Validate required parameters
    if (!idToken) {
      console.error('[LTI] Missing id_token in launch request');
      return htmlError('Missing Token', 'No id_token was received from the platform. Please try launching again.', 400);
    }

    if (!state) {
      console.error('[LTI] Missing state in launch request');
      return htmlError('Missing State', 'No state parameter was received. The session may have expired.', 400);
    }

    // Verify state and get nonce
    console.log('[LTI] Verifying state:', state.substring(0, 8) + '...');
    const stateData = await getAndDeleteState(state);
    if (!stateData) {
      console.error('[LTI] State not found or expired:', state.substring(0, 8) + '...');
      return htmlError('Invalid or Expired Session', 'The login session has expired or is invalid. Please close this window and try again.', 400);
    }

    // Verify the LTI token
    let jwtPayload;
    try {
      jwtPayload = await verifyLTIToken(idToken);
      console.log('[LTI] Token verified successfully. Message type:', jwtPayload['https://purl.imsglobal.org/spec/lti/claim/message_type']);
    } catch (error) {
      console.error('[LTI] Token verification failed:', error);
      const msg = error instanceof Error ? error.message : 'Unknown error';
      return htmlError('Token Verification Failed', msg, 401);
    }

    // Verify nonce matches the one stored during login initiation
    const jwtNonce = jwtPayload.nonce as string | undefined;
    if (!jwtNonce || jwtNonce !== stateData.nonce) {
      console.error('[LTI] Nonce mismatch:', { expected: stateData.nonce, received: jwtNonce });
      return htmlError('Security Error', 'Nonce mismatch — possible replay attack. Please try again.', 401);
    }

    // Extract launch context from JWT payload
    const launchContext = extractLaunchContext(jwtPayload);
    console.log('[LTI] Launch context:', {
      messageType: launchContext.messageType,
      userId: launchContext.userId,
      contextId: launchContext.contextId,
      contextTitle: launchContext.contextTitle,
      hasDeepLinkingSettings: !!launchContext.deepLinkingSettings,
      deepLinkReturnUrl: launchContext.deepLinkingSettings?.deep_link_return_url,
    });

    // Extract and map role
    const role = mapMoodleRoleToLuxUpRole(launchContext.roles);

    // Create session data
    const sessionData: LTISessionData = {
      userId: launchContext.userId,
      email: launchContext.email,
      name: launchContext.name || `${launchContext.givenName || ''} ${launchContext.familyName || ''}`.trim(),
      role: role,
      contextId: launchContext.contextId,
      contextTitle: launchContext.contextTitle,
      platformId: launchContext.platformId,
      deploymentId: launchContext.deploymentId,
      resourceLinkId: launchContext.resourceLinkId,
    };

    // Create session token
    const sessionToken = await createLTISession(sessionData);

    // Try to provision the user (non-blocking — don't fail the launch if this fails)
    try {
      const { provisionUserFromLTI } = await import('@/lib/user-provisioning/service');
      const provisioningResult = await provisionUserFromLTI(sessionData);
      console.log('[LTI] User provisioned:', {
        userId: provisioningResult.user.id,
        isNew: provisioningResult.isNew,
      });
    } catch (provError) {
      console.warn('[LTI] User provisioning failed (non-fatal):', provError);
    }

    // Determine redirect URL based on message type AND stored deep linking flag
    // IMPORTANT: Moodle may send LtiResourceLinkRequest even for deep linking due to
    // session cookie issues in iframe context. We detect deep linking from the
    // lti_message_hint during login and store the flag in the state.
    let redirectUrl: string;
    
    const messageType = launchContext.messageType;
    const toolUrl = process.env.LTI_TOOL_URL || '';
    const isDeepLinkingFromState = stateData.isDeepLinking;
    const isDeepLinkingFromJWT = messageType === 'LtiDeepLinkingRequest';
    const isDeepLinking = isDeepLinkingFromJWT || isDeepLinkingFromState;
    
    console.log('[LTI] Deep linking detection:', {
      messageType,
      isDeepLinkingFromJWT,
      isDeepLinkingFromState,
      finalDecision: isDeepLinking,
    });
    
    if (isDeepLinking) {
      // Deep linking - redirect to content selection page with parameters
      const dlSettings = launchContext.deepLinkingSettings;
      console.log('[LTI] Deep linking request. Settings:', {
        hasReturnUrl: !!dlSettings?.deep_link_return_url,
        hasData: dlSettings?.data !== undefined,
        deploymentId: launchContext.deploymentId,
        fromJWT: isDeepLinkingFromJWT,
        fromState: isDeepLinkingFromState,
      });

      const params = new URLSearchParams();
      params.set('deployment_id', launchContext.deploymentId);

      if (dlSettings?.deep_link_return_url) {
        // JWT has proper deep linking settings (LtiDeepLinkingRequest)
        params.set('deep_link_return_url', dlSettings.deep_link_return_url);
        if (dlSettings.data !== undefined) {
          params.set('deep_linking_settings', JSON.stringify(dlSettings.data));
        }
        if (dlSettings.accept_types) {
          params.set('accept_types', dlSettings.accept_types.join(','));
        }
      } else if (isDeepLinkingFromState) {
        // Moodle sent LtiResourceLinkRequest but we detected deep linking from lti_message_hint
        // Construct the return URL using Moodle's contentitem.php endpoint
        const platformUrl = process.env.LTI_PLATFORM_URL || 'https://courses.luxuptraining.com';
        const returnUrl = `${platformUrl}/mod/lti/contentitem.php`;
        params.set('deep_link_return_url', returnUrl);
        console.log('[LTI] Constructed deep_link_return_url:', returnUrl);
      } else {
        console.error('[LTI] Missing deep_link_return_url in deep linking settings');
        return htmlError('Configuration Error', 'Deep linking settings are missing the return URL. Please check the LTI tool configuration in Moodle.', 400);
      }
      
      redirectUrl = `${toolUrl}/lti/select-content?${params.toString()}`;
      console.log('[LTI] Redirecting to select-content:', redirectUrl);
    } else {
      // Standard launch - redirect to classroom or home
      const classroomId = launchContext.custom?.classroom_id;
      
      if (classroomId) {
        redirectUrl = `${toolUrl}/classroom/${classroomId}`;
      } else {
        redirectUrl = `${toolUrl}/?lti=1`;
      }
      console.log('[LTI] Standard launch redirect:', redirectUrl);
    }

    // Create response with session cookie
    const response = NextResponse.redirect(redirectUrl);
    
    // Set session cookie
    response.cookies.set(LTI_CONFIG.session.cookieName, sessionToken, {
      httpOnly: LTI_CONFIG.session.httpOnly,
      secure: LTI_CONFIG.session.secure,
      sameSite: LTI_CONFIG.session.sameSite,
      path: LTI_CONFIG.session.path,
      maxAge: LTI_CONFIG.session.maxAge,
    });

    console.log('[LTI] Successful launch:', {
      userId: sessionData.userId,
      role: sessionData.role,
      contextId: sessionData.contextId,
      messageType,
    });

    return response;
  } catch (error) {
    console.error('[LTI] Launch failed with unhandled error:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return htmlError('Launch Failed', `An unexpected error occurred: ${msg}`, 500);
  }
}

/**
 * GET /api/lti/launch
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'LTI 1.3 Launch endpoint is ready',
    timestamp: new Date().toISOString(),
  });
}
