export interface LeadFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  type_bien: string;
  surface_m2?: number | string;
  ville: string;
  code_postal?: string;
  date_souhaitee: string;
  pack_selectionne?: string;
  objectif_fiscal?: string;
  message?: string;
}

export interface PackRoom {
  name: string;
  iconName: string;
  items: string[];
}

export interface FurniturePack {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  recommendedSurface: string;
  targetTenants: string;
  installationTime: string;
  popular?: boolean;
  rooms: PackRoom[];
  features: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  district: string;
  propertyType: string;
  quote: string;
  rentIncrease: string;
  installSpeed: string;
  avatarUrl: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'lmnp' | 'seconde-main' | 'livraison' | 'packs';
}
