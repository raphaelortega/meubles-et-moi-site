import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center font-bold text-2xl mb-6">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
        Page introuvable
      </h1>
      <p className="text-slate-600 max-w-md mb-8 text-sm sm:text-base">
        La page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sage-600 text-white font-bold text-sm hover:bg-sage-700 transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour à l’accueil Meubles&moi</span>
      </Link>
    </div>
  );
}
