'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Leaf } from 'lucide-react';
import { totalToutesRealisationsTonnes } from '@/data/co2';

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
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#063B39]">
      {/* Photo plein écran en fond (portrait sur mobile, paysage dès la tablette) */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <picture>
          <source media="(min-width: 640px)" srcSet="/images/hero-appartement.jpg" />
          <img
            src="/images/realisations/realisation-loft-mobile.jpg"
            alt="Appartement meublé clé en main par Meubles&moi à Lyon : salon, cuisine bar et verrière"
            className="w-full h-full object-cover object-[50%_45%]"
            fetchPriority="high"
          />
        </picture>
      </motion.div>
      {/* Voiles verts pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-[#063B39]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#063B39]/45 via-[#063B39]/25 to-[#063B39]/85 pointer-events-none" />

      <div className="relative flex-1 flex items-center max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-28 sm:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Badge animé */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8836B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8836B]"></span>
              </span>
              <span className="text-xs font-semibold text-white tracking-tight">
                ✨ Aménagement clé en main, sur-mesure & circulaire
              </span>
            </div>
          </motion.div>

          {/* Titre H1 : personnalisation plutôt que prix */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-[2.4rem] sm:text-6xl lg:text-[min(72px,8.5vh)] font-extrabold text-white tracking-tight leading-[1.05] mb-5 drop-shadow-[0_2px_18px_rgba(0,0,0,0.25)]"
          >
            On meuble votre intérieur.{' '}
            <span className="block sm:inline whitespace-nowrap">À votre image.{' '}</span>
            <span className="text-[#F0A08B] inline-block relative">
              Écoresponsable.
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#F0A08B]/50 -z-10"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mb-6 sm:mb-7"
          >
            Particuliers, locataires, propriétaires et professionnels : un intérieur composé selon vos goûts, votre usage et votre logement, avec du mobilier de seconde main soigné, livré et monté clé en main.{' '}
            <span className="font-semibold text-white">Zéro logistique, un impact concret.</span>
          </motion.p>

          {/* 2 boutons d'action */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-7"
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

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('galerie')}
              className="w-full sm:w-auto px-7 py-4 rounded-full font-display font-bold text-sm tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Voir nos réalisations</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </motion.button>
          </motion.div>

          {/* Preuve vérifiable : CO2e évité, calculé dans data/co2.ts et détaillé sur /methode-co2 */}
          <motion.div variants={itemVariants}>
            <a
              href="/methode-co2"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <Leaf className="w-4 h-4 text-emerald-300 shrink-0" aria-hidden="true" />
              <span>
                Plus de {totalToutesRealisationsTonnes()} de CO₂e évitées sur nos réalisations
              </span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Légende de la photo, en bas */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-5 sm:pb-7 flex flex-wrap items-center justify-center sm:justify-between gap-3 text-white"
      >
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/85">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Réalisation réelle • Lyon • Salon, cuisine bar & verrière</span>
        </div>
        <div className="hidden sm:flex items-center gap-2.5 text-xs">
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 font-semibold">
            Devis sous 24 h
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#C55D45] font-bold shadow-sm">Chiné & valorisé</span>
        </div>
      </motion.div>
    </section>
  );
};
