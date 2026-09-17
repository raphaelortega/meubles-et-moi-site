'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MessageSquareText, Search, Truck, ArrowRight, Check } from 'lucide-react';

interface MethodProps {
  onOpenEstimate?: () => void;
}

export const Method: React.FC<MethodProps> = ({ onOpenEstimate }) => {
  const steps = [
    {
      num: '01',
      title: 'Échange sur vos besoins',
      subtitle: 'Surface, style & budget',
      desc: 'En quelques clics ou par téléphone, nous précisons vos attentes : type de bien, surface, ambiance déco souhaitée (vintage chaleureux, minimaliste scandinave, contemporain) et date clé.',
      icon: MessageSquareText,
      tag: '10 min • Sans engagement',
      color: 'text-[#063B39] bg-[#063B39]/5',
      accent: 'border-[#063B39]/10',
      bullets: ['Conseil aménagement personnalisé', 'Respect strict de votre budget', 'Accompagnement dédié à Lyon']
    },
    {
      num: '02',
      title: 'Sélection & sourcing sur-mesure',
      subtitle: 'Sourcing selon vos critères',
      desc: 'Nous dénichons chaque meuble en nous appuyant fidèlement sur tous les détails que vous nous avez donnés : l’ambiance souhaitée, les dimensions de vos pièces, vos équipements déjà en place et votre budget. Nous sélectionnons du mobilier de seconde main en bon état, parfaitement adapté à vos besoins.',
      icon: Search,
      tag: 'Proposition sous 24h à 48h',
      color: 'text-[#C55D45] bg-[#C55D45]/10',
      accent: 'border-[#C55D45]/20',
      bullets: ['Mobilier choisi selon vos critères', 'Pièces de seconde main en bon état', 'Harmonie des couleurs et matières']
    },
    {
      num: '03',
      title: 'Livraison & installation complète',
      subtitle: 'Clé en main en quelques jours',
      desc: 'Notre équipe logistique livre à l’étage, monte et installe l’ensemble de votre mobilier de façon soignée, puis évacue tous les emballages pour laisser votre espace parfaitement propre.',
      icon: Truck,
      tag: 'Installé en 48h chrono',
      color: 'text-emerald-700 bg-emerald-500/10',
      accent: 'border-emerald-500/20',
      bullets: ['Livraison à l’étage & montage complet', 'Zéro carton, espace propre et impeccable', 'Prêt à habiter ou à louer']
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="methode" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block mb-3">
            Processus Épuré
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#063B39] tracking-tight leading-tight">
            Comment ça marche
          </h2>
          <p className="text-base sm:text-lg text-[#063B39]/70 mt-4 leading-relaxed font-normal">
            Trois étapes fluides et transparentes pour meubler votre intérieur sans y passer vos week-ends.
          </p>
        </motion.div>

        {/* 3 Étapes en cascade */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Pastille numéro & icône */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-2xl font-black text-[#063B39]/20 group-hover:text-[#C55D45] transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${step.color} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Titre & sous-titre */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#C55D45] block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#063B39] tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#063B39]/70 leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2 mb-6">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#063B39]/80">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tag étape */}
                <div className="pt-4 border-t border-[#063B39]/8 flex items-center justify-between text-xs font-bold text-[#063B39]/70">
                  <span>{step.tag}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C55D45] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action rapide sous les étapes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => {
              if (onOpenEstimate) onOpenEstimate();
              else {
                const el = document.getElementById('devis');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta transition-all cursor-pointer hover:scale-105"
          >
            <span>Démarrer l'étape 1 : Estimer mon projet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
