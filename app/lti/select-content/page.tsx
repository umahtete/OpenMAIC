'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookOpen, FileText, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { submitDeepLinkingResponse } from '@/lib/lti/deep-linking';
import type { ContentItem } from '@/lib/deep-linking/types';

const sampleContentItems: ContentItem[] = [
  {
    type: 'ltiResourceLink',
    title: 'Introduction to Biblical Studies',
    text: 'Learn the foundations of biblical interpretation and study methods.',
    url: '/classroom/biblical-studies-intro',
  },
  {
    type: 'ltiResourceLink',
    title: 'Church History Overview',
    text: 'Explore the major events and figures in Christian church history.',
    url: '/classroom/church-history',
  },
  {
    type: 'ltiResourceLink',
    title: 'Theology Fundamentals',
    text: 'Understand core theological concepts and doctrines.',
    url: '/classroom/theology-fundamentals',
  },
  {
    type: 'ltiResourceLink',
    title: 'Prayer and Spiritual Practices',
    text: 'Develop a deeper prayer life and spiritual disciplines.',
    url: '/classroom/prayer-practices',
  },
];

export default function SelectContentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deepLinkingSettings = searchParams.get('deep_linking_settings');
  const deploymentId = searchParams.get('deployment_id');
  const deepLinkReturnUrl = searchParams.get('deep_link_return_url');

  useEffect(() => {
    if (!deepLinkingSettings && !deepLinkReturnUrl) {
      setError('Missing deep linking parameters. Please launch from Moodle.');
    }
  }, [deepLinkingSettings, deepLinkReturnUrl]);

  const handleSelectItem = (item: ContentItem) => {
    setSelectedItem(item);
  };

  const handleSubmit = async () => {
    if (!selectedItem) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const settings = {
        deep_link_return_url: deepLinkReturnUrl || '',
        accept_types: ['ltiResourceLink'],
        data: deepLinkingSettings ? { deep_linking_settings: deepLinkingSettings } : undefined,
      };

      await submitDeepLinkingResponse(
        settings,
        selectedItem.url?.split('/').pop() || selectedItem.title.toLowerCase().replace(/\s+/g, '-'),
        selectedItem.title,
        selectedItem.type
      );

      setTimeout(() => {
        window.close();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add content');
      setIsSubmitting(false);
    }
  };

  const getTypeIcon = (type: ContentItem['type']) => {
    switch (type) {
      case 'ltiResourceLink':
        return <BookOpen className="w-5 h-5" />;
      case 'link':
        return <FileText className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: ContentItem['type']) => {
    switch (type) {
      case 'ltiResourceLink':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'link':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-6 text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-1.964-1.333-2.732 0L3.732 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Error</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => router.push('/')} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Select Content</h1>
              <p className="text-sm text-muted-foreground">Choose content to embed in your Moodle course</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {sampleContentItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleSelectItem(item)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedItem?.title === item.title
                  ? getTypeColor(item.type) + ' ring-2 ring-offset-2'
                  : 'bg-card border-border hover:border-primary/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${getTypeColor(item.type)}`}>
                      {item.type === 'ltiResourceLink' ? 'Resource' : item.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.text}</p>
                </div>
                {selectedItem?.title === item.title && (
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => setSelectedItem(null)}
            disabled={!selectedItem || isSubmitting}
          >
            Clear Selection
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!selectedItem || isSubmitting}
            className="min-w-[140px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Add to Course
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </main>
    </div>
  );
}
