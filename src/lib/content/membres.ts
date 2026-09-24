import type { QuestionFAQ } from "@/lib/content/home";

/**
 * Pages des deux associées fondatrices — E-E-A-T (master § 2).
 *
 * La page de Muriel Saffroy porte en outre le silo 4 du master (coopération,
 * intelligence collective, QVT) : c'est elle la page pilier de ce silo, et non
 * une simple fiche de présentation.
 *
 * RÈGLE : aucun élément de parcours n'est inventé. Les chapitres « Parcours »
 * reprennent les CV transmis par la cliente le 24/09/2026 (PDF à la racine du
 * projet) ; les chiffres de résultats des CV ne sont pas repris, faute de
 * pouvoir les sourcer. Les données manquantes sont marquées `aFournir`.
 */

export type PageMembre = {
  slug: string;
  nom: string;
  statut: string;
  /** Domaine porté, tel qu'affiché sur la page équipe. */
  expertise: string;
  accent: "finance" | "organisation" | "commercial" | "production" | "qvt";
  photo: string;
  linkedin?: string;

  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;

  /** Réponse directe extractible — checklist GEO (master § 8, point 1). */
  essentiel: string;

  /** Ce dont elle se charge, en clair. */
  prendEnCharge: { titre: string; texte: string }[];
  /** Situations concrètes dans lesquelles on fait appel à elle. */
  situations: string[];
  /** Sections rédigées, propres à la personne. */
  chapitres: { titre: string; paragraphes: string[] }[];
  faq: QuestionFAQ[];
  /** Page de silo vers laquelle renvoyer. */
  silo: { href: string; ancre: string };
};

