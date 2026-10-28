import type { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  FACTEURS_ADEME,
  LIBELLES_FACTEURS,
  INSTALLATIONS_CO2,
  INSTALLATION_EXEMPLE_ID,
  FacteurId,
  co2Ligne,
  co2Total,
  formatCo2,
  formatNombre,
} from '@/data/co2';

export const metadata: Metadata = {
  title: 'Notre méthode CO2 | Meubles&Moi',
  description:
    "Comment Meubles&moi calcule le CO2 évité grâce au mobilier de seconde main, à partir des données de l'ADEME.",
  alternates: {
    canonical: 'https://www.meubles-et-moi.fr/methode-co2',
  },
};

// Facteurs présentés sur la page, dans l'ordre d'affichage
const FACTEURS_AFFICHES: FacteurId[] = ['chaise_bois', 'table_bois', 'canape_textile', 'canape_convertible', 'lit_complet'];
const FACTEUR_MAX = Math.max(...FACTEURS_AFFICHES.map((id) => FACTEURS_ADEME[id]));

const ETAPES = [
  { titre: 'Matières premières', texte: 'Production du bois, de la mousse, du métal, du textile.' },
  { titre: 'Approvisionnement', texte: "Transport des matières jusqu'à l'usine." },
  { titre: 'Mise en forme', texte: 'Découpe, moulage, usinage des pièces.' },
  { titre: 'Assemblage et distribution', texte: 'Montage, emballage, livraison en magasin.' },
];

const SOURCES = [
  { href: 'https://impactco2.fr/outils/mobilier', texte: "Impact CO2 (ADEME) : l'impact carbone du mobilier" },
  { href: 'https://impactco2.fr/outils/mobilier/lit', texte: 'Détail du calcul : lit' },
  { href: 'https://impactco2.fr/outils/mobilier/canapetextile', texte: 'Détail du calcul : canapé en textile' },
  { href: 'https://impactco2.fr/outils/mobilier/tableenbois', texte: 'Détail du calcul : table en bois' },
  { href: 'https://impactco2.fr/outils/mobilier/chaiseenbois', texte: 'Détail du calcul : chaise en bois' },
];

const formatKg = (valeur: number) => `${formatNombre(valeur, Number.isInteger(valeur) ? 0 : 1)} kg`;

const sectionClass = 'py-12 md:py-14 border-b border-[#e3dfbd] last:border-b-0';
const h2Class = 'font-display text-2xl sm:text-[30px] font-bold text-[#063B39] leading-tight mb-4';
const introClass = 'text-base sm:text-[17px] text-[#5b6b69] max-w-[680px] mb-7 leading-relaxed';

