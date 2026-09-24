import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Muriel Saffroy.
 * Requête : « rôle du manager » (480/mois, KD 8). Secondaires : « manager
 * d'équipe » (590), « les managers » (590).
 *
 * Périmètre : la FONCTION (ce qu'est le rôle, ce qu'il n'est pas, ce que le
 * dirigeant doit lui donner). Le « comment » quotidien (rituels, feedback,
 * premières semaines) appartient à /infos-utiles/manager-une-equipe/ (mai 2027),
 * qui renvoie ici : ne pas le reprendre.
 *
 * POINTS SENSIBLES
 * - Juridique : l'obligation de sécurité pèse sur l'employeur (C. trav. L4121-1),
 *   pas sur le manager en tant que tel ; l'article le dit et renvoie vers la
 *   délégation de pouvoir et un avocat. L6315-1 (entretien de parcours
 *   professionnel, version au 31/12/2025) et la fiche service-public F31854
 *   (évaluation) vérifiés le 24/09/2026.
 * - Chiffres : étude Apec « Cadres et management » (janvier 2026), IGAS (mars
 *   2025), INRS. Pages ouvertes le 24/09/2026. Les chiffres Apec portent sur les
 *   cadres du privé, toutes tailles d'entreprise : le texte le précise.
 * - Aucun élément de parcours prêté à l'autrice au-delà de membres.ts.
 */
