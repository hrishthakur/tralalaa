import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/site';

/* ================= FONTS ================= */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

/* ================= METADATA ================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,

  keywords: [
    'work from hills',
    'remote work stays',
    'bungstays',
    'work from mountains',
    'digital nomad india',
    'remote work india',
    'work from nature',
    SITE_CONFIG.name.toLowerCase(),
  ],

  openGraph: {
    type: 'website',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/images/hero.png'],
  },
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
