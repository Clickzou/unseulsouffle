/**
 * Contenu de la page « Le cabinet ».
 *
 * La cordée et les quatre valeurs sont repris du site legacy : ce sont ses deux
 * meilleurs acquis rédactionnels, et le dirigeant qui connaît déjà la marque doit
 * les retrouver. Le reste du site n'est réécrit que là où il le fallait.
 *
 * Les étapes, les accents et l'URL viennent de `home.ts` : une seule source pour
 * le nommage des cinq étapes (master § 10 — le nommage flottant était l'un des
 * constats de l'audit).
 */

export { ACCENTS, etapes, SITE_URL } from "@/lib/content/home";
export type { CleAccent } from "@/lib/content/home";

/** Les cinq passages de l'ascension, chacun rattaché au pilier qui le porte. */
export const cordee: {
  n: string;
  titre: string;
  texte: string;
  pilier: string;
  accent: string;
}[] = [
  {
    n: "1",
    titre: "Étudier la paroi",
    texte:
      "Clarifier la vision, anticiper les obstacles et définir un cap stratégique avant de s'élancer.",
    pilier: "La stratégie",
    accent: "commercial",
  },
  {
    n: "2",
    titre: "Gérer les ressources",
    texte: "Piloter les ressources financières pour sécuriser chaque étape de l'ascension.",
    pilier: "La finance",
    accent: "finance",
  },
  {
    n: "3",
    titre: "Choisir ses coéquipiers",
    texte:
      "Construire une équipe soudée, clarifier les rôles et développer la co-responsabilité collective.",
    pilier: "La coopération",
    accent: "organisation",
  },
  {
    n: "4",
    titre: "Préserver son endurance",
    texte: "Maintenir l'équilibre et la lucidité du dirigeant pour tenir dans la durée.",
    pilier: "La QVT",
    accent: "qvt",
  },
  {
    n: "5",
    titre: "Sécuriser l'exécution",
    texte:
      "Concevoir et piloter les processus pour que la performance soit au rendez-vous sur le terrain.",
    pilier: "La production",
    accent: "production",
  },
];

/**
 * Les quatre valeurs. « Lecture globale » est reformulée : la version legacy
 * annonçait des « solutions globales », ce qui fait entendre au dirigeant qu'on
 * va tout reprendre. La lecture est globale, l'intervention reste ciblée —
 * c'est précisément la règle de dosage (master § 1).
 */
export const valeurs: { titre: string; texte: string; accent: string }[] = [
  {
    titre: "Responsabilité partagée",
    accent: "production",
    texte:
      "Nous avançons à vos côtés avec un engagement réel. Chaque recommandation est confrontée à votre connaissance du terrain avant d'être mise en œuvre — et nous restons jusqu'à ce qu'elle le soit.",
  },
  {
    titre: "Clarté",
    accent: "finance",
    texte:
      "Pas de jargon. Des diagnostics honnêtes, y compris quand ils dérangent, et des plans d'action immédiatement compréhensibles par ceux qui devront les appliquer.",
  },
  {
    titre: "Lecture globale, intervention ciblée",
    accent: "commercial",
    texte:
      "Nous lisons votre entreprise comme un système où stratégie, organisation, finances et dynamique humaine se répondent. Comprendre l'ensemble ne veut pas dire tout reprendre : nous n'ouvrons que les chantiers qui bloquent.",
  },
  {
    titre: "Pérennité",
    accent: "qvt",
    texte:
      "Nous ne réglons pas des problèmes ponctuels pour revenir l'année suivante. Le point de sortie d'une mission de conseil en management est une entreprise capable de continuer sans nous.",
  },
];
