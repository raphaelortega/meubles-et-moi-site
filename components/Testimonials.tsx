import React from 'react';
import { Star, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Thomas V.',
      location: 'Lyon 6ème (Masséna)',
      property: 'T2 rénové • 44 m²',
      quote: 'Mon T2 a été loué à la première visite après aménagement, avec +240€ de loyer par rapport à l’ancien locataire. Facture LMNP prise en compte sans accroc par mon expert-comptable.',
      metric: '+240 € / mois',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Claire & Marc D.',
      location: 'Villeurbanne (Gratte-Ciel)',
      property: 'Studio étudiant • 23 m²',
      quote: 'Zéro week-end perdu à monter des meubles. Meubles&moi a tout posé en 36h : literie hôtelière neuve parfaite et pièces chinées qui donnent un cachet fou à l’appartement.',
      metric: 'Aménagé en 36h',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Antoine L.',
      location: 'Lyon 7ème (Jean Macé)',
      property: 'Colocation T4 • 76 m²',
      quote: 'Le mobilier en bois massif reconditionné est ultra-robuste pour une colocation. Les locataires adorent la démarche écoresponsable et mon cash-flow est maximisé.',
      metric: '+450 € / mois',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">
            Avis Bailleurs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Ce que disent nos clients <br className="hidden sm:inline" />
            <span className="text-sage-600 font-serif font-normal italic">bailleurs à Lyon.</span>
          </h2>
        </div>

        {/* 3 Cartes Épurées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-cream-100 rounded-3xl p-7 border border-cream-300/80 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-terracotta-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-charcoal-800 text-sm leading-relaxed mb-6 italic">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-10 h-10 rounded-full object-cover border border-white shadow-xs"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-charcoal-900 leading-tight">
                      {r.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-terracotta-500" />
                      {r.location}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-extrabold text-sage-700 bg-white px-2.5 py-1 rounded-full border border-cream-200">
                  {r.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
