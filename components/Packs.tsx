'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface PacksProps {
  onSelectPack?: (packName: string, propertyType: string) => void;
}

const FORMULAS = [
  {
    name: 'Formule Studio / T1',
    surface: '18 à 28 m²',
    propertyType: 'Studio / T1',
    rentGain: '+180 € / mois',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=800&q=80',
    items: [
      'Lit double avec matelas neuf hôtelier',
      'Bureau en bois avec chaise de travail',
      'Table bistrot + 2 chaises',
      'Dressing ou commode restaurée',
      'Luminaires, miroir et vaisselle complète'
    ]
  },
  {
    name: 'Formule T2 (2 pièces)',
    badge: 'Le plus demandé',
    surface: '35 à 52 m²',
    propertyType: 'T2 (2 pièces)',
    rentGain: '+250 € / mois',
    popular: true,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    items: [
      'Chambre complète (lit 160, chevets, dressing)',
      'Salon avec canapé confortable et table basse',
      'Meuble TV rétro reconditionné',
      'Coin repas avec table bois + 4 chaises',
      'Suspensions, rideaux, déco soignée et vaisselle'
    ]
  },
  {
    name: 'Formule T3+ & Colocation',
    surface: '55 à 85 m²',
    propertyType: 'T3+ ou Colocation',
    rentGain: '+420 € / mois',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    items: [
      '2 à 3 chambres avec lits neufs et bureaux',
      'Grand canapé d’angle convivial',
      'Grande table à manger 6 personnes',
      'Dressings individuels dans chaque chambre',
      'Équipement cuisine complet et vaisselle'
    ]
  }
];

export const Packs: React.FC<PacksProps> = ({ onSelectPack }) => {
  const handleChoose = (formula: typeof FORMULAS[0]) => {
    if (onSelectPack) {
      onSelectPack(formula.name, formula.propertyType);
    }
    const el = document.getElementById('devis');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="formules" className="py-16 md:py-24 bg-white border-y border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête simple */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold text-terracotta-600 tracking-wider block mb-1">
            Nos Formules Clé en Main
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B39] tracking-tight">
            Tout le mobilier complet et soigné, prêt à vivre.
          </h2>
          <p className="text-[#063B39]/70 text-sm mt-2">
            Chaque formule est livrée, montée et prête à vivre ou à louer en 48h à Lyon.
          </p>
        </div>

        {/* 3 Cartes Simples et Visuelles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FORMULAS.map((formula, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 flex flex-col justify-between border transition-all ${
                formula.popular
                  ? 'bg-[#FAF8F5] border-2 border-[#063B39] shadow-md relative'
                  : 'bg-white border-stone-200 shadow-sm'
              }`}
            >
              <div>
                {formula.badge && (
                  <span className="absolute -top-3 left-6 bg-[#063B39] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {formula.badge}
                  </span>
                )}

                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-5 bg-stone-100">
                  <img
                    src={formula.image}
                    alt={`Pack mobilier reconditionné Meubles&Moi - ${formula.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-charcoal-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    {formula.surface}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal-900">
                  {formula.name}
                </h3>

                <div className="mt-2 mb-4 p-2.5 rounded-xl bg-white border border-cream-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Surloyer moyen :</span>
                  <span className="text-xs font-extrabold text-sage-700">{formula.rentGain}</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  {formula.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleChoose(formula)}
                className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  formula.popular
                    ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white shadow-sm'
                    : 'bg-sage-600 hover:bg-sage-700 text-white'
                }`}
              >
                <span>Choisir cette formule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
