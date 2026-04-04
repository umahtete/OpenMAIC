import prisma from '@/lib/db';

export interface LtiStateRecord {
  id: string;
  state: string;
  nonce: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface CreateStateData {
  state: string;
  nonce: string;
  expiresAt: Date;
}

export async function createState(data: CreateStateData): Promise<LtiStateRecord> {
  return prisma.ltiState.create({
    data: {
      state: data.state,
      nonce: data.nonce,
      expiresAt: data.expiresAt,
    },
  });
}

export async function getStateByState(state: string): Promise<LtiStateRecord | null> {
  return prisma.ltiState.findUnique({
    where: { state },
  });
}

export async function getAndDeleteState(state: string): Promise<{ nonce: string } | null> {
  const stored = await prisma.ltiState.findUnique({
    where: { state },
  });

  if (!stored) {
    return null;
  }

  await prisma.ltiState.delete({
    where: { state },
  });

  if (stored.expiresAt < new Date()) {
    return null;
  }

  return { nonce: stored.nonce };
}

export async function deleteState(state: string): Promise<void> {
  await prisma.ltiState.delete({
    where: { state },
  });
}

export async function deleteExpiredStates(): Promise<number> {
  const result = await prisma.ltiState.deleteMany({
    where: {
      expiresAt: { lt: new Date() },
    },
  });
  return result.count;
}

export async function cleanExpiredStates(): Promise<void> {
  await deleteExpiredStates();
}
