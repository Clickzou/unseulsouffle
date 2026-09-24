import type { Article } from "@/lib/content/article";

/**
 * Silo 4 — Coopération, QVT & intelligence collective (master § 3).
 * Requête : « intelligence collective en entreprise », longue traîne de
 * « intelligence collective » (1 600/mois, KD 88, trop disputée pour une page).
 * Pilier : page Muriel Saffroy.
 */
export const article: Article = {
  slug: "intelligence-collective-en-entreprise",

  motCle: "intelligence collective en entreprise (longue traîne de « intelligence collective », 1 600/mois, KD 88)",
  motsClesSecondaires: [
    "intelligence collective",
    "outils d'intelligence collective",
    "intelligence collective définition",
  ],

  // 37 + 18 = 55 / 60
  metaTitle: "Intelligence collective en entreprise",
  metaDescription:
    "Intelligence collective en entreprise : définition, conditions, outils pour vos réunions et votre codir, erreurs à éviter. Pour dirigeants de PME.",

  h1: "Intelligence collective en entreprise : faire décider une équipe mieux que chacun seul",
  chapo:
    "L'intelligence collective en entreprise, c'est la capacité d'une équipe à produire de meilleures décisions que ses membres pris isolément. Elle ne dépend pas du niveau de chacun : la recherche montre qu'elle tient surtout à la façon dont le groupe se parle. Pour un dirigeant de PME, la bonne nouvelle est là. Elle ne s'achète pas en recrutant des profils brillants, elle s'installe par des conditions précises : des rôles clairs, une règle de décision connue de tous, et assez de sécurité pour que les désaccords se disent en réunion plutôt qu'après.",

  essentiel: {
    reponse:
      "L'intelligence collective en entreprise désigne la capacité d'un groupe de travail à réussir, ensemble, une grande variété de tâches mieux que ne le laisserait prévoir la somme de ses membres. Une étude publiée dans Science en 2010 montre que cette capacité est peu liée à l'intelligence moyenne ou maximale des membres, et davantage à la répartition équilibrée de la parole et à la sensibilité sociale du groupe. En PME, elle repose sur trois conditions : des rôles clairs, une règle de décision annoncée avant la discussion, et la sécurité psychologique, c'est-à-dire la conviction partagée qu'on peut contredire sans risque.",
    points: [
      "Définition : la performance d'un groupe sur des tâches variées, distincte du talent individuel de ses membres",
      "Cause fréquente d'échec : une équipe discute surtout de ce que tout le monde sait déjà",
      "Trois conditions : rôles clairs, règle de décision explicite, sécurité psychologique",
      "Outils simples : réflexion écrite avant discussion, tour de parole, décision par consentement, pré-mortem, revue après action",
      "Mesure : des signes observables en réunion, pas un questionnaire d'ambiance",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Intelligence collective : définition, sans le jargon",
      blocs: [
        {
          type: "p",
          texte:
            "Le terme circule beaucoup, souvent associé à des ateliers de post-it et à des séminaires au vert. Sa définition la plus solide vient pourtant d'un travail de mesure. En 2010, une équipe de chercheurs du MIT et de Carnegie Mellon a fait travailler [699 personnes, en groupes de deux à cinq, sur une série de tâches variées](https://ofew.berkeley.edu/sites/default/files/evidence_for_a_collective_intelligence_factor_in_the_performance_of_human_groups_woolley_et_al.pdf). Les groupes qui réussissaient une tâche avaient tendance à réussir les autres. Les auteurs ont appelé ce facteur commun l'intelligence collective.",
        },
        {
          type: "h3",
          texte: "Ce que dit la recherche",
        },
        {
          type: "p",
          texte:
            "Le résultat le plus utile pour un dirigeant tient en une phrase : **ce facteur n'est pas fortement lié à l'intelligence moyenne ni à l'intelligence maximale des membres du groupe.** Mettre les meilleurs autour de la table ne suffit donc pas. Trois éléments ressortaient en revanche : la sensibilité sociale moyenne des participants, c'est-à-dire leur capacité à lire ce que ressentent les autres ; l'égalité dans la répartition des tours de parole ; et la proportion de femmes dans le groupe, un effet que les auteurs rattachent en grande partie à la sensibilité sociale.",
        },
        {
          type: "p",
          texte:
            "L'étude note aussi ce qui ne prédisait pas la performance collective : la cohésion du groupe, la motivation et la satisfaction de ses membres. Une équipe qui s'entend bien n'est pas, de ce seul fait, une équipe qui décide bien.",
        },
        {
          type: "h3",
          texte: "Ce que ce n'est pas",
        },
        {
          type: "p",
          texte:
            "L'intelligence collective n'est pas le consensus, ni la décision à l'unanimité, ni la disparition du chef. Un dirigeant peut trancher seul et bénéficier de l'intelligence collective, s'il a d'abord obtenu de son équipe toute l'information et tous les désaccords utiles. Ce n'est pas non plus une méthode d'animation : les outils aident, mais ils ne compensent pas une organisation où personne ne sait qui décide quoi.",
        },
        {
          type: "h3",
          texte: "Ce que cela veut dire dans une PME",
        },
        {
          type: "p",
          texte:
            "Dans une entreprise de 10 à 250 salariés, l'intelligence collective se joue dans quelques lieux précis : le comité de direction, la réunion d'équipe, la réunion de production ou de chantier, le projet transverse. C'est là qu'une information détenue par une seule personne doit remonter, et qu'un risque vu par un seul doit être dit. Chez Un Seul Souffle, ce sujet relève du pilier organisation et coopération, porté par [Muriel Saffroy](/muriel-saffroy/) : rôles, modes de décision et qualité de coopération entre les équipes.",
        },
      ],
    },

    {
      label: "Le problème",
      titre: "Pourquoi une équipe compétente décide mal ensemble",
      blocs: [
        {
          type: "p",
          texte:
            "Le scénario est familier. Vous réunissez cinq personnes expérimentées, chacune dans son domaine. La discussion est courtoise, la décision est prise dans l'heure. Trois mois plus tard, un problème surgit que quelqu'un, autour de la table, avait vu venir. Il ne l'a pas dit, ou l'a dit trop bas. Ce n'est pas un défaut de compétence. C'est un mécanisme de groupe, bien documenté.",
        },
        {
          type: "h3",
          texte: "Le groupe parle de ce que tout le monde sait déjà",
        },
        {
          type: "p",
          texte:
            "En 1985, deux psychologues américains ont montré que [la discussion de groupe tend à être dominée par l'information que les membres partagent avant la réunion, et par celle qui confirme leurs préférences](https://www.uni-muenster.de/imperia/md/content/psyifp/aeechterhoff/vorlesungkommunikation/stasser_titus_unsharedinfogroupdisc_jpsp1985.pdf). Dans leur expérience, chaque participant détenait une partie de l'information. Mis en commun, l'ensemble désignait clairement la meilleure option. Les groupes ont pourtant retenu celle que la majorité préférait au départ, et la discussion a entretenu les erreurs de jugement au lieu de les corriger.",
        },
        {
          type: "p",
          texte:
            "Transposé dans un codir, le constat est sévère : **l'information que seul le responsable qualité détient, ou que seule la comptable a vue passer, est précisément celle qui a le moins de chances d'être discutée.** Or c'est souvent celle qui aurait changé la décision.",
        },
        {
          type: "h3",
          texte: "Quelques voix occupent tout l'espace",
        },
        {
          type: "p",
          texte:
            "L'étude de 2010 citée plus haut mesurait la parole avec des badges portés par une partie des participants. Les groupes où quelques personnes dominaient la conversation obtenaient des résultats collectifs plus faibles que ceux où la parole circulait de façon plus égale. Dans une PME, la voix dominante est souvent celle du dirigeant, parfois celle du fondateur historique ou du commercial le plus ancien. Ce n'est pas une faute morale, c'est un poids : quand celui qui signe les fiches de paie parle en premier, les autres ajustent leur avis au sien.",
        },
        {
          type: "h3",
          texte: "Le désaccord coûte plus cher que le silence",
        },
        {
          type: "p",
          texte:
            "Contredire en réunion expose : on peut passer pour quelqu'un qui freine, qui ne joue pas collectif, ou qui n'a pas compris. Se taire ne coûte rien sur le moment. Tant que ce calcul reste favorable au silence, les objections se disent à la machine à café, en bilatéral avec vous, ou plus du tout. Le vrai sujet de l'intelligence collective en entreprise est donc de rendre la parole utile moins risquée que le silence.",
        },
      ],
    },

    {
      label: "Conditions",
      titre: "Les trois conditions qui rendent l'intelligence collective possible",
      blocs: [
        {
          type: "p",
          texte:
            "Les outils viennent après. Sans les trois conditions qui suivent, ils produisent des réunions plus animées, pas des décisions meilleures.",
        },
        {
          type: "h3",
          texte: "Des rôles clairs : qui propose, qui est consulté, qui tranche",
        },
        {
          type: "p",
          texte:
            "Une équipe ne peut pas bien délibérer si chacun ignore ce qui relève de lui. Pour chaque sujet récurrent, trois questions suffisent : qui porte le dossier et fait la proposition, qui doit être consulté avant la décision, qui tranche. Quand ces réponses sont écrites, la réunion cesse d'être un lieu où l'on découvre qui a la main. Elle devient un lieu où l'on améliore une proposition. C'est un chantier classique de [conseil en organisation](/transformation-entreprise/), et c'est souvent le premier.",
        },
        {
          type: "h3",
          texte: "Une règle de décision annoncée avant la discussion",
        },
        {
          type: "p",
          texte:
            "Beaucoup de réunions échouent parce que personne ne sait comment elles vont se conclure. Le dirigeant décidera-t-il après avoir entendu chacun ? Faut-il un accord de tous ? Le responsable du sujet tranchera-t-il ? Chaque règle se défend, selon l'enjeu et l'urgence. Ce qui ne se défend pas, c'est de laisser croire à un vote pour trancher seul ensuite. **Annoncer la règle avant d'ouvrir la discussion** évite ce malentendu, qui est l'un des plus destructeurs pour la confiance d'une équipe.",
        },
        {
          type: "h3",
          texte: "La sécurité psychologique",
        },
        {
          type: "p",
          texte:
            "La notion vient d'Amy Edmondson, professeure à Harvard. Elle la définit comme [une croyance partagée par les membres d'une équipe selon laquelle l'équipe est sûre pour la prise de risque interpersonnelle](https://dash.harvard.edu/entities/publication/13a7b031-0fdd-45ec-a7e0-2b80e2bc679f) : poser une question naïve, signaler une erreur, contredire le chef. Son étude porte sur 51 équipes d'une entreprise industrielle. La sécurité psychologique y est associée aux comportements d'apprentissage de l'équipe, et ces comportements font le lien avec la performance.",
        },
        {
          type: "p",
          texte:
            "La sécurité psychologique n'est ni la gentillesse ni l'absence d'exigence. C'est la certitude qu'une objection argumentée ne sera pas retenue contre celui qui la formule. Elle se construit par des actes répétés, surtout de la part du dirigeant : remercier la personne qui a signalé un problème, reconnaître en réunion qu'on s'est trompé, demander explicitement « qu'est-ce qui pourrait nous faire échouer ? ».",
        },
        {
          type: "encadre",
          titre: "Un cadre reconnu : les espaces de discussion sur le travail",
          texte:
            "L'Anact, l'agence publique qui travaille sur les conditions de travail, a formalisé ces principes dans ses [dix questions sur les espaces de discussion](https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf). Elle y cite, parmi les écueils des comités de direction et des réunions d'équipe, une logique descendante, un management qui recherche plus l'approbation que le vrai échange, et des décisions qui restent souvent sans suite.",
        },
      ],
    },

    {
      label: "Outils",
      titre: "Outils d'intelligence collective utilisables dès la prochaine réunion",
      blocs: [
        {
          type: "p",
          texte:
            "Les outils d'intelligence collective les plus efficaces sont rarement spectaculaires. Ils servent tous le même but : faire sortir l'information que chacun détient seul, et découpler l'avis de chacun de celui du dirigeant. En voici six, choisis parce qu'ils se mettent en place sans formation ni matériel.",
        },
        {
          type: "tableau",
          entetes: ["Outil", "Quand l'utiliser et comment"],
          lignes: [
            [
              "Réflexion écrite avant discussion",
              "Avant tout sujet important : trois minutes de silence, chacun note son avis et l'information qu'il pense être seul à avoir. On lit ensuite les notes avant de débattre. L'avis du dirigeant n'influence plus celui des autres.",
            ],
            [
              "Tour de parole, dirigeant en dernier",
              "Pour recueillir les avis sur une décision : chacun s'exprime à son tour, sans interruption, et la personne la plus haut placée parle en dernier. Simple, et directement lié à la répartition de la parole.",
            ],
            [
              "Décision par consentement",
              "Quand l'accord de tous est irréaliste mais qu'on veut éviter les blocages silencieux : la proposition est adoptée si personne n'a d'objection argumentée. Une objection doit dire en quoi la proposition nuit à l'objectif, pas seulement qu'on préférerait autre chose.",
            ],
            [
              "Pré-mortem",
              "Avant de lancer un projet validé : « Nous sommes dans un an, le projet a échoué. Pourquoi ? » Chacun écrit ses raisons. Le format rend légitime le fait de nommer un risque, puisque c'est la consigne.",
            ],
            [
              "Matrice des rôles de décision",
              "Pour les sujets récurrents qui reviennent sans cesse en codir : un tableau qui indique, pour chaque type de décision, qui propose, qui est consulté, qui tranche et qui est informé. À relire tous les trimestres.",
            ],
            [
              "Revue après action",
              "Après un projet, une crise ou une décision importante : ce qui était prévu, ce qui s'est passé, pourquoi l'écart, ce qu'on garde et ce qu'on change. On parle des faits et du fonctionnement, jamais des personnes.",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Choisir un outil selon le moment de la décision",
        },
        {
          type: "p",
          texte:
            "Ces outils ne s'emploient pas tous en même temps. La réflexion écrite et le tour de parole servent à ouvrir un sujet et à faire remonter l'information. La décision par consentement sert à conclure. Le pré-mortem intervient juste avant l'engagement, et la revue après action une fois le résultat connu. La matrice des rôles, elle, se construit une fois et évite de rouvrir sans cesse la même question : qui décide ici ?",
        },
        {
          type: "h3",
          texte: "Ce que les outils ne font pas",
        },
        {
          type: "p",
          texte:
            "Un outil appliqué dans une équipe où la contradiction est sanctionnée produit des avis écrits prudents et des objections qu'on ne lève pas. Il faut compter plusieurs réunions pour que chacun constate qu'une réserve exprimée n'a pas eu de conséquence pour son auteur. C'est à ce moment-là, et pas avant, que les outils commencent à rapporter.",
        },
      ],
    },

    {
      label: "Codir",
      titre: "Appliquer l'intelligence collective en comité de direction",
      blocs: [
        {
          type: "p",
          texte:
            "Le comité de direction est le lieu où l'intelligence collective d'une PME se gagne ou se perd. C'est aussi celui où le poids du dirigeant est le plus fort. Voici un déroulé type pour un sujet de décision, à adapter à votre rythme.",
        },
        {
          type: "h3",
          texte: "Avant la réunion : un sujet, un porteur, une question",
        },
        {
          type: "p",
          texte:
            "Chaque point de décision a un porteur, qui envoie une note courte au moins la veille : la question posée, les options envisagées, ce qu'il recommande. La question doit appeler une réponse. « Point sur le recrutement » n'est pas une question. « Recrutons-nous un deuxième chef d'atelier avant l'été ? » en est une. Le porteur indique aussi la règle de décision prévue.",
        },
        {
          type: "h3",
          texte: "Pendant la réunion : ouvrir large, fermer net",
        },
        {
          type: "liste",
          items: [
            "Le porteur rappelle la question et la règle de décision, sans refaire sa note",
            "Trois minutes de réflexion écrite : avis, risques, information que l'on pense être seul à détenir",
            "Tour de parole, le dirigeant en dernier",
            "Discussion centrée sur les désaccords et les informations nouvelles, pas sur ce qui fait déjà consensus",
            "Décision selon la règle annoncée, formulée à voix haute, avec un responsable et une échéance",
          ],
        },
        {
          type: "h3",
          texte: "Après la réunion : la décision écrite, et tenue",
        },
        {
          type: "p",
          texte:
            "Le compte rendu tient en trois lignes par sujet : ce qui a été décidé, par qui, pour quand. Une décision qui n'est pas écrite sera rediscutée. Une décision prise en codir puis défaite en bilatéral dans le bureau du dirigeant détruit en une fois la confiance que le reste du dispositif a mis des semaines à construire. **Si vous changez d'avis, dites-le en codir, et dites pourquoi.**",
        },
      ],
    },

    {
      label: "Erreurs",
      titre: "Les erreurs fréquentes qui tuent l'intelligence collective",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des échecs ne viennent pas d'un manque d'outils mais d'un décalage entre ce qu'on annonce et ce qu'on fait. Voici les plus courants.",
        },
        {
          type: "liste",
          items: [
            "**Consulter une décision déjà prise.** L'équipe le voit toujours, et apprend que sa parole ne compte pas. Mieux vaut annoncer une décision que simuler une concertation.",
            "**Confondre intelligence collective et consensus.** Chercher l'accord de tous sur chaque sujet épuise l'équipe et favorise les compromis mous. La plupart des décisions n'en ont pas besoin.",
            "**Parler en premier.** Le dirigeant qui donne son avis d'entrée obtient l'accord de son équipe, pas son intelligence.",
            "**Réserver les outils au séminaire annuel.** Une journée d'ateliers suivie d'une année de réunions inchangées renforce le cynisme. Les pratiques doivent entrer dans les réunions ordinaires.",
            "**Laisser les propositions sans réponse.** L'Anact le relève à propos des espaces de discussion : des décisions qui restent sans suite vident le dispositif de son sens. Chaque proposition mérite une réponse, même négative, et motivée.",
            "**Traiter les tensions interpersonnelles comme des questions d'organisation, ou l'inverse.** Un conflit entre deux personnes ne se règle pas par une matrice des rôles. Un flou de rôles ne se règle pas par une médiation.",
          ],
        },
        {
          type: "p",
          texte:
            "Quand les tensions tiennent davantage à la dynamique de l'équipe qu'aux règles de fonctionnement, le [coaching d'équipe](/infos-utiles/coaching-d-equipe/) est un format plus adapté qu'un travail sur l'organisation.",
        },
      ],
    },

    {
      label: "Mesurer",
      titre: "Comment savoir si l'intelligence collective fonctionne dans votre équipe",
      blocs: [
        {
          type: "p",
          texte:
            "Nous déconseillons de mesurer l'intelligence collective par un questionnaire d'ambiance. La recherche citée plus haut rappelle que cohésion et satisfaction ne prédisent pas la performance collective. Mieux vaut observer ce qui se passe en réunion et ce qui arrive aux décisions ensuite.",
        },
        {
          type: "h3",
          texte: "Les signes observables en réunion",
        },
        {
          type: "liste",
          items: [
            "Des désaccords s'expriment en séance, argumentés, y compris envers le dirigeant",
            "La parole ne se concentre pas sur deux ou trois personnes d'une réunion à l'autre",
            "Des informations nouvelles apparaissent en discussion et modifient parfois la proposition initiale",
            "Chaque décision sort avec un responsable et une échéance, dites à voix haute",
          ],
        },
        {
          type: "h3",
          texte: "Les signes observables après la réunion",
        },
        {
          type: "liste",
          items: [
            "Les décisions prises ne sont pas rediscutées en bilatéral, ni défaites la semaine suivante",
            "Le nombre de sujets qui remontent jusqu'au dirigeant diminue",
            "Les revues après action identifient des causes de fonctionnement, pas des coupables",
            "Les mauvaises nouvelles arrivent plus tôt, quand il est encore temps d'agir",
          ],
        },
        {
          type: "p",
          texte:
            "Un moyen simple de suivre ces signes consiste à consacrer cinq minutes, en fin de codir, à une question : qu'est-ce qui a été dit aujourd'hui qui ne l'aurait pas été il y a six mois ? Si la réponse reste vide, les outils tournent à vide.",
        },
      ],
    },

    {
      label: "Se faire aider",
      titre: "Installer l'intelligence collective en entreprise : seul ou accompagné",
      blocs: [
        {
          type: "p",
          texte:
            "Une partie de ce travail se fait sans aide extérieure : annoncer la règle de décision, parler en dernier, écrire les décisions. Un regard extérieur devient utile dans deux cas. Quand le dirigeant fait lui-même partie du problème, parce qu'il est difficile d'observer le poids de sa propre parole. Et quand les rôles sont si flous que chaque réunion rejoue la question du pouvoir.",
        },
        {
          type: "p",
          texte:
            "C'est l'objet de l'étape Coopérer de notre méthode : des cercles d'avancée de 6 à 8 personnes, en sessions collectives de trois heures sur trois mois, qui travaillent sur des situations réelles plutôt que sur des cas d'école. Pour le comité de direction, l'étape Renforcer porte sur la gouvernance et la redistribution des responsabilités. Dans les deux cas, un conseiller référent suit votre sujet ; une autre expertise du cabinet n'intervient que si le sujet l'exige, et le périmètre est arrêté avec vous par écrit.",
        },
        {
          type: "p",
          texte:
            "Avant de choisir un format, il vaut la peine de savoir où se situe le blocage : dans les rôles, dans les règles de décision, dans la confiance, ou ailleurs dans l'entreprise. Un [diagnostic d'entreprise](/diagnostic/) donne ce premier repère en quelques minutes.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que l'intelligence collective en entreprise ?",
      r: [
        "C'est la capacité d'une équipe à prendre de meilleures décisions et à mieux résoudre des problèmes que ses membres pris séparément. La recherche montre qu'elle dépend peu du niveau individuel des participants, et davantage de la façon dont le groupe se parle : répartition équilibrée de la parole, attention aux autres, possibilité de contredire sans risque. En entreprise, elle se joue surtout en comité de direction et en réunion d'équipe.",
      ],
    },
    {
      q: "Quels sont les outils d'intelligence collective les plus simples à mettre en place ?",
      r: [
        "Trois outils suffisent pour commencer. La réflexion écrite de quelques minutes avant de débattre, pour que chacun forme son avis sans être influencé. Le tour de parole où le dirigeant s'exprime en dernier. Et la décision par consentement, où une proposition est adoptée si personne n'a d'objection argumentée. Aucun ne demande de matériel ni de formation, seulement de la régularité.",
      ],
    },
    {
      q: "Intelligence collective veut-elle dire que tout le monde décide ?",
      r: [
        "Non. L'intelligence collective porte sur la qualité de la délibération, pas sur le nombre de décideurs. Un dirigeant peut trancher seul après avoir recueilli toute l'information et tous les désaccords utiles de son équipe. Ce qui compte est d'annoncer la règle de décision avant la discussion, et de ne pas laisser croire à un vote quand la décision appartient à une seule personne.",
      ],
    },
    {
      q: "Qu'est-ce que la sécurité psychologique dans une équipe ?",
      r: [
        "C'est la conviction partagée par les membres d'une équipe qu'ils peuvent prendre un risque interpersonnel sans être pénalisés : poser une question naïve, signaler une erreur, contredire un supérieur. La notion a été formalisée par Amy Edmondson, professeure à Harvard. Ce n'est pas l'absence d'exigence, mais l'assurance qu'une objection argumentée ne sera pas retenue contre son auteur.",
      ],
    },
    {
      q: "Comment savoir si l'intelligence collective fonctionne dans mon codir ?",
      r: [
        "Observez des faits plutôt que l'ambiance. Les désaccords s'expriment-ils en séance, y compris envers vous ? La parole circule-t-elle au-delà de deux ou trois personnes ? Les décisions sortent-elles avec un responsable et une échéance, et tiennent-elles ensuite sans être défaites en bilatéral ? Les mauvaises nouvelles arrivent-elles plus tôt ? Si oui, le collectif produit mieux que la somme des individus.",
      ],
    },
    {
      q: "Faut-il un facilitateur externe pour développer l'intelligence collective ?",
      r: [
        "Pas toujours. Les premières pratiques, comme annoncer la règle de décision ou parler en dernier, relèvent du dirigeant lui-même. Un tiers devient utile quand le dirigeant fait partie du blocage, quand les rôles sont trop flous pour que les réunions avancent, ou quand des tensions anciennes empêchent la parole de circuler. Il observe ce que les participants ne peuvent pas voir de l'intérieur.",
      ],
    },
  ],

  sources: [
    {
      titre: "Evidence for a Collective Intelligence Factor in the Performance of Human Groups",
      editeur: "Science, vol. 330 (2010), Woolley, Chabris, Pentland, Hashmi, Malone",
      url: "https://ofew.berkeley.edu/sites/default/files/evidence_for_a_collective_intelligence_factor_in_the_performance_of_human_groups_woolley_et_al.pdf",
    },
    {
      titre: "Psychological Safety and Learning Behavior in Work Teams",
      editeur: "Administrative Science Quarterly, vol. 44 (1999), Amy Edmondson, Harvard",
      url: "https://dash.harvard.edu/entities/publication/13a7b031-0fdd-45ec-a7e0-2b80e2bc679f",
    },
    {
      titre: "Pooling of Unshared Information in Group Decision Making: Biased Information Sampling During Discussion",
      editeur: "Journal of Personality and Social Psychology, vol. 48 (1985), Stasser et Titus",
      url: "https://www.uni-muenster.de/imperia/md/content/psyifp/aeechterhoff/vorlesungkommunikation/stasser_titus_unsharedinfogroupdisc_jpsp1985.pdf",
    },
    {
      titre: "Dix questions sur les espaces de discussion",
      editeur: "Anact (2015)",
      url: "https://www.anfh.fr/sites/default/files/ged/qvt-anact_10qs_espaces_de_discussion_bd.pdf",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-09-23",
  accent: "organisation",
  pilier: { href: "/muriel-saffroy/", ancre: "Muriel Saffroy" },

  valide: true,
};
