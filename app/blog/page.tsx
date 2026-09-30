import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Home, 
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog & Guides LMNP : Conseils Ameublement et Fiscalité Locative',
  description:
    'Retrouvez tous nos guides, conseils pratiques et analyses fiscales pour meubler, rentabiliser et valoriser vos biens immobiliers à Lyon.',
  alternates: {
    canonical: 'https://www.meubles-et-moi.fr/blog',
  },
  openGraph: {
    title: 'Blog & Guides LMNP : Conseils Ameublement | Meubles&Moi',
    description:
      'Retrouvez tous nos guides, conseils pratiques et analyses fiscales pour meubler, rentabiliser et valoriser vos biens immobiliers à Lyon.',
    url: 'https://www.meubles-et-moi.fr/blog',
    siteName: 'Meubles&Moi',
    locale: 'fr_FR',
    type: 'website',
  },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://www.meubles-et-moi.fr/blog#blog',
  name: 'Le Blog Meubles&Moi : Conseils Ameublement & LMNP',
  url: 'https://www.meubles-et-moi.fr/blog',
  description:
    'Conseils pratiques, fiscalité LMNP et astuces d’aménagement clé en main pour propriétaires et investisseurs.',
  publisher: {
    '@type': 'Organization',
    name: 'Meubles&Moi',
    url: 'https://www.meubles-et-moi.fr',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.meubles-et-moi.fr/logo.png',
    },
  },
};

export default function BlogHubPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#063B39] font-sans antialiased selection:bg-[#063B39] selection:text-white">
      {/* Schema.org Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <Header />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs text-[#063B39]/70 mb-8">
            <Link href="/" className="hover:text-[#C55D45] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </Link>
            <span>/</span>
            <span className="text-[#063B39] font-medium">Blog & Guides</span>
          </nav>

          {/* En-tête du blog */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C55D45]/10 text-[#C55D45] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Guides & Analyses LMNP</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#063B39] tracking-tight leading-tight">
              Conseils & expertises pour meubler et valoriser vos biens
            </h1>

            <p className="text-sm sm:text-base text-[#063B39]/75 max-w-2xl mx-auto leading-relaxed">
              Fiscalité LMNP, encadrement des loyers à Lyon, conformité du mobilier et aménagement clé en main : tout ce qu&apos;il faut savoir pour louer sereinement et sans effort.
            </p>
          </div>

          {/* Article à la une (Hero Article Card) */}
          <div className="mb-14">
            <Link
              href="/blog/passer-location-nue-en-meublee"
              className="group block rounded-3xl sm:rounded-4xl bg-white border border-[#063B39]/10 p-6 sm:p-10 shadow-sm hover:shadow-lift hover:border-[#C55D45]/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#C55D45]/10 text-[#C55D45] text-xs font-bold uppercase tracking-wider">
                      À la une • Guide Pratique
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                      Fiscalité & Statut LMNP
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#063B39] group-hover:text-[#C55D45] transition-colors leading-tight">
                    Passer sa location nue en meublée : conditions et étapes
                  </h2>

                  <p className="text-xs sm:text-sm text-[#063B39]/75 line-clamp-3 leading-relaxed">
                    Bail en cours, liste des 11 meubles obligatoires, plafonds de loyers majorés et déclaration fiscale LMNP : le guide complet étape par étape pour réussir la transition de votre logement vide vers le meublé.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#063B39]/60 pt-2">
                    <span className="font-semibold text-[#063B39]">Par Maxence (@Maxence)</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C55D45]" />
                      29 septembre 2026
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C55D45]" />
                      6 min de lecture
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl sm:rounded-3xl bg-[#063B39] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between h-full min-h-[220px]">
                    <div className="space-y-3 relative z-10">
                      <div className="inline-flex items-center gap-1.5 text-xs text-stone-200">
                        <TrendingUp className="w-4 h-4 text-[#C55D45]" />
                        <span>Optimisation locative</span>
                      </div>
                      <div className="font-display font-extrabold text-lg sm:text-xl text-white">
                        Jusqu&apos;à 30 % de loyer en plus et un impôt proche de 0 €
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed">
                        Découvrez comment l’amortissement comptable et les plafonds majorés profitent aux bailleurs.
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/10 relative z-10">
                      <span className="text-xs font-bold text-[#C55D45] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                        Lire l&apos;article complet <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Autres articles / Guides à venir */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#063B39]/10">
              <h3 className="font-display font-bold text-xl text-[#063B39]">
                Autres publications et guides à venir
              </h3>
              <span className="text-xs text-[#063B39]/60">Éditions Meubles&Moi</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Carte Guide 2 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#063B39]/10 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[11px] font-semibold">
                      Article 2 • Réglementation
                    </span>
                    <span className="text-[11px] font-bold text-[#C55D45] bg-[#C55D45]/10 px-2 py-0.5 rounded-full">
                      Bientôt disponible
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-lg text-[#063B39]">
                    Les 11 meubles obligatoires en location meublée (décret 2015-981)
                  </h4>
                  
                  <p className="text-xs text-[#063B39]/70 leading-relaxed">
                    Détail pièce par pièce des exigences légales pour éviter tout risque de requalification en bail vide par le juge.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-[#063B39]/60">
                  <span>Par l&apos;équipe Meubles&Moi</span>
                  <span className="text-[#C55D45] font-semibold">Publication imminente</span>
                </div>
              </div>

              {/* Carte Guide 3 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#063B39]/10 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[11px] font-semibold">
                      Article 4 • Fiscalité
                    </span>
                    <span className="text-[11px] font-bold text-[#C55D45] bg-[#C55D45]/10 px-2 py-0.5 rounded-full">
                      Bientôt disponible
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-lg text-[#063B39]">
                    Comment amortir ses meubles en LMNP au régime réel ?
                  </h4>
                  
                  <p className="text-xs text-[#063B39]/70 leading-relaxed">
                    Comprendre le mécanisme de l&apos;amortissement sur 5 à 10 ans pour effacer légalement vos impôts sur les revenus locatifs.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-[#063B39]/60">
                  <span>Par l&apos;équipe Meubles&Moi</span>
                  <span className="text-[#C55D45] font-semibold">Publication imminente</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bloc CTA Simulateur & Devis */}
          <div className="mt-16 rounded-3xl bg-[#063B39] text-white p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                <Sparkles className="w-3.5 h-3.5 text-[#C55D45]" />
                <span>Simulateur & Chiffrage Gratuit</span>
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Envie d&apos;estimer vos gains en meublé ?
              </h3>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Utilisez notre simulateur autonome pour comparer vos revenus en location nue et meublée, ou demandez votre sélection clé en main sous 24h.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <Link
                  href="/simulateur"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Accéder au simulateur LMNP</span>
                </Link>

                <Link
                  href="/#estimation"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Estimer mon aménagement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
