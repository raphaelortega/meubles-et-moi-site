// Provenance des visiteurs (invisible pour le visiteur).
// On mémorise d'où arrive la personne au moment où elle entre sur le site,
// puis on joint cette info aux demandes de devis envoyées par e-mail.

export interface AttributionTouch {
  source: string; // libellé lisible : "Google", "LinkedIn", "Accès direct"...
  referrer: string; // site précédent (nom de domaine), vide si inconnu
  landingPage: string; // première page vue
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  date: string; // ISO
}

const FIRST_KEY = 'mm_attr_first';
const SESSION_KEY = 'mm_attr_session';
const FIRST_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 jours

const OWN_HOSTS = ['meubles-et-moi.fr', 'meubles-etmoi.fr', 'vercel.app', 'localhost'];

const KNOWN_SOURCES: { match: RegExp; label: string }[] = [
  { match: /(^|\.)google\./, label: 'Google' },
  { match: /(^|\.)(linkedin\.com|lnkd\.in)$/, label: 'LinkedIn' },
  { match: /(^|\.)instagram\.com$/, label: 'Instagram' },
  { match: /(^|\.)(facebook\.com|fb\.com|fb\.me)$/, label: 'Facebook' },
  { match: /(^|\.)bing\.com$/, label: 'Bing' },
  { match: /(^|\.)ecosia\.org$/, label: 'Ecosia' },
  { match: /(^|\.)duckduckgo\.com$/, label: 'DuckDuckGo' },
  { match: /(^|\.)qwant\.com$/, label: 'Qwant' },
  { match: /(^|\.)yahoo\./, label: 'Yahoo' },
  { match: /(^|\.)(chatgpt\.com|openai\.com)$/, label: 'ChatGPT' },
  { match: /(^|\.)claude\.ai$/, label: 'Claude' },
  { match: /(^|\.)perplexity\.ai$/, label: 'Perplexity' },
  { match: /(^|\.)leboncoin\.fr$/, label: 'Leboncoin' },
  { match: /(^|\.)(t\.co|twitter\.com|x\.com)$/, label: 'X / Twitter' },
  { match: /(^|\.)(tiktok\.com)$/, label: 'TikTok' },
  { match: /(^|\.)(mail\.google\.com|outlook\.live\.com|outlook\.office\.com)$/, label: 'E-mail' },
];

const isOwnHost = (host: string) =>
  OWN_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));

const safeGet = (storage: Storage | undefined, key: string): AttributionTouch | null => {
  try {
    const raw = storage?.getItem(key);
    return raw ? (JSON.parse(raw) as AttributionTouch) : null;
  } catch {
    return null;
  }
};

const safeSet = (storage: Storage | undefined, key: string, value: AttributionTouch) => {
  try {
    storage?.setItem(key, JSON.stringify(value));
  } catch {
    // stockage indisponible (navigation privée...) : on ignore
  }
};

const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

function readCurrentTouch(): AttributionTouch {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source') || undefined;
  const utmMedium = params.get('utm_medium') || undefined;
  const utmCampaign = params.get('utm_campaign') || undefined;

  let referrerHost = '';
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : '';
  } catch {
    referrerHost = '';
  }
  if (referrerHost && isOwnHost(referrerHost)) referrerHost = '';

  let source: string;
  if (utmSource) {
    const known = KNOWN_SOURCES.find((s) => s.match.test(utmSource.toLowerCase()));
    source = known ? known.label : capitalize(utmSource);
  } else if (params.get('gclid') || params.get('gbraid') || params.get('wbraid')) {
    source = 'Google (publicité)';
  } else if (params.get('fbclid')) {
    source = referrerHost.includes('instagram') ? 'Instagram' : 'Facebook / Instagram';
  } else if (params.get('li_fat_id')) {
    source = 'LinkedIn';
  } else if (referrerHost) {
    const known = KNOWN_SOURCES.find((s) => s.match.test(referrerHost));
    source = known ? known.label : referrerHost;
  } else {
    source = 'Accès direct (adresse tapée, favori, ou lien ouvert depuis une appli / un SMS)';
  }

  return {
    source,
    referrer: referrerHost,
    landingPage: window.location.pathname || '/',
    utmSource,
    utmMedium,
    utmCampaign,
    date: new Date().toISOString(),
  };
}

/** À appeler une fois au chargement du site. */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  let local: Storage | undefined;
  let session: Storage | undefined;
  try { local = window.localStorage; } catch { local = undefined; }
  try { session = window.sessionStorage; } catch { session = undefined; }

  // Déjà capturé pendant cette visite : on ne touche à rien
  if (safeGet(session, SESSION_KEY)) return;

  const touch = readCurrentTouch();
  safeSet(session, SESSION_KEY, touch);

  const first = safeGet(local, FIRST_KEY);
  const expired = !first || Date.now() - new Date(first.date).getTime() > FIRST_TTL_MS;
  if (expired) safeSet(local, FIRST_KEY, touch);
}

export interface AttributionSummary {
  provenance: string; // source de la visite actuelle
  premiere_visite: string; // source de la toute première visite (si différente)
  site_precedent: string;
  page_arrivee: string;
  campagne: string;
}

/** Résumé prêt à joindre au formulaire. */
export function getAttributionSummary(): AttributionSummary {
  const empty: AttributionSummary = {
    provenance: 'Inconnue',
    premiere_visite: '',
    site_precedent: '',
    page_arrivee: '',
    campagne: '',
  };
  if (typeof window === 'undefined') return empty;

  let local: Storage | undefined;
  let session: Storage | undefined;
  try { local = window.localStorage; } catch { local = undefined; }
  try { session = window.sessionStorage; } catch { session = undefined; }

  const current = safeGet(session, SESSION_KEY) || readCurrentTouch();
  const first = safeGet(local, FIRST_KEY);

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
    } catch {
      return '';
    }
  };

  const firstDiffers = first && first.date !== current.date && first.source !== current.source;

  return {
    provenance: current.source,
    premiere_visite: firstDiffers ? `${first!.source} (le ${formatDate(first!.date)})` : '',
    site_precedent: current.referrer || '—',
    page_arrivee: current.landingPage,
    campagne: [current.utmSource, current.utmMedium, current.utmCampaign].filter(Boolean).join(' / '),
  };
}
