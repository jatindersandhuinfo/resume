import type { Metadata } from 'next';
import { DM_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css';

import { seo, personal, contact } from '@/lib/data';
import { getStructuredData, seoKeywords } from '@/lib/structured-data';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
});

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
        width: 960,
        height: 1200,
        alt: `${fullName} — ${personal.role}`,
        type: 'image/webp',
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
      type: 'image/webp',
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
    <html lang="en-IN" className={`${dmSans.variable} ${bebasNeue.variable}`}>
      <head>
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
