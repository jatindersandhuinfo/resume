// Section base type
export interface SectionBase {
  id: 'about' | 'services' | 'works' | 'experience' | 'faq' | 'skills';
  kicker: string;
  title: string;
  description: string;
}

// About Section
export interface AboutSectionData extends SectionBase {
  id: 'about';
}

// Services Section
export interface ServiceItem {
  label: string;
}

export interface ServicesCopy {
  [key: string]: string;
}

export interface ServiceTag {
  [key: string]: string;
}

export interface ServiceStack {
  [key: string]: string[];
}

export interface ServicesSectionData extends SectionBase {
  id: 'services';
  services: ServiceItem[];
  serviceCopy: ServicesCopy;
  serviceTags: ServiceTag;
  serviceStacks: ServiceStack;
}

// Works Section
export interface WorkItem {
  name: string;
  tech: string;
  result: string;
  url?: string;
}

export interface WorksSectionData extends SectionBase {
  id: 'works';
  works: WorkItem[];
}

// Experience Section
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ExperienceFocus {
  [key: string]: string[];
}

export interface ExperienceSectionData extends SectionBase {
  id: 'experience';
  experience: ExperienceItem[];
  experienceFocus: ExperienceFocus;
}

// Skills Section
export interface CoreStrengthItem {
  name: string;
  detail: string;
}

export interface TechItem {
  category: string;
  items: string[];
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface FaqSectionData extends SectionBase {
  id: 'faq';
  items: FaqItemData[];
}

export interface SkillsSectionData extends SectionBase {
  id: 'skills';
  coreStrengths: CoreStrengthItem[];
  techGroups: TechItem[];
}
