export type AnalyticsCategory = 'CONTENT' | 'RESEARCH' | 'PUBLISHING' | 'SEO' | 'SOCIAL' | 'EMAIL' | 'VIDEO' | 'CAMPAIGN' | 'ROI';
export type AttributionModel = 'FIRST_TOUCH' | 'LAST_TOUCH' | 'LINEAR' | 'TIME_DECAY' | 'POSITION_BASED';
export type AlertLevel = 'INFO' | 'WARNING' | 'CRITICAL';

export interface AnalyticsKpiData {
  id: string;
  name: string;
  currentValue: number;
  previousValue: number | null;
  changePercentage: number;
  trend: 'UP' | 'DOWN' | 'FLAT';
}

export interface AnalyticsForecastData {
  metric: string;
  predictedValue: number;
  confidenceScore: number;
  targetDate: string;
}

export interface AnalyticsRoiData {
  entityId: string;
  entityName: string;
  cost: number;
  revenue: number;
  roiPercentage: number;
}

export interface AnalyticsEngineDashboardData {
  overviewKpis: AnalyticsKpiData[];
  revenueForecast: AnalyticsForecastData | null;
  topCampaignsRoi: AnalyticsRoiData[];
  activeAlerts: number;
}
