import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Muriel Saffroy.
 * Requête : « manager une équipe » (390/mois, KD 16). Secondaire : « manager
 * d'équipe » (590/mois).
 *
 * Angle : le « comment faire » concret (prise de poste, organisation du travail,
 * rituels, délégation, reconnaissance, désaccords). La définition du rôle
 * appartient à l'article role-du-manager (18/01/2027), vers lequel on renvoie.
 *
 * POINTS SENSIBLES
 * - Entretien professionnel : l'article L6315-1 a été réécrit par la loi
 *   n° 2025-1403 du 30 décembre 2025 (« entretien de parcours professionnel »,
 *   tous les quatre ans, état des lieux tous les huit ans). Vérifié sur le Code
 *   du travail numérique le 24/09/2026 ; à revérifier avant publication.
 * - Chiffres Apec (janvier 2026) et Igas (mars 2025) lus dans les documents
 *   sources le 24/09/2026.
 */
export const article: Article = {
  slug: "manager-une-equipe",

  motCle: "manager une équipe (390/mois, KD 16) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "manager d'équipe (590/mois)",
    "manager une équipe en PME",
    "rituels de management d'équipe",
  ],

  // 38 / 42
  metaTitle: "Manager une équipe : le guide pratique",
  // 147 / 150
  metaDescription:
    "Manager une équipe en PME : prendre son poste, organiser le travail, installer des rituels utiles, déléguer, reconnaître et traiter les désaccords.",

  h1: "Manager une équipe : ce qui marche vraiment, semaine après semaine",

  chapo:
    "Manager une équipe, c'est organiser le travail des autres pour qu'il soit faisable, soutenir les personnes quand il ne l'est pas, et décider de ce qui ne peut pas attendre. Ce n'est ni un don ni une question de charisme : ce sont des pratiques, qui s'apprennent et se répètent. Dans une PME, elles tiennent en peu de choses : des objectifs clairs, une charge réaliste, quelques rituels tenus, une délégation réelle, de la reconnaissance et des désaccords traités à temps. Voici comment les installer, que vous soyez dirigeant ou que vous accompagniez un manager nouvellement promu.",

  essentiel: {
    reponse:
      "Manager une équipe consiste à organiser le travail d'un collectif, à soutenir les personnes qui le réalisent et à prendre les décisions qui permettent d'avancer. L'Inspection générale des affaires sociales retient trois fondamentaux d'un management de qualité, communs à tous les pays étudiés : une forte participation des salariés, une autonomie soutenue par la hiérarchie et la reconnaissance du travail. En pratique, un manager d'équipe s'appuie sur des objectifs explicites, une charge évaluée, des rituels réguliers, une délégation de décisions et un traitement rapide des désaccords.",
    points: [
      "Participation, autonomie soutenue, reconnaissance : les trois fondamentaux relevés par l'Igas",
      "Le rôle s'est complexifié : 80 % des cadres jugent que les modes de management ont changé (Apec, 2026)",
      "Trois rituels suffisent souvent : un point d'équipe, un entretien individuel, une revue mensuelle",
      "Déléguer des décisions, pas seulement des tâches, avec un droit à l'erreur explicite",
      "Un désaccord traité tôt coûte une conversation ; traité tard, un conflit",
    ],
  },

  chapitres: [
    {
      label: "Le rôle",
      titre: "Manager une équipe : ce que le rôle recouvre au quotidien",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des managers de PME n'ont jamais reçu de définition de leur poste. Ils héritent d'une équipe, d'objectifs chiffrés et d'une consigne implicite : « que ça tourne ». Or manager une équipe recouvre trois activités distinctes, qui ne demandent pas les mêmes compétences.",
        },
        {
          type: "h3",
          texte: "Organiser, soutenir, décider",
        },
        {
          type: "liste",
          items: [
            "**Organiser le travail** : répartir les tâches, fixer les priorités, s'assurer que les moyens correspondent aux objectifs.",
            "**Soutenir les personnes** : aider quand ça coince, reconnaître ce qui est fait, développer les compétences.",
            "**Décider** : trancher ce qui bloque l'équipe, arbitrer entre deux urgences, porter une décision vers le haut comme vers le bas.",
          ],
        },
        {
          type: "p",
          texte:
            "Si vous voulez d'abord clarifier la fonction elle-même, ses responsabilités et sa place dans l'organisation, l'article sur le [rôle du manager](/infos-utiles/role-du-manager/) la détaille. Ici, nous restons sur le « comment » : les gestes qui, répétés semaine après semaine, font une équipe qui fonctionne.",
        },
        {
          type: "h3",
          texte: "Ce que la recherche retient d'un bon management",
        },
        {
          type: "p",
          texte:
            "Dans son rapport de mars 2025, [Pratiques managériales dans les entreprises et politiques sociales en France](https://www.igas.gouv.fr/pratiques-manageriales-dans-les-entreprises-et-politiques-sociales-en-france-les-enseignements-dune-comparaison-internationale-allemagne-irlande-italie-suede-et-de-la-recherche), l'Igas compare la France à l'Allemagne, l'Irlande, l'Italie et la Suède. Les principes d'un management de qualité y sont les mêmes partout : un fort degré de participation des travailleurs, une autonomie soutenue par la hiérarchie et la reconnaissance du travail. **Le rapport relève aussi que les pratiques françaises sont plus verticales et que la reconnaissance du travail y est plus faible que chez nos voisins.** C'est donc précisément là qu'un manager d'équipe français a le plus de marge de progrès.",
        },
      ],
    },

    {
      label: "Le contexte",
      titre: "Pourquoi manager une équipe est devenu plus difficile",
      blocs: [
        {
          type: "p",
          texte:
            "Si vos managers vous semblent plus fatigués qu'avant, ce n'est pas une impression. Les données de l'Apec décrivent un rôle qui s'est alourdi et complexifié en quelques années.",
        },
        {
          type: "h3",
          texte: "Des attentes plus nombreuses",
        },
        {
          type: "p",
          texte:
            "Selon l'étude [Cadres et management : une relation paradoxale, entre satisfaction et désaffection](https://corporate.apec.fr/files/live/sites/corporate/files/Nos%20etudes/PDF/Cadres%20et%20management.pdf) publiée par l'Apec en janvier 2026, 80 % des cadres estiment que les modes de management ont changé ces dernières années. Aux attentes traditionnelles, comme l'atteinte des objectifs, se sont ajoutés le bien-être des équipes, la personnalisation du management, la cohésion, le développement des collaborateurs et l'accompagnement du changement.",
        },
        {
          type: "h3",
          texte: "Des conditions de travail plus lourdes",
        },
        {
          type: "p",
          texte:
            "La même étude relève que 31 % des cadres managers travaillent 50 heures par semaine ou plus, contre 11 % des cadres non-managers, et que 51 % déclarent travailler régulièrement sous pression, contre 36 %. Conséquence : la part des cadres non-managers qui souhaitent le devenir est passée de 42 % à 34 % entre 2022 et 2025.",
        },
        {
          type: "h3",
          texte: "La bonne nouvelle : la relation tient",
        },
        {
          type: "p",
          texte:
            "Le même travail de l'Apec montre que 83 % des cadres se disent satisfaits de leur manager, et que cette satisfaction est plus forte dans les petites équipes que dans celles de plus de 20 personnes. Pour une PME, c'est un atout : la proximité facilite le management. Encore faut-il que le manager ait le temps et le cadre pour l'exercer, ce qui dépend largement du dirigeant. C'est pourquoi un [coaching dirigeant](/transformation-dirigeant/) commence souvent par là : la façon dont vous déléguez et décidez fixe la marge de manœuvre de tous vos managers.",
        },
      ],
    },

    {
      label: "Prise de poste",
      titre: "Prendre la tête d'une équipe : les premières semaines",
      blocs: [
        {
          type: "p",
          texte:
            "La prise de poste conditionne beaucoup de choses. Dans une PME, elle a souvent une difficulté particulière : le nouveau manager était, la veille, le collègue de ceux qu'il encadre.",
        },
        {
          type: "h3",
          texte: "Écouter avant de changer",
        },
        {
          type: "p",
          texte:
            "Rencontrez chaque membre de l'équipe individuellement. Trois questions suffisent : qu'est-ce qui marche et qu'il ne faut pas casser, qu'est-ce qui vous gêne dans votre travail, qu'attendez-vous de moi. Notez les réponses, et résistez à la tentation de tout réorganiser dans le premier mois. Une équipe accepte un changement quand elle a le sentiment d'avoir été entendue avant.",
        },
        {
          type: "h3",
          texte: "Clarifier le mandat avec sa propre hiérarchie",
        },
        {
          type: "p",
          texte:
            "Un manager qui ne sait pas ce qu'il peut décider seul renvoie tout vers le haut, ou décide au hasard. Avant de s'adresser à l'équipe, il doit savoir trois choses : ses objectifs, son budget ou ses moyens, et les décisions qu'il peut prendre sans validation. Si vous êtes le dirigeant, c'est votre responsabilité de le dire explicitement, et par écrit.",
        },
        {
          type: "h3",
          texte: "Passer de collègue à responsable",
        },
        {
          type: "p",
          texte:
            "Nommez la situation plutôt que de la contourner : « hier on était collègues, aujourd'hui j'ai une responsabilité différente, voilà comment je compte l'exercer ». Les relations amicales peuvent subsister, mais les décisions doivent être les mêmes pour tous. L'équité de traitement est l'un des premiers critères sur lesquels une équipe juge un nouveau manager.",
        },
      ],
    },

    {
      label: "Organiser",
      titre: "Organiser le travail : objectifs, rôles et charge",
      blocs: [
        {
          type: "p",
          texte:
            "Une grande partie des tensions d'équipe ne vient pas des personnes, mais d'un travail mal organisé : des objectifs flous, des rôles qui se chevauchent, une charge qui dépasse ce que l'équipe peut absorber.",
        },
        {
          type: "h3",
          texte: "Des objectifs que chacun peut répéter",
        },
        {
          type: "p",
          texte:
            "Un bon test : demandez à trois membres de l'équipe quelles sont les deux priorités du trimestre. Si vous obtenez trois réponses différentes, le problème n'est pas la motivation. Un objectif utile se formule en une phrase, se mesure, et dit ce qui passe après lui quand tout ne peut pas être fait.",
        },
        {
          type: "h3",
          texte: "Évaluer la charge réellement",
        },
        {
          type: "p",
          texte:
            "Dans sa brochure [Risques psychosociaux. 9 conseils pour agir au quotidien](https://www.inrs.fr/media.html?refINRS=ED+6250), destinée aux dirigeants et à l'encadrement, l'INRS place en premier conseil l'évaluation de la charge de travail, puis l'autonomie laissée aux collaborateurs et le soutien qui leur est apporté. Évaluer la charge, ce n'est pas demander « ça va ? ». C'est regarder ce qui arrive réellement sur chaque poste, les interruptions, les urgences imprévues, et arbitrer quand le total dépasse le temps disponible.",
        },
        {
          type: "h3",
          texte: "Des rôles qui disent qui décide",
        },
        {
          type: "p",
          texte:
            "Une fiche de poste décrit des tâches. Elle dit rarement qui tranche quand deux personnes ne sont pas d'accord, ou quand une demande sort du cadre. C'est pourtant cette information qui évite les allers-retours. Parmi les facteurs de risque que cite l'INRS figure justement le flou sur les rôles et la répartition des tâches.",
        },
      ],
    },

    {
      label: "Rituels",
      titre: "Les rituels d'un manager d'équipe efficace",
      blocs: [
        {
          type: "p",
          texte:
            "Les rituels ont mauvaise réputation, parce qu'on les confond avec la réunionite. Un rituel utile est court, régulier, et chacun sait à quoi il sert. Dans une PME, trois ou quatre suffisent.",
        },
        {
          type: "tableau",
          entetes: ["Rituel", "Ce qu'il permet"],
          lignes: [
            [
              "Point d'équipe hebdomadaire, 30 minutes debout",
              "Partager les priorités de la semaine, repérer les blocages, décider qui les lève",
            ],
            [
              "Entretien individuel, toutes les deux à quatre semaines",
              "Écouter chaque personne sur sa charge, ses difficultés, ce dont elle a besoin",
            ],
            [
              "Revue mensuelle des indicateurs",
              "Regarder ensemble où en sont les objectifs, et ajuster avant qu'il soit trop tard",
            ],
            [
              "Retour d'expérience après un incident ou un projet",
              "Comprendre ce qui s'est passé sans chercher de coupable, et changer une règle",
            ],
            [
              "Entretien de parcours professionnel",
              "Échanger sur les compétences, la formation et l'évolution : une obligation légale",
            ],
          ],
        },
        {
          type: "h3",
          texte: "L'entretien de parcours professionnel, une obligation",
        },
        {
          type: "p",
          texte:
            "Depuis la loi du 30 décembre 2025, l'[article L6315-1 du Code du travail](https://code.travail.gouv.fr/code-du-travail/l6315-1) prévoit un entretien de parcours professionnel au cours de la première année suivant l'embauche, puis tous les quatre ans, et un état des lieux récapitulatif tous les huit ans. Il porte notamment sur les compétences, les besoins de formation et les souhaits d'évolution du salarié. Il ne se confond pas avec l'entretien d'évaluation de la performance. Vérifiez les modalités exactes avec votre service RH ou votre expert-comptable.",
        },
        {
          type: "h3",
          texte: "Tenir les rituels, surtout quand on est débordé",
        },
        {
          type: "p",
          texte:
            "Le premier rituel sacrifié en période de rush est l'entretien individuel. C'est aussi celui qui aurait permis de voir venir le départ ou l'épuisement d'un collaborateur. **Un rituel annulé une fois est une exception ; annulé trois fois, c'est un message envoyé à l'équipe.**",
        },
      ],
    },

    {
      label: "Déléguer",
      titre: "Déléguer et décider sans tout faire remonter",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de managers de PME reproduisent à leur échelle ce que vit leur dirigeant : toutes les décisions leur remontent, et ils deviennent le goulot d'étranglement de leur propre équipe. Et quand le goulot est au sommet, le manager ne peut pas déléguer plus qu'on ne lui a délégué.",
        },
        {
          type: "h3",
          texte: "Déléguer une décision, pas seulement une tâche",
        },
        {
          type: "p",
          texte:
            "Confier la préparation d'un devis n'est pas déléguer. Donner à quelqu'un le droit de valider les devis jusqu'à un certain montant, oui. La délégation réelle précise le périmètre, les limites, et ce qui se passe en cas d'erreur. Sans droit à l'erreur formulé, la personne fera valider par précaution, et rien ne change.",
        },
        {
          type: "h3",
          texte: "Ne pas reprendre ce qui a été délégué",
        },
        {
          type: "p",
          texte:
            "Le piège le plus courant est de reprendre la main à la première difficulté. Une seule reprise suffit pour que toute l'équipe comprenne que la délégation était provisoire. Mieux vaut accepter une décision moins bonne que la vôtre, en débriefer ensuite, et laisser la personne progresser.",
        },
      ],
    },

    {
      label: "Reconnaître",
      titre: "Reconnaissance, feedback et désaccords",
      blocs: [
        {
          type: "p",
          texte:
            "C'est la partie du management d'équipe qui demande le plus de courage, et celle où la France accuse le plus de retard selon l'Igas : la reconnaissance du travail y est plus faible qu'en Allemagne, en Irlande, en Italie ou en Suède.",
        },
        {
          type: "h3",
          texte: "Reconnaître le travail, pas seulement les résultats",
        },
        {
          type: "p",
          texte:
            "La reconnaissance ne se limite pas à la prime. Elle consiste d'abord à voir le travail réel : dire à quelqu'un que vous avez remarqué la façon dont il a géré un client difficile, ou le dossier qu'il a repris un vendredi soir. Un retour précis et sincère vaut plus qu'un « bravo à tous » en fin de réunion.",
        },
        {
          type: "h3",
          texte: "Recadrer sans abîmer",
        },
        {
          type: "p",
          texte:
            "Quand un travail n'est pas au niveau, dites-le vite, en privé, en décrivant un fait et son effet, puis en cherchant ensemble la cause. La frontière avec un [management toxique](/infos-utiles/management-toxique/) passe là : un recadrage fait progresser la personne, une humiliation publique l'abîme et fait taire toute l'équipe.",
        },
        {
          type: "h3",
          texte: "Traiter les désaccords avant qu'ils deviennent des conflits",
        },
        {
          type: "p",
          texte:
            "Un désaccord exprimé en réunion est une information utile. Un désaccord qui se règle dans le couloir, après la réunion, est le début d'un conflit. Le rôle du manager est de faire émerger les objections pendant les échanges, puis de trancher et d'expliquer. Quand la tension est déjà installée, les méthodes de [gestion de conflit](/infos-utiles/gestion-de-conflit/) prennent le relais.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Manager une équipe en PME : quand se faire accompagner",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de managers apprennent seuls, par essais et erreurs, et le coût de ces erreurs est payé par l'équipe. Un accompagnement raccourcit cet apprentissage, à condition de travailler sur les situations réelles plutôt que sur des cas d'école.",
        },
        {
          type: "h3",
          texte: "Les signaux qui justifient de se faire aider",
        },
        {
          type: "liste",
          items: [
            "Un manager récemment promu qui n'arrive pas à trouver sa place face à ses anciens collègues",
            "Une équipe où tout remonte au manager, et du manager au dirigeant",
            "Des tensions répétées entre deux personnes ou deux services",
            "Des départs ou des arrêts qui se concentrent dans la même équipe",
          ],
        },
        {
          type: "h3",
          texte: "Individuel ou collectif",
        },
        {
          type: "p",
          texte:
            "Un [coaching en management](/infos-utiles/coaching-en-management/) travaille les pratiques d'un manager en individuel. Chez Un Seul Souffle, un conseiller référent prend votre sujet en charge, sur un périmètre arrêté avec vous. Le travail collectif passe par les cercles d'avancée de l'étape Coopérer : des groupes de 6 à 8 personnes, en sessions de trois heures sur trois mois, où managers et dirigeants traitent leurs propres situations et installent la co-responsabilité.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si la difficulté tient aux managers, à l'organisation ou à la façon dont les décisions circulent, commencez par un [diagnostic d'entreprise](/diagnostic/) : il aide à situer le point de blocage avant de choisir la réponse.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Comment bien manager une équipe ?",
      r: [
        "En combinant trois activités : organiser le travail, soutenir les personnes et décider. Concrètement, cela passe par des objectifs clairs que chacun peut répéter, une charge de travail évaluée et arbitrée, quelques rituels tenus (point d'équipe, entretien individuel, revue mensuelle), une délégation réelle de décisions, de la reconnaissance précise et des désaccords traités pendant les réunions plutôt qu'après.",
      ],
    },
    {
      q: "Quelles sont les qualités d'un bon manager d'équipe ?",
      r: [
        "Plus que des qualités de caractère, ce sont des pratiques. L'Igas retient trois fondamentaux d'un management de qualité : la participation des salariés, une autonomie soutenue par la hiérarchie et la reconnaissance du travail. S'y ajoutent l'équité de traitement, la capacité à trancher et à expliquer, et la constance : tenir ses rituels et ses engagements, surtout quand l'activité est chargée.",
      ],
    },
    {
      q: "Comment manager une équipe quand on était son collègue ?",
      r: [
        "En nommant le changement plutôt qu'en le contournant. Rencontrez chaque personne individuellement, expliquez comment vous comptez exercer votre rôle, et appliquez les mêmes règles à tous, y compris à vos anciens proches. Faites clarifier votre mandat par votre hiérarchie avant d'agir : objectifs, moyens et décisions que vous pouvez prendre seul. L'équité est le premier critère sur lequel l'équipe vous jugera.",
      ],
    },
    {
      q: "Quels rituels mettre en place pour manager une équipe ?",
      r: [
        "Trois ou quatre suffisent dans une PME : un point d'équipe hebdomadaire court, un entretien individuel toutes les deux à quatre semaines, une revue mensuelle des indicateurs et un retour d'expérience après chaque incident ou projet. S'y ajoute l'entretien de parcours professionnel, obligatoire selon l'article L6315-1 du Code du travail. L'important est la régularité : un rituel souvent annulé perd tout son sens.",
      ],
    },
    {
      q: "Faut-il être formé pour manager une équipe ?",
      r: [
        "Ce n'est pas une obligation, mais c'est vivement conseillé. Selon l'Apec, 51 % des cadres managers travaillent régulièrement sous pression, et le rôle s'est nettement complexifié. Une formation apporte des repères ; un coaching ou un travail en groupe de pairs permet de les appliquer à ses propres situations. Le plus efficace est souvent de combiner les deux dans les premiers mois de prise de poste.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Pratiques managériales dans les entreprises et politiques sociales en France : les enseignements d'une comparaison internationale (Allemagne, Irlande, Italie, Suède) et de la recherche",
      editeur: "Inspection générale des affaires sociales (Igas)",
      url: "https://www.igas.gouv.fr/pratiques-manageriales-dans-les-entreprises-et-politiques-sociales-en-france-les-enseignements-dune-comparaison-internationale-allemagne-irlande-italie-suede-et-de-la-recherche",
    },
    {
      titre: "Cadres et management : une relation paradoxale, entre satisfaction et désaffection",
      editeur: "Apec",
      url: "https://corporate.apec.fr/files/live/sites/corporate/files/Nos%20etudes/PDF/Cadres%20et%20management.pdf",
    },
    {
      titre: "Risques psychosociaux. 9 conseils pour agir au quotidien (ED 6250)",
      editeur: "INRS",
      url: "https://www.inrs.fr/media.html?refINRS=ED+6250",
    },
    {
      titre:
        "Harcèlement moral et violence interne : exemples d'exposition aux risques et facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/harcelements-violences-internes/exemples-exposition-facteurs-risque.html",
    },
    {
      titre: "L6315-1 - Code du travail numérique",
      editeur: "Ministère du Travail",
      url: "https://code.travail.gouv.fr/code-du-travail/l6315-1",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-05-10",
  accent: "organisation",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: true,
};
