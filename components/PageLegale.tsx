import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Gabarit des pages légales (/mentions-legales, /politique-de-confidentialite), dans la charte du site
export function PageLegale({ titre, intro, children }: { titre: string; intro?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#063B39]">
      <Header />

      <div className="bg-[#063B39] text-[#f4f0c9] pt-32 pb-12 md:pt-40 md:pb-14">
        <div className="max-w-3xl mx-auto px-5">
          <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs text-[#f4f0c9]/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </Link>
            <span>/</span>
            <span className="text-[#f4f0c9]">{titre}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold text-white leading-tight">{titre}</h1>
          {intro && <p className="mt-4 text-base sm:text-lg text-[#f4f0c9] leading-relaxed max-w-2xl">{intro}</p>}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 py-12 md:py-16 space-y-10 text-[15px] sm:text-base leading-relaxed text-[#063B39]/85">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export function SectionLegale({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#063B39]">{titre}</h2>
      {children}
    </section>
  );
}

/** Information manquante, laissée visible tant que les fondateurs ne l'ont pas fournie */
export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-sm font-semibold">
      TODO : {children}
    </span>
  );
}
