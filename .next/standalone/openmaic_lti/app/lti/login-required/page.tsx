// LTI Login Required Page
// Shown when user tries to access without valid LTI session

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LTIMissingPage() {
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect to Moodle after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://courses.luxuptraining.com';
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Moodle Login Required
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            This content must be accessed through Moodle. Please launch the activity from your course page.
          </p>

          {/* Redirect info */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-700">
              You will be redirected to Moodle in 5 seconds...
            </p>
          </div>

          {/* Manual redirect button */}
          <a
            href="https://courses.luxuptraining.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Go to Moodle Now
          </a>

          {/* Help text */}
          <p className="mt-6 text-sm text-gray-500">
            If you believe this is an error, please contact your instructor.
          </p>
        </div>
      </div>
    </div>
  );
}
