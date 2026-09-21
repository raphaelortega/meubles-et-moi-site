'use client';

import React from 'react';
import { MapPin, Phone, Mail, Leaf, ArrowUp, Linkedin, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{ backgroundColor: '#063B39', color: '#FAF8F5' }}
      className="w-full bg-[#063B39] text-[#FAF8F5] font-sans pt-16 pb-12 border-t border-white/10 relative overflow-hidden"
    >
      {/* Halo subtil en arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C55D45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de marque sobre */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-[#063B39] shadow-sm shrink-0 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Meubles&Moi - Mobilier de seconde main et aménagement clé en main"
                className="w-full h-full object-cover"
                width={40}
                height={40}
              />
            </div>
            <div>
              <span className="font-display text-2xl font-extrabold tracking-tight text-white block leading-none">
                Meubles<span className="text-[#C55D45]">&</span>moi
              </span>
              <span className="text-[11px] tracking-wide text-stone-300 font-medium mt-0.5 block">
                Ameublement clé en main circulaire • Métropole de Lyon
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-stone-200">
            <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>100 % seconde main & réemploi en circuit court</span>
          </div>
        </div>

        {/* Grille 4 colonnes aérées : Navigation, Coordonnées, Réseaux, Mentions légales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Colonne 1 : Navigation */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block font-display">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('promesse')}
                  className="bg-transparent border-none p-0 text-left text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Pourquoi nous (les 3 piliers)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('methode')}
                  className="bg-transparent border-none p-0 text-left text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Comment ça marche
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('galerie')}
                  className="bg-transparent border-none p-0 text-left text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Galerie & Avant-Après
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('devis')}
                  className="bg-transparent border-none p-0 text-left text-[#C55D45] hover:underline font-semibold transition-colors cursor-pointer"
                >
                  Estimer mon projet (devis)
                </button>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Coordonnées */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block font-display">
              Coordonnées
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C55D45] shrink-0 mt-0.5" />
                <span>Atelier Meubles&moi<br />69006 Lyon (Lyon 6)</span>
              </li>
              <li className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C55D45] shrink-0" />
                  <a href="tel:0783276352" className="hover:text-white transition-colors">
                    07 83 27 63 52
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pl-6.5">
                  <a href="tel:0782622129" className="hover:text-white transition-colors">
                    07 82 62 21 29
                  </a>
                </div>
              </li>
              <li className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C55D45] shrink-0" />
                  <a href="mailto:r.ortega@meubles-et-moi.fr" className="hover:text-white transition-colors">
                    r.ortega@meubles-et-moi.fr
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pl-6.5">
                  <a href="mailto:m.aucourt@meubles-et-moi.fr" className="hover:text-white transition-colors">
                    m.aucourt@meubles-et-moi.fr
                  </a>
                </div>
              </li>
              <li className="text-[11px] text-stone-400 pt-1">
                Presqu’île, Croix-Rousse, Confluence, Part-Dieu, Villeurbanne.
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux & Circularité */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block font-display">
              Réseaux
            </span>
            <p className="text-xs text-stone-300 leading-relaxed">
              Découvrez les coulisses de nos chantiers et les arrivages de pièces chinées en direct.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.linkedin.com/company/meubles-moi/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Meubles&moi"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C55D45] text-white flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/meubles.et.moi/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Meubles&moi"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C55D45] text-white flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[11px] text-stone-400 block pt-1">
              Rejoignez le mouvement de la déco circulaire à Lyon.
            </span>
          </div>

          {/* Colonne 4 : Mentions légales */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block font-display">
              Mentions légales
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Meubles&moi • Lyon</span>
              </li>
              <li>
                <a href="#mentions-legales" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#politique-confidentialite" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne inférieure : Copyright & Bouton Haut de page (effet pill sobre) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Meubles&moi. Tous droits réservés.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-stone-400 hidden sm:inline">Design éco-chic & circulaire</span>
            
            {/* Bouton Haut de page : discret et moderne (effet pill sobre) */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-[#FAF8F5] hover:text-white border border-white/10 shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span className="text-[11px] font-semibold">Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
