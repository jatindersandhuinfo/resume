'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import type { Project } from '@/types/cv';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const BIG_STATS = [
  { value: 25, suffix: '+', label: 'Products Delivered', detail: 'Across CMS, SaaS, e-commerce, and enterprise tools' },
  { value: 6,  suffix: '+', label: 'Years in Production', detail: 'React · PHP · Node.js · WordPress · AI' },
  { value: 20, suffix: '+', label: 'Global Clients',     detail: 'US · UK · Canada · Australia · Netherlands · India' },
  { value: 15, suffix: '+', label: 'Technologies',       detail: 'Full stack — frontend through deployment' },
];

const EXPERIENCE_TIMELINE = [
  {
    role: 'Full Stack Developer',
    company: 'SuperVisionIT Solutions',
    period: 'Aug 2020 — Present',
    highlights: [
      'React + Redux dashboards for high-traffic production systems',
      'Node.js REST APIs with JWT auth achieving 40% faster query response',
      'MongoDB schema optimisation at scale',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'Envy Us Media Pvt Ltd',
    period: '2019 — 2020',
    highlights: [
      'Custom PHP + MySQL CMS platforms',
      'RESTful web services for third-party integrations',
      'Unit testing and systematic debugging',
    ],
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-bebas">
      {count}{suffix}
    </span>
  );
}

interface Chapter6ProofProps {
  projects: Project[];
}

export function Chapter6Proof({ projects }: Chapter6ProofProps) {
  const galleryProjects = projects
    .filter((p): p is typeof p & { coverImage: string } => Boolean(p.coverImage))
    .slice(0, 6);

  return (
    <section
      id="chapter-6"
      className="relative w-full overflow-hidden bg-surface-mid py-14 md:py-20 lg:py-28"
      aria-labelledby="proof-heading"
    >
      {/* Ghost chapter number */}
      <div className="pointer-events-none absolute left-8 top-8 select-none" aria-hidden="true">
        <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Chapter</p>
        <p className="chapter-number-bg leading-none">06</p>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <motion.div
          className="chapter-label mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Proof of Execution
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            id="proof-heading"
            className="display-lg text-canvas"
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: EASE_EXPO }}
            viewport={{ once: true }}
          >
            NUMBERS
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
            DON&apos;T LIE.
          </motion.span>
        </div>

        {/* Big stats grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 gap-0 border border-white/[0.05] md:grid-cols-4 [&>*]:flex [&>*]:flex-col">
          {BIG_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="border-r border-white/[0.05] p-5 sm:p-8 last:border-r-0 even:border-r-0 lg:even:border-r lg:last:border-r-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: EASE_EXPO }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-4xl text-gold sm:text-5xl lg:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold tracking-[0.14em] uppercase text-white/50">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 md:my-16 lg:my-20 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* Experience timeline */}
        <motion.div
          className="chapter-label mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Work History
        </motion.div>

        <div className="grid gap-0">
          {EXPERIENCE_TIMELINE.map((job, i) => (
            <motion.div
              key={job.company}
              className="group border-t border-white/[0.05] py-8 transition-colors last:border-b last:border-white/[0.05]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: EASE_EXPO }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-canvas">
                      {job.role}
                    </h3>
                    <span className="text-white/20">·</span>
                    <span className="text-[0.75rem] font-semibold text-gold">{job.company}</span>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/40" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/45">
                    {job.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 md:my-16 lg:my-20 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* Project thumbnail gallery */}
        <motion.div
          className="chapter-label mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Shipped Work
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {galleryProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              className="group relative overflow-hidden"
              style={{ aspectRatio: '16/10' }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: EASE_EXPO }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={project.coverImage}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-top opacity-70 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-mid/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-white/50">
                  {project.name}
                </p>
                <p className="text-xs tracking-wide text-white/50">{project.category}</p>
              </div>
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label={`View ${project.name}`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
