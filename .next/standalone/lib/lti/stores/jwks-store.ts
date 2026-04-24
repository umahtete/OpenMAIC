import prisma from '@/lib/db';

export interface LtiJwksRecord {
  id: string;
  publicKey: string;
  privateKey: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateJwksData {
  publicKey: string;
  privateKey: string;
}

export async function createJwks(data: CreateJwksData): Promise<LtiJwksRecord> {
  return prisma.ltiJwks.create({
    data: {
      publicKey: data.publicKey,
      privateKey: data.privateKey,
    },
  });
}

export async function getLatestJwks(): Promise<LtiJwksRecord | null> {
  return prisma.ltiJwks.findFirst({
    orderBy: { createdAt: 'desc' },
  });
}

export async function getJwksById(id: string): Promise<LtiJwksRecord | null> {
  return prisma.ltiJwks.findUnique({
    where: { id },
  });
}

export async function updateJwks(
  id: string,
  data: Partial<CreateJwksData>
): Promise<LtiJwksRecord> {
  return prisma.ltiJwks.update({
    where: { id },
    data,
  });
}

export async function deleteJwks(id: string): Promise<void> {
  await prisma.ltiJwks.delete({
    where: { id },
  });
}

export async function getAllJwks(): Promise<LtiJwksRecord[]> {
  return prisma.ltiJwks.findMany({
    orderBy: { createdAt: 'desc' },
  });
}
