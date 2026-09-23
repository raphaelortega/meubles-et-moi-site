'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  style: string;
  image: string;
  description: string;
  highlights: string[];
  co2: string;
}

const PROJECTS: Project[] = [
  {
    id: 'verriere-atelier',
    title: 'Moderne & Esprit Loft',
    location: 'Lyon',
    style: 'Style moderne, bois clair et touches de noir',
    image: '/images/realisations/realisation-1.jpg',
    description: 'Un salon moderne et lumineux avec une verrière, un canapé confortable, une table basse pratique et un meuble TV en bois.',
    highlights: ['Canapé confortable', 'Table basse pratique', 'Meuble TV en bois', 'Verrière noire'],
    co2: '1 250 kg CO₂ évités',
  },
  {
    id: 'scandinave-lumineux',
    title: 'Scandinave & Lumineux',
    location: 'Lyon',
    style: 'Couleurs douces, bois clair et ambiance chaleureuse',
    image: '/images/realisations/realisation-2.jpg',
    description: 'Un espace clair et apaisant avec un grand canapé d’angle gris, une grande étagère en bois et une petite table basse élégante.',
    highlights: ['Grand canapé d’angle', 'Grande étagère en bois', 'Table basse en bois', 'Tapis chaleureux'],
    co2: '980 kg CO₂ évités',
  },
  {
    id: 'retro-chic',
    title: 'Vintage & Bois Massif',
    location: 'Lyon',
    style: 'Meubles vintage en bois et finitions soignées',
    image: '/images/realisations/realisation-3.jpg',
    description: 'Un salon plein de charme avec une belle table en bois massif, des chaises rétro confortables, un meuble TV en bois et une table basse en verre.',
    highlights: ['Table en bois massif', 'Chaises rétro confortables', 'Meuble TV en bois', 'Table basse en verre'],
    co2: '1 420 kg CO₂ évités',
  },
];

export const Gallery: React.FC = () => {
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

        {/* Grille des 3 réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Conteneur Image au format portrait adapté aux photos */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={`Projet d’aménagement intérieur Meubles&Moi : ${project.title} (${project.style})`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
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
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <div className="flex items-center gap-1.5 text-xs text-[#FAF8F5]/90 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C55D45]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Détails : Direction artistique & pièces phares */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[#C55D45] font-bold uppercase tracking-wider text-[11px] block">
                    {project.style}
                  </span>
                  <p className="text-xs text-[#063B39]/75 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Mobilier revalorisé */}
                  <div className="pt-2">
                    <span className="text-[11px] uppercase font-bold text-[#063B39]/50 block mb-2">
                      Mobilier chiné & soigné :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[#063B39] text-xs font-medium border border-stone-200/80"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Impact CO2 & Réassurance en bas de carte */}
                <div className="pt-4 border-t border-[#063B39]/8 flex items-center justify-between text-xs font-semibold text-[#063B39]">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{project.co2}</span>
                  </div>
                  <span className="text-[11px] text-[#063B39]/60 font-medium">Installé en 48h</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
