import { create } from 'zustand';
import { KnowledgeGraphData, KnowledgeNodeData, KnowledgeDashboardData } from '../types';

interface KnowledgeStoreState {
  graph: KnowledgeGraphData | null;
  selectedNode: KnowledgeNodeData | null;
  filters: Record<string, string>;
  search: string;
  totalNodes: number;
  totalEdges: number;
  averageTrust: number;
  knowledgeGaps: number;
  isLoading: boolean;
  error: string | null;
  
  setDashboardData: (data: KnowledgeDashboardData) => void;
  setGraphData: (data: KnowledgeGraphData) => void;
  setSearch: (search: string) => void;
  setSelectedNode: (node: KnowledgeNodeData | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useKnowledgeStore = create<KnowledgeStoreState>((set) => ({
  graph: null,
  selectedNode: null,
  filters: {},
  search: '',
  totalNodes: 0,
  totalEdges: 0,
  averageTrust: 0,
  knowledgeGaps: 0,
  isLoading: false,
  error: null,
  
  setDashboardData: (data) => set({ ...data, isLoading: false, error: null }),
  setGraphData: (graph) => set({ graph, isLoading: false }),
  setSearch: (search) => set({ search }),
  setSelectedNode: (selectedNode) => set({ selectedNode }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));
