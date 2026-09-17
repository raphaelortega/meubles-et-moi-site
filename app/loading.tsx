import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center px-4 text-center">
      <Loader2 className="w-10 h-10 text-sage-600 animate-spin mb-4" />
      <p className="text-slate-700 font-semibold text-sm">
        Chargement de Meubles&moi...
      </p>
    </div>
  );
}
