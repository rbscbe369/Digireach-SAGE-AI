import * as React from 'react';
import { SourceManagerHeader } from '@/features/source-manager/components/source-manager-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function SourceManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <SourceManagerHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
