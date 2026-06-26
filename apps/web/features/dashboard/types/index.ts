export interface KPIMetric {
  id: string;
  label: string;
  value: string | number;
  trend: 'up' | 'down' | 'neutral';
  percentageChange: number;
}

export interface ActivityItem {
  id: string;
  type: 'RESEARCH' | 'PUBLISH' | 'SYSTEM' | 'AI';
  title: string;
  description: string;
  timestamp: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export interface AICredits {
  total: number;
  used: number;
  remaining: number;
  resetDate: string;
}

export interface DashboardData {
  metrics: KPIMetric[];
  recentActivity: ActivityItem[];
  credits: AICredits;
}

export interface IDashboardService {
  getDashboardData(organizationId: string): Promise<DashboardData>;
}
