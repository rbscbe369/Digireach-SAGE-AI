export type EmailCampaignType = 'NEWSLETTER' | 'PROMOTIONAL' | 'TRANSACTIONAL' | 'AUTOMATION';
export type EmailStatus = 'DRAFT' | 'SCHEDULED' | 'SENDING' | 'SENT' | 'ARCHIVED';

export interface EmailProjectData {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmailCampaignData {
  id: string;
  name: string;
  campaignType: EmailCampaignType;
  status: EmailStatus;
  subject: string;
  scheduledAt?: string;
  sentAt?: string;
}

export interface EmailEngineDashboardData {
  totalSent: number;
  openRate: number;
  clickRate: number;
  activeAutomations: number;
  recentCampaigns: EmailCampaignData[];
}
