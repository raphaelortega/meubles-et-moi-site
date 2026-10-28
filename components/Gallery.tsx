'use client';

import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Sparkles, MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { co2PourRealisation, co2Ancre } from '@/data/co2';

interface Project {
  id: string;
  title: string;
  location: string;
  surface?: string;
  style: string;
  image: string;
  description: string;
  highlights: string[];
}

// L'ordre du tableau est l'ordre d'affichage dans le carrousel.
// Le CO2 évité vient de data/co2.ts (clé = id de la réalisation).
const PROJECTS: Project[] = [
  {
    id: 'haussmannien-contemporain',
    title: 'Haussmannien & Contemporain',
    location: 'Paris',
    style: 'Moulures, parquet en chevrons et lignes contemporaines',
    image: '/images/realisations/realisation-4.jpg',
    description: 'Un séjour haussmannien lumineux avec un canapé en velours bleu nuit, une table ronde en bois, des chaises enveloppantes et une table basse bois et métal.',
    highlights: ['Canapé velours bleu nuit', 'Table ronde en bois', 'Chaises enveloppantes', 'Table basse bois & métal'],
  },
  {
    id: 'verriere-atelier',
    title: 'Moderne & Esprit Loft',
    location: 'Lyon',
    style: 'Style moderne, bois clair et touches de noir',
    image: '/images/realisations/realisation-1.jpg',
    description: 'Un salon moderne et lumineux avec une verrière, un canapé confortable, une table basse pratique et un meuble TV en bois.',
    highlights: ['Canapé confortable', 'Table basse pratique', 'Meuble TV en bois', 'Verrière noire'],
  },
  {
    id: 'scandinave-lumineux',
    title: 'Scandinave & Lumineux',
    location: 'Lyon',
    style: 'Couleurs douces, bois clair et ambiance chaleureuse',
    image: '/images/realisations/realisation-2.jpg',
    description: 'Un espace clair et apaisant avec un canapé gris confortable, une grande étagère en bois, un meuble TV blanc et une table basse pratique.',
    highlights: ['Canapé gris confortable', 'Grande étagère en bois', 'Meuble TV blanc', 'Table basse pratique'],
  },
  {
    id: 'retro-chic',
    title: 'Vintage & Bois Massif',
    location: 'Lyon',
    style: 'Meubles vintage en bois et finitions soignées',
    image: '/images/realisations/realisation-3.jpg',
    description: 'Un salon plein de charme avec une belle table en bois massif, des chaises rétro confortables, un meuble TV en bois et une table basse en verre.',
    highlights: ['Table en bois massif', 'Chaises rétro confortables', 'Meuble TV en bois', 'Table basse en verre'],
  },
  {
    id: 'nordique-convivial',
    title: 'Nordique & Convivial',
    location: 'Villeurbanne',
    surface: '42 m²',
    style: 'Chaises coque, contrastes noir et blanc et touches de rouge',
    image: '/images/realisations/realisation-5.jpg',
    description: 'Un séjour clair et fonctionnel avec un canapé gris confortable, une table noire, des chaises coque d’inspiration scandinave et des coussins colorés.',
    highlights: ['Canapé gris confortable', 'Table noire', 'Chaises coque scandinaves', 'Coussins vichy rouges'],
  },
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

export const Gallery: React.FC = () => {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const project = PROJECTS[index];
  const co2 = co2PourRealisation(project.id);
  const total = PROJECTS.length;

  const paginate = useCallback((step: number) => {
    setSlide(([current]) => [(current + step + total) % total, step]);
  }, [total]);

  const goTo = (target: number) => {
    setSlide(([current]) => [target, target > current ? 1 : -1]);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) paginate(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) paginate(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') paginate(1);
    if (e.key === 'ArrowLeft') paginate(-1);
  };

  return (
    <section id="galerie" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête de section simplifié */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-18"
        >
          <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block mb-3">
            Direction Artistique & Réalisations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#063B39] tracking-tight leading-tight">
            La seconde main a du caractère. La preuve en images.
          </h2>
          <p className="text-base sm:text-lg text-[#063B39]/70 mt-4 leading-relaxed font-normal">
            Chaque logement a sa personnalité. Nous chinons et composons des intérieurs harmonieux, chaleureux et prêts à vivre, sans acheter un seul meuble neuf en kit.
          </p>
        </motion.div>

        {/* Carrousel des réalisations : une grande carte à la fois */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-roledescription="carrousel"
          aria-label="Nos réalisations"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="outline-none focus-visible:ring-2 focus-visible:ring-[#C55D45]/40 rounded-3xl"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                aria-roledescription="diapositive"
                aria-label={`${index + 1} sur ${total} : ${project.title}`}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm grid grid-cols-1 md:grid-cols-[1.05fr_1fr] cursor-grab active:cursor-grabbing select-none"
              >
                {/* Grande photo au format portrait */}
                <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[520px] lg:min-h-[580px] overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={`Projet d’aménagement intérieur Meubles&Moi : ${project.title} (${project.style})`}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badge en haut à droite */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide uppercase shadow-float bg-white/95 backdrop-blur-md text-[#063B39] flex items-center gap-1.5 border border-black/5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Projet Réalisé</span>
                    </span>
                  </div>

                  {/* Localisation et titre sur l'image */}
                  <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#FAF8F5]/90 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C55D45]" />
                      <span>{project.location}{project.surface ? ` • ${project.surface}` : ''}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Détails : Direction artistique & pièces phares */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center gap-6 md:gap-8">
                  <div className="space-y-4">
                    <span className="text-[#C55D45] font-bold uppercase tracking-wider text-xs block">
                      {project.style}
                    </span>
                    <p className="text-sm sm:text-base text-[#063B39]/75 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Mobilier revalorisé */}
                    <div className="pt-2">
                      <span className="text-[11px] uppercase font-bold text-[#063B39]/50 block mb-2.5">
                        Mobilier chiné & soigné :
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] text-[#063B39] text-xs sm:text-sm font-medium border border-stone-200/80"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Impact CO2 (seulement si l'installation a des données) & réassurance */}
                  <div className="pt-5 border-t border-[#063B39]/8 flex flex-wrap items-end justify-between gap-x-4 gap-y-3 text-[#063B39]">
                    {co2 && (
                      <a
                        href={`/methode-co2#${co2Ancre(project.id)}`}
                        onPointerDownCapture={(e) => e.stopPropagation()}
                        className="group/co2 flex items-start gap-2.5 rounded-xl -m-1.5 p-1.5 transition-colors hover:bg-[#FAF8F5]"
                      >
                        <span className="mt-0.5 w-8 h-8 shrink-0 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                        </span>
                        <span className="block">
                          <span className="block text-sm sm:text-base font-bold text-[#063B39] leading-snug underline decoration-[#063B39]/20 underline-offset-4 group-hover/co2:decoration-[#C55D45]">
                            {co2}
                          </span>
                          <span className="mt-0.5 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#C55D45] group-hover/co2:text-[#063B39] transition-colors">
                            Voir comment on calcule
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/co2:translate-x-0.5" aria-hidden="true" />
                          </span>
                        </span>
                      </a>
                    )}
                    <span className="ml-auto text-xs text-[#063B39]/60 font-medium">Installé en 48h</span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Flèches posées sur la photo (zone photo : pleine largeur sur mobile, colonne de gauche dès md) */}
            <div className="absolute inset-x-0 top-0 aspect-[3/4] md:aspect-auto md:bottom-0 md:right-auto md:w-[51.2%] flex items-center justify-between px-3 sm:px-4 pointer-events-none z-20">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Réalisation précédente"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-float border border-black/5 text-[#063B39] flex items-center justify-center pointer-events-auto transition-all duration-200 hover:bg-[#063B39] hover:text-white active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Réalisation suivante"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-float border border-black/5 text-[#063B39] flex items-center justify-center pointer-events-auto transition-all duration-200 hover:bg-[#063B39] hover:text-white active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation : points et compteur */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Voir la réalisation ${i + 1} : ${p.title}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-[#C55D45]' : 'w-2 bg-[#063B39]/20 hover:bg-[#063B39]/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-xs font-semibold text-[#063B39]/50 tabular-nums" aria-live="polite">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
