import * as React from 'react';
import { OptimizationHeader } from '@/features/optimization/components/optimization-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function OptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <OptimizationHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
