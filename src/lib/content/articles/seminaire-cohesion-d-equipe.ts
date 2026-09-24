import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 4, coopération, QVT et intelligence collective. Signé Olivia Artur.
 * Pilier : page Muriel Saffroy.
 * Requête : « idée séminaire cohésion d'équipe » (480/mois, KD 15). Secondaires :
 * « journée de cohésion » (260), « séminaire cohésion d'équipe » (140).
 *
 * Anti-cannibalisation : « cohésion d'équipe » a son propre article (n° 33,
 * cohesion-d-equipe, publié le 2027-05-17, lié ici). Cet article-ci traite le
 * séminaire lui-même : choisir, organiser, dérouler, faire tenir.
 *
 * POINTS SENSIBLES
 * - Cadre juridique (temps de travail, accident du travail, alcool) : textes cités
 *   depuis Légifrance et l'INRS, formulés prudemment, sans conseil juridique
 *   individualisé ; renvoi vers un conseil (avocat, expert-comptable) pour les cas
 *   particuliers. À faire relire.
 * - Recherche : méta-analyse Klein et al. (2009) citée via la revue de Lacerenza,
 *   Marlow, Tannenbaum et Salas (American Psychologist, 2018), lue en entier.
 * - Rien n'est affirmé sur une offre « séminaire » du cabinet : seuls les cercles
 *   d'avancée (home.ts) sont cités comme format de suivi. À faire valider.
 * - Liens internes limités aux articles publiés avant le 16/08/2027
 *   (cohesion-d-equipe, coaching-d-equipe, gestion-de-conflit).
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "seminaire-cohesion-d-equipe",

  motCle: "idée séminaire cohésion d'équipe (480/mois, KD 15) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "journée de cohésion (260/mois)",
    "séminaire cohésion d'équipe (140/mois)",
    "organiser un séminaire d'équipe",
  ],

  // 40 / 42
  metaTitle: "Idée séminaire cohésion d'équipe : guide",
  // 149 / 150
  metaDescription:
    "Idées de séminaire de cohésion d'équipe classées par objectif, déroulé d'une journée type, règles à respecter et moyens de faire tenir les résultats.",

  h1: "Idée séminaire cohésion d'équipe : choisir l'activité selon ce que vous voulez changer",

  chapo:
    "La meilleure idée de séminaire de cohésion d'équipe n'est pas la plus originale : c'est celle qui sert un objectif précis. Ressouder une équipe après une période tendue, intégrer des nouveaux, clarifier qui fait quoi après une réorganisation ou préparer l'année ne demandent pas la même journée. La recherche est nette sur un point : les activités purement ludiques créent un bon souvenir, mais ce sont les temps consacrés aux objectifs communs et à la clarification des rôles qui changent durablement le fonctionnement d'une équipe. Un bon séminaire mêle donc les deux, et prévoit dès le départ ce qui se passera le lundi suivant.",

  essentiel: {
    reponse:
      "Pour choisir une idée de séminaire de cohésion d'équipe, partez de l'objectif : créer du lien, intégrer, clarifier les rôles, résoudre un problème commun ou préparer l'année. Associez ensuite une activité conviviale et accessible à tous à un temps de travail sur le fonctionnement réel de l'équipe. Selon la revue de Lacerenza et al. (2018), la méta-analyse de Klein et al. (2009) montre que le team building améliore surtout la confiance et la coordination, et que la fixation d'objectifs et la clarification des rôles en sont les composantes les plus efficaces.",
    points: [
      "Un objectif par séminaire, formulé avant de choisir l'activité",
      "Une activité conviviale, plus un temps de travail sur l'équipe elle-même",
      "Objectifs communs et clarification des rôles : les deux composantes les plus efficaces selon la recherche",
      "Un séminaire obligatoire relève en principe du temps de travail, et l'employeur reste responsable de la sécurité",
      "Des engagements écrits et un suivi à un mois, sinon l'effet s'évapore",
    ],
  },

  chapitres: [
    {
      label: "L'objectif d'abord",
      titre: "Idée de séminaire de cohésion d'équipe : partir de l'objectif, pas de l'activité",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des séminaires ratés commencent par la même question : « qu'est-ce qu'on pourrait faire cette année ? ». On choisit un escape game, un atelier cuisine ou une course d'orientation, puis on espère que la cohésion suivra. **La bonne question est l'inverse : qu'est-ce qui doit fonctionner différemment dans l'équipe au retour ?** L'activité découle de la réponse.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous voulez obtenir", "Le format qui s'y prête"],
          lignes: [
            [
              "Recréer du lien après une période chargée ou du télétravail",
              "Une journée de cohésion conviviale, avec une activité coopérative et un temps d'échange sur l'année écoulée",
            ],
            [
              "Intégrer plusieurs nouveaux arrivants",
              "Des activités en petits groupes mélangés, et un atelier où chacun présente son métier et ses contraintes",
            ],
            [
              "Clarifier les rôles après une réorganisation",
              "Un atelier structuré sur qui décide quoi, animé par une personne extérieure à la hiérarchie",
            ],
            [
              "Débloquer un problème qui revient sans cesse",
              "Une séance de résolution de problème sur un cas réel, suivie d'un plan d'action",
            ],
            [
              "Préparer l'année et partager un cap",
              "Un séminaire sur un ou deux jours, avec les objectifs de l'équipe fixés ensemble",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Si le vrai sujet est un conflit ouvert entre deux personnes, un séminaire collectif n'est pas le bon outil : il expose le différend devant tout le monde sans le traiter. Mieux vaut commencer par une [gestion de conflit](/infos-utiles/gestion-de-conflit/) en petit comité, et réunir l'équipe ensuite.",
        },
      ],
    },

    {
      label: "Ce que dit la recherche",
      titre: "Ce qu'un séminaire de cohésion d'équipe peut réellement changer",
      blocs: [
        {
          type: "p",
          texte:
            "Le team building est étudié depuis des décennies. La revue [Team Development Interventions: Evidence-Based Approaches for Improving Teamwork](https://www.apa.org/pubs/journals/releases/amp-amp0000295.pdf), publiée en 2018 dans American Psychologist par Christina Lacerenza, Shannon Marlow, Scott Tannenbaum et Eduardo Salas, en fait la synthèse. Elle distingue quatre composantes classiques : la fixation d'objectifs, la gestion des relations, la clarification des rôles et la résolution de problèmes.",
        },
        { type: "h3", texte: "Un effet sur la confiance et la coordination" },
        {
          type: "p",
          texte:
            "La revue s'appuie sur la méta-analyse de Klein et ses collègues (2009), fondée sur 60 tailles d'effet. Ses résultats montrent des progrès significatifs sur la confiance, la coordination et la compréhension commune. En revanche, les auteurs n'ont pas trouvé d'effet direct significatif sur la performance : celle-ci progresse, le cas échéant, par l'intermédiaire de ces améliorations.",
        },
        { type: "h3", texte: "Les objectifs et les rôles, composantes les plus efficaces" },
        {
          type: "p",
          texte:
            "Les quatre composantes améliorent certains résultats, mais **la fixation d'objectifs et la clarification des rôles sont les plus efficaces**. Elles construisent une compréhension partagée de la tâche et de l'équipe. La revue note aussi que les activités légères et ludiques, du type parcours dans les arbres ou brise-glace, peuvent fonctionner à court terme, mais que les preuves de leur efficacité sont limitées lorsqu'elles ne s'appuient sur aucune de ces composantes.",
        },
        { type: "h3", texte: "Des engagements, puis un suivi" },
        {
          type: "p",
          texte:
            "Les auteurs insistent sur un dernier point : quelle que soit l'approche, l'équipe doit repartir avec des plans d'action ou des accords concrets, et ces engagements doivent être suivis pour que chacun en reste responsable. C'est exactement ce qui manque à la plupart des séminaires d'entreprise. La clarification des rôles et des modes de décision est d'ailleurs le cœur du travail de [Muriel Saffroy](/muriel-saffroy/), associée fondatrice du cabinet.",
        },
      ],
    },

    {
      label: "Les idées",
      titre: "Dix idées de séminaire classées par objectif",
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Voici des idées concrètes, applicables à une équipe de PME de cinq à trente personnes. La combinaison la plus solide associe, dans la même journée, une idée qui crée du lien et une idée qui travaille le fonctionnement de l'équipe.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Créer du lien : une activité manuelle collective.** Cuisine, construction, rénovation d'un local associatif : un objet à produire ensemble, avec des rôles répartis et un résultat visible.",
            "**Créer du lien : une randonnée ou une sortie accessible.** Un effort modéré, adapté au moins sportif du groupe, qui laisse du temps pour parler en marchant.",
            "**Intégrer : « vis ma vie ».** Chacun passe une heure au poste d'un collègue d'un autre service, puis l'équipe partage ce qu'elle a découvert.",
            "**Intégrer : la carte des métiers.** Chaque personne présente en cinq minutes ce qu'elle fait, ce dont elle a besoin des autres et ce qui la freine.",
            "**Clarifier les rôles : l'atelier « qui décide quoi ».** On liste une vingtaine de décisions courantes et, pour chacune, qui décide, qui est consulté, qui est informé.",
            "**Clarifier les rôles : le retour sur un projet récent.** Ce qui s'est passé, ce qui a bien marché, ce qui a coincé entre les personnes, et ce qu'on change la prochaine fois.",
            "**Résoudre un problème : le défi réel.** Un problème qui revient dans l'entreprise, traité en sous-groupes avec une restitution et un choix de solution en fin de journée.",
            "**Résoudre un problème : la visite d'un client ou d'un autre site.** Voir le produit utilisé ou fabriqué ailleurs change la conversation sur la qualité et les délais.",
            "**Partager un cap : les objectifs de l'équipe.** Trois objectifs pour l'année, formulés ensemble, avec pour chacun un responsable et un premier jalon.",
            "**Partager un cap : l'action solidaire.** Une journée au service d'une association locale, suivie d'un échange sur ce que l'équipe veut incarner auprès de ses clients.",
          ],
        },
      ],
    },

    {
      label: "Journée type",
      titre: "Journée de cohésion : un déroulé type qui tient ses promesses",
      blocs: [
        {
          type: "p",
          texte:
            "Une journée de cohésion bien construite alterne le lien et le travail, et se termine par des décisions. Voici une trame, à adapter à votre équipe et à votre objectif.",
        },
        {
          type: "liste",
          items: [
            "**9 h, l'ouverture.** Le dirigeant ou le manager dit en cinq minutes pourquoi l'équipe est réunie et ce qu'il attend de la journée, puis laisse la parole.",
            "**9 h 30, l'activité coopérative.** Une activité qui oblige à s'organiser à plusieurs, en groupes mélangés.",
            "**11 h, le retour sur l'activité.** Comment le groupe s'est organisé, qui a pris la parole, qui a décidé : souvent le miroir fidèle du fonctionnement au bureau.",
            "**12 h 30, le déjeuner.** Sans programme, c'est un temps de lien à part entière.",
            "**14 h, l'atelier de fond.** Objectifs, rôles ou problème réel, selon ce que vous avez choisi, en sous-groupes puis en grand groupe.",
            "**16 h 30, les engagements.** Trois à cinq décisions, chacune avec un responsable et une date, écrites devant tout le monde.",
            "**17 h, la clôture.** Un tour de table court, puis un moment convivial pour ceux qui le souhaitent.",
          ],
        },
        { type: "h3", texte: "Qui anime la partie travail" },
        {
          type: "p",
          texte:
            "Le manager peut animer l'activité conviviale. Pour l'atelier de fond, une personne extérieure à la hiérarchie facilite souvent la parole, surtout quand les rôles ou les décisions du manager font partie du sujet. C'est aussi l'objet du [coaching d'équipe](/infos-utiles/coaching-d-equipe/), qui travaille le fonctionnement d'un collectif sur plusieurs séances plutôt qu'en une journée.",
        },
      ],
    },

    {
      label: "Deux jours",
      titre: "Séminaire de cohésion d'équipe sur deux jours : quand cela vaut la peine",
      blocs: [
        {
          type: "p",
          texte:
            "Un séminaire de cohésion d'équipe avec une nuit sur place coûte plus cher, demande plus d'organisation et pèse sur la vie personnelle des participants. Il se justifie dans trois cas : une équipe de direction qui doit fixer un cap, une équipe dispersée sur plusieurs sites qui se voit rarement, ou un moment de bascule comme une fusion, une reprise ou une réorganisation.",
        },
        { type: "h3", texte: "Ce que le deuxième jour apporte" },
        {
          type: "p",
          texte:
            "La première journée ouvre les sujets. La nuit laisse décanter. Le deuxième matin, les discussions sont souvent plus franches et les décisions plus nettes.",
        },
        { type: "h3", texte: "Ce qu'il faut anticiper" },
        {
          type: "p",
          texte:
            "Prévenez tôt, pour que chacun puisse organiser sa vie familiale. Proposez une solution pour les personnes qui ne peuvent pas découcher. Et réfléchissez au lieu : trop loin, le trajet mange la journée ; trop près, chacun rentre chez soi le soir et le format perd son intérêt.",
        },
      ],
    },

    {
      label: "Le cadre",
      titre: "Les règles à respecter quand on organise un séminaire",
      blocs: [
        {
          type: "p",
          texte:
            "Un séminaire reste un temps de travail organisé par l'employeur, avec les obligations qui vont avec. Les points ci-dessous rappellent les principes ; pour un cas particulier, votre avocat ou votre expert-comptable est le bon interlocuteur.",
        },
        { type: "h3", texte: "Le temps de travail" },
        {
          type: "p",
          texte:
            "Selon l'[article L3121-1 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020517), le travail effectif est le temps pendant lequel le salarié est à la disposition de l'employeur et se conforme à ses directives sans pouvoir vaquer librement à des occupations personnelles. Un séminaire auquel la présence est demandée entre en principe dans cette définition. Organiser la journée sur un samedi ou un soir n'est donc pas neutre : faites vérifier les conséquences en matière d'horaires et de rémunération.",
        },
        { type: "h3", texte: "La sécurité et l'accident du travail" },
        {
          type: "p",
          texte:
            "L'[article L411-1 du Code de la sécurité sociale](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452603) qualifie d'accident du travail, quelle qu'en soit la cause, l'accident survenu « par le fait ou à l'occasion du travail ». Une activité sportive, un trajet collectif ou une soirée organisée dans le cadre du séminaire peuvent donc engager la responsabilité de l'employeur. Choisissez des prestataires qui encadrent les activités à risque, et évitez celles qui dépassent les capacités physiques d'une partie du groupe.",
        },
        { type: "h3", texte: "L'alcool" },
        {
          type: "p",
          texte:
            "Sur le lieu de travail, l'[article R4228-20 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029184975) n'autorise que le vin, la bière, le cidre et le poiré. L'INRS, dans [Pots d'entreprise et alcool : quelles sont les règles applicables ?](https://www.inrs.fr/publications/juridique/focus-juridiques/focus-pots-entreprise-alcool.html), rappelle que la responsabilité de l'employeur peut être engagée en cas d'accident pendant ou après un événement. Dans [Fêtes d'entreprise et consommation d'alcool](https://www.inrs.fr/actualites/fete-entreprise-consommation-alcool.html), il recommande de servir systématiquement des boissons sans alcool, de prévoir de quoi manger et un délai suffisant avant la conduite. Prévoyez le retour de chacun avant la soirée, pas pendant.",
        },
      ],
    },

    {
      label: "Les erreurs",
      titre: "Les erreurs qui retournent un séminaire contre l'équipe",
      blocs: [
        {
          type: "p",
          texte:
            "Un séminaire mal conçu peut abîmer ce qu'il voulait réparer. Ces erreurs reviennent souvent.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["L'erreur", "Ce qu'il vaut mieux faire"],
          lignes: [
            [
              "Annoncer une réorganisation ou un plan d'économies au milieu d'une journée festive",
              "Traiter les annonces difficiles dans un cadre dédié, et garder au séminaire sa fonction",
            ],
            [
              "Choisir une activité physique exigeante ou une soirée tardive qui exclut une partie de l'équipe",
              "Demander l'avis de l'équipe et prévoir une activité accessible à tous",
            ],
            [
              "Faire du séminaire une récompense pour une surcharge de travail qui continue",
              "Traiter la charge elle-même ; un séminaire ne compense pas une équipe épuisée",
            ],
            [
              "Laisser le dirigeant parler la moitié de la journée",
              "Limiter son intervention à l'ouverture et aux engagements, et le laisser écouter le reste du temps",
            ],
            [
              "Repartir sans décision écrite ni date de suivi",
              "Fixer trois à cinq engagements, chacun avec un responsable et une date",
            ],
          ],
        },
        { type: "h3", texte: "Quand le malaise est plus profond" },
        {
          type: "p",
          texte:
            "Des relations de travail dégradées, des objectifs flous ou irréalistes, un manque d'autonomie font partie des facteurs de risques psychosociaux décrits par l'[INRS](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html). Si vous constatez de la souffrance, des arrêts qui se multiplient ou des personnes à bout, le sujet n'est plus la cohésion : parlez-en avec le médecin du travail, qui peut vous aider à évaluer la situation. Un séminaire ne remplace pas une démarche de prévention.",
        },
      ],
    },

    {
      label: "Après le séminaire",
      titre: "Après le séminaire : faire tenir les engagements",
      blocs: [
        {
          type: "p",
          texte:
            "Le lundi qui suit décide de la valeur du séminaire. Si rien ne change, l'équipe retient une chose : ces journées sont agréables, mais elles ne servent à rien.",
        },
        { type: "h3", texte: "Un compte rendu dans la semaine" },
        {
          type: "p",
          texte:
            "Envoyez sous huit jours les engagements pris, avec leur responsable et leur date. Pas de compte rendu exhaustif : une demi-page, lisible en deux minutes.",
        },
        { type: "h3", texte: "Un point à un mois, puis à trois mois" },
        {
          type: "p",
          texte:
            "Réservez trente minutes en réunion d'équipe pour faire le point : ce qui est fait, ce qui bloque, ce qu'on abandonne. Abandonner un engagement en le disant vaut mieux que le laisser mourir en silence. Notre article sur la [cohésion d'équipe](/infos-utiles/cohesion-d-equipe/) détaille les gestes du quotidien qui prolongent l'effet d'une journée.",
        },
        { type: "h3", texte: "Quand un regard extérieur aide" },
        {
          type: "p",
          texte:
            "Quand les tensions sont anciennes ou que le manager fait lui-même partie du sujet, un tiers facilite ce que l'équipe n'arrive pas à se dire seule. Au cabinet, Muriel Saffroy travaille ces questions de rôles et de coopération, notamment en cercles d'avancée : des groupes de six à huit personnes, en sessions de trois heures sur trois mois, à partir de situations réelles apportées par les participants. Quand la difficulté tient d'abord à la charge et à l'énergie de l'équipe, c'est le pilier équilibre et qualité de vie au travail qui prend le relais. Pour savoir par où commencer, un [diagnostic d'entreprise](/diagnostic/) aide à distinguer un problème de cohésion d'un problème d'organisation.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle activité choisir pour un séminaire de cohésion d'équipe ?",
      r: [
        "Choisissez d'abord l'objectif : créer du lien, intégrer des nouveaux, clarifier les rôles, résoudre un problème commun ou préparer l'année. Prenez ensuite une activité coopérative accessible à tous, comme un atelier manuel collectif ou une randonnée modérée, et associez-la à un atelier de travail sur l'équipe. La recherche montre que ce sont les objectifs communs et la clarification des rôles qui produisent l'effet le plus durable.",
      ],
    },
    {
      q: "Comment organiser une journée de cohésion ?",
      r: [
        "Alternez lien et travail : une ouverture courte par le dirigeant, une activité coopérative le matin, un retour sur la façon dont le groupe s'est organisé, un déjeuner sans programme, un atelier de fond l'après-midi, puis trois à cinq engagements écrits avec un responsable et une date. Prévoyez un compte rendu dans la semaine et un point de suivi à un mois.",
      ],
    },
    {
      q: "Un séminaire de cohésion est-il du temps de travail ?",
      r: [
        "En principe oui, lorsque la présence est demandée par l'employeur. Le Code du travail définit le travail effectif comme le temps pendant lequel le salarié est à la disposition de l'employeur et se conforme à ses directives. Un séminaire organisé un samedi ou un soir a donc des conséquences sur les horaires et la rémunération. Pour un cas précis, faites vérifier votre situation par un avocat ou votre expert-comptable.",
      ],
    },
    {
      q: "Le team building est-il vraiment efficace ?",
      r: [
        "Oui, mais pas sur tout. La méta-analyse de Klein et ses collègues (2009), reprise par une revue publiée en 2018 dans American Psychologist, montre des progrès sur la confiance, la coordination et la compréhension commune, sans effet direct significatif sur la performance. La fixation d'objectifs et la clarification des rôles sont les composantes les plus efficaces. Les activités purement ludiques ont un effet plus incertain.",
      ],
    },
    {
      q: "Peut-on servir de l'alcool lors d'un séminaire d'entreprise ?",
      r: [
        "Sur le lieu de travail, le Code du travail n'autorise que le vin, la bière, le cidre et le poiré. L'INRS rappelle que la responsabilité de l'employeur peut être engagée en cas d'accident pendant ou après l'événement. Il recommande de proposer systématiquement des boissons sans alcool et de quoi manger, de limiter les quantités et de prévoir un délai suffisant avant toute conduite.",
      ],
    },
  ],

  sources: [
    {
      titre: "Team Development Interventions: Evidence-Based Approaches for Improving Teamwork",
      editeur: "American Psychologist, American Psychological Association (Lacerenza, Marlow, Tannenbaum, Salas, 2018)",
      url: "https://www.apa.org/pubs/journals/releases/amp-amp0000295.pdf",
    },
    {
      titre: "Article L3121-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020517",
    },
    {
      titre: "Article L411-1 - Code de la sécurité sociale",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452603",
    },
    {
      titre: "Article R4228-20 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029184975",
    },
    {
      titre: "Pots d'entreprise et alcool : quelles sont les règles applicables ?",
      editeur: "INRS",
      url: "https://www.inrs.fr/publications/juridique/focus-juridiques/focus-pots-entreprise-alcool.html",
    },
    {
      titre: "Fêtes d'entreprise et consommation d'alcool",
      editeur: "INRS",
      url: "https://www.inrs.fr/actualites/fete-entreprise-consommation-alcool.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2027-08-16",
  accent: "qvt",
  pilier: { href: "/muriel-saffroy/", ancre: "Muriel Saffroy" },

  valide: true,
};
