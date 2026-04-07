/**
 * User Provisioning Types
 */

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
