/**
 * Deep Linking Service
 * Handles LTI Deep Linking for content selection
 */

import { SignJWT } from 'jose';
import { getSessionSecret } from '@/lib/lti/config';
import { ContentItem, DeepLinkingResponse } from './types';

/**
 * Create a deep linking response JWT
 */
export async function createDeepLinkingResponse(
  contentItems: ContentItem[],
  deepLinkingSettings: string,
  deploymentId: string
): Promise<string> {
  const secret = new TextEncoder().encode(getSessionSecret());
  
  const response: DeepLinkingResponse = {
    content_items: contentItems,
    msg: 'Success',
  };
  
  const token = await new SignJWT({
    'https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings': deepLinkingSettings,
    'https://purl.imsglobal.org/spec/lti-dl/claim/content_items': contentItems,
    'https://purl.imsglobal.org/spec/lti-dl/claim/msg': 'Success',
    'https://purl.imsglobal.org/spec/lti-dl/claim/log': '',
    'https://purl.imsglobal.org/spec/lti-dl/claim/errormsg': '',
    'https://purl.imsglobal.org/spec/lti-dl/claim/data': response,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('luxup-lti')
    .setAudience(deploymentId)
    .setExpirationTime('5m')
    .sign(secret);
  
  return token;
}

/**
 * Get available content items for deep linking
 */
export function getAvailableContentItems(): ContentItem[] {
  return [
    {
      type: 'ltiResourceLink',
      title: 'Introduction to Christian Faith',
      text: 'Learn the fundamentals of Christian belief and practice',
      url: '/classroom/christian-faith-intro',
      custom: {
        classroom_id: 'christian-faith-intro',
      },
    },
    {
      type: 'ltiResourceLink',
      title: 'Bible Study: Genesis',
      text: 'Explore the book of Genesis and creation',
      url: '/classroom/bible-genesis',
      custom: {
        classroom_id: 'bible-genesis',
      },
    },
    {
      type: 'ltiResourceLink',
      title: 'Prayer and Worship',
      text: 'Understanding the practice of prayer and worship',
      url: '/classroom/prayer-worship',
      custom: {
        classroom_id: 'prayer-worship',
      },
    },
  ];
}
