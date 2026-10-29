// CO2e évité par le mobilier de seconde main, réalisation par réalisation.
// Source des facteurs : ADEME, Impact CO2 / Base Empreinte (https://impactco2.fr/outils/mobilier).
//
// Pour ajouter une réalisation : ajouter une entrée dans CO2_REALISATIONS avec l'id
// de la réalisation (voir data/realisations.ts) et la liste des meubles de SECONDE MAIN
// réellement posés. Ne jamais ajouter de facteur qui ne vient pas de l'ADEME, ni compter
// un meuble acheté neuf ou de déstockage.

/** Empreinte de fabrication d'un meuble neuf, en kg CO2e (ADEME). */
export const FACTEURS_ADEME = {
  chaise_bois: { kg: 18.6, label: 'Chaise en bois' },
  table_bois: { kg: 80.2, label: 'Table en bois' },
  canape_textile: { kg: 179, label: 'Canapé en textile' },
  canape_convertible: { kg: 198, label: 'Canapé convertible' },
  lit_complet: { kg: 444, label: 'Lit complet', detail: 'cadre + sommier + matelas' },
  armoire: { kg: 907, label: 'Armoire' },
} as const;

export type FacteurId = keyof typeof FACTEURS_ADEME;

export interface MeubleCompte {
  /** Nom du meuble affiché dans le tableau */
  libelle: string;
  quantite: number;
  /** Facteur ADEME appliqué */
  facteur: FacteurId;
  /** true si le meuble apparaît sur la photo du carrousel, false s'il est ailleurs (chambre, coin repas…) */
  visible: boolean;
}

export interface Co2Realisation {
  meubles: MeubleCompte[];
  /** Ce qui a été posé mais n'est pas compté, et pourquoi */
  nonComptes: string[];
}

const NON_COMPTES_LYON = ['Matelas (neuf, par hygiène)', 'Luminaires', 'Linge', 'Décoration'];

