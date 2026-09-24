import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, transformation de l'entreprise. Signé Yohan Castelar.
 * Requête : « management de projet » (910/mois, KD 19). Secondaires retenues :
 * « gestion de projet », « conduite de projet », « chef de projet »,
 * « méthode de gestion de projet ».
 *
 * Angle : le projet de transformation mené dans une PME, en plus du quotidien,
 * sans service projet ni chef de projet à plein temps. L'article renvoie vers le
 * pilier /transformation-entreprise/ (conseil en organisation).
 *
 * POINTS SENSIBLES
 * - Chiffres PMI : enquête mondiale auprès de professionnels du projet, pas de
 *   PME françaises. Le texte le précise. Relus dans le PDF le 24/09/2026.
 * - Aucun cas client, aucun résultat chiffré du cabinet.
 * - Liens internes : uniquement des articles publiés avant le 05/04/2027.
 */
export const article: Article = {
  slug: "management-de-projet",

  motCle: "management de projet (910/mois, KD 19) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "gestion de projet",
    "conduite de projet",
    "chef de projet",
    "méthode de gestion de projet",
  ],

  // 35 / 42
  metaTitle: "Management de projet : le guide PME",
  // 148 / 150
  metaDescription:
    "Management de projet en PME : rôles, étapes, méthodes classiques ou agiles, pilotage et arbitrages. Menez vos projets à terme sans épuiser l'équipe.",

  h1: "Management de projet en PME : mener un projet à terme sans désorganiser l'entreprise",

  chapo:
    "Le management de projet consiste à conduire un changement ponctuel, avec un objectif, un budget et une échéance, en mobilisant des personnes qui ont aussi un travail quotidien à assurer. Dans une PME, c'est là que tout se joue : il n'y a ni service projet ni chef de projet à plein temps, et le projet passe après l'urgence du jour. Un projet réussit rarement grâce à un logiciel ou à une méthode à la mode. Il réussit parce qu'il a un commanditaire qui arbitre, un responsable identifié, un périmètre écrit et un rythme de pilotage tenu. Voici comment installer ces quatre conditions, choisir une méthode adaptée et éviter les dérives les plus courantes.",

  essentiel: {
    reponse:
      "Le management de projet est l'ensemble des pratiques qui permettent de conduire un projet jusqu'à son objectif, dans le délai et avec les ressources prévues : cadrage, planification, pilotage, gestion des risques et clôture. La norme ISO 21502, publiée en 2020, en donne les recommandations et précise qu'elles s'appliquent à tout organisme et à tout projet, quelle que soit sa taille. Dans une PME, les conditions de réussite sont d'abord organisationnelles : un commanditaire qui arbitre, un chef de projet disposant de temps réel, un périmètre écrit et un point de pilotage régulier.",
    points: [
      "Un projet a un début, une fin, un objectif et un budget ; ce qui n'a pas de fin relève de l'organisation courante",
      "Deux rôles ne se délèguent pas : le commanditaire, qui arbitre, et le chef de projet, qui coordonne",
      "Le cadrage écrit, avec ce qui est hors périmètre, évite la plupart des dérives",
      "La méthode, classique, agile ou hybride, se choisit selon le degré d'incertitude du projet",
      "Trop de projets menés en même temps est la première cause d'enlisement dans une PME",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Management de projet : définition et différence avec la gestion de projet",
      blocs: [
        {
          type: "p",
          texte:
            "Un projet se distingue de l'activité courante par trois traits : il a un objectif unique, une date de fin et des ressources limitées. Installer un nouvel ERP, déménager un atelier, lancer une gamme, réorganiser un service après une croissance rapide : ce sont des projets. Produire, livrer et facturer chaque semaine, c'est l'exploitation. **Un projet qui n'a pas de date de fin n'est pas un projet, c'est une intention.**",
        },
        {
          type: "h3",
          texte: "Ce que dit la norme",
        },
        {
          type: "p",
          texte:
            "La norme [ISO 21502:2020](https://www.iso.org/fr/standard/74947.html), intitulée « Management de projets, programmes et portefeuilles — Recommandations sur le management de projets », fournit des lignes directrices sur le management de projet. Elle précise qu'elle est applicable à tout organisme, public, privé ou associatif, et à tout type de projet, quels que soient sa taille, son coût ou sa durée. Elle a été reprise en France comme [norme NF ISO 21502](https://norminfo.afnor.org/norme/nf-iso-21502/management-de-projets-programmes-et-portefeuilles-recommandations-sur-le-management-de-projets/127604), publiée par l'AFNOR le 12 juin 2021. Le management de projet n'est donc pas réservé aux grands groupes.",
        },
        {
          type: "h3",
          texte: "Gestion de projet ou management de projet",
        },
        {
          type: "p",
          texte:
            "Les deux expressions sont souvent employées l'une pour l'autre. On peut toutefois les distinguer utilement. La gestion de projet désigne les outils et les techniques : planning, budget, suivi des tâches. Le management de projet ajoute la dimension humaine et décisionnelle : qui arbitre, comment on mobilise des personnes qui ne dépendent pas du chef de projet, comment on traite les désaccords. Dans une PME, c'est presque toujours cette seconde dimension qui fait défaut.",
        },
        {
          type: "p",
          texte:
            "C'est aussi pourquoi un projet de transformation relève autant du [conseil en organisation](/transformation-entreprise/) que de la technique : le planning dit ce qu'il faut faire, l'organisation dit qui a le droit de le décider.",
        },
      ],
    },

    {
      label: "Le constat",
      titre: "Pourquoi les projets s'enlisent dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Le scénario est connu. Un projet est lancé avec enthousiasme en comité de direction. Un responsable est désigné, qui garde toutes ses autres missions. Trois mois plus tard, les réunions de projet sont reportées, les décisions attendent, et le projet devient un sujet dont on préfère ne plus parler.",
        },
        {
          type: "h3",
          texte: "Même les professionnels du projet manquent des échéances",
        },
        {
          type: "p",
          texte:
            "Le rapport [Pulse of the Profession 2025](https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse_of_the_profession_2025-1.pdf) du Project Management Institute, fondé sur une enquête mondiale auprès de près de 3 000 professionnels du projet, donne un ordre de grandeur. Parmi les répondants dont le sens des affaires est jugé élevé, 63 % des projets respectent leur calendrier initial et 73 % leur budget ; chez les autres, ces taux tombent à 59 % et 68 %. Autrement dit, **même chez des spécialistes, environ quatre projets sur dix finissent hors du délai prévu.** Ces chiffres ne portent pas sur les PME françaises, mais ils montrent que le dérapage est la norme plutôt que l'exception.",
        },
        {
          type: "h3",
          texte: "Quatre causes propres aux PME",
        },
        {
          type: "liste",
          items: [
            "**Le temps n'est pas réservé.** Le chef de projet mène le projet « en plus », et l'urgence opérationnelle gagne toujours.",
            "**Personne n'arbitre.** Quand deux services se disputent une ressource, la question remonte au dirigeant, qui tranche tard, ou pas du tout.",
            "**Le périmètre gonfle.** Chaque réunion ajoute une demande, jamais personne n'en retire.",
            "**Trop de projets en même temps.** Quand les mêmes dix personnes portent cinq projets de front, chacun avance lentement, et aucun n'aboutit à la date prévue.",
          ],
        },
      ],
    },

    {
      label: "Les rôles",
      titre: "Chef de projet, commanditaire, équipe : qui fait quoi",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des difficultés d'un projet se lisent dans la répartition des rôles. Dans une PME, une même personne en cumule souvent plusieurs, ce qui n'est pas un problème tant que chacun sait quelle casquette il porte au moment où il parle.",
        },
        {
          type: "tableau",
          entetes: ["Rôle", "Ce qu'il fait, et ce qu'il ne fait pas"],
          lignes: [
            [
              "Commanditaire (souvent le dirigeant)",
              "Fixe l'objectif, alloue les moyens, arbitre les conflits de ressources. Ne pilote pas le détail des tâches.",
            ],
            [
              "Chef de projet",
              "Coordonne, planifie, fait remonter les risques et les décisions à prendre. N'arbitre pas seul entre deux services.",
            ],
            [
              "Équipe projet",
              "Réalise les travaux et signale les difficultés tôt. Garde un temps réservé, écrit et protégé.",
            ],
            [
              "Comité de pilotage",
              "Réunit commanditaire et chef de projet à rythme fixe pour valider les jalons et trancher. Ne refait pas le travail de l'équipe.",
            ],
            [
              "Utilisateurs finaux",
              "Expriment le besoin, testent, valident. Associés dès le cadrage, pas seulement à la livraison.",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Le chef de projet a besoin de temps, pas seulement d'un titre",
        },
        {
          type: "p",
          texte:
            "Nommer un chef de projet sans lui retirer une partie de ses missions revient à lui confier un projet voué à passer en second. Une règle simple : écrire, dans la lettre de mission du projet, le temps qu'il y consacre chaque semaine et ce qu'il arrête de faire pour le dégager.",
        },
        {
          type: "h3",
          texte: "Le commanditaire doit rester disponible",
        },
        {
          type: "p",
          texte:
            "Le dirigeant qui lance un projet puis s'en désintéresse le condamne. Sans arbitrage, le chef de projet n'a que deux options : attendre, ou décider au-delà de son mandat. Dans une [structure matricielle](/infos-utiles/structure-matricielle/), où les membres de l'équipe projet dépendent d'un autre responsable hiérarchique, cette disponibilité du commanditaire est encore plus décisive.",
        },
      ],
    },

    {
      label: "Les étapes",
      titre: "Les cinq étapes de la conduite de projet",
      blocs: [
        {
          type: "p",
          texte:
            "Quelle que soit la méthode choisie, un projet traverse les mêmes phases. Leur durée varie, leur ordre peut se répéter par cycles courts, mais aucune ne peut être sautée sans le payer plus tard.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Cadrer.** Écrire l'objectif, le périmètre, ce qui est hors périmètre, le budget, l'échéance, les rôles et les critères de réussite. Une à deux pages suffisent.",
            "**Planifier.** Découper en lots de travaux, identifier les dépendances et les jalons, estimer les charges et vérifier qu'elles tiennent dans le temps réellement disponible.",
            "**Réaliser.** Produire les livrables, en impliquant les utilisateurs au fil de l'eau plutôt qu'à la fin.",
            "**Piloter.** Mesurer l'avancement, suivre les risques, faire remonter les décisions, ajuster le plan.",
            "**Clore.** Livrer, transférer à l'exploitation, faire le bilan et libérer l'équipe. Un projet qui ne se clôt jamais consomme des ressources indéfiniment.",
          ],
        },
        {
          type: "h3",
          texte: "Le cadrage, étape la plus souvent bâclée",
        },
        {
          type: "p",
          texte:
            "Le guide [Gestion de projet pour les TPE PME](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/gestion-de-projet) publié sur France Num, le portail de l'État pour la transformation numérique des entreprises, recommande de formuler chaque objectif selon la méthode SMART : spécifique, mesurable, atteignable, réaliste et temporellement défini. Il conseille ensuite de découper chaque objectif en actions concrètes, rattachées à des personnes, à des moyens et à des jalons. C'est exactement ce que doit contenir une note de cadrage.",
        },
        {
          type: "p",
          texte:
            "La rubrique la plus utile d'une note de cadrage est souvent la plus négligée : ce que le projet ne fera pas. L'écrire dès le départ donne au chef de projet un argument pour refuser les ajouts en cours de route, ou pour les renvoyer au commanditaire avec leur coût.",
        },
        {
          type: "h3",
          texte: "La clôture, étape la plus souvent oubliée",
        },
        {
          type: "p",
          texte:
            "Un projet se termine quand ses livrables sont utilisés par l'exploitation, pas quand l'équipe projet estime avoir fini. La clôture comprend un transfert explicite : qui maintient désormais l'outil ou la nouvelle organisation, avec quelle documentation. Elle comprend aussi un bilan de trente minutes sur ce qui a fonctionné, pour que le projet suivant en profite.",
        },
      ],
    },

    {
      label: "Les méthodes",
      titre: "Méthode de gestion de projet : classique, agile ou hybride",
      blocs: [
        {
          type: "p",
          texte:
            "La question de la méthode occupe souvent trop de place au démarrage. La norme ISO 21502 le reconnaît elle-même : l'approche de réalisation peut être prédictive, incrémentale, itérative, adaptative ou hybride, y compris agile. Il n'y a pas de bonne méthode dans l'absolu ; il y a une méthode adaptée au degré d'incertitude du projet.",
        },
        {
          type: "tableau",
          entetes: ["Situation du projet", "Approche adaptée"],
          lignes: [
            [
              "Le résultat attendu est connu et stable (déménagement, mise en conformité, installation d'une machine)",
              "Approche classique, dite prédictive : planning détaillé, jalons, diagramme de Gantt.",
            ],
            [
              "Le besoin se précise en avançant (nouvel outil interne, nouveau service client)",
              "Approche agile : cycles courts, livraisons partielles testées par les utilisateurs, priorités revues à chaque cycle.",
            ],
            [
              "Une partie est certaine, une autre incertaine (ERP avec paramétrage métier, réorganisation d'un site)",
              "Approche hybride : jalons fixes pour le calendrier général, cycles courts pour les parties incertaines.",
            ],
            [
              "Petite équipe, nombreuses tâches à suivre au quotidien",
              "Tableau Kanban : à faire, en cours, en attente, terminé.",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Le Kanban, venu de l'atelier",
        },
        {
          type: "p",
          texte:
            "Le guide France Num rappelle que la méthode Kanban est née dans les années 1950 chez Toyota, sur les lignes de production automobile, avant de devenir un outil de suivi de tâches pour tous types de projets. Un tableau avec quelques colonnes permet de voir d'un coup d'œil où en est le projet et de repérer les goulots d'étranglement. Le même guide insiste sur un point : un outil de gestion de projet est un cadre de travail, il ne doit pas devenir un carcan. Un tableau blanc et des post-it suffisent pour commencer.",
        },
        {
          type: "h3",
          texte: "L'outil ne remplace pas l'organisation",
        },
        {
          type: "p",
          texte:
            "Un logiciel de gestion de projet rend visible ce qui existe déjà. Si personne n'arbitre, il affichera très clairement des tâches en retard. Choisissez l'outil après avoir fixé les rôles et le rythme de pilotage, jamais avant.",
        },
      ],
    },

    {
      label: "Le pilotage",
      titre: "Piloter un projet : indicateurs, réunions et arbitrages",
      blocs: [
        {
          type: "p",
          texte:
            "Piloter, ce n'est pas remplir un tableau d'avancement. C'est repérer tôt ce qui dérive et faire prendre les décisions qui s'imposent. Trois outils suffisent dans la plupart des projets de PME.",
        },
        {
          type: "h3",
          texte: "Un point court et fixe",
        },
        {
          type: "p",
          texte:
            "Une réunion d'équipe hebdomadaire de trente minutes, toujours le même jour, avec trois questions : qu'est-ce qui est fait, qu'est-ce qui bloque, quelle décision faut-il faire remonter. Et un comité de pilotage mensuel avec le commanditaire, consacré aux arbitrages et non au compte rendu. Quand l'entreprise dispose d'un [comité de direction](/infos-utiles/comite-de-direction/) qui fonctionne, le suivi des projets majeurs peut y trouver sa place.",
        },
        {
          type: "h3",
          texte: "Peu d'indicateurs, mais les bons",
        },
        {
          type: "p",
          texte:
            "Le délai, le budget consommé et l'avancement des livrables restent les trois repères de base. Le rapport du PMI note que les professionnels dont le sens des affaires est élevé mesurent la performance d'un projet sur davantage de critères, 9,1 en moyenne contre 6,3 pour les autres, dont la satisfaction des clients et l'alignement avec la stratégie. Pour une PME, une question suffit à compléter les trois repères : le projet produit-il déjà l'effet attendu sur l'activité ?",
        },
        {
          type: "h3",
          texte: "Arbitrer entre les projets",
        },
        {
          type: "p",
          texte:
            "Le pilotage le plus rentable se fait au-dessus des projets : décider lesquels mener maintenant, lesquels reporter et lesquels arrêter. Mener moins de projets à la fois, c'est concentrer les mêmes personnes sur moins de sujets, et donc en terminer davantage. Arrêter un projet qui ne sert plus sa raison d'être n'est pas un échec : c'est une [décision](/infos-utiles/prendre-une-decision/) qui libère des ressources.",
        },
      ],
    },

    {
      label: "Le facteur humain",
      titre: "Le facteur humain : conduire le changement que porte le projet",
      blocs: [
        {
          type: "p",
          texte:
            "Presque tout projet d'organisation modifie le travail de quelqu'un. Un nouvel outil change des habitudes ; une réorganisation change des périmètres, parfois des statuts. Un projet peut être livré dans les délais et échouer parce que personne ne s'en sert.",
        },
        {
          type: "h3",
          texte: "Associer les utilisateurs dès le cadrage",
        },
        {
          type: "p",
          texte:
            "Ceux qui vivront avec le résultat connaissent des contraintes que le comité de direction ignore. Les associer au cadrage, puis aux tests, évite de découvrir ces contraintes à la livraison. Cela transforme aussi le projet : il devient une réponse à leurs difficultés plutôt qu'une décision prise ailleurs.",
        },
        {
          type: "h3",
          texte: "Traiter les résistances comme des informations",
        },
        {
          type: "p",
          texte:
            "Une résistance signale souvent un vrai problème : une charge de travail sous-estimée, une compétence manquante, une perte de reconnaissance. L'écouter fait gagner du temps. Nous détaillons cette approche dans notre article sur l'[accompagnement au changement](/infos-utiles/accompagnement-au-changement/).",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Quand se faire accompagner sur un projet de transformation",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des projets d'une PME se mènent très bien en interne, à condition de respecter les règles décrites ici. Un appui extérieur se justifie dans trois cas : quand le projet touche l'organisation elle-même et que personne en interne n'est neutre ; quand l'entreprise n'a jamais mené de projet de cette taille ; ou quand plusieurs projets s'enlisent en même temps, signe que le problème est dans le système et non dans un projet.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, ce travail relève de l'étape Structurer : votre référent conduit les chantiers prioritaires retenus avec vous, sur six à douze mois, et appelle une autre expertise uniquement si le sujet le demande. Il commence en général par l'étape Cartographier, qui lit les flux, les rôles et les tensions tels qu'ils fonctionnent réellement. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord, et l'on ne touche pas à ce qui fonctionne.",
        },
        {
          type: "p",
          texte:
            "Avant de lancer un projet de plus, il est souvent utile de savoir pourquoi les précédents ont calé. Un [diagnostic d'entreprise](/diagnostic/) vous aide à situer où se trouve le blocage : dans la méthode, dans les rôles ou dans le nombre de chantiers ouverts.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que le management de projet ?",
      r: [
        "C'est l'ensemble des pratiques qui permettent de conduire un projet jusqu'à son objectif, dans le délai et avec les ressources prévues : cadrage, planification, réalisation, pilotage et clôture. Il couvre les outils, comme le planning ou le budget, mais aussi la dimension humaine : qui arbitre, comment mobiliser des personnes qui ont d'autres missions, comment traiter les désaccords. La norme ISO 21502 en donne les recommandations pour tout type d'organisme.",
      ],
    },
    {
      q: "Quelle différence entre gestion de projet et management de projet ?",
      r: [
        "Les deux termes sont souvent employés comme synonymes. Lorsqu'on les distingue, la gestion de projet désigne les techniques de planification et de suivi : tâches, délais, budget. Le management de projet y ajoute la conduite des personnes et des décisions : rôles, arbitrages, mobilisation de l'équipe, gestion du changement. Dans une PME, les difficultés viennent plus souvent de la seconde dimension que de la première.",
      ],
    },
    {
      q: "Quelles sont les étapes d'un projet ?",
      r: [
        "Un projet traverse cinq phases : le cadrage, qui fixe l'objectif, le périmètre, le budget et les rôles ; la planification, qui découpe le travail et fixe les jalons ; la réalisation ; le pilotage, qui suit l'avancement et fait prendre les décisions ; enfin la clôture, qui transfère le résultat à l'exploitation et tire le bilan. Les méthodes agiles répètent certaines phases en cycles courts, sans en supprimer aucune.",
      ],
    },
    {
      q: "Faut-il un chef de projet à plein temps dans une PME ?",
      r: [
        "Rarement. En revanche, le chef de projet a besoin d'un temps réservé, écrit et protégé, et d'un commanditaire disponible pour arbitrer. Nommer un responsable sans alléger ses autres missions revient à placer le projet en second derrière l'urgence du quotidien. Pour un projet ponctuel de grande ampleur, un appui extérieur peut compléter l'équipe interne le temps du projet.",
      ],
    },
    {
      q: "Méthode agile ou méthode classique : laquelle choisir ?",
      r: [
        "Tout dépend du degré d'incertitude. Si le résultat attendu est connu et stable, une approche classique avec planning détaillé et jalons convient. Si le besoin se précise en avançant, une approche agile, par cycles courts et livraisons testées, limite les mauvaises surprises. Beaucoup de projets de PME gagnent à combiner les deux : un calendrier général fixe, et des cycles courts pour les parties incertaines.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "ISO 21502:2020 - Management de projets, programmes et portefeuilles — Recommandations sur le management de projets",
      editeur: "ISO (Organisation internationale de normalisation)",
      url: "https://www.iso.org/fr/standard/74947.html",
    },
    {
      titre:
        "Norme NF ISO 21502 - Management de projets, programmes et portefeuilles - Recommandations sur le management de projets",
      editeur: "AFNOR",
      url: "https://norminfo.afnor.org/norme/nf-iso-21502/management-de-projets-programmes-et-portefeuilles-recommandations-sur-le-management-de-projets/127604",
    },
    {
      titre: "Gestion de projet pour les TPE PME : les bases pour bien se lancer",
      editeur: "France Num (dossier rédigé par Bubble Plan, Activateur France Num)",
      url: "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/gestion-de-projet",
    },
    {
      titre: "Pulse of the Profession® 2025",
      editeur: "Project Management Institute (PMI)",
      url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse_of_the_profession_2025-1.pdf",
    },
  ],

  auteur: "yohan-castelar",
  datePublication: "2027-04-05",
  accent: "production",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: true,
};
