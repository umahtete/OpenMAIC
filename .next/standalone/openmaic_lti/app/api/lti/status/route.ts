// LTI Status and Health Check Endpoint

import { NextRequest, NextResponse } from 'next/server';
import { validateLTIConfig, getLTIPlatformConfig } from '@/lib/lti/config';

/**
 * GET /api/lti/status
 * Returns the current LTI configuration status
 */
export async function GET(request: NextRequest) {
  const config = validateLTIConfig();
  const platformConfig = getLTIPlatformConfig();
  
  return NextResponse.json({
    status: 'ok',
    lti: {
      configured: config.valid,
      missingVariables: config.missing,
      platform: {
        issuer: platformConfig.issuer,
        clientId: platformConfig.clientId ? '***configured***' : 'NOT SET',
        deploymentId: platformConfig.deploymentId,
      },
    },
    timestamp: new Date().toISOString(),
  });
}
