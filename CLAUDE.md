# CLAUDE.md — Meubles&moi

Consignes pour Claude Code sur ce dépôt. Elles s'appliquent à **chaque session**, en local comme dans le cloud.
Réponds au propriétaire du site en français.

## Le projet

Site vitrine de Meubles&moi (aménagement clé en main avec du mobilier de seconde main, Lyon et Paris).

- **Framework** : Next.js 14.2 (App Router), React 18, TypeScript
- **Styles** : Tailwind CSS 3 (`tailwind.config.js`), animations avec `framer-motion`, icônes `lucide-react`
- **Hébergement** : Vercel, projet `meubles-et-moi-site` (équipe `meublesetmoi`), relié au dépôt GitHub `raphaelortega/meubles-et-moi-site`. Un push sur `main` déploie en production, et un push sur une autre branche crée un déploiement de preview.
- **Node** : 18.17 minimum (testé avec Node 22)

### Commandes

| Action | Commande | Détail |
| --- | --- | --- |
| Installer les dépendances | `npm install` | `package-lock.json` est versionné |
| Serveur de dev | `npm run dev` | `next dev -H 0.0.0.0 -p 3000`, soit **http://localhost:3000** |
| Build de production | `npm run build` | `next build`, sortie dans `.next/` |
| Serveur de production | `npm run start` | `next start -p 3000`, après un build |
| Lint | `npm run lint` | `next lint`. ESLint n'est pas installé : la commande lance un assistant de configuration interactif, donc ne pas s'en servir comme vérification. |

Il n'y a pas de tests automatisés. `npm run build` vérifie aussi les types TypeScript : c'est le contrôle de référence avant chaque push.

`./start-server.sh` libère le port 3000, lance `npm run dev` en arrière-plan (logs dans `server.log`) et attend que le site réponde.

### Structure

- `app/page.tsx` : page d'accueil. Elle assemble les sections dans l'ordre Header, Hero, Pillars, Method, Gallery, FAQ, FinalCTA et Footer, plus la fenêtre de devis `QuoteModal`.
- `app/blog/` : blog (`/blog` et un article)
- `app/api/quote/route.ts` : route API qui envoie les demandes de devis par e-mail (Resend, Brevo ou Formspree)
- `components/` : une section du site par fichier. `Testimonials.tsx` et `Simulator.tsx` existent mais ne sont pas affichés sur l'accueil.
- `components/Gallery.tsx` : réalisations clients. Les photos sont dans `public/images/realisations/`, en portrait 3:4, 768×1024.
- `lib/supabase.ts` et `supabase/schema.sql` : enregistrement des demandes dans la table `leads`
- `public/` : images, logo et favicon

### Variables d'environnement

Voir `.env.example`. Les variables utilisées par le code sont `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY` ou `BREVO_API_KEY`, `EMAIL_FROM`, `NOTIFICATION_EMAIL(S)`, `FORMSPREE_ID`, `FORMSPREE_URL` et `NEXT_PUBLIC_FORMSPREE_URLS`. Les variables `VITE_*` ne sont plus lues.
Le site se lance et se compile sans ces variables. Seuls l'envoi et l'enregistrement des devis ne fonctionnent pas.
Ne jamais versionner `.env` ou `.env.local`, ni afficher la valeur d'une clé.

### Points d'attention

- Le Meta Pixel (`components/MetaPixelPageView.tsx` et `app/layout.tsx`) et Vercel Analytics / Speed Insights sont actifs. Ne pas les casser, et ne pas générer de faux événements pendant les tests.
- Ne jamais inventer d'avis client, de chiffre (CO₂, loyers, délais) ni de nom présenté comme réel. Demander les vraies informations au propriétaire, et signaler clairement toute valeur provisoire.
- Garder la charte existante : fond `#FAF8F5`, vert `#063B39`, terracotta `#C55D45`, cartes `rounded-3xl`. Vérifier le rendu sur mobile, tablette et ordinateur.

## Workflow obligatoire : chaque modification est vue avant la production

