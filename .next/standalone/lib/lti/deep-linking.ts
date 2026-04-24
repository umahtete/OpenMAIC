/**
 * Deep Linking Service
 * Handles LTI 1.3 Deep Linking Response creation and submission
 */

import { SignJWT } from 'jose';
import { getLTIPlatformConfig } from './config';
import { getPrivateKey, getKeyId } from '@/lib/lti/keys';

interface DeepLinkingSettings {
  deep_link_return_url: string;
  accept_types?: string[];
  accept_presentation_document_targets?: string[];
  accept_multiple?: boolean;
  auto_create?: boolean;
  title?: string;
  text?: string;
  data?: unknown;
}

interface ContentItem {
  type: 'link' | 'ltiResourceLink' | 'file';
  title: string;
  url: string;
  text?: string;
  icon?: {
    url: string;
    width: number;
    height: number;
  };
  iframe?: {
    src?: string;
    width?: number;
    height?: number;
  };
  custom?: Record<string, unknown>;
}

/**
 * Create a Deep Linking Response JWT per LTI 1.3 spec
 *
 * The JWT MUST:
 * - Be signed with the tool's private key (EdDSA)
 * - iss = tool's client_id (from platform registration)
 * - aud = platform's issuer URL
 * - Include the original `data` from the deep linking settings claim
 * - Include content_items
 */
export async function createDeepLinkingResponseJWT(
  settings: DeepLinkingSettings,
  contentItems: ContentItem[],
  deploymentId: string
): Promise<string> {
  const platformConfig = getLTIPlatformConfig();
  const kid = await getKeyId();

  const now = Math.floor(Date.now() / 1000);

  const privateKey = await getPrivateKey();
  const jwt = await new SignJWT({
    // Standard claims per LTI 1.3
    iss: platformConfig.clientId,
    aud: platformConfig.issuer,
    nonce: generateNonce(),
    'https://purl.imsglobal.org/spec/lti/claim/deployment_id': deploymentId,
    'https://purl.imsglobal.org/spec/lti/claim/message_type': 'LtiDeepLinkingResponse',
    'https://purl.imsglobal.org/spec/lti/claim/version': '1.3.0',

    // Deep linking response claims
    'https://purl.imsglobal.org/spec/lti-dl/claim/content_items': contentItems,

    // MUST include the `data` from the original deep linking settings
    ...(settings.data !== undefined
      ? { 'https://purl.imsglobal.org/spec/lti-dl/claim/data': settings.data }
      : {}),
  })
    .setProtectedHeader({ alg: 'EdDSA', kid })
    .setIssuedAt(now)
    .setExpirationTime(now + 300) // 5 minutes
    .sign(privateKey);

  return jwt;
}

function generateNonce(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';
  for (let i = 0; i < 32; i++) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce;
}
