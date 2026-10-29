import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Eye, EyeOff } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { REALISATIONS, Realisation } from '@/data/realisations';
import {
  FACTEURS_ADEME,
  FacteurId,
  CO2_REALISATIONS,
  Co2Realisation,
  TRANSPORT_ADEME,
  total,
  totalLigne,
  totalMobilier,
  transportCollecte,
  format,
  formatKg,
  formatNombre,
  KM_COLLECTE_PAR_OPERATION,
} from '@/data/co2';

export const metadata: Metadata = {
  title: 'Notre méthode CO₂e | Meubles&Moi',
  description:
    "Comment Meubles&moi estime le CO₂e évité grâce au mobilier de seconde main, réalisation par réalisation et meuble par meuble, à partir des facteurs de l'ADEME.",
  alternates: {
    canonical: 'https://www.meubles-et-moi.fr/methode-co2',
  },
};

const FACTEURS = Object.entries(FACTEURS_ADEME) as [FacteurId, (typeof FACTEURS_ADEME)[FacteurId]][];
const FACTEUR_MAX = Math.max(...FACTEURS.map(([, f]) => f.kg));

const ETAPES = [
  { titre: 'Matières premières', texte: 'Production du bois, de la mousse, du métal, du textile.' },
  { titre: 'Approvisionnement', texte: "Transport des matières jusqu'à l'usine." },
  { titre: 'Mise en forme', texte: 'Découpe, moulage, usinage des pièces.' },
  { titre: 'Assemblage et distribution', texte: 'Montage, emballage, livraison en magasin.' },
];


const KM = KM_COLLECTE_PAR_OPERATION;
const FACTEUR_TRANSPORT = `${formatNombre(TRANSPORT_ADEME.kgParKm, 3)} kg CO₂e/km`;

const REGLES = [
  <>On ne compte que le mobilier de <strong>seconde main réellement installé</strong>.</>,
  <>Les matelas neufs (achetés neufs par hygiène) et le mobilier de déstockage (neuf, jamais utilisé) ne sont pas comptés.</>,
  <>Quand un lit est posé sans matelas d&apos;occasion, on ne compte que le cadre et le sommier, avec le facteur « table en bois » (80,2 kg), plus bas que celui d&apos;un lit complet.</>,
  <>Quand l&apos;ADEME n&apos;a pas de facteur exact (table basse, meuble TV, étagère, chevet, fauteuil…), on applique le facteur le plus bas disponible : <strong>la chaise en bois (18,6 kg)</strong>.</>,
  <>Luminaires, linge, vaisselle et décoration ne sont jamais comptés.</>,
  <>Le transport de collecte est <strong>déduit</strong> : utilitaire diesel de 12 m³, {KM} km aller-retour par opération (estimation haute, les meubles étant collectés dans la ville de l&apos;installation), avec le facteur « van » d&apos;Impact CO2 ({FACTEUR_TRANSPORT}). C&apos;est la valeur ADEME la plus proche : un utilitaire de 12 m³ émet probablement un peu plus.</>,
  <>Les résultats sont <strong>toujours arrondis vers le bas</strong>.</>,
];

const SOURCES = [
  { href: 'https://impactco2.fr/outils/mobilier', texte: "Impact CO2 (ADEME) : l'impact carbone du mobilier" },
  { href: 'https://impactco2.fr/outils/mobilier/lit', texte: 'Détail du calcul : lit' },
  { href: 'https://impactco2.fr/outils/mobilier/canapetextile', texte: 'Détail du calcul : canapé en textile' },
  { href: 'https://impactco2.fr/outils/mobilier/tableenbois', texte: 'Détail du calcul : table en bois' },
  { href: 'https://impactco2.fr/outils/mobilier/chaiseenbois', texte: 'Détail du calcul : chaise en bois' },
  { href: 'https://impactco2.fr/outils/transport', texte: 'Impact CO2 (ADEME) : l’impact carbone des transports (facteur « van »)' },
  { href: 'https://base-empreinte.ademe.fr', texte: "Base Empreinte (ADEME) : la base de données officielle des facteurs d'émission" },
];

