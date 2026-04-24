// lib/lti/config.ts
function getLTIPlatformConfig() {
  const issuer = process.env.LTI_PLATFORM_ISSUER || process.env.LTI_PLATFORM_URL;
  if (!issuer) {
    throw new Error("LTI_PLATFORM_ISSUER or LTI_PLATFORM_URL environment variable is required");
  }
  return {
    issuer,
    clientId: process.env.LTI_CLIENT_ID || "",
    deploymentId: process.env.LTI_DEPLOYMENT_ID || "1",
    authEndpoint: process.env.LTI_PLATFORM_AUTH_URL || `${issuer}/mod/lti/auth.php`,
    tokenEndpoint: process.env.LTI_PLATFORM_TOKEN_URL || `${issuer}/mod/lti/token.php`,
    jwksEndpoint: process.env.LTI_PLATFORM_JWKS_URL || `${issuer}/mod/lti/certs.php`
  };
}
function getLTIToolConfig() {
  const toolUrl = process.env.LTI_TOOL_URL;
  if (!toolUrl) {
    throw new Error("LTI_TOOL_URL environment variable is required");
  }
  return {
    url: toolUrl,
    launchUrl: `${toolUrl}/api/lti/launch`,
    deepLinkingUrl: `${toolUrl}/api/lti/deep-link`,
    redirectUris: [
      `${toolUrl}/api/lti/callback`
    ]
  };
}
function getSessionSecret() {
  const secret = process.env.LTI_SESSION_SECRET;
  if (!secret) {
    console.warn("LTI_SESSION_SECRET not set, using default (not recommended for production)");
    return "openmaic-lti-session-secret-change-in-production";
  }
  return secret;
}
var LTI_CONFIG = {
  // Session cookie settings
  session: {
    cookieName: "openmaic_lti_session",
    maxAge: 60 * 60 * 1e3,
    // 1 hour in milliseconds
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    httpOnly: true,
    path: "/"
  },
  // OIDC settings
  oidc: {
    responseMode: "form_post",
    responseType: "id_token",
    scope: "openid"
  },
  // State parameter TTL
  state: {
    maxAge: 60 * 5 * 1e3
    // 5 minutes in milliseconds
  }
};
function validateLTIConfig() {
  const required = [
    "LTI_CLIENT_ID",
    "LTI_PLATFORM_URL",
    "LTI_TOOL_URL"
  ];
  const missing = required.filter((key) => !process.env[key]);
  return {
    valid: missing.length === 0,
    missing
  };
}
export {
  LTI_CONFIG,
  getLTIPlatformConfig,
  getLTIToolConfig,
  getSessionSecret,
  validateLTIConfig
};
