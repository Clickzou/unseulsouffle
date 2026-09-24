import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, organisation. Signé Olivia Artur.
 * Requête : « QVT ou QVCT » (260/mois, KD 16). Secondaires : « démarche QVCT » (170),
 * « qualité de vie au travail définition » (210), « qualité de vie au travail
 * exemple » (110).
 *
 * L'intention « conseil en organisation » appartient au pilier
 * /transformation-entreprise/ : l'article traite la notion et la démarche, et
 * renvoie vers lui.
 *
 * POINTS SENSIBLES — JURIDIQUE. Les obligations citées sont lues sur Légifrance et
 * le Code du travail numérique le 24/09/2026 : ANI du 19 juin 2013, ANI du
 * 9 décembre 2020, articles L2242-1, L2242-17 (modifié par la loi n° 2021-1018 du
 * 2 août 2021) et L4121-1. Le texte ne dit jamais qu'une PME « doit » conduire une
 * démarche QVCT : la négociation n'est obligatoire qu'avec une section syndicale.
 * Les exemples sont génériques ; aucun cas client.
 */
export const article: Article = {
  slug: "qvt-ou-qvct",

  motCle: "QVT ou QVCT (260/mois, KD 16) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "démarche QVCT (170/mois)",
    "qualité de vie au travail définition (210/mois)",
    "qualité de vie au travail exemple (110/mois)",
  ],

  // 40 / 42
  metaTitle: "QVT ou QVCT : la différence, la démarche",
  // 140 / 150
  metaDescription:
    "QVT ou QVCT : ce que l'accord de 2020 et la loi de 2021 ont changé, ce qu'une PME doit vraiment faire, et une démarche QVCT en quatre temps.",

  h1: "QVT ou QVCT : ce qui a changé, et comment mener la démarche dans une PME",

  chapo:
    "QVT ou QVCT ? Les deux désignent la même ambition, mais la QVCT, qualité de vie et des conditions de travail, a remplacé la QVT depuis l'accord national interprofessionnel du 9 décembre 2020, puis la loi du 2 août 2021 qui l'a inscrite dans le Code du travail. Le « C » n'est pas cosmétique : il ramène le sujet vers le travail lui-même, son organisation et ses conditions, plutôt que vers le seul bien-être ressenti. Pour une PME, la démarche n'est obligatoire que dans un cadre précis. Elle reste utile bien au-delà, à condition de partir du travail réel et non d'une liste d'avantages.",

  essentiel: {
    reponse:
      "La QVT (qualité de vie au travail) a été définie par l'accord national interprofessionnel du 19 juin 2013 comme un sentiment de bien-être au travail perçu collectivement et individuellement. La QVCT (qualité de vie et des conditions de travail) lui succède avec l'accord national interprofessionnel du 9 décembre 2020, qui la présente comme une vision collective et intégrée de la santé au travail, puis avec la loi n° 2021-1018 du 2 août 2021, qui a renommé la négociation obligatoire correspondante. La QVCT met l'accent sur les conditions et l'organisation du travail, l'expression des salariés et l'expérimentation.",
    points: [
      "QVT : notion de 2013, centrée sur le bien-être perçu ; QVCT : notion de 2020, centrée sur le travail et ses conditions",
      "La négociation sur la QVCT n'est obligatoire que dans les entreprises où existe au moins une section syndicale représentative",
      "Toute entreprise reste tenue de protéger la santé physique et mentale de ses salariés (article L4121-1 du Code du travail)",
      "Il n'existe pas de méthode obligatoire : l'accord de 2020 insiste sur l'expression des salariés et l'expérimentation sur un périmètre limité",
      "Dans une PME sans représentants du personnel, la démarche passe par un dialogue direct entre salariés, managers et employeur",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qualité de vie au travail : la définition de 2013",
      blocs: [
        {
          type: "p",
          texte:
            "Pour comprendre la QVCT, il faut partir de ce qu'elle remplace. La qualité de vie au travail a reçu sa définition de référence dans l'[accord national interprofessionnel du 19 juin 2013](https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000028216997/), signé par les partenaires sociaux.",
        },
        { type: "h3", texte: "Un sentiment de bien-être, individuel et collectif" },
        {
          type: "p",
          texte:
            "L'accord la décrit comme **« un sentiment de bien-être au travail perçu collectivement et individuellement qui englobe l'ambiance, la culture de l'entreprise, l'intérêt du travail, les conditions de travail »**, puis y ajoute le sentiment d'implication, le degré d'autonomie et de responsabilisation, l'égalité, un droit à l'erreur accordé à chacun, la reconnaissance et la valorisation du travail effectué. La définition est large, volontairement. Elle a eu le mérite de faire sortir le sujet du seul registre des risques.",
        },
        { type: "h3", texte: "Dix composantes, pas un indice de bonheur" },
        {
          type: "p",
          texte:
            "L'accord de 2013 détaille ensuite ce qui caractérise la qualité de vie au travail : la qualité de l'engagement de l'entreprise, du partage de l'information, des relations de travail et des relations sociales, des modalités d'organisation du travail, du contenu du travail et de l'environnement physique, les possibilités de développement professionnel, la conciliation des temps de vie et le respect de l'égalité professionnelle. On le voit : plus de la moitié de ces composantes parlent d'organisation, pas de confort.",
        },
        {
          type: "p",
          texte:
            "C'est pourtant le mot « bien-être » que beaucoup d'entreprises ont retenu. D'où une dérive bien connue : la QVT réduite à une corbeille de fruits, une salle de pause refaite et un atelier de relaxation, pendant que la charge de travail, les rôles flous et les décisions bloquées restent en l'état.",
        },
      ],
    },

    {
      label: "Ce qui a changé",
      titre: "De la QVT à la QVCT : ce que l'accord de 2020 et la loi de 2021 ont changé",
      blocs: [
        {
          type: "p",
          texte:
            "En 2020, les partenaires sociaux ont repris le sujet dans l'[accord national interprofessionnel du 9 décembre 2020](https://www.legifrance.gouv.fr/conv_coll/id/KALISCTA000043561907/?idConteneur=KALICONT000047187258) relatif à la prévention renforcée et à une offre renouvelée en matière de santé au travail et conditions de travail. Le chapitre consacré au sujet s'intitule « Qualité de vie et des conditions de travail (QVCT) : une vision collective et intégrée de la santé au travail ».",
        },
        { type: "h3", texte: "Le travail revient au centre" },
        {
          type: "p",
          texte:
            "L'accord de 2020 rappelle que celui de 2013, même s'il a juridiquement cessé de produire ses effets, « demeure une référence ». Il ne jette donc rien. Il déplace le centre de gravité : la QVCT englobe les conditions de travail, l'environnement et les relations de travail, la conciliation des temps, la reconnaissance du travail, le climat social et l'égalité professionnelle. **Le « C » ajouté au sigle dit une chose simple : on ne parle plus seulement de ce que les salariés ressentent, mais de la façon dont le travail est organisé.**",
        },
        { type: "h3", texte: "Un lien explicite avec la prévention" },
        {
          type: "p",
          texte:
            "L'accord précise que certaines dimensions de la QVCT participent de la prévention primaire, c'est-à-dire de la réduction des risques à leur source, notamment quand la démarche implique tous les acteurs de l'entreprise. C'est le vrai changement. La QVT pouvait vivre à côté de la prévention des risques ; la QVCT est pensée avec elle. Pour un dirigeant, elle relève du [conseil en organisation](/transformation-entreprise/) autant que des ressources humaines : charge, rôles, circulation des décisions.",
        },
        { type: "h3", texte: "La loi de 2021 change le nom de la négociation" },
        {
          type: "p",
          texte:
            "La loi n° 2021-1018 du 2 août 2021 a traduit ce changement dans le Code du travail. Depuis le 31 mars 2022, l'[article L2242-17](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043893940) vise « la négociation annuelle sur l'égalité professionnelle entre les femmes et les hommes et la qualité de vie et des conditions de travail ». Le terme QVT a ainsi disparu du texte au profit de QVCT.",
        },
      ],
    },

    {
      label: "Comparatif",
      titre: "QVT ou QVCT : le tableau des différences",
      blocs: [
        {
          type: "p",
          texte:
            "Dans le langage courant, les deux sigles sont souvent employés l'un pour l'autre. Voici ce qui les distingue réellement, texte à l'appui.",
        },
        {
          type: "tableau",
          entetes: ["QVT (accord de 2013)", "QVCT (accord de 2020, loi de 2021)"],
          lignes: [
            [
              "Définie comme un sentiment de bien-être perçu individuellement et collectivement",
              "Présentée comme une vision collective et intégrée de la santé au travail",
            ],
            [
              "Point d'entrée : le ressenti des salariés",
              "Point d'entrée : le travail réel, son organisation et ses conditions",
            ],
            [
              "Souvent traitée à côté de la prévention des risques",
              "Explicitement reliée à la prévention primaire",
            ],
            [
              "Accord de 2013 qui a cessé de produire ses effets, mais reste une référence",
              "Terme inscrit dans le Code du travail depuis le 31 mars 2022",
            ],
            [
              "Risque de dérive vers des avantages et animations",
              "Méthode fondée sur l'expression des salariés et l'expérimentation",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "En pratique, la bonne réponse à « QVT ou QVCT ? » est donc : QVCT, si vous parlez de ce qu'il faut faire aujourd'hui. Le mot QVT reste employé, et il n'y a rien de grave à l'utiliser. Mais c'est l'esprit de la QVCT, partir du travail, qui fait la différence entre une démarche utile et un budget dépensé sans effet.",
        },
      ],
    },

    {
      label: "Ce que dit la loi",
      titre: "QVCT : ce qu'une PME est tenue de faire, et ce qu'elle ne l'est pas",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants de PME découvrent le sigle au détour d'un salon ou d'une offre commerciale, et se demandent s'ils sont en faute. La réponse dépend de la présence de syndicats dans l'entreprise, mais une obligation générale s'applique à tous.",
        },
        { type: "h3", texte: "La négociation obligatoire, seulement avec une section syndicale" },
        {
          type: "p",
          texte:
            "Selon l'[article L2242-1 du Code du travail](https://code.travail.gouv.fr/code-du-travail/l2242-1), les négociations obligatoires, dont celle sur l'égalité professionnelle et la qualité de vie et des conditions de travail, concernent les entreprises où sont constituées une ou plusieurs sections syndicales d'organisations représentatives. Elles doivent avoir lieu au moins une fois tous les quatre ans. Une PME sans section syndicale n'est donc pas soumise à cette négociation.",
        },
        { type: "h3", texte: "L'obligation de santé, pour toutes les entreprises" },
        {
          type: "p",
          texte:
            "L'absence de négociation ne dispense de rien d'autre. L'[article L4121-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828) s'applique à tout employeur : il « prend les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs », par des actions de prévention, d'information et de formation, et par une organisation et des moyens adaptés. Une démarche QVCT n'est pas imposée par ce texte, mais elle est l'une des façons les plus concrètes d'y répondre.",
        },
        {
          type: "encadre",
          titre: "Un point à vérifier avec votre conseil",
          texte:
            "Les obligations exactes dépendent de votre effectif, de votre convention collective et de la présence de représentants du personnel. Pour un accord, une charte ou toute question de conformité, rapprochez-vous de votre avocat en droit social ou de votre organisation professionnelle. Cet article présente les notions, il ne remplace pas un conseil juridique.",
        },
      ],
    },

    {
      label: "La démarche",
      titre: "Démarche QVCT : comment la conduire dans une PME de 10 à 250 salariés",
      blocs: [
        {
          type: "p",
          texte:
            "L'accord de 2020 est clair : **« Il n'existe pas de méthode obligatoire et universelle pour conduire une démarche de qualité de vie au travail. »** Il salue en revanche la méthode proposée par l'Anact pour son caractère « pragmatique et progressif », et en retient les fondamentaux : l'expression des salariés sur leur travail, le dialogue professionnel et l'expérimentation. Voici comment les traduire dans une PME.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Poser le cadre.** Dire pourquoi vous lancez la démarche, qui la pilote, ce qui est sur la table et ce qui ne l'est pas. Un périmètre annoncé évite les attentes démesurées.",
            "**Faire parler du travail réel.** Recueillir ce qui gêne concrètement le travail : outils, interruptions, consignes contradictoires, charge. Parler des tâches, pas des personnes.",
            "**Expérimenter sur un périmètre limité.** L'accord recommande de mettre les pistes à l'essai « dans un secteur limité de l'entreprise pour voir si le projet est viable ».",
            "**Évaluer, puis étendre ou abandonner.** Garder ce qui a fonctionné, le dire, et arrêter ce qui n'a rien changé. La crédibilité de la démarche se joue là.",
          ],
        },
        { type: "h3", texte: "Sans représentants du personnel : le dialogue direct" },
        {
          type: "p",
          texte:
            "Beaucoup de PME n'ont ni délégué syndical ni commission dédiée. L'accord de 2020 l'a prévu : dans les TPE-PME, « notamment en l'absence de représentation du personnel, la QVCT peut aussi être abordée dans un dialogue direct, actif et constructif entre les salariés, leurs responsables hiérarchiques et l'employeur ». Concrètement, un temps régulier en équipe consacré à la façon dont le travail se fait, et pas seulement à ce qui doit être fait, suffit à amorcer la démarche.",
        },
        { type: "h3", texte: "Le rôle des managers de proximité" },
        {
          type: "p",
          texte:
            "Dans une PME, la QVCT se joue d'abord entre un manager et son équipe. Si le manager n'a ni le temps ni la latitude de régler ce qui remonte, l'expression des salariés tourne à vide et produit de la frustration. Avant de lancer la démarche, vérifiez que ceux qui recueilleront les difficultés auront le droit d'agir sur au moins une partie d'entre elles.",
        },
      ],
    },

    {
      label: "Exemples",
      titre: "Qualité de vie au travail : exemples concrets d'actions en PME",
      blocs: [
        {
          type: "p",
          texte:
            "Les exemples ci-dessous sont des pistes génériques, rattachées aux dimensions décrites par les accords de 2013 et 2020. Aucune ne vaut pour toutes les entreprises : c'est l'expression des salariés qui dit laquelle traiter en premier.",
        },
        {
          type: "tableau",
          entetes: ["Dimension", "Exemple d'action dans une PME"],
          lignes: [
            [
              "Organisation du travail",
              "Supprimer une double saisie, fixer des plages sans interruption, clarifier qui valide quoi",
            ],
            [
              "Contenu du travail",
              "Rendre à un poste une tâche qui a du sens et qui lui avait été retirée, ou l'inverse",
            ],
            [
              "Partage de l'information",
              "Un point court et régulier sur les priorités, pour que chacun sache ce qui passe avant quoi",
            ],
            [
              "Relations de travail",
              "Un circuit clair pour traiter un désaccord entre deux services avant qu'il ne s'enkyste",
            ],
            [
              "Reconnaissance du travail",
              "Dire explicitement ce qui a été bien fait, et par qui, au moment où c'est fait",
            ],
            [
              "Conciliation des temps",
              "Des règles partagées sur les messages le soir et le week-end, en cohérence avec le droit à la déconnexion",
            ],
            [
              "Environnement physique",
              "Traiter le bruit, la lumière ou le poste de travail signalé depuis des mois",
            ],
          ],
        },
        { type: "h3", texte: "Pourquoi l'organisation passe avant les avantages" },
        {
          type: "p",
          texte:
            "Une salle de sport ou un service de conciergerie peuvent être appréciés. Mais ils ne compensent pas une charge ingérable ou des décisions qui attendent trois semaines. Les salariés le savent, et une démarche qui commence par les avantages sans toucher à l'organisation perd vite sa crédibilité. **La meilleure action QVCT est souvent la suppression d'un irritant que tout le monde connaît et que personne n'a le droit de régler.**",
        },
      ],
    },

    {
      label: "Écueils",
      titre: "Les erreurs qui vident une démarche QVCT de son sens",
      blocs: [
        { type: "h3", texte: "Le questionnaire sans suite" },
        {
          type: "p",
          texte:
            "Un questionnaire de climat social lancé sans décider à l'avance de ce qu'on fera des résultats produit l'effet inverse de celui recherché. Les salariés ont pris le temps de répondre ; s'ils n'entendent plus parler de rien, ils en concluent que leur avis ne compte pas. Mieux vaut trois questions suivies d'une action visible qu'une enquête exhaustive rangée dans un tiroir.",
        },
        { type: "h3", texte: "Traiter la santé à part" },
        {
          type: "p",
          texte:
            "La QVCT n'est pas un programme de bien-être posé à côté du travail. Si des signes d'épuisement apparaissent dans une équipe, ils relèvent d'abord de la médecine du travail et de la prévention des risques. Notre article sur les [signes du burn-out](/infos-utiles/signes-du-burn-out/) rappelle ce qu'il faut regarder et qui consulter. Le volet collectif, lui, est traité dans l'article consacré à la [prévention des risques psychosociaux](/infos-utiles/prevention-risques-psychosociaux/).",
        },
        { type: "h3", texte: "Oublier le dirigeant" },
        {
          type: "p",
          texte:
            "Dans une PME, la qualité de vie au travail de l'équipe dépend en partie de celle du dirigeant. Un dirigeant saturé décide tard, arbitre dans l'urgence et fait redescendre sa pression. La [charge mentale](/infos-utiles/charge-mentale/) du chef d'entreprise n'est pas un sujet privé : elle fait partie des conditions de travail de tous.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Par où commencer, et ce qu'un accompagnement peut apporter",
      blocs: [
        {
          type: "p",
          texte:
            "Vous n'avez pas besoin d'un programme pour commencer. Choisissez une équipe, posez la question de ce qui gêne le travail, retenez une piste, testez-la trois mois et dites ce qu'elle a donné. C'est déjà une démarche QVCT, au sens de l'accord de 2020.",
        },
        {
          type: "p",
          texte:
            "Un regard extérieur devient utile quand les irritants remontent tous au même endroit, quand l'expression des salariés se heurte à une organisation qui ne bouge pas, ou quand la charge du dirigeant fait partie du problème. Chez Un Seul Souffle, le pilier Équilibre & QVT, porté par Olivia Artur, travaille sur la charge mentale, l'énergie et le sens au travail, pour le dirigeant comme pour ses équipes. Un conseiller référent suit votre sujet ; une autre expertise, organisation ou production par exemple, n'est appelée que si le sujet l'exige. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si le problème tient à la charge, aux rôles ou à la structure, commencez par un [diagnostic d'entreprise](/diagnostic/) : il vous aide à voir où agir en premier.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre QVT et QVCT ?",
      r: [
        "La QVT, qualité de vie au travail, a été définie en 2013 comme un sentiment de bien-être perçu individuellement et collectivement. La QVCT, qualité de vie et des conditions de travail, lui succède avec l'accord interprofessionnel du 9 décembre 2020 et la loi du 2 août 2021. Elle met l'accent sur l'organisation et les conditions de travail, et la relie explicitement à la prévention des risques.",
      ],
    },
    {
      q: "Quelle est la définition de la qualité de vie au travail ?",
      r: [
        "Selon l'accord national interprofessionnel du 19 juin 2013, c'est un sentiment de bien-être au travail perçu collectivement et individuellement, qui englobe l'ambiance, la culture de l'entreprise, l'intérêt du travail et les conditions de travail, ainsi que l'implication, l'autonomie et la reconnaissance. Depuis 2020, on parle de qualité de vie et des conditions de travail, pour insister sur l'organisation du travail.",
      ],
    },
    {
      q: "La QVCT est-elle obligatoire dans une PME ?",
      r: [
        "La négociation sur l'égalité professionnelle et la QVCT n'est obligatoire que dans les entreprises où existe au moins une section syndicale représentative, au moins tous les quatre ans. En revanche, tout employeur doit protéger la santé physique et mentale de ses salariés, selon l'article L4121-1 du Code du travail. Une démarche QVCT est une manière concrète d'y répondre, sans être imposée en tant que telle.",
      ],
    },
    {
      q: "Comment mettre en place une démarche QVCT ?",
      r: [
        "Il n'existe pas de méthode obligatoire. L'accord de 2020 retient quelques fondamentaux : faire s'exprimer les salariés sur leur travail réel, expérimenter des pistes sur un périmètre limité, puis évaluer avant d'étendre. Dans une PME sans représentants du personnel, la démarche peut passer par un dialogue direct entre salariés, managers et employeur. L'essentiel est d'agir sur ce qui remonte.",
      ],
    },
    {
      q: "Quels sont des exemples d'actions de qualité de vie au travail ?",
      r: [
        "Supprimer une double saisie, instaurer des plages sans interruption, clarifier qui valide quoi, tenir un point court sur les priorités, prévoir un circuit pour traiter les désaccords entre services, fixer des règles sur les messages du soir. Ces actions portent sur l'organisation, pas sur des avantages. Elles viennent de ce que les salariés disent de leur travail, pas d'un catalogue.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Accord national interprofessionnel du 19 juin 2013 relatif à une politique d'amélioration de la qualité de vie au travail et de l'égalité professionnelle",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000028216997/",
    },
    {
      titre:
        "Accord national interprofessionnel du 9 décembre 2020 relatif à la prévention renforcée et à une offre renouvelée en matière de santé au travail et conditions de travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/conv_coll/id/KALISCTA000043561907/?idConteneur=KALICONT000047187258",
    },
    {
      titre: "Article L2242-17 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043893940",
    },
    {
      titre: "L2242-1 - Code du travail numérique",
      editeur: "Ministère du Travail (Code du travail numérique)",
      url: "https://code.travail.gouv.fr/code-du-travail/l2242-1",
    },
    {
      titre: "Article L4121-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2027-04-19",
  accent: "qvt",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
