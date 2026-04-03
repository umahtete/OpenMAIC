/**
 * AI Tutor Context Builder
 * Builds context from LTI session for personalized AI responses
 */

import { LTISessionData } from '@/lib/lti/provider';
import { ProvisionedUser } from '@/lib/user-provisioning/types';

export interface AITutorContext {
  userId: string;
  userName?: string;
  userEmail?: string;
  userRole: 'student' | 'teacher' | 'admin';
  
  courseId?: string;
  courseTitle?: string;
  
  platformId: string;
  platformName: string;
  
  learningContext: {
    isInCourse: boolean;
    courseName?: string;
    resourceTitle?: string;
  };
  
  personalization: {
    preferredLanguage: string;
    timezone: string;
    educationLevel: string;
  };
  
  sessionStartedAt: Date;
  contextBuiltAt: Date;
}

const platformNames: Record<string, string> = {
  'https://courses.luxuptraining.com': 'LuxUp Training LMS',
};

export function buildTutorContext(sessionData: LTISessionData, user?: ProvisionedUser): AITutorContext {
  return {
    userId: sessionData.userId,
    userName: sessionData.name,
    userEmail: sessionData.email,
    userRole: sessionData.role,
    
    courseId: sessionData.contextId,
    courseTitle: sessionData.contextTitle,
    
    platformId: sessionData.platformId,
    platformName: platformNames[sessionData.platformId] || 'Unknown Platform',
    
    learningContext: {
      isInCourse: !!sessionData.contextId,
      courseName: sessionData.contextTitle,
      resourceTitle: undefined,
    },
    
    personalization: {
      preferredLanguage: 'en',
      timezone: 'UTC',
      educationLevel: 'general',
    },
    
    sessionStartedAt: new Date(),
    contextBuiltAt: new Date(),
  };
}

export function generateContextualSystemPrompt(context: AITutorContext): string {
  const rolePrompts: Record<string, string> = {
    student: 'You are a helpful AI tutor assisting a student.',
    teacher: 'You are an AI teaching assistant helping an educator.',
    admin: 'You are an AI assistant for a platform administrator.',
  };
  
  let systemPrompt = rolePrompts[context.userRole] || rolePrompts.student;
  
  if (context.learningContext.isInCourse && context.learningContext.courseName) {
    systemPrompt += ` The student is currently in the course "${context.learningContext.courseName}".`;
  }
  
  systemPrompt += ` This session is from ${context.platformName}.`;
  
  if (context.userName) {
    systemPrompt += ` The user's name is ${context.userName}.`;
  }
  
  return systemPrompt;
}

export function formatContextForAI(context: AITutorContext): Record<string, any> {
  return {
    user_id: context.userId,
    user_role: context.userRole,
    course_id: context.courseId,
    course_name: context.courseTitle,
    platform: context.platformName,
    session_timestamp: context.contextBuiltAt.toISOString(),
  };
}
