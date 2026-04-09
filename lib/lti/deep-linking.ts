/**
 * Deep Linking Service
 * Handles LTI 1.3 Deep Linking Response creation and submission
 */

import { SignJWT } from 'jose';
import { getLTIPlatformConfig, getLTIToolConfig, getSessionSecret } from './config';
import { getPrivateKey, getKeyId } from '@/lib/lti/keys';

interface DeepLinkingSettings {
  deep_link_return_url: string;
  accept_types?: string[];
  data?: Record<string, unknown>;
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
 * Create a Deep Linking Response JWT
 */
export async function createDeepLinkingResponse(
  settings: DeepLinkingSettings,
  contentItems: ContentItem[]
): Promise<string> {
  const platformConfig = getLTIPlatformConfig();
  const toolConfig = getLTIToolConfig();
  const _sessionSecret = getSessionSecret();
  const kid = await getKeyId();

  const now = Math.floor(Date.now() / 1000);
  const fiveMinutes = now + 300;

  const jwtContent = {
    iss: toolConfig.url,
    aud: platformConfig.clientId,
    exp: fiveMinutes,
    iat: now,
    nonce: generateNonce(),
    
    'https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings': {
      deep_link_return_url: settings.deep_link_return_url,
      accept_types: settings.accept_types || ['link'],
    },
    'https://purl.imsglobal.org/spec/lti-dl/claim/content_items': contentItems,
  };

  const privateKey = await getPrivateKey();
  const jwt = await new SignJWT(jwtContent)
    .setProtectedHeader({ alg: 'EdDSA', kid })
    .sign(privateKey);

  return jwt;
}

/**
 * Submit Deep Linking Response to Moodle
 */
export async function submitDeepLinkingResponse(
  settings: DeepLinkingSettings,
  contentItemId: string,
  title: string,
  type: string = 'link'
): Promise<void> {
  const contentItems: ContentItem[] = [
    {
      type: type as 'link',
      title,
      url: `${getLTIToolConfig().url}/classroom/${contentItemId}`,
      icon: {
        url: `${getLTIToolConfig().url}/thumbnails/${contentItemId}.png`,
        width: 100,
        height: 100,
      },
      custom: {
        content_type: type,
      },
    },
  ];

  const jwt = await createDeepLinkingResponse(settings, contentItems);

  const response = await fetch(settings.deep_link_return_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      JWT: jwt,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit deep linking response: ${response.status}`);
  }
}

function generateNonce(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';
  for (let i = 0; i < 32; i++) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce;
}
