import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, organisation et coopération. Signé Muriel Saffroy.
 * Requête : « structure matricielle » (590/mois, KD 9). Secondaires :
 * « définition organisationnel » (590), « organisations du travail » (590).
 *
 * L'intention « conseil en organisation » appartient au pilier
 * /transformation-entreprise/ : l'article explique la forme, ses risques et ses
 * alternatives, puis renvoie vers lui.
 *
 * Points sensibles : les travaux cités de Davis et Lawrence (HBR, 1978) et de
 * Bartlett et Ghoshal (HBR, 1990) sont derrière un paywall ; seuls leurs titres
 * et résumés publics ont été lus, le texte ne leur prête rien de plus. Les
 * chiffres sur les formes d'organisation du travail viennent de France Stratégie
 * (2020), les facteurs de risque de l'INRS, le rôle du manager de l'Anact (2015).
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "structure-matricielle",

  motCle: "structure matricielle (590/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "définition organisationnel (590/mois)",
    "organisations du travail (590/mois)",
    "organisation matricielle",
    "double hiérarchie",
  ],

  // 41 / 42
  metaTitle: "Structure matricielle : définition, pièges",
  // 146 / 150
  metaDescription:
    "Structure matricielle : définition, exemple en PME, avantages, pièges de la double hiérarchie, règles pour la faire tenir et alternatives légères.",

  h1: "Structure matricielle : définition, limites, et comment la faire tenir en PME",

  chapo:
    "Une structure matricielle rattache chaque personne à deux responsables à la fois : un chef de métier, qui répond du savoir-faire, et un chef de projet, de site ou de client, qui répond du résultat. Elle sert les entreprises qui doivent tenir deux exigences à la fois, comme l'excellence technique et les délais client. Son prix est connu depuis cinquante ans : ordres contradictoires, arbitrages qui remontent au dirigeant, managers pris en étau. Dans une PME, elle ne fonctionne que si trois choses sont écrites : qui fixe quoi, qui tranche en cas de conflit, et comment la personne est évaluée. Sinon, une forme plus légère fait souvent mieux.",

  essentiel: {
    reponse:
      "La structure matricielle est une forme d'organisation dans laquelle chaque collaborateur dépend de deux lignes d'autorité : une ligne fonctionnelle (le métier : production, bureau d'études, qualité) et une ligne opérationnelle (un projet, un produit, un site ou un client). Elle combine l'expertise des fonctions et la réactivité des projets. Son principal risque est la double commande : des consignes contradictoires et des arbitrages que personne n'a le droit de rendre. Elle convient quand plusieurs projets partagent des compétences rares ; elle exige des règles de décision explicites.",
    points: [
      "Deux responsables par personne : l'un fixe le quoi et le quand, l'autre le comment et le qui",
      "Utile quand des projets ou des clients se partagent des compétences que l'entreprise ne peut pas dupliquer",
      "Risque principal : les instructions contradictoires, que l'INRS range parmi les facteurs de risques psychosociaux",
      "Condition de réussite : une règle d'arbitrage écrite et une instance qui tranche sans remonter au dirigeant",
      "Alternatives plus légères : groupe projet temporaire, coordinateur sans autorité hiérarchique, matrice faible",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Structure matricielle : définition simple, et ce qu'est une structure organisationnelle",
      blocs: [
        {
          type: "p",
          texte:
            "Une structure organisationnelle, c'est la façon dont une entreprise répartit le travail entre des unités et fixe les liens d'autorité entre elles : qui rend compte à qui, qui fixe les objectifs de qui, qui arbitre. La structure matricielle est l'une de ces formes, avec une particularité qui la distingue de toutes les autres : **chaque personne a deux responsables, et aucun des deux n'a le dernier mot sur tout.**",
        },
        {
          type: "h3",
          texte: "Deux axes qui se croisent",
        },
        {
          type: "p",
          texte:
            "Le premier axe est le métier. Le bureau d'études, l'atelier, la qualité, les achats : chaque fonction garde son responsable, qui recrute, forme, fixe les méthodes et garantit le niveau technique. Le second axe est le résultat à livrer : un projet, une gamme de produits, un site, un grand compte. Son responsable fixe les objectifs, le calendrier et le budget. Le collaborateur, au croisement, reçoit des demandes des deux côtés.",
        },
        {
          type: "h3",
          texte: "Un exemple dans une PME industrielle",
        },
        {
          type: "p",
          texte:
            "Prenons une entreprise de fabrication de 120 salariés qui travaille à l'affaire. Un technicien méthodes dépend du responsable industrialisation, qui l'a recruté et valide ses gammes. Mais il passe l'essentiel de sa semaine sur trois affaires, chacune pilotée par un chargé d'affaires qui tient le délai promis au client. Lundi, le chargé d'affaires A veut ses gammes pour jeudi. Le chargé d'affaires B aussi. Le responsable industrialisation, lui, veut que le technicien finisse la mise à jour des standards. Trois demandes légitimes, une seule semaine.",
        },
        {
          type: "p",
          texte:
            "Le chercheur Jay Galbraith, dans un article fondateur publié en 1971 dans la revue Business Horizons, [Matrix organization designs](https://jaygalbraith.com/wp-content/uploads/2024/03/galbraithmatrix1971.pdf), présente la matrice comme le point extrême d'une gamme de solutions pour faire travailler ensemble des fonctions et des projets. Entre l'organisation par fonctions pure et la double autorité complète, il décrit des étapes intermédiaires : groupes de travail temporaires, équipes transverses, rôles de coordination. Nous y reviendrons, car c'est souvent là que se trouve la bonne réponse pour une PME. Choisir le bon niveau d'intégration pour votre entreprise est d'ailleurs le cœur du [conseil en organisation](/transformation-entreprise/) : partir du fonctionnement réel avant de toucher au dessin.",
        },
      ],
    },

    {
      label: "Repères",
      titre: "Structure et organisations du travail : les formes à comparer",
      blocs: [
        {
          type: "p",
          texte:
            "Une structure matricielle se comprend mieux comparée aux autres. Le tableau ci-dessous résume les quatre formes que l'on rencontre le plus souvent en PME et en ETI, et ce que chacune privilégie. Pour les représenter concrètement, notre article sur [comment faire un organigramme](/infos-utiles/organigramme-entreprise/) détaille les conventions de dessin.",
        },
        {
          type: "tableau",
          entetes: ["Structure", "Ce qu'elle privilégie, et ce qu'elle sacrifie"],
          lignes: [
            [
              "Hiérarchique ou fonctionnelle",
              "Une seule ligne d'autorité par métier. Clarté et expertise, mais les projets transverses avancent au rythme du plus lent des services.",
            ],
            [
              "Divisionnelle (par produit, site ou marché)",
              "Chaque division a ses propres moyens. Réactivité face au client, mais compétences dupliquées et savoir-faire dispersé.",
            ],
            [
              "Par projets",
              "Des équipes dédiées à une affaire, dissoutes à la fin. Focalisation sur le résultat, mais expertise qui s'érode entre deux projets.",
            ],
            [
              "Matricielle",
              "Deux lignes d'autorité croisées. Compétences partagées et résultat suivi, au prix d'une négociation permanente.",
            ],
          ],
        },
        {
          type: "h3",
          texte: "La structure n'est pas l'organisation du travail",
        },
        {
          type: "p",
          texte:
            "Les deux notions sont souvent confondues. La structure dit qui rend compte à qui. L'organisation du travail dit comment le travail se fait au quotidien : autonomie, répétitivité, apprentissage, contraintes de rythme. Une note de France Stratégie, [Les organisations du travail apprenantes : enjeux et défis pour la France](https://www.strategie-plan.gouv.fr/publications/organisations-travail-apprenantes-enjeux-defis-france) (2020), distingue quatre organisations du travail : apprenante, lean production, taylorienne et structure simple. Dans le secteur privé, 43 % des salariés français travaillent dans une organisation apprenante (40 % en moyenne européenne), 32 % en lean production (27 %), 12 % en organisation taylorienne (15 %) et 13 % en structure simple (18 %).",
        },
        {
          type: "p",
          texte:
            "Pourquoi cela compte pour une matrice ? Parce qu'une double hiérarchie posée sur une organisation du travail où les salariés ont peu de marges de manœuvre produit surtout de la confusion. **La matrice suppose des personnes capables d'arbitrer entre deux demandes, donc une autonomie réelle.**",
        },
      ],
    },

    {
      label: "Pourquoi",
      titre: "Pourquoi une entreprise passe à une organisation matricielle",
      blocs: [
        {
          type: "p",
          texte:
            "Une PME arrive à la matrice par nécessité, souvent sans l'avoir décidé : l'organigramme reste hiérarchique, mais le fonctionnement réel est déjà matriciel.",
        },
        {
          type: "h3",
          texte: "Les situations qui y conduisent",
        },
        {
          type: "liste",
          items: [
            "**Le travail à l'affaire ou au projet** : chaque commande mobilise plusieurs métiers, et chaque métier travaille sur plusieurs commandes en parallèle",
            "**Des compétences rares** : un seul automaticien, deux spécialistes de la réglementation, que tous les projets se disputent",
            "**Le multisite** : un responsable qualité groupe et des directeurs de site qui donnent chacun des consignes aux mêmes équipes",
            "**Les grands comptes** : un responsable client qui parle au nom du client et des services qui répondent de la qualité de leur métier",
          ],
        },
        {
          type: "h3",
          texte: "Les critères qui la justifient",
        },
        {
          type: "p",
          texte:
            "Galbraith relie le choix de la forme à quelques variables : la diversité des compétences à coordonner, le rythme du changement, la taille, et le degré d'interdépendance entre les unités. Traduit pour un dirigeant : si vos projets sont peu nombreux, stables et peu dépendants les uns des autres, la matrice complète est probablement disproportionnée.",
        },
        {
          type: "p",
          texte:
            "Christopher Bartlett et Sumantra Ghoshal ont résumé la leçon dans le titre même de leur article de 1990 dans la Harvard Business Review : [Matrix Management: Not a Structure, a Frame of Mind](https://hbr.org/1990/07/matrix-management-not-a-structure-a-frame-of-mind). La matrice est moins un schéma qu'une manière de faire coopérer des responsables aux intérêts différents.",
        },
      ],
    },

    {
      label: "Avantages",
      titre: "Les avantages réels de la structure matricielle",
      blocs: [
        {
          type: "p",
          texte:
            "Bien tenue, la matrice apporte des bénéfices qu'aucune autre forme ne réunit.",
        },
        {
          type: "liste",
          items: [
            "**Des compétences partagées au lieu d'être dupliquées** : l'automaticien sert trois projets sans que vous ayez à en recruter trois",
            "**Un savoir-faire qui reste vivant** : chaque spécialiste garde un responsable de métier qui le forme et garantit les standards, même quand il passe d'un projet à l'autre",
            "**Un résultat suivi par quelqu'un** : chaque projet ou client a un responsable identifié, qui ne se contente pas d'additionner les contributions des services",
            "**Une information qui circule en travers** : les conflits entre délais et qualité apparaissent tôt, au lieu d'éclater à la livraison",
            "**Une souplesse d'affectation** : on déplace des personnes d'un projet à l'autre sans réorganiser à chaque fois",
          ],
        },
      ],
    },

    {
      label: "Les limites",
      titre: "Double hiérarchie : les inconvénients d'une structure matricielle",
      exergue:
        "Une matrice sans règle d'arbitrage ne supprime pas les conflits : elle les envoie tous sur le bureau du dirigeant.",
      blocs: [
        {
          type: "p",
          texte:
            "Les difficultés de la matrice sont documentées depuis longtemps. Dès 1978, Stanley Davis et Paul Lawrence consacraient un article entier de la Harvard Business Review aux [problèmes des organisations matricielles](https://hbr.org/1978/05/problems-of-matrix-organizations), qu'ils qualifiaient de « pathologies ». Dans une PME, on les retrouve sous trois formes.",
        },
        {
          type: "h3",
          texte: "Des consignes contradictoires, et une santé qui paie",
        },
        {
          type: "p",
          texte:
            "Le technicien de notre exemple reçoit deux priorités incompatibles. S'il choisit, il déçoit un responsable. S'il ne choisit pas, il fait les deux à moitié. Ce n'est pas qu'un problème d'efficacité. L'INRS, dans sa page [Prévenir les risques psychosociaux (RPS) : facteurs de risque](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html), range les instructions contradictoires et les objectifs irréalistes ou flous parmi les facteurs de risques psychosociaux liés à l'intensité du travail. Il précise qu'ils sont d'autant plus toxiques qu'ils durent ou se cumulent. Une matrice mal réglée en fabrique tous les jours.",
        },
        {
          type: "h3",
          texte: "Des arbitrages qui remontent tous",
        },
        {
          type: "p",
          texte:
            "Quand le chef de projet et le chef de métier ne s'accordent pas, il faut quelqu'un pour trancher. Si rien n'est prévu, ce quelqu'un est le dirigeant. La matrice, censée décentraliser, recentralise alors toutes les décisions difficiles. C'est l'un des symptômes les plus fréquents d'une organisation qui dépend encore entièrement de son dirigeant, et notre article sur [prendre une décision](/infos-utiles/prendre-une-decision/) montre ce que coûte cette file d'attente.",
        },
        {
          type: "h3",
          texte: "Des managers pris en étau",
        },
        {
          type: "p",
          texte:
            "Le guide de l'Anact [Dix questions sur les espaces de discussion](https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf) (2015) décrit le manager de proximité placé « entre le marteau et l'enclume », et appelle à lui redonner la maîtrise d'un périmètre « éclaté et dominé par les différents domaines gestionnaires (qualité, sécurité, achats, communication…) ». C'est la situation du responsable d'équipe dans une matrice où chaque fonction support lui adresse ses propres exigences, avec des réunions de coordination qui se multiplient.",
        },
      ],
    },

    {
      label: "Mode d'emploi",
      titre: "Organisation matricielle en PME : cinq règles pour qu'elle tienne",
      blocs: [
        {
          type: "p",
          texte:
            "Une matrice ne se décrète pas avec un nouvel organigramme. Elle se règle par quelques décisions écrites, que la plupart des entreprises ne prennent jamais.",
        },
        {
          type: "tableau",
          entetes: ["Règle", "Ce qu'elle tranche concrètement"],
          lignes: [
            [
              "Partager les questions, pas les personnes",
              "Le responsable de projet fixe le quoi, le quand et le budget. Le responsable de métier fixe le comment, le qui et le niveau de qualité.",
            ],
            [
              "Désigner qui tranche, avant le conflit",
              "Une instance ou une personne identifiée arbitre les conflits de priorité, sans remonter systématiquement au dirigeant.",
            ],
            [
              "Écrire les droits de décision",
              "Pour chaque type de décision : qui propose, qui est consulté, qui décide, qui est informé.",
            ],
            [
              "Évaluer à deux voix",
              "L'entretien annuel réunit l'avis des deux responsables. Sinon, chacun obéit à celui qui l'évalue.",
            ],
            [
              "Planifier la charge au même endroit",
              "Un seul tableau d'affectation des personnes aux projets, revu à fréquence fixe, visible par tous.",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Le point le plus négligé : l'arbitrage",
        },
        {
          type: "p",
          texte:
            "Dans une PME, l'instance d'arbitrage peut être très simple : un point hebdomadaire de trente minutes où les chefs de projet et les responsables de métier revoient les affectations de la semaine, avec une règle connue en cas de désaccord. L'essentiel est qu'elle se tienne, et que ses décisions ne soient pas rejouées ensuite dans le bureau du dirigeant.",
        },
        {
          type: "h3",
          texte: "Former les managers à négocier",
        },
        {
          type: "p",
          texte:
            "Une matrice demande aux managers une compétence que la hiérarchie classique ne leur demandait pas : obtenir des résultats de personnes sur lesquelles ils n'ont pas d'autorité complète. Cela change la nature du [rôle du manager](/infos-utiles/role-du-manager/) : moins de commandement, plus de négociation et d'explicitation. Sans cet apprentissage, chacun donne des ordres, et les ordres se contredisent.",
        },
      ],
    },

    {
      label: "Alternatives",
      titre: "Matrice faible, équilibrée ou forte, ou pas de matrice du tout",
      blocs: [
        {
          type: "p",
          texte:
            "La question n'est pas « matrice ou pas matrice », mais « combien de matrice ». On distingue couramment trois dosages, selon le poids donné au responsable de projet face au responsable de métier.",
        },
        {
          type: "liste",
          items: [
            "**Matrice faible** : le chef de projet coordonne, sans autorité sur les personnes. Le métier garde la main. Le projet avance si les services jouent le jeu.",
            "**Matrice équilibrée** : les deux responsables ont un poids comparable. C'est la forme la plus exigeante, car tout se négocie.",
            "**Matrice forte** : le chef de projet dispose des ressources et décide des priorités. Le métier devient un fournisseur de compétences.",
          ],
        },
        {
          type: "h3",
          texte: "Les formes plus légères, souvent suffisantes",
        },
        {
          type: "p",
          texte:
            "La gamme décrite par Galbraith rappelle qu'il existe des étapes avant la double autorité. Pour une PME de 10 à 250 salariés, elles règlent souvent le problème à moindre coût :",
        },
        {
          type: "tableau",
          entetes: ["Votre situation", "La forme qui suffit souvent"],
          lignes: [
            [
              "Un projet ponctuel qui mobilise plusieurs services",
              "Un groupe de travail temporaire, avec un pilote et une date de fin",
            ],
            [
              "Quelques projets récurrents, services stables",
              "Un coordinateur de projet sans autorité hiérarchique, appuyé par une règle d'arbitrage",
            ],
            [
              "Des compétences rares disputées en permanence",
              "Une matrice faible, avec une planification unique de la charge",
            ],
            [
              "Un portefeuille de projets large et changeant",
              "Une matrice équilibrée ou forte, avec les cinq règles écrites",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "**Le bon niveau de matrice est le plus faible qui règle votre problème de coordination.** Chaque cran supplémentaire ajoute des réunions et des négociations.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Mettre en place ou réparer une structure matricielle",
      blocs: [
        {
          type: "p",
          texte:
            "Que vous envisagiez une matrice ou que vous en subissiez déjà une, le point de départ est le même : regarder comment les décisions circulent réellement. Qui arbitre aujourd'hui les conflits de priorité ? Combien remontent à vous chaque semaine ? Qui évalue les personnes qui travaillent pour plusieurs projets ?",
        },
        {
          type: "p",
          texte:
            "Une telle réorganisation se conduit avec les personnes concernées, pas par une note de service ; notre article sur l'[accompagnement au changement](/infos-utiles/accompagnement-au-changement/) détaille les étapes à ne pas sauter.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, ce travail correspond à l'étape Cartographier : une lecture des flux, des rôles et des tensions à partir du fonctionnement réel, avec immersion terrain et entretiens. Un conseiller référent conduit le sujet ; une autre expertise n'intervient que si le problème l'exige, par exemple quand la tension vient d'un flux de production. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord. Pour situer d'abord votre entreprise, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'une structure matricielle ?",
      r: [
        "C'est une forme d'organisation dans laquelle chaque collaborateur dépend de deux responsables : l'un pour son métier (production, études, qualité), l'autre pour un projet, un produit, un site ou un client. Elle vise à combiner l'expertise de l'organisation par fonctions et la réactivité de l'organisation par projets. Elle suppose des règles claires sur qui décide quoi, faute de quoi la double hiérarchie produit des consignes contradictoires.",
      ],
    },
    {
      q: "Quels sont les avantages et les inconvénients d'une structure matricielle ?",
      r: [
        "Avantages : des compétences rares partagées entre projets, un savoir-faire entretenu par les responsables de métier, un résultat suivi par un responsable identifié et une meilleure circulation de l'information. Inconvénients : des instructions contradictoires, des arbitrages qui remontent au dirigeant, des réunions de coordination nombreuses et des managers pris entre deux exigences. L'équilibre dépend presque entièrement des règles de décision posées au départ.",
      ],
    },
    {
      q: "Quelle est la différence entre une structure fonctionnelle et une structure matricielle ?",
      r: [
        "Dans une structure fonctionnelle, chaque personne a un seul responsable, celui de son métier, et les projets transverses se négocient entre services. Dans une structure matricielle, un second responsable, de projet, de site ou de client, a aussi autorité sur la personne. La matrice accélère la coordination entre services, mais elle oblige à écrire qui fixe les priorités et qui tranche en cas de conflit.",
      ],
    },
    {
      q: "Une PME peut-elle adopter une organisation matricielle ?",
      r: [
        "Oui, et beaucoup le font sans le dire, dès qu'elles travaillent à l'affaire avec des compétences partagées. La question est plutôt le dosage. Une PME gagne souvent à commencer par une forme légère : un groupe projet temporaire ou un coordinateur sans autorité hiérarchique, appuyé par une règle d'arbitrage. La matrice complète ne se justifie que si les projets sont nombreux, changeants et très interdépendants.",
      ],
    },
    {
      q: "Comment gérer un conflit de priorités dans une structure matricielle ?",
      r: [
        "En le prévoyant avant qu'il survienne. Désignez une instance d'arbitrage, par exemple un point hebdomadaire entre chefs de projet et responsables de métier, et une règle connue de tous en cas de désaccord. Et faites évaluer chaque collaborateur par ses deux responsables, sinon il obéira toujours à celui qui fixe sa rémunération.",
      ],
    },
  ],

  sources: [
    {
      titre: "Matrix organization designs: How to combine functional and project forms",
      editeur: "Jay R. Galbraith, Business Horizons, vol. 14, n° 1, 1971",
      url: "https://jaygalbraith.com/wp-content/uploads/2024/03/galbraithmatrix1971.pdf",
    },
    {
      titre: "Problems of Matrix Organizations",
      editeur: "Stanley M. Davis et Paul R. Lawrence, Harvard Business Review, 1978",
      url: "https://hbr.org/1978/05/problems-of-matrix-organizations",
    },
    {
      titre: "Matrix Management: Not a Structure, a Frame of Mind",
      editeur: "Christopher A. Bartlett et Sumantra Ghoshal, Harvard Business Review, 1990",
      url: "https://hbr.org/1990/07/matrix-management-not-a-structure-a-frame-of-mind",
    },
    {
      titre: "Les organisations du travail apprenantes : enjeux et défis pour la France",
      editeur: "France Stratégie",
      url: "https://www.strategie-plan.gouv.fr/publications/organisations-travail-apprenantes-enjeux-defis-france",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS) : Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Dix questions sur les espaces de discussion",
      editeur: "Anact",
      url: "https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-02-08",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
