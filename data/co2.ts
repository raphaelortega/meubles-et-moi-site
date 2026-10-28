// Données CO2 des installations Meubles&moi.
// Source des facteurs : ADEME, Impact CO2 (https://impactco2.fr/outils/mobilier).
// Pour ajouter une installation : ajouter une entrée dans INSTALLATIONS_CO2 avec
// l'id de la réalisation (voir components/Gallery.tsx) et la liste des meubles
// de SECONDE MAIN posés. Ne jamais ajouter de facteur qui ne vient pas de l'ADEME.

/** Empreinte de fabrication d'un meuble neuf, en kg CO2e (ADEME, Impact CO2). */
export const FACTEURS_ADEME = {
  chaise_bois: 18.6,
  table_bois: 80.2,
  canape_textile: 179,
  canape_convertible: 198,
  lit_complet: 444,
  armoire: 907,
} as const;

export type FacteurId = keyof typeof FACTEURS_ADEME;

export const LIBELLES_FACTEURS: Record<FacteurId, { nom: string; detail?: string }> = {
  chaise_bois: { nom: 'Chaise en bois' },
  table_bois: { nom: 'Table en bois' },
  canape_textile: { nom: 'Canapé en textile' },
  canape_convertible: { nom: 'Canapé convertible' },
  lit_complet: { nom: 'Lit', detail: 'cadre + sommier + matelas' },
  armoire: { nom: 'Armoire' },
};

export interface MeublePose {
  facteur: FacteurId;
  quantite: number;
  /** Nom affiché dans le tableau de la page méthode */
  libelle: string;
}

export interface InstallationCo2 {
  titre: string;
  sousTitre: string;
  meubles: MeublePose[];
}

/**
 * Meubles de seconde main posés, par installation.
 * La clé est l'id de la réalisation dans components/Gallery.tsx.
 * Une réalisation absente d'ici n'affiche aucun chiffre CO2.
 */
export const INSTALLATIONS_CO2: Record<string, InstallationCo2> = {
  'nordique-convivial': {
    titre: 'T3 de 42 m², meublé pour la location',
    sousTitre: '100 % mobilier de seconde main',
    meubles: [
      { facteur: 'lit_complet', quantite: 2, libelle: 'Lit complet' },
      { facteur: 'canape_textile', quantite: 1, libelle: 'Canapé' },
      { facteur: 'table_bois', quantite: 1, libelle: 'Table à manger' },
      { facteur: 'chaise_bois', quantite: 4, libelle: 'Chaises' },
    ],
  },
};

/** Installation présentée en exemple sur la page /methode-co2 */
export const INSTALLATION_EXEMPLE_ID = 'nordique-convivial';

/** CO2e évité par une ligne (facteur × quantité), en kg */
export function co2Ligne(meuble: MeublePose): number {
  return arrondiTechnique(FACTEURS_ADEME[meuble.facteur] * meuble.quantite);
}

/** Total du CO2e évité par une installation, en kg (somme facteur × quantité) */
export function co2Total(installation: InstallationCo2): number {
  return arrondiTechnique(
    installation.meubles.reduce((total, m) => total + FACTEURS_ADEME[m.facteur] * m.quantite, 0)
  );
}

/**
 * Texte affiché sous une installation, toujours arrondi vers le bas :
 * - moins de 1 000 kg : « Près de X kg de CO2e évités » (centaine inférieure)
 * - 1 000 kg et plus : « Plus de X,X t de CO2e évitées » (dixième inférieur)
 */
export function formatCo2(totalKg: number): string {
  if (totalKg < 1000) {
    const kg = Math.floor(totalKg / 100) * 100;
    return `Près de ${formatNombre(kg)} kg de CO2e évités`;
  }
  const tonnes = Math.floor(arrondiTechnique(totalKg / 100)) / 10;
  return `Plus de ${formatNombre(tonnes, 1)} t de CO2e évitées`;
}

/** Texte CO2 d'une réalisation, ou null si elle n'a pas de données */
export function co2PourRealisation(id: string): string | null {
  const installation = INSTALLATIONS_CO2[id];
  return installation ? formatCo2(co2Total(installation)) : null;
}

/** Ancre de l'installation sur la page /methode-co2 (ex. #co2-nordique-convivial) */
export function co2Ancre(id: string): string {
  return `co2-${id}`;
}

/** Nombre au format français : espace pour les milliers, virgule décimale */
export function formatNombre(valeur: number, decimales = 0): string {
  return valeur
    .toLocaleString('fr-FR', { minimumFractionDigits: decimales, maximumFractionDigits: decimales })
    .replace(/ /g, ' ');
}

// Supprime le bruit des calculs en virgule flottante (ex. 1221.6000000000001)
// pour que l'arrondi vers le bas ne retire pas un dixième à tort.
function arrondiTechnique(valeur: number): number {
  return Math.round(valeur * 1e6) / 1e6;
}
