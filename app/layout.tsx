import type { Metadata, Viewport } from 'next';
import './globals.css';

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
      mainEntity: [
        {
          '@type': 'Question',
          name: 'En quoi consiste votre service d’aménagement d’appartement clé en main ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Notre service d’aménagement d’appartement clé en main prend en charge l’intégralité de votre projet pour vous libérer de toute charge mentale. Dès l’analyse de vos besoins (surface, style souhaité, contraintes d’espace et budget), nous élaborons une sélection cohérente et harmonieuse de mobilier reconditionné de seconde main. Nous gérons ensuite toute la chaîne logistique : transport, livraison à l’étage, assemblage et montage complet sur place. Vous retrouvez un logement immédiatement fonctionnel, soigné et prêt à vivre ou à louer, sans avoir à porter le moindre meuble ni manipuler un tournevis.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi choisir du mobilier reconditionné et de seconde main ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Opter pour du mobilier reconditionné et de seconde main offre un triple bénéfice : économique, écologique et qualitatif. Vous réalisez jusqu’à 40 % d’économies par rapport à du mobilier neuf équivalent, tout en profitant de matériaux nobles et durables (bois massif, structures robustes). Chaque meuble est minutieusement choisi pour son esthétique, sa solidité et son parfait état d’usage. Enfin, en privilégiant l’économie circulaire locale, vous évitez la surproduction industrielle et économisez en moyenne 1,2 tonne de CO₂ par appartement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment se déroulent l’installation et la livraison de meubles à Lyon et sa métropole ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Notre équipe dédiée prend en charge l’acheminement complet de votre mobilier dans toute la métropole de Lyon (Presqu’île, Croix-Rousse, Part-Dieu, Confluence, Villeurbanne, etc.), quel que soit l’étage, avec ou sans ascenseur. Nous réalisons sur place le montage minutieux de chaque élément selon vos plans d’agencement. Une fois le mobilier installé, nous évacuons l’intégralité des protections et emballages pour vous restituer des pièces propres et prêtes à l’usage. L’intervention est planifiée selon vos disponibilités et réalisée en 48h chrono après validation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Votre service d’ameublement clé en main est-il compatible avec la fiscalité LMNP ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, absolument. Notre prestation d’aménagement en mobilier reconditionné répond à 100 % à la liste des équipements obligatoires définis par le décret du statut LMNP (Loueur en Meublé Non Professionnel). Si vous louez au régime réel, la totalité du coût du mobilier et de son installation est amortissable sur 5 à 10 ans, ce qui permet de déduire ces charges de vos revenus locatifs et d’effacer vos impôts fonciers. Nous vous fournissons une facture détaillée et conforme pour votre expert-comptable.',
          },
        },
      ],
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
