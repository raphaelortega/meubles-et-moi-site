'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  FileText
} from 'lucide-react';

export const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-[#063B39]/5">
      {/* Halo subtil décoratif */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C55D45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C55D45]/10 text-[#C55D45] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Guides & Conseils Pratiques</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#063B39] tracking-tight leading-tight">
              Tout comprendre pour meubler & valoriser votre bien
            </h2>

            <p className="text-sm sm:text-base text-[#063B39]/75 leading-relaxed">
              Fiscalité LMNP, encadrement des loyers à Lyon, conformité légale et démarches pas à pas : nous partageons notre expertise pour vous aider à faire les bons choix.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#C55D45] hover:text-[#B04F38] transition-colors py-2 px-4 rounded-full bg-white border border-[#C55D45]/20 shadow-xs hover:shadow-sm"
            >
              <span>Voir tous nos articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Grille des articles mis en avant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Carte Principale : Article complet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 rounded-3xl sm:rounded-4xl bg-white border border-[#063B39]/10 p-7 sm:p-10 shadow-sm hover:shadow-lift hover:border-[#C55D45]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#C55D45]/10 text-[#C55D45] text-xs font-bold uppercase tracking-wider">
                  Nouveau Guide LMNP
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                  Fiscalité & Démarches
                </span>
              </div>

              <Link href="/blog/passer-location-nue-en-meublee" className="group block">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] group-hover:text-[#C55D45] transition-colors leading-snug">
                  Passer sa location nue en meublée : conditions et étapes
                </h3>
              </Link>

              <p className="text-xs sm:text-sm text-[#063B39]/75 leading-relaxed">
                Vous louez un logement vide et souhaitez le passer en meublé ? Découvrez comment augmenter votre loyer jusqu&apos;à 30 %, optimiser votre fiscalité grâce à l&apos;amortissement et respecter scrupuleusement la liste des 11 meubles obligatoires.
              </p>

              {/* 3 points clés à retenir */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-[#063B39]/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Plafonds de loyers majorés en meublé</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#063B39]/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Liste officielle des 11 meubles obligatoires</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#063B39]/85">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Amortissement LMNP & impôt proche de 0 €</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-[#063B39]/60">
                <span className="font-semibold text-[#063B39]">Par Maxence (@Maxence)</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C55D45]" />
                  6 min de lecture
                </span>
              </div>

              <Link
                href="/blog/passer-location-nue-en-meublee"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta transition-all cursor-pointer"
              >
                <span>Lire le guide complet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Carte Secondaire : Encadré d'expertise & simulateur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-3xl sm:rounded-4xl bg-[#063B39] text-white p-7 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                <TrendingUp className="w-3.5 h-3.5 text-[#C55D45]" />
                <span>Simulateur en libre accès</span>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Quel est votre gain potentiel en meublé ?
              </h4>

              <p className="text-xs text-stone-300 leading-relaxed">
                Testez notre simulateur fiscal autonome pour comparer en 3 clics votre loyer nu et meublé selon votre surface et votre secteur à Lyon.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#C55D45]">
                  Prochains guides en préparation
                </div>
                <div className="text-xs text-stone-200">
                  • <strong>Article 2</strong> : Les 11 meubles obligatoires passés au crible
                </div>
                <div className="text-xs text-stone-200">
                  • <strong>Article 4</strong> : Maîtriser l&apos;amortissement réel LMNP
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <Link
                href="/simulateur"
                className="w-full py-3.5 px-5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Accéder au simulateur</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
