/**
 * Tarifs — source unique pour la page /tarifs/, les sections « Tarif » des pages
 * d'offres et les réponses « Combien coûte… ? » des FAQ.
 *
 * Grille fournie par la cliente le 04/10/2026 (retour sur le site). Elle remplace
 * les estimations de marché posées le 2026-09-23 ; le format collectif de l'étape
 * 01 (112 € par mois) est retiré de l'offre à sa demande.
 *
 * Garde-fou conservé : une ligne marquée `provisoire: true`
 *   - laisse /tarifs/ en noindex, même quand le site est ouvert (INDEXABLE) ;
 *   - n'entre pas dans les données structurées `Offer`.
 * Un prix inventé ne peut donc pas partir chez Google ni chez une IA par oubli.
 */

import type { CleAccent } from "@/lib/content/home";

export type LigneTarif = {
  prestation: string;
  /** Tel qu'affiché : « À partir de 1 450 € HT », « Gratuit »… */
  prix: string;
  /** Montant de départ pour le JSON-LD (HT, en euros). Absent si gratuit ou sur devis. */
  montant?: number;
  /** Unité du montant pour le JSON-LD : mois, séance, forfait… */
  unite?: "mois" | "séance" | "forfait" | "participant";
  detail: string;
  provisoire: boolean;
};

export type OffreTarif = {
  cle: "dirigeant" | "entreprise" | "finance";
  nom: string;
  href: string;
  /** Texte du lien vers la page de l'offre (ancre de la carte d'intention). */
  ancre: string;
  accent: CleAccent;
  accroche: string;
  lignes: LigneTarif[];
  /** Réponse autonome à « Combien coûte… ? », reprise telle quelle en FAQ. */
  reponse: string;
};

export const offres: OffreTarif[] = [
  {
    cle: "dirigeant",
    nom: "Coaching dirigeant",
    href: "/transformation-dirigeant/",
    ancre: "Découvrir le coaching dirigeant",
    accent: "qvt",
    accroche: "Retrouver de la clarté, puis installer la co-responsabilité dans votre équipe.",
    lignes: [
      {
        prestation: "Étape 01 Aligner — coaching individuel",
        prix: "À partir de 1 500 € HT par trimestre",
        montant: 1500,
        unite: "forfait",
        detail:
          "Le coaching individuel se construit par trimestre, avec un nombre de séances défini selon vos besoins et vos objectifs. Séances de 1 h 30, en présentiel ou en visio.",
        provisoire: false,
      },
      {
        prestation: "Étape 02 Coopérer — cercles d'avancée",
        prix: "À partir de 690 € HT par participant",
        montant: 690,
        unite: "participant",
        detail: "Groupes de 6 à 8 personnes, sessions de 3 h sur 3 mois, en présentiel ou en visio.",
        provisoire: false,
      },
      {
        prestation: "Autodiagnostic de qualité de vie au travail",
        prix: "190 € HT",
        montant: 190,
        unite: "forfait",
        detail: "En option : évaluation de votre niveau de surcharge et restitution commentée.",
        provisoire: false,
      },
    ],
    reponse:
      "Le coaching dirigeant se suit en individuel, à partir de 1 500 € HT par trimestre, avec un nombre de séances de 1 h 30 défini selon vos besoins et vos objectifs. Les cercles d'avancée de l'étape Coopérer démarrent à 690 € HT par participant. Le premier échange de 30 minutes est offert.",
  },
  {
    cle: "entreprise",
    nom: "Conseil en organisation",
    href: "/transformation-entreprise/",
    ancre: "Découvrir le conseil en organisation",
    accent: "organisation",
    accroche: "Lire le fonctionnement réel, traiter les chantiers qui bloquent, rendre l'organisation autonome.",
    lignes: [
      {
        prestation: "Audit organisationnel (diagnostic 360°)",
        prix: "À partir de 3 000 € HT",
        montant: 3000,
        unite: "forfait",
        detail: "Immersion terrain, entretiens à tous les niveaux, analyse des flux et restitution. Point d'arrêt possible : vous gardez le diagnostic.",
        provisoire: false,
      },
      {
        prestation: "Accompagnement des chantiers",
        prix: "À partir de 1 600 € HT par mois",
        montant: 1600,
        unite: "mois",
        detail: "Nos interventions démarrent à 2 jours par mois d'expert référent sur les chantiers retenus avec vous, sur 6 à 12 mois.",
        provisoire: false,
      },
    ],
    reponse:
      "Un audit organisationnel démarre à 3 000 € HT au forfait. L'accompagnement des chantiers qui suit démarre à 1 600 € HT par mois, pour deux jours minimum d'expert référent, sur 6 à 12 mois. Le périmètre et le prix sont écrits dans la proposition, avant tout démarrage.",
  },
  {
    cle: "finance",
    nom: "DAF externalisé",
    href: "/daf-externalise-toulouse/",
    ancre: "Découvrir le DAF externalisé",
    accent: "finance",
    accroche: "Trésorerie, tableaux de bord, prévisionnel : le pilotage financier à temps partagé.",
    lignes: [
      {
        prestation: "Mise en place des outils de pilotage",
        prix: "À partir de 1 000 € HT",
        montant: 1000,
        unite: "forfait",
        detail: "Prévisionnel de trésorerie à 12 mois et premier tableau de bord, construits à partir de vos comptes.",
        provisoire: false,
      },
      {
        prestation: "DAF à temps partagé",
        prix: "À partir de 1 600 € HT par mois",
        montant: 1600,
        unite: "mois",
        detail: "À partir de 2 jours par mois : mise à jour du prévisionnel, tableaux de bord, analyse de marge et point mensuel avec vous.",
        provisoire: false,
      },
    ],
    reponse:
      "Un DAF externalisé à temps partagé démarre à 1 600 € HT par mois, à partir de deux jours d'intervention. La mise en place des outils de pilotage (prévisionnel de trésorerie et premier tableau de bord) démarre à 1 000 € HT au forfait. C'est le coût d'une présence régulière, sans le salaire d'un DAF à plein temps.",
  },
];

/** Tarif journalier des interventions en entreprise (FAQ de la home, pages des expertises). */
export const TARIF_JOUR = "de 700 à 1 200 € HT par jour";

/**
 * Réponse transversale « Combien coûte un accompagnement ? » (FAQ de la home),
 * texte de la cliente du 04/10/2026. Le montant du coaching est lu dans `offres`.
 */
export const resumeTarifs: string[] = [
  "L'accompagnement peut prendre deux formes selon votre besoin.",
  `Pour les dirigeants, l'accompagnement individuel démarre à ${offres[0].lignes[0].prix.replace("À partir de ", "")}. Il se construit avec un nombre de séances défini selon vos besoins et vos objectifs.`,
  `Pour les entreprises, nos interventions démarrent à 2 jours d'accompagnement, au tarif ${TARIF_JOUR}. Elles sont proposées sur mesure : accompagnement industriel, organisation, stratégie, finance, coopération ou QVT. Chaque proposition précise clairement le périmètre, les modalités et le prix avant tout démarrage.`,
  "Le premier échange de 30 minutes avec Muriel ou Marjorie est offert pour comprendre votre situation et déterminer le format le plus adapté.",
];

/** Vrai tant qu'au moins un prix affiché est une estimation. */
export const tarifsProvisoires = offres.some((offre) => offre.lignes.some((ligne) => ligne.provisoire));

export function offre(cle: OffreTarif["cle"]): OffreTarif {
  const trouvee = offres.find((o) => o.cle === cle);
  if (!trouvee) throw new Error(`Offre inconnue : ${cle}`);
  return trouvee;
}
