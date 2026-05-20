import type {
  PersonalInfo,
  ContactInfo,
  CoreStrength,
  TechGroup,
  WorkExperience,
  Education,
  Project,
  Service,
  SeoMeta,
} from '@/types/cv';
import type {
  AboutSectionData,
  ServicesSectionData,
  WorksSectionData,
  ExperienceSectionData,
  SkillsSectionData,
} from '@/types/sections';

export const seo: SeoMeta = {
  title: 'Jatinder Sandhu — Full Stack Developer | React, Next.js, Node.js, PHP | AI-Powered Development',
  description:
    'Hire Jatinder Sandhu — full stack developer in Bathinda, Punjab. 6+ years, 25+ projects, AI-assisted delivery with Cursor AI & Claude. React, Next.js, Node.js, PHP, Laravel, WordPress, Shopify, and API integrations.',
  keywords:
    'Jatinder Sandhu, Full Stack Developer Punjab, Full Stack Developer Bathinda, Freelance Web Developer India, Hire Full Stack Developer, React Developer India, Next.js Developer India, Node.js Developer India, PHP Laravel Developer, WordPress Developer Punjab, Shopify Developer India, API Integration Developer, AI Integration Developer, Cursor AI Developer, Claude AI Developer, ChatGPT API Developer, OpenAI API Integration, Prompt Engineering, Custom Web Application Developer, Website Developer Bathinda, Web Development Services Punjab, Responsive Website Developer, Ecommerce Website Developer India, CMS Developer, MySQL Developer, MongoDB Developer, Upwork Full Stack Developer',
  ogImage: 'https://jatinder.malwaland.in/jatindersandhu.png',
  twitterHandle: '@jatindersandhuinfo',
  siteUrl: 'https://jatinder.malwaland.in',
};

export const personal: PersonalInfo = {
  firstName: 'Jatinder',
  lastName: 'Sandhu',
  role: 'Full Stack Developer | React, Next.js, Node.js, PHP | AI-Powered Development',
  age: 31,
  location: 'Bathinda, Punjab, India',
  freelanceStatus: 'Available for Freelance',
  experience: '6+ Years',
  summary:
    '6+ years building scalable web apps · PHP · React · Node.js · AI-assisted workflows',
  sideNote:
    'I work with Cursor AI and Claude AI daily for faster, cleaner delivery — fewer bugs and quicker turnaround on your project.',
};

export const contact: ContactInfo = {
  email: 'jatindersandhuinfo@gmail.com',
  website: 'jatinder.malwaland.in',
  phone: '+91 9888360667',
  whatsapp: 'https://wa.me/9888360667',
  linkedin: 'https://www.linkedin.com/in/jatindersandhuinfo/',
  github: 'https://github.com/jatindersandhuinfo',
  upwork: 'https://www.upwork.com/freelancers/jatindersandhuinfo',
  telegram: 'https://t.me/jatindersandhuinfo',
  discord: 'https://discord.gg/w7VjgHAA',
};

export const coreStrengths: CoreStrength[] = [
  { name: 'PHP / Laravel', detail: '12+ production backends & CMS builds' },
  { name: 'React / Next.js', detail: '10+ fast, SEO-friendly frontends' },
  { name: 'WordPress / WooCommerce', detail: '8+ business & booking sites' },
  { name: 'Node.js / APIs', detail: 'REST, JWT auth & third-party integrations' },
  { name: 'AI-Assisted Delivery', detail: 'Cursor AI · Claude · ChatGPT API daily' },
];

export const techGroups: TechGroup[] = [
  {
    category: 'Frontend',
    icon: 'Re',
    iconBg: '#61dafb22',
    iconColor: '#61dafb',
    borderColor: '#61dafb33',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    badges: [
      { label: 'Re', bg: '#61dafb22', color: '#61dafb', border: '#61dafb33' },
      { label: 'Nx', bg: '#ffffff11', color: '#eee', border: '#333' },
      { label: 'Tw', bg: '#06b6d422', color: '#06b6d4', border: '#06b6d433' },
      { label: 'JS', bg: '#f0db4f22', color: '#f0db4f', border: '#f0db4f33' },
      
    ],
  },
  {
    category: 'Backend',
    icon: 'Nd',
    iconBg: '#68a06322',
    iconColor: '#68a063',
    borderColor: '#68a06333',
    items: ['Node.js', 'PHP', 'Laravel', 'WordPress'],
    badges: [
      { label: 'Nd', bg: '#68a06322', color: '#68a063', border: '#68a06333' },
      { label: 'Ph', bg: '#8892be22', color: '#8892be', border: '#8892be33' },
      { label: 'Lv', bg: '#ff2d2022', color: '#ff6b6b', border: '#ff2d2033' },
      { label: 'WP', bg: '#ffffff11', color: '#888', border: '#333' },
    ],
  },
  {
    category: 'Database & Cloud',
    icon: 'Db',
    iconBg: '#ffffff11',
    iconColor: '#888',
    borderColor: '#333',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'DigitalOcean'],
    badges: [],
  },
  {
    category: 'AI & Automation',
    icon: 'AI',
    iconBg: '#d6ad6322',
    iconColor: '#d6ad63',
    borderColor: '#d6ad6333',
    items: ['Cursor AI', 'Claude AI', 'ChatGPT API', 'OpenAI API', 'Prompt Engineering'],
    badges: [
      { label: 'Cu', bg: '#d6ad6322', color: '#d6ad63', border: '#d6ad6333' },
      { label: 'Cl', bg: '#cc785c22', color: '#e8a88a', border: '#cc785c33' },
      { label: 'GP', bg: '#10a37f22', color: '#10a37f', border: '#10a37f33' },
    ],
  },
];