/** Une réalisation absente d'ici n'affiche aucun chiffre CO2. */
export const CO2_REALISATIONS: Record<string, Co2Realisation> = {
  'nordique-convivial': {
    meubles: [
      { libelle: 'Lit complet d’occasion (cadre, sommier et matelas)', quantite: 2, facteur: 'lit_complet', visible: false },
      { libelle: 'Canapé gris', quantite: 1, facteur: 'canape_textile', visible: true },
      { libelle: 'Table noire', quantite: 1, facteur: 'table_bois', visible: true },
      { libelle: 'Chaises coque', quantite: 4, facteur: 'chaise_bois', visible: true },
    ],
    nonComptes: ['Luminaires (de seconde main, mais sans facteur ADEME)', 'Rideaux', 'Vaisselle', 'Linge', 'Petit électroménager', 'Décoration'],
  },
  'haussmannien-contemporain': {
    meubles: [
      { libelle: 'Canapé velours bleu nuit', quantite: 1, facteur: 'canape_textile', visible: true },
      { libelle: 'Banquette', quantite: 1, facteur: 'canape_textile', visible: false },
      { libelle: 'Table basse bois & métal', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Bureau', quantite: 1, facteur: 'table_bois', visible: false },
      { libelle: 'Fauteuils', quantite: 4, facteur: 'chaise_bois', visible: false },
      { libelle: 'Chaise de bureau', quantite: 1, facteur: 'chaise_bois', visible: false },
      { libelle: 'Tables de chevet', quantite: 2, facteur: 'chaise_bois', visible: false },
      { libelle: 'Guéridon', quantite: 1, facteur: 'chaise_bois', visible: false },
      { libelle: 'Meuble TV', quantite: 1, facteur: 'chaise_bois', visible: false },
    ],
    nonComptes: [
      'Table ronde, chaises enveloppantes, lit et fauteuil du séjour (mobilier de déstockage, neuf jamais utilisé, donc non compté)',
      'Matelas (neuf)',
      'Luminaires',
      'Linge',
      'Décoration',
    ],
  },
  'verriere-atelier': {
    meubles: [
      { libelle: 'Canapé', quantite: 1, facteur: 'canape_textile', visible: true },
      { libelle: 'Table basse', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Meuble TV en bois', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Table', quantite: 1, facteur: 'table_bois', visible: false },
      { libelle: 'Chaises', quantite: 2, facteur: 'chaise_bois', visible: false },
      { libelle: 'Cadre de lit et sommier', quantite: 1, facteur: 'table_bois', visible: false },
    ],
    nonComptes: NON_COMPTES_LYON,
  },
  'scandinave-lumineux': {
    meubles: [
      { libelle: 'Canapé gris', quantite: 1, facteur: 'canape_textile', visible: true },
      { libelle: 'Table', quantite: 1, facteur: 'table_bois', visible: true },
      { libelle: 'Table basse', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Meuble TV', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Grande étagère en bois', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Chaises', quantite: 2, facteur: 'chaise_bois', visible: false },
      { libelle: 'Cadre de lit et sommier', quantite: 1, facteur: 'table_bois', visible: false },
    ],
    nonComptes: NON_COMPTES_LYON,
  },
  'retro-chic': {
    meubles: [
      { libelle: 'Canapé', quantite: 1, facteur: 'canape_textile', visible: true },
      { libelle: 'Table en bois massif', quantite: 1, facteur: 'table_bois', visible: true },
      { libelle: 'Chaises rétro', quantite: 4, facteur: 'chaise_bois', visible: true },
      { libelle: 'Table basse en verre', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Meuble TV', quantite: 1, facteur: 'chaise_bois', visible: true },
      { libelle: 'Étagères', quantite: 2, facteur: 'chaise_bois', visible: true },
      { libelle: 'Cadre de lit et sommier', quantite: 1, facteur: 'table_bois', visible: false },
    ],
    nonComptes: NON_COMPTES_LYON,
  },
};

/** CO2e évité par une ligne (quantité × facteur), en kg */
export function totalLigne(meuble: MeubleCompte): number {
  return arrondiTechnique(meuble.quantite * FACTEURS_ADEME[meuble.facteur].kg);
}

/** CO2e évité par une réalisation (somme quantité × facteur), en kg, ou null sans données */
export function total(id: string): number | null {
  const donnees = CO2_REALISATIONS[id];
  if (!donnees) return null;
  return arrondiTechnique(donnees.meubles.reduce((somme, m) => somme + m.quantite * FACTEURS_ADEME[m.facteur].kg, 0));
}

/**
 * Texte affiché, toujours arrondi vers le bas :
 * - moins de 1 000 kg : « Près de X kg de CO₂e évités » (centaine inférieure)
 * - 1 000 kg et plus : « Plus de X,X t de CO₂e évitées » (dixième inférieur)
 */
export function format(kg: number): string {
  if (kg < 1000) {
    return `Près de ${formatNombre(Math.floor(kg / 100) * 100)} kg de CO₂e évités`;
  }
  const tonnes = Math.floor(arrondiTechnique(kg / 100)) / 10;
  return `Plus de ${formatNombre(tonnes, 1)} t de CO₂e évitées`;
}

/** Texte CO2 d'une réalisation, ou null si elle n'a pas de données */
export function co2PourRealisation(id: string): string | null {
  const kg = total(id);
  return kg === null ? null : format(kg);
}

/** Nombre au format français : espace insécable pour les milliers, virgule décimale */
export function formatNombre(valeur: number, decimales = 0): string {
  return valeur
    .toLocaleString('fr-FR', { minimumFractionDigits: decimales, maximumFractionDigits: decimales })
    .replace(/ /g, ' ');
}

/** Valeur en kg pour les tableaux : « 18,6 kg », « 179 kg », « 1 221,6 kg » */
export function formatKg(valeur: number): string {
  return `${formatNombre(valeur, Number.isInteger(valeur) ? 0 : 1)} kg`;
}

// Supprime le bruit des calculs en virgule flottante (ex. 1221.6000000000001)
// pour que l'arrondi vers le bas ne retire pas un dixième à tort.
function arrondiTechnique(valeur: number): number {
  return Math.round(valeur * 1e6) / 1e6;
}
