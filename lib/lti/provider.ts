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
  const header = JSON.parse(Buffer.from(headerB64, 'base64').toString());
  
  // Get the signing key
  const jwk = await getSigningKey(header.kid);
  const key = await importJWK(jwk, header.alg);
  
  // Verify the token
  const { payload } = await jwtVerify(idToken, key, {
    issuer: config.issuer,
    audience: config.clientId,
  });
  
  return payload as LTIJWTPayload;
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
  };
}

/**
 * Map Moodle roles to OpenMAIC roles
 */
export function mapMoodleRoleToOpenMAIC(roles: string[]): OpenMAICRole {
  // Moodle role URIs
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
  
  // Check each role
  for (const role of roles) {
    const mapped = ROLE_MAPPINGS[role];
    if (mapped) {
      // Return admin if found, otherwise continue checking
      if (mapped === 'admin') return 'admin';
      if (mapped === 'teacher') continue; // Keep checking for admin
      return mapped;
    }
  }
  
  // Default to student
  return 'student';
}

/**
 * Create a session JWT for the LTI user
 */
export async function createLTISession(context: LTILaunchContext): Promise<string> {
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
    resourceLinkId: context.resourceLinkId,
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
 * Store state temporarily (in production, use Redis)
 * For now, we'll use an in-memory store
 */
const stateStore: Map<string, { nonce: string; expires: number }> = new Map();

export function storeState(state: string, nonce: string): void {
  stateStore.set(state, {
    nonce,
    expires: Date.now() + LTI_CONFIG.state.maxAge,
  });
  
  // Clean up expired states
  for (const [key, value] of stateStore.entries()) {
    if (value.expires < Date.now()) {
      stateStore.delete(key);
    }
  }
}

export function getAndDeleteState(state: string): { nonce: string } | null {
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
