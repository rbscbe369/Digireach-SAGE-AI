import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivityItem } from '../types';

interface ActivityFeedProps {
  items: ActivityItem[];
}

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <div className="ml-auto font-medium text-xs text-muted-foreground">
                {new Date(item.timestamp).toLocaleDateString()}
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-sm text-center text-muted-foreground">
              No recent activity.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
