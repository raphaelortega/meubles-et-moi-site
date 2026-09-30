import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Home, 
  Sparkles, 
  HelpCircle, 
  ExternalLink, 
  Check, 
  ArrowRight,
  Calculator,
  Scale,
  Sparkle
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Passer sa location nue en meublée : conditions et étapes',
  description:
    'Bail en cours, meubles obligatoires, loyer, statut LMNP : les étapes pour passer votre location vide en meublée, simplement et sans erreur.',
  keywords: [
    'passer location nue en meublée',
    'changer bail vide en meublé',
    'louer en meublé',
    'LMNP démarches',
    'meubles obligatoires meublé',
    'décret 2015-981',
    'loyer encadré meublé lyon',
    'fiscalité lmnp amortissement',
  ],
  alternates: {
    canonical: 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee',
  },
  openGraph: {
    title: 'Passer sa location nue en meublée : conditions et étapes | Meubles&Moi',
    description:
      'Bail en cours, meubles obligatoires, loyer, statut LMNP : les étapes pour passer votre location vide en meublée, simplement et sans erreur.',
    url: 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee',
    siteName: 'Meubles&Moi',
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2026-09-29T08:00:00+02:00',
    authors: ['Maxence'],
    images: [
      {
        url: 'https://www.meubles-et-moi.fr/images/hero-appartement.jpg',
        width: 1200,
        height: 630,
        alt: 'Passer sa location nue en meublée : conditions et étapes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passer sa location nue en meublée : conditions et étapes',
    description:
      'Bail en cours, meubles obligatoires, loyer, statut LMNP : les étapes pour passer votre location vide en meublée, simplement et sans erreur.',
    images: ['https://www.meubles-et-moi.fr/images/hero-appartement.jpg'],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee#article',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.meubles-et-moi.fr/#website',
        name: 'Meubles&Moi',
        url: 'https://www.meubles-et-moi.fr',
      },
      headline: 'Passer sa location nue en meublée : conditions et étapes',
      description:
        'Bail en cours, meubles obligatoires, loyer, statut LMNP : les étapes pour passer votre location vide en meublée, simplement et sans erreur.',
      image: 'https://www.meubles-et-moi.fr/images/hero-appartement.jpg',
      datePublished: '2026-09-29T08:00:00+02:00',
      dateModified: '2026-09-29T08:00:00+02:00',
      inLanguage: 'fr-FR',
      mainEntityOfPage: 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee',
      author: {
        '@type': 'Person',
        name: 'Maxence',
        url: 'https://www.meubles-et-moi.fr',
        jobTitle: 'Co-fondateur & Spécialiste Aménagement',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Meubles&Moi',
        url: 'https://www.meubles-et-moi.fr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.meubles-et-moi.fr/logo.png',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.meubles-et-moi.fr',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.meubles-et-moi.fr/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Passer sa location nue en meublée',
          item: 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Puis-je passer en meublé si mon locataire actuel est d’accord ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, si vous mettez fin au bail vide d’un commun accord et signez un nouveau bail meublé. Faites-vous accompagner (agence, notaire ou juriste) pour sécuriser la démarche et formaliser la résiliation à l’amiable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps faut-il pour meubler un logement ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Avec un service clé en main comme Meubles&Moi, quelques jours suffisent (sélection coordonnée, livraison et montage complets). Seul, comptez plutôt plusieurs semaines entre le sourcing des meubles, la coordination des livraisons multiples et le montage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce que je paierai forcément moins d’impôts en meublé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pas forcément. Tout dépend de votre situation personnelle, de votre tranche marginale d’imposition (TMI), du régime choisi (micro-BIC ou réel) et du montant de vos charges. À noter : les prélèvements sociaux sont de 18,6 % en meublé contre 17,2 % en vide. Faites une simulation avant de vous lancer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Et si je revends mon logement plus tard ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depuis 2025, les amortissements déduits en LMNP au régime réel sont réintégrés dans le calcul de la plus-value lors de la revente. Le meublé au régime réel reste surtout intéressant si vous conservez le bien sur le long terme (les abattements pour durée de détention s’appliquant au fil des années). Parlez-en à un expert-comptable.',
          },
        },
      ],
    },
  ],
};

