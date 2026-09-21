'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenEstimate?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleEstimateClick = () => {
    setMobileMenuOpen(false);
    if (onOpenEstimate) {
      onOpenEstimate();
    } else {
      scrollTo('devis');
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-5xl pointer-events-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 px-5 sm:px-6 shadow-[0_12px_32px_-6px_rgba(35,25,20,0.07),_0_1px_4px_rgba(0,0,0,0.03)] border border-stone-200'
            : 'bg-white/90 backdrop-blur-md py-3 px-6 sm:px-7 shadow-[0_8px_25px_-5px_rgba(35,25,20,0.04),_0_1px_3px_rgba(0,0,0,0.02)] border border-stone-200/80'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo épuré */}
          <a
            href="#"
            className="group flex items-center gap-2.5 transition-transform duration-200 active:scale-95"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6 shrink-0 bg-[#063B39]">
              <img
                src="/logo.png"
                alt="Meubles&Moi - Aménagement clé en main et mobilier écoresponsable"
                className="w-full h-full object-cover"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-tight text-[#063B39] leading-none">
                Meubles<span className="text-[#C55D45]">&</span>moi
              </span>
              <span className="text-[9px] uppercase tracking-widest font-semibold text-[#063B39]/60 mt-0.5">
                Lyon • Circulaire
              </span>
            </div>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#063B39]">
            <button
              onClick={() => scrollTo('promesse')}
              className="hover:text-[#C55D45] transition-colors duration-200 cursor-pointer"
            >
              Pourquoi nous
            </button>
            <button
              onClick={() => scrollTo('methode')}
              className="hover:text-[#C55D45] transition-colors duration-200 cursor-pointer"
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollTo('galerie')}
              className="hover:text-[#C55D45] transition-colors duration-200 cursor-pointer"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="hover:text-[#C55D45] transition-colors duration-200 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* CTA & Téléphones */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#063B39]/80">
              <Phone className="w-3.5 h-3.5 text-[#063B39]" />
              <a href="tel:0783276352" className="hover:text-[#C55D45] transition-colors">
                07 83 27 63 52
              </a>
              <span className="text-stone-300">/</span>
              <a href="tel:0782622129" className="hover:text-[#C55D45] transition-colors">
                07 82 62 21 29
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEstimateClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estimer mon projet</span>
            </motion.button>
          </div>

          {/* Bouton Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#063B39] hover:bg-[#063B39]/5 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Dropdown Mobile animé */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 max-w-md mx-auto pointer-events-auto bg-white/95 backdrop-blur-2xl rounded-3xl border border-[#063B39]/15 shadow-lift p-6 z-50 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              <button
                onClick={() => scrollTo('promesse')}
                className="py-2.5 font-display font-bold text-[#063B39] hover:text-[#C55D45] text-base"
              >
                Pourquoi nous
              </button>
              <button
                onClick={() => scrollTo('methode')}
                className="py-2.5 font-display font-bold text-[#063B39] hover:text-[#C55D45] text-base"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollTo('galerie')}
                className="py-2.5 font-display font-bold text-[#063B39] hover:text-[#C55D45] text-base"
              >
                Réalisations Avant / Après
              </button>
              <button
                onClick={() => scrollTo('faq')}
                className="py-2.5 font-display font-bold text-[#063B39] hover:text-[#C55D45] text-base"
              >
                Questions fréquentes (FAQ)
              </button>
              
              <div className="pt-2 border-t border-[#063B39]/10 flex flex-col gap-3">
                <button
                  onClick={handleEstimateClick}
                  className="w-full py-3.5 rounded-full text-white font-display font-bold text-sm bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Estimer mon projet</span>
                </button>
                <div className="flex flex-col items-center justify-center gap-1 text-xs font-semibold text-[#063B39]/80 py-1">
                  <span className="text-[10px] uppercase text-[#063B39]/60 font-bold tracking-wider">Appel direct :</span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="tel:0783276352"
                      className="hover:text-[#C55D45] transition-colors flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#C55D45]" />
                      <span>07 83 27 63 52</span>
                    </a>
                    <span className="text-stone-300">/</span>
                    <a
                      href="tel:0782622129"
                      className="hover:text-[#C55D45] transition-colors flex items-center gap-1"
                    >
                      <span>07 82 62 21 29</span>
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-[11px] text-[#063B39]/70 pt-1">
                    <a href="mailto:r.ortega@meubles-et-moi.fr" className="hover:text-[#C55D45] transition-colors">
                      r.ortega@meubles-et-moi.fr
                    </a>
                    <a href="mailto:m.aucourt@meubles-et-moi.fr" className="hover:text-[#C55D45] transition-colors">
                      m.aucourt@meubles-et-moi.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

