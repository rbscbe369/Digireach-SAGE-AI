import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResearchInsight } from '../types';

interface ResearchInsightsPanelProps {
  insights: ResearchInsight[];
}

export function ResearchInsightsPanel({ insights }: ResearchInsightsPanelProps) {
  return (
    <aside className="w-80 border-l bg-white p-4 overflow-y-auto hidden lg:block">
      <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-gray-500">AI Insights</h3>
      <div className="space-y-4">
        {insights.length === 0 ? (
          <div className="text-sm text-gray-500 text-center py-8">
            No insights available yet.
          </div>
        ) : (
          insights.map(insight => (
            <Card key={insight.id} className="bg-blue-50/50 border-blue-100">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm text-blue-900">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-xs text-blue-700">{insight.description}</p>
                {insight.actionLabel && (
                  <button className="mt-3 text-xs font-medium text-blue-600 hover:text-blue-800">
                    {insight.actionLabel} &rarr;
                  </button>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </aside>
  );
}
