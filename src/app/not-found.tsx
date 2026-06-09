import type { Metadata } from 'next';
import Link from 'next/link';
import { seo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-5 text-center text-white">
      <h1 className="hero-title">404 — Page Not Found</h1>
      <p className="mt-6 max-w-md body-copy text-white/60">
        This page does not exist. Return to the portfolio homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#f59e0b] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#0a0a0a] transition hover:bg-[#fbbf24]"
      >
        Back to Home
      </Link>
      <p className="sr-only">{seo.description}</p>
    </main>
  );
}
