/**
 * AI Tutor Chat API
 * Handles chat messages with LTI context awareness
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAITutor } from '@/lib/tutor/service';
import { verifyLTISession } from '@/lib/lti/provider';
import { LTI_CONFIG } from '@/lib/lti/config';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(LTI_CONFIG.session.cookieName);
    
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'No LTI session found' },
        { status: 401 }
      );
    }
    
    const session = await verifyLTISession(sessionToken.value);
    if (!session) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { message } = body;
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    const tutor = getAITutor();
    
    if (!tutor.getContext()) {
      tutor.initializeFromLTI(session);
    }
    
    const response = await tutor.sendMessage(message);
    
    return NextResponse.json({
      success: true,
      response: response.message,
      context: {
        courseId: response.context.courseId,
        courseTitle: response.context.courseTitle,
        userRole: response.context.userRole,
      },
      timestamp: response.timestamp.toISOString(),
    });
    
  } catch (error) {
    console.error('[AI Tutor API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to process message', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(LTI_CONFIG.session.cookieName);
    
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'No LTI session found' },
        { status: 401 }
      );
    }
    
    const session = await verifyLTISession(sessionToken.value);
    if (!session) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }
    
    const tutor = getAITutor();
    
    if (!tutor.getContext()) {
      tutor.initializeFromLTI(session);
    }
    
    const history = tutor.getHistory();
    const context = tutor.getContext();
    
    return NextResponse.json({
      success: true,
      history: history.filter(m => m.role !== 'system'),
      context: {
        courseId: context?.courseId,
        courseTitle: context?.courseTitle,
        userRole: context?.userRole,
      },
    });
    
  } catch (error) {
    console.error('[AI Tutor API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to get history', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
