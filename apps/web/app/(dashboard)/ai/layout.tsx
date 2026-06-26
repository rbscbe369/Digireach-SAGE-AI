import * as React from 'react';
import { OrchestratorHeader } from '@/features/ai-orchestrator/components/orchestrator-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function AiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <OrchestratorHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
