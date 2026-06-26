import * as React from 'react';
import { BlogHeader } from '@/features/blog-engine/components/blog-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <BlogHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
