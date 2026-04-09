import { importJWK, importPKCS8, generateKeyPair, exportJWK, exportPKCS8 } from 'jose';
import prisma from '@/lib/db';

interface CachedKeyPair {
  publicKey: CryptoKey;
  privateKey: CryptoKey;
  keyId: string;
}

let cachedKeyPair: CachedKeyPair | null = null;

export async function getKeyPair(): Promise<CachedKeyPair> {
  if (cachedKeyPair) {
    return cachedKeyPair;
  }

  try {
    const storedKey = await prisma.ltiJwks.findFirst({
      orderBy: { createdAt: 'desc' },
    });

    if (storedKey) {
      const publicKey = (await importJWK(JSON.parse(storedKey.publicKey), 'EdDSA')) as CryptoKey;
      const privateKey = await importPKCS8(storedKey.privateKey, 'EdDSA');
      const keyId = storedKey.id;

      cachedKeyPair = { publicKey, privateKey, keyId };
      return cachedKeyPair;
    }
  } catch (error) {
    console.error('[LTI] Failed to load keys from database:', error);
  }

  try {
    const { publicKey, privateKey } = await generateKeyPair('EdDSA', {
      extractable: true,
    });

    const publicJwk = await exportJWK(publicKey);
    const privateKeyPkcs8 = await exportPKCS8(privateKey);

    const newKey = await prisma.ltiJwks.create({
      data: {
        publicKey: JSON.stringify(publicJwk),
        privateKey: privateKeyPkcs8,
      },
    });

    cachedKeyPair = {
      publicKey,
      privateKey,
      keyId: newKey.id,
    };

    return cachedKeyPair;
  } catch (error) {
    console.error('[LTI] Failed to generate or store keys:', error);
    throw error;
  }
}

export async function getPrivateKey(): Promise<CryptoKey> {
  const { privateKey } = await getKeyPair();
  return privateKey;
}

export async function getKeyId(): Promise<string> {
  const { keyId } = await getKeyPair();
  return keyId;
}

export function clearKeyCache(): void {
  cachedKeyPair = null;
}
