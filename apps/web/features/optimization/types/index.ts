export interface TokenUsageData {
  id: string;
  featureId: string;
  providerId: string;
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  cachedTokens: number;
  totalTokens: number;
  estimatedCost: number;
  createdAt: string;
}

export interface OptimizationRecommendationData {
  id: string;
  suggestionType: string;
  description: string;
  estimatedSavings: number;
  status: 'PENDING' | 'APPLIED' | 'DISMISSED';
}

export interface OptimizationDashboardData {
  todaysCost: number;
  todaysTokens: number;
  tokensSaved: number;
  moneySaved: number;
  cacheHitRate: number;
  averageRequestCost: number;
  optimizationScore: number;
  recentRecommendations: OptimizationRecommendationData[];
}
