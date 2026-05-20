export interface PersonalInfo {
  firstName: string;
  lastName: string;
  role: string;
  age: number;
  location: string;
  serviceArea: string;
  freelanceStatus: string;
  experience: string;
  summary: string;
  sideNote: string;
  heroImage: string;
  heroImageRetina: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  website: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  upwork: string;
  telegram: string;
  discord: string;
}

export interface CoreStrength {
  name: string;
  detail: string;
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
  result: string;
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
