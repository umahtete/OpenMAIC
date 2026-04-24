// LTI Session Middleware
// Validates LTI sessions on protected routes

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyLTISession } from '@/lib/lti/provider';
import { LTI_CONFIG } from '@/lib/lti/config';

/**
 * Routes that require LTI authentication
 */
const PROTECTED_ROUTES = [
  '/classroom/',
  '/api/tutor/',
  '/api/chat/',
];

/**
 * Routes that are public (no authentication required)
 */
const PUBLIC_ROUTES = [
  '/api/health',
  '/api/lti/login',
  '/api/lti/launch',
  '/api/lti/keys',
  '/api/lti/callback',
];

/**
 * Check if a path matches any pattern in a list
 */
function matchesPattern(pathname: string, patterns: string[]): boolean {
  return patterns.some(pattern => pathname.startsWith(pattern));
}

/**
 * Middleware function for LTI session validation
 */
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow public routes
  if (matchesPattern(pathname, PUBLIC_ROUTES)) {
    return NextResponse.next();
  }

  // Only protect routes that are in the protected list
  if (!matchesPattern(pathname, PROTECTED_ROUTES)) {
    return NextResponse.next();
  }

  // Get session token from cookie
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(LTI_CONFIG.session.cookieName);

  if (!sessionToken) {
    // No session token, redirect to error page or return 401
    return NextResponse.json(
      { 
        error: 'Unauthorized', 
        message: 'No LTI session found. Please launch from Moodle.',
        redirectUrl: '/lti/login-required'
      },
      { status: 401 }
    );
  }

  // Verify the session token
  const session = await verifyLTISession(sessionToken.value);

  if (!session) {
    // Invalid or expired session
    return NextResponse.json(
      { 
        error: 'Session expired', 
        message: 'Your session has expired. Please relaunch from Moodle.',
        redirectUrl: '/lti/login-required'
      },
      { status: 401 }
    );
  }

  // Add session data to request headers for downstream use
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-lti-user-id', session.userId);
  requestHeaders.set('x-lti-role', session.role);
  requestHeaders.set('x-lti-context-id', session.contextId);
  requestHeaders.set('x-lti-context-title', session.contextTitle || '');
  requestHeaders.set('x-lti-email', session.email || '');
  requestHeaders.set('x-lti-name', session.name || '');

  // Continue with the request, adding session info to headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

/**
 * Configure which routes this middleware applies to
 */
export const config = {
  matcher: [
    '/classroom/:path*',
    '/api/tutor/:path*',
    '/api/chat/:path*',
  ],
};
