import type { PagePilier } from "@/lib/content/pilier";

/**
 * Silo 1 — Accompagnement du dirigeant (master § 3).
 * Intention propriétaire : « accompagnement / coaching dirigeant PME ».
 * Couvre les étapes 01 Aligner et 02 Coopérer.
 *
 * Cette page ne doit PAS reprendre le signal « équipe de direction externalisée » :
 * il appartient à la home, qui le cannibaliserait sinon (master § 4).
 */
export const pilierDirigeant: PagePilier = {
  href: "/transformation-dirigeant/",
  fil: "Transformation du dirigeant",
  accent: "qvt",

  // « Accompagnement dirigeant PME Toulouse » = 38 + 18 = 56 / 60
  metaTitle: "Accompagnement dirigeant PME Toulouse",
  // 149 / 150
  metaDescription:
    "Accompagnement de dirigeants de PME et ETI à Toulouse : retrouver la clarté, décider sans urgence, installer la coopération. Premier échange gratuit.",
  nomService: "Accompagnement du dirigeant de PME et d'ETI",

  h1: "Accompagnement du dirigeant de PME : retrouver de la clarté",
  lede:
    "Vous dirigez une PME ou une ETI, et vous portez seul l'essentiel des décisions. L'accompagnement du dirigeant travaille d'abord votre clarté, puis la maturité du collectif autour de vous — jusqu'à ce que les décisions cessent de toutes remonter à vous.",

  essentiel: {
    reponse:
      "L'accompagnement du dirigeant d'Un Seul Souffle s'adresse aux dirigeantes et dirigeants de PME et d'ETI de 10 à 250 salariés qui décident dans l'urgence et délèguent mal. Il se déroule en deux étapes — Aligner, pour retrouver de la clarté stratégique, puis Coopérer, pour installer la co-responsabilité — et prend la forme d'un abonnement mensuel à partir de 112 € par mois, avec quatre sessions collectives en visio chaque mois. Un conseiller référent suit votre parcours. Les renforts individuels, coaching et autodiagnostic de qualité de vie au travail, s'ajoutent seulement si vous en avez besoin. Ce n'est ni une formation au management, ni une thérapie.",
    points: [
      "Pour qui : dirigeant de PME ou d'ETI, 10 à 250 salariés, quand le nœud est chez vous et non dans l'organisation",
      "Tarif : à partir de 112 € par mois",
      "Format de base : abonnement mensuel, 4 sessions collectives en visio par mois, webinaires et replay",
      "Renforts optionnels : coaching individuel, autodiagnostic de qualité de vie au travail",
      "Étapes couvertes : 01 Aligner et 02 Coopérer",
      "Zone : Toulouse, Haute-Garonne, Occitanie — sessions collectives à distance",
      "Premier échange : 30 minutes, gratuit et sans engagement",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "À qui s'adresse l'accompagnement du dirigeant",
      blocs: [
        {
          type: "p",
          texte:
            "Cet accompagnement s'adresse au dirigeant dont l'entreprise fonctionne — parfois même très bien — mais qui sent que tout repose sur lui. Le chiffre d'affaires est là, les clients sont satisfaits, les équipes sont compétentes. Et pourtant, chaque décision non routinière finit sur votre bureau.",
        },
        {
          type: "p",
          texte:
            "**Trois signes suffisent à reconnaître la situation.** Vous portez tout, et vous décidez dans l'urgence plutôt qu'au moment choisi. Vous déléguez mal, et vos équipes attendent votre feu vert avant d'avancer. La charge mentale entame votre clarté de décision, et vous vous en rendez compte sans parvenir à inverser la pente.",
        },
        {
          type: "p",
          texte:
            "Si ces trois phrases décrivent votre semaine, le nœud est chez vous. C'est une bonne nouvelle : c'est le point le plus rapide à faire bouger. Si en revanche vous vous reconnaissez surtout dans une structure qui ne suit plus la croissance, c'est la [transformation de l'entreprise](/transformation-entreprise/) qu'il faut regarder.",
        },
        {
          type: "liste",
          items: [
            "Vous êtes dirigeant, dirigeante, ou membre d'un binôme de direction",
            "Votre entreprise compte de 10 à 250 salariés — industrie, agroalimentaire, services, distribution",
            "Vous n'avez personne, en interne, à qui parler de vos arbitrages sans conséquence politique",
            "Vous avez déjà essayé de déléguer, et ce qui est délégué vous revient",
          ],
        },
      ],
    },

    {
      label: "Le vrai blocage",
      titre: "Ce n'est pas la charge de travail, c'est la charge de décision",
      blocs: [
        {
          type: "p",
          texte:
            "Un dirigeant saturé décrit presque toujours son problème en heures : trop de réunions, trop de dossiers, pas assez de temps. C'est le symptôme, pas la cause. **Le point de blocage réel, c'est le nombre de décisions qui ne peuvent être prises que par vous.**",
        },
        {
          type: "p",
          texte:
            "Tant que ce nombre reste élevé, aucun gain de productivité ne vous libère : le temps que vous récupérez se remplit immédiatement d'autres arbitrages. Vous pouvez recruter un adjoint, acheter un outil de gestion de projet, bloquer vos matinées — la file d'attente se reconstitue, parce que c'est l'organisation des décisions qui la produit, pas votre agenda.",
        },
        {
          type: "p",
          texte:
            "S'y ajoute un effet moins visible et plus coûteux : la qualité de vos arbitrages baisse. Une décision prise en fin de journée, entre deux urgences, sans avoir pris le temps de la poser, est une décision que vous reprendrez. La surcharge ne vous fait pas seulement perdre du temps, elle vous fait produire du travail à refaire — pour vous et pour vos équipes.",
        },
        {
          type: "p",
          texte:
            "C'est aussi le blocage dont on parle le moins. Un dirigeant évoque volontiers sa trésorerie ou son carnet de commandes ; il évoque rarement le fait qu'il n'arrive plus à trancher. L'accompagnement commence par rendre ce sujet discutable.",
        },
      ],
    },

    {
      label: "Étape 01",
      titre: "Aligner : remettre de la clarté dans la direction",
      blocs: [
        { type: "etape", n: "01" },
        {
          type: "p",
          texte:
            "Le travail commence par un état des lieux honnête de votre manière de diriger : ce que vous décidez, ce que vous devriez déléguer, ce qui vous revient sans raison. Nous partons de votre semaine réelle, pas d'un modèle de management.",
        },
        {
          type: "p",
          texte:
            "Vient ensuite la hiérarchisation. La plupart des dirigeants que nous accompagnons n'ont pas trop peu de priorités : ils en ont douze, toutes urgentes, et aucune ne peut être abandonnée sans arbitrage explicite. Ce travail d'élagage est inconfortable, et c'est celui qui produit le plus d'effet immédiat.",
        },
        {
          type: "p",
          texte:
            "**Le format de base est un abonnement mensuel, à partir de 112 € par mois** : quatre sessions collectives en visio chaque mois, avec des webinaires, des modules et des outils de lecture disponibles en replay. Vous travaillez aux côtés d'autres dirigeants qui traversent la même chose — ce qui, pour un dirigeant isolé, fait déjà une partie du travail.",
        },
        {
          type: "p",
          texte:
            "Deux renforts individuels existent, et **ils ne sont ajoutés que si vous en avez besoin** : un coaching individuel pour prendre du recul et retrouver une capacité de décision sereine, et un autodiagnostic de qualité de vie au travail qui évalue votre niveau de surcharge, identifie les facteurs de tension et repère vos leviers d'équilibre. Vous n'êtes pas obligé de commencer par là.",
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
            "Elle se conduit en **cercles d'avancée** : des groupes de 6 à 8 personnes — dirigeants, managers, entrepreneurs — en sessions collectives de trois heures, sur trois mois. Chaque cercle traite des situations réelles, apportées par les participants, pas des cas d'école. On y travaille la façon dont une décision se prend, qui l'assume, et ce qui se passe quand elle se révèle mauvaise.",
        },
        {
          type: "p",
          texte:
            "Le sujet de fond est presque toujours le même : la co-responsabilité n'a jamais été installée. Les rôles existent sur l'organigramme, mais personne n'a le droit explicite de se tromper. Tant que ce droit n'est pas posé, remonter au dirigeant reste, pour un manager, la décision la plus rationnelle. L'accompagnement rend ce calcul visible et le modifie.",
        },
        {
          type: "p",
          texte:
            "Cette étape est portée par Muriel Saffroy, associée fondatrice, sur le pilier organisation et coopération. Quand la coopération bute sur la charge et l'énergie des équipes plus que sur les rôles, le pilier équilibre et qualité de vie au travail prend le relais — voir [notre équipe](/notre-equipe/).",
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
      titre: "Ce que l'accompagnement change, concrètement",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne promettons pas de pourcentage de performance : sur ce type de travail, tout chiffre annoncé à l'avance est une invention. Voici en revanche les changements que les dirigeants accompagnés constatent, et que vous pouvez vérifier vous-même en cours de parcours.",
        },
        {
          type: "liste",
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
      titre: "Coaching, formation, thérapie : ce que cet accompagnement n'est pas",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot « accompagnement » recouvre des pratiques très différentes. Autant dire tout de suite où se situe la nôtre, et ce qu'elle ne prend pas en charge.",
        },
        {
          type: "tableau",
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
      titre: "Comment se déroule un parcours, et ce qu'il engage",
      blocs: [
        {
          type: "liste",
          items: [
            "**Prise de contact, 30 minutes.** Un échange gratuit et sans engagement, pour qualifier la situation et vérifier que le nœud est bien chez vous.",
            "**Diagnostic flash de votre situation.** Un point de départ daté, que nous reprenons plus tard pour mesurer ce qui a bougé.",
            "**Proposition sur-mesure.** Périmètre, format et tarif par écrit. Rien ne démarre sans votre accord.",
            "**Étape 01 Aligner.** Abonnement mensuel, 4 sessions collectives en visio par mois, webinaires et replay. Renforts individuels seulement si nécessaire.",
            "**Étape 02 Coopérer.** Cercles d'avancée de 6 à 8 personnes, sessions de 3 h sur 3 mois.",
            "**Point de sortie.** Bilan des décisions redistribuées, et décision sur la suite — qui vous appartient.",
          ],
        },
        {
          type: "tableau",
          entetes: ["Ce que vous engagez", "Ce que cela couvre"],
          lignes: [
            ["À partir de 112 € par mois", "L'abonnement mensuel : 4 sessions collectives en visio, webinaires, modules et outils en replay"],
            ["Sur devis, en option", "Le coaching individuel et l'autodiagnostic de qualité de vie au travail, ajoutés seulement si vous en avez besoin"],
            ["Trois mois par étape", "La durée d'un jalon. Vous décidez de poursuivre étape par étape, pas d'un bloc"],
            ["Zéro au premier échange", "Les 30 minutes de prise de contact et le diagnostic flash"],
          ],
        },
        {
          type: "p",
          texte:
            "L'accompagnement se poursuit parfois par une [transformation de l'entreprise](/transformation-entreprise/), quand le travail sur votre pilotage met au jour un problème de structure — mais ce n'est jamais un passage obligé, et c'est vous qui le décidez.",
        },
        {
          type: "encadre",
          titre: "Tarif et durée totale à confirmer avant mise en ligne",
          aFournir: true,
          texte:
            "[À confirmer avec la cliente] Le tarif de 112 € par mois et la cadence « 4 étapes de 3 mois » proviennent de la page actuelle du site. Vérifier qu'ils sont toujours d'actualité, préciser ce que couvre exactement l'abonnement, et trancher la durée totale du parcours dirigeant avant publication.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Combien de temps dure un accompagnement de dirigeant ?",
      r: [
        "De 3 à 6 mois. L'étape 01 Aligner se conduit en parcours individuel jalonné ; l'étape 02 Coopérer se déroule en cercles d'avancée de 3 heures sur 3 mois, en groupe de 6 à 8 personnes.",
        "La durée dépend surtout du nombre de personnes que vous souhaitez embarquer dans la seconde étape. Nous la fixons dans la proposition écrite, après le premier échange.",
      ],
    },
    {
      q: "Est-ce du coaching ou du conseil ?",
      r: [
        "Les deux, et c'est délibéré. La première étape relève du coaching : nous travaillons votre manière de décider, sans nous substituer à vous. La seconde relève du conseil en organisation : nous installons des modes de coopération dans votre équipe.",
        "Un accompagnement purement individuel laisserait intact le réflexe de vos équipes de vous faire valider ; un travail uniquement collectif buterait sur un dirigeant qui n'a pas clarifié ses priorités.",
      ],
    },
    {
      q: "Mes équipes doivent-elles être impliquées ?",
      r: [
        "Pas pour l'étape 01, qui est individuelle et confidentielle. Pour l'étape 02, oui : les cercles d'avancée réunissent 6 à 8 personnes de votre encadrement, et c'est précisément là que la co-responsabilité s'installe.",
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
        "Notre zone d'intervention principale est Toulouse, la Haute-Garonne et l'Occitanie, où nous nous déplaçons sur site. Nous intervenons au-delà sur recommandation, avec une part de séances à distance.",
        "Les cercles d'avancée se tiennent en présentiel : c'est une condition de leur efficacité.",
      ],
    },
    {
      q: "Que se passe-t-il après le premier échange ?",
      r: [
        "Vous recevez une proposition écrite : périmètre, jalons, format, tarif. Rien ne démarre sans votre accord. Si nous estimons que votre situation relève d'autre chose que de notre accompagnement, nous vous le disons à ce moment-là.",
      ],
    },
  ],

  bascule: {
    titre: "Et si le nœud n'est pas chez vous ?",
    texte:
      "Si votre pilotage est clair et que c'est la structure qui ne suit plus la croissance, c'est l'autre parcours qu'il faut regarder : il traite le fonctionnement réel de l'organisation, ses chantiers prioritaires et son autonomie, sur 6 à 12 mois.",
    href: "/transformation-entreprise/",
    ancre: "Découvrir la transformation de l'entreprise",
  },
};
