// LTI 1.3 JWKS Endpoint
// Exposes the tool's public keys for JWT verification

import { NextRequest, NextResponse } from 'next/server';
import { generateKeyPair, exportJWK } from 'jose';

// In-memory key storage (in production, use persistent storage)
let keyPair: { publicKey: CryptoKey; privateKey: CryptoKey; kid: string } | null = null;

/**
 * Get or generate the key pair for LTI signing
 */
async function getKeyPair() {
  if (keyPair) {
    return keyPair;
  }

  // Generate a new key pair
  const { publicKey, privateKey } = await generateKeyPair('EdDSA', {
    extractable: true,
  });

  keyPair = {
    publicKey,
    privateKey,
    kid: 'openmaic-lti-key-1',
  };

  return keyPair;
}

/**
 * GET /api/lti/keys
 * Returns the JWKS (JSON Web Key Set) for LTI 1.3
 * 
 * Moodle will fetch this endpoint to get the public key for verifying our JWTs
 */
export async function GET(request: NextRequest) {
  try {
    const keys = await getKeyPair();
    
    const jwk = await exportJWK(keys.publicKey);
    
    return NextResponse.json({
      keys: [{
        ...jwk,
        kid: keys.kid,
        alg: 'EdDSA',
        use: 'sig',
      }]
    });
  } catch (error) {
    console.error('[LTI] Failed to generate JWKS:', error);
    return NextResponse.json(
      { error: 'Failed to generate keys' },
      { status: 500 }
    );
  }
}

/**
 * Get the private key for signing JWTs
 * This is used internally for signing session tokens
 */
export async function getPrivateKey() {
  const keys = await getKeyPair();
  return keys.privateKey;
}
