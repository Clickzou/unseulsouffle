import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « taux de rentabilité » (590/mois, KD 8, SE Ranking 24/09/2026).
 * Secondaires : « calcul de la rentabilité » (390), « rentabilité économique »
 * (390), « taux de profitabilité » (480).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite les ratios et renvoie vers lui.
 *
 * POINTS SENSIBLES.
 * - Définitions INSEE (rentabilité économique, rentabilité financière nette, taux
 *   de marge, EBE) et chiffres du « Panorama de l'appareil productif en 2023 »
 *   (Insee, 10/12/2025) vérifiés le 24/09/2026.
 * - L'exemple chiffré est fictif et signalé comme tel dans le texte.
 * - Marjorie Anglade est expert-comptable inscrite à l'Ordre, mais le cabinet ne
 *   tient aucune comptabilité : l'article parle de pilotage, jamais de tenue des
 *   comptes.
 *
 * Liens vers d'autres articles : uniquement des articles publiés avant le
 * 14/06/2027 (calcul-bfr, taux-de-marge, marge-nette, tableau-de-bord-kpi).
 */
export const article: Article = {
  slug: "taux-de-rentabilite",

  motCle: "taux de rentabilité (590/mois, KD 8) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "taux de profitabilité (480/mois)",
    "calcul de la rentabilité (390/mois)",
    "rentabilité économique (390/mois)",
    "rentabilité financière",
  ],

  metaTitle: "Taux de rentabilité : calcul et lecture",
  metaDescription:
    "Taux de rentabilité : profitabilité, rentabilité économique et financière, formules, exemple chiffré, repères INSEE et leviers pour une PME.",

  h1: "Taux de rentabilité : les calculer, les lire et les améliorer dans une PME",

  chapo:
    "Un taux de rentabilité rapporte un résultat aux moyens qui ont permis de l'obtenir. Il n'en existe pas un seul, mais trois qui répondent à trois questions différentes. Le taux de profitabilité rapporte le résultat au chiffre d'affaires : que reste-t-il sur chaque euro vendu ? La rentabilité économique le rapporte aux moyens d'exploitation engagés : l'activité rapporte-t-elle assez pour ce qu'elle mobilise ? La rentabilité financière le rapporte aux capitaux propres : l'argent des associés est-il bien employé ? Une PME peut être profitable et peu rentable, ou l'inverse. Voici les formules, un exemple chiffré, les repères publiés par l'INSEE et les leviers pour les améliorer.",

  essentiel: {
    reponse:
      "Le taux de rentabilité mesure le rapport entre un résultat et les moyens engagés pour l'obtenir. On distingue le taux de profitabilité (résultat rapporté au chiffre d'affaires), la rentabilité économique (excédent brut d'exploitation rapporté aux immobilisations brutes et au besoin en fonds de roulement, selon la définition de l'INSEE) et la rentabilité financière (résultat rapporté aux capitaux propres). En 2023, selon l'INSEE, la moitié des entreprises françaises avaient un taux de rentabilité économique inférieur à 10,7 %, le taux médian le plus bas depuis 2015.",
    points: [
      "Profitabilité : ce que rapporte chaque euro de chiffre d'affaires",
      "Rentabilité économique : ce que rapporte l'outil de travail, indépendamment du financement",
      "Rentabilité financière : ce que rapportent les capitaux apportés par les associés",
      "Le besoin en fonds de roulement entre dans le calcul : réduire les stocks ou les délais clients améliore la rentabilité",
      "Un taux ne se lit qu'en tendance et en comparaison avec le secteur",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Taux de rentabilité : rentable par rapport à quoi ?",
      blocs: [
        {
          type: "p",
          texte:
            "« Mon entreprise est-elle rentable ? » La question paraît simple, et la réponse du bilan semble évidente : le résultat est positif, donc oui. **Un résultat positif dit que l'entreprise gagne de l'argent ; un taux de rentabilité dit si elle en gagne assez pour ce qu'elle mobilise.** Un bénéfice de 100 000 euros n'a pas le même sens pour une entreprise de services sans actifs et pour une usine qui a immobilisé plusieurs millions dans ses machines.",
        },
        { type: "h3", texte: "Trois dénominateurs, trois questions" },
        {
          type: "p",
          texte:
            "Tout taux de rentabilité est une fraction. Le numérateur est un résultat : excédent brut d'exploitation, résultat d'exploitation ou résultat net. Le dénominateur dit à quoi on le compare. C'est lui qui change la question posée.",
        },
        {
          type: "tableau",
          entetes: ["Taux", "Formule courante et question posée"],
          lignes: [
            ["Taux de profitabilité", "Résultat net / chiffre d'affaires. Que reste-t-il sur chaque euro vendu ?"],
            ["Rentabilité économique", "Excédent brut d'exploitation / (immobilisations brutes + BFR). L'outil de travail rapporte-t-il assez ?"],
            ["Rentabilité financière", "Résultat net / capitaux propres. L'argent des associés est-il bien employé ?"],
            ["Taux de marge (au sens de l'INSEE)", "Excédent brut d'exploitation / valeur ajoutée. Quelle part de la richesse créée reste à l'entreprise ?"],
          ],
        },
        { type: "h3", texte: "Pourquoi le dirigeant a besoin des trois" },
        {
          type: "p",
          texte:
            "Chaque taux éclaire une décision différente. La profitabilité guide la politique de prix et la maîtrise des charges. La rentabilité économique guide les investissements et la gestion du besoin en fonds de roulement. La rentabilité financière intéresse les associés, et la banque qui regarde l'équilibre entre fonds propres et dette. C'est ce travail de lecture que mène un [DAF externalisé](/daf-externalise-toulouse/) : transformer des comptes justes en décisions éclairées.",
        },
      ],
    },

    {
      label: "Profitabilité",
      titre: "Le taux de profitabilité : la rentabilité rapportée au chiffre d'affaires",
      blocs: [
        {
          type: "p",
          texte:
            "Le taux de profitabilité est le plus intuitif. Il rapporte un résultat au chiffre d'affaires hors taxes et répond à la question : sur 100 euros vendus, combien restent à l'entreprise ? On le calcule le plus souvent sur le résultat net, parfois sur l'excédent brut d'exploitation ou sur le résultat d'exploitation.",
        },
        { type: "h3", texte: "Les trois niveaux de profitabilité" },
        {
          type: "liste",
          items: [
            "**Profitabilité d'exploitation brute** : excédent brut d'exploitation / chiffre d'affaires. Elle mesure la performance du métier, avant amortissements, frais financiers et impôt",
            "**Profitabilité d'exploitation** : résultat d'exploitation / chiffre d'affaires. Elle intègre l'usure des équipements à travers les dotations aux amortissements",
            "**Profitabilité nette** : résultat net / chiffre d'affaires. Elle dit ce qui reste réellement, après tout",
          ],
        },
        { type: "h3", texte: "Ce que la profitabilité ne dit pas" },
        {
          type: "p",
          texte:
            "Une profitabilité élevée ne garantit pas une bonne rentabilité. Une entreprise qui dégage 15 % de résultat sur un chiffre d'affaires modeste, avec un parc machine considérable et des stocks importants, peut mal rémunérer les moyens engagés. À l'inverse, un négoce à faible profitabilité mais à rotation rapide peut être très rentable. La profitabilité est un ratio de compte de résultat ; la rentabilité fait entrer le bilan dans l'équation.",
        },
        { type: "h3", texte: "Ne pas la confondre avec le taux de marge commerciale" },
        {
          type: "p",
          texte:
            "Le taux de marge commerciale compare le prix de vente au coût d'achat des marchandises. Il ne tient compte ni des salaires, ni des loyers, ni des autres charges. Nous détaillons son calcul dans notre article sur le [taux de marge](/infos-utiles/taux-de-marge/), et la lecture du résultat final dans celui consacré à la [marge nette](/infos-utiles/marge-nette/).",
        },
      ],
    },

    {
      label: "Rentabilité économique",
      titre: "La rentabilité économique : ce que rapporte l'outil de travail",
      blocs: [
        {
          type: "p",
          texte:
            "La rentabilité économique est le taux le plus utile pour piloter une PME, et le moins suivi. L'INSEE la définit comme la mesure de la [rentabilité d'exploitation de l'entreprise, indépendamment de son mode de financement](https://www.insee.fr/fr/metadonnees/definition/c1555). Elle rapporte l'excédent brut d'exploitation à la somme des immobilisations brutes corporelles et incorporelles et du besoin en fonds de roulement. Ce dénominateur est appelé « actif économique » ou « capital économique » : ce sont les moyens engagés dans les cycles d'exploitation et d'investissement.",
        },
        { type: "h3", texte: "Le numérateur : l'excédent brut d'exploitation" },
        {
          type: "p",
          texte:
            "L'[excédent brut d'exploitation](https://www.insee.fr/fr/metadonnees/definition/c1538), ou EBE, est le solde du compte d'exploitation. Selon l'INSEE, il est égal à la valeur ajoutée, diminuée de la rémunération des salariés et des autres impôts sur la production, et augmentée des subventions d'exploitation. Il mesure ce que dégage le métier, avant les choix de financement et d'amortissement.",
        },
        { type: "h3", texte: "Le dénominateur : l'actif économique" },
        {
          type: "p",
          texte:
            "L'actif économique réunit deux blocs. Les immobilisations, d'abord : bâtiments, machines, véhicules, logiciels. Le besoin en fonds de roulement, ensuite : les stocks et les créances clients, diminués des dettes fournisseurs. **C'est le point qui surprend le plus les dirigeants : un stock qui gonfle ou un client qui paie plus tard dégrade la rentabilité économique, même si le résultat ne bouge pas.** Notre article sur le [calcul du BFR](/infos-utiles/calcul-bfr/) détaille ce second bloc.",
        },
        {
          type: "p",
          texte:
            "Certains analystes utilisent une variante, avec le résultat d'exploitation au numérateur et les immobilisations nettes d'amortissements au dénominateur. Les deux approches sont défendables ; l'important est d'utiliser toujours la même d'une année sur l'autre, et la même que la source à laquelle vous vous comparez.",
        },
      ],
    },

    {
      label: "Rentabilité financière",
      titre: "La rentabilité financière : ce que rapportent les capitaux propres",
      blocs: [
        {
          type: "p",
          texte:
            "La rentabilité financière adopte le point de vue des associés. L'INSEE la décrit comme la mesure de la [capacité des capitaux investis par les actionnaires et associés à dégager un certain niveau de profit](https://www.insee.fr/fr/metadonnees/definition/c2058). Dans sa définition statistique, l'INSEE rapporte la capacité d'autofinancement nette aux capitaux propres. En gestion courante, on retient plus souvent le résultat net rapporté aux capitaux propres, l'équivalent du « return on equity » anglo-saxon.",
        },
        { type: "h3", texte: "L'effet de levier de la dette" },
        {
          type: "p",
          texte:
            "Rentabilité économique et rentabilité financière sont liées par l'endettement. Tant que l'activité rapporte davantage que le coût de la dette, emprunter augmente la rentabilité financière : les associés profitent de l'écart. Quand l'activité rapporte moins que le taux d'intérêt, l'effet s'inverse et la dette détruit de la rentabilité. En simplifiant, avant impôt : rentabilité financière = rentabilité économique + (rentabilité économique − taux d'intérêt) × dette / capitaux propres.",
        },
        { type: "h3", texte: "Pourquoi s'en méfier" },
        {
          type: "p",
          texte:
            "Une rentabilité financière élevée peut cacher une entreprise très endettée, donc fragile. Elle peut aussi venir de capitaux propres réduits par des pertes passées. Elle se lit donc toujours avec la rentabilité économique et avec le niveau d'endettement. Une banque ne regarde jamais l'une sans l'autre.",
        },
      ],
    },

    {
      label: "Calcul",
      titre: "Calcul de la rentabilité : un exemple chiffré pas à pas",
      blocs: [
        {
          type: "p",
          texte:
            "Prenons une PME industrielle fictive, dont les chiffres servent uniquement à illustrer les calculs. Elle réalise 5 millions d'euros de chiffre d'affaires, un excédent brut d'exploitation de 500 000 euros et un résultat net de 180 000 euros. Ses immobilisations brutes s'élèvent à 2 millions d'euros, son besoin en fonds de roulement à 800 000 euros, et ses capitaux propres à 1,2 million d'euros.",
        },
        {
          type: "tableau",
          entetes: ["Ratio (exemple fictif)", "Calcul et résultat"],
          lignes: [
            ["Profitabilité d'exploitation brute", "500 000 / 5 000 000 = 10 %"],
            ["Profitabilité nette", "180 000 / 5 000 000 = 3,6 %"],
            ["Rentabilité économique", "500 000 / (2 000 000 + 800 000) = 17,9 %"],
            ["Rentabilité financière", "180 000 / 1 200 000 = 15 %"],
          ],
        },
        { type: "h3", texte: "Ce que disent ces chiffres ensemble" },
        {
          type: "p",
          texte:
            "Sur 100 euros vendus, l'entreprise garde 3,60 euros de résultat net. Pris seul, ce chiffre inquiéterait. Rapporté aux moyens engagés, il est plus rassurant : l'outil de travail dégage près de 18 % d'excédent brut par an, et les associés obtiennent 15 % sur leurs capitaux. La faiblesse est ailleurs, entre l'EBE et le résultat net : amortissements, frais financiers, impôt. C'est là qu'il faut regarder.",
        },
        { type: "h3", texte: "L'effet d'une baisse du BFR" },
        {
          type: "p",
          texte:
            "Supposons que l'entreprise réduise son besoin en fonds de roulement de 200 000 euros, en raccourcissant les délais de paiement de ses clients et en allégeant ses stocks. Son EBE ne change pas. Sa rentabilité économique passe pourtant de 17,9 % à 19,2 % (500 000 / 2 600 000). Et 200 000 euros de trésorerie sont libérés. **Améliorer la rentabilité ne passe pas toujours par le compte de résultat.**",
        },
      ],
    },

    {
      label: "Repères",
      titre: "Comparer son taux de rentabilité : les repères publiés",
      blocs: [
        {
          type: "p",
          texte:
            "Un taux isolé ne dit presque rien. Il prend son sens en tendance, sur trois à cinq exercices, et en comparaison avec des entreprises du même secteur et de la même taille. Deux sources publiques et gratuites permettent de se situer.",
        },
        { type: "h3", texte: "Les repères de l'INSEE" },
        {
          type: "p",
          texte:
            "Dans son [Panorama de l'appareil productif en 2023](https://www.insee.fr/fr/statistiques/8679855), publié en décembre 2025, l'INSEE indique que la moitié des entreprises ont un taux de rentabilité économique inférieur à 10,7 % en 2023, le taux médian le plus bas depuis 2015. Sur longue période, ce taux médian progresse néanmoins de près d'un point dans les PME, les ETI et les grandes entreprises. La même étude mesure des taux de marge très différents selon la taille.",
        },
        {
          type: "tableau",
          entetes: ["Catégorie d'entreprise", "Taux de marge 2023 (EBE / valeur ajoutée, INSEE)"],
          lignes: [
            ["Microentreprises", "22,9 %"],
            ["PME", "21,1 %"],
            ["Entreprises de taille intermédiaire", "27,1 %"],
            ["Grandes entreprises", "35,4 %"],
          ],
        },
        {
          type: "p",
          texte:
            "Ces chiffres portent sur les entreprises marchandes non agricoles et non financières. Ils donnent un ordre de grandeur, pas une norme : les écarts entre secteurs sont considérables, et une moyenne nationale ne dit pas ce qu'une entreprise de votre métier devrait dégager.",
        },
        { type: "h3", texte: "Les fascicules sectoriels de la Banque de France" },
        {
          type: "p",
          texte:
            "Pour une comparaison plus fine, la Banque de France publie chaque année des [fascicules d'indicateurs sectoriels](https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/fascicules-dindicateurs-sectoriels) : 30 ratios économiques et financiers regroupés par thèmes (activité, rentabilité et équilibre financier), élaborés à partir de la base FIBEN et téléchargeables gratuitement, secteur par secteur. C'est la référence la plus proche de ce que votre banquier utilise pour vous situer.",
        },
      ],
    },

    {
      label: "Leviers",
      titre: "Améliorer le taux de rentabilité : cinq leviers concrets",
      blocs: [
        {
          type: "p",
          texte:
            "Une fois les taux calculés, la question devient : sur quoi agir ? La décomposition du calcul donne la réponse. On peut augmenter le résultat, réduire les moyens engagés, ou modifier le financement. Cinq leviers reviennent le plus souvent en PME.",
        },
        {
          type: "tableau",
          entetes: ["Levier", "Taux principalement améliorés"],
          lignes: [
            ["Revoir les prix et les remises, abandonner les ventes à perte", "Profitabilité, puis rentabilité économique"],
            ["Recentrer l'activité sur les clients et produits les plus rentables", "Profitabilité et rentabilité économique"],
            ["Réduire le BFR : stocks, délais clients, délais fournisseurs négociés", "Rentabilité économique, et trésorerie"],
            ["Céder ou mieux utiliser les actifs dormants", "Rentabilité économique"],
            ["Ajuster l'équilibre entre dette et fonds propres", "Rentabilité financière"],
          ],
        },
        { type: "h3", texte: "Commencer par la rentabilité par client et par produit" },
        {
          type: "p",
          texte:
            "Le taux global cache des écarts importants. Certaines activités financent les autres, et personne ne le sait précisément. L'analyse de la rentabilité par client, par produit ou par chantier est souvent la conversation la plus inconfortable, et le gisement le plus immédiat : elle montre où l'entreprise gagne, où elle perd, et ce qu'il faut revoir en premier.",
        },
        { type: "h3", texte: "Ne pas sacrifier l'avenir au ratio" },
        {
          type: "p",
          texte:
            "Un investissement fait baisser la rentabilité économique l'année où il entre au bilan, avant de produire ses effets. Renoncer à investir pour protéger un taux est une erreur fréquente. La bonne question n'est pas de savoir si le taux baisse cette année, mais si l'investissement rapportera plus qu'il ne coûte sur sa durée d'usage.",
        },
      ],
    },

    {
      label: "Pilotage",
      titre: "Suivre la rentabilité dans le pilotage de l'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des dirigeants découvrent leurs taux de rentabilité à la clôture, quand il est trop tard pour agir sur l'exercice. Les suivre en cours d'année suppose deux choses : des situations intermédiaires fiables, produites avec votre expert-comptable, et quelques indicateurs choisis, lus chaque mois ou chaque trimestre.",
        },
        { type: "h3", texte: "Quels indicateurs retenir" },
        {
          type: "p",
          texte:
            "Un tableau de bord utile ne reprend pas tous les ratios. Il retient ceux sur lesquels le dirigeant peut agir : l'EBE et la profitabilité d'exploitation chaque mois, le BFR exprimé en jours de chiffre d'affaires, la rentabilité par activité chaque trimestre, la rentabilité économique et financière chaque année. Notre article sur le [tableau de bord et ses KPI](/infos-utiles/tableau-de-bord-kpi/) détaille comment le construire.",
        },
        { type: "h3", texte: "Ce que nous faisons" },
        {
          type: "p",
          texte:
            "Au cabinet, ce travail est porté par Marjorie Anglade, associée fondatrice, expert-comptable diplômée inscrite à l'Ordre, qui intervient comme directrice financière à temps partagé. Le cabinet ne tient pas votre comptabilité : il travaille à partir des comptes établis par votre expert-comptable, pour construire le calcul de la rentabilité par activité, le prévisionnel et les tableaux de bord. Si l'analyse révèle un problème qui n'est pas financier, une politique de prix à revoir ou une organisation de production à reprendre, elle fait appel à un collègue sur ce point précis. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si votre frein est financier, commercial ou organisationnel, commencez par le situer. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à identifier le blocage prioritaire en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Comment calculer le taux de rentabilité d'une entreprise ?",
      r: [
        "Il faut d'abord choisir la question posée. Le taux de profitabilité se calcule en divisant le résultat net par le chiffre d'affaires hors taxes. La rentabilité économique divise l'excédent brut d'exploitation par la somme des immobilisations brutes et du besoin en fonds de roulement, selon la définition de l'INSEE. La rentabilité financière divise le résultat net par les capitaux propres. Chaque résultat se multiplie par 100 pour obtenir un pourcentage.",
      ],
    },
    {
      q: "Quelle différence entre taux de profitabilité et taux de rentabilité ?",
      r: [
        "Le taux de profitabilité rapporte un résultat au chiffre d'affaires : il dit ce qui reste sur chaque euro vendu. Le taux de rentabilité rapporte un résultat aux moyens engagés, qu'il s'agisse de l'actif économique ou des capitaux propres : il dit si l'entreprise rémunère correctement ce qu'elle mobilise. Une entreprise peut être très profitable mais peu rentable si elle immobilise beaucoup de machines ou de stocks pour réaliser ses ventes.",
      ],
    },
    {
      q: "Qu'est-ce qu'un bon taux de rentabilité économique ?",
      r: [
        "Il n'existe pas de seuil universel : tout dépend du secteur et de l'intensité en capital du métier. À titre de repère, l'INSEE indique que la moitié des entreprises françaises avaient en 2023 un taux de rentabilité économique inférieur à 10,7 %. Pour vous situer précisément, comparez-vous aux ratios de votre secteur publiés par la Banque de France, et suivez surtout l'évolution de votre propre taux sur plusieurs exercices.",
      ],
    },
    {
      q: "Pourquoi le BFR influence-t-il la rentabilité économique ?",
      r: [
        "Parce qu'il fait partie des moyens engagés dans l'exploitation, au même titre que les machines. Des stocks élevés ou des clients qui paient tard immobilisent de l'argent sans augmenter le résultat. Le dénominateur grossit, le taux baisse. À l'inverse, réduire le besoin en fonds de roulement améliore la rentabilité économique à résultat constant, et libère de la trésorerie. C'est souvent le levier le plus rapide pour une PME.",
      ],
    },
    {
      q: "À quelle fréquence suivre ses taux de rentabilité ?",
      r: [
        "La profitabilité d'exploitation peut se suivre chaque mois, à partir de situations intermédiaires fiables établies avec votre expert-comptable. La rentabilité par client ou par activité se revoit utilement chaque trimestre. Les rentabilités économique et financière, qui reposent sur le bilan, se calculent au minimum à chaque clôture et se comparent sur trois à cinq exercices. L'important est d'utiliser toujours les mêmes formules pour que les comparaisons aient un sens.",
      ],
    },
  ],

  sources: [
    {
      titre: "Rentabilité économique nette",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1555",
    },
    {
      titre: "Rentabilité financière nette",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/metadonnees/definition/c2058",
    },
    {
      titre: "Excédent brut d'exploitation",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1538",
    },
    {
      titre:
        "Panorama de l'appareil productif en 2023 - Des taux de marge en plus forte hausse dans les plus grandes entreprises depuis 2015, et une dispersion en hausse dans toutes les catégories",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/statistiques/8679855",
    },
    {
      titre: "Fascicules d'indicateurs sectoriels",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/fascicules-dindicateurs-sectoriels",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-06-14",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
