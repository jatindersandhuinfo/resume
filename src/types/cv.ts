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
  fiverr: string;
  freelancer: string;
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

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface TechStackGroup {
  group: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  coverImage?: string;
  images?: string[];
  tagline: string;
  tech: string;
  result: string;
  url?: string;
  category: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  techStack: TechStackGroup[];
  developer?: string;
  /** Mark true to show this project in the homepage featured section */
  featured?: boolean;
}

export interface Service {
  label: string;
  slug?: string;
  seoTitle?: string;
  seoDescription?: string;
  description?: string;
  showOnHome?: boolean;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  twitterHandle: string;
  siteUrl: string;
}
