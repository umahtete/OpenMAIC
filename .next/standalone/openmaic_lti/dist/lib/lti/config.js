"use strict";
// LTI 1.3 Configuration for OpenMAIC
Object.defineProperty(exports, "__esModule", { value: true });
exports.LTI_CONFIG = void 0;
exports.getLTIPlatformConfig = getLTIPlatformConfig;
exports.getLTIToolConfig = getLTIToolConfig;
exports.getSessionSecret = getSessionSecret;
exports.validateLTIConfig = validateLTIConfig;
/**
 * Get LTI Platform configuration from environment variables
 */
function getLTIPlatformConfig() {
    var issuer = process.env.LTI_PLATFORM_ISSUER || process.env.LTI_PLATFORM_URL;
    if (!issuer) {
        throw new Error('LTI_PLATFORM_ISSUER or LTI_PLATFORM_URL environment variable is required');
    }
    return {
        issuer: issuer,
        clientId: process.env.LTI_CLIENT_ID || '',
        deploymentId: process.env.LTI_DEPLOYMENT_ID || '1',
        authEndpoint: process.env.LTI_PLATFORM_AUTH_URL || "".concat(issuer, "/mod/lti/auth.php"),
        tokenEndpoint: process.env.LTI_PLATFORM_TOKEN_URL || "".concat(issuer, "/mod/lti/token.php"),
        jwksEndpoint: process.env.LTI_PLATFORM_JWKS_URL || "".concat(issuer, "/mod/lti/certs.php"),
    };
}
/**
 * Get LTI Tool configuration from environment variables
 */
function getLTIToolConfig() {
    var toolUrl = process.env.LTI_TOOL_URL;
    if (!toolUrl) {
        throw new Error('LTI_TOOL_URL environment variable is required');
    }
    return {
        url: toolUrl,
        launchUrl: "".concat(toolUrl, "/api/lti/launch"),
        deepLinkingUrl: "".concat(toolUrl, "/api/lti/deep-link"),
        redirectUris: [
            "".concat(toolUrl, "/api/lti/callback"),
        ],
    };
}
/**
 * Get session secret for signing session cookies
 */
function getSessionSecret() {
    var secret = process.env.LTI_SESSION_SECRET;
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
exports.LTI_CONFIG = {
    // Session cookie settings
    session: {
        cookieName: 'openmaic_lti_session',
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
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
function validateLTIConfig() {
    var required = [
        'LTI_CLIENT_ID',
        'LTI_PLATFORM_URL',
        'LTI_TOOL_URL',
    ];
    var missing = required.filter(function (key) { return !process.env[key]; });
    return {
        valid: missing.length === 0,
        missing: missing,
    };
}
