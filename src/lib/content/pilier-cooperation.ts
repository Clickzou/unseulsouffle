import type { PagePilier } from "@/lib/content/pilier";

/**
 * Silo Organisation & coopération (master § 3). Référente : Muriel Saffroy, associée fondatrice.
 * Texte : celui de la cliente (« Page services Muriel Saffroy », retour du 04/10/2026),
 * réparti dans les rubriques des pages DAF externalisé et Stratégie commerciale.
 *
 * ANTI-CANNIBALISATION. « Conseil en organisation » et « audit organisationnel »
 * appartiennent à /transformation-entreprise/ (ETUDE_MOTS_CLES § 2). Cette page se
 * centre sur « organisation et coopération », « passer de l'expert au pilote » et le
 * dirigeant dont tout dépend ; elle cite /transformation-entreprise/ à ancre exacte,
 * sans viser sa requête en title ni en H1. Même règle pour « coaching dirigeant »,
 * propriété de /transformation-dirigeant/.
 *
 * Tarif décidé par l'agence : encadré texte, pas de bloc `tarifs` (réservé aux trois
 * offres de tarifs.ts). Seuls faits sur Muriel Saffroy : ceux de la cliente et sa
 * fiche dans `membres.ts` (accompagnement depuis 2017).
 */
export const pilierCooperation: PagePilier = {
  href: "/organisation-cooperation-toulouse/",
  fil: "Organisation & coopération",
  accent: "organisation",

  // « Organisation et coopération en PME, Toulouse » = 44 + 18 = 62 > 60 : version courte.
  // « Organisation et coopération, Toulouse » = 37 + 18 = 55 / 60
  metaTitle: "Organisation et coopération, Toulouse",
  metaDescription:
    "Organisation et coopération pour TPE et PME à Toulouse : rôles clairs, décisions au bon niveau, managers autonomes. Passer de l'expert au pilote.",
  nomService: "Accompagnement en organisation et coopération pour TPE et PME",

  h1: "Passer de l'expert au pilote : faire grandir l'entreprise sans tout faire reposer sur le dirigeant",
  lede:
    "Votre expertise a fait grandir votre entreprise. Elle ne doit pas devenir ce qui vous empêche de la piloter. Nous vous accompagnons pour clarifier les rôles, fluidifier les décisions et faire grandir l'autonomie de vos managers, afin que vous puissiez quitter progressivement l'opérationnel sans perdre la maîtrise de votre entreprise. Muriel Saffroy, experte référente organisation et coopération, intervient auprès des TPE et PME de Toulouse et d'Occitanie.",

  essentiel: {
    reponse:
      "L'accompagnement Organisation & coopération d'Un Seul Souffle s'adresse aux dirigeants de TPE et PME de 10 à 250 salariés dont l'entreprise repose encore trop sur eux. Il les aide à passer de l'expert au pilote : clarifier les rôles et les responsabilités, faire prendre les décisions au bon niveau, développer l'autonomie des managers et la coopération entre les équipes et les métiers. Il peut commencer par un diagnostic organisationnel, puis se poursuit avec les personnes concernées jusqu'à ce que les nouvelles façons de décider et de coopérer deviennent des pratiques. L'experte référente est Muriel Saffroy, associée fondatrice du cabinet : plus de 20 ans d'expérience dans l'industrie, elle accompagne dirigeants, managers et équipes depuis 2017. L'intervention démarre à partir de 2 jours, 1 400 € HT minimum, à Toulouse et en Occitanie.",
    points: [
      "Pour qui : dirigeants de TPE et PME de 10 à 250 salariés",
      "Référente : Muriel Saffroy, associée fondatrice, plus de 20 ans dans l'industrie",
      "Ce que ça couvre : rôles, décisions, délégation, CODIR, coopération entre métiers",
      "Ce que ça n'est pas : un nouvel organigramme imposé de l'extérieur",
      "Tarif : à partir de 2 jours, 1 400 € HT minimum",
      "Zone : Toulouse, Haute-Garonne, Occitanie",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "Votre entreprise grandit, mais tout continue de passer par vous",
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Vous êtes devenu expert de votre métier, de votre production, de vos clients ou de votre entreprise. Vous connaissez les dossiers, les personnes, les problèmes à résoudre. Alors, naturellement, les décisions remontent vers vous.",
        },
        {
          type: "p",
          texte:
            "**Votre expertise a permis à l'entreprise de grandir. Elle peut maintenant devenir ce qui l'empêche de changer d'échelle.** Nous intervenons lorsque l'organisation devient trop dépendante du dirigeant, lorsque les rôles et les décisions manquent de clarté, ou lorsque les équipes ont du mal à coopérer efficacement.",
        },
        {
          type: "p",
          texte:
            "Notre objectif : vous permettre de quitter progressivement le rôle d'expert qui sait et résout tout pour prendre pleinement votre rôle de pilote.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "Vous arbitrez",
            "Vous validez",
            "Vous répondez aux urgences",
            "Vous coordonnez les équipes",
            "Vous reprenez parfois les sujets que vous aviez pourtant délégués",
          ],
        },
      ],
    },

    {
      label: "La confusion à lever",
      titre: "Le problème vient-il des personnes… ou de l'organisation ?",
      blocs: [
        {
          type: "p",
          texte:
            "Une équipe peut être compétente et pourtant ne pas fonctionner efficacement. Un manager peut sembler manquer d'autonomie alors que les décisions restent en réalité centralisées. Un conflit peut sembler être un problème de personnalité alors qu'il révèle une interface mal définie. Une personne peut être surchargée parce que son rôle, ses responsabilités ou ses priorités ne sont pas suffisamment clairs.",
        },
        {
          type: "p",
          texte:
            "C'est pourquoi nous ne cherchons pas uniquement « qui pose problème ? ». **Nous regardons comment le système fonctionne :**",
        },
        {
          type: "liste",
          items: [
            "qui décide ;",
            "qui fait ;",
            "qui doit être informé ;",
            "où circulent les informations ;",
            "comment les métiers coopèrent ;",
            "où les décisions se bloquent ;",
            "quelles compétences sont disponibles ;",
            "quels savoirs restent dans les têtes ;",
            "quels sujets continuent de remonter au dirigeant.",
          ],
        },
      ],
    },

    {
      label: "Le travail",
      titre: "Remettre l'organisation au service du projet de l'entreprise",
      blocs: [
        { type: "p", texte: "Nous intervenons notamment sur :" },
        {
          type: "liste",
          items: [
            "la clarification des rôles et responsabilités ;",
            "les modes de décision ;",
            "la délégation et les niveaux d'autonomie ;",
            "le fonctionnement du CODIR et des équipes de management ;",
            "la coopération entre métiers et services ;",
            "les interfaces entre les fonctions ;",
            "la circulation de l'information ;",
            "le suivi des processus de A à Z ;",
            "la mobilisation des compétences et des savoirs du terrain ;",
            "le reporting et les indicateurs utiles au pilotage ;",
            "la résolution des tensions organisationnelles ;",
            "l'intelligence collective et les modes de coopération.",
          ],
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez",
          texte:
            "L'objectif n'est pas de produire un nouvel organigramme ou une procédure de plus : c'est que le fonctionnement réel de l'entreprise évolue. À l'issue de l'accompagnement, vous disposez de rôles plus clairs, de responsabilités mieux réparties, de décisions prises au bon niveau, de managers plus autonomes, d'une meilleure circulation de l'information, d'interfaces plus fluides entre les métiers, d'un processus suivi de bout en bout, d'indicateurs qui permettent réellement de piloter — et d'une organisation moins dépendante du dirigeant.",
        },
      ],
    },

    {
      label: "De l'expert au pilote",
      titre: "Ce qui change lorsque le dirigeant reprend de la hauteur",
      exergue:
        "Le passage de l'expert au pilote ne consiste pas à faire moins. Il consiste à ne plus être la personne par laquelle tout doit passer.",
      blocs: [
        {
          type: "p",
          texte:
            "Notre accompagnement aide le dirigeant à passer progressivement de « Si je ne m'en occupe pas, ça ne sera pas fait » à « **Je sais où je veux aller, qui porte quoi et comment je pilote l'ensemble.** »",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["L'expert", "Le pilote"],
          lignes: [
            ["L'expert connaît son métier", "Le pilote donne le cap"],
            [
              "L'expert résout les problèmes",
              "Le pilote crée les conditions pour qu'ils soient résolus au bon niveau",
            ],
            ["L'expert contrôle", "Le pilote donne des repères et suit les bons indicateurs"],
            ["L'expert détient le savoir", "Le pilote fait grandir les compétences autour de lui"],
            ["L'expert intervient dans les détails", "Le pilote regarde les interactions entre les sujets"],
          ],
        },
        {
          type: "p",
          texte:
            "C'est là que l'entreprise commence réellement à gagner en autonomie. Lorsque le premier levier est la posture du dirigeant lui-même, ce travail se prolonge par un [coaching dirigeant](/transformation-dirigeant/).",
        },
      ],
    },

    {
      label: "Notre façon d'intervenir",
      titre: "Partir du réel pour transformer le fonctionnement",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne commençons pas par vous proposer une organisation théorique. Nous partons du terrain et observons ce qui se passe réellement, dans cet ordre :",
        },
        {
          type: "liste",
          items: [
            "diagnostic ;",
            "compréhension du fonctionnement ;",
            "priorisation ;",
            "mise en œuvre ;",
            "montée en autonomie.",
          ],
        },
        {
          type: "p",
          texte:
            "L'accompagnement peut commencer par un diagnostic organisationnel permettant d'identifier les blocages, les dépendances, les ruptures dans les flux d'information et les leviers prioritaires. Puis nous travaillons avec les personnes concernées pour faire évoluer concrètement les modes de fonctionnement.",
        },
        {
          type: "p",
          texte:
            "Parce qu'une organisation ne change pas parce qu'on lui a dessiné un nouvel organigramme. **Elle change lorsque les personnes changent leur manière de décider, de coopérer et de piloter.**",
        },
      ],
    },

    {
      label: "L'approche",
      titre: "L'organisation ne fonctionne jamais sans les personnes qui la font vivre",
      blocs: [
        {
          type: "p",
          texte:
            "Une approche à la croisée de l'organisation et de l'humain. Muriel Saffroy associe l'expérience du terrain industriel, l'organisation, le coaching, l'intelligence relationnelle et la lecture systémique.",
        },
        {
          type: "p",
          texte:
            "**C'est cette combinaison qui permet de travailler simultanément sur le fonctionnement de l'entreprise et sur la manière dont les personnes y prennent leur place.**",
        },
      ],
    },

    {
      label: "Les signes",
      titre: "5 signes que votre organisation repose encore trop sur vous",
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Aucun de ces signes ne dit que vos équipes manquent de compétence. Ils disent que le fonctionnement de l'entreprise continue de vous placer au centre.",
        },
        {
          type: "encadre",
          titre: "Le résultat recherché",
          texte:
            "Passer de « tout doit passer par moi » à « chacun sait ce qu'il a à décider et à porter ».",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Toutes les décisions importantes remontent jusqu'à vous.** Même lorsque vos managers pourraient décider, vous êtes régulièrement sollicité pour arbitrer, valider ou trancher.",
            "**Vous avez délégué des responsabilités, mais pas complètement les décisions.** Les missions sont réparties, mais dès qu'une situation sort du cadre habituel, tout revient vers vous.",
            "**Vous avez des managers compétents, mais ils ne prennent pas toute leur place.** Ils savent faire leur métier, mais leur autonomie reste limitée par les habitudes, les circuits de décision ou le fonctionnement collectif.",
            "**Les mêmes problèmes reviennent malgré les réunions et les plans d'action.** Vous avez déjà cherché des solutions, mais les difficultés réapparaissent parce que le problème se situe peut-être moins chez les personnes que dans la manière dont le système fonctionne.",
            "**Vous êtes devenu le point de passage obligé entre les métiers.** Production, commercial, finance, RH, qualité… chacun vient chercher votre arbitrage lorsque les interfaces entre les fonctions ne fonctionnent plus suffisamment bien.",
          ],
        },
      ],
    },

    {
      label: "Quand faire appel à Muriel",
      titre: "Quand faire appel à Muriel Saffroy ?",
      blocs: [
        { type: "p", texte: "Vous pouvez être concerné si :" },
        {
          type: "liste",
          items: [
            "vous êtes encore indispensable dans trop de décisions ;",
            "vos managers vous sollicitent pour arbitrer des sujets qu'ils devraient pouvoir traiter eux-mêmes ;",
            "les responsabilités sont floues ;",
            "les services travaillent chacun de leur côté ;",
            "les informations circulent mal ;",
            "les mêmes problèmes reviennent régulièrement ;",
            "les projets avancent difficilement malgré des collaborateurs compétents ;",
            "vous avez grandi plus vite que votre organisation ;",
            "vous préparez une nouvelle étape de développement ;",
            "vous souhaitez transmettre davantage de responsabilités sans perdre la maîtrise ;",
            "vous voulez passer du pilotage dans l'urgence au pilotage par le cap et les priorités.",
          ],
        },
        {
          type: "p",
          texte:
            "Si vous hésitez sur la nature du blocage, le [diagnostic d'entreprise](/diagnostic/) en ligne vous aide à le situer en quelques minutes.",
        },
      ],
    },

    {
      label: "Une intervention adaptée",
      titre: "Conseil, diagnostic ou accompagnement dans la durée",
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Selon votre situation, l'intervention peut prendre différentes formes. **L'objectif n'est pas de créer une dépendance à l'accompagnement. C'est précisément l'inverse : rendre l'organisation progressivement plus autonome.**",
        },
        {
          type: "encadre",
          titre: "Tarif",
          texte:
            "À partir de 2 jours d'intervention, 1 400 € HT minimum. Le format et la durée sont définis selon votre situation, votre niveau de maturité organisationnelle et les enjeux identifiés.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Diagnostic organisationnel.** Pour comprendre où se situent les blocages et identifier les priorités d'action.",
            "**Accompagnement du dirigeant.** Pour prendre de la hauteur, clarifier son rôle et passer progressivement d'expert à pilote.",
            "**Accompagnement des managers.** Pour développer leur autonomie, leur capacité de décision et leur coopération.",
            "**Transformation organisationnelle.** Pour revoir les rôles, les responsabilités, les interfaces et les modes de fonctionnement.",
            "**Accompagnement terrain.** Pour faire vivre les changements dans la durée et vérifier qu'ils deviennent réellement des pratiques.",
          ],
        },
      ],
    },

    {
      label: "Votre référente",
      titre: "Muriel Saffroy, experte référente organisation et coopération",
      blocs: [
        {
          type: "referent",
          slug: "muriel-saffroy",
          texte: [
            "Plus de 20 ans d'expérience dans l'industrie, et l'accompagnement de dirigeants, managers et équipes depuis 2017.",
            "Muriel associe son expérience opérationnelle du terrain industriel à une approche de coaching, d'intelligence relationnelle et de systémique.",
            "Sa conviction : une entreprise devient réellement autonome lorsque son dirigeant n'est plus obligé d'être partout.",
          ],
        },
        {
          type: "p",
          texte:
            "Votre interlocutrice reste la même du lancement de la mission à la fin de l'intervention. Le périmètre est arrêté avec vous et écrit dans la proposition. Si le sujet dépasse l'organisation — des marges mal connues, une stratégie commerciale à revoir, une production qui ne suit pas —, elle peut faire appel à l'une des cinq autres expertises du cabinet, sur ce point précis et avec votre accord. Quand c'est l'organisation de toute l'entreprise qui doit être repensée, voir notre [conseil en organisation](/transformation-entreprise/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Est-ce un accompagnement de coaching ou de conseil ?",
      r: [
        "Les deux peuvent être mobilisés, mais l'objectif reste le même : faire évoluer concrètement le fonctionnement de l'entreprise.",
        "Le conseil permet d'analyser et de structurer. Le coaching permet de faire évoluer les postures et les comportements. L'approche systémique permet de comprendre les interactions entre les deux.",
      ],
    },
    {
      q: "Est-ce que vous intervenez uniquement auprès du dirigeant ?",
      r: [
        "Non. Selon la situation, nous pouvons travailler avec le dirigeant, les managers, le CODIR ou les équipes concernées.",
      ],
    },
    {
      q: "Mon problème semble venir d'une personne. Pouvez-vous intervenir ?",
      r: [
        "Oui. Mais nous allons d'abord regarder ce que cette situation révèle du fonctionnement collectif.",
        "Un comportement individuel peut être la conséquence d'un rôle mal défini, d'une décision mal répartie ou d'une interface qui ne fonctionne pas.",
      ],
    },
    {
      q: "Est-ce que vous allez nous imposer une nouvelle organisation ?",
      r: [
        "Non. Notre rôle est de vous aider à comprendre votre fonctionnement, à identifier les leviers et à construire avec les personnes concernées une organisation qui soit réellement applicable.",
      ],
    },
    {
      q: "Combien de temps faut-il pour obtenir des résultats ?",
      r: [
        "Les premiers changements peuvent être identifiés dès le diagnostic. Leur appropriation et leur inscription dans le fonctionnement quotidien demandent ensuite un accompagnement adapté à la situation.",
      ],
    },
    {
      q: "Combien coûte un accompagnement en organisation et coopération ?",
      r: [
        "L'intervention démarre à partir de 2 jours, 1 400 € HT minimum. Le format et la durée sont définis selon votre situation, votre niveau de maturité organisationnelle et les enjeux identifiés.",
      ],
    },
  ],

  bascule: {
    titre: "Si le nœud est chez le dirigeant lui-même",
    texte:
      "Parfois, l'organisation n'est pas le premier levier : c'est la façon dont le dirigeant décide, délègue ou porte la charge qui doit évoluer d'abord. Dans ce cas, le travail commence par le parcours d'accompagnement du dirigeant — sur le périmètre que vous décidez.",
    href: "/transformation-dirigeant/",
    ancre: "Découvrir le parcours dirigeant",
  },
};
