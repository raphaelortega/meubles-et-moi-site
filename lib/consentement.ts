// Consentement aux traceurs publicitaires (pixel Meta).
// Le choix est mémorisé 6 mois dans le navigateur ; sans choix valide, rien n'est chargé.

export type ChoixConsentement = 'accepte' | 'refuse';

interface ConsentementStocke {
  choix: ChoixConsentement;
  date: string; // ISO
}

const CLE = 'mm_consentement';
export const DUREE_CONSENTEMENT_MS = 182 * 24 * 60 * 60 * 1000; // 6 mois
export const EVENEMENT_CHOIX = 'mm-consentement'; // choix enregistré (detail : ChoixConsentement)
export const EVENEMENT_OUVRIR = 'mm-consentement-ouvrir'; // demande de réouverture du bandeau

/** Choix encore valide, ou null s'il n'y en a pas (ou s'il a plus de 6 mois) */
export function lireConsentement(): ChoixConsentement | null {
  try {
    const brut = window.localStorage.getItem(CLE);
    if (!brut) return null;
    const stocke = JSON.parse(brut) as ConsentementStocke;
    if (stocke.choix !== 'accepte' && stocke.choix !== 'refuse') return null;
    if (Date.now() - new Date(stocke.date).getTime() > DUREE_CONSENTEMENT_MS) return null;
    return stocke.choix;
  } catch {
    return null;
  }
}

export function enregistrerConsentement(choix: ChoixConsentement): void {
  try {
    window.localStorage.setItem(CLE, JSON.stringify({ choix, date: new Date().toISOString() } satisfies ConsentementStocke));
  } catch {
    // stockage indisponible : le choix vaut pour la page en cours seulement
  }
  window.dispatchEvent(new CustomEvent<ChoixConsentement>(EVENEMENT_CHOIX, { detail: choix }));
}

export function ouvrirGestionCookies(): void {
  window.dispatchEvent(new Event(EVENEMENT_OUVRIR));
}
