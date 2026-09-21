'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  theme: string;
}

export const FAQS: FAQItem[] = [
  {
    theme: 'Aménagement clé en main',
    question: 'En quoi consiste votre service d’aménagement d’appartement clé en main ?',
    answer:
      'Notre service d’aménagement d’appartement clé en main prend en charge l’intégralité de votre projet pour vous libérer de toute charge mentale. Dès l’analyse de vos besoins (surface, style souhaité, contraintes d’espace et budget), nous élaborons une sélection cohérente et harmonieuse de mobilier reconditionné de seconde main. Nous gérons ensuite toute la chaîne logistique : transport, livraison à l’étage, assemblage et montage complet sur place. Vous retrouvez un logement immédiatement fonctionnel, soigné et prêt à vivre ou à louer, sans avoir à porter le moindre meuble ni manipuler un tournevis.',
  },
  {
    theme: 'Mobilier reconditionné seconde main',
    question: 'Pourquoi choisir du mobilier reconditionné et de seconde main ?',
    answer:
      'Opter pour du mobilier reconditionné et de seconde main offre un triple bénéfice : économique, écologique et qualitatif. Vous réalisez jusqu’à 40 % d’économies par rapport à du mobilier neuf équivalent, tout en profitant de matériaux nobles et durables (bois massif, structures robustes). Chaque meuble est minutieusement choisi pour son esthétique, sa solidité et son parfait état d’usage. Enfin, en privilégiant l’économie circulaire locale, vous évitez la surproduction industrielle et économisez en moyenne 1,2 tonne de CO₂ par appartement.',
  },
  {
    theme: 'Installation & Livraison',
    question: 'Comment se déroulent l’installation et la livraison de meubles à Lyon et sa métropole ?',
    answer:
      'Notre équipe dédiée prend en charge l’acheminement complet de votre mobilier dans toute la métropole de Lyon (Presqu’île, Croix-Rousse, Part-Dieu, Confluence, Villeurbanne, etc.), quel que soit l’étage, avec ou sans ascenseur. Nous réalisons sur place le montage minutieux de chaque élément selon vos plans d’agencement. Une fois le mobilier installé, nous évacuons l’intégralité des protections et emballages pour vous restituer des pièces propres et prêtes à l’usage. L’intervention est planifiée selon vos disponibilités et réalisée en 48h chrono après validation.',
  },
  {
    theme: 'Investissement & Fiscalité LMNP',
    question: 'Votre service d’ameublement clé en main est-il compatible avec la fiscalité LMNP ?',
    answer:
      'Oui, absolument. Notre prestation d’aménagement en mobilier reconditionné répond à 100 % à la liste des équipements obligatoires définis par le décret du statut LMNP (Loueur en Meublé Non Professionnel). Si vous louez au régime réel, la totalité du coût du mobilier et de son installation est amortissable sur 5 à 10 ans, ce qui permet de déduire ces charges de vos revenus locatifs et d’effacer vos impôts fonciers. Nous vous fournissons une facture détaillée et conforme pour votre expert-comptable.',
  },
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative bg-[#F9F6F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête SEO : H2 */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C55D45]/10 text-[#C55D45] text-xs font-bold font-display uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Foire aux questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#063B39] tracking-tight leading-tight">
            Questions fréquentes sur notre aménagement clé en main
          </h2>
          <p className="text-base sm:text-lg text-[#063B39]/70 mt-4 leading-relaxed">
            Tout ce qu’il faut savoir sur le mobilier reconditionné de seconde main,
            l’installation et la livraison de meubles à Lyon et sa région.
          </p>
        </div>

        {/* Liste accordéon */}
        <div className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C55D45]/30 shadow-md ring-1 ring-[#C55D45]/15'
                    : 'bg-white border-stone-200/90 shadow-sm hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  id={`faq-header-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063B39]"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C55D45]">
                      {item.theme}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-extrabold text-[#063B39] leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#063B39] text-white' : 'bg-stone-100 text-[#063B39]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-header-${idx}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#063B39]/75 leading-relaxed border-t border-stone-100 font-normal">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bloc contact d'aide complémentaire */}
        <div className="mt-12 text-center bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs uppercase font-bold text-[#C55D45] tracking-wider block">
              Vous avez une autre question ?
            </span>
            <p className="text-sm sm:text-base font-bold text-[#063B39] mt-0.5">
              Notre équipe à Lyon est disponible pour échanger sur votre bien.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0783276352"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#063B39] bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C55D45]" />
              <span>07 83 27 63 52</span>
            </a>
            <a
              href="mailto:r.ortega@meubles-et-moi.fr"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-[#063B39] hover:bg-[#063B39]/90 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Nous écrire</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
