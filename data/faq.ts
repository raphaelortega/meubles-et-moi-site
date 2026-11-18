// Questions fréquentes : source unique du texte affiché (components/FAQ.tsx)
// et du JSON-LD FAQPage (app/layout.tsx). Modifier ici, nulle part ailleurs.
import { nombreRealisationsCo2, totalToutesRealisationsTonnes } from '@/data/co2';

export interface FAQItem {
  question: string;
  answer: string;
  theme: string;
}

export const FAQS: FAQItem[] = [
  {
    theme: 'Aménagement clé en main',
    question: 'En quoi consiste votre service d’aménagement d’appartement clé en main ?',
    answer:
      'Notre service d’aménagement d’appartement clé en main prend en charge l’intégralité de votre projet pour vous libérer de toute charge mentale. Dès l’analyse de vos besoins (surface, style souhaité, contraintes d’espace et budget), nous élaborons une sélection cohérente et harmonieuse de mobilier reconditionné de seconde main. Nous gérons ensuite toute la chaîne logistique : transport, livraison à l’étage, assemblage et montage complet sur place. Vous retrouvez un logement immédiatement fonctionnel, soigné et prêt à vivre ou à louer, sans avoir à porter le moindre meuble ni manipuler un tournevis.',
  },
  {
    theme: 'Mobilier reconditionné seconde main',
    question: 'Pourquoi choisir du mobilier reconditionné et de seconde main ?',
    answer: `Le mobilier de seconde main coûte moins cher que l’équivalent neuf, et chaque meuble est choisi pour son esthétique, sa solidité et son bon état d’usage. C’est aussi un choix concret pour la planète : en réemployant des meubles qui existent déjà, on évite d’en fabriquer de nouveaux. Sur nos ${nombreRealisationsCo2()} réalisations publiées, plus de ${totalToutesRealisationsTonnes()} de CO₂e ont été évitées (détail du calcul sur notre page méthode CO₂e).`,
  },
  {
    theme: 'Installation & Livraison',
    question: 'Comment se déroulent l’installation et la livraison de meubles à Lyon et sa métropole ?',
    answer:
      'Nous nous chargeons nous-mêmes de tout l’acheminement dans la métropole de Lyon (Presqu’île, Croix-Rousse, Part-Dieu, Confluence, Villeurbanne…), quel que soit l’étage ; le portage est majoré pour les logements sans ascenseur. Nous montons chaque meuble sur place, puis évacuons protections et emballages pour vous rendre des pièces propres et prêtes à l’usage. Le devis vous est envoyé sous 24 h, et l’installation se fait en général en moins de 48 h après la remise des clés.',
  },
  {
    theme: 'Investissement & Fiscalité LMNP',
    question: 'Votre service d’ameublement clé en main est-il compatible avec la fiscalité LMNP ?',
    answer:
      'Oui. Sur demande, nous meublons au minimum légal de la location meublée (décret n° 2015-981). Dans certains cas, le LMNP au réel peut permettre de ramener le résultat imposable proche de 0 grâce aux amortissements. La validation doit être faite avec un expert-comptable selon votre situation. Nous vous remettons une facture détaillée pour votre comptable.',
  },
];
