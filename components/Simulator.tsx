'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Leaf 
} from 'lucide-react';

interface SimulatorProps {
  onSelectPropertyType?: (type: string, surface: number) => void;
}

export const Simulator: React.FC<SimulatorProps> = ({ onSelectPropertyType }) => {
  const [propertyType, setPropertyType] = useState<'studio' | 't2' | 't3'>('t2');
  const [rent, setRent] = useState<number>(750);

  const surface = propertyType === 'studio' ? 22 : propertyType === 't2' ? 42 : 68;
  const label = propertyType === 'studio' ? 'Studio / T1' : propertyType === 't2' ? 'T2 (2 pièces)' : 'T3+ ou Colocation';

  // Calculs financiers simplifiés et limpides
  const monthlyGain = Math.round(rent * 0.22);
  const annualUplift = monthlyGain * 12;
  const annualTaxSavings = propertyType === 'studio' ? 780 : propertyType === 't2' ? 1160 : 1580;
  const totalThreeYears = (annualUplift + annualTaxSavings) * 3;
  const co2Saved = Math.round(surface * 14.5);

  const handleApply = () => {
    if (onSelectPropertyType) {
      onSelectPropertyType(label, surface);
    }
    const el = document.getElementById('devis');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="simulateur" className="py-20 md:py-28 bg-white border-b border-cream-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-terracotta-600 font-bold block mb-2">
            Simulateur de Gain
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Votre rentabilité locative <br className="hidden sm:inline" />
            <span className="text-sage-600 font-serif font-normal italic">en un coup d'œil.</span>
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            Sélectionnez votre type de logement et visualisez instantanément le bénéfice financier et fiscal.
          </p>
        </div>

        {/* Boîte de simulation épurée */}
        <div className="bg-cream-100 rounded-3xl md:rounded-4xl p-6 sm:p-10 border border-cream-300 shadow-float">
          
          {/* Sélecteur de type d'appartement */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { id: 'studio', name: 'Studio', desc: '~22 m²', defaultRent: 520 },
              { id: 't2', name: 'T2', desc: '~42 m²', defaultRent: 750 },
              { id: 't3', name: 'T3 / Coloc', desc: '~68 m²', defaultRent: 1100 }
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setPropertyType(t.id as any);
                  setRent(t.defaultRent);
                }}
                className={`py-3.5 px-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  propertyType === t.id
                    ? 'bg-sage-600 text-white border-sage-600 shadow-sm'
                    : 'bg-white text-charcoal-800 border-cream-300 hover:border-sage-300'
                }`}
              >
                <span className="text-sm font-bold block">{t.name}</span>
                <span className={`text-[11px] block mt-0.5 ${propertyType === t.id ? 'text-cream-200' : 'text-slate-500'}`}>
                  {t.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Curseur de loyer actuel épuré */}
          <div className="bg-white rounded-2xl p-5 border border-cream-200 mb-8">
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="rent-input" className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Loyer nu mensuel estimé
              </label>
              <span className="text-lg font-extrabold text-charcoal-900">
                {rent} € / mois
              </span>
            </div>
            <input
              id="rent-input"
              type="range"
              min="400"
              max="2000"
              step="25"
              value={rent}
              onChange={(e) => setRent(Number(e.target.value))}
              className="w-full h-2 bg-cream-200 rounded-lg appearance-none cursor-pointer accent-terracotta-600"
            />
          </div>

          {/* Grille des résultats limpides */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            
            <div className="bg-white rounded-2xl p-5 border border-cream-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                <span>Surloyer annuel</span>
                <TrendingUp className="w-4 h-4 text-terracotta-600" />
              </div>
              <p className="text-2xl font-black text-charcoal-900">
                +{annualUplift.toLocaleString('fr-FR')} €
              </p>
              <p className="text-[11px] text-sage-600 font-semibold mt-1">
                soit +{monthlyGain} € chaque mois
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-cream-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                <span>Amortissement LMNP</span>
                <ShieldCheck className="w-4 h-4 text-sage-600" />
              </div>
              <p className="text-2xl font-black text-charcoal-900">
                ~{annualTaxSavings} €
              </p>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Économie d'impôt par an
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-cream-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                <span>Gain net cumulé (3 ans)</span>
                <Sparkles className="w-4 h-4 text-terracotta-500" />
              </div>
              <p className="text-2xl font-black text-sage-700">
                +{totalThreeYears.toLocaleString('fr-FR')} €
              </p>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Surloyer + fiscalité déduite
              </p>
            </div>

          </div>

          {/* Ligne CO2 & Bouton de report */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-cream-200">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Leaf className="w-4 h-4 text-sage-600 shrink-0" />
              <span>
                <strong>{co2Saved} kg de CO2 économisés</strong> grâce au réemploi de mobilier à Lyon.
              </span>
            </div>

            <button
              type="button"
              onClick={handleApply}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-terracotta transition-all cursor-pointer"
            >
              <span>Appliquer à mon devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
