export type NodeType = 'Topic' | 'Keyword' | 'Entity' | 'Company' | 'Person' | 'Fact' | 'Statistic' | 'Quote' | 'Competitor' | 'Product' | 'Industry' | 'Website' | 'Location' | 'Technology';

export interface KnowledgeNodeData {
  id: string;
  type: NodeType;
  name: string;
  description?: string;
  sourceId?: string;
  trustScore: number;
  confidence: number;
  usageCount: number;
  metadata?: any;
}

export interface KnowledgeEdgeData {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  relationship: string;
  weight: number;
}

export interface KnowledgeGraphData {
  nodes: KnowledgeNodeData[];
  edges: KnowledgeEdgeData[];
}

export interface KnowledgeDashboardData {
  totalNodes: number;
  totalEdges: number;
  averageTrust: number;
  knowledgeGaps: number;
  recentActivity: any[];
}
