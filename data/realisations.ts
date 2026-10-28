// Réalisations affichées dans le carrousel de la page d'accueil (components/Gallery.tsx)
// et détaillées sur la page /methode-co2. L'ordre du tableau est l'ordre d'affichage.
// Le CO2e évité de chaque réalisation est dans data/co2.ts (même id).

export interface Realisation {
  id: string;
  /** Nom court de la réalisation (page méthode) */
  nom: string;
  /** Titre posé sur la photo : type d'appartement • pièces ou décoration phares */
  title: string;
  location: string;
  surface?: string;
  /** Description de la photo pour l'accessibilité et le référencement */
  alt: string;
  /** Photo paysage 16:9 (tablette et ordinateur) */
  imageLarge: string;
  /** Photo portrait 4:5 (mobile) */
  imageMobile: string;
}

export const REALISATIONS: Realisation[] = [
  {
    id: 'haussmannien-contemporain',
    nom: 'Haussmannien & Contemporain',
    title: 'Appartement haussmannien meublé • Séjour, moulures & parquet en chevrons',
    location: 'Paris',
    surface: '88 m²',
    alt: 'Séjour haussmannien à Paris : canapé en velours bleu nuit, table ronde en bois, cheminée en marbre et parquet en chevrons',
    imageLarge: '/images/realisations/realisation-paris-large.jpg',
    imageMobile: '/images/realisations/realisation-paris-mobile.jpg',
  },
  {
    id: 'verriere-atelier',
    nom: 'Moderne & Esprit Loft',
    title: 'Appartement meublé clé en main • Salon, cuisine bar & verrière',
    location: 'Lyon',
    alt: 'Appartement à Lyon : salon avec canapé gris, cuisine avec bar en bois, suspensions et verrière noire',
    imageLarge: '/images/realisations/realisation-loft-large.jpg',
    imageMobile: '/images/realisations/realisation-loft-mobile.jpg',
  },
  {
    id: 'scandinave-lumineux',
    nom: 'Scandinave & Lumineux',
    title: 'Appartement lumineux • Salon scandinave & grande bibliothèque en bois',
    location: 'Lyon',
    alt: 'Salon scandinave à Lyon : canapé gris, grande bibliothèque en bois, meuble TV et table basse blancs',
    imageLarge: '/images/realisations/realisation-scandinave-large.jpg',
    imageMobile: '/images/realisations/realisation-scandinave-mobile.jpg',
  },
  {
    id: 'retro-chic',
    nom: 'Vintage & Bois Massif',
    title: 'Appartement meublé • Séjour vintage & table en bois massif',
    location: 'Lyon',
    alt: 'Séjour vintage à Lyon : table en bois massif, chaises rétro, canapé gris et table basse en verre',
    imageLarge: '/images/realisations/realisation-vintage-large.jpg',
    imageMobile: '/images/realisations/realisation-vintage-mobile.jpg',
  },
  {
    id: 'nordique-convivial',
    nom: 'Nordique & Convivial',
    title: 'Appartement T3 de 42 m² • Séjour nordique, chaises coque & touches de rouge',
    location: 'Villeurbanne',
    surface: 'T3 • 42 m²',
    alt: 'Séjour à Villeurbanne : canapé gris et coussins vichy rouges, table noire et chaises coque blanches',
    imageLarge: '/images/realisations/realisation-villeurbanne-large.jpg',
    imageMobile: '/images/realisations/realisation-villeurbanne-mobile.jpg',
  },
];
