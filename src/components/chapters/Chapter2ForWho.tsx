'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const MARQUEE_ITEMS = [
  'E-Commerce Brands',
  'SaaS Startups',
  'Logistics Companies',
  'Digital Agencies',
  'Energy Platforms',
  'Booking Portals',
  'Admin Dashboards',
  'Enterprise Tools',
  'Boutique Businesses',
  'MVP Launches',
];

const MARQUEE_DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const CLIENT_TYPES = [
  {
    index: '01',
    type: 'Product Companies',
    desc: 'SaaS platforms, MVPs, and multi-role enterprise tools built to handle real users, real data, and real operational complexity.',
    markets: 'US · Canada · UK · Australia',
  },
  {
    index: '02',
    type: 'E-Commerce Brands',
    desc: 'Shopify storefronts, WooCommerce builds, and headless Next.js shops engineered for conversion, speed, and SEO.',
    markets: 'Canada · India · NRI Markets',
  },
  {
    index: '03',
    type: 'Business Operations',
    desc: 'Internal dashboards, RBAC admin panels, booking systems, and CRM tools that replace spreadsheets with structured workflows.',
    markets: 'India · Netherlands · Worldwide',
  },
  {
    index: '04',
    type: 'Agency & Creative',
    desc: 'Custom WordPress sites, Elementor builds, and branded digital properties for agencies serving their own clients.',
    markets: 'UK · Australia · Global',
  },
];

function ClientTypeCard({ item, index }: { item: typeof CLIENT_TYPES[0]; index: number }) {
  return (
    <motion.div
      className="group relative border-t border-white/[0.06] py-8 transition-colors hover:border-gold/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: EASE_EXPO }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[60px_1fr_auto]">
        <span className="font-bebas text-2xl text-gold/40 transition-colors group-hover:text-gold/70">
          {item.index}
        </span>
        <div>
          <h3 className="text-sm font-bold tracking-[0.12em] uppercase text-canvas/80 transition-colors group-hover:text-canvas">
            {item.type}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
        </div>
        <span className="self-start text-xs font-bold tracking-[0.2em] uppercase text-gold/70 md:text-right">
          {item.markets}
        </span>
      </div>
    </motion.div>
  );
}

export function Chapter2ForWho() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const statementY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section
      id="chapter-2"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-studio py-28 lg:py-40"
      aria-labelledby="for-who-heading"
    >
      {/* Ghost chapter number */}
      <div className="pointer-events-none absolute right-8 top-8 select-none text-right" aria-hidden="true">
        <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Chapter</p>
        <p className="chapter-number-bg leading-none">02</p>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

        {/* Chapter label */}
        <motion.div
          className="chapter-label mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Who I Build For
        </motion.div>

        {/* Main statement */}
        <motion.div style={{ y: statementY }}>
          <div className="overflow-hidden">
            <motion.h2
              id="for-who-heading"
              className="display-lg text-canvas"
              initial={{ y: '102%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: EASE_EXPO }}
              viewport={{ once: true, amount: 0.5 }}
            >
              I BUILD FOR
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="display-lg text-gold"
              initial={{ y: '102%' }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.12, duration: 1, ease: EASE_EXPO }}
              viewport={{ once: true, amount: 0.5 }}
            >
              BUSINESSES
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="display-lg text-canvas"
              initial={{ y: '102%' }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.24, duration: 1, ease: EASE_EXPO }}
              viewport={{ once: true, amount: 0.5 }}
            >
              THAT SHIP.
            </motion.span>
          </div>
        </motion.div>

        {/* Sub-copy — right aligned */}
        <motion.div
          className="ml-auto mt-10 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: EASE_EXPO }}
          viewport={{ once: true }}
        >
          <p className="text-sm leading-relaxed text-white/60 sm:text-base">
            From GTA limousine companies to Dutch energy platforms, Indian boutique e-commerce to Canadian SaaS —
            I build the backend, the frontend, and everything connecting them.
            One developer, full ownership, zero handoff risk.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-16 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: EASE_EXPO }}
          viewport={{ once: true }}
        />

        {/* Client type list */}
        <div>
          {CLIENT_TYPES.map((item, i) => (
            <ClientTypeCard key={item.index} item={item} index={i} />
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 border-y border-white/[0.05] py-4">
        <div className="marquee-outer">
          <div className="marquee-track-slow" aria-hidden="true">
            {MARQUEE_DOUBLED.map((item, i) => (
              <span key={i} className="flex items-center gap-6 px-6 text-xs font-bold tracking-[0.28em] uppercase text-white/40">
                {item}
                <span className="h-1 w-1 rounded-full bg-gold/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
