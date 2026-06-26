'use client';

import * as React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    console.error('Unhandled App Router Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-md w-full text-center space-y-6 bg-card border rounded-2xl p-8 shadow-lg">
        <div className="inline-flex p-4 bg-destructive/10 rounded-full text-destructive">
          <AlertTriangle className="h-10 w-10" aria-hidden="true" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
          <p className="text-sm text-muted-foreground">
            An unexpected error occurred in the system. We have logged the issue.
          </p>
          {error.message && (
            <pre className="mt-4 p-3 bg-muted text-left text-xs font-mono rounded-lg overflow-x-auto border">
              {error.message}
            </pre>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/95 rounded-xl transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Try again
          </button>
          <a
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium border hover:bg-muted rounded-xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
