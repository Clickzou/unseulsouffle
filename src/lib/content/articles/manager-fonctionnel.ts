import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, conseil en organisation. Signé Muriel Saffroy.
 * Requête : « manager fonctionnel » (480/mois, KD 7). Secondaire : « manager
 * hiérarchique ».
 *
 * Périmètre : la distinction entre lien fonctionnel et lien hiérarchique, et la
 * manière de faire tenir le lien fonctionnel dans une PME. La fonction de
 * manager en général appartient à /infos-utiles/role-du-manager/ (janvier 2027),
 * la structure matricielle à /infos-utiles/structure-matricielle/ (février 2027) :
 * renvoyer, ne pas reprendre.
 *
 * POINTS SENSIBLES
 * - Juridique : « manager fonctionnel » n'est pas une notion du droit du
 *   travail. Le texte s'appuie sur la définition du lien de subordination
 *   (Cass. soc., 13 nov. 1996, n° 94-13.187, Légifrance) et sur L1331-1 (sanction
 *   disciplinaire), vérifiés le 24/09/2026. Il reste prudent : le pouvoir de
 *   direction appartient à l'employeur, qui l'exerce par sa ligne hiérarchique ou
 *   par délégation ; renvoi vers un avocat pour toute délégation ou sanction.
 * - Aucun chiffre sur la fréquence des organisations fonctionnelles en PME :
 *   aucune source ouverte ne le mesure.
 */
