import * as React from 'react';
import { EmailHeader } from '@/features/email-engine/components/email-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function EmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <EmailHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
