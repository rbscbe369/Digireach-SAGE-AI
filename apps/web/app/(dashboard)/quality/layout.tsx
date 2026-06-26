import * as React from 'react';
import { QualityHeader } from '@/features/quality-engine/components/quality-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <QualityHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
