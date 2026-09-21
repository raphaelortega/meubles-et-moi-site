import type { Metadata } from 'next';
import { PacksPageClient } from './PacksPageClient';

export const metadata: Metadata = {
  title: 'Packs Ameublement Seconde Main & Clé en Main | Meubles&Moi',
  description:
    'Découvrez nos packs d’ameublement complets en mobilier reconditionné : Studio, T2, Colocation. Livraison, montage et démarche écoresponsable inclus.',
  alternates: {
    canonical: '/packs',
  },
  openGraph: {
    title: 'Packs Ameublement Seconde Main & Clé en Main | Meubles&Moi',
    description:
      'Packs complets de mobilier reconditionné pour équiper votre logement sans effort : studio, T2, colocation. Livraison et montage inclus.',
    url: 'https://www.meubles-et-moi.fr/packs',
    type: 'website',
    images: [
      {
        url: '/images/hero-appartement.jpg',
        width: 1200,
        height: 630,
        alt: 'Packs d’ameublement clé en main Meubles&Moi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packs Ameublement Seconde Main & Clé en Main | Meubles&Moi',
    description:
      'Packs complets de mobilier reconditionné pour équiper votre logement sans effort : studio, T2, colocation. Livraison et montage inclus.',
    images: ['/images/hero-appartement.jpg'],
  },
};

export default function PacksPage() {
  return <PacksPageClient />;
}
