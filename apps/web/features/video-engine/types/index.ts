export type VideoPlatform = 'YOUTUBE' | 'SHORTS' | 'INSTAGRAM_REELS' | 'FACEBOOK_REELS' | 'TIKTOK' | 'LINKEDIN';
export type VideoType = 'EXPLAINER' | 'TALKING_HEAD' | 'PODCAST' | 'TUTORIAL' | 'INTERVIEW';
export type VideoStatus = 'DRAFT' | 'SCRIPTING' | 'STORYBOARDING' | 'VOICEOVER' | 'EXPORT_READY';

export interface VideoProjectData {
  id: string;
  name: string;
  platform: VideoPlatform;
  videoType: VideoType;
  status: VideoStatus;
  createdAt: string;
  updatedAt: string;
}

export interface VideoScriptData {
  id: string;
  projectId: string;
  title: string;
  hook?: string;
  body?: string;
  callToAction?: string;
  duration?: number;
}

export interface VideoEngineDashboardData {
  totalProjects: number;
  completedScripts: number;
  recentProjects: VideoProjectData[];
}
