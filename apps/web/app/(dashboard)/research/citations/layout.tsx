import * as React from 'react';
import { CitationHeader } from '@/features/citations/components/citation-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function CitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <CitationHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
