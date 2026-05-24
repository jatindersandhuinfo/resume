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
  FaqItem,
} from '@/types/cv';
import type {
  AboutSectionData,
  ServicesSectionData,
  WorksSectionData,
  ExperienceSectionData,
  FaqSectionData,
  SkillsSectionData,
  TeamSectionData,
} from '@/types/sections';

export const seo: SeoMeta = {
  title: 'Jatinder Sandhu — Full Stack Developer | React, Next.js, Node.js, PHP | AI-Powered Development',
  description:
    'Hire Jatinder Sandhu — remote full stack developer for clients worldwide. Based in India, 6+ years, 25+ projects, AI-assisted delivery with Cursor AI & Claude. React, Next.js, Node.js, PHP, Laravel, WordPress, Shopify, and API integrations.',
  keywords:
    'Jatinder Sandhu, Remote Full Stack Developer, Global Freelance Web Developer, Hire Full Stack Developer Worldwide, International Web Developer, React Developer Remote, Next.js Developer Remote, Node.js Developer Remote, PHP Laravel Developer, WordPress Developer, Shopify Developer, API Integration Developer, AI Integration Developer, Cursor AI Developer, Claude AI Developer, ChatGPT API Developer, OpenAI API Integration, Prompt Engineering, Custom Web Application Developer, Responsive Website Developer, Ecommerce Website Developer, CMS Developer, MySQL Developer, MongoDB Developer, Upwork Full Stack Developer, Full Stack Developer India, Full Stack Developer Punjab',
  ogImage: 'https://jatinder.malwaland.com/jatinder.png',
  twitterHandle: '@jatindersandhuinfo',
  siteUrl: 'https://jatinder.malwaland.com',
};

export const personal: PersonalInfo = {
  firstName: 'Jatinder',
  lastName: 'Sandhu',
  role: 'Full Stack Developer | React, Next.js, Node.js, PHP | AI-Powered Development',
  age: 31,
  location: 'Based in Bathinda, Punjab, India',
  serviceArea: 'Serving clients worldwide · Remote',
  freelanceStatus: 'Available for Freelance · Worldwide',
  experience: '6+ Years',
  summary:
    '6+ years building scalable web apps · PHP · React · Node.js · AI-assisted workflows',
  sideNote:
    'I work with Cursor AI and Claude AI daily for faster, cleaner delivery — fewer bugs and quicker turnaround on your project.',
  heroImage: '/jatinder.png',
  heroImageRetina: 'https://jatinder.malwaland.com/jatinder.png',
};

