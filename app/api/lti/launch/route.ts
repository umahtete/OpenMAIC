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
import { LTI_CONFIG, getSessionSecret } from '@/lib/lti/config';
import { provisionUserFromLTI } from '@/lib/user-provisioning/service';

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
  try {
    const formData = await request.formData();
    const idToken = formData.get('id_token')?.toString();
    const state = formData.get('state')?.toString();

    // Validate required parameters
    if (!idToken) {
      return NextResponse.json(
        { error: 'Missing id_token' },
        { status: 400 }
      );
    }

    if (!state) {
      return NextResponse.json(
        { error: 'Missing state' },
        { status: 400 }
      );
    }

    // Verify state and get nonce
    const stateData = await getAndDeleteState(state);
    if (!stateData) {
      return NextResponse.json(
        { error: 'Invalid or expired state' },
        { status: 400 }
      );
    }

    // Verify the LTI token
    let jwtPayload;
    try {
      jwtPayload = await verifyLTIToken(idToken);
    } catch (error) {
      console.error('[LTI] Token verification failed:', error);
      return NextResponse.json(
        { error: 'Token verification failed', message: error instanceof Error ? error.message : 'Unknown error' },
        { status: 401 }
      );
    }

    // Verify nonce matches the one stored during login initiation
    const jwtNonce = jwtPayload.nonce as string | undefined;
    if (!jwtNonce || jwtNonce !== stateData.nonce) {
      console.error('[LTI] Nonce mismatch:', { expected: stateData.nonce, received: jwtNonce });
      return NextResponse.json(
        { error: 'Nonce mismatch - possible replay attack' },
        { status: 401 }
      );
    }

    // Extract launch context from JWT payload
    const launchContext = extractLaunchContext(jwtPayload);

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

    // Provision the user in OpenMAIC
    const provisioningResult = await provisionUserFromLTI(sessionData);

    console.log('[LTI] User provisioned:', {
      userId: provisioningResult.user.id,
      isNew: provisioningResult.isNew,
    });

    // Determine redirect URL based on message type
    let redirectUrl: string;
    
    const messageType = launchContext.messageType;
    const toolUrl = process.env.LTI_TOOL_URL || '';
    
    if (messageType === 'LtiDeepLinkingRequest') {
      // Deep linking - redirect to content selection page with parameters
      const dlSettings = launchContext.deepLinkingSettings;
      const params = new URLSearchParams();
      
      if (dlSettings?.deep_link_return_url) {
        params.set('deep_link_return_url', dlSettings.deep_link_return_url);
      }
      if (dlSettings?.data !== undefined) {
        params.set('deep_linking_settings', JSON.stringify(dlSettings.data));
      }
      if (dlSettings?.accept_types) {
        params.set('accept_types', dlSettings.accept_types.join(','));
      }
      params.set('deployment_id', launchContext.deploymentId);
      
      redirectUrl = `${toolUrl}/lti/select-content?${params.toString()}`;
    } else {
      // Standard launch - redirect to classroom or home
      // Check if custom parameters specify a classroom
      const classroomId = launchContext.custom?.classroom_id;
      
      if (classroomId) {
        redirectUrl = `${toolUrl}/classroom/${classroomId}`;
      } else {
        // Redirect to home page with session
        redirectUrl = `${toolUrl}/?lti=1`;
      }
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

    // Log successful launch
    console.log('[LTI] Successful launch:', {
      userId: sessionData.userId,
      role: sessionData.role,
      contextId: sessionData.contextId,
      contextTitle: sessionData.contextTitle,
    });

    return response;
  } catch (error) {
    console.error('[LTI] Launch failed:', error);
    return NextResponse.json(
      { error: 'Launch failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
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
