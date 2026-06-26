'use client';

import * as React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const isPending = this.state.error?.message.includes('Pending Implementation');
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center border rounded-xl bg-red-50/50 border-red-200">
          <h3 className="mt-4 text-lg font-semibold text-red-800">
            {isPending ? 'Pending Implementation' : 'Something went wrong'}
          </h3>
          <p className="mt-2 text-sm text-red-600 max-w-sm">
            {this.state.error?.message}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
