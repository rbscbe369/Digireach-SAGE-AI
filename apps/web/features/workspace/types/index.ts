export interface WorkspaceSettings {
  id: string;
  organizationId: string;
  businessName: string;
  industry: string;
  website: string;
  supportEmail: string;
  timezone: string;
  language: string;
  currency: string;
}

export interface WorkspaceBranding {
  id: string;
  logoUrl: string | null;
  faviconUrl: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  fontFamily: string | null;
  customDomain: string | null;
}

export interface WorkspaceMember {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: string;
  department: string | null;
  status: 'ACTIVE' | 'SUSPENDED';
  joinedAt: string;
  lastLogin: string | null;
}

export interface WorkspaceIntegration {
  id: string;
  provider: string;
  status: 'CONNECTED' | 'DISCONNECTED';
  lastSyncAt: string | null;
}

export interface WorkspaceStateData {
  settings: WorkspaceSettings | null;
  branding: WorkspaceBranding | null;
  members: WorkspaceMember[];
  integrations: WorkspaceIntegration[];
}
