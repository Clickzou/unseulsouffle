import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Olivia Artur.
 * Requête : « la charge mentale » (390/mois, KD 10). Secondaires : « surcharge
 * mentale symptômes » (320), « définition charge mentale » (260).
 *
 * Sujet sensible : aucun diagnostic, aucun conseil médical. Olivia Artur est
 * sophrologue et praticienne PNL, pas médecin : le texte renvoie vers le médecin
 * traitant (et le médecin du travail pour les salariés), et cite le 3114.
 * Sources ouvertes le 24/09/2026. Les chiffres Dares datent de l'enquête 2016 :
 * le texte le dit, ne pas les présenter comme récents.
 */
export const article: Article = {
  slug: "charge-mentale",

  motCle: "la charge mentale (390/mois, KD 10) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "surcharge mentale symptômes (320/mois)",
    "définition charge mentale (260/mois)",
    "charge mentale du dirigeant",
  ],

  // 41 / 42
  metaTitle: "La charge mentale : définition et signaux",
  // 141 / 150
  metaDescription:
    "La charge mentale au travail : définition, chiffres, symptômes de surcharge à montrer à un médecin, et ce qui l'allège vraiment dans une PME.",

  h1: "La charge mentale au travail : la comprendre, la repérer, l'alléger",

  chapo:
    "La charge mentale, c'est le poids de tout ce que vous devez garder en tête pour que les choses se fassent : anticiper, se souvenir, surveiller, relancer, arbitrer. Elle ne se voit pas dans un agenda, et c'est pour cela qu'elle déborde. Au travail, près d'un salarié sur deux et plus d'un cadre sur deux déclaraient devoir « penser à trop de choses à la fois ». Chez le dirigeant de PME, elle s'ajoute à la solitude des décisions. Elle s'allège par deux voies qui se complètent : vos propres habitudes, et surtout une organisation qui cesse de tout faire remonter à la même tête. Quand elle se transforme en épuisement, le premier interlocuteur est votre médecin.",

  essentiel: {
    reponse:
      "La charge mentale désigne l'effort permanent de penser, d'anticiper et d'organiser ce qui doit être fait, y compris quand on est occupé à autre chose. La sociologue Monique Haicault a forgé la notion en 1984 pour décrire le fait de devoir penser à un domaine de sa vie tout en étant physiquement dans un autre. Selon l'enquête Conditions de travail 2016 de la Dares, 44 % des salariés, et 57 % des cadres, disaient devoir penser à trop de choses à la fois. La surcharge mentale n'est pas un diagnostic médical : ses signaux durables relèvent d'un médecin.",
    points: [
      "La charge mentale n'est pas la quantité de travail : c'est le travail invisible d'anticipation et de coordination qui l'entoure",
      "Chez les dirigeants, 65 % associent leur solitude à « un stress lié à la charge mentale » (Bpifrance Le Lab, 2026)",
      "Fatigue qui ne passe plus, sommeil haché, oublis, irritabilité : des signaux à montrer à votre médecin, pas à interpréter seul",
      "En cas de détresse ou d'idées suicidaires : le 3114, gratuit, 24 h/24 et 7 j/7",
      "Le levier le plus durable est organisationnel : moins de décisions et d'informations qui ne peuvent passer que par vous",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "La charge mentale : définition et origine du mot",
      blocs: [
        {
          type: "p",
          texte:
            "Vous finissez une réunion client. Dans l'ascenseur, vous pensez déjà au devis à relancer, au salarié qu'il faut recadrer, à l'échéance de TVA et à la voiture à déposer au garage. Rien de tout cela n'est fait, et pourtant tout cela vous occupe. **La charge mentale, c'est ce travail invisible : garder en tête ce qui doit se faire, au bon moment, par la bonne personne.**",
        },
        {
          type: "h3",
          texte: "Un concept né de la sociologie du travail",
        },
        {
          type: "p",
          texte:
            "Le mot n'est pas une invention des réseaux sociaux. La sociologue Monique Haicault l'a posé en 1984 dans un article de la revue Sociologie du travail, [La gestion ordinaire de la vie en deux](https://www.persee.fr/doc/sotra_0038-0296_1984_num_26_3_2072). Elle y étudiait la double journée des femmes salariées, et décrivait une tension constante : devoir penser à la maison en étant au bureau, et inversement. L'idée clé tient en une phrase : la charge mentale naît quand un domaine empiète sur l'autre, et qu'il faut sans cesse ajuster des temps et des lieux qui se chevauchent.",
        },
        {
          type: "p",
          texte:
            "Le terme a ensuite été popularisé à propos du partage des tâches domestiques. Mais le mécanisme décrit s'applique trait pour trait au travail : chaque dossier ouvert, chaque promesse faite, chaque « il faudra que j'y pense » occupe une place, même quand vous êtes en train de faire autre chose.",
        },
        {
          type: "h3",
          texte: "Charge mentale et charge de travail ne sont pas la même chose",
        },
        {
          type: "p",
          texte:
            "La charge de travail se mesure en tâches et en heures. La charge mentale se mesure mal, parce qu'elle porte sur ce qui n'est pas encore fait. On peut avoir une journée légère et une tête pleine, ou une journée chargée et l'esprit tranquille parce que tout est cadré. C'est pourquoi alléger l'agenda ne suffit pas toujours : si vous restez le seul à savoir ce qui doit arriver, la charge reste entière. C'est aussi pourquoi un [accompagnement dirigeant](/transformation-dirigeant/) sérieux commence par l'organisation de vos décisions, avant votre emploi du temps.",
        },
      ],
    },

    {
      label: "Les chiffres",
      titre: "Ce que disent les chiffres sur la charge mentale au travail",
      blocs: [
        {
          type: "h3",
          texte: "Près d'un salarié sur deux, plus d'un cadre sur deux",
        },
        {
          type: "p",
          texte:
            "L'enquête Conditions de travail de la Dares, le service statistique du ministère du Travail, pose une question directe : devez-vous « penser à trop de choses à la fois » ? Selon [Quelles sont les évolutions récentes des conditions de travail et des risques psychosociaux ?](https://pmb.cereq.fr/doc_num.php?explnum_id=4161) (Dares Analyses n° 082, décembre 2017), 44 % des salariés répondaient oui en 2016, contre 49 % en 2013. **Les cadres restaient les plus exposés : 57 %.** Les femmes étaient aussi plus nombreuses dans ce cas que les hommes, 47 % contre 40 %, à catégorie socioprofessionnelle identique.",
        },
        {
          type: "p",
          texte:
            "La même publication relève que 68 % des femmes salariées devaient fréquemment abandonner une tâche pour une autre plus urgente, et que 45 % des salariés disaient devoir se dépêcher toujours ou souvent. Ces chiffres ont une dizaine d'années ; ils restent la mesure publique de référence de ce que vit un salarié quand les interruptions et les urgences s'empilent.",
        },
        {
          type: "h3",
          texte: "Chez les dirigeants, une charge mentale liée à l'isolement",
        },
        {
          type: "p",
          texte:
            "Les dirigeants ne sont pas couverts par cette enquête de salariés. Mais Bpifrance Le Lab les a interrogés directement : selon le [communiqué de son étude 2026 sur la solitude des dirigeants](https://presse.bpifrance.fr/bpifrance-le-lab-devoile-les-nouveaux-visages-de-la-solitude-des-dirigeants-de-pme-eti-entre-incertitudes-et-quete-de-sens/?lang=fra), menée auprès de 917 dirigeants de PME et d'ETI, 65 % décrivent leur solitude comme « un stress lié à la charge mentale ». Nous en détaillons les ressorts dans notre article sur la [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/).",
        },
        {
          type: "h3",
          texte: "Pourquoi ce n'est pas qu'une question de confort",
        },
        {
          type: "p",
          texte:
            "L'INRS a publié en janvier 2025 une synthèse de plus de 800 études internationales, résumée dans [Risques psychosociaux au travail et effets sur la santé des salariés](https://www.inrs.fr/header/presse/cp-expositions-psychosociales-effets-sante.html). Elle associe notamment une forte demande psychologique à un risque de burn-out deux fois plus élevé, et plus de 48 heures de travail par semaine à un excès de risque d'accident vasculaire cérébral de plus de 20 %. La charge mentale n'est pas une maladie ; son excès prolongé est un facteur de risque.",
        },
      ],
    },

    {
      label: "Le dirigeant",
      titre: "Pourquoi la charge mentale du dirigeant de PME est particulière",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME de 10 à 250 salariés, la charge mentale se concentre souvent sur une seule personne. Trois raisons l'expliquent, et aucune ne tient à un défaut de caractère.",
        },
        {
          type: "h3",
          texte: "Toutes les boucles ouvertes finissent chez vous",
        },
        {
          type: "p",
          texte:
            "Un manager qui n'a pas le droit explicite de trancher vous remonte la question. Un client important veut vous parler, à vous. Le banquier, l'expert-comptable, le fournisseur stratégique : chacun a votre numéro. Chaque sujet est petit ; leur somme ne l'est pas. Le premier levier consiste donc à réduire le nombre de sujets qui ne peuvent passer que par vous, avant d'apprendre à mieux les porter.",
        },
        {
          type: "h3",
          texte: "Les décisions ne se referment jamais vraiment",
        },
        {
          type: "p",
          texte:
            "Une tâche exécutée sort de la tête. Une décision repoussée y reste. Le recrutement que vous hésitez à lancer, l'investissement que vous différez, le client que vous n'osez pas arrêter : chacun tourne en arrière-plan. Apprendre à [prendre une décision](/infos-utiles/prendre-une-decision/) plus nettement, quitte à la réviser plus tard, est l'une des façons les plus directes de libérer de la place.",
        },
        {
          type: "h3",
          texte: "La frontière entre l'entreprise et la maison est poreuse",
        },
        {
          type: "p",
          texte:
            "C'est exactement la situation décrite par Monique Haicault : penser à un domaine en étant dans l'autre. Le dirigeant emporte l'entreprise au dîner, en vacances, parfois dans son sommeil. Le téléphone ne crée pas cette porosité, il la rend permanente.",
        },
      ],
    },

    {
      label: "Signaux",
      titre: "Surcharge mentale : les symptômes qui doivent vous alerter",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne sommes pas médecins, et cette section ne permet de poser aucun diagnostic. Elle sert à repérer le moment où une charge mentale ordinaire devient une surcharge qui mérite d'en parler à un professionnel de santé.",
        },
        {
          type: "h3",
          texte: "Ce que décrivent l'INRS et la HAS",
        },
        {
          type: "p",
          texte:
            "L'INRS définit le stress au travail comme le ressenti d'un [déséquilibre entre ce qu'on vous demande et les ressources dont vous disposez](https://www.inrs.fr/risques/stress/exposition-risques-facteurs-stress.html) pour y répondre. Parmi les causes liées à l'organisation, il cite la surcharge, les objectifs flous, les ordres contradictoires, les interruptions constantes et les délais irréalistes. Quand ce déséquilibre dure, la Haute Autorité de santé décrit, dans sa fiche sur le [syndrome d'épuisement professionnel](https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge), des manifestations émotionnelles, cognitives, comportementales et physiques qui s'installent progressivement.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous remarquez", "Ce qu'il est raisonnable de faire"],
          lignes: [
            [
              "Des oublis inhabituels, du mal à vous concentrer, des phrases relues trois fois",
              "Le noter comme un signal ; si cela dure plusieurs semaines, en parler à votre médecin traitant",
            ],
            [
              "Un sommeil haché, des réveils la nuit avec la liste des choses à faire",
              "Le signaler à votre médecin : c'est à évaluer, pas une fatalité du métier",
            ],
            [
              "Une fatigue que le week-end ou les congés ne suffisent plus à effacer",
              "Prendre rendez-vous sans attendre qu'elle impose un arrêt",
            ],
            [
              "De l'irritabilité, un repli, l'envie de ne plus voir personne",
              "En parler à un proche de confiance et à un professionnel de santé",
            ],
            [
              "Des maux de tête, de dos ou de ventre qui s'installent",
              "Consulter : ces troubles physiques peuvent avoir d'autres causes qu'il faut écarter",
            ],
            [
              "Le sentiment que rien n'a plus de sens, des idées noires",
              "Appeler le 3114 sans attendre ; en cas de danger immédiat, le 15",
            ],
          ],
        },
        {
          type: "encadre",
          titre: "Qui appeler",
          texte:
            "Votre médecin traitant d'abord : selon la HAS, il coordonne la prise en charge, en lien avec le médecin du travail pour les salariés. En cas de détresse, le [3114](https://3114.fr/), numéro national de prévention du suicide, répond gratuitement, 24 h/24 et 7 j/7, y compris si vous vous inquiétez pour un proche ou un collaborateur.",
        },
      ],
    },

    {
      label: "Distinguer",
      titre: "Charge mentale, stress, burn-out : ne pas tout confondre",
      blocs: [
        {
          type: "p",
          texte:
            "Ces trois mots circulent comme des synonymes. Ils ne le sont pas, et les confondre conduit à de mauvaises réponses : traiter par du repos un problème d'organisation, ou par une réorganisation un problème de santé.",
        },
        {
          type: "tableau",
          entetes: ["Notion", "Ce qu'elle désigne, et qui s'en occupe"],
          lignes: [
            [
              "Charge mentale",
              "L'effort permanent d'anticiper et de coordonner. Normale à un certain niveau ; elle se règle par l'organisation et les habitudes",
            ],
            [
              "Surcharge mentale",
              "Une charge qui dépasse durablement vos ressources. Signal d'alerte ; à surveiller, et à montrer à un médecin si les symptômes s'installent",
            ],
            [
              "Stress",
              "Selon l'INRS, le ressenti d'un déséquilibre entre les demandes et les ressources. Aigu, il mobilise ; chronique, il use",
            ],
            [
              "Burn-out",
              "Selon la HAS, un épuisement physique, émotionnel et mental lié à un investissement prolongé au travail. Relève d'un médecin, jamais d'un coach seul",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Si vous vous interrogez sur l'épuisement proprement dit, notre article sur les [signes du burn-out](/infos-utiles/signes-du-burn-out/) détaille ce que décrivent les autorités de santé et les démarches à engager.",
        },
      ],
    },

    {
      label: "Vos habitudes",
      titre: "Alléger sa charge mentale : ce qui dépend de vous",
      blocs: [
        {
          type: "p",
          texte:
            "Les gestes individuels ne règlent pas une organisation défaillante. Ils rendent en revanche la charge plus supportable, et ils se mettent en place dès demain.",
        },
        {
          type: "h3",
          texte: "Sortir les boucles ouvertes de votre tête",
        },
        {
          type: "p",
          texte:
            "Ce qui est écrit n'a plus besoin d'être retenu. Une liste unique, et non cinq carnets, où tout ce qui vous traverse l'esprit atterrit dans la minute. Une revue hebdomadaire, courte, pour décider de chaque ligne : je fais, je confie, je planifie, j'abandonne. **L'objectif n'est pas d'être plus productif, c'est de ne plus confier à votre mémoire le rôle d'un logiciel de gestion.**",
        },
        {
          type: "h3",
          texte: "Protéger des plages sans interruption",
        },
        {
          type: "p",
          texte:
            "Chaque interruption oblige à reconstruire le fil. Des créneaux fermés aux sollicitations, des questions regroupées à heures fixes, des notifications coupées : l'INRS cite lui-même l'organisation des demandes à horaires fixes parmi les pistes contre le stress lié aux interruptions.",
        },
        {
          type: "h3",
          texte: "Récupérer vraiment, et le prévoir",
        },
        {
          type: "p",
          texte:
            "La récupération ne se fait pas toute seule quand la tête continue de tourner. Des temps de coupure réels, une activité physique, quelques minutes de respiration ou de relâchement entre deux rendez-vous : ces pratiques aident à redescendre. Elles ne soignent rien. Si le sommeil reste dégradé malgré elles, c'est le signe qu'il faut consulter, pas qu'il faut s'entraîner davantage.",
        },
      ],
    },

    {
      label: "L'organisation",
      titre: "Réduire la charge mentale au travail : ce qui dépend de l'organisation",
      blocs: [
        {
          type: "p",
          texte:
            "L'INRS le rappelle dans ses [principes de prévention des risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/prevention.html) : la prévention vise à adapter le travail à l'homme, et non l'inverse. Parmi les six familles de [facteurs de risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html) qu'il retient figurent l'intensité du travail, avec ses objectifs flous et ses consignes contradictoires, et le manque d'autonomie. Ce sont des leviers d'organisation, pour vous comme pour vos équipes.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Des rôles qui disent qui décide.** Tant qu'un manager n'a pas le droit explicite de trancher, il vous transmet sa charge mentale en même temps que sa question.",
            "**Une information qui circule sans vous.** Si vous êtes le seul à connaître l'état d'un client ou d'un chantier, vous êtes aussi le seul à devoir y penser.",
            "**Des priorités écrites et arbitrées.** Des objectifs flous obligent chacun à deviner, et les arbitrages non tranchés reviennent chaque semaine.",
            "**Des temps d'échange sur le travail.** Un problème partagé en équipe cesse d'être porté par une seule personne.",
          ],
        },
        {
          type: "p",
          texte:
            "Ces leviers valent aussi pour vos salariés. Un manager intermédiaire coincé entre des demandes contradictoires vit la même surcharge que vous, avec moins de marges de manœuvre. Alléger votre charge mentale en la reportant intégralement sur lui ne règle rien.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Ce qu'un accompagnement change à la charge mentale, et ce qu'il ne fait pas",
      blocs: [
        {
          type: "p",
          texte:
            "Un accompagnement ne soigne pas. Si vos signaux relèvent de la santé, le rendez-vous médical passe en premier, et nous vous le dirons dès le premier échange. En revanche, quand la charge vient de la façon dont les décisions et les informations circulent, c'est là que nous travaillons.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, le point d'entrée est l'étape Aligner : remettre de la clarté dans les priorités et réduire le pilotage dans l'urgence. Un conseiller référent vous suit du début à la fin, en individuel ou en collectif avec d'autres dirigeants, par jalons de trois mois. Un autodiagnostic de qualité de vie au travail peut s'y ajouter si vous le souhaitez. Le périmètre est arrêté avec vous, écrit, et ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Le résultat visé n'est pas un dirigeant qui tient mieux la pression, c'est une entreprise où moins de choses reposent sur votre seule mémoire. Pour savoir d'où vient d'abord votre charge, de vous ou de l'organisation, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la charge mentale ?",
      r: [
        "La charge mentale est l'effort permanent de penser à ce qui doit être fait : anticiper, se souvenir, organiser, relancer. La sociologue Monique Haicault a forgé la notion en 1984 pour décrire le fait de devoir penser à un domaine de sa vie tout en étant dans un autre. Elle se distingue de la charge de travail, qui mesure les tâches réellement exécutées.",
      ],
    },
    {
      q: "Quels sont les symptômes d'une surcharge mentale ?",
      r: [
        "Les signaux les plus souvent décrits sont les oublis et difficultés de concentration, un sommeil perturbé, une fatigue que le repos n'efface plus, de l'irritabilité, un repli et parfois des douleurs physiques. Aucun de ces signes ne permet de se diagnostiquer seul. S'ils durent plusieurs semaines, parlez-en à votre médecin traitant. En cas d'idées noires, appelez le 3114, gratuit et joignable 24 h/24.",
      ],
    },
    {
      q: "Quelle différence entre charge mentale et burn-out ?",
      r: [
        "La charge mentale est une dimension normale du travail, qui devient problématique quand elle dépasse durablement vos ressources. Le burn-out est, selon la Haute Autorité de santé, un épuisement physique, émotionnel et mental lié à un investissement prolongé dans des situations de travail exigeantes. Une surcharge mentale prolongée peut y conduire, mais seul un médecin peut poser ce diagnostic.",
      ],
    },
    {
      q: "Combien de salariés sont concernés par la charge mentale ?",
      r: [
        "Selon l'enquête Conditions de travail 2016 de la Dares, 44 % des salariés déclaraient devoir penser à trop de choses à la fois, contre 49 % en 2013. Les cadres étaient les plus nombreux dans ce cas, avec 57 %, et les femmes davantage que les hommes, 47 % contre 40 %. Côté dirigeants, 65 % associent leur solitude à un stress lié à la charge mentale, selon Bpifrance Le Lab en 2026.",
      ],
    },
    {
      q: "Comment réduire sa charge mentale au travail ?",
      r: [
        "En agissant sur deux plans. Individuellement : noter tout ce qui doit être fait dans un seul outil, regrouper les sollicitations, protéger des plages sans interruption et de vrais temps de récupération. Collectivement : clarifier qui décide quoi, faire circuler l'information sans passer par une seule personne et arbitrer les priorités par écrit. Le second plan est souvent le plus efficace, et le plus négligé.",
      ],
    },
  ],

  sources: [
    {
      titre: "La gestion ordinaire de la vie en deux",
      editeur: "Monique Haicault, Sociologie du travail, 1984 (Persée)",
      url: "https://www.persee.fr/doc/sotra_0038-0296_1984_num_26_3_2072",
    },
    {
      titre:
        "Quelles sont les évolutions récentes des conditions de travail et des risques psychosociaux ? (Dares Analyses n° 082)",
      editeur: "Dares, ministère du Travail (document hébergé par le Céreq)",
      url: "https://pmb.cereq.fr/doc_num.php?explnum_id=4161",
    },
    {
      titre:
        "Bpifrance Le Lab dévoile les nouveaux visages de la solitude des dirigeants de PME-ETI, entre incertitudes et quête de sens",
      editeur: "Bpifrance",
      url: "https://presse.bpifrance.fr/bpifrance-le-lab-devoile-les-nouveaux-visages-de-la-solitude-des-dirigeants-de-pme-eti-entre-incertitudes-et-quete-de-sens/?lang=fra",
    },
    {
      titre: "Risques psychosociaux au travail et effets sur la santé des salariés",
      editeur: "INRS",
      url: "https://www.inrs.fr/header/presse/cp-expositions-psychosociales-effets-sante.html",
    },
    {
      titre: "Stress au travail. Exemples d'exposition aux risques et facteurs de stress",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/stress/exposition-risques-facteurs-stress.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Prévention",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/prevention.html",
    },
    {
      titre:
        "Repérage et prise en charge cliniques du syndrome d'épuisement professionnel ou burnout",
      editeur: "Haute Autorité de santé",
      url: "https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge",
    },
    {
      titre: "Numéro national de prévention du suicide - 3114",
      editeur: "3114, piloté par le ministère chargé de la santé",
      url: "https://3114.fr/",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2026-12-07",
  accent: "qvt",
  pilier: { href: "/transformation-dirigeant/", ancre: "accompagnement dirigeant" },

  valide: true,
};
