import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « tableau de bord KPI » (590/mois, KD 19). Secondaire : « KPI tableau
 * de bord » (590).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite l'outil (choisir ses KPI, construire et faire vivre un tableau
 * de bord de dirigeant) et renvoie vers le pilier.
 *
 * POINTS SENSIBLES
 * - Titre réglementé : le cabinet ne tient aucune comptabilité. Marjorie Anglade
 *   est expert-comptable inscrite, mais intervient ici en directrice financière
 *   externalisée. Le texte ne doit jamais laisser entendre une tenue de comptes.
 * - Le tableau d'exemples de KPI par fonction est indicatif (pas de valeurs cibles
 *   chiffrées : aucune norme sourcée ne vaut pour toutes les PME).
 * - Liens internes limités aux articles publiés avant le 24/05/2027
 *   (budget-de-tresorerie, taux-de-marge, comite-de-direction).
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "tableau-de-bord-kpi",

  motCle: "tableau de bord KPI (590/mois, KD 19) — SE Ranking, 24/09/2026",
  motsClesSecondaires: ["KPI tableau de bord (590/mois)"],

  // 41 / 42
  metaTitle: "Tableau de bord KPI : choisir, construire",
  // 150 / 150
  metaDescription:
    "Tableau de bord KPI pour dirigeant de PME : choisir 5 à 10 indicateurs utiles, les présenter sur une page, fixer des seuils et le faire vraiment lire.",

  h1: "Tableau de bord KPI : les indicateurs qui servent vraiment à décider",

  chapo:
    "Un tableau de bord KPI utile tient sur une page, compte cinq à dix indicateurs et répond à une seule question : qu'est-ce que je dois décider ce mois-ci ? La plupart des PME ont l'inverse : un classeur de trente onglets, alimenté à la main, que personne n'ouvre entre deux clôtures. Le problème n'est presque jamais l'outil. C'est le choix des indicateurs, l'absence de seuils qui déclenchent une action et l'absence de rendez-vous fixe pour les lire. Voici comment partir de vos décisions pour choisir vos KPI, les présenter pour qu'ils soient lus, et faire du tableau de bord un rituel de direction plutôt qu'un rapport de plus.",

  essentiel: {
    reponse:
      "Un tableau de bord KPI est un document de suivi qui rassemble les indicateurs clés de performance d'une entreprise, compare chaque valeur à un objectif et met en évidence les écarts qui appellent une décision. Pour une PME, il tient idéalement sur une page, avec cinq à dix indicateurs couvrant la trésorerie, la marge, l'activité commerciale et l'opérationnel. Chaque KPI a une définition écrite, une source de données, un responsable, une valeur cible et un seuil d'alerte. Il se met à jour chaque mois, ou chaque semaine pour les indicateurs de trésorerie en période de tension.",
    points: [
      "Partir des décisions à prendre, pas des données disponibles",
      "Cinq à dix indicateurs, sur une page, comparés à une cible",
      "Chaque KPI a un seuil qui déclenche une action écrite à l'avance",
      "Un rendez-vous fixe de lecture, sinon le tableau meurt",
      "Des données fiables et à l'heure valent mieux qu'un outil sophistiqué",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Tableau de bord KPI : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création définit le tableau de bord de gestion comme [« un document de suivi qui permet de mesurer régulièrement la performance d'une entreprise »](https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/tableaux-bord-gestion), qui compare les objectifs prévus aux résultats obtenus et met en évidence les écarts à analyser. Les KPI, pour key performance indicators, sont les indicateurs qu'on choisit d'y faire figurer. **Un indicateur mesure quelque chose ; un KPI mesure quelque chose dont dépend une décision.**",
        },
        { type: "h3", texte: "KPI, indicateur, reporting : trois choses différentes" },
        {
          type: "tableau",
          entetes: ["Outil", "À quoi il sert"],
          lignes: [
            ["Indicateur", "Mesurer un phénomène : un nombre de devis, un délai, un montant"],
            ["KPI", "Mesurer ce qui conditionne l'atteinte d'un objectif, avec une cible et un seuil d'alerte"],
            ["Reporting", "Rendre compte de ce qui s'est passé, souvent à destination d'un tiers : banque, actionnaire, groupe"],
            ["Tableau de bord KPI", "Réunir les quelques KPI qui permettent au dirigeant de décider, et les lire à date fixe"],
          ],
        },
        { type: "h3", texte: "Le tableau de bord n'est pas la comptabilité" },
        {
          type: "p",
          texte:
            "Les comptes annuels disent ce qui s'est passé sur un exercice clos. Le tableau de bord regarde le mois écoulé et les mois qui viennent. Il utilise des chiffres comptables, mais aussi des données que la comptabilité ne voit pas : un carnet de commandes, un taux de service, un nombre de devis en attente. C'est l'un des outils centraux d'une mission de [DAF externalisé](/daf-externalise-toulouse/), parce qu'il relie les chiffres aux décisions de la semaine.",
        },
      ],
    },

    {
      label: "Le constat",
      titre: "Pourquoi tant de tableaux de bord ne sont jamais lus",
      exergue: "Un tableau de bord qu'on ne lit pas coûte plus cher qu'aucun tableau de bord : il donne l'illusion d'être piloté.",
      blocs: [
        {
          type: "p",
          texte:
            "Le scénario est courant. Un tableau de bord est construit avec énergie, puis enrichi à chaque demande : un onglet pour la banque, un autre pour le commercial, un troisième pour la production. Six mois plus tard, sa mise à jour prend deux jours et plus personne ne le lit en entier. Trois causes reviennent presque toujours.",
        },
        { type: "h3", texte: "Trop d'indicateurs" },
        {
          type: "p",
          texte:
            "France Num, le programme de l'État pour la transformation numérique des TPE et PME, le formule sans détour : [« 5 à 10 indicateurs bien choisis valent mieux qu'une usine à gaz »](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/gestion-traitement-et-analyse-des-donnees/comment). Bpifrance Création fait le même constat : un tableau de bord trop complexe, avec trop d'indicateurs, risque de ne pas être utilisé régulièrement.",
        },
        { type: "h3", texte: "Des indicateurs sans cible ni seuil" },
        {
          type: "p",
          texte:
            "Un chiffre d'affaires mensuel affiché seul ne dit rien. Est-il bon, mauvais, conforme au budget ? Sans valeur cible, le lecteur doit reconstruire le contexte de tête à chaque lecture, et finit par ne plus le faire. Sans seuil d'alerte, aucun chiffre ne déclenche jamais rien.",
        },
        { type: "h3", texte: "Des chiffres qui arrivent trop tard" },
        {
          type: "p",
          texte:
            "Un tableau de bord qui présente en juin les chiffres de mars décrit une entreprise qui n'existe plus. La fraîcheur des données compte davantage que leur précision au centime : un taux de marge estimé à la mi-mois est plus utile qu'un taux exact connu trois mois après.",
        },
      ],
    },

    {
      label: "Choisir",
      titre: "Choisir ses KPI en partant des décisions à prendre",
      blocs: [
        {
          type: "p",
          texte:
            "La méthode la plus sûre part à l'envers : non pas « quelles données avons-nous ? » mais « quelles décisions devons-nous prendre dans les prochains mois ? ». Recruter, investir, relever un prix, relancer un client, arrêter une gamme. Chaque décision appelle une ou deux mesures, et ce sont elles qui deviennent vos KPI.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Écrire la décision** : par exemple, « pouvons-nous embaucher un technicien au deuxième semestre ? »",
            "**Identifier ce dont elle dépend** : la trésorerie disponible dans six mois, la marge dégagée par l'activité concernée, le carnet de commandes",
            "**Fixer la cible et le seuil** : la valeur visée, et la valeur à partir de laquelle on agit",
            "**Écrire l'action** : ce qui se passe si le seuil est franchi, et qui le déclenche",
          ],
        },
        { type: "h3", texte: "Les critères d'un bon KPI" },
        {
          type: "p",
          texte:
            "France Num retient six qualités : un bon indicateur est clair, pertinent, économique à produire, adéquat, quantifiable et fiable. Bpifrance Création ajoute qu'il doit être [simple à comprendre, facile à mettre à jour, relié à un objectif précis et utile pour décider d'une action](https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/tableaux-bord-gestion). Le dernier critère est le plus sélectif. France Num le résume ainsi : si un indicateur ne vous sert à rien pour décider, supprimez-le.",
        },
        { type: "h3", texte: "Ne pas copier le tableau de bord d'un autre" },
        {
          type: "p",
          texte:
            "L'erreur classique, selon France Num, est de reprendre à l'identique les KPI d'une autre entreprise. Une PME industrielle ne suit pas ce que suit un distributeur ou une société de services. Deux entreprises du même secteur n'ont pas non plus les mêmes fragilités : l'une dépend de trois gros clients, l'autre d'un stock saisonnier. Le tableau de bord doit refléter ce qui peut mettre votre entreprise en difficulté.",
        },
      ],
    },

    {
      label: "Exemples",
      titre: "KPI tableau de bord : exemples d'indicateurs par fonction",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création distingue quatre familles : indicateurs économiques, physiques, humains et de suivi de projets. Pour une PME de 10 à 250 salariés, la liste ci-dessous sert de point de départ. Il ne s'agit pas de tout retenir, mais de choisir un ou deux indicateurs par ligne, ceux qui éclairent vos décisions.",
        },
        {
          type: "tableau",
          entetes: ["Fonction", "KPI possibles"],
          lignes: [
            ["Trésorerie", "Solde bancaire en fin de mois, trésorerie prévue à trois mois, écart entre prévu et réalisé"],
            ["Rentabilité", "Marge brute par activité, taux de marge, résultat mensuel estimé comparé au budget"],
            ["Clients", "Délai moyen de paiement constaté, encours échu, part des trois premiers clients dans le chiffre d'affaires"],
            ["Commercial", "Carnet de commandes en mois d'activité, taux de transformation des devis, nombre de devis en attente"],
            ["Opérations", "Taux de service ou de livraison à l'heure, taux d'utilisation des équipes ou des machines, niveau de stock"],
            ["Équipe", "Absentéisme, heures supplémentaires, postes ouverts non pourvus"],
          ],
        },
        { type: "h3", texte: "Définir chaque indicateur par écrit" },
        {
          type: "p",
          texte:
            "Un même mot recouvre souvent plusieurs calculs. Le taux de marge de l'INSEE, par exemple, est [« le rapport de l'excédent brut d'exploitation (EBE) à la valeur ajoutée »](https://www.insee.fr/fr/metadonnees/definition/c1574), alors que beaucoup de dirigeants appellent taux de marge le rapport entre marge commerciale et chiffre d'affaires. Aucun n'a tort, mais il faut choisir, l'écrire et s'y tenir. Notre article sur le [calcul du taux de marge](/infos-utiles/taux-de-marge/) détaille les formules et leurs usages.",
        },
        { type: "h3", texte: "Le délai client, KPI sous-estimé" },
        {
          type: "p",
          texte:
            "Entre entreprises, l'[article L441-10 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392) plafonne le délai de paiement convenu à soixante jours après la date de facture, ou quarante-cinq jours fin de mois si le contrat le prévoit. Le délai réellement constaté est souvent plus long, et chaque jour de retard est de la trésorerie immobilisée. Selon le [rapport 2024 de l'Observatoire des délais de paiement](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024) de la Banque de France, le retard moyen de paiement atteignait 13,6 jours au quatrième trimestre 2024. Suivre ce délai client par client, chaque mois, fait partie des indicateurs les plus rentables à tenir.",
        },
      ],
    },

    {
      label: "Construire",
      titre: "Construire un tableau de bord KPI sur une page",
      blocs: [
        {
          type: "p",
          texte:
            "Le format compte moins que la régularité. Bpifrance Création le rappelle : un tableau de bord peut être un simple tableur, un document partagé ou un logiciel de pilotage, et [« le format importe moins que la qualité des indicateurs suivis et la régularité de leur mise à jour »](https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/tableaux-bord-gestion).",
        },
        { type: "h3", texte: "Une ligne par KPI, cinq colonnes" },
        {
          type: "p",
          texte:
            "France Num propose une structure simple : un tableau à cinq colonnes, avec l'indicateur, la valeur cible minimum ou maximum, la valeur actuelle, la tendance et un commentaire, et des couleurs pour distinguer ce qui est atteint, à surveiller ou en dessous de l'objectif. Nous y ajoutons deux informations, sur une fiche à part : la source de chaque donnée et la personne chargée de la produire.",
        },
        { type: "h3", texte: "Le bon rythme de mise à jour" },
        {
          type: "p",
          texte:
            "Bpifrance Création recommande une mise à jour mensuelle, et un suivi hebdomadaire de certains indicateurs en cas de forte saisonnalité ou de tension de trésorerie : encaissements, décaissements, commandes, devis, retards de paiement. Les KPI de trésorerie se nourrissent directement de votre [budget de trésorerie](/infos-utiles/budget-de-tresorerie/) : le tableau de bord affiche le solde prévu à trois mois, le budget en donne le détail.",
        },
        { type: "h3", texte: "Automatiser après, pas avant" },
        {
          type: "p",
          texte:
            "La tentation est d'acheter un outil de visualisation dès le départ. Mieux vaut tenir le tableau de bord à la main pendant deux ou trois mois : c'est le temps nécessaire pour vérifier que les indicateurs choisis servent réellement, et pour corriger ceux qui ne servent pas. On automatise ensuite ce qui a fait ses preuves.",
        },
      ],
    },

    {
      label: "Faire vivre",
      titre: "Faire vivre le tableau de bord : lecture, écarts, décisions",
      blocs: [
        {
          type: "p",
          texte:
            "Un tableau de bord n'a de valeur que s'il est lu à date fixe, par les personnes qui peuvent agir. **Le rendez-vous de lecture compte davantage que le document lui-même.**",
        },
        { type: "h3", texte: "Un rendez-vous fixe, une durée courte" },
        {
          type: "p",
          texte:
            "Le plus efficace est de l'inscrire en ouverture d'une réunion existante, par exemple le [comité de direction](/infos-utiles/comite-de-direction/) mensuel : quinze à trente minutes, uniquement sur les indicateurs hors seuil. Ceux qui sont au vert ne se commentent pas. Le temps gagné va aux écarts, et à la décision qu'ils appellent.",
        },
        { type: "h3", texte: "Analyser l'écart avant de le corriger" },
        {
          type: "p",
          texte:
            "Bpifrance Création insiste sur l'analyse des écarts entre prévisions et réalité, poste par poste, avec un objectif : agir rapidement, avant que les écarts ne se transforment en difficultés plus importantes. Un écart s'explique d'abord : erreur de donnée, décalage de calendrier ou vraie dérive. Seule la troisième appelle une action, et c'est elle qui doit figurer au compte rendu, avec un nom et une date.",
        },
        { type: "h3", texte: "Des données fiables, à l'heure" },
        {
          type: "p",
          texte:
            "Beaucoup d'indicateurs financiers reposent sur la comptabilité. Si la saisie a trois mois de retard, le tableau de bord aura trois mois de retard. Le rythme de transmission des pièces et des situations intermédiaires se règle avec votre expert-comptable, qui produit les comptes ; le tableau de bord, lui, s'en sert pour décider. Le premier travail est souvent là, moins spectaculaire qu'un graphique, mais sans lui rien ne tient.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Mettre en place votre tableau de bord KPI",
      blocs: [
        {
          type: "p",
          texte:
            "Les erreurs se ressemblent d'une entreprise à l'autre. Le tableau ci-dessous résume ce qu'il faut éviter et ce qui fonctionne.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["À éviter", "À faire"],
          lignes: [
            ["Trente indicateurs sur dix onglets", "Cinq à dix KPI sur une page"],
            ["Des chiffres sans objectif", "Une cible et un seuil d'alerte pour chaque KPI"],
            ["Des données disponibles trois mois après", "Des estimations à la mi-mois, corrigées ensuite"],
            ["Un tableau envoyé par courriel", "Une lecture à date fixe, en réunion, sur les écarts"],
            ["Un outil acheté avant d'avoir choisi ses KPI", "Un tableur pendant trois mois, puis l'automatisation"],
          ],
        },
        { type: "h3", texte: "Ce que nous faisons, et ce que nous ne faisons pas" },
        {
          type: "p",
          texte:
            "Au cabinet, c'est [Marjorie Anglade](/marjorie-anglade/), en directrice financière à temps partagé, qui construit le tableau de bord avec vous : choix des indicateurs à partir de vos décisions, définitions écrites, seuils, rythme de lecture. Si un indicateur relève d'un autre domaine, commercial ou industriel par exemple, elle fait appel à un collègue sur ce point précis, et reste votre interlocutrice. Nous ne tenons pas votre comptabilité, et le périmètre écrit dans la proposition ne s'élargit pas sans votre accord. L'objectif est que votre équipe sache tenir le tableau de bord sans nous.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore quels chiffres vous manquent le plus, commencez par le [diagnostic d'entreprise](/diagnostic/) : quelques minutes pour situer le blocage avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Combien de KPI faut-il dans un tableau de bord ?",
      r: [
        "Pour un dirigeant de PME, cinq à dix indicateurs suffisent, c'est aussi la fourchette que recommande France Num. Au-delà, le tableau de bord devient long à mettre à jour et n'est plus lu en entier. Les responsables de service peuvent tenir leurs propres indicateurs plus détaillés, mais le tableau de bord de direction ne retient que ceux dont dépend une décision de l'entreprise.",
      ],
    },
    {
      q: "Quelle différence entre un KPI et un indicateur ?",
      r: [
        "Tout KPI est un indicateur, mais l'inverse n'est pas vrai. Un indicateur mesure un phénomène, comme un nombre de devis ou un délai de livraison. Un KPI, ou indicateur clé de performance, mesure ce qui conditionne l'atteinte d'un objectif précis. Il est assorti d'une valeur cible, d'un seuil d'alerte et d'une action prévue si ce seuil est franchi.",
      ],
    },
    {
      q: "À quelle fréquence mettre à jour un tableau de bord KPI ?",
      r: [
        "Une mise à jour mensuelle convient à la plupart des indicateurs d'une PME. En période de tension de trésorerie, de forte saisonnalité ou de démarrage commercial, certains indicateurs gagnent à être suivis chaque semaine : encaissements, décaissements, commandes, devis et retards de paiement. L'important est la régularité : une date fixe de mise à jour, puis une date fixe de lecture.",
      ],
    },
    {
      q: "Faut-il un logiciel pour faire un tableau de bord KPI ?",
      r: [
        "Non, un tableur suffit pour commencer. Bpifrance Création comme France Num rappellent que le format importe moins que la qualité des indicateurs et la régularité de leur mise à jour. Tenir le tableau de bord à la main pendant quelques mois permet de vérifier que chaque KPI sert réellement. Un outil d'automatisation se justifie ensuite, sur des indicateurs stabilisés.",
      ],
    },
    {
      q: "Quels KPI financiers suivre en priorité dans une PME ?",
      r: [
        "Trois familles couvrent l'essentiel. La trésorerie : solde actuel et solde prévu à trois mois. La rentabilité : marge par activité et résultat estimé comparé au budget. Le poste clients : délai de paiement constaté et encours échu. Le choix exact dépend de vos fragilités, par exemple un stock saisonnier ou une forte dépendance à quelques gros clients.",
      ],
    },
  ],

  sources: [
    {
      titre: "Les tableaux de bord de gestion",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/tableaux-bord-gestion",
    },
    {
      titre: "Comment piloter la croissance de son entreprise avec les bons indicateurs de performance ?",
      editeur: "France Num",
      url: "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/gestion-traitement-et-analyse-des-donnees/comment",
    },
    {
      titre: "Taux de marge (statistique d'entreprise)",
      editeur: "Insee",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1574",
    },
    {
      titre: "Article L441-10 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392",
    },
    {
      titre: "Rapport de l'Observatoire des délais de paiement 2024",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-05-24",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
