/**
 * Questionnaire du diagnostic d'entreprise (/diagnostic/questionnaire/).
 *
 * 1 question de profil + 20 affirmations, 4 par pilier, notées sur 4 niveaux.
 * Le calcul se fait dans le navigateur. Les réponses ne partent que si le
 * visiteur laisse ses coordonnées (consentement) : /api/diagnostic/ refait
 * alors le même calcul côté serveur, avec `resultatDiagnostic`.
 *
 * ⚠ À FAIRE RELIRE PAR LA CLIENTE : les affirmations et les recommandations ont
 * été rédigées pour la refonte (2026-09-23). Elles ne citent aucun chiffre ni
 * aucun fait nouveau sur le cabinet, mais elles parlent en son nom.
 */

import type { CleAccent } from "@/lib/content/home";

export type PilierDiagnostic = {
  accent: CleAccent;
  nom: string;
  affirmations: string[];
  /** Autorise la réponse « Non concerné » (ex. production pour une entreprise de services). */
  nonConcerneAutorise?: boolean;
  recommandation: {
    titre: string;
    texte: string;
    href: string;
    ancre: string;
  };
  /** Trois actions concrètes, faisables sans aide extérieure. */
  actions: string[];
  /** La demande précise à formuler au cabinet (préremplit le message de contact). */
  demande: string;
};

export const REPONSES = [
  { valeur: 0, libelle: "Pas du tout" },
  { valeur: 1, libelle: "Plutôt non" },
  { valeur: 2, libelle: "Plutôt oui" },
  { valeur: 3, libelle: "Tout à fait" },
] as const;

export const PROFIL = {
  question: "Combien de salariés compte votre entreprise ?",
  options: ["Moins de 10", "10 à 49", "50 à 99", "100 à 250", "Plus de 250"],
};

export const PILIERS_DIAGNOSTIC: PilierDiagnostic[] = [
  {
    accent: "finance",
    nom: "Finance & pilotage",
    affirmations: [
      "Vous savez aujourd'hui où sera votre trésorerie dans trois mois.",
      "Vous disposez d'un tableau de bord mis à jour chaque mois, et vous le lisez vraiment.",
      "Vous connaissez la marge de chacune de vos activités ou gammes.",
      "Vos décisions d'investissement s'appuient sur un prévisionnel chiffré.",
    ],
    recommandation: {
      titre: "Votre priorité : le pilotage financier",
      texte:
        "Vos décisions manquent d'une base chiffrée fiable. Un DAF externalisé installe le prévisionnel de trésorerie et les tableaux de bord qui manquent, à temps partagé, sans recruter à plein temps.",
      href: "/daf-externalise-toulouse/",
      ancre: "Découvrir le DAF externalisé",
    },
    actions: [
      "Listez les entrées et sorties d'argent certaines des trois prochains mois : c'est l'ébauche de votre prévisionnel de trésorerie.",
      "Choisissez trois chiffres à suivre chaque mois (trésorerie, marge, carnet de commandes) et fixez-vous une date pour les regarder.",
      "Demandez à votre expert-comptable une situation intermédiaire, pour ne pas attendre le bilan annuel.",
    ],
    demande:
      "Nous manquons de visibilité financière. Je souhaite mettre en place un prévisionnel de trésorerie et un tableau de bord mensuel. Pouvez-vous me dire comment un DAF externalisé pourrait intervenir chez nous, à quel rythme et pour quel budget ?",
  },
  {
    accent: "organisation",
    nom: "Organisation & coopération",
    affirmations: [
      "Chacun sait qui décide quoi, sans avoir à passer par vous.",
      "Les décisions prises en réunion sont appliquées sans être rediscutées ensuite.",
      "Vos services se coordonnent sans que vous deviez arbitrer entre eux.",
      "Un départ dans l'encadrement ne mettrait pas l'entreprise en difficulté.",
    ],
    recommandation: {
      titre: "Votre priorité : l'organisation",
      texte:
        "La structure ne suit plus la croissance : les décisions remontent, les services tirent chacun de leur côté. Le conseil en organisation part du fonctionnement réel pour traiter ce qui bloque, et seulement cela.",
      href: "/transformation-entreprise/",
      ancre: "Découvrir le conseil en organisation",
    },
    actions: [
      "Notez pendant deux semaines les décisions qui remontent jusqu'à vous : vous verrez où les rôles sont flous.",
      "Pour chaque décision récurrente, écrivez qui décide, qui est consulté et qui est informé.",
      "En réunion, terminez chaque sujet par une décision écrite, un responsable et une date.",
    ],
    demande:
      "Notre organisation ne suit plus notre croissance : les décisions remontent toutes vers moi et les services se coordonnent mal. Je souhaite un audit organisationnel pour comprendre ce qui bloque réellement. Comment se déroule-t-il et que comprend-il ?",
  },
  {
    accent: "commercial",
    nom: "Stratégie commerciale",
    affirmations: [
      "Vous savez précisément pourquoi vos clients vous choisissent plutôt qu'un concurrent.",
      "Vous suivez des indicateurs commerciaux (devis en cours, taux de transformation) au moins chaque mois.",
      "Le développement commercial ne repose pas uniquement sur vous.",
      "Votre chiffre d'affaires ne dépend pas d'un ou deux clients majeurs.",
    ],
    recommandation: {
      titre: "Votre priorité : la stratégie commerciale",
      texte:
        "Le commercial repose trop sur vous ou sur quelques clients, sans indicateurs pour le piloter. Un directeur commercial externalisé clarifie le positionnement, structure l'organisation commerciale et installe le pilotage.",
      href: "/infos-utiles/directeur-commercial-externalise/",
      ancre: "Lire : directeur commercial externalisé",
    },
    actions: [
      "Demandez à vos cinq meilleurs clients pourquoi ils vous ont choisis : leurs mots valent mieux qu'un slogan.",
      "Calculez la part de votre chiffre d'affaires réalisée avec vos deux premiers clients.",
      "Mettez en place un suivi simple des devis en cours et de leur taux de signature, revu chaque mois.",
    ],
    demande:
      "Notre développement commercial repose trop sur moi et sur quelques clients. Je souhaite structurer notre stratégie et notre pilotage commercial. Comment un directeur commercial externalisé pourrait-il nous accompagner ?",
  },
  {
    accent: "production",
    nom: "Production & performance",
    nonConcerneAutorise: true,
    affirmations: [
      "Les délais que vous annoncez à vos clients sont tenus dans la grande majorité des cas.",
      "Vos flux de production sont connus et suivis avec des indicateurs.",
      "Les problèmes récurrents sont traités à la source, pas seulement corrigés au jour le jour.",
      "Commerce, production et logistique travaillent ensemble sans friction.",
    ],
    recommandation: {
      titre: "Votre priorité : la performance opérationnelle",
      texte:
        "Les flux et les interfaces coincent, et les mêmes problèmes reviennent. L'accompagnement porte sur les processus, les indicateurs et l'amélioration continue, sur le terrain.",
      href: "/conseil-organisation-industrielle-toulouse/",
      ancre: "Découvrir le conseil en organisation industrielle",
    },
    actions: [
      "Identifiez les trois problèmes qui reviennent le plus souvent en production et notez leur fréquence.",
      "Suivez chaque semaine un indicateur simple : le taux de livraisons à l'heure.",
      "Réunissez commerce et production quinze minutes par semaine pour caler les délais promis.",
    ],
    demande:
      "Nos délais et nos flux de production ne sont pas maîtrisés, et les mêmes problèmes reviennent. Je souhaite un regard extérieur sur nos processus et nos indicateurs. Comment intervenez-vous sur la performance opérationnelle ?",
  },
  {
    accent: "qvt",
    nom: "Équilibre & QVT",
    affirmations: [
      "Vous prenez vos décisions importantes à un moment choisi, pas dans l'urgence.",
      "Vous arrivez à prendre du recul sur votre entreprise au moins une fois par mois.",
      "Votre charge de travail vous paraît tenable dans la durée.",
      "L'engagement de vos équipes est bon, et le turnover reste maîtrisé.",
    ],
    recommandation: {
      titre: "Votre priorité : votre place de dirigeant",
      texte:
        "Le nœud est d'abord chez vous : tout remonte, la charge pèse sur la clarté de vos décisions. Le coaching dirigeant travaille d'abord votre recul, puis la maturité du collectif autour de vous.",
      href: "/transformation-dirigeant/",
      ancre: "Découvrir le coaching dirigeant",
    },
    actions: [
      "Bloquez une demi-journée par mois, hors de l'entreprise, pour prendre du recul sur vos priorités.",
      "Listez trois décisions que vous pourriez confier à quelqu'un d'autre dès ce mois-ci.",
      "Si la fatigue dure ou s'aggrave, parlez-en à votre médecin : c'est le premier interlocuteur.",
    ],
    demande:
      "Je porte seul l'essentiel des décisions et je manque de recul. Je souhaite être accompagné pour retrouver de la clarté et mieux déléguer. Quelle formule de coaching dirigeant me conseillez-vous, en individuel ou en collectif ?",
  },
];

