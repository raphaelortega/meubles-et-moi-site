'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight
} from 'lucide-react';
import { submitLead } from '@/lib/supabase';
import { LeadFormData } from '@/types';

export interface BudgetTier {
  surfaceRange: string;
  minSurface: number;
  maxSurface: number;
  typeLabel: string;
  minPrice: number;
  maxPrice: number;
}

export const BUDGET_GRID: BudgetTier[] = [
  { surfaceRange: '15–20 m²', minSurface: 15, maxSurface: 20, typeLabel: 'Studio', minPrice: 1190, maxPrice: 1590 },
  { surfaceRange: '20–30 m²', minSurface: 20, maxSurface: 30, typeLabel: 'Studio / T1', minPrice: 1390, maxPrice: 1890 },
  { surfaceRange: '30–40 m²', minSurface: 30, maxSurface: 40, typeLabel: 'T1 bis / petit T2', minPrice: 1590, maxPrice: 2190 },
  { surfaceRange: '40–50 m²', minSurface: 40, maxSurface: 50, typeLabel: 'T2', minPrice: 1890, maxPrice: 2790 },
  { surfaceRange: '50–65 m²', minSurface: 50, maxSurface: 65, typeLabel: 'T2 bis / T3', minPrice: 2390, maxPrice: 3390 },
  { surfaceRange: '65–80 m²', minSurface: 65, maxSurface: 80, typeLabel: 'T3 / T3 bis', minPrice: 2990, maxPrice: 4190 },
  { surfaceRange: '80–100 m²', minSurface: 80, maxSurface: 100, typeLabel: 'T4', minPrice: 3690, maxPrice: 5490 },
  { surfaceRange: '100–120 m²', minSurface: 100, maxSurface: 120, typeLabel: 'T4 bis / T5', minPrice: 4490, maxPrice: 6890 },
];

export const getBudgetTier = (m2: number): BudgetTier => {
  if (m2 < 20) return BUDGET_GRID[0];
  if (m2 < 30) return BUDGET_GRID[1];
  if (m2 < 40) return BUDGET_GRID[2];
  if (m2 < 50) return BUDGET_GRID[3];
  if (m2 < 65) return BUDGET_GRID[4];
  if (m2 < 80) return BUDGET_GRID[5];
  if (m2 < 100) return BUDGET_GRID[6];
  return BUDGET_GRID[7];
};

const PROPERTY_OPTIONS = [
  { label: 'Studio (15–20 m²)', value: 'Studio', defaultM2: 18 },
  { label: 'Studio / T1 (20–30 m²)', value: 'Studio / T1', defaultM2: 25 },
  { label: 'T1 bis / petit T2 (30–40 m²)', value: 'T1 bis / petit T2', defaultM2: 35 },
  { label: 'T2 (40–50 m²)', value: 'T2', defaultM2: 45 },
  { label: 'T2 bis / T3 (50–65 m²)', value: 'T2 bis / T3', defaultM2: 58 },
  { label: 'T3 / T3 bis (65–80 m²)', value: 'T3 / T3 bis', defaultM2: 72 },
  { label: 'T4 (80–100 m²)', value: 'T4', defaultM2: 90 },
  { label: 'T4 bis / T5 (100–120 m²)', value: 'T4 bis / T5', defaultM2: 110 },
];

const AMBIANCE_SUGGESTIONS = [
  'Vintage chaleureux & bois chiné',
  'Scandinave épuré & lin naturel',
  'Contemporain chic & laiton',
  'Esprit atelier / industriel rétro',
  'Bohème chic & rotin',
];

// 1. ENDPOINTS D'ENVOI FORMSPREE CONNECTÉS (Notification simultanée des deux associés)
const envEndpoints = process.env.NEXT_PUBLIC_FORMSPREE_URLS
  ? process.env.NEXT_PUBLIC_FORMSPREE_URLS.split(',').map((u) => u.trim()).filter(Boolean)
  : null;