export const membres: PageMembre[] = [
  {
    slug: "marjorie-anglade",
    nom: "Marjorie Anglade",
    statut: "Associée fondatrice",
    expertise: "Pilotage financier",
    accent: "finance",
    photo: "/equipe/marjorie-anglade.webp",
    linkedin: "https://www.linkedin.com/in/marjorie-anglade-31tls/",

    // 51 / 60
    metaTitle: "Marjorie Anglade — pilotage financier",
    // 144 / 150
    metaDescription:
      "Marjorie Anglade, associée fondatrice d'Un Seul Souffle : direction financière externalisée pour PME et ETI, trésorerie, tableaux de bord, marges.",
    h1: "Marjorie Anglade, pilotage financier des PME",
    lede:
      "Associée fondatrice d'Un Seul Souffle, Marjorie Anglade prend en charge le pilotage financier des entreprises accompagnées. Elle traduit la stratégie en chiffres pour garantir la viabilité et la sérénité du projet.",

    essentiel:
      "Marjorie Anglade est associée fondatrice du cabinet Un Seul Souffle et référente du pilier finance et pilotage. Expert-comptable inscrite au tableau de l'Ordre, elle intervient ici en directrice financière à temps partagé auprès de PME et d'ETI de 10 à 250 salariés en Occitanie, sur le prévisionnel de trésorerie, les tableaux de bord de gestion et l'analyse de marge. Elle ne se substitue pas à l'expert-comptable de l'entreprise : elle travaille à partir des comptes produits, en amont des décisions du dirigeant.",

    prendEnCharge: [
      {
        titre: "Le prévisionnel de trésorerie",
        texte:
          "Savoir à trois et six mois ce qui entre et ce qui sort. C'est l'outil qui change le plus vite le quotidien d'un dirigeant, parce qu'il transforme chaque échéance en donnée connue plutôt qu'en risque.",
      },
      {
        titre: "Les tableaux de bord de gestion",
        texte:
          "Construits à partir du métier de l'entreprise, pas d'un modèle générique. Tenant sur une page, mis à jour sans y passer deux jours, et réellement lus par celui qui décide.",
      },
      {
        titre: "L'analyse de marge",
        texte:
          "Quels clients, produits ou chantiers gagnent de l'argent, et lesquels en consomment. C'est souvent la conversation la plus inconfortable, et le gisement le plus immédiat.",
      },
      {
        titre: "La préparation des décisions d'investissement",
        texte:
          "Ce que l'entreprise peut absorber, avec quelle marge de sécurité, et à quelles conditions. Y compris quand la réponse est qu'il faut attendre.",
      },
    ],

    situations: [
      "Le dirigeant découvre son résultat à la clôture, parfois avec de mauvaises surprises",
      "La trésorerie se pilote au solde bancaire, sans prévisionnel",
      "La banque demande des éléments qui prennent des jours à rassembler",
      "L'entreprise gagne de l'argent sans que personne sache précisément où",
      "Un investissement est en suspens faute de visibilité sur la capacité à l'absorber",
    ],

    chapitres: [
      {
        titre: "Son parcours : douze ans en cabinet comptable",
        paragraphes: [
          "Marjorie Anglade a construit son métier en cabinet d'expertise comptable. Titulaire du DCG (2010) puis du DSCG (2012), elle gère d'abord, pendant quatre ans chez Acteva, un portefeuille d'une cinquantaine de TPE et de professions libérales, de la saisie jusqu'à la révision des comptes et aux déclarations fiscales.",
          "Elle rejoint ensuite le cabinet Hermier Faruch, de 2016 à 2023. Elle y obtient le diplôme d'expertise comptable en 2021 et en devient associée la même année. Son rôle dépasse alors la production des comptes : prévisionnels, budgets, tableaux de bord et conseil en gestion pour les clients du cabinet, supervision des collaborateurs, recrutement.",
          "Depuis 2023, elle exerce comme directrice administrative et financière externalisée : stratégie et croissance, budgets et prévisionnels d'exploitation et de trésorerie, fiabilisation des données transmises à l'expert-comptable, demandes de financement, réorganisation d'un service comptable, et accompagnement d'une entreprise en procédure collective.",
        ],
      },
      {
        titre: "Sa façon d'intervenir",
        paragraphes: [
          "Chaque mission commence par un diagnostic, suivi d'un plan d'actions déroulé sur la durée de l'accompagnement — un an au minimum — avec des comptes rendus réguliers au dirigeant.",
          "Marjorie Anglade intervient à temps partagé : un volume défini, réparti sur l'année, avec un point mensuel. L'entreprise n'achète pas un poste de directeur financier, elle achète un niveau de compétence et une régularité — ce qui correspond à la situation des PME trop grandes pour être pilotées de tête et trop petites pour un DAF à plein temps.",
          "Son premier travail est souvent moins spectaculaire qu'attendu : vérifier que les données de base sont saisies correctement et à temps. Un prévisionnel construit sur une comptabilité en retard de trois mois ne vaut rien, et le dire au départ évite de livrer des tableaux de bord qui rassurent à tort.",
          "Comme les autres référents du cabinet, elle fait appel à un collègue quand un sujet sort de son périmètre — une marge qui se dégrade pour une raison commerciale ou industrielle, par exemple. Elle reste l'interlocutrice, et le périmètre convenu ne s'élargit pas sans l'accord du dirigeant.",
        ],
      },
      {
        titre: "Pourquoi la finance est souvent le premier chantier",
        paragraphes: [
          "Dans une transformation d'entreprise, le pilotage financier passe fréquemment en premier, parce qu'il conditionne la capacité à arbitrer tous les autres chantiers. Tant qu'un dirigeant ne sait pas ce qu'il peut engager, chaque décision d'organisation ou de recrutement se prend à l'aveugle.",
          "Cela ne veut pas dire que tout accompagnement commence par la finance. Beaucoup d'entreprises n'ont besoin que de ce volet, et s'y tiennent : le pilotage financier se souscrit seul, sans transformation globale.",
        ],
      },
    ],

    faq: [
      {
        q: "Marjorie Anglade est-elle expert-comptable ?",
        r: [
          "Oui. Marjorie Anglade est expert-comptable, inscrite au tableau de l'Ordre des experts-comptables (numéro 190000386201). Elle lit donc vos comptes de l'intérieur, et parle à votre expert-comptable dans sa langue.",
          "Chez Un Seul Souffle, elle intervient en directrice financière, pas en expert-comptable : le cabinet ne tient pas vos comptes et ne produit ni comptes annuels ni déclarations fiscales. Le travail porte sur le pilotage — prévisionnel, tableaux de bord, marges, préparation des décisions — à partir des comptes établis par votre expert-comptable, en complément du sien.",
        ],
      },
      {
        q: "Sur quels secteurs intervient-elle ?",
        r: [
          "Les secteurs couverts par le cabinet : industrie, agroalimentaire, services et distribution, sur des PME et ETI de 10 à 250 salariés en Haute-Garonne et en Occitanie.",
        ],
      },
      {
        q: "Peut-on la solliciter sans prendre tout l'accompagnement ?",
        r: [
          "Oui. Le pilotage financier externalisé se souscrit seul, et c'est le cas le plus fréquent. Si le travail sur les chiffres révèle un problème qui n'est pas financier, elle le signale — le dirigeant reste libre d'en rester là.",
        ],
      },
    ],

    silo: {
      href: "/daf-externalise-toulouse/",
      ancre: "Découvrir le pilotage financier externalisé",
    },
  },

  {
    slug: "muriel-saffroy",
    nom: "Muriel Saffroy",
    statut: "Associée fondatrice",
    expertise: "Organisation et coopération",
    accent: "organisation",
    photo: "/equipe/muriel-saffroy.webp",
    linkedin: "https://www.linkedin.com/in/muriel-saffroy/",

    // 56 / 60
    metaTitle: "Muriel Saffroy — coopération en entreprise",
    // 147 / 150
    metaDescription:
      "Muriel Saffroy, associée fondatrice d'Un Seul Souffle : intelligence collective, clarification des rôles et coopération des équipes en PME et ETI.",
    h1: "Muriel Saffroy, coopération et intelligence collective",
    lede:
      "Associée fondatrice d'Un Seul Souffle, Muriel Saffroy travaille la qualité de coopération dans les PME et les ETI. Courroie de transmission, elle s'assure que l'organisation interne est fluide et que les équipes sont alignées autour du cap.",

    essentiel:
      "Muriel Saffroy est associée fondatrice du cabinet Un Seul Souffle et référente du pilier organisation et coopération. Elle intervient auprès de dirigeants de PME et d'ETI de 10 à 250 salariés en Occitanie sur la clarification des rôles, les modes de décision et l'intelligence collective. Elle anime les cercles d'avancée, sessions collectives de trois heures en groupes de six à huit personnes, en présentiel ou en visio, et conduit l'étape Coopérer du parcours d'accompagnement du dirigeant.",

    prendEnCharge: [
      {
        titre: "La clarification des rôles",
        texte:
          "Qui décide quoi, jusqu'où, et ce qui se passe en cas de désaccord. Dans la plupart des PME, les rôles existent sur l'organigramme sans que personne ait le droit explicite de se tromper — et c'est ce droit qui manque.",
      },
      {
        titre: "Les modes de décision",
        texte:
          "Rendre visible la façon dont une décision se prend réellement, puis la modifier. Tant que remonter au dirigeant reste le choix le plus rationnel pour un manager, aucune délégation ne tient.",
      },
      {
        titre: "Les cercles d'avancée",
        texte:
          "Des groupes de six à huit personnes — dirigeants, managers, entrepreneurs — en sessions collectives de trois heures sur trois mois, travaillant sur des situations réelles apportées par les participants.",
      },
      {
        titre: "Le fonctionnement du comité de direction",
        texte:
          "Ce qu'il tranche réellement, à quel rythme et sur quels éléments. Un CODIR qui valide sans décider est l'une des raisons les plus fréquentes pour lesquelles un dirigeant reste le centre de tout.",
      },
    ],

    situations: [
      "Les décisions remontent toutes au dirigeant, malgré une équipe compétente",
      "Le comité de direction valide mais ne tranche pas",
      "Les désaccords se règlent en bilatéral après la réunion, jamais pendant",
      "Des conflits internes paralysent des projets entiers",
      "La délégation a été tentée, et ce qui est délégué revient",
    ],

    chapitres: [
      {
        titre: "Son parcours : vingt ans à diriger des sites industriels",
        paragraphes: [
          "Muriel Saffroy vient de l'industrie. Après un DEA de biologie à Clermont-Ferrand et un master de gestion des entreprises agricoles et agroalimentaires à l'ESA Purpan de Toulouse, elle dirige de 1994 à 2014 deux sites meuniers, pour Moulin Fayol et les Grands Moulins de Paris, à Revel et à Montluçon : production, logistique, qualité, maintenance et sécurité.",
          "Elle y crée le laboratoire qualité, conduit les certifications HACCP, bio et ISO 9002, met en place un encadrement intermédiaire et pilote la reconstruction complète d'un site. De 2014 à 2016, elle est responsable de production aux Grands Moulins de Paris à Brienne-le-Château : 400 tonnes par jour, huit services, soixante collaborateurs.",
          "Depuis 2017, elle accompagne dirigeants, managers et équipes sur le leadership et la coopération, et intervient comme manager de transition dans des contextes de crise ou de réorganisation. Elle est coach professionnelle certifiée ICF (Coaching Ways, 2017, titre RNCP) et facilitatrice certifiée en intelligence collective (Didascalis, 2021).",
          "Ce parcours explique sa manière de travailler : les questions de rôles et de décision, elle les a d'abord vécues en tant que responsable d'équipes, sur des lignes de production où une décision mal portée se voit dans l'heure.",
        ],
      },
      {
        titre: "Le sujet de fond : la co-responsabilité",
        paragraphes: [
          "Derrière la plupart des tensions organisationnelles se trouve la même cause : la co-responsabilité n'a jamais été installée. Les fiches de poste décrivent des périmètres, mais personne n'a reçu le droit explicite de décider — donc de se tromper. Dans ce cadre, faire valider par le dirigeant n'est pas de la passivité, c'est la conduite la plus rationnelle.",
          "Le travail consiste à rendre ce calcul visible, puis à le changer. Cela suppose des règles de décision posées à voix haute, un droit à l'erreur formulé et tenu, et un dirigeant qui accepte de ne pas revenir sur ce qu'il a délégué — ce qui est souvent le point le plus difficile.",
          "C'est un travail de terrain, pas un séminaire. Les cercles d'avancée traitent des situations réelles de l'entreprise, apportées par les participants : la façon dont telle décision a été prise, qui l'a assumée, ce qui s'est passé quand elle s'est révélée mauvaise.",
        ],
      },
      {
        titre: "Coopération et qualité de vie au travail",
        paragraphes: [
          "La coopération et la charge de travail sont liées de près. Une organisation où tout remonte produit de la surcharge en haut et de la démotivation en bas ; à l'inverse, des équipes épuisées ne coopèrent pas, quelle que soit la clarté des rôles.",
          "Quand la difficulté tient davantage à l'énergie et à la charge qu'aux rôles eux-mêmes, le pilier équilibre et qualité de vie au travail prend le relais, porté par Olivia Artur. Les deux sujets se traitent rarement l'un sans l'autre.",
        ],
      },
    ],

    faq: [
      {
        q: "Qu'est-ce qu'un cercle d'avancée ?",
        r: [
          "Un groupe de six à huit personnes — dirigeants, managers, entrepreneurs — qui se réunit en sessions collectives de trois heures sur trois mois. Chaque séance part de situations réelles apportées par les participants, pas de cas d'école.",
          "C'est le format de l'étape Coopérer du parcours d'accompagnement du dirigeant.",
        ],
      },
      {
        q: "Faut-il embarquer toute l'entreprise ?",
        r: [
          "Non. Le dirigeant choisit les participants, et le cabinet aide à composer le groupe lors du cadrage. Travailler avec six personnes bien choisies produit davantage qu'un séminaire réunissant tout l'encadrement.",
        ],
      },
      {
        q: "Est-ce de la formation au management ?",
        r: [
          "Non. Une formation transmet un contenu identique pour tous ; ce travail porte sur les décisions réelles de l'entreprise et sur la façon dont elles circulent. Le contenu vient des participants, la méthode vient du cabinet.",
        ],
      },
    ],

    silo: {
      href: "/transformation-dirigeant/",
      ancre: "Découvrir l'accompagnement du dirigeant",
    },
  },
];

export function membreParSlug(slug: string) {
  return membres.find((m) => m.slug === slug);
}
