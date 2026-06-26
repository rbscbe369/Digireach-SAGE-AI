import * as React from 'react';
import { VideoHeader } from '@/features/video-engine/components/video-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50">
      <VideoHeader />
      <main className="flex-1 overflow-hidden relative">
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </main>
    </div>
  );
}
