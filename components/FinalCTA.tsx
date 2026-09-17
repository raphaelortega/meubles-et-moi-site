'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenEstimate?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEstimate }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    if (onOpenEstimate) {
      onOpenEstimate();
    } else {
      scrollTo('devis');
    }
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grand bloc vert sombre #063B39 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl sm:rounded-4xl bg-[#063B39] text-[#FAF8F5] p-8 sm:p-14 md:p-20 overflow-hidden shadow-lift border border-[#063B39]/20"
        >
          {/* Cercles d'ambiance en arrière-plan */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C55D45]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Petit badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#FAF8F5] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C55D45]" />
              <span>Chiffrage gratuit sous 24h ouvrées</span>
            </div>

            {/* Titre percutant demandé */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Prêt à transformer votre intérieur sans lever le petit doigt ?
            </h2>

            {/* Sous-titre court et rassurant */}
            <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed max-w-2xl mb-10">
              Dites-nous quel bien vous souhaitez meubler. Nous vous envoyons une sélection clé en main sous 24h avec un devis transparent et sans mauvaise surprise.
            </p>

            {/* Bouton d'action Terracotta (#C55D45) & Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleClick}
                className="w-full sm:w-auto px-9 py-4 rounded-full font-display font-bold text-sm tracking-wide text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta flex items-center justify-center gap-3 transition-all cursor-pointer"
              >
                <span>Estimer mon aménagement</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <a
                  href="tel:0783276352"
                  className="w-full sm:w-auto px-5 py-4 rounded-full font-display font-bold text-xs tracking-wide text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C55D45]" />
                  <span>07 83 27 63 52</span>
                </a>
                <a
                  href="tel:0782622129"
                  className="w-full sm:w-auto px-5 py-4 rounded-full font-display font-bold text-xs tracking-wide text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C55D45]" />
                  <span>07 82 62 21 29</span>
                </a>
              </div>
            </div>

            {/* Contact e-mails direct */}
            <p className="text-xs text-stone-300/80 -mt-6 mb-8 text-center flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Ou par e-mail :</span>
              <a href="mailto:r.ortega@meubles-et-moi.fr" className="text-white hover:text-[#C55D45] underline underline-offset-2 transition-colors">
                r.ortega@meubles-et-moi.fr
              </a>
              <span className="text-stone-400">•</span>
              <a href="mailto:m.aucourt@meubles-et-moi.fr" className="text-white hover:text-[#C55D45] underline underline-offset-2 transition-colors">
                m.aucourt@meubles-et-moi.fr
              </a>
            </p>

            {/* 4 Piliers de réassurance */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10 w-full text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#C55D45] shrink-0" />
                <span className="text-xs font-semibold text-stone-200">100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Clock className="w-4 h-4 text-[#C55D45] shrink-0" />
                <span className="text-xs font-semibold text-stone-200">Devis sous 24h</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#C55D45] shrink-0" />
                <span className="text-xs font-semibold text-stone-200">Sans engagement</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Sparkles className="w-4 h-4 text-[#C55D45] shrink-0" />
                <span className="text-xs font-semibold text-stone-200">Expertise Lyon</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
