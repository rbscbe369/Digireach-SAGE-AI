import * as React from 'react';
import { SocialHeader } from '@/features/social-engine/components/social-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <SocialHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