export const contact: ContactInfo = {
  email: 'jatindersandhuinfo@gmail.com',
  website: 'jatinder.malwaland.com',
  phone: '+91 9888360667',
  whatsapp: 'https://wa.me/9888360667',
  linkedin: 'https://www.linkedin.com/in/jatindersandhuinfo/',
  github: 'https://github.com/jatindersandhuinfo',
  upwork: 'https://www.upwork.com/freelancers/~0136a3f5fb7a2c7b16',
  fiverr: 'https://www.fiverr.com/jatindersandhuinfo',
  freelancer: 'https://www.freelancer.com/u/jatindersandhuinfo',
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
  id: 'about' | 'services' | 'works' | 'experience' | 'faq' | 'skills';
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
      "I'm Jatinder Sandhu, a remote full stack developer working with clients globally — focused on practical builds: clean interfaces, solid backend logic, useful admin tools, and dependable deployment-ready code.",
  },
  {
    id: 'services',
    kicker: 'What I Do',
    title: 'Full-stack services for websites, apps, and business systems.',
    description:
      'From the public website to the admin dashboard, I build the parts clients actually use, manage, and measure — for startups and businesses worldwide. The focus is clean UI, dependable backend logic, and maintainable code.',
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
    id: 'faq',
    kicker: 'FAQ',
    title: 'Common questions before we start your project.',
    description:
      'Quick answers about remote work, timelines, tech stack, and how I deliver projects for clients worldwide.',
  },
  {
    id: 'skills',
    kicker: 'Skills',
    title: 'Stack I use to build complete web products.',
    description:
      'Frontend, backend, CMS, database, and API work handled with one practical full-stack workflow.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Do you work with international clients remotely?',
    answer:
      'Yes. I work with clients worldwide on a fully remote basis. Communication happens over email, WhatsApp, Slack, or your preferred tool, with progress updates and shared staging links throughout the build.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'React, Next.js, Node.js, PHP, Laravel, WordPress, WooCommerce, Shopify, MySQL, MongoDB, REST APIs, JWT auth, and AI integrations (ChatGPT API, Claude API, Cursor AI workflows). I pick the stack that fits your product and budget.',
  },
  {
    question: 'How do we start a new project?',
    answer:
      'Share your scope, reference links, or a rough idea by email. I review the requirements, suggest the right approach, provide a timeline estimate, and begin with a clear milestone plan before development starts.',
  },
  {
    question: 'Can you integrate AI features into my product?',
    answer:
      'Yes. I build AI-powered features such as smart forms, content automation, chat assistants, and API integrations using OpenAI and Claude — plus faster delivery using modern AI-assisted development workflows.',
  },
  {
    question: 'What is a typical project timeline?',
    answer:
      'A focused business website often takes 2–4 weeks. Custom web apps, dashboards, or ecommerce builds typically run 4–8+ weeks depending on scope, integrations, and feedback rounds. I share realistic timelines upfront.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes. I offer post-launch support for bug fixes, small updates, performance improvements, and feature additions. Many clients retain me for maintenance after the initial build goes live.',
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
    slug: 'luxorlimo',
    name: 'Luxorlimo',
    coverImage: '/images/projects/luxorlimo_cover_1779629572244.png',
    tagline: 'A high-converting limo booking experience for a Canadian luxury transport company.',
    tech: 'WordPress · Elementor · WooCommerce',
    result: 'Canadian limo booking site — WooCommerce checkout, mobile-first UX, and lead-ready service pages.',
    url: 'https://luxorlimo.ca/',
    category: 'E-Commerce',
    year: '2024',
    overview:
      'Built a complete booking website for a Canadian luxury limousine service focused on mobile-first UX, WooCommerce checkout, and conversion-optimized service pages. The site needed to feel premium while remaining operationally simple for the client to manage day-to-day.',
    challenge:
      'The client had an outdated site with a broken checkout flow, poor mobile experience, and zero SEO structure. They were losing leads to competitors with cleaner, more trustworthy-looking sites — and had no way to handle online bookings reliably.',
    solution:
      'Rebuilt from scratch on WordPress with a custom Elementor design, WooCommerce for bookings, and a restructured information architecture. Added local schema markup, location-based service pages, and streamlined checkout reducing steps from 6 to 3. Mobile performance score jumped to 94.',
    metrics: [
      { label: 'Checkout Steps', value: '6 → 3' },
      { label: 'Mobile Score', value: '94' },
      { label: 'Service Pages', value: '8+' },
      { label: 'Stack', value: 'WP + WC' },
    ],
    techStack: [
      { group: 'CMS', items: ['WordPress', 'Elementor'] },
      { group: 'E-Commerce', items: ['WooCommerce'] },
      { group: 'SEO', items: ['Schema Markup', 'Local SEO', 'OG Tags'] },
      { group: 'Hosting', items: ['cPanel', 'PHP 8.1'] },
    ],
  },
  {
    slug: 'luna-by-navneet',
    name: 'Luna By Navneet',
    coverImage: '/images/projects/luna_jewelry_cover_1779629586895.png',
    tagline: 'A fast, SEO-first product catalog rebuilt with Next.js for a jewelry brand.',
    tech: 'Next.js · Tailwind CSS',
    result: 'Product catalog with ~40% faster load vs legacy build and SEO-optimized product landing pages.',
    url: 'https://lunanav.malwaland.com/',
    category: 'Frontend',
    year: '2024',
    overview:
      'Rebuilt a legacy product catalog for an Indian jewelry brand using Next.js and Tailwind CSS. The focus was page performance, SEO structure, and a browsable product experience that reflected the brand\'s premium positioning.',
    challenge:
      'The existing WordPress site had unoptimized images, no SEO structure, and mobile load times above 5 seconds. Product pages weren\'t indexed properly, costing the brand organic visibility for high-intent search terms.',
    solution:
      'Migrated to a static Next.js site with SSG product pages, next/image for optimized delivery, and JSON-LD product schema. Achieved LCP under 1.5 s and a 40% overall load speed improvement. SEO score hit 98 on Lighthouse.',
    metrics: [
      { label: 'Speed Improvement', value: '~40%' },
      { label: 'LCP', value: '<1.5 s' },
      { label: 'Products', value: '60+' },
      { label: 'Lighthouse SEO', value: '98' },
    ],
    techStack: [
      { group: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'TypeScript'] },
      { group: 'Optimization', items: ['next/image', 'SSG', 'JSON-LD'] },
      { group: 'Hosting', items: ['Vercel'] },
    ],
  },
  {
    slug: 'true-holiday-admin',
    name: 'True Holiday Admin',
    coverImage: '/images/projects/holiday_admin_cover_1779629603000.png',
    tagline: 'A private admin dashboard managing 500+ holiday packages, bookings, and supplier workflows.',
    tech: 'PHP · MySQL · Bootstrap',
    result: 'Private admin dashboard managing 500+ holiday packages, bookings, and supplier workflows.',
    category: 'Backend',
    year: '2023',
    overview:
      'Built a full-featured internal operations system for a holiday package operator — handling package inventory, booking management, supplier coordination, and performance reporting across multiple agents.',
    challenge:
      'The client was managing 500+ holiday packages across spreadsheets and email threads with no central system. Double-bookings, missed supplier updates, and manual reporting were costing hours of admin work every week.',
    solution:
      'Built a PHP + MySQL admin dashboard with 3-tier role-based access, a dynamic package builder, a booking pipeline with status tracking, supplier contact management, and a reporting module with CSV/PDF export.',
    metrics: [
      { label: 'Packages Managed', value: '500+' },
      { label: 'Access Roles', value: '3-tier' },
      { label: 'Admin Time Saved', value: '~15 h/wk' },
      { label: 'DB Tables', value: '24' },
    ],
    techStack: [
      { group: 'Backend', items: ['PHP 8', 'MySQL'] },
      { group: 'Frontend', items: ['Bootstrap 5', 'jQuery'] },
      { group: 'Features', items: ['RBAC', 'PDF Reports', 'Booking Pipeline', 'Supplier CRM'] },
    ],
  },
  {
    slug: 'malwaland-business-hub',
    name: 'Malwaland Business Hub',
    coverImage: '/images/projects/malwaland_hub_cover_1779629618950.png',
    tagline: 'A multi-client hosting hub running 6+ live business websites on one shared infrastructure.',
    tech: 'PHP · WordPress · Custom Themes',
    result: 'Multi-client hosting hub — 6+ live business sites with shared deployment and maintenance workflows.',
    url: 'https://malwaland.in/',
    category: 'CMS',
    year: '2022',
    overview:
      'Designed and deployed a shared hosting infrastructure for multiple small-business clients under the Malwaland brand — each with their own WordPress site, domain, and maintenance workflow managed from a single platform.',
    challenge:
      'Managing independent client sites separately was expensive and time-consuming. Each needed its own theme, plugin set, and update cycle — with no standardization or centralized control.',
    solution:
      'Centralized deployment with shared server infrastructure, custom WordPress themes per client, a standardized plugin stack, and a maintenance workflow where one update cycle covers all sites. Reduced maintenance overhead by 60%.',
    metrics: [
      { label: 'Sites Deployed', value: '6+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Maintenance Overhead', value: '−60%' },
      { label: 'Clients Served', value: '6+' },
    ],
    techStack: [
      { group: 'CMS', items: ['WordPress', 'Custom Themes', 'WP CLI'] },
      { group: 'Backend', items: ['PHP 8', 'MySQL'] },
      { group: 'Hosting', items: ['cPanel', 'Shared Infrastructure', 'DNS Management'] },
    ],
  },
  {
    slug: 'jwt-auth-api-module',
    name: 'JWT Auth API Module',
    coverImage: '/images/projects/jwt_auth_cover_1779629635454.png',
    tagline: 'A reusable Node.js auth service with JWT, role-based access, and 40% faster session validation.',
    tech: 'Node.js · Express · MongoDB',
    result: 'Reusable auth service with JWT, role-based access, and 40% faster session validation for SaaS modules.',
    category: 'API',
    year: '2023',
    overview:
      'Built a standalone authentication microservice designed to be dropped into any Node.js project — handling registration, login, access + refresh token rotation, RBAC middleware, and session invalidation cleanly.',
    challenge:
      'Every new SaaS project was rebuilding auth from scratch with inconsistent implementations — security gaps in token expiry, refresh handling, and role enforcement kept causing issues across different projects.',
    solution:
      'Extracted a reusable auth module with JWT access + refresh token rotation, bcrypt password hashing, Express middleware-level RBAC, MongoDB session store, rate limiting, and a clean API contract for drop-in integration in under 2 hours.',
    metrics: [
      { label: 'Session Validation', value: '40% faster' },
      { label: 'Auth Routes', value: '8' },
      { label: 'Role Levels', value: '4' },
      { label: 'Integration Time', value: '<2 hrs' },
    ],
    techStack: [
      { group: 'Backend', items: ['Node.js', 'Express.js'] },
      { group: 'Auth', items: ['JWT', 'bcrypt', 'Refresh Tokens'] },
      { group: 'Database', items: ['MongoDB', 'Mongoose'] },
      { group: 'Security', items: ['RBAC', 'Rate Limiting', 'Helmet.js'] },
    ],
  },
  {
    slug: 'portfolio-jatinder',
    name: 'Portfolio — jatinder.malwaland.com',
    coverImage: '/images/projects/portfolio_jatinder_cover_1779629650408.png',
    tagline: 'A performance-first developer portfolio built with Next.js, TypeScript, and a custom design system.',
    tech: 'Next.js · TypeScript · Tailwind CSS',
    result: 'SEO-first portfolio with structured data, sitemap, and performance-focused static delivery.',
    url: 'https://jatinder.malwaland.com/',
    category: 'Frontend',
    year: '2025',
    overview:
      'Designed and built this portfolio site from the ground up with SEO, structured data, performance, and a premium design that reflects the quality of the work it showcases. Built with Next.js App Router, TypeScript, and a custom Tailwind design system.',
    challenge:
      'Most developer portfolios use generic templates with poor SEO, slow load times, and a design that doesn\'t communicate professional-grade quality. The goal was to build one that could rank organically and convert visitors to clients.',
    solution:
      'Built with Next.js 16 App Router, full TypeScript, Tailwind CSS, JSON-LD structured data (Person, Portfolio, Article schemas), a generated sitemap and robots.txt, and scroll-driven CSS animations. Lighthouse performance score: 98.',
    metrics: [
      { label: 'Lighthouse Perf', value: '98' },
      { label: 'LCP', value: '<1.2 s' },
      { label: 'SEO Score', value: '100' },
      { label: 'Schemas', value: '3 JSON-LD' },
    ],
    techStack: [
      { group: 'Frontend', items: ['Next.js 16', 'TypeScript', 'Tailwind CSS'] },
      { group: 'SEO', items: ['JSON-LD', 'Sitemap', 'robots.txt', 'OpenGraph'] },
      { group: 'Hosting', items: ['Vercel'] },
      { group: 'Design', items: ['Custom Design System', 'CSS Scroll Animations'] },
    ],
  },
  {
    slug: 'woocommerce-booking-flow',
    name: 'WooCommerce Booking Flow',
    coverImage: '/images/projects/woo_booking_cover_1779629666245.png',
    tagline: 'A custom WooCommerce booking system with real-time slot selection — zero third-party plugin fees.',
    tech: 'WordPress · WooCommerce · PHP',
    result: 'Custom booking availability and checkout flow for service businesses — real-time slot selection.',
    category: 'E-Commerce',
    year: '2023',
    overview:
      'Built a custom booking and availability system on WooCommerce for a service business, replacing a third-party plugin that was causing checkout conflicts and costing $79/month with no configurability.',
    challenge:
      'The existing booking plugin conflicted with WooCommerce, caused double-bookings, and had no way to limit availability by service type or staff member. Customer support was poor and the monthly cost was unjustifiable.',
    solution:
      'Developed a custom PHP plugin that hooks into WooCommerce, adds a date/time slot picker to product pages, syncs availability via AJAX, stores bookings in a custom DB table, sends confirmation emails automatically, and respects per-service capacity limits.',
    metrics: [
      { label: 'Monthly Savings', value: '$79/mo' },
      { label: 'Double-Bookings', value: '0 since launch' },
      { label: 'Custom DB Tables', value: '3' },
      { label: 'Slot Response', value: '<200 ms' },
    ],
    techStack: [
      { group: 'E-Commerce', items: ['WooCommerce', 'WordPress'] },
      { group: 'Backend', items: ['PHP 8', 'Custom Plugin', 'AJAX'] },
      { group: 'Database', items: ['MySQL', 'Custom Tables'] },
      { group: 'UX', items: ['Real-time Slots', 'Email Confirmations', 'Capacity Limits'] },
    ],
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
    "I'm Jatinder Sandhu, a remote full stack developer for clients worldwide — focused on practical builds: clean interfaces, solid backend logic, useful admin tools, and dependable deployment-ready code.",
  secondaryDescription:
    'My work spans PHP, Laravel, WordPress, React, Next.js, Node.js, MySQL, MongoDB, and API integrations — plus AI-assisted delivery with Cursor AI, Claude AI, and ChatGPT API. I collaborate remotely with clients across time zones and like projects where design, performance, and business flow all matter.',
};

