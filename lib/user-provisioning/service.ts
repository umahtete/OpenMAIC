/**
 * User Provisioning Service
 * Handles JIT (Just-In-Time) user creation from LTI launches
 */

import { LTISessionData } from '@/lib/lti/provider';

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

export interface UserProvisioningResult {
  user: ProvisionedUser;
  isNew: boolean;
}

/**
 * In-memory user store (replace with database in production)
 */
const userStore: Map<string, ProvisionedUser> = new Map();

/**
 * Provision or retrieve a user from LTI session data
 */
export async function provisionUserFromLTI(sessionData: LTISessionData): Promise<UserProvisioningResult> {
  const userId = `${sessionData.platformId}:${sessionData.userId}`;
  
  const existingUser = userStore.get(userId);
  
  if (existingUser) {
    existingUser.lastAccessedAt = new Date();
    return { user: existingUser, isNew: false };
  }
  
  const newUser: ProvisionedUser = {
    id: userId,
    email: sessionData.email,
    name: sessionData.name,
    role: sessionData.role,
    platformId: sessionData.platformId,
    platformUserId: sessionData.userId,
    contextId: sessionData.contextId,
    contextTitle: sessionData.contextTitle,
    createdAt: new Date(),
    lastAccessedAt: new Date(),
  };
  
  userStore.set(userId, newUser);
  
  console.log('[User Provisioning] Created new user:', {
    id: userId,
    email: sessionData.email,
    role: sessionData.role,
  });
  
  return { user: newUser, isNew: true };
}

/**
 * Get user by ID
 */
export async function getUserById(userId: string): Promise<ProvisionedUser | null> {
  return userStore.get(userId) || null;
}

/**
 * Get user by platform user ID
 */
export async function getUserByPlatformId(platformId: string, platformUserId: string): Promise<ProvisionedUser | null> {
  const userId = `${platformId}:${platformUserId}`;
  return userStore.get(userId) || null;
}

/**
 * Update user's last accessed time
 */
export async function touchUser(userId: string): Promise<void> {
  const user = userStore.get(userId);
  if (user) {
    user.lastAccessedAt = new Date();
  }
}

/**
 * Get all users (for admin purposes)
 */
export async function getAllUsers(): Promise<ProvisionedUser[]> {
  return Array.from(userStore.values());
}
