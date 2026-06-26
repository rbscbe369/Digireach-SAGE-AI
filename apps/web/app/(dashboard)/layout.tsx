import * as React from 'react';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      {/* We will add Sidebar and Header in Module 004 Workspace */}
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-7xl">
          <GlobalErrorBoundary>
            {children}
          </GlobalErrorBoundary>
        </div>
      </main>
    </div>
  );
}
