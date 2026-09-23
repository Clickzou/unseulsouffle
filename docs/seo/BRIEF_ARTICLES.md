# BRIEF RÉDACTION — ARTICLES DE FOND UN SEUL SOUFFLE

Cahier des charges commun à tous les articles. Chaque rédacteur reçoit en plus sa
fiche (slug, requêtes, auteur, pilier).

## 1. Lire avant d'écrire

1. `docs/seo/SEO_MASTER_UNSEULSOUFFLE.md` — surtout § 1 (règle de dosage), § 5
   (maillage, sources), § 6 (rédaction, ton), § 8 (GEO), § 10 (anti-patterns).
2. `docs/seo/ETUDE_MOTS_CLES.md` — pourquoi chaque requête appartient à telle page.
3. `src/lib/content/article.ts` — le type `Article` à produire.
4. `src/lib/content/pilier.ts` — les blocs disponibles (`p`, `h3`, `liste`, `tableau`,
   `encadre`) et leur balisage.
5. `src/lib/content/pilier-dirigeant.ts` — exemple de ton et de structure du site.
6. `src/lib/content/home.ts` — les SEULS faits utilisables sur le cabinet (équipe,
   méthode en 5 étapes, repères : PME/ETI de 10 à 250 salariés, secteurs, zone Toulouse /
   Haute-Garonne / Occitanie, durée 3 à 12 mois, premier échange gratuit).

## 2. Livrable

Un seul fichier : `src/lib/content/articles/<slug>.ts`

```ts
import type { Article } from "@/lib/content/article";

export const article: Article = { ... };
```

- Chaînes entre guillemets doubles ; apostrophe droite `'` comme le reste du site.
- `valide: false`, `datePublication: "2026-09-23"`.
- Ne modifier AUCUN autre fichier. Ne jamais lancer `npm run build`, `next build`,
  `next dev` ni `next start` (un serveur de dev tourne déjà sur le port 3001 et un build
  le casse). Vérification autorisée : `npx tsc --noEmit`.

## 3. Règles de fond — non négociables

- **Aucun chiffre inventé.** Tout chiffre, pourcentage ou statistique vient d'une source
  réellement consultée et est lié en ligne à cette source (`[texte](https://…)`).
- **Au moins 2 sources autoritaires**, vérifiées en ouvrant la page (WebSearch puis
  WebFetch) : Bpifrance / Bpifrance Le Lab, INSEE, DARES, ministère du Travail, ANACT,
  CCI, France Num, URSSAF, service-public.fr, ordres professionnels, études
  académiques. Pas de blog de concurrent, pas de Wikipédia comme source principale. Les
  lister aussi dans `sources` avec leur titre exact. Si une URL ne s'ouvre pas, ne pas la
  citer.
- **Rien d'inventé sur le cabinet** : aucun cas client, aucun résultat chiffré, aucun
  tarif, aucune année d'expérience ou référence qui ne figure pas dans `home.ts`. Pas de
  « chez nos clients, nous constatons que… ».
- **Règle de dosage** (master § 1) : le cabinet promet un conseiller référent dédié au
  problème ; les autres expertises n'interviennent que « si le sujet l'exige ». Jamais
  « cinq experts mobilisés ».
- **Ne pas revendiquer un métier que le cabinet n'exerce pas** (manager de transition,
  expert-comptable). Un article peut en parler pour aider le lecteur à choisir.
- L'article est signé par une vraie personne : écrire à la première personne du pluriel
  (« nous ») pour le cabinet, sans prêter à l'auteur des anecdotes ou des opinions
  personnelles datées. Il relira avant publication.

## 4. Forme

- **Longueur** : 2 000 mots minimum, viser 2 200-2 600 (chapô + essentiel + chapitres +
  FAQ). Compter avec un script avant de rendre. Aucun remplissage.
- **Minto** : la réponse à l'intention dans le chapô, puis les arguments.
- **H2** (`chapitres[].titre`) : 6 à 8, un angle unique chacun (MECE), variantes de la
  requête et requêtes secondaires. **H3** (`{ type: "h3" }`) : 2 à 4 par H2 quand le
  chapitre est long.
- Requête principale dans le H1, dans le chapô (100 premiers mots) et dans au moins un H2.
- `metaTitle` ≤ 42 caractères (le gabarit ajoute « | Un Seul Souffle »), requête en tête.
  `metaDescription` ≤ 150 caractères.
- **Au moins un tableau** (format le plus repris par les moteurs IA).
- **FAQ** : 4 à 6 questions réellement posées sur le sujet, réponses autonomes de 40 à
  90 mots.
- **Ton** : vouvoiement, direct, concret, nommer la douleur avant la solution. Bannir
  « synergie », « écosystème vertueux », « levier de performance », « dans un monde en
  constante évolution », « il est essentiel de ». Pas d'emojis. Pas de tirets cadratins en
  série ; phrases courtes.

## 5. Maillage interne

3 à 6 liens internes contextuels dans le corps, **dont le lien pilier dans le premier
tiers** avec l'ancre donnée dans la fiche. Terminer le dernier chapitre par un renvoi
naturel vers `[diagnostic d'entreprise](/diagnostic/)`. URL autorisées uniquement :

| URL | Ancre exacte à privilégier |
|---|---|
| `/` | cabinet de conseil à Toulouse |
| `/transformation-dirigeant/` | coaching dirigeant · accompagnement dirigeant |
| `/transformation-entreprise/` | conseil en organisation |
| `/daf-externalise-toulouse/` | DAF externalisé |
| `/diagnostic/` | diagnostic d'entreprise |
| `/un-seul-souffle/` | notre méthode |
| `/notre-equipe/` | l'équipe |
| `/muriel-saffroy/` | Muriel Saffroy |
| `/marjorie-anglade/` | Marjorie Anglade |
| `/contact/` | premier échange |

Liens vers les autres articles possibles (`/infos-utiles/<slug>/`) avec les slugs de la
liste des fiches. Varier les ancres ; ne jamais répéter deux fois la même ancre.

## 6. Rendu attendu en fin de mission

Un compte rendu court : nombre de mots, liste des sources avec URL, liens internes posés,
et tout point à faire valider par l'auteur (affirmation délicate, sujet sensible).
