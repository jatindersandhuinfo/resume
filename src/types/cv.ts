export interface PersonalInfo {
  firstName: string;
  lastName: string;
  role: string;
  age: number;
  location: string;
  freelanceStatus: string;
  experience: string;
  summary: string;
  sideNote: string;
}

export interface ContactInfo {
  email: string;
  website: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  telegram: string;
  discord: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface TechGroup {
  category: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  items: string[];
  badges: { label: string; bg: string; color: string; border: string }[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  badge: string;
  degree: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  tech: string;
  url?: string;
}

export interface Service {
  label: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  twitterHandle: string;
  siteUrl: string;
}
