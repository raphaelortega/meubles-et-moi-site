import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { LeadFormData } from '@/types';

// Récupération des identifiants Supabase côté client / Next.js
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Vérification de la configuration active
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project') &&
  supabaseUrl.startsWith('https://')
);

// Initialisation du client Supabase
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Enregistre une demande de devis dans Supabase (table 'leads')
 * En l'absence temporaire de clés Supabase réelles, active un mode démo
 * et stocke la demande dans le localStorage du navigateur pour inspection immédiate.
 */
export async function submitLead(
  lead: LeadFormData,
  options?: { skipEmailNotification?: boolean }
): Promise<{
  success: boolean;
  isDemo: boolean;
  message?: string;
  error?: string;
}> {
  // 1. Déclenchement de l'API d'envoi d'e-mails (uniquement si non déjà envoyé directement)
  if (!options?.skipEmailNotification) {
    try {
      const apiRes = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (apiRes.ok) {
        const apiData = await apiRes.json();
        console.info('[Meubles&moi] Notification e-mail déclenchée avec succès vers:', apiData.recipients);
      }
    } catch (apiErr) {
      console.warn('[Meubles&moi] Notification API e-mail warning:', apiErr);
    }
  }

  // 2. Enregistrement dans Supabase si configuré
  if (isSupabaseConfigured && supabase) {
    try {
      const payload = {
        nom: lead.nom.trim(),
        prenom: lead.prenom.trim(),
        email: lead.email.trim().toLowerCase(),
        telephone: lead.telephone.trim(),
        type_bien: lead.type_bien,
        surface_m2: lead.surface_m2 ? Number(lead.surface_m2) : null,
        ville: lead.ville.trim() || 'Lyon',
        code_postal: lead.code_postal?.trim() || null,
        date_souhaitee: lead.date_souhaitee,
        pack_selectionne: lead.pack_selectionne || null,
        objectif_fiscal: lead.objectif_fiscal || null,
        message: lead.message?.trim() || null,
        statut: 'nouveau',
        source: 'nextjs_landing_meubles_et_moi',
      };

      const { error } = await supabase.from('leads').insert([payload]).select();

      if (error) {
        console.error('[Meubles&moi] Erreur Supabase:', error);
        return {
          success: false,
          isDemo: false,
          error: error.message || 'Une erreur est survenue lors de l\'enregistrement de votre demande.',
        };
      }

      return {
        success: true,
        isDemo: false,
        message: 'Votre demande a été transmise avec succès à notre équipe lyonnaise.',
      };
    } catch (err: any) {
      console.error('[Meubles&moi] Exception Supabase:', err);
      return {
        success: false,
        isDemo: false,
        error: err?.message || 'Impossible de joindre le serveur Supabase.',
      };
    }
  }

  // 2. Mode Démonstration sans Supabase configuré
  if (typeof window !== 'undefined') {
    try {
      const existingRaw = localStorage.getItem('meubles_et_moi_leads') || '[]';
      const existing = JSON.parse(existingRaw);
      const newLead = {
        ...lead,
        id: 'demo_' + Date.now(),
        created_at: new Date().toISOString(),
      };
      existing.push(newLead);
      localStorage.setItem('meubles_et_moi_leads', JSON.stringify(existing));
      console.info('[Meubles&moi Demo] Prospect sauvegardé localement:', newLead);
    } catch (e) {
      // ignore
    }
  }

  // Délai réaliste
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    isDemo: true,
    message: 'Demande enregistrée en mode aperçu (renseignez NEXT_PUBLIC_SUPABASE_URL et ANON_KEY dans .env.local pour brancher votre base de données réelle).',
  };
}
