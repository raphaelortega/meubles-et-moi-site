import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Home, 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Passer sa location nue en meublée : conditions, fiscalité et démarches en 2026 | Blog Meubles&Moi',
  description:
    'Bail en cours, liste des 11 meubles obligatoires, encadrement des loyers et fiscalité LMNP au régime réel : le guide éditorial complet pour réussir votre transition sans erreur.',
  keywords: [
    'passer location nue en meublée',
    'changer bail vide en meublé',
    'louer en meublé lyon',
    'démarches LMNP régime réel',
    'meubles obligatoires meublé décret 2015-981',
    'loyer encadré meublé lyon',
    'fiscalité lmnp amortissement 2026',
    'rentabilité location meublée'
  ],
  alternates: {
    canonical: 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee',
  },
  openGraph: {
    title: 'Passer sa location nue en meublée : conditions, fiscalité et démarches en 2026 | Meubles&Moi',
    description:
      'Bail en cours, liste des 11 meubles obligatoires, encadrement des loyers et fiscalité LMNP au régime réel : le guide éditorial complet pour réussir votre transition sans erreur.',
    url: 'https://www.meubles-et-moi.fr/blog/passer-location-nue-en-meublee',
    siteName: 'Meubles&Moi',
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2026-09-29T08:00:00+02:00',
    modifiedTime: '2026-10-01T12:00:00+02:00',
    authors: ['Maxence'],
    images: [
      {
        url: 'https://www.meubles-et-moi.fr/images/hero-appartement.jpg',
        width: 1200,
        height: 630,
        alt: 'Passer sa location nue en meublée : conditions, fiscalité et démarches',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passer sa location nue en meublée : conditions, fiscalité et démarches en 2026',
    description:
      'Bail en cours, liste des 11 meubles obligatoires, encadrement des loyers et fiscalité LMNP au régime réel : le guide éditorial complet pour réussir votre transition sans erreur.',
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
      headline: 'Passer sa location nue en meublée : conditions, fiscalité et démarches en 2026',
      description:
        'Bail en cours, liste des 11 meubles obligatoires, encadrement des loyers et fiscalité LMNP au régime réel : le guide éditorial complet pour réussir votre transition sans erreur.',
      image: 'https://www.meubles-et-moi.fr/images/hero-appartement.jpg',
      datePublished: '2026-09-29T08:00:00+02:00',
      dateModified: '2026-10-01T12:00:00+02:00',
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
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Puis-je passer en meublé si mon locataire actuel est d’accord ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, à condition de résilier d’un commun accord le bail vide en cours et de signer un nouveau bail d’habitation meublé avec état des lieux et inventaire du mobilier. L’accompagnement par un professionnel (notaire ou juriste) est recommandé pour formaliser l’accord écrit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps faut-il pour meubler un logement ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En faisant appel à un service clé en main comme Meubles&Moi, quelques jours suffisent entre la commande et l’installation complète. En autonomie, comptez plutôt 3 à 6 semaines pour l’approvisionnement, la livraison fractionnée et le montage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce que je paierai forcément moins d’impôts en meublé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dans la grande majorité des cas oui, notamment grâce au régime réel simplifié et à l’amortissement du bien et des meubles qui efface la base imposable pendant plusieurs années, contre une fiscalité lourde au barème de l’IR en revenus fonciers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Et si je revends mon logement plus tard ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depuis 2025, les amortissements déduits en LMNP au régime réel sont réintégrés dans le calcul de la plus-value lors de la revente. Le meublé au régime réel reste particulièrement avantageux dans le cadre d’une stratégie de détention long terme, les abattements pour durée de détention réduisant progressivement l’impôt sur la plus-value.',
          },
        },
      ],
    },
  ],
};

