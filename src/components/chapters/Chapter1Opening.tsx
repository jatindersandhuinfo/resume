'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: 'radial-gradient(rgba(239,239,239,0.8) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      {/* Ambient glow A */}
      <div
        className="blob-a absolute left-[15%] top-[20%] h-[480px] w-[480px] rounded-full blur-[180px]"
        style={{ background: 'rgba(201,169,110,0.07)' }}
      />
      {/* Ambient glow B */}
      <div
        className="blob-b absolute right-[20%] bottom-[20%] h-[360px] w-[360px] rounded-full blur-[150px]"
        style={{ background: 'rgba(201,169,110,0.04)' }}
      />
      {/* Hairline border bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}

export function Chapter1Opening() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* Mouse parallax */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    rawX.set((clientX / width - 0.5) * 18);
    rawY.set((clientY / height - 0.5) * 12);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      id="chapter-1"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-studio"
      aria-labelledby="opening-heading"
    >
      <AnimatedBackground />

      {/* Ghost chapter number */}
      <div className="pointer-events-none absolute left-8 top-20 select-none" aria-hidden="true">
        <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Chapter</p>
        <p className="chapter-number-bg leading-none">01</p>
      </div>

      {/* Scroll-linked + parallax name */}
      <motion.div
        style={{ y: nameY, opacity: sectionOpacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        {/* Role label */}
        <motion.div
          className="chapter-label mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9, ease: EASE_EXPO }}
        >
          Premium Product Engineer
        </motion.div>

        {/* JATINDER */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="overflow-hidden"
        >
          <motion.h1
            id="opening-heading"
            className="display-xl text-canvas"
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15, duration: 1.1, ease: EASE_EXPO }}
          >
            JATINDER
          </motion.h1>
        </motion.div>

        {/* SANDHU */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="overflow-hidden"
        >
          <motion.span
            className="display-xl text-gold"
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.30, duration: 1.1, ease: EASE_EXPO }}
          >
            SANDHU
          </motion.span>
        </motion.div>

        {/* Tech strip */}
        <motion.p
          className="mt-10 text-xs font-medium tracking-[0.24em] uppercase text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          React · Next.js · Node.js · PHP · AI Integration
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        aria-hidden="true"
      >
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-white/40">Scroll</span>
        <div className="h-12 w-px overflow-hidden">
          <div
            className="scroll-line h-full w-full bg-gradient-to-b from-gold/50 to-transparent"
          />
        </div>
      </motion.div>

      {/* Availability — bottom right */}
      <motion.div
        className="absolute bottom-10 right-8 hidden items-center gap-2 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/50">
          Available for Projects
        </span>
      </motion.div>
    </section>
  );
}
