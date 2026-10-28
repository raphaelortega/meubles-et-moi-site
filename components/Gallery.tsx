'use client';

import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Leaf, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { co2PourRealisation } from '@/data/co2';
import { REALISATIONS as PROJECTS } from '@/data/realisations';

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
            Chaque logement a sa personnalité. Nous chinons et composons des intérieurs harmonieux, chaleureux et prêts à vivre, avec du mobilier chiné, de seconde main ou de déstockage.
          </p>
        </motion.div>

        {/* Carrousel des réalisations : une grande photo à la fois, titre posé dessus */}
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
          className="outline-none focus-visible:ring-2 focus-visible:ring-[#C55D45]/40 rounded-[2rem]"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-sm bg-[#063B39] aspect-[3/4] sm:aspect-[16/9]">
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
                className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
              >
                <picture>
                  <source media="(min-width: 640px)" srcSet={project.imageLarge} />
                  <img
                    src={project.imageMobile}
                    alt={project.alt}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B39]/95 via-[#063B39]/20 via-40% to-transparent pointer-events-none" />

                {/* Localisation, titre et pastilles sur la photo */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10 text-white">
                  <p className="flex items-center gap-2 text-xs sm:text-base font-medium text-white/90 mb-1.5 sm:mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    Réalisation réelle • {project.location}
                  </p>
                  <h3 className="font-display text-[1.35rem] sm:text-3xl lg:text-[2.3rem] font-extrabold leading-tight max-w-4xl">
                    {project.title}
                  </h3>
                  <div className="mt-3 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                    <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[13px] sm:text-base font-semibold bg-white/15 backdrop-blur-md border border-white/40">
                      Installé en 48h
                    </span>
                    <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[13px] sm:text-base font-semibold bg-[#C55D45]">
                      Chiné & valorisé
                    </span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Flèches posées sur la photo */}
            <div className="absolute inset-x-0 top-0 h-[50%] sm:h-[62%] flex items-center justify-between px-3 sm:px-5 pointer-events-none z-20">
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

          {/* Sous la photo : CO2e évité (si données) et navigation */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="min-h-[3.25rem]">
              {co2 && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 w-9 h-9 shrink-0 rounded-full bg-emerald-50 border border-emerald-200/70 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-base sm:text-lg font-extrabold text-[#063B39] leading-snug">{co2}</p>
                    <a
                      href={`/methode-co2#${project.id}`}
                      className="group/co2 mt-0.5 inline-flex items-center gap-1 text-sm font-semibold text-[#C55D45] hover:text-[#063B39] transition-colors"
                    >
                      Voir comment on l’a estimé
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/co2:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation : points et compteur */}
            <div className="flex items-center justify-center sm:justify-end gap-4">
              <div className="flex items-center gap-2">
                {PROJECTS.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Voir la réalisation ${i + 1} : ${p.location}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-7 bg-[#C55D45]' : 'w-2 bg-[#063B39]/20 hover:bg-[#063B39]/40'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#063B39]/50 tabular-nums" aria-live="polite">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
