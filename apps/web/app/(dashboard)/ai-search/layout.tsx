import * as React from 'react';
import { AiSearchHeader } from '@/features/ai-search/components/ai-search-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function AiSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <AiSearchHeader />
      <main className="flex-1 overflow-y-auto">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
