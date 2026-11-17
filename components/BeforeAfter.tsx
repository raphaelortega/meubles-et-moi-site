'use client';

import React, { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight, MapPin } from 'lucide-react';

interface Comparaison {
  id: string;
  titre: string;
  lieu: string;
  avant: string;
  apres: string;
}

// Photos dans public/images/avant-apres/ : même cadrage 4:5 pour l'avant et l'après
const COMPARAISONS: Comparaison[] = [
  {
    id: 'coin-nuit',
    titre: 'Coin nuit',
    lieu: 'Lyon',
    avant: '/images/avant-apres/coin-nuit-avant.jpg',
    apres: '/images/avant-apres/coin-nuit-apres.jpg',
  },
  {
    id: 'piece-de-vie',
    titre: 'Coin nuit, côté fenêtre',
    lieu: 'Lyon',
    avant: '/images/avant-apres/piece-de-vie-avant.jpg',
    apres: '/images/avant-apres/piece-de-vie-apres.jpg',
  },
];

function CurseurAvantApres({ comparaison }: { comparaison: Comparaison }) {
  const [position, setPosition] = useState(50);
  const conteneurRef = useRef<HTMLDivElement>(null);
  const actifRef = useRef(false);

  const deplacer = useCallback((clientX: number) => {
    const rect = conteneurRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={conteneurRef}
        className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-200 select-none cursor-ew-resize touch-pan-y shadow-sm border border-stone-200/80"
        onPointerDown={(e) => {
          actifRef.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          deplacer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (actifRef.current) deplacer(e.clientX);
        }}
        onPointerUp={() => (actifRef.current = false)}
        onPointerCancel={() => (actifRef.current = false)}
      >
        {/* Après (fond) */}
        <img
          src={comparaison.apres}
          alt={`${comparaison.titre} après l’aménagement Meubles&Moi`}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Avant (découpé à gauche du curseur) */}
        <img
          src={comparaison.avant}
          alt={`${comparaison.titre} avant l’aménagement`}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {/* Étiquettes */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[#063B39]/85 text-white backdrop-blur-md pointer-events-none">
          Avant
        </span>
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[#C55D45] text-white pointer-events-none">
          Après
        </span>

        {/* Ligne et poignée */}
        <div className="absolute inset-y-0 pointer-events-none" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-float border border-black/5 flex items-center justify-center text-[#063B39]">
            <ChevronsLeftRight className="w-5 h-5" />
          </div>
        </div>

        {/* Curseur accessible au clavier (flèches gauche / droite) */}
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(position)}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Comparer avant et après : ${comparaison.titre}`}
          className="sr-only"
        />
      </div>

      <p className="flex items-center gap-1.5 text-sm font-semibold text-[#063B39]">
        <MapPin className="w-4 h-4 text-[#C55D45]" />
        {comparaison.titre} • {comparaison.lieu}
      </p>
    </div>
  );
}

export const BeforeAfter: React.FC = () => {
  return (
    <section id="avant-apres" className="pb-20 md:pb-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <span className="text-xs uppercase font-extrabold text-[#C55D45] tracking-widest block mb-3">
            Avant / Après
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#063B39] tracking-tight leading-tight">
            Du logement vide au logement prêt à vivre.
          </h2>
          <p className="text-base sm:text-lg text-[#063B39]/70 mt-4 leading-relaxed">
            Faites glisser le curseur pour voir la transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {COMPARAISONS.map((c) => (
            <CurseurAvantApres key={c.id} comparaison={c} />
          ))}
        </div>
      </div>
    </section>
  );
};
