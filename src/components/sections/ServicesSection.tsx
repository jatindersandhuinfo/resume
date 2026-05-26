import { ServicesSectionData } from '@/types/sections';

interface ServicesSectionProps {
  section: ServicesSectionData;
}

export function ServicesSection({ section }: ServicesSectionProps) {
  return (
    <section id="services" className="content-section border-y border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111416]" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="services-title" className="mt-5 section-title text-[#0b0d0e] dark:text-white">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl body-copy text-black/60 dark:text-white/60 lg:pt-10">
            {section.description}
          </p>
        </div>

        <div className="mb-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="interactive-card rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0d0e] p-7">
            <p className="section-kicker">Core Offer</p>
            <h3 className="mt-5 subsection-title text-[#0b0d0e] dark:text-white">
              Complete product delivery from idea to launch.
            </h3>
            <p className="mt-5 max-w-2xl body-copy text-black/60 dark:text-white/60">
              {section.coreOfferDescription}
            </p>
          </article>
          <div className="grid gap-px overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
            {section.specialistStack.map((item) => (
              <div key={item} className="bg-white dark:bg-[#15191b] p-5">
                <p className="meta-label text-black/40 dark:text-white/40">Specialist Stack</p>
                <p className="mt-2 text-base font-black text-[#0b0d0e] dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {section.services.map((service, index) => (
            <article
              key={service.label}
              className="interactive-card group relative min-h-[280px] overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1214] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6ad63]/50 hover:bg-black/[0.03] dark:hover:bg-[#15191b]"
            >
              <p className="absolute -right-2 -top-3 text-[5.75rem] font-black leading-none text-black/[0.08] dark:text-white/[0.08] transition group-hover:text-[#d6ad63]/15">
                0{index + 1}
              </p>

              <div className="relative flex items-start justify-between gap-5">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-black/10 dark:border-white/10 text-sm font-black text-[#d6ad63]">
                  0{index + 1}
                </span>
                <span className="rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-3 py-1 meta-label text-black/40 dark:text-white/40 transition group-hover:border-[#d6ad63]/50 group-hover:text-[#d6ad63]">
                  {section.serviceTags[service.label] ?? 'Web'}
                </span>
              </div>

              <h3 className="relative mt-9 card-title text-[#0b0d0e] dark:text-white transition group-hover:text-[#d6ad63]">
                {service.label}
              </h3>
              <p className="relative mt-4 small-copy text-black/58 dark:text-white/58">
                {section.serviceCopy[service.label] ?? 'Clean, dependable web development support for your product.'}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {(section.serviceStacks[service.label] ?? ['Web', 'Build', 'Support']).map((item) => (
                  <span key={item} className="rounded-full bg-black/[0.05] dark:bg-white/[0.05] px-3 py-1 text-xs font-bold text-black/40 dark:text-white/40">
                    {item}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-6 bottom-0 h-px bg-black/10 dark:bg-white/10 transition group-hover:bg-[#d6ad63]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
