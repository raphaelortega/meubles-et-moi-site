// Réalisations affichées dans le carrousel de la page d'accueil (components/Gallery.tsx)
// et détaillées sur la page /methode-co2. L'ordre du tableau est l'ordre d'affichage.
// Le CO2e évité de chaque réalisation est dans data/co2.ts (même id).

export interface Realisation {
  id: string;
  /** Nom de la réalisation, affiché sur la photo et sur la page méthode */
  nom: string;
  location: string;
  surface?: string;
  /** Direction artistique (ligne terracotta de la carte) */
  style: string;
  description: string;
  /** Pièces phares affichées sous « Mobilier de la réalisation » */
  highlights: string[];
  /** Description de la photo pour l'accessibilité et le référencement */
  alt: string;
  /** Photo portrait 4:5 (carte du carrousel) */
  image: string;
  /** Photo paysage 16:9 (miniature de la page méthode) */
  imageLarge: string;
}

export const REALISATIONS: Realisation[] = [
  {
    id: 'haussmannien-contemporain',
    nom: 'Haussmannien & Contemporain',
    location: 'Paris',
    surface: '88 m²',
    style: 'Moulures, parquet en chevrons et lignes contemporaines',
    description: 'Un séjour haussmannien lumineux avec un canapé en velours bleu nuit, une table ronde en bois, des chaises enveloppantes et une table basse bois et métal.',
    highlights: ['Canapé velours bleu nuit', 'Table ronde en bois', 'Chaises enveloppantes', 'Table basse bois & métal'],
    alt: 'Séjour haussmannien à Paris : canapé en velours bleu nuit, table ronde en bois, cheminée en marbre et parquet en chevrons',
    image: '/images/realisations/realisation-paris-mobile.jpg',
    imageLarge: '/images/realisations/realisation-paris-large.jpg',
  },
  {
    id: 'verriere-atelier',
    nom: 'Moderne & Esprit Loft',
    location: 'Lyon',
    style: 'Style moderne, bois clair et touches de noir',
    description: 'Un salon moderne et lumineux avec une verrière, un canapé confortable, une table basse pratique et un meuble TV en bois.',
    highlights: ['Canapé confortable', 'Table basse pratique', 'Meuble TV en bois', 'Verrière noire'],
    alt: 'Appartement à Lyon : salon avec canapé gris, cuisine avec bar en bois, suspensions et verrière noire',
    image: '/images/realisations/realisation-loft-mobile.jpg',
    imageLarge: '/images/realisations/realisation-loft-large.jpg',
  },
  {
    id: 'scandinave-lumineux',
    nom: 'Scandinave & Lumineux',
    location: 'Lyon',
    style: 'Couleurs douces, bois clair et ambiance chaleureuse',
    description: 'Un espace clair et apaisant avec un canapé gris confortable, une grande étagère en bois, un meuble TV blanc et une table basse pratique.',
    highlights: ['Canapé gris confortable', 'Grande étagère en bois', 'Meuble TV blanc', 'Table basse pratique'],
    alt: 'Salon scandinave à Lyon : canapé gris, grande bibliothèque en bois, meuble TV et table basse blancs',
    image: '/images/realisations/realisation-scandinave-mobile.jpg',
    imageLarge: '/images/realisations/realisation-scandinave-large.jpg',
  },
  {
    id: 'retro-chic',
    nom: 'Vintage & Bois Massif',
    location: 'Lyon',
    style: 'Meubles vintage en bois et finitions soignées',
    description: 'Un salon plein de charme avec une belle table en bois massif, des chaises rétro confortables, un meuble TV en bois et une table basse en verre.',
    highlights: ['Table en bois massif', 'Chaises rétro confortables', 'Meuble TV en bois', 'Table basse en verre'],
    alt: 'Séjour vintage à Lyon : table en bois massif, chaises rétro, canapé gris et table basse en verre',
    image: '/images/realisations/realisation-vintage-mobile.jpg',
    imageLarge: '/images/realisations/realisation-vintage-large.jpg',
  },
  {
    id: 'nordique-convivial',
    nom: 'Nordique & Convivial',
    location: 'Villeurbanne',
    surface: 'T3 • 42 m²',
    style: 'Chaises coque, contrastes noir et blanc et touches de rouge',
    description: 'Un séjour clair et fonctionnel avec un canapé gris confortable, une table noire, des chaises coque d’inspiration scandinave et des coussins colorés.',
    highlights: ['Canapé gris confortable', 'Table noire', 'Chaises coque scandinaves', 'Coussins vichy rouges'],
    alt: 'Séjour à Villeurbanne : canapé gris et coussins vichy rouges, table noire et chaises coque blanches',
    image: '/images/realisations/realisation-villeurbanne-mobile.jpg',
    imageLarge: '/images/realisations/realisation-villeurbanne-large.jpg',
  },
];
