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
  scoresUrl: string | null;
  resultsUrl: string | null;
  lineItemsUrl: string | null;
  lineItemUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
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
  scoresUrl?: string;
  resultsUrl?: string;
  lineItemsUrl?: string;
  lineItemUrl?: string;
}

export interface AgsEndpoints {
  lineItems?: string;
  lineItem?: string;
  scores?: string;
  results?: string;
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
      scoresUrl: data.scoresUrl ?? null,
      resultsUrl: data.resultsUrl ?? null,
      lineItemsUrl: data.lineItemsUrl ?? null,
      lineItemUrl: data.lineItemUrl ?? null,
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

export async function upsertAgsEndpoints(
  contextId: string,
  resourceLinkId: string,
  endpoints: AgsEndpoints,
  contextTitle?: string
): Promise<LtiLineItemRecord> {
  const existing = await prisma.ltiLineItem.findFirst({
    where: { resourceLinkId },
  });

  if (existing) {
    return prisma.ltiLineItem.update({
      where: { id: existing.id },
      data: {
        // Always update contextId if provided (backfills records created before contextId was tracked)
        contextId: contextId ?? existing.contextId,
        scoresUrl: endpoints.scores ?? existing.scoresUrl,
        resultsUrl: endpoints.results ?? existing.resultsUrl,
        lineItemsUrl: endpoints.lineItems ?? existing.lineItemsUrl,
        lineItemUrl: endpoints.lineItem ?? existing.lineItemUrl,
      },
    });
  }

  return prisma.ltiLineItem.create({
    data: {
      contextId,
      resourceLinkId,
      label: contextTitle || resourceLinkId,
      scoreMaximum: 100,
      scoresUrl: endpoints.scores ?? null,
      resultsUrl: endpoints.results ?? null,
      lineItemsUrl: endpoints.lineItems ?? null,
      lineItemUrl: endpoints.lineItem ?? null,
    },
  });
}

export async function getScoresUrlForResourceLink(
  resourceLinkId: string
): Promise<string | null> {
  const record = await prisma.ltiLineItem.findFirst({
    where: { resourceLinkId, scoresUrl: { not: null } },
    select: { scoresUrl: true },
  });
  return record?.scoresUrl ?? null;
}

export async function getAgsEndpointsForResourceLink(
  resourceLinkId: string
): Promise<AgsEndpoints | null> {
  const record = await prisma.ltiLineItem.findFirst({
    where: { resourceLinkId },
    select: {
      scoresUrl: true,
      resultsUrl: true,
      lineItemsUrl: true,
      lineItemUrl: true,
    },
  });
  if (!record) return null;
  return {
    scores: record.scoresUrl ?? undefined,
    results: record.resultsUrl ?? undefined,
    lineItems: record.lineItemsUrl ?? undefined,
    lineItem: record.lineItemUrl ?? undefined,
  };
}