export const services: Service[] = [
  { label: 'Backend Dev' },
  { label: 'Frontend Dev' },
  { label: 'API Integration' },
  { label: 'WordPress' },
  { label: 'Shopify' },
  { label: 'REST API' },
  { label: 'Database' },
  { label: 'AI Integration' },
];

export type SectionData = {
  id: 'about' | 'services' | 'works' | 'experience' | 'skills';
  kicker: string;
  title: string;
  description: string;
};

export const sections: SectionData[] = [
  {
    id: 'about',
    kicker: 'About Me',
    title: 'Transforming your vision into a dynamic web experience through clean UI and robust functionality.',
    description:
      "I’m Jatinder Sandhu, a full stack developer focused on practical builds: clean interfaces, solid backend logic, useful admin tools, and dependable deployment-ready code.",
  },
  {
    id: 'services',
    kicker: 'What I Do',
    title: 'Full-stack services for websites, apps, and business systems.',
    description:
      'From the public website to the admin dashboard, I build the parts clients actually use, manage, and measure. The focus is clean UI, dependable backend logic, and maintainable code.',
  },
  {
    id: 'works',
    kicker: 'Works',
    title: 'Selected builds and production projects.',
    description: 'A focused sample of business websites, ecommerce work, and web applications built with practical stacks.',
  },
  {
    id: 'experience',
    kicker: 'Experience',
    title: 'Production work across frontend, backend, and CMS.',
    description:
      'A practical background in shipping interfaces, APIs, CMS features, and database-backed tools for real business workflows.',
  },
  {
    id: 'skills',
    kicker: 'Skills',
    title: 'Stack I use to build complete web products.',
    description:
      'Frontend, backend, CMS, database, and API work handled with one practical full-stack workflow.',
  },
];

export const experience: WorkExperience[] = [
  {
    company: 'SuperVisionIT Solutions',
    role: 'Full Stack Developer',
    period: 'Aug 2020 — Present',
    description:
      'Built dynamic UIs with React.js + Redux. Developed scalable Node.js APIs with JWT auth. Optimized MongoDB schemas — 40% faster query response on high-traffic modules.',
  },
  {
    company: 'Envy Us Media Pvt Ltd',
    role: 'PHP Developer',
    period: '2019 — 2020',
    description:
      'Built custom CMS with PHP + MySQL. Created web services for third-party integrations. Maintained code quality through debugging and unit testing.',
  }
];

export const education: Education[] = [
  {
    institution: 'Guru Kashi University',
    badge: 'NAAC A++',
    degree: "Master's in Computer Science",
    period: '2015 – 2018',
    description:
      'Specialized in Advanced Web Technologies, Database Management Systems, and Software Architecture.',
  },
  {
    institution: 'Guru Kashi University',
    badge: 'NAAC A++',
    degree: 'Bachelor of Computer Applications',
    period: '2011 – 2014',
    description:
      'Built foundation in programming fundamentals, data structures, and web development.',
  },
];

export const projects: Project[] = [
  {
    name: 'Luxorlimo',
    tech: 'WordPress · Elementor · WooCommerce',
    result:
      'Canadian limo booking site — WooCommerce checkout, mobile-first UX, and lead-ready service pages.',
    url: 'https://luxorlimo.ca/',
  },
  {
    name: 'Luna By Navneet',
    tech: 'Next.js · Tailwind CSS',
    result:
      'Product catalog with ~40% faster load vs legacy build and SEO-optimized product landing pages.',
    url: 'https://lunanav.malwaland.in/',
  },
  {
    name: 'True Holiday Admin',
    tech: 'PHP · MySQL · Bootstrap',
    result:
      'Private admin dashboard managing 500+ holiday packages, bookings, and supplier workflows.',
  },
  {
    name: 'Malwaland Business Hub',
    tech: 'PHP · WordPress · Custom Themes',
    result:
      'Multi-client hosting hub — 6+ live business sites with shared deployment and maintenance workflows.',
    url: 'https://malwaland.in/',
  },
  {
    name: 'JWT Auth API Module',
    tech: 'Node.js · Express · MongoDB',
    result:
      'Reusable auth service with JWT, role-based access, and 40% faster session validation for SaaS modules.',
  },
  {
    name: 'Portfolio — jatinder.malwaland.in',
    tech: 'Next.js · TypeScript · Tailwind CSS',
    result:
      'SEO-first portfolio with structured data, sitemap, and performance-focused static delivery.',
    url: 'https://jatinder.malwaland.in/',
  },
  {
    name: 'WooCommerce Booking Flow',
    tech: 'WordPress · WooCommerce · PHP',
    result:
      'Custom booking availability and checkout flow for service businesses — real-time slot selection.',
  },
];

