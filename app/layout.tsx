import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meubles&moi | Ameublement clé en main écoresponsable & LMNP à Lyon',
  description: 'Meubles&moi équipe votre bien immobilier en mobilier de seconde main soigné en 48h à Lyon. Augmentez vos loyers, optimisez votre fiscalité LMNP et valorisez votre patrimoine durablement.',
  keywords: [
    'Meubles&moi',
    'ameublement lyon',
    'location meublée lyon',
    'lmnp amortissement',
    'mobilier seconde main',
    'décoration investissement locatif',
    'ameublement clé en main',
    'économie circulaire lyon'
  ],
  authors: [{ name: 'Meubles&moi' }],
  openGraph: {
    title: 'Meubles&moi | Ameublement clé en main écoresponsable à Lyon',
    description: 'Équipez votre bien immobilier en mobilier soigné de seconde main en 48h. Boostez vos loyers et optimisez votre fiscalité LMNP.',
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
      </head>
      <body className="bg-[#F9F6F0] text-[#063B39] font-sans antialiased selection:bg-[#063B39] selection:text-white">
        {children}
      </body>
    </html>
  );
}
