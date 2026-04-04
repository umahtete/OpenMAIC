import prisma from '@/lib/db';

export interface LtiLineItemRecord {
  id: string;
  contextId: string;
  label: string;
  resourceId: string | null;
  resourceLinkId: string | null;
  tag: string | null;
  scoreMaximum: number;
  startDateTime: Date | null;
  endDateTime: Date | null;
  platformUrl: string | null;
  createdAt: Date;
}

export interface CreateLineItemData {
  contextId: string;
  label: string;
  resourceId?: string;
  resourceLinkId?: string;
  tag?: string;
  scoreMaximum: number;
  startDateTime?: Date;
  endDateTime?: Date;
    platformUrl?: string;
}

export async function createLineItem(
  data: CreateLineItemData
): Promise<LtiLineItemRecord> {
  return prisma.ltiLineItem.create({
    data: {
      contextId: data.contextId,
      label: data.label,
      resourceId: data.resourceId ?? null,
      resourceLinkId: data.resourceLinkId ?? null,
      tag: data.tag ?? null,
      scoreMaximum: data.scoreMaximum,
      startDateTime: data.startDateTime,
      endDateTime: data.endDateTime,
      platformUrl: data.platformUrl ?? null,
    },
  });
}

export async function getLineItemsForContextFromDb(
  contextId: string
): Promise<LtiLineItemRecord[]> {
  return prisma.ltiLineItem.findMany({
    where: { contextId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getLineItemsByResourceLinkIdFromDb(
  resourceLinkId: string | null
): Promise<LtiLineItemRecord | null> {
  return prisma.ltiLineItem.findFirst({
    where: { resourceLinkId },
    orderBy: { createdAt: 'desc' },
  });
}
