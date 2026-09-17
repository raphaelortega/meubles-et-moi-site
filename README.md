# Meubles&moi 🛋️🌿

Site web moderne, élégant et ultra-performant pour l'entreprise **Meubles&moi**, solution d'ameublement clé en main écoresponsable basée sur le réemploi de mobilier soigné de seconde main en circuit court (Lyon et sa région).

---

## 🚀 Fonctionnalités & Expérience Utilisateur

1. **Header & Navigation Sticky** : Logo avec casse stricte **Meubles&moi**, micro-bannière Lyon & 48h, ancres fluides et bouton CTA de devis.
2. **Hero Section Valorisation & Réassurance** :
   - Titre percutant : *"Valorisez votre patrimoine immobilier avec une location meublée performante"*
   - 2 CTA (Simulation/Devis & Découvrir la méthode)
   - 3 badges réassurance : ⚡ *Installation express 48h*, ♻️ *100% Seconde main sélectionnée*, 📑 *Accompagnement fiscal LMNP*.
   - Métriques flottantes (+22% de loyer, 0 déchet).
3. **Les 3 Piliers de Rentabilité & RSE** :
   - Rentabilité locative maximisée (+15% à +30% vs nu, réduction de vacance locative).
   - Optimisation fiscale LMNP (amortissement comptable à 100% du mobilier sur 5-10 ans).
   - Démarche circulaire sans effort (mobilier revalorisé, reconditionné localement à Lyon, bilan carbone / 5).
4. **Simulateur Interactif de Rendement & Défiscalisation LMNP** :
   - Sélecteur Studio / T2 / T3+, surface en m², loyer nu actuel, TMI de l'investisseur.
   - Calcul en temps réel du surloyer annuel, de l'économie d'impôt annuelle, du gain net sur 3 ans et du CO2 évité.
   - Bouton d'injection directe des résultats dans le formulaire de devis.
5. **Présentation des Packs Clé en Main** :
   - **Pack Studio / T1** (18-30 m²)
   - **Pack T2 Confort** (35-52 m² - Best-seller)
   - **Pack T3+ & Colocation** (55-85 m²+)
   - Inventaire détaillé par pièce (Chambre, Séjour, Coin Repas, Décoration & Électroménager) et pré-sélection dans le devis.
6. **Notre Méthode en 4 Étapes** : Audit 24h, Chine & Harmonisation, Installation 48h, Facturation LMNP.
7. **Témoignages Bailleurs Lyonnais** : Retours d'expérience concrets à Lyon 6e, Villeurbanne et Jean Macé.
8. **Formulaire de Contact & Devis relié à Supabase** :
   - Champs : Nom, Prénom, Email, Téléphone, Type de bien, Surface, Ville, Date souhaitée, Objectif fiscal, Message.
   - Enregistrement direct dans la table Supabase `leads`.
   - Mode résilient & démo avec sauvegarde locale automatique si les clés Supabase ne sont pas encore configurées.
9. **FAQ Spécialisée LMNP & Seconde Main** : Accordéon interactif répondant aux questions des investisseurs.
10. **Footer Complet** : Coordonnées à Lyon, mentions légales, réseaux sociaux, engagement RSE.

---

## 🎨 Charte Graphique & Tokens de Marque

- **Fond principal** : Écru naturel / Blanc cassé (`#FAF8F5`, `#F9F9F6`)
- **Couleur Primaire** : Vert sauge / olive naturel (`#2D5A46`)
- **Couleur d'Accentuation / CTA** : Terre cuite / terracotta chaleureux (`#C86D51`, hover `#B35D43`)
- **Textes & Titres** : Gris anthracite profond (`#1E293B`)
- **Typographie** : *Plus Jakarta Sans*

---

## 🛠️ Stack Technique

- **Framework** : React 18 + Vite 6 + TypeScript
- **Styling** : Tailwind CSS v3
- **Icônes** : Lucide React
- **Base de données / Backend** : Supabase (`@supabase/supabase-js`)

---

## 📦 Installation & Démarrage

### 1. Lancer le serveur de développement

```bash
npm run dev
```

L'application démarre immédiatement sur `http://localhost:3000`.

### 2. Compiler pour la production

```bash
npm run build
```

Le résultat optimisé et minifié est généré dans le dossier `dist/`.

---

## 🗄️ Configuration Supabase

Le script SQL complet est disponible dans `supabase/schema.sql`.

1. Rendez-vous sur votre projet [Supabase](https://supabase.com).
2. Ouvrez le **SQL Editor** et exécutez le script contenu dans `supabase/schema.sql`. Il créera la table `leads` avec la politique de sécurité RLS adaptée pour la collecte publique des devis.
3. Renseignez vos identifiants dans votre fichier `.env.local` :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-anon-publique
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon-publique
```

*Note : Même sans renseigner les clés Supabase, le formulaire fonctionne en mode prévisualisation et persiste les prospects dans le localStorage du navigateur avec feedback visuel.*
