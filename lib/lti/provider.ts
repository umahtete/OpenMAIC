// LTI 1.3 Provider - JWT Validation and Session Management

import { jwtVerify, SignJWT, importJWK, JWTPayload, JWK } from 'jose';
import { getLTIPlatformConfig, getSessionSecret, LTI_CONFIG } from './config';
import { LTILaunchContext, LTIJWTPayload, OpenMAICRole } from './types';

// Cache for platform JWKS
let jwksCache: Map<string, { keys: JWK[]; expires: number }> = new Map();

/**
 * Fetch the platform's JWKS (JSON Web Key Set)
 */
async function getPlatformJWKS(): Promise<JWK[]> {
  const config = getLTIPlatformConfig();
  const cacheKey = config.issuer;
  
  // Check cache
  const cached = jwksCache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return cached.keys;
  }
  
  // Fetch JWKS from platform
  const response = await fetch(config.jwksEndpoint);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch JWKS from ${config.jwksEndpoint}: ${response.status}`);
  }
  
  const jwks = await response.json();
  
  // Cache for 1 hour
  jwksCache.set(cacheKey, {
    keys: jwks.keys,
    expires: Date.now() + 60 * 60 * 1000,
  });
  
  return jwks.keys;
}

/**
 * Find the correct key for JWT verification
 */
async function getSigningKey(kid: string): Promise<JWK> {
  const keys = await getPlatformJWKS();
  const key = keys.find(k => k.kid === kid);
  
  if (!key) {
    throw new Error(`No matching key found for kid: ${kid}`);
  }
  
  return key;
}

/**
 * Verify and decode an LTI 1.3 id_token
 */
export async function verifyLTIToken(idToken: string): Promise<LTIJWTPayload> {
  const config = getLTIPlatformConfig();
  
  // Decode header to get kid
  const [headerB64] = idToken.split('.');
  const header = JSON.parse(atob(headerB64));
  
  // Get the signing key
  const jwk = await getSigningKey(header.kid);
  if (!header.alg) {
    throw new Error('Missing alg in JWT header');
  }
  const key = await importJWK(jwk, header.alg);
  
  // Verify the token
  const { payload } = await jwtVerify(idToken, key, {
    issuer: config.issuer,
    audience: config.clientId,
  });
  
  return payload as unknown as LTIJWTPayload;
}

/**
 * Extract launch context from LTI JWT payload
 */
export function extractLaunchContext(payload: LTIJWTPayload): LTILaunchContext {
  const context = payload['https://purl.imsglobal.org/spec/lti/claim/context'];
  
  return {
    // User information
    userId: payload.sub || '',
    email: payload.email,
    name: payload.name,
    givenName: payload.given_name,
    familyName: payload.family_name,
    
    // Role information
    roles: Array.isArray(payload['https://purl.imsglobal.org/spec/lti/claim/roles'])
      ? payload['https://purl.imsglobal.org/spec/lti/claim/roles']
      : [],
    roleScopeMentor: payload['https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor'],
    
    // Context (course) information
    contextId: context?.id || '',
    contextLabel: context?.label,
    contextTitle: context?.title,
    contextType: Array.isArray(context?.type) ? context.type[0] : context?.type,
    
    // Platform information
    platformId: payload.iss || '',
    deploymentId: payload['https://purl.imsglobal.org/spec/lti/claim/deployment_id'] || '',
    
    // LTI-specific
    messageType: payload['https://purl.imsglobal.org/spec/lti/claim/message_type'] || '',
    version: payload['https://purl.imsglobal.org/spec/lti/claim/version'] || '',
    resourceLinkId: payload['https://purl.imsglobal.org/spec/lti/claim/resource_link']?.id,
    resourceLinkTitle: payload['https://purl.imsglobal.org/spec/lti/claim/resource_link']?.title,
    resourceLinkDescription: payload['https://purl.imsglobal.org/spec/lti/claim/resource_link']?.description,
    
    // Custom parameters
    custom: payload['https://purl.imsglobal.org/spec/lti/claim/custom'],
    
    // Launch presentation
    launchPresentation: payload['https://purl.imsglobal.org/spec/lti/claim/launch_presentation']
      ? {
          documentTarget: payload['https://purl.imsglobal.org/spec/lti/claim/launch_presentation'].document_target,
          height: payload['https://purl.imsglobal.org/spec/lti/claim/launch_presentation'].height,
          width: payload['https://purl.imsglobal.org/spec/lti/claim/launch_presentation'].width,
          returnUrl: payload['https://purl.imsglobal.org/spec/lti/claim/launch_presentation'].return_url,
          locale: payload['https://purl.imsglobal.org/spec/lti/claim/launch_presentation'].locale,
        }
      : undefined,
    
    // Deep linking settings
    deepLinkingSettings: payload['https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings'],
    
    // Assignment and Grade Services (AGS)
    endpoint: payload['https://purl.imsglobal.org/spec/lti-ags/claim/endpoint']
      ? {
          lineItems: payload['https://purl.imsglobal.org/spec/lti-ags/claim/endpoint'].lineitems,
          lineItem: payload['https://purl.imsglobal.org/spec/lti-ags/claim/endpoint'].lineitem,
          scores: payload['https://purl.imsglobal.org/spec/lti-ags/claim/endpoint'].scores,
          results: payload['https://purl.imsglobal.org/spec/lti-ags/claim/endpoint'].results,
        }
      : undefined,
    
    // Names Role Provisioning Service (NRPS)
    namesRoleService: payload['https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice']
      ? {
          contextMembershipsUrl: payload['https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice'].context_memberships_url,
          serviceVersions: payload['https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice'].service_versions,
        }
      : undefined,
    
    // Timestamps
    issuedAt: payload.iat,
    expiresAt: payload.exp,
  };
}

/**
 * Map Moodle roles to LuxUp AI Tutor roles
 */
export function mapMoodleRoleToLuxUpRole(roles: string[]): OpenMAICRole {
  // Moodle role URIS
  const ROLE_MAPPINGS: Record<string, OpenMAICRole> = {
    'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator': 'admin',
    'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Learner': 'student',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator': 'admin',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Manager': 'admin',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#TeachingAssistant': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#Grader': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#PrimaryInstructor': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#SecondaryInstructor': 'teacher',
  };
  
  // Check each role - track highest role found
  let highestRole: OpenMAICRole = 'student';
  for (const role of roles) {
    const mapped = ROLE_MAPPINGS[role];
    if (mapped) {
      if (mapped === 'admin') return 'admin'; // Admin is always highest priority
      if (mapped === 'teacher') highestRole = 'teacher'; // Track teacher but keep checking for admin
    }
  }
  
  return highestRole;
}

/**
 * Create a session JWT for the LTI user
 */
export async function createLTISession(sessionData: LTISessionData): Promise<string> {
  const secret = new TextEncoder().encode(getSessionSecret());
  
  const token = await new SignJWT({
    userId: sessionData.userId,
    email: sessionData.email,
    name: sessionData.name,
    role: sessionData.role,
    contextId: sessionData.contextId,
    contextTitle: sessionData.contextTitle,
    platformId: sessionData.platformId,
    deploymentId: sessionData.deploymentId,
    resourceLinkId: sessionData.resourceLinkId,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('luxup-lti')
    .setAudience('luxup')
    .setExpirationTime('1h')
    .sign(secret);
  
  return token;
}

/**
 * Verify an LTI session token
 */
export async function verifyLTISession(token: string): Promise<LTISessionData | null> {
  try {
    const secret = new TextEncoder().encode(getSessionSecret());
    
    const { payload } = await jwtVerify(token, secret, {
      issuer: 'luxup-lti',
      audience: 'luxup',
    });
    
    return payload as unknown as LTISessionData;
  } catch (error) {
    console.error('Failed to verify LTI session:', error);
    return null;
  }
}

/**
 * LTI Session Data stored in JWT
 */
export interface LTISessionData {
  userId: string;
  email?: string;
  name?: string;
  role: OpenMAICRole;
  contextId: string;
  contextTitle?: string;
  platformId: string;
  deploymentId: string;
  resourceLinkId?: string;
}

/**
 * Generate state parameter for OIDC flow
 */
export function generateState(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let state = '';
  for (let i = 0; i < 32; i++) {
    state += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return state;
}

/**
 * Generate nonce for OIDC flow
 */
export function generateNonce(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';
  for (let i = 0; i < 32; i++) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce;
}

/**
 * Store state temporarily using database
 */
export async function storeState(
  state: string,
  nonce: string,
  isDeepLinking: boolean = false,
  deepLinkingData: string | null = null
): Promise<void> {
  const { createState, cleanExpiredStates } = await import('./stores/state-store');
  
  await createState({
    state,
    nonce,
    isDeepLinking,
    deepLinkingData: deepLinkingData ?? undefined,
    expiresAt: new Date(Date.now() + LTI_CONFIG.state.maxAge),
  });
  
  // Clean up expired states
  await cleanExpiredStates();
}

export async function getAndDeleteState(state: string): Promise<{ nonce: string; isDeepLinking: boolean; deepLinkingData: string | null } | null> {
  const { getAndDeleteState: dbGetAndDeleteState } = await import('./stores/state-store');
  return dbGetAndDeleteState(state);
}
