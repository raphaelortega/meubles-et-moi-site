import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLegale, SectionLegale, Todo } from '@/components/PageLegale';
import { GererCookiesLien } from '@/components/ConsentementCookies';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Données collectées par le site Meubles&moi (formulaire d’estimation, mesure d’audience, pixel Meta), leur utilisation et vos droits.',
  alternates: { canonical: 'https://www.meubles-et-moi.fr/politique-de-confidentialite' },
};

const lienClass = 'text-[#C55D45] font-semibold hover:text-[#063B39] transition-colors';

// Rédigée à partir du comportement réel du code (components/QuoteModal.tsx, lib/supabase.ts,
// lib/attribution.ts, components/ConsentementCookies.tsx, app/layout.tsx). À mettre à jour à chaque
// nouvel outil, champ de formulaire ou service tiers.
export default function PolitiqueConfidentialitePage() {
  return (
    <PageLegale
      titre="Politique de confidentialité"
      intro="Ce que le site collecte, pourquoi, avec qui c’est partagé, et comment exercer vos droits."
    >
      <SectionLegale titre="Responsable du traitement">
        <p>
          Meubles&amp;moi, micro-entreprise, SIRET 944 056 746 00026. <Todo>nom de l’entrepreneur et adresse du siège</Todo>
        </p>
        <p>
          Contact pour toute question sur vos données :{' '}
          <a href="mailto:r.ortega@meubles-et-moi.fr" className={lienClass}>
            r.ortega@meubles-et-moi.fr
          </a>
          .
        </p>
      </SectionLegale>

      <SectionLegale titre="1. Le formulaire d’estimation">
        <p>Quand vous demandez une estimation, nous recevons :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>votre projet : type de bien, surface, équipements déjà présents, ambiance souhaitée ;</li>
          <li>vos coordonnées : prénom, téléphone et e-mail (obligatoires), quartier ou ville ;</li>
          <li>la réponse facultative à « Comment nous avez-vous connus ? » ;</li>
          <li>
            la provenance de votre visite (voir la section 3) et, si vous êtes arrivé par un lien pré-rempli, les
            informations contenues dans ce lien (type de bien, surface, code postal, loyers, prénom, source).
          </li>
        </ul>
        <p>
          <strong>Utilisation :</strong> répondre à votre demande et vous envoyer un devis. Ces données ne sont ni vendues
          ni utilisées pour de la prospection sans rapport avec votre demande.
        </p>
        <p>
          <strong>Destinataires :</strong> la demande est transmise par e-mail aux deux fondateurs, Raphaël Ortega et
          Maxence Aucourt, via Formspree (formspree.io), un service américain. Elle n’est pas enregistrée dans une base de
          données du site. Une copie technique reste dans le stockage local de votre navigateur.
        </p>
        <p>
          <strong>Durée de conservation :</strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>demandes de devis non suivies d’une commande : 3 ans après le dernier contact ;</li>
          <li>données clients et factures : 10 ans (obligations comptables).</li>
        </ul>
      </SectionLegale>

      <SectionLegale titre="2. Mesure d’audience et performance">
        <p>
          Le site utilise <strong>Vercel Web Analytics</strong> pour compter les pages vues de façon agrégée, et{' '}
          <strong>Vercel Speed Insights</strong> pour mesurer la vitesse d’affichage. Ces outils ne déposent pas de cookie
          et ne servent pas à la publicité. Ils restent actifs sans votre consentement.
        </p>
      </SectionLegale>

      <SectionLegale titre="3. Provenance des visites">
        <p>
          Pour savoir comment vous nous avez trouvés, le site mémorise dans votre navigateur (stockage local, pas de
          cookie) : la source de la visite (par exemple Google, LinkedIn, Instagram ou accès direct), le nom du site
          précédent, la première page vue, les éventuels paramètres de campagne (utm) et la date.
        </p>
        <p>
          La première provenance est conservée 90 jours, celle de la visite en cours jusqu’à la fermeture de l’onglet. Ces
          informations ne quittent votre navigateur que si vous envoyez une demande d’estimation : elles sont alors jointes
          à votre demande. Elles ne servent pas à la publicité.
        </p>
      </SectionLegale>

      <SectionLegale titre="4. Pixel Meta (publicité)">
        <p>
          Avec votre accord seulement, le site charge le pixel Meta (identifiant 2203263483553018), l’outil de mesure de
          Meta Platforms (Facebook, Instagram). Il enregistre les pages vues et l’envoi d’une demande d’estimation, pour
          mesurer l’efficacité de nos publicités sur Facebook et Instagram. Meta peut déposer ses propres cookies et
          transférer des données hors de l’Union européenne.
        </p>
        <p>
          Si vous refusez, le pixel n’est pas chargé. Votre choix est conservé 6 mois dans votre navigateur, et vous pouvez
          le modifier à tout moment avec le lien « Gérer les cookies » en bas de chaque page, ou ici :{' '}
          <GererCookiesLien className={lienClass} />.
        </p>
      </SectionLegale>

      <SectionLegale titre="5. Autres éléments techniques">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Les polices de caractères sont chargées depuis Google Fonts : votre navigateur contacte alors les serveurs de
            Google, qui reçoivent votre adresse IP.
          </li>
          <li>
            Le site mémorise pendant la visite que la fenêtre « Et si on estimait votre projet ? » a déjà été affichée, pour
            ne pas la montrer deux fois.
          </li>
          <li>Le site est hébergé par Vercel Inc., aux États-Unis (voir les <Link href="/mentions-legales" className={lienClass}>mentions légales</Link>).</li>
        </ul>
      </SectionLegale>

      <SectionLegale titre="6. Transferts hors de l’Union européenne">
        <p>Certaines données sont traitées par des prestataires établis aux États-Unis, donc hors de l’Union européenne :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Formspree, qui achemine les demandes d’estimation (section 1) ;</li>
          <li>Vercel Inc., qui héberge le site et fournit la mesure d’audience et de performance (section 2) ;</li>
          <li>Meta Platforms, uniquement si vous acceptez le pixel Meta (section 4) ;</li>
          <li>Google, pour le chargement des polices de caractères (section 5).</li>
        </ul>
      </SectionLegale>

      <SectionLegale titre="7. Vos droits">
        <p>
          Vous pouvez demander à accéder à vos données, les rectifier, les effacer ou vous opposer à leur utilisation. Écrivez
          à{' '}
          <a href="mailto:r.ortega@meubles-et-moi.fr" className={lienClass}>
            r.ortega@meubles-et-moi.fr
          </a>
          . Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (cnil.fr).
        </p>
      </SectionLegale>
    </PageLegale>
  );
}
