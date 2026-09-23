'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { PiggyBank, Leaf, KeyRound, CheckCircle2, ArrowRight } from 'lucide-react';

interface PillarsProps {
  onOpenEstimate?: () => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onOpenEstimate }) => {
  const pillars = [
    {
      id: 'economique',
      category: '01 • Budget optimisé',
      title: 'Économique',
      desc: 'Des économies massives par rapport au neuf sans rogner sur le style.',
      details: 'Nous dénichons des meubles de qualité, robustes et actuels, à un tarif bien inférieur aux grandes enseignes. Un aménagement complet et soigné sans exploser votre enveloppe.',
      stat: '-40%',
      statLabel: 'par rapport à du mobilier neuf',
      icon: PiggyBank,
      badgeColor: 'bg-[#C55D45]/10 text-[#C55D45]',
      highlights: ['Bois massifs & finitions durables', 'Éligible 100% amortissement LMNP', 'Meilleur rapport style/prix'],
    },
    {
      id: 'ecoresponsable',
      category: '02 • Impact circulaire',
      title: 'Écoresponsable',
      desc: 'Sourcing 100 % seconde main pour réduire l\'empreinte carbone et revaloriser le mobilier.',
      details: 'Chaque pièce a déjà son histoire. Nous sélectionnons du mobilier directement en bon état d’usage pour éviter la surproduction.',
      stat: '1,2 t',
      statLabel: 'de CO₂ évitée par appartement',
      icon: Leaf,
      badgeColor: 'bg-emerald-500/10 text-emerald-700',
      highlights: ['100% réemploi & zéro déchet neuf', 'Mobilier sélectionné en bon état', 'Circuit court à Lyon'],
    },
    {
      id: 'zero-effort',
      category: '03 • Sérénité absolue',
      title: 'Zéro effort',
      desc: 'Sélection, transport, montage et agencement complet. Vous récupérez juste les clés.',
      details: 'Fini le marathon des magasins et les notices de montage suédoises. Notre équipe gère tout de A à Z en 48h chrono.',
      stat: '48h',
      statLabel: 'd\'installation complète sur place',
      icon: KeyRound,
      badgeColor: 'bg-[#063B39]/10 text-[#063B39]',
      highlights: ['Zéro carton, zéro tournevis', 'Mobilier installé & espace propre', 'Prêt à habiter ou à louer'],
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
    <section id="promesse" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section épuré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block mb-3">
            Pourquoi choisir Meubles&moi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#063B39] tracking-tight leading-tight">
            Le bon goût n'a plus besoin de coûter cher ou d'abîmer la planète.
          </h2>
          <p className="text-base sm:text-lg text-[#063B39]/70 mt-4 leading-relaxed font-normal">
            Une formule pensée pour les propriétaires exigeants et les citadins modernes qui veulent une solution radicalement plus simple.
          </p>
        </motion.div>

        {/* Grille 3 Piliers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Ligne d'accent lumineuse au hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C55D45]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icône & Catégorie */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.badgeColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#063B39]/50">
                      {p.category}
                    </span>
                  </div>

                  {/* Titre & Description */}
                  <h3 className="font-display text-2xl font-extrabold text-[#063B39] mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#063B39]/80 font-semibold mb-3 leading-snug">
                    {p.desc}
                  </p>
                  <p className="text-xs sm:text-sm text-[#063B39]/60 leading-relaxed mb-6">
                    {p.details}
                  </p>
                </div>

                {/* Chiffre clé & Points forts */}
                <div className="pt-6 border-t border-[#063B39]/8 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl font-black text-[#063B39]">
                      {p.stat}
                    </span>
                    <span className="text-xs text-[#063B39]/70 font-medium">
                      {p.statLabel}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#063B39]/75 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C55D45] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Bannière bulle verte de réassurance & CTA */}
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
            <span>Estimer mon projet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
