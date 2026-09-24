import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 4, coopération, QVT et intelligence collective. Signé Olivia Artur.
 * Pilier : page Muriel Saffroy.
 * Requête : « cohésion d'équipe » (210/mois, KD 13). Secondaires : « idée séminaire
 * cohésion d'équipe » (480), « activité cohésion d'équipe » (320).
 *
 * Anti-cannibalisation : « idée séminaire cohésion d'équipe » a son propre article
 * (n° 46, seminaire-cohesion-d-equipe, publié le 2027-08-16, donc PAS lié ici). Le
 * séminaire n'est traité ici que sous l'angle « ce qu'on peut en attendre ».
 *
 * Points sensibles : volet RPS appuyé sur l'INRS, sans diagnostic ni conseil médical ;
 * renvoi vers le médecin du travail. Les chiffres de recherche (Google re:Work,
 * Edmondson, Tuckman) ont été vérifiés sur les documents d'origine le 24/09/2026.
 */
export const article: Article = {
  slug: "cohesion-d-equipe",

  motCle: "cohésion d'équipe (210/mois, KD 13) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "idée séminaire cohésion d'équipe (480/mois)",
    "activité cohésion d'équipe (320/mois)",
    "renforcer la cohésion d'une équipe",
  ],

  // 42 / 42
  metaTitle: "Cohésion d'équipe : la construire vraiment",
  // 149 / 150
  metaDescription:
    "Cohésion d'équipe : ce qui la fonde selon la recherche, les signes qu'elle s'effrite, ce qu'un séminaire apporte et ce qui la construit au quotidien.",

  h1: "Cohésion d'équipe : ce qui la construit vraiment, au-delà du séminaire",

  chapo:
    "La cohésion d'équipe ne se décrète pas et ne s'achète pas en une journée de team building. C'est la capacité d'un groupe à tenir ensemble face à une tâche commune : se faire confiance, se répartir clairement le travail, se dire les désaccords et continuer à avancer. Elle se construit surtout dans le travail quotidien : des rôles clairs, des objectifs partagés, des temps réguliers pour parler du travail réel, un manager qui protège la parole. Une activité de cohésion d'équipe ou un séminaire peut accélérer ce mouvement. Il ne remplace jamais ce qui se joue le lundi matin.",

  essentiel: {
    reponse:
      "La cohésion d'équipe désigne la force qui maintient les membres d'un groupe ensemble et engagés vers un objectif commun. Elle a deux faces : le lien entre les personnes et l'engagement partagé sur la tâche. Selon l'étude de Google portant sur 180 équipes, ce qui compte le plus n'est pas qui compose l'équipe mais comment elle travaille ensemble, avec en premier la sécurité psychologique. Dans une PME, la cohésion se renforce d'abord par des rôles clairs, des objectifs communs et des espaces où l'on parle du travail réel ; un séminaire ne fait que prolonger ce travail.",
    points: [
      "La cohésion n'est pas l'absence de conflit : une équipe soudée sait se dire les désaccords sans se déchirer",
      "La sécurité psychologique, pouvoir dire une erreur ou une idée sans risque, en est le socle",
      "Des rapports sociaux dégradés figurent parmi les six familles de risques psychosociaux identifiées par l'INRS",
      "Une activité de cohésion d'équipe n'a d'effet durable que si elle se relie au travail réel",
      "Les leviers durables : rôles clairs, objectifs partagés, espaces de discussion, manager qui protège la parole",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Cohésion d'équipe : définition, et ce qu'elle n'est pas",
      blocs: [
        {
          type: "p",
          texte:
            "Une équipe cohésive n'est pas une équipe où tout le monde s'entend bien. **C'est une équipe qui tient ensemble quand le travail devient difficile.** La différence se voit rarement dans les bons mois. Elle se voit le jour où une commande urgente tombe, où un collègue est absent, où une erreur coûte cher.",
        },
        { type: "h3", texte: "Deux faces : le lien et la tâche" },
        {
          type: "p",
          texte:
            "On distingue en général deux dimensions. La cohésion sociale tient aux relations entre les personnes : l'estime, la confiance, le plaisir de travailler ensemble. La cohésion opératoire tient à l'engagement commun sur la tâche : un objectif compris et partagé, une répartition du travail acceptée, le sentiment que chacun fait sa part. Une équipe peut être très liée humainement et peu efficace, ou efficace sans chaleur. Celles qui durent réunissent les deux.",
        },
        { type: "h3", texte: "Ce que la cohésion n'est pas" },
        {
          type: "p",
          texte:
            "Elle n'est pas l'uniformité : une équipe où personne ne contredit personne a souvent renoncé à dire ce qu'elle pense. Elle n'est pas non plus l'absence de conflit. Les désaccords sur le travail sont normaux et utiles ; ce qui abîme une équipe, ce sont les désaccords qui ne se disent pas, ou qui se disent sur les personnes plutôt que sur le travail. Chez Un Seul Souffle, ce sujet est au cœur du pilier coopération porté par [Muriel Saffroy](/muriel-saffroy/), qui travaille sur les rôles, les modes de décision et l'intelligence collective.",
        },
      ],
    },

    {
      label: "La recherche",
      titre: "Ce que la recherche dit de la cohésion d'une équipe",
      blocs: [
        {
          type: "p",
          texte:
            "La cohésion des équipes est étudiée depuis des décennies. Trois travaux, souvent cités, éclairent ce qu'un dirigeant de PME peut en retenir.",
        },
        { type: "h3", texte: "Comment l'équipe travaille compte plus que qui la compose" },
        {
          type: "p",
          texte:
            "Google a étudié 180 de ses équipes, 115 en ingénierie et 65 commerciales, pour comprendre ce qui distingue les plus efficaces. Le guide [Understand team effectiveness](https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness) en tire une conclusion nette : ce qui comptait vraiment tenait moins à la composition de l'équipe qu'à la façon dont elle travaillait ensemble. Cinq dynamiques ressortent : la sécurité psychologique, la fiabilité, une structure et des rôles clairs, le sens du travail, et le sentiment que ce travail a un impact. La sécurité psychologique arrive en tête.",
        },
        { type: "h3", texte: "La sécurité psychologique, étudiée dans une usine" },
        {
          type: "p",
          texte:
            "La notion vient d'Amy Edmondson, professeure à Harvard. Dans [Psychological Safety and Learning Behavior in Work Teams](https://dash.harvard.edu/entities/publication/13a7b031-0fdd-45ec-a7e0-2b80e2bc679f) (1999), elle a étudié 51 équipes d'une entreprise industrielle. Elle définit la sécurité psychologique comme la croyance partagée que l'équipe est un lieu sûr pour prendre des risques interpersonnels : poser une question, signaler une erreur, proposer une idée. **Ses résultats montrent que les équipes où cette sécurité existe apprennent davantage, et que cet apprentissage se traduit en performance.**",
        },
        { type: "h3", texte: "Une équipe passe par des étapes" },
        {
          type: "p",
          texte:
            "En 1965, Bruce Tuckman a passé en revue une cinquantaine d'études sur la vie des petits groupes dans [Developmental Sequence in Small Groups](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Dynamics/Tuckman_1965_Developmental_sequence_in_small_groups.pdf). Il en dégage quatre étapes, devenues célèbres sous les noms anglais forming, storming, norming, performing : une phase de découverte et de dépendance, une phase de conflit, l'émergence de la cohésion, puis des rôles fonctionnels au service de la tâche. L'enseignement pratique est simple : **le conflit n'est pas le signe que la cohésion échoue, c'est souvent l'étape qui la précède.**",
        },
      ],
    },

    {
      label: "Signaux",
      titre: "Les signes d'une cohésion d'équipe qui s'effrite",
      blocs: [
        {
          type: "p",
          texte:
            "Une équipe se défait rarement d'un coup. Les signaux sont discrets et s'installent progressivement. Les repérer tôt permet d'agir avant que les tensions ne deviennent des départs ou des arrêts.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous observez", "Ce que cela indique souvent"],
          lignes: [
            [
              "Les réunions sont calmes, les vrais sujets se traitent en aparté après",
              "La parole n'est pas sûre en collectif : les désaccords ont trouvé un autre chemin",
            ],
            [
              "Chacun défend son périmètre, les problèmes tombent entre deux chaises",
              "Les rôles sont flous aux interfaces, et personne n'a intérêt à prendre ce qui n'est pas à lui",
            ],
            [
              "Les erreurs sont découvertes tard, ou par le client",
              "Signaler une erreur coûte plus cher que la taire",
            ],
            [
              "Les nouveaux arrivants restent en marge plusieurs mois",
              "Le collectif ne sait plus intégrer : il fonctionne sur des habitudes non écrites",
            ],
            [
              "Tout remonte au dirigeant ou au manager, y compris les désaccords entre collègues",
              "L'équipe ne se reconnaît pas le droit de trancher elle-même",
            ],
          ],
        },
        { type: "h3", texte: "Quand la cohésion touche à la santé" },
        {
          type: "p",
          texte:
            "Des relations de travail dégradées ne sont pas qu'un problème d'ambiance. Dans sa page [Prévenir les risques psychosociaux : facteurs de risque](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html), l'INRS classe les rapports sociaux au travail dégradés parmi les six familles de facteurs de risques psychosociaux, aux côtés de l'intensité du travail, des exigences émotionnelles, du manque d'autonomie, des conflits de valeurs et de l'insécurité de la situation de travail. Ces rapports couvrent les relations avec les collègues et la hiérarchie, le soutien reçu, l'équité et l'attention portée au bien-être.",
        },
        {
          type: "encadre",
          titre: "Au-delà de l'organisation, la santé",
          texte:
            "Si un collaborateur montre des signes de souffrance durable, ou si un conflit a pris un tour personnel, le sujet dépasse la cohésion d'équipe. Orientez-le vers le médecin du travail ou son médecin traitant. En cas de détresse, le 3114 est joignable gratuitement, 24 h/24. Notre article sur la [prévention des risques psychosociaux](/infos-utiles/prevention-risques-psychosociaux/) approfondit ce sujet.",
        },
      ],
    },

    {
      label: "Les causes",
      titre: "Pourquoi la cohésion se dégrade dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Les équipes ne perdent pas leur cohésion parce que leurs membres sont de mauvaise volonté. Elles la perdent parce que l'organisation les met en tension. Quatre causes reviennent dans les PME de 10 à 250 salariés.",
        },
        { type: "h3", texte: "Des rôles qui ont évolué sans être redéfinis" },
        {
          type: "p",
          texte:
            "L'entreprise a grandi, des postes ont été créés, des responsabilités ont glissé. Sur le papier, chacun a une fonction. Dans les faits, personne ne sait qui décide quoi aux frontières. Les frictions qui en résultent sont vécues comme des conflits de personnes, alors qu'elles sont d'abord des conflits de périmètre.",
        },
        { type: "h3", texte: "Des objectifs qui se contredisent" },
        {
          type: "p",
          texte:
            "La production est jugée sur les coûts, le commercial sur le chiffre d'affaires, la qualité sur les réclamations. Chacun fait bien son travail et les équipes s'opposent. Tant que personne n'arbitre entre ces objectifs, la cohésion d'équipe à l'échelle de l'entreprise est impossible.",
        },
        { type: "h3", texte: "Des tensions qu'on laisse vieillir" },
        {
          type: "p",
          texte:
            "Un désaccord non traité ne disparaît pas : il se déplace sur le terrain relationnel, où il devient beaucoup plus difficile à résoudre. Savoir traiter un différend quand il est encore un désaccord sur le travail est une compétence à part entière, que nous détaillons dans notre article sur la [gestion de conflit](/infos-utiles/gestion-de-conflit/).",
        },
        { type: "h3", texte: "Une reconnaissance qui ne circule pas" },
        {
          type: "p",
          texte:
            "Quand les efforts d'une équipe ne sont vus par personne, ou seulement quand quelque chose va mal, l'engagement collectif s'érode. L'INRS compte d'ailleurs les procédures d'évaluation du travail et l'attention portée au bien-être des salariés parmi les composantes des rapports sociaux au travail.",
        },
      ],
    },

    {
      label: "Au quotidien",
      titre: "Renforcer la cohésion d'équipe au quotidien",
      blocs: [
        {
          type: "p",
          texte:
            "La cohésion se construit surtout dans le travail ordinaire. Les leviers les plus efficaces ne coûtent presque rien, mais ils demandent de la constance.",
        },
        { type: "h3", texte: "Clarifier les rôles et les règles de décision" },
        {
          type: "p",
          texte:
            "Écrire, avec l'équipe, qui fait quoi et qui décide quoi, surtout aux frontières entre les postes. Préciser ce qui se passe en cas de désaccord. Cette clarification réduit à elle seule une grande partie des frictions quotidiennes, parce qu'elle retire aux tensions leur principal carburant : l'incertitude.",
        },
        { type: "h3", texte: "Ouvrir des espaces pour parler du travail réel" },
        {
          type: "p",
          texte:
            "L'Anact a consacré un guide à ces lieux, [Dix questions sur les espaces de discussion](https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf) (2015). Ce sont des temps collectifs, réguliers et cadrés, centrés sur l'expérience de travail : ce qui marche, ce qui coince, les consignes difficiles à tenir. L'Anact précise ce qu'ils ne sont pas : ni un lieu de parole descendante, ni un recueil de plaintes, ni un lieu de règlement de comptes ou d'échanges sur les personnes. Elle rappelle aussi que « la confiance ne se décrète pas, elle se construit dans le temps ».",
        },
        { type: "h3", texte: "Partager un objectif et le suivre ensemble" },
        {
          type: "p",
          texte:
            "Un objectif d'équipe, visible et suivi ensemble chaque semaine, crée plus de cohésion qu'une série d'objectifs individuels. Il rend chacun attentif au travail des autres, et il donne un motif concret à l'entraide.",
        },
        {
          type: "liste",
          items: [
            "Un point hebdomadaire court, centré sur ce qui bloque plutôt que sur un compte rendu d'activité",
            "Une règle explicite : on peut signaler une erreur sans être sanctionné pour l'avoir signalée",
            "Un parrain désigné pour chaque nouvel arrivant pendant ses premières semaines",
            "Un moment régulier pour reconnaître ce qui a été bien fait, nommément et précisément",
          ],
        },
      ],
    },

    {
      label: "Séminaire et activités",
      titre: "Activité de cohésion d'équipe et séminaire : ce qu'on peut en attendre",
      blocs: [
        {
          type: "p",
          texte:
            "Une activité de cohésion d'équipe, un atelier ou un séminaire au vert ont leur utilité. Ils créent un temps hors du quotidien, permettent de se découvrir autrement et de rompre avec les habitudes de réunion. **Mais une journée ne répare pas ce que les semaines défont.** Si les rôles restent flous et les tensions intactes, l'effet s'évapore dès le retour au bureau.",
        },
        {
          type: "tableau",
          entetes: ["Ce qu'un séminaire peut faire", "Ce qu'il ne peut pas faire seul"],
          lignes: [
            [
              "Créer un moment partagé et des souvenirs communs",
              "Clarifier durablement qui décide quoi",
            ],
            [
              "Ouvrir une discussion sur le fonctionnement de l'équipe, loin de l'urgence",
              "Régler un conflit ancien entre deux personnes",
            ],
            [
              "Lancer une démarche, fixer des engagements concrets",
              "Faire vivre ces engagements sans suivi dans les semaines qui suivent",
            ],
            [
              "Intégrer de nouveaux arrivants dans un collectif",
              "Compenser une surcharge de travail qui épuise l'équipe",
            ],
          ],
        },
        { type: "h3", texte: "Choisir une activité reliée au travail" },
        {
          type: "p",
          texte:
            "Les activités ludiques ou sportives ont un effet sur le lien. Pour qu'il dure, associez-les à un temps consacré au travail lui-même : une question que l'équipe se pose vraiment, une règle de fonctionnement à écrire ensemble, un problème récurrent à résoudre. Le guide de l'Anact propose par exemple un atelier de discussion sur le « travail bien fait » : ce que chacun entend par là, et ce qui l'en empêche. Fixez enfin, avant de partir, qui suivra les engagements pris et quand.",
        },
        { type: "h3", texte: "Veiller à ce que tout le monde puisse participer" },
        {
          type: "p",
          texte:
            "Une activité physique exigeante, une soirée tardive ou un déplacement long peuvent exclure une partie de l'équipe. Une activité de cohésion qui laisse des personnes de côté produit l'inverse de l'effet recherché. Demandez l'avis de l'équipe avant de choisir.",
        },
      ],
    },

    {
      label: "Le rôle du manager",
      titre: "Le rôle du dirigeant et du manager dans la cohésion",
      blocs: [
        {
          type: "p",
          texte:
            "La cohésion d'une équipe dépend beaucoup de celui qui l'anime. Non pas de son charisme, mais de ce qu'il laisse faire et de ce qu'il protège. Si la sécurité psychologique est le socle de la cohésion, la façon dont le responsable réagit à une erreur ou à une question donne le ton à toute l'équipe.",
        },
        { type: "h3", texte: "Protéger la parole" },
        {
          type: "p",
          texte:
            "Parler en dernier en réunion, remercier la personne qui signale un problème, reconnaître ses propres erreurs devant l'équipe : ces gestes simples installent la sécurité psychologique plus sûrement qu'un discours sur la confiance. À l'inverse, une seule réaction humiliante suffit à faire taire une équipe pour longtemps.",
        },
        { type: "h3", texte: "Arbitrer, et ne pas tout arbitrer" },
        {
          type: "p",
          texte:
            "Le manager tranche quand les objectifs se contredisent ou quand l'équipe est bloquée. Il laisse en revanche l'équipe régler ce qui relève d'elle. Un responsable qui arbitre chaque désaccord entre collègues empêche l'équipe d'apprendre à se réguler seule. Notre article sur le [rôle du manager](/infos-utiles/role-du-manager/) détaille cet équilibre.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Quand se faire accompagner pour renforcer la cohésion d'équipe",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup d'équipes retrouvent leur cohésion avec les leviers décrits plus haut. Un tiers devient utile quand les tensions sont anciennes, quand le dirigeant fait lui-même partie de la difficulté, ou quand les tentatives internes n'ont pas tenu. Il voit ce que les membres de l'équipe ne peuvent pas voir de l'intérieur, et il peut animer des échanges que personne n'ose ouvrir.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, un conseiller référent prend en charge le sujet. Le travail sur la coopération passe par l'étape Coopérer : des cercles d'avancée de 6 à 8 personnes, en sessions de trois heures sur trois mois, en présentiel ou en visio, qui travaillent sur des situations réelles de l'entreprise. Quand la difficulté tient d'abord à la charge et à l'énergie des équipes, le pilier équilibre et qualité de vie au travail intervient, si le sujet l'exige. Pour une équipe de direction, le [coaching d'équipe](/infos-utiles/coaching-d-equipe/) est une autre approche possible.",
        },
        {
          type: "p",
          texte:
            "Le périmètre est défini avec vous, écrit dans la proposition, et ne s'élargit pas sans votre accord. Si vous hésitez sur l'origine du problème, dans l'équipe ou dans l'organisation qui l'entoure, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la cohésion d'équipe ?",
      r: [
        "C'est la force qui maintient les membres d'une équipe ensemble et engagés vers un objectif commun. Elle a deux dimensions : la qualité des relations entre les personnes, et l'engagement partagé sur la tâche. Une équipe cohésive n'est pas une équipe sans désaccord, mais une équipe qui sait se dire les désaccords sur le travail et continuer à avancer ensemble quand la situation devient difficile.",
      ],
    },
    {
      q: "Comment renforcer la cohésion d'une équipe ?",
      r: [
        "D'abord dans le travail quotidien : clarifier les rôles et les règles de décision, partager un objectif d'équipe suivi chaque semaine, ouvrir des temps réguliers pour parler du travail réel, permettre à chacun de signaler une erreur sans crainte. Un séminaire ou une activité de cohésion peut accélérer la démarche, à condition d'être relié au travail et suivi d'engagements concrets dans les semaines qui suivent.",
      ],
    },
    {
      q: "Quelle activité de cohésion d'équipe choisir ?",
      r: [
        "Une activité accessible à tous, qui n'exclut personne pour des raisons physiques, familiales ou d'horaires, et associée à un temps consacré au fonctionnement de l'équipe. Les activités ludiques renforcent le lien ; leur effet dure davantage quand l'équipe repart avec une règle écrite ensemble, un problème résolu ou des engagements suivis. Demandez l'avis de l'équipe avant de trancher.",
      ],
    },
    {
      q: "Un séminaire suffit-il à ressouder une équipe ?",
      r: [
        "Rarement. Un séminaire crée un moment partagé et peut ouvrir des discussions difficiles loin de l'urgence. Mais si les rôles restent flous, si les objectifs se contredisent ou si un conflit ancien n'est pas traité, l'effet disparaît au retour. Le séminaire est utile comme point de départ ou comme étape d'une démarche plus longue, pas comme solution isolée.",
      ],
    },
    {
      q: "Quels sont les signes d'un manque de cohésion ?",
      r: [
        "Des réunions calmes où les vrais sujets se traitent ensuite en aparté, des problèmes qui tombent entre deux postes, des erreurs découvertes tard, des nouveaux arrivants qui restent en marge, des désaccords entre collègues qui remontent systématiquement au manager. Si des signes de souffrance durable apparaissent chez un collaborateur, le sujet relève du médecin du travail, pas seulement de l'organisation.",
      ],
    },
    {
      q: "Qu'est-ce que la sécurité psychologique dans une équipe ?",
      r: [
        "C'est la croyance partagée, dans une équipe, qu'on peut prendre des risques interpersonnels sans être humilié ou sanctionné : poser une question, signaler une erreur, proposer une idée. La notion a été définie par Amy Edmondson, de Harvard, à partir d'une étude de 51 équipes industrielles. L'étude de Google sur 180 équipes la place en tête des facteurs d'efficacité collective.",
      ],
    },
  ],

  sources: [
    {
      titre: "Prévenir les risques psychosociaux (RPS). Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Dix questions sur les espaces de discussion",
      editeur: "Anact (2015)",
      url: "https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf",
    },
    {
      titre: "Psychological Safety and Learning Behavior in Work Teams",
      editeur: "Administrative Science Quarterly, vol. 44 (1999), Amy Edmondson, Harvard",
      url: "https://dash.harvard.edu/entities/publication/13a7b031-0fdd-45ec-a7e0-2b80e2bc679f",
    },
    {
      titre: "Developmental Sequence in Small Groups",
      editeur: "Psychological Bulletin, vol. 63 (1965), Bruce W. Tuckman",
      url: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Dynamics/Tuckman_1965_Developmental_sequence_in_small_groups.pdf",
    },
    {
      titre: "Understand team effectiveness",
      editeur: "Google re:Work",
      url: "https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2027-05-17",
  accent: "qvt",
  pilier: { href: "/muriel-saffroy/", ancre: "Muriel Saffroy" },

  valide: false,
};
