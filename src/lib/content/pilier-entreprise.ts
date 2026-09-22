import type { PagePilier } from "@/lib/content/pilier";

/**
 * Silo 2 — Transformation & organisation de l'entreprise (master § 3).
 * Intention propriétaire : « conseil en organisation, transformation d'entreprise PME ».
 * Couvre les étapes 03 Cartographier, 04 Structurer et 05 Renforcer.
 *
 * C'est la page qui porte le comparatif GEO du cabinet : elle est la mieux placée
 * pour être citée sur « alternative à un cabinet de conseil pour une PME ».
 */
export const pilierEntreprise: PagePilier = {
  href: "/transformation-entreprise/",
  fil: "Transformation de l'entreprise",
  accent: "organisation",

  // « Transformation d'entreprise PME Toulouse » = 41 + 18 = 59 / 60
  metaTitle: "Transformation d'entreprise PME Toulouse",
  // 148 / 150
  metaDescription:
    "Conseil en organisation pour PME et ETI à Toulouse : cartographier le fonctionnement réel, structurer la croissance, rendre l'entreprise autonome.",
  nomService: "Transformation et conseil en organisation de PME et d'ETI",

  h1: "Transformation d'entreprise : structurer une PME en croissance",
  lede:
    "Votre entreprise grandit plus vite que sa structure. Les mêmes blocages reviennent, et rien ne se décide sans vous. Un conseiller référent prend le sujet en charge, traite ce qui bloque réellement — et laisse tranquille ce qui fonctionne.",

  essentiel: {
    reponse:
      "La transformation de l'entreprise d'Un Seul Souffle s'adresse aux PME et ETI de 10 à 250 salariés dont l'organisation ne suit plus la croissance. Un conseiller référent prend en charge votre situation et reste votre interlocuteur du début à la fin. L'accompagnement se déroule en trois étapes — Cartographier le fonctionnement réel, Structurer les chantiers prioritaires, Renforcer l'autonomie de l'organisation — sur 6 à 12 mois, à Toulouse et en Occitanie. Le périmètre est décidé avec vous : on n'ouvre que les chantiers qui bloquent réellement, et les autres expertises du cabinet ne sont appelées que si votre sujet l'exige.",
    points: [
      "Pour qui : PME et ETI de 10 à 250 salariés dont la structure ne suit plus la croissance",
      "Un conseiller référent, interlocuteur unique du début à la fin",
      "Périmètre décidé avec vous — on ne réorganise pas ce qui fonctionne",
      "Étapes couvertes : 03 Cartographier, 04 Structurer, 05 Renforcer",
      "Durée : 6 à 12 mois d'accompagnement, selon les chantiers ouverts",
      "Point de départ : diagnostic 360°, immersion terrain et entretiens",
      "Zone : Toulouse, Haute-Garonne, Occitanie",
      "Premier échange : 30 minutes, gratuit et sans engagement",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "À qui s'adresse la transformation de l'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Cet accompagnement s'adresse aux entreprises qui ont réussi leur croissance et qui en paient maintenant la facture organisationnelle. L'effectif a doublé, les métiers se sont spécialisés, les clients sont plus exigeants — et le mode de fonctionnement est resté celui de l'entreprise d'avant.",
        },
        {
          type: "p",
          texte:
            "**Trois signes permettent de trancher.** La croissance va plus vite que la structure. Les expertises ne se coordonnent pas entre elles : la finance, la production et le commerce prennent des décisions cohérentes chacune de son côté, et incohérentes ensemble. L'entreprise dépend encore entièrement de vous.",
        },
        {
          type: "liste",
          items: [
            "Les mêmes problèmes reviennent malgré les réunions consacrées à les régler",
            "Chaque service a raison de son point de vue, et l'ensemble ne fonctionne pas",
            "Les délais de décision s'allongent sans que personne sache exactement où",
            "Un départ dans l'encadrement vous mettrait réellement en difficulté",
            "Vous avez déjà fait appel à un cabinet, dont le rapport est resté sans suite",
          ],
        },
        {
          type: "p",
          texte:
            "Si vous vous reconnaissez surtout dans un dirigeant saturé qui décide dans l'urgence, commencez plutôt par l'[accompagnement du dirigeant](/transformation-dirigeant/) : travailler la structure avant votre pilotage reviendrait à construire sur un point d'appui instable.",
        },
      ],
    },

    {
      label: "Le vrai blocage",
      titre: "L'organigramme ne décrit plus le fonctionnement réel",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une entreprise qui a grandi vite, il existe toujours deux organisations. Celle de l'organigramme, avec ses services, ses rattachements et ses fiches de poste. Et celle qui fait réellement tourner l'entreprise : des circuits informels, des personnes-ressources que tout le monde appelle, des arbitrages rendus dans les couloirs.",
        },
        {
          type: "p",
          texte:
            "**Tant que l'écart entre les deux n'est pas cartographié, toute réorganisation se trompe de cible.** C'est la raison pour laquelle tant de plans de transformation échouent : ils corrigent l'organisation officielle, qui n'était pas celle qui posait problème.",
        },
        {
          type: "p",
          texte:
            "Cet écart a un coût précis. Les personnes-ressources informelles deviennent des goulots d'étranglement et s'épuisent. Les nouveaux arrivants mettent des mois à comprendre qui décide vraiment. Et vous restez l'arbitre de dernier recours, parce que vous êtes le seul à avoir la vue d'ensemble des deux organisations.",
        },
        {
          type: "p",
          texte:
            "S'y ajoute un second écart, entre les fonctions. La production lisse ses séries, le commerce promet des délais courts, la finance serre le besoin en fonds de roulement. Aucune ne se trompe : c'est leur combinaison qui produit le blocage. Le repérer demande une lecture d'ensemble — ce qui ne veut pas dire tout réorganiser.",
        },
      ],
    },

    {
      label: "Étape 03",
      titre: "Cartographier : lire le système avant de le corriger",
      blocs: [
        { type: "etape", n: "03" },
        {
          type: "p",
          texte:
            "Le diagnostic 360° combine trois sources : une immersion sur le terrain, des entretiens individuels à tous les niveaux, et l'analyse des flux réels — commandes, informations, décisions, argent. Nous ne partons jamais de l'organigramme, qui décrit l'intention et non la pratique.",
        },
        {
          type: "p",
          texte:
            "L'immersion terrain n'est pas une formalité. Une demi-journée passée à suivre une commande de bout en bout apprend davantage sur les interfaces entre services que trois réunions de direction. C'est aussi ce qui distingue une lecture systémique d'un audit documentaire.",
        },
        {
          type: "p",
          texte:
            "La restitution est stratégique, pas descriptive. Elle nomme les causes, les hiérarchise, et propose une séquence d'action : par quoi commencer, et surtout par quoi ne pas commencer. **Une entreprise ne peut pas mener huit chantiers de front, et prétendre le contraire est le moyen le plus sûr de n'en réussir aucun.**",
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez à la fin de l'étape 03",
          texte:
            "Une cartographie du fonctionnement réel, les causes des blocages récurrents nommées et hiérarchisées, et une stratégie d'action priorisée. À ce stade, vous pouvez décider de vous arrêter là et de conduire les chantiers vous-même.",
        },
      ],
    },

    {
      label: "Étape 04",
      titre: "Structurer : traiter les chantiers prioritaires, et eux seuls",
      blocs: [
        { type: "etape", n: "04" },
        {
          type: "p",
          texte:
            "**Un conseiller référent conduit votre accompagnement.** C'est votre interlocuteur : celui qui connaît votre entreprise, qui suit les chantiers et à qui vous vous adressez. Il est choisi selon la nature de votre blocage principal — pilotage financier, organisation, commercial, production, qualité de vie au travail.",
        },
        {
          type: "p",
          texte:
            "Les autres expertises du cabinet ne débarquent pas chez vous. Elles restent en réserve, et votre référent en appelle une quand un chantier précis le demande — un sujet de trésorerie qui apparaît derrière un problème de délais, par exemple. Vous êtes informé avant, le périmètre reste le vôtre, et le référent ne change pas.",
        },
        {
          type: "p",
          texte:
            "C'est la différence avec un cabinet mono-expertise : quand un angle mort sort du périmètre commandé, il n'est pas renvoyé vers un prestataire extérieur, ni laissé de côté. Le collègue compétent le reprend, pour ce sujet, le temps de ce sujet.",
        },
        { type: "expertises" },
        {
          type: "encadre",
          titre: "Ce que nous ne touchons pas",
          texte:
            "Ce qui fonctionne. Un accompagnement ne se mesure pas au nombre de chantiers ouverts, et remettre en cause une organisation qui tient ferait perdre du temps à tout le monde. Le périmètre est arrêté avec vous à l'issue du diagnostic, il est écrit dans la proposition, et il ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Beaucoup d'accompagnements se limitent d'ailleurs à un seul sujet. Le pilotage financier, par exemple, se traite seul, sans transformation globale : voir le [pilotage financier externalisé](/expert-comptable-daf-externalisee-pme/).",
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez à la fin de l'étape 04",
          texte:
            "Des chantiers menés jusqu'à la mise en œuvre sur le terrain, et non jusqu'à la recommandation. Une entreprise qui se structure là où elle bloquait — sans que le reste ait été remis en cause.",
        },
      ],
    },

    {
      label: "Étape 05",
      titre: "Renforcer : rendre l'organisation autonome",
      blocs: [
        { type: "etape", n: "05" },
        {
          type: "p",
          texte:
            "Une transformation qui s'arrête à la mise en œuvre laisse l'entreprise dépendante de ceux qui l'ont conduite. La dernière étape organise notre propre sortie : redistribution des responsabilités, clarification de la gouvernance, mise en place d'un pilotage collectif qui fonctionne sans arbitre extérieur.",
        },
        {
          type: "p",
          texte:
            "Le travail porte sur le comité de direction : ce qu'il décide réellement, à quel rythme, sur quels indicateurs, et ce qui ne doit plus y remonter. Un CODIR qui valide mais ne tranche pas est un symptôme fréquent — et la principale raison pour laquelle un dirigeant reste le centre de tout.",
        },
        {
          type: "p",
          texte:
            "Nous créons enfin des relais internes : des personnes identifiées, formées et mandatées pour tenir les modes de fonctionnement installés. **Le critère de réussite est simple et vérifiable : six mois après notre départ, les chantiers continuent d'avancer.**",
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez à la fin de l'étape 05",
          texte:
            "Une gouvernance clarifiée, des responsabilités redistribuées et des relais internes en place. Une entreprise autonome et capable d'absorber sa prochaine étape de croissance.",
        },
      ],
    },

    {
      label: "Notre modèle",
      titre: "Cabinet de conseil classique ou équipe de direction externalisée",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants que nous rencontrons ont déjà fait appel à un cabinet, et gardent de l'expérience un rapport sérieux resté sans effet. Voici, point par point, ce qui sépare les deux modèles.",
        },
        { type: "comparatif" },
        {
          type: "p",
          texte:
            "Ce modèle a une contrepartie qu'il faut connaître avant de s'engager : il demande du temps de vos équipes. Un accompagnement mené jusqu'à la mise en œuvre suppose que vos managers y consacrent des heures réelles. Un rapport, lui, ne coûte rien à personne — c'est aussi pourquoi il ne change rien.",
        },
      ],
    },

    {
      label: "Déroulé",
      titre: "Comment se déroule une transformation, et ce qu'elle engage",
      blocs: [
        {
          type: "liste",
          items: [
            "**Prise de contact, 30 minutes.** Un échange gratuit et sans engagement, pour vérifier que le blocage est bien organisationnel.",
            "**Diagnostic flash de votre situation.** Une première lecture, avant tout engagement.",
            "**Proposition sur-mesure.** Périmètre, chantiers, durée et tarif par écrit. Rien ne démarre sans votre accord.",
            "**Étape 03 Cartographier.** Diagnostic 360° : immersion terrain, entretiens des parties prenantes, restitution stratégique complète.",
            "**Étape 04 Structurer.** Conduite des chantiers retenus par votre référent, avec suivi terrain continu, 6 à 12 mois.",
            "**Étape 05 Renforcer.** Pilotage collectif, redistribution des responsabilités, création de relais internes durables.",
            "**Sortie.** Passage de relais organisé, avec suivi mensuel des indicateurs sur la période convenue.",
          ],
        },
        {
          type: "p",
          texte:
            "La durée totale va de 6 à 12 mois. Le diagnostic constitue un point d'arrêt volontaire : il a sa valeur propre, et vous n'êtes pas engagé sur la suite en le commandant.",
        },
        {
          type: "encadre",
          titre: "Cas clients et résultats mesurés",
          aFournir: true,
          texte:
            "[À fournir par le client] Deux cas concrets structurés — situation de départ, intervention, résultat mesuré — avec le secteur et la taille de l'entreprise. Les logos clients si l'accord est obtenu. Aucun chiffre ne sera publié sans source vérifiable.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Combien de temps dure une transformation d'entreprise ?",
      r: [
        "De 6 à 12 mois selon la taille de l'entreprise et le nombre de chantiers retenus. Le diagnostic 360° qui ouvre le parcours se conduit en quelques semaines et constitue un point d'arrêt possible.",
        "L'étape Structurer occupe l'essentiel de la durée, entre 6 et 12 mois. L'étape Renforcer organise la sortie.",
      ],
    },
    {
      q: "Devons-nous tout réorganiser ?",
      r: [
        "Non, et c'est un point que nous tenons à lever tôt. Le périmètre est arrêté avec vous à l'issue du diagnostic, écrit dans la proposition, et il ne s'élargit pas sans votre accord. Ce qui fonctionne dans votre entreprise n'est pas remis en cause.",
        "Beaucoup d'accompagnements se limitent à un ou deux chantiers. Le diagnostic sert précisément à distinguer ce qui bloque de ce qui tient.",
      ],
    },
    {
      q: "Combien d'intervenants aurons-nous en face de nous ?",
      r: [
        "Un. Un conseiller référent prend en charge votre situation et reste votre interlocuteur du début à la fin. Il est choisi selon la nature de votre blocage principal.",
        "Il peut faire appel à un collègue du cabinet quand un chantier précis le demande, sur ce sujet et le temps de ce sujet. Vous en êtes informé avant, et le référent ne change pas.",
      ],
    },
    {
      q: "En quoi est-ce différent d'un cabinet de conseil classique ?",
      r: [
        "Sur trois points. Le livrable : une transformation mise en œuvre, pas un rapport de recommandations. La profondeur : votre référent peut s'appuyer sur quatre autres expertises de direction quand le sujet le demande, au lieu de vous renvoyer vers un prestataire extérieur. Le point de sortie : l'autonomie de votre entreprise, et non la remise du document.",
        "Un angle mort qui sort du périmètre commandé n'est donc ni écarté, ni facturé comme une mission supplémentaire.",
      ],
    },
    {
      q: "Peut-on commander seulement le diagnostic ?",
      r: [
        "Oui, et c'est fréquent. Le diagnostic 360° a sa valeur propre : cartographie du fonctionnement réel, causes hiérarchisées, stratégie d'action priorisée. Beaucoup de dirigeants conduisent ensuite les chantiers eux-mêmes.",
        "Le commander ne vous engage pas sur la suite du parcours.",
      ],
    },
    {
      q: "Quelle charge cela représente-t-il pour nos équipes ?",
      r: [
        "Réelle, et il faut l'anticiper. L'immersion et les entretiens du diagnostic mobilisent vos collaborateurs quelques heures chacun. La phase de mise en œuvre demande davantage : ce sont vos équipes qui conduisent les chantiers, avec nous à leurs côtés.",
        "C'est la contrepartie d'un accompagnement qui va jusqu'au terrain. Nous la chiffrons dans la proposition écrite, avant tout engagement.",
      ],
    },
    {
      q: "Intervenez-vous dans l'industrie et l'agroalimentaire ?",
      r: [
        "Oui. Le pilier production et performance est porté par des référents issus de l'industrie, et couvre les flux, les processus et les interfaces industriels ainsi que l'amélioration continue des sites.",
        "Nous intervenons également dans les services et la distribution, sur des PME et ETI de 10 à 250 salariés.",
      ],
    },
    {
      q: "Que se passe-t-il une fois l'accompagnement terminé ?",
      r: [
        "L'étape Renforcer prépare le passage de relais : responsabilités redistribuées, gouvernance clarifiée, relais internes formés et mandatés. Un point de contrôle est prévu après la sortie.",
        "Le critère de réussite est que les chantiers continuent d'avancer sans nous.",
      ],
    },
  ],

  bascule: {
    titre: "Et si le nœud est chez vous ?",
    texte:
      "Si vous décidez dans l'urgence, si vos équipes attendent votre feu vert et si la charge mentale entame votre clarté, commencez par l'autre parcours : il travaille votre pilotage, puis la maturité du collectif, sur 3 à 6 mois.",
    href: "/transformation-dirigeant/",
    ancre: "Découvrir l'accompagnement du dirigeant",
  },
};
