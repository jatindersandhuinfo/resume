import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import { seo, personal, contact } from '@/lib/data';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${personal.firstName} ${personal.lastName}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: `${personal.firstName} ${personal.lastName}`, url: seo.siteUrl }],
  creator: `${personal.firstName} ${personal.lastName}`,
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: seo.siteUrl,
    siteName: `${personal.firstName} ${personal.lastName} — Portfolio`,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${personal.firstName} ${personal.lastName} — ${personal.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: seo.siteUrl,
  },
};

// JSON-LD structured data for rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: `${personal.firstName} ${personal.lastName}`,
  url: seo.siteUrl,
  image: seo.ogImage,
  jobTitle: personal.role,
  description: seo.description,
  email: contact.email,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bathinda',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  sameAs: [contact.linkedin, contact.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
