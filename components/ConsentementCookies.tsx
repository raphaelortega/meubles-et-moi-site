'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChoixConsentement,
  EVENEMENT_OUVRIR,
  enregistrerConsentement,
  lireConsentement,
  ouvrirGestionCookies,
} from '@/lib/consentement';

const PIXEL_ID = '2203263483553018';

// Code officiel du pixel Meta, exécuté seulement après « Accepter »
function chargerPixelMeta() {
  if (window.fbq) {
    window.fbq('consent', 'grant');
    return;
  }
  /* eslint-disable */
  // prettier-ignore
  (function (f: any, b: Document, e: string, v: string) {
    let n: any; let t: HTMLScriptElement; let s: Element;
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
    t = b.createElement(e) as HTMLScriptElement; t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode!.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq!('consent', 'grant');
  window.fbq!('init', PIXEL_ID);
  window.fbq!('track', 'PageView');
}

/** Bandeau de consentement + chargement conditionnel du pixel Meta */
export function ConsentementCookies() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const premierAffichage = useRef(true);

  useEffect(() => {
    const choix = lireConsentement();
    if (choix === 'accepte') chargerPixelMeta();
    else if (choix === null) setVisible(true);

    const onOuvrir = () => setVisible(true);
    window.addEventListener(EVENEMENT_OUVRIR, onOuvrir);
    return () => window.removeEventListener(EVENEMENT_OUVRIR, onOuvrir);
  }, []);

  // Pages vues suivantes (navigation sans rechargement), uniquement si le pixel est chargé
  useEffect(() => {
    // La première page vue est envoyée par chargerPixelMeta()
    if (premierAffichage.current) {
      premierAffichage.current = false;
      return;
    }
    if (window.fbq && lireConsentement() === 'accepte') window.fbq('track', 'PageView');
  }, [pathname]);

  const choisir = (choix: ChoixConsentement) => {
    enregistrerConsentement(choix);
    if (choix === 'accepte') chargerPixelMeta();
    else if (window.fbq) window.fbq('consent', 'revoke');
    setVisible(false);
  };

  if (!visible) return null;

  const bouton =
    'flex-1 sm:flex-none sm:w-36 px-5 py-2.5 rounded-full font-display font-bold text-sm text-white bg-[#063B39] hover:bg-[#0a524f] transition-colors';

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consentement-titre"
      className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-5 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-[0_20px_60px_-20px_rgba(6,59,57,0.45)] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex-1 text-sm text-[#063B39]/80 leading-relaxed">
          <p id="consentement-titre" className="font-display font-bold text-[#063B39] text-base mb-1">
            Cookies publicitaires
          </p>
          <p>
            Avec votre accord, nous utilisons le pixel Meta pour mesurer l’efficacité de nos publicités. La mesure d’audience
            de Vercel, sans cookie, reste active.{' '}
            <Link href="/politique-de-confidentialite" className="text-[#C55D45] font-semibold underline underline-offset-2">
              Politique de confidentialité
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button type="button" onClick={() => choisir('refuse')} className={bouton}>
            Refuser
          </button>
          <button type="button" onClick={() => choisir('accepte')} className={bouton}>
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

/** Lien « Gérer les cookies » qui rouvre le bandeau */
export function GererCookiesLien({ className }: { className?: string }) {
  return (
    <button type="button" onClick={ouvrirGestionCookies} className={className}>
      Gérer les cookies
    </button>
  );
}
