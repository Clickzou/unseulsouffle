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
  "calcul-bfr":
    "Bureau d'une PME en fin de journée, factures et classeurs sur une table, un responsable de dos",
  "prendre-une-decision":
    "Deux dirigeants de dos devant un tableau blanc couvert de colonnes et de flèches dans un bureau de PME",
  "organigramme-entreprise":
    "Deux personnes de dos devant un tableau blanc couvert de fiches repositionnables, dans un bureau d'atelier",
  "signes-du-burn-out":
    "Silhouette de dos assise seule à un bureau en fin de journée, lampe allumée, dossiers empilés",
  "force-de-vente-externalisee":
    "Commercial de dos consultant un carnet dans sa voiture garée devant l'entrée d'une PME industrielle",
  "seuil-de-rentabilite":
    "Une dirigeante de dos annote un tableau imprimé sur un établi, près des machines d'un atelier",
  "management-toxique":
    "Couloir d'atelier en fin de journée, un chef d'équipe de dos face à deux salariés flous près d'un établi",
  "gain-de-productivite":
    "Atelier de production d'une PME, un opérateur de dos près d'une ligne, chariots de pièces en attente",
  "budget-de-tresorerie":
    "Dirigeante de dos devant un bureau couvert de relevés bancaires et d'une calculatrice, fenêtre d'atelier en arrière-plan",
  "charge-mentale":
    "Bureau de PME en fin de journée, une dirigeante de dos devant un mur couvert de post-it",
  "delegation-de-pouvoir":
    "Responsable d'atelier de dos, tenant un classeur, face à une ligne de production dans une PME",
  "politique-commerciale":
    "Commercial de dos consultant un classeur de tarifs sur le comptoir du showroom d'une PME",
  "flux-de-tresorerie":
    "Une dirigeante de dos annote un échéancier papier sur un bureau, près d'une fenêtre donnant sur un entrepôt",
  "accompagnement-au-changement":
    "Responsable d'équipe expliquant un nouveau plan d'atelier à des opérateurs réunis autour d'un établi",
  "outils-amelioration-continue":
    "Chef d'équipe et opérateur devant un tableau magnétique dans l'atelier d'une PME, vus de dos",
  "role-du-manager":
    "Une responsable d'atelier de dos échange avec deux opérateurs près d'une ligne de production, lumière du matin",
  "taux-de-marge":
    "Dirigeante et magasinier de dos dans un entrepôt de PME, près d'étagères de cartons, en fin de journée",
  "prevention-risques-psychosociaux":
    "Petit groupe de salariés réunis autour d'une table dans la salle de pause d'un atelier, vus de dos",
  "structure-matricielle":
    "Deux responsables de dos devant un planning mural dans le bureau d'études d'une PME industrielle",
  "plan-d-action-commercial":
    "Deux commerciaux de dos devant un tableau blanc couvert de post-it dans le bureau d'une PME",
  "previsionnel-financier":
    "Dirigeante de dos relisant des documents imprimés sur un bureau, fenêtre donnant sur un atelier",
  "gestion-de-conflit":
    "Deux collègues de dos discutent debout près d'un établi, un troisième écoute en retrait",
  "cartographie-des-processus":
    "Un groupe de dos devant un mur couvert de post-it et de flèches dans la salle de réunion d'un atelier",
  "burn-out-ou-depression":
    "Une femme de dos, assise seule à son bureau en fin de journée, regarde par la fenêtre d'un open space vide",
  "gestion-de-tresorerie":
    "Une dirigeante de dos penchée sur un bureau couvert de relevés et d'un calendrier, dans une PME",
  "comite-de-direction":
    "Salle de réunion d'une PME, plusieurs responsables autour d'une table vus de dos, carnets ouverts",
  "management-de-projet":
    "Chef d'atelier de dos devant un tableau de suivi à post-it colorés, près des machines d'une PME industrielle",
  "outils-d-aide-a-la-decision":
    "Une dirigeante de dos compare deux dossiers imprimés sur une table de réunion, près d'une fenêtre d'atelier",
  "qvt-ou-qvct":
    "Petite équipe debout autour d'un tableau blanc dans un atelier de PME, vue de dos, discussion en cours",
  "reorganisation-entreprise":
    "Deux responsables de dos devant un tableau blanc couvert de post-it, dans une salle de réunion d'atelier",
  "marge-nette":
    "Deux personnes de dos comparent des relevés imprimés sur une table de réunion, dans un bureau de PME",
  "manager-une-equipe":
    "Point d'équipe debout dans un atelier de PME, une responsable de dos face à quatre collaborateurs flous",
  "cohesion-d-equipe":
    "Petite équipe debout autour d'un établi en fin de journée, vue de dos, un café posé sur une caisse",
  "tableau-de-bord-kpi":
    "Réunion de direction floue autour d'une table, feuilles imprimées et tasses de café au premier plan",
  "courbe-du-changement":
    "Atelier de PME pendant un réaménagement, deux salariés de dos déplaçant un établi",
  "processus-metier":
    "Deux personnes de dos devant un mur couvert de post-it dans le bureau d'un atelier de PME",
  "taux-de-rentabilite":
    "Dirigeante de dos annotant un bilan imprimé sur une table de réunion, atelier visible derrière la vitre",
  "leadership-manager":
    "Une responsable d'atelier de dos échange avec trois opérateurs flous autour d'un établi, en début de poste",
  "surcharge-emotionnelle":
    "Dirigeante debout seule près d'une fenêtre de bureau, en pause entre deux rendez-vous",
  "croissance-externe":
    "Deux dirigeants de dos traversant la cour d'un site industriel qu'ils visitent, dossiers sous le bras",
  "manager-fonctionnel":
    "Deux responsables en blouse blanche, de dos, au bord d'un atelier agroalimentaire",
  "decision-strategique":
    "Petit groupe autour d'une table de réunion près d'une fenêtre, silhouettes floues, documents étalés",
  "transmission-entreprise-familiale":
    "Deux personnes de générations différentes marchant côte à côte dans l'allée d'un entrepôt, vues de dos",
  "outils-intelligence-collective":
    "Petit groupe assis en cercle dans une salle de réunion d'atelier, carnets ouverts sur les genoux",
  "delegation-de-signature":
    "Mains posées près d'un parapheur ouvert et d'un stylo sur le bureau d'un service administratif de PME",
  "seminaire-cohesion-d-equipe":
    "Petit groupe de collègues de dos marchant sur un sentier de campagne, sacs à dos, lumière du matin",
  "budget-previsionnel":
    "Une dirigeante de dos consulte des tableaux imprimés sur une table de réunion, près d'une fenêtre d'atelier",
  "gerant-d-entreprise":
    "Un dirigeant vu de dos traverse l'atelier de sa PME en fin de journée, carnet à la main",
  "reprendre-une-entreprise":
    "Deux personnes de dos traversent un atelier de PME en fin de journée, dossier sous le bras",
  "auditer-une-entreprise":
    "Une consultante de dos observe un chef d'atelier flou montrant une ligne de production, carnet à la main",
};

export function couverture(article: Article): { src: string; alt: string } {
  return {
    src: `/images/articles/${article.slug}.webp`,
    alt: ALTS[article.slug] ?? article.h1,
  };
}
