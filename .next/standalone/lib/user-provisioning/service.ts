/**
 * User Provisioning Service
 * Handles JIT (Just-In-Time) user creation from LTI launches
 */

import { LTISessionData } from '@/lib/lti/provider';
import {
  upsertUser,
  getUserById,
  getUserBySub,
  mapRolesToOpenMAIC,
  type LtiUserRecord,
} from '@/lib/lti/stores/user-store';

export interface ProvisionedUser {
  id: string;
  email?: string;
  name?: string;
  role: 'student' | 'teacher' | 'admin';
  platformId: string;
  platformUserId: string;
  contextId?: string;
  contextTitle?: string;
  createdAt: Date;
  lastAccessedAt: Date;
}

export interface ProvisioningResult {
  user: ProvisionedUser;
  isNew: boolean;
}

/**
 * Convert LtiUserRecord to ProvisionedUser
 */
function toProvisionedUser(record: LtiUserRecord): ProvisionedUser {
  const [platformId, platformUserId] = record.sub.split(':');
  return {
    id: record.id,
    email: record.email ?? undefined,
    name: record.name ?? undefined,
    role: mapRolesToOpenMAIC(record.roles),
    platformId: platformId ?? record.platformId,
    platformUserId: platformUserId ?? '',
    createdAt: record.createdAt,
    lastAccessedAt: record.updatedAt,
  };
}

/**
 * Provision a user from LTI session data
 * Creates or updates the user based on LTI launch information
 */
export async function provisionUserFromLTI(
  sessionData: LTISessionData
): Promise<ProvisioningResult> {
  // Create unique subject identifier
  const sub = `${sessionData.platformId}:${sessionData.userId}`;

  // Check if user already exists
  const existingUser = await getUserBySub(sub);

  if (existingUser) {
    // Update existing user
    const updated = await upsertUser({
      sub,
      platformId: sessionData.platformId,
      email: sessionData.email,
      name: sessionData.name,
      roles: [sessionData.role],
    });

    return {
      user: toProvisionedUser(updated),
      isNew: false,
    };
  }

  // Create new user
  const newUser = await upsertUser({
    sub,
    platformId: sessionData.platformId,
    email: sessionData.email,
    name: sessionData.name,
    roles: [sessionData.role],
  });

  return {
    user: toProvisionedUser(newUser),
    isNew: true,
  };
}

/**
 * Get a provisioned user by ID
 */
export async function getProvisionedUser(id: string): Promise<ProvisionedUser | null> {
  const record = await getUserById(id);
  return record ? toProvisionedUser(record) : null;
}

/**
 * Get a provisioned user by platform ID and user ID
 */
export async function getProvisionedUserByPlatformId(
  platformId: string,
  platformUserId: string
): Promise<ProvisionedUser | null> {
  const sub = `${platformId}:${platformUserId}`;
  const record = await getUserBySub(sub);
  return record ? toProvisionedUser(record) : null;
}
