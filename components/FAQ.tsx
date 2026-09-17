'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Les meubles sont-ils propres et en bon état ?',
    a: 'Oui, impeccables. Chaque meuble est soigneusement nettoyé à la vapeur à 180°C et rénové dans notre atelier. Pour une hygiène parfaite, toute la literie (matelas et oreillers) est 100% neuve, fabriquée de façon éco-conçue et garantie 5 ans.'
  },
  {
    q: 'Est-ce vraiment livré et monté en 48h ?',
    a: 'Oui. Dès que vous validez la proposition, notre équipe livre à l’étage, monte et installe l’ensemble du mobilier en 48h chrono à Lyon et sa métropole, en laissant le logement propre et impeccable.'
  },
  {
    q: 'Comment déduire les meubles de mes impôts ?',
    a: 'En louant votre logement meublé sous le statut LMNP (régime réel), 100% du prix des meubles est déductible de vos impôts sur 5 à 10 ans. Votre comptable utilise simplement notre facture détaillée pour effacer vos impôts locatifs.'
  },
  {
    q: 'Puis-je voir les meubles avant l’installation ?',
    a: 'Absolument. Nous vous envoyons les photos des pièces sélectionnées pour votre appartement avant toute intervention. Rien n’est installé sans votre accord.'
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-cream-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-extrabold text-terracotta-600 tracking-wider block mb-1">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-charcoal-900">
            Vos questions, nos réponses
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-cream-300 bg-cream-50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-charcoal-900">
                    {item.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-sage-700' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-cream-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
