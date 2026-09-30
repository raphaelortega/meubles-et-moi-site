'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pillars } from '@/components/Pillars';
import { Method } from '@/components/Method';
import { Gallery } from '@/components/Gallery';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { QuoteModal, SimulatorData } from '@/components/QuoteModal';

export default function Home() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [simulatorData, setSimulatorData] = useState<SimulatorData | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getParam = (key: string): string | null => {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get(key)) return searchParams.get(key);

      if (window.location.hash && window.location.hash.includes('?')) {
        const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?') + 1);
        const hashParams = new URLSearchParams(hashQuery);
        if (hashParams.get(key)) return hashParams.get(key);
      }
      return null;
    };

    const type = getParam('type');
    const surfaceStr = getParam('surface');
    const cp = getParam('cp');
    const loyerNu = getParam('loyer_nu');
    const loyerMeuble = getParam('loyer_meuble');
    const utmSource = getParam('utm_source');
    const prenom = getParam('prenom');

    const hasSimulatorParams = Boolean(type || surfaceStr || cp || loyerNu || loyerMeuble || utmSource);
    const hasEstimationAnchor = window.location.hash.includes('estimation');

    if (hasSimulatorParams || hasEstimationAnchor) {
      if (hasSimulatorParams) {
        setSimulatorData({
          type: type || undefined,
          surface: surfaceStr ? Number(surfaceStr) : undefined,
          cp: cp || undefined,
          loyerNu: loyerNu || undefined,
          loyerMeuble: loyerMeuble || undefined,
          utmSource: utmSource || undefined,
          prenom: prenom || undefined,
        });
      }

      // Défilement fluide vers la section #estimation
      const scrollToEstimation = () => {
        const elem = document.getElementById('estimation');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollTimer = setTimeout(scrollToEstimation, 150);

      // Ouverture de la modale d'estimation pré-remplie
      const modalTimer = setTimeout(() => {
        setIsEstimateModalOpen(true);
      }, 700);

      return () => {
        clearTimeout(scrollTimer);
        clearTimeout(modalTimer);
      };
    }
  }, []);

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
        simulatorData={simulatorData}
      />
    </div>
  );
}
