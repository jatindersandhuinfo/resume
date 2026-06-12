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
  title: 'Jatinder Sandhu — Freelance Full Stack Developer | React, Next.js, Node.js, PHP',
  description:
    'Hire Jatinder Sandhu — freelance full stack developer with 6+ years experience. React, Next.js, Node.js, PHP, Laravel, WordPress & AI development. 25+ projects delivered. Available for remote work worldwide.',
  keywords: [
    // General Full Stack & Developer Hiring
    'full stack developer',
    'hire full stack developer',
    'hire freelance full stack developer',
    'freelance full stack developer',
    'freelance web developer',
    'web developer for hire',
    'remote software developer',
    'hire dedicated developer',
    'custom software developer',
    'custom web application development',
    'web application developer',
    'web development services',
    'software development services',
    'startup web developer',
    'full stack web development services',
    'affordable full stack developer',
    'web app developer for startup',
    'full stack developer for small business',

    // Name & Brand
    'Jatinder Sandhu',
    'Jatinder Sandhu developer',
    'jatinder sandhu full stack',

    // React
    'react developer',
    'react js developer',
    'react developer freelance',
    'react development services',
    'react frontend developer',
    'react consultant',
    'react web application development',

    // Next.js
    'next.js developer',
    'hire next.js developer',
    'next.js developer freelance',
    'next.js development services',
    'next.js expert',
    'next.js consultant',
    'next.js seo expert',
    'next.js ecommerce development',
    'next.js performance optimization',
    'next.js web development',

    // Node.js & Backend
    'node.js developer',
    'hire node.js developer',
    'node.js developer freelance',
    'node.js development services',
    'node.js backend developer',
    'node.js api development',
    'express.js developer',
    'scalable node.js applications',

    // PHP & Laravel
    'php developer',
    'hire php developer',
    'php developer freelance',
    'php web development',
    'php application development',
    'laravel developer',
    'hire laravel developer',
    'laravel developer freelance',
    'laravel development services',
    'laravel web application development',

    // WordPress & E-Commerce
    'wordpress developer',
    'hire wordpress developer',
    'wordpress developer freelance',
    'wordpress development services',
    'wordpress website developer',
    'shopify developer',
    'hire shopify developer',
    'shopify developer freelance',
    'shopify development services',
    'shopify ecommerce developer',
    'woocommerce developer',
    'woocommerce development services',
    'ecommerce website developer',
    'ecommerce development services',
    'custom ecommerce development',

    // APIs & Integrations
    'rest api developer',
    'api integration developer',
    'third party api integration',

    // SaaS & MVP
    'saas application developer',
    'saas application development',
    'saas software development',
    'mvp development services',
    'mvp development for startups',
    'startup software development',

    // AI & Automation
    'ai integration developer',
    'openai api developer',
    'openai integration services',
    'chatgpt api integration',
    'chatgpt integration services',
    'ai software development',
    'custom ai solutions',
    'ai chatbot development',
    'ai chatbot developer',
    'ai automation services',
    'ai workflow automation',
    'ai business automation',
    'ai application development',
    'ai consulting services',
    'ai agent development',
    'enterprise ai solutions',
    'generative ai development',
    'llm application development',
    'business process automation',

    // Location & Target Regions
    'full stack developer india',
    'full stack developer punjab india',
    'indian software developer',
    'indian web developer',
    'remote developer worldwide',
    'developer for us clients',
    'developer for uk clients',
    'developer for canada clients',
    'developer for australia clients',
    'freelance developer upwork',

    // AI in Business
    'artificial intelligence in business',
    'ai for business',
    'business automation with ai',
    'ai tools for business',
    'ai transformation',
    'how businesses use ai',
    'best ai tools for small businesses',
    'ai for customer service',
    'ai customer support',
    'customer service chatbot',
    'ai for sales automation',
    'ai use cases in business',
    'ai examples in business',
    'small business ai tools',
    'small business productivity',
    'business automation',

    // Developer Productivity
    'developer productivity',
    'ai impact on developer productivity',
    'ai assisted development',
    'ai coding assistant',
    'ai for developers',
    'ai programming tools',
    'best ai coding tools',
    'ai software engineering',
    'ai code generation',
    'ai code debugging',
    'ai code review',
    'ai code completion',
    'ai pair programming',
    'documentation generation',
    'unit test creation',
    'productivity tools for developers',
    'ai debugging tools',
    'github copilot alternatives',
    'cursor ai review',
    'claude code productivity',
    'how ai improves developer productivity',

    // AI in Marketing
    'ai marketing',
    'ai in marketing',
    'artificial intelligence marketing',
    'digital marketing ai',
    'ai marketing tools',
    'best ai marketing tools',
    'ai content marketing',
    'ai content creation',
    'ai content generation',
    'social media marketing automation',
    'ai for social media marketing',
    'email marketing personalization',
    'ai email marketing',
    'seo content optimization',
    'ai seo tools',
    'advertising variation testing',
    'ai advertising tools',
    'ai customer insights',
    'ai lead generation',
    'ai marketing automation tools'
  ].join(', '),
  ogImage: 'https://jatinder.malwaland.com/jatinder.png',
  twitterHandle: '@jatindersandhuinfo',
  siteUrl: 'https://jatinder.malwaland.com',
};


export const personal: PersonalInfo = {
  firstName: 'Jatinder',
  lastName: 'Sandhu',
  role: 'Full Stack Developer | React, Next.js, Node.js, PHP | Available Worldwide',
  age: 31,
  location: 'Based in Bathinda, Punjab, India',
  serviceArea: 'Serving clients worldwide · Remote',
  freelanceStatus: 'Available for Work · Worldwide',
  experience: '6+ Years',
  summary:
    'Full stack developer · 6+ years · React · Next.js · Node.js · PHP · AI-powered delivery',
  sideNote:
    'I use Cursor AI and Claude AI daily — faster delivery, cleaner code, and fewer bugs on your project.',
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
  { name: 'PHP / Laravel', detail: '12+ production backends, CMS builds & admin panels' },
  { name: 'React / Next.js', detail: '10+ SEO-optimized, Core Web Vitals-passing frontends' },
  { name: 'WordPress / WooCommerce', detail: '8+ business sites, booking portals & online stores' },
  { name: 'Node.js / APIs', detail: 'Scalable REST APIs, JWT auth & third-party integrations' },
  { name: 'AI-Assisted Delivery', detail: 'Cursor AI + Claude + OpenAI API — daily dev tools' },
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
    iconBg: '#f59e0b22',
    iconColor: '#f59e0b',
    borderColor: '#f59e0b33',
    items: ['Cursor AI', 'Claude AI', 'ChatGPT API', 'OpenAI API', 'Prompt Engineering'],
    badges: [
      { label: 'Cu', bg: '#f59e0b22', color: '#f59e0b', border: '#f59e0b33' },
      { label: 'Cl', bg: '#cc785c22', color: '#e8a88a', border: '#cc785c33' },
      { label: 'GP', bg: '#10a37f22', color: '#10a37f', border: '#10a37f33' },
    ],
  },
];

