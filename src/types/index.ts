export interface Project {
  id: string;
  code: string;
  name: string;
  category: string;
  title?: string;
  tagline?: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technology: string[];
  recognition?: string;
  metrics?: { label: string; value: string }[];
  links: { caseStudy?: string; repo?: string; demo?: string };
}

export interface SkillNode {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  level: string;
  applicationAreas: string[];
  usedInProjects: string[];
  connections?: string[];
}

export interface ExperienceRecord {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  responsibilities: string[];
  skills: string[];
  highlightMetric?: string;
}

export interface AchievementItem {
  id: string;
  archiveId: string;
  title: string;
  subtitle?: string;
  organization: string;
  date: string;
  project?: string;
  description: string;
  metrics?: { participants?: string; institutions?: string; level?: string };
  hasCertificate: boolean;
  certificateImage?: string;
  verified: boolean;
  category: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
}
