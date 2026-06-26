import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AICredits } from '../types';

interface AICreditsPanelProps {
  credits: AICredits;
}

export function AICreditsPanel({ credits }: AICreditsPanelProps) {
  const percentageUsed = (credits.used / credits.total) * 100;

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>AI Credits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Used</span>
            <span className="font-medium">{credits.used.toLocaleString()} / {credits.total.toLocaleString()}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full bg-primary transition-all ${percentageUsed > 90 ? 'bg-red-500' : ''}`}
              style={{ width: `${percentageUsed}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Resets on {new Date(credits.resetDate).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