export default function PasserLocationNueEnMeubleePage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#063B39] font-sans antialiased selection:bg-[#063B39] selection:text-white">
      {/* Script Schema.org SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header Sticky */}
      <Header />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Fil d'Ariane épuré */}
          <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs text-[#063B39]/65 mb-6">
            <Link href="/" className="hover:text-[#C55D45] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#C55D45] transition-colors">
              <span>Blog & Analyses</span>
            </Link>
            <span>/</span>
            <span className="text-[#063B39] font-medium truncate max-w-[200px] sm:max-w-none">
              Passer sa location nue en meublée
            </span>
          </nav>

          {/* En-tête éditorial du billet de blog */}
          <header className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#C55D45] bg-[#C55D45]/10 px-3 py-1 rounded-full">
                Stratégie & Fiscalité Locative
              </span>
              <span className="text-stone-400 text-xs">•</span>
              <span className="text-xs font-medium text-[#063B39]/65">
                Guide pratique
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#063B39] tracking-tight leading-[1.2] mb-6">
              Passer sa location nue en meublée : conditions, étapes et fiscalité LMNP
            </h1>

            {/* Châpo / Lead journalistique */}
            <p className="text-lg sm:text-xl text-[#063B39]/80 font-normal leading-relaxed mb-8">
              Bail en cours, liste des 11 meubles obligatoires, plafonds de loyer et statut LMNP au régime réel : découvrez la méthode complète pour basculer votre logement vide en meublé sans commettre d’erreur juridique ni fiscale.
            </p>

            {/* Barrette Auteur & Métadonnées d'article */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#063B39]/10 text-xs sm:text-sm text-[#063B39]/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#063B39] text-stone-100 flex items-center justify-center font-display font-extrabold text-sm shadow-xs">
                  M
                </div>
                <div>
                  <div className="font-bold text-[#063B39]">Maxence</div>
                  <div className="text-[11px] text-[#063B39]/60">Co-fondateur Meubles&Moi</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#063B39]/70">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C55D45]" />
                  <span>29 septembre 2026</span>
                </div>
                <span className="text-stone-300">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C55D45]" />
                  <span>7 min de lecture</span>
                </div>
              </div>
            </div>
          </header>

          {/* Image de couverture éditoriale */}
          <figure className="mb-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-stone-200 border border-stone-200/80 shadow-subtle">
              <img
                src="/images/hero-appartement.jpg"
                alt="Appartement lyonnais aménagé avec goût en location meublée"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-center text-xs text-[#063B39]/60 mt-3 italic">
              Un aménagement meublé harmonieux et prêt à vivre permet d’optimiser le rendement locatif tout en réduisant la vacance au minimum.
            </figcaption>
          </figure>

          {/* Sommaire éditorial discret */}
          <div className="mb-12 p-6 rounded-2xl bg-white/80 border border-[#063B39]/10 shadow-xs">
            <div className="font-display text-xs uppercase tracking-widest font-extrabold text-[#063B39] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C55D45]" />
              <span>Au sommaire de cet article</span>
            </div>
            <ul className="space-y-2 text-sm text-[#063B39]/80 font-medium">
              <li>
                <a href="#pourquoi-passer-en-meuble" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">1.</span> Pourquoi tant de bailleurs franchissent-ils le pas du meublé ?
                </a>
              </li>
              <li>
                <a href="#condition-1-logement-libre" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">2.</span> La condition préalable : attendre la libération des lieux
                </a>
              </li>
              <li>
                <a href="#condition-2-meubles-obligatoires" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">3.</span> L&apos;équipement légal : la liste des 11 meubles obligatoires
                </a>
              </li>
              <li>
                <a href="#condition-3-fixer-loyer" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">4.</span> Encadrement des loyers : comment fixer le bon loyer ?
                </a>
              </li>
              <li>
                <a href="#6-etapes-pour-passer-en-meuble" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">5.</span> Les 6 étapes pratiques pour réussir sa transition
                </a>
              </li>
              <li>
                <a href="#qui-soccupe-des-meubles" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">6.</span> Aménagement et logistique : comment s&apos;équiper sans stress ?
                </a>
              </li>
              <li>
                <a href="#questions-frequentes" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">7.</span> Foire aux questions (FAQ)
                </a>
              </li>
              <li>
                <a href="#sources-officielles" className="hover:text-[#C55D45] transition-colors flex items-center gap-2">
                  <span className="text-[#C55D45] font-bold">8.</span> Sources et références réglementaires
                </a>
              </li>
            </ul>
          </div>

          {/* CORPS DE L'ARTICLE (Vraie typographie et rédaction d'article) */}
          <div className="space-y-12 text-[17px] leading-[1.8] text-[#063B39]/85">
            
            {/* Introduction rédigée */}
            <div className="space-y-4">
              <p>
                Si vous êtes propriétaire d’un appartement actuellement loué vide, vous avez très probablement déjà ressenti la morsure de la fiscalité des revenus fonciers. Entre l’impôt sur le revenu calculé à votre tranche marginale (souvent 30 % ou 41 %) et les 17,2 % de prélèvements sociaux, plus de la moitié de vos bénéfices locatifs peuvent s’évaporer chaque année. Ajoutez à cela un encadrement des loyers de plus en plus contraignant dans les métropoles comme Lyon, Villeurbanne ou Paris, et le rendement net de la location nue s’érode inévitablement.
              </p>
              <p>
                Face à ce constat, le passage en location meublée (sous le statut <strong>LMNP – Loueur en Meublé Non Professionnel</strong>) s’impose comme une évidence pour de nombreux investisseurs. Pourtant, cette transition ne s’improvise pas. Peut-on changer de bail avec le locataire en place ? Quels sont exactement les meubles obligatoires exigés par la loi ? Comment optimiser son loyer tout en restant parfaitement dans les clous légaux ?
              </p>
              <p>
                Dans ce guide complet, nous passons en revue l’ensemble des conditions réglementaires et les 6 étapes chronologiques pour transformer votre bien sereinement.
              </p>
            </div>

            {/* SECTION 1 */}
            <section id="pourquoi-passer-en-meuble" className="scroll-mt-24 space-y-6 pt-4 border-t border-[#063B39]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                1. Pourquoi tant de bailleurs franchissent-ils le pas du meublé ?
              </h2>

              <p>
                Louer meublé n’est pas un simple effet de mode : c’est un choix de gestion patrimoniale qui répond à trois motivations économiques majeures.
              </p>

              <h3 className="font-display text-xl font-bold text-[#063B39] mt-6">
                Un loyer déplafonné et légalement plus élevé
              </h3>
              <p>
                Dans les agglomérations soumises à l’encadrement des loyers — à commencer par Lyon et Villeurbanne —, la loi fixe des loyers de référence au mètre carré. Mais ce que beaucoup de propriétaires ignorent, c’est que le plafond légal (le loyer de référence majoré) est systématiquement plus élevé pour un logement meublé que pour un logement vide. À typologie et quartier identiques, l’écart atteint couramment <strong>15 % à 25 % de loyer supplémentaire par mois</strong>. Ce différentiel permet d’amortir très rapidement le coût d’acquisition du mobilier tout en générant un surplus de trésorerie net appréciable.
              </p>

              <h3 className="font-display text-xl font-bold text-[#063B39] mt-6">
                Une attractivité locative accrue et une vacance minimale
              </h3>
              <p>
                La sociologie des locataires urbains a profondément évolué. Qu’il s’agisse d’étudiants de grandes écoles, de jeunes actifs en premier emploi, de consultants en mission ou de couples en transition de vie, la perspective de devoir acheter, transporter et monter des meubles rebute une proportion grandissante de candidats. Un appartement meublé avec soin, contemporain et prêt à vivre se loue en moyenne en moins de 48 heures à Lyon, ramenant la vacance locative entre deux locataires à une durée quasi inexistante.
              </p>

              <h3 className="font-display text-xl font-bold text-[#063B39] mt-6">
                Le bouclier fiscal de l’amortissement LMNP
              </h3>
              <p>
                C’est le véritable levier de rentabilité de la location meublée. En location vide, vos loyers relèvent des revenus fonciers : vous ne pouvez déduire que certaines charges réelles ou bénéficier d’un abattement forfaitaire limité de 30 % en micro-foncier. Le reliquat est lourdement taxé.
              </p>
              <p>
                En meublé, vos loyers relèvent des Bénéfices Industriels et Commerciaux (BIC). En optant pour le <strong>régime réel simplifié</strong>, vous pouvez non seulement déduire toutes vos charges réelles (intérêts d’emprunt, taxe foncière, charges de copropriété, prime d’assurance PNO, frais de gestion), mais surtout <strong>amortir comptablement</strong> la valeur du bâti (hors terrain) sur 25 à 30 ans ainsi que le mobilier sur 5 à 10 ans. 
              </p>
              <p>
                Dans la pratique, cette charge d’amortissement fictive vient neutraliser comptablement le résultat imposable. Pour un grand nombre de propriétaires, l’impôt sur les loyers est tout simplement ramené à <strong>0 € pendant 8 à 12 ans</strong>.
              </p>

              {/* Citation éditoriale */}
              <blockquote className="my-8 pl-6 border-l-4 border-[#C55D45] py-2 text-lg sm:text-xl font-display font-medium italic text-[#063B39] bg-[#FAF8F5] rounded-r-2xl">
                « En location meublée, le mobilier n’est pas une simple dépense esthétique : c’est un investissement amortissable qui protège durablement vos loyers de l’impôt. »
              </blockquote>

              <p className="text-sm text-[#063B39]/70 bg-stone-100/80 p-4 rounded-xl border border-stone-200">
                <strong>Point fiscal d’actualité :</strong> Concernant les prélèvements sociaux, ils s’élèvent à 18,6 % en meublé (contre 17,2 % en vide). Cependant, comme la base imposable nette est considérablement réduite par l’amortissement, le montant payé en euros reste très largement inférieur en meublé.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="condition-1-logement-libre" className="scroll-mt-24 space-y-6 pt-4 border-t border-[#063B39]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                2. La condition préalable : attendre la libération des lieux
              </h2>

              <p>
                C’est la règle juridique fondamentale que tout bailleur doit impérativement respecter : <strong>on ne peut pas transformer unilatéralement un bail de location nue en bail meublé en cours d’exécution</strong>. Tant qu’un locataire est sous contrat de location vide, ses droits sont protégés par la loi du 6 juillet 1989.
              </p>

              <p>
                Un bail d’habitation nue est conclu pour une durée minimale de <strong>3 ans</strong> (lorsque le propriétaire bailleur est un particulier). Durant cette période, vouloir passer son logement en meublé <strong>ne constitue en aucun cas un motif légal pour donner congé</strong> à son locataire. La loi n’autorise en effet que trois motifs stricts pour résilier un bail à l’échéance triennale :
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Le congé pour vente :</strong> si vous décidez d’arbitrer votre patrimoine et de céder le bien (le locataire bénéficiant alors d’un droit de préemption prioritaire).
                </li>
                <li>
                  <strong>Le congé pour reprise :</strong> pour habiter le logement vous-même à titre de résidence principale ou y loger un membre de votre famille proche (conjoint, ascendant ou descendant direct).
                </li>
                <li>
                  <strong>Le congé pour motif légitime et sérieux :</strong> par exemple en cas de manquements graves et répétés du locataire à ses obligations contractuelles (impayés avérés, troubles anormaux de voisinage).
                </li>
              </ul>

              <p>
                Dans tous les cas, ce congé doit être notifié par lettre recommandée avec accusé de réception ou par acte d’huissier de justice au moins <strong>6 mois avant la date d’anniversaire du bail</strong> (source : ANIL).
              </p>

              <h3 className="font-display text-xl font-bold text-[#063B39] mt-6">
                Dans quelles situations concrètes pouvez-vous alors basculer ?
              </h3>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h4 className="font-bold text-base text-[#063B39] mb-1">
                    Situation 1 : Le logement est actuellement vacant
                  </h4>
                  <p className="text-sm text-[#063B39]/80 leading-relaxed">
                    C’est la configuration la plus simple et la plus confortable. Entre deux locations, vous profitez de la période de vacance pour concevoir l’aménagement, équiper l’appartement de A à Z et signer d’emblée un contrat de location meublée d’un an avec le futur occupant.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h4 className="font-bold text-base text-[#063B39] mb-1">
                    Situation 2 : Votre locataire vous donne congé
                  </h4>
                  <p className="text-sm text-[#063B39]/80 leading-relaxed">
                    Lorsque le locataire en place décide de quitter les lieux, il vous notifie son départ. En zone tendue (Lyon, Villeurbanne et première couronne), son préavis n’est que d’<strong>un mois seulement</strong>. C’est le signal idéal pour anticiper sans tarder l’achat et la livraison du mobilier afin d’enchaîner sans interruption sur le nouveau bail meublé.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h4 className="font-bold text-base text-[#063B39] mb-1">
                    Situation 3 : La négociation d’un accord amiable tripartite
                  </h4>
                  <p className="text-sm text-[#063B39]/80 leading-relaxed">
                    Si votre locataire actuel souhaite rester dans les lieux tout en appréciant que vous équipiez le logement d’un mobilier neuf et de qualité, vous pouvez convenir ensemble d’arrêter d’un commun accord le bail vide et de signer immédiatement un nouveau contrat de location meublée. Attention : cette démarche doit être rigoureusement formalisée par écrit pour éviter tout risque de contestation ultérieure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="condition-2-meubles-obligatoires" className="scroll-mt-24 space-y-6 pt-4 border-t border-[#063B39]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                3. L&apos;équipement légal : la liste des 11 meubles obligatoires
              </h2>

              <p>
                Un logement meublé ne se résume pas à un canapé et deux tabourets dépareillés. La réglementation française est d’une précision chirurgicale : le <strong>décret n° 2015-981 du 31 juillet 2015</strong> (issu de la loi ALUR) fixe un inventaire exhaustif de <strong>11 catégories d’équipements indispensables</strong>. Le locataire doit pouvoir y dormir, cuisiner, prendre ses repas et entretenir le logement dès le premier jour, sans avoir à apporter d’autre effet que ses valises personnelles.
              </p>

              <div className="space-y-4 pt-2">
                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">1. Une literie complète avec couette ou couverture</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Comprend un sommier et un matelas de bonne qualité, une alèse propre ainsi qu’une couette ou des couvertures adaptées à la saison et aux dimensions du lit.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">2. Un dispositif d’occultation des fenêtres dans les chambres</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Volets extérieurs, persiennes ou, à défaut, rideaux occultants doublés garantissant l’obscurité complète dans chaque pièce servant au sommeil.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">3. Des plaques de cuisson fonctionnelles</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Plaques vitrocéramiques, induction ou feux gaz en parfait état d’usage et correctement raccordées.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">4. Un four ou un four à micro-ondes</h4>
                  <p className="text-sm text-[#063B39]/80">
                    La présence de l’un des deux appareils est obligatoire au minimum (un micro-ondes combiné grill est souvent un compromis optimal dans les petites surfaces).
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">5. Un réfrigérateur avec compartiment congélation</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Un réfrigérateur classique doté obligatoirement d’un compartiment congélateur ou d’un conservateur assurant une température inférieure ou égale à <strong>-6 °C</strong>.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">6. La vaisselle nécessaire à la prise des repas</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Assiettes creuses, plates et à dessert, verres, tasses, bols et couverts complets (fourchettes, couteaux, cuillères) en quantité proportionnée au nombre maximal d’occupants.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">7. Les ustensiles de cuisine indispensables</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Poêles, casseroles de tailles variées, couvercles, égouttoir à pâtes, ouvre-boîte, économe, spatules et couteaux de préparation culinaire.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">8. Une table et des sièges adaptés</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Table de repas ou comptoir dînatoire accompagné de chaises ou tabourets en nombre cohérent avec la capacité d’accueil du bien.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">9. Des étagères et espaces de rangement</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Armoire avec penderie, commode ou placards intégrés permettant de ranger les vêtements et le linge de maison.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">10. Des luminaires dans chaque pièce</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Éclairages fonctionnels au plafond, lampes de chevet dans la chambre et lampadaires d’ambiance dans la pièce de vie.
                  </p>
                </div>

                <div className="border-l-2 border-[#063B39] pl-4 space-y-1">
                  <h4 className="font-bold text-base text-[#063B39]">11. Le matériel d’entretien ménager complet</h4>
                  <p className="text-sm text-[#063B39]/80">
                    Aspirateur adapté au sol (carrelage, parquet), balai, pelle, balayette, seau et serpillère pour l’entretien quotidien.
                  </p>
                </div>
              </div>

              {/* Avertissement requalification */}
              <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-[#063B39] text-sm space-y-2 mt-6">
                <div className="font-bold text-amber-900 flex items-center gap-2">
                  <span>Attention au risque de requalification judiciaire</span>
                </div>
                <p className="text-xs sm:text-sm text-[#063B39]/85 leading-relaxed">
                  Si un seul de ces 11 éléments obligatoires fait défaut lors de l’état des lieux d’entrée ou n’est pas mentionné dans l’inventaire contradictoire annexé au bail, le locataire peut saisir le juge des contentieux de la protection. Le bail risque alors d’être requalifié rétroactivement en bail de location nue : le loyer sera ramené au plafond du vide, le dépôt de garantie amputé, et l’administration fiscale peut annuler l’ensemble de vos amortissements et déductions LMNP.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="condition-3-fixer-loyer" className="scroll-mt-24 space-y-6 pt-4 border-t border-[#063B39]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                4. Encadrement des loyers : comment fixer le bon loyer ?
              </h2>

              <p>
                Dans les grandes agglomérations sous forte tension locative — notamment Lyon, Villeurbanne, Paris, Lille, Bordeaux ou Montpellier —, l’encadrement des loyers s’applique avec rigueur. Le loyer hors charges ne peut pas excéder le <strong>loyer de référence majoré</strong> au mètre carré, déterminé chaque année par arrêté préfectoral selon l’époque de construction de l’immeuble, sa localisation précise et le nombre de pièces principales.
              </p>

              <p>
                Cependant, la grille officielle prévoit deux barèmes distincts : un barème pour les logements nus et un barème spécifique pour les meublés. Ce dernier accorde une majoration moyenne de <strong>10 % à 20 % au mètre carré</strong>.
              </p>

              <p>
                Prenons un exemple concret sur un appartement T2 de 40 m² situé dans le 7ème arrondissement de Lyon :
              </p>

              <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
                <div className="font-bold text-[#063B39] text-base">
                  Exemple comparatif : T2 de 40 m² à Lyon
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#063B39]/80 pt-1">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-semibold text-stone-600 mb-1">En location nue :</div>
                    <div className="text-xl font-bold text-[#063B39]">640 € / mois</div>
                    <div className="text-xs text-stone-500 mt-1">Plafond légal majoré (hors charges)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <div className="font-semibold text-emerald-800 mb-1">En location meublée :</div>
                    <div className="text-xl font-bold text-emerald-950">770 € / mois</div>
                    <div className="text-xs text-emerald-700 mt-1">Plafond légal majoré (hors charges)</div>
                  </div>
                </div>
                <p className="text-xs text-[#063B39]/70 pt-2">
                  Gain brut direct : <strong>+130 € par mois</strong>, soit <strong>1 560 € de revenus supplémentaires par an</strong>, parfaitement conforme à l’encadrement préfectoral.
                </p>
              </div>

              <p className="text-sm">
                Vous pouvez consulter directement la carte interactive des plafonds de votre commune sur le simulateur officiel du ministère :
                {' '}
                <a
                  href="https://www.service-public.fr/simulateur/calcul/zones-tendues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C55D45] hover:underline inline-flex items-center gap-1"
                >
                  <span>Accéder au simulateur officiel de Service-Public.fr</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="6-etapes-pour-passer-en-meuble" className="scroll-mt-24 space-y-8 pt-4 border-t border-[#063B39]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                5. Les 6 étapes pratiques pour réussir sa transition
              </h2>

              <p>
                Pour mener à bien votre projet sans commettre d’impair, voici la chronologie opérationnelle à respecter de la première réflexion jusqu’à l’encaissement de vos premiers loyers meublés.
              </p>

              {/* Étape 1 */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#063B39]">
                  Étape 1 : Valider la rentabilité nette prévisionnelle
                </h3>
                <p>
                  Ne vous contentez pas d’une estimation superficielle. Prenez en compte le montant prévisionnel du nouveau loyer meublé, l’estimation du budget mobilier, les frais annexes (assurance PNO, honoraires comptables déductibles) et comparez la fiscalité nette du régime réel LMNP avec votre imposition actuelle en revenus fonciers.
                </p>
              </div>

              {/* Étape 2 */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#063B39]">
                  Étape 2 : Équiper et soigner l’agencement intérieur
                </h3>
                <p>
                  Fournissez scrupuleusement les 11 meubles obligatoires, mais ne négligez pas l’aspect esthétique et la robustesse. Un logement meublé avec harmonie, des tonalités chaleureuses et des matériaux durables attire immédiatement des locataires plus respectueux et préserve la valeur de votre capital mobilier sur le long terme.
                </p>
              </div>

              {/* Étape 3 */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#063B39]">
                  Étape 3 : Rédiger le bail d’habitation meublé et l’inventaire
                </h3>
                <p>
                  Le bail meublé conclu au titre de résidence principale a une durée d’<strong>un an renouvelable</strong> tacitement (ou <strong>9 mois non renouvelable</strong> si votre locataire est étudiant). Le dépôt de garantie légal peut s’élever jusqu’à <strong>2 mois de loyer hors charges</strong> (contre 1 mois seulement en location vide). Annexez impérativement à l’état des lieux d’entrée un <strong>inventaire contradictoire détaillé</strong> mentionnant l’état de chaque meuble et appareil.
                </p>
              </div>

              {/* Étape 4 */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#063B39]">
                  Étape 4 : Déclarer votre activité de loueur sur le Guichet Unique sous 15 jours
                </h3>
                <p>
                  Dès le début de votre mise en location meublée, vous disposez d’un délai légal de <strong>15 jours</strong> pour immatriculer votre activité auprès de l’INPI sur le portail officiel du Guichet Unique (
                  <a
                    href="https://formalites.entreprises.gouv.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C55D45] hover:underline font-semibold"
                  >
                    formalites.entreprises.gouv.fr
                  </a>
                  ). Cette démarche est 100 % gratuite et vous attribuera votre numéro de <strong>SIRET</strong> en tant que loueur en meublé non professionnel.
                </p>
              </div>

              {/* Étape 5 */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#063B39]">
                  Étape 5 : Choisir le bon régime fiscal (Micro-BIC ou Régime Réel)
                </h3>
                <p>
                  Vous avez le choix entre le <strong>Micro-BIC</strong> (abattement forfaitaire automatique de 50 % sur vos recettes brutes, sans pouvoir déduire de charges réelles ni d’amortissements) et le <strong>Régime Réel Simplifié</strong>. Si vous avez acheté des meubles neufs ou si votre bien comporte encore un crédit immobilier, le régime réel est presque systématiquement le plus avantageux. L’adhésion à un centre de gestion agréé et le recours à un expert-comptable spécialisé LMNP vous permettent en outre de sécuriser vos déclarations fiscales.
                </p>
              </div>

              {/* Étape 6 */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#063B39]">
                  Étape 6 : Adapter votre assurance Propriétaire Non Occupant (PNO)
                </h3>
                <p>
                  Contactez votre compagnie d’assurance pour basculer votre contrat PNO en formule meublée. Cette précaution garantit la couverture de vos meubles en cas de dégât des eaux, d’incendie ou de vandalisme, en complément de l’assurance multirisque habitation obligatoirement souscrite par le locataire.
                </p>
              </div>
            </section>

            {/* SECTION 6 : FOCUS MEUBLES&MOI */}
            <section id="qui-soccupe-des-meubles" className="scroll-mt-24 space-y-6 pt-4 border-t border-[#063B39]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                6. Aménagement et logistique : comment s&apos;équiper sans stress ?
              </h2>

              <p>
                Sur le papier, l’opération est très séduisante. Mais dans la réalité quotidienne d’un propriétaire bailleur qui travaille ou qui n’habite pas à proximité de son bien, la logistique de l’ameublement représente un véritable défi.
              </p>

              <p>
                Choisir les références aux bonnes dimensions, synchroniser trois livraisons étalées sur dix jours, monter des armoires à deux et évacuer des dizaines de cartons vers la déchetterie représente en moyenne <strong>30 à 50 heures de logistique lourde</strong>.
              </p>

              {/* Encadré éditorial de service */}
              <div className="my-8 p-7 sm:p-9 rounded-3xl bg-white border border-[#063B39]/15 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#063B39]/5 text-[#063B39] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#C55D45]" />
                  <span>La solution clé en main Meubles&Moi</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#063B39]">
                  Et si vous déléguiez l’intégralité de l’ameublement ?
                </h3>

                <p className="text-sm sm:text-base text-[#063B39]/80 leading-relaxed">
                  Basée au cœur de la Métropole de Lyon, <strong>Meubles&Moi</strong> prend en charge l’ensemble de la chaîne : sélection d’un mobilier chaleureux et robuste (alliant pièces circulaires reconditionnées de qualité et mobilier durable), livraison groupée en un seul passage, montage complet par nos équipes et remise de l’inventaire clé en main 100 % conforme au décret 2015-981.
                </p>

                <div className="pt-2">
                  <Link
                    href="/#estimation"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white bg-[#C55D45] hover:bg-[#B04F38] shadow-glow-terracotta transition-all"
                  >
                    <span>Estimer mon projet d’aménagement en 2 minutes</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 7 : FAQ */}
            <section id="questions-frequentes" className="scroll-mt-24 space-y-6 pt-4 border-t border-[#063B39]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                7. Foire aux questions (FAQ)
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h3 className="font-display font-bold text-base text-[#063B39] mb-2">
                    Puis-je passer en meublé si mon locataire actuel est d’accord ?
                  </h3>
                  <p className="text-sm text-[#063B39]/80 leading-relaxed">
                    Oui, c’est tout à fait possible à condition de résilier d’un commun accord le bail vide en cours et de signer un nouveau bail d’habitation meublé avec état des lieux et inventaire du mobilier. L’accompagnement par un professionnel (agence, notaire ou juriste) est fortement recommandé pour formaliser l’accord écrit.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h3 className="font-display font-bold text-base text-[#063B39] mb-2">
                    Combien de temps faut-il pour meubler un logement ?
                  </h3>
                  <p className="text-sm text-[#063B39]/80 leading-relaxed">
                    En faisant appel à un service clé en main comme Meubles&Moi, quelques jours suffisent entre la validation de la proposition et l’installation terminée. En autonomie complète, comptez plutôt 3 à 6 semaines entre la commande, les aléas de livraison et le montage des meubles.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h3 className="font-display font-bold text-base text-[#063B39] mb-2">
                    Est-ce que je paierai forcément moins d’impôts en meublé ?
                  </h3>
                  <p className="text-sm text-[#063B39]/80 leading-relaxed">
                    Dans une très large majorité des cas, oui. Grâce au régime réel et à l’amortissement du bien et des meubles, la base imposable nette est souvent ramenée proche de zéro pendant plusieurs années, contre une imposition au barème de l’IR en revenus fonciers. Chaque situation patrimoniale étant spécifique, un bilan personnalisé avec un expert-comptable est préconisé.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h3 className="font-display font-bold text-base text-[#063B39] mb-2">
                    Et si je revends mon logement meublé plus tard ?
                  </h3>
                  <p className="text-sm text-[#063B39]/80 leading-relaxed">
                    Depuis 2025, les amortissements déduits en LMNP au régime réel sont réintégrés dans l’assiette taxable de la plus-value lors de la cession. Cela incite à conserver le bien sur un horizon moyen à long terme, les abattements fiscaux pour durée de détention réduisant progressivement l’impôt exigible avec les années.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 : SOURCES OFFICIELLES */}
            <section id="sources-officielles" className="scroll-mt-24 pt-4 border-t border-[#063B39]/10 space-y-4">
              <h2 className="font-display text-lg font-bold text-[#063B39] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C55D45]" />
                <span>Sources officielles et textes de loi</span>
              </h2>

              <ul className="space-y-1.5 text-xs text-[#063B39]/70 leading-relaxed">
                <li>
                  • <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030967884/" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Décret n° 2015-981 du 31 juillet 2015</a> fixant la liste des éléments de mobilier d’un logement meublé — Légifrance
                </li>
                <li>
                  • <a href="https://www.service-public.fr/particuliers/vosdroits/F32744" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Impôt sur le revenu : revenus d&apos;une location meublée (LMNP)</a> — Service-Public.fr
                </li>
                <li>
                  • <a href="https://www.anil.org" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Location nue : congé délivré par le bailleur et fin du bail</a> — Agence Nationale pour l&apos;Information sur le Logement (ANIL)
                </li>
                <li>
                  • <a href="https://www.service-public.fr/particuliers/vosdroits/F13723" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Encadrement des loyers en zone tendue</a> — Ministère du Logement
                </li>
                <li>
                  • <a href="https://formalites.entreprises.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#C55D45] hover:underline font-semibold">Portail du Guichet Unique des formalités d&apos;entreprises (INPI)</a>
                </li>
              </ul>

              <div className="p-4 rounded-xl bg-stone-100 text-stone-600 text-[11px] leading-relaxed border border-stone-200 mt-4">
                <strong>Avertissement :</strong> Cet article est publié à des fins strictement informatives. Il ne se substitue pas à une consultation auprès d’un professionnel du droit immobilier, d’un notaire ou d’un expert-comptable habilité. Informations valables au regard du cadre légal en vigueur en 2026.
              </div>
            </section>

          </div>

          {/* SIGNATURE AUTEUR ÉDITORIALE */}
          <div className="my-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#063B39]/10 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-[#063B39] text-[#FAF8F5] flex items-center justify-center font-display font-extrabold text-2xl shrink-0 shadow-sm">
              M
            </div>
            <div className="space-y-2">
              <div className="font-display font-bold text-base text-[#063B39]">
                À propos de l&apos;auteur : Maxence
              </div>
              <p className="text-xs sm:text-sm text-[#063B39]/75 leading-relaxed">
                Co-fondateur de <strong>Meubles&Moi</strong> et passionné d’aménagement durable, Maxence accompagne au quotidien les propriétaires et investisseurs de la Métropole de Lyon dans l’optimisation de leur patrimoine locatif à travers un aménagement clé en main, élégant et écoresponsable.
              </p>
            </div>
          </div>

          {/* SECTION ARTICLES RECOMMANDÉS (Look vrai média / blog) */}
          <div className="my-12 pt-8 border-t border-[#063B39]/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-extrabold text-lg text-[#063B39]">
                Sur le même sujet
              </h3>
              <span className="text-xs text-[#063B39]/60 font-medium">
                Guides & Dossiers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-[#C55D45]/40 transition-colors">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C55D45] bg-[#C55D45]/10 px-2 py-0.5 rounded-full">
                    Réglementation
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#063B39] mt-2 mb-1.5">
                    Les 11 meubles obligatoires du décret de 2015 : la checklist complète
                  </h4>
                  <p className="text-xs text-[#063B39]/70 leading-relaxed">
                    Tout le détail des équipements pièce par pièce pour éviter tout litige lors de l’état des lieux d’entrée.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#063B39]/60">
                  <span>5 min de lecture</span>
                  <span className="text-[#C55D45] font-bold">Lire l’article →</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-[#C55D45]/40 transition-colors">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C55D45] bg-[#C55D45]/10 px-2 py-0.5 rounded-full">
                    Fiscalité LMNP
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#063B39] mt-2 mb-1.5">
                    LMNP au régime réel vs Micro-BIC : calcul comparatif et amortissement
                  </h4>
                  <p className="text-xs text-[#063B39]/70 leading-relaxed">
                    Comment effacer l’impôt sur vos loyers grâce à l’amortissement du mobilier et des murs.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#063B39]/60">
                  <span>8 min de lecture</span>
                  <span className="text-[#C55D45] font-bold">Lire l’article →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation bas de page & retour accueil */}
          <footer className="mt-14 pt-8 border-t border-[#063B39]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#063B39] hover:text-[#C55D45] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l&apos;accueil Meubles&Moi</span>
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
