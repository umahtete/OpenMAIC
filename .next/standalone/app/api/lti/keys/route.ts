import { NextResponse } from 'next/server';
import { exportJWK } from 'jose';
import { getKeyPair } from '@/lib/lti/keys';

export async function GET() {
  try {
    const { publicKey, keyId } = await getKeyPair();
    const publicJwk = await exportJWK(publicKey);

    const jwks = {
      keys: [
        {
          ...publicJwk,
          kid: keyId,
          alg: 'EdDSA',
          use: 'sig',
        },
      ],
    };

    return NextResponse.json(jwks, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('[LTI] Failed to generate JWKS:', error);
    return NextResponse.json(
      { error: 'Failed to generate keys' },
      { status: 500 }
    );
  }
}
