'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const BELIEFS = [
  {
    index: '01',
    statement: ['I BUILD', 'SYSTEMS,', 'NOT', 'WEBSITES.'],
    accent: 2,
    body: 'Every interface is a business tool. Every API is infrastructure. The code that runs after launch matters more than the code that gets the demo approved. I engineer for the second year, not the second week.',
    stat: { value: '40%', label: 'Avg. query speed improvement across production modules' },
    align: 'left' as const,
  },
  {
    index: '02',
    statement: ['PERFORMANCE', 'IS THE', 'PRODUCT.'],
    accent: 0,
    body: 'A 3-second load time costs you users before they read a single word. I obsess over Core Web Vitals, database query plans, and edge caching — not as an afterthought, but as the first architecture decision.',
    stat: { value: '98', label: 'Lighthouse SEO score — Luna by Navneet' },
    align: 'right' as const,
  },
  {
    index: '03',
    statement: ['AI-AUGMENTED.', 'HUMAN-', 'CRAFTED.'],
    accent: 1,
    body: 'Cursor AI and Claude are on every project. Not as replacement for engineering judgment — as amplifiers of it. The output ships faster. The quality bar is higher. Your project benefits from both.',
    stat: { value: 'Daily', label: 'Cursor AI + Claude in every active project' },
    align: 'left' as const,
  },
];

function BeliefSection({ belief }: { belief: typeof BELIEFS[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll parallax for ambient glow
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  // Trigger animations as soon as ANY part of the section enters viewport
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <div
      ref={ref}
      className={`relative flex min-h-[60vh] w-full items-center overflow-hidden py-12 md:py-16 lg:py-20 ${
        belief.index !== '01' ? 'border-t border-white/[0.05]' : ''
      } ${belief.align === 'right' ? 'bg-surface-mid' : 'bg-studio'}`}
    >
      {/* Ambient glow */}
      <motion.div
        className={`pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[200px] ${
          belief.align === 'left' ? 'left-[5%]' : 'right-[5%]'
        } top-1/2 -translate-y-1/2`}
        style={{
          background: 'rgba(201,169,110,0.04)',
          y: imageParallax,
        }}
        aria-hidden="true"
      />

      {/* Ghost index — sized to fit inside the section */}
      <div
        className={`pointer-events-none absolute select-none bottom-4 ${
          belief.align === 'left' ? 'right-6' : 'left-6'
        }`}
        aria-hidden="true"
      >
        <p
          className="font-bebas leading-none tracking-[0.01em]"
          style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', color: 'rgba(239,239,239,0.05)' }}
        >
          {belief.index}
        </p>
      </div>

      <div
        className={`relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14 ${
          belief.align === 'right' ? 'lg:text-right' : ''
        }`}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* Statement — left column */}
          <div className={belief.align === 'right' ? 'lg:order-2' : ''}>
            <div>
              {belief.statement.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.p
                    className={`display-md ${
                      i === belief.accent ? 'text-gold' : 'text-canvas'
                    }`}
                    initial={{ y: '105%' }}
                    animate={isInView ? { y: 0 } : { y: '105%' }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.9,
                      ease: EASE_EXPO,
                    }}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          {/* Body + stat */}
          <motion.div
            className={`flex flex-col justify-center gap-8 ${belief.align === 'right' ? 'lg:order-1' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.3, duration: 0.9, ease: EASE_EXPO }}
          >
            <p className="max-w-md text-sm leading-[1.75] text-white/65 sm:text-base">
              {belief.body}
            </p>

            {/* Stat card */}
            <div className={`flex items-center gap-5 border-l-2 border-gold/30 pl-5 ${belief.align === 'right' ? 'lg:border-l-0 lg:border-r-2 lg:pr-5 lg:pl-0 lg:flex-row-reverse' : ''}`}>
              <div>
                <p className="font-bebas text-3xl text-gold sm:text-4xl">
                  {belief.stat.value}
                </p>
                <p className="mt-1 text-xs font-bold tracking-[0.18em] uppercase text-white/50">
                  {belief.stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Chapter5Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(sectionRef, { once: true, amount: 0 });

  return (
    <section
      id="chapter-5"
      className="relative w-full overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      {/* Ghost 05 — anchored to full section so it has vertical room */}
      <div className="pointer-events-none absolute right-8 top-8 z-10 select-none text-right" aria-hidden="true">
        <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Chapter</p>
        <p className="chapter-number-bg leading-none">05</p>
      </div>

      {/* Section header */}
      <div ref={sectionRef} className="relative bg-studio px-6 pb-8 pt-20 sm:px-10 lg:px-14">
        <motion.div
          className="chapter-label"
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Engineering Philosophy
        </motion.div>
        <h2 id="philosophy-heading" className="sr-only">Engineering Philosophy</h2>
      </div>

      {/* Belief sections */}
      {BELIEFS.map((belief) => (
        <BeliefSection key={belief.index} belief={belief} />
      ))}
    </section>
  );
}
