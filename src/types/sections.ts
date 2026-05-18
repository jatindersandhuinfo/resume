// Section base type
export interface SectionBase {
  id: 'about' | 'services' | 'works' | 'experience' | 'skills';
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
export interface SkillItem {
  name: string;
  level: number;
}

export interface TechItem {
  category: string;
  items: string[];
}

export interface SkillsSectionData extends SectionBase {
  id: 'skills';
  skillBars: SkillItem[];
  techGroups: TechItem[];
}