export const article: Article = {
  slug: "manager-fonctionnel",

  motCle: "manager fonctionnel (480/mois, KD 7) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "manager hiérarchique",
    "lien fonctionnel et lien hiérarchique",
    "autorité fonctionnelle",
    "manager sans autorité hiérarchique",
  ],

  // 37 / 42
  metaTitle: "Manager fonctionnel ou hiérarchique ?",
  // 150 / 150
  metaDescription:
    "Manager fonctionnel et manager hiérarchique : qui décide quoi, ce que dit le droit, les risques du double commandement et cinq règles pour les éviter.",

  h1: "Manager fonctionnel : son rôle, ses limites, et comment le faire tenir face au hiérarchique",

  chapo:
    "Un manager fonctionnel dirige un domaine, pas des personnes. Il fixe les règles, les méthodes ou les priorités d'un sujet transversal (qualité, sécurité, contrôle de gestion, projet) pour des salariés qui ne dépendent pas de lui. Le manager hiérarchique, lui, dirige les personnes : il organise leur travail, les évalue et exerce, au nom de l'employeur, le pouvoir de sanction. Les deux liens coexistent dès qu'une PME crée des fonctions support ou lance des projets transversaux, souvent sans que personne ait écrit qui l'emporte en cas de désaccord. C'est là que naissent les consignes contradictoires. La solution tient moins dans l'organigramme que dans quelques règles d'arbitrage posées à l'avance.",

  essentiel: {
    reponse:
      "Un manager fonctionnel exerce une autorité sur un domaine d'expertise ou un projet transversal (qualité, sécurité, finance, méthodes) auprès de salariés qui ne lui sont pas rattachés. Il dit « quoi » et « selon quelles règles ». Le manager hiérarchique dit « qui », « quand » et « avec quels moyens », évalue et peut sanctionner au nom de l'employeur. En droit, le lien de subordination se définit par le pouvoir de donner des ordres, d'en contrôler l'exécution et de sanctionner les manquements (Cass. soc., 13 novembre 1996) : sauf délégation, ce dernier pouvoir ne relève pas du manager fonctionnel. Le lien fonctionnel tient quand une règle d'arbitrage est posée à l'avance.",
    points: [
      "Fonctionnel : autorité sur un domaine ; hiérarchique : autorité sur des personnes",
      "Le pouvoir disciplinaire appartient à l'employeur et s'exerce en général par la ligne hiérarchique",
      "Le double commandement produit des instructions contradictoires, facteur de risque psychosocial selon l'INRS",
      "Qui tranche en cas de désaccord doit être écrit avant le premier désaccord",
      "Un manager fonctionnel efficace convainc plus qu'il n'ordonne",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Manager fonctionnel : définition et exemples",
      blocs: [
        {
          type: "p",
          texte:
            "Le manager fonctionnel a une autorité qui porte sur un sujet, pas sur une équipe. **Il peut dire comment le travail doit être fait dans son domaine, sans pouvoir dire à la personne ce qu'elle fera demain matin.** Le responsable qualité qui impose une procédure de contrôle aux ateliers, le contrôleur de gestion qui fixe le calendrier des remontées budgétaires, le chef de projet qui mobilise un technicien du bureau d'études : tous exercent une autorité fonctionnelle.",
        },
        { type: "h3", texte: "Une autorité fondée sur l'expertise" },
        {
          type: "p",
          texte:
            "Cette autorité ne vient pas d'une place dans la chaîne de commandement. Elle vient d'une compétence reconnue, d'une mission confiée par la direction, parfois d'une obligation réglementaire. C'est ce qui la rend fragile : un chef d'atelier sous pression de production peut décider que la procédure qualité attendra, et le responsable qualité n'a aucun moyen direct de l'en empêcher.",
        },
        { type: "h3", texte: "Pourquoi le sujet se pose en PME" },
        {
          type: "p",
          texte:
            "Dans une entreprise de quinze personnes, tout le monde rend compte au dirigeant et la question ne se pose guère. Dès que l'entreprise crée des fonctions support ou lance des projets qui traversent les services, le lien fonctionnel apparaît. Il se superpose aux liens hiérarchiques existants, rarement de manière explicite. C'est un chantier typique de [conseil en organisation](/transformation-entreprise/) : non pas redessiner les cases, mais écrire comment les deux autorités se partagent le terrain.",
        },
      ],
    },

    {
      label: "Comparaison",
      titre: "Manager fonctionnel et manager hiérarchique : les différences",
      blocs: [
        {
          type: "p",
          texte:
            "Le manager hiérarchique est le supérieur direct : celui dont on dépend sur l'[organigramme d'entreprise](/infos-utiles/organigramme-entreprise/), qui organise le travail, fixe les congés, conduit les entretiens et, le cas échéant, engage une procédure disciplinaire. Nous détaillons ses missions dans l'article sur le [rôle du manager](/infos-utiles/role-du-manager/). Le tableau ci-dessous résume ce qui les sépare.",
        },
        {
          type: "tableau",
          entetes: ["Manager hiérarchique", "Manager fonctionnel"],
          lignes: [
            ["Autorité sur des personnes : son équipe lui est rattachée", "Autorité sur un domaine : qualité, sécurité, finance, méthodes, projet"],
            ["Décide qui fait quoi, quand et avec quels moyens", "Décide selon quelles règles et avec quelles exigences le travail est fait"],
            ["Organise le planning, les congés, la charge", "Mobilise des personnes pour une mission, sans gérer leur temps"],
            ["Conduit les entretiens et contribue à l'évaluation", "Donne un avis sur la contribution, s'il est prévu"],
            ["Peut engager une procédure disciplinaire au nom de l'employeur", "N'a pas de pouvoir de sanction, sauf délégation expresse"],
            ["Légitimité tirée de la position", "Légitimité tirée de l'expertise et de la mission confiée"],
          ],
        },
        { type: "h3", texte: "Une même personne peut être les deux" },
        {
          type: "p",
          texte:
            "Le responsable qualité est le manager hiérarchique des deux techniciens de son service, et le manager fonctionnel de tous les ateliers pour les sujets qualité. Le directeur administratif et financier dirige son équipe comptable et fixe les règles de gestion pour l'ensemble des services. Ce cumul est normal. Il devient source de confusion quand la personne utilise l'autorité de l'un pour trancher dans le champ de l'autre : imposer une priorité de planning au nom de la qualité, par exemple, alors que le planning relève du chef d'atelier. Les équipes le perçoivent vite, et la légitimité fonctionnelle s'use.",
        },
      ],
    },

    {
      label: "Le droit",
      titre: "Ce que dit le droit du travail sur l'autorité fonctionnelle",
      blocs: [
        {
          type: "p",
          texte:
            "Le Code du travail ne connaît ni le manager fonctionnel ni le manager hiérarchique. Il connaît l'employeur, et le lien de subordination qui l'unit au salarié. Nous résumons ici des principes généraux ; pour un cas précis, un avocat en droit social reste le bon interlocuteur.",
        },
        { type: "h3", texte: "Le lien de subordination : ordonner, contrôler, sanctionner" },
        {
          type: "p",
          texte:
            "Dans son arrêt du [13 novembre 1996 (n° 94-13.187)](https://www.legifrance.gouv.fr/juri/id/JURITEXT000007035180/), la chambre sociale de la Cour de cassation définit le lien de subordination comme « l'exécution d'un travail sous l'autorité d'un employeur qui a le pouvoir de donner des ordres et des directives, d'en contrôler l'exécution et de sanctionner les manquements ». Ces trois pouvoirs appartiennent à l'employeur. Dans la pratique, il les exerce à travers sa ligne hiérarchique.",
        },
        {
          type: "p",
          texte:
            "Un manager fonctionnel donne des directives et en contrôle l'application dans son domaine, par délégation implicite de la direction. **Le troisième pouvoir, sanctionner, ne lui revient pas par défaut.** L'article [L1331-1 du Code du travail](https://code.travail.gouv.fr/code-du-travail/l1331-1) définit la sanction comme toute mesure, autre que les observations verbales, prise par l'employeur à la suite d'un agissement du salarié qu'il considère comme fautif. Si un salarié refuse d'appliquer une procédure de sécurité, le responsable HSE le signale ; c'est la hiérarchie, ou la direction, qui décide d'une éventuelle suite.",
        },
        { type: "h3", texte: "L'évaluation et la délégation" },
        {
          type: "p",
          texte:
            "Si l'entreprise pratique l'entretien d'évaluation, [service-public.gouv.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F31854) rappelle que ses critères doivent être précis, objectifs et vérifiables, liés au travail accompli, et que les salariés doivent être informés des méthodes avant leur mise en œuvre. Faire contribuer le manager fonctionnel à l'évaluation est possible, à condition que ce soit prévu et connu. Enfin, si vous voulez qu'un manager fonctionnel porte une responsabilité propre, en matière de sécurité par exemple, cela passe par une [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/) en bonne et due forme, à rédiger avec votre avocat.",
        },
      ],
    },

    {
      label: "En PME",
      titre: "Les managers fonctionnels dans une PME : où les trouve-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants de PME ont des managers fonctionnels sans les avoir nommés ainsi. Voici les situations les plus courantes dans l'industrie, l'agroalimentaire, les services et la distribution.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Qualité et sécurité alimentaire** : le responsable qualité impose des règles de traçabilité et de contrôle à des équipes de production qui ne dépendent pas de lui.",
            "**Santé, sécurité, environnement** : le référent HSE fixe les consignes et les vérifie sur tous les postes.",
            "**Contrôle de gestion et finance** : le calendrier des clôtures, les règles d'engagement de dépenses et les formats de reporting s'appliquent à tous les services.",
            "**Méthodes et amélioration continue** : le responsable méthodes définit les standards de travail que les chefs d'atelier appliquent.",
            "**Chef de projet** : il mobilise pour un temps des personnes de plusieurs services, sans en être le supérieur.",
            "**Coordination multisite** : un responsable harmonise les pratiques de plusieurs établissements dirigés chacun par leur propre responsable.",
          ],
        },
        {
          type: "p",
          texte:
            "Une fonction externalisée peut aussi exercer une autorité fonctionnelle. Un directeur financier à temps partagé fixe les formats de reporting et le calendrier de clôture ; un responsable sécurité d'un prestataire définit des consignes sur un chantier. Ces intervenants ne sont pas salariés de l'entreprise : ils ont d'autant plus besoin d'un mandat explicite de la direction, et ne disposent d'aucun pouvoir disciplinaire sur vos équipes.",
        },
        {
          type: "p",
          texte:
            "Dans chacun de ces cas, la même question finit par se poser : que se passe-t-il quand l'exigence fonctionnelle entre en conflit avec l'urgence opérationnelle ? Si la réponse n'est écrite nulle part, elle se décide au cas par cas, en général dans le bureau du dirigeant.",
        },
      ],
    },

    {
      label: "Le risque",
      titre: "Le double commandement : quand fonctionnel et hiérarchique se contredisent",
      blocs: [
        {
          type: "p",
          texte:
            "Le salarié qui reçoit une consigne de son chef d'équipe et une consigne opposée du responsable qualité ne vit pas un débat d'organisation. Il vit un dilemme : quoi qu'il fasse, il donnera tort à quelqu'un. Répété, ce dilemme use.",
        },
        { type: "h3", texte: "Un facteur de risque identifié" },
        {
          type: "p",
          texte:
            "L'INRS range les « instructions contradictoires » parmi les facteurs de risques psychosociaux liés à l'intensité et au temps de travail, aux côtés des objectifs irréalistes ou flous, dans sa page [Prévenir les risques psychosociaux : facteurs de risque](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html). L'employeur étant tenu de protéger la santé physique et mentale des salariés, un double commandement non régulé n'est pas seulement inefficace : c'est un sujet de prévention.",
        },
        { type: "h3", texte: "Un problème de mentalité autant que de structure" },
        {
          type: "p",
          texte:
            "Christopher Bartlett et Sumantra Ghoshal l'ont montré dans un article resté célèbre de la Harvard Business Review, [Matrix Management: Not a Structure, a Frame of Mind](https://hbr.org/1990/07/matrix-management-not-a-structure-a-frame-of-mind) : les organisations à double appartenance échouent moins par leur dessin que par l'absence de manière commune de penser et d'arbitrer. Pour une PME, la leçon est rassurante. Inutile de basculer dans une [structure matricielle](/infos-utiles/structure-matricielle/) complète pour gérer quelques liens fonctionnels : il suffit de rendre les règles du jeu explicites.",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Faire coexister lien fonctionnel et lien hiérarchique : cinq règles",
      blocs: [
        {
          type: "p",
          texte:
            "Ces règles tiennent sur une page. Elles se décident une fois avec les personnes concernées, pas au milieu d'un conflit.",
        },
        {
          type: "liste",
          items: [
            "**Écrire le périmètre de chaque autorité fonctionnelle.** Sur quels sujets le responsable qualité ou le contrôleur de gestion décide-t-il seul, et sur lesquels donne-t-il seulement un avis ?",
            "**Fixer la règle d'arbitrage avant le premier désaccord.** Par exemple : la sécurité l'emporte toujours ; sur la qualité, le fonctionnel décide sauf arrêt de ligne ; au-delà, arbitrage par le directeur de site sous 24 heures.",
            "**Faire passer les consignes fonctionnelles par la hiérarchie quand elles changent l'organisation du travail.** Le salarié ne doit pas découvrir seul que deux consignes s'opposent.",
            "**Prévoir la place du fonctionnel dans l'évaluation.** Un avis écrit, connu à l'avance, plutôt qu'une influence informelle.",
            "**Faire remonter les conflits récurrents, pas chaque conflit.** Si le même désaccord revient chaque mois, c'est la règle qui est mal posée, et c'est à la direction de la revoir.",
          ],
        },
        {
          type: "p",
          texte:
            "Le lieu naturel de ces arbitrages est le comité de direction, à condition qu'il tranche réellement. **Un lien fonctionnel sans règle d'arbitrage ne décentralise rien : il crée une file d'attente de plus vers le dirigeant.**",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Manager sans autorité hiérarchique : ce qui fait la différence",
      blocs: [
        {
          type: "p",
          texte:
            "Un manager fonctionnel efficace obtient l'adhésion sans pouvoir l'exiger. Cela repose sur trois choses : une expertise que les équipes reconnaissent, une compréhension réelle des contraintes du terrain, et un appui visible de la direction. Le premier réflexe, souvent, est d'aller chercher le dirigeant pour qu'il impose la règle. Cela marche une fois. À la troisième, l'autorité fonctionnelle n'existe plus que par procuration.",
        },
        { type: "h3", texte: "Le rôle du dirigeant" },
        {
          type: "p",
          texte:
            "Votre rôle n'est pas de trancher chaque désaccord. Il est de confier la mission publiquement, de faire écrire la règle d'arbitrage, puis de la tenir, y compris quand elle donne tort à un manager hiérarchique que vous appréciez. C'est souvent le point le plus difficile, et celui qui décide de la suite.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, un conseiller référent prend ce sujet en charge, sur un périmètre arrêté avec vous et écrit dans la proposition. Le travail commence par une lecture du fonctionnement réel : qui décide quoi aujourd'hui, où les consignes se contredisent, quels arbitrages remontent. Il se poursuit par la clarification des rôles et des règles de décision avec les personnes concernées. On ne touche pas à ce qui fonctionne. Si vous voulez d'abord situer où votre organisation coince, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un manager fonctionnel ?",
      r: [
        "C'est une personne qui exerce une autorité sur un domaine d'expertise ou un projet transversal, auprès de salariés qui ne lui sont pas rattachés hiérarchiquement. Le responsable qualité, le référent sécurité, le contrôleur de gestion ou le chef de projet en sont des exemples. Il fixe les règles et les exigences de son domaine, sans organiser le temps des personnes ni disposer, sauf délégation, du pouvoir de sanction.",
      ],
    },
    {
      q: "Quelle différence entre manager fonctionnel et manager hiérarchique ?",
      r: [
        "Le manager hiérarchique a autorité sur des personnes : il organise leur travail, gère leur planning, conduit leurs entretiens et peut engager une procédure disciplinaire au nom de l'employeur. Le manager fonctionnel a autorité sur un domaine : il dit selon quelles règles le travail doit être fait. Le premier répond à « qui fait quoi et quand », le second à « comment et avec quelles exigences ».",
      ],
    },
    {
      q: "Un manager fonctionnel peut-il sanctionner un salarié ?",
      r: [
        "Pas par défaut. Le pouvoir de sanction appartient à l'employeur, qui l'exerce en général par la ligne hiérarchique. Un manager fonctionnel constate un manquement dans son domaine et le signale ; la hiérarchie ou la direction décide de la suite. Une délégation expresse peut modifier cette répartition. Avant toute sanction, faites-vous conseiller par un avocat en droit social, car la procédure est encadrée.",
      ],
    },
    {
      q: "Qui décide en cas de désaccord entre fonctionnel et hiérarchique ?",
      r: [
        "Celui que la règle d'arbitrage désigne, à condition qu'elle ait été écrite avant le conflit. Une règle courante : la sécurité l'emporte toujours, le fonctionnel décide dans son domaine sauf impact majeur sur la production, et au-delà un arbitre désigné tranche dans un délai court. Sans règle, les désaccords remontent au dirigeant et le salarié reste pris entre deux consignes.",
      ],
    },
    {
      q: "Comment manager sans autorité hiérarchique ?",
      r: [
        "En s'appuyant sur trois ressources : une expertise reconnue, la compréhension des contraintes du terrain et un mandat clairement confié par la direction. Associez les managers hiérarchiques à la définition des règles, expliquez le pourquoi de chaque exigence et faites passer par eux les consignes qui changent l'organisation du travail. Recourir au dirigeant pour imposer une règle doit rester l'exception, sous peine de perdre toute autorité propre.",
      ],
    },
  ],

  sources: [
    {
      titre: "Cour de Cassation, Chambre sociale, du 13 novembre 1996, 94-13.187, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000007035180/",
    },
    {
      titre: "L1331-1 - Code du travail numérique",
      editeur: "Ministère du Travail",
      url: "https://code.travail.gouv.fr/code-du-travail/l1331-1",
    },
    {
      titre: "Évaluation du salarié",
      editeur: "Service-public.gouv.fr",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31854",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS) : facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Matrix Management: Not a Structure, a Frame of Mind",
      editeur: "Harvard Business Review (Christopher A. Bartlett et Sumantra Ghoshal)",
      url: "https://hbr.org/1990/07/matrix-management-not-a-structure-a-frame-of-mind",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-07-12",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: true,
};
