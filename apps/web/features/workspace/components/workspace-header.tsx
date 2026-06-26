import * as React from 'react';
import { WorkspaceSettings } from '../types';

interface WorkspaceHeaderProps {
  settings: WorkspaceSettings | null;
}

export function WorkspaceHeader({ settings }: WorkspaceHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-4">
        {/* Placeholder for Logo */}
        <div className="h-8 w-8 rounded bg-gray-200" />
        <div>
          <h1 className="text-lg font-semibold">{settings?.businessName || 'Workspace'}</h1>
          <p className="text-xs text-muted-foreground">ID: {settings?.id || 'pending'}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-right">
          <p className="font-medium">Plan: Pending Auth</p>
          <p className="text-xs text-muted-foreground">Owner: Pending Auth</p>
        </div>
      </div>
    </header>
  );
}
