import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « prévisionnel financier » (590/mois, KD 22). Secondaires : « comment
 * faire un prévisionnel » (320), « bilan prévisionnel » (260).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite l'outil (construire, présenter et faire vivre un prévisionnel
 * financier dans une PME en activité) et renvoie vers le pilier.
 *
 * POINTS SENSIBLES
 * - Titre réglementé : le cabinet ne tient aucune comptabilité. Marjorie Anglade
 *   est expert-comptable diplômée (DEC 2021), inscrite à l'Ordre, mais intervient
 *   ici en directrice financière externalisée. Le texte ne doit jamais laisser
 *   entendre une tenue de comptes ni une attestation des comptes par le cabinet.
 * - L'obligation légale (L232-2 et R232-2 du Code de commerce) ne vise que les
 *   sociétés de 300 salariés ou 18 M€ de CA : rappelé comme tel, sans extrapoler.
 * - Chiffres Banque de France : enquête sur l'accès au crédit, 2e trimestre 2026.
 *   À mettre à jour si l'article est relu longtemps après.
 * - Liens internes limités aux articles publiés avant le 22/02/2027
 *   (calcul-bfr, seuil-de-rentabilite, budget-de-tresorerie,
 *   daf-externe-ou-expert-comptable).
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "previsionnel-financier",

  motCle: "prévisionnel financier (590/mois, KD 22) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "comment faire un prévisionnel (320/mois)",
    "bilan prévisionnel (260/mois)",
    "compte de résultat prévisionnel",
    "plan de financement",
  ],

  // 41 / 42
  metaTitle: "Prévisionnel financier : méthode pour PME",
  // 146 / 150
  metaDescription:
    "Prévisionnel financier d'une PME : les documents qui le composent, la méthode en six étapes, le bilan prévisionnel et la présentation à la banque.",

  h1: "Prévisionnel financier : le construire, le défendre et s'en servir pour décider",

  chapo:
    "Un prévisionnel financier traduit en chiffres ce que l'entreprise prévoit de faire dans les un à trois ans qui viennent : ce qu'elle vendra, ce qu'elle dépensera, ce qu'elle investira et comment elle le financera. Il ne sert pas qu'aux créateurs d'entreprise. Pour une PME en activité, c'est l'outil qui répond à la question que tout dirigeant se pose avant d'embaucher, d'investir ou de signer un prêt : est-ce que nous pouvons nous le permettre ? Un bon prévisionnel tient sur des hypothèses prudentes et assumées, se relit chaque mois face au réel, et se défend en rendez-vous bancaire sans avoir à ouvrir un tableur.",

  essentiel: {
    reponse:
      "Le prévisionnel financier est l'ensemble des tableaux qui projettent l'activité d'une entreprise sur un à trois ans : compte de résultat prévisionnel, plan de financement, plan de trésorerie mensuel, seuil de rentabilité et bilan prévisionnel. Il sert à vérifier qu'un projet est rentable et finançable, à convaincre une banque ou un investisseur, puis à piloter en comparant chaque mois le prévu et le réel. Pour une PME, il est surtout utile avant une décision engageante : investissement, recrutement, croissance, reprise.",
    points: [
      "Cinq tableaux : compte de résultat, plan de financement, trésorerie mensuelle, seuil de rentabilité, bilan prévisionnel",
      "Horizon habituel : trois ans, dont la première année au mois près pour la trésorerie",
      "La valeur d'un prévisionnel tient à ses hypothèses : chaque chiffre doit pouvoir s'expliquer",
      "Bpifrance Création conseille de minorer les recettes et de majorer les coûts",
      "Un prévisionnel qui n'est jamais comparé au réel ne sert qu'une fois, pour le dossier",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Prévisionnel financier : définition, et pourquoi il concerne aussi les PME en activité",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot évoque souvent le business plan d'un créateur d'entreprise. Les guides publics en parlent d'ailleurs surtout sous cet angle. Bpifrance Création présente les [prévisions financières](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/previsions-financieres) comme la traduction chiffrée du projet, destinée à en vérifier la viabilité et la rentabilité, et à convaincre les partenaires financiers. **Mais une entreprise de 40 salariés a exactement le même besoin chaque fois qu'elle s'apprête à engager de l'argent qu'elle n'a pas encore gagné.**",
        },
        { type: "h3", texte: "Une photographie de l'avenir, pas du passé" },
        {
          type: "p",
          texte:
            "Vos comptes annuels décrivent l'exercice écoulé. Ils arrivent plusieurs mois après la clôture et répondent à la question « qu'avons-nous fait ? ». Le prévisionnel répond à une autre question : « que se passera-t-il si nous faisons ceci ? ». Il part des mêmes catégories comptables, mais il regarde devant. C'est ce qui le rend utile pour décider, et aussi ce qui le rend fragile : il ne vaut que par les hypothèses qu'on y met.",
        },
        { type: "h3", texte: "Les moments où il devient indispensable" },
        {
          type: "liste",
          items: [
            "Un investissement lourd : machine, bâtiment, système d'information",
            "Une demande de prêt ou de ligne de trésorerie auprès de la banque",
            "Une croissance rapide, qui consomme de la trésorerie avant d'en produire",
            "Un recrutement structurant : un directeur, une équipe commerciale",
            "Une reprise, une cession, l'entrée d'un investisseur",
          ],
        },
        {
          type: "p",
          texte:
            "Dans une PME de 10 à 250 salariés, ce travail revient souvent au dirigeant, seul, un dimanche soir, avec un modèle téléchargé. C'est précisément l'une des missions d'un [DAF externalisé](/daf-externalise-toulouse/) : construire le prévisionnel avec vous, en partant de votre métier, puis le tenir à jour.",
        },
      ],
    },

    {
      label: "Les documents",
      titre: "Les cinq documents qui composent un prévisionnel financier",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création décompose les prévisions financières en cinq tableaux, établis sur un à trois ans. La CCI, dans son guide [Le prévisionnel financier](https://business-builder.cci.fr/guide-creation/le-previsionnel-financier), y ajoute les soldes intermédiaires de gestion, qui détaillent la formation du résultat. Chacun répond à une question précise.",
        },
        {
          type: "tableau",
          entetes: ["Document", "La question à laquelle il répond"],
          lignes: [
            [
              "Compte de résultat prévisionnel",
              "L'activité dégagera-t-elle un bénéfice, et lequel, année par année ?",
            ],
            [
              "Plan de financement",
              "Les ressources durables (apports, emprunts, autofinancement) couvrent-elles les besoins durables (investissements, hausse du BFR, remboursements) ?",
            ],
            [
              "Plan de trésorerie mensuel",
              "Y aura-t-il assez d'argent sur le compte chaque mois, compte tenu des délais d'encaissement et de paiement ?",
            ],
            [
              "Seuil de rentabilité",
              "Quel chiffre d'affaires faut-il atteindre pour couvrir toutes les charges ?",
            ],
            [
              "Bilan prévisionnel",
              "À quoi ressemblera le patrimoine de l'entreprise en fin d'exercice : ce qu'elle possède, ce qu'elle doit, avec quels fonds propres ?",
            ],
          ],
        },
        { type: "h3", texte: "Trois tableaux qui doivent se parler" },
        {
          type: "p",
          texte:
            "Le compte de résultat dit si vous gagnez de l'argent. Le plan de trésorerie dit si vous en avez. Le plan de financement dit si la structure tient sur la durée. Une entreprise peut afficher un bénéfice et manquer de trésorerie, parce que ses clients paient à 60 jours et ses stocks gonflent : c'est tout l'enjeu du [calcul du BFR](/infos-utiles/calcul-bfr/).",
        },
        { type: "h3", texte: "Le plan de financement à trois ans" },
        {
          type: "p",
          texte:
            "Bpifrance Création détaille la construction du [plan de financement à trois ans](https://bpifrance-creation.fr/encyclopedie/reprendre-entreprise-etapes/faire-son-business-plan-reprise/plan-financement-a-3-ans) : deux colonnes, besoins et ressources, une par année. Deux règles évitent les erreurs les plus fréquentes. Pour les années 2 et 3, on n'inscrit que l'accroissement du BFR, pas son montant total. Et seul le capital des emprunts remboursés figure dans le plan, les intérêts relevant du compte de résultat. **Chaque année doit dégager un excédent de ressources : c'est votre marge de sécurité.**",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Comment faire un prévisionnel financier en six étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création recommande, dans sa fiche [Par où commencer pour faire ses comptes prévisionnels](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/ou-commencer-faire-ses), de rassembler d'abord toutes les entrées et sorties d'argent « en vrac », avant de les classer. L'ordre ci-dessous reprend cette logique, adaptée à une entreprise qui a déjà un historique.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Partir du réel.** Les deux derniers exercices et la situation de l'année en cours donnent la base : marges par activité, poids des charges fixes, délais clients et fournisseurs constatés.",
            "**Poser le chiffre d'affaires.** Par activité, par gros client ou par canal, jamais d'un seul bloc. Chaque ligne doit s'appuyer sur un fait : carnet de commandes, contrats signés, taux de transformation observé.",
            "**Chiffrer les charges.** Distinguez les charges variables, qui suivent l'activité, des charges fixes, qui tombent quoi qu'il arrive. C'est ce tri qui permet ensuite de calculer le seuil.",
            "**Lister les investissements et leur financement.** Montant, date, durée d'amortissement, mode de financement : apport, emprunt, crédit-bail, autofinancement.",
            "**Construire la trésorerie mois par mois.** Chaque recette et chaque dépense est placée au mois où elle sera encaissée ou payée, TVA comprise, et non au mois où elle est facturée.",
            "**Contrôler la cohérence.** Le bilan prévisionnel doit être équilibré, la trésorerie de fin d'année doit correspondre à celle du plan mensuel, et chaque hypothèse doit tenir en une phrase.",
          ],
        },
        { type: "h3", texte: "Le plan de trésorerie, étape la plus utile" },
        {
          type: "p",
          texte:
            "Si vous ne deviez faire qu'un tableau, ce serait celui-là. Bpifrance Création recommande d'établir « un plan de trésorerie glissant sur douze mois avec un scénario prudent ». Nous avons consacré un article entier à la construction d'un [budget de trésorerie](/infos-utiles/budget-de-tresorerie/) : les lignes que l'on oublie, et la façon de le tenir à jour.",
        },
        { type: "h3", texte: "Le seuil de rentabilité, pour tester le réalisme" },
        {
          type: "p",
          texte:
            "Une fois les charges fixes connues, le [seuil de rentabilité](/infos-utiles/seuil-de-rentabilite/) indique le chiffre d'affaires minimal à atteindre. Comparez-le à votre activité actuelle. Si le projet exige de doubler vos ventes pour simplement couvrir ses coûts, le prévisionnel vient de vous rendre service : il vous a évité une mauvaise décision.",
        },
      ],
    },

    {
      label: "Bilan prévisionnel",
      titre: "Bilan prévisionnel : le lire sans être financier",
      blocs: [
        {
          type: "p",
          texte:
            "Le bilan prévisionnel est le document le moins regardé par les dirigeants, et souvent le plus lu par les banquiers. La CCI le décrit comme une « photographie du patrimoine d'une entreprise », qui respecte une règle intangible : l'actif est égal au passif. À l'actif, ce que l'entreprise possède et ce qu'on lui doit. Au passif, la manière dont tout cela est financé.",
        },
        { type: "h3", texte: "Trois lectures qui suffisent" },
        {
          type: "p",
          texte:
            "Le guide de la CCI [Le bilan, le BFR et la trésorerie](https://business-builder.cci.fr/guide-creation/le-previsionnel-financier/le-bilan-le-bfr-et-la-tresorerie) résume la relation en une équation : fonds de roulement moins besoin en fonds de roulement égale trésorerie. De là, trois questions suffisent à lire votre bilan prévisionnel.",
        },
        {
          type: "liste",
          items: [
            "**Les fonds propres augmentent-ils ?** Si les bénéfices prévus sont distribués ou absorbés par des pertes, la structure s'affaiblit, et la capacité à emprunter demain avec elle.",
            "**Le fonds de roulement couvre-t-il le BFR ?** S'il ne le couvre pas, la différence se finance à court terme, par le découvert ou l'affacturage, ce qui coûte cher et fragilise.",
            "**L'endettement reste-t-il proportionné ?** Un investissement financé entièrement par emprunt pèse sur le passif pendant des années. Le bilan prévisionnel le montre avant que la banque ne le relève.",
          ],
        },
      ],
    },

    {
      label: "Les hypothèses",
      titre: "Les hypothèses : là où un prévisionnel se gagne ou se perd",
      exergue:
        "Un prévisionnel ne se juge pas à la beauté de ses tableaux, mais à la solidité de chaque chiffre qui les alimente.",
      blocs: [
        {
          type: "p",
          texte:
            "Presque tous les prévisionnels ratés le sont pour la même raison : un chiffre d'affaires qui monte en ligne droite et des charges qui oublient la moitié de la réalité. Bpifrance Création le dit sans détour : il est « prudent de minimiser les recettes et de maximiser les coûts pour éviter les mauvaises surprises ».",
        },
        { type: "h3", texte: "Les délais de paiement, première source d'écart" },
        {
          type: "p",
          texte:
            "Une vente facturée en mars n'est pas encaissée en mars. Le Code de commerce, à l'[article L441-10](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392), plafonne les délais de paiement entre professionnels à 60 jours après la date d'émission de la facture, ou 45 jours fin de mois si le contrat le prévoit. Dans la pratique, Bpifrance Création observe des délais généralement compris entre 30 et 45 jours en B2B. Utilisez les délais que vous constatez réellement chez vos clients, pas ceux de vos conditions générales.",
        },
        { type: "h3", texte: "Une marge de sécurité sur les charges" },
        {
          type: "p",
          texte:
            "La même fiche conseille d'intégrer une marge de sécurité de 5 à 10 % sur certaines charges. C'est particulièrement utile sur les postes que vous maîtrisez mal : énergie, matières premières, sous-traitance, recrutements dont la date peut glisser.",
        },
        { type: "h3", texte: "Trois scénarios plutôt qu'un" },
        {
          type: "tableau",
          entetes: ["Scénario", "Ce qu'il vous apprend"],
          lignes: [
            [
              "Central",
              "Ce que vous pensez le plus probable, avec des hypothèses justifiées ligne par ligne",
            ],
            [
              "Prudent",
              "Chiffre d'affaires en retrait, un gros client perdu ou décalé : l'entreprise tient-elle, et combien de temps ?",
            ],
            [
              "Tendu",
              "Le cas où tout glisse en même temps : il fixe le montant de trésorerie ou de financement de sécurité à prévoir",
            ],
          ],
        },
      ],
    },

    {
      label: "La banque",
      titre: "Présenter son prévisionnel à la banque",
      blocs: [
        {
          type: "p",
          texte:
            "La bonne nouvelle d'abord. Selon l'enquête trimestrielle de la Banque de France sur l'[accès des entreprises au crédit](https://www.banque-france.fr/en/statistics/loans/access-bank-financing-companies-2026-q2), au deuxième trimestre 2026, 96 % des PME qui ont demandé un crédit d'investissement l'ont obtenu en totalité ou au moins aux trois quarts. Pour les crédits de trésorerie, le taux tombe à 83 %. **Un besoin de trésorerie découvert tard se finance plus difficilement qu'un investissement préparé.**",
        },
        { type: "h3", texte: "Ce que le banquier regarde" },
        {
          type: "liste",
          items: [
            "La capacité de remboursement : l'autofinancement prévu couvre-t-il les échéances, avec de la marge ?",
            "La cohérence avec l'historique : une croissance annoncée très au-dessus de celle des trois dernières années doit être expliquée",
            "Le plan de trésorerie : le point bas de l'année, et la façon dont vous comptez le passer",
            "L'apport de l'entreprise ou des associés : la part du risque que vous prenez vous-même",
          ],
        },
        { type: "h3", texte: "Défendre ses chiffres en rendez-vous" },
        {
          type: "p",
          texte:
            "Un prévisionnel envoyé sans explication est lu comme un tableur. Accompagnez-le d'une note courte : le projet en quelques lignes, les trois ou quatre hypothèses clés et leur justification, le scénario prudent et ce que vous feriez s'il se réalisait. Le dirigeant qui répond sans hésiter à « et si votre premier client réduit ses commandes de 20 % ? » a déjà gagné la moitié du rendez-vous.",
        },
      ],
    },

    {
      label: "Le pilotage",
      titre: "Faire vivre le prévisionnel financier après le dossier",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des prévisionnels meurent le jour où le prêt est accordé. C'est un gâchis : le travail le plus lourd, poser les hypothèses, est déjà fait.",
        },
        { type: "h3", texte: "Le suivi prévu-réel" },
        {
          type: "p",
          texte:
            "Une fois par mois, reprenez le plan de trésorerie et le compte de résultat, et placez le réel en face du prévu. Un écart n'est pas une faute : c'est une information. Un chiffre d'affaires conforme avec une trésorerie en retrait signale un problème d'encaissement. Une marge en baisse à volume constant pointe les prix ou les coûts d'achat. Chaque écart significatif mérite une explication écrite et, si besoin, une révision de l'hypothèse pour les mois suivants.",
        },
        { type: "h3", texte: "Une obligation pour les plus grandes sociétés" },
        {
          type: "p",
          texte:
            "Pour les sociétés commerciales de 300 salariés ou plus, ou de 18 millions d'euros de chiffre d'affaires, ce pilotage prévisionnel est même une obligation. L'[article L232-2 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006228895) leur impose d'établir un compte de résultat prévisionnel, un tableau de financement et un plan de financement prévisionnel, selon les seuils fixés par l'[article R232-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041603987). La plupart des PME sont en dessous. Rien ne les empêche de s'inspirer de la discipline.",
        },
        {
          type: "encadre",
          titre: "La question qui tranche",
          texte:
            "Quand avez-vous comparé, pour la dernière fois, votre prévisionnel à vos chiffres réels ? Si la réponse est « jamais depuis le rendez-vous bancaire », vous avez un document de dossier, pas un outil de pilotage.",
        },
      ],
    },

    {
      label: "Qui s'en charge",
      titre: "Qui peut construire votre prévisionnel financier",
      blocs: [
        {
          type: "p",
          texte:
            "Trois voies coexistent, et elles ne s'excluent pas. Les outils gratuits de Bpifrance Création et de la CCI conviennent bien à un projet simple, à condition de maîtriser ses hypothèses. Votre expert-comptable connaît vos comptes et peut établir le document, surtout quand il s'agit d'un dossier de financement. Un directeur financier, salarié ou externalisé, s'en sert pour piloter tout au long de l'année.",
        },
        { type: "h3", texte: "La différence entre produire et piloter" },
        {
          type: "p",
          texte:
            "Nous détaillons dans [DAF externe ou expert-comptable](/infos-utiles/daf-externe-ou-expert-comptable/) comment les deux rôles se complètent. En résumé : l'expert-comptable produit des comptes fiables, le directeur financier les transforme en décisions. Chez Un Seul Souffle, Marjorie Anglade, expert-comptable inscrite à l'Ordre, intervient comme directrice financière externalisée. Le cabinet ne tient pas votre comptabilité : il travaille à partir des comptes établis par votre expert-comptable.",
        },
        { type: "h3", texte: "Ce qu'un accompagnement change" },
        {
          type: "p",
          texte:
            "Le prévisionnel n'est plus un exercice ponctuel, mais un point mensuel : prévu, réel, écarts, décisions. Votre référente construit le modèle à partir de votre métier, vérifie d'abord que les données de base arrivent à temps, puis vous aide à préparer les arbitrages qu'il éclaire. Le périmètre est fixé avec vous au départ et ne s'élargit pas sans votre accord. Si vous voulez d'abord situer votre entreprise, commencez par un [diagnostic d'entreprise](/diagnostic/) : il montre si votre besoin tient au pilotage financier ou à autre chose.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un prévisionnel financier ?",
      r: [
        "C'est l'ensemble des tableaux qui projettent l'activité d'une entreprise sur un à trois ans : compte de résultat prévisionnel, plan de financement, plan de trésorerie mensuel, seuil de rentabilité et bilan prévisionnel. Il sert à vérifier qu'un projet est rentable et finançable, à convaincre une banque ou un investisseur, puis à piloter en comparant chaque mois le prévu et le réel.",
      ],
    },
    {
      q: "Comment faire un prévisionnel quand l'entreprise existe déjà ?",
      r: [
        "Partez de vos deux derniers exercices : marges, charges fixes, délais clients et fournisseurs constatés. Posez ensuite le chiffre d'affaires par activité en vous appuyant sur des faits, chiffrez les charges en distinguant fixes et variables, listez les investissements et leur financement, puis construisez la trésorerie mois par mois. Terminez par un contrôle de cohérence entre les tableaux.",
      ],
    },
    {
      q: "Quelle est la différence entre bilan prévisionnel et compte de résultat prévisionnel ?",
      r: [
        "Le compte de résultat prévisionnel mesure l'activité sur une période : ventes, charges, bénéfice ou perte. Le bilan prévisionnel est une photographie à une date donnée, en fin d'exercice : ce que l'entreprise possède et ce qu'on lui doit à l'actif, la façon dont c'est financé au passif. Le premier dit si vous gagnez de l'argent, le second si votre structure financière tient.",
      ],
    },
    {
      q: "Sur combien d'années faire un prévisionnel financier ?",
      r: [
        "L'usage est de trois ans pour le compte de résultat, le plan de financement et le bilan prévisionnel, avec un plan de trésorerie détaillé mois par mois sur la première année. Bpifrance Création recommande même un plan de trésorerie glissant sur douze mois, mis à jour régulièrement. Au-delà de trois ans, les hypothèses deviennent trop fragiles pour fonder une décision.",
      ],
    },
    {
      q: "Le prévisionnel financier est-il obligatoire ?",
      r: [
        "Pour la plupart des PME, non. Le Code de commerce l'impose aux sociétés commerciales d'au moins 300 salariés ou 18 millions d'euros de chiffre d'affaires, qui doivent établir un compte de résultat prévisionnel et un plan de financement prévisionnel. En pratique, la banque le demande presque toujours pour un prêt, et il reste le meilleur moyen de vérifier qu'une décision est finançable.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Les prévisions financières pour vérifier la faisabilité de votre projet de création d'entreprise",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/previsions-financieres",
    },
    {
      titre:
        "Par où commencer pour faire ses comptes prévisionnels et vérifier la viabilité économique du projet ?",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/ou-commencer-faire-ses",
    },
    {
      titre: "Plan de financement à 3 ans pour la reprise d'une entreprise",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/reprendre-entreprise-etapes/faire-son-business-plan-reprise/plan-financement-a-3-ans",
    },
    {
      titre: "Le prévisionnel financier : estimer la viabilité de son entreprise",
      editeur: "CCI France (CCI Business Builder)",
      url: "https://business-builder.cci.fr/guide-creation/le-previsionnel-financier",
    },
    {
      titre: "Le bilan, le BFR et la trésorerie",
      editeur: "CCI France (CCI Business Builder)",
      url: "https://business-builder.cci.fr/guide-creation/le-previsionnel-financier/le-bilan-le-bfr-et-la-tresorerie",
    },
    {
      titre: "Access to bank financing for companies - 2026-Q2",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/en/statistics/loans/access-bank-financing-companies-2026-q2",
    },
    {
      titre: "Article L232-2 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006228895",
    },
    {
      titre: "Article R232-2 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041603987",
    },
    {
      titre: "Article L441-10 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-02-22",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
