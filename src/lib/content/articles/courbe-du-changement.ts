import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, transformation de l'entreprise. Signé Muriel Saffroy.
 * Requête : « la courbe du changement » (390/mois, KD 11). Secondaire :
 * « définition du changement » (390).
 *
 * L'intention « conseil en organisation » appartient au pilier
 * /transformation-entreprise/ : l'article traite le modèle et renvoie vers lui.
 *
 * Points sensibles : « Kübler-Ross Change Curve » est une marque déposée de la
 * fondation Kübler-Ross (vérifié sur ekrfoundation.org le 24/09/2026) ; le texte
 * parle de « courbe du changement », expression générique, sans reproduire de
 * schéma sous licence. Le modèle vient du deuil et de la fin de vie : aucune
 * analogie appuyée avec la mort, aucune lecture psychologique des salariés.
 * Chiffres Dares : enquête 2016, présentés comme tels.
 */
export const article: Article = {
  slug: "courbe-du-changement",

  motCle: "la courbe du changement (390/mois, KD 11) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "définition du changement (390/mois)",
    "étapes de la courbe du changement",
    "courbe de Kübler-Ross en entreprise",
  ],

  // 40 / 42
  metaTitle: "Courbe du changement : étapes et limites",
  // 146 / 150
  metaDescription:
    "La courbe du changement expliquée : ses étapes, ce que la recherche en dit, et comment accompagner une équipe à chaque phase d'une réorganisation.",

  h1: "La courbe du changement : lire les réactions d'une équipe, et l'accompagner",

  chapo:
    "La courbe du changement décrit les réactions que traverse une personne face à un changement qu'elle n'a pas choisi : le déni, la résistance, la baisse d'énergie, puis l'exploration et l'appropriation. Elle vient des travaux d'Elisabeth Kübler-Ross auprès de patients gravement malades, et s'est imposée en entreprise pour une raison simple : elle rappelle qu'une annonce n'est pas une adhésion. Utilisée comme une grille de lecture, elle aide un dirigeant à ne pas confondre une phase normale avec un refus. Utilisée comme un calendrier, elle trompe. Ce qui fait avancer une équipe sur la courbe, ce n'est pas la patience seule : c'est le sens donné, la participation et une organisation qui absorbe la charge du changement.",

  essentiel: {
    reponse:
      "La courbe du changement est un modèle qui représente l'évolution de l'énergie et du moral d'une personne confrontée à un changement subi : choc et déni, colère, marchandage, creux, puis exploration et intégration. Elle est adaptée des cinq étapes décrites par Elisabeth Kübler-Ross en 1969 dans On Death and Dying. La fondation qui porte son nom précise que ces étapes ne forment ni une séquence rigide ni un parcours universel. En entreprise, elle sert à lire les réactions d'une équipe, pas à prédire leur durée.",
    points: [
      "Le modèle vient de la fin de vie, pas du management : il décrit des réactions fréquentes, pas un passage obligé",
      "Les étapes se chevauchent, se sautent ou reviennent ; aucune durée standard n'existe",
      "Selon la Dares, 41 % des salariés avaient connu au moins un changement important de leur travail en 2016",
      "Un changement d'organisation s'accompagne d'une intensité du travail et de tensions plus fortes : c'est une charge à gérer, pas seulement une émotion",
      "Ce qui aide à chaque phase : du sens, de la participation, des marges de manœuvre et des managers eux-mêmes accompagnés",
    ],
  },

  chapitres: [
    {
      label: "Le modèle",
      titre: "La courbe du changement : d'où vient ce modèle ?",
      blocs: [
        {
          type: "p",
          texte:
            "Vous annoncez une réorganisation. Vous l'avez préparée pendant des mois, vous en voyez les bénéfices. En face, des visages fermés, des questions à côté du sujet, puis, les semaines suivantes, des retards, des départs de réunion, une énergie en berne. **La courbe du changement sert d'abord à cela : vous rappeler que votre équipe démarre le chemin au moment où vous, vous l'avez presque fini.**",
        },
        {
          type: "h3",
          texte: "Cinq étapes décrites en 1969, en dehors de l'entreprise",
        },
        {
          type: "p",
          texte:
            "Le modèle vient de la psychiatre Elisabeth Kübler-Ross. Dans On Death and Dying, en 1969, elle décrit cinq réactions fréquentes chez des patients gravement malades : le déni, la colère, le marchandage, la dépression et l'acceptation. Selon la [Fondation Elisabeth Kübler-Ross](https://www.ekrfoundation.org/5-stages-of-grief/change-curve/), ces étapes ont été adaptées au leadership et aux organisations à partir de la fin du XXᵉ siècle, sous le nom de Change Curve, aujourd'hui une marque déposée.",
        },
        {
          type: "h3",
          texte: "Pourquoi elle a séduit les entreprises",
        },
        {
          type: "p",
          texte:
            "Le modèle met un mot sur une expérience que tout dirigeant a vécue : le décalage entre la logique d'une décision et la façon dont elle est reçue. Il donne aussi une forme simple, une courbe qui descend puis remonte, qui se dessine au tableau en trente secondes. Cette simplicité fait sa force et son principal risque, sur lequel nous reviendrons. Bien employée, elle sert surtout à préparer ce que l'on sous-estime presque toujours : le temps que met une équipe à changer de façon de travailler, un sujet central de tout [conseil en organisation](/transformation-entreprise/).",
        },
      ],
    },

    {
      label: "Définition",
      titre: "Définition du changement en entreprise : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Un changement, en entreprise, c'est toute modification durable de la façon dont le travail se fait ou de qui le fait : un nouveau logiciel, un nouvel organigramme, un rachat, un déménagement, une nouvelle direction. La Dares, le service statistique du ministère du Travail, en distingue plusieurs formes dans son enquête Conditions de travail : changement de poste ou de fonction, de techniques, d'organisation du travail, restructuration ou déménagement, plan de licenciements, rachat ou changement de direction.",
        },
        {
          type: "h3",
          texte: "Un phénomène courant, pas une exception",
        },
        {
          type: "p",
          texte:
            "Selon [Quelles sont les évolutions récentes des conditions de travail et des risques psychosociaux ?](https://pmb.cereq.fr/doc_num.php?explnum_id=4161) (Dares Analyses n° 082, décembre 2017), 41 % des salariés déclaraient en 2016 avoir vu leur environnement de travail fortement modifié au cours des douze derniers mois. 21 % citaient un changement important dans l'organisation de leur travail, 13 % un changement dans les techniques utilisées. Le changement n'est donc pas un moment rare dans la vie d'une équipe : c'est presque un état permanent.",
        },
        {
          type: "h3",
          texte: "Le changement se décide, la transition se vit",
        },
        {
          type: "p",
          texte:
            "Une distinction aide à lire la courbe. Le changement est l'événement : il a une date, un contenu, un responsable. La transition est ce que chaque personne doit traverser pour l'intégrer : renoncer à une façon de faire, apprendre la nouvelle, retrouver ses repères. La courbe décrit la transition, pas le changement. C'est pour cela qu'un projet peut être bouclé sur le papier alors que l'équipe est encore au creux. Dans une PME, rendre visible cet écart est une responsabilité de direction autant que de management.",
        },
      ],
    },

    {
      label: "Les étapes",
      titre: "Les étapes de la courbe du changement, une par une",
      blocs: [
        {
          type: "p",
          texte:
            "Les versions de la courbe varient d'un auteur à l'autre. Celle que nous utilisons suit les cinq réactions décrites par Kübler-Ross, complétées de la remontée que connaissent les équipes quand le changement s'installe. Aucune n'est un défaut : ce sont des réactions ordinaires à une perte de repères.",
        },
        {
          type: "tableau",
          entetes: ["Étape", "Ce que l'on observe dans l'équipe"],
          lignes: [
            [
              "Choc et déni",
              "« Ça ne nous concerne pas », « ça ne se fera jamais ». Peu de questions, le travail continue comme avant",
            ],
            [
              "Colère et résistance",
              "Objections, critiques du projet ou de ceux qui le portent, recherche de responsables",
            ],
            [
              "Marchandage",
              "Demandes d'exceptions, de délais, de garder « juste » l'ancien outil pour certains cas",
            ],
            [
              "Creux",
              "Baisse d'énergie, lassitude, erreurs plus fréquentes, parfois absences. Le moment le plus fragile",
            ],
            [
              "Exploration",
              "Premiers essais, questions pratiques, propositions d'amélioration. L'énergie remonte",
            ],
            [
              "Intégration",
              "La nouvelle façon de faire devient la norme ; on n'en parle plus comme d'un changement",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Deux remarques pratiques. D'abord, chaque personne se trouve à un point différent de la courbe au même moment : votre responsable logistique explore déjà quand le chef d'atelier résiste encore. Ensuite, le dirigeant et le comité de direction ont souvent traversé leur propre creux avant l'annonce. Ils sont prêts ; l'équipe, pas encore.",
        },
      ],
    },

    {
      label: "Les limites",
      titre: "Ce que la courbe du changement ne dit pas",
      blocs: [
        {
          type: "h3",
          texte: "Ce n'est pas une séquence obligatoire",
        },
        {
          type: "p",
          texte:
            "La Fondation Kübler-Ross le souligne elle-même : les étapes n'ont jamais été pensées comme une séquence rigide. Le processus est décrit comme fluide et non linéaire ; on revient en arrière, on vit plusieurs réactions à la fois, on en saute certaines.",
        },
        {
          type: "h3",
          texte: "La recherche nuance le modèle",
        },
        {
          type: "p",
          texte:
            "L'étude longitudinale la plus citée porte sur le deuil, pas sur l'entreprise. Publiée dans le JAMA en 2007, [An Empirical Examination of the Stage Theory of Grief](https://jamanetwork.com/journals/jama/fullarticle/205661) a suivi 233 personnes endeuillées pendant deux ans. **L'acceptation y était la réaction la plus fréquente dès le départ**, et non la dernière. Les pics d'incrédulité, de manque, de colère et de tristesse se succédaient bien dans l'ordre attendu, mais sans former des étapes étanches. Transposée au travail, la leçon est claire : la courbe décrit des tendances, pas un parcours individuel.",
        },
        {
          type: "h3",
          texte: "Le piège : étiqueter toute objection comme de la résistance",
        },
        {
          type: "p",
          texte:
            "Le risque le plus concret est ailleurs. Quand un dirigeant connaît la courbe, il est tenté de ranger chaque objection dans la case colère ou marchandage, et d'attendre qu'elle passe. Or certaines objections sont justes : l'équipe voit un défaut du projet que la direction n'a pas vu. Une courbe du changement bien utilisée vous fait écouter davantage, pas moins.",
        },
      ],
    },

    {
      label: "Le coût",
      titre: "Pourquoi le creux de la courbe coûte cher",
      blocs: [
        {
          type: "p",
          texte:
            "Le creux n'est pas qu'une affaire de moral. Il correspond à une période où le travail devient réellement plus difficile : l'ancienne façon de faire n'est plus autorisée, la nouvelle n'est pas encore maîtrisée, et les résultats doivent continuer à sortir.",
        },
        {
          type: "h3",
          texte: "Plus d'intensité, plus de tensions",
        },
        {
          type: "p",
          texte:
            "La Dares le mesure. Dans la même publication, 54 % des salariés ayant connu un changement de techniques cumulaient au moins trois contraintes de rythme de travail, contre 35 % pour l'ensemble des salariés. Et 43 % de ceux qui avaient connu un changement de l'organisation du travail déclaraient au moins un comportement hostile dans l'année, contre 30 % en moyenne. **À caractéristiques identiques, un changement d'organisation multipliait par 1,5 la probabilité de subir un comportement hostile.**",
        },
        {
          type: "h3",
          texte: "Un facteur de risque reconnu",
        },
        {
          type: "p",
          texte:
            "L'INRS classe les changements organisationnels non maîtrisés parmi les [facteurs de risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html), dans la famille de l'insécurité de la situation de travail. Traiter la courbe comme une simple question d'état d'esprit revient à ignorer ce que le changement fait concrètement au travail de chacun.",
        },
      ],
    },

    {
      label: "Accompagner",
      titre: "Accompagner chaque phase de la courbe du changement",
      blocs: [
        {
          type: "p",
          texte:
            "Dans ses [principes de prévention des risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/prevention.html), l'INRS donne deux pistes qui valent pour tout projet : permettre aux salariés de participer aux changements qui affecteront leur travail, et améliorer la communication sur la stratégie pour réduire les incertitudes. Voici comment les traduire phase par phase. Notre article sur l'[accompagnement au changement](/infos-utiles/accompagnement-au-changement/) détaille la démarche d'ensemble.",
        },
        {
          type: "h3",
          texte: "Au choc : dire le pourquoi, et ce qui ne change pas",
        },
        {
          type: "p",
          texte:
            "Une annonce qui ne parle que du quoi laisse chacun imaginer le reste, souvent le pire. Expliquez pourquoi, ce qui est décidé et ce qui ne l'est pas, et surtout ce qui ne bouge pas. Les points fixes rassurent davantage que les promesses.",
        },
        {
          type: "h3",
          texte: "À la colère et au marchandage : écouter, et dire ce qui est négociable",
        },
        {
          type: "p",
          texte:
            "Donnez un lieu à l'expression des désaccords, plutôt que de les laisser circuler en bilatéral après la réunion. Séparez clairement ce qui est acquis de ce qui reste ouvert à la discussion. Un marchandage sans règle devient une négociation permanente ; un marchandage cadré devient de la participation.",
        },
        {
          type: "h3",
          texte: "Au creux : alléger la charge, pas seulement encourager",
        },
        {
          type: "p",
          texte:
            "C'est le moment de réduire les objectifs annexes, d'accepter une baisse temporaire de rendement, de former et de rendre les managers disponibles. Un discours motivant ne compense pas une double charge de travail.",
        },
        {
          type: "h3",
          texte: "À l'exploration et à l'intégration : laisser essayer, puis stabiliser",
        },
        {
          type: "p",
          texte:
            "Laissez des marges pour tester et se tromper, recueillez les améliorations proposées et appliquez-en quelques-unes, visiblement. Puis fixez la nouvelle règle : documentez-la, retirez l'ancien outil, arrêtez les exceptions. Tant que l'ancien fonctionnement reste possible, une partie de l'équipe y retourne.",
        },
      ],
    },

    {
      label: "Les managers",
      titre: "Les managers, premiers à traverser la courbe et derniers à être accompagnés",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME, le manager de proximité porte le changement devant son équipe alors qu'il le traverse lui-même. On lui demande d'expliquer un projet qu'il découvre, de rassurer sur des points qu'il ignore et de tenir la production pendant le creux. C'est souvent là que le changement se joue, et que la [réorganisation d'une entreprise](/infos-utiles/reorganisation-entreprise/) échoue ou tient.",
        },
        {
          type: "liste",
          items: [
            "**Informez-les avant leurs équipes**, avec le temps de poser leurs propres questions.",
            "**Donnez-leur une marge de décision réelle** sur la mise en œuvre, et pas seulement un message à relayer.",
            "**Réunissez-les régulièrement** pendant le déploiement, pour faire remonter ce qu'ils voient et ajuster.",
            "**Reconnaissez la charge supplémentaire** : animer une équipe au creux de la courbe demande plus que le management ordinaire.",
          ],
        },
        {
          type: "p",
          texte:
            "Ce qui est demandé au manager pendant un changement dépend de la façon dont son [rôle de manager](/infos-utiles/role-du-manager/) a été défini auparavant. Si le rôle était flou, le changement le rend intenable.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Quand se faire accompagner pour traverser la courbe",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des changements se conduisent en interne. Un regard extérieur devient utile dans trois cas : quand le changement touche plusieurs dimensions à la fois, par exemple l'organisation et la finance ; quand l'équipe de direction elle-même n'est pas alignée ; ou quand le creux s'éternise et que les tensions paralysent des projets entiers.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, un conseiller référent prend en charge le sujet. Le travail commence par l'étape Cartographier : lire les flux, les rôles et les tensions tels qu'ils fonctionnent réellement, pas tels que l'organigramme les décrit. Vient ensuite l'étape Structurer, sur les chantiers retenus avec vous, de 6 à 12 mois. Une autre expertise n'intervient que si le sujet l'exige, et le périmètre ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore où votre équipe se situe sur la courbe, ni si le blocage tient au projet, aux rôles ou à la charge, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la courbe du changement ?",
      r: [
        "La courbe du changement est un modèle qui représente l'évolution de l'énergie et du moral d'une personne face à un changement qu'elle n'a pas choisi. Elle est adaptée des cinq étapes décrites par Elisabeth Kübler-Ross en 1969 à propos de patients gravement malades. En entreprise, elle sert à lire les réactions d'une équipe pendant une réorganisation, un changement d'outil ou de direction.",
      ],
    },
    {
      q: "Quelles sont les étapes de la courbe du changement ?",
      r: [
        "Les versions varient, mais on retrouve généralement : le choc et le déni, la colère et la résistance, le marchandage, un creux marqué par une baisse d'énergie, puis l'exploration et l'intégration de la nouvelle façon de faire. Ces étapes ne sont pas une séquence obligatoire : elles se chevauchent, se sautent ou reviennent, et chaque membre de l'équipe peut se trouver à un point différent.",
      ],
    },
    {
      q: "La courbe du changement est-elle scientifiquement validée ?",
      r: [
        "Pas au sens d'une loi. Une étude longitudinale de référence, publiée dans le JAMA en 2007 sur 233 personnes endeuillées, a montré que l'acceptation était la réaction la plus fréquente dès le départ, tout en retrouvant un ordre des pics proche du modèle. Elle porte sur le deuil, pas sur l'entreprise. La courbe reste une grille de lecture utile, pas un outil de prévision.",
      ],
    },
    {
      q: "Combien de temps dure la traversée de la courbe du changement ?",
      r: [
        "Il n'existe aucune durée standard. Elle dépend de l'ampleur du changement, de la façon dont il est annoncé, des marges laissées à l'équipe et de la charge de travail pendant la transition. Un même collectif peut traverser vite un changement d'outil et buter longtemps sur un changement de direction. Surveillez les signaux, comme l'énergie ou les erreurs, plutôt qu'un calendrier.",
      ],
    },
    {
      q: "Comment réduire la résistance au changement ?",
      r: [
        "En la traitant comme une information, pas comme un obstacle. Expliquer le pourquoi et ce qui ne change pas, séparer le négociable de l'acquis, associer les salariés à la mise en œuvre et alléger la charge pendant la transition. L'INRS recommande précisément de faire participer les salariés aux changements qui affectent leur travail et de réduire les incertitudes par la communication.",
      ],
    },
  ],

  sources: [
    {
      titre: "Kübler-Ross Change Curve®",
      editeur: "Elisabeth Kübler-Ross Foundation",
      url: "https://www.ekrfoundation.org/5-stages-of-grief/change-curve/",
    },
    {
      titre: "An Empirical Examination of the Stage Theory of Grief",
      editeur: "JAMA, Maciejewski, Zhang, Block et Prigerson, 2007",
      url: "https://jamanetwork.com/journals/jama/fullarticle/205661",
    },
    {
      titre:
        "Quelles sont les évolutions récentes des conditions de travail et des risques psychosociaux ? (Dares Analyses n° 082)",
      editeur: "Dares, ministère du Travail (document hébergé par le Céreq)",
      url: "https://pmb.cereq.fr/doc_num.php?explnum_id=4161",
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
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-05-31",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: true,
};
