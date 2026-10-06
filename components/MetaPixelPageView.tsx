'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Le premier PageView est envoyé à l'initialisation du script.
    // On traque les changements de page suivants lors des navigations SPA.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}