/** Seuils d'interprétation d'un score sur 100. */
export function niveau(score: number): { libelle: string; ton: "solide" | "surveiller" | "expose" } {
  if (score >= 70) return { libelle: "Solide", ton: "solide" };
  if (score >= 45) return { libelle: "À surveiller", ton: "surveiller" };
  return { libelle: "Exposé", ton: "expose" };
}

/* ─────────── Calcul du résultat (navigateur et serveur) ─────────── */

export type Question = { pilier: number; index: number; texte: string };

export const QUESTIONS: Question[] = PILIERS_DIAGNOSTIC.flatMap((p, pilier) =>
  p.affirmations.map((texte, index) => ({ pilier, index, texte })),
);

/** Réponse « Non concerné » ; -2 = pas encore répondu. Sinon la valeur de REPONSES (0 à 3). */
export const NON_CONCERNE = -1;

/** Score sur 100 de chaque pilier, dans l'ordre de PILIERS_DIAGNOSTIC ; null = non concerné. */
export function calculerScores(reponses: number[]): (number | null)[] {
  return PILIERS_DIAGNOSTIC.map((_, i) => {
    const notes = reponses.filter((_, q) => QUESTIONS[q]?.pilier === i).filter((v) => v >= 0);
    if (notes.length === 0) return null;
    return Math.round((notes.reduce((a, b) => a + b, 0) / (notes.length * 3)) * 100);
  });
}

/**
 * Pilier prioritaire (le score le plus bas), scores par pilier et affirmations
 * auxquelles le visiteur a répondu « pas du tout » ou « plutôt non ».
 */
export function resultatDiagnostic(reponses: number[]) {
  const scores = calculerScores(reponses);
  const classes = scores
    .map((score, i) => ({ score, i }))
    .filter((x): x is { score: number; i: number } => x.score !== null)
    .sort((a, b) => a.score - b.score);
  return {
    scores,
    classes,
    prioritaire: classes[0] as { score: number; i: number } | undefined,
    non: QUESTIONS.map((q, i) => ({ q, v: reponses[i] }))
      .filter(({ v }) => v >= 0 && v <= 1)
      .map(({ q }) => ({ pilier: q.pilier, affirmation: q.texte })),
  };
}
