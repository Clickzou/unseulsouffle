import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, transformation de l'entreprise. Signé Muriel Saffroy.
 * Requête : « auditer une entreprise » (390/mois, KD 7). Secondaires : « audit dans
 * une entreprise » (390), « faire un audit » (210).
 *
 * L'intention « conseil en organisation » appartient au pilier
 * /transformation-entreprise/ : cet article traite l'audit (types, démarche,
 * erreurs, suites) et renvoie vers le pilier et l'étape 03 Cartographier.
 *
 * POINTS SENSIBLES
 * - Audit légal : la certification des comptes est réservée aux commissaires aux
 *   comptes. Le cabinet n'en est pas un et ne certifie aucun compte ; il ne tient
 *   pas non plus de comptabilité. Le texte parle d'audit organisationnel, que le
 *   cabinet pratique sous le nom de diagnostic 360° (home.ts, étape 03).
 * - Seuils du commissaire aux comptes : ceux de l'article D221-5 et de la fiche
 *   Bpifrance Création (exercices ouverts depuis le 1er janvier 2024). Formulation
 *   volontairement générale : les règles varient selon la forme de la société.
 * - Liens internes limités aux articles publiés avant le 13/09/2027.
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "auditer-une-entreprise",

  motCle: "auditer une entreprise (390/mois, KD 7) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "audit dans une entreprise (390/mois)",
    "faire un audit (210/mois)",
    "audit organisationnel",
    "audit d'entreprise",
  ],

  // 42 / 42
  metaTitle: "Auditer une entreprise : méthode et étapes",
  // 143 / 150
  metaDescription:
    "Auditer une entreprise : les types d'audit, quand en faire un, les six étapes d'un audit organisationnel et les erreurs qui le rendent inutile.",

  h1: "Auditer une entreprise : la méthode pour voir où elle coince vraiment",

  chapo:
    "Auditer une entreprise, c'est comparer ce qu'elle est censée faire à ce qu'elle fait réellement, avec une méthode, des preuves et un regard qui n'est pas juge et partie. Le mot recouvre pourtant des exercices très différents. L'audit légal certifie les comptes et relève d'un commissaire aux comptes. L'audit organisationnel, lui, cherche pourquoi les décisions traînent, pourquoi les projets s'enlisent, pourquoi l'entreprise dépend encore de son dirigeant. C'est celui dont parle cet article : quand le lancer, comment le mener en six étapes, ce qu'il doit regarder, et comment éviter qu'il finisse dans un tiroir.",

  essentiel: {
    reponse:
      "Un audit d'entreprise est un examen méthodique d'une partie de son fonctionnement, comptes, processus, organisation, conformité ou systèmes, pour mesurer l'écart entre ce qui est prévu et ce qui se passe, et proposer des corrections. L'audit légal des comptes est réservé aux commissaires aux comptes et obligatoire au-delà de certains seuils. Les autres audits sont volontaires. Un audit organisationnel se mène en six étapes : cadrage, collecte des documents, entretiens, observation du terrain, analyse des causes, restitution et plan d'action. Il ne vaut que par les décisions qu'il déclenche.",
    points: [
      "Audit légal : certification des comptes, par un commissaire aux comptes, au-delà de seuils fixés par le Code de commerce",
      "Audit organisationnel : rôles, décisions, processus, flux d'information, charge de travail",
      "Six étapes : cadrer, lire, écouter, observer, analyser, restituer",
      "Le terrain prime sur l'organigramme : on audite le travail réel, pas le travail prescrit",
      "Un audit sans plan d'action décidé ensemble ne sert à rien",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Auditer une entreprise : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Auditer vient du latin audire, écouter. L'étymologie dit l'essentiel : un audit commence par recueillir des faits avant de juger. **Un audit ne donne pas une opinion sur votre entreprise ; il mesure l'écart entre ce qui est prévu et ce qui se passe, preuves à l'appui.**",
        },
        { type: "h3", texte: "Une définition de référence" },
        {
          type: "p",
          texte:
            "La profession d'audit interne en donne une définition qui vaut au-delà de son champ. Selon le [cadre de référence diffusé par l'IFACI](https://docs.ifaci.com/wp-content/uploads/2018/03/CRIPP-2017-Code-deontologie-version-fianle-amende-e-31052017.pdf), l'audit interne est « une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte ses conseils pour les améliorer, et contribue à créer de la valeur ajoutée ». Trois idées à retenir : l'indépendance de celui qui audite, une méthode systématique, et une finalité d'amélioration.",
        },
        { type: "h3", texte: "Audit, diagnostic, contrôle : trois mots voisins" },
        {
          type: "p",
          texte:
            "Le contrôle vérifie la conformité à une règle, souvent en continu. L'audit examine un périmètre à un moment donné, avec une méthode. Le diagnostic, dans le vocabulaire du conseil, désigne un audit orienté vers l'action : il ne s'arrête pas au constat et cherche les causes. Dans une PME, la frontière est floue, et c'est tant mieux : ce qui compte est ce que vous voulez apprendre, et ce que vous ferez de la réponse. C'est ce type d'audit, tourné vers l'action, que nous pratiquons en [conseil en organisation](/transformation-entreprise/).",
        },
      ],
    },

    {
      label: "Les types d'audit",
      titre: "Les différents types d'audit dans une entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Avant de faire un audit, il faut savoir lequel. Chacun a son objet, ses professionnels et, parfois, son cadre légal. Les confondre conduit à commander un rapport qui répond à une question que vous ne vous posiez pas.",
        },
        {
          type: "tableau",
          entetes: ["Type d'audit", "Ce qu'il examine, et qui le mène"],
          lignes: [
            ["Audit légal des comptes", "La régularité et la sincérité des comptes annuels. Réservé au commissaire aux comptes"],
            ["Audit financier d'acquisition", "La situation réelle d'une cible avant un rachat. Experts-comptables, avocats, conseils spécialisés"],
            ["Audit interne", "La maîtrise des risques et des processus, pour la direction. Service interne ou prestataire"],
            ["Audit organisationnel", "Rôles, décisions, processus, flux d'information, charge. Consultant en organisation"],
            ["Audit social et RH", "Conformité au droit du travail, climat social, compétences. Juristes, spécialistes RH"],
            ["Audit qualité et sécurité", "Respect d'une norme ou des règles de santé et de sécurité. Auditeurs certifiés, préventeurs"],
            ["Audit des systèmes d'information", "Sécurité, fiabilité et usage des outils informatiques. Spécialistes du numérique"],
          ],
        },
        { type: "h3", texte: "L'audit légal : une obligation au-delà de certains seuils" },
        {
          type: "p",
          texte:
            "La certification des comptes n'est pas un choix de gestion pour toutes les sociétés. Le Code de commerce fixe des seuils au-delà desquels la nomination d'un commissaire aux comptes s'impose : [l'article D221-5](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049216674/2024-03-01) retient un total de bilan de 5 millions d'euros, un chiffre d'affaires hors taxes de 10 millions et un effectif moyen de 50 salariés, l'obligation jouant quand deux de ces trois critères sont dépassés. Bpifrance Création précise que ces [nouveaux seuils](https://bpifrance-creation.fr/entrepreneur/actualites/nouveaux-seuils-nomination-dun-commissaire-aux-comptes) s'appliquent aux exercices ouverts depuis le 1er janvier 2024. Votre expert-comptable vous dira si votre société est concernée.",
        },
        {
          type: "p",
          texte:
            "Le commissaire aux comptes certifie, selon la [norme d'exercice professionnel applicable aux petites entreprises](https://h2a-france.org/normes/mission-du-commissaire-aux-comptes-nomme-pour-six-exercices-dans-des-petites-entreprises/) publiée par la Haute Autorité de l'audit, que les comptes sont réguliers et sincères et donnent une image fidèle de la situation de l'entité. Il ne dit rien de la qualité de votre organisation. C'est une autre question, et un autre audit.",
        },
      ],
    },

    {
      label: "Le bon moment",
      titre: "Quand faire un audit d'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Un audit organisationnel volontaire se justifie quand vous sentez que quelque chose ne va pas sans pouvoir dire quoi, ou quand vous êtes trop impliqué pour le voir. Certaines situations reviennent souvent.",
        },
        {
          type: "liste",
          items: [
            "**La croissance va plus vite que la structure** : les effectifs ont doublé, l'organisation est restée celle des débuts",
            "**Les décisions remontent toutes au dirigeant** : l'équipe est compétente, mais rien n'avance sans votre feu vert",
            "**Des projets s'enlisent** sans que personne puisse dire à quel endroit",
            "**Les marges se dégradent** alors que l'activité tient, signe fréquent d'une perte d'efficacité interne",
            "**Un événement change la donne** : départ d'un cadre clé, rachat, transmission, nouveau site",
            "**Les tensions internes s'installent** : conflits entre services, départs, absentéisme en hausse",
          ],
        },
        { type: "h3", texte: "Le symptôme n'est pas la cause" },
        {
          type: "p",
          texte:
            "Une marge qui baisse peut venir d'une politique de prix, d'un processus de production, ou d'une organisation où personne ne se sent responsable des devis. Une trésorerie tendue peut venir d'un poste client mal suivi, question que traite notre article sur la [gestion de trésorerie](/infos-utiles/gestion-de-tresorerie/), ou d'une facturation qui attend la signature du dirigeant. L'intérêt d'un audit dans une entreprise est précisément de remonter du symptôme à la cause, au lieu de traiter le premier qui se voit.",
        },
      ],
    },

    {
      label: "La démarche",
      titre: "Faire un audit organisationnel en six étapes",
      blocs: [
        {
          type: "p",
          texte:
            "La méthode varie selon les cabinets, mais un audit sérieux suit toujours une logique proche : cadrer avant de chercher, écouter avant d'analyser, et restituer avant de recommander.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Cadrer** : la question posée, le périmètre, les personnes rencontrées, le calendrier, la façon dont les équipes seront informées",
            "**Lire** : organigramme, fiches de poste, comptes rendus de réunion, indicateurs, procédures existantes",
            "**Écouter** : entretiens individuels confidentiels, à tous les niveaux, pas seulement avec l'encadrement",
            "**Observer** : passer du temps sur le terrain, suivre une commande ou un dossier de bout en bout",
            "**Analyser** : relier les constats entre eux, distinguer les causes des symptômes, hiérarchiser",
            "**Restituer** : présenter les constats au dirigeant, puis aux équipes, et construire le plan d'action avec eux",
          ],
        },
        { type: "h3", texte: "Le cadrage décide de tout" },
        {
          type: "p",
          texte:
            "Une question floue produit un rapport flou. « Pourquoi nos délais de livraison dérapent-ils depuis un an ? » se traite ; « auditer l'organisation » ne se traite pas. Le cadrage fixe aussi ce que l'audit ne regardera pas, et ce qui sera dit aux équipes pour éviter les rumeurs de plan social.",
        },
        { type: "h3", texte: "Les entretiens : la confidentialité avant tout" },
        {
          type: "p",
          texte:
            "Les salariés ne disent ce qu'ils pensent que s'ils sont sûrs que leurs propos ne seront pas attribués. La règle se pose au départ et se tient : les constats sont restitués de façon agrégée, jamais nominative. Sans cette garantie, vous obtenez la version officielle, que vous connaissez déjà.",
        },
        { type: "h3", texte: "Le terrain : le travail réel" },
        {
          type: "p",
          texte:
            "Les procédures décrivent le travail prescrit ; le terrain montre le travail réel, avec ses contournements et ses fichiers parallèles. Suivre une commande de sa réception à sa facturation en apprend souvent davantage qu'une semaine d'entretiens. C'est aussi là que se lisent les interfaces entre services, où se perd l'essentiel du temps.",
        },
      ],
    },

    {
      label: "Le périmètre",
      titre: "Ce qu'un audit organisationnel doit regarder",
      blocs: [
        {
          type: "p",
          texte:
            "Un audit d'entreprise centré sur l'organisation examine cinq dimensions. Aucune ne suffit seule ; c'est leur combinaison qui explique le fonctionnement réel.",
        },
        { type: "h3", texte: "Les rôles et les décisions" },
        {
          type: "p",
          texte:
            "Qui décide quoi, jusqu'où, et que se passe-t-il en cas de désaccord ? L'organigramme donne la réponse officielle ; notre article sur l'[organigramme d'entreprise](/infos-utiles/organigramme-entreprise/) montre pourquoi elle diffère souvent de la pratique. L'audit regarde aussi l'instance de décision : un [comité de direction](/infos-utiles/comite-de-direction/) qui valide sans trancher renvoie tout vers le dirigeant.",
        },
        { type: "h3", texte: "Les processus et les flux d'information" },
        {
          type: "p",
          texte:
            "Par où passe une commande, un devis, une réclamation ? Combien de ressaisies, d'attentes, d'allers-retours ? La [cartographie des processus](/infos-utiles/cartographie-des-processus/) est l'outil naturel de cette partie : elle rend visibles les interfaces et les zones sans responsable.",
        },
        { type: "h3", texte: "Le pilotage et la charge de travail" },
        {
          type: "p",
          texte:
            "Quels indicateurs sont réellement lus, et par qui ? Où la charge se concentre-t-elle ? L'audit croise ces questions avec les obligations de prévention : le [document unique d'évaluation des risques professionnels](https://code.travail.gouv.fr/fiche-service-public/quest-ce-que-le-document-unique-devaluation-des-risques-professionnels-duerp), obligatoire dès le premier salarié, est une source utile, et son absence est en soi un constat.",
        },
      ],
    },

    {
      label: "Les pièges",
      titre: "Les erreurs qui rendent un audit d'entreprise inutile",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants ont déjà commandé un audit dont il ne reste qu'un document que personne n'a relu. Les causes sont presque toujours les mêmes.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["Ce qui rend l'audit inutile", "Ce qui le rend utile"],
          lignes: [
            ["Un périmètre flou : « auditer l'organisation »", "Une question précise, écrite, validée par le dirigeant"],
            ["Un auditeur qui ne rencontre que l'encadrement", "Des entretiens à tous les niveaux, et du temps sur le terrain"],
            ["Des équipes non informées, qui imaginent le pire", "Une annonce claire de l'objectif et de ce qui ne sera pas touché"],
            ["Un rapport de cinquante pages remis en fin de mission", "Une restitution orale, discutée, suivie d'un document court"],
            ["Des recommandations sans responsable ni date", "Un plan d'action priorisé, construit avec ceux qui le porteront"],
            ["Un dirigeant qui s'exclut du périmètre", "Un dirigeant qui accepte d'être lui aussi regardé"],
          ],
        },
        { type: "h3", texte: "Le dirigeant fait partie du système" },
        {
          type: "p",
          texte:
            "C'est le point le plus délicat. Dans beaucoup de PME, une part des blocages tient à la façon dont le dirigeant décide ou délègue. Un audit qui l'épargne manque souvent la cause principale. L'accepter demande de la confiance envers celui qui audite ; c'est aussi ce qui distingue un audit utile d'un exercice de conformité.",
        },
      ],
    },

    {
      label: "Qui audite",
      titre: "Auditer en interne ou faire appel à un regard extérieur",
      blocs: [
        {
          type: "p",
          texte:
            "Une PME peut conduire elle-même une partie de l'audit : un responsable qualité connaît les processus, un contrôleur de gestion les chiffres. La limite tient à l'indépendance, qui est au cœur de la définition de l'audit : il est difficile d'auditer un service dont on dépend, ou une décision que l'on a prise.",
        },
        {
          type: "tableau",
          entetes: ["Audit mené en interne", "Audit mené par un intervenant extérieur"],
          lignes: [
            ["Connaissance fine de l'entreprise et de son histoire", "Regard neuf, sans habitudes ni loyautés internes"],
            ["Coût faible, mais du temps pris sur l'activité", "Coût d'intervention, temps interne limité aux entretiens"],
            ["Parole plus retenue des salariés", "Confidentialité plus crédible pour ceux qui parlent"],
            ["Difficile de mettre en cause la direction", "Possible de nommer ce qui se joue au sommet"],
          ],
        },
        { type: "h3", texte: "Choisir l'intervenant selon la question" },
        {
          type: "p",
          texte:
            "Pour les comptes, c'est un commissaire aux comptes ou un expert-comptable. Pour une conformité réglementaire, un juriste ou un préventeur. Pour l'organisation, un consultant qui a lui-même dirigé des équipes et qui ira sur le terrain. Demandez comment il conduit les entretiens, combien de temps il passe sur place, et à quoi ressemble la restitution.",
        },
      ],
    },

    {
      label: "Après l'audit",
      titre: "Après l'audit : du constat au plan d'action",
      blocs: [
        {
          type: "p",
          texte:
            "Un audit réussi se termine par des décisions, pas par un document. Trois à cinq chantiers prioritaires, chacun avec un responsable, une échéance et un indicateur de progrès, valent mieux que trente recommandations. Et il faut dire aussi ce qui fonctionne : on n'y touche pas.",
        },
        {
          type: "p",
          texte:
            "Chez nous, cette démarche correspond à la troisième étape de notre méthode, Cartographier. Elle est conduite par un conseiller référent, souvent [Muriel Saffroy](/muriel-saffroy/) lorsque le sujet est l'organisation et la coopération. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord ; une autre expertise du cabinet n'intervient que si le sujet l'exige.",
        },
        { type: "etape", n: "03" },
        {
          type: "p",
          texte:
            "Avant d'engager un audit complet, vous pouvez situer en quelques minutes la nature du blocage avec notre [diagnostic d'entreprise](/diagnostic/). C'est souvent la meilleure façon de savoir quelle question poser à l'audit.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un audit d'entreprise ?",
      r: [
        "C'est l'examen méthodique d'une partie du fonctionnement d'une entreprise, comptes, organisation, processus, conformité ou systèmes d'information, pour mesurer l'écart entre ce qui est prévu et ce qui se passe réellement. Il repose sur des documents, des entretiens et l'observation du terrain, et se conclut par des constats et des recommandations. Seul l'audit légal des comptes est obligatoire, au-delà de certains seuils ; les autres audits sont volontaires.",
      ],
    },
    {
      q: "Une PME est-elle obligée de faire auditer ses comptes ?",
      r: [
        "Seulement si elle dépasse certains seuils. Pour les exercices ouverts depuis le 1er janvier 2024, la nomination d'un commissaire aux comptes s'impose notamment quand deux des trois critères suivants sont dépassés : 5 millions d'euros de total de bilan, 10 millions de chiffre d'affaires hors taxes, 50 salariés. Des règles particulières existent selon la forme de la société et pour les filiales : votre expert-comptable peut vérifier votre situation.",
      ],
    },
    {
      q: "Combien de temps dure un audit organisationnel ?",
      r: [
        "Cela dépend du périmètre et de la taille de l'entreprise. Pour une PME, il faut compter le temps du cadrage, une série d'entretiens individuels, des journées d'observation sur le terrain, l'analyse puis la restitution. Un audit ciblé sur une question précise va plus vite qu'un examen global. Méfiez-vous d'un audit sans temps passé sur place : il ne verra que ce qu'on lui montre.",
      ],
    },
    {
      q: "Comment faire un audit interne dans une petite entreprise ?",
      r: [
        "Commencez par une question précise, puis rassemblez les documents existants, rencontrez les personnes concernées en garantissant la confidentialité, et suivez un dossier réel de bout en bout. Notez les écarts entre la procédure et la pratique, cherchez leurs causes, puis restituez les constats à l'équipe avant de décider des actions. La limite d'un audit interne est l'indépendance : sur un sujet sensible, un regard extérieur est plus crédible.",
      ],
    },
    {
      q: "Quelle différence entre un audit et un diagnostic d'entreprise ?",
      r: [
        "Les deux reposent sur des faits et une méthode. L'audit vérifie souvent la conformité à une norme ou à un référentiel, et peut être légalement encadré, comme la certification des comptes. Le diagnostic, dans le vocabulaire du conseil, est un audit orienté vers l'action : il cherche les causes d'un problème et débouche sur un plan de transformation. Pour l'organisation d'une PME, la distinction compte moins que la question posée.",
      ],
    },
  ],

  sources: [
    {
      titre: "Cadre de référence internationale des pratiques professionnelles - Edition 2017 - Code de déontologie",
      editeur: "IFACI (Institut français de l'audit et du contrôle internes)",
      url: "https://docs.ifaci.com/wp-content/uploads/2018/03/CRIPP-2017-Code-deontologie-version-fianle-amende-e-31052017.pdf",
    },
    {
      titre: "Article D221-5 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049216674/2024-03-01",
    },
    {
      titre: "Nouveaux seuils de nomination d'un commissaire aux comptes",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/entrepreneur/actualites/nouveaux-seuils-nomination-dun-commissaire-aux-comptes",
    },
    {
      titre: "NEP 912 - Mission du commissaire aux comptes nommé pour six exercices dans des petites entreprises",
      editeur: "H2A - Haute Autorité de l'audit",
      url: "https://h2a-france.org/normes/mission-du-commissaire-aux-comptes-nomme-pour-six-exercices-dans-des-petites-entreprises/",
    },
    {
      titre: "Qu'est-ce que le document unique d'évaluation des risques professionnels (DUERP) ?",
      editeur: "Code du travail numérique, ministère du Travail",
      url: "https://code.travail.gouv.fr/fiche-service-public/quest-ce-que-le-document-unique-devaluation-des-risques-professionnels-duerp",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-09-13",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: true,
};
