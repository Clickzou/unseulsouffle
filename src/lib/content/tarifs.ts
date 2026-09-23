/**
 * Tarifs — source unique pour la page /tarifs/, les sections « Tarif » des pages
 * d'offres et les réponses « Combien coûte… ? » des FAQ.
 *
 * ⚠ PRIX PROVISOIRES. Seul « 112 € par mois » (format collectif de l'étape 01) est
 * un prix réel, repris du site legacy. Tous les autres montants sont des
 * estimations de marché posées le 2026-09-23 en attendant la grille de la
 * cliente, et marqués `provisoire: true`.
 *
 * Garde-fou : tant qu'une ligne est provisoire,
 *   - /tarifs/ reste en noindex, même quand le site est ouvert (INDEXABLE) ;
 *   - la ligne n'entre pas dans les données structurées `Offer`.
 * Un prix inventé ne peut donc pas partir chez Google ni chez une IA par oubli.
 * Remplacer le montant par le vrai, puis passer `provisoire` à false.
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
        prestation: "Étape 01 Aligner — format collectif",
        prix: "À partir de 112 € par mois",
        montant: 112,
        unite: "mois",
        detail: "Abonnement mensuel : 4 sessions en visio par mois avec d'autres dirigeants, webinaires, modules et outils en replay.",
        provisoire: false,
      },
      {
        prestation: "Étape 01 Aligner — format individuel",
        prix: "À partir de 1 450 € HT",
        montant: 1450,
        unite: "forfait",
        detail: "Coaching individuel : 5 séances de 1 h 30, en présentiel ou en visio, sur 3 mois.",
        provisoire: true,
      },
      {
        prestation: "Étape 02 Coopérer — cercles d'avancée",
        prix: "À partir de 690 € HT par participant",
        montant: 690,
        unite: "participant",
        detail: "Groupes de 6 à 8 personnes, sessions de 3 h sur 3 mois, en présentiel ou en visio.",
        provisoire: true,
      },
      {
        prestation: "Autodiagnostic de qualité de vie au travail",
        prix: "190 € HT",
        montant: 190,
        unite: "forfait",
        detail: "En option : évaluation de votre niveau de surcharge et restitution commentée.",
        provisoire: true,
      },
    ],
    reponse:
      "Le coaching dirigeant se suit en collectif à partir de 112 € par mois (4 sessions en visio par mois) ou en individuel à partir de 1 450 € HT pour 5 séances de 1 h 30. Les cercles d'avancée de l'étape Coopérer démarrent à 690 € HT par participant. Le premier échange de 30 minutes est gratuit.",
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
        prix: "À partir de 4 900 € HT",
        montant: 4900,
        unite: "forfait",
        detail: "Immersion terrain, entretiens à tous les niveaux, analyse des flux et restitution. Point d'arrêt possible : vous gardez le diagnostic.",
        provisoire: true,
      },
      {
        prestation: "Accompagnement des chantiers",
        prix: "À partir de 2 850 € HT par mois",
        montant: 2850,
        unite: "mois",
        detail: "Environ 3 jours par mois de conseiller référent sur les chantiers retenus avec vous, sur 6 à 12 mois.",
        provisoire: true,
      },
    ],
    reponse:
      "Un audit organisationnel démarre à 4 900 € HT au forfait. L'accompagnement des chantiers qui suit démarre à 2 850 € HT par mois, soit environ trois jours de conseiller référent, sur 6 à 12 mois. Le périmètre et le prix sont écrits dans la proposition, avant tout démarrage.",
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
        prix: "À partir de 2 100 € HT",
        montant: 2100,
        unite: "forfait",
        detail: "Prévisionnel de trésorerie à 12 mois et premier tableau de bord, construits à partir de vos comptes.",
        provisoire: true,
      },
      {
        prestation: "DAF à temps partagé",
        prix: "À partir de 1 400 € HT par mois",
        montant: 1400,
        unite: "mois",
        detail: "2 jours par mois : mise à jour du prévisionnel, tableaux de bord, analyse de marge et point mensuel avec vous.",
        provisoire: true,
      },
    ],
    reponse:
      "Un DAF externalisé à temps partagé démarre à 1 400 € HT par mois pour deux jours d'intervention. La mise en place des outils de pilotage (prévisionnel de trésorerie et premier tableau de bord) démarre à 2 100 € HT au forfait. C'est le coût d'une présence régulière, sans le salaire d'un DAF à plein temps.",
  },
];

/** Réponse transversale « Combien coûte un accompagnement ? » (FAQ de la home). */
export const resumeTarifs = `Le coaching dirigeant démarre à ${offres[0].lignes[0].prix.replace("À partir de ", "")} en format collectif. Un DAF externalisé à temps partagé démarre à ${offres[2].lignes[1].prix.replace("À partir de ", "")}, et un audit organisationnel à ${offres[1].lignes[0].prix.replace("À partir de ", "")} au forfait. Le premier échange de 30 minutes est gratuit, et chaque proposition précise par écrit le périmètre et le prix avant tout démarrage.`;

/** Vrai tant qu'au moins un prix affiché est une estimation. */
export const tarifsProvisoires = offres.some((offre) => offre.lignes.some((ligne) => ligne.provisoire));

export function offre(cle: OffreTarif["cle"]): OffreTarif {
  const trouvee = offres.find((o) => o.cle === cle);
  if (!trouvee) throw new Error(`Offre inconnue : ${cle}`);
  return trouvee;
}