// Section-specific data

const serviceCopy: Record<string, string> = {
  'Backend Dev': 'APIs, auth, database design, and server-side logic that can grow with the product.',
  'Frontend Dev': 'Responsive interfaces built with React, Next.js, Tailwind CSS, and clean component systems.',
  'API Integration': 'Payments, booking tools, CRMs, third-party data, and custom service integrations.',
  WordPress: 'Custom WordPress builds, theme work, Elementor pages, WooCommerce, and CMS maintenance.',
  Shopify: 'Storefront improvements, product flows, theme edits, and conversion-focused ecommerce UI.',
  'REST API': 'Structured endpoints, validation, JWT authentication, and practical API documentation.',
  Database: 'MySQL, MongoDB, PostgreSQL, schema planning, optimization, and data workflows.',
  'AI Integration':
    'ChatGPT API, Claude API, LLM features, and AI-powered tools — from smart forms to content automation and dev workflow acceleration.',
};

const serviceTags: Record<string, string> = {
  'Backend Dev': 'Architecture',
  'Frontend Dev': 'Interface',
  'API Integration': 'Automation',
  WordPress: 'CMS',
  Shopify: 'Commerce',
  'REST API': 'Backend',
  Database: 'Data',
  'AI Integration': 'Intelligence',
};

const serviceStacks: Record<string, string[]> = {
  'Backend Dev': ['Node.js', 'PHP', 'Laravel'],
  'Frontend Dev': ['React', 'Next.js', 'Tailwind'],
  'API Integration': ['REST', 'Webhooks', 'CRM'],
  WordPress: ['CMS', 'Elementor', 'WooCommerce'],
  Shopify: ['Storefront', 'Theme', 'Checkout'],
  'REST API': ['JWT', 'Validation', 'Docs'],
  Database: ['MySQL', 'MongoDB', 'Postgres'],
  'AI Integration': ['OpenAI', 'Claude', 'Cursor AI'],
};

const experienceFocus: Record<string, string[]> = {
  'SuperVisionIT Solutions': ['React + Redux', 'Node APIs', 'JWT Auth', 'MongoDB'],
  'Envy Us Media Pvt Ltd': ['PHP CMS', 'MySQL', 'Integrations', 'Testing'],
};

// Section exports

export const aboutSection: AboutSectionData = {
  id: 'about',
  kicker: 'About Me',
  title: 'Transforming your vision into a dynamic web experience through clean UI and robust functionality.',
  description:
    "I'm Jatinder Sandhu, a full stack developer focused on practical builds: clean interfaces, solid backend logic, useful admin tools, and dependable deployment-ready code.",
};

export const servicesSection: ServicesSectionData = {
  id: 'services',
  kicker: 'What I Do',
  title: 'Full-stack services for websites, apps, and business systems.',
  description:
    'From the public website to the admin dashboard, I build the parts clients actually use, manage, and measure. The focus is clean UI, dependable backend logic, and maintainable code.',
  services,
  serviceCopy,
  serviceTags,
  serviceStacks,
};

export const worksSection: WorksSectionData = {
  id: 'works',
  kicker: 'Works',
  title: 'Selected builds and production projects.',
  description: 'A focused sample of business websites, ecommerce work, and web applications built with practical stacks.',
  works: projects,
};

export const experienceSection: ExperienceSectionData = {
  id: 'experience',
  kicker: 'Experience',
  title: 'Production work across frontend, backend, and CMS.',
  description:
    'A practical background in shipping interfaces, APIs, CMS features, and database-backed tools for real business workflows.',
  experience,
  experienceFocus,
};

export const skillsSection: SkillsSectionData = {
  id: 'skills',
  kicker: 'Skills',
  title: 'Stack I use to build complete web products.',
  description:
    'Frontend, backend, CMS, database, and API work handled with one practical full-stack workflow.',
  coreStrengths,
  techGroups: techGroups.map(group => ({
    category: group.category,
    items: group.items,
  })),
};

export const stats = [
  {
    value: '6+',
    label: 'Years Experience',
  },
  {
    value: '25+',
    label: 'Projects Delivered',
  },
  {
    value: '20+',
    label: 'Happy Clients',
  },
  {
    value: '100%',
    label: 'Clean & Scalable Code',
  },
];
