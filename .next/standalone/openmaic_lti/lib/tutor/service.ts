/**
 * AI Tutor Service
 * Handles AI tutoring with LTI context awareness
 */

import { AITutorContext, buildTutorContext, generateContextualSystemPrompt } from './context-builder';
import { LTISessionData } from '@/lib/lti/provider';

export interface TutorMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface TutorResponse {
  message: string;
  context: AITutorContext;
  timestamp: Date;
}

export class AITutorService {
  private context: AITutorContext | null = null;
  private conversationHistory: TutorMessage[] = [];
  
  initializeFromLTI(sessionData: LTISessionData): void {
    this.context = buildTutorContext(sessionData);
    this.conversationHistory = [];
    
    const systemPrompt = generateContextualSystemPrompt(this.context);
    this.conversationHistory.push({
      role: 'system',
      content: systemPrompt,
    });
    
    console.log('[AI Tutor] Initialized with context:', {
      userId: this.context.userId,
      role: this.context.userRole,
      course: this.context.courseTitle,
    });
  }
  
  async sendMessage(userMessage: string): Promise<TutorResponse> {
    if (!this.context) {
      throw new Error('Tutor not initialized. Call initializeFromLTI first.');
    }
    
    this.conversationHistory.push({
      role: 'user',
      content: userMessage,
    });
    
    const response = await this.callAIAPI(userMessage);
    
    this.conversationHistory.push({
      role: 'assistant',
      content: response,
    });
    
    return {
      message: response,
      context: this.context,
      timestamp: new Date(),
    };
  }
  
  private async callAIAPI(message: string): Promise<string> {
    return `Hello! I'm your AI tutor from LuxUp. I see you're ${this.context?.learningContext.isInCourse ? `in the ${this.context?.courseTitle} course` : 'on the platform'}. How can I help you today?`;
  }
  
  getHistory(): TutorMessage[] {
    return [...this.conversationHistory];
  }
  
  getContext(): AITutorContext | null {
    return this.context;
  }
  
  clearHistory(): void {
    const systemPrompt = this.conversationHistory.find(m => m.role === 'system');
    this.conversationHistory = systemPrompt ? [systemPrompt] : [];
  }
}

let tutorInstance: AITutorService | null = null;

export function getAITutor(): AITutorService {
  if (!tutorInstance) {
    tutorInstance = new AITutorService();
  }
  return tutorInstance;
}
