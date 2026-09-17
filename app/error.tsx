'use client';

import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        Une erreur est survenue
      </h1>
      <p className="text-slate-600 max-w-md mb-8 text-sm sm:text-base">
        Nous n’avons pas pu charger cette page correctement. Veuillez réessayer.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-terracotta-600 text-white font-bold text-sm hover:bg-terracotta-700 transition-colors shadow-sm cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Réessayer</span>
      </button>
    </div>
  );
}