const MANDATORY_FURNITURE = [
  { id: 1, title: 'Une literie complète', desc: 'Matelas de qualité avec couette ou couverture adaptée' },
  { id: 2, title: 'Dispositif d’occultation', desc: 'Rideaux occultants ou volets dans les pièces destinées au sommeil' },
  { id: 3, title: 'Plaques de cuisson', desc: 'Plaques vitrocéramiques, induction ou gaz fonctionnelles' },
  { id: 4, title: 'Four ou micro-ondes', desc: 'Four traditionnel ou four à micro-ondes en bon état de marche' },
  { id: 5, title: 'Réfrigérateur avec congélateur', desc: 'Comportant au minimum un compartiment congélation à -6 °C' },
  { id: 6, title: 'Vaisselle pour les repas', desc: 'Assiettes, verres, couverts et bols en nombre suffisant pour les occupants' },
  { id: 7, title: 'Ustensiles de cuisine', desc: 'Poêles, casseroles, spatules, couteaux de découpe, égouttoir' },
  { id: 8, title: 'Table et sièges', desc: 'Table à manger et chaises proportionnées au nombre de locataires' },
  { id: 9, title: 'Étagères et rangements', desc: 'Armoire, commode ou penderie adaptée au volume du logement' },
  { id: 10, title: 'Luminaires', desc: 'Éclairage suffisant dans chaque pièce de vie et de nuit' },
  { id: 11, title: 'Matériel d’entretien ménager', desc: 'Balai, pelle, balayette et aspirateur adaptés aux types de sols' },
];

