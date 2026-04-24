/**
 * Deep Linking Types
 */

export interface DeepLinkingSettings {
  deep_linking_settings: string;
  accept_types: string[];
  accept_presentation_document_targets?: string[];
  accept_multiple?: boolean;
  auto_create?: boolean;
  title?: string;
  text?: string;
  data?: Record<string, any>;
}

export interface ContentItem {
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

export interface DeepLinkingResponse {
  content_items: ContentItem[];
  msg?: string;
  log?: string;
  errormsg?: string;
}
