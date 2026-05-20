import type { Metadata } from 'next';
import './globals.css';

import {
  seo,
  personal,
  contact,
  services,
  techGroups,
} from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),

  title: {
    default: seo.title,
    template: `%s | ${personal.firstName} ${personal.lastName}`,
  },

  description: seo.description,

  keywords: seo.keywords,

  authors: [
    {
      name: `${personal.firstName} ${personal.lastName}`,
      url: seo.siteUrl,
    },
  ],

  creator: `${personal.firstName} ${personal.lastName}`,

  publisher: `${personal.firstName} ${personal.lastName}`,

  applicationName: `${personal.firstName} ${personal.lastName} Portfolio`,

  category: 'technology',

  referrer: 'origin-when-cross-origin',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: seo.siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

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

    creator: '@yourusername',

    images: [seo.ogImage],
  },

  other: {
    'theme-color': '#0b0d0e',
    'color-scheme': 'dark',
  },
};

// Advanced JSON-LD structured data
const jsonLd = [
  {
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

    sameAs: [contact.linkedin, contact.github],

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bathinda',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },

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
  },

  {
    '@context': 'https://schema.org',

    '@type': 'WebSite',

    name: `${personal.firstName} ${personal.lastName}`,

    url: seo.siteUrl,

    description: seo.description,

    publisher: {
      '@type': 'Person',
      name: `${personal.firstName} ${personal.lastName}`,
    },
  },

  {
    '@context': 'https://schema.org',

    '@type': 'ProfessionalService',

    name: `${personal.firstName} ${personal.lastName}`,

    url: seo.siteUrl,

    image: seo.ogImage,

    description: seo.description,

    areaServed: 'Worldwide',

    priceRange: '$$',

    serviceType: services.map((service) => service.label),
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Hero Image */}
        <link
          rel="preload"
          as="image"
          href="/jatindersandhu-1.webp"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}