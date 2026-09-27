/**
 * Plancher de 2 000 mots par article de fond (master § 2 et § 6).
 *
 *   node scripts/check-article-word-counts.mjs          # contrôle, code 1 si un article est sous le plancher
 *   node scripts/check-article-word-counts.mjs --tout   # affiche aussi les articles conformes
 *
 * Branché en `prebuild` : un build échoue si un article passe sous 2 000 mots.
 *
 * Les articles PROGRAMMÉS sont contrôlés comme les publiés : ils sortent à leur
 * date sans redéploiement (régénération horaire), donc ce build est le dernier
 * contrôle qu'ils verront avant d'être en ligne.
 *
 * Compté : chapô, L'essentiel, titres et blocs des chapitres, FAQ. Balisage
 * `[ancre](/url/)` et `**gras**` retiré. Non compté : métas, sources, mots-clés.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const PLANCHER = 2000;
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// jiti lit le TypeScript des contenus sans étape de compilation, avec l'alias `@`.
const jiti = createJiti(fileURLToPath(import.meta.url), {
  alias: { "@": path.join(ROOT, "src") },
  interopDefault: true,
});
const { articles } = jiti(path.join(ROOT, "src/lib/content/articles/index.ts"));

function texte(brut) {
  return brut.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
}

function textesDuBloc(bloc) {
  switch (bloc.type) {
    case "p":
    case "h3":
      return [bloc.texte];
    case "liste":
      return bloc.items;
    case "tableau":
      return [...bloc.entetes, ...bloc.lignes.flat()];
    case "encadre":
      return [bloc.titre, bloc.texte];
    default:
      return [];
  }
}

function compter(article) {
  const morceaux = [
    article.chapo,
    article.essentiel.reponse,
    ...article.essentiel.points,
    ...article.chapitres.flatMap((c) => [c.titre, c.exergue ?? "", ...c.blocs.flatMap(textesDuBloc)]),
    ...article.faq.flatMap((q) => [q.q, ...q.r]),
  ];
  return morceaux.map(texte).join(" ").split(/\s+/).filter(Boolean).length;
}

const aujourdhui = new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(new Date());
const tout = process.argv.includes("--tout");

const resultats = articles
  .map((a) => ({ slug: a.slug, date: a.datePublication, mots: compter(a) }))
  .sort((a, b) => a.mots - b.mots);
const sousPlancher = resultats.filter((r) => r.mots < PLANCHER);

for (const r of tout ? resultats : sousPlancher) {
  const statut = r.date <= aujourdhui ? "publié   " : "programmé";
  const marque = r.mots < PLANCHER ? "SOUS LE PLANCHER" : "ok";
  console.log(`${String(r.mots).padStart(5)} mots  ${statut}  ${r.date}  ${r.slug}  ${marque}`);
}

const min = resultats[0];
console.log(
  `\n${resultats.length} articles contrôlés, plancher ${PLANCHER} mots. ` +
    `Le plus court : ${min.slug} (${min.mots} mots).`,
);

if (sousPlancher.length > 0) {
  console.error(
    `\n${sousPlancher.length} article(s) sous ${PLANCHER} mots : enrichir avant de construire ` +
      "(jamais de remplissage — master § 6), ou fusionner avec un article voisin.",
  );
  process.exit(1);
}
