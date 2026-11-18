'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pillars } from '@/components/Pillars';
import { Method } from '@/components/Method';
import { Gallery } from '@/components/Gallery';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { QuoteModal, SimulatorData } from '@/components/QuoteModal';
import { EstimatePopup } from '@/components/EstimatePopup';

// Délai avant le pop-up d’estimation (une fois par visite)
const POPUP_DELAI_MS = 5000;
const POPUP_CLE_SESSION = 'mm_popup_estimation_vu';

export default function Home() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [simulatorData, setSimulatorData] = useState<SimulatorData | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const estimateOpenedRef = useRef(false);

  // Pop-up d’estimation : après 5 s, sauf si le formulaire a déjà été ouvert ou si le pop-up a déjà été vu
  useEffect(() => {
    const dejaVu = () => {
      try {
        return sessionStorage.getItem(POPUP_CLE_SESSION) === '1';
      } catch {
        return false;
      }
    };
    if (dejaVu()) return;
    const timer = setTimeout(() => {
      if (estimateOpenedRef.current || dejaVu()) return;
      setIsPopupOpen(true);
      try {
        sessionStorage.setItem(POPUP_CLE_SESSION, '1');
      } catch {
        // stockage indisponible (navigation privée) : le pop-up s'affiche quand même une fois
      }
    }, POPUP_DELAI_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isEstimateModalOpen) estimateOpenedRef.current = true;
  }, [isEstimateModalOpen]);

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

    // utm_source seul (lien marqué LinkedIn, Instagram…) ne doit ni ouvrir le formulaire
    // ni marquer la demande « Lien pré-rempli » : la provenance est gérée par lib/attribution.ts.
    const hasSimulatorParams = Boolean(type || surfaceStr || cp || loyerNu || loyerMeuble);
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
    setIsPopupOpen(false);
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

      {/* POP-UP D'ESTIMATION (après 5 s) */}
      <EstimatePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onEstimate={handleOpenEstimate}
      />

      {/* MODAL ESTIMATEUR INTERACTIF */}
      <QuoteModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        simulatorData={simulatorData}
      />
    </div>
  );
}
