import * as React from 'react';
import { PromptHeader } from '@/features/prompt-engine/components/prompt-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <PromptHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
