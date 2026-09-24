import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « budget prévisionnel exemple » (390/mois, KD 19). Secondaires :
 * « tableau budget prévisionnel » (320/mois), « prévisionnel définition » (260/mois).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite l'outil (construire, présenter et suivre le budget annuel d'une
 * PME en activité) et renvoie vers le pilier. Il se distingue de
 * « prévisionnel financier » (projection pluriannuelle, n° 21) et de « budget de
 * trésorerie » (encaissements et décaissements, n° 9), vers lesquels il renvoie.
 *
 * POINTS SENSIBLES
 * - Titre réglementé : le cabinet ne tient aucune comptabilité. Marjorie Anglade
 *   est expert-comptable diplômée, inscrite à l'Ordre, mais intervient ici en
 *   directrice financière externalisée. Le texte ne doit jamais laisser entendre
 *   une tenue de comptes ni une production de comptes annuels.
 * - Le chapitre « Exemple » repose sur une PME FICTIVE aux montants ronds,
 *   présentée comme telle : ce ne sont pas des statistiques. À faire valider.
 * - Liens internes limités aux articles publiés avant le 23/08/2027.
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "budget-previsionnel",

  motCle: "budget prévisionnel exemple (390/mois, KD 19) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "tableau budget prévisionnel (320/mois)",
    "prévisionnel définition (260/mois)",
    "budget annuel PME",
  ],

  // 40 / 42
  metaTitle: "Budget prévisionnel : exemple et méthode",
  // 145 / 150
  metaDescription:
    "Budget prévisionnel : définition, postes à prévoir, exemple chiffré d'une PME, tableau mensuel et suivi des écarts pour décider avant la clôture.",

  h1: "Budget prévisionnel : exemple chiffré, tableau et méthode pour une PME",

  chapo:
    "Un budget prévisionnel est le chiffrage, poste par poste et mois par mois, de ce que l'entreprise prévoit de vendre, de dépenser et de gagner sur l'exercice à venir. Ce n'est pas un exercice de banquier : c'est l'outil qui permet de savoir en mars si l'année sera bonne, au lieu de le découvrir à la clôture. Un bon budget part du réalisé de l'année passée, pose des hypothèses écrites, se découpe en mois, et se compare chaque mois au réel. Vous trouverez ci-dessous un exemple de budget prévisionnel complet pour une PME fictive, le tableau à reproduire et les erreurs qui le rendent inutile.",

  essentiel: {
    reponse:
      "Le budget prévisionnel d'une entreprise traduit en chiffres l'activité prévue sur un exercice : chiffre d'affaires, achats, charges externes, masse salariale, impôts et taxes, amortissements, frais financiers, et donc résultat attendu. Il se construit à partir du réalisé de l'année précédente et d'hypothèses écrites, se découpe par mois et se compare chaque mois au réel. Bpifrance Création recommande d'être prudent : minimiser les recettes et maximiser les coûts. Au-delà de 300 salariés ou de 18 millions d'euros de chiffre d'affaires, le Code de commerce impose des documents de gestion prévisionnelle.",
    points: [
      "Définition : le budget chiffre l'année à venir ; le prévisionnel financier projette plusieurs années ; le budget de trésorerie suit l'argent qui entre et qui sort",
      "Point de départ : le réalisé de l'année écoulée, jamais une page blanche ni un objectif commercial",
      "Chaque montant repose sur une hypothèse écrite : volume, prix, coût, date",
      "Un budget annuel non découpé en mois ne se suit pas",
      "Sa valeur tient au suivi mensuel des écarts, pas à la précision du chiffre initial",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Prévisionnel : définition, et ce qui distingue le budget",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot « prévisionnel » recouvre plusieurs documents que l'on confond souvent. Tous projettent l'entreprise dans l'avenir, mais ils ne répondent pas à la même question. **Le budget prévisionnel répond à une seule : que va donner l'année qui vient, si nous faisons ce que nous avons prévu ?**",
        },
        {
          type: "tableau",
          entetes: ["Document", "La question à laquelle il répond"],
          lignes: [
            ["Budget prévisionnel (annuel)", "Quel chiffre d'affaires, quelles charges et quel résultat sur le prochain exercice, mois par mois ?"],
            ["Prévisionnel financier (trois à cinq ans)", "Le projet est-il viable et finançable dans la durée ?"],
            ["Budget de trésorerie", "Aurons-nous assez d'argent en banque chaque mois pour payer ce qui est dû ?"],
            ["Plan de financement", "Comment les investissements seront-ils financés : fonds propres, emprunts, autofinancement ?"],
          ],
        },
        { type: "h3", texte: "Un document de gestion, pas un document comptable" },
        {
          type: "p",
          texte:
            "La comptabilité enregistre ce qui s'est passé. Le budget décrit ce qui devrait se passer. Il reprend la structure du compte de résultat pour que les deux se comparent ligne à ligne, mais il n'a aucune valeur légale pour la plupart des PME : c'est un outil de pilotage, construit pour le dirigeant. La projection pluriannuelle fait l'objet d'un article dédié, le [prévisionnel financier](/infos-utiles/previsionnel-financier/) ; ici, nous parlons du budget de l'exercice à venir d'une entreprise déjà en activité.",
        },
        { type: "h3", texte: "Pourquoi il manque dans tant de PME" },
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants pilotent au solde bancaire et découvrent leur résultat bien après la clôture. C'est souvent la première chose que met en place un [DAF externalisé](/daf-externalise-toulouse/) : non pas un tableau de plus, mais une référence qui permet de savoir, chaque mois, si l'entreprise est en avance ou en retard sur son année.",
        },
      ],
    },

    {
      label: "Les postes",
      titre: "Ce que contient un budget prévisionnel",
      blocs: [
        {
          type: "p",
          texte:
            "Un budget d'exploitation reprend les grandes rubriques du compte de résultat. Bpifrance Création, dans sa page sur le [compte de résultat prévisionnel](https://bpifrance-creation.fr/entrepreneur/actualites/compte-resultat-previsionnel-votre-business-plan), rappelle que ce document détaille revenus, charges et bénéfices, et gagne à être complété par les soldes intermédiaires de gestion et la capacité d'autofinancement. Dans une PME, les postes à prévoir sont les suivants.",
        },
        {
          type: "liste",
          items: [
            "**Le chiffre d'affaires**, décomposé par famille de produits, par client important ou par activité : c'est la ligne dont tout le reste dépend",
            "**Les achats consommés** : matières, marchandises, sous-traitance directement liée aux ventes",
            "**Les charges externes** : loyers, énergie, transport, maintenance, assurances, honoraires, informatique",
            "**Les impôts et taxes** hors impôt sur les sociétés",
            "**La masse salariale** : salaires bruts et charges sociales, embauches et départs datés, augmentations prévues",
            "**Les dotations aux amortissements**, qui découlent des investissements passés et prévus",
            "**Les charges financières** : intérêts des emprunts et frais bancaires",
          ],
        },
        { type: "h3", texte: "Le budget d'investissement, à côté" },
        {
          type: "p",
          texte:
            "Une machine, un logiciel, un véhicule ne passent pas en charges l'année de l'achat : ils s'amortissent. Le budget d'investissement se tient donc à part, avec la date et le mode de financement de chaque dépense, et alimente deux lignes du budget d'exploitation : les amortissements et les intérêts.",
        },
        { type: "h3", texte: "Charges fixes et charges variables" },
        {
          type: "p",
          texte:
            "Distinguer ce qui varie avec l'activité de ce qui ne varie pas est la clé d'un budget utile. Les charges variables se calculent en proportion du chiffre d'affaires ; les charges fixes se chiffrent une par une. Cette séparation permet aussi de calculer le chiffre d'affaires minimal qui couvre toutes les charges, ce que détaille l'article sur le [seuil de rentabilité](/infos-utiles/seuil-de-rentabilite/).",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Construire le budget prévisionnel en six étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Un budget ne demande pas de logiciel particulier ; il demande des hypothèses écrites et des responsables qui s'engagent sur leurs chiffres.",
        },
        { type: "h3", texte: "1. Partir du réalisé" },
        {
          type: "p",
          texte:
            "Reprenez le compte de résultat de l'exercice écoulé, ou les douze derniers mois glissants si la clôture est loin. Retirez les éléments exceptionnels : un gros contrat qui ne se reproduira pas, un litige, une subvention ponctuelle. Vous obtenez une base normalisée.",
        },
        { type: "h3", texte: "2. Poser les hypothèses d'activité" },
        {
          type: "p",
          texte:
            "Pour chaque famille de produits : quels volumes, à quels prix, avec quels clients. Séparez l'effet volume de l'effet prix. Une hausse de chiffre d'affaires de 6 % ne se lit pas de la même façon si elle vient de hausses tarifaires ou de nouveaux clients. **Chaque hypothèse s'écrit en une phrase, avec son auteur : c'est ce qui rendra les écarts lisibles.**",
        },
        { type: "h3", texte: "3. Chiffrer les charges, poste par poste" },
        {
          type: "p",
          texte:
            "Les charges variables suivent les volumes, avec les hausses de prix connues des fournisseurs. Les charges fixes se reprennent contrat par contrat : loyer indexé, contrats de maintenance, assurances. La masse salariale se construit nominativement, ou par catégorie, avec les dates d'embauche et de départ. Bpifrance Création, dans sa page sur les [prévisions financières](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/previsions-financieres), conseille de ne pas être trop optimiste : il est même prudent de minimiser les recettes et de maximiser les coûts pour éviter les mauvaises surprises.",
        },
        { type: "h3", texte: "4. Découper, confronter, traduire en trésorerie" },
        {
          type: "p",
          texte:
            "Répartissez chaque ligne sur douze mois selon la saisonnalité réelle des dernières années. Confrontez ensuite le résultat aux ambitions : si le budget ne dégage pas le résultat attendu, on revoit les hypothèses d'action, pas les chiffres au hasard. Enfin, traduisez le budget en encaissements et décaissements, avec les délais de paiement réels : c'est l'objet du [budget de trésorerie](/infos-utiles/budget-de-tresorerie/).",
        },
      ],
    },

    {
      label: "Exemple",
      titre: "Budget prévisionnel exemple : une PME industrielle de 40 salariés",
      blocs: [
        {
          type: "p",
          texte:
            "Prenons une PME fictive : un fabricant de pièces mécaniques de 40 salariés, qui a réalisé 5 650 000 euros de chiffre d'affaires sur l'exercice écoulé. Les montants sont ronds et inventés pour l'exemple ; ce ne sont pas des moyennes sectorielles. Les hypothèses retenues sont les suivantes : volumes en hausse de 4 %, tarifs relevés de 2 % au 1er janvier, matières en hausse de 3 %, un technicien recruté en avril, un centre d'usinage financé par emprunt en juin.",
        },
        {
          type: "tableau",
          entetes: ["Poste du budget annuel", "Montant prévu (en milliers d'euros)"],
          lignes: [
            ["Chiffre d'affaires (5 650 × 1,04 × 1,02, arrondi)", "6 000"],
            ["Achats consommés (45 % du chiffre d'affaires)", "− 2 700"],
            ["Marge sur achats", "3 300"],
            ["Charges externes", "− 780"],
            ["Impôts et taxes", "− 90"],
            ["Salaires et charges sociales", "− 1 950"],
            ["Excédent brut d'exploitation", "480"],
            ["Dotations aux amortissements", "− 180"],
            ["Résultat d'exploitation", "300"],
            ["Charges financières", "− 40"],
            ["Résultat courant avant impôt", "260"],
          ],
        },
        { type: "h3", texte: "Ce que ce budget dit au dirigeant" },
        {
          type: "p",
          texte:
            "Le résultat courant représente 4,3 % du chiffre d'affaires. Autrement dit, il suffit que la marge sur achats perde un peu plus d'un point et demi pour que la moitié du résultat disparaisse : 1,5 point de 6 000, ce sont 90 000 euros. Le budget montre donc où se joue l'année : dans la tenue des prix d'achat et la répercussion des hausses, bien plus que dans les charges externes.",
        },
        { type: "h3", texte: "Ce qu'il ne dit pas encore" },
        {
          type: "p",
          texte:
            "Le centre d'usinage payé en juin, l'acompte au fournisseur, les stocks à constituer avant l'été ne figurent pas dans ce tableau. Une année bénéficiaire peut connaître un mois où le compte bancaire passe dans le rouge. C'est pourquoi le budget d'exploitation ne se présente jamais seul au dirigeant, mais accompagné de sa traduction en trésorerie.",
        },
      ],
    },

    {
      label: "Le tableau",
      titre: "Tableau budget prévisionnel : présentation mensuelle et suivi des écarts",
      blocs: [
        {
          type: "p",
          texte:
            "Un budget annuel ne se suit pas. Au 31 mars, savoir que l'on vise 6 millions sur l'année ne dit rien de l'avance ou du retard. Le tableau de budget prévisionnel se présente donc avec les postes en lignes et les douze mois en colonnes, puis, pour chaque mois écoulé, trois colonnes : budget, réalisé, écart.",
        },
        { type: "h3", texte: "Une saisonnalité réaliste" },
        {
          type: "p",
          texte:
            "Diviser le chiffre d'affaires par douze est l'erreur la plus fréquente. Dans notre exemple, l'atelier ferme trois semaines en août et décembre est raccourci : répartir 500 000 euros par mois créerait un faux retard en août et une fausse avance en septembre. Utilisez la répartition moyenne des trois derniers exercices, ajustée des événements connus.",
        },
        { type: "h3", texte: "Lire un écart" },
        {
          type: "p",
          texte:
            "Supposons qu'en mars le chiffre d'affaires réalisé soit de 470 000 euros pour 520 000 budgétés. L'écart de 50 000 euros ne suffit pas à décider : il faut savoir s'il vient des volumes, des prix, ou d'un simple décalage de facturation. Un retard de livraison qui sera facturé en avril n'appelle aucune mesure ; une perte de volume chez un client important en appelle une tout de suite. **Un écart expliqué vaut plus qu'un budget exact.**",
        },
        {
          type: "tableau",
          entetes: ["Nature de l'écart", "Question à poser"],
          lignes: [
            ["Écart de volume", "Avons-nous perdu un client, une commande, ou est-ce un décalage ?"],
            ["Écart de prix", "Les hausses tarifaires ont-elles été appliquées, les remises tenues ?"],
            ["Écart de coût", "Un fournisseur a-t-il augmenté, la consommation a-t-elle dérivé ?"],
            ["Écart de calendrier", "Le montant arrivera-t-il le mois suivant, sans changer l'année ?"],
          ],
        },
        {
          type: "p",
          texte:
            "Les indicateurs à suivre chaque semaine, entre deux points budgétaires, relèvent du [tableau de bord KPI](/infos-utiles/tableau-de-bord-kpi/) : le budget donne la référence annuelle, le tableau de bord signale les dérives avant qu'elles n'apparaissent dans les comptes.",
        },
      ],
    },

    {
      label: "Les erreurs",
      titre: "Les erreurs qui rendent un budget prévisionnel inutile",
      blocs: [
        {
          type: "tableau",
          style: "contraste",
          entetes: ["Erreur fréquente", "Pratique utile"],
          lignes: [
            ["Reconduire l'année passée avec un pourcentage de hausse uniforme", "Repartir des hypothèses de volume, de prix et de coût, ligne par ligne"],
            ["Confondre le budget avec l'objectif commercial", "Budgéter le probable ; afficher l'ambition à part"],
            ["Oublier les hausses de salaires, les primes, les embauches de l'année", "Construire la masse salariale nominativement, avec des dates"],
            ["Construire le budget seul, un dimanche soir", "Faire chiffrer chaque responsable sur son périmètre, puis arbitrer"],
            ["Le ranger après validation", "Le comparer au réel chaque mois, en réunion"],
            ["Le réviser dès le premier écart", "Garder le budget initial comme référence et ajouter une prévision actualisée"],
          ],
        },
        { type: "h3", texte: "Ne pas oublier les délais de paiement" },
        {
          type: "p",
          texte:
            "Le budget raisonne en factures ; la banque, en encaissements. L'écart entre les deux peut être considérable. Selon le [rapport annuel de l'Observatoire des délais de paiement](https://www.banque-france.fr/fr/communiques-de-presse/le-rapport-annuel-de-lobservatoire-des-delais-de-paiement-appelle-maintenir-la-vigilance-quant-aux) présenté par la Banque de France, le retard moyen de paiement atteignait 13,6 jours fin 2024, et la persistance des retards pénalise la trésorerie des PME et des microentreprises à hauteur de 15 milliards d'euros. Un budget bénéficiaire ne protège pas d'une tension de trésorerie.",
        },
      ],
    },

    {
      label: "Le cadre",
      titre: "Budget prévisionnel : obligation légale ou outil de pilotage ?",
      blocs: [
        {
          type: "p",
          texte:
            "Pour la plupart des PME, le budget n'est pas obligatoire. Le Code de commerce fixe toutefois un seuil au-delà duquel des documents prévisionnels s'imposent.",
        },
        { type: "h3", texte: "Ce que dit le Code de commerce" },
        {
          type: "p",
          texte:
            "L'[article L232-2 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006228895) impose à certaines sociétés commerciales d'établir une situation de l'actif réalisable et disponible et du passif exigible, un compte de résultat prévisionnel, un tableau de financement et un plan de financement prévisionnel. L'[article R232-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041603987) précise le seuil : les sociétés qui comptent trois cents salariés ou plus à la clôture, ou dont le chiffre d'affaires net atteint 18 millions d'euros. Pour les modalités exactes, rapprochez-vous de votre expert-comptable ou de votre commissaire aux comptes.",
        },
        { type: "h3", texte: "Ce que demandent la banque et les partenaires" },
        {
          type: "p",
          texte:
            "En dessous de ces seuils, un budget reste demandé dès que l'entreprise sollicite un financement, prépare un investissement ou traverse une période difficile. Présenté avec ses hypothèses et le suivi des mois écoulés, il change la conversation avec le banquier.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Qui construit le budget, et avec qui",
      blocs: [
        {
          type: "p",
          texte:
            "Le budget appartient au dirigeant : c'est lui qui arbitre les hypothèses et s'engage sur le résultat. Mais il ne se construit pas seul. Les responsables chiffrent leur périmètre, l'expert-comptable fournit des comptes fiables et à jour, et quelqu'un doit tenir la méthode, animer le suivi mensuel et poser les bonnes questions sur les écarts.",
        },
        { type: "h3", texte: "Le rôle de l'expert-comptable, et celui du directeur financier" },
        {
          type: "p",
          texte:
            "L'expert-comptable établit les comptes annuels et les déclarations ; beaucoup proposent aussi des prévisionnels. Le directeur financier, salarié ou à temps partagé, travaille en amont des décisions : il construit le budget avec le dirigeant, le fait vivre chaque mois et prépare les arbitrages. Bpifrance Création recommande d'ailleurs de faire valider ses prévisions par un regard extérieur, qu'elle juge précieux.",
        },
        { type: "h3", texte: "Notre façon d'intervenir" },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, Marjorie Anglade, expert-comptable diplômée et inscrite à l'Ordre, intervient comme directrice financière externalisée. Le cabinet ne tient pas votre comptabilité : le travail part des comptes établis par votre expert-comptable. Le premier chantier est souvent de vérifier que les données de base arrivent à temps, puis de construire un budget que vous lisez réellement et un point mensuel pour le suivre. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord. Pour situer d'abord votre entreprise, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un budget prévisionnel ?",
      r: [
        "C'est le chiffrage de l'activité prévue sur le prochain exercice : chiffre d'affaires, achats, charges externes, masse salariale, impôts et taxes, amortissements, frais financiers et résultat attendu. Il reprend la structure du compte de résultat pour pouvoir être comparé au réel, se découpe en mois et repose sur des hypothèses écrites. Pour une PME, c'est un outil de pilotage, rarement une obligation légale.",
      ],
    },
    {
      q: "Quelle différence entre budget prévisionnel et prévisionnel financier ?",
      r: [
        "Le budget prévisionnel porte sur un seul exercice, découpé mois par mois, et sert à piloter l'année. Le prévisionnel financier projette l'entreprise sur trois à cinq ans, avec compte de résultat, plan de financement et trésorerie, pour vérifier qu'un projet est viable et finançable. Le premier sert au suivi mensuel, le second à la décision stratégique et à la discussion avec les financeurs.",
      ],
    },
    {
      q: "Comment présenter un tableau de budget prévisionnel ?",
      r: [
        "Les postes du compte de résultat en lignes, les douze mois en colonnes, avec un total annuel. Pour chaque mois écoulé, ajoutez trois colonnes : budget, réalisé et écart. Répartissez les montants selon la saisonnalité réelle des dernières années plutôt qu'en divisant par douze. Gardez à côté la liste des hypothèses, pour pouvoir expliquer chaque écart par un volume, un prix, un coût ou un décalage.",
      ],
    },
    {
      q: "Le budget prévisionnel est-il obligatoire ?",
      r: [
        "Pas pour la plupart des PME. Les articles L232-2 et R232-2 du Code de commerce imposent des documents de gestion prévisionnelle, dont un compte de résultat prévisionnel, aux sociétés commerciales de trois cents salariés ou plus, ou dont le chiffre d'affaires net atteint 18 millions d'euros. En dessous, la banque le demande souvent pour un financement. Votre expert-comptable vous confirmera votre situation.",
      ],
    },
    {
      q: "Quand faut-il construire le budget de l'année suivante ?",
      r: [
        "Idéalement deux à trois mois avant le début de l'exercice, pour laisser le temps de faire chiffrer chaque responsable, d'arbitrer et de valider. Il se construit à partir des douze derniers mois connus, en retirant les éléments exceptionnels. Une fois validé, il reste la référence de l'année ; les révisions en cours d'exercice prennent la forme d'une prévision actualisée, présentée à côté.",
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
      titre: "Le compte de résultat prévisionnel de votre business plan",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/entrepreneur/actualites/compte-resultat-previsionnel-votre-business-plan",
    },
    {
      titre:
        "Le rapport annuel de l'Observatoire des délais de paiement appelle à maintenir la vigilance quant aux délais observés dans l'économie française",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/communiques-de-presse/le-rapport-annuel-de-lobservatoire-des-delais-de-paiement-appelle-maintenir-la-vigilance-quant-aux",
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
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-08-23",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
