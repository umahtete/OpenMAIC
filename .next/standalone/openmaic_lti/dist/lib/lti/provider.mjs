// lib/lti/provider.ts
import { jwtVerify, SignJWT, importJWK } from "jose";

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

// lib/lti/provider.ts
var jwksCache = /* @__PURE__ */ new Map();
async function getPlatformJWKS() {
  const config = getLTIPlatformConfig();
  const cacheKey = config.issuer;
  const cached = jwksCache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return cached.keys;
  }
  const response = await fetch(config.jwksEndpoint);
  if (!response.ok) {
    throw new Error(`Failed to fetch JWKS from ${config.jwksEndpoint}: ${response.status}`);
  }
  const jwks = await response.json();
  jwksCache.set(cacheKey, {
    keys: jwks.keys,
    expires: Date.now() + 60 * 60 * 1e3
  });
  return jwks.keys;
}
async function getSigningKey(kid) {
  const keys = await getPlatformJWKS();
  const key = keys.find((k) => k.kid === kid);
  if (!key) {
    throw new Error(`No matching key found for kid: ${kid}`);
  }
  return key;
}
async function verifyLTIToken(idToken) {
  const config = getLTIPlatformConfig();
  const [headerB64] = idToken.split(".");
  const header = JSON.parse(Buffer.from(headerB64, "base64").toString());
  const jwk = await getSigningKey(header.kid);
  const key = await importJWK(jwk, header.alg);
  const { payload } = await jwtVerify(idToken, key, {
    issuer: config.issuer,
    audience: config.clientId
  });
  return payload;
}
function extractLaunchContext(payload) {
  const context = payload["https://purl.imsglobal.org/spec/lti/claim/context"];
  return {
    // User information
    userId: payload.sub || "",
    email: payload.email,
    name: payload.name,
    givenName: payload.given_name,
    familyName: payload.family_name,
    // Role information
    roles: Array.isArray(payload["https://purl.imsglobal.org/spec/lti/claim/roles"]) ? payload["https://purl.imsglobal.org/spec/lti/claim/roles"] : [],
    roleScopeMentor: payload["https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor"],
    // Context (course) information
    contextId: context?.id || "",
    contextLabel: context?.label,
    contextTitle: context?.title,
    contextType: Array.isArray(context?.type) ? context.type[0] : context?.type,
    // Platform information
    platformId: payload.iss || "",
    deploymentId: payload["https://purl.imsglobal.org/spec/lti/claim/deployment_id"] || "",
    // LTI-specific
    messageType: payload["https://purl.imsglobal.org/spec/lti/claim/message_type"] || "",
    version: payload["https://purl.imsglobal.org/spec/lti/claim/version"] || "",
    resourceLinkId: payload["https://purl.imsglobal.org/spec/lti/claim/resource_link"]?.id,
    resourceLinkTitle: payload["https://purl.imsglobal.org/spec/lti/claim/resource_link"]?.title,
    resourceLinkDescription: payload["https://purl.imsglobal.org/spec/lti/claim/resource_link"]?.description,
    // Custom parameters
    custom: payload["https://purl.imsglobal.org/spec/lti/claim/custom"]
  };
}
function mapMoodleRoleToOpenMAIC(roles) {
  const ROLE_MAPPINGS = {
    "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator": "admin",
    "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor": "teacher",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor": "teacher",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner": "student",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator": "admin",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper": "teacher",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Manager": "admin",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor": "teacher",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#TeachingAssistant": "teacher",
    "http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#Grader": "teacher",
    "http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#PrimaryInstructor": "teacher",
    "http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#SecondaryInstructor": "teacher"
  };
  for (const role of roles) {
    const mapped = ROLE_MAPPINGS[role];
    if (mapped) {
      if (mapped === "admin") return "admin";
      if (mapped === "teacher") continue;
      return mapped;
    }
  }
  return "student";
}
async function createLTISession(context) {
  const secret = new TextEncoder().encode(getSessionSecret());
  const token = await new SignJWT({
    userId: context.userId,
    email: context.email,
    name: context.name,
    role: mapMoodleRoleToOpenMAIC(context.roles),
    contextId: context.contextId,
    contextTitle: context.contextTitle,
    platformId: context.platformId,
    deploymentId: context.deploymentId,
    resourceLinkId: context.resourceLinkId
  }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setIssuer("openmaic-lti").setAudience("openmaic").setExpirationTime("1h").sign(secret);
  return token;
}
async function verifyLTISession(token) {
  try {
    const secret = new TextEncoder().encode(getSessionSecret());
    const { payload } = await jwtVerify(token, secret, {
      issuer: "openmaic-lti",
      audience: "openmaic"
    });
    return payload;
  } catch (error) {
    console.error("Failed to verify LTI session:", error);
    return null;
  }
}
function generateState() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let state = "";
  for (let i = 0; i < 32; i++) {
    state += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return state;
}
function generateNonce() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let nonce = "";
  for (let i = 0; i < 32; i++) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce;
}
var stateStore = /* @__PURE__ */ new Map();
function storeState(state, nonce) {
  stateStore.set(state, {
    nonce,
    expires: Date.now() + LTI_CONFIG.state.maxAge
  });
  for (const [key, value] of stateStore.entries()) {
    if (value.expires < Date.now()) {
      stateStore.delete(key);
    }
  }
}
function getAndDeleteState(state) {
  const stored = stateStore.get(state);
  if (!stored) {
    return null;
  }
  stateStore.delete(state);
  if (stored.expires < Date.now()) {
    return null;
  }
  return { nonce: stored.nonce };
}
export {
  createLTISession,
  extractLaunchContext,
  generateNonce,
  generateState,
  getAndDeleteState,
  mapMoodleRoleToOpenMAIC,
  storeState,
  verifyLTISession,
  verifyLTIToken
};