Le propriétaire veut voir chaque changement avant sa mise en ligne.

### 1. Une branche par demande, jamais de push sur `main`

- Avant toute modification, partir d'un `main` à jour et créer une branche dédiée à la demande : `git fetch origin main && git checkout -b <type>/<sujet> origin/main`.
- Types de branche : `feat/` pour une nouveauté, `fix/` pour une correction, `content/` pour un texte ou une photo, `chore/` pour la maintenance. Exemples : `feat/page-contact`, `content/realisation-paris`.
- Ne jamais committer ni pousser directement sur `main`, ne jamais fusionner sur `main` en local, ne jamais forcer un push sur `main`.
- Une nouvelle demande sans rapport avec la précédente va sur une nouvelle branche.

Pour savoir si la session tourne en local ou dans le cloud : la variable d'environnement `CLAUDE_CODE_REMOTE=true` indique une session cloud (claude.ai/code). Sinon, la session tourne sur l'ordinateur du propriétaire.

### 2. En local, sur l'ordinateur du propriétaire

1. Installer les dépendances si `node_modules/` est absent ou si `package.json` ou `package-lock.json` a changé : `npm install`.
2. Lancer le serveur de dev en arrière-plan, avec `npm run dev` ou `./start-server.sh`, et vérifier que http://localhost:3000 répond.
3. Ouvrir l'aperçu pour le propriétaire (`open http://localhost:3000` sur macOS) et **laisser le serveur tourner** pour qu'il voie les changements en direct (rechargement automatique).
4. Faire les modifications, puis indiquer quelle page ou section regarder.
5. Committer sur la branche au fil de l'eau, mais **ne pousser que lorsque le propriétaire dit que c'est validé**.

### 3. Dans le cloud (claude.ai/code)

Le propriétaire ne peut pas accéder au localhost du conteneur. Après chaque série de modifications :

1. Vérifier que le build passe : `npm install` si besoin, puis `npm run build`. En cas d'échec, corriger avant de pousser.
2. Committer et pousser la branche : `git push -u origin <branche>`.
3. Donner l'**URL de preview Vercel de cette branche** :
   - URL de branche, stable et mise à jour à chaque push : `https://meubles-et-moi-site-git-<branche>-meublesetmoi.vercel.app`. Dans `<branche>`, remplacer `/` et les caractères spéciaux par `-`. Exemple : `content/realisation-paris` devient `meubles-et-moi-site-git-content-realisation-paris-meublesetmoi.vercel.app`. Vercel raccourcit les noms trop longs : en cas de doute, prendre l'URL exacte dans le déploiement.
   - Pour obtenir l'URL exacte et vérifier que le déploiement est en état `READY`, utiliser les outils Vercel (`list_deployments` filtré sur la branche, puis `get_deployment`). Si l'accès à l'équipe `meublesetmoi` est refusé, lancer `authorize_team_access` et donner le lien au propriétaire. Sinon, prendre l'URL dans le commentaire ou le statut que Vercel ajoute sur GitHub (`gh api repos/raphaelortega/meubles-et-moi-site/commits/<sha>/statuses`).
   - Si le déploiement échoue, lire les logs de build Vercel, corriger, pousser à nouveau et redonner l'URL.
4. Ne pas présenter le travail comme terminé tant que l'URL de preview n'a pas été donnée.

### 4. Validation, pull request et fusion

- Quand le propriétaire valide, ouvrir une pull request de la branche vers `main` (`gh pr create --base main`) avec :
  - un titre clair en français ;
  - un résumé des changements visibles sur le site, puis des détails techniques (fichiers touchés) ;
  - l'URL de preview Vercel ;
  - les points restant à confirmer (valeurs provisoires, textes à valider).
- Donner le lien de la PR au propriétaire.
- **Ne jamais fusionner la PR sans son accord explicite** (« tu peux fusionner », « merge », etc.). La fusion sur `main` met le site en production.
- Après la fusion, toute nouvelle demande repart d'un `main` à jour, sur une nouvelle branche.
