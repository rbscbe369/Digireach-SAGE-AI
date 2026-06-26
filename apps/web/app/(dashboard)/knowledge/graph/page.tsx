import * as React from 'react';
import type { KnowledgeDashboardData } from '@/features/knowledge/types';
import { loadKnowledgeDashboardAction } from '@/features/knowledge/actions';
import { KnowledgeGraphViewer } from '@/features/knowledge/components/knowledge-graph-viewer';
import { NodeInspector } from '@/features/knowledge/components/node-inspector';

export default async function KnowledgeGraphPage() {
  let data: KnowledgeDashboardData = {
    totalNodes: 0,
    totalEdges: 0,
    averageTrust: 0,
    knowledgeGaps: 0,
    recentActivity: []
  };
  
  try {
    const response = await loadKnowledgeDashboardAction('pending-org-id');
    if (response) data = response;
  } catch (err) {
    // Gracefully catch the error so the empty UI renders while pending
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex gap-4 p-6 pb-0">
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold">{data.totalNodes}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Nodes</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold">{data.totalEdges}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Edges</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">{data.averageTrust}%</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Trust</div>
        </div>
        <div className="flex-1 bg-white p-4 border rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-500">{data.knowledgeGaps}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Knowledge Gaps</div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden mt-6">
        <KnowledgeGraphViewer />
        <NodeInspector node={null} />
      </div>
    </div>
  );
}
