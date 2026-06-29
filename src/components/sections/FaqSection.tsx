'use client';

import { useState } from 'react';
import { FaqSectionData } from '@/types/sections';

interface FaqSectionProps {
  section: FaqSectionData;
}

export function FaqSection({ section }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="content-section relative overflow-hidden border-b border-white/[0.07] bg-surface-alt"
      aria-labelledby="faq-title"
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 font-bebas text-[20vw] font-normal leading-none text-white/[0.025] select-none"
      >
        07
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* ── Header ── */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="faq-title" className="mt-5 section-title text-white">
              {section.title}
            </h2>
          </div>
          <p className="max-w-md body-copy text-white/50">{section.description}</p>
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-2">
          {section.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                key={item.question}
                className={`interactive-card overflow-hidden rounded-xl border transition duration-300 ${
                  isOpen
                    ? 'border-accent/30 bg-accent/[0.03]'
                    : 'border-white/[0.07] bg-surface hover:border-white/[0.12]'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-start justify-between gap-5 px-6 py-5 text-left sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="flex items-start gap-4">
                      <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-black transition duration-300 ${isOpen ? 'border-accent/50 text-accent' : 'border-white/[0.1] text-white/30'}`}>
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className={`text-base font-bold leading-snug transition duration-300 ${isOpen ? 'text-white' : 'text-white/70'}`}>
                        {item.question}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 shrink-0 text-lg font-light transition-all duration-300 ${
                        isOpen ? 'rotate-45 text-accent' : 'text-white/25'
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/[0.06] px-6 pb-6 pt-4 text-sm leading-relaxed text-white/50 sm:pl-[4.5rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