export default function ArticlePasserLocationNueEnMeublee() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#063B39] font-sans antialiased selection:bg-[#063B39] selection:text-white">
      {/* Script Schema.org SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header Sticky */}
      <Header />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Fil d'Ariane & Catégorie */}
          <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs text-[#063B39]/70 mb-6">
            <Link href="/" className="hover:text-[#C55D45] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#C55D45] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#063B39] font-medium truncate max-w-[200px] sm:max-w-none">
              Passer sa location nue en meublée
            </span>
          </nav>

          {/* En-tête de l'article */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C55D45]/10 text-[#C55D45] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkle className="w-3 h-3" />
              <span>Guide Investisseur & LMNP</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#063B39] tracking-tight leading-[1.15] mb-6">
              Passer sa location nue en meublée : conditions et étapes
            </h1>

            {/* Méta auteur, date, temps de lecture */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#063B39]/75 pb-6 border-b border-[#063B39]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#063B39] text-[#FAF8F5] flex items-center justify-center font-display font-bold text-xs shadow-xs">
                  M
                </div>
                <div>
                  <div className="font-bold text-[#063B39]">Par Maxence (@Maxence)</div>
                  <div className="text-[11px] text-[#063B39]/60">Co-fondateur Meubles&Moi</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[#063B39]/70">
                <Calendar className="w-4 h-4 text-[#C55D45]" />
                <span>29 septembre 2026</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#063B39]/70">
                <Clock className="w-4 h-4 text-[#C55D45]" />
                <span>6 min de lecture</span>
              </div>
            </div>
          </header>

          {/* Sommaire interactif */}
          <div className="p-6 rounded-3xl bg-white border border-[#063B39]/10 shadow-sm mb-12">
            <h2 className="font-display text-sm uppercase tracking-wider font-extrabold text-[#063B39] mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C55D45]" />
              <span>Sommaire du guide</span>
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-[#063B39]/80">
              <li>
                <a href="#pourquoi-passer-en-meuble" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">1.</span> Pourquoi passer en meublé ?
                </a>
              </li>
              <li>
                <a href="#condition-1-logement-libre" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">2.</span> Condition 1 : Attendre que le bien soit libre
                </a>
              </li>
              <li>
                <a href="#condition-2-meubles-obligatoires" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">3.</span> Condition 2 : Les 11 meubles obligatoires
                </a>
              </li>
              <li>
                <a href="#condition-3-fixer-loyer" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">4.</span> Condition 3 : Fixer le bon loyer (encadrement)
                </a>
              </li>
              <li>
                <a href="#6-etapes-pour-passer-en-meuble" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">5.</span> Les 6 étapes pratiques
                </a>
              </li>
              <li>
                <a href="#qui-soccupe-des-meubles" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">6.</span> Qui s’occupe des meubles ? Solution clé en main
                </a>
              </li>
              <li>
                <a href="#questions-frequentes" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">7.</span> Questions fréquentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#sources-officielles" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">8.</span> Sources officielles
                </a>
              </li>
            </ol>
          </div>

          {/* Corps de l'article */}
          <div className="prose prose-stone max-w-none text-[#063B39]/90 leading-relaxed space-y-10">
            
            {/* Introduction percutante */}
            <div className="text-base sm:text-lg text-[#063B39] font-normal leading-relaxed bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#063B39]/10">
              <p className="mb-3 font-semibold text-[#063B39]">
                Vous louez votre appartement vide et vous vous demandez s&apos;il serait plus intéressant de le louer meublé ?
              </p>
              <p className="text-[#063B39]/80">
                Bonne nouvelle : <strong>c&apos;est possible</strong>, et les démarches sont plus simples qu&apos;on ne le pense.
                Mais il y a quelques règles strictes à respecter : le bail en cours, les meubles obligatoires prévus par la loi, l’encadrement du loyer et la déclaration aux impôts. On vous explique tout, étape par étape, sans jargon.
              </p>
            </div>

            {/* SECTION 1 */}
            <section id="pourquoi-passer-en-meuble" className="scroll-mt-24 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#C55D45]/15 text-[#C55D45] flex items-center justify-center text-sm font-bold">01</span>
                <span>Pourquoi passer en meublé ?</span>
              </h2>

              <p className="text-base text-[#063B39]/85">
                Louer meublé peut rapporter sensiblement plus qu’une location vide, pour <strong>trois raisons majeures</strong> :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#063B39] mb-1.5">
                      Un loyer souvent plus élevé
                    </h3>
                    <p className="text-xs text-[#063B39]/75 leading-relaxed">
                      Dans les villes où les loyers sont encadrés comme à <strong>Lyon ou Villeurbanne</strong>, le plafond légal est plus élevé pour un logement meublé que pour un logement vide.
                    </p>
                  </div>
                  <span className="inline-block mt-3 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full w-fit">
                    +15 % à +30 % de loyer
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-3">
                      <Home className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#063B39] mb-1.5">
                      Une relocation express
                    </h3>
                    <p className="text-xs text-[#063B39]/75 leading-relaxed">
                      Étudiants, jeunes actifs, cadres en mutation professionnelle : la demande est très forte pour des logements soignés et <strong>immédiatement prêts à vivre</strong>.
                    </p>
                  </div>
                  <span className="inline-block mt-3 text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full w-fit">
                    Vacance locative réduite
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#063B39] mb-1.5">
                      Une fiscalité plus douce
                    </h3>
                    <p className="text-xs text-[#063B39]/75 leading-relaxed">
                      En vide, vos loyers sont taxés en « revenus fonciers ». En meublé (statut <strong>LMNP</strong> au régime réel), vous pouvez déduire l’usure du logement et des meubles grâce à <strong>l’amortissement</strong>.
                    </p>
                  </div>
                  <span className="inline-block mt-3 text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full w-fit">
                    Impôt proche de 0 €
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong>À retenir pour vos impôts :</strong> Dans beaucoup de cas, l’amortissement comptable ramène le revenu imposable proche de zéro pendant plusieurs années. Chaque situation étant unique, un expert-comptable spécialisé pourra vous confirmer précisément le gain fiscal adapté à votre tranche.
                </div>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="condition-1-logement-libre" className="scroll-mt-24 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#C55D45]/15 text-[#C55D45] flex items-center justify-center text-sm font-bold">02</span>
                <span>Condition n°1 : attendre que le logement soit libre</span>
              </h2>

              <p className="text-base text-[#063B39]/85">
                C&apos;est la règle la plus importante : <strong>on ne transforme pas un bail vide en bail meublé en cours de location</strong>. Tant que votre locataire actuel est en place, son bail vide continue obligatoirement selon ses termes initiaux.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Rappel légal sur la fin de bail</span>
                </div>
                <p>
                  Un bail vide dure <strong>3 ans</strong> lorsque le propriétaire bailleur est un particulier. Vouloir passer en meublé <strong>n&apos;est pas un motif légal pour donner congé</strong> à son locataire. La loi n&apos;en prévoit que trois :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Vendre le logement (congé pour vente) ;</li>
                  <li>Le reprendre pour y habiter ou y loger un proche direct (congé pour reprise) ;</li>
                  <li>Un motif « légitime et sérieux » (par exemple des impayés répétés).</li>
                </ul>
                <p className="text-[11px] text-amber-800/80 pt-1">
                  Dans tous les cas, le congé doit être notifié au moins 6 mois avant la date d&apos;échéance du bail (source : ANIL).
                </p>
              </div>

              <h3 className="font-display font-bold text-lg text-[#063B39] pt-2">
                Concrètement, vous pouvez passer en meublé dans trois situations :
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#063B39] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    A
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#063B39]">Votre logement est déjà vide</h4>
                    <p className="text-xs text-[#063B39]/75 mt-0.5">
                      C’est le cas idéal : vous avez carte blanche pour meubler l&apos;appartement immédiatement et rédiger un bail meublé pour le prochain occupant.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#063B39] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    B
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#063B39]">Votre locataire donne son préavis</h4>
                    <p className="text-xs text-[#063B39]/75 mt-0.5">
                      C&apos;est le moment parfait pour préparer la suite. En zone tendue (notamment à Lyon et Villeurbanne), son préavis de départ n&apos;est souvent que d&apos;<strong>un mois seulement</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#063B39] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    C
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#063B39]">Vous vous mettez d&apos;accord à l&apos;amiable avec votre locataire</h4>
                    <p className="text-xs text-[#063B39]/75 mt-0.5">
                      Vous convenez d’arrêter le bail vide et de signer un nouveau bail meublé (souvent avec son plein accord s&apos;il souhaite que vous lui fournissiez les meubles). Faites-vous accompagner par une agence, un notaire ou un juriste pour formaliser les actes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="condition-2-meubles-obligatoires" className="scroll-mt-24 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#C55D45]/15 text-[#C55D45] flex items-center justify-center text-sm font-bold">03</span>
                <span>Condition n°2 : équiper le logement avec les meubles obligatoires</span>
              </h2>

              <p className="text-base text-[#063B39]/85">
                Un logement meublé n&apos;est pas un logement « avec quelques meubles récupérés ». La réglementation française (<strong>décret n° 2015-981 du 31 juillet 2015</strong>) fixe une liste obligatoire de <strong>11 éléments indispensables</strong> pour que le locataire puisse y dormir, manger et vivre convenablement dès son arrivée :
              </p>

              {/* Grille des 11 meubles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {MANDATORY_FURNITURE.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {item.id}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-[#063B39]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#063B39]/70 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Risque de requalification :</strong> Si un seul de ces 11 éléments obligatoires manque à l&apos;inventaire lors de l&apos;état des lieux, le logement peut être requalifié par le juge en logement vide. Vous perdriez alors l&apos;ensemble des avantages du meublé, y compris fiscaux (déductions LMNP annulées).
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="condition-3-fixer-loyer" className="scroll-mt-24 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#C55D45]/15 text-[#C55D45] flex items-center justify-center text-sm font-bold">04</span>
                <span>Condition n°3 : fixer le bon loyer</span>
              </h2>

              <p className="text-base text-[#063B39]/85">
                Dans les grandes agglomérations comme Lyon, Villeurbanne, Paris, Lille, Bordeaux ou Montpellier, les loyers sont encadrés, en location vide comme en meublé. Le loyer hors charges ne peut pas dépasser un <strong>plafond fixé au m²</strong> (loyer de référence majoré), calculé selon l’époque de construction, le quartier et le nombre de pièces.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#063B39] font-bold text-sm">
                  <Scale className="w-4 h-4 text-[#C55D45]" />
                  <span>La bonne nouvelle de l&apos;encadrement en meublé</span>
                </div>
                <p className="text-xs sm:text-sm text-[#063B39]/80 leading-relaxed">
                  Le plafond légal est systématiquement plus élevé pour un meublé que pour un logement vide (environ <strong>10 % à 20 % de plus au m²</strong> selon les zones). Passer en meublé vous permet donc d’augmenter votre loyer légalement tout en respectant scrupuleusement la loi.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.service-public.fr/simulateur/calcul/zones-tendues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C55D45] hover:underline"
                  >
                    <span>Vérifier le simulateur officiel de Service-Public.fr</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="6-etapes-pour-passer-en-meuble" className="scroll-mt-24 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#C55D45]/15 text-[#C55D45] flex items-center justify-center text-sm font-bold">05</span>
                <span>Les 6 étapes pour passer en meublé</span>
              </h2>

              <div className="space-y-4">
                {/* Étape 1 */}
                <div className="p-5 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#063B39] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#063B39]">Faire le calcul de rentabilité</h3>
                    <p className="text-xs sm:text-sm text-[#063B39]/80 mt-1 leading-relaxed">
                      Comparez ce que vous rapporte votre logement aujourd’hui (loyer perçu et impôts fonciers) avec ce qu&apos;il rapporterait en meublé. Intégrez le coût d’acquisition du mobilier pour calculer votre retour sur investissement.
                    </p>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="p-5 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#063B39] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#063B39]">Meubler le logement avec soin</h3>
                    <p className="text-xs sm:text-sm text-[#063B39]/80 mt-1 leading-relaxed">
                      Respectez scrupuleusement la liste des 11 équipements obligatoires. Pensez aussi au confort et à l’esthétique : un logement bien meublé, chaleureux et harmonieux se loue plus vite, plus cher et attire des locataires plus précautionneux.
                    </p>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="p-5 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#063B39] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#063B39]">Signer un bail d&apos;habitation meublé</h3>
                    <p className="text-xs sm:text-sm text-[#063B39]/80 mt-1 leading-relaxed">
                      Le bail meublé dure <strong>1 an</strong> renouvelable (ou 9 mois pour un étudiant), contre 3 ans en vide. Le dépôt de garantie peut atteindre jusqu&apos;à <strong>2 mois de loyer hors charges</strong> (contre 1 mois en vide). N&apos;oubliez jamais de joindre l&apos;inventaire précis du mobilier à l&apos;état des lieux d&apos;entrée.
                    </p>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="p-5 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#063B39] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#063B39]">Déclarer votre activité dans les 15 jours</h3>
                    <p className="text-xs sm:text-sm text-[#063B39]/80 mt-1 leading-relaxed">
                      Dès le premier jour de la mise en location, vous devez vous déclarer comme loueur en meublé non professionnel sur le guichet unique en ligne (
                      <a href="https://formalites.entreprises.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">
                        formalites.entreprises.gouv.fr
                      </a>
                      ). Cette démarche est 100 % gratuite et vous permet d&apos;obtenir votre numéro SIRET.
                    </p>
                  </div>
                </div>

                {/* Étape 5 */}
                <div className="p-5 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#063B39] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                    5
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#063B39]">Choisir votre régime fiscal (micro-BIC ou réel)</h3>
                    <p className="text-xs sm:text-sm text-[#063B39]/80 mt-1 leading-relaxed">
                      Deux options : le <strong>micro-BIC</strong> (abattement forfaitaire de 50 %) ou le <strong>régime réel</strong> (déduction intégrale de toutes les charges et amortissement du bien et des meubles). Au réel, les honoraires d&apos;un expert-comptable spécialisé LMNP sont généralement déductibles de vos impôts.
                    </p>
                  </div>
                </div>

                {/* Étape 6 */}
                <div className="p-5 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#063B39] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                    6
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#063B39]">Prévenir votre assurance (PNO)</h3>
                    <p className="text-xs sm:text-sm text-[#063B39]/80 mt-1 leading-relaxed">
                      Avertissez votre assureur afin d’adapter votre contrat d&apos;assurance Propriétaire Non Occupant (PNO) pour qu’il prenne en charge les risques locatifs et la valeur du mobilier installé.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6 : CALLOUT MEUBLES&MOI */}
            <section id="qui-soccupe-des-meubles" className="scroll-mt-24 pt-4">
              <div className="rounded-3xl bg-[#063B39] text-[#FAF8F5] p-7 sm:p-10 shadow-lift border border-[#063B39]/20 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#C55D45]/20 blur-3xl pointer-events-none" />
                
                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-200">
                    <Sparkles className="w-3.5 h-3.5 text-[#C55D45]" />
                    <span>Aménagement clé en main à Lyon</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Et concrètement, qui s&apos;occupe des meubles ?
                  </h2>

                  <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                    C&apos;est souvent l’étape qui fait peur : faire le tour des magasins, acheter les meubles, attendre les livreurs à des dates différentes, monter les penderies et évacuer les cartons. <strong>C&apos;est justement notre métier.</strong>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                      <Check className="w-4 h-4 text-[#C55D45] shrink-0" />
                      <span>Conforme aux 11 éléments obligatoires de la loi</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                      <Check className="w-4 h-4 text-[#C55D45] shrink-0" />
                      <span>Mobilier reconditionné et écoresponsable</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                      <Check className="w-4 h-4 text-[#C55D45] shrink-0" />
                      <span>Livraison et montage complet en quelques jours</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                      <Check className="w-4 h-4 text-[#C55D45] shrink-0" />
                      <span>Zéro logistique et zéro charge mentale pour vous</span>
                    </div>
                  </div>

                  {/* Boutons d'action : simulateur & devis */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                    <Link
                      href="/simulateur"
                      className="px-6 py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta flex items-center justify-center gap-2 transition-all"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Simuler mon gain meublé vs nu</span>
                    </Link>

                    <Link
                      href="/#estimation"
                      className="px-6 py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Obtenir un devis clé en main</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7 : QUESTIONS FRÉQUENTES (FAQ) */}
            <section id="questions-frequentes" className="scroll-mt-24 space-y-4 pt-4">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-[#C55D45]" />
                <span>Questions fréquentes</span>
              </h2>

              <div className="space-y-3">
                {/* FAQ 1 */}
                <details className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs cursor-pointer">
                  <summary className="font-display font-bold text-sm sm:text-base text-[#063B39] flex items-center justify-between list-none">
                    <span>Puis-je passer en meublé si mon locataire actuel est d&apos;accord ?</span>
                    <span className="text-[#C55D45] text-xl font-bold transition-transform group-open:rotate-45 ml-2 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-xs sm:text-sm text-[#063B39]/80 mt-3 pt-3 border-t border-stone-100 leading-relaxed">
                    <strong>Oui</strong>, si vous mettez fin au bail vide d&apos;un commun accord et signez un nouveau bail meublé. Faites-vous accompagner (agence, notaire ou juriste) pour sécuriser juridiquement la démarche et formaliser l&apos;accord écrit entre les deux parties.
                  </p>
                </details>

                {/* FAQ 2 */}
                <details className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs cursor-pointer">
                  <summary className="font-display font-bold text-sm sm:text-base text-[#063B39] flex items-center justify-between list-none">
                    <span>Combien de temps faut-il pour meubler un logement ?</span>
                    <span className="text-[#C55D45] text-xl font-bold transition-transform group-open:rotate-45 ml-2 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-xs sm:text-sm text-[#063B39]/80 mt-3 pt-3 border-t border-stone-100 leading-relaxed">
                    Avec un service clé en main comme <strong>Meubles&Moi</strong>, <strong>quelques jours suffisent</strong> après validation du style. Seul, comptez plutôt plusieurs semaines entre le choix des meubles, la gestion des livraisons étalées et les heures de montage.
                  </p>
                </details>

                {/* FAQ 3 */}
                <details className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs cursor-pointer">
                  <summary className="font-display font-bold text-sm sm:text-base text-[#063B39] flex items-center justify-between list-none">
                    <span>Est-ce que je paierai forcément moins d&apos;impôts en meublé ?</span>
                    <span className="text-[#C55D45] text-xl font-bold transition-transform group-open:rotate-45 ml-2 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-xs sm:text-sm text-[#063B39]/80 mt-3 pt-3 border-t border-stone-100 leading-relaxed">
                    Pas forcément dans 100 % des cas. Tout dépend de votre tranche marginale d&apos;imposition, du régime choisi (micro-BIC ou réel) et du montant de vos charges déductibles. À noter : les prélèvements sociaux sont de <strong>18,6 % en meublé</strong> contre <strong>17,2 % en vide</strong> (source : impots.gouv.fr). Faites une simulation comparative avant de vous lancer.
                  </p>
                </details>

                {/* FAQ 4 */}
                <details className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs cursor-pointer">
                  <summary className="font-display font-bold text-sm sm:text-base text-[#063B39] flex items-center justify-between list-none">
                    <span>Et si je revends mon logement plus tard ?</span>
                    <span className="text-[#C55D45] text-xl font-bold transition-transform group-open:rotate-45 ml-2 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-xs sm:text-sm text-[#063B39]/80 mt-3 pt-3 border-t border-stone-100 leading-relaxed">
                    Depuis 2025, les amortissements déduits en LMNP au régime réel sont réintégrés dans le calcul de la plus-value lors de la revente. Le meublé au régime réel est donc surtout avantageux si vous conservez votre bien sur le long terme (les abattements pour durée de détention s&apos;appliquant progressivement). N&apos;hésitez pas à en parler à votre expert-comptable.
                  </p>
                </details>
              </div>
            </section>

            {/* SECTION 8 : SOURCES OFFICIELLES */}
            <section id="sources-officielles" className="scroll-mt-24 pt-4 border-t border-[#063B39]/10 space-y-4">
              <h2 className="font-display text-xl font-extrabold text-[#063B39] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C55D45]" />
                <span>Sources officielles et réglementaires</span>
              </h2>

              <ul className="space-y-2 text-xs sm:text-sm text-[#063B39]/75">
                <li>
                  • <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030967884/" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Décret n° 2015-981 du 31 juillet 2015</a> fixant la liste des éléments de mobilier d’un logement meublé — Légifrance
                </li>
                <li>
                  • <a href="https://www.service-public.fr/particuliers/vosdroits/F32744" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Impôt sur le revenu : revenus d&apos;une location meublée</a> — Service-Public.fr
                </li>
                <li>
                  • <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Régime des locations meublées : foire aux questions (mars 2026)</a> — impots.gouv.fr
                </li>
                <li>
                  • <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Je donne un bien en location : dois-je payer des prélèvements sociaux ?</a> — impots.gouv.fr
                </li>
                <li>
                  • <a href="https://www.anil.org" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Location vide : fin du bail et congé du bailleur</a> — ANIL
                </li>
                <li>
                  • <a href="https://www.service-public.fr/particuliers/vosdroits/F13723" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Encadrement des loyers en zone tendue</a> — Service-Public.fr
                </li>
                <li>
                  • <a href="https://formalites.entreprises.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Guichet unique des formalités d&apos;entreprises (immatriculation LMNP)</a> — INPI
                </li>
              </ul>

              {/* Avertissement légal */}
              <div className="p-4 rounded-2xl bg-stone-100/90 text-stone-600 text-[11px] leading-relaxed border border-stone-200">
                <strong>Avertissement :</strong> Cet article est purement informatif. Il ne constitue ni un conseil en investissement immobilier, ni un conseil juridique ou fiscal. Chaque situation étant unique, faites-vous accompagner par un professionnel habilité (expert-comptable, notaire, conseiller patrimonial) avant toute décision. Informations à jour en septembre 2026.
              </div>
            </section>

          </div>

          {/* Navigation bas de page & retour au blog */}
          <footer className="mt-14 pt-8 border-t border-[#063B39]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#063B39] hover:text-[#C55D45] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l&apos;ensemble des articles du blog</span>
            </Link>

            <Link
              href="/#estimation"
              className="px-6 py-3 rounded-full text-xs font-display font-bold text-white bg-[#063B39] hover:bg-[#063B39]/90 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Estimer mon aménagement clé en main</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
