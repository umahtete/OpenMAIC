// LTI 1.3 Configuration for LuxUp AI Tutor

import { LTIPlatformConfig, LTIToolConfig } from './types';

/**
 * Get LTI Platform configuration from environment variables
 */
export function getLTIPlatformConfig(): LTIPlatformConfig {
  const issuer = process.env.LTI_PLATFORM_ISSUER || process.env.LTI_PLATFORM_URL;
  
  if (!issuer) {
    throw new Error('LTI_PLATFORM_ISSUER or LTI_PLATFORM_URL environment variable is required');
  }
  
  return {
    issuer,
    clientId: process.env.LTI_CLIENT_ID || '',
    deploymentId: process.env.LTI_DEPLOYMENT_ID || '1',
    authEndpoint: process.env.LTI_PLATFORM_AUTH_URL || `${issuer}/mod/lti/auth.php`,
    tokenEndpoint: process.env.LTI_PLATFORM_TOKEN_URL || `${issuer}/mod/lti/token.php`,
    jwksEndpoint: process.env.LTI_PLATFORM_JWKS_URL || `${issuer}/mod/lti/certs.php`,
  };
}

/**
 * Get LTI Tool configuration from environment variables
 */
export function getLTIToolConfig(): LTIToolConfig {
  const toolUrl = process.env.LTI_TOOL_URL;
  
  if (!toolUrl) {
    throw new Error('LTI_TOOL_URL environment variable is required');
  }
  
  return {
    url: toolUrl,
    launchUrl: `${toolUrl}/api/lti/launch`,
    deepLinkingUrl: `${toolUrl}/api/lti/deep-link`,
    redirectUris: [
      `${toolUrl}/api/lti/callback`,
    ],
  };
}

/**
 * Get session secret for signing session cookies
 */
export function getSessionSecret(): string {
  const secret = process.env.LTI_SESSION_SECRET;
  
  if (!secret) {
    console.warn('LTI_SESSION_SECRET not set, using default (not recommended for production)');
    return 'openmaic-lti-session-secret-change-in-production';
  }
  
  return secret;
}

/**
 * LTI configuration for Moodle at LuxUp Training
 * 
 * Platform: https://courses.luxuptraining.com
 * Tool: https://aitutor.luxuptraining.com
 * 
 * Environment Variables Required:
 * - LTI_CLIENT_ID: rwAV59ErJV40G36
 * - LTI_PLATFORM_URL: https://courses.luxuptraining.com
 * - LTI_TOOL_URL: https://aitutor.luxuptraining.com
 * - LTI_SESSION_SECRET: (random 32+ character string)
 * 
 * Optional (defaults to standard Moodle endpoints):
 * - LTI_PLATFORM_ISSUER: https://courses.luxuptraining.com
 * - LTI_DEPLOYMENT_ID: 1
 * - LTI_PLATFORM_AUTH_URL: https://courses.luxuptraining.com/mod/lti/auth.php
 * - LTI_PLATFORM_TOKEN_URL: https://courses.luxuptraining.com/mod/lti/token.php
 * - LTI_PLATFORM_JWKS_URL: https://courses.luxuptraining.com/mod/lti/certs.php
 */
export const LTI_CONFIG = {
  // Session cookie settings
  session: {
    cookieName: 'openmaic_lti_session',
    maxAge: 60 * 60, // 1 hour in seconds
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none' as const,
    httpOnly: true,
    path: '/',
  },
  
  // OIDC settings
  oidc: {
    responseMode: 'form_post',
    responseType: 'id_token',
    scope: 'openid',
  },
  
  // State parameter TTL
  state: {
    maxAge: 60 * 5 * 1000, // 5 minutes in milliseconds
  },
};

/**
 * Validate that all required LTI environment variables are set
 */
export function validateLTIConfig(): { valid: boolean; missing: string[] } {
  const required = [
    'LTI_CLIENT_ID',
    'LTI_PLATFORM_URL',
    'LTI_TOOL_URL',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  return {
    valid: missing.length === 0,
    missing,
  };
}
