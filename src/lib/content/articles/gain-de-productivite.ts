import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 5, performance industrielle et production. Signé Yohan Castelar.
 * Rattaché au pilier /transformation-entreprise/ tant que le pilier production n'existe pas.
 * Requête : « gain de productivité » (390/mois, KD 20). Secondaires : « productivité
 * industrielle » (480), « gestion de la productivité » (590).
 *
 * Anti-cannibalisation : « outils amélioration continue » (n° 15) et « cartographie des
 * processus » (n° 23) ont leur propre article, publié plus tard. Ils ne sont ici
 * qu'évoqués, sans lien (ils seraient encore en 404 à la date de publication).
 *
 * Points sensibles : aucun chiffre sur le cabinet ; chiffres macro INSEE et CNP vérifiés
 * le 24/09/2026 ; le volet santé (TMS, stress) s'appuie sur l'INRS et renvoie vers le
 * médecin du travail, sans conseil médical.
 */
export const article: Article = {
  slug: "gain-de-productivite",

  motCle: "gain de productivité (390/mois, KD 20) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "productivité industrielle (480/mois)",
    "gestion de la productivité (590/mois)",
    "améliorer la productivité d'une PME",
  ],

  // 39 / 42
  metaTitle: "Gain de productivité : méthode pour PME",
  // 150 / 150
  metaDescription:
    "Gain de productivité en PME : où se cachent les heures perdues, quels indicateurs suivre, comment agir sans épuiser les équipes. La méthode pas à pas.",

  h1: "Gain de productivité : où le trouver dans une PME, et comment le tenir",

  chapo:
    "Un gain de productivité, dans une PME, se trouve rarement dans une machine neuve ou dans une cadence plus rapide. Il se trouve dans les heures que l'organisation perd sans les voir : attentes entre deux postes, informations qui arrivent en retard, reprises, changements de série improvisés, décisions qui remontent toutes au même bureau. La méthode tient en peu de mots : mesurer le flux réel avant d'agir, traiter deux ou trois pertes à la fois avec ceux qui font le travail, puis tenir le résultat dans la durée. Et vérifier à chaque étape que le gain ne se paie pas en fatigue ou en troubles musculosquelettiques.",

  essentiel: {
    reponse:
      "Un gain de productivité est l'augmentation de ce qu'une entreprise produit pour une même quantité de travail et de capital, ou la baisse des ressources nécessaires pour produire autant. En France, la productivité du travail restait en 2025 environ 4 points sous sa tendance d'avant 2020, et l'écart atteignait 5,6 points dans l'industrie manufacturière, selon l'INSEE. Dans une PME, les gains durables viennent surtout de l'organisation : flux, interfaces, qualité du premier coup, circulation de l'information. L'investissement technologique ne paie que sur un processus déjà stabilisé.",
    points: [
      "Productivité ne veut pas dire cadence : on cherche à supprimer des pertes, pas à faire courir les équipes",
      "Mesurer d'abord : temps réellement productif, taux de rendement synthétique, non-qualité, délai de traversée",
      "Les pertes se logent surtout aux interfaces : entre deux postes, deux services, deux équipes",
      "Selon le Conseil national de productivité, les PME citent l'organisation et les compétences avant la technologie comme frein",
      "Un gain qui dégrade la santé au travail n'en est pas un : l'INRS documente ce risque depuis des années",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Gain de productivité : de quoi parle-t-on vraiment ?",
      blocs: [
        {
          type: "p",
          texte:
            "La productivité rapporte ce que l'entreprise produit aux ressources qu'elle y consacre. **Un gain de productivité, c'est produire davantage avec les mêmes moyens, ou autant avec moins.** La définition paraît simple. Elle cache pourtant trois mesures différentes, qui ne racontent pas la même histoire.",
        },
        { type: "h3", texte: "Trois façons de mesurer la productivité" },
        {
          type: "tableau",
          entetes: ["Mesure", "Ce qu'elle dit, et sa limite"],
          lignes: [
            [
              "Productivité apparente du travail (valeur ajoutée par salarié ou par heure)",
              "La plus utilisée. Elle mélange tout : un meilleur prix de vente l'améliore autant qu'une meilleure organisation",
            ],
            [
              "Productivité physique (pièces, tonnes, dossiers par heure travaillée)",
              "La plus concrète pour un atelier. Elle ignore la qualité : produire plus de rebuts la fait monter",
            ],
            [
              "Productivité globale des facteurs",
              "Ce qui reste une fois le travail et le capital pris en compte : l'organisation, le savoir-faire, l'innovation. Difficile à calculer à l'échelle d'une PME",
            ],
          ],
        },
        { type: "h3", texte: "Productivité n'est pas cadence" },
        {
          type: "p",
          texte:
            "La confusion la plus coûteuse consiste à assimiler gain de productivité et accélération. Demander à un opérateur de travailler plus vite sur un poste qui attend ses pièces vingt minutes par heure ne change rien au débit de l'atelier. Le gain se trouve dans les vingt minutes, pas dans la vitesse du geste. C'est la raison pour laquelle un chantier de productivité commence par l'observation du flux, et non par un objectif de cadence. **Un gain de productivité durable relève donc autant du [conseil en organisation](/transformation-entreprise/) que de la technique de production.**",
        },
      ],
    },

    {
      label: "Les chiffres",
      titre: "Productivité industrielle en France : ce que disent les chiffres",
      blocs: [
        {
          type: "p",
          texte:
            "Le sujet n'est pas propre à votre entreprise. Depuis 2020, la productivité française fait l'objet d'un suivi serré par l'INSEE et par le Conseil national de productivité, et l'industrie y apparaît comme le secteur le plus en retard.",
        },
        { type: "h3", texte: "Un rattrapage partiel, un retard qui demeure" },
        {
          type: "p",
          texte:
            "Selon le blog de l'INSEE, dans [Les gains de productivité français en partie retrouvés, sans effacer le retard accumulé](https://blog.insee.fr/les-gains-de-productivite-francais-en-partie-retrouves/) (mai 2026), la productivité apparente du travail progressait de 0,5 à 0,6 % par an entre 2011 et 2019. Après la crise sanitaire, elle a décroché, puis s'est redressée à partir de 2023. En 2025, elle reste environ 4,3 points sous la trajectoire qu'elle aurait suivie si les gains d'avant-crise s'étaient poursuivis.",
        },
        { type: "h3", texte: "L'industrie manufacturière en tête des retards" },
        {
          type: "p",
          texte:
            "Le détail par secteur est plus parlant pour un dirigeant de PME industrielle. **L'INSEE estime l'écart de l'industrie manufacturière à sa tendance d'avant-crise à 5,6 points en 2025**, et à environ 15 points dans les branches grandes consommatrices d'énergie. À l'inverse, les services marchands hors commerce ont dépassé leur tendance. Autrement dit, la productivité industrielle est aujourd'hui l'endroit où l'écart est le plus grand, donc aussi celui où il reste le plus à reprendre.",
        },
        { type: "h3", texte: "Les entreprises leaders se distinguent par leur organisation" },
        {
          type: "p",
          texte:
            "Le sixième rapport du Conseil national de productivité, [Les nouveaux contours de la productivité française](https://www.strategie-plan.gouv.fr/files/files/Publications/2026/2026-07-01%20-%20CNP%20-%20Rapport%20et%20NS/CNP-2026-Sixi%C3%A8me-Rapport-1juillet15h-FINAL-COUV.pdf) (juillet 2026), observe que les écarts entre entreprises sont durables. Les plus productives « disposent de pratiques managériales plus avancées et mobilisent des capacités organisationnelles » qui se renforcent avec l'expérience. Le même rapport note que les TPE et PME citent rarement l'absence de technologie comme premier obstacle : elles évoquent plutôt le manque de compétences, les contraintes organisationnelles, le temps nécessaire pour conduire le changement et la difficulté d'intégrer les outils dans les processus existants.",
        },
      ],
    },

    {
      label: "Les pertes",
      titre: "Où se cachent les gains de productivité dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une entreprise de 10 à 250 salariés, les pertes ne se voient pas dans les comptes. Elles se voient sur le terrain, à condition de suivre une commande ou une pièce du début à la fin. Quatre familles de pertes reviennent presque toujours.",
        },
        { type: "h3", texte: "Les attentes et les ruptures de flux" },
        {
          type: "p",
          texte:
            "Un poste attend une pièce, un outil, une validation, un plan à jour. Un autre produit des stocks que personne n'attend. Chaque attente paraît anodine prise isolément ; mises bout à bout sur une semaine, elles représentent souvent plus de temps que n'importe quel gain de cadence. Le délai de traversée, c'est-à-dire le temps entre l'entrée d'une commande et sa livraison, en est le meilleur révélateur.",
        },
        { type: "h3", texte: "Les interfaces entre services" },
        {
          type: "p",
          texte:
            "Le bureau d'études transmet un dossier incomplet, la production le découvre au lancement, le commercial a promis un délai que personne n'a vérifié. **La perte n'est ni chez l'un ni chez l'autre : elle est entre les deux.** C'est pour cela qu'un chef d'atelier seul peine à la réduire. Clarifier qui transmet quoi, à qui et quand relève autant de l'[organigramme de l'entreprise](/infos-utiles/organigramme-entreprise/) que de la production.",
        },
        { type: "h3", texte: "La non-qualité et les reprises" },
        {
          type: "p",
          texte:
            "Une pièce reprise est produite deux fois et vendue une seule. Les rebuts, retouches, retours clients et gestes de contrôle ajoutés « pour être sûr » pèsent directement sur la productivité. Ils se mesurent mal quand personne ne les compte, et c'est justement pour cela qu'ils durent.",
        },
        { type: "h3", texte: "L'information qui remonte au dirigeant" },
        {
          type: "p",
          texte:
            "Dans beaucoup de PME, l'atelier s'arrête pour attendre une décision que seul le dirigeant peut prendre : un arbitrage de priorité, un achat, une dérogation qualité. Le temps perdu ne figure dans aucun indicateur. Il disparaît dès que les règles de décision sont écrites et que le chef d'équipe a le droit explicite de trancher dans son périmètre.",
        },
      ],
    },

    {
      label: "Mesurer",
      titre: "Gestion de la productivité : les indicateurs à suivre",
      blocs: [
        {
          type: "p",
          texte:
            "La gestion de la productivité commence par une mesure honnête. Pas un tableau de bord de trente lignes : quatre ou cinq indicateurs, suivis chaque semaine, compris par ceux qui travaillent sur le terrain. Le taux de rendement synthétique (TRS) est le plus répandu dans l'industrie. Il multiplie trois taux : la disponibilité (le temps où la machine tourne sur le temps prévu), la performance (la cadence réelle sur la cadence nominale) et la qualité (les pièces bonnes sur les pièces produites).",
        },
        {
          type: "tableau",
          entetes: ["Indicateur", "Ce qu'il révèle"],
          lignes: [
            [
              "Taux de rendement synthétique (TRS)",
              "Où se perd la capacité d'un équipement : pannes et changements de série, ralentissements, ou non-qualité",
            ],
            [
              "Délai de traversée",
              "Le temps qu'une commande passe à attendre plutôt qu'à être travaillée",
            ],
            [
              "Taux de non-qualité (rebuts, reprises, retours)",
              "Le travail fait deux fois, et son coût réel",
            ],
            [
              "Heures productives sur heures payées",
              "La part du temps de travail absorbée par les attentes, recherches et ressaisies",
            ],
            [
              "Valeur ajoutée par salarié",
              "La tendance d'ensemble, à suivre sur plusieurs années plutôt que mois par mois",
            ],
          ],
        },
        { type: "h3", texte: "Relier la productivité aux marges" },
        {
          type: "p",
          texte:
            "Un gain de productivité n'a de valeur que s'il se retrouve dans les comptes. Une heure libérée sur une ligne saturée augmente le chiffre d'affaires possible ; la même heure sur une ligne déjà en sous-charge ne rapporte rien tant qu'elle n'est pas réaffectée. Mettre en regard les gains avec votre [seuil de rentabilité](/infos-utiles/seuil-de-rentabilite/) évite de célébrer des progrès qui ne changent pas le résultat.",
        },
        {
          type: "encadre",
          titre: "Un piège fréquent",
          texte:
            "Mesurer la productivité individuelle des opérateurs plutôt que celle du flux. L'indicateur pousse chacun à optimiser son poste, au détriment du poste suivant. Mesurez d'abord ce qui sort de l'atelier, ensuite seulement ce qui se passe à chaque poste.",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Améliorer la productivité industrielle en cinq temps",
      blocs: [
        {
          type: "p",
          texte:
            "Les démarches qui tiennent se ressemblent, quel que soit le nom qu'on leur donne. Elles partent du terrain, avancent par petits chantiers et associent ceux qui font le travail. Voici l'enchaînement que nous recommandons.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Observer le travail réel.** Suivre une commande de bout en bout, sur le terrain, en notant chaque attente, chaque ressaisie, chaque retour en arrière. Ce que décrivent les procédures et ce qui se passe réellement diffère presque toujours.",
            "**Cartographier le flux.** Dessiner le parcours, avec les temps de travail et les temps d'attente. La carte montre où se forment les files d'attente et quelles interfaces coûtent le plus.",
            "**Choisir deux ou trois chantiers.** Pas dix. Les pertes les plus lourdes et les plus simples à traiter d'abord, avec un responsable et une échéance pour chacun.",
            "**Construire la solution avec les équipes.** Les opérateurs connaissent les contournements qu'ils pratiquent chaque jour. Une solution imposée d'en haut sera contournée à son tour.",
            "**Standardiser et tenir.** Écrire la nouvelle façon de faire, la suivre dans les indicateurs, en parler chaque semaine. Sans cette étape, l'atelier revient à l'état antérieur en quelques mois.",
          ],
        },
        {
          type: "p",
          texte:
            "Les outils de l'amélioration continue (5S, changement rapide de série, résolution de problème structurée, management visuel) s'inscrivent dans ce cadre. Ils sont utiles, mais ils ne remplacent pas le diagnostic : appliqués sans savoir où se trouve la perte principale, ils améliorent ce qui n'en avait pas besoin.",
        },
      ],
    },

    {
      label: "Santé au travail",
      titre: "Productivité et santé au travail : ne pas gagner d'un côté pour perdre de l'autre",
      blocs: [
        {
          type: "p",
          texte:
            "Un chantier de productivité mal conduit peut dégrader les conditions de travail. Ce n'est pas une hypothèse : l'INRS, l'institut de référence en prévention des risques professionnels, a documenté ce risque de façon détaillée.",
        },
        { type: "h3", texte: "Ce que relève l'INRS" },
        {
          type: "p",
          texte:
            "Dans sa page [Lean et santé, de quoi parle-t-on ?](https://www.inrs.fr/risques/lean-management/lean-sante.html), l'INRS écrit que « les phénomènes d'intensification du travail, de recrudescence des troubles musculosquelettiques (TMS) et du stress coïncident avec la diffusion massive des outils inspirés du Lean ». Il ajoute que les bénéfices attendus, comme l'autonomie et la satisfaction des salariés, n'ont souvent pas été au rendez-vous.",
        },
        {
          type: "p",
          texte:
            "Sa synthèse [Lean management : ce qu'il faut retenir](https://www.inrs.fr/risques/lean-management/ce-qu-il-faut-retenir.html) identifie plusieurs écueils : une polyvalence mise en place sans formation suffisante, une standardisation qui retire aux opérateurs toute marge pour résoudre les problèmes, la suppression de marges de sécurité jugées « sans valeur ajoutée », une pression managériale qui dissuade de faire remonter les difficultés, et une participation de façade. L'INRS précise aussi qu'une démarche de ce type peut se conjuguer avec la prévention, à condition de l'y articuler dès le départ.",
        },
        { type: "h3", texte: "Trois garde-fous simples" },
        {
          type: "liste",
          items: [
            "Associer dès le départ les personnes concernées, et le représentant du personnel s'il existe, à l'analyse des postes modifiés",
            "Regarder l'effet de chaque changement sur les gestes, les postures et la charge, pas seulement sur le débit",
            "Solliciter votre service de prévention et de santé au travail et le médecin du travail quand un poste est réorganisé en profondeur : ils sont là pour cela",
          ],
        },
        {
          type: "p",
          texte:
            "**Supprimer une attente, c'est un gain. Supprimer une pause dont le corps avait besoin, c'est une dette.** Elle se rembourse plus tard, en arrêts de travail, en départs et en savoir-faire perdu.",
        },
      ],
    },

    {
      label: "Investir",
      titre: "Investissement, automatisation, IA : quand la technologie produit un gain de productivité",
      blocs: [
        {
          type: "p",
          texte:
            "La tentation est forte de chercher le gain de productivité dans un équipement neuf, un logiciel de planification ou un outil d'intelligence artificielle. Parfois, c'est la bonne réponse. Souvent, c'est une réponse trop précoce.",
        },
        { type: "h3", texte: "Stabiliser avant d'automatiser" },
        {
          type: "p",
          texte:
            "Automatiser un processus instable, c'est produire plus vite les mêmes erreurs. Un robot installé en aval d'un poste qui livre des pièces irrégulières attendra comme l'opérateur qu'il remplace. Un logiciel de planification alimenté par des temps de gamme faux produira des plannings faux. Le Conseil national de productivité le dit à sa manière : la difficulté des PME tient moins à l'accès aux technologies qu'à leur intégration dans les processus existants.",
        },
        { type: "h3", texte: "Chiffrer avant de décider" },
        {
          type: "p",
          texte:
            "Un investissement de productivité se justifie par des heures libérées, de la non-qualité évitée ou de la capacité supplémentaire vendable. Ces trois éléments se chiffrent à partir des indicateurs du chapitre précédent. Quand l'enjeu financier est lourd, le regard d'un [DAF externalisé](/daf-externalise-toulouse/) aide à vérifier ce que l'entreprise peut absorber, et à quelles conditions de financement.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Gain de productivité : ce qu'un regard extérieur apporte",
      blocs: [
        {
          type: "p",
          texte:
            "Une équipe qui vit un flux tous les jours finit par ne plus voir ses pertes : elles font partie du paysage. Un regard extérieur n'en sait pas plus sur votre métier que vos chefs d'équipe. Il voit en revanche ce qu'ils ont cessé de remarquer, et il peut poser les questions que personne n'ose poser en interne.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, ce travail s'inscrit dans le parcours de transformation de l'entreprise. Il commence par l'étape Cartographier : immersion terrain, entretiens, lecture des flux, des rôles et des tensions, pour aboutir à une stratégie d'action priorisée fondée sur le fonctionnement réel. Sur les sujets de production, le pilier production et performance est porté par Yohan Castelar, qui structure processus, interfaces et flux d'information, et Patrick Calvet, qui agit sur le management, les investissements et l'amélioration continue des sites. Un conseiller référent reste votre interlocuteur ; une autre expertise n'intervient que si le sujet l'exige, par exemple la finance quand un investissement est en jeu.",
        },
        {
          type: "p",
          texte:
            "Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord. On ne touche pas à ce qui fonctionne. Si vous voulez d'abord savoir où se situe le principal frein de votre entreprise, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un gain de productivité ?",
      r: [
        "C'est l'augmentation de la production obtenue avec les mêmes ressources, ou la baisse des ressources nécessaires pour produire autant. Il se mesure le plus souvent par la valeur ajoutée par salarié ou par heure travaillée, et dans un atelier par des indicateurs physiques comme le taux de rendement synthétique. Dans une PME, les gains durables viennent surtout de la suppression des attentes, des reprises et des pertes aux interfaces entre services.",
      ],
    },
    {
      q: "Comment calculer la productivité d'une entreprise ?",
      r: [
        "La mesure la plus courante est la productivité apparente du travail : la valeur ajoutée divisée par le nombre de salariés ou par le nombre d'heures travaillées. Dans un atelier, on complète par des mesures physiques, comme le nombre de pièces bonnes par heure ou le taux de rendement synthétique, qui multiplie disponibilité, performance et qualité. Suivez ces indicateurs sur plusieurs mois : une variation isolée ne dit presque rien.",
      ],
    },
    {
      q: "Comment améliorer la productivité industrielle sans investir ?",
      r: [
        "En s'attaquant d'abord aux pertes d'organisation : attentes entre postes, changements de série improvisés, informations incomplètes, reprises et décisions qui attendent le dirigeant. Ces pertes se révèlent en suivant une commande de bout en bout sur le terrain. Traitées deux ou trois à la fois, avec les équipes concernées, elles libèrent souvent de la capacité avant tout investissement, et rendent l'investissement ultérieur plus rentable.",
      ],
    },
    {
      q: "Productivité et bien-être au travail sont-ils compatibles ?",
      r: [
        "Oui, à condition de chercher le gain dans les pertes du système et non dans l'intensification du travail. L'INRS a documenté les effets de démarches de productivité mal conduites : hausse des troubles musculosquelettiques, du stress, perte d'autonomie. Associer les équipes, regarder l'effet de chaque changement sur les postes et solliciter le médecin du travail lors d'une réorganisation profonde permettent de concilier les deux.",
      ],
    },
    {
      q: "Pourquoi la productivité française a-t-elle ralenti ?",
      r: [
        "L'INSEE et le Conseil national de productivité avancent plusieurs explications : effets de composition de l'emploi, avec davantage d'apprentis et de micro-entrepreneurs, difficultés d'approvisionnement dans certaines branches, recul marqué des branches grandes consommatrices d'énergie. En 2025, l'écart à la tendance d'avant-crise était d'environ 4,3 points pour l'ensemble de l'économie et de 5,6 points pour l'industrie manufacturière. Les services marchands hors commerce, eux, ont dépassé leur tendance.",
      ],
    },
    {
      q: "Faut-il un consultant pour gagner en productivité ?",
      r: [
        "Pas toujours. Une entreprise qui dispose d'un responsable de production disponible et d'indicateurs fiables peut conduire elle-même les premiers chantiers. Un regard extérieur devient utile quand les pertes se situent entre les services, quand les équipes ne les voient plus, ou quand le dirigeant fait lui-même partie du goulet d'étranglement. Dans tous les cas, le périmètre doit être défini et borné dès le départ.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Les gains de productivité français en partie retrouvés, sans effacer le retard accumulé",
      editeur: "INSEE, Le blog de l'Insee (mai 2026)",
      url: "https://blog.insee.fr/les-gains-de-productivite-francais-en-partie-retrouves/",
    },
    {
      titre:
        "Les nouveaux contours de la productivité française : diffusion de l'innovation, vieillissement et réarmement. Sixième rapport du Conseil national de productivité",
      editeur: "Conseil national de productivité (juillet 2026)",
      url: "https://www.strategie-plan.gouv.fr/files/files/Publications/2026/2026-07-01%20-%20CNP%20-%20Rapport%20et%20NS/CNP-2026-Sixi%C3%A8me-Rapport-1juillet15h-FINAL-COUV.pdf",
    },
    {
      titre: "Lean management. Lean et santé, de quoi parle-t-on ?",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/lean-management/lean-sante.html",
    },
    {
      titre: "Lean management. Ce qu'il faut retenir",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/lean-management/ce-qu-il-faut-retenir.html",
    },
  ],

  auteur: "yohan-castelar",
  datePublication: "2026-11-23",
  accent: "production",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: true,
};
