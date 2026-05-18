import type { Metadata } from 'next';
import './globals.css';
import { seo, personal, contact, services, techGroups } from '@/lib/data';

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
  category: 'technology',
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
  knowsAbout: techGroups.flatMap((group) => group.items),
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.label,
      areaServed: ['India', 'Punjab', 'Bathinda'],
      provider: {
        '@type': 'Person',
        name: `${personal.firstName} ${personal.lastName}`,
      },
    },
  })),
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
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/jatindersandhu-1.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
