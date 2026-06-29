'use client';

import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const PHASES = [
  {
    index: '01',
    name: 'DISCOVER',
    color: '#C9A96E',
    description: 'Requirements mapping, constraint analysis, and architecture decision records. No estimates before I understand your business logic.',
    tools: ['Scope Doc', 'ERD Draft', 'API Blueprint'],
  },
  {
    index: '02',
    name: 'ARCHITECT',
    color: '#efefef',
    description: 'Database schema design, API contract definition, component hierarchy, and technology selection. The work that prevents rewriting later.',
    tools: ['DB Schema', 'REST Contract', 'Tech Stack'],
  },
  {
    index: '03',
    name: 'BUILD',
    color: '#C9A96E',
    description: 'Full-stack implementation in focused sprints. Staging environment updated daily. Clean commits, clear milestones, no surprises.',
    tools: ['GitHub', 'Staging Link', 'Daily Update'],
  },
  {
    index: '04',
    name: 'SHIP',
    color: '#efefef',
    description: 'Production deployment, performance audit against Core Web Vitals, Google Search Console setup, and post-launch monitoring.',
    tools: ['Vercel / VPS', 'Lighthouse', 'GSC Setup'],
  },
  {
    index: '05',
    name: 'SCALE',
    color: '#C9A96E',
    description: 'Technical documentation handoff, maintenance retainer, and iterative improvements. I stay on projects — I don\'t disappear at launch.',
    tools: ['Docs', 'Retainer', 'Roadmap'],
  },
];

function PhaseCard({ phase, index }: { phase: typeof PHASES[0]; index: number }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.9, ease: EASE_EXPO }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Desktop connector line between cards */}
      {index < PHASES.length - 1 && (
        <div className="absolute top-7 left-[2.85rem] hidden h-px bg-gradient-to-r from-gold/20 to-transparent lg:block" style={{ width: '100%', zIndex: 0 }} />
      )}

      {/* Mobile/tablet: horizontal (number left, content right) */}
      <div className="relative z-10 flex gap-5 lg:hidden">
        <div className="flex shrink-0 flex-col items-center">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 group-hover:border-gold/40"
            style={{ borderColor: 'rgba(239,239,239,0.08)', background: '#0e0e0e' }}
          >
            <span className="font-bebas text-base" style={{ color: phase.color }}>{phase.index}</span>
          </div>
          {index < PHASES.length - 1 && (
            <div className="mt-2 h-full w-px bg-gradient-to-b from-white/[0.06] to-transparent" />
          )}
        </div>
        <div className="pb-10">
          <h3 className="font-bebas text-3xl tracking-wide text-canvas transition-colors duration-300 group-hover:text-gold">
            {phase.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">{phase.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {phase.tools.map((tool) => (
              <span key={tool} className="border px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/45" style={{ borderColor: 'rgba(239,239,239,0.07)' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: vertical card (number top, content below) */}
      <div className="relative z-10 hidden flex-col lg:flex">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-300 group-hover:border-gold/40"
          style={{ borderColor: 'rgba(239,239,239,0.08)', background: '#0e0e0e' }}
        >
          <span className="font-bebas text-lg" style={{ color: phase.color }}>{phase.index}</span>
        </div>
        <div className="mt-6 pr-4">
          <h3 className="font-bebas text-3xl tracking-wide text-canvas transition-colors duration-300 group-hover:text-gold">
            {phase.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/55">{phase.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {phase.tools.map((tool) => (
              <span key={tool} className="border px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/45" style={{ borderColor: 'rgba(239,239,239,0.07)' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Chapter4Process() {
  return (
    <section
      id="chapter-4"
      className="relative w-full overflow-hidden bg-surface-mid py-14 md:py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      {/* Ghost chapter number */}
      <div className="pointer-events-none absolute right-8 top-8 select-none text-right" aria-hidden="true">
        <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Chapter</p>
        <p className="chapter-number-bg leading-none">04</p>
      </div>

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(239,239,239,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(239,239,239,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end md:mb-14 lg:mb-20">
          <div>
            <motion.div
              className="chapter-label mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Inside the Build
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                id="process-heading"
                className="display-lg text-canvas"
                initial={{ y: '105%' }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: EASE_EXPO }}
                viewport={{ once: true }}
              >
                HOW EVERY
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="display-lg text-gold"
                initial={{ y: '105%' }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.12, duration: 1, ease: EASE_EXPO }}
                viewport={{ once: true }}
              >
                PROJECT
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="display-lg text-canvas"
                initial={{ y: '105%' }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.24, duration: 1, ease: EASE_EXPO }}
                viewport={{ once: true }}
              >
                RUNS.
              </motion.span>
            </div>
          </div>

          <motion.p
            className="max-w-md text-sm leading-relaxed text-white/58 sm:text-base lg:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE_EXPO }}
            viewport={{ once: true }}
          >
            Every project follows the same five phases — not because it&apos;s a template, but because
            skipping any one of them is where projects go wrong. This is the framework that keeps
            6 years of delivery on schedule.
          </motion.p>
        </div>

        {/* Phase cards */}
        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-5 lg:gap-0">
          {/* Horizontal connector — desktop only */}
          <div className="pointer-events-none absolute top-7 left-[2.5rem] right-0 hidden h-px bg-gradient-to-r from-gold/15 via-white/[0.05] to-transparent lg:block" aria-hidden="true" />

          {PHASES.map((phase, i) => (
            <PhaseCard key={phase.index} phase={phase} index={i} />
          ))}
        </div>

        {/* Engineering note */}
        <motion.div
          className="mt-20 border-t border-white/[0.05] pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="max-w-3xl text-xs leading-relaxed text-white/45 sm:text-sm">
            Stack: React · Next.js · Node.js · PHP · Laravel · WordPress · MySQL · MongoDB · PostgreSQL · REST APIs · JWT Auth · OpenAI API · Claude API · Cursor AI · Vercel · AWS · DigitalOcean
          </p>
        </motion.div>
      </div>
    </section>
  );
}
