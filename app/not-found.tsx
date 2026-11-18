import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f4f0c9] flex flex-col items-center justify-center px-4 text-center font-sans">
      <div className="w-16 h-16 rounded-2xl bg-[#063b39] text-[#f4f0c9] flex items-center justify-center font-display font-bold text-2xl mb-6">
        404
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#063b39] tracking-tight mb-3">
        Page introuvable
      </h1>
      <p className="text-[#063b39]/75 max-w-md mb-8 text-sm sm:text-base">
        La page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c55d45] text-white font-display font-bold text-sm hover:bg-[#b04f38] transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour à l’accueil Meubles&amp;moi</span>
      </Link>
    </div>
  );
}
