import type {
  PersonalInfo,
  ContactInfo,
  Skill,
  TechGroup,
  WorkExperience,
  Education,
  Project,
  Service,
  SeoMeta,
} from '@/types/cv';

export const seo: SeoMeta = {
  title: 'Jatinder Sandhu — Full Stack Developer',
  description:
    'Jatinder Sandhu is a Full Stack Developer with 5+ years of experience in PHP, React.js, Next.js, Node.js, Laravel, and WordPress. Based in Bathinda, Punjab, India.',
  keywords:
    'Jatinder Sandhu, Full Stack Developer, PHP Developer, React Developer, Next.js, Node.js, Laravel, WordPress, Freelance Developer India, Bathinda developer, Hire Full Stack Developer, Full Stack Developer Bathinda, PHP Laravel Developer, React Next.js Developer, WordPress Developer, Freelance Web Developer Punjab, Web Development Services India, Custom Web Application Developer, API Developer, Database Developer, E-commerce Solutions, Shopify Developer',
  ogImage: 'https://jatinder.malwaland.in/jatindersandhu.png',
  twitterHandle: '@jatindersandhuinfo',
  siteUrl: 'https://jatinder.malwaland.in',
};

export const personal: PersonalInfo = {
  firstName: 'Jatinder',
  lastName: 'Sandhu',
  role: 'Full Stack Developer',
  age: 31,
  location: 'Bathinda, Punjab, India',
  freelanceStatus: 'Available for Freelance',
  experience: '5+ Years',
  summary:
    "5+ years building scalable web apps · PHP · React · Node.js",
  sideNote:
    'Passionate about clean architecture, scalable APIs, and high-performance web applications. Always learning, always shipping.',
};

export const contact: ContactInfo = {
  email: 'jatindersandhuinfo@gmail.com',
  website: 'jatinder.malwaland.in',
  phone: '+91 9888360667',
  whatsapp: 'https://wa.me/9888360667',
  linkedin: 'https://www.linkedin.com/in/jatindersandhuinfo/',
  github: 'https://github.com/jatindersandhuinfo',
  telegram: 'https://t.me/jatindersandhuinfo',
  discord: 'https://discord.gg/w7VjgHAA',
};

export const skillBars: Skill[] = [
  { name: 'PHP', level: 90 },
  { name: 'React.js', level: 75 },
  { name: 'Next.js', level: 70 },
  { name: 'Node.js', level: 70 },
  { name: 'Laravel', level: 65 },
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
      { label: 'Tw', bg: '#06b6d422', color: '#06b6d4', border: '#06b6d433' },
      { label: 'JS', bg: '#f0db4f22', color: '#f0db4f', border: '#f0db4f33' },
      { label: 'Nx', bg: '#ffffff11', color: '#eee', border: '#333' },
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
];

export const services: Service[] = [
  { label: 'Backend Dev' },
  { label: 'Frontend Dev' },
  { label: 'API Integration' },
  { label: 'WordPress' },
  { label: 'Shopify' },
  { label: 'REST API' },
  { label: 'Database' },
];

export const experience: WorkExperience[] = [
  {
    company: 'SuperVisionIT Solutions',
    role: 'Full Stack Developer',
    period: 'Aug 2020 — Present',
    description:
      'Built dynamic UIs with React.js + Redux. Developed scalable backend APIs with Node.js and Express.js. Implemented JWT auth and optimized MongoDB schemas for performance.',
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
    url: 'https://luxorlimo.ca/',
  },
  {
    name: 'Luna By Navneet',
    tech: 'Next.js · Tailwind CSS',
    url: 'https://lunanav.malwaland.in/',
  },
  {
    name: 'True Holiday Admin',
    tech: 'PHP · MySQL · Bootstrap',
  },
];
