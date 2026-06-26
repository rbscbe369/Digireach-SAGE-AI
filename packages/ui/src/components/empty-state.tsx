import * as React from 'react';

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border rounded-xl bg-gray-50/50 border-dashed">
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">{description}</p>
    </div>
  );
}
