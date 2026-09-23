import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant.
 * Requête : « solitude du dirigeant » (40/mois, KD 9).
 * Sujet sensible : aucun conseil médical, aucun diagnostic. Les dispositifs d'aide
 * cités (3114, APESA, médecin traitant) ont été vérifiés sur leurs sites officiels
 * le 23/09/2026.
 */
export const article: Article = {
  slug: "solitude-du-dirigeant",

  motCle: "solitude du dirigeant (40/mois, KD 9)",
  motsClesSecondaires: [
    "burn out dirigeant (20/mois)",
    "dirigeant de PME épuisé",
    "isolement du chef d'entreprise",
  ],

  // 41 / 42
  metaTitle: "Solitude du dirigeant : causes et leviers",
  // 143 / 150
  metaDescription:
    "Solitude du dirigeant de PME : ce que disent les études, les signaux d'épuisement à ne pas ignorer, qui appeler et cinq leviers pour en sortir.",

  h1: "Solitude du dirigeant : la reconnaître, et ne plus la porter seul",

  chapo:
    "La solitude du dirigeant n'est ni une faiblesse ni un passage obligé du métier. C'est le fait de porter seul des décisions qui engagent tout le monde, sans personne à qui en parler librement. Près d'un dirigeant de PME sur deux la ressent, et elle pèse de plus en plus sur la santé. Elle se desserre pourtant par des moyens concrets : des pairs, un regard extérieur, des décisions redistribuées, une organisation qui ne remonte pas tout à vous. Et si la fatigue devient épuisement, la première porte n'est pas un consultant : c'est votre médecin.",

  essentiel: {
    reponse:
      "La solitude du dirigeant désigne l'isolement ressenti par le chef d'entreprise face aux décisions, aux responsabilités et aux doutes qu'il ne peut partager ni avec ses équipes, ni toujours avec ses proches. Selon Bpifrance Le Lab (2026), 49 % des dirigeants de PME et d'ETI se déclarent isolés et 18 % très isolés. Chez ces derniers, près d'un sur deux juge sa santé mentale mauvaise. Elle se traite par des leviers d'organisation et d'entourage ; les signes d'épuisement, eux, relèvent d'un médecin.",
    points: [
      "Près d'un dirigeant de PME ou d'ETI sur deux se dit isolé, et la part des « très isolés » est passée de 11 % à 18 % en dix ans",
      "La solitude est d'abord décisionnelle : elle naît quand trop d'arbitrages ne peuvent être pris que par vous",
      "Fatigue persistante, sommeil dégradé, repli, irritabilité : ce sont des signaux à montrer à un médecin, pas à interpréter seul",
      "En cas de détresse ou d'idées suicidaires : le 3114, gratuit, 24 h/24 et 7 j/7 ; en cas de danger immédiat, le 15",
      "Leviers durables : pairs, conseil extérieur, délégation réelle, gouvernance, hygiène de vie",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Solitude du dirigeant : de quoi parle-t-on exactement ?",
      blocs: [
        {
          type: "p",
          texte:
            "Un dirigeant de PME est rarement seul au sens propre. Il passe ses journées entouré de salariés, de clients, de fournisseurs, de son banquier et de son expert-comptable. **La solitude du dirigeant ne tient pas au nombre de personnes autour de vous, mais au nombre de personnes avec qui vous pouvez penser à voix haute.** Et ce nombre est souvent proche de zéro.",
        },
        {
          type: "h3",
          texte: "Une solitude d'abord décisionnelle",
        },
        {
          type: "p",
          texte:
            "Vous ne pouvez pas partager vos doutes sur un licenciement avec l'équipe concernée. Vous ne pouvez pas dire à vos managers que la trésorerie vous inquiète sans créer l'inquiétude que vous voulez éviter. Votre conjoint entend la fatigue, pas le dossier. Au bout du compte, la décision se prend seul, tard, et souvent sans l'avoir vraiment posée.",
        },
        {
          type: "h3",
          texte: "Pas une solitude, mais des solitudes",
        },
        {
          type: "p",
          texte:
            "L'étude [Vaincre les solitudes du dirigeant](https://lelab.bpifrance.fr/vaincre-les-solitudes-du-dirigeant/) de Bpifrance Le Lab, menée en 2016 auprès de 2 398 dirigeants de PME et d'ETI, en distingue sept formes : dans la décision, statutaire, relationnelle, professionnelle, situationnelle, existentielle et collective. La distinction est utile, car chacune a ses causes et donc ses remèdes. Se sentir seul face à un arbitrage ne se traite pas comme le sentiment d'être incompris par le grand public.",
        },
        {
          type: "p",
          texte:
            "Dans une PME, la forme la plus fréquente et la plus coûteuse reste la solitude dans la décision : trop d'arbitrages qui ne peuvent être pris que par vous. C'est précisément le point de départ d'un [accompagnement dirigeant](/transformation-dirigeant/) : non pas vous apprendre à mieux supporter la charge, mais réduire la part que vous êtes seul à porter.",
        },
      ],
    },

    {
      label: "Les chiffres",
      titre: "Ce que disent les études sur l'isolement du chef d'entreprise",
      blocs: [
        {
          type: "h3",
          texte: "Une solitude stable en fréquence, plus lourde en intensité",
        },
        {
          type: "p",
          texte:
            "Dix ans après sa première étude, Bpifrance Le Lab a réinterrogé 917 dirigeants de PME et d'ETI entre février et avril 2026. Selon [Le nouveau visage de la solitude des dirigeants de PME](https://lelab.bpifrance.fr/le-nouveau-visage-de-la-solitude-des-dirigeants-de-pme-entre-incertitudes-et-quete-de-sens/), la proportion de dirigeants qui se sentent isolés passe de 45 % en 2016 à 49 % en 2026. **La hausse la plus nette concerne l'intensité : la part des dirigeants « très isolés » passe de 11 % à 18 %.**",
        },
        {
          type: "p",
          texte:
            "Le [communiqué de présentation de l'étude](https://presse.bpifrance.fr/bpifrance-le-lab-devoile-les-nouveaux-visages-de-la-solitude-des-dirigeants-de-pme-eti-entre-incertitudes-et-quete-de-sens/?lang=fra) précise que, pour 65 % des dirigeants, cette solitude est « un stress lié à la charge mentale ». Au cours des douze derniers mois, 75 % se sont interrogés sur le sens de leur engagement entrepreneurial. Ceux qui se posent très souvent la question sont deux fois plus nombreux à déclarer une mauvaise santé mentale : 38 %, contre 17 % pour l'ensemble.",
        },
        {
          type: "h3",
          texte: "Une santé qui se dégrade, et que l'on soigne peu",
        },
        {
          type: "p",
          texte:
            "Le baromètre 2025 de la Fondation MMA des Entrepreneurs du Futur et de Bpifrance Le Lab, résumé dans [1 dirigeant sur 3 est en mauvaise santé mentale en 2025](https://lelab.bpifrance.fr/Etudes/1-dirigeant-sur-3-est-en-mauvaise-sante-mentale-en-2025), va dans le même sens. 82 % des dirigeants de TPE-PME déclarent au moins un trouble physique ou psychologique. Seuls 68 % se considèrent en bonne santé mentale, contre 76 à 80 % les années précédentes. Les troubles du sommeil touchent 48 % d'entre eux.",
        },
        {
          type: "p",
          texte:
            "Un dirigeant sur trois renonce à se soigner, d'abord faute de temps (68 %). Le baromètre relève aussi que ceux qui détiennent 100 % du capital sont les plus exposés (37 % en mauvaise santé mentale), et que la santé psychologique se dégrade avec l'ancienneté : 35 % en mauvaise santé après 15 à 20 ans de gestion, contre 17 % dans les entreprises de moins de trois ans.",
        },
        {
          type: "h3",
          texte: "Le burn-out du dirigeant, mesuré par la recherche",
        },
        {
          type: "p",
          texte:
            "L'Observatoire Amarok, fondé en 2009 par Olivier Torrès, professeur à l'université de Montpellier, étudie les liens entre la santé de l'entreprise et celle de son dirigeant. Son étude « Entreprendre sans s'épuiser », menée avec la CPME et Harmonie Mutuelle auprès de 1 731 dirigeants entre 2018 et 2019, puis d'une seconde enquête en avril 2020, a mesuré l'exposition des dirigeants au burn-out. D'après la [synthèse publiée par Harmonie Mutuelle](https://www.harmonie-mutuelle.fr/marque/a-propos/espace-presse/communiques-presse/observatoire-amarok), 17,5 % des dirigeants de TPE-PME étaient concernés avant la crise sanitaire, et le fait d'être employeur figurait parmi les facteurs qui amplifient le risque. Ces chiffres datent : ils montrent surtout que le burn-out du dirigeant est mesurable, et mesuré, depuis longtemps.",
        },
      ],
    },

    {
      label: "Les causes",
      titre: "Pourquoi le dirigeant de PME est particulièrement exposé",
      blocs: [
        {
          type: "p",
          texte:
            "Les études convergent sur un point : la solitude n'est pas un trait de caractère. Elle est produite par la position que vous occupez et par l'environnement dans lequel vous l'occupez. Quatre causes reviennent.",
        },
        {
          type: "h3",
          texte: "Toutes les décisions remontent au même endroit",
        },
        {
          type: "p",
          texte:
            "Dans une PME de 10 à 250 salariés, il n'y a souvent ni directeur général adjoint, ni comité de direction qui arbitre réellement. Les managers existent, mais ils n'ont pas le droit explicite de trancher. Remonter au dirigeant reste pour eux la décision la plus sûre. Résultat : la file d'attente se reconstitue chaque matin sur votre bureau, et vous êtes seul à la traiter.",
        },
        {
          type: "h3",
          texte: "Un environnement plus complexe, avec moins de relais",
        },
        {
          type: "p",
          texte:
            "Selon Bpifrance Le Lab, la complexité réglementaire et administrative arrive en tête des facteurs d'aggravation de la solitude, et près de six dirigeants sur dix citent l'incertitude économique. Dans une PME, les ressources juridiques, financières ou administratives sont limitées : le dirigeant absorbe lui-même ce qu'une grande entreprise confie à des services entiers.",
        },
        {
          type: "h3",
          texte: "Un statut qui rend la fragilité indicible",
        },
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants hésitent à parler de leurs difficultés, de peur d'être jugés ou de passer pour privilégiés. Cette autocensure, relevée par l'étude 2026, renforce l'isolement. Elle explique aussi le renoncement aux soins : on repousse le rendez-vous médical parce qu'on n'a « pas le temps », et parce qu'en parler reviendrait à admettre que ça ne va pas.",
        },
        {
          type: "h3",
          texte: "Des moments où tout se resserre",
        },
        {
          type: "p",
          texte:
            "La solitude varie selon la vie de l'entreprise. D'après le communiqué de Bpifrance Le Lab, 30 % des dirigeants se disent souvent ou toujours seuls à la création, 42 % au moment de préparer la transmission, et 58 % dans les périodes difficiles. Elle ne disparaît pas avec le succès : 25 % se sentent seuls même quand tout va bien. Anticiper ces moments, c'est déjà réduire leur poids.",
        },
      ],
    },

    {
      label: "Signaux d'alerte",
      titre: "Burn-out du dirigeant : les signaux qui doivent vous alerter",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne sommes pas médecins, et cet article ne remplace pas un avis médical. Il ne permet pas de poser un diagnostic, ni sur vous, ni sur un associé. Il sert à une seule chose : vous aider à reconnaître le moment où il faut en parler à un professionnel de santé.",
        },
        {
          type: "h3",
          texte: "Ce que décrit la Haute Autorité de santé",
        },
        {
          type: "p",
          texte:
            "La fiche de la HAS [Repérage et prise en charge cliniques du syndrome d'épuisement professionnel ou burnout](https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge) définit l'épuisement professionnel comme un « épuisement physique, émotionnel et mental » lié à un investissement prolongé dans des situations de travail exigeantes. Elle vise **tout travailleur quel que soit son statut**, donc aussi le chef d'entreprise. Elle précise que ses manifestations s'installent de façon progressive et souvent insidieuse, en rupture avec l'état antérieur.",
        },
        {
          type: "p",
          texte:
            "Parmi les manifestations qu'elle liste : anxiété, irritabilité, troubles de la concentration et de la mémoire, repli sur soi et isolement social, baisse de motivation, doutes sur ses propres compétences, troubles du sommeil, fatigue, maux de dos, maux de tête, troubles digestifs. La HAS rappelle aussi que le déni retarde souvent la prise en charge. C'est un piège fréquent chez un dirigeant habitué à tenir.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous remarquez", "Ce qu'il est raisonnable de faire"],
          lignes: [
            [
              "Une fatigue qui ne passe plus avec le week-end ou les congés",
              "En parler à votre médecin traitant, sans attendre qu'elle devienne un arrêt forcé",
            ],
            [
              "Un sommeil durablement dégradé, des réveils nocturnes avec les dossiers en tête",
              "Le signaler à votre médecin : c'est un signe à évaluer, pas une fatalité du métier",
            ],
            [
              "Des décisions repoussées, une difficulté nouvelle à vous concentrer ou à trancher",
              "Le noter comme un signal, et en parler à un médecin si cela dure",
            ],
            [
              "Une irritabilité inhabituelle, un repli, l'envie de ne plus voir personne",
              "En parler à un proche de confiance et à un professionnel de santé",
            ],
            [
              "Le sentiment que rien n'a plus de sens, des idées noires",
              "Appeler le 3114 sans attendre ; en cas de danger immédiat, le 15",
            ],
          ],
        },
        {
          type: "encadre",
          titre: "Un conseil de bon sens, pas un conseil médical",
          texte:
            "Si plusieurs de ces signaux s'installent, prenez rendez-vous avec votre médecin traitant. Selon la HAS, c'est lui qui coordonne la prise en charge. Aucun coach, aucun consultant, aucun sophrologue ne se substitue à ce rendez-vous.",
        },
      ],
    },

    {
      label: "Qui appeler",
      titre: "Dirigeant de PME épuisé : les aides qui existent vraiment",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants ignorent qu'il existe des dispositifs pensés pour eux, gratuits et confidentiels. Les voici, du plus urgent au plus préventif.",
        },
        {
          type: "liste",
          items: [
            "**Le 3114, numéro national de prévention du suicide.** Selon le [site officiel du 3114](https://3114.fr/), piloté par le ministère chargé de la santé, il est accessible 24 h/24 et 7 j/7, gratuitement, dans toute la France. Un professionnel du soin formé à la prévention du suicide vous répond. Vous pouvez aussi l'appeler si vous vous inquiétez pour un associé ou un proche.",
            "**Le 15 (Samu) ou le 18 (pompiers)** en cas de danger immédiat, pour vous ou pour quelqu'un d'autre.",
            "**APESA, Aide psychologique aux entrepreneurs en souffrance aiguë.** L'[association APESA](https://www.apesa-france.com/) propose un soutien psychologique gratuit et confidentiel aux chefs d'entreprise. Des « sentinelles » formées repèrent les situations de souffrance et déclenchent une alerte ; un psychologue contacte alors rapidement l'entrepreneur, pour une prise en charge près de chez lui. Le site permet de trouver l'antenne locale. APESA précise elle-même qu'elle n'est pas un dispositif d'urgence.",
            "**Votre médecin traitant**, premier interlocuteur dès que la fatigue ou le sommeil se dégradent durablement.",
          ],
        },
        {
          type: "p",
          texte:
            "Ces dispositifs ne sont pas réservés aux entreprises en faillite ni aux situations extrêmes. Un dirigeant de PME épuisé, dont l'entreprise se porte bien, y a tout autant sa place. **Demander de l'aide tôt n'est pas un aveu d'échec : c'est une décision de gestion, la plus rentable que vous prendrez cette année.**",
        },
      ],
    },

    {
      label: "Les leviers",
      titre: "Cinq leviers pour rompre l'isolement du dirigeant",
      blocs: [
        {
          type: "p",
          texte:
            "L'étude de 2016 de Bpifrance Le Lab relevait déjà les réponses que les dirigeants mobilisent : réseaux, conseils externes, organes de gouvernance, et surtout l'acceptation de partager le pouvoir. Voici comment les rendre concrets dans une PME.",
        },
        {
          type: "tableau",
          entetes: ["Levier", "Ce qu'il change concrètement"],
          lignes: [
            [
              "Des pairs",
              "Parler à d'autres dirigeants qui vivent la même chose, sans enjeu hiérarchique ni commercial",
            ],
            [
              "Un regard extérieur",
              "Poser une décision à voix haute devant quelqu'un qui n'a pas d'intérêt dans son issue",
            ],
            [
              "Une délégation réelle",
              "Réduire le nombre de décisions qui ne peuvent être prises que par vous",
            ],
            [
              "Une organisation et une gouvernance",
              "Des rôles clairs, un comité qui arbitre, des relais internes identifiés",
            ],
            [
              "Une hygiène de vie protégée",
              "Du sommeil, des temps sans entreprise, un suivi médical que vous ne repoussez plus",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Des pairs et un regard extérieur",
        },
        {
          type: "p",
          texte:
            "Un groupe de pairs a une vertu que rien ne remplace : on n'y a rien à prouver. Clubs de dirigeants, réseaux professionnels, groupes d'échange : peu importe le format, pourvu que la confidentialité soit posée. Les méthodes d'[intelligence collective en entreprise](/infos-utiles/intelligence-collective-en-entreprise/) reposent sur le même principe : un problème posé devant plusieurs regards se résout mieux qu'en tête-à-tête avec soi-même. Un conseiller extérieur joue un rôle voisin, en individuel, sur les arbitrages que vous ne pouvez partager avec personne en interne.",
        },
        {
          type: "h3",
          texte: "Déléguer des décisions, pas seulement des tâches",
        },
        {
          type: "p",
          texte:
            "La plupart des dirigeants délèguent des tâches et gardent les décisions. La charge mentale reste donc entière. Déléguer vraiment, c'est donner à un manager le droit explicite de trancher dans un périmètre, y compris le droit de se tromper. Quand le problème est un poste manquant, par exemple la finance, un [DAF externe](/infos-utiles/daf-externe-ou-expert-comptable/) ou une [direction à temps partagé](/infos-utiles/manager-de-transition-ou-direction-a-temps-partage/) peut reprendre un pan entier d'arbitrages que vous portez aujourd'hui seul.",
        },
        {
          type: "h3",
          texte: "Structurer la gouvernance et protéger votre énergie",
        },
        {
          type: "p",
          texte:
            "Un comité de direction qui décide réellement, même à trois personnes, change la nature de la solitude : les arbitrages deviennent collectifs, et leur poids se partage. En parallèle, votre énergie se gère comme une ressource de l'entreprise. Des plages sans sollicitation, un sommeil protégé, une activité physique, un rendez-vous médical annuel que vous honorez : ce ne sont pas des conseils de confort. Le baromètre 2025 rappelle qu'un dirigeant sur trois renonce aujourd'hui à se soigner.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Ce qu'un accompagnement change à la solitude du dirigeant, et ce qu'il ne fait pas",
      blocs: [
        {
          type: "p",
          texte:
            "Un accompagnement ne soigne pas. Si votre situation relève d'un suivi médical ou psychologique, c'est vers un professionnel de santé qu'il faut aller, et nous vous le dirons dès le premier échange. En revanche, quand le nœud est l'organisation de vos décisions, un accompagnement agit là où la fatigue prend sa source.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, le travail commence par l'étape Aligner : remettre de la clarté dans vos priorités et réduire le pilotage dans l'urgence. Un conseiller référent suit votre parcours du début à la fin. Elle se suit au choix en individuel, en coaching, ou en collectif avec d'autres dirigeants ; un autodiagnostic de qualité de vie au travail peut s'y ajouter si vous en avez besoin. Vient ensuite l'étape Coopérer, en cercles de 6 à 8 personnes, pour installer la co-responsabilité dans votre équipe.",
        },
        {
          type: "p",
          texte:
            "Le point de sortie n'est pas un dirigeant qui supporte mieux la pression. C'est une entreprise où moins de décisions remontent à vous, et où vous n'êtes plus seul à porter celles qui restent. Si vous voulez situer d'abord votre entreprise, commencez par un [diagnostic d'entreprise](/diagnostic/) : il vous aide à voir si le nœud est chez vous ou dans l'organisation.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la solitude du dirigeant ?",
      r: [
        "C'est l'isolement ressenti par le chef d'entreprise face aux décisions et aux responsabilités qu'il ne peut partager ni avec ses équipes, ni toujours avec ses proches. Elle ne dépend pas du nombre de personnes autour de lui, mais de l'absence d'interlocuteur avec qui réfléchir librement. Bpifrance Le Lab en distingue sept formes, dont la plus répandue en PME est la solitude dans la décision.",
      ],
    },
    {
      q: "Combien de dirigeants de PME se sentent seuls ?",
      r: [
        "Selon l'étude 2026 de Bpifrance Le Lab, menée auprès de 917 dirigeants de PME et d'ETI, 49 % se déclarent isolés, contre 45 % en 2016. La part des dirigeants « très isolés » est passée de 11 % à 18 % en dix ans. La solitude culmine dans les périodes difficiles, où 58 % des dirigeants se disent souvent ou toujours seuls.",
      ],
    },
    {
      q: "Comment savoir si je suis en burn-out ?",
      r: [
        "Seul un médecin peut le dire. La Haute Autorité de santé décrit des manifestations progressives : fatigue persistante, troubles du sommeil, irritabilité, difficultés de concentration, repli sur soi, doutes sur ses compétences. Si plusieurs de ces signes s'installent, prenez rendez-vous avec votre médecin traitant, qui coordonne la prise en charge. En cas d'idées noires, appelez le 3114, gratuit et joignable 24 h/24.",
      ],
    },
    {
      q: "Qui appeler quand on est chef d'entreprise en grande difficulté psychologique ?",
      r: [
        "En cas de détresse ou de pensées suicidaires, le 3114, numéro national de prévention du suicide, gratuit, 24 h/24 et 7 j/7. En cas de danger immédiat, le 15. L'association APESA propose par ailleurs un soutien psychologique gratuit et confidentiel aux entrepreneurs en souffrance, avec des antennes locales. Pour un épuisement qui s'installe, votre médecin traitant reste le premier interlocuteur.",
      ],
    },
    {
      q: "Comment rompre l'isolement quand on dirige une PME ?",
      r: [
        "En combinant plusieurs leviers : rejoindre un groupe de pairs où la confidentialité est posée, s'appuyer sur un regard extérieur pour les arbitrages difficiles, déléguer des décisions et pas seulement des tâches, installer une gouvernance qui partage les arbitrages, et protéger son sommeil et son suivi médical. Aucun levier ne suffit seul ; c'est leur addition qui allège durablement la charge.",
      ],
    },
    {
      q: "Un coaching peut-il remplacer un suivi médical ?",
      r: [
        "Non. Un coaching ou un accompagnement de dirigeant travaille sur votre fonction : priorités, décisions, délégation, organisation. Il ne diagnostique ni ne soigne un épuisement. Si des signes de burn-out apparaissent, le rendez-vous médical passe en premier. Les deux peuvent ensuite coexister : le médecin s'occupe de votre santé, l'accompagnement de ce qui, dans l'organisation, a produit la surcharge.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Le nouveau visage de la solitude des dirigeants de PME : entre incertitudes et quête de sens",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/le-nouveau-visage-de-la-solitude-des-dirigeants-de-pme-entre-incertitudes-et-quete-de-sens/",
    },
    {
      titre:
        "Bpifrance Le Lab dévoile les nouveaux visages de la solitude des dirigeants de PME-ETI, entre incertitudes et quête de sens",
      editeur: "Bpifrance",
      url: "https://presse.bpifrance.fr/bpifrance-le-lab-devoile-les-nouveaux-visages-de-la-solitude-des-dirigeants-de-pme-eti-entre-incertitudes-et-quete-de-sens/?lang=fra",
    },
    {
      titre: "Vaincre les solitudes du dirigeant",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/vaincre-les-solitudes-du-dirigeant/",
    },
    {
      titre: "1 dirigeant sur 3 est en mauvaise santé mentale en 2025",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/Etudes/1-dirigeant-sur-3-est-en-mauvaise-sante-mentale-en-2025",
    },
    {
      titre: "Observatoire AMAROK/Burn-out chez les dirigeants de PME",
      editeur: "Harmonie Mutuelle (étude Observatoire Amarok et CPME)",
      url: "https://www.harmonie-mutuelle.fr/marque/a-propos/espace-presse/communiques-presse/observatoire-amarok",
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
    {
      titre: "Aide Psychologique aux Entrepreneurs en Souffrance Aiguë",
      editeur: "APESA France",
      url: "https://www.apesa-france.com/",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2026-09-23",
  accent: "qvt",
  pilier: { href: "/transformation-dirigeant/", ancre: "accompagnement dirigeant" },

  valide: false,
};
