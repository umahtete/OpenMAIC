'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookOpen, FileText, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ContentItem } from '@/lib/deep-linking/types';

interface ClassroomSummary {
  id: string;
  title: string;
  description?: string;
  createdAt?: string;
}

export default function SelectContentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      }
    >
      <SelectContentInner />
    </Suspense>
  );
}

function SelectContentInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const deepLinkingSettingsRaw = searchParams.get('deep_linking_settings');
  const deploymentId = searchParams.get('deployment_id');
  const deepLinkReturnUrl = searchParams.get('deep_link_return_url');

  useEffect(() => {
    if (!deepLinkReturnUrl) {
      setError('Missing deep linking parameters. Please launch from Moodle.');
      setIsLoading(false);
      return;
    }

    async function fetchClassrooms() {
      try {
        const res = await fetch('/api/classroom');
        const data = await res.json();
        if (data.success && data.data?.classrooms?.length > 0) {
          const items: ContentItem[] = data.data.classrooms.map((c: ClassroomSummary) => ({
            type: 'ltiResourceLink',
            title: c.title,
            text: c.description || `Course created ${c.createdAt ? new Date(c.createdAt).toLocaleDateString() : ''}`,
            url: `/classroom/${c.id}`,
          }));
          setContentItems(items);
        } else {
          setContentItems([
            {
              type: 'ltiResourceLink',
              title: 'LuxUp AI Tutor',
              text: 'Launch the AI-powered personalized education platform.',
              url: '/',
            },
          ]);
        }
      } catch {
        setContentItems([
          {
            type: 'ltiResourceLink',
            title: 'LuxUp AI Tutor',
            text: 'Launch the AI-powered personalized education platform.',
            url: '/',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchClassrooms();
  }, [deepLinkReturnUrl]);

  const handleSelectItem = (item: ContentItem) => {
    setSelectedItem(item);
  };

  const handleSubmit = async () => {
    if (!selectedItem || !deepLinkReturnUrl || !deploymentId) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Parse the data from deep_linking_settings query param (it's the original `data` from the launch)
      let deepLinkingData: unknown = undefined;
      if (deepLinkingSettingsRaw) {
        try {
          deepLinkingData = JSON.parse(deepLinkingSettingsRaw);
        } catch {
          // If it's not valid JSON, pass it as-is
          deepLinkingData = deepLinkingSettingsRaw;
        }
      }

      // Call the server-side API to create the JWT
      const response = await fetch('/api/lti/deep-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content_item: {
            type: selectedItem.type,
            title: selectedItem.title,
            url: selectedItem.url,
            text: selectedItem.text,
            custom: selectedItem.custom,
          },
          deep_link_return_url: deepLinkReturnUrl,
          deep_linking_settings_data: deepLinkingData,
          deployment_id: deploymentId,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || 'Failed to create deep linking response');
      }

      // Submit the JWT back to Moodle via a form POST
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = deepLinkReturnUrl;
      form.style.display = 'none';

      const jwtInput = document.createElement('input');
      jwtInput.type = 'hidden';
      jwtInput.name = 'JWT';
      jwtInput.value = result.jwt;
      form.appendChild(jwtInput);

      document.body.appendChild(form);
      form.submit();
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

  if (error && !deepLinkReturnUrl) {
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
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700">
            Content added successfully! This window will close automatically.
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {isLoading ? (
            <div className="col-span-2 flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-primary mr-2" />
              <span className="text-muted-foreground">Loading courses...</span>
            </div>
          ) : contentItems.length === 0 ? (
            <div className="col-span-2 text-center py-12 text-muted-foreground">
              No courses available yet. Create courses in LuxUp AI Tutor first.
            </div>
          ) : (
            contentItems.map((item) => (
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
            ))
          )}
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