export const article: Article = {
  slug: "role-du-manager",

  motCle: "rôle du manager (480/mois, KD 8) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "manager d'équipe (590/mois)",
    "les managers (590/mois)",
    "missions du manager",
    "manager de proximité",
  ],

  // 37 / 42
  metaTitle: "Rôle du manager : missions et limites",
  // 150 / 150
  metaDescription:
    "Rôle du manager en PME : ses quatre missions, ce qu'il n'est pas, ce que la loi en attend et ce que le dirigeant doit lui donner pour qu'il le tienne.",

  h1: "Rôle du manager : ce qu'il doit tenir, et ce que vous devez lui donner",

  chapo:
    "Le rôle du manager tient en une phrase : faire en sorte que le travail de son équipe se fasse, dans de bonnes conditions, et que les décisions circulent dans les deux sens. Concrètement, il organise le travail, fait progresser les personnes, relaie l'information vers le haut comme vers le bas, et règle les difficultés au plus près du terrain. Ce n'est ni le meilleur technicien de l'équipe, ni une boîte aux lettres de la direction. Dans une PME, le rôle échoue rarement faute de compétence. Il échoue parce que personne n'a dit au manager ce qu'il a le droit de décider, et que le dirigeant continue de trancher à sa place.",

  essentiel: {
    reponse:
      "Le manager est la personne chargée d'animer une équipe pour atteindre des objectifs, en organisant le travail, en développant les compétences, en faisant circuler l'information et en régulant les difficultés quotidiennes. Selon l'IGAS (2025), un management de qualité repose partout sur trois piliers : la participation des salariés, une autonomie soutenue par la hiérarchie et la reconnaissance du travail. En France, l'Apec relève en 2026 que 83 % des cadres sont satisfaits de leur manager, mais que l'envie de le devenir recule. Le rôle ne tient que si le dirigeant lui donne un mandat clair et du temps.",
    points: [
      "Quatre missions : organiser le travail, faire progresser, relayer l'information, réguler",
      "Le manager n'est ni le meilleur exécutant, ni un simple relais des consignes",
      "L'employeur répond de la santé et de la sécurité des salariés ; le manager en est le premier relais",
      "31 % des cadres managers travaillent 50 heures ou plus par semaine, contre 11 % des autres cadres (Apec, 2026)",
      "Sans droit explicite de décider, un manager fait remonter : c'est le calcul le plus rationnel",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Rôle du manager : définition et raison d'être",
      blocs: [
        {
          type: "p",
          texte:
            "Un manager est un salarié à qui l'entreprise confie la responsabilité d'une équipe et de son résultat. Il n'est pas seulement chargé de son propre travail, mais de celui des autres. **Son rôle n'est pas de faire, c'est de faire en sorte que le travail se fasse, et qu'il se fasse dans des conditions tenables.** La nuance paraît évidente. Elle ne l'est pas pour la plupart des managers de PME, promus parce qu'ils étaient bons dans le métier et jugés, souvent sans le dire, sur leur capacité à continuer de produire.",
        },
        { type: "h3", texte: "Ce que disent vraiment les managers de leur métier" },
        {
          type: "p",
          texte:
            "Henry Mintzberg ouvre son article de référence, [The Manager's Job: Folklore and Fact](https://hbr.org/1990/03/the-managers-job-folklore-and-fact), publié par la Harvard Business Review, par une observation simple : demandez à des managers ce qu'ils font, ils répondent qu'ils planifient, organisent, coordonnent et contrôlent. Puis regardez ce qu'ils font. La journée réelle est faite d'interruptions, d'échanges courts et d'arbitrages à chaud. Mintzberg regroupe les rôles du manager en trois familles : relationnels, informationnels et décisionnels.",
        },
        { type: "h3", texte: "Les trois piliers d'un management de qualité" },
        {
          type: "p",
          texte:
            "En mars 2025, l'Inspection générale des affaires sociales a comparé les pratiques de la France, de l'Allemagne, de l'Irlande, de l'Italie et de la Suède. Son rapport, [Pratiques managériales dans les entreprises et politiques sociales en France](https://www.igas.gouv.fr/pratiques-manageriales-dans-les-entreprises-et-politiques-sociales-en-france-les-enseignements-dune-comparaison-internationale-allemagne-irlande-italie-suede-et-de-la-recherche), constate que les principes d'un bon management sont les mêmes partout : une forte participation des salariés, une autonomie soutenue par la hiérarchie et la reconnaissance du travail. Il relève aussi qu'en France les pratiques apparaissent plus verticales et plus hiérarchiques qu'ailleurs, avec une reconnaissance plus faible.",
        },
        {
          type: "p",
          texte:
            "Si le rôle du manager se limite à transmettre vos consignes et à contrôler leur exécution, vous aurez de la verticalité, pas du management. C'est le point de départ d'un [coaching dirigeant](/transformation-dirigeant/) : regarder ce que votre manière de décider laisse, ou ne laisse pas, à vos managers.",
        },
      ],
    },

    {
      label: "Les missions",
      titre: "Les quatre missions du manager d'équipe",
      blocs: [
        {
          type: "p",
          texte:
            "Les fiches de poste de managers se ressemblent toutes et ne disent presque rien. Voici une grille plus opérationnelle : quatre missions, chacune avec la question à laquelle elle répond. Un manager d'équipe qui n'en tient qu'une, en général la première, est un chef d'équipe, pas un manager.",
        },
        {
          type: "tableau",
          entetes: ["Mission du manager", "La question à laquelle elle répond"],
          lignes: [
            ["Organiser le travail", "Qui fait quoi, avec quels moyens, dans quels délais, et que fait-on quand un aléa survient ?"],
            ["Faire progresser les personnes", "Chacun sait-il ce qu'on attend de lui, où il en est, et comment il peut évoluer ?"],
            ["Faire circuler l'information", "L'équipe comprend-elle les décisions de la direction, et la direction entend-elle ce que voit le terrain ?"],
            ["Réguler", "Les désaccords, la charge, les imprévus se règlent-ils au bon niveau, ou remontent-ils tous ?"],
          ],
        },
        { type: "h3", texte: "Organiser le travail, c'est arbitrer la charge" },
        {
          type: "p",
          texte:
            "Répartir des tâches est la partie visible. La partie difficile consiste à ajuster les objectifs aux moyens réels, et à dire non, ou pas maintenant, quand la charge dépasse ce que l'équipe peut absorber. Un manager qui accepte tout ce qui descend et le redistribue tel quel ne régule rien : il transmet la pression.",
        },
        { type: "h3", texte: "Faire progresser, y compris par des obligations légales" },
        {
          type: "p",
          texte:
            "Le développement des personnes passe aussi par des rendez-vous prévus par les textes. L'article [L6315-1 du Code du travail](https://code.travail.gouv.fr/code-du-travail/l6315-1) prévoit un entretien de parcours professionnel au cours de la première année suivant l'embauche, puis tous les quatre ans. Il porte sur les compétences, la formation et les perspectives, pas sur l'évaluation du travail. L'entretien annuel d'évaluation, lui, n'est pas obligatoire selon [service-public.gouv.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F31854), sauf si une convention collective l'impose. S'il existe, ses critères doivent être précis, objectifs et liés au travail accompli.",
        },
        { type: "h3", texte: "Relayer dans les deux sens, et réguler sur place" },
        {
          type: "p",
          texte:
            "Le manager traduit les décisions de la direction en consignes compréhensibles, et il fait remonter ce que la direction ne voit pas : une machine qui décroche, un client qui s'agace, une équipe à bout. Réguler, enfin, veut dire traiter sur place ce qui peut l'être. Un conflit entre deux opérateurs, une priorité à revoir dans la journée, un planning à refaire : si tout cela remonte au dirigeant, l'entreprise a des managers de nom, pas de fait.",
        },
      ],
    },

    {
      label: "Contresens",
      titre: "Ce que les managers ne sont pas",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des difficultés de managers dans une PME viennent moins d'un manque de qualités que d'un contresens sur le rôle, partagé par le manager et par le dirigeant. Trois reviennent souvent.",
        },
        { type: "h3", texte: "Le meilleur technicien de l'équipe" },
        {
          type: "p",
          texte:
            "Promouvoir le meilleur commercial ou le meilleur régleur est un réflexe logique : il connaît le métier. Le piège est qu'il continue de faire le travail, parce que c'est là qu'il se sent utile et que personne ne lui a dit d'arrêter. L'équipe perd un excellent professionnel et gagne un manager absent de son rôle.",
        },
        { type: "h3", texte: "La boîte aux lettres de la direction" },
        {
          type: "p",
          texte:
            "Un manager qui se contente de transmettre les consignes, sans pouvoir les expliquer ni les adapter, perd vite son crédit. L'équipe comprend qu'il n'a pas la main, et va chercher la décision là où elle se prend vraiment : chez vous. C'est ainsi qu'une entreprise de quarante personnes finit avec quarante personnes qui rendent compte au dirigeant, quoi qu'en dise l'organigramme.",
        },
        { type: "h3", texte: "Le tampon qui absorbe tout" },
        {
          type: "p",
          texte:
            "À l'inverse, certains managers absorbent eux-mêmes toute la surcharge pour protéger leur équipe. C'est généreux et cela ne dure pas. D'autres la renvoient vers le bas sous forme d'humiliations ou de consignes contradictoires : on bascule alors dans un [management toxique](/infos-utiles/management-toxique/), souvent le fait d'un manager lui-même à bout, sans cadre ni appui.",
        },
      ],
    },

    {
      label: "Santé et sécurité",
      titre: "Le rôle du manager dans la santé et la sécurité de l'équipe",
      blocs: [
        {
          type: "p",
          texte:
            "Le droit ne crée pas de statut juridique propre au manager. Il pose une obligation sur l'employeur. L'article [L4121-1 du Code du travail](https://code.travail.gouv.fr/code-du-travail/l4121-1) dispose que « l'employeur prend les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs » : actions de prévention, information et formation, organisation et moyens adaptés. Dans une PME, le dirigeant ne peut pas voir chaque poste chaque jour. Le manager est donc, dans les faits, le premier relais de cette obligation.",
        },
        { type: "h3", texte: "Ce que l'INRS attend concrètement d'un manager" },
        {
          type: "p",
          texte:
            "Dans sa page [Managers : agissez pour prévenir les risques psychosociaux](https://www.inrs.fr/publications/essentiels/risques-psychosociaux-managers.html), l'INRS propose neuf actions du quotidien : évaluer la charge de travail, accorder de l'autonomie, soutenir, reconnaître le travail, donner du sens, faire face aux agressions externes, communiquer sur les changements, faciliter l'équilibre entre vie professionnelle et personnelle, proscrire toute forme de violence. Aucune n'est un geste d'expert. Toutes supposent que le manager ait le temps et la latitude de les faire.",
        },
        {
          type: "p",
          texte:
            "L'institut rappelle aussi, parmi ses idées reçues, que le stress au travail n'est pas toujours la faute du chef. Ses [facteurs de risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html) incluent des objectifs flous ou irréalistes et des instructions contradictoires : autant de causes qui se décident souvent au-dessus du manager, et qu'il ne peut pas corriger seul.",
        },
        { type: "h3", texte: "Ce que cela implique pour vous" },
        {
          type: "p",
          texte:
            "Si vous attendez d'un manager qu'il porte une partie de vos obligations en matière de sécurité, cela se formalise. Une [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/) obéit à des conditions précises de compétence, d'autorité et de moyens, et elle se rédige avec un avocat ou votre conseil habituel. Sans elle, le manager reste un relais, et c'est vous qui répondez.",
        },
      ],
    },

    {
      label: "Les chiffres",
      titre: "Les managers aujourd'hui : un rôle apprécié, de moins en moins envié",
      blocs: [
        {
          type: "p",
          texte:
            "L'Apec a publié en janvier 2026 l'étude [Cadres et management : une relation paradoxale, entre satisfaction et désaffection](https://corporate.apec.fr/files/live/sites/corporate/files/Nos%20etudes/PDF/Cadres%20et%20management.pdf), fondée sur deux enquêtes de 2025 auprès de 2 000 cadres et de 1 500 cadres managers du secteur privé. Les chiffres portent sur les cadres, toutes tailles d'entreprise confondues. Ils éclairent pourtant très bien ce que vivent les managers de PME.",
        },
        { type: "h3", texte: "Une relation de proximité jugée bonne" },
        {
          type: "p",
          texte:
            "83 % des cadres se disent plutôt ou tout à fait satisfaits de leur manager. Plus des deux tiers estiment qu'il crée une ambiance positive, clarifie les rôles dans l'équipe, reconnaît le travail accompli et apporte son aide en cas de besoin. Côté managers, 60 % disent que leur rôle leur procure davantage de satisfactions que d'insatisfactions, et 34 % autant. Le rôle n'est donc pas mal vécu, ni par ceux qui le tiennent, ni par ceux qui en bénéficient.",
        },
        { type: "h3", texte: "Des conditions de travail qui découragent" },
        {
          type: "p",
          texte:
            "**31 % des cadres managers déclarent travailler 50 heures par semaine ou plus, contre 11 % des cadres non managers.** La moitié (51 %) disent travailler régulièrement sous pression, contre 36 %. Trois sur quatre continuent de penser à leur travail en dehors du travail. Résultat : la part de cadres non managers qui souhaitent le devenir est passée de 42 % à 34 % entre 2022 et 2025, avec un recul de 16 points chez les plus jeunes. Et 80 % des cadres estiment que les modes de management ont changé ces dernières années.",
        },
        {
          type: "p",
          texte:
            "Pour une PME, la leçon est pratique : la charge des managers est un sujet d'organisation, pas de tempérament. Vos futurs managers ne se promouvront pas seuls ; il faut rendre le rôle tenable.",
        },
      ],
    },

    {
      label: "En PME",
      titre: "Le rôle du manager dans une PME dépend d'abord du dirigeant",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une grande entreprise, le rôle des managers est encadré par des processus, des services support, des formations internes. Dans une PME de 10 à 250 salariés, il est défini presque entièrement par la façon dont le dirigeant décide. **Un manager n'a jamais plus de latitude que celle que son dirigeant lui laisse effectivement, quel que soit ce qui est écrit.**",
        },
        { type: "h3", texte: "Un mandat écrit, et tenu" },
        {
          type: "p",
          texte:
            "Le premier besoin d'un manager est de savoir ce qu'il peut décider seul, ce qu'il doit décider après avoir consulté, et ce qui reste chez vous. Cela tient en une page. Le plus difficile n'est pas de l'écrire, c'est de ne pas revenir sur une décision prise dans le périmètre, même quand vous auriez fait autrement. Chaque décision reprise enseigne à l'équipe où se trouve le vrai pouvoir. Notre article sur la manière de [prendre une décision](/infos-utiles/prendre-une-decision/) détaille ces niveaux de décision.",
        },
        { type: "h3", texte: "Du temps pour manager" },
        {
          type: "p",
          texte:
            "Un chef d'atelier qui produit à plein temps ne manage pas, il dépanne. Si vous confiez une équipe à quelqu'un, retirez-lui une partie de son travail de production, et dites-le. Sinon, le rôle devient une ligne de plus sur une fiche de poste déjà pleine.",
        },
        { type: "h3", texte: "Un lieu où les managers décident ensemble" },
        {
          type: "p",
          texte:
            "Dans une PME, chaque manager traite souvent avec le dirigeant en bilatéral, et les arbitrages entre services remontent eux aussi. Réunir les managers autour de vraies décisions, pas d'un simple point d'information, les rend co-responsables du fonctionnement d'ensemble.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Clarifier le rôle de vos managers : par où commencer",
      blocs: [
        {
          type: "p",
          texte:
            "Trois questions, posées à chacun de vos managers, suffisent souvent à faire apparaître l'écart entre le rôle prévu et le rôle réel.",
        },
        {
          type: "liste",
          items: [
            "**Quelles décisions avez-vous prises seul le mois dernier ?** Si la liste est courte, le rôle est vide, quelle que soit la compétence de la personne.",
            "**Quelle part de votre temps passez-vous à produire vous-même ?** Au-delà de la moitié, il n'y a plus de place pour organiser et faire progresser.",
            "**Sur quoi le dirigeant est-il revenu récemment ?** Chaque réponse montre un endroit où le mandat n'est pas tenu.",
          ],
        },
        {
          type: "p",
          texte:
            "Si les managers ont besoin de travailler leurs pratiques, un [coaching en management](/infos-utiles/coaching-en-management/) les accompagne en individuel. Si le nœud est dans la manière dont les décisions circulent entre vous et eux, c'est un travail collectif. Chez Un Seul Souffle, un conseiller référent prend ce sujet en charge, sur un périmètre arrêté avec vous et écrit dans la proposition. Il passe souvent par l'étape Coopérer : des cercles d'avancée de 6 à 8 personnes, sur trois mois, autour de situations réelles. C'est le champ de [Muriel Saffroy](/muriel-saffroy/), qui a elle-même mis en place un encadrement intermédiaire en site industriel.",
        },
        {
          type: "p",
          texte:
            "Avant de choisir, situez le problème. Un [diagnostic d'entreprise](/diagnostic/) vous aide à voir si la difficulté tient aux personnes, au rôle qui leur est confié, ou à l'organisation autour d'eux.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quel est le rôle d'un manager ?",
      r: [
        "Le manager anime une équipe pour atteindre des objectifs. Il organise le travail et arbitre la charge, fait progresser les personnes, fait circuler l'information entre la direction et le terrain, et règle au plus près les difficultés du quotidien. Son rôle n'est pas de produire à la place de l'équipe, mais de faire en sorte que le travail se fasse dans des conditions tenables, avec des décisions prises au bon niveau.",
      ],
    },
    {
      q: "Quelle différence entre un manager et un chef d'équipe ?",
      r: [
        "Dans l'usage, le chef d'équipe encadre surtout l'exécution : il répartit les tâches, contrôle et dépanne, en travaillant souvent lui-même en production. Le manager a une responsabilité plus large : il arbitre la charge, développe les compétences, relaie l'information dans les deux sens et dispose d'un pouvoir de décision sur son périmètre. Les titres varient selon les entreprises ; c'est l'étendue réelle des décisions confiées qui fait la différence.",
      ],
    },
    {
      q: "Le manager est-il responsable de la santé de son équipe ?",
      r: [
        "L'obligation de protéger la santé physique et mentale des salariés pèse sur l'employeur, selon l'article L4121-1 du Code du travail. Le manager en est le premier relais au quotidien : charge de travail, autonomie, soutien, reconnaissance. Sa responsabilité personnelle peut être engagée dans certains cas, notamment s'il a reçu une délégation de pouvoir valable. Pour toute question de responsabilité, un avocat en droit social est le bon interlocuteur.",
      ],
    },
    {
      q: "Pourquoi les cadres veulent-ils moins devenir managers ?",
      r: [
        "Selon l'Apec (janvier 2026), la part des cadres non managers qui souhaitent le devenir est passée de 42 % à 34 % entre 2022 et 2025. Deux raisons dominent : un rôle devenu plus complexe, avec des attentes plus nombreuses, et des conditions de travail plus lourdes. 31 % des managers travaillent 50 heures ou plus par semaine, et 51 % disent travailler régulièrement sous pression.",
      ],
    },
    {
      q: "Comment aider un nouveau manager à prendre son rôle ?",
      r: [
        "En lui donnant trois choses dès le départ : un mandat écrit qui dit ce qu'il décide seul et ce qui reste chez le dirigeant, du temps retiré de sa production pour manager, et un lieu où il décide avec les autres managers. Un accompagnement individuel peut ensuite travailler ses pratiques. Le point le plus décisif reste que le dirigeant ne revienne pas sur les décisions prises dans ce périmètre.",
      ],
    },
  ],

  sources: [
    {
      titre: "Cadres et management : une relation paradoxale, entre satisfaction et désaffection",
      editeur: "Apec",
      url: "https://corporate.apec.fr/files/live/sites/corporate/files/Nos%20etudes/PDF/Cadres%20et%20management.pdf",
    },
    {
      titre:
        "Pratiques managériales dans les entreprises et politiques sociales en France : les enseignements d'une comparaison internationale (Allemagne, Irlande, Italie, Suède) et de la recherche",
      editeur: "Inspection générale des affaires sociales (IGAS)",
      url: "https://www.igas.gouv.fr/pratiques-manageriales-dans-les-entreprises-et-politiques-sociales-en-france-les-enseignements-dune-comparaison-internationale-allemagne-irlande-italie-suede-et-de-la-recherche",
    },
    {
      titre: "Managers : agissez pour prévenir les risques psychosociaux",
      editeur: "INRS",
      url: "https://www.inrs.fr/publications/essentiels/risques-psychosociaux-managers.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS) : facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "L4121-1 - Code du travail numérique",
      editeur: "Ministère du Travail",
      url: "https://code.travail.gouv.fr/code-du-travail/l4121-1",
    },
    {
      titre: "L6315-1 - Code du travail numérique",
      editeur: "Ministère du Travail",
      url: "https://code.travail.gouv.fr/code-du-travail/l6315-1",
    },
    {
      titre: "Évaluation du salarié",
      editeur: "Service-public.gouv.fr",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31854",
    },
    {
      titre: "The Manager's Job: Folklore and Fact",
      editeur: "Harvard Business Review (Henry Mintzberg)",
      url: "https://hbr.org/1990/03/the-managers-job-folklore-and-fact",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-01-18",
  accent: "organisation",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: false,
};
