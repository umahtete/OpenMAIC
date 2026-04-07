import prisma from '@/lib/db';
import { LtiSession } from '@prisma/client';

export type LtiSessionRecord = LtiSession;

export interface CreateSessionData {
  userId: string;
  platformId: string;
  contextId: string;
  contextLabel?: string | null;
  contextTitle?: string | null;
  resourceLinkId?: string | null;
  resourceLinkTitle?: string | null;
  customParams?: Record<string, unknown> | null;
  expiresAt: Date;
}

function toSessionRecord(session: LtiSession): LtiSessionRecord {
  return {
    ...session,
    customParams: session.customParams as Record<string, unknown>,
  } as LtiSessionRecord;
}

export async function createSession(
  data: CreateSessionData
): Promise<LtiSessionRecord> {
  const session = await prisma.ltiSession.create({
    data: {
      userId: data.userId,
      platformId: data.platformId,
      contextId: data.contextId,
      contextLabel: data.contextLabel ?? null,
      contextTitle: data.contextTitle ?? null,
      resourceLinkId: data.resourceLinkId ?? null,
      resourceLinkTitle: data.resourceLinkTitle ?? null,
      customParams: (data.customParams ?? null) as never,
      expiresAt: data.expiresAt,
    },
  });
  return toSessionRecord(session);
}

export async function getSessionById(
  id: string
): Promise<LtiSessionRecord | null> {
  const session = await prisma.ltiSession.findUnique({
    where: { id },
  });
  return session ? toSessionRecord(session) : null;
}

export async function getSessionsByUserId(
  userId: string
): Promise<LtiSessionRecord[]> {
  const sessions = await prisma.ltiSession.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
  return sessions.map(toSessionRecord);
}

export async function getActiveSessionsByUserId(
  userId: string
): Promise<LtiSessionRecord[]> {
  const sessions = await prisma.ltiSession.findMany({
    where: {
      userId,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: 'desc' },
  });
  return sessions.map(toSessionRecord);
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
