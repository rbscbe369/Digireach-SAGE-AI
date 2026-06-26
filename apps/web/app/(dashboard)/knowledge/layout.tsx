import * as React from 'react';
import { KnowledgeHeader } from '@/features/knowledge/components/knowledge-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <KnowledgeHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
