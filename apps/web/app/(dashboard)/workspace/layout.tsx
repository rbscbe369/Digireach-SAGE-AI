import * as React from 'react';
import { WorkspaceSidebar } from '@/features/workspace/components/workspace-sidebar';
import { WorkspaceHeader } from '@/features/workspace/components/workspace-header';
import { GlobalErrorBoundary } from '@/components/ui/error-boundary';
import { loadWorkspaceAction } from '@/features/workspace/actions';

export default async function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Try loading workspace details to populate Header
  // Will throw "Pending Implementation" error since Auth is disconnected.
  let settings = null;
  
  try {
    const data = await loadWorkspaceAction('pending-org-id');
    settings = data.settings;
  } catch (err) {
    // We let the Error Boundary catch rendering errors in children or page, 
    // but the layout can still render the skeleton/shell.
  }

  return (
    <div className="flex min-h-screen">
      <WorkspaceSidebar />
      <div className="flex-1 flex flex-col">
        <WorkspaceHeader settings={settings} />
        <main className="flex-1 p-8 overflow-auto bg-gray-50/50">
          <div className="mx-auto max-w-5xl">
            <GlobalErrorBoundary>
              {children}
            </GlobalErrorBoundary>
          </div>
        </main>
      </div>
    </div>
  );
}
