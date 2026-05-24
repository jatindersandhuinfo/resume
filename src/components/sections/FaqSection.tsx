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
      className="content-section border-y border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0f1214]"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="faq-title" className="mt-5 section-title text-[#0b0d0e] dark:text-white">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl body-copy text-black/62 dark:text-white/62 lg:pt-10">{section.description}</p>
        </div>

        <div className="space-y-3">
          {section.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                key={item.question}
                className={`interactive-card overflow-hidden rounded-lg border bg-white dark:bg-[#0b0d0e] transition duration-300 ${
                  isOpen ? 'border-[#d6ad63]/55' : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 dark:border-white/10 text-sm font-black text-[#d6ad63]">
                        0{index + 1}
                      </span>
                      <span className="card-title text-[#0b0d0e] dark:text-white transition group-hover:text-[#d6ad63]">
                        {item.question}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-xl font-light text-[#d6ad63] transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
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
                    <p className="border-t border-black/10 dark:border-white/10 px-5 pb-5 pt-4 small-copy leading-relaxed text-black/62 dark:text-white/62 sm:px-6 sm:pb-6 sm:pl-[4.75rem]">
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
