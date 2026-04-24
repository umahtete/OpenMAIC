import prisma from '@/lib/db';
import { OpenMAICRole } from '@/lib/lti/types';

export interface LtiUserRecord {
  id: string;
  sub: string;
  platformId: string;
  email: string | null;
  name: string | null;
  givenName: string | null;
  familyName: string | null;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserData {
  sub: string;
  platformId: string;
  email?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  roles: string[];
}

export interface UpdateUserData {
  email?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  roles?: string[];
}

export async function createUser(data: CreateUserData): Promise<LtiUserRecord> {
  return prisma.ltiUser.create({
    data: {
      sub: data.sub,
      platformId: data.platformId,
      email: data.email ?? null,
      name: data.name ?? null,
      givenName: data.givenName ?? null,
      familyName: data.familyName ?? null,
      roles: data.roles,
    },
  });
}

export async function getUserBySub(sub: string): Promise<LtiUserRecord | null> {
  return prisma.ltiUser.findUnique({
    where: { sub },
  });
}

export async function getUserById(id: string): Promise<LtiUserRecord | null> {
  return prisma.ltiUser.findUnique({
    where: { id },
  });
}

export async function getUserByPlatformId(
  platformId: string,
  platformUserId: string
): Promise<LtiUserRecord | null> {
  const sub = `${platformId}:${platformUserId}`;
  return getUserBySub(sub);
}

export async function updateUser(
  id: string,
  data: UpdateUserData
): Promise<LtiUserRecord> {
  return prisma.ltiUser.update({
    where: { id },
    data,
  });
}

export async function upsertUser(data: CreateUserData): Promise<LtiUserRecord> {
  return prisma.ltiUser.upsert({
    where: { sub: data.sub },
    update: {
      email: data.email ?? null,
      name: data.name ?? null,
      givenName: data.givenName ?? null,
      familyName: data.familyName ?? null,
      roles: data.roles,
    },
    create: {
      sub: data.sub,
      platformId: data.platformId,
      email: data.email ?? null,
      name: data.name ?? null,
      givenName: data.givenName ?? null,
      familyName: data.familyName ?? null,
      roles: data.roles,
    },
  });
}

export async function getAllUsers(): Promise<LtiUserRecord[]> {
  return prisma.ltiUser.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function deleteUser(id: string): Promise<void> {
  await prisma.ltiUser.delete({
    where: { id },
  });
}

export function mapRolesToOpenMAIC(roles: string[]): OpenMAICRole {
  const ROLE_MAPPINGS: Record<string, OpenMAICRole> = {
    'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator':
      'admin',
    'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor':
      'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Learner': 'student',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator': 'admin',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper':
      'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Manager': 'admin',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor': 'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership#TeachingAssistant':
      'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#Grader':
      'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#PrimaryInstructor':
      'teacher',
    'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#SecondaryInstructor':
      'teacher',
  };

  for (const role of roles) {
    const mapped = ROLE_MAPPINGS[role];
    if (mapped) {
      if (mapped === 'admin') return 'admin';
      if (mapped === 'teacher') continue;
      return mapped;
    }
  }

  return 'student';
}
