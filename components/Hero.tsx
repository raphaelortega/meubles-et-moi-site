'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Star, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenEstimate?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* 2. Ambiance lumineuse Aurora / Glow terracotta (8-10%) + touche ambrée très douce */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[560px] pointer-events-none -z-10 overflow-hidden">
        {/* Lueur terracotta 8-10% */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[740px] h-[360px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C55D45]/10 via-[#E59866]/8 to-transparent rounded-full blur-3xl" />
        {/* Touche ambrée très subtile */}
        <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[480px] h-[240px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D97706]/6 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Badge animé */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-stone-200/80 shadow-[0_4px_14px_rgba(0,0,0,0.04)] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C55D45] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C55D45]"></span>
              </span>
              <span className="text-xs font-semibold text-[#063B39] tracking-tight">
                ✨ Aménagement clé en main & circulaire
              </span>
            </div>
          </motion.div>

          {/* Titre H1 percutant et universel */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#063B39] tracking-tight leading-[1.08] mb-6"
          >
            On meuble votre intérieur.{' '}
            <span className="block sm:inline text-[#063B39]">Moins cher.{' '}</span>
            <span className="text-[#C55D45] inline-block relative">
              Écoresponsable.
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#C55D45]/30 -z-10"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Sous-titre court, clair et orienté SEO */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#063B39]/80 font-normal leading-relaxed max-w-2xl mb-9"
          >
            Particuliers, locataires, propriétaires et professionnels : packs de mobilier reconditionné et de seconde main soigné, livrés et montés clé en main.{' '}
            <span className="font-semibold text-[#063B39]">Zéro logistique, 100 % d'impact.</span>
          </motion.p>

          {/* 2 Boutons d'action (CTA) avec bouton secondaire blanc pur bien détaché */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-9"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (onOpenEstimate) onOpenEstimate();
                else scrollTo('devis');
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold text-sm tracking-wide text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <span>Estimer mon projet</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Bouton secondaire en blanc pur #FFFFFF avec ombre chaude douce rgba(0,0,0,0.04) */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('galerie')}
              className="w-full sm:w-auto px-7 py-4 rounded-full font-display font-bold text-sm tracking-wide text-[#063B39] bg-white hover:bg-stone-50 border border-stone-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)] flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Voir nos réalisations</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </motion.button>
          </motion.div>

          {/* Preuve sociale rapide sous les boutons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-1 mb-12"
          >
            {/* Avatars */}
            <div className="flex -space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Avis client Meubles&Moi - Aménagement mobilier de seconde main"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Témoignage propriétaire Meubles&Moi - Pack meuble clé en main"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client satisfait Meubles&Moi - Mobilier reconditionné"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Avis aménagement intérieur Meubles&Moi"
              />
            </div>

            {/* Note & texte */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#063B39]">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>
                <strong>100% de clients satisfaits</strong> sur nos aménagements
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Aperçu visuel : Réalisation Meubles & Moi */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_20px_50px_-15px_rgba(35,25,20,0.08),_0_2px_8px_rgba(0,0,0,0.03)] group">
            {/* Image principale */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="/images/hero-appartement.jpg"
                alt="Aménagement intérieur clé en main et mobilier reconditionné par Meubles&Moi à Lyon"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063B39]/80 via-black/10 to-transparent pointer-events-none" />

              {/* Barre d'informations & réassurance en bas de l'image */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-7 flex flex-wrap items-end justify-between gap-4 text-white pointer-events-none">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-stone-200 tracking-wide">
                      Réalisation réelle • Lyon
                    </span>
                  </div>
                  <p className="font-display text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                    Appartement meublé clé en main • Salon, cuisine bar & verrière
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 font-semibold text-white">
                    Installé en 48h
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#C55D45] font-bold text-white shadow-sm">
                    100% chiné & valorisé
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
