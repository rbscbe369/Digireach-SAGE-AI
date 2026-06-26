import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { loadWorkspaceAction } from '@/features/workspace/actions';

export default async function GeneralSettingsPage() {
  // Try loading workspace details
  let settings = null;
  try {
    const data = await loadWorkspaceAction('pending-org-id');
    settings = data.settings;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">General Settings</h2>
        <p className="text-muted-foreground">
          Manage your workspace profile and organization settings.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workspace Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Name</label>
              <input 
                disabled 
                className="w-full p-2 border rounded-md bg-gray-50 text-gray-500" 
                value={settings?.businessName || 'Pending Auth'} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Industry</label>
              <input 
                disabled 
                className="w-full p-2 border rounded-md bg-gray-50 text-gray-500" 
                value={settings?.industry || 'Pending Auth'} 
              />
            </div>
          </div>
          {/* Action buttons would go here in final implementation */}
        </CardContent>
      </Card>
    </div>
  );
}