export const servicesSection: ServicesSectionData = {
  id: 'services',
  kicker: 'What I Do',
  title: 'Full-stack services for websites, apps, and business systems.',
  description:
    'From the public website to the admin dashboard, I build the parts clients actually use, manage, and measure. The focus is clean UI, dependable backend logic, and maintainable code.',
  coreOfferDescription:
    'I can design the flow, build the responsive frontend, connect APIs, prepare the CMS or database, and keep the implementation practical for future changes.',
  specialistStack: ['React / Next.js', 'PHP / Laravel', 'AI Integration'],
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

export const faqSection: FaqSectionData = {
  id: 'faq',
  kicker: 'FAQ',
  title: 'Common questions before we start your project.',
  description:
    'Quick answers about remote work, timelines, tech stack, and how I deliver projects for clients worldwide.',
  items: faqs,
};

export const experienceSection: ExperienceSectionData = {
  id: 'experience',
  kicker: 'Experience',
  title: 'Production work across frontend, backend, and CMS.',
  description:
    'A practical background in shipping interfaces, APIs, CMS features, and database-backed tools for real business workflows.',
  experience,
  experienceFocus,
  yearsExperience: personal.experience,
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
  hireSection: {
    title: 'Have a project that needs a reliable developer?',
    description:
      'Send the scope, reference, or rough idea — wherever you are. I work remotely with clients worldwide and can help shape the flow, build the interface, connect the backend, and ship it cleanly.',
    email: contact.email,
    linkedin: contact.linkedin,
    upwork: contact.upwork,
    fiverr: contact.fiverr,
    freelancer: contact.freelancer,
  },
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

export const teamSection: TeamSectionData = {
  id: 'team',
  kicker: 'The Team',
  title: 'The people who build things that matter.',
  description:
    'A small, senior-level team of developers and designers working remotely — focused on shipping products that perform.',
  members: [
    {
      slug: 'jatinder-sandhu',
      name: 'Jatinder Sandhu',
      image: '/jatinder.png',
      role: 'Lead Full Stack Developer',
      bio: '6+ years building scalable web apps across PHP, React, Node.js and AI-assisted workflows. Focused on shipping clean, maintainable code for real business needs.',
      avatar: 'JS',
      avatarBg: '#d6ad6322',
      avatarColor: '#d6ad63',
      skills: ['React / Next.js', 'PHP / Laravel', 'Node.js', 'AI Integration', 'MySQL', 'MongoDB'],
      projects: [
        {
          slug: 'luxorlimo',
          name: 'Luxorlimo',
          tech: 'WordPress · WooCommerce · Elementor',
          result: 'Canadian limo booking site — WooCommerce checkout, mobile-first UX, and lead-ready service pages.',
          url: 'https://luxorlimo.ca/',
          category: 'E-Commerce',
        },
        {
          slug: 'luna-by-navneet',
          name: 'Luna By Navneet',
          tech: 'Next.js · Tailwind CSS',
          result: 'Product catalog with ~40% faster load vs legacy build and SEO-optimized product landing pages.',
          url: 'https://lunanav.malwaland.com/',
          category: 'Frontend',
        },
        {
          slug: 'true-holiday-admin',
          name: 'True Holiday Admin',
          tech: 'PHP · MySQL · Bootstrap',
          result: 'Private admin dashboard managing 500+ holiday packages, bookings, and supplier workflows.',
          category: 'Backend',
        },
        {
          slug: 'jwt-auth-api-module',
          name: 'JWT Auth API Module',
          tech: 'Node.js · Express · MongoDB',
          result: 'Reusable auth service with JWT, role-based access, and 40% faster session validation for SaaS modules.',
          category: 'API',
        },
        {
          slug: 'malwaland-business-hub',
          name: 'Malwaland Business Hub',
          tech: 'PHP · WordPress · Custom Themes',
          result: 'Multi-client hosting hub — 6+ live business sites with shared deployment and maintenance workflows.',
          url: 'https://malwaland.in/',
          category: 'CMS',
        },
        {
          slug: 'portfolio-jatinder',
          name: 'Portfolio — jatinder.malwaland.com',
          tech: 'Next.js · TypeScript · Tailwind CSS',
          result: 'SEO-first portfolio with structured data, sitemap, and performance-focused static delivery.',
          url: 'https://jatinder.malwaland.com/',
          category: 'Frontend',
        },
      ],
      linkedin: 'https://www.linkedin.com/in/jatindersandhuinfo/',
      github: 'https://github.com/jatindersandhuinfo',
      website: 'https://jatinder.malwaland.com/',
    },
    {
      slug: 'sandeep-singh',
      name: 'Sandeep Singh',
      image: '/images/team/arjun_mehta_portrait_1779629524364.png',
      role: 'Frontend Developer',
      bio: 'Frontend developer focused on building fast, responsive, and conversion-focused websites using React, Next.js, WordPress, and Shopify. Experienced in creating scalable UI systems, modern landing pages, and smooth user experiences across devices.',
      avatar: 'SS',
      avatarBg: '#61dafb22',
      avatarColor: '#61dafb',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'WordPress',
        'Shopify',
        'JavaScript',
        'Responsive Design',
        'Frontend Optimization',
        'UI Development',
      ],
      projects: [
        {
          slug: 'modern-ecommerce-store',
          name: 'Modern E-Commerce Store',
          tech: 'Shopify · Liquid · JavaScript',
          result:
            'Built a conversion-focused Shopify storefront with custom sections, optimized product pages, and mobile-first performance.',
          category: 'E-Commerce',
        },
        {
          slug: 'startup-landing-page',
          name: 'Startup Landing Platform',
          tech: 'Next.js · Tailwind CSS · TypeScript',
          result:
            'Developed a high-performance landing platform with reusable sections, SEO optimization, and responsive layouts.',
          category: 'Frontend',
        },
        {
          slug: 'wordpress-business-site',
          name: 'Business WordPress Website',
          tech: 'WordPress · Elementor · PHP',
          result:
            'Created a modern business website with custom layouts, lead-focused pages, and optimized loading speed.',
          category: 'CMS',
        },
        {
          slug: 'react-admin-dashboard',
          name: 'React Admin Dashboard',
          tech: 'React.js · Chart.js · Tailwind CSS',
          result:
            'Built a scalable dashboard UI with analytics widgets, reusable components, and responsive admin layouts.',
          category: 'Dashboard',
        },
      ],
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    },
    {
      slug: 'akanksha-baleghate',
      name: 'Akanksha Baleghate',
      image: '/images/team/priya_verma_portrait_1779629542317.png',
      role: 'UI/UX & Graphic Designer',
      bio: 'Creative UI/UX and graphic designer focused on building clean digital experiences, modern brand visuals, social media creatives, and user-friendly interfaces. Passionate about combining creativity with usability for web and mobile products.',
      avatar: 'AB',
      avatarBg: '#ff4d8d22',
      avatarColor: '#ff4d8d',
      skills: [
        'Figma',
        'UI/UX Design',
        'Graphic Design',
        'Brand Identity',
        'Social Media Design',
        'Wireframing',
        'Mobile App Design',
        'Landing Page Design',
        'Adobe Photoshop',
        'Canva',
      ],
      projects: [
        {
          slug: 'saas-dashboard-design',
          name: 'SaaS Dashboard Design',
          tech: 'Figma · UI Design',
          result:
            'Designed a modern SaaS dashboard with reusable components, clean data visualization, and responsive layouts.',
          category: 'UI/UX',
        },
        {
          slug: 'brand-social-media-kit',
          name: 'Brand Social Media Kit',
          tech: 'Photoshop · Canva · Illustrator',
          result:
            'Created complete social media branding assets including posts, banners, promotional creatives, and ad designs.',
          category: 'Graphic Design',
        },
        {
          slug: 'mobile-app-ui',
          name: 'Mobile App UI Design',
          tech: 'Figma · Prototyping',
          result:
            'Designed a modern mobile app experience with intuitive navigation, onboarding screens, and clean UI patterns.',
          category: 'Mobile Design',
        },
        {
          slug: 'corporate-website-ui',
          name: 'Corporate Website UI',
          tech: 'Figma · Web Design',
          result:
            'Crafted a professional corporate website interface focused on branding, readability, and user engagement.',
          category: 'Web Design',
        },
      ],
      linkedin: 'https://linkedin.com/'
    }
  ],
};
