-- ==============================================================================
-- SCHEMA SUPABASE POUR MEUBLES&MOI
-- Table des prospects / demandes de devis d'ameublement & simulation LMNP
-- ==============================================================================

-- 1. Création de la table 'leads'
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Coordonnées du contact
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    email TEXT NOT NULL,
    telephone TEXT NOT NULL,
    
    -- Caractéristiques du bien immobilier
    type_bien TEXT NOT NULL,          -- 'Studio / T1', 'T2 (2 pièces)', 'T3 (3 pièces)', 'T4+ ou Colocation', 'Immeuble de rapport'
    surface_m2 NUMERIC,               -- Surface en m2
    ville TEXT NOT NULL DEFAULT 'Lyon',
    code_postal TEXT,
    
    -- Projet & Planning
    date_souhaitee TEXT,              -- 'Express sous 48h', 'Dans le mois', 'D'ici 2 à 3 mois', 'Simple estimation'
    pack_selectionne TEXT,            -- 'Pack Studio / T1', 'Pack T2 Confort', 'Pack T3+ & Coloc', 'Sur-mesure'
    objectif_fiscal TEXT,             -- 'LMNP au Réel (Amortissement)', 'Micro-BIC', 'Colocation rentabilité', 'Autre'
    message TEXT,
    
    -- Suivi interne
    statut TEXT NOT NULL DEFAULT 'nouveau', -- 'nouveau', 'contacté', 'devis_envoye', 'signe', 'archive'
    source TEXT DEFAULT 'site_web_landing'
);

-- 2. Index pour accélérer les recherches et filtres administratifs
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON public.leads (email);
CREATE INDEX IF NOT EXISTS leads_statut_idx ON public.leads (statut);

-- 3. Activation du Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4. Politique d'insertion publique (permet aux visiteurs anonymes de soumettre une demande de devis)
DROP POLICY IF EXISTS "Les visiteurs anonymes peuvent créer un lead" ON public.leads;
CREATE POLICY "Les visiteurs anonymes peuvent créer un lead" 
ON public.leads 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 5. Politique de lecture restreinte (seuls les utilisateurs authentifiés/admins ont accès)
DROP POLICY IF EXISTS "Lecture réservée aux administrateurs" ON public.leads;
CREATE POLICY "Lecture réservée aux administrateurs" 
ON public.leads 
FOR SELECT 
TO authenticated 
USING (true);

-- Commentaire descriptif sur la table
COMMENT ON TABLE public.leads IS 'Demandes de devis et simulations d''ameublement écoresponsable Meubles&moi (Lyon)';
