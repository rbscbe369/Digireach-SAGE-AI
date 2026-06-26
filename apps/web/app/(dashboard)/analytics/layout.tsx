import * as React from 'react';
import { AnalyticsHeader } from '@/features/analytics-engine/components/analytics-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <AnalyticsHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
