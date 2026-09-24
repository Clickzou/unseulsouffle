import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 4, coopération et intelligence collective. Signé Muriel Saffroy.
 * Requête : « gestion de conflit » (480/mois, KD 16). Secondaire : « gestion des
 * conflits » (480/mois).
 *
 * Le pilier du silo est la page /muriel-saffroy/ : l'article traite la gestion d'un
 * conflit au travail du point de vue du dirigeant de PME et renvoie vers elle.
 *
 * POINTS SENSIBLES
 * - Juridique : un conflit n'est pas du harcèlement moral (INRS). Seul le
 *   harcèlement est une notion du droit (C. trav. L1152-1). La médiation citée est
 *   celle de L1152-6, propre au harcèlement moral. Textes vérifiés sur le Code du
 *   travail numérique et service-public.gouv.fr le 24/09/2026. L'article renvoie
 *   vers un avocat pour toute enquête ou sanction.
 * - Santé : aucun diagnostic. Renvoi vers le médecin du travail, le médecin
 *   traitant et le 3114.
 * - Le cabinet ne se présente pas comme médiateur : Muriel Saffroy est coach
 *   certifiée ICF et facilitatrice certifiée en intelligence collective (membres.ts).
 * - Les pages DARES et ANACT sur les conflits n'ont pas pu être ouvertes (page de
 *   contrôle anti-robot) : aucun de leurs chiffres n'est repris.
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "gestion-de-conflit",

  motCle: "gestion de conflit (480/mois, KD 16) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "gestion des conflits (480/mois)",
    "conflit au travail",
    "gérer un conflit entre salariés",
  ],

  // 41 / 42
  metaTitle: "Gestion de conflit : la méthode en 5 temps",
  // 146 / 150
  metaDescription:
    "Gestion de conflit en PME : distinguer désaccord, conflit et harcèlement, trouver la vraie source, intervenir en cinq temps et éviter que ça revienne.",

  h1: "Gestion de conflit en entreprise : ce que le dirigeant doit faire, et ne pas faire",

  chapo:
    "La gestion de conflit ne consiste pas à réconcilier deux personnes qui ne s'entendent pas. Dans une PME, la plupart des conflits naissent d'un problème de travail mal posé : un rôle flou, une ressource disputée, une décision que personne n'a le droit de prendre. Les traiter comme une affaire de caractères les fait durer. Les traiter comme une affaire d'organisation les règle, et les empêche de revenir. Votre rôle de dirigeant tient en trois gestes : intervenir tôt, séparer les faits des personnes, et changer la règle qui a produit la friction. Quand le conflit bascule vers le harcèlement ou touche la santé, ce n'est plus un sujet de management : c'est une obligation légale.",

  essentiel: {
    reponse:
      "La gestion de conflit désigne l'ensemble des actions qui permettent de repérer, traiter et prévenir un désaccord durable entre personnes ou entre équipes. Selon l'INRS, les conflits exacerbés entre personnes ou entre équipes font partie des risques psychosociaux que l'employeur doit évaluer et prévenir. L'INRS rappelle aussi que tout conflit n'est pas du harcèlement moral. Dans une PME, un conflit se règle d'abord en cherchant sa source dans l'organisation du travail : rôles, règles de décision, charge, ressources.",
    points: [
      "Un désaccord sur le travail est normal ; il devient conflit quand il se personnalise et dure",
      "La source se trouve le plus souvent dans l'organisation : rôles flous, décisions sans propriétaire, ressources disputées",
      "Intervenir en cinq temps : écouter séparément, établir les faits, reposer le problème de travail, décider une règle, suivre",
      "Le harcèlement moral relève du droit : l'employeur doit enquêter et agir, avec l'appui d'un avocat",
      "Prévenir coûte moins cher que traiter : des rôles écrits, des règles de décision explicites, des espaces pour parler du travail",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Gestion de conflit : de quoi parle-t-on dans une PME ?",
      blocs: [
        {
          type: "p",
          texte:
            "Deux responsables qui ne se parlent plus qu'en copie d'e-mail. Un atelier et un bureau d'études qui se renvoient chaque retard. Une réunion où tout le monde acquiesce, puis des désaccords qui se règlent dans le couloir. **Un conflit au travail, c'est un désaccord qui a cessé de porter sur le travail pour porter sur les personnes.** Tant qu'il porte sur le travail, il est utile. Quand il se personnalise, il coûte.",
        },
        { type: "h3", texte: "Désaccord, conflit, harcèlement : trois niveaux distincts" },
        {
          type: "p",
          texte:
            "Le désaccord est sain : deux personnes compétentes voient le même problème différemment. Le conflit apparaît quand ce désaccord n'est pas tranché, se répète et entame la relation. Le harcèlement moral est d'une autre nature. Le [Code du travail, article L1152-1](https://code.travail.gouv.fr/code-du-travail/l1152-1), le définit par des « agissements répétés » qui ont pour objet ou pour effet une dégradation des conditions de travail susceptible de porter atteinte aux droits et à la dignité du salarié, d'altérer sa santé ou de compromettre son avenir professionnel.",
        },
        {
          type: "p",
          texte:
            "L'INRS, dans sa page [Harcèlement moral et violence interne. Ce qu'il faut retenir](https://www.inrs.fr/risques/harcelements-violences-internes/ce-qu-il-faut-retenir.html), pose la frontière clairement : tout conflit interne, tout désaccord non réglé dans le travail ne doit pas être systématiquement assimilé à du harcèlement moral. La distinction compte pour vous, car elle change la réponse : un conflit se gère, un harcèlement se fait cesser.",
        },
        { type: "h3", texte: "Un risque que l'employeur doit prévenir" },
        {
          type: "p",
          texte:
            "Un conflit qui s'installe n'est pas qu'une question d'ambiance. L'INRS range explicitement les « conflits exacerbés entre des personnes ou entre des équipes » parmi les [risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/ce-qu-il-faut-retenir.html), avec leurs effets sur l'entreprise : absentéisme, turnover, ambiance de travail. Ces risques s'évaluent et se préviennent comme les autres risques professionnels. C'est précisément le terrain de [Muriel Saffroy](/muriel-saffroy/), qui travaille la qualité de coopération dans les PME et les ETI : les rôles, les modes de décision, la façon dont un collectif règle ses désaccords.",
        },
      ],
    },

    {
      label: "Les sources",
      titre: "D'où viennent les conflits au travail",
      blocs: [
        {
          type: "p",
          texte:
            "Face à un conflit, le premier réflexe est de chercher qui a tort. C'est presque toujours la mauvaise question. L'INRS classe les [facteurs de risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html) en six familles, dont les rapports sociaux dégradés, le manque d'autonomie et les conflits de valeurs. Il précise que ces facteurs pèsent davantage quand ils durent, s'accumulent ou créent des exigences incompatibles. Dans une PME, quatre sources reviennent.",
        },
        { type: "h3", texte: "Des rôles qui se chevauchent" },
        {
          type: "p",
          texte:
            "Deux personnes pensent décider de la même chose, ou aucune ne pense en avoir le droit. Le responsable de production et le commercial négocient chacun un délai client. Le conflit n'est pas entre eux : il est dans l'organigramme, qui dit qui est chef de qui, mais pas qui tranche quoi.",
        },
        { type: "h3", texte: "Des ressources rares disputées" },
        {
          type: "p",
          texte:
            "Une machine, un technicien, un budget, un créneau de livraison. Quand la règle d'allocation n'existe pas, chaque arbitrage devient un rapport de force, et celui qui perd s'en souvient. La tension naît de la rareté, elle se nourrit de l'absence de règle.",
        },
        { type: "h3", texte: "Des objectifs contradictoires, et des valeurs heurtées" },
        {
          type: "p",
          texte:
            "Le service qualité est jugé sur les défauts, l'atelier sur les volumes. Chacun fait correctement son métier, et les deux se heurtent tous les jours. S'y ajoutent les conflits de valeurs, quand on demande à quelqu'un de faire ce qu'il juge mal fait. Le conflit de personnes n'est alors que la partie visible.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous observez", "La source probable à vérifier"],
          lignes: [
            ["Deux managers qui se contredisent devant les équipes", "Un périmètre de décision jamais écrit"],
            ["Des reproches récurrents sur les délais entre deux services", "Des objectifs mesurés de façon contradictoire"],
            ["Une tension qui monte à chaque période de pointe", "Une charge mal répartie ou une ressource sans règle d'allocation"],
            ["Des désaccords réglés en aparté après la réunion", "Une instance qui valide sans trancher"],
            ["Une personne isolée par le reste de l'équipe", "Un point à examiner de près, qui peut relever de la violence interne"],
          ],
        },
      ],
    },

    {
      label: "Les signaux",
      titre: "Repérer un conflit avant qu'il ne s'installe",
      blocs: [
        {
          type: "p",
          texte:
            "Un conflit se traite d'autant plus facilement qu'il est pris tôt. Le problème, c'est qu'il se cache longtemps. Les salariés ne viennent pas dire au dirigeant qu'ils ne supportent plus un collègue ; ils contournent.",
        },
        { type: "h3", texte: "Les signaux faibles" },
        {
          type: "liste",
          items: [
            "Les échanges passent à l'écrit, avec des copies de plus en plus larges",
            "Des sujets disparaissent des réunions alors qu'ils ne sont pas réglés",
            "Des décisions remontent à vous alors qu'elles relevaient d'un manager",
            "Des demandes de changement d'équipe ou de poste sans motif clair",
            "Des arrêts courts et répétés dans un même service",
          ],
        },
        { type: "h3", texte: "Le moment où il faut intervenir" },
        {
          type: "p",
          texte:
            "Intervenez dès que le désaccord empêche le travail d'avancer, ou dès qu'il se dit en termes de personnes : « avec lui, ce n'est pas possible ». Attendre que ça passe est la stratégie la plus répandue, et la plus coûteuse. Les positions se durcissent, chacun recrute des alliés, et le conflit entre deux personnes devient un conflit entre deux clans. Si le signal vient d'un manager qui abîme son équipe, l'article sur le [management toxique](/infos-utiles/management-toxique/) détaille la conduite à tenir.",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Gestion des conflits : la méthode en cinq temps",
      blocs: [
        {
          type: "p",
          texte:
            "Il n'existe pas de solution toute faite ; l'INRS le rappelle dans sa page [Prévenir les risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/prevention.html). Il existe en revanche une démarche qui tient dans la plupart des situations d'une PME. Elle ne vous demande ni formation de médiateur, ni séminaire : de la méthode et de la constance.",
        },
        { type: "h3", texte: "1. Écouter chaque partie séparément" },
        {
          type: "p",
          texte:
            "Réunir immédiatement les protagonistes produit un match, pas une solution. Recevez chacun seul, avec la même question : qu'est-ce qui, dans le travail, pose problème ? Vous ne cherchez pas un coupable. Vous cherchez à comprendre ce que chacun essaie de protéger : un délai, un niveau de qualité, sa légitimité.",
        },
        { type: "h3", texte: "2. Établir les faits" },
        {
          type: "p",
          texte:
            "Séparez ce qui s'est passé de ce qui en a été dit. Quelle commande, quel jour, quelle décision, prise par qui. **Un conflit se nourrit d'interprétations ; les faits datés le dégonflent.** C'est aussi à ce moment que vous vérifiez s'il y a des agissements hostiles répétés, qui changeraient la nature du dossier.",
        },
        { type: "h3", texte: "3. Reposer le problème comme un problème de travail" },
        {
          type: "p",
          texte:
            "Réunissez ensuite les parties autour d'une question formulée sur le travail, pas sur les personnes. Non pas « pourquoi vous ne vous entendez pas », mais « qui arbitre les délais clients quand l'atelier est saturé ». Ce déplacement change tout : les deux parties deviennent co-responsables d'une réponse, au lieu d'être adversaires.",
        },
        { type: "h3", texte: "4. Décider une règle, puis suivre" },
        {
          type: "p",
          texte:
            "La sortie d'un conflit n'est pas une poignée de main, c'est une règle : qui décide quoi, selon quel critère, et ce qui se passe en cas de désaccord. Écrivez-la, fixez une date pour vérifier qu'elle tient, et tenez cette date. Si la règle ne fonctionne pas, on la change ; on ne revient pas au rapport de force. C'est souvent le rôle du manager de proximité que de la faire vivre, ce que développe l'article sur le [rôle du manager](/infos-utiles/role-du-manager/).",
        },
      ],
    },

    {
      label: "Les postures",
      titre: "Arbitrer, faciliter ou faire appel à un tiers",
      blocs: [
        {
          type: "p",
          texte:
            "Tous les conflits n'appellent pas la même posture de votre part. Se tromper de posture est une cause fréquente d'échec : trancher un conflit qui demandait d'être compris, ou chercher le consensus là où il fallait décider.",
        },
        {
          type: "tableau",
          entetes: ["Situation", "Posture adaptée"],
          lignes: [
            ["Désaccord technique entre deux experts, décision urgente", "Arbitrer : vous tranchez et vous expliquez le critère"],
            ["Friction récurrente entre deux services", "Faciliter : vous faites construire la règle par les intéressés"],
            ["Conflit ancien, positions figées, vous êtes vous-même partie prenante", "Faire appel à un tiers extérieur, accepté par les deux parties"],
            ["Agissements hostiles répétés, signalement de harcèlement", "Appliquer la procédure : enquête, mesures de protection, avocat"],
          ],
        },
        { type: "h3", texte: "Quand vous faites partie du conflit" },
        {
          type: "p",
          texte:
            "Dans une PME, le dirigeant est rarement neutre. Il a recruté l'un, travaille depuis quinze ans avec l'autre, a lui-même donné des consignes contradictoires. Dans ce cas, sa médiation n'est pas crédible, même sincère. Un regard extérieur n'est pas un luxe : c'est la condition pour que chacun accepte de parler. Le travail en équipe accompagné, comme le [coaching d'équipe](/infos-utiles/coaching-d-equipe/), sert ce rôle quand la friction concerne tout un collectif plutôt que deux personnes.",
        },
        { type: "h3", texte: "Ce qu'un tiers peut et ne peut pas faire" },
        {
          type: "p",
          texte:
            "Un tiers aide à remettre le travail au centre, à faire émerger ce qui ne se dit pas, à formuler des règles acceptables par tous. Il ne décide pas à votre place, et il ne remplace pas vos obligations d'employeur. Si les faits relèvent du harcèlement, la démarche change de nature.",
        },
      ],
    },

    {
      label: "Le cadre légal",
      titre: "Quand le conflit touche au droit ou à la santé",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne sommes ni avocats ni médecins. Cette section vous aide à reconnaître le moment où la gestion de conflit sort du management ; elle ne remplace ni un conseil juridique, ni un avis médical.",
        },
        { type: "h3", texte: "L'obligation de sécurité de l'employeur" },
        {
          type: "p",
          texte:
            "Selon l'[article L4121-1 du Code du travail](https://code.travail.gouv.fr/code-du-travail/l4121-1), l'employeur prend les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs. Un conflit connu et laissé sans réponse, qui dégrade la santé d'un salarié, peut donc engager votre responsabilité. La fiche [Harcèlement moral](https://www.service-public.gouv.fr/particuliers/vosdroits/F2354) de service-public.gouv.fr précise que, face à une accusation de harcèlement moral, l'employeur doit faire une enquête pour établir si les faits ont eu lieu, et sanctionner leur auteur s'ils sont avérés.",
        },
        { type: "h3", texte: "La médiation prévue par le Code du travail" },
        {
          type: "p",
          texte:
            "L'[article L1152-6](https://code.travail.gouv.fr/code-du-travail/l1152-6) prévoit une procédure de médiation, ouverte à toute personne de l'entreprise qui s'estime victime de harcèlement moral ou à la personne mise en cause. Le médiateur est choisi d'un commun accord. Il tente de concilier les parties et consigne ses propositions par écrit ; en cas d'échec, il les informe des sanctions encourues et des garanties prévues pour la victime. Avant toute enquête ou sanction, faites-vous accompagner par un avocat en droit du travail : la procédure compte autant que le fond.",
        },
        {
          type: "encadre",
          titre: "Si quelqu'un va mal",
          texte:
            "Un conflit durable peut peser lourdement sur la santé. Si un salarié montre des signes d'épuisement, orientez-le vers le médecin du travail ou son médecin traitant, sans poser vous-même de diagnostic. En cas de détresse ou d'idées suicidaires, le [3114](https://3114.fr/), numéro national de prévention du suicide, répond gratuitement 24 h/24 et 7 j/7 ; en cas de danger immédiat, le 15.",
        },
      ],
    },

    {
      label: "Prévenir",
      titre: "Prévenir les conflits plutôt que les gérer",
      blocs: [
        {
          type: "p",
          texte:
            "La meilleure gestion des conflits est celle qu'on n'a pas à faire. L'INRS recommande de privilégier une prévention collective, centrée sur le travail et son organisation, et cite la répartition des tâches et la clarification des rôles parmi les leviers. Dans une PME, cela se traduit par quatre habitudes, que détaille aussi l'article sur la [prévention des risques psychosociaux](/infos-utiles/prevention-risques-psychosociaux/).",
        },
        {
          type: "liste",
          items: [
            "**Des périmètres de décision écrits** : pour chaque sujet récurrent, qui décide, qui est consulté, qui est informé",
            "**Des règles d'allocation connues** : comment se répartissent les machines, les techniciens, les créneaux quand ils manquent",
            "**Une instance qui tranche** : un comité de direction où les désaccords se disent pendant la réunion, pas après",
            "**Des espaces pour parler du travail** : un temps régulier où les équipes discutent de ce qui coince, avant que ça devienne personnel",
          ],
        },
        { type: "h3", texte: "Installer la co-responsabilité" },
        {
          type: "p",
          texte:
            "Derrière la plupart des conflits récurrents, on retrouve la même absence : personne n'a reçu le droit explicite de trancher, donc personne n'assume. Installer la co-responsabilité, c'est poser à voix haute les règles de décision, accepter le droit à l'erreur et ne pas revenir sur ce qui a été délégué. C'est le cœur de l'étape Coopérer de notre méthode : des cercles d'avancée de six à huit personnes, en sessions de trois heures sur trois mois, qui travaillent sur des situations réelles apportées par les participants.",
        },
        { type: "h3", texte: "Commencer par comprendre le système" },
        {
          type: "p",
          texte:
            "Quand les conflits se succèdent sans cause apparente, c'est souvent que la cause n'est pas là où on la cherche. Un conseiller référent prend alors votre sujet en charge et regarde le fonctionnement réel : les flux, les rôles, les tensions, plutôt que l'organigramme. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord. Pour situer d'abord votre entreprise, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la gestion de conflit en entreprise ?",
      r: [
        "C'est l'ensemble des actions qui permettent de repérer un désaccord durable, d'en trouver la source et d'y mettre fin, puis d'éviter qu'il revienne. En PME, elle passe surtout par l'organisation : clarifier qui décide quoi, fixer des règles de répartition des ressources et ouvrir des espaces où parler du travail. L'INRS classe les conflits exacerbés parmi les risques psychosociaux à prévenir.",
      ],
    },
    {
      q: "Quelle est la différence entre un conflit et du harcèlement moral ?",
      r: [
        "Un conflit est un désaccord durable entre personnes ou entre équipes, souvent réciproque. Le harcèlement moral, défini par l'article L1152-1 du Code du travail, repose sur des agissements répétés qui dégradent les conditions de travail et peuvent porter atteinte aux droits, à la dignité ou à la santé du salarié. L'INRS rappelle que tout conflit n'est pas du harcèlement. Le second impose à l'employeur d'enquêter et d'agir.",
      ],
    },
    {
      q: "Comment gérer un conflit entre deux salariés ?",
      r: [
        "Recevez d'abord chaque personne séparément pour comprendre ce qui, dans le travail, pose problème. Établissez les faits datés. Réunissez ensuite les deux autour d'une question formulée sur le travail, pas sur les personnes. Décidez une règle écrite, qui tranche et selon quel critère, puis fixez une date pour vérifier qu'elle tient. Si vous êtes vous-même impliqué, faites appel à un tiers accepté par les deux.",
      ],
    },
    {
      q: "Le dirigeant est-il obligé d'intervenir dans un conflit ?",
      r: [
        "L'employeur doit protéger la santé physique et mentale des salariés (article L4121-1 du Code du travail) et évaluer les risques psychosociaux, dont les conflits exacerbés font partie selon l'INRS. Un conflit connu et laissé sans réponse peut donc engager sa responsabilité. Face à une accusation de harcèlement, il doit mener une enquête. Pour ces démarches, l'appui d'un avocat en droit du travail est recommandé.",
      ],
    },
    {
      q: "Quand faire appel à un médiateur ?",
      r: [
        "Quand les positions sont figées, que le conflit dure depuis longtemps, ou que vous êtes vous-même partie prenante. Un tiers accepté par les deux parties remet le travail au centre et fait émerger ce qui ne se dit pas. En cas de harcèlement moral, l'article L1152-6 du Code du travail prévoit une médiation, avec un médiateur choisi d'un commun accord entre les parties.",
      ],
    },
  ],

  sources: [
    {
      titre: "Harcèlement moral et violence interne. Ce qu'il faut retenir",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/harcelements-violences-internes/ce-qu-il-faut-retenir.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Ce qu'il faut retenir",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/ce-qu-il-faut-retenir.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Prévention",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/prevention.html",
    },
    {
      titre: "L1152-1 - Code du travail numérique",
      editeur: "Ministère du Travail (Code du travail numérique)",
      url: "https://code.travail.gouv.fr/code-du-travail/l1152-1",
    },
    {
      titre: "L1152-6 - Code du travail numérique",
      editeur: "Ministère du Travail (Code du travail numérique)",
      url: "https://code.travail.gouv.fr/code-du-travail/l1152-6",
    },
    {
      titre: "L4121-1 - Code du travail numérique",
      editeur: "Ministère du Travail (Code du travail numérique)",
      url: "https://code.travail.gouv.fr/code-du-travail/l4121-1",
    },
    {
      titre: "Harcèlement moral",
      editeur: "Service-public.gouv.fr",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2354",
    },
    {
      titre: "Numéro national de prévention du suicide - 3114",
      editeur: "3114, piloté par le ministère chargé de la santé",
      url: "https://3114.fr/",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-03-01",
  accent: "organisation",
  pilier: { href: "/muriel-saffroy/", ancre: "Muriel Saffroy" },

  valide: true,
};
