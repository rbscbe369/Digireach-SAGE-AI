import * as React from 'react';
import { QueueDashboardHeader } from '@/features/queue/components/queue-dashboard-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function QueueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-100">
      <QueueDashboardHeader />
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-7xl">
          <GlobalErrorBoundary>
            {children}
          </GlobalErrorBoundary>
        </div>
      </main>
    </div>
  );
}
