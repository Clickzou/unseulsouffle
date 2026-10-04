import type { PagePilier } from "@/lib/content/pilier";
import { offre } from "@/lib/content/tarifs";

/**
 * Silo 1 — Accompagnement du dirigeant (master § 3).
 * Intention propriétaire : « coaching dirigeant » (590/mois) puis « accompagnement
 * dirigeant » (320/mois) — docs/seo/ETUDE_MOTS_CLES.md. Coaching d'abord : il pèse
 * presque deux fois plus.
 * Couvre les étapes 01 Aligner et 02 Coopérer.
 *
 * Cette page ne doit PAS reprendre le signal « équipe de direction externalisée » :
 * il appartient à la home, qui le cannibaliserait sinon (master § 4).
 */
export const pilierDirigeant: PagePilier = {
  href: "/transformation-dirigeant/",
  fil: "Parcours dirigeant",
  accent: "qvt",

  // « Coaching dirigeant de PME à Toulouse » = 36 + 18 = 54 / 60
  metaTitle: "Coaching dirigeant de PME à Toulouse",
  // 148 / 150
  metaDescription:
    "Coaching et accompagnement de dirigeants de TPE et PME à Toulouse : retrouver la clarté, décider sans urgence, déléguer. Premier échange gratuit.",
  nomService: "Accompagnement du dirigeant de TPE et PME",

  h1: "Coaching et accompagnement du dirigeant de PME à Toulouse",
  lede:
    "Vous dirigez une TPE ou une PME, et vous portez seul l'essentiel des décisions. Notre coaching dirigeant travaille d'abord votre clarté, puis la maturité du collectif autour de vous — jusqu'à ce que les décisions cessent de toutes remonter à vous.",

  essentiel: {
    reponse:
      "Le coaching et l'accompagnement du dirigeant d'Un Seul Souffle s'adressent aux dirigeantes et dirigeants de TPE et PME de 10 à 250 salariés qui décident dans l'urgence et ne délèguent pas suffisamment. Il se déroule en deux étapes — Aligner, pour retrouver de la clarté stratégique, puis Coopérer, pour installer la co-responsabilité. L'étape Aligner se suit en coaching individuel, à partir de 1 500 € HT par trimestre. Un expert référent suit votre parcours. L'autodiagnostic de qualité de vie au travail s'ajoute seulement si vous en avez besoin. Ce n'est ni une formation au management, ni une thérapie.",
    points: [
      "Pour qui : dirigeant de TPE ou de PME, 10 à 250 salariés, quand le nœud est chez vous et non dans l'organisation",
      "Tarif : à partir de 1 500 € HT par trimestre en individuel",
      "Coaching individuel, avec un nombre de séances défini selon vos besoins et vos objectifs",
      "En option : autodiagnostic de qualité de vie au travail",
      "Étapes couvertes : 01 Aligner et 02 Coopérer",
      "Zone : Toulouse, Haute-Garonne, Occitanie — en présentiel ou en visio",
      "Premier échange : 30 minutes, gratuit et sans engagement",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "À qui s'adresse le coaching dirigeant ?",
      cartesADroite: true,
      blocs: [
        // Texte de la cliente (retour du 04/10/2026).
        {
          type: "p",
          texte:
            "Parmi les offres de coaching professionnel à Toulouse, le coaching dirigeant s'adresse à celles et ceux qui ont construit leur entreprise grâce à leur expertise, leur énergie et leur capacité à décider.",
        },
        {
          type: "p",
          texte:
            "**L'entreprise grandit. Et avec elle, le rôle du dirigeant doit évoluer.** Vous avez peut-être été le meilleur commercial, le meilleur technicien, l'expert sur lequel tout reposait. Vous avez développé votre activité grâce à votre savoir-faire et à votre engagement.",
        },
        {
          type: "p",
          texte:
            "Mais lorsque l'entreprise franchit un cap, on ne peut plus la piloter uniquement depuis son expertise métier. Il faut apprendre à prendre de la hauteur, à déléguer, à s'entourer de personnes clés, à faire grandir ses managers et à construire une organisation capable de porter la croissance avec vous.",
        },
        {
          type: "p",
          texte:
            "Le coaching n'est alors pas là pour réparer un problème. Il vous accompagne dans le passage d'expert à dirigeant.",
        },
        {
          type: "p",
          texte:
            "Et si, au contraire, votre principal enjeu concerne une organisation qui ne suit plus la croissance, des rôles mal définis ou des dysfonctionnements entre les équipes, c'est le [conseil en organisation](/transformation-entreprise/) qu'il faut regarder.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Vous êtes devenu le principal point de passage de l'entreprise.** Les décisions remontent vers vous, les équipes attendent votre validation et vous avez du mal à lâcher ce que vous maîtrisez le mieux.",
            "**Votre entreprise grandit et votre rôle doit changer.** Vous devez passer de « celui qui sait et qui fait » à celui qui donne une direction, construit son équipe et crée les conditions de la réussite collective.",
            "**Votre prochaine étape ne se joue plus dans votre expertise, mais dans votre capacité à piloter.** Vous avez besoin de prendre de la hauteur, de clarifier vos priorités, de vous entourer des bonnes personnes et de structurer votre manière de décider.",
          ],
        },
      ],
    },

    {
      label: "Le vrai blocage",
      titre: "Ce n'est pas la charge de travail, c'est la charge de décision",
      exergue:
        "Le point de blocage réel, c'est le nombre de décisions qui ne peuvent être prises que par vous.",
      blocs: [
        {
          type: "p",
          texte:
            "Un dirigeant saturé décrit presque toujours son problème en heures : trop de réunions, trop de dossiers, pas assez de temps. C'est le symptôme, pas la cause. Et tant que la cause reste en place, elle produit trois effets.",
        },
        {
          type: "liste",
          style: "cartes",
          colonnes: 3,
          items: [
            "**La file d'attente se reconstitue.** Tant que ce nombre reste élevé, aucun gain de productivité ne vous libère : le temps récupéré se remplit d'autres arbitrages. Adjoint, outil de gestion de projet, matinées bloquées : la file se reforme, parce que c'est l'organisation des décisions qui la produit, pas votre agenda.",
            "**Vos arbitrages perdent en qualité.** Une décision prise en fin de journée, entre deux urgences, sans avoir pris le temps de la poser, est une décision que vous reprendrez. La surcharge ne vous fait pas seulement perdre du temps : elle produit du travail à refaire, pour vous et pour vos équipes.",
            "**C'est le blocage dont on parle le moins.** Un dirigeant évoque volontiers sa trésorerie ou son carnet de commandes ; il évoque rarement le fait qu'il n'arrive plus à trancher. Le coaching dirigeant commence par rendre ce sujet discutable.",
          ],
        },
      ],
    },

    {
      label: "Étape 01",
      titre: "Aligner : un coaching de dirigeant pour remettre de la clarté",
      blocs: [
        { type: "etape", n: "01" },
        {
          type: "p",
          texte:
            "La première étape du coaching de dirigeant est un état des lieux honnête de votre manière de diriger : ce que vous décidez, ce que vous devriez déléguer, ce qui vous revient sans raison. Nous partons de votre semaine réelle, pas d'un modèle de management.",
        },
        {
          type: "p",
          texte:
            "Vient ensuite la hiérarchisation. La plupart des dirigeants que nous accompagnons n'ont pas trop peu de priorités : ils en ont douze, toutes urgentes, et aucune ne peut être abandonnée sans arbitrage explicite. Ce travail d'élagage est inconfortable, et c'est celui qui produit le plus d'effet immédiat.",
        },
        {
          type: "p",
          texte:
            "**Cette étape se suit en coaching individuel**, seul à seul, pour prendre du recul et retrouver une capacité de décision sereine, au rythme de votre agenda. Elle se construit par trimestre, avec un nombre de séances de 1 h 30 défini selon vos besoins et vos objectifs, en présentiel ou en visio, **à partir de 1 500 € HT par trimestre**.",
        },
        {
          type: "p",
          texte:
            "Un autodiagnostic de qualité de vie au travail peut s'y ajouter, **seulement si vous en avez besoin** : il évalue votre niveau de surcharge, identifie les facteurs de tension et repère vos leviers d'équilibre. Vous n'êtes pas obligé de commencer par là.",
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez à la fin de l'étape 01",
          texte:
            "Des priorités écrites et tenables, une liste explicite de ce que vous ne faites plus, et un mode de décision pour ce qui reste. Concrètement : des arbitrages pris au moment choisi, et non parce que la situation ne pouvait plus attendre.",
        },
      ],
    },

    {
      label: "Étape 02",
      titre: "Coopérer : installer la co-responsabilité dans l'équipe",
      large: true,
      ficheADroite: true,
      blocs: [
        { type: "etape", n: "02" },
        {
          type: "p",
          texte:
            "Clarifier votre pilotage ne suffit pas. Si vos équipes ont pris l'habitude d'attendre votre validation, votre clarté nouvelle ne fera que rendre la file d'attente plus rapide. **La deuxième étape déplace le travail chez ceux qui vous entourent.**",
        },
        {
          type: "p",
          texte:
            "Elle se conduit en **cercles d'avancée** : des groupes de 6 à 8 personnes — dirigeants, managers, entrepreneurs — en sessions collectives de trois heures, sur trois mois, en présentiel ou en visio. Chaque cercle traite des situations réelles, apportées par les participants, pas des cas d'école. On y travaille la façon dont une décision se prend, qui l'assume, et ce qui se passe quand elle se révèle mauvaise.",
        },
        {
          type: "p",
          texte:
            "Le sujet de fond est presque toujours le même : la co-responsabilité n'a jamais été installée. Les rôles existent sur l'organigramme, mais personne n'a le droit explicite de se tromper. Tant que ce droit n'est pas posé, remonter au dirigeant reste, pour un manager, la décision la plus rationnelle. L'accompagnement dirigeant rend ce calcul visible, puis le modifie.",
        },
        {
          type: "p",
          texte:
            "Cette étape est portée par Muriel Saffroy, associée fondatrice de notre [cabinet de conseil à Toulouse](/), sur le pilier organisation et coopération. Quand la coopération bute sur la charge et l'énergie des équipes plus que sur les rôles, le pilier équilibre et qualité de vie au travail prend le relais — voir [notre équipe](/notre-equipe/).",
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez à la fin de l'étape 02",
          texte:
            "Un collectif qui traite à son niveau ce qui lui revient, des désaccords qui se disent en réunion plutôt qu'après, et un dirigeant redevenu disponible pour la transformation de l'entreprise elle-même.",
        },
      ],
    },

    {
      label: "Résultats",
      titre: "Ce qu'un accompagnement dirigeant change, concrètement",
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne promettons pas de pourcentage de performance : sur un coaching dirigeant, tout chiffre annoncé à l'avance est une invention. Voici en revanche les changements que les dirigeants accompagnés constatent, et que vous pouvez vérifier vous-même en cours de parcours.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "Le nombre de décisions qui remontent à vous diminue, et vous pouvez le nommer",
            "Vos arbitrages se prennent à un moment choisi, avec les éléments nécessaires",
            "Vos managers avancent sur les sujets qui leur reviennent sans validation intermédiaire",
            "Les désaccords se traitent en réunion, au lieu de se régler en bilatéral avec vous",
            "Vous retrouvez du temps de direction — celui que vous passiez à réparer des décisions différées",
            "Votre autodiagnostic de qualité de vie au travail, repris en fin de parcours, a bougé sur des points identifiés au départ",
          ],
        },
        {
          type: "encadre",
          titre: "Témoignages de dirigeants accompagnés",
          aFournir: true,
          texte:
            "[À fournir par le client] Trois témoignages nominatifs — prénom, fonction, secteur, taille d'entreprise — et deux cas concrets structurés situation de départ, intervention, résultat mesuré. C'est le premier levier de conversion de la page.",
        },
      ],
    },

    {
      label: "Périmètre",
      titre: "Coach de dirigeant, formateur ou thérapeute : ce que ce parcours n'est pas",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Le mot « coaching » recouvre des pratiques très différentes, et chaque coach de dirigeant a sa manière de travailler. Autant dire tout de suite où se situe notre accompagnement dirigeant, et ce qu'il ne prend pas en charge.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["Ce que ce n'est pas", "Ce que c'est"],
          lignes: [
            [
              "Une formation au management, avec un programme identique pour tous",
              "Un travail sur vos décisions réelles, dans votre entreprise, à partir de votre semaine",
            ],
            [
              "Une thérapie ou un suivi psychologique",
              "Un travail professionnel sur votre fonction de dirigeant, sans intrusion dans la sphère privée",
            ],
            [
              "Du coaching individuel isolé de l'entreprise",
              "Un parcours qui traite votre clarté puis le collectif, parce que l'un sans l'autre ne tient pas",
            ],
            [
              "Un audit assorti d'un rapport de recommandations",
              "Un accompagnement mené jusqu'à la mise en œuvre, sans livrable qui remplace l'action",
            ],
            [
              "Une mission qui crée une dépendance au consultant",
              "Un parcours dont le point de sortie est votre autonomie de décision",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Si votre besoin relève réellement d'un suivi psychologique, nous vous le dirons au premier échange et nous ne prendrons pas la mission.",
        },
      ],
    },

    {
      label: "Déroulé",
      titre: "Comment se déroule votre coaching dirigeant à Toulouse, et ce qu'il engage",
      large: true,
      frise: true,
      blocs: [
        {
          type: "liste",
          items: [
            "**Prise de contact, 30 minutes.** Un échange gratuit et sans engagement, pour qualifier la situation et vérifier que le nœud est bien chez vous.",
            "**Diagnostic flash de votre situation.** Un point de départ daté, que nous reprenons plus tard pour mesurer ce qui a bougé.",
            "**Proposition sur-mesure.** Périmètre, format et tarif par écrit. Rien ne démarre sans votre accord.",
            "**Étape 01 Aligner.** Coaching individuel, construit par trimestre, avec un nombre de séances défini selon vos besoins.",
            "**Étape 02 Coopérer.** Cercles d'avancée de 6 à 8 personnes, sessions de 3 h sur 3 mois, en présentiel ou en visio.",
            "**Point de sortie.** Bilan des décisions redistribuées, et décision sur la suite — qui vous appartient.",
          ],
        },
        { type: "tarifs", offre: "dirigeant" },
        {
          type: "p",
          texte:
            "Chaque étape dure environ trois mois : vous décidez de poursuivre étape par étape, pas d'un bloc. Le premier échange de 30 minutes et le diagnostic flash ne vous engagent à rien.",
        },
        {
          type: "p",
          texte:
            "Le coaching se poursuit parfois par une mission de [conseil en organisation de l'entreprise](/transformation-entreprise/), quand le travail sur votre pilotage met au jour un problème de structure — mais ce n'est jamais un passage obligé, et c'est vous qui le décidez.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Combien coûte un coaching dirigeant ?",
      r: [offre("dirigeant").reponse],
    },
    {
      q: "Combien de temps dure un coaching dirigeant ?",
      r: [
        "De 3 à 6 mois. L'étape 01 Aligner se suit en coaching individuel, par trimestre ; l'étape 02 Coopérer se déroule en cercles d'avancée de 3 heures sur 3 mois, en groupe de 6 à 8 personnes, en présentiel ou en visio.",
        "La durée dépend surtout du nombre de personnes que vous souhaitez embarquer dans la seconde étape. Nous la fixons dans la proposition écrite, après le premier échange.",
      ],
    },
    {
      q: "Êtes-vous coach de dirigeant ou consultant ?",
      r: [
        "Les deux, et c'est délibéré. La première étape relève du coaching de dirigeant : nous travaillons votre manière de décider, sans nous substituer à vous. La seconde relève du conseil en organisation : nous installons des modes de coopération dans votre équipe.",
        "Un accompagnement purement individuel laisserait intact le réflexe de vos équipes de vous faire valider ; un travail uniquement collectif buterait sur un dirigeant qui n'a pas clarifié ses priorités.",
      ],
    },
    {
      q: "Mes équipes doivent-elles être impliquées ?",
      r: [
        "Pas pour l'étape 01, qui vous concerne seul — en coaching individuel, jamais avec vos propres équipes — et reste confidentielle. Pour l'étape 02, oui : les cercles d'avancée réunissent 6 à 8 personnes de votre encadrement, et c'est précisément là que la co-responsabilité s'installe.",
        "Vous choisissez les participants. Nous vous aidons à composer le groupe lors du cadrage.",
      ],
    },
    {
      q: "Ce que je vous dis reste-t-il confidentiel ?",
      r: [
        "Oui. Le contenu des séances individuelles ne sort pas de la séance, y compris vis-à-vis de vos associés et de votre équipe. Ce qui circule vers le collectif est décidé avec vous, explicitement.",
        "Le premier échange est lui aussi confidentiel, qu'il débouche ou non sur une mission.",
      ],
    },
    {
      q: "Intervenez-vous en dehors de Toulouse ?",
      r: [
        "Notre coaching professionnel s'exerce d'abord à Toulouse, en Haute-Garonne et en Occitanie, où nous nous déplaçons sur site. Nous intervenons au-delà sur recommandation, avec une part de séances à distance.",
        "Les cercles d'avancée se tiennent en présentiel ou en visio, selon ce qui convient le mieux au groupe.",
      ],
    },
    {
      q: "Que se passe-t-il après le premier échange ?",
      r: [
        "Vous recevez une proposition écrite : périmètre, jalons, format, tarif. Rien ne démarre sans votre accord. Si nous estimons que votre situation relève d'autre chose que d'un coaching dirigeant, nous vous le disons à ce moment-là.",
      ],
    },
  ],

  bascule: {
    titre: "Et si le nœud n'est pas chez vous ?",
    texte:
      "Si votre pilotage est clair et que c'est la structure qui ne suit plus la croissance, c'est l'autre parcours qu'il faut regarder : il traite le fonctionnement réel de l'organisation, ses chantiers prioritaires et son autonomie, sur 6 à 12 mois.",
    href: "/transformation-entreprise/",
    ancre: "Découvrir notre conseil en organisation",
  },
};
