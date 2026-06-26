import * as React from 'react';
import { LandingHeader } from '@/features/landing-page-engine/components/landing-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <LandingHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
