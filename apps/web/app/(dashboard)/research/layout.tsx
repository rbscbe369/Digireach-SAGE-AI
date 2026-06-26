import * as React from 'react';
import { ResearchHeader } from '@/features/research/components/research-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <ResearchHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
