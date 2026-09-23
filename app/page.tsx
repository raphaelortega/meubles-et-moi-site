'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pillars } from '@/components/Pillars';
import { Method } from '@/components/Method';
import { Gallery } from '@/components/Gallery';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { QuoteModal } from '@/components/QuoteModal';

export default function Home() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const handleOpenEstimate = () => {
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#063B39] font-sans antialiased selection:bg-[#063B39] selection:text-white">
      {/* Floating Pill Sticky Header */}
      <Header onOpenEstimate={handleOpenEstimate} />

      <main className="relative overflow-hidden">
        {/* SECTION 1 : HERO HEADER */}
        <Hero onOpenEstimate={handleOpenEstimate} />

        {/* SECTION 2 : LA PROMESSE EN 3 PILIERS */}
        <Pillars onOpenEstimate={handleOpenEstimate} />

        {/* SECTION 3 : COMMENT ÇA MARCHE */}
        <Method onOpenEstimate={handleOpenEstimate} />

        {/* SECTION 5 : GALERIE / AVANT-APRÈS */}
        <Gallery />

        {/* SECTION 6 : QUESTIONS FRÉQUENTES (FAQ) */}
        <FAQ />

        {/* SECTION 7 : CALL-TO-ACTION FINAL */}
        <FinalCTA onOpenEstimate={handleOpenEstimate} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL ESTIMATEUR INTERACTIF */}
      <QuoteModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
      />
    </div>
  );
}
