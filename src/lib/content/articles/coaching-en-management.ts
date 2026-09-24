import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1 (accompagnement du dirigeant).
 * Requête : « coaching en management » (grappe « coaching management », 590/mois, KD 18-19).
 *
 * Anti-cannibalisation : « coaching dirigeant » appartient à /transformation-dirigeant/.
 * Cet article parle des MANAGERS intermédiaires et du leadership ; pour le dirigeant
 * lui-même, il renvoie au pilier.
 */
export const article: Article = {
  slug: "coaching-en-management",

  motCle: "coaching en management (grappe « coaching management », 590/mois, KD 18-19)",
  motsClesSecondaires: ["coaching leadership", "coaching manager", "coaching de managers"],

  // 39 / 42
  metaTitle: "Coaching en management : guide pour PME",
  // 148 / 150
  metaDescription:
    "Coaching en management : quand y recourir pour vos managers, en quoi il diffère d'une formation, comment le financer via l'OPCO et en mesurer l'effet.",

  h1: "Coaching en management : faire grandir vos managers intermédiaires",

  chapo:
    "Le coaching en management est un accompagnement individuel ou collectif qui aide un manager à tenir son rôle dans sa situation réelle : déléguer, arbitrer, poser un cadre, dire un désaccord. Il ne transmet pas un programme, il travaille des cas vécus, sur quelques mois, avec des objectifs fixés au départ. Pour un dirigeant de PME, il se justifie quand un bon technicien a été promu sans y être préparé, quand les départs se concentrent dans une équipe, ou quand les tensions remontent toutes à la direction. Il se prépare avec vous, se finance parfois en partie, et se mesure.",

  essentiel: {
    reponse:
      "Le coaching en management accompagne un manager, ou un groupe de managers, sur ses situations de travail réelles pour faire évoluer sa pratique : délégation, décision, feedback, gestion des tensions. Il diffère d'une formation au management, qui transmet un contenu commun. Dans une PME, il se justifie surtout après la promotion d'un expert technique, en cas de départs répétés dans une équipe ou de conflits qui remontent au dirigeant. Chez Un Seul Souffle, un conseiller référent unique conduit l'accompagnement, sur un périmètre arrêté avec vous par écrit.",
    points: [
      "Pour qui : managers intermédiaires et encadrants de proximité de PME et d'ETI de 10 à 250 salariés",
      "Différence clé : la formation transmet des méthodes, le coaching travaille la pratique de chacun sur ses cas réels",
      "Déclencheurs typiques : expert promu manager, turnover concentré, tensions qui remontent au dirigeant",
      "Financement : possible via l'OPCO pour les entreprises de moins de 50 salariés, si l'accompagnement est construit comme une action de formation",
      "Mesure : objectifs écrits au départ, indicateurs d'équipe suivis avant, pendant et après",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Le coaching en management, de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le coaching en management s'adresse aux personnes qui encadrent une équipe sans diriger l'entreprise : responsables d'atelier, chefs d'équipe, responsables de service, directeurs de site. Dans une PME, ce sont souvent eux qui décident si une consigne de la direction se transforme en action ou reste lettre morte. **Un manager intermédiaire mal outillé ne bloque pas seulement son équipe, il fait remonter chaque arbitrage au dirigeant.**",
        },
        {
          type: "p",
          texte:
            "Concrètement, un coach travaille avec le manager sur ce qui lui arrive cette semaine : une réunion qui a dérapé, un collaborateur qui ne tient pas ses délais, une décision qu'il n'ose pas prendre sans validation. Il ne donne pas la réponse à sa place. Il l'aide à comprendre ce qui se joue, à choisir une manière d'agir, puis à revenir sur ce qu'elle a produit.",
        },
        {
          type: "h3",
          texte: "Coaching de managers ou coaching du dirigeant : deux sujets distincts",
        },
        {
          type: "p",
          texte:
            "Le dirigeant et ses managers ne butent pas sur les mêmes difficultés. Le premier porte la charge de décision, l'isolement et le cap de l'entreprise. Les seconds sont pris entre les demandes de la direction et la réalité de leur équipe. Si c'est votre propre manière de décider et de déléguer qui pose question, le sujet relève du [coaching dirigeant](/transformation-dirigeant/), que nous traitons dans un parcours dédié. Cet article parle de vos managers.",
        },
        {
          type: "h3",
          texte: "Individuel ou collectif",
        },
        {
          type: "p",
          texte:
            "Le coaching de managers peut être individuel, en séances confidentielles, ou collectif, quand plusieurs managers d'un même niveau travaillent ensemble sur leurs situations. Le format collectif a un avantage que l'individuel n'a pas : il installe un langage commun et des règles partagées entre managers qui, ensuite, doivent coopérer. Quand le problème tient surtout au fonctionnement d'une équipe constituée, c'est plutôt le [coaching d'équipe](/infos-utiles/coaching-d-equipe/) qu'il faut regarder.",
        },
      ],
    },

    {
      label: "Comparatif",
      titre: "Coaching manager ou formation management : ce qui les sépare",
      blocs: [
        {
          type: "p",
          texte:
            "La confusion est fréquente, et elle coûte cher : on envoie un manager en formation pour régler un problème de posture, ou l'on paie un coaching pour transmettre des bases qu'un stage aurait données plus vite. Les deux ne répondent pas au même besoin.",
        },
        {
          type: "tableau",
          entetes: ["Formation au management", "Coaching en management"],
          lignes: [
            [
              "Transmet un contenu commun : outils, méthodes, cadre légal",
              "Part des situations réelles du manager, dans son entreprise",
            ],
            [
              "Programme défini à l'avance, identique pour tous les participants",
              "Objectifs fixés au départ avec le manager et sa hiérarchie",
            ],
            [
              "Utile quand il manque des connaissances : conduire un entretien annuel, animer une réunion",
              "Utile quand le manager sait quoi faire mais n'y parvient pas dans son contexte",
            ],
            [
              "Durée courte, souvent quelques jours",
              "Plusieurs séances espacées sur quelques mois, pour laisser le temps d'essayer",
            ],
            [
              "Effet mesuré en fin de session, par une évaluation des acquis",
              "Effet mesuré sur le terrain : décisions, délégation, climat de l'équipe",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Les deux se combinent bien. Un manager fraîchement promu gagne à suivre une formation pour acquérir les bases, puis un coaching pour les appliquer dans une équipe qu'il connaît, parfois composée de ses anciens collègues. **La formation dit comment faire ; le coaching aide à le faire ici, avec ces personnes-là.**",
        },
      ],
    },

    {
      label: "Signaux",
      titre: "Les signaux qui indiquent qu'un manager a besoin d'un coaching",
      blocs: [
        {
          type: "p",
          texte:
            "Le besoin se voit rarement dans l'entretien annuel. Il apparaît dans la vie de l'équipe, et c'est souvent le dirigeant qui le perçoit en premier, parce que les problèmes finissent sur son bureau.",
        },
        {
          type: "h3",
          texte: "Un expert technique promu manager",
        },
        {
          type: "p",
          texte:
            "C'est le cas le plus courant en PME : le meilleur technicien, le meilleur commercial ou le meilleur chef de chantier devient responsable de son équipe. Il a été reconnu pour ce qu'il savait faire, et on lui demande désormais de faire faire. Beaucoup continuent à faire eux-mêmes, reprennent le travail de leurs collaborateurs et s'épuisent. Le symptôme est facile à repérer : le nouveau manager est surchargé, et son équipe attend.",
        },
        {
          type: "h3",
          texte: "Des départs qui se concentrent dans une même équipe",
        },
        {
          type: "p",
          texte:
            "Quand les démissions, les demandes de mutation ou les arrêts se répètent sous le même responsable, le problème dépasse rarement les personnes qui partent. Avant de conclure à une erreur de recrutement, regardez la manière dont l'équipe est encadrée : clarté des attentes, reconnaissance, répartition de la charge. Le coaching permet d'ouvrir ce sujet avec le manager sans en faire un procès.",
        },
        {
          type: "h3",
          texte: "Des tensions qui remontent toutes à la direction",
        },
        {
          type: "p",
          texte:
            "Deux managers qui ne se parlent plus, un conflit entre la production et le commercial, des arbitrages que chacun vient chercher auprès de vous. Ce signal-là indique souvent que les managers ne se sentent pas légitimes pour trancher entre eux. Le coaching travaille cette légitimité ; le travail collectif sur les règles de coopération, que nous décrivons dans notre article sur l'[intelligence collective en entreprise](/infos-utiles/intelligence-collective-en-entreprise/), traite l'autre moitié du problème.",
        },
        {
          type: "liste",
          items: [
            "Le manager travaille beaucoup plus que son équipe et refuse de déléguer",
            "Les décisions de son périmètre vous sont systématiquement soumises",
            "Les réunions d'équipe se font sans débat, puis les désaccords se règlent en aparté",
            "Un changement d'organisation est prévu et le manager devra le porter devant ses équipes",
          ],
        },
      ],
    },

    {
      label: "Contenu",
      titre: "Coaching leadership : ce que l'on travaille réellement",
      blocs: [
        {
          type: "p",
          texte:
            "Le terme « coaching leadership » laisse imaginer un travail sur le charisme. En PME, il porte sur des gestes de management très concrets, que le manager répète chaque semaine et qui déterminent la façon dont l'équipe fonctionne.",
        },
        {
          type: "h3",
          texte: "Déléguer sans reprendre",
        },
        {
          type: "p",
          texte:
            "Déléguer ne consiste pas à confier une tâche, mais à confier une décision avec son droit à l'erreur. Le coaching aide le manager à préciser ce qu'il délègue, jusqu'où, et ce qu'il fait quand le résultat ne lui convient pas. C'est souvent là que tout se joue : un manager qui reprend chaque dossier imparfait apprend à son équipe à ne plus rien terminer.",
        },
        {
          type: "h3",
          texte: "Dire les choses : feedback, recadrage, désaccord",
        },
        {
          type: "p",
          texte:
            "Beaucoup de managers intermédiaires évitent la conversation difficile avec un collaborateur, puis finissent par la faire trop tard et trop fort. Le coaching prépare ces échanges à partir de cas réels, et revient ensuite sur ce qui s'est passé. Il travaille aussi la capacité à exprimer un désaccord vers le haut, ce qui concerne directement le dirigeant.",
        },
        {
          type: "h3",
          texte: "Réguler la charge et donner du sens",
        },
        {
          type: "p",
          texte:
            "Le manager de proximité est le premier à voir la surcharge ou le découragement d'un collaborateur. L'INRS consacre d'ailleurs aux managers une série de conseils pour prévenir les risques psychosociaux, parmi lesquels évaluer la charge de travail, donner de l'autonomie, témoigner de la reconnaissance, donner du sens au travail et communiquer sur les changements ([INRS, Managers : agissez pour prévenir les risques psychosociaux](https://www.inrs.fr/publications/essentiels/risques-psychosociaux-managers.html)). Ces gestes s'apprennent mieux sur des situations vécues que dans une salle de formation.",
        },
      ],
    },

    {
      label: "Déroulé",
      titre: "Comment se déroule un coaching de managers",
      blocs: [
        {
          type: "p",
          texte:
            "Un coaching sérieux a un début, un milieu et une fin. Voici le déroulé type d'un accompagnement de managers, que l'on adapte ensuite au nombre de personnes et à la situation.",
        },
        {
          type: "liste",
          items: [
            "**Cadrage avec le dirigeant.** Pourquoi ce coaching, pour qui, avec quel résultat attendu. C'est ici que se fixe le périmètre, par écrit.",
            "**Rencontre tripartite.** Le manager, son responsable hiérarchique et le coach s'accordent sur deux ou trois objectifs observables. Le manager doit y adhérer ; un coaching imposé sans explication démarre mal.",
            "**Séances de travail.** Espacées de quelques semaines, pour que le manager ait le temps d'essayer entre deux rendez-vous. Le contenu reste confidentiel.",
            "**Point d'étape.** À mi-parcours, on vérifie que les objectifs tiennent toujours et on les ajuste si la situation a changé.",
            "**Bilan tripartite.** Ce qui a bougé, ce qui reste à travailler, et la manière dont le manager continuera seul.",
          ],
        },
        {
          type: "h3",
          texte: "Confidentialité et rôle du dirigeant",
        },
        {
          type: "p",
          texte:
            "Le dirigeant finance le coaching et fixe le cadre, mais il n'a pas accès au contenu des séances. Ce qui remonte vers lui se limite aux objectifs, à l'avancement et au bilan, dans des termes convenus avec le manager. Cette règle n'est pas une formalité : sans elle, le manager ne parlera jamais de ce qui le met en difficulté, y compris dans sa relation avec vous.",
        },
        {
          type: "h3",
          texte: "Comment nous l'abordons",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, le travail sur l'organisation, la coopération et le leadership est porté par [Muriel Saffroy](/muriel-saffroy/), associée fondatrice. Un conseiller référent reste votre interlocuteur unique du début à la fin, et le périmètre arrêté avec vous ne s'élargit pas sans votre accord. Pour les managers, nous utilisons notamment des cercles d'avancée : des groupes de 6 à 8 personnes, en sessions collectives de trois heures sur trois mois, où chacun apporte ses situations réelles. Si la question porte sur la charge et l'énergie des équipes plus que sur les rôles, une autre expertise du cabinet intervient, uniquement si le sujet l'exige.",
        },
      ],
    },

    {
      label: "Financement",
      titre: "Financer un coaching en management : OPCO et plan de développement des compétences",
      blocs: [
        {
          type: "p",
          texte:
            "C'est la question que tout dirigeant de PME pose, et la réponse demande de la précision. Le financement public passe par les règles de la formation professionnelle, et le coaching n'y entre pas automatiquement.",
        },
        {
          type: "h3",
          texte: "Le plan de développement des compétences",
        },
        {
          type: "p",
          texte:
            "Le plan de développement des compétences est, selon Service Public, « le cadre qui permet à un employeur de définir sa politique de formation », et les formations qui y figurent sont à l'initiative de l'employeur ([Service Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F11267)). La même fiche précise que les frais de formation sont à la charge de l'employeur. C'est donc d'abord votre budget, que l'OPCO peut venir compléter.",
        },
        {
          type: "h3",
          texte: "Ce que l'OPCO peut prendre en charge",
        },
        {
          type: "p",
          texte:
            "Pour les entreprises de moins de 50 salariés, le Code du travail prévoit que l'opérateur de compétences finance notamment « les coûts des actions de formation du plan de développement des compétences, de la rémunération du salarié en formation et des frais annexes » ([article L6332-17](https://code.travail.gouv.fr/code-du-travail/l6332-17)). Au-delà de ce seuil, la prise en charge par l'OPCO n'est pas prévue par ce texte : le plan relève alors du budget de l'entreprise. Il existe 11 OPCO, chacun rattaché à des branches professionnelles ; France Num indique que vous retrouvez le vôtre sur le site de France compétences à partir de votre SIRET ([France Num](https://www.francenum.gouv.fr/formations/financer-une-formation/comment-financer-sa-formation-au-numerique-son-opco)).",
        },
        {
          type: "h3",
          texte: "Les conditions pour qu'un coaching soit finançable",
        },
        {
          type: "p",
          texte:
            "Le Code du travail liste quatre catégories d'actions concourant au développement des compétences : les actions de formation, les bilans de compétences, la validation des acquis de l'expérience et l'apprentissage ([article L6313-1](https://code.travail.gouv.fr/code-du-travail/l6313-1)). Le coaching n'y figure pas en tant que tel. Pour être pris en charge, il doit donc être construit comme une action de formation, c'est-à-dire « un parcours pédagogique permettant d'atteindre un objectif professionnel », qui peut être réalisé à distance ou en situation de travail ([article L6313-2](https://code.travail.gouv.fr/code-du-travail/l6313-2)).",
        },
        {
          type: "liste",
          items: [
            "Un objectif professionnel écrit et un programme, pas seulement un nombre de séances",
            "Un prestataire certifié : le Code du travail impose une certification aux prestataires financés par un OPCO ([article L6316-1](https://code.travail.gouv.fr/code-du-travail/l6316-1))",
            "Une demande déposée auprès de votre OPCO selon ses règles et ses priorités, qui varient d'un opérateur à l'autre",
            "La subrogation de paiement à demander au montage du dossier si vous ne voulez pas avancer le coût, sous réserve que l'organisme l'accepte (France Num)",
          ],
        },
        {
          type: "encadre",
          titre: "Vérifiez avant de vous engager",
          texte:
            "Les niveaux de prise en charge et les actions éligibles sont fixés par chaque OPCO. Avant de signer, demandez au prestataire s'il est certifié, et à votre OPCO si l'accompagnement envisagé entre dans ses critères. Un coaching très individualisé, sans programme ni objectif pédagogique écrit, a peu de chances d'être financé.",
        },
      ],
    },

    {
      label: "Mesure",
      titre: "Mesurer l'effet d'un coaching de managers",
      blocs: [
        {
          type: "p",
          texte:
            "Un coaching qui ne se mesure pas se juge à l'impression, et l'impression est rarement fiable. La mesure commence avant la première séance : sans point de départ daté, aucun progrès ne peut être démontré.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous observez", "Comment le suivre"],
          lignes: [
            [
              "Les décisions du périmètre du manager ne vous remontent plus",
              "Comptez les sujets qu'il vous soumet sur un mois, au début puis à la fin",
            ],
            [
              "La délégation progresse",
              "Listez ce que le manager faisait lui-même au départ et ce qui est désormais confié",
            ],
            [
              "L'équipe reste",
              "Suivez départs, demandes de mobilité et absences dans l'équipe, sur une période comparable",
            ],
            [
              "Les tensions se traitent au bon niveau",
              "Notez les conflits qui arrivent jusqu'à vous et ceux qui se règlent entre managers",
            ],
            [
              "Les objectifs du coaching sont atteints",
              "Reprenez les objectifs écrits de la rencontre tripartite et évaluez-les au bilan, à trois voix",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Méfiez-vous des indicateurs trop larges, comme le chiffre d'affaires de l'entreprise : trop de facteurs l'influencent pour l'attribuer à un coaching. **Mieux vaut trois indicateurs modestes et suivis que dix indicateurs ambitieux abandonnés au bout d'un mois.** Et gardez en tête qu'une partie de l'effet apparaît après la fin du coaching, quand le manager continue seul.",
        },
      ],
    },

    {
      label: "Choisir",
      titre: "Coach indépendant ou cabinet : choisir son accompagnement en management",
      blocs: [
        {
          type: "p",
          texte:
            "Le titre de coach n'est pas une profession réglementée. Le choix repose donc sur vos propres questions, posées avant de signer. Quatre suffisent pour écarter la plupart des mauvais choix.",
        },
        {
          type: "liste",
          items: [
            "Le coach connaît-il le fonctionnement d'une PME, où le manager fait souvent aussi le travail opérationnel ?",
            "Propose-t-il des objectifs écrits et une rencontre tripartite, ou seulement un forfait de séances ?",
            "Sait-il dire quand le problème ne relève pas du manager mais de l'organisation autour de lui ?",
            "Le périmètre, la durée et le coût figurent-ils dans une proposition écrite ?",
          ],
        },
        {
          type: "p",
          texte:
            "La troisième question est la plus importante. Un manager en difficulté est parfois le symptôme d'un rôle mal défini, d'objectifs contradictoires ou d'une organisation qui a grandi plus vite que ses règles. Coacher la personne sans regarder le système revient alors à lui demander de compenser seule un défaut de structure. Si vous hésitez entre un coach et un accompagnement plus large, notre article sur le [consultant en management](/infos-utiles/consultant-en-management/) détaille ce qui distingue les deux approches.",
        },
        {
          type: "p",
          texte:
            "Avant de choisir, vous pouvez aussi faire le point sur votre organisation. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer le blocage : chez vos managers, dans la structure, ou chez vous.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre coaching en management et formation au management ?",
      r: [
        "La formation transmet un contenu commun à un groupe : outils, méthodes, cadre légal. Le coaching part des situations réelles de chaque manager et l'aide à changer sa pratique dans son contexte. La formation convient quand il manque des connaissances ; le coaching, quand le manager sait quoi faire mais n'y parvient pas avec son équipe. Les deux se combinent souvent, la formation d'abord, le coaching ensuite.",
      ],
    },
    {
      q: "Combien de temps dure un coaching de managers ?",
      r: [
        "Il se compte en mois plutôt qu'en jours, parce que le manager doit avoir le temps d'essayer entre deux séances. Chez Un Seul Souffle, nos accompagnements durent de 3 à 12 mois selon leur profondeur, et nos cercles d'avancée collectifs se déroulent en sessions de trois heures sur trois mois. La durée exacte est fixée dans la proposition écrite, après le premier échange.",
      ],
    },
    {
      q: "Un coaching en management peut-il être financé par l'OPCO ?",
      r: [
        "Oui, sous conditions. Pour les entreprises de moins de 50 salariés, l'OPCO finance les actions de formation du plan de développement des compétences. Le coaching n'étant pas une catégorie à part dans le Code du travail, il doit être construit comme une action de formation, avec un objectif professionnel et un parcours pédagogique, et réalisé par un prestataire certifié. Vérifiez les critères de votre OPCO avant de vous engager.",
      ],
    },
    {
      q: "Le dirigeant a-t-il accès au contenu des séances de coaching de ses managers ?",
      r: [
        "Non. Le dirigeant fixe le cadre et les objectifs lors de la rencontre tripartite, et il participe au bilan. Le contenu des séances reste confidentiel entre le manager et le coach. Cette règle conditionne l'efficacité du coaching : un manager qui craint que ses propos remontent ne parlera pas de ce qui le met réellement en difficulté.",
      ],
    },
    {
      q: "Allez-vous revoir toute notre organisation si je vous confie le coaching de mes managers ?",
      r: [
        "Non. Un conseiller référent prend en charge votre demande et reste votre interlocuteur unique. Le périmètre est arrêté avec vous, écrit dans la proposition, et il ne s'élargit pas sans votre accord. Si le coaching met au jour un problème d'organisation, nous vous le disons ; c'est ensuite à vous de décider s'il faut le traiter, et quand.",
      ],
    },
  ],

  sources: [
    {
      titre: "Plan de développement des compétences (PDC) pour un salarié du secteur privé",
      editeur: "Service Public (DILA)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11267",
    },
    {
      titre: "L6313-1 - Code du travail numérique",
      editeur: "Ministère du Travail, Code du travail numérique",
      url: "https://code.travail.gouv.fr/code-du-travail/l6313-1",
    },
    {
      titre: "L6313-2 - Code du travail numérique",
      editeur: "Ministère du Travail, Code du travail numérique",
      url: "https://code.travail.gouv.fr/code-du-travail/l6313-2",
    },
    {
      titre: "L6332-17 - Code du travail numérique",
      editeur: "Ministère du Travail, Code du travail numérique",
      url: "https://code.travail.gouv.fr/code-du-travail/l6332-17",
    },
    {
      titre: "L6316-1 - Code du travail numérique",
      editeur: "Ministère du Travail, Code du travail numérique",
      url: "https://code.travail.gouv.fr/code-du-travail/l6316-1",
    },
    {
      titre: "Comment financer sa formation au numérique via son OPCO",
      editeur: "France Num",
      url: "https://www.francenum.gouv.fr/formations/financer-une-formation/comment-financer-sa-formation-au-numerique-son-opco",
    },
    {
      titre: "Managers : agissez pour prévenir les risques psychosociaux",
      editeur: "INRS",
      url: "https://www.inrs.fr/publications/essentiels/risques-psychosociaux-managers.html",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-09-23",
  accent: "qvt",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: true,
};
