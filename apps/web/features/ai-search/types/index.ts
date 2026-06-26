export type AiTargetEngine = 'CHATGPT' | 'PERPLEXITY' | 'GOOGLE_OVERVIEWS' | 'CLAUDE';

export interface AiSearchScoreData {
  visibilityScore: number;
  aeoScore: number;
  geoScore: number;
  entityScore: number;
  citationScore: number;
  knowledgeScore: number;
  voiceScore: number;
  semanticScore: number;
  trustScore: number;
}

export interface AiSearchRecommendationData {
  id: string;
  category: 'ENTITY' | 'CITATION' | 'CHUNKING' | 'SEMANTIC';
  suggestion: string;
  expectedGain: number;
  confidence: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface AiSearchDashboardData {
  projectId: string;
  projectName: string;
  targetUrl: string;
  scores: AiSearchScoreData;
  recentRecommendations: AiSearchRecommendationData[];
}
