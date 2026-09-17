'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { LeadFormData } from '@/types';
import { submitLead } from '@/lib/supabase';

interface QuoteFormProps {
  initialPropertyType?: string;
  initialSurface?: number;
  initialPack?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialPropertyType = 'T2 (2 pièces)',
  initialSurface = 42,
  initialPack = 'Formule T2',
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    type_bien: initialPropertyType,
    surface_m2: initialSurface,
    ville: 'Lyon',
    date_souhaitee: 'Express sous 48h',
    pack_selectionne: initialPack,
    message: '',
  });

  useEffect(() => {
    if (initialPropertyType) {
      setFormData((prev) => ({ ...prev, type_bien: initialPropertyType }));
    }
    if (initialSurface) {
      setFormData((prev) => ({ ...prev, surface_m2: initialSurface }));
    }
    if (initialPack) {
      setFormData((prev) => ({ ...prev, pack_selectionne: initialPack }));
    }
  }, [initialPropertyType, initialSurface, initialPack]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!formData.prenom || !formData.telephone || !formData.email) {
      setErrorMessage('Merci de remplir votre prénom, téléphone et email.');
      setLoading(false);
      return;
    }

    try {
      const result = await submitLead(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setErrorMessage(result.error || 'Erreur lors de l’envoi de votre demande.');
      }
    } catch {
      setErrorMessage('Une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="devis" className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête simple */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-extrabold text-terracotta-600 tracking-wider block mb-1">
            Gratuit & Sans Engagement
          </span>
          <h2 className="text-3xl font-extrabold text-charcoal-900">
            Recevez votre devis en 24h
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Remplissez ce formulaire en 1 minute. On vous rappelle avec une proposition chiffrée.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-float">
          
          {success ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900">
                Merci {formData.prenom} ! C'est bien noté.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Nous préparons la sélection pour votre {formData.type_bien} à {formData.ville}. Nous vous recontactons au {formData.telephone} sous 24h ouvrées.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="text-xs font-bold text-sage-700 hover:underline pt-2 cursor-pointer"
              >
                Faire une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Type de bien & Ville */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Votre appartement
                  </label>
                  <select
                    name="type_bien"
                    value={formData.type_bien}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-xs font-medium focus:border-sage-600 outline-none"
                  >
                    <option value="Studio / T1">Studio / T1</option>
                    <option value="T2 (2 pièces)">T2 (2 pièces)</option>
                    <option value="T3+ ou Colocation">T3+ ou Colocation</option>
                    <option value="Immeuble de rapport">Immeuble entier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Quartier ou ville à Lyon
                  </label>
                  <input
                    type="text"
                    name="ville"
                    required
                    value={formData.ville}
                    onChange={handleChange}
                    placeholder="Ex : Lyon 3, Villeurbanne..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-xs font-medium focus:border-sage-600 outline-none"
                  />
                </div>
              </div>

              {/* Coordonnées */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-xs font-medium focus:border-sage-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nom (optionnel)
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-xs font-medium focus:border-sage-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-xs font-medium focus:border-sage-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@exemple.fr"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-xs font-medium focus:border-sage-600 outline-none"
                  />
                </div>
              </div>

              {/* Bouton direct */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer et recevoir mon devis</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Zéro démarchage intempestif • Juste votre étude claire sous 24h
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