const sectionClass = 'py-12 md:py-14 border-b border-[#e3dfbd] last:border-b-0';
const h2Class = 'font-display text-2xl sm:text-[30px] font-bold text-[#063B39] leading-tight mb-4';
const introClass = 'text-base sm:text-[17px] text-[#5b6b69] max-w-[680px] mb-7 leading-relaxed';

const libelleTransport = `Facteur « van » · ${formatNombre(TRANSPORT_ADEME.kgParKm, 3)} kg/km`;
const libelleFacteur = (id: FacteurId) => `${FACTEURS_ADEME[id].label} · ${formatKg(FACTEURS_ADEME[id].kg)}`;

function SurLaPhoto({ visible }: { visible: boolean }) {
  return visible ? (
    <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-50 border border-emerald-200/70 rounded-full px-2 py-0.5 text-xs font-semibold whitespace-nowrap">
      <Eye className="w-3 h-3" aria-hidden="true" /> Visible
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-[#5b6b69] bg-[#f4f0c9]/60 border border-[#e3dfbd] rounded-full px-2 py-0.5 text-xs font-semibold whitespace-nowrap">
      <EyeOff className="w-3 h-3" aria-hidden="true" /> Hors photo
    </span>
  );
}

// Détail du calcul d'une réalisation, généré depuis data/co2.ts.
// L'id HTML est l'id du carrousel : les liens /methode-co2#<id> tombent dessus.
function DetailRealisation({ realisation, donnees }: { realisation: Realisation; donnees: Co2Realisation }) {
  const kg = total(realisation.id) ?? 0;
  const mobilier = totalMobilier(donnees);
  const transport = transportCollecte(donnees);
  return (
    <article id={realisation.id} className="scroll-mt-28 bg-white border border-[#e3dfbd] rounded-[20px] overflow-hidden">
      {/* En-tête : miniature, titre et lieu */}
      <div className="flex items-center gap-4 p-4 sm:p-5 border-b border-[#e3dfbd]">
        <img
          src={realisation.imageLarge}
          alt={realisation.alt}
          loading="lazy"
          className="w-24 h-16 sm:w-32 sm:h-20 rounded-xl object-cover shrink-0"
        />
        <div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#063B39] leading-tight">{realisation.nom}</h3>
          <p className="text-sm text-[#5b6b69] mt-0.5">
            {realisation.location}
            {realisation.surface ? ` • ${realisation.surface}` : ''}
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Tableau (tablette et ordinateur) */}
        <table className="hidden sm:table w-full border-collapse text-[15px]">
          <thead>
            <tr className="text-xs font-semibold uppercase tracking-[0.06em] text-[#5b6b69]">
              <th className="text-left py-2 pr-3">Meuble</th>
              <th className="text-right py-2 px-3">Quantité</th>
              <th className="text-left py-2 px-3 whitespace-nowrap">Facteur ADEME retenu</th>
              <th className="text-right py-2 px-3">Total (kg CO₂e)</th>
              <th className="text-left py-2 pl-3">Sur la photo</th>
            </tr>
          </thead>
          <tbody>
            {donnees.meubles.map((m) => (
              <tr key={m.libelle} className="border-t border-[#e3dfbd]">
                <td className="py-2.5 pr-3 font-medium">{m.libelle}</td>
                <td className="py-2.5 px-3 text-right tabular-nums">{m.quantite}</td>
                <td className="py-2.5 px-3 text-[#5b6b69] whitespace-nowrap">{libelleFacteur(m.facteur)}</td>
                <td className="py-2.5 px-3 text-right tabular-nums whitespace-nowrap">{formatKg(totalLigne(m))}</td>
                <td className="py-2.5 pl-3"><SurLaPhoto visible={m.visible} /></td>
              </tr>
            ))}
            <tr className="border-t-2 border-[#063B39]/40 font-semibold text-[#063B39]">
              <td colSpan={3} className="py-2.5 pr-3">Sous-total mobilier</td>
              <td className="py-2.5 px-3 text-right tabular-nums whitespace-nowrap">{formatKg(mobilier)}</td>
              <td />
            </tr>
            <tr className="border-t border-[#e3dfbd] text-[#063B39]">
              <td className="py-2.5 pr-3 font-medium">Transport de collecte (aller-retour)</td>
              <td className="py-2.5 px-3 text-right tabular-nums whitespace-nowrap">{donnees.kmCollecte} km</td>
              <td className="py-2.5 px-3 text-[#5b6b69] whitespace-nowrap">{libelleTransport}</td>
              <td className="py-2.5 px-3 text-right tabular-nums whitespace-nowrap text-[#C55D45]">− {formatKg(transport)}</td>
              <td />
            </tr>
            <tr className="border-t-2 border-[#063B39] font-display font-extrabold text-[#063B39]">
              <td colSpan={3} className="pt-3">Total net</td>
              <td className="pt-3 px-3 text-right tabular-nums whitespace-nowrap">{formatKg(kg)}</td>
              <td />
            </tr>
          </tbody>
        </table>

        {/* Liste (mobile) */}
        <ul className="sm:hidden divide-y divide-[#e3dfbd]">
          {donnees.meubles.map((m) => (
            <li key={m.libelle} className="py-3">
              <div className="flex items-start justify-between gap-3">
                <span className="font-medium">
                  {m.libelle} <span className="text-[#5b6b69]">× {m.quantite}</span>
                </span>
                <span className="font-semibold tabular-nums whitespace-nowrap">{formatKg(totalLigne(m))}</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-3 text-xs text-[#5b6b69]">
                <span>{libelleFacteur(m.facteur)}</span>
                <SurLaPhoto visible={m.visible} />
              </div>
            </li>
          ))}
          <li className="py-3 flex justify-between font-semibold text-[#063B39]">
            <span>Sous-total mobilier</span>
            <span className="tabular-nums">{formatKg(mobilier)}</span>
          </li>
          <li className="py-3">
            <div className="flex items-start justify-between gap-3">
              <span className="font-medium">Transport de collecte <span className="text-[#5b6b69]">× {donnees.kmCollecte} km</span></span>
              <span className="font-semibold tabular-nums whitespace-nowrap text-[#C55D45]">− {formatKg(transport)}</span>
            </div>
            <p className="mt-1.5 text-xs text-[#5b6b69]">{libelleTransport} · aller-retour</p>
          </li>
          <li className="pt-3 flex justify-between font-display font-extrabold text-[#063B39]">
            <span>Total net</span>
            <span className="tabular-nums">{formatKg(kg)}</span>
          </li>
        </ul>

        <div className="mt-5 bg-[#063B39] text-white rounded-[14px] px-5 py-4 font-display font-bold text-lg sm:text-xl text-center">
          {format(kg)}
        </div>

        <p className="mt-4 text-sm text-[#5b6b69]">
          Certains meubles comptés n&apos;apparaissent pas sur la photo (chambre, coin repas…) : ils font bien partie de l&apos;installation.
        </p>

        <div className="mt-4 rounded-xl bg-[#faf8e8] border border-[#e3dfbd] px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.06em] text-[#C55D45] mb-1.5">Non comptés</p>
          <ul className="text-sm text-[#5b6b69] list-disc pl-5 space-y-0.5">
            {donnees.nonComptes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function MethodeCo2Page() {
  const realisationsAvecDonnees = REALISATIONS.filter((r) => CO2_REALISATIONS[r.id]);

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
            <span className="text-[#f4f0c9]">Notre méthode CO₂e</span>
          </nav>
          <span className="inline-block text-[13px] font-semibold tracking-[0.08em] uppercase text-[#063B39] bg-[#f4f0c9] px-3 py-1.5 rounded-full mb-5">
            Transparence
          </span>
          <h1 className="font-display text-[30px] sm:text-[38px] md:text-[46px] font-extrabold text-white leading-tight mb-4">
            Comment nous estimons le CO₂e évité
          </h1>
          <p className="text-lg max-w-[620px] text-[#f4f0c9] leading-relaxed">
            Chaque chiffre affiché sur nos réalisations repose sur les données publiques de l&apos;ADEME, appliquées meuble par meuble. Voici exactement comment nous les obtenons.
          </p>
        </div>
      </div>

      <main className="max-w-[860px] mx-auto px-5">

        {/* a) Le principe */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Le principe</h2>
          <p className={introClass}>
            Un meuble de seconde main existe déjà. En le réutilisant, on évite la fabrication d&apos;un meuble neuf équivalent et les émissions qui vont avec.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center">
            {[
              { titre: 'Meuble de seconde main', texte: 'sélectionné et installé chez vous' },
              { titre: 'Meuble neuf non fabriqué', texte: "pas de matières, d'usine ni de livraison" },
              { titre: 'CO₂e évité', texte: '= empreinte de fabrication du neuf (ADEME), moins le transport de collecte' },
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

        {/* b) Ce que mesure l'ADEME */}
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

        {/* c) Les facteurs utilisés : générés depuis data/co2.ts */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Les facteurs que nous utilisons</h2>
          <p className={introClass}>
            Empreinte de fabrication d&apos;un meuble neuf, en kg CO₂e, selon l&apos;ADEME (Impact CO2 / Base Empreinte). Pour le transport de collecte, nous déduisons le facteur « van » d&apos;Impact CO2.
          </p>
          <div className="bg-white rounded-2xl px-5 sm:px-6 py-2 border border-[#e3dfbd]">
            {FACTEURS.map(([id, f]) => (
              <div
                key={id}
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[200px_1fr_110px] gap-x-4 gap-y-2 items-center py-3.5 border-b border-[#e3dfbd] last:border-b-0"
              >
                <div className="font-semibold">
                  {f.label}
                  {'detail' in f && <small className="block font-normal text-[#5b6b69] text-xs">{f.detail}</small>}
                </div>
                <div className="h-3 bg-[#f4f0c9] rounded-full overflow-hidden col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                  <i className="block h-full bg-[#063B39] rounded-full" style={{ width: `${Math.max(2, Math.round((f.kg / FACTEUR_MAX) * 100))}%` }} />
                </div>
                <div className="text-right font-display font-bold text-[#063B39] sm:col-start-3 sm:row-start-1">{formatKg(f.kg)}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white rounded-2xl px-5 sm:px-6 py-4 border border-[#e3dfbd] flex items-center justify-between gap-4">
            <div className="font-semibold">
              {TRANSPORT_ADEME.label}
              <small className="block font-normal text-[#5b6b69] text-xs">{TRANSPORT_ADEME.detail}, déduit du total</small>
            </div>
            <div className="text-right font-display font-bold text-[#C55D45] whitespace-nowrap">{FACTEUR_TRANSPORT}</div>
          </div>
        </section>

        {/* d) Règles de prudence */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Nos règles de prudence</h2>
          <ul className="grid gap-3">
            {REGLES.map((regle, i) => (
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
            Nos chiffres sont donc des <strong>estimations prudentes</strong> : le CO₂e réellement évité est probablement plus élevé.
          </p>
        </section>

        {/* e) Le détail par réalisation */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Le détail par réalisation</h2>
          <p className={introClass}>
            Pour chaque réalisation, nous listons les meubles de seconde main posés, nous additionnons leur facteur ADEME, puis nous déduisons le transport de collecte.
          </p>
          <div className="grid gap-6">
            {realisationsAvecDonnees.map((r) => (
              <DetailRealisation key={r.id} realisation={r} donnees={CO2_REALISATIONS[r.id]} />
            ))}
          </div>
        </section>

        {/* f) Sources */}
        <section className={sectionClass}>
          <h2 className={h2Class}>Vérifiez par vous-même</h2>
          <p className={introClass}>Toutes nos données sont publiques et consultables sur les sites de l&apos;ADEME.</p>
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

        {/* g) Mention */}
        <p className="py-10 text-sm text-[#5b6b69] leading-relaxed border-t border-[#e3dfbd]">
          Estimation Meubles&amp;moi basée sur les facteurs d&apos;émission de fabrication de l&apos;ADEME (Impact CO2 / Base Empreinte), appliqués meuble par meuble, transport de collecte déduit. Il s&apos;agit d&apos;émissions évitées estimées, pas d&apos;une neutralité carbone.
        </p>

      </main>

      <Footer />
    </div>
  );
}
