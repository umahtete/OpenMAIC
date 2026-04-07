// LTI 1.3 Type Definitions for OpenMAIC

/**
 * LTI Platform Configuration
 * Contains all endpoints and identifiers for the Moodle LTI 1.3 platform
 */
export interface LTIPlatformConfig {
  issuer: string;
  clientId: string;
  deploymentId: string;
  authEndpoint: string;
  tokenEndpoint: string;
  jwksEndpoint: string;
}

/**
 * LTI Tool Configuration
 * Contains the tool's URLs and identifiers
 */
export interface LTIToolConfig {
  url: string;
  launchUrl: string;
  deepLinkingUrl: string;
  redirectUris: string[];
}

/**
 * LTI Launch Context
 * Extracted from the LTI 1.3 launch JWT
 */
export interface LTILaunchContext {
  // User information
  userId: string;
  email?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  
  // Role information
  roles: string[];
  roleScopeMentor?: string;
  
  // Context (course) information
  contextId: string;
  contextLabel?: string;
  contextTitle?: string;
  contextType?: string;
  
  // Platform information
  platformId: string;
  deploymentId: string;
  
  // LTI-specific
  messageType: string;
  version: string;
  resourceLinkId?: string;
  resourceLinkTitle?: string;
  resourceLinkDescription?: string;
  
  // Custom parameters
  custom?: Record<string, string>;
  
  // Launch presentation
  launchPresentation?: {
    documentTarget?: string;
    height?: number;
    width?: number;
    returnUrl?: string;
    locale?: string;
  };
  
  // Deep linking
  deepLinkingSettings?: string;
  
  // Assignment and Grade Services (AGS)
  endpoint?: {
    lineItems?: string;
    lineItem?: string;
    scores?: string;
    results?: string;
  };
  
  // Names Role Provisioning Service (NRPS)
  namesRoleService?: {
    contextMembershipsUrl?: string;
    serviceVersions?: string[];
  };
  
  // Timestamps
  issuedAt: number;
  expiresAt: number;
}

/**
 * LTI Session stored server-side
 */
export interface LTISession {
  id: string;
  launchContext: LTILaunchContext;
  createdAt: number;
  expiresAt: number;
  lastAccessedAt: number;
}

/**
 * LTI Grade Passback Payload
 */
export interface LTIGradePayload {
  scoreGiven: number;
  scoreMaximum: number;
  activityProgress: 'Initialized' | 'Started' | 'InProgress' | 'Submitted' | 'Completed';
  gradingProgress: 'NotReady' | 'Failed' | 'Pending' | 'PendingManual' | 'FullyGraded';
  timestamp: string;
  userId: string;
  comment?: string;
}

/**
 * LTI Deep Linking Content Item
 */
export interface LTIContentItem {
  type: 'link' | 'ltiResourceLink' | 'file' | 'html' | 'image';
  title: string;
  text?: string;
  url?: string;
  icon?: {
    url: string;
    width?: number;
    height?: number;
  };
  thumbnail?: {
    url: string;
    width?: number;
    height?: number;
  };
  custom?: Record<string, string>;
}

/**
 * Moodle role to LuxUp AI Tutor role mapping
 */
export type LuxUpRole = 'student' | 'teacher' | 'admin';

// Backwards compatibility alias
export type OpenMAICRole = LuxUpRole;

/**
 * LTI OIDC Authentication Request
 */
export interface LTIOIDCAuthRequest {
  scope: string;
  response_type: string;
  client_id: string;
  redirect_uri: string;
  login_hint: string;
  state: string;
  response_mode: string;
  nonce: string;
  prompt: string;
  lti_message_hint?: string;
}

/**
 * LTI OIDC Authentication Response
 */
export interface LTIOIDCAuthResponse {
  state: string;
  id_token: string;
}

/**
 * JWT Header with LTI-specific claims
 */
export interface LTIJWTHeader {
  alg: string;
  typ: string;
  kid: string;
}

/**
 * LTI 1.3 JWT Payload (id_token claims)
 */
export interface LTIJWTPayload {
  // Standard claims
  iss: string;
  sub: string;
  aud: string | string[];
  exp: number;
  iat: number;
  nonce: string;
  
  // LTI-specific claims
  'https://purl.imsglobal.org/spec/lti/claim/message_type': string;
  'https://purl.imsglobal.org/spec/lti/claim/version': string;
  'https://purl.imsglobal.org/spec/lti/claim/deployment_id': string;
  'https://purl.imsglobal.org/spec/lti/claim/target_link_uri': string;
  
  // User claims
  'https://purl.imsglobal.org/spec/lti/claim/roles': string[];
  'https://purl.imsglobal.org/spec/lti/claim/resource_link'?: {
    id: string;
    title?: string;
    description?: string;
  };
  
  // Context claims
  'https://purl.imsglobal.org/spec/lti/claim/context'?: {
    id: string;
    label?: string;
    title?: string;
    type?: string | string[];
  };
  
  // Tool platform claims
  'https://purl.imsglobal.org/spec/lti/claim/tool_platform'?: {
    guid?: string;
    name?: string;
    version?: string;
    product_family_code?: string;
  };
  
  // Launch presentation
  'https://purl.imsglobal.org/spec/lti/claim/launch_presentation'?: {
    document_target?: string;
    height?: number;
    width?: number;
    return_url?: string;
    locale?: string;
  };
  
  // Custom claims
  'https://purl.imsglobal.org/spec/lti/claim/custom'?: Record<string, string>;
  
  // Deep linking
  'https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings'?: string;
  
  // AGS claims
  'https://purl.imsglobal.org/spec/lti-ags/claim/endpoint'?: {
    lineitems?: string;
    lineitem?: string;
    scores?: string;
    results?: string;
  };
  
  // NRPS claims
  'https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice'?: {
    context_memberships_url?: string;
    service_versions?: string[];
  };
  
  // User identity claims
  email?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  'https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor'?: string;
}
