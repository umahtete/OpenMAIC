import prisma from '@/lib/db';

export interface LtiSessionRecord {
  id: string;
  userId: string;
  platformId: string;
  contextId: string;
  contextLabel: string | null;
  contextTitle: string | null;
  resourceLinkId: string | null;
  resourceLinkTitle: string | null;
  customParams: Record<string, unknown> | null;
  expiresAt: Date;
  createdAt: Date;
}

export interface CreateSessionData {
  userId: string;
  platformId: string;
  contextId: string;
  contextLabel?: string;
  contextTitle?: string;
  resourceLinkId?: string;
  resourceLinkTitle?: string;
  customParams?: Record<string, unknown>;
  expiresAt: Date;
}

export async function createSession(
  data: CreateSessionData
): Promise<LtiSessionRecord> {
  return prisma.ltiSession.create({
    data: {
      userId: data.userId,
      platformId: data.platformId,
      contextId: data.contextId,
      contextLabel: data.contextLabel ?? null,
      contextTitle: data.contextTitle ?? null,
      resourceLinkId: data.resourceLinkId ?? null,
      resourceLinkTitle: data.resourceLinkTitle ?? null,
      customParams: data.customParams ?? null,
      expiresAt: data.expiresAt,
    },
  });
}

export async function getSessionById(
  id: string
): Promise<LtiSessionRecord | null> {
  return prisma.ltiSession.findUnique({
    where: { id },
  });
}

export async function getSessionsByUserId(
  userId: string
): Promise<LtiSessionRecord[]> {
  return prisma.ltiSession.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getActiveSessionsByUserId(
  userId: string
): Promise<LtiSessionRecord[]> {
  return prisma.ltiSession.findMany({
    where: {
      userId,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function updateSessionExpiry(
  id: string,
  expiresAt: Date
): Promise<LtiSessionRecord> {
  return prisma.ltiSession.update({
    where: { id },
    data: { expiresAt },
  });
}

export async function deleteSession(id: string): Promise<void> {
  await prisma.ltiSession.delete({
    where: { id },
  });
}

export async function deleteExpiredSessions(): Promise<number> {
  const result = await prisma.ltiSession.deleteMany({
    where: {
      expiresAt: { lt: new Date() },
    },
  });
  return result.count;
}

export async function deleteSessionsByUserId(userId: string): Promise<number> {
  const result = await prisma.ltiSession.deleteMany({
    where: { userId },
  });
  return result.count;
}

export async function cleanExpiredSessions(): Promise<void> {
  await deleteExpiredSessions();
}
