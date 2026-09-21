'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Packs } from '@/components/Packs';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { QuoteModal } from '@/components/QuoteModal';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function PacksPageClient() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState<{ pack: string; type: string } | null>(null);

  const handleOpenEstimate = () => {
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  const handleSelectPack = (packName: string, propertyType: string) => {
    setSelectedPack({ pack: packName, type: propertyType });
    setIsEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#063B39] font-sans antialiased selection:bg-[#063B39] selection:text-white">
      <Header onOpenEstimate={handleOpenEstimate} />

      <main className="relative overflow-hidden pt-32 md:pt-40">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200/80 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C55D45]" />
              <span className="text-xs font-semibold text-[#063B39]">Packs complets • Mobilier reconditionné</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#063B39] tracking-tight leading-[1.1] mb-6">
              Packs d’ameublement clé en main & écoresponsables
            </h1>
            <p className="text-base sm:text-lg text-[#063B39]/80 font-normal leading-relaxed">
              Que vous soyez particulier, locataire, propriétaire bailleur ou professionnel : découvrez nos solutions complètes de mobilier de seconde main soigné, livrées et montées sur place.
            </p>
          </motion.div>
        </section>

        <Packs onSelectPack={handleSelectPack} />

        <FinalCTA onOpenEstimate={handleOpenEstimate} />
      </main>

      <Footer />

      <QuoteModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        defaultType={selectedPack?.type}
      />
    </div>
  );
}
