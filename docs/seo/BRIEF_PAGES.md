# BRIEF — OPTIMISATION DU CORPS DES PAGES DU MENU

Le title, le H1 et le chapô de chaque page portent déjà leur requête (commit du 23/09).
Il reste à travailler **le corps du texte** : aujourd'hui les H2 et les paragraphes parlent
encore l'ancien vocabulaire (« transformation », « accompagnement du dirigeant »…).

## 1. Lire avant d'écrire

- `docs/seo/ETUDE_MOTS_CLES.md` — requête principale et secondaires de chaque page, volumes.
- `docs/seo/SEO_MASTER_UNSEULSOUFFLE.md` — § 1 (règle de dosage), § 4 (carte d'intention),
  § 5 (maillage), § 6 (densité SEO, ton), § 10 (anti-patterns).
- Le fichier de contenu de ta page (voir ta fiche) et `src/lib/content/pilier.ts` (blocs).

## 2. Ce qu'il faut faire

1. **H2** : 3 à 5 H2 portent la requête principale ou une secondaire, sous une forme
   naturelle et variée (jamais la même formulation deux fois). Les autres H2 restent
   libres. Un H2 reste un vrai titre de section, lisible par un dirigeant.
2. **Premier paragraphe de chaque grande section** : la requête ou une variante quand c'est
   naturel. Densité visée pour la requête principale : environ 1 % du texte, sans
   bourrage. Toulouse / Haute-Garonne / Occitanie : 3 à 5 mentions naturelles sur la page.
3. **Requêtes secondaires** : chacune apparaît au moins deux fois dans le corps.
4. **Maillage** : les liens internes utilisent les ancres de la carte d'intention
   (`/transformation-dirigeant/` → « coaching dirigeant » ou « accompagnement dirigeant »,
   `/transformation-entreprise/` → « conseil en organisation », `/daf-externalise-toulouse/`
   → « DAF externalisé », `/diagnostic/` → « diagnostic d'entreprise », `/` → « cabinet de
   conseil à Toulouse »). Varier ; ne pas répéter une ancre à l'identique dans la page.
5. **Ne rien casser** : garder la structure, les types, les blocs `etape`, `comparatif`,
   `expertises`, les encadrés `aFournir`, la FAQ. Réécrire, pas empiler. Si une phrase
   existante est bonne, la garder.

## 3. Interdits

- **Aucun fait nouveau inventé** sur le cabinet : pas de chiffre, cas, client, tarif,
  certification, année d'expérience. Tu reformules ce qui existe.
- **Règle de dosage** : un conseiller référent, les autres expertises « si le sujet
  l'exige ». Jamais « cinq expertises mobilisées ».
- Ne jamais écrire que le cabinet est expert-comptable ou manager de transition.
- Ne modifier QUE les fichiers de ta fiche. Ne jamais lancer `npm run build`, `next build`,
  `next dev`, `next start` (le serveur de dev de JC tourne sur le port 3001 ; un build le
  casse). Vérification : `npx tsc --noEmit`.
- Vouvoiement, phrases courtes, pas d'emojis, pas de jargon de consultant.

## 4. Compte rendu

Liste des H2 avant → après, nombre d'occurrences de la requête principale et des
secondaires avant → après, liens modifiés, et tout doute.
