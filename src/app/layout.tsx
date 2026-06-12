import type { Metadata } from 'next';
import { DM_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css';

import { seo, personal, contact } from '@/lib/data';
import { getStructuredData, seoKeywords } from '@/lib/structured-data';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

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
// Dark-only site — runs before paint to prevent FOUC. ThemeToggle.tsx exists but is not rendered.
const themeInitScript = `(() => { document.documentElement.classList.add('dark'); })();`;
// Hash-scroll is now handled in SmoothScrollProvider using lenis.scrollTo() to avoid
// conflicts between window.scrollTo() and Lenis, and to remove fragile pushState patching.`;

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
      type: 'image/png',
    },
  },

  other: {
    'theme-color': '#0a0a0a',
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
    <html lang="en-IN" className={`dark ${dmSans.variable} ${bebasNeue.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="me" href={contact.linkedin} />
        <link rel="me" href={contact.github} />
        <link rel="me" href={contact.upwork} />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>
        <a href="#page-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <div id="page-content">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
