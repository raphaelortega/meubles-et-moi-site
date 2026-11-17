'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface EstimatePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onEstimate: () => void;
}

// Pop-up affiché une fois par visite, après 8 s sur le site (déclenché dans app/page.tsx)
export const EstimatePopup: React.FC<EstimatePopupProps> = ({ isOpen, onClose, onEstimate }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-[#063B39]/40 backdrop-blur-[2px]"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="estimate-popup-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(6,59,57,0.45)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-black/5 text-[#063B39] flex items-center justify-center hover:bg-[#063B39] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-40 sm:h-44 overflow-hidden">
              <img
                src="/images/hero-appartement.jpg"
                alt="Appartement meublé clé en main par Meubles&Moi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063B39]/70 to-transparent" />
              <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-extrabold uppercase tracking-wide text-[#063B39]">
                <Sparkles className="w-3.5 h-3.5 text-[#C55D45]" />
                Gratuit & sans engagement
              </span>
            </div>

            <div className="p-6 sm:p-7">
              <h2 id="estimate-popup-title" className="font-display text-2xl font-extrabold text-[#063B39] leading-tight">
                Et si on estimait votre projet&nbsp;?
              </h2>
              <p className="mt-2 text-sm sm:text-[15px] text-[#063B39]/75 leading-relaxed">
                Quelques infos sur votre logement et vos coordonnées : vous voyez tout de suite votre budget indicatif, et recevez un devis personnalisé gratuit sous 48h.
              </p>

              <button
                type="button"
                onClick={onEstimate}
                className="mt-5 w-full px-6 py-3.5 rounded-full font-display font-bold text-sm tracking-wide text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta flex items-center justify-center gap-2.5 transition-colors"
              >
                Estimer mon projet
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 w-full py-2 text-sm font-semibold text-[#063B39]/60 hover:text-[#063B39] transition-colors"
              >
                Plus tard
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
