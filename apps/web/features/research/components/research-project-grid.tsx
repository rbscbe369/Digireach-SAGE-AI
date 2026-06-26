import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResearchProject } from '../types';

interface ResearchProjectGridProps {
  projects: ResearchProject[];
}

export function ResearchProjectGrid({ projects }: ResearchProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed rounded-xl bg-gray-50/50">
        <h3 className="text-lg font-semibold text-gray-900">No projects yet</h3>
        <p className="mt-2 text-sm text-gray-500 max-w-sm">
          You haven't created any research projects. Click "New Research" to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => (
        <Card key={project.id} className="hover:border-blue-300 transition-colors cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-base font-semibold truncate pr-4">
                {project.name}
              </CardTitle>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 shrink-0">
                {project.status}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{project.type}</span>
                <span>{project.depth} Depth</span>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t">
                <span>{project.sourcesCount} Sources</span>
                <span>Trust: {project.trustScore}/100</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
