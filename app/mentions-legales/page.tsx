import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLegale, SectionLegale } from '@/components/PageLegale';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Meubles&moi : éditeur, contact et hébergeur.',
  alternates: { canonical: 'https://www.meubles-et-moi.fr/mentions-legales' },
};

const lienClass = 'text-[#C55D45] font-semibold hover:text-[#063B39] transition-colors';

export default function MentionsLegalesPage() {
  return (
    <PageLegale titre="Mentions légales">
      <SectionLegale titre="Éditeur du site">
        <ul className="space-y-1.5">
          <li>
            <strong>Nom commercial :</strong> Meubles&amp;moi
          </li>
          <li>
            <strong>Entrepreneur :</strong> Maxence Aucourt
          </li>
          <li>
            <strong>Forme :</strong> entrepreneur individuel (EI), immatriculé au Registre national des entreprises (RNE)
          </li>
          <li>
            <strong>SIREN :</strong> 944 056 746
          </li>
          <li>
            <strong>Adresse du siège :</strong> 4 rue des Écoles, 69540 Irigny
          </li>
          <li>
            <strong>Directeur de la publication :</strong> Maxence Aucourt
          </li>
        </ul>
      </SectionLegale>

      <SectionLegale titre="Contact">
        <ul className="space-y-1.5">
          <li>
            E-mail :{' '}
            <a href="mailto:r.ortega@meubles-et-moi.fr" className={lienClass}>
              r.ortega@meubles-et-moi.fr
            </a>{' '}
            ·{' '}
            <a href="mailto:m.aucourt@meubles-et-moi.fr" className={lienClass}>
              m.aucourt@meubles-et-moi.fr
            </a>
          </li>
          <li>
            Téléphone :{' '}
            <a href="tel:0783276352" className={lienClass}>
              07 83 27 63 52
            </a>{' '}
            ·{' '}
            <a href="tel:0782622129" className={lienClass}>
              07 82 62 21 29
            </a>
          </li>
        </ul>
      </SectionLegale>

      <SectionLegale titre="Hébergeur">
        {/* Source : page légale officielle de Vercel, https://vercel.com/legal/dmca-policy (fournie par les fondateurs) */}
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        </p>
      </SectionLegale>

      <SectionLegale titre="Propriété intellectuelle">
        <p>
          Les textes, photos et le logo de ce site appartiennent à Meubles&amp;moi. Toute reproduction sans autorisation écrite
          préalable est interdite.
        </p>
      </SectionLegale>

      <SectionLegale titre="Données personnelles">
        <p>
          Les informations sur les données collectées sur ce site et sur vos droits figurent dans notre{' '}
          <Link href="/politique-de-confidentialite" className={lienClass}>
            politique de confidentialité
          </Link>
          .
        </p>
      </SectionLegale>
    </PageLegale>
  );
}
