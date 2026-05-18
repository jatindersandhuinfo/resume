import Image from 'next/image';
import {
  contact,
  education,
  experience,
  personal,
  projects,
  services,
  skillBars,
  techGroups,
} from '@/lib/data';

const stats = [
  { value: personal.experience, label: 'Professional Experience' },
  { value: `${projects.length}+`, label: 'Selected Projects' },
  { value: `${services.length}+`, label: 'Core Services' },
  { value: '100%', label: 'Responsive Delivery' },
];

const serviceCopy: Record<string, string> = {
  'Backend Dev': 'APIs, auth, database design, and server-side logic that can grow with the product.',
  'Frontend Dev': 'Responsive interfaces built with React, Next.js, Tailwind CSS, and clean component systems.',
  'API Integration': 'Payments, booking tools, CRMs, third-party data, and custom service integrations.',
  WordPress: 'Custom WordPress builds, theme work, Elementor pages, WooCommerce, and CMS maintenance.',
  Shopify: 'Storefront improvements, product flows, theme edits, and conversion-focused ecommerce UI.',
  'REST API': 'Structured endpoints, validation, JWT authentication, and practical API documentation.',
  Database: 'MySQL, MongoDB, PostgreSQL, schema planning, optimization, and data workflows.',
};

const serviceTags: Record<string, string> = {
  'Backend Dev': 'Architecture',
  'Frontend Dev': 'Interface',
  'API Integration': 'Automation',
  WordPress: 'CMS',
  Shopify: 'Commerce',
  'REST API': 'Backend',
  Database: 'Data',
};

const serviceStacks: Record<string, string[]> = {
  'Backend Dev': ['Node.js', 'PHP', 'Laravel'],
  'Frontend Dev': ['React', 'Next.js', 'Tailwind'],
  'API Integration': ['REST', 'Webhooks', 'CRM'],
  WordPress: ['CMS', 'Elementor', 'WooCommerce'],
  Shopify: ['Storefront', 'Theme', 'Checkout'],
  'REST API': ['JWT', 'Validation', 'Docs'],
  Database: ['MySQL', 'MongoDB', 'Postgres'],
};

const experienceFocus: Record<string, string[]> = {
  'SuperVisionIT Solutions': ['React + Redux', 'Node APIs', 'JWT Auth', 'MongoDB'],
  'Envy Us Media Pvt Ltd': ['PHP CMS', 'MySQL', 'Integrations', 'Testing'],
};

