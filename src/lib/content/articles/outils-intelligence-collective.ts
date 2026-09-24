import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 4, coopération et intelligence collective. Signé
 * Muriel Saffroy. Requête : « outils intelligence collective » (170/mois, KD 13).
 * Secondaires : « atelier intelligence collective » (140), « intelligence
 * collective définition » (140).
 *
 * Voisin direct de /infos-utiles/intelligence-collective-en-entreprise/ (conditions,
 * codir, six outils de réunion) : cet article-ci ne refait pas la théorie. Il
 * classe les outils par moment de la décision, détaille les formats d'atelier et
 * la préparation, et renvoie vers l'article voisin pour les conditions.
 *
 * Points sensibles : aucun chiffre sur l'efficacité des outils de facilitation
 * (World Café, forum ouvert, co-développement) faute d'étude autoritaire ouverte ;
 * seuls les résultats de Diehl et Stroebe (1987) sur le brainstorming sont chiffrés.
 * Les formats du cabinet (cercles d'avancée : 6 à 8 personnes, 3 h, 3 mois)
 * viennent de home.ts. Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "outils-intelligence-collective",

  motCle: "outils intelligence collective (170/mois, KD 13) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "atelier intelligence collective (140/mois)",
    "intelligence collective définition (140/mois)",
    "méthodes d'intelligence collective",
    "animer un atelier collaboratif",
  ],

  // 40 / 42
  metaTitle: "Outils d'intelligence collective : guide",
  // 143 / 150
  metaDescription:
    "Outils d'intelligence collective classés par usage : faire émerger des idées, résoudre, décider, apprendre. Et préparer un atelier qui aboutit.",

  h1: "Outils d'intelligence collective : lesquels choisir, et comment animer un atelier qui aboutit",

  chapo:
    "Les outils d'intelligence collective servent à une chose : faire sortir d'un groupe ce que chacun sait ou pense seul, puis en tirer une décision. Le bon outil dépend du moment. Pour faire émerger des idées, on écrit avant de parler. Pour résoudre un problème concret, on consulte des pairs selon un protocole. Pour décider, on remplace le vote ou le silence par le consentement. Pour apprendre, on revient sur les faits. La plupart des ateliers déçoivent non à cause de l'outil, mais parce qu'ils n'avaient ni question précise, ni décision attendue à la sortie. Voici les outils qui fonctionnent en PME, classés par usage, et la façon de préparer un atelier qui aboutit.",

  essentiel: {
    reponse:
      "Les outils d'intelligence collective sont des méthodes d'animation qui organisent la réflexion d'un groupe pour qu'il produise de meilleures idées ou de meilleures décisions que ses membres isolés. Ils se classent selon quatre usages : faire émerger des idées (écriture silencieuse, 1-2-4-tous, World Café, forum ouvert), résoudre un problème (co-développement professionnel, espaces de discussion sur le travail), décider (décision par consentement, élection sans candidat, pré-mortem) et apprendre (revue après action). Un atelier d'intelligence collective réussit quand sa question est précise, son périmètre de décision annoncé et sa suite écrite.",
    points: [
      "Définition : l'intelligence collective est la capacité d'un groupe à faire mieux que la somme de ses membres",
      "Le brainstorming oral classique produit moins d'idées que la même équipe travaillant d'abord seule : écrivez avant de parler",
      "Choisissez l'outil selon le moment : émerger, résoudre, décider, apprendre",
      "Un atelier se prépare : une question, les bonnes personnes, un animateur qui ne tranche pas, une décision annoncée",
      "Sans suite visible donnée aux propositions, le deuxième atelier ne mobilise plus personne",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Intelligence collective : définition, et ce qu'un outil peut en faire",
      blocs: [
        {
          type: "p",
          texte:
            "L'intelligence collective désigne la capacité d'un groupe à produire de meilleures idées ou de meilleures décisions que chacun de ses membres pris seul. Elle n'est pas automatique : un groupe peut aussi décider moins bien qu'un individu, quand les mêmes voix occupent la parole ou quand personne n'ose contredire. Nous avons détaillé les conditions qui la rendent possible, et ce qu'en dit la recherche, dans notre article sur l'[intelligence collective en entreprise](/infos-utiles/intelligence-collective-en-entreprise/).",
        },
        {
          type: "h3",
          texte: "Un outil n'est pas une méthode magique",
        },
        {
          type: "p",
          texte:
            "Un outil d'intelligence collective est une règle du jeu. Il fixe qui parle, quand, combien de temps, par écrit ou à l'oral, et comment on conclut. **Sa valeur vient entièrement de ce qu'il empêche : le dirigeant qui donne son avis en premier, la discussion qui tourne sur ce que tout le monde sait déjà, la décision prise par lassitude.** Choisir un outil, c'est donc d'abord nommer le travers que vous voulez éviter.",
        },
        {
          type: "h3",
          texte: "Quatre usages, quatre familles d'outils",
        },
        {
          type: "p",
          texte:
            "Le ministère de la Transition écologique, dans sa [boîte à outils de l'intelligence collective](https://www.innovation-transformations.ecologie.gouv.fr/pages/la-boite-a-outils-de-lintelligence-collective), range ses outils par phase de projet, du cadrage au déploiement. Pour un dirigeant de PME, une grille plus courte suffit : faire émerger, résoudre, décider, apprendre. C'est l'ordre que suit cet article. Au cabinet, c'est aussi le fil des cercles d'avancée animés par [Muriel Saffroy](/muriel-saffroy/), où chaque séance part d'une situation réelle apportée par un participant.",
        },
      ],
    },

    {
      label: "Le piège",
      titre: "Pourquoi le brainstorming classique déçoit",
      blocs: [
        {
          type: "p",
          texte:
            "Le brainstorming est l'outil le plus connu, et celui dont les limites sont les mieux documentées. Il a été proposé dans les années 1950 par le publicitaire Alex Osborn, qui affirmait qu'une personne produit deux fois plus d'idées en groupe que seule. La recherche a testé cette promesse très tôt.",
        },
        {
          type: "h3",
          texte: "Ce que montrent les expériences",
        },
        {
          type: "p",
          texte:
            "Dans leur article de 1987, [Productivity Loss In Brainstorming Groups](https://homepages.se.edu/cvonbergen/files/2013/01/Productivity-Loss-In-Brainstorming_Toward-the-Solution-of-a-Riddle.pdf), publié dans le Journal of Personality and Social Psychology, Michael Diehl et Wolfgang Stroebe rappellent qu'une première étude, en 1958, a trouvé l'inverse de la promesse : des personnes travaillant seules, dont on réunit ensuite les idées, en produisaient près de deux fois plus que des groupes réels. Sur les 22 expériences qu'ils recensent, 18 donnent l'avantage aux individus réunis après coup ; les 4 autres, toutes menées à deux personnes, ne trouvent pas de différence.",
        },
        {
          type: "p",
          texte:
            "Leurs propres expériences identifient la cause principale : le **blocage de production**. En groupe, on attend son tour pour parler ; pendant ce temps, on écoute, on oublie son idée ou on la juge moins bonne que celle qui vient d'être dite. Ni la paresse ni la peur du jugement n'expliquent l'essentiel de la perte.",
        },
        {
          type: "h3",
          texte: "La conséquence pratique",
        },
        {
          type: "p",
          texte:
            "Faites travailler chacun seul et par écrit avant toute mise en commun. Quelques minutes suffisent. Ce principe se retrouve dans presque tous les outils qui suivent : il est la base de l'intelligence collective utile, bien plus que le tableau couvert de post-it.",
        },
      ],
    },

    {
      label: "Faire émerger",
      titre: "Outils pour faire émerger des idées et des informations",
      blocs: [
        {
          type: "p",
          texte:
            "Ces outils servent au début d'un sujet, quand vous voulez connaître ce que votre équipe sait, craint ou propose, sans que la hiérarchie filtre les réponses.",
        },
        {
          type: "h3",
          texte: "L'écriture silencieuse et le 1-2-4-tous",
        },
        {
          type: "p",
          texte:
            "L'écriture silencieuse consiste à poser une question, puis à laisser chacun écrire ses idées seul avant tout échange. Le 1-2-4-tous en est une version structurée : chacun réfléchit seul, puis échange en binôme, puis à quatre, avant une mise en commun où chaque groupe partage l'idée qu'il juge la plus forte. En moins d'une demi-heure, tout le monde a contribué, y compris les personnes qui ne prennent jamais la parole en réunion.",
        },
        {
          type: "h3",
          texte: "Le World Café",
        },
        {
          type: "p",
          texte:
            "Plusieurs tables, une question par table, un hôte qui reste et des participants qui changent de table à chaque tour en emportant ce qu'ils ont entendu. Le format convient à un groupe nombreux, par exemple tout l'encadrement d'un site, sur un sujet large : ce qui freine nos projets, ce que nos clients nous reprochent. Il produit une vue d'ensemble riche. Il ne produit pas de décision, et il faut le dire avant de commencer.",
        },
        {
          type: "h3",
          texte: "Le forum ouvert",
        },
        {
          type: "p",
          texte:
            "Le forum ouvert, ou Open Space, part d'une question générale. Les participants proposent eux-mêmes les sujets de discussion, puis chacun rejoint l'atelier qui l'intéresse et le quitte librement. C'est l'outil le plus ouvert, donc le plus exigeant pour le dirigeant : il faut accepter que les sujets choisis ne soient pas ceux qu'il attendait.",
        },
      ],
    },

    {
      label: "Résoudre",
      titre: "Outils pour résoudre un problème concret",
      blocs: [
        {
          type: "p",
          texte:
            "Quand la question n'est plus « quelles idées ? » mais « comment régler cette situation précise ? », il faut des formats plus serrés, centrés sur un cas réel.",
        },
        {
          type: "h3",
          texte: "Le co-développement professionnel",
        },
        {
          type: "p",
          texte:
            "Méthode née au Québec, le co-développement réunit un petit groupe de pairs, managers ou dirigeants. À chaque séance, un participant expose une situation qui lui pose problème. Les autres posent d'abord des questions de clarification, sans donner d'avis. Viennent ensuite leurs suggestions, puis le choix, par la personne concernée seule, de ce qu'elle va en faire. **La règle qui fait tout : celui qui expose reste propriétaire de son problème et de sa décision.** Le groupe éclaire, il ne décide pas à sa place.",
        },
        {
          type: "h3",
          texte: "Les espaces de discussion sur le travail",
        },
        {
          type: "p",
          texte:
            "L'Anact, dans son guide [Dix questions sur les espaces de discussion](https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf) (2015), décrit des espaces collectifs centrés sur le travail réel, avec un cadre et des règles construits avec les participants, inscrits dans l'organisation et destinés à produire des propositions ou des décisions concrètes. Elle précise ce qu'ils ne sont pas : un recueil de plaintes, un lieu de règlement de comptes, un espace de conflits interpersonnels. Pour une équipe d'atelier ou de service, c'est souvent l'outil le plus utile, parce qu'il part de ce qui coince dans la journée de travail.",
        },
      ],
    },

    {
      label: "Décider",
      titre: "Outils pour décider ensemble sans s'enliser",
      exergue:
        "Un atelier qui produit des idées sans règle de décision produit surtout de la déception.",
      blocs: [
        {
          type: "p",
          texte:
            "La phase de décision est celle que les ateliers d'intelligence collective ratent le plus souvent. On a beaucoup échangé, et la décision se prend ensuite dans le bureau du dirigeant, ou pas du tout. Trois outils aident à conclure.",
        },
        {
          type: "h3",
          texte: "La décision par consentement",
        },
        {
          type: "p",
          texte:
            "Une proposition est adoptée quand personne n'a d'objection argumentée. Une objection n'est pas une préférence : elle doit montrer en quoi la proposition nuit à l'objectif ou crée un risque. Le porteur amende sa proposition pour lever l'objection, puis on refait un tour. Le consentement évite à la fois le consensus impossible et le vote qui fabrique des perdants.",
        },
        {
          type: "h3",
          texte: "L'élection sans candidat",
        },
        {
          type: "p",
          texte:
            "Issue de la sociocratie, elle sert à attribuer un rôle : pilote d'un projet, référent d'un sujet. On définit d'abord le rôle, puis chacun écrit le nom de la personne qu'il propose et explique son choix à voix haute. Après un tour où chacun peut changer d'avis, l'animateur propose un nom et on vérifie les objections. La personne choisie sait pourquoi le groupe l'a désignée, ce qui change sa légitimité.",
        },
        {
          type: "h3",
          texte: "Le pré-mortem",
        },
        {
          type: "p",
          texte:
            "Proposé par le psychologue Gary Klein dans la Harvard Business Review, le [pré-mortem](https://hbr.org/2007/09/performing-a-project-premortem) se pratique juste avant de lancer un projet validé. On demande au groupe d'imaginer que le projet a échoué, puis à chacun d'écrire pourquoi. Klein en résume l'intérêt : rendre sûr, pour ceux qui connaissent le dossier et s'inquiètent de ses faiblesses, le fait de le dire.",
        },
      ],
    },

    {
      label: "Récapitulatif",
      titre: "Quel outil d'intelligence collective pour quel besoin",
      blocs: [
        {
          type: "p",
          texte:
            "Le tableau ci-dessous résume les outils présentés et le moment où chacun sert. La dernière ligne concerne l'apprentissage, la phase la plus souvent oubliée.",
        },
        {
          type: "tableau",
          entetes: ["Votre besoin", "L'outil adapté, et sa règle clé"],
          lignes: [
            [
              "Recueillir des idées sans que la hiérarchie les filtre",
              "Écriture silencieuse ou 1-2-4-tous : chacun écrit seul avant tout échange",
            ],
            [
              "Faire réfléchir un groupe nombreux sur un sujet large",
              "World Café : une question par table, des participants qui tournent",
            ],
            [
              "Laisser l'équipe choisir les sujets qui comptent pour elle",
              "Forum ouvert : les participants proposent les thèmes",
            ],
            [
              "Aider un manager sur une situation précise",
              "Co-développement : questions d'abord, conseils ensuite, décision à celui qui expose",
            ],
            [
              "Régler ce qui coince dans le travail quotidien",
              "Espace de discussion sur le travail : partir du travail réel, pas des personnes",
            ],
            [
              "Conclure sans vote ni consensus impossible",
              "Décision par consentement : on adopte sauf objection argumentée",
            ],
            [
              "Désigner un pilote ou un référent",
              "Élection sans candidat : un rôle défini, des choix motivés à voix haute",
            ],
            [
              "Sécuriser un projet avant son lancement",
              "Pré-mortem : imaginer l'échec pour en nommer les causes",
            ],
            [
              "Tirer les leçons d'un projet ou d'une crise",
              "Revue après action : prévu, réalisé, écart, ce qu'on garde, ce qu'on change",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Pour une équipe qui débute, deux ou trois outils bien maîtrisés valent mieux que dix essayés une fois. L'écriture silencieuse, le consentement et la revue après action couvrent déjà l'essentiel. Ce sont aussi trois bons points de départ pour un comité de direction ; notre article sur le [comité de direction](/infos-utiles/comite-de-direction/) montre comment ils s'insèrent dans l'ordre du jour.",
        },
      ],
    },

    {
      label: "L'atelier",
      titre: "Atelier d'intelligence collective : le préparer et l'animer",
      blocs: [
        {
          type: "p",
          texte:
            "Un atelier d'intelligence collective se joue pour moitié avant d'avoir commencé. Voici les étapes qui comptent.",
        },
        {
          type: "h3",
          texte: "Avant : une question, un périmètre, les bonnes personnes",
        },
        {
          type: "liste",
          items: [
            "**Formuler une question ouverte et précise** : « comment réduire les retours clients sur la gamme B d'ici l'été ? » plutôt que « parlons qualité »",
            "**Annoncer le périmètre de décision** : ce que le groupe décide, ce qu'il propose, ce que la direction tranchera ensuite",
            "**Choisir les participants** pour ce qu'ils savent du sujet, pas pour leur rang ; six à huit personnes suffisent souvent",
            "**Choisir l'outil** selon la phase : émerger, résoudre, décider ou apprendre",
          ],
        },
        {
          type: "h3",
          texte: "Pendant : un animateur qui tient le cadre, pas le fond",
        },
        {
          type: "p",
          texte:
            "L'animateur fait respecter le temps, les tours de parole et la règle de l'outil. Il ne donne pas son avis sur le fond. C'est pourquoi le dirigeant ne devrait pas animer un atelier sur un sujet qui le concerne : même silencieux, son regard oriente les réponses. Un manager d'un autre service ou un tiers extérieur s'en charge mieux. En fin d'atelier, on relit à voix haute ce qui a été décidé, par qui et pour quand.",
        },
        {
          type: "h3",
          texte: "Après : une suite visible",
        },
        {
          type: "p",
          texte:
            "Le guide de l'Anact insiste sur ce point : faire le lien entre ce qui se dit, les réponses apportées et les décisions prises, et rendre visible ce que la démarche produit. **Si les propositions d'un atelier restent sans réponse, le suivant ne mobilisera plus personne.** Une réponse négative motivée vaut mieux qu'un silence.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Les erreurs qui vident les outils de leur sens, et comment s'en faire aider",
      blocs: [
        {
          type: "p",
          texte:
            "Les outils échouent rarement pour des raisons techniques. Les causes d'échec se ressemblent d'une entreprise à l'autre :",
        },
        {
          type: "liste",
          items: [
            "**La décision déjà prise** : l'atelier sert à faire valider un choix arrêté, et tout le monde le sent",
            "**L'outil plaqué sur un conflit** : quand deux personnes s'opposent, un World Café ne règle rien ; le sujet relève de la [gestion de conflit](/infos-utiles/gestion-de-conflit/)",
            "**Le séminaire sans lendemain** : une journée intense, puis retour aux habitudes dès le lundi",
            "**La contradiction sanctionnée** : si une objection passée a coûté à son auteur, les outils produisent des avis prudents",
          ],
        },
        {
          type: "p",
          texte:
            "Les outils prennent tout leur sens quand ils deviennent une habitude de l'équipe, plutôt qu'un événement. C'est le travail d'un [coaching d'équipe](/infos-utiles/coaching-d-equipe/) ou d'un groupe de pairs suivi dans la durée. Chez Un Seul Souffle, c'est l'étape Coopérer : des cercles d'avancée de six à huit personnes, en sessions de trois heures sur trois mois, en présentiel ou en visio, à partir des situations réelles des participants. Un conseiller référent suit le groupe du début à la fin, sur un périmètre convenu avec vous. Pour savoir si le nœud est dans la coopération ou ailleurs, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quels sont les principaux outils d'intelligence collective ?",
      r: [
        "Les plus utilisés en entreprise se classent par usage. Pour faire émerger des idées : l'écriture silencieuse, le 1-2-4-tous, le World Café et le forum ouvert. Pour résoudre un problème : le co-développement professionnel et les espaces de discussion sur le travail. Pour décider : la décision par consentement, l'élection sans candidat et le pré-mortem. Pour apprendre : la revue après action. Le bon choix dépend du moment de la décision.",
      ],
    },
    {
      q: "Qu'est-ce qu'un atelier d'intelligence collective ?",
      r: [
        "C'est une séance de travail où un groupe traite une question précise selon une méthode d'animation qui organise la parole, l'écriture et la décision. Un animateur tient le cadre sans intervenir sur le fond. Un atelier réussi part d'une question ouverte, réunit les personnes qui connaissent le sujet, annonce ce que le groupe a le pouvoir de décider et se termine par des actions attribuées et datées.",
      ],
    },
    {
      q: "Quelle est la définition de l'intelligence collective ?",
      r: [
        "L'intelligence collective est la capacité d'un groupe à produire de meilleures idées ou de meilleures décisions que ses membres pris isolément. Elle n'est pas garantie : un groupe peut aussi décider moins bien qu'un individu, lorsque la parole est monopolisée ou que la contradiction est risquée. Les outils d'intelligence collective servent justement à organiser les échanges pour que cette capacité se manifeste.",
      ],
    },
    {
      q: "Le brainstorming est-il un bon outil d'intelligence collective ?",
      r: [
        "Sous sa forme orale classique, il est moins efficace qu'on ne le croit. Les expériences recensées par Diehl et Stroebe en 1987 montrent que des personnes travaillant seules, dont on réunit ensuite les idées, en produisent généralement davantage qu'un groupe qui réfléchit à voix haute. La cause principale est le blocage de production : on attend son tour et on perd ses idées. Faites écrire chacun seul avant d'échanger.",
      ],
    },
    {
      q: "Qui doit animer un atelier d'intelligence collective ?",
      r: [
        "Idéalement, une personne qui n'a pas d'enjeu sur le fond du sujet : un manager d'un autre service, un collègue formé à l'animation ou un intervenant extérieur. Le dirigeant peut participer, mais il évite d'animer un atelier sur un sujet qui le concerne, car sa présence au centre oriente les réponses. L'animateur tient le temps, les tours de parole et la règle de décision annoncée.",
      ],
    },
  ],

  sources: [
    {
      titre: "Productivity Loss In Brainstorming Groups: Toward the Solution of a Riddle",
      editeur: "Michael Diehl et Wolfgang Stroebe, Journal of Personality and Social Psychology, 1987",
      url: "https://homepages.se.edu/cvonbergen/files/2013/01/Productivity-Loss-In-Brainstorming_Toward-the-Solution-of-a-Riddle.pdf",
    },
    {
      titre: "Dix questions sur les espaces de discussion",
      editeur: "Anact",
      url: "https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf",
    },
    {
      titre: "La boîte à outils de l'intelligence collective",
      editeur: "Ministère de la Transition écologique et de la Cohésion des territoires",
      url: "https://www.innovation-transformations.ecologie.gouv.fr/pages/la-boite-a-outils-de-lintelligence-collective",
    },
    {
      titre: "Performing a Project Premortem",
      editeur: "Gary Klein, Harvard Business Review, 2007",
      url: "https://hbr.org/2007/09/performing-a-project-premortem",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-08-02",
  accent: "organisation",
  pilier: { href: "/muriel-saffroy/", ancre: "Muriel Saffroy" },

  valide: true,
};
