import type { PagePilier } from "@/lib/content/pilier";

/**
 * Silo 4 (volet QVT) — Équilibre & qualité de vie au travail. Référente : Olivia Artur,
 * partenaire.
 * Requêtes : « consultant QVT toulouse », « qvt toulouse », « qualité de vie au
 * travail toulouse » sont sans volume mesurable (docs/seo/ETUDE_MOTS_CLES.md § 4) :
 * la page vise l'intention « conseil en QVT » et ses variantes (prévention des RPS,
 * surcharge, épuisement professionnel), sans requête propriétaire chiffrée.
 *
 * TEXTE DE LA CLIENTE. Le contenu suit le document « Page services Olivia Artur »
 * (retour cliente d'octobre 2026) ; seules la forme et la typographie ont été
 * ajustées, et les commentaires de rédaction retirés.
 *
 * SUJET SENSIBLE. Olivia Artur est sophrologue : c'est de la prévention, jamais un
 * soin. Aucune promesse thérapeutique ni médicale.
 *
 * TARIF. Le forfait 2 séances (250 € HT) est une décision de l'agence, écrit ici en
 * encadré et non via le bloc `tarifs`. L'autodiagnostic QVT à 190 € HT, option du
 * parcours dirigeant, n'est volontairement pas cité ici (risque de confusion).
 *
 * ANTI-CANNIBALISATION. « Coaching dirigeant » appartient à /transformation-dirigeant/ :
 * la page le lie à ancre exacte, elle ne le cible pas. Les articles d'Olivia
 * (charge mentale, RPS, QVT ou QVCT, burn-out) ne sont pas liés dans le corps tant
 * qu'ils ne sont pas publiés : ils remontent seuls dans « Nos articles » à leur date.
 */