export const services: Service[] = [
  {
    label: 'Backend Dev',
    slug: 'backend-development',
    seoTitle: 'Backend Development Services | Custom API & Server Architecture',
    seoDescription: 'Professional backend development services. I build secure REST APIs, scalable database architectures, and robust server-side systems using Node.js, PHP, and Laravel.',
    description: 'Secure REST APIs, JWT authentication, scalable database schemas, and server-side business logic — built with Node.js, PHP, and Laravel for startups to enterprise.',
    showOnHome: true,
  },
  {
    label: 'Frontend Dev',
    slug: 'frontend-development',
    seoTitle: 'Frontend Development Services | React & Next.js Interfaces',
    seoDescription: 'Professional frontend development services. I build pixel-perfect, mobile-responsive React and Next.js interfaces optimized for Core Web Vitals, SEO, and real user engagement.',
    description: 'Pixel-perfect React and Next.js frontends — mobile-first, Core Web Vitals optimized, and built to convert visitors into customers.',
    showOnHome: true,
  },
  {
    label: 'API Integration',
    slug: 'api-integration',
    seoTitle: 'API Integration Services | Third-Party & Custom API Connectors',
    seoDescription: 'Professional API integration services. I connect payment gateways, CRM systems, booking platforms, webhooks, and automation APIs to your web application.',
    description: 'Stripe payments, CRM systems, booking platforms, SMS/email automation, and custom webhooks — seamlessly integrated into your application.',
    showOnHome: true,
  },
  {
    label: 'WordPress',
    slug: 'wordpress-development',
    seoTitle: 'WordPress Development Services | Custom Sites & WooCommerce',
    seoDescription: 'Professional WordPress development services. I build fast, responsive business websites, custom Elementor layouts, WooCommerce stores, and plugin configurations optimized for SEO.',
    description: 'Custom WordPress websites, WooCommerce stores, Elementor builds, plugin configuration, and speed optimization for business owners.',
    showOnHome: true,
  },
  {
    label: 'Shopify',
    slug: 'shopify-development',
    seoTitle: 'Shopify Development Services | Theme & Checkout Optimization',
    seoDescription: 'Professional Shopify development services. I customize Shopify themes, optimize checkout flows, integrate apps, and build conversion-focused e-commerce storefronts.',
    description: 'Shopify theme customization, checkout optimization, app integrations, and conversion-focused product page improvements for online stores.',
    showOnHome: true,
  },
  {
    label: 'REST API',
    slug: 'rest-api-development',
    seoTitle: 'REST API Development Services | Secure & Documented Endpoints',
    seoDescription: 'Professional REST API development services. I design and build secure, structured API endpoints with JWT authentication, request validation, and Swagger/Postman documentation.',
    description: 'Structured REST endpoints with request validation, JWT authentication, rate limiting, and Swagger/Postman documentation — production-ready from day one.',
    showOnHome: true,
  },
  {
    label: 'Database',
    slug: 'database-development',
    seoTitle: 'Database Development Services | MySQL, PostgreSQL & MongoDB',
    seoDescription: 'Expert database development services. I design normalized schemas, optimize slow queries, configure indexes, and build MySQL, PostgreSQL, and MongoDB architectures for scale.',
    description: 'Relational and NoSQL schema design, slow-query optimization, index configuration, and MySQL/PostgreSQL/MongoDB architecture for high-performance applications.',
    showOnHome: true,
  },
  {
    label: 'AI Integration',
    slug: 'ai-integration-services',
    seoTitle: 'AI Integration Services | OpenAI, Claude & LLM Web Integration',
    seoDescription: 'Professional AI integration services. I integrate OpenAI GPT-4, Claude, and custom LLMs into web applications to power smart chatbots, content automation, and intelligent workflows.',
    description: 'OpenAI GPT-4 and Claude API integrations — AI chatbots, content automation, intelligent search, and autonomous agent workflows built into your product.',
    showOnHome: true,
  },
  {
    label: 'Next.js Development',
    slug: 'nextjs-development',
    seoTitle: 'Next.js Development Services | SSR, SEO & Edge-Optimized Apps',
    seoDescription: 'Professional Next.js development services. I build App Router applications with server-side rendering, static generation, incremental static regeneration, and edge-optimized performance.',
    description: 'Next.js App Router applications with SSR, SSG, ISR, and edge performance — fast-loading, SEO-ready, and built for scale.',
    showOnHome: false,
  },
  {
    label: 'React Development',
    slug: 'react-development',
    seoTitle: 'React Development Services | Scalable SPAs & Component Libraries',
    seoDescription: 'Professional React development services. I build scalable Single Page Applications, reusable component libraries, and TypeScript-based UIs with state management using Redux or Zustand.',
    description: 'Scalable React SPAs with TypeScript, custom component libraries, Redux/Zustand state management, and clean, reusable UI architecture.',
    showOnHome: false,
  },
  {
    label: 'Node.js Development',
    slug: 'nodejs-development',
    seoTitle: 'Node.js Development Services | Fast Async API Backends',
    seoDescription: 'Professional Node.js development services. I build fast, scalable REST APIs, WebSocket servers, microservices, and background job queues using Express, Fastify, and TypeScript.',
    description: 'Asynchronous Node.js REST APIs, WebSocket servers, microservices, and background job queues — TypeScript-first and built for real traffic.',
    showOnHome: false,
  },
  {
    label: 'Custom Web Applications',
    slug: 'custom-web-applications',
    seoTitle: 'Custom Web Application Development | Bespoke Business Software',
    seoDescription: 'Custom web application development services. I build tailored business portals, employee dashboards, inventory systems, booking platforms, and CRM tools designed around your workflow.',
    description: 'Purpose-built corporate portals, employee dashboards, inventory systems, and admin tools — designed exactly for your business workflow.',
    showOnHome: false,
  },
  {
    label: 'SaaS Development',
    slug: 'saas-development',
    seoTitle: 'SaaS Application Development | Multi-Tenant Subscription Software',
    seoDescription: 'Scalable SaaS development services. I build multi-tenant architectures, Stripe subscription billing, role-based access control, and secure client dashboards.',
    description: 'Multi-tenant SaaS architecture with Stripe billing, role-based access control, client dashboards, and scalable database design.',
    showOnHome: false,
  },
  {
    label: 'API Development',
    slug: 'api-development',
    seoTitle: 'API Development Services | Versioned, Documented REST Architecture',
    seoDescription: 'Professional API development services. I build versioned REST APIs with microservice architecture, OpenAPI/Swagger documentation, and production-grade error handling.',
    description: 'Versioned REST microservice APIs with OpenAPI/Swagger documentation, structured error handling, and production-grade request validation.',
    showOnHome: false,
  },
  {
    label: 'OpenAI Integration',
    slug: 'openai-integration',
    seoTitle: 'OpenAI Integration Services | GPT-4, DALL-E & Whisper API',
    seoDescription: 'Professional OpenAI integration services. I connect web applications to GPT-4, DALL-E, Whisper, and embeddings APIs for automated text generation, image creation, and voice processing.',
    description: 'GPT-4 text generation, DALL-E image creation, Whisper voice-to-text, and embeddings — OpenAI APIs fully integrated into your production web application.',
    showOnHome: false,
  },
  {
    label: 'ChatGPT Integration',
    slug: 'chatgpt-integration',
    seoTitle: 'ChatGPT Integration Services | Custom AI Chatbot Development',
    seoDescription: 'Professional ChatGPT integration services. I build custom AI chatbots, customer support assistants, and sales bots trained on your business knowledge base using OpenAI Assistant API.',
    description: 'Custom ChatGPT-powered chatbots, customer support assistants, and sales bots trained on your business knowledge base — integrated directly into your website.',
    showOnHome: false,
  },
  {
    label: 'AI Agent Development',
    slug: 'ai-agent-development',
    seoTitle: 'AI Agent Development Services | Autonomous Workflow Automation',
    seoDescription: 'Professional AI agent development services. I build autonomous AI agents with tool-calling, multi-step reasoning, memory systems, and workflow automation using Node.js and LLM APIs.',
    description: 'Autonomous AI agents with tool-calling, multi-step reasoning, memory systems, and complex workflow automation — built with Node.js and OpenAI Function Calling.',
    showOnHome: false,
  },
  {
    label: 'Business Automation',
    slug: 'ai-automation-services',
    seoTitle: 'AI Business Automation Services | Workflow & Data Pipeline Automation',
    seoDescription: 'AI business automation services. I build automated data pipelines, CRM synchronization, invoice processing, email/SMS workflows, and Zapier/Make integrations to save your team hours weekly.',
    description: 'Automated data pipelines, CRM sync, invoice processing, email/SMS workflows, and Zapier/Make integrations — saving your team hours every week.',
    showOnHome: false,
  },
  {
    label: 'Laravel Development',
    slug: 'laravel-development',
    seoTitle: 'Laravel Development Services | Secure PHP Web Applications',
    seoDescription: 'Professional Laravel development services. I build secure PHP MVC applications, Eloquent ORM schemas, multi-role admin panels, and production-ready Laravel APIs.',
    description: 'Secure PHP MVC applications, Eloquent ORM schemas, multi-role admin panels, and production-ready Laravel APIs — clean architecture from day one.',
    showOnHome: false,
  },
  {
    label: 'Ecommerce Development',
    slug: 'ecommerce-development',
    seoTitle: 'Ecommerce Development Services | Headless & Custom Storefronts',
    seoDescription: 'Professional ecommerce development services. I build headless Shopify/Next.js storefronts, WooCommerce custom builds, product filter systems, and conversion-optimized checkouts.',
    description: 'Headless Shopify + Next.js storefronts, WooCommerce custom builds, product filter systems, and conversion-optimized checkouts for online businesses.',
    showOnHome: false,
  },
  {
    label: 'MVP Development',
    slug: 'mvp-development',
    seoTitle: 'MVP Development for Startups | Launch-Ready in 4–6 Weeks',
    seoDescription: 'MVP development services for startups. I build functional, launch-ready Minimum Viable Products in 4–6 weeks using React, Node.js, and Laravel — validated architecture, auth, and core user flows.',
    description: 'Launch-ready MVPs in 4–6 weeks — validated architecture, core user flows, authentication, and deployment-ready code to start growing your startup.',
    showOnHome: false,
  },
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
    question: 'What are your rates? How much does hiring you cost?',
    answer:
      'My rates depend on project scope and technology. Hourly work runs $25–$55/hr depending on complexity. Fixed-price projects are quoted before work begins — no surprises. Most clients find the cost significantly lower than hiring a local developer or agency. Contact me with your project details for a custom estimate.',
  },
  {
    question: 'Do you work with international clients remotely?',
    answer:
      'Yes — I work with clients in the US, UK, Canada, Australia, Netherlands, and worldwide on a fully remote basis. Communication runs via email, WhatsApp, Slack, or your preferred tool. I share staging links, milestone updates, and progress reports throughout the entire build.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'My core stack covers React, Next.js, Node.js, PHP, Laravel, WordPress, WooCommerce, Shopify, MySQL, PostgreSQL, MongoDB, REST APIs, and JWT authentication. I also build AI-powered features using OpenAI GPT-4, Claude API, and custom LLM workflows. I choose the right stack for your project — not just the newest framework.',
  },
  {
    question: 'How do we start a new project?',
    answer:
      'Email me your scope, reference links, or rough idea. I review the requirements, recommend the right technology approach, and provide a clear milestone plan and timeline estimate before any development begins. No upfront payment until we agree on scope.',
  },
  {
    question: 'What is a typical project timeline?',
    answer:
      'A standard business website takes 2–4 weeks. Custom web apps, dashboards, SaaS platforms, and e-commerce builds typically run 4–8+ weeks depending on scope and integrations. I provide a realistic timeline before starting — and I stick to it. Rush delivery is available for smaller projects.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes. Every project includes post-launch support for bug fixes. I also offer monthly maintenance retainers covering security patches, performance monitoring, feature additions, and priority support. Many clients retain me for 6–12 months after their initial build goes live.',
  },
];

