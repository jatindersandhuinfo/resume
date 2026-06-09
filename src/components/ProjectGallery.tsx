'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectGalleryProps {
  projectName: string;
  category: string;
  tech: string;
  result: string;
  coverImage: string;
  images: string[];
  memberName: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  index: number;
  projectSlug?: string;
  projectUrl?: string;
}

/** Returns true if the path is a PDF file */
function isPdf(src: string): boolean {
  return src.toLowerCase().endsWith('.pdf');
}

/** Thumbnail for card strip — image or PDF icon */
function StripThumb({ src, alt }: { src: string; alt: string }) {
  if (isPdf(src)) {
    return (
      <div className="relative shrink-0 h-12 w-16 overflow-hidden rounded-md border border-white/[0.08] bg-red-50 dark:bg-red-950/30 flex flex-col items-center justify-center gap-0.5">
        <PdfIcon size={18} />
        <span className="text-[9px] font-black text-red-500 uppercase tracking-wider">PDF</span>
      </div>
    );
  }
  return (
    <div className="relative shrink-0 h-12 w-16 overflow-hidden rounded-md border border-white/[0.08]">
      <Image src={src} alt={alt} fill sizes="64px" className="object-cover" />
    </div>
  );
}

/** Lightbox thumbnail — image or PDF icon */
function LightboxThumb({
  src,
  alt,
  active,
  onClick,
}: {
  src: string;
  alt: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative shrink-0 h-14 w-20 overflow-hidden rounded-lg transition-all duration-200 ${
        active
          ? 'ring-2 ring-[#f59e0b] ring-offset-2 ring-offset-black/90 opacity-100 scale-105'
          : 'opacity-50 hover:opacity-80 hover:scale-105'
      }`}
      aria-label={alt}
    >
      {isPdf(src) ? (
        <div className="h-full w-full bg-red-950/50 flex flex-col items-center justify-center gap-1">
          <PdfIcon size={22} />
          <span className="text-[9px] font-black text-red-400 uppercase tracking-wider">PDF</span>
        </div>
      ) : (
        <Image src={src} alt={alt} fill sizes="80px" className="object-cover" />
      )}
    </button>
  );
}

/** SVG PDF icon */
function PdfIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="#ef4444"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="14 2 14 8 20 8"
        stroke="#ef4444"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="6" y="18" fontSize="5.5" fontWeight="900" fill="#ef4444" fontFamily="Arial, sans-serif" letterSpacing="0.3">
        PDF
      </text>
    </svg>
  );
}

/** Main lightbox media — PDF embed or Image */
function LightboxMedia({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  if (isPdf(src)) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
        {/* Full-height PDF embed */}
        <embed
          src={src}
          type="application/pdf"
          className="w-full h-full rounded-lg"
          style={{ minHeight: '60vh' }}
          title={alt}
        />
        {/* Fallback open-in-tab link */}
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
    <div
      className="relative"
      style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}
    >
      <Image
        key={src}
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-contain"
        priority
      />
    </div>
  );
}

export function ProjectGallery({
  projectName,
  category,
  tech,
  result,
  coverImage,
  images,
  memberName,
  accentColor,
  accentBg,
  accentBorder,
  index,
  projectSlug,
  projectUrl,
}: ProjectGalleryProps) {
  const allMedia = [coverImage, ...images.filter((img) => img !== coverImage)];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (i: number) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + allMedia.length) % allMedia.length);
  }, [allMedia.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % allMedia.length);
  }, [allMedia.length]);

  // Keyboard navigation
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

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  // Count PDFs for badge label
  const pdfCount = allMedia.filter(isPdf).length;
  const imgCount = allMedia.filter((m) => !isPdf(m)).length;

  return (
    <>
      {/* ── Project Card ─────────────────────────────────────────────────── */}
      <div
        className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] transition duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 cursor-pointer"
        onClick={() => openLightbox(0)}
        role="button"
        tabIndex={0}
        aria-label={`View ${projectName} gallery`}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(0); }}
      >
        {/* Cover — always an image */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/[0.08]">
          {isPdf(coverImage) ? (
            <div className="h-full w-full bg-red-950/20 flex flex-col items-center justify-center gap-2">
              <PdfIcon size={40} />
              <span className="text-xs font-black text-red-500 uppercase tracking-wider">PDF Document</span>
            </div>
          ) : (
            <Image
              src={coverImage}
              alt={`${projectName} — ${category} design by ${memberName}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          )}

          {/* Badge: file counts */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1">
            {imgCount > 0 && (
              <>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2"/>
                  <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2"/>
                  <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2"/>
                  <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2"/>
                </svg>
                <span className="text-[10px] font-bold text-white">{imgCount} photo{imgCount !== 1 ? 's' : ''}</span>
              </>
            )}
            {pdfCount > 0 && (
              <>
                {imgCount > 0 && <span className="text-white/30 text-[10px]">·</span>}
                <PdfIcon size={11} />
                <span className="text-[10px] font-bold text-red-400">{pdfCount} PDF{pdfCount !== 1 ? 's' : ''}</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Top glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse 70% 40% at 50% 0%, ${accentColor}12, transparent)` }}
        />

        {/* Card body */}
        <div className="relative flex flex-col p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-black text-white/35">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              className="meta-label rounded-full border px-3 py-1"
              style={{ color: accentColor, background: accentBg, borderColor: accentBorder }}
            >
              {category}
            </span>
          </div>

          <h3
            className="subsection-title text-white transition-colors duration-200 group-hover:text-[#f59e0b]"
            style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)' }}
          >
            {projectName}
          </h3>

          <p className="mt-2 meta-label text-white/30">{tech}</p>
          <p className="mt-3 small-copy flex-1 text-white/55 line-clamp-3">{result}</p>

          {/* Thumbnail strip */}
          {allMedia.length > 1 && (
            <div className="mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {allMedia.slice(1, 6).map((src, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); openLightbox(i + 1); }}
                  className="relative shrink-0 focus:outline-none focus:ring-1 focus:ring-[#f59e0b] rounded-md"
                  aria-label={`View ${isPdf(src) ? 'PDF' : 'image'} ${i + 2} of ${projectName}`}
                >
                  <StripThumb src={src} alt={`${projectName} file ${i + 2}`} />
                </button>
              ))}
              {allMedia.length > 6 && (
                <div className="relative shrink-0 h-12 w-16 overflow-hidden rounded-md border border-white/[0.08] bg-white/[0.08] flex items-center justify-center">
                  <span className="text-[11px] font-black text-white/50">+{allMedia.length - 6}</span>
                </div>
              )}
            </div>
          )}

          {/* Project links */}
          {(projectSlug || projectUrl) && (
            <div className="mt-5 flex flex-wrap gap-2">
              {projectSlug && (
                <Link
                  href={`/projects/${projectSlug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white/60 transition hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
                >
                  View Case Study
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white/60 transition hover:border-[#10a37f]/40 hover:text-[#10a37f]"
                >
                  Live Site
                  <svg width="11" height="11" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-white/[0.05] pt-4">
            <span className="meta-label text-white/35">{projectSlug ? 'Case Study + Gallery' : 'Design Portfolio'}</span>
            <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.12em] text-white/35 transition-colors duration-200 group-hover:text-[#f59e0b]">
              View Gallery
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
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
                <p className="text-xs text-white/40 mt-0.5">{memberName} · {category}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-white/40">
                {activeIndex + 1} / {allMedia.length}
              </span>
              {/* Open current file in new tab */}
              <a
                href={allMedia[activeIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white focus:outline-none"
                aria-label="Open in new tab"
                title="Open in new tab"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <button
                onClick={closeLightbox}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#f59e0b]"
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
            {/* Prev */}
            {allMedia.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#f59e0b]"
                aria-label="Previous"
              >
                ‹
              </button>
            )}

            <LightboxMedia
              src={allMedia[activeIndex]}
              alt={`${projectName} — file ${activeIndex + 1}`}
            />

            {/* Next */}
            {allMedia.length > 1 && (
              <button
                onClick={next}
                className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#f59e0b]"
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
                <LightboxThumb
                  key={i}
                  src={src}
                  alt={`${projectName} file ${i + 1}`}
                  active={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
