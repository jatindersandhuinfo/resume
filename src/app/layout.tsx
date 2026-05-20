import type { Metadata } from 'next';
import './globals.css';

import { seo, personal, contact } from '@/lib/data';
import { getStructuredData, seoKeywords } from '@/lib/structured-data';

const fullName = `${personal.firstName} ${personal.lastName}`;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),

  title: {
    default: seo.title,
    template: `%s | ${fullName}`,
  },

  description: seo.description,

  keywords: seoKeywords,

  authors: [{ name: fullName, url: seo.siteUrl }],

  creator: fullName,

  publisher: fullName,

  applicationName: `${fullName} Portfolio`,

  category: 'technology',

  referrer: 'origin-when-cross-origin',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: seo.siteUrl,
    languages: {
      'en-IN': seo.siteUrl,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: seo.siteUrl,
    siteName: `${fullName} — Portfolio`,
    title: seo.title,
    description: seo.description,
    firstName: personal.firstName,
    lastName: personal.lastName,
    username: seo.twitterHandle.replace('@', ''),
    countryName: 'India',
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${fullName} — ${personal.role}`,
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    site: seo.twitterHandle,
    creator: seo.twitterHandle,
    images: {
      url: seo.ogImage,
      alt: `${fullName} — Full Stack Developer Portfolio`,
    },
  },

  other: {
    'theme-color': '#0b0d0e',
    'color-scheme': 'dark',
    'geo.region': 'IN-PB',
    'geo.placename': 'Bathinda, Punjab, India',
    'content-language': 'en-IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = getStructuredData();

  return (
    <html lang="en-IN">
      <head>
        <link rel="preload" as="image" href="/jatinderpng.webp" type="image/webp" />
        <link rel="me" href={contact.linkedin} />
        <link rel="me" href={contact.github} />
        <link rel="me" href={contact.upwork} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
