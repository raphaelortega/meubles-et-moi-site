import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meubles-et-moi.fr'),
  title: {
    default: 'Meubles&Moi | Aménagement clé en main et mobilier écoresponsable',
    template: '%s | Meubles&Moi',
  },
  description:
    'Aménagement intérieur clé en main & packs de meubles de seconde main reconditionnés. Livraison et montage soignés inclus pour particuliers et professionnels.',
  keywords: [
    'Meubles&Moi',
    'mobilier reconditionné',
    'aménagement intérieur clé en main',
    'packs meubles seconde main',
    'livraison et montage inclus',
    'ameublement écoresponsable',
    'économie circulaire ameublement',
    'meubles seconde main lyon',
    'aménagement locatif lmnp',
    'packs mobilier étudiant lyon',
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
      'Aménagement intérieur clé en main & packs de meubles de seconde main reconditionnés. Livraison et montage soignés inclus pour particuliers et professionnels.',
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
      'Aménagement intérieur clé en main & packs de meubles de seconde main reconditionnés. Livraison et montage soignés inclus.',
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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/logo.png',
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
        'Service d’aménagement intérieur clé en main et packs de mobilier reconditionné de seconde main pour particuliers, locataires, propriétaires et professionnels. Sélection soignée, livraison, montage et démarche circulaire.',
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
              name: 'Packs meubles de seconde main',
              description:
                'Packs complets pour studios, T1, T2 et colocations avec mobilier sélectionné, livré et monté en 48h.',
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
        {children}
      </body>
    </html>
  );
}
