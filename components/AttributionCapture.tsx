'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

// Mémorise d'où arrive le visiteur (Google, LinkedIn...). N'affiche rien.
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