export const FORMSPREE_ENDPOINTS: string[] = envEndpoints && envEndpoints.length > 0
  ? envEndpoints
  : [
      'https://formspree.io/f/xwlpkbqg', // r.ortega@meubles-et-moi.fr
      'https://formspree.io/f/mwlpkbwj', // associé (m.aucourt@meubles-et-moi.fr)
    ];

export const FORMSPREE_ENDPOINT = FORMSPREE_ENDPOINTS[0];

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSurface?: number;
  defaultType?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultSurface = 42,
  defaultType = 'T2',
}) => {
  const [surface, setSurface] = useState<number>(defaultSurface);
  const [propertyType, setPropertyType] = useState<string>(defaultType);
  const [ambianceDescription, setAmbianceDescription] = useState<string>('');
  
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    ville: 'Lyon',
    date_souhaitee: 'Dans le mois',
    hasEquipments: false,
    equipmentsDetails: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentTier = getBudgetTier(surface);

  useEffect(() => {
    if (defaultSurface) setSurface(defaultSurface);
    if (defaultType) setPropertyType(defaultType);
  }, [defaultSurface, defaultType]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSelectPropertyType = (typeVal: string) => {
    setPropertyType(typeVal);
    const matched = PROPERTY_OPTIONS.find((opt) => opt.value === typeVal);
    if (matched) {
      setSurface(matched.defaultM2);
    }
  };

  const handleAddAmbianceTag = (tag: string) => {
    setAmbianceDescription((prev) => {
      if (!prev.trim()) return tag;
      if (prev.includes(tag)) return prev;
      return `${prev.trim()}, ${tag.toLowerCase()}`;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!formData.prenom || !formData.telephone || !formData.email) {
      setErrorMessage('Merci de renseigner votre prénom, téléphone et email.');
      setLoading(false);
      return;
    }

    const budgetCalculeFormatted = `${currentTier.minPrice.toLocaleString('fr-FR')} € – ${currentTier.maxPrice.toLocaleString('fr-FR')} € TTC`;

    // 2. PAYLOAD COMPLET À ENVOYER (en POST JSON)
    const payload = {
      type_bien: currentTier.typeLabel,
      surface_m2: `${surface} m²`,
      equipement_existant_coche: formData.hasEquipments ? 'oui' : 'non',
      equipement_existant_detail: formData.hasEquipments
        ? (formData.equipmentsDetails.trim() || 'Non précisé')
        : 'Aucun',
      budget_calcule: budgetCalculeFormatted,
      ambiance_souhaitee: ambianceDescription.trim() || 'Non renseignée',
      prenom: formData.prenom.trim(),
      telephone: formData.telephone.trim(),
      email: formData.email.trim(),
      quartier_ville: formData.ville.trim() || 'Lyon',
    };

    const nomComplet = `${payload.prenom} ${formData.nom?.trim() || ''}`.trim();
    const dateSouhaitee = formData.date_souhaitee || 'Dans le mois';

    // Synthèse soignée et chaleureuse pour le corps de l'e-mail Formspree
    const messageBriefing = `🌿 NOUVELLE ESTIMATION DE PROJET — MEUBLES&MOI LYON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 PROSPECT
• Nom complet      : ${nomComplet}
• Téléphone direct : ${payload.telephone}
• Adresse e-mail   : ${payload.email}
• Ville / Quartier : ${payload.quartier_ville}

🏡 PROJET D'AMÉNAGEMENT
• Typologie        : ${payload.type_bien}
• Surface exacte   : ${payload.surface_m2}
• Date souhaitée   : ${dateSouhaitee}
• Enveloppe TTC    : ${payload.budget_calcule} (mobilier sourcé, livré & installé)

✨ AMBIANCE RECHERCHÉE
${payload.ambiance_souhaitee}

🍳 ÉQUIPEMENTS DÉJÀ EN PLACE (À DÉDUIRE DU DEVIS)
${payload.equipement_existant_detail}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 Action recommandée : Recontacter ${payload.prenom} au ${payload.telephone} sous 24h à 48h.
Équipe Meubles&moi • Mobilier durable & sélection soignée`;

    try {
      const requestHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };

      const requestBody = JSON.stringify({
        _subject: `🌿 Meubles&moi • Nouveau devis : ${nomComplet} — ${payload.type_bien} (${payload.surface_m2})`,
        _replyto: payload.email,
        message: messageBriefing,
        "👤 Prospect": nomComplet,
        "📞 Téléphone": payload.telephone,
        "✉️ E-mail": payload.email,
        "📍 Secteur": payload.quartier_ville,
        "🏡 Type de bien": payload.type_bien,
        "📐 Surface": payload.surface_m2,
        "💰 Budget indicatif clé en main": payload.budget_calcule,
        "✨ Ambiance souhaitée": payload.ambiance_souhaitee,
        "🍳 Équipements en place": payload.equipement_existant_detail,
        "📅 Date souhaitée": dateSouhaitee,
        // Variables pour template HTML Formspree
        prenom: payload.prenom,
        nom: formData.nom?.trim() || '',
        telephone: payload.telephone,
        email: payload.email,
        ville: payload.quartier_ville,
        quartier_ville: payload.quartier_ville,
        type_bien: payload.type_bien,
        surface_m2: payload.surface_m2,
        budget_calcule: payload.budget_calcule,
        ambiance_souhaitee: payload.ambiance_souhaitee,
        equipement_existant_detail: payload.equipement_existant_detail,
        date_souhaitee: dateSouhaitee,
      });

      // Envoi simultané aux deux associés via leurs endpoints Formspree respectifs
      const responses = await Promise.allSettled(
        FORMSPREE_ENDPOINTS.map((endpoint) =>
          fetch(endpoint, {
            method: 'POST',
            headers: requestHeaders,
            body: requestBody,
          })
        )
      );

      const hasSuccess = responses.some(
        (res) => res.status === 'fulfilled' && res.value.ok
      );

      if (hasSuccess) {
        setSuccess(true);
        try {
          submitLead({
            prenom: payload.prenom,
            nom: formData.nom?.trim() || '',
            email: payload.email,
            telephone: payload.telephone,
            ville: payload.quartier_ville,
            type_bien: `${payload.type_bien} (${currentTier.surfaceRange})`,
            surface_m2: surface,
            date_souhaitee: formData.date_souhaitee,
            pack_selectionne: `${payload.type_bien} • ${payload.budget_calcule}`,
            message: `Ambiance: ${payload.ambiance_souhaitee} | Équipements: ${payload.equipement_existant_detail}`,
          }, { skipEmailNotification: true }).catch(() => {});
        } catch {
          // ignore
        }
      } else {
        let formspreeError = "Une erreur est survenue lors de l'envoi de votre demande.";
        for (const res of responses) {
          if (res.status === 'fulfilled' && !res.value.ok) {
            const errorData = await res.value.json().catch(() => null);
            if (errorData?.errors?.length) {
              formspreeError = errorData.errors.map((err: any) => err.message).join(', ');
              break;
            } else if (errorData?.error) {
              formspreeError = errorData.error;
              break;
            }
          }
        }
        setErrorMessage(formspreeError);
      }
    } catch (err: any) {
      console.error('[Formspree] Erreur réseau:', err);
      setErrorMessage(
        err?.message ||
          "Erreur réseau : impossible de joindre le serveur d'envoi. Veuillez vérifier votre connexion et réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop avec flou */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#063B39]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-4xl shadow-lift border border-[#063B39]/10 overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col"
          >
            {/* Bouton fermeture */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#063B39]/60 hover:text-[#063B39] hover:bg-[#063B39]/5 transition-colors z-20 cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {success ? (
              <div className="p-8 sm:p-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39]">
                  Demande bien reçue, {formData.prenom} !
                </h3>
                <p className="text-sm sm:text-base text-[#063B39]/80 max-w-md mx-auto leading-relaxed">
                  Votre estimation personnalisée arrive par e-mail sous 48h.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      onClose();
                    }}
                    className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#063B39] text-white hover:bg-[#063B39]/90 transition-all cursor-pointer shadow-md"
                  >
                    Fermer cette fenêtre
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-y-auto px-5 py-6 sm:p-8 space-y-5">
                {/* En-tête */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="/logo.png"
                      alt="Meubles&Moi - Aménagement clé en main"
                      className="w-5 h-5 rounded-full object-cover shrink-0 shadow-xs"
                    />
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C55D45]/10 text-[#C55D45] text-[11px] font-extrabold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Grille tarifaire transparente • Devis gratuit 48h</span>
                    </div>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                    Estimer mon projet d’ameublement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#063B39]/70 mt-1">
                    Calculez votre budget clé en main selon la surface de votre logement.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* 1. Sélecteur Type de bien & Surface synchronisés */}
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-end">
                      <div>
                        <label className="block text-xs font-bold text-[#063B39] mb-1.5">
                          Type de bien indicatif
                        </label>
                        <select
                          value={currentTier.typeLabel}
                          onChange={(e) => handleSelectPropertyType(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold text-[#063B39] focus:border-[#C55D45] outline-none transition-colors"
                        >
                          {PROPERTY_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-[#063B39]">
                            Surface exacte
                          </label>
                          <span className="text-xs font-extrabold text-[#C55D45] bg-[#C55D45]/10 px-2.5 py-0.5 rounded-full">
                            {surface} m²
                          </span>
                        </div>
                        <input
                          type="range"
                          min={15}
                          max={120}
                          step={1}
                          value={surface}
                          onChange={(e) => setSurface(Number(e.target.value))}
                          className="w-full accent-[#C55D45] cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Électroménager / rangements déjà présents (influence à la baisse) */}
                    <div className="pt-1">
                      <label className="flex items-center gap-2.5 text-xs text-[#063B39]/85 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.hasEquipments}
                          onChange={(e) => setFormData({ ...formData, hasEquipments: e.target.checked })}
                          className="rounded border-stone-300 text-[#C55D45] focus:ring-[#C55D45] w-4 h-4"
                        />
                        <span className="font-medium">
                          J'ai déjà l'électroménager ou des rangements intégrés <span className="text-[#C55D45] font-semibold">(budget revu à la baisse)</span>
                        </span>
                      </label>

                      {/* Petite note qui s'ouvre quand la case est cochée */}
                      <AnimatePresence>
                        {formData.hasEquipments && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pt-2.5 pl-6 space-y-1"
                          >
                            <label className="block text-[11px] font-bold text-[#063B39]/80">
                              Précisez ce que vous avez déjà :
                            </label>
                            <textarea
                              rows={2}
                              value={formData.equipmentsDetails}
                              onChange={(e) => setFormData({ ...formData, equipmentsDetails: e.target.value })}
                              placeholder="Ex : Réfrigérateur, plaques induction, grand dressing intégré dans la chambre, machine à laver..."
                              className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white text-xs font-medium text-[#063B39] placeholder-[#063B39]/40 focus:border-[#C55D45] outline-none transition-colors resize-none leading-relaxed"
                            />
                            <p className="text-[10px] text-[#063B39]/60">
                              💡 Ces éléments seront automatiquement déduits du chiffrage pour ajuster votre devis au plus juste.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* 2. Bloc estimation budget indicatif basé sur la grille officielle */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#063B39]/5 border border-[#063B39]/15 space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-[11px] uppercase font-extrabold text-[#063B39]/70 tracking-wider">
                        Budget indicatif TTC clés en main • {currentTier.typeLabel} ({currentTier.surfaceRange})
                      </span>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300/50 inline-flex items-center gap-1 self-start sm:self-auto">
                        🌱 Mobilier sourcé, livré & installé
                      </span>
                    </div>

                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#063B39] tracking-tight">
                      {currentTier.minPrice.toLocaleString('fr-FR')} € – {currentTier.maxPrice.toLocaleString('fr-FR')} € <span className="text-sm font-semibold text-[#063B39]/60">TTC</span>
                    </div>

                    <p className="text-xs text-[#063B39]/80 leading-relaxed">
                      Budget indicatif à partir de <strong className="text-[#063B39] font-bold">{currentTier.minPrice.toLocaleString('fr-FR')} €</strong> selon la surface et le niveau d'équipement déjà présent (électroménager, dressing…). Devis personnalisé gratuit sous 48h.
                    </p>
                  </div>

                  {/* 3. Ambiance souhaitée : Saisie libre en quelques lignes par l'utilisateur */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <label className="text-xs font-bold text-[#063B39]">
                        Ambiance souhaitée
                      </label>
                      <span className="text-[11px] text-[#063B39]/60">
                        Exprimez librement vos envies
                      </span>
                    </div>
                    
                    <textarea
                      rows={3}
                      value={ambianceDescription}
                      onChange={(e) => setAmbianceDescription(e.target.value)}
                      placeholder="Décrivez en quelques lignes l’ambiance que vous souhaitez (ex : esprit vintage chaleureux avec du chêne massif et touches terracotta, style scandinave épuré et lin clair, ambiance contemporaine sobre...)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF8F5] text-xs font-medium text-[#063B39] placeholder-[#063B39]/40 focus:border-[#C55D45] focus:bg-white outline-none transition-colors resize-none leading-relaxed"
                    />

                    {/* Suggestions d'inspiration à cliquer pour enrichir rapidement */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="text-[10px] text-[#063B39]/60 font-medium mr-1">Idées d'ambiance :</span>
                      {AMBIANCE_SUGGESTIONS.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleAddAmbianceTag(tag)}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-[#063B39]/80 hover:bg-[#C55D45]/10 hover:text-[#C55D45] border border-stone-200/60 transition-colors cursor-pointer"
                        >
                          + {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Coordonnées de contact */}
                  <div className="space-y-3 pt-1">
                    <span className="text-xs font-bold text-[#063B39] block">
                      Vos coordonnées pour recevoir l'estimation
                    </span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#063B39]/80 mb-1">
                          Votre prénom *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Camille"
                          value={formData.prenom}
                          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs font-medium text-[#063B39] focus:border-[#C55D45] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#063B39]/80 mb-1">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="06 12 34 56 78"
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs font-medium text-[#063B39] focus:border-[#C55D45] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#063B39]/80 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="camille@exemple.fr"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs font-medium text-[#063B39] focus:border-[#C55D45] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#063B39]/80 mb-1">
                          Quartier ou Ville
                        </label>
                        <input
                          type="text"
                          placeholder="Ex : Lyon 4, Villeurbanne..."
                          value={formData.ville}
                          onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs font-medium text-[#063B39] focus:border-[#C55D45] outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 5. Bouton CTA */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: loading ? 1 : 1.01 }}
                      whileTap={{ scale: loading ? 1 : 0.99 }}
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#C55D45] hover:bg-[#B04F38] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-terracotta transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Envoi de votre demande en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Recevoir mon devis personnalisé sous 48h</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    {/* Erreur réseau sous le bouton */}
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 text-left"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                        <span className="font-medium leading-relaxed">{errorMessage}</span>
                      </motion.div>
                    )}

                    <p className="text-center text-[11px] text-[#063B39]/60 mt-2">
                      🔒 Sans engagement • Accompagnement sur-mesure par l'équipe Meubles&moi Lyon
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
