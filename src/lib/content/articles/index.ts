/**
 * Registre des articles de fond. Un article n'existe sur le site que s'il est
 * listé ici : la page /infos-utiles/, la route /infos-utiles/<slug>/ et le sitemap
 * lisent tous ce tableau.
 *
 * PUBLICATION PROGRAMMÉE : un article dont `datePublication` est dans le futur
 * est un brouillon — 404, absent de la liste et du sitemap. Il apparaît seul le
 * jour venu : les pages concernées se régénèrent toutes les heures (`revalidate`),
 * sans redéploiement. Calendrier : docs/seo/CALENDRIER_ARTICLES.md.
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

// Calendrier 2026-2027 (docs/seo/CALENDRIER_ARTICLES.md) : un article par lundi.
import { article as calculBfr } from "./calcul-bfr";
import { article as prendreUneDecision } from "./prendre-une-decision";
import { article as organigrammeEntreprise } from "./organigramme-entreprise";
import { article as signesDuBurnOut } from "./signes-du-burn-out";
import { article as forceDeVenteExternalisee } from "./force-de-vente-externalisee";
import { article as seuilDeRentabilite } from "./seuil-de-rentabilite";
import { article as managementToxique } from "./management-toxique";
import { article as gainDeProductivite } from "./gain-de-productivite";
import { article as budgetDeTresorerie } from "./budget-de-tresorerie";
import { article as chargeMentale } from "./charge-mentale";
import { article as delegationDePouvoir } from "./delegation-de-pouvoir";
import { article as politiqueCommerciale } from "./politique-commerciale";
import { article as fluxDeTresorerie } from "./flux-de-tresorerie";
import { article as accompagnementAuChangement } from "./accompagnement-au-changement";
import { article as outilsAmeliorationContinue } from "./outils-amelioration-continue";
import { article as roleDuManager } from "./role-du-manager";
import { article as tauxDeMarge } from "./taux-de-marge";
import { article as preventionRisquesPsychosociaux } from "./prevention-risques-psychosociaux";
import { article as structureMatricielle } from "./structure-matricielle";
import { article as planDActionCommercial } from "./plan-d-action-commercial";
import { article as previsionnelFinancier } from "./previsionnel-financier";
import { article as gestionDeConflit } from "./gestion-de-conflit";
import { article as cartographieDesProcessus } from "./cartographie-des-processus";
import { article as burnOutOuDepression } from "./burn-out-ou-depression";
import { article as gestionDeTresorerie } from "./gestion-de-tresorerie";
import { article as comiteDeDirection } from "./comite-de-direction";
import { article as managementDeProjet } from "./management-de-projet";
import { article as outilsDAideALaDecision } from "./outils-d-aide-a-la-decision";
import { article as qvtOuQvct } from "./qvt-ou-qvct";
import { article as reorganisationEntreprise } from "./reorganisation-entreprise";
import { article as margeNette } from "./marge-nette";
import { article as managerUneEquipe } from "./manager-une-equipe";
import { article as cohesionDEquipe } from "./cohesion-d-equipe";
import { article as tableauDeBordKpi } from "./tableau-de-bord-kpi";
import { article as courbeDuChangement } from "./courbe-du-changement";
import { article as processusMetier } from "./processus-metier";
import { article as tauxDeRentabilite } from "./taux-de-rentabilite";
import { article as leadershipManager } from "./leadership-manager";
import { article as surchargeEmotionnelle } from "./surcharge-emotionnelle";
import { article as croissanceExterne } from "./croissance-externe";
import { article as managerFonctionnel } from "./manager-fonctionnel";
import { article as decisionStrategique } from "./decision-strategique";
import { article as transmissionEntrepriseFamiliale } from "./transmission-entreprise-familiale";
import { article as outilsIntelligenceCollective } from "./outils-intelligence-collective";
import { article as delegationDeSignature } from "./delegation-de-signature";
import { article as seminaireCohesionDEquipe } from "./seminaire-cohesion-d-equipe";
import { article as budgetPrevisionnel } from "./budget-previsionnel";
import { article as gerantDEntreprise } from "./gerant-d-entreprise";
import { article as reprendreUneEntreprise } from "./reprendre-une-entreprise";
import { article as auditerUneEntreprise } from "./auditer-une-entreprise";

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
  // Programmés : invisibles avant leur datePublication.
  calculBfr,
  prendreUneDecision,
  organigrammeEntreprise,
  signesDuBurnOut,
  forceDeVenteExternalisee,
  seuilDeRentabilite,
  managementToxique,
  gainDeProductivite,
  budgetDeTresorerie,
  chargeMentale,
  delegationDePouvoir,
  politiqueCommerciale,
  fluxDeTresorerie,
  accompagnementAuChangement,
  outilsAmeliorationContinue,
  roleDuManager,
  tauxDeMarge,
  preventionRisquesPsychosociaux,
  structureMatricielle,
  planDActionCommercial,
  previsionnelFinancier,
  gestionDeConflit,
  cartographieDesProcessus,
  burnOutOuDepression,
  gestionDeTresorerie,
  comiteDeDirection,
  managementDeProjet,
  outilsDAideALaDecision,
  qvtOuQvct,
  reorganisationEntreprise,
  margeNette,
  managerUneEquipe,
  cohesionDEquipe,
  tableauDeBordKpi,
  courbeDuChangement,
  processusMetier,
  tauxDeRentabilite,
  leadershipManager,
  surchargeEmotionnelle,
  croissanceExterne,
  managerFonctionnel,
  decisionStrategique,
  transmissionEntrepriseFamiliale,
  outilsIntelligenceCollective,
  delegationDeSignature,
  seminaireCohesionDEquipe,
  budgetPrevisionnel,
  gerantDEntreprise,
  reprendreUneEntreprise,
  auditerUneEntreprise,
];

/** Date du jour à Paris, au format AAAA-MM-JJ (celui de `datePublication`). */
function aujourdhui(): string {
  return new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(new Date());
}

/**
 * Aperçu des brouillons pour la relecture : `APERCU_BROUILLONS=1` dans
 * .env.local, ou dans les variables « Preview » de Vercel. Jamais en production.
 */
const APERCU = process.env.APERCU_BROUILLONS === "1" && process.env.VERCEL_ENV !== "production";

/** Publié = date de publication atteinte. Avant, c'est un brouillon invisible. */
export function estPublie(article: Article): boolean {
  return APERCU || article.datePublication <= aujourdhui();
}

export function articlesPublies(): Article[] {
  return articles.filter(estPublie);
}

/** Articles publiés, du plus récent au plus ancien. */
export function articlesTries(): Article[] {
  return articlesPublies().sort((a, b) => b.datePublication.localeCompare(a.datePublication));
}

/** Ne renvoie qu'un article publié : un brouillon répond 404. */
export function trouverArticle(slug: string): Article | undefined {
  const article = articles.find((a) => a.slug === slug);
  return article && estPublie(article) ? article : undefined;
}

/** Un article est indexable s'il est publié, validé par son auteur, et si le site est ouvert. */
export function articlesValides(): Article[] {
  return articlesPublies().filter((article) => article.valide);
}
