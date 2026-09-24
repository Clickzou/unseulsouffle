import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, organisation et coopération. Signé Muriel Saffroy.
 * Requête : « comité de direction » (590/mois, KD 15). Secondaires : « CODIR
 * entreprise » (140), « comité exécutif » (320), « COMEX définition » (360).
 *
 * Rattaché au pilier /transformation-entreprise/ (conseil en organisation) : le
 * fonctionnement du CODIR relève de l'étape Renforcer (home.ts, « Accompagnement
 * CODIR, gouvernance ») et de ce que Muriel Saffroy prend en charge (membres.ts).
 *
 * POINTS SENSIBLES
 * - Points de droit (statuts de SAS, définition légale des « instances
 *   dirigeantes », consultation du CSE) cités d'après Légifrance, sans
 *   interprétation au-delà du texte ; renvoi vers un avocat pour les actes.
 * - Les chiffres PME viennent de l'enquête Bpifrance Le Lab 2019 : ils sont
 *   datés comme tels dans le texte.
 * - Taille et rythme conseillés pour un CODIR : repères de pratique, présentés
 *   comme tels, pas comme une norme.
 */
export const article: Article = {
  slug: "comite-de-direction",

  motCle: "comité de direction (590/mois, KD 15) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "CODIR entreprise (140/mois)",
    "comité exécutif (320/mois)",
    "COMEX définition (360/mois)",
  ],

  metaTitle: "Comité de direction : rôle et composition",
  metaDescription:
    "Comité de direction en PME : rôle, composition, différence CODIR et COMEX, rythme des réunions et dérives qui en font une chambre d'enregistrement.",

  h1: "Comité de direction : rôle, composition et fonctionnement en PME",
  chapo:
    "Un comité de direction, ou CODIR, réunit autour du dirigeant les responsables des grandes fonctions de l'entreprise pour arbitrer les priorités, répartir les moyens et suivre l'exécution. La loi ne l'impose pas, et une PME-ETI sur trois n'en a pas. Quand il existe, il échoue rarement faute de compétences autour de la table : il échoue parce qu'il valide sans trancher, ou parce que tout se décide en bilatéral après la réunion. Voici ce qu'est un comité de direction, ce qui le distingue d'un comité exécutif, qui doit y siéger, à quel rythme le réunir et comment éviter qu'il devienne une chambre d'enregistrement.",

  essentiel: {
    reponse:
      "Le comité de direction (CODIR) est l'instance qui assiste régulièrement le dirigeant dans la conduite de l'entreprise. Il réunit les responsables des principales fonctions (finance, commercial, production, ressources humaines) pour arbitrer les priorités, allouer les ressources et suivre les décisions. Ce n'est pas un organe prévu par la loi comme le conseil d'administration : sa composition et son fonctionnement relèvent du choix du dirigeant. Dans les grands groupes, on parle aussi de comité exécutif (COMEX), plus resserré et centré sur la stratégie. Selon Bpifrance Le Lab (2019), 66 % des PME-ETI ont un comité de direction.",
    points: [
      "Le CODIR arbitre et répartit les moyens ; il ne remplace ni le conseil d'administration ni le management opérationnel",
      "COMEX : cercle plus restreint, surtout dans les grands groupes, centré sur la stratégie",
      "Une PME-ETI sur trois n'a pas de comité de direction (Bpifrance Le Lab, 2019)",
      "Un CODIR utile sort de chaque réunion avec des décisions écrites : qui, quoi, pour quand",
      "Dérive la plus fréquente : un comité qui valide sans décider, et un dirigeant qui reste le centre de tout",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qu'est-ce qu'un comité de direction ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le comité de direction est le cercle de décision qui entoure le dirigeant. Il rassemble les personnes qui portent les grandes fonctions de l'entreprise et qui, ensemble, voient ce qu'aucune ne voit seule : l'effet d'une décision commerciale sur l'atelier, d'un recrutement sur la trésorerie, d'un investissement sur la charge des équipes. **Un comité de direction n'existe pas pour informer le dirigeant, mais pour l'aider à arbitrer.**",
        },
        { type: "h3", texte: "Une instance voulue par le dirigeant, pas par la loi" },
        {
          type: "p",
          texte:
            "Le Code de commerce organise les organes légaux de la société : président, directeur général, conseil d'administration ou de surveillance selon la forme. Il ne crée pas de comité de direction. Pour une SAS, forme très répandue chez les PME, l'[article L227-5 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227032) se contente de poser que « les statuts fixent les conditions dans lesquelles la société est dirigée ». Le CODIR relève donc d'un choix d'organisation : c'est au dirigeant d'en fixer la composition, le rôle et les règles.",
        },
        { type: "h3", texte: "Une définition désormais écrite dans le droit" },
        {
          type: "p",
          texte:
            "Depuis la loi du 24 décembre 2021, dite loi Rixain, le droit en donne pourtant une définition utile. L'[article L23-12-1 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044566715) considère comme instance dirigeante « toute instance mise en place au sein de la société, par tout acte ou toute pratique sociétaire, aux fins d'assister régulièrement les organes chargés de la direction générale dans l'exercice de leurs missions ». Un comité de direction ou un comité exécutif en est l'exemple type : ce qui le définit, c'est l'assistance régulière à la direction générale, pas son nom.",
        },
        {
          type: "p",
          texte:
            "Parce qu'il relève du choix du dirigeant, le CODIR est aussi l'un des premiers endroits où se joue l'organisation réelle d'une entreprise. C'est pourquoi son fonctionnement fait partie de notre travail de [conseil en organisation](/transformation-entreprise/) : on y voit, réunion après réunion, qui décide vraiment.",
        },
      ],
    },

    {
      label: "Ne pas confondre",
      titre: "CODIR, COMEX, conseil d'administration : qui fait quoi",
      blocs: [
        {
          type: "p",
          texte:
            "Les sigles se mélangent vite, surtout quand une PME grandit ou rejoint un groupe. Trois instances coexistent parfois, avec des rôles distincts.",
        },
        { type: "h3", texte: "COMEX : définition" },
        {
          type: "p",
          texte:
            "Le comité exécutif, ou COMEX, est le cercle le plus restreint de la direction générale. On le trouve surtout dans les grandes entreprises et les groupes, où il réunit le directeur général et quelques directeurs qui portent la stratégie d'ensemble. Le comité de direction y est alors un cercle plus large, qui décline cette stratégie dans les métiers ou les filiales. Dans une PME, la distinction a rarement lieu d'être : un seul comité suffit, et l'appeler COMEX n'apporte rien.",
        },
        { type: "h3", texte: "Le conseil d'administration, un organe de contrôle" },
        {
          type: "p",
          texte:
            "Le conseil d'administration, ou le conseil de surveillance, représente les associés. Il contrôle la direction, valide les grandes orientations et, selon les statuts, nomme ou révoque les dirigeants. Le CODIR, lui, est du côté de ceux qui dirigent : il prépare et exécute. Les confondre conduit à des réunions où l'on présente des comptes à des personnes qui devraient prendre des décisions.",
        },
        {
          type: "tableau",
          entetes: ["Instance", "Rôle et membres"],
          lignes: [
            ["Comité de direction (CODIR)", "Arbitre les priorités et suit l'exécution ; dirigeant et responsables des grandes fonctions"],
            ["Comité exécutif (COMEX)", "Porte la stratégie d'ensemble d'un groupe ; directeur général et quelques directeurs"],
            ["Comité stratégique", "Prend du recul sur le cap à trois ou cinq ans ; souvent ouvert à des regards extérieurs"],
            ["Conseil d'administration ou de surveillance", "Contrôle la direction pour le compte des associés ; administrateurs ou membres élus"],
            ["Comité social et économique (CSE)", "Représente les salariés ; informé et consulté sur l'organisation et la marche de l'entreprise"],
          ],
        },
        { type: "h3", texte: "Une obligation de mixité dans les grandes entreprises" },
        {
          type: "p",
          texte:
            "Pour les entreprises qui emploient au moins mille salariés depuis trois exercices consécutifs, l'[article L1142-11 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045951643) impose de publier chaque année les écarts de représentation entre femmes et hommes parmi les cadres dirigeants et les membres des instances dirigeantes, et fixe à 30 % la part minimale de chaque sexe. Une PME n'est pas concernée, mais l'exigence dit quelque chose d'utile : un comité de direction homogène voit moins de choses qu'un comité divers.",
        },
      ],
    },

    {
      label: "Les chiffres",
      titre: "Le CODIR en entreprise : ce que disent les chiffres sur les PME",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Le Lab a interrogé les dirigeants de PME et d'ETI sur leur gouvernance, dans l'enquête « Comment bien diriger une PME-ETI ? » menée d'avril à juin 2019. Les [chiffres-clés de l'étude Gouvernance](https://lelab.bpifrance.fr/la-gouvernance-des-pme-et-eti-levier-de-confiance-et-de-performance-les-chiffres-cles-de-l-etude-gouvernance/) décrivent un paradoxe.",
        },
        {
          type: "liste",
          items: [
            "**Une PME-ETI sur trois n'a pas de comité de direction** : seules 66 % en ont mis un en place",
            "Pourtant, **91 % des dirigeants** jugent qu'un comité de direction joue un rôle utile ou indispensable au développement de leurs activités",
            "**62 % des dirigeants** aimeraient consacrer moins de temps à l'opérationnel, et **70 %** plus de temps à leurs réflexions stratégiques",
            "Pour appliquer leurs décisions, les dirigeants citent le manque de temps et de moyens (**67 %**), le manque de relais managériaux (**35 %**) et la mauvaise appropriation par les équipes (**24 %**)",
          ],
        },
        { type: "h3", texte: "Ce que ce paradoxe révèle" },
        {
          type: "p",
          texte:
            "Presque tous les dirigeants voient l'utilité d'un CODIR ; un tiers s'en passe. Et ceux qui manquent de temps pour la stratégie sont souvent les mêmes qui gardent tous les arbitrages. **Le comité de direction est précisément l'outil qui permet de rendre du temps au dirigeant, à condition qu'il décide réellement.** Un CODIR qui se contente d'écouter les comptes rendus ajoute une réunion à l'agenda sans en retirer aucune.",
        },
        { type: "h3", texte: "Des données à dater" },
        {
          type: "p",
          texte:
            "Ces chiffres datent de 2019. Ils restent la photographie la plus précise disponible sur la gouvernance des PME et ETI françaises, mais ils décrivent des pratiques, pas une norme. Ce qui compte pour vous, c'est la façon dont se prennent aujourd'hui les décisions dans votre entreprise.",
        },
      ],
    },

    {
      label: "Le rôle",
      titre: "Rôle du comité de direction : ce qu'il décide, ce qu'il laisse aux équipes",
      blocs: [
        {
          type: "p",
          texte:
            "Un comité de direction utile se reconnaît à ce qui en sort, pas à ce qui s'y dit. Son rôle tient en quatre verbes.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Arbitrer** les priorités quand deux projets se disputent les mêmes ressources ou les mêmes personnes",
            "**Allouer** les moyens : budgets, recrutements, investissements, dans les limites fixées par le dirigeant",
            "**Suivre** l'exécution des décisions et quelques indicateurs partagés, pas le détail de chaque service",
            "**Traiter** les sujets transverses qui ne relèvent d'aucune fonction seule : un client stratégique, une réorganisation, une crise",
          ],
        },
        { type: "h3", texte: "Ce qu'il ne doit pas faire" },
        {
          type: "p",
          texte:
            "Le CODIR n'est pas l'endroit où l'on règle un retard de livraison ou le planning de la semaine. Ces sujets appartiennent aux managers et à leurs équipes. Quand ils envahissent l'ordre du jour, c'est le signe que la délégation ne fonctionne pas en dessous, et que le comité compense un défaut d'organisation au lieu de la piloter.",
        },
        { type: "h3", texte: "Qui décide, à la fin ?" },
        {
          type: "p",
          texte:
            "Le dirigeant reste responsable. Le comité de direction ne vote pas comme une assemblée ; il éclaire, débat, puis la décision se prend selon une règle connue de tous. Cette règle peut varier selon les sujets : décision du dirigeant après consultation, consensus recherché, délégation à un membre. **L'essentiel est qu'elle soit dite avant le débat, et non découverte après.** Un membre qui a argumenté contre une option peut la porter ensuite, s'il sait comment elle a été retenue.",
        },
      ],
    },

    {
      label: "La composition",
      titre: "Composition du comité de direction : qui doit y siéger",
      blocs: [
        {
          type: "p",
          texte:
            "La composition découle du rôle : y siègent les personnes qui portent une fonction dont les décisions engagent les autres. Dans une PME industrielle, cela donne souvent le dirigeant, les responsables finance, commercial, production et ressources humaines, parfois la qualité ou les achats. Dans une entreprise de services, la production laisse la place aux responsables d'activité.",
        },
        { type: "h3", texte: "Une taille qui permet de débattre" },
        {
          type: "p",
          texte:
            "Il n'existe pas de taille réglementaire. L'expérience des réunions de travail montre qu'au-delà d'une dizaine de personnes, la discussion laisse place à une succession de prises de parole et les vrais échanges se déplacent ailleurs. Un CODIR de PME fonctionne généralement mieux à cinq ou sept qu'à douze. Si le cercle doit s'élargir pour des raisons d'information, mieux vaut deux instances qu'une seule trop grande.",
        },
        { type: "h3", texte: "Siéger pour l'entreprise, pas pour son service" },
        {
          type: "p",
          texte:
            "Le point le plus délicat n'est pas le choix des personnes, mais leur posture. Un membre du CODIR qui ne défend que les intérêts de son service transforme chaque réunion en négociation. Il faut dire explicitement que chacun siège d'abord pour l'entreprise. Cette règle se travaille, parce qu'elle va à l'encontre de la façon dont la plupart des managers ont été évalués. Elle suppose aussi que les rôles soient clairs en amont : notre article sur [l'organigramme d'entreprise](/infos-utiles/organigramme-entreprise/) montre comment les poser.",
        },
        { type: "h3", texte: "Et les fonctions externalisées ?" },
        {
          type: "p",
          texte:
            "Une PME qui fait appel à un directeur financier ou commercial à temps partagé peut l'associer au comité de direction, au moins pour les réunions de pilotage mensuelles. Sa valeur tient justement à sa présence au moment où les décisions se prennent.",
        },
      ],
    },

    {
      label: "Le fonctionnement",
      titre: "Faire fonctionner un CODIR : rythme, ordre du jour, relevé de décisions",
      blocs: [
        {
          type: "p",
          texte:
            "Un comité de direction ne tient que par sa régularité. Une réunion annulée dès que l'activité s'emballe apprend aux membres que le CODIR passe après l'urgence, et les décisions reprennent le chemin du bureau du dirigeant.",
        },
        {
          type: "tableau",
          entetes: ["Rythme", "Objet de la réunion"],
          lignes: [
            ["Hebdomadaire, court", "Points d'alerte et décisions urgentes ; pas de revue de chaque service"],
            ["Mensuel", "Indicateurs de pilotage, trésorerie, avancement des chantiers, arbitrages de ressources"],
            ["Trimestriel", "Revue des priorités, ajustement du plan d'action, sujets de fond préparés à l'avance"],
            ["Annuel", "Cap, budget, organisation ; souvent en séminaire, hors des murs"],
          ],
        },
        { type: "h3", texte: "Un ordre du jour qui distingue informer et décider" },
        {
          type: "p",
          texte:
            "Chaque point de l'ordre du jour doit annoncer ce qu'on attend du comité : une information, un avis, une décision. Les informations peuvent circuler par écrit avant la réunion. Le temps de réunion est réservé aux sujets où la discussion change quelque chose. Un sujet de décision arrive avec ses options et leurs conséquences chiffrées, préparé par celui qui le porte.",
        },
        { type: "h3", texte: "Le relevé de décisions, pas le compte rendu" },
        {
          type: "p",
          texte:
            "Ce qui doit sortir d'un CODIR n'est pas un compte rendu de ce qui a été dit, mais un relevé de ce qui a été décidé : quoi, qui, pour quand. Il est diffusé dans la journée et relu en ouverture de la réunion suivante. **Une décision qui n'est pas écrite n'a pas été prise.** Pour les arbitrages difficiles, notre article [prendre une décision](/infos-utiles/prendre-une-decision/) détaille la manière de les poser.",
        },
      ],
    },

    {
      label: "Les dérives",
      titre: "Les dérives qui vident un comité de direction de son sens",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des CODIR qui ne fonctionnent pas présentent les mêmes symptômes. Les reconnaître est le premier pas, parce qu'ils tiennent moins aux personnes qu'aux règles implicites qui se sont installées.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["Ce qu'on observe", "Ce qu'il faut installer"],
          lignes: [
            ["Le comité valide ce que le dirigeant a déjà décidé", "Des sujets apportés ouverts, avec plusieurs options réelles"],
            ["Chacun fait le point sur son service, tour de table compris", "Un ordre du jour centré sur les arbitrages transverses"],
            ["Les désaccords se règlent en bilatéral, après la réunion", "Des désaccords exprimés en séance, et une règle de décision connue"],
            ["Les décisions sont rediscutées à la réunion suivante", "Un relevé écrit, relu, et une décision tenue sauf fait nouveau"],
            ["Tout remonte au CODIR, même le quotidien", "Des délégations claires aux managers, respectées par le dirigeant"],
          ],
        },
        { type: "h3", texte: "Le calcul rationnel de celui qui se tait" },
        {
          type: "p",
          texte:
            "Un membre du comité qui ne contredit jamais le dirigeant n'est pas forcément passif. Si les désaccords exprimés en séance lui ont déjà coûté, se taire est simplement le choix le plus rationnel. Tant que ce calcul n'est pas rendu visible et changé, aucun règlement de réunion n'y fera rien. Et les tensions qui s'installent entre membres se traitent pour elles-mêmes, au lieu de couver sous l'ordre du jour.",
        },
        { type: "h3", texte: "Le dirigeant qui reprend ce qu'il a confié" },
        {
          type: "p",
          texte:
            "La dérive la plus coûteuse est aussi la plus discrète : le dirigeant délègue une décision au comité ou à l'un de ses membres, puis revient dessus. Une fois suffit pour que tout le monde comprenne qu'il vaut mieux attendre son avis. La [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/), dans sa dimension juridique comme dans sa dimension managériale, suppose précisément de ne pas reprendre ce qu'on a donné.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Installer ou relancer un comité de direction",
      blocs: [
        {
          type: "p",
          texte:
            "Créer un comité de direction ou remettre en marche un comité qui s'essouffle suit la même logique : partir de la façon dont les décisions se prennent aujourd'hui, pas d'un modèle idéal.",
        },
        {
          type: "liste",
          items: [
            "**Observer** quelques réunions et lister les décisions réellement prises, leur auteur et leur délai",
            "**Écrire** le rôle du comité : ce qu'il tranche, ce qu'il délègue, la règle de décision",
            "**Fixer** le rythme et le format, puis s'y tenir pendant au moins un trimestre",
            "**Relire** le fonctionnement après quelques mois, avec les membres, et ajuster",
          ],
        },
        { type: "h3", texte: "Quand le CSE doit être associé" },
        {
          type: "p",
          texte:
            "Le fonctionnement interne du CODIR ne relève pas des représentants du personnel. En revanche, dans les entreprises d'au moins cinquante salariés, l'[article L2312-8 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196) prévoit que le CSE est informé et consulté sur les questions intéressant l'organisation, la gestion et la marche générale de l'entreprise, notamment les mesures qui affectent le volume ou la structure des effectifs. Une réorganisation décidée en comité de direction peut donc appeler une consultation préalable ; en cas de doute, faites valider le calendrier par votre avocat.",
        },
        { type: "h3", texte: "Se faire accompagner" },
        {
          type: "p",
          texte:
            "Il est difficile d'observer une réunion qu'on préside. Un regard extérieur voit ce que les membres ne disent pas et ce que le dirigeant ne perçoit plus. Au cabinet, c'est [Muriel Saffroy](/muriel-saffroy/), associée fondatrice, qui prend en charge le fonctionnement du comité de direction, dans le cadre de l'étape Renforcer de notre méthode : redistribution des responsabilités, clarification de la gouvernance, création de relais internes. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si le blocage tient au comité, à l'organisation ou à la charge qui pèse sur vous, commencez par un [diagnostic d'entreprise](/diagnostic/) : il vous dira où regarder, en quelques minutes.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre CODIR et COMEX ?",
      r: [
        "Le comité exécutif (COMEX) est le cercle le plus restreint de la direction générale, surtout présent dans les grands groupes : il porte la stratégie d'ensemble. Le comité de direction (CODIR) est plus large et plus opérationnel : il décline cette stratégie, arbitre les priorités et suit l'exécution. Dans une PME, un seul comité suffit presque toujours, quel que soit le nom qu'on lui donne.",
      ],
    },
    {
      q: "Un comité de direction est-il obligatoire ?",
      r: [
        "Non. Aucun texte n'impose à une PME de créer un comité de direction : c'est un choix d'organisation du dirigeant, contrairement aux organes prévus par la loi ou les statuts, comme le conseil d'administration d'une société anonyme. Selon Bpifrance Le Lab, une PME-ETI sur trois n'en a pas. Le droit définit toutefois les instances dirigeantes et impose une part minimale de chaque sexe dans les entreprises d'au moins mille salariés.",
      ],
    },
    {
      q: "Qui compose le comité de direction d'une PME ?",
      r: [
        "En général, le dirigeant et les responsables des grandes fonctions : finance, commercial, production ou activité, ressources humaines, parfois qualité ou achats. Le critère n'est pas le grade mais l'impact : y siègent ceux dont les décisions engagent les autres fonctions. Un comité de cinq à sept personnes permet un vrai débat ; au-delà d'une dizaine, les échanges tendent à se déplacer hors de la réunion.",
      ],
    },
    {
      q: "À quelle fréquence réunir un comité de direction ?",
      r: [
        "Il n'y a pas de règle, mais un rythme stable compte plus que la fréquence. Beaucoup de PME combinent une réunion courte chaque semaine pour les alertes, une réunion mensuelle de pilotage sur les indicateurs et la trésorerie, une revue trimestrielle des priorités et un séminaire annuel sur le cap et le budget. L'important est de ne pas annuler dès que l'activité s'accélère.",
      ],
    },
    {
      q: "Comment rendre un CODIR plus efficace ?",
      r: [
        "Distinguez dans l'ordre du jour ce qui relève de l'information, de l'avis et de la décision, et faites circuler les informations par écrit avant la réunion. Annoncez la règle de décision avant chaque débat. Terminez par un relevé de décisions précisant quoi, qui et pour quand, relu à la réunion suivante. Enfin, laissez aux managers les sujets du quotidien : un CODIR saturé d'opérationnel signale une délégation qui ne fonctionne pas.",
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
      titre: "Article L227-5 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227032",
    },
    {
      titre: "Article L23-12-1 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044566715",
    },
    {
      titre: "Article L1142-11 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045951643",
    },
    {
      titre: "Article L2312-8 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-03-29",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