export default function MethodeCo2Page() {
  const exemple = INSTALLATIONS_CO2[INSTALLATION_EXEMPLE_ID];
  const totalExemple = co2Total(exemple);

  return (
    <div className="min-h-screen bg-[#faf8e8] text-[#1d2b2a]">
      <Header />

      {/* En-tête */}
      <div className="bg-[#063B39] text-[#f4f0c9] pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-[860px] mx-auto px-5">
          <nav aria-label="Fil d’Ariane" className="flex items-center gap-2 text-xs text-[#f4f0c9]/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </Link>
            <span>/</span>
            <span className="text-[#f4f0c9]">Notre méthode CO2</span>
          </nav>
          <span className="inline-block text-[13px] font-semibold tracking-[0.08em] uppercase text-[#063B39] bg-[#f4f0c9] px-3 py-1.5 rounded-full mb-5">
            Transparence
          </span>
          <h1 className="font-display text-[30px] sm:text-[38px] md:text-[46px] font-extrabold text-white leading-tight mb-4">
            Comment nous calculons le CO2 évité
          </h1>
          <p className="text-lg max-w-[620px] text-[#f4f0c9] leading-relaxed">
            Chaque chiffre affiché sur nos installations repose sur les données publiques de l&apos;ADEME. Voici exactement comment nous les obtenons.
          </p>
        </div>
      </div>

      <main className="max-w-[860px] mx-auto px-5">

        {/* Le principe */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Le principe</h2>
          <p className={introClass}>
            Un meuble de seconde main remplace l&apos;achat d&apos;un meuble neuf. Ce meuble neuf n&apos;a donc pas besoin d&apos;être fabriqué : les émissions liées à sa fabrication sont évitées.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center">
            {[
              { titre: 'Meuble de seconde main', texte: 'sélectionné et installé chez vous' },
              { titre: 'Meuble neuf non fabriqué', texte: "pas de matières, d'usine ni de livraison" },
              { titre: 'CO2e évité', texte: '= empreinte de fabrication du neuf (ADEME)' },
            ].map((bloc, i) => (
              <div key={bloc.titre} className="contents">
                {i > 0 && (
                  <div aria-hidden="true" className="text-[26px] font-bold text-[#C55D45] text-center rotate-90 sm:rotate-0">
                    →
                  </div>
                )}
                <div className="bg-white border border-[#e3dfbd] rounded-[14px] p-5 text-center">
                  <strong className="block font-display text-base text-[#063B39] mb-1.5">{bloc.titre}</strong>
                  <span className="text-sm text-[#5b6b69]">{bloc.texte}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ce que mesure l'ADEME */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Ce que mesure l&apos;ADEME</h2>
          <p className={introClass}>
            L&apos;ADEME (Agence de la transition écologique) publie l&apos;empreinte carbone de fabrication des meubles neufs. Elle couvre quatre étapes, de l&apos;extraction des matières jusqu&apos;à l&apos;arrivée en magasin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {ETAPES.map((etape, i) => (
              <div key={etape.titre} className="bg-white rounded-[14px] p-5 border-t-4 border-[#C55D45]">
                <div className="font-display font-extrabold text-[#C55D45] text-[22px]">{i + 1}</div>
                <h3 className="font-display text-base font-bold text-[#063B39] my-1.5">{etape.titre}</h3>
                <p className="text-sm text-[#5b6b69]">{etape.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Les facteurs */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Les facteurs que nous utilisons</h2>
          <p className={introClass}>Empreinte de fabrication d&apos;un meuble neuf, selon l&apos;ADEME (Impact CO2).</p>
          <div className="bg-white rounded-2xl px-5 sm:px-6 py-2 border border-[#e3dfbd]">
            {FACTEURS_AFFICHES.map((id) => {
              const valeur = FACTEURS_ADEME[id];
              const { nom, detail } = LIBELLES_FACTEURS[id];
              return (
                <div
                  key={id}
                  className="grid grid-cols-[1fr_auto] sm:grid-cols-[200px_1fr_110px] gap-x-4 gap-y-2 items-center py-3.5 border-b border-[#e3dfbd] last:border-b-0"
                >
                  <div className="font-semibold">
                    {nom}
                    {detail && <small className="block font-normal text-[#5b6b69] text-xs">{detail}</small>}
                  </div>
                  <div className="h-3 bg-[#f4f0c9] rounded-full overflow-hidden col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                    <i className="block h-full bg-[#063B39] rounded-full" style={{ width: `${Math.round((valeur / FACTEUR_MAX) * 100)}%` }} />
                  </div>
                  <div className="text-right font-display font-bold text-[#063B39] sm:col-start-3 sm:row-start-1">{formatKg(valeur)}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Un exemple concret : généré depuis data/co2.ts */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Un exemple concret</h2>
          <p className={introClass}>
            Pour chaque installation, nous listons les meubles de seconde main posés et nous additionnons leur facteur ADEME.
          </p>
          <div className="bg-[#063B39] text-[#f4f0c9] rounded-[20px] p-5 sm:p-8">
            <h3 className="font-display text-xl font-bold text-white mb-1">{exemple.titre}</h3>
            <p className="text-[15px] opacity-85 mb-5">{exemple.sousTitre}</p>
            <table className="w-full border-collapse text-sm sm:text-[15px]">
              <thead>
                <tr className="text-xs font-semibold uppercase tracking-[0.06em] opacity-75">
                  <th className="text-left py-2">Meuble</th>
                  <th className="text-right py-2">Qté</th>
                  <th className="text-right py-2">Facteur</th>
                  <th className="text-right py-2">CO2e évité</th>
                </tr>
              </thead>
              <tbody>
                {exemple.meubles.map((meuble) => (
                  <tr key={meuble.libelle} className="border-t border-[#f4f0c9]/20">
                    <td className="py-2.5 pr-2">{meuble.libelle}</td>
                    <td className="py-2.5 text-right">{meuble.quantite}</td>
                    <td className="py-2.5 text-right whitespace-nowrap pl-2">{formatKg(FACTEURS_ADEME[meuble.facteur])}</td>
                    <td className="py-2.5 text-right whitespace-nowrap pl-2">{formatKg(Math.floor(co2Ligne(meuble)))}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-[#f4f0c9] font-display font-extrabold text-lg text-white">
                  <td colSpan={3} className="pt-3.5">Total</td>
                  <td className="pt-3.5 text-right whitespace-nowrap">≈ {formatKg(Math.floor(totalExemple / 10) * 10)}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 bg-[#C55D45] text-white rounded-[14px] px-5 py-4 font-display font-bold text-lg sm:text-xl text-center">
              {formatCo2(totalExemple)}
            </div>
          </div>
        </section>

        {/* Règles de prudence */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Nos règles de prudence</h2>
          <ul className="grid gap-3">
            {[
              <>Quand un meuble n&apos;a pas de facteur ADEME exact, nous prenons le facteur le plus proche <strong>et le plus bas</strong>.</>,
              <>Les éléments achetés neufs (par exemple un matelas, pour des raisons d&apos;hygiène) ne sont jamais comptés.</>,
              <>Les luminaires, la décoration, la vaisselle et les petits objets ne sont pas comptés.</>,
              <>Nous arrondissons toujours vers le bas.</>,
            ].map((regle, i) => (
              <li key={i} className="relative bg-white rounded-xl py-4 pr-[18px] pl-[52px] border border-[#e3dfbd]">
                <span
                  aria-hidden="true"
                  className="absolute left-[18px] top-[15px] w-[22px] h-[22px] rounded-full bg-[#063B39] text-[#f4f0c9] text-[13px] font-bold flex items-center justify-center"
                >
                  ✓
                </span>
                {regle}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-[#5b6b69]">
            Nos chiffres sont donc des <strong>estimations prudentes</strong> : le CO2 réellement évité est probablement plus élevé.
          </p>
        </section>

        {/* Sources */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Vérifiez par vous-même</h2>
          <p className={introClass}>Toutes nos données sont publiques et consultables sur le site de l&apos;ADEME.</p>
          <div className="grid gap-3">
            {SOURCES.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener"
                className="flex justify-between items-center gap-4 bg-white border border-[#e3dfbd] rounded-xl px-5 py-4 text-[#1d2b2a] transition-colors hover:border-[#063B39]"
              >
                <span className="font-medium">{source.texte}</span>
                <em className="not-italic text-[#C55D45] font-bold whitespace-nowrap">Voir →</em>
              </a>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
