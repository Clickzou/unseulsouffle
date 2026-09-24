import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Muriel Saffroy.
 * Requête : « décision stratégique » (170/mois, KD 8).
 * Secondaire : « comité stratégique » (140).
 *
 * L'intention « coaching dirigeant » appartient au pilier /transformation-dirigeant/ :
 * cet article traite la décision stratégique et le comité stratégique, et renvoie
 * vers lui. Ne pas empiéter sur prendre-une-decision (méthode générale, biais) ni
 * sur outils-d-aide-a-la-decision (outils) : on y renvoie.
 *
 * POINTS SENSIBLES
 * - Droit des sociétés et du travail (C. com. L225-35, L227-5 ; C. trav. L2312-24) :
 *   rappels généraux, sans conseil juridique. Recommander avocat / expert-comptable
 *   pour toute modification des statuts ou création d'un organe statutaire.
 * - Chiffres Bpifrance Le Lab issus d'une enquête d'avril-juin 2019 : la date est
 *   dite dans le texte. Vérifiés le 24/09/2026.
 */
export const article: Article = {
  slug: "decision-strategique",

  motCle: "décision stratégique (170/mois, KD 8) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "comité stratégique (140/mois)",
    "exemple de décision stratégique",
    "décision stratégique tactique opérationnelle",
  ],

  // 38 / 42
  metaTitle: "Décision stratégique : la prendre en PME",
  // 146 / 150
  metaDescription:
    "Décision stratégique : définition, exemples en PME, qui décide selon la loi, rôle d'un comité stratégique et passage de la décision à l'exécution.",

  h1: "Décision stratégique : la reconnaître, la préparer et la faire exécuter dans une PME",

  chapo:
    "Une décision stratégique engage l'entreprise sur plusieurs années, mobilise des ressources importantes et se défait difficilement : entrer sur un marché, investir dans un outil, racheter un concurrent, abandonner une activité. Dans une PME, elle revient presque toujours au dirigeant, souvent seul, et souvent trop tard, parce que l'urgence du quotidien passe devant. Une décision stratégique réussie tient moins au génie de celui qui tranche qu'à trois conditions : la reconnaître comme telle, la préparer avec d'autres regards, par exemple un comité stratégique, et organiser son exécution dès le jour où elle est prise.",

  essentiel: {
    reponse:
      "Une décision stratégique est un choix qui engage durablement l'entreprise, mobilise une part importante de ses ressources et modifie sa position face à ses marchés ou à ses concurrents. Elle se distingue de la décision tactique, qui organise les moyens sur quelques mois, et de la décision opérationnelle, qui règle le quotidien. En société anonyme, la loi confie les orientations au conseil d'administration ; en SAS, ce sont les statuts qui organisent la direction. Un comité stratégique, instance consultative, aide le dirigeant de PME à la préparer.",
    points: [
      "Trois critères : horizon long, ressources importantes, réversibilité faible",
      "Selon Bpifrance Le Lab, 70 % des dirigeants de PME-ETI aimeraient consacrer plus de temps à la réflexion stratégique",
      "Seules 34 % des PME-ETI disposent d'un conseil d'administration, 24 % sous 50 salariés",
      "Un comité stratégique conseille, il ne décide pas à la place du dirigeant",
      "L'exécution échoue surtout faute de temps, de moyens et de relais managériaux",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Décision stratégique : définition et critères",
      blocs: [
        {
          type: "p",
          texte:
            "Toutes les décisions importantes ne sont pas stratégiques. Licencier un collaborateur est lourd, choisir un fournisseur peut coûter cher : ce sont pourtant, le plus souvent, des décisions de gestion. **Une décision devient stratégique quand elle change ce que l'entreprise sera dans trois ou cinq ans : ce qu'elle vend, à qui, avec quels moyens, face à quels concurrents.**",
        },
        { type: "h3", texte: "Trois critères pour la reconnaître" },
        {
          type: "liste",
          items: [
            "**L'horizon** : ses effets se mesurent en années, pas en semaines",
            "**Les ressources engagées** : une part significative de la trésorerie, de l'endettement ou des équipes",
            "**La réversibilité** : revenir en arrière coûte cher, prend du temps, ou n'est plus possible",
          ],
        },
        {
          type: "p",
          texte:
            "Une décision qui coche les trois critères mérite un traitement à part. Une décision qui n'en coche qu'un peut en général se prendre vite, et c'est une bonne chose : un dirigeant qui traite chaque choix comme stratégique ralentit toute son entreprise.",
        },
        { type: "h3", texte: "Stratégique, tactique, opérationnelle" },
        {
          type: "p",
          texte:
            "La typologie classique, formalisée par Igor Ansoff dans les années 1960, distingue trois niveaux de décision. Elle reste utile en PME, à condition de ne pas la lire comme un organigramme : le même dirigeant prend souvent les trois dans la même journée.",
        },
        {
          type: "tableau",
          entetes: ["Niveau de décision", "Horizon, portée et exemples en PME"],
          lignes: [
            ["Stratégique", "Plusieurs années, toute l'entreprise : entrer sur un marché, investir dans une nouvelle ligne, racheter un concurrent, céder une activité"],
            ["Tactique", "Quelques mois à un an, une fonction : réorganiser l'équipe commerciale, choisir un logiciel de gestion, fixer le budget de l'année"],
            ["Opérationnelle", "Le jour ou la semaine, une équipe : planifier la production, traiter une réclamation, remplacer un absent"],
          ],
        },
      ],
    },

    {
      label: "Exemples",
      titre: "Exemples de décisions stratégiques dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME de 10 à 250 salariés, les décisions stratégiques sont rares, quelques-unes par an, mais elles pèsent sur tout le reste. Elles se regroupent en cinq familles.",
        },
        {
          type: "liste",
          items: [
            "**Le portefeuille d'activités** : lancer une offre, abandonner une gamme qui ne gagne plus d'argent, réduire la dépendance à un client qui pèse trop lourd",
            "**Les marchés** : s'installer dans une nouvelle région, attaquer l'export, changer de circuit de distribution",
            "**La capacité** : investir dans un bâtiment ou une machine, construire un second site, automatiser",
            "**Le périmètre** : racheter un concurrent ou un fournisseur, s'associer, céder une filiale",
            "**Le capital et la direction** : ouvrir le capital, préparer une transmission, recruter un directeur général",
          ],
        },
        { type: "h3", texte: "La décision stratégique qui ne dit pas son nom" },
        {
          type: "p",
          texte:
            "Certaines se prennent sans qu'on les voie passer : accepter une commande qui mobilisera la moitié de l'atelier pendant un an, par exemple. L'absence de décision en est une aussi : laisser vieillir un outil sans arbitrer, c'est choisir de le remplacer plus tard, dans l'urgence.",
        },
        {
          type: "p",
          texte:
            "Le test est simple : si ce choix était mauvais, combien de temps et combien d'argent faudrait-il pour le corriger ? Au-delà d'un an ou d'une part sensible de vos fonds propres, traitez-le comme une décision stratégique.",
        },
      ],
    },

    {
      label: "Le temps",
      titre: "Pourquoi la décision stratégique est repoussée en PME",
      blocs: [
        {
          type: "p",
          texte:
            "Le paradoxe est connu de tous les dirigeants : les décisions les plus importantes sont celles pour lesquelles ils ont le moins de temps. Les chiffres-clés de l'[étude de Bpifrance Le Lab sur la gouvernance](https://lelab.bpifrance.fr/la-gouvernance-des-pme-et-eti-levier-de-confiance-et-de-performance-les-chiffres-cles-de-l-etude-gouvernance/), fondée sur une enquête d'avril à juin 2019, le mesurent : **70 % des dirigeants de PME-ETI aimeraient consacrer plus de temps à leurs réflexions stratégiques, et 62 % moins de temps à la gestion de l'opérationnel.**",
        },
        { type: "h3", texte: "L'urgent chasse l'important" },
        {
          type: "p",
          texte:
            "Une livraison en retard ou un client mécontent ont une échéance et un coût immédiat. La décision stratégique, non. Elle peut toujours attendre la semaine suivante, jusqu'au jour où un concurrent, une banque ou une panne la tranche à votre place.",
        },
        { type: "h3", texte: "Le dirigeant comme goulot d'étranglement" },
        {
          type: "p",
          texte:
            "Dans beaucoup de PME, le dirigeant est à la fois celui qui pense l'avenir et celui qui débloque le quotidien. Tant que les décisions opérationnelles remontent toutes à lui, il n'a ni le temps ni la disponibilité d'esprit pour les décisions stratégiques. C'est souvent le point de départ d'un [coaching dirigeant](/transformation-dirigeant/) : non pas lui apprendre à décider, mais lui rendre le temps et le recul que ces décisions exigent, en redistribuant ce qui peut l'être.",
        },
        { type: "h3", texte: "La solitude face au choix" },
        {
          type: "p",
          texte:
            "Une décision stratégique se partage mal en interne : évoquer la cession d'une activité inquiète les équipes concernées. Beaucoup de dirigeants la mûrissent donc seuls, parfois des mois. Nous avons consacré un article à la [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/) et aux moyens d'en sortir ; la gouvernance en fait partie.",
        },
      ],
    },

    {
      label: "Qui décide",
      titre: "Qui prend les décisions stratégiques : ce que prévoit le droit",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME, la réponse pratique est presque toujours « le dirigeant ». La réponse juridique dépend de la forme de la société, et elle mérite d'être connue, parce qu'elle ouvre des possibilités que beaucoup de dirigeants ignorent.",
        },
        { type: "h3", texte: "En société anonyme : le conseil d'administration" },
        {
          type: "p",
          texte:
            "Selon l'[article L225-35 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038799405/), « le conseil d'administration détermine les orientations de l'activité de la société et veille à leur mise en oeuvre, conformément à son intérêt social, en considérant les enjeux sociaux et environnementaux de son activité ». La décision stratégique y est donc, en droit, collégiale.",
        },
        { type: "h3", texte: "En SAS : ce que disent vos statuts" },
        {
          type: "p",
          texte:
            "Beaucoup de PME ont choisi la forme de la SAS. Pour elles, l'[article L227-5 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227032) tient en une phrase : « Les statuts fixent les conditions dans lesquelles la société est dirigée. » Rien n'impose de conseil ; rien n'interdit d'en créer un, ni de soumettre certaines décisions à son avis ou à son accord. Toute modification des statuts se prépare avec votre avocat ou votre expert-comptable.",
        },
        { type: "h3", texte: "À partir de 50 salariés : la consultation du CSE" },
        {
          type: "p",
          texte:
            "L'[article L2312-24 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037385809) prévoit une consultation annuelle du comité social et économique sur les orientations stratégiques de l'entreprise et sur leurs conséquences sur l'activité, l'emploi, l'évolution des métiers et des compétences et l'organisation du travail. Le CSE rend un avis et peut proposer des orientations alternatives ; l'organe d'administration lui adresse une réponse argumentée. Bien préparée, elle oblige surtout à formuler la stratégie.",
        },
        {
          type: "p",
          texte:
            "Dans les faits, la gouvernance formelle reste rare. Toujours selon Bpifrance Le Lab, toutes tailles confondues, 34 % des PME-ETI disposent d'un conseil d'administration, et seulement 24 % des entreprises de moins de 50 salariés. Une PME-ETI sur trois n'a pas de comité de direction.",
        },
      ],
    },

    {
      label: "Comité stratégique",
      titre: "Le comité stratégique : à quoi il sert et comment le composer",
      blocs: [
        {
          type: "p",
          texte:
            "Entre le dirigeant seul et le conseil d'administration statutaire, il existe une formule plus souple : le comité stratégique. C'est une instance, en général consultative, qui réunit le dirigeant et quelques personnes choisies pour leur regard, à intervalles réguliers, avec un seul objet : l'avenir de l'entreprise. **Il ne décide pas à votre place ; il vous oblige à expliciter votre raisonnement devant des gens qui n'ont aucun intérêt à vous approuver.**",
        },
        {
          type: "p",
          texte:
            "Le besoin est reconnu par les dirigeants eux-mêmes. Dans l'enquête de Bpifrance Le Lab, 84 % des répondants estiment qu'un conseil d'administration permet de mettre à l'épreuve sa vision stratégique et d'optimiser ses décisions. Le comité stratégique en offre l'essentiel, sans la lourdeur d'un organe statutaire.",
        },
        {
          type: "tableau",
          entetes: ["Comité de direction", "Comité stratégique"],
          lignes: [
            ["Réunit les responsables internes de l'entreprise", "Associe le dirigeant à des regards extérieurs, parfois un ou deux associés"],
            ["Se réunit chaque semaine ou chaque mois", "Se réunit en général trois à quatre fois par an"],
            ["Pilote l'activité et coordonne les fonctions", "Examine les orientations et les grandes options"],
            ["Décide dans le cadre du budget", "Conseille ; la décision reste au dirigeant ou à l'organe prévu par les statuts"],
            ["Travaille sur l'année en cours", "Travaille sur un horizon de trois à cinq ans"],
          ],
        },
        { type: "h3", texte: "Qui y faire entrer" },
        {
          type: "p",
          texte:
            "Trois à cinq personnes suffisent. Cherchez des compétences qui vous manquent plutôt que des proches qui vous rassurent : un dirigeant d'une entreprise un peu plus grande, un regard financier, quelqu'un qui connaît votre marché. Évitez votre banquier et vos fournisseurs principaux, dont les intérêts ne sont pas ceux de l'entreprise. Prévoyez une durée de mandat.",
        },
        { type: "h3", texte: "Comment le faire fonctionner" },
        {
          type: "liste",
          items: [
            "Un ordre du jour limité à deux ou trois sujets, envoyé avec un dossier une semaine avant",
            "Une séance de trois heures plutôt qu'une réunion d'une heure entre deux rendez-vous",
            "Un compte rendu qui distingue les avis exprimés et la décision retenue par le dirigeant",
          ],
        },
      ],
    },

    {
      label: "Préparer",
      titre: "Préparer une décision stratégique : le dossier à constituer",
      blocs: [
        {
          type: "p",
          texte:
            "Une décision stratégique se prépare comme un dossier, pas comme une conviction. La méthode générale de décision, étape par étape, est détaillée dans notre article sur [comment prendre une décision](/infos-utiles/prendre-une-decision/). Pour les choix stratégiques, quatre éléments font la différence.",
        },
        { type: "h3", texte: "Au moins trois options, dont le statu quo" },
        {
          type: "p",
          texte:
            "« Faut-il racheter ce concurrent ? » est une question fermée. « Comment gagner 30 % de capacité en trois ans ? » en ouvre plusieurs : rachat, investissement interne, sous-traitance, partenariat. Le statu quo doit figurer dans la liste, chiffré comme les autres, parce qu'il a lui aussi un coût.",
        },
        { type: "h3", texte: "Des hypothèses écrites et chiffrées" },
        {
          type: "p",
          texte:
            "Chaque option repose sur des hypothèses : volume de ventes, prix, délai de montée en charge, coût de financement. Écrivez-les, chiffrez un scénario prudent à côté du scénario central, et mesurez l'effet sur la trésorerie. Les outils utiles à ce stade, du prévisionnel à la matrice de décision, sont présentés dans notre article sur les [outils d'aide à la décision](/infos-utiles/outils-d-aide-a-la-decision/).",
        },
        { type: "h3", texte: "Le degré de réversibilité" },
        {
          type: "p",
          texte:
            "Pour chaque option, demandez-vous ce que coûterait une marche arrière au bout d'un an. Une option réversible, comme un test sur une région avant un déploiement national, vaut souvent mieux qu'un pari définitif.",
        },
        { type: "h3", texte: "Les critères posés avant de choisir" },
        {
          type: "p",
          texte:
            "Fixez ce qui fera pencher la balance avant de comparer les options : rentabilité, risque, cohérence avec le métier, charge pour les équipes. Posés après coup, les critères servent surtout à justifier l'option déjà préférée.",
        },
      ],
    },

    {
      label: "Exécuter",
      titre: "De la décision stratégique à l'exécution",
      blocs: [
        {
          type: "p",
          texte:
            "Une décision stratégique n'a de valeur qu'appliquée. Les dirigeants le savent : selon les chiffres-clés de Bpifrance Le Lab, la déclinaison des décisions en plan d'actions et leur communication aux collaborateurs relèvent de l'évidence pour 9 dirigeants de PME-ETI sur 10. Ces réflexes ne suffisent pas. Les obstacles qu'ils citent : **le manque de temps et de moyens (67 %), le manque de relais managériaux (35 %) et la mauvaise appropriation par les équipes (24 %).**",
        },
        { type: "h3", texte: "Un responsable nommé, des moyens attribués" },
        {
          type: "p",
          texte:
            "Chaque décision stratégique a besoin d'un porteur, qui n'est pas forcément le dirigeant, avec un budget, du temps dégagé et un droit explicite de décider dans son périmètre. Une décision confiée « à tout le monde » n'avance pas, et une décision confiée sans moyens remonte au dirigeant à la première difficulté.",
        },
        { type: "h3", texte: "Des jalons et une revue" },
        {
          type: "p",
          texte:
            "Découpez la mise en œuvre en jalons datés, et revoyez-les à rythme fixe, en comité de direction et, si vous en avez un, en comité stratégique. La revue ne sert pas seulement à vérifier l'avancement : elle permet de confronter les hypothèses de départ à la réalité, et de corriger la trajectoire tant que c'est possible.",
        },
        { type: "h3", texte: "Expliquer le pourquoi, pas seulement le quoi" },
        {
          type: "p",
          texte:
            "Les équipes s'approprient une décision quand elles comprennent le problème qu'elle résout. Les managers intermédiaires doivent l'entendre avant les autres, avec le temps de poser leurs questions : ce sont eux qui la porteront au quotidien.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Se faire accompagner sur une décision stratégique",
      blocs: [
        {
          type: "p",
          texte:
            "Un regard extérieur ne remplace ni votre connaissance de l'entreprise ni votre responsabilité. Il sert à poser les bonnes questions avant le choix et à tenir le cap pendant l'exécution.",
        },
        {
          type: "p",
          texte:
            "Au cabinet, ce travail est porté par [Muriel Saffroy](/muriel-saffroy/), associée fondatrice, qui a dirigé des sites industriels pendant vingt ans avant d'accompagner des dirigeants. Elle intervient comme référente unique : clarifier le choix à faire, organiser la façon dont il sera préparé et partagé, installer les relais qui le feront exécuter. Si la décision a une forte dimension financière, un investissement ou un rachat par exemple, elle fait appel à la collègue qui porte le pilotage financier, sur ce point précis. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord.",
        },
        {
          type: "encadre",
          titre: "La question qui tranche",
          texte:
            "Quelle est la décision stratégique que vous repoussez depuis plus de six mois ? Si elle vous vient immédiatement à l'esprit, ce n'est pas un manque d'idées : c'est un manque de temps, de recul ou d'interlocuteurs.",
        },
        {
          type: "p",
          texte:
            "Pour savoir si le blocage tient à votre charge, à votre organisation ou à votre gouvernance, commencez par un [diagnostic d'entreprise](/diagnostic/) : quelques minutes suffisent pour situer vos priorités.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'une décision stratégique ?",
      r: [
        "C'est un choix qui engage l'entreprise sur plusieurs années, mobilise une part importante de ses ressources et se défait difficilement. Il modifie ce que l'entreprise vend, à qui, avec quels moyens ou face à quels concurrents. Entrer sur un nouveau marché, investir dans une ligne de production, racheter un concurrent ou céder une activité en sont des exemples typiques. Elle se distingue des décisions tactiques et opérationnelles, qui organisent les moyens à plus court terme.",
      ],
    },
    {
      q: "Quelle différence entre décision stratégique, tactique et opérationnelle ?",
      r: [
        "La différence tient à l'horizon et à la portée. La décision stratégique engage toute l'entreprise sur plusieurs années. La décision tactique organise une fonction sur quelques mois à un an, comme le budget ou la réorganisation d'un service. La décision opérationnelle règle le quotidien d'une équipe : planning, réclamation, remplacement. Dans une PME, le même dirigeant prend souvent les trois, ce qui explique que les décisions stratégiques soient repoussées.",
      ],
    },
    {
      q: "Qu'est-ce qu'un comité stratégique ?",
      r: [
        "C'est une instance, en général consultative, qui réunit le dirigeant et quelques personnes choisies pour leur regard, souvent extérieures à l'entreprise, trois à quatre fois par an. Elle examine les grandes orientations et les options importantes sur un horizon de trois à cinq ans. Elle ne décide pas à la place du dirigeant, sauf si les statuts lui donnent ce pouvoir. En SAS, elle peut être créée librement, avec ou sans inscription dans les statuts.",
      ],
    },
    {
      q: "Une PME est-elle obligée d'avoir un conseil d'administration ?",
      r: [
        "Cela dépend de sa forme. Une société anonyme à conseil d'administration en a un par définition, et la loi lui confie la détermination des orientations de l'activité. Une SAS organise librement sa direction dans ses statuts : aucun conseil n'est imposé. Selon Bpifrance Le Lab, seules 24 % des entreprises de moins de 50 salariés ont un conseil d'administration. Pour en créer un, faites rédiger la modification des statuts par votre avocat ou votre expert-comptable.",
      ],
    },
    {
      q: "Faut-il consulter le CSE sur les décisions stratégiques ?",
      r: [
        "Dans les entreprises d'au moins 50 salariés, le Code du travail prévoit une consultation annuelle du CSE sur les orientations stratégiques et leurs conséquences sur l'emploi, les compétences et l'organisation du travail. Le CSE rend un avis et peut proposer d'autres orientations, auxquelles l'organe d'administration répond de façon argumentée. Certains projets précis donnent lieu, en plus, à une consultation ponctuelle. Faites vérifier le calendrier par votre conseil juridique.",
      ],
    },
  ],

  sources: [
    {
      titre: "Les chiffres-clés de l'étude “Gouvernance”",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/la-gouvernance-des-pme-et-eti-levier-de-confiance-et-de-performance-les-chiffres-cles-de-l-etude-gouvernance/",
    },
    {
      titre: "Article L225-35 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038799405/",
    },
    {
      titre: "Article L227-5 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227032",
    },
    {
      titre: "Article L2312-24 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037385809",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-07-19",
  accent: "organisation",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: false,
};
