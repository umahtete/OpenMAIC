import prisma from '@/lib/db';

export type ActivityProgress =
  | 'Initialized'
  | 'Started'
  | 'InProgress'
  | 'Submitted'
  | 'Completed';

export type GradingProgress =
  | 'NotReady'
  | 'Failed'
  | 'Pending'
  | 'PendingManual'
  | 'FullyGraded';

export interface LtiGradeRecord {
  id: string;
  userId: string;
  contextId: string;
  resourceLinkId: string | null;
  score: number;
  scoreMaximum: number;
  activityProgress: string;
  gradingProgress: string;
  timestamp: Date;
  submitted: boolean;
  submittedAt: Date | null;
  createdAt: Date;
}

export interface CreateGradeData {
  userId: string;
  contextId: string;
  resourceLinkId?: string;
  score: number;
  scoreMaximum: number;
  activityProgress: ActivityProgress;
  gradingProgress: GradingProgress;
  timestamp: Date;
  submitted?: boolean;
  submittedAt?: Date;
}

export interface UpdateGradeData {
  score?: number;
  scoreMaximum?: number;
  activityProgress?: ActivityProgress;
  gradingProgress?: GradingProgress;
  timestamp?: Date;
  submitted?: boolean;
  submittedAt?: Date;
}

export async function createGrade(data: CreateGradeData): Promise<LtiGradeRecord> {
  return prisma.ltiGrade.create({
    data: {
      userId: data.userId,
      contextId: data.contextId,
      resourceLinkId: data.resourceLinkId ?? null,
      score: data.score,
      scoreMaximum: data.scoreMaximum,
      activityProgress: data.activityProgress,
      gradingProgress: data.gradingProgress,
      timestamp: data.timestamp,
      submitted: data.submitted ?? false,
      submittedAt: data.submittedAt ?? null,
    },
  });
}

export async function getGradeById(id: string): Promise<LtiGradeRecord | null> {
  return prisma.ltiGrade.findUnique({
    where: { id },
  });
}

export async function getGradesByUserId(userId: string): Promise<LtiGradeRecord[]> {
  return prisma.ltiGrade.findMany({
    where: { userId },
    orderBy: { timestamp: 'desc' },
  });
}

export async function getGradesByContextId(contextId: string): Promise<LtiGradeRecord[]> {
  return prisma.ltiGrade.findMany({
    where: { contextId },
    orderBy: { timestamp: 'desc' },
  });
}

export async function getGradesByResourceLinkId(
  resourceLinkId: string
): Promise<LtiGradeRecord[]> {
  return prisma.ltiGrade.findMany({
    where: { resourceLinkId },
    orderBy: { timestamp: 'desc' },
  });
}

export async function getGradesByUserAndContext(
  userId: string,
  contextId: string
): Promise<LtiGradeRecord[]> {
  return prisma.ltiGrade.findMany({
    where: {
      userId,
      contextId,
    },
    orderBy: { timestamp: 'desc' },
  });
}

export async function updateGrade(
  id: string,
  data: UpdateGradeData
): Promise<LtiGradeRecord> {
  return prisma.ltiGrade.update({
    where: { id },
    data,
  });
}

export async function deleteGrade(id: string): Promise<void> {
  await prisma.ltiGrade.delete({
    where: { id },
  });
}

export async function markGradeSubmitted(
  id: string,
  submittedAt: Date = new Date()
): Promise<LtiGradeRecord> {
  return prisma.ltiGrade.update({
    where: { id },
    data: {
      submitted: true,
      submittedAt,
    },
  });
}