export const pilierQvt: PagePilier = {
  href: "/qvt-equilibre-travail-toulouse/",
  fil: "Équilibre & QVT",
  accent: "qvt",

  // « QVT et équilibre au travail à Toulouse » = 38 + 18 = 56 / 60
  metaTitle: "QVT et équilibre au travail à Toulouse",
  // Longueur vérifiée : ≤ 150
  metaDescription:
    "Conseil en QVT pour TPE et PME à Toulouse : prévenir la surcharge, l'épuisement et les RPS, du dirigeant aux équipes. Premier format à 250 € HT.",
  nomService: "Conseil en qualité de vie au travail et prévention des RPS pour TPE et PME",

  h1: "Conseil en QVT et équilibre au travail à Toulouse : préserver l'énergie de l'entreprise",
  lede:
    "Stress, fatigue, charge mentale permanente, tensions, perte de motivation… Au fil du temps, ce qui semblait n'être qu'une période difficile peut devenir un véritable problème d'entreprise. Notre conseil en QVT et équilibre au travail intervient lorsque la charge, le stress, les relations ou les changements fragilisent l'équilibre des personnes et l'énergie collective. Son objectif : préserver les ressources humaines de l'entreprise pour permettre une performance durable.",

  essentiel: {
    reponse:
      "Le conseil en QVT et équilibre au travail d'Un Seul Souffle aide les TPE et PME de 10 à 250 salariés, à Toulouse et en Occitanie, à prévenir la surcharge, le stress chronique, l'épuisement professionnel et les risques psychosociaux (RPS). L'experte référente est Olivia Artur, sophrologue et praticienne PNL, qui s'appuie sur plus de 25 ans d'expérience en entreprise, notamment dans les métiers de la finance et de la gestion. Elle intervient auprès du dirigeant, des managers, des collaborateurs, des équipes ou de l'entreprise, en travaillant à la fois sur ce que vit la personne et sur les facteurs organisationnels : charge de travail, organisation, management, relations, reconnaissance, ressources. C'est une démarche de prévention, pas un soin. Le premier format est un forfait de deux séances à 250 € HT : un auto-diagnostic, puis un plan d'action.",
    points: [
      "Pour qui : TPE et PME de 10 à 250 salariés — dirigeant, managers, collaborateurs, équipes",
      "Experte référente : Olivia Artur, QVT et sophrologie, plus de 25 ans en entreprise",
      "Ce que ça couvre : surcharge, charge mentale, stress, RPS, tensions, engagement",
      "Ce que ça n'est pas : quelques actions de bien-être, ni un soin médical",
      "Premier format : forfait 2 séances, 250 € HT",
      "En appui si besoin : les cinq autres expertises du cabinet",
      "Zone : Toulouse, Haute-Garonne, Occitanie",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "Quand la surcharge devient un risque pour l'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Stress, fatigue, charge mentale permanente, tensions, perte de motivation… Au fil du temps, ce qui semblait n'être qu'une période difficile peut devenir un véritable problème d'entreprise.",
        },
        {
          type: "liste",
          items: [
            "Le dirigeant n'arrive plus à prendre de recul",
            "Les managers s'épuisent à gérer les urgences",
            "Les collaborateurs perdent de l'énergie et de l'engagement",
            "Les tensions se multiplient",
            "Les absences augmentent",
            "Et la performance finit par être directement impactée",
          ],
        },
        {
          type: "p",
          texte:
            "**Une entreprise ne peut pas tenir durablement si les personnes qui la font vivre n'ont plus les ressources pour tenir, décider, coopérer et avancer.**",
        },
        {
          type: "p",
          texte:
            "Olivia Artur intervient lorsque la charge, le stress, les relations ou les changements fragilisent l'équilibre des personnes et l'énergie collective. Son objectif : préserver les ressources humaines de l'entreprise pour permettre une performance durable. Si vous hésitez sur la nature du blocage, le [diagnostic d'entreprise](/diagnostic/) en ligne vous aide à le situer en quelques minutes.",
        },
      ],
    },

    {
      label: "La confusion à lever",
      titre: "La QVT ne se résume pas au bien-être des salariés",
      blocs: [
        {
          type: "p",
          texte:
            "Proposer quelques actions de bien-être ne suffit pas à résoudre une surcharge chronique ou un climat social dégradé. La qualité de vie et les conditions de travail sont liées à la manière dont l'entreprise fonctionne réellement :",
        },
        {
          type: "liste",
          items: [
            "la charge de travail",
            "l'organisation",
            "les pratiques managériales",
            "les relations",
            "la reconnaissance",
            "l'engagement",
            "les ressources disponibles",
            "l'énergie collective",
          ],
        },
        {
          type: "p",
          texte:
            "Une personne peut être en difficulté sans que le problème soit uniquement individuel. À l'inverse, une organisation peut mettre durablement ses collaborateurs sous tension sans que personne ne soit réellement « en cause ». **Nous cherchons donc à comprendre à la fois ce que vit la personne et ce que l'organisation produit.**",
        },
        {
          type: "p",
          texte:
            "C'est précisément l'approche portée par Olivia : elle intervient sur les situations individuelles tout en travaillant sur les facteurs organisationnels qui influencent le bien-être.",
        },
      ],
    },

    {
      label: "Le travail",
      titre: "Prévenir l'épuisement avant qu'il ne devienne une rupture",
      blocs: [
        {
          type: "p",
          texte: "Olivia accompagne les dirigeants, managers et équipes sur :",
        },
        {
          type: "liste",
          items: [
            "la surcharge et la charge mentale",
            "la prévention du stress chronique",
            "la prévention de l'épuisement professionnel",
            "les risques psychosociaux (RPS)",
            "l'équilibre du dirigeant et des managers",
            "les pratiques managériales",
            "les relations et tensions au travail",
            "l'engagement et la motivation",
            "la qualité de vie et les conditions de travail",
            "l'accompagnement des collaborateurs en difficulté",
            "la santé mentale au travail",
            "le développement des compétences relationnelles et émotionnelles",
            "les ateliers et actions de sensibilisation",
          ],
        },
      ],
    },

    {
      label: "Surcharge et perte d'équilibre",
      titre: "Le signal qu'on attend souvent trop longtemps avant d'écouter",
      large: false,
      exergue:
        "Le problème n'est alors plus seulement la fatigue. C'est la capacité de la personne et de l'organisation à continuer à fonctionner dans de bonnes conditions.",
      blocs: [
        {
          type: "p",
          texte:
            "La surcharge ne commence pas toujours par un épuisement. Elle peut commencer par : « Je suis juste dans une période chargée. » Puis : « Je n'ai plus vraiment le temps de prendre du recul. » Puis : « Je suis fatigué, mais ça va passer. »",
        },
        {
          type: "p",
          texte:
            "Puis les décisions deviennent plus difficiles, les relations plus tendues, les erreurs plus fréquentes et l'envie diminue. **C'est pourquoi l'accompagnement vise à intervenir avant que la surcharge ne devienne une rupture.**",
        },
      ],
    },

    {
      label: "Les signes",
      titre: "5 signes que la surcharge est devenue un problème d'entreprise",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Aucun de ces signes ne surgit du jour au lendemain. Ils s'installent, et c'est souvent leur accumulation qui fait basculer une période chargée en problème d'entreprise.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Vous êtes constamment dans l'urgence.** Vous enchaînez les sujets sans parvenir à prendre du recul. Même lorsque vous terminez une journée, vous avez le sentiment de ne jamais avoir réellement avancé.",
            "**La fatigue devient la norme.** Vous ou vos managers tenez grâce à l'habitude, à l'engagement ou au sens des responsabilités, mais les ressources commencent à manquer.",
            "**Les tensions augmentent.** Des irritations apparaissent, les échanges deviennent plus difficiles et des problèmes relationnels qui semblaient secondaires prennent de plus en plus de place.",
            "**L'engagement commence à diminuer.** Vous constatez moins d'initiative, davantage de démotivation ou de désengagement. Certains collaborateurs ne semblent plus avoir l'énergie nécessaire pour contribuer comme avant.",
            "**Vous commencez à voir les premiers signaux d'alerte.** Absentéisme, turnover, fatigue, difficultés managériales, collaborateurs en souffrance… L'entreprise commence à payer le prix d'une situation qui dure.",
          ],
        },
        {
          type: "encadre",
          titre: "Le résultat recherché",
          texte:
            "Ne plus seulement demander aux personnes de tenir : agir sur les conditions qui leur permettent de tenir dans la durée.",
        },
      ],
    },

    {
      label: "De la surcharge à la capacité d'agir",
      titre: "Ne pas seulement gérer les symptômes : retrouver des marges de manœuvre",
      blocs: [
        {
          type: "p",
          texte:
            "Lorsqu'une personne est en surcharge, la tentation est souvent de chercher immédiatement comment tenir davantage. **Nous faisons l'inverse.**",
        },
        {
          type: "p",
          texte:
            "Nous cherchons d'abord à comprendre : qu'est-ce qui prend toute cette énergie ? Puis : sur quoi puis-je réellement agir ? Et enfin : quelles ressources et quelles conditions dois-je réunir pour retrouver un fonctionnement durable ? Cela permet de passer :",
        },
        {
          type: "liste",
          items: [
            "de la réaction → à la compréhension",
            "de la compréhension → à l'action",
            "de l'action → à un nouvel équilibre",
          ],
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez",
          texte:
            "L'objectif n'est pas simplement de « se sentir mieux ». Il s'agit de retrouver suffisamment de ressources pour prendre du recul, retrouver de la clarté, mieux identifier ses limites, comprendre ce qui consomme son énergie, agir sur les sources de surcharge, retrouver une capacité d'adaptation, améliorer les relations de travail, remettre de la régulation dans le quotidien et construire des pratiques plus soutenables. Vous repartez avec une meilleure compréhension de ce qui affecte votre énergie et votre engagement, des actions concrètes et des pratiques permettant de préserver la performance dans la durée.",
        },
      ],
    },

    {
      label: "Une approche qui relie l'humain et le travail réel",
      titre: "On ne peut pas accompagner une personne sans regarder son environnement",
      blocs: [
        {
          type: "p",
          texte:
            "Olivia ne sépare pas artificiellement l'individu de son contexte professionnel. **Son approche associe la QVT, la prévention des RPS, la sophrologie, l'intelligence relationnelle et l'accompagnement humain.**",
        },
        {
          type: "p",
          texte:
            "Elle s'appuie également sur plus de 25 ans d'expérience en entreprise, notamment dans les métiers de la finance et de la gestion. Cette expérience lui permet de comprendre les réalités auxquelles sont confrontés les dirigeants, managers et équipes : pression des résultats, complexité relationnelle, charge mentale et recherche permanente d'équilibre.",
        },
      ],
    },

    {
      label: "Quand faire appel à Olivia ?",
      titre: "Les situations qu'il vaut mieux ne pas laisser s'installer",
      blocs: [
        {
          type: "p",
          texte:
            "Certaines situations sont des signaux qu'il vaut mieux ne pas laisser s'installer. Vous pouvez être concerné si :",
        },
        {
          type: "liste",
          items: [
            "vous ressentez une surcharge permanente",
            "vous avez du mal à prendre du recul",
            "la fatigue devient récurrente",
            "votre niveau de stress augmente",
            "vos managers sont eux-mêmes en difficulté",
            "un collaborateur montre des signes d'épuisement ou de désengagement",
            "des tensions apparaissent dans les équipes",
            "les changements génèrent inquiétude ou résistance",
            "l'absentéisme ou le turnover progressent",
            "les managers se sentent démunis face à la souffrance de leurs collaborateurs",
            "vous souhaitez mettre en place une véritable démarche de prévention",
            "l'entreprise traverse une période sensible après un conflit, un épuisement ou une transformation",
          ],
        },
      ],
    },

    {
      label: "Une intervention adaptée à votre besoin",
      titre: "De l'accompagnement individuel à la démarche collective",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Selon la situation, Olivia peut intervenir auprès du dirigeant, des managers, des collaborateurs, des équipes ou de l'entreprise tout entière. Le format se choisit avec vous, à partir de ce que la situation demande.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Du dirigeant.** Pour retrouver de la hauteur, identifier les sources de surcharge et préserver son équilibre dans la durée.",
            "**Des managers.** Pour les aider à mieux réguler leur charge, accompagner leurs équipes et développer un management plus humain et durable.",
            "**Des collaborateurs.** Pour prévenir ou accompagner les situations de stress, d'épuisement, de démotivation ou de difficulté relationnelle.",
            "**Des équipes.** Pour travailler sur les relations, la coopération, l'engagement et les facteurs qui affectent l'énergie collective.",
            "**De l'entreprise.** Pour construire une démarche de prévention, de QVCT ou de santé mentale au travail qui soit adaptée à sa réalité.",
          ],
        },
        {
          type: "p",
          texte:
            "Quand le sujet du dirigeant dépasse son équilibre et touche à sa façon de décider et de déléguer, le [coaching dirigeant](/transformation-dirigeant/) du cabinet prend le relais.",
        },
      ],
    },

    {
      label: "Un premier format simple",
      titre: "Diagnostic individuel et plan d'action pour prendre de la hauteur",
      blocs: [
        {
          type: "p",
          texte:
            "Pour les situations où la surcharge est déjà présente mais où il est encore possible d'agir, Olivia propose un format court permettant de sortir de la réaction immédiate.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Une séance d'auto-diagnostic de 1 h 30.** Pour identifier les sources de surcharge, les facteurs qui affectent l'équilibre et les marges de manœuvre disponibles.",
            "**Une séance de prise de hauteur de 45 minutes.** Pour analyser les résultats et construire un plan d'action personnalisé.",
          ],
        },
        {
          type: "p",
          texte: "Le plan d'action permet d'identifier :",
        },
        {
          type: "liste",
          items: [
            "les actions concrètes à mener",
            "le niveau auquel agir",
            "les échéances",
            "les indicateurs de réussite",
          ],
        },
        {
          type: "encadre",
          titre: "Un premier format simple",
          texte:
            "Forfait 2 séances — 250 € HT : une séance d'auto-diagnostic de 1 h 30, puis une séance de prise de hauteur de 45 minutes, avec un plan d'action personnalisé (actions, niveau auquel agir, échéances, indicateurs de réussite).",
        },
      ],
    },

    {
      label: "Notre vision de la QVT",
      titre: "Préserver l'énergie de l'entreprise, ce n'est pas ralentir l'entreprise",
      exergue:
        "Une entreprise qui épuise ses ressources humaines finit par épuiser sa performance.",
      blocs: [
        {
          type: "p",
          texte:
            "La qualité de vie au travail ne consiste pas à demander aux collaborateurs de travailler moins ou à ajouter quelques actions de bien-être. **Elle consiste à créer les conditions permettant aux femmes et aux hommes de travailler durablement, efficacement et sereinement.**",
        },
        {
          type: "p",
          texte: "Cela passe notamment par :",
        },
        {
          type: "liste",
          items: [
            "la prévention des risques psychosociaux",
            "la qualité des relations et de la communication",
            "la reconnaissance du travail",
            "un équilibre entre exigences et ressources",
            "le développement des compétences relationnelles et managériales",
            "la préservation de la santé mentale des collaborateurs et des dirigeants",
          ],
        },
      ],
    },

    {
      label: "Votre référente",
      titre: "Olivia Artur — Équilibre & QVT",
      blocs: [
        {
          type: "referent",
          slug: "olivia-artur",
          texte: [
            "Après plus de 25 années en entreprise, Olivia Artur accompagne aujourd'hui dirigeants, managers et collaborateurs pour préserver leur équilibre, développer leur capacité d'adaptation et construire des environnements de travail plus sains et plus durables.",
            "Son approche associe QVT, sophrologie, intelligence relationnelle et prévention des risques psychosociaux, avec une attention particulière portée à la réalité concrète du travail.",
            "Sa conviction : prendre soin de l'humain n'est pas une dépense supplémentaire. C'est un investissement stratégique qui favorise l'engagement, la coopération et la performance durable.",
            "Elle reste votre interlocutrice du lancement de la mission à la fin de l'intervention. Si la situation l'exige, elle s'appuie sur les cinq autres expertises du cabinet, sur le point précis qui le demande.",
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: "La QVT, est-ce simplement du bien-être au travail ?",
      r: [
        "Non. La QVT concerne aussi la charge de travail, l'organisation, le management, les relations, l'engagement et les ressources disponibles.",
      ],
    },
    {
      q: "Est-ce que vous intervenez uniquement lorsqu'une personne est en épuisement ?",
      r: [
        "Non. L'enjeu est justement de pouvoir intervenir avant que la situation ne devienne critique, dans une logique de prévention.",
      ],
    },
    {
      q: "Est-ce un accompagnement individuel ou collectif ?",
      r: [
        "Les deux. Olivia peut accompagner un dirigeant ou un collaborateur individuellement, mais également intervenir auprès des managers, des équipes ou de l'entreprise.",
      ],
    },
    {
      q: "Mon entreprise traverse une période de changement. Pouvez-vous intervenir ?",
      r: [
        "Oui. Les changements organisationnels peuvent générer de l'inquiétude, du stress ou des résistances. L'accompagnement peut alors permettre de préserver les capacités d'adaptation et l'engagement des équipes.",
      ],
    },
    {
      q: "Est-ce que vous allez uniquement travailler sur les personnes ?",
      r: [
        "Non. L'approche prend également en compte les facteurs organisationnels qui influencent leur bien-être.",
      ],
    },
    {
      q: "Combien coûte un premier accompagnement ?",
      r: [
        "Le premier format est un forfait de deux séances à 250 € HT : une séance d'auto-diagnostic de 1 h 30, puis une séance de prise de hauteur de 45 minutes pour construire un plan d'action personnalisé.",
      ],
    },
  ],

  bascule: {
    titre: "Si la surcharge vient d'abord de l'organisation",
    texte:
      "Quand la charge tient d'abord à des rôles flous ou à des décisions qui remontent toutes au dirigeant, travailler sur l'équilibre des personnes ne suffit pas : c'est l'organisation et la coopération qui se travaillent — sur le périmètre que vous décidez.",
    href: "/organisation-cooperation-toulouse/",
    ancre: "Découvrir l'organisation & coopération",
  },
};
