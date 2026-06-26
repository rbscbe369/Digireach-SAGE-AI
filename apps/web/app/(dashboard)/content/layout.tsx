import * as React from 'react';
import { ContentHeader } from '@/features/content-studio/components/content-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <ContentHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