export const experience: WorkExperience[] = [
  {
    company: 'SuperVisionIT Solutions',
    role: 'Full Stack Developer',
    period: 'Aug 2020 — Present',
    description:
      'Building React + Redux dashboards, scalable Node.js REST APIs with JWT authentication, and MongoDB schemas — achieving 40% faster query response on high-traffic production modules.',
  },
  {
    company: 'Envy Us Media Pvt Ltd',
    role: 'PHP Developer',
    period: '2019 — 2020',
    description:
      'Built custom PHP + MySQL CMS platforms, developed RESTful web services for third-party integrations, and maintained code quality through unit testing and systematic debugging.',
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
    featured: true,
    developer: 'Jatinder Sandhu',
    coverImage: '/images/team/jatinder/luxor/project2-image1.png',
    images: [
      '/images/team/jatinder/luxor/project2-image2.png',
      '/images/team/jatinder/luxor/project2-image3.png',
      '/images/team/jatinder/luxor/project2-image4.png',
      '/images/team/jatinder/luxor/project2-image5.png',
      '/images/team/jatinder/luxor/Limo-Service-Limousine-Rental-Services-Canada-05-30-2026_04_39_PM.pdf',
    ],
    tagline: 'A premium limousine rental website serving Toronto, Brampton, Mississauga, and 20+ GTA cities — built to generate booking enquiries and maximise local SEO visibility.',
    tech: 'WordPress · Elementor · Local SEO',
    result: 'Complete limousine rental website with 13+ service pages, 20+ city landing pages, online quote form, and optimised Google Search Console setup for GTA local SEO dominance.',
    url: 'https://luxorlimo.ca/',
    category: 'CMS',
    year: '2024',
    overview:
      'Developed a premium business website for Luxor Limo, a high-end limousine rental company serving Toronto, Brampton, Mississauga, and over 20 cities across the Greater Toronto Area (GTA). The platform was designed to establish a premium online brand, showcase a high-end vehicle fleet, and drive organic booking enquiries through hyper-local search engine visibility. It features a mobile-first responsive layout, interactive booking quote forms, and comprehensive service details.',
    challenge:
      'Luxor Limo needed to stand out in the highly competitive GTA luxury transportation market. Their previous web presence failed to rank for local searches outside of major hubs, and lacked structured landing pages for specific cities like Brampton or Mississauga. Furthermore, the absence of an online quote/booking mechanism and clear click-to-call calls-to-action resulted in low user engagement and missed booking enquiries.',
    solution:
      'Built a high-performance, mobile-responsive website using WordPress & Elementor, incorporating 13+ dedicated SEO service pages and 20+ targeted city landing pages to cover key GTA service areas. Integrated an online quote and booking enquiry form with click-to-call CTAs, a fleet showcase highlighting vehicle details, and a structured FAQ section to improve organic search visibility. Completed full Google Search Console integration and XML sitemap setup to ensure rapid indexing and track organic local search performance.',
    metrics: [
      { label: 'GTA Cities Covered', value: '20+' },
      { label: 'SEO Service Pages', value: '13+' },
      { label: 'City Landing Pages', value: '20+' },
      { label: 'Mobile Performance', value: '95%' },
    ],
    techStack: [
      { group: 'CMS & Page Builder', items: ['WordPress', 'Elementor Pro'] },
      { group: 'Features', items: ['Fleet Showcase', 'Online Quote Form', 'FAQ Accordions', 'Click-to-Call CTAs'] },
      { group: 'SEO & Performance', items: ['Google Search Console', 'XML Sitemaps', 'Local Schema Markup', 'Meta Optimisation'] },
      { group: 'Design', items: ['Responsive UI', 'High-Res Fleet Imagery', 'Premium Typography'] },
      { group: 'Hosting', items: ['LiteSpeed Web Server', 'PHP 8.2'] },
    ],
  },
  {
    slug: 'luna-by-navneet',
    name: 'Luna By Navneet',
    featured: true,
    developer: 'Jatinder Sandhu',
    coverImage: '/images/team/jatinder/lunanav/project1-cover.png',
    images: [
      '/images/team/jatinder/lunanav/project1-img2.png',
      '/images/team/jatinder/lunanav/project1-img3.png',
      '/images/team/jatinder/lunanav/project1-img4.png',
      '/images/team/jatinder/lunanav/project1-img5.png',
      '/images/team/jatinder/lunanav/project1-img6.png',
      '/images/team/jatinder/lunanav/project1-img7.png',
      '/images/team/jatinder/lunanav/project-desgin1.pdf',
      '/images/team/jatinder/lunanav/project-desgin2.pdf',
    ],
    tagline: 'A full-stack e-commerce website for a premium designer Punjabi suit boutique — serving local and NRI customers across Punjab, Canada, UK, and USA.',
    tech: 'Next.js · Tailwind CSS · TypeScript',
    result: 'Production-ready boutique e-commerce site with SSR, WhatsApp booking, video showcase, category filters, and SEO targeting local fashion keywords across Bathinda, Malwa, and NRI markets.',
    url: 'https://lunanav.malwaland.com/',
    category: 'E-Commerce',
    year: '2025',
    overview:
      'Designed and developed a full-stack e-commerce website for LUNA by Navneet & Navjot — a premium designer Punjabi suit boutique based in Talwandi Sabo, Bathinda, Punjab. The platform allows customers across Punjab, Canada, UK, and USA to browse designer suit collections, filter by fabric type (cotton, silk, velvet, pashmina, georgette, chikan, rayon), and directly book appointments or contact via WhatsApp — enabling the boutique to serve both local and international NRI customers online.',
    challenge:
      'The boutique had no online presence and was losing potential customers — especially NRI buyers from Canada, UK, and USA who wanted to browse and order designer Punjabi suits remotely. Without a website, they relied entirely on walk-in traffic and word-of-mouth, missing high-intent searches for local boutique fashion keywords across Bathinda and the Malwa region.',
    solution:
      'Built with Next.js (App Router) for performance and SEO, with server-side rendering and rich metadata optimisation targeting local boutique searches across Bathinda, Malwa region, and NRI markets. Includes a video showcase section, product listing with category filters, customer testimonials carousel, and a structured FAQ section for organic search visibility. Delivered a production-ready, mobile-first website with fast load times, clean UI, and strong Google search presence for competitive local fashion keywords.',
    metrics: [
      { label: 'Markets Served', value: '4 countries' },
      { label: 'Fabric Categories', value: '7+' },
      { label: 'Lighthouse SEO', value: '98' },
      { label: 'LCP', value: '<1.5 s' },
    ],
    techStack: [
      { group: 'Frontend', items: ['Next.js (App Router)', 'Tailwind CSS', 'TypeScript'] },
      { group: 'Features', items: ['Product Filters', 'Video Showcase', 'Testimonials', 'FAQ'] },
      { group: 'SEO', items: ['SSR', 'JSON-LD', 'Rich Metadata', 'Local SEO'] },
      { group: 'Integration', items: ['WhatsApp Booking', 'next/image'] },
      { group: 'Hosting', items: ['Vercel'] },
    ],
  },
  {
    slug: 'true-holiday-admin-dashboard',
    name: 'True Holiday Admin Dashboard',
    featured: true,
    developer: 'Jatinder Sandhu',
    coverImage: '/images/team/jatinder/True Holiday/image1.jpeg',
    images: [
      '/images/team/jatinder/True Holiday/image1.jpeg',
      '/images/team/jatinder/True Holiday/image2.jpeg',
      '/images/team/jatinder/True Holiday/image3.jpeg',
      '/images/team/jatinder/True Holiday/image4.jpeg',
    ],
    tagline: 'A centralized internal business management dashboard built to replace manual tracking and provide real-time operational insights.',
    tech: 'PHP · MySQL · Bootstrap · jQuery . AJAX . REST APIs',
    result: 'Fully operational company admin dashboard with multi-level Role-Based Access Control, employee activity monitoring, and automated order lifecycle tracking.',
    url: '',
    category: 'Backend',
    year: '2025',
    overview:
      'Designed and developed a full-featured Company Admin Dashboard as a centralized internal management system built to replace inefficient manual spreadsheets and give business owners a clear, real-time view of their day-to-day company operations.',
    challenge:
      'The client relied on manual tracking systems that were slow, prone to errors, and lacked clear visibility. Managing employee records, tracking order lifecycles, and ensuring secure, role-based data access for different team members was highly operational, leading to delayed decision-making and security risks.',
    solution:
      'Built a robust Laravel and MySQL dashboard featuring multi-level Role-Based Access Control (RBAC) for admins, managers, and staff. Delivered real-time employee and team tracking, end-to-end orders and sales lifecycle management, and custom filterable data tables designed to handle growing data volumes cleanly. Implemented secure role-based session authentication and an intuitive admin UI optimized for non-technical users.',
    metrics: [
      { label: 'User Roles', value: '3-Tier' },
      { label: 'Access Control', value: 'RBAC' },
      { label: 'Data Sorting', value: 'Filtered' },
      { label: 'UI Learning Curve', value: 'Minimal' },
    ],
    techStack: [
      { group: 'Backend Framework', items: ['Laravel (PHP)', 'Eloquent ORM'] },
      { group: 'Database & Storage', items: ['MySQL', 'Relational Schemas', 'Transaction Logs'] },
      { group: 'Frontend & UI', items: ['Bootstrap 5', 'jQuery', 'AJAX', 'Responsive Layouts'] },
      { group: 'Security', items: ['RBAC Permissions', 'Secure Session Auth', 'Route Protection'] },
      { group: 'Features', items: ['Employee Tracker', 'Order Lifecycle Logs', 'Filtered Data Tables'] },
    ],
  },
  {
    slug: 'aracuda-inspection-saas-platform',
    name: 'Aracuda Inspection SaaS Platform',
    featured: true,
    developer: 'Jatinder Sandhu',
    coverImage: '/images/team/jatinder/Aracuda/Screenshot 2026-05-23 at 9.26.00 PM.png',
    images: [
      '/images/team/jatinder/Aracuda/Screenshot 2026-05-23 at 9.26.00 PM.png',
    ],
    tagline: 'A multi-role marketplace and SaaS CRM managing inspections, bidding systems, dynamic onboarding, and payments.',
    tech: 'Laravel · MySQL · JavaScript · REST APIs',
    result: 'Scalable marketplace SaaS platform automating workflows for clients, agents, inspectors, and admins with built-in subscription billing and secure document uploads.',
    url: '',
    category: 'Backend',
    year: '2025',
    overview:
      'Built a scalable, multi-role CRM and SaaS marketplace platform for service-based businesses. Developed centralized systems to manage clients, agents, bookings, inspections, payments, and subscriptions—replacing manual spreadsheet operations with dynamic automation.',
    challenge:
      'Managing complex workflows involving multiple stakeholder roles (Admins, Buyers, Inspectors, Agents, Staff) was highly fragmented. The business struggled with manual scheduling, delayed inspection reporting, insecure document handling, and complex payment splits, leading to operational inefficiencies.',
    solution:
      'Architected a Laravel + MySQL backend utilizing prepared statements, password hashing, and role-based access control. Integrated payment gateways with subscription and billing modules, implemented secure multi-role bidding systems, built automated inspection scheduling, enabled secure document uploads, and shipped an interactive analytics reporting dashboard.',
    metrics: [
      { label: 'Platform Roles', value: '5 Roles' },
      { label: 'Automation Flow', value: 'End-to-End' },
      { label: 'Data Security', value: 'Hashing' },
      { label: 'System Type', value: 'SaaS' },
    ],
    techStack: [
      { group: 'Core Platform', items: ['Laravel (PHP)', 'MySQL Schema Design'] },
      { group: 'Frontend & Async', items: ['JavaScript', 'AJAX', 'Bootstrap', 'Dynamic CRUD'] },
      { group: 'Integrations', items: ['REST APIs', 'Payment Gateways', 'Subscription Billing'] },
      { group: 'Security', items: ['Prepared Statements', 'Password Hashing', 'Multi-Role RBAC'] },
      { group: 'Features', items: ['Bidding System', 'Document Uploads', 'Invoice Manager', 'Analytics Dashboard'] },
    ],
  },
  {
    slug: 'devidend',
    name: 'Devidend',
    developer: 'Sandeep Singh',
    coverImage: '/images/team/sandeep/Devidend/image1.png',
    images: [
      '/images/team/sandeep/Devidend/image1.png',
      '/images/team/sandeep/Devidend/Devidend.pdf',
    ],
    tagline: 'A corporate energy-market consulting platform featuring live tariff trackers, dynamic energy savings calculators, and modern scroll animations.',
    tech: 'WordPress · Elementor · Redux · GSAP',
    result: 'Corporate energy-market consulting platform featuring live tariff trackers, dynamic energy savings consultation tools, and sleek scroll animations.',
    url: 'https://devidend.nl/',
    category: 'Energy',
    year: '2024',
    overview:
      'Designed and built a corporate website and utility portal for Devidend, a premium energy-market consulting firm in the Netherlands. The platform is engineered to let businesses track real-time tariff changes, calculate dynamic energy savings, and request consulting packages through interactive custom-built forms. Built on WordPress with a fully custom Elementor workflow, integrated with Redux for stateful savings forms and GSAP for silky-smooth premium storytelling animations.',
    challenge:
      'The client needed to translate highly complex Dutch energy tariff structures and savings tables into an intuitive, user-friendly frontend widget. Static layouts failed to capture the brand\'s premium consulting status, and heavy custom components threatened site performance and load times on mobile devices.',
    solution:
      'Developed custom responsive Elementor blocks integrated with a lightweight JavaScript savings calculator. Implemented state management using Redux to support multi-step dynamic tariff comparison inputs. Polished the user experience with GSAP scroll-triggered animations to guide users through the consulting benefits, and fully optimized site assets, rendering a perfect balance between rich interaction and fast loading speeds.',
    metrics: [
      { label: 'Energy Trackers', value: 'Live' },
      { label: 'Interaction Rate', value: '+45%' },
      { label: 'Consultation Leads', value: '+30%' },
      { label: 'Scroll Performance', value: '60 FPS' },
    ],
    techStack: [
      { group: 'Core & CMS', items: ['WordPress', 'Elementor Pro'] },
      { group: 'Interaction & State', items: ['GSAP', 'Redux', 'jQuery'] },
      { group: 'Styling & Assets', items: ['Custom CSS3', 'HSL Palette'] },
      { group: 'Features', items: ['Tariff Auditing Widget', 'Lead Engine'] },
    ],
  },
  {
    slug: 'pagdiwale',
    name: 'Wedding Pagdiwale',
    developer: 'Sandeep Singh',
    coverImage: '/images/team/sandeep/weeding/weeding.webp',
    images: [
      '/images/team/sandeep/weeding/weeding.webp',
    ],
    tagline: 'A luxury turban-tying (pagdi) service booking portal for high-end traditional Indian weddings and celebrations.',
    tech: 'WordPress · Elementor · Custom Styles',
    result: 'Premium Indian wedding services portal offering traditional turban (pagdi) tying bookings with a localized business lead-capture engine.',
    url: 'https://weddingpagdiwale.com/',
    category: 'Wedding',
    year: '2024',
    overview:
      'Developed a high-end booking and showcase portal for Wedding Pagdiwale, a premier provider of traditional turban (pagdi) styling services across major Indian wedding celebrations. Built with WordPress and Elementor, featuring custom booking modules, high-definition styling portfolios, localized landing pages, and lead-capture systems tailored to luxury traditional event planners.',
    challenge:
      'The traditional wedding services sector relies heavily on high-visual trust and immediate booking inquiries. The previous website had slow image gallery loading, lacked a clean booking inquiries flow, and did not communicate the high-end craftsmanship required to secure VIP bookings.',
    solution:
      'Designed a visually stunning portfolio interface using custom CSS layouts and lightweight image wrappers. Integrated an interactive booking form with localized routing for inquiries, and implemented high-conversion CTAs designed specifically to capture high-volume wedding season leads.',
    metrics: [
      { label: 'Visual Assets Load', value: '<1.2s' },
      { label: 'Lead Conversion', value: '+40%' },
      { label: 'Mobile Bookings', value: '70%' },
      { label: 'Event Locations', value: '10+ Cities' },
    ],
    techStack: [
      { group: 'Core & CMS', items: ['WordPress', 'Elementor Pro'] },
      { group: 'Styles & Layouts', items: ['Custom HTML5 / CSS3'] },
      { group: 'Performance', items: ['Image WebP Optimization'] },
      { group: 'Features', items: ['Lead Capture Engine', 'Interactive Booking Form'] },
    ],
  },
  {
    slug: 'invictus',
    name: 'Invictus Freight',
    developer: 'Sandeep Singh',
    coverImage: '/images/team/sandeep/InvictusFreight/InvictusFreight.png',
    images: [
      '/images/team/sandeep/InvictusFreight/InvictusFreight.png',
    ],
    tagline: 'A robust, high-performance corporate logistics and freight-forwarding platform with dynamic quote calculators.',
    tech: 'WordPress · Elementor · jQuery · Custom Forms',
    result: 'Sleek, high-performance freight forwarding and cargo logistics platform integrated with interactive freight quote inquiry systems.',
    url: 'https://invictusfreight.com/',
    category: 'Logistics',
    year: '2024',
    overview:
      'Designed and engineered a high-performance logistics website for Invictus Freight, a leading global freight forwarding and cargo shipping company. Built with WordPress and Elementor, the platform features a streamlined visual infrastructure showcasing international shipping lanes, and integrates custom jQuery-based inquiry forms to convert complex freight quote requests in real time.',
    challenge:
      'B2B freight logistics requires a highly professional corporate presence combined with complex data entry for cargo weight, dimensions, and destinations. Legacy contact forms were too generic and resulted in incomplete, un-actionable business inquiries.',
    solution:
      'Developed a multi-step jQuery cargo detail calculator that guides clients through entering shipping dimensions and destinations. Optimized the responsive UI layout for cargo managers on the field, and created clear custom routes for swift dispatching of freight quotes.',
    metrics: [
      { label: 'Quote Submission', value: '3 Steps' },
      { label: 'Form Completion', value: '+50%' },
      { label: 'Load Speed', value: '<1.5s' },
      { label: 'Global Routes', value: '120+ Covered' },
    ],
    techStack: [
      { group: 'Core & CMS', items: ['WordPress', 'Elementor Pro'] },
      { group: 'Scripting', items: ['jQuery', 'AJAX custom handlers'] },
      { group: 'Styling', items: ['Tailored B2B Corporate Theme'] },
      { group: 'Features', items: ['Multi-step Cargo Calculator', 'Route Mapping'] },
    ],
  },
  {
    slug: 'app-design',
    name: 'Application UI/UX',
    developer: 'Akanksha Baleghate',
    coverImage: '/images/team/akanksha/Application Design UI UX/Green-Thumb-Application-Ui-Ux.png',
    images: [
      '/images/team/akanksha/Application Design UI UX/Green-Thumb-Application-Ui-Ux.png',
      '/images/team/akanksha/Application Design UI UX/MooiApplication-Ui-Ux.png',
      '/images/team/akanksha/Application Design UI UX/SellerApp-UI-UX.png',
      '/images/team/akanksha/Application Design UI UX/Green-Thumb-Application-Ui-Ux.pdf',
      '/images/team/akanksha/Application Design UI UX/MooiApplication-Ui-Ux.pdf',
      '/images/team/akanksha/Application Design UI UX/SellerApp-UI-UX.pdf',
    ],
    tagline: 'Premium, user-centered high-fidelity mobile application designs and interactive clickable prototypes.',
    tech: 'Figma · Mobile App UI · Prototyping',
    result: 'Designed premium, user-centered mobile application interfaces including Green Thumb, Mooi, and SellerApp with high-fidelity prototypes and complete design specs.',
    url: '',
    category: 'UI/UX',
    year: '2024',
    overview:
      'Created professional, high-fidelity UI/UX mobile designs and interactive clickable prototypes for Green Thumb (sustainable gardening app), Mooi (beauty and wellness platform), and SellerApp (business dashboard). Focused on user empathy, sleek modern design systems, clean typography, and intuitive user journeys with comprehensive developer handoff files.',
    challenge:
      'Designing complex multi-state applications that balance dense functional controls (e.g. business analytics in SellerApp, botanical tracking in Green Thumb) with simple, accessible mobile layouts.',
    solution:
      'Developed atomic design systems in Figma with reusable components, unified color palettes, and strict typographic hierarchies. Engineered high-fidelity clickable prototype micro-interactions, and compiled detailed PDF design specifications to ensure seamless frontend implementation.',
    metrics: [
      { label: 'App Screens Designed', value: '45+' },
      { label: 'High-Fidelity Specs', value: '3 Systems' },
      { label: 'Prototype Clickthrough', value: '100% Flow' },
      { label: 'User Flow Validation', value: 'Verified' },
    ],
    techStack: [
      { group: 'Core Tool', items: ['Figma'] },
      { group: 'Methodologies', items: ['Atomic Design Systems', 'Wireframing', 'High-Fidelity Prototyping'] },
      { group: 'Formats', items: ['Figma Components', 'Interactive Prototypes', 'Detailed Spec PDFs'] },
    ],
  },
  {
    slug: 'branding',
    name: 'Graphic Design',
    developer: 'Akanksha Baleghate',
    coverImage: '/images/team/akanksha/Graphic Design/Scuido Brand Identity.jpg',
    images: [
      '/images/team/akanksha/Graphic Design/Scuido Brand Identity.jpg',
      '/images/team/akanksha/Graphic Design/Hoarding.pdf',
      '/images/team/akanksha/Graphic Design/Logo Design.pdf',
      '/images/team/akanksha/Graphic Design/Logo design 2.pdf',
      '/images/team/akanksha/Graphic Design/Menu card Design.pdf',
      '/images/team/akanksha/Graphic Design/Social Media ads (1).pdf',
    ],
    tagline: 'End-to-end premium corporate branding, identity design, and high-impact physical and digital visual assets.',
    tech: 'Photoshop · Illustrator · Canva · Brand Identity',
    result: 'Created professional visual assets including Scuido brand identity, custom logo designs, marketing hoardings, menu layouts, and highly engaging social media advertisement kits.',
    url: '',
    category: 'Graphic Design',
    year: '2024',
    overview:
      'Designed and developed unified visual brand identities and print/digital assets, including the core corporate identity for Scuido, custom commercial logo designs, large-scale outdoor marketing hoardings, premium restaurant menu cards, and cohesive social media advertisement design kits.',
    challenge:
      'Translating abstract brand core values into highly versatile, memorable logo structures and keeping high brand consistency across both large print formats (hoardings) and small digital spaces (social media ads).',
    solution:
      'Crafted a clean vector-based logo framework using strict grid alignments and modern typography. Constructed scalable brand style guidelines covering color codes, secondary assets, print-ready high-dpi vectors, and customizable digital templates for rapid marketing deployment.',
    metrics: [
      { label: 'Brand Assets Created', value: '20+' },
      { label: 'Media Channels Sync', value: '100% Cohesive' },
      { label: 'Logo Iterations', value: '3 Core Paths' },
      { label: 'Print Success Rate', value: '100% High-DPI' },
    ],
    techStack: [
      { group: 'Software', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva'] },
      { group: 'Deliverables', items: ['Vector Assets', 'PDF Print-Ready Specs', 'Social Media Brand Kit'] },
      { group: 'Core Skill', items: ['Visual Identity Design', 'Typography', 'Asset Optimization'] },
    ],
  },
  {
    slug: 'web-design',
    name: 'Website Design',
    developer: 'Akanksha Baleghate',
    coverImage: '/images/team/akanksha/Website Design/Wol-power-website-design-3.png',
    images: [
      '/images/team/akanksha/Website Design/Wol-power-website-design-3.png',
      '/images/team/akanksha/Website Design/Art-World-website.png',
      '/images/team/akanksha/Website Design/CREATIVE-DESIGN-SUMMIT.png',
      '/images/team/akanksha/Website Design/Fly-Wings-Website-UI-design.png',
      '/images/team/akanksha/Website Design/Landing-Page-Aracuda-Ui-UX.png',
      '/images/team/akanksha/Website Design/Meridian-Website-Homepage-Ui-Design.png',
      '/images/team/akanksha/Website Design/Wol power website design (3).pdf',
      '/images/team/akanksha/Website Design/Art-World-website.pdf',
      '/images/team/akanksha/Website Design/CREATIVE DESIGN SUMMIT 2024 Website design Ui.pdf',
      '/images/team/akanksha/Website Design/Fly Wings Website UI design.pdf',
      '/images/team/akanksha/Website Design/Landing Page - Aracuda Ui UX.pdf',
      '/images/team/akanksha/Website Design/Meridian Website Homepage Ui Design.pdf',
    ],
    tagline: 'Premium, responsive web designs and landing page interfaces crafted in Figma for modern tech and creative brands.',
    tech: 'Figma · Web Design · Typography · Responsive Layouts',
    result: 'Designed beautiful, modern, high-converting desktop and responsive layouts for Wol Power, Art World, Meridian, Creative Design Summit, and Fly Wings.',
    url: '',
    category: 'Web Design',
    year: '2024',
    overview:
      'Designed beautiful, modern, responsive landing pages and complete desktop websites in Figma. Developed layouts for Wol Power (industrial systems), Art World (creative showcase), Meridian (corporate consulting), Creative Design Summit 2024, Fly Wings, and the Aracuda Inspection platform — prioritizing fluid responsive grids, modern color palettes, and structured layouts for maximum business conversion.',
    challenge:
      'B2B websites and tech conferences require highly distinct aesthetics — Wol Power needs a powerful, structured layout, whereas the Creative Design Summit requires high creative energy and bold typography. Keeping consistent responsive layouts across all screen breakpoints was critical.',
    solution:
      'Engineered custom grid systems in Figma to support multi-device responsive scaling. Selected tailored typographic pairings and harmonious HSL colors for each brand, and compiled precise vector layout templates and detailed spec PDFs to streamline developer handoff.',
    metrics: [
      { label: 'Web Layouts Designed', value: '12+ Templates' },
      { label: 'Breakpoints Mapped', value: 'Desktop & Mobile' },
      { label: 'Handoff Spec Speed', value: 'Instant (Figma Dev)' },
      { label: 'Visual Rating', value: 'Premium & Clean' },
    ],
    techStack: [
      { group: 'Core Tools', items: ['Figma', 'Adobe Illustrator'] },
      { group: 'Design System', items: ['Fluid Responsive Grids', 'Tailored Typography', 'Unified Color Systems'] },
      { group: 'Formats', items: ['Handoff Prototypes', 'Detailed Layout PDFs'] },
    ],
  },
];

// Section-specific data

const serviceCopy: Record<string, string> = {
  'Backend Dev': 'Secure REST APIs, JWT authentication, database schemas, and server-side business logic built for scale.',
  'Frontend Dev': 'Pixel-perfect React and Next.js interfaces — mobile-first, Core Web Vitals optimized, built to convert.',
  'API Integration': 'Stripe payments, CRM systems, booking platforms, SMS/email automation, and custom webhooks integrated cleanly.',
  WordPress: 'Custom WordPress sites, WooCommerce stores, Elementor builds, and speed optimization for business owners.',
  Shopify: 'Shopify theme customization, checkout optimization, app integrations, and conversion-focused product pages.',
  'REST API': 'Structured endpoints with request validation, JWT auth, rate limiting, and Swagger/Postman documentation.',
  Database: 'Relational and NoSQL schema design, query optimization, and MySQL/PostgreSQL/MongoDB architecture for production.',
  'AI Integration':
    'OpenAI GPT-4 and Claude API integrations — smart chatbots, content automation, and AI-powered workflows for your product.',
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
  title: '6+ years building production web applications for startups and businesses worldwide.',
  description:
    "I'm Jatinder Sandhu — a full stack developer with 6+ years of experience building fast, scalable web applications for startups, agencies, and growing businesses across the US, UK, Canada, Australia, and India.",
  secondaryDescription:
    'My stack covers React, Next.js, Node.js, PHP, Laravel, WordPress, Shopify, MySQL, MongoDB, and REST APIs. I also build AI-powered features — OpenAI, Claude, and custom LLM workflows — to add smart capabilities to your product. Every project ships with clean code, clear documentation, and support after go-live.',
};

export const servicesSection: ServicesSectionData = {
  id: 'services',
  kicker: 'What I Do',
  title: 'Professional web development services — frontend, backend, AI, and everything in between.',
  description:
    'From React frontends and Node.js APIs to WordPress sites and AI integrations — I deliver complete, production-ready solutions for startups and growing businesses worldwide.',
  coreOfferDescription:
    'I handle the full stack — frontend interfaces, backend APIs, database design, CMS setup, third-party integrations, and AI features. One developer, full ownership, clean delivery.',
  specialistStack: ['React / Next.js', 'PHP / Laravel', 'AI Integration'],
  services,
  serviceCopy,
  serviceTags,
  serviceStacks,
};

export const worksSection: WorksSectionData = {
  id: 'works',
  kicker: 'Works',
  title: '25+ projects delivered — real businesses, real results.',
  description: 'Production websites, web applications, e-commerce platforms, and SaaS tools — built for businesses across Canada, UK, Netherlands, India, and beyond.',
  works: projects,
};

export const faqSection: FaqSectionData = {
  id: 'faq',
  kicker: 'FAQ',
  title: 'Frequently asked questions about hiring a full stack developer.',
  description:
    'Rates, timelines, tech stack, remote communication, and everything else you need to know before starting your project.',
  items: faqs,
};

export const experienceSection: ExperienceSectionData = {
  id: 'experience',
  kicker: 'Experience',
  title: '6+ years shipping full-stack web applications at scale.',
  description:
    'From React dashboards and Node.js APIs to PHP backends and WordPress sites — a proven track record of building production systems that handle real users and real data.',
  experience,
  experienceFocus,
  yearsExperience: personal.experience,
};

export const skillsSection: SkillsSectionData = {
  id: 'skills',
  kicker: 'Skills',
  title: 'Full-stack expertise across frontend, backend, CMS, and AI.',
  description:
    'React, Next.js, Node.js, PHP, Laravel, WordPress, MySQL, MongoDB, REST APIs, and AI integrations — the complete toolkit to build and ship your web product.',
  coreStrengths,
  techGroups: techGroups.map(group => ({
    category: group.category,
    items: group.items,
  })),
  hireSection: {
    title: 'Ready to build your next web project?',
    description:
      'Send me your scope, idea, or requirements — I\'ll review it, recommend the right tech approach, and provide a clear quote and timeline. Available for immediate start.',
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
    label: 'Global Clients',
  },
  {
    value: '15+',
    label: 'Technologies Mastered',
  },
];

export const teamSection: TeamSectionData = {
  id: 'team',
  kicker: 'The Team',
  title: 'Senior developers and designers who ship production-quality work.',
  description:
    'A focused team of full stack developers and UI/UX designers working remotely — building web applications, e-commerce platforms, and AI-powered products for clients worldwide.',
  members: [
    {
      slug: 'jatinder-sandhu',
      name: 'Jatinder Sandhu',
      image: '/jatinder.png',
      role: 'Lead Full Stack Developer',
      bio: '6+ years building scalable web apps across PHP, React, Node.js and AI-assisted workflows. Focused on shipping clean, maintainable code for real business needs.',
      avatar: 'JS',
      avatarBg: '#f59e0b22',
      avatarColor: '#f59e0b',
      skills: ['React / Next.js', 'PHP / Laravel', 'Node.js', 'AI Integration', 'MySQL', 'MongoDB'],
      projects: [
        {
          slug: 'luxorlimo',
          name: 'Luxorlimo',
          tech: 'WordPress · Elementor · Local SEO',
          result: 'Complete limousine rental website with 13+ service pages, 20+ city landing pages, online quote form, and optimised Google Search Console setup for GTA local SEO dominance.',
          url: 'https://luxorlimo.ca/',
          coverImage: '/images/team/jatinder/luxor/project2-image1.png',
          images: [
            '/images/team/jatinder/luxor/project2-image2.png',
            '/images/team/jatinder/luxor/project2-image3.png',
            '/images/team/jatinder/luxor/project2-image4.png',
            '/images/team/jatinder/luxor/project2-image5.png',
            '/images/team/jatinder/luxor/Limo-Service-Limousine-Rental-Services-Canada-05-30-2026_04_39_PM.pdf',
          ],
          category: 'CMS',
        },
        {
          slug: 'luna-by-navneet',
          name: 'Luna By Navneet',
          tech: 'Next.js · Tailwind CSS · TypeScript',
          result: 'Production-ready boutique e-commerce site with SSR, WhatsApp booking, video showcase, category filters, and SEO targeting local fashion keywords across Bathinda, Malwa, and NRI markets.',
          url: 'https://lunanav.malwaland.com/',
          category: 'E-Commerce',
          coverImage: '/images/team/jatinder/lunanav/project1-cover.png',
          images: [
            '/images/team/jatinder/lunanav/project1-img2.png',
            '/images/team/jatinder/lunanav/project1-img3.png',
            '/images/team/jatinder/lunanav/project1-img4.png',
            '/images/team/jatinder/lunanav/project1-img5.png',
            '/images/team/jatinder/lunanav/project1-img6.png',
            '/images/team/jatinder/lunanav/project1-img7.png',
            '/images/team/jatinder/lunanav/project-desgin1.pdf',
            '/images/team/jatinder/lunanav/project-desgin2.pdf',
          ],
        },

        {
          slug: 'true-holiday-admin-dashboard',
          name: 'True Holiday Admin Dashboard',
          tech: 'Laravel (PHP) · MySQL · Bootstrap · jQuery',
          result: 'Fully operational company admin dashboard with multi-level Role-Based Access Control, employee activity monitoring, and automated order lifecycle tracking.',
          category: 'Backend',
          coverImage: '/images/team/jatinder/True Holiday/image1.jpeg',
          images: [
            '/images/team/jatinder/True Holiday/image1.jpeg',
            '/images/team/jatinder/True Holiday/image2.jpeg',
            '/images/team/jatinder/True Holiday/image3.jpeg',
            '/images/team/jatinder/True Holiday/image4.jpeg',
          ],
        },
        {
          slug: 'aracuda-inspection-saas-platform',
          name: 'Aracuda Inspection SaaS Platform',
          tech: 'Laravel · MySQL · JavaScript · AJAX · REST APIs',
          result: 'Scalable marketplace SaaS platform automating workflows for clients, agents, inspectors, and admins with built-in subscription billing and secure document uploads.',
          category: 'Backend',
          coverImage: '/images/team/jatinder/Aracuda/Screenshot 2026-05-23 at 9.26.00 PM.png',
          images: [
            '/images/team/jatinder/Aracuda/Screenshot 2026-05-23 at 9.26.00 PM.png',
          ],
        },
      ],
      linkedin: 'https://www.linkedin.com/in/jatindersandhuinfo/',
      github: 'https://github.com/jatindersandhuinfo',
      website: 'https://jatinder.malwaland.com/',
    },
    {
      slug: 'sandeep-singh',
      name: 'Sandeep Singh',
      image: '/sandeep.jpeg',

      role: 'WordPress Developer',

      bio: 'WordPress developer specializing in Elementor, WooCommerce, responsive business websites, and frontend customization. Experienced in building energy business platforms, logistics company websites, wedding service portals, and modern corporate websites with performance-focused layouts, SEO-friendly structure, and mobile-first user experiences.',

      avatar: 'SS',
      avatarBg: '#61dafb22',
      avatarColor: '#61dafb',

      skills: [
        'WordPress',
        'Elementor',
        'WooCommerce',
        'PHP',
        'JavaScript',
        'jQuery',
        'HTML5',
        'CSS3',
        'Responsive Web Design',
        'Frontend Customization',
        'Landing Page Development',
        'Business Website Development',
        'Corporate Websites',
        'Performance Optimization',
        'SEO Optimization',
        'Mobile-First Development',
        'Cross Browser Compatibility',
        'UI Development',
      ],
      projects: [
        {
          slug: 'devidend',
          name: 'Devidend',
          tech: 'WordPress · Elementor · Redux · GSAP',
          result: 'Corporate energy-market consulting platform featuring live tariff trackers, dynamic energy savings consultation tools, and sleek scroll animations.',
          category: 'Energy',
          url: 'https://devidend.nl/',
          coverImage: '/images/team/sandeep/Devidend/image1.png',
          images: [
            '/images/team/sandeep/Devidend/image1.png',
            '/images/team/sandeep/Devidend/Devidend.pdf',
          ],
        },
        {
          slug: 'pagdiwale',
          name: 'Wedding Pagdiwale',
          tech: 'WordPress · Elementor · custom-styles',
          result: 'Premium Indian wedding services portal offering traditional turban (pagdi) tying bookings with a localized business lead-capture engine.',
          category: 'Wedding',
          url: 'https://weddingpagdiwale.com/',
          coverImage: '/images/team/sandeep/weeding/weeding.webp',
          images: [
            '/images/team/sandeep/weeding/weeding.webp',
          ],
        },
        {
          slug: 'invictus',
          name: 'Invictus Freight',
          tech: 'WordPress · Elementor · jQuery · custom-forms',
          result: 'Sleek, high-performance freight forwarding and cargo logistics platform integrated with interactive freight quote inquiry systems.',
          category: 'Logistics',
          url: 'https://invictusfreight.com/',
          coverImage: '/images/team/sandeep/InvictusFreight/InvictusFreight.png',
          images: [
            '/images/team/sandeep/InvictusFreight/InvictusFreight.png',
          ],
        },
      ],
      linkedin: 'https://linkedin.com/',
    },
    {
      slug: 'akanksha-baleghate',
      name: 'Akanksha Baleghate',
      image: '/akansha.JPG',
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
          slug: 'app-design',
          name: 'Application UI/UX',
          tech: 'Figma · Mobile App UI · Prototyping',
          result: 'Designed premium, user-centered mobile application interfaces including Green Thumb, Mooi, and SellerApp with high-fidelity prototypes and complete design specs.',
          category: 'UI/UX',
          coverImage: '/images/team/akanksha/Application Design UI UX/Green-Thumb-Application-Ui-Ux.png',
          images: [
            '/images/team/akanksha/Application Design UI UX/Green-Thumb-Application-Ui-Ux.png',
            '/images/team/akanksha/Application Design UI UX/MooiApplication-Ui-Ux.png',
            '/images/team/akanksha/Application Design UI UX/SellerApp-UI-UX.png',
            '/images/team/akanksha/Application Design UI UX/Green-Thumb-Application-Ui-Ux.pdf',
            '/images/team/akanksha/Application Design UI UX/MooiApplication-Ui-Ux.pdf',
            '/images/team/akanksha/Application Design UI UX/SellerApp-UI-UX.pdf',
          ],
        },
        {
          slug: 'branding',
          name: 'Graphic Design',
          tech: 'Photoshop · Illustrator · Canva · Brand Identity',
          result: 'Created professional visual assets including Scuido brand identity, custom logo designs, marketing hoardings, menu layouts, and highly engaging social media advertisement kits.',
          category: 'Graphic Design',
          coverImage: '/images/team/akanksha/Graphic Design/Scuido Brand Identity.jpg',
          images: [
            '/images/team/akanksha/Graphic Design/Scuido Brand Identity.jpg',
            '/images/team/akanksha/Graphic Design/Hoarding.pdf',
            '/images/team/akanksha/Graphic Design/Logo Design.pdf',
            '/images/team/akanksha/Graphic Design/Logo design 2.pdf',
            '/images/team/akanksha/Graphic Design/Menu card Design.pdf',
            '/images/team/akanksha/Graphic Design/Social Media ads (1).pdf',
          ],
        },
        {
          slug: 'web-design',
          name: 'Website Design',
          tech: 'Figma · Web Design · Typography · Responsive Layouts',
          result: 'Designed beautiful, modern, high-converting desktop and responsive layouts for Wol Power, Art World, Meridian, Creative Design Summit, and Fly Wings.',
          category: 'Web Design',
          coverImage: '/images/team/akanksha/Website Design/Wol-power-website-design-3.png',
          images: [
            '/images/team/akanksha/Website Design/Wol-power-website-design-3.png',
            '/images/team/akanksha/Website Design/Art-World-website.png',
            '/images/team/akanksha/Website Design/CREATIVE-DESIGN-SUMMIT.png',
            '/images/team/akanksha/Website Design/Fly-Wings-Website-UI-design.png',
            '/images/team/akanksha/Website Design/Landing-Page-Aracuda-Ui-UX.png',
            '/images/team/akanksha/Website Design/Meridian-Website-Homepage-Ui-Design.png',
            '/images/team/akanksha/Website Design/Wol power website design (3).pdf',
            '/images/team/akanksha/Website Design/Art-World-website.pdf',
            '/images/team/akanksha/Website Design/CREATIVE DESIGN SUMMIT 2024 Website design Ui.pdf',
            '/images/team/akanksha/Website Design/Fly Wings Website UI design.pdf',
            '/images/team/akanksha/Website Design/Landing Page - Aracuda Ui UX.pdf',
            '/images/team/akanksha/Website Design/Meridian Website Homepage Ui Design.pdf',
          ],
        },
      ],
      linkedin: 'https://linkedin.com/'
    },
    // {
    //   slug: 'varinder-dhillon',
    //   name: 'Varinder Dhillon',
    //   image: '/images/team/varinder_dhillon_portrait_1779813307283.png',
    //   role: 'MERN Stack Developer',
    //   bio: 'Innovative and results-driven Full-Stack Developer with a strong background in the IT and services industry. Experienced in building scalable, high-performing web applications with expertise in frontend and back-end development using React, Node.js, WordPress, and Shopify.',
    //   avatar: 'VD',
    //   avatarBg: '#6366f122',
    //   avatarColor: '#6366f1',
    //   skills: [
    //     'React.js',
    //     'JavaScript',
    //     'Node.js',
    //     'Express.js',
    //     'MongoDB',
    //     'MySQL',
    //     'WordPress',
    //     'Shopify',
    //     'Figma',
    //     'Adobe Photoshop',
    //     'Responsive Web Design',
    //     'Bootstrap',
    //     'jQuery',
    //     'HTML5',
    //     'CSS3',
    //     'JSON',
    //   ],
    //   projects: [
    //     {
    //       name: 'Custom MERN Web Applications',
    //       tech: 'React.js · Node.js · Express · MongoDB · JSON · HTTP',
    //       result:
    //         'Designed and built high-performance, single-page web applications utilizing React and custom Node.js/Express API frameworks to coordinate secure, real-time data flows.',
    //       category: 'Frontend',
    //     },
    //     {
    //       name: 'Custom WordPress & Shopify Platforms',
    //       tech: 'WordPress · Shopify · PHP · jQuery · Bootstrap',
    //       result:
    //         'Developed and optimized premium e-commerce storefronts and custom business portals utilizing WordPress custom blocks and responsive Shopify Liquid themes.',
    //       category: 'E-Commerce',
    //     },
    //     {
    //       name: 'UI/UX & Mobile-Responsive Design',
    //       tech: 'Figma · Adobe Photoshop · HTML5 · CSS3 · Bootstrap · jQuery',
    //       result:
    //         'Crafted pixel-perfect, highly responsive layout templates from wireframes, ensuring optimal contrast and smooth interactive elements across all modern browsers.',
    //       category: 'Design System',
    //     },
    //   ],
    //   linkedin: 'https://www.linkedin.com/in/varinder-dhillon-/',
    //   email: 'varinderdhilloninfo@gmail.com',
    // }
  ],
};
