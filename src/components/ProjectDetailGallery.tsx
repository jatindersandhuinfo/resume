'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ProjectDetailGalleryProps {
  projectName: string;
  coverImage?: string;
  images: string[];
  accentColor: string;
}

function isPdf(src: string): boolean {
  return src.toLowerCase().endsWith('.pdf');
}

function PdfIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="14 2 14 8 20 8"
        stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
      <text x="6" y="18" fontSize="5.5" fontWeight="900" fill="#ef4444" fontFamily="Arial, sans-serif" letterSpacing="0.3">
        PDF
      </text>
    </svg>
  );
}

function LightboxMedia({ src, alt }: { src: string; alt: string }) {
  if (isPdf(src)) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
        <embed
          src={src}
          type="application/pdf"
          className="w-full h-full rounded-lg"
          style={{ minHeight: '60vh' }}
          title={alt}
        />
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white shadow-lg transition hover:bg-red-500"
        >
          <PdfIcon size={14} />
          Open PDF
        </a>
      </div>
    );
  }
  return (
    <div className="relative" style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}>
      <Image key={src} src={src} alt={alt} fill sizes="100vw" className="object-contain" priority />
    </div>
  );
}

export function ProjectDetailGallery({
  projectName,
  coverImage,
  images,
  accentColor,
}: ProjectDetailGalleryProps) {
  const allMedia = coverImage
    ? [coverImage, ...images.filter((img) => img !== coverImage)]
    : images;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (i: number) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + allMedia.length) % allMedia.length), [allMedia.length]);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % allMedia.length), [allMedia.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, closeLightbox, prev, next]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  const pdfCount = allMedia.filter(isPdf).length;
  const imgCount = allMedia.filter((m) => !isPdf(m)).length;

  return (
    <>
      {/* Gallery section */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-8 rounded"
            style={{ background: accentColor }}
          />
          <p className="section-kicker" style={{ color: accentColor }}>Project Screenshots</p>
          <div className="ml-auto flex items-center gap-2">
            {imgCount > 0 && (
              <span className="text-[11px] font-bold text-black/35 dark:text-white/35">
                {imgCount} photo{imgCount !== 1 ? 's' : ''}
              </span>
            )}
            {pdfCount > 0 && (
              <>
                {imgCount > 0 && <span className="text-black/20 dark:text-white/20 text-[11px]">·</span>}
                <span className="text-[11px] font-bold text-red-400">
                  {pdfCount} PDF{pdfCount !== 1 ? 's' : ''}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {allMedia.map((src, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group/thumb relative aspect-video overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] transition hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-[#d6ad63]"
              aria-label={`View ${isPdf(src) ? 'PDF document' : 'screenshot'} ${i + 1} of ${projectName}`}
            >
              {isPdf(src) ? (
                <div className="h-full w-full flex flex-col items-center justify-center gap-1.5 bg-red-50 dark:bg-red-950/20">
                  <PdfIcon size={28} />
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-wider">PDF Design</span>
                </div>
              ) : (
                <>
                  <Image
                    src={src}
                    alt={`${projectName} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover/thumb:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover/thumb:bg-black/10" />
                </>
              )}
              {/* Zoom icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover/thumb:opacity-100">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-black/60 backdrop-blur-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
                    <path d="M21 21L16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M11 8V14M8 11H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              {isPdf(allMedia[activeIndex]) && (
                <span className="flex items-center gap-1.5 rounded-full bg-red-600/20 border border-red-500/30 px-2.5 py-1">
                  <PdfIcon size={12} />
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-wider">PDF</span>
                </span>
              )}
              <div>
                <h2 className="text-sm font-black text-white">{projectName}</h2>
                <p className="text-xs text-white/40 mt-0.5">Project Screenshots</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-white/40">
                {activeIndex + 1} / {allMedia.length}
              </span>
              <a
                href={allMedia[activeIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
                aria-label="Open in new tab"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <button
                onClick={closeLightbox}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
                aria-label="Close gallery"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Media */}
          <div
            className="relative flex-1 flex items-center justify-center px-4 py-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {allMedia.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
                aria-label="Previous"
              >
                ‹
              </button>
            )}

            <LightboxMedia
              src={allMedia[activeIndex]}
              alt={`${projectName} — file ${activeIndex + 1}`}
            />

            {allMedia.length > 1 && (
              <button
                onClick={next}
                className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
                aria-label="Next"
              >
                ›
              </button>
            )}
          </div>

          {/* Thumbnail strip */}
          {allMedia.length > 1 && (
            <div
              className="flex items-center justify-center gap-2.5 px-5 py-4 border-t border-white/10 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {allMedia.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative shrink-0 h-14 w-20 overflow-hidden rounded-lg transition-all duration-200 ${
                    i === activeIndex
                      ? 'ring-2 ring-[#d6ad63] ring-offset-2 ring-offset-black/90 opacity-100 scale-105'
                      : 'opacity-50 hover:opacity-80 hover:scale-105'
                  }`}
                  aria-label={`View file ${i + 1}`}
                >
                  {isPdf(src) ? (
                    <div className="h-full w-full bg-red-950/50 flex flex-col items-center justify-center gap-1">
                      <PdfIcon size={22} />
                      <span className="text-[9px] font-black text-red-400 uppercase tracking-wider">PDF</span>
                    </div>
                  ) : (
                    <Image src={src} alt={`${projectName} file ${i + 1}`} fill sizes="80px" className="object-cover" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
