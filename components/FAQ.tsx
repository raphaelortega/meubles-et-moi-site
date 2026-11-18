'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { FAQS } from '@/data/faq';

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

                {/* Réponse toujours présente dans le HTML (référencement), masquée en CSS quand fermée */}
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-header-${idx}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#063B39]/75 leading-relaxed border-t border-stone-100 font-normal">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
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
              Raphaël et Maxence vous répondent pour échanger sur votre bien.
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
