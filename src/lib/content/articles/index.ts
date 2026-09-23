/**
 * Registre des articles de fond. Un article n'existe sur le site que s'il est
 * listé ici : la page /infos-utiles/, la route /infos-utiles/<slug>/ et le sitemap
 * lisent tous ce tableau.
 */

import type { Article } from "@/lib/content/article";
import { article as coachingDEquipe } from "./coaching-d-equipe";
import { article as coachingEnManagement } from "./coaching-en-management";
import { article as consultantEnManagement } from "./consultant-en-management";
import { article as dafExterneOuExpertComptable } from "./daf-externe-ou-expert-comptable";
import { article as directeurCommercialExternalise } from "./directeur-commercial-externalise";
import { article as intelligenceCollectiveEnEntreprise } from "./intelligence-collective-en-entreprise";
import { article as managerDeTransitionOuDirectionATempsPartage } from "./manager-de-transition-ou-direction-a-temps-partage";
import { article as solitudeDuDirigeant } from "./solitude-du-dirigeant";

// L'ordre compte à date égale : le premier est mis à la une sur /infos-utiles/.
export const articles: Article[] = [
  managerDeTransitionOuDirectionATempsPartage,
  solitudeDuDirigeant,
  dafExterneOuExpertComptable,
  coachingEnManagement,
  intelligenceCollectiveEnEntreprise,
  consultantEnManagement,
  coachingDEquipe,
  directeurCommercialExternalise,
];

/** Du plus récent au plus ancien. */
export function articlesTries(): Article[] {
  return [...articles].sort((a, b) => b.datePublication.localeCompare(a.datePublication));
}

export function trouverArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Un article est indexable s'il est validé par son auteur ET si le site est ouvert. */
export function articlesValides(): Article[] {
  return articles.filter((article) => article.valide);
}
