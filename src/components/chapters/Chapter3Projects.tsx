'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '@/types/cv';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

function ProjectScene({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['2%', '-2%']);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="group relative w-full border-t border-white/[0.05] bg-studio py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient glow */}
      <div
        className={`pointer-events-none absolute top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[200px] ${
          isEven ? 'left-[5%]' : 'right-[5%]'
        }`}
        style={{ background: 'rgba(201,169,110,0.04)' }}
        aria-hidden="true"
      />

      {/* Ghost index */}
      <div
        className={`pointer-events-none absolute select-none ${
          isEven ? 'right-8 bottom-8' : 'left-8 bottom-8'
        }`}
        aria-hidden="true"
      >
        <p className="chapter-number-bg leading-none">
          {String(index + 1).padStart(2, '0')}
        </p>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center lg:gap-16">

          {/* ── TEXT CONTENT ── */}
          <motion.div
            style={{ y: contentY }}
            className={isEven ? '' : 'lg:order-2'}
          >
            {/* Index + Category + Year */}
            <motion.div
              className="mb-5 flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_EXPO }}
              viewport={{ once: true, amount: 0 }}
            >
              <span className="font-bebas text-xl text-gold/60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="h-px w-6 bg-gold/40" />
              <span className="text-xs font-bold tracking-[0.28em] uppercase text-white/55">
                {project.category}
              </span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-xs font-bold tracking-[0.2em] text-white/45">
                {project.year}
              </span>
            </motion.div>

            {/* Project name */}
            <div className="overflow-hidden">
              <motion.h2
                className="display-md text-canvas transition-colors duration-500 group-hover:text-white"
                initial={{ y: '105%' }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE_EXPO }}
                viewport={{ once: true, amount: 0 }}
              >
                {project.name.toUpperCase()}
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, amount: 0 }}
            >
              {project.tagline}
            </motion.p>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <motion.div
                className="mt-7 flex flex-wrap gap-8"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: EASE_EXPO }}
                viewport={{ once: true, amount: 0 }}
              >
                {project.metrics.slice(0, 3).map((m) => (
                  <div key={m.label}>
                    <p className="font-bebas text-2xl text-gold sm:text-3xl">{m.value}</p>
                    <p className="mt-0.5 text-xs font-bold tracking-[0.2em] uppercase text-white/50">
                      {m.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Bottom row: tech + CTA */}
            <motion.div
              className="mt-7 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true, amount: 0 }}
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/50">
                {project.tech}
              </p>
              <span className="h-px flex-1 bg-white/[0.06]" />
              <Link
                href={`/projects/${project.slug}`}
                className="group/link flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-gold transition-opacity hover:opacity-70"
              >
                View Project
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── IMAGE FRAME ── */}
          {project.coverImage && (
            <motion.div
              style={{ y: imageY }}
              className={isEven ? '' : 'lg:order-1'}
            >
              <motion.div
                className="relative overflow-hidden rounded-sm border border-white/[0.08] shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 1, ease: EASE_EXPO }}
                viewport={{ once: true, amount: 0 }}
              >
                {/* Browser chrome bar */}
                <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] bg-surface-dark px-3">
                  <span className="h-2 w-2 rounded-full bg-white/[0.15]" />
                  <span className="h-2 w-2 rounded-full bg-white/[0.10]" />
                  <span className="h-2 w-2 rounded-full bg-white/[0.07]" />
                  <span className="ml-3 flex-1 truncate rounded-sm bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/20">
                    {project.url || `jatinder.dev/projects/${project.slug}`}
                  </span>
                </div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={index < 2}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-studio/30 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

interface Chapter3ProjectsProps {
  projects: Project[];
}

export function Chapter3Projects({ projects }: Chapter3ProjectsProps) {
  return (
    <section
      id="chapter-3"
      className="relative w-full bg-studio"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div className="relative border-b border-white/[0.05] px-8 py-20 sm:px-12 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute right-8 top-6 select-none text-right" aria-hidden="true">
          <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Chapter</p>
          <p className="chapter-number-bg leading-none">03</p>
        </div>

        <motion.div
          className="chapter-label mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.div>

        <div className="max-w-4xl">
          <div className="overflow-hidden">
            <motion.h2
              id="projects-heading"
              className="display-lg text-canvas"
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: EASE_EXPO }}
              viewport={{ once: true }}
            >
              25+ PRODUCTS
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
              DELIVERED.
            </motion.span>
          </div>
          <motion.p
            className="mt-8 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE_EXPO }}
            viewport={{ once: true }}
          >
            Real businesses. Real URLs. Real results.
            Each project represents a complete engineering decision — from database schema to deployment pipeline.
          </motion.p>
        </div>
      </div>

      {/* Project scenes */}
      {projects.map((project, i) => (
        <ProjectScene key={project.slug} project={project} index={i} />
      ))}

      {/* All projects link */}
      <motion.div
        className="border-t border-white/[0.05] px-8 py-12 sm:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          href="/projects"
          className="chapter-label text-canvas/30 transition-colors hover:text-gold"
        >
          Browse All Projects →
        </Link>
      </motion.div>
    </section>
  );
}
