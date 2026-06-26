import * as React from 'react';

export default function DashboardLoading() {
  return (
    <div className="p-6 space-y-6 animate-pulse" aria-hidden="true">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-48 bg-muted rounded-lg" />
        <div className="h-4 w-96 bg-muted rounded-lg" />
      </div>

      {/* KPI Cards Skeleton */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 bg-card border rounded-xl p-6 space-y-3">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-8 w-16 bg-muted rounded" />
            <div className="h-3 w-32 bg-muted rounded" />
          </div>
        ))}
      </div>

      {/* Main Grid Skeleton */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 h-96 bg-card border rounded-xl p-6 space-y-4">
          <div className="h-6 w-36 bg-muted rounded-lg" />
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-muted rounded-lg" />
            ))}
          </div>
        </div>

        <div className="h-96 bg-card border rounded-xl p-6 space-y-4">
          <div className="h-6 w-36 bg-muted rounded-lg" />
          <div className="space-y-4">
            <div className="h-32 bg-muted rounded-lg" />
            <div className="h-32 bg-muted rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
