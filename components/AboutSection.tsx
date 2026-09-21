'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, Recycle, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenEstimate?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimate }) => {
  const pillarsSEO = [
    {
      id: 'amenagement',
      badge: '01 • Sérénité & Clé en main',
      title: 'Aménagement appartement clé en main',
      lead: 'Une solution tout-en-un pour meubler sans effort studios, appartements et locaux professionnels.',
      description:
        'Conçu pour les propriétaires bailleurs (LMNP), locataires, particuliers et professionnels à Lyon, notre service d’aménagement d’appartement clé en main élimine toute charge mentale. Nous sélectionnons des ensembles de meubles coordonnés et parfaitement proportionnés à votre surface. Vous gagnez un temps précieux et valorisez immédiatement votre bien immobilier pour une mise en location rapide et sereine.',
      icon: Sparkles,
      iconColor: 'bg-[#C55D45]/10 text-[#C55D45]',
      tags: ['Studios, T2, T3 & Colocations', 'Conformité fiscale LMNP', 'Prêt à vivre'],
    },
    {
      id: 'mobilier',
      badge: '02 • Circularité & Écologie',
      title: 'Mobilier reconditionné et seconde main',
      lead: 'L’élégance d’un intérieur unique avec une empreinte écologique divisée par cinq.',
      description:
        'Chaque meuble est minutieusement choisi pour son esthétique, sa qualité de fabrication et son parfait état d’usage. En privilégiant le mobilier reconditionné et de seconde main, vous faites le choix de l’économie circulaire locale : jusqu’à 40 % d’économies par rapport au mobilier neuf, des matériaux nobles et durables, et plus d’une tonne de CO₂ évitée par aménagement.',
      icon: Recycle,
      iconColor: 'bg-emerald-500/10 text-emerald-700',
      tags: ['Bois massif & finitions durables', 'Sélection soignée & contrôlée', 'Économie circulaire locale'],
    },
    {
      id: 'installation',
      badge: '03 • Logistique & Confort',
      title: 'Installation et livraison de meubles',
      lead: 'Prise en charge logistique intégrale de A à Z dans toute la métropole de Lyon.',
      description:
        'Oubliez la location d’utilitaire, le port de charges lourdes et les notices de montage complexes. Notre équipe assure la livraison de vos meubles directement à l’étage dans tous les arrondissements de Lyon et ses communes voisines. Nous réalisons le montage complet et l’assemblage soigné de chaque pièce, puis évacuons l’intégralité des protections pour laisser un espace impeccable.',
      icon: Truck,
      iconColor: 'bg-[#063B39]/10 text-[#063B39]',
      tags: ['Livraison à l’étage avec rdv', 'Montage & assemblage soignés', 'Espace propre et zéro déchet'],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="a-propos" className="py-20 md:py-32 relative bg-stone-100/50 border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête SEO : H2 & Paragraphe d'autorité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block mb-3 font-display">
            Expertise & Démarche Circulaire
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#063B39] tracking-tight leading-tight">
            Aménagement d’appartement clé en main & mobilier reconditionné
          </h2>
          <p className="text-base sm:text-lg text-[#063B39]/75 mt-5 leading-relaxed font-normal">
            Meubles&Moi réinvente l’ameublement à Lyon en associant la simplicité d’un service clé en main complet
            à la durabilité du mobilier reconditionné de seconde main. Un aménagement esthétique, économique et
            écoresponsable, livré et monté sans le moindre effort de votre part.
          </p>
        </motion.div>

        {/* 3 Blocs thématiques détaillés */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {pillarsSEO.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icône */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconColor} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#063B39]/50">
                      {item.badge}
                    </span>
                  </div>

                  {/* Titre thématique H3 */}
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#063B39] mb-3 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Accroche */}
                  <p className="text-xs sm:text-sm font-semibold text-[#063B39]/80 mb-3 leading-snug">
                    {item.lead}
                  </p>

                  {/* Descriptif détaillé SEO */}
                  <p className="text-xs sm:text-sm text-[#063B39]/65 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags clés */}
                <div className="pt-5 border-t border-[#063B39]/8 space-y-2">
                  {item.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#063B39]/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C55D45] shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bannière de réassurance & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 bg-[#063B39] text-[#FAF8F5] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block font-display">
              Un projet d’aménagement à Lyon ?
            </span>
            <p className="text-lg sm:text-xl font-display font-bold text-white">
              Obtenez une estimation personnalisée et recevez une proposition adaptée sous 24h à 48h.
            </p>
            <p className="text-xs sm:text-sm text-stone-300">
              Sans engagement • Conseils d’agencement • Service complet à Lyon et toute sa métropole.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              if (onOpenEstimate) onOpenEstimate();
              else {
                const el = document.getElementById('devis');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Estimer mon aménagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
