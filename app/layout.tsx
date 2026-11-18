import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { MetaPixelPageView } from '@/components/MetaPixelPageView';
import { AttributionCapture } from '@/components/AttributionCapture';
import './globals.css';
import { FAQS } from '@/data/faq';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meubles-et-moi.fr'),
  title: {
    default: 'Meubles&Moi | Aménagement clé en main et mobilier écoresponsable',
    template: '%s | Meubles&Moi',
  },
  description:
    'Aménagement intérieur clé en main & mobilier de seconde main reconditionné. Livraison et montage soignés inclus pour particuliers et professionnels.',
  keywords: [
    'Meubles&Moi',
    'mobilier reconditionné',
    'aménagement intérieur clé en main',
    'mobilier seconde main',
    'livraison et montage inclus',
    'ameublement écoresponsable',
    'économie circulaire ameublement',
    'meubles seconde main lyon',
    'aménagement locatif lmnp',
    'agencement clé en main',
    'décoration circulaire',
  ],
  authors: [{ name: 'Meubles&Moi', url: 'https://www.meubles-et-moi.fr' }],
  creator: 'Meubles&Moi',
  publisher: 'Meubles&Moi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Meubles&Moi | Aménagement clé en main et mobilier écoresponsable',
    description:
      'Aménagement intérieur clé en main & mobilier de seconde main reconditionné. Livraison et montage soignés inclus pour particuliers et professionnels.',
    url: 'https://www.meubles-et-moi.fr',
    siteName: 'Meubles&Moi',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/hero-appartement.jpg',
        width: 1200,
        height: 630,
        alt: 'Meubles&Moi - Aménagement clé en main et mobilier écoresponsable',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meubles&Moi | Aménagement clé en main et mobilier écoresponsable',
    description:
      'Aménagement intérieur clé en main & mobilier de seconde main reconditionné. Livraison et montage soignés inclus.',
    images: ['/images/hero-appartement.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#063B39',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService', 'HomeGoodsStore'],
      '@id': 'https://www.meubles-et-moi.fr/#organization',
      name: 'Meubles&Moi',
      legalName: 'Meubles&Moi',
      url: 'https://www.meubles-et-moi.fr',
      logo: 'https://www.meubles-et-moi.fr/logo.png',
      image: 'https://www.meubles-et-moi.fr/images/hero-appartement.jpg',
      description:
        'Service d’aménagement intérieur clé en main et mobilier reconditionné de seconde main pour particuliers, locataires, propriétaires et professionnels. Sélection soignée, livraison, montage et démarche circulaire.',
      telephone: '+33783276352',
      email: 'r.ortega@meubles-et-moi.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lyon 6e',
        addressLocality: 'Lyon',
        postalCode: '69006',
        addressRegion: 'Auvergne-Rhône-Alpes',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.7699,
        longitude: 4.8569,
      },
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Métropole de Lyon',
        },
        {
          '@type': 'City',
          name: 'Lyon',
        },
        {
          '@type': 'City',
          name: 'Villeurbanne',
        },
      ],
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Virement, Carte bancaire',
      sameAs: [
        'https://www.instagram.com/meubles.et.moi/',
        'https://www.linkedin.com/company/meubles-moi/',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Solutions d’ameublement écoresponsables & reconditionnées',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Aménagement intérieur clé en main',
              description:
                'Sourcing de mobilier reconditionné de seconde main, livraison à l’étage, montage complet et mise en place soignée.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobilier reconditionné pour logements et locaux professionnels',
              description:
                'Mobilier soigné pour studios, appartements et locaux professionnels, livré et monté sous 48h.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.meubles-et-moi.fr/#website',
      url: 'https://www.meubles-et-moi.fr',
      name: 'Meubles&Moi',
      publisher: {
        '@id': 'https://www.meubles-et-moi.fr/#organization',
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.meubles-et-moi.fr/#faq',
      // Même source que la FAQ affichée (data/faq.ts)
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F9F6F0] text-[#063B39] font-sans antialiased selection:bg-[#063B39] selection:text-white">
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2203263483553018');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2203263483553018&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MetaPixelPageView />
        <AttributionCapture />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
