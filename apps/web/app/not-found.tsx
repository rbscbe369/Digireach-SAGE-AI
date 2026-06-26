import * as React from 'react';
import { HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="max-w-md w-full text-center space-y-6 bg-card border rounded-2xl p-8 shadow-lg">
        <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary">
          <HelpCircle className="h-10 w-10" aria-hidden="true" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>
          <p className="text-sm text-muted-foreground">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="pt-2">
          <a
            href="/dashboard"
            className="inline-flex px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/95 rounded-xl transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Go back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
