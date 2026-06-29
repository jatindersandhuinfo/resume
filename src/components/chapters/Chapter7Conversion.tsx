'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { contact, personal } from '@/lib/data';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const AVAILABILITY_ITEMS = [
  { label: 'Status', value: 'Available for new projects' },
  { label: 'Response', value: 'Within 24 hours' },
  { label: 'Start', value: 'Immediate availability' },
  { label: 'Timezone', value: 'IST (UTC +5:30) — async worldwide' },
];

const SOCIAL_LINKS = [
  { label: 'Email', href: `mailto:${contact.email}`, value: contact.email },
  { label: 'LinkedIn', href: contact.linkedin, value: 'jatindersandhuinfo' },
  { label: 'Upwork', href: contact.upwork, value: 'Hire on Upwork →' },
  { label: 'WhatsApp', href: contact.whatsapp, value: '+91 9888360667' },
];

export function Chapter7Conversion() {
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger as soon as section enters viewport (even 1px)
  const isInView = useInView(sectionRef, { once: true, amount: 0 });

  /* Mouse parallax on closing headline */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 40, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 40, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    rawX.set((clientX / width - 0.5) * 14);
    rawY.set((clientY / height - 0.5) * 8);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-studio py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(rgba(239,239,239,0.8) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        {/* Centre glow */}
        <div
          className="blob-a absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[220px]"
          style={{ background: 'rgba(201,169,110,0.06)' }}
        />
        {/* Top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Ghost chapter number */}
      <div className="pointer-events-none absolute right-8 top-8 select-none text-right" aria-hidden="true">
        <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Chapter</p>
        <p className="chapter-number-bg leading-none">07</p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">

        <motion.div
          className="chapter-label mb-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Start a Project
        </motion.div>

        {/* Closing headline with parallax */}
        <div>
          <motion.div style={{ x: springX, y: springY }}>
            {["LET'S BUILD", 'SOMETHING', 'EXTRAORDINARY.'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h2
                  id={i === 0 ? 'cta-heading' : undefined}
                  className={`display-xl leading-[0.9] ${
                    i === 1 ? 'text-gold' : 'text-canvas'
                  }`}
                  initial={{ y: '108%' }}
                  animate={isInView ? { y: 0 } : { y: '108%' }}
                  transition={{ delay: i * 0.1, duration: 1, ease: EASE_EXPO }}
                >
                  {line}
                </motion.h2>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom grid: availability + links */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-12 border-t border-white/[0.06] pt-12 md:grid-cols-2 md:gap-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.5, duration: 0.9, ease: EASE_EXPO }}
        >
          {/* Left: Availability */}
          <div>
            <p className="mb-6 text-xs font-bold tracking-[0.3em] uppercase text-white/45">
              Availability
            </p>
            <div className="space-y-4">
              {AVAILABILITY_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-white/[0.04] pb-4">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-white/50">
                    {item.label}
                  </span>
                  <span className="text-sm text-white/60">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.a
              href={`mailto:${contact.email}`}
              className="group mt-8 flex w-fit items-center gap-3 rounded-none bg-gold px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase text-studio transition-all duration-300 hover:bg-gold-light"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-studio opacity-40" />
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-studio" />
              </span>
              Start the Conversation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </div>

          {/* Right: Links */}
          <div>
            <p className="mb-6 text-xs font-bold tracking-[0.3em] uppercase text-white/45">
              Contact
            </p>
            <div className="space-y-0">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') || link.href.startsWith('https://wa') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/[0.04] py-4 transition-colors hover:border-gold/20"
                >
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-white/50 transition-colors group-hover:text-gold/80">
                    {link.label}
                  </span>
                  <span className="text-sm text-white/50 transition-colors group-hover:text-white">
                    {link.value}
                    <span className="ml-2 opacity-0 transition-opacity group-hover:opacity-40">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer line */}
        <motion.div
          className="mt-16 border-t border-white/[0.06] pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/30">
              © {new Date().getFullYear()} {personal.firstName} {personal.lastName} · Bathinda, Punjab, India
            </p>

            {/* Page links — more visible, properly spaced */}
            <div className="flex items-center gap-1">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Services', href: '/services' },
                { label: 'Projects', href: '/projects' },
              ].map((link, i, arr) => (
                <span key={link.href} className="flex items-center">
                  <a
                    href={link.href}
                    className="px-3 py-1 text-[0.7rem] font-bold tracking-[0.22em] uppercase text-white/55 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="text-white/15 text-xs">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
