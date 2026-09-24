import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « croissance externe » (480/mois, KD 11). Secondaires : variantes naturelles
 * (« stratégie de croissance externe », « croissance externe PME », « financer une
 * acquisition », « croissance interne ou externe »).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite la croissance externe du point de vue du dirigeant et renvoie vers lui.
 *
 * VIGILANCE — PÉRIMÈTRE. Marjorie Anglade est expert-comptable diplômée (DEC 2021),
 * inscrite à l'Ordre ; au cabinet elle intervient comme directrice financière
 * externalisée. Le cabinet ne tient pas de comptabilité, ne réalise pas d'audit
 * d'acquisition réglementé, ne rédige pas d'actes et n'agit pas comme banque d'affaires :
 * le texte renvoie vers l'avocat, l'expert-comptable de l'entreprise et la banque.
 *
 * Points juridiques (à relire) : seuils de contrôle des concentrations (art. L430-2 C. com.,
 * version en vigueur au 01/09/2026) et information préalable des salariés (réforme de la
 * loi n° 2026-403, effet au 26/07/2026, d'après Bpifrance Création). Sources ouvertes le
 * 24/09/2026. Chiffres Bpifrance Le Lab : enquête 2022, 668 dirigeants de PME.
 */
export const article: Article = {
  slug: "croissance-externe",

  motCle: "croissance externe (480/mois, KD 11) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "stratégie de croissance externe",
    "croissance externe PME",
    "financer une acquisition d'entreprise",
    "croissance interne ou externe",
  ],

  // 39 / 42
  metaTitle: "Croissance externe : guide pour les PME",
  // 141 / 150
  metaDescription:
    "Croissance externe : pourquoi racheter, comment financer l'acquisition, les étapes de l'opération et l'intégration, là où la valeur se gagne.",

  h1: "Croissance externe : réussir le rachat d'une entreprise quand on dirige une PME",

  chapo:
    "La croissance externe consiste à grandir en rachetant tout ou partie d'une autre entreprise plutôt qu'en développant sa propre activité pas à pas. Pour une PME, c'est le moyen le plus rapide de gagner des clients, un savoir-faire, une implantation ou une capacité de production. C'est aussi une opération où l'envie dépasse souvent la préparation : beaucoup de dirigeants y pensent, bien moins concrétisent. La réussite se joue sur trois points : une stratégie qui dit pourquoi racheter, un financement que l'entreprise peut porter sans asphyxier sa trésorerie, et une intégration préparée avant la signature. Voici comment aborder chacun.",

  essentiel: {
    reponse:
      "La croissance externe désigne le développement d'une entreprise par l'acquisition d'autres entreprises, d'actifs ou de parts de capital, par opposition à la croissance interne, fondée sur ses propres investissements. Selon une enquête de Bpifrance Le Lab menée en 2022 auprès de 668 dirigeants de PME, 81 % ont envisagé une acquisition sur les cinq années précédentes, mais seuls 34 % sont effectivement parvenus à racheter une entreprise. Dans 84 % des cas, l'acquisition est financée en tout ou partie par de la dette. Une opération réussie repose sur une cible cohérente avec la stratégie, un financement soutenable et une intégration anticipée.",
    points: [
      "Croissance externe : racheter une entreprise ou un fonds de commerce, fusionner, prendre une participation",
      "Huit dirigeants de PME sur dix l'ont envisagée, trois sur dix l'ont concrétisée (Bpifrance Le Lab)",
      "Le financement par la dette domine : la capacité de remboursement se vérifie avant l'offre",
      "Avocat, expert-comptable et banque sont présents dans la grande majorité des opérations",
      "L'intégration, souvent négligée, décide de la valeur réellement créée",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Croissance externe : définition et formes possibles",
      blocs: [
        {
          type: "p",
          texte:
            "Une entreprise peut grandir de deux façons. Par croissance interne, elle recrute, investit dans ses machines, ouvre un site, lance une offre. Par croissance externe, elle achète ce qui existe déjà ailleurs : une entreprise entière, une branche d'activité, un fonds de commerce ou une part du capital d'une société. **La croissance externe achète du temps ; elle le fait payer en prix, en dette et en complexité.**",
        },
        { type: "h3", texte: "Les trois directions stratégiques" },
        {
          type: "liste",
          items: [
            "**Horizontale** : racheter un concurrent ou une entreprise du même métier, pour gagner des parts de marché, un territoire ou une taille critique",
            "**Verticale** : racheter un fournisseur ou un client, pour sécuriser un approvisionnement ou maîtriser un débouché",
            "**Diversification** : racheter une activité voisine, pour élargir l'offre ou réduire la dépendance à un seul marché",
          ],
        },
        { type: "h3", texte: "Croissance interne ou externe : comparer avant de choisir" },
        {
          type: "tableau",
          entetes: ["Croissance interne", "Croissance externe"],
          lignes: [
            ["Progression par étapes, au rythme des investissements", "Changement de taille immédiat, dès la signature"],
            ["Risque étalé dans le temps", "Risque concentré sur une opération et un prix"],
            ["Financement surtout par l'autofinancement", "Financement le plus souvent par la dette"],
            ["Culture et méthodes inchangées", "Deux cultures, deux organisations à faire travailler ensemble"],
            ["Compétences à recruter ou à former", "Compétences et clients acquis avec l'entreprise"],
            ["Peu d'intervenants extérieurs", "Avocat, expert-comptable, banque, parfois conseil en cession"],
          ],
        },
        {
          type: "p",
          texte:
            "Les deux ne s'excluent pas. Beaucoup de PME alternent : elles consolident en interne après un rachat, puis repartent vers une nouvelle acquisition quand l'organisation a absorbé la précédente. C'est là qu'un [DAF externalisé](/daf-externalise-toulouse/) trouve souvent sa place : chiffrer ce que l'entreprise peut porter, et à quel moment.",
        },
      ],
    },

    {
      label: "Les motivations",
      titre: "Pourquoi une PME choisit la croissance externe",
      blocs: [
        {
          type: "p",
          texte:
            "Les dirigeants de PME sont nombreux à voir dans le rachat un passage normal du développement. Dans l'enquête de [Bpifrance Le Lab sur la croissance externe à l'échelle des PME](https://lelab.bpifrance.fr/Etudes/croissance-externe-la-grande-ambition-des-petites-et-moyennes-entreprises/chiffres-cles-de-l-etude-la-croissance-externe-a-l-echelle-des-pme), 83 % des dirigeants estiment qu'à long terme le rachat d'entreprises participe à la pérennité des PME, et 65 % jugent l'acquisition d'autres sociétés indispensable dans la vie d'une PME en développement. Seuls 26 % estiment ces opérations trop risquées.",
        },
        { type: "h3", texte: "Les bonnes raisons" },
        {
          type: "liste",
          items: [
            "Atteindre une taille qui permet de répondre à des appels d'offres ou à des clients plus importants",
            "Acquérir une compétence rare, une équipe ou une technologie qu'il faudrait des années à construire",
            "S'implanter sur un territoire où l'entreprise n'est pas connue",
            "Sécuriser un fournisseur critique ou un débouché",
            "Reprendre une entreprise dont le dirigeant part à la retraite, avant qu'un concurrent ne le fasse",
          ],
        },
        { type: "h3", texte: "Les mauvaises raisons" },
        {
          type: "p",
          texte:
            "Racheter parce qu'une occasion se présente, parce qu'un concurrent vient de le faire, ou pour compenser une activité qui décline sans en avoir compris la cause. Dans ces cas, le rachat ajoute un problème à un autre. Une bonne cible se définit avant de la chercher : son métier, sa taille, sa zone, ce qu'elle apporte que l'entreprise n'a pas.",
        },
        {
          type: "p",
          texte:
            "Le contexte y pousse aussi. La même enquête indique que 47 % des dirigeants de PME prévoient de vendre leur entreprise dans les cinq années suivantes, et que 72 % ont l'intention d'en racheter une à moyen terme. Des cibles, il y en aura. Le sujet est d'être prêt quand la bonne se présente.",
        },
      ],
    },

    {
      label: "Le passage à l'acte",
      titre: "Stratégie de croissance externe : pourquoi tant de projets n'aboutissent pas",
      blocs: [
        {
          type: "p",
          texte:
            "L'écart entre l'intention et la réalisation est frappant. Selon Bpifrance Le Lab, 81 % des dirigeants de PME interrogés ont envisagé un projet d'acquisition au cours des cinq années précédentes. Seuls 34 % sont effectivement parvenus à racheter une entreprise ; 47 % ont dû renoncer malgré eux, et 19 % se tiennent volontairement à l'écart de ce type de projet.",
        },
        { type: "h3", texte: "Pas de cible définie" },
        {
          type: "p",
          texte:
            "Sans critères écrits, chaque dossier reçu devient une opportunité à étudier, et aucune n'est comparée aux autres. Le dirigeant s'épuise sur des cibles qui ne correspondent pas à sa stratégie, puis laisse passer celle qui y correspondait parce qu'il n'avait plus le temps.",
        },
        { type: "h3", texte: "Un prix sans capacité de financement vérifiée" },
        {
          type: "p",
          texte:
            "Beaucoup de projets s'arrêtent au moment du financement. Le prix demandé peut sembler raisonnable au regard du chiffre d'affaires de la cible, mais c'est la capacité des deux entreprises réunies à rembourser la dette qui compte pour la banque. Une rentabilité insuffisante de la cible ne se compense pas par l'enthousiasme de l'acheteur. Notre article sur le [taux de rentabilité](/infos-utiles/taux-de-rentabilite/) détaille les indicateurs qui servent à cette vérification.",
        },
        { type: "h3", texte: "Un dirigeant seul pour tout mener" },
        {
          type: "p",
          texte:
            "Une acquisition se prépare pendant des mois, en plus de la gestion courante. Recherche, rendez-vous, analyse des comptes, négociation, montage bancaire : le dirigeant de PME cumule souvent ces rôles, sans équipe dédiée. C'est l'une des raisons pour lesquelles Bpifrance propose un [Accélérateur Croissance Externe](https://www.bpifrance.fr/catalogue-offres/accelerateur-croissance-externe), programme de douze mois destiné aux dirigeants de PME et d'ETI qui préparent un projet de rachat.",
        },
      ],
    },

    {
      label: "Le financement",
      titre: "Financer une croissance externe sans fragiliser l'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Les opérations des PME restent pour la plupart d'une taille modeste : selon Bpifrance Le Lab, 55 % ne dépassent pas le million d'euros. Elles reposent pourtant largement sur l'emprunt. Dans 84 % des cas, l'acquisition est financée en partie ou en totalité par de la dette : 56 % par la dette seule, 20 % en combinant dette et autofinancement, 8 % en y ajoutant une levée de fonds. Seuls 14 % financent leur acquisition sur leur seule trésorerie.",
        },
        { type: "h3", texte: "Ce que la banque regarde" },
        {
          type: "p",
          texte:
            "La banque ne finance pas une entreprise, elle finance un remboursement. Elle veut savoir quel flux de trésorerie servira à payer les échéances, sur combien d'années, avec quelle marge de sécurité si l'activité baisse. Elle regarde aussi l'apport de l'acheteur et la solidité de l'entreprise qui porte la dette. Un prévisionnel sérieux de l'ensemble, construit avant l'offre, fait gagner des semaines et renforce la position de négociation.",
        },
        { type: "h3", texte: "Les pièges de trésorerie" },
        {
          type: "liste",
          items: [
            "**Le besoin en fonds de roulement de la cible** : stocks, créances clients et dettes fournisseurs changent avec le périmètre ; il faut les financer dès le premier mois",
            "**Les frais de l'opération** : conseils, audits, frais d'acte et de garantie s'ajoutent au prix et sortent avant tout gain",
            "**Les investissements différés** : une cible qui n'a pas renouvelé ses équipements depuis des années présente un résultat flatteur et une facture à venir",
            "**La saisonnalité** : une échéance d'emprunt calée au mauvais mois peut créer une tension même dans une entreprise rentable",
          ],
        },
        {
          type: "p",
          texte:
            "Le suivi mensuel des [flux de trésorerie](/infos-utiles/flux-de-tresorerie/) de l'ensemble après l'acquisition est le premier outil de pilotage à mettre en place. C'est lui qui dit, avant le banquier, si le montage tient.",
        },
      ],
    },

    {
      label: "Les étapes",
      titre: "Les étapes d'une opération de croissance externe",
      blocs: [
        {
          type: "p",
          texte:
            "Chaque opération a ses particularités, mais l'enchaînement reste le même. Le tableau ci-dessous en donne les grandes étapes et ce qui doit en sortir.",
        },
        {
          type: "tableau",
          entetes: ["Étape", "Ce qui doit en sortir"],
          lignes: [
            ["Clarifier la stratégie", "Les critères de la cible : métier, taille, zone, apport attendu, prix maximal soutenable"],
            ["Rechercher et approcher", "Une liste de cibles qualifiées et un premier contact, souvent confidentiel"],
            ["Valoriser", "Une fourchette de prix fondée sur la rentabilité et les flux futurs, pas sur une intuition"],
            ["Lettre d'intention", "Le prix envisagé, le périmètre, le calendrier et les conditions suspensives"],
            ["Audits d'acquisition", "Une vérification des comptes, des contrats, du social, du fiscal et des risques"],
            ["Financement et actes", "L'accord de la banque, le protocole d'accord et la garantie d'actif et de passif"],
            ["Intégration", "Un plan des cent premiers jours : organisation, reporting, communication"],
          ],
        },
        { type: "h3", texte: "S'entourer des bons professionnels" },
        {
          type: "p",
          texte:
            "Les PME le font déjà largement. Selon Bpifrance Le Lab, un avocat est sollicité dans 87 % des opérations, les experts-comptables dans 84 % des cas et les partenaires bancaires dans 80 %. Chacun a son rôle : l'avocat rédige et sécurise les actes, l'expert-comptable mène ou encadre l'audit des comptes, la banque finance. Le dirigeant garde la décision.",
        },
        { type: "h3", texte: "Deux points juridiques à vérifier avec votre avocat" },
        {
          type: "p",
          texte:
            "Le contrôle des concentrations d'abord. Il ne concerne qu'une minorité d'opérations de PME : dans sa version en vigueur depuis le 1er septembre 2026, l'[article L430-2 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000052093614) soumet une opération à notification lorsque le chiffre d'affaires mondial total des parties dépasse 250 millions d'euros et que deux d'entre elles réalisent chacune plus de 80 millions d'euros en France, avec des seuils particuliers pour le commerce de détail et l'outre-mer.",
        },
        {
          type: "p",
          texte:
            "L'information préalable des salariés de la cible ensuite. Elle incombe au vendeur, mais elle conditionne le calendrier. Bpifrance Création détaille les [règles d'information des salariés en cas de cession](https://bpifrance-creation.fr/encyclopedie/ceder-entreprise-etapes/anticiper-cession/information-prealable-salaries-cas-cession) et leur réforme par la loi du 26 mai 2026 : pour les ventes conclues à compter du 26 juillet 2026, l'obligation d'information pèse uniquement sur les entreprises de moins de 50 salariés, et le délai est réduit à un mois. Ces règles évoluent : faites-les confirmer pour votre opération.",
        },
      ],
    },

    {
      label: "L'intégration",
      titre: "Après le rachat : l'intégration, là où se joue la croissance externe",
      blocs: [
        {
          type: "p",
          texte:
            "La signature marque le début du travail, pas la fin. **Une acquisition bien négociée mais mal intégrée détruit la valeur qu'elle devait créer.** Les clients s'inquiètent, des salariés clés partent, les deux équipes continuent à travailler chacune à sa façon, et le dirigeant découvre six mois plus tard que les synergies prévues n'existent que dans le business plan.",
        },
        { type: "h3", texte: "Préparer les cent premiers jours avant la signature" },
        {
          type: "liste",
          items: [
            "Qui dirige la cible au lendemain du rachat, et avec quelles délégations",
            "Ce qui change tout de suite, et ce qui ne change pas avant plusieurs mois",
            "Comment et quand on annonce l'opération aux salariés, aux clients, aux fournisseurs",
            "Quels indicateurs financiers communs les deux entités remontent chaque mois",
          ],
        },
        { type: "h3", texte: "Harmoniser le pilotage financier" },
        {
          type: "p",
          texte:
            "Deux entreprises qui ne présentent pas leurs chiffres de la même façon ne peuvent pas être pilotées ensemble. Il faut rapidement aligner les calendriers de clôture, les plans de comptes utiles au pilotage, les règles de suivi des marges et le prévisionnel de trésorerie consolidé. Ce travail se fait avec les experts-comptables des deux sociétés, qui restent en charge des comptes.",
        },
        { type: "h3", texte: "Ne pas sous-estimer l'organisation et les personnes" },
        {
          type: "p",
          texte:
            "Rôles en doublon, circuits de décision différents, habitudes de travail opposées : l'intégration est aussi une [réorganisation d'entreprise](/infos-utiles/reorganisation-entreprise/), avec ses résistances et son temps d'adaptation. La traiter comme un simple sujet administratif est l'erreur la plus fréquente, et la plus coûteuse.",
        },
      ],
    },

    {
      label: "Se faire accompagner",
      titre: "Le rôle d'un directeur financier dans une croissance externe",
      blocs: [
        {
          type: "p",
          texte:
            "Un projet de croissance externe met la fonction financière sous tension à chaque étape : définir un prix maximal soutenable, bâtir le prévisionnel présenté à la banque, lire les comptes de la cible avec un œil critique, préparer le pilotage de l'ensemble après le rachat. Dans une PME sans direction financière, ces tâches retombent sur le dirigeant, en plus du reste.",
        },
        { type: "h3", texte: "Ce qu'un DAF apporte, et ce qu'il ne remplace pas" },
        {
          type: "p",
          texte:
            "Un directeur financier, salarié ou à temps partagé, construit les scénarios, prépare le dossier de financement, questionne les hypothèses du vendeur et installe le reporting commun après l'opération. Il ne remplace ni l'avocat qui rédige les actes, ni l'expert-comptable qui tient et arrête les comptes, ni le conseil en cession qui recherche les cibles. Il fait le lien entre eux et le dirigeant.",
        },
        { type: "h3", texte: "Notre façon d'intervenir" },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, ce travail relève du pilotage financier porté par [Marjorie Anglade](/marjorie-anglade/). Expert-comptable diplômée et inscrite à l'Ordre, elle intervient au cabinet comme directrice financière à temps partagé : le cabinet ne tient pas vos comptes et travaille à partir de ceux produits par votre expert-comptable. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord. Si l'intégration soulève un sujet d'organisation, elle fait appel à un collègue du cabinet sur ce point précis, et seulement si le sujet l'exige.",
        },
        {
          type: "p",
          texte:
            "Avant de chercher une cible, vérifiez que votre entreprise est prête à en absorber une : trésorerie, organisation, disponibilité du dirigeant. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer vos points d'appui et vos fragilités en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la croissance externe ?",
      r: [
        "C'est le développement d'une entreprise par l'acquisition d'autres entreprises, d'une branche d'activité, d'un fonds de commerce ou d'une participation au capital d'une société. Elle s'oppose à la croissance interne, qui repose sur les propres investissements de l'entreprise : recrutements, machines, nouveaux sites. La croissance externe permet de changer de taille rapidement, mais elle concentre le risque sur une opération, un prix et un financement, puis sur la réussite de l'intégration.",
      ],
    },
    {
      q: "Quelle différence entre croissance interne et croissance externe ?",
      r: [
        "La croissance interne se construit par étapes, avec les moyens de l'entreprise : elle est plus lente mais le risque est étalé et la culture reste la même. La croissance externe achète ce qui existe déjà ailleurs : clients, savoir-faire, implantation. Elle est plus rapide, souvent financée par la dette, et oblige à faire travailler ensemble deux organisations. Beaucoup de PME combinent les deux, en consolidant en interne entre deux acquisitions.",
      ],
    },
    {
      q: "Comment financer le rachat d'une entreprise quand on est une PME ?",
      r: [
        "Le plus souvent par l'emprunt bancaire, seul ou combiné à de l'autofinancement ou à l'entrée d'investisseurs. D'après Bpifrance Le Lab, 84 % des acquisitions de PME sont financées au moins en partie par de la dette. La banque regarde surtout la capacité de l'ensemble à rembourser : flux de trésorerie futurs, apport de l'acheteur, marge de sécurité. Un prévisionnel sérieux, construit avant l'offre, est la meilleure préparation.",
      ],
    },
    {
      q: "Faut-il déclarer une acquisition à l'Autorité de la concurrence ?",
      r: [
        "Seulement au-delà de certains seuils, que la plupart des opérations de PME n'atteignent pas. Depuis le 1er septembre 2026, l'article L430-2 du Code de commerce vise notamment les opérations où le chiffre d'affaires mondial total des parties dépasse 250 millions d'euros et où deux d'entre elles réalisent chacune plus de 80 millions en France. Des seuils spécifiques existent pour le commerce de détail et l'outre-mer : faites vérifier votre cas par un avocat.",
      ],
    },
    {
      q: "Pourquoi tant d'acquisitions de PME échouent-elles après le rachat ?",
      r: [
        "Parce que l'intégration est souvent préparée trop tard. Les clients s'inquiètent, des salariés clés partent, les deux équipes gardent leurs habitudes et les chiffres ne se comparent pas. Préparer avant la signature les cent premiers jours, désigner qui dirige la cible, harmoniser le reporting financier et traiter l'organisation comme un vrai chantier limitent ces risques. La valeur d'une acquisition se crée après la signature, pas au moment de la négociation.",
      ],
    },
  ],

  sources: [
    {
      titre: "Chiffres clés de l'étude « La croissance externe à l'échelle des PME »",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/Etudes/croissance-externe-la-grande-ambition-des-petites-et-moyennes-entreprises/chiffres-cles-de-l-etude-la-croissance-externe-a-l-echelle-des-pme",
    },
    {
      titre: "Accélérateur Croissance Externe",
      editeur: "Bpifrance",
      url: "https://www.bpifrance.fr/catalogue-offres/accelerateur-croissance-externe",
    },
    {
      titre: "Information préalable des salariés en cas de cession de l'entreprise",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/ceder-entreprise-etapes/anticiper-cession/information-prealable-salaries-cas-cession",
    },
    {
      titre: "Article L430-2 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000052093614",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-07-05",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