const navItems = [
  { label: 'About Me', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Hire Me', href: '#contact' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d0e] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0d0e]/88 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-10">
          <a href="#" className="text-xl font-black uppercase tracking-[0.08em]">
            {personal.firstName}
          </a>
          <nav className="hidden items-center gap-7 text-[12px] font-bold uppercase tracking-[0.16em] text-white/62 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#d6ad63]">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="rounded-full border border-white/18 px-4 py-2 text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
            href={`mailto:${contact.email}`}
          >
            Hire Me
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-12">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/74">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d6ad63]" />
              {personal.freelanceStatus}
            </div>

            <p className="mb-5 text-[13px] font-black uppercase tracking-[0.24em] text-[#d6ad63]">
              {personal.role} / {personal.location}
            </p>
            <h1 className="max-w-4xl text-[54px] font-black leading-[0.95] tracking-normal text-white sm:text-[78px] lg:text-[90px] xl:text-[102px]">
              A Full Stack Developer from Punjab.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl">
              I create clean, responsive, and scalable web experiences for businesses that need more than a basic website.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 px-7 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white hover:text-[#0b0d0e]"
                href="#about"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="relative isolate min-h-[500px] overflow-hidden rounded-lg border border-white/10 bg-[#141719] lg:min-h-0">
            <Image
              src="/jatindersandhu-1.webp"
              alt={`${personal.firstName} ${personal.lastName}, ${personal.role}`}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="z-0 object-cover object-top grayscale-[12%]"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0b0d0e]/26 via-transparent to-[#0b0d0e]/86" />
            <div className="absolute left-5 bottom-28 z-30 flex max-w-[calc(100%-40px)] items-center rounded-full border border-[#d6ad63]/55 bg-[#0b0d0e] px-4 py-2.5 text-xs font-black text-white shadow-2xl shadow-black/50 sm:left-6 sm:bottom-32 sm:px-5 sm:py-3 sm:text-sm">
              <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-[#d6ad63]" />
              <span>Clean code / Scalable APIs</span>
            </div>
            <div className="absolute right-6 top-6 z-30 hidden rounded-full bg-white px-5 py-3 text-sm font-black text-[#0b0d0e] shadow-2xl shadow-black/30 lg:block">
              {personal.experience}
            </div>
            <div className="absolute inset-x-0 bottom-0 z-30 p-6 pt-32">
              <p className="text-4xl font-black leading-none">{personal.firstName} {personal.lastName}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#d6ad63]">{personal.role}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 py-6 pr-4 last:border-r-0 sm:px-5 sm:first:pl-0">
                <p className="text-4xl font-black text-white sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/48">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-28">
        <div>
          <p className="section-kicker">About Me</p>
          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Transforming your vision into a dynamic web experience through clean UI and robust functionality.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-white/66">
          <p>
            I&apos;m {personal.firstName} {personal.lastName}, a full stack developer focused on practical builds: clean interfaces, solid backend logic, useful admin tools, and dependable deployment-ready code.
          </p>
          <p>
            My work spans PHP, Laravel, WordPress, React, Next.js, Node.js, MySQL, MongoDB, and API integrations. I like projects where design, performance, and business flow all matter.
          </p>
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            {techGroups.map((group) => (
              <div key={group.category} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-base font-black text-white">{group.category}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{group.items.join(' / ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#111416]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="section-kicker">What I Do</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Full-stack services for websites, apps, and business systems.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/62 lg:pt-10">
              From the public website to the admin dashboard, I build the parts clients actually use, manage, and measure. The focus is clean UI, dependable backend logic, and maintainable code.
            </p>
          </div>

          <div className="mb-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-lg border border-white/10 bg-[#0b0d0e] p-7">
              <p className="section-kicker">Core Offer</p>
              <h3 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                Complete product delivery from idea to launch.
              </h3>
              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-white/58">
                I can design the flow, build the responsive frontend, connect APIs, prepare the CMS or database, and keep the implementation practical for future changes.
              </p>
            </article>
            <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
              {['React / Next.js', 'PHP / Laravel', 'WordPress / Shopify'].map((item) => (
                <div key={item} className="bg-[#15191b] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/32">Specialist Stack</p>
                  <p className="mt-2 text-lg font-black text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.label}
                className="group relative min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-[#0f1214] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6ad63]/55 hover:bg-[#15191b]"
              >
                <p className="absolute -right-2 -top-3 text-[92px] font-black leading-none text-white/[0.035] transition group-hover:text-[#d6ad63]/10">
                  0{index + 1}
                </p>

                <div className="relative flex items-start justify-between gap-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-sm font-black text-[#d6ad63]">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/48 transition group-hover:border-[#d6ad63]/50 group-hover:text-[#d6ad63]">
                    {serviceTags[service.label] ?? 'Web'}
                  </span>
                </div>

                <h3 className="relative mt-9 text-3xl font-black leading-none text-white transition group-hover:text-[#d6ad63]">
                  {service.label}
                </h3>
                <p className="relative mt-4 text-[15px] leading-7 text-white/58">
                  {serviceCopy[service.label] ?? 'Clean, dependable web development support for your product.'}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {(serviceStacks[service.label] ?? ['Web', 'Build', 'Support']).map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] font-bold text-white/52">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-x-6 bottom-0 h-px bg-white/10 transition group-hover:bg-[#d6ad63]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="section-kicker">Works</p>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Selected builds and production projects.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/62 lg:pt-10">
            A focused sample of business websites, ecommerce work, and web applications built with practical stacks.
          </p>
        </div>

        <div className="border-t border-white/10">
          {projects.map((project, index) => {
            const Wrapper = project.url ? 'a' : 'article';
            const props = project.url
              ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Wrapper
                key={project.name}
                className="group grid gap-5 border-b border-white/10 py-7 transition hover:bg-white/[0.03] md:grid-cols-[90px_1fr_0.8fr_120px]"
                {...props}
              >
                <p className="text-sm font-black text-white/32">0{index + 1}</p>
                <h3 className="text-3xl font-black leading-none text-white transition group-hover:text-[#d6ad63] sm:text-5xl">
                  {project.name}
                </h3>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/46">{project.tech}</p>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#d6ad63]">
                  {project.url ? 'Open' : 'Private'}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111416]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Experience</p>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Production work across frontend, backend, and CMS.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-white/56">
              A practical background in shipping interfaces, APIs, CMS features, and database-backed tools for real business workflows.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
              <div className="bg-[#0b0d0e] p-5">
                <p className="text-3xl font-black text-[#d6ad63]">{personal.experience}</p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.14em] text-white/38">Experience</p>
              </div>
              <div className="bg-[#0b0d0e] p-5">
                <p className="text-3xl font-black text-[#d6ad63]">{experience.length}</p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.14em] text-white/38">Companies</p>
              </div>
            </div>
          </div>
          <div className="relative space-y-6 before:absolute before:left-[21px] before:top-5 before:h-[calc(100%-40px)] before:w-px before:bg-white/10">
            {experience.map((item, index) => (
              <article key={item.company} className="group relative grid gap-5 pl-14 md:grid-cols-[150px_1fr]">
                <div className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#111416] text-sm font-black text-[#d6ad63] transition group-hover:border-[#d6ad63]">
                  0{index + 1}
                </div>
                <div>
                  <p className="rounded-full border border-white/10 px-4 py-2 text-center text-[11px] font-black uppercase tracking-[0.14em] text-white/46">
                    {item.period}
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#d6ad63]/55">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-3xl font-black leading-tight text-white transition group-hover:text-[#d6ad63]">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-white/42">{item.role}</p>
                    </div>
                    <span className="w-fit rounded-full bg-white/[0.05] px-3 py-1 text-[11px] font-bold text-white/48">
                      Production
                    </span>
                  </div>
                  <p className="mt-5 text-[15px] leading-7 text-white/60">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(experienceFocus[item.company] ?? ['Development', 'Delivery']).map((focus) => (
                      <span key={focus} className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold text-white/48">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f1214]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
          <div className="rounded-lg border border-white/10 bg-[#15191b] p-6 sm:p-8 lg:rounded-r-none">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Skills</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
                  Stack I use to build complete web products.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/54">
                Frontend, backend, CMS, database, and API work handled with one practical full-stack workflow.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {skillBars.map((skill) => (
                <article key={skill.name} className="rounded-lg border border-white/10 bg-[#0b0d0e] p-5 transition hover:border-[#d6ad63]/60">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-white">{skill.name}</h3>
                      <p className="mt-2 text-sm text-white/44">Production experience</p>
                    </div>
                    <p className="text-3xl font-black text-[#d6ad63]">{skill.level}</p>
                  </div>
                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[#d6ad63]" style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {techGroups.flatMap((group) => group.items).map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/58">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div id="contact" className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0d0e] p-6 sm:p-8 lg:rounded-l-none">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d6ad63]/14 blur-3xl" />
            <div className="relative">
              <p className="section-kicker">Hire Me</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                Have a project that needs a reliable developer?
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-white/58">
                Send the scope, reference, or rough idea. I can help shape the flow, build the interface, connect the backend, and ship it cleanly.
              </p>

              <div className="mt-8 grid gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6ad63] px-6 text-sm font-black uppercase tracking-[0.12em] text-[#0b0d0e] transition hover:bg-white"
                  href={`mailto:${contact.email}`}
                >
                  Let&apos;s Talk
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/34">Direct Email</p>
                <a className="mt-2 block break-words text-lg font-black text-white transition hover:text-[#d6ad63]" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/42">
        <p>{personal.firstName} {personal.lastName} / {personal.role} / {education[0].degree}</p>
      </footer>
    </main>
  );
}
