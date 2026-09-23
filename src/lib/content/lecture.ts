/**
 * Dérivés d'affichage des articles, partagés par la liste (/infos-utiles/) et la
 * page article : temps de lecture, rubrique, photo de couverture.
 */

import { piliers } from "@/lib/content/home";
import type { Article } from "@/lib/content/article";

/** Texte brut de l'article, balisage retiré. */
export function texteBrut(article: Article): string {
  const morceaux: string[] = [article.chapo, article.essentiel.reponse, ...article.essentiel.points];
  for (const chapitre of article.chapitres) {
    morceaux.push(chapitre.titre);
    for (const bloc of chapitre.blocs) {
      if (bloc.type === "p" || bloc.type === "h3") morceaux.push(bloc.texte);
      if (bloc.type === "liste") morceaux.push(...bloc.items);
      if (bloc.type === "tableau") morceaux.push(...bloc.lignes.flat());
      if (bloc.type === "encadre") morceaux.push(bloc.titre, bloc.texte);
    }
  }
  for (const question of article.faq) morceaux.push(question.q, ...question.r);
  return morceaux.join(" ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
}

/** Minutes de lecture, sur une base de 230 mots par minute. */
export function minutesLecture(article: Article): number {
  return Math.max(1, Math.round(texteBrut(article).split(/\s+/).length / 230));
}

/** Rubrique affichée : le nom de l'expertise qui porte la même teinte. */
export function rubrique(article: Article): string {
  return piliers.find((pilier) => pilier.accent === article.accent)?.nom ?? "Direction";
}

/**
 * Photo de couverture, générée par scripts/gen-article-images.mjs.
 * L'alt décrit la scène, pas le sujet de l'article (master § 6, images).
 */
const ALTS: Record<string, string> = {
  "manager-de-transition-ou-direction-a-temps-partage":
    "Cadre dirigeant vu de dos arrivant le matin dans le couloir vitré d'une entreprise industrielle",
  "intelligence-collective-en-entreprise":
    "Vue de dessus de mains qui organisent des cartes vierges sur une table de réunion en bois",
  "coaching-d-equipe":
    "Petite équipe réunie en cercle dans une salle lumineuse, vue à travers une paroi vitrée",
  "coaching-en-management":
    "Deux professionnels marchant côte à côte sur la mezzanine d'un atelier, vus de dos",
  "consultant-en-management":
    "Deux personnes relisant des documents à une table de réunion, vues par-dessus l'épaule",
  "daf-externe-ou-expert-comptable":
    "Mains tenant un stylo au-dessus de feuilles vierges sur un bureau en chêne, avec une calculatrice",
  "solitude-du-dirigeant":
    "Silhouette d'un dirigeant seul à la fenêtre d'un bureau vide, à la tombée de la nuit",
  "directeur-commercial-externalise":
    "Poignée de main entre deux professionnels à l'entrée d'un showroom industriel",
};

export function couverture(article: Article): { src: string; alt: string } {
  return {
    src: `/images/articles/${article.slug}.webp`,
    alt: ALTS[article.slug] ?? article.h1,
  };
}
