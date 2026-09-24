import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Olivia Artur.
 * Requête : « signes du burn out » (590/mois, KD 30). Secondaires : « burn out que
 * faire » (590), « burnout symptômes physiques » (590).
 *
 * Voisin de solitude-du-dirigeant (qui traite l'isolement et renvoie vers le
 * médecin) : ici, l'angle est le repérage des signes, chez soi ET chez un
 * collaborateur, et la conduite à tenir. Lien vers l'article voisin, sans reprendre
 * son contenu.
 *
 * SUJET DE SANTÉ — POINTS SENSIBLES. Aucun diagnostic, aucun conseil médical,
 * aucune « phase » ou « stade » inventés : seules les descriptions de la HAS, de
 * l'OMS et de l'INRS sont reprises. Renvoi systématique vers le médecin traitant et
 * le médecin du travail ; 3114 cité. Olivia Artur est sophrologue : le texte ne
 * présente jamais l'accompagnement comme un soin. Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "signes-du-burn-out",

  motCle: "signes du burn out (590/mois, KD 30) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "burn out que faire (590/mois)",
    "burnout symptômes physiques (590/mois)",
    "épuisement professionnel",
  ],

  // 38 / 42
  metaTitle: "Signes du burn-out : les repérer, agir",
  // 141 / 150
  metaDescription:
    "Signes du burn-out chez vous ou un salarié : symptômes physiques et psychiques décrits par la HAS, qui consulter et ce qui relève du travail.",

  h1: "Signes du burn-out : les reconnaître chez vous et dans vos équipes",

  chapo:
    "Les signes du burn-out sont rarement spectaculaires. Ce sont une fatigue qui ne passe plus avec le repos, un sommeil qui se dégrade, une irritabilité nouvelle, des difficultés de concentration, un repli, puis un détachement progressif vis-à-vis du travail. La Haute Autorité de santé les décrit comme progressifs et souvent insidieux, ce qui explique qu'on les voie tard, chez soi comme chez un collaborateur. Ils ne permettent pas de poser un diagnostic : seul un médecin le peut. Ils servent à une chose, décider d'en parler à un médecin plus tôt. Et, pour le dirigeant, à regarder ce qui, dans le travail lui-même, les a produits.",

  essentiel: {
    reponse:
      "Le burn-out, ou syndrome d'épuisement professionnel, est décrit par la Haute Autorité de santé comme un épuisement physique, émotionnel et mental lié à un investissement prolongé dans des situations de travail exigeantes. Ses signes touchent cinq registres : émotionnel (anxiété, irritabilité), cognitif (concentration, mémoire), comportemental (repli, agressivité), motivationnel (désengagement, doute sur ses compétences) et physique (fatigue, troubles du sommeil, douleurs, maux de tête, troubles digestifs). Ils s'installent progressivement. Face à ces signes, le premier interlocuteur est le médecin traitant, en lien avec le médecin du travail.",
    points: [
      "L'OMS classe le burn-out comme un phénomène lié au travail, et non comme une maladie : il résulte d'un stress professionnel chronique mal géré",
      "Les symptômes physiques sont souvent les premiers visibles, et les moins spécifiques : fatigue, sommeil, douleurs, troubles digestifs",
      "Aucun signe isolé ne suffit : c'est leur accumulation et leur durée, en rupture avec l'état antérieur, qui doit alerter",
      "Que faire : médecin traitant d'abord, médecin du travail ensuite ; en cas d'idées suicidaires, le 3114, gratuit, 24 h/24",
      "Pour l'employeur, les causes se cherchent dans l'organisation du travail : charge, autonomie, soutien, reconnaissance",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Burn-out : de quoi parle-t-on exactement ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot est employé partout, souvent pour dire « très fatigué ». Il désigne pourtant quelque chose de précis. Avant de chercher des signes, il faut savoir de quoi ils seraient le signe.",
        },
        { type: "h3", texte: "Un phénomène lié au travail, selon l'OMS" },
        {
          type: "p",
          texte:
            "Depuis la onzième révision de sa classification internationale des maladies, l'Organisation mondiale de la santé définit le burn-out comme un syndrome résultant d'un stress chronique au travail qui n'a pas été géré avec succès. Dans [Burn-out an « occupational phenomenon »](https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases), elle précise deux points souvent mal compris. **Le burn-out n'y est pas classé comme une maladie, mais comme un phénomène lié au travail.** Et le terme ne s'applique qu'au contexte professionnel : il ne décrit pas l'épuisement d'un aidant familial ou d'un parent.",
        },
        { type: "h3", texte: "Trois dimensions qui se retrouvent partout" },
        {
          type: "p",
          texte:
            "L'OMS, l'INRS et la HAS retiennent les mêmes trois dimensions. L'INRS, dans sa page [Épuisement professionnel ou burnout : ce qu'il faut retenir](https://www.inrs.fr/risques/epuisement-burnout/ce-qu-il-faut-retenir.html), les formule ainsi : un épuisement émotionnel, le « sentiment d'être vidé de ses ressources émotionnelles » ; une dépersonnalisation ou un cynisme, c'est-à-dire une mise à distance du travail et des personnes ; et un sentiment de non-accomplissement, celui de ne plus parvenir à répondre correctement aux attentes.",
        },
        {
          type: "p",
          texte:
            "Cette grille compte davantage que n'importe quelle liste de symptômes. Une personne très fatiguée mais toujours engagée et efficace ne présente qu'une dimension sur trois. À l'inverse, quelqu'un qui dort encore à peu près mais ne croit plus à rien de ce qu'il fait doit alerter. Pour un dirigeant, c'est aussi le point d'entrée d'un [accompagnement dirigeant](/transformation-dirigeant/) utile : non pas apprendre à tenir plus longtemps, mais comprendre ce qui, dans votre fonction, vide les réserves plus vite qu'elles ne se reconstituent.",
        },
      ],
    },

    {
      label: "Les signes",
      titre: "Les signes du burn-out, registre par registre",
      blocs: [
        {
          type: "p",
          texte:
            "La fiche de la HAS [Repérage et prise en charge cliniques du syndrome d'épuisement professionnel ou burnout](https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge), validée en 2017 et mise à jour en décembre 2025, classe les manifestations en cinq registres. Elle vise tout travailleur, quel que soit son statut : salarié, cadre, chef d'entreprise.",
        },
        {
          type: "tableau",
          entetes: ["Registre", "Manifestations décrites par la HAS"],
          lignes: [
            [
              "Émotionnel",
              "Anxiété, tensions musculaires, tristesse, irritabilité, hypersensibilité, absence d'émotion",
            ],
            [
              "Cognitif",
              "Troubles de la mémoire, de l'attention et de la concentration, troubles des fonctions exécutives",
            ],
            [
              "Comportemental et relationnel",
              "Repli sur soi, isolement social, agressivité, baisse de l'empathie, attitudes hostiles",
            ],
            [
              "Motivationnel",
              "Désengagement progressif, baisse de motivation, doutes sur ses propres compétences",
            ],
            [
              "Physique (non spécifique)",
              "Fatigue, troubles du sommeil, douleurs musculo-squelettiques, maux de tête, troubles digestifs",
            ],
          ],
        },
        { type: "h3", texte: "Ce qui compte : la rupture avec l'état antérieur" },
        {
          type: "p",
          texte:
            "Chacun de ces signes, pris seul, peut avoir mille causes. Tout le monde dort mal une semaine de clôture. **Ce qui doit alerter, c'est une accumulation de signes qui s'installent et durent, en rupture avec la façon dont la personne fonctionnait avant.** La HAS insiste sur ce caractère progressif et insidieux : les changements sont assez lents pour que l'entourage, et la personne elle-même, s'y habituent.",
        },
        { type: "h3", texte: "Quand la compensation masque les signes" },
        {
          type: "p",
          texte:
            "Ce caractère progressif a un effet pervers : il laisse le temps de s'adapter. Chez les profils les plus investis, le réflexe est de compenser : travailler plus tard pour rattraper la baisse de concentration, prendre un café de plus contre la fatigue. La compensation masque les signes pendant des mois. Si vous vous surprenez à expliquer chaque symptôme par une raison ponctuelle, la période, le client, le dossier, c'est précisément le moment d'en parler à quelqu'un d'extérieur.",
        },
      ],
    },

    {
      label: "Le corps",
      titre: "Burn-out : les symptômes physiques qui trompent",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de personnes ne consultent pas pour « un burn-out », mais pour un dos bloqué, des migraines, des brûlures d'estomac ou des nuits hachées. Les symptômes physiques arrivent souvent en premier dans le cabinet médical, parce qu'ils sont plus faciles à nommer que l'épuisement ou le détachement.",
        },
        { type: "h3", texte: "Pourquoi ils sont dits « non spécifiques »" },
        {
          type: "p",
          texte:
            "La HAS qualifie les manifestations physiques du burn-out de non spécifiques : fatigue, troubles du sommeil, douleurs musculo-squelettiques, maux de tête, troubles digestifs. Cela signifie qu'elles n'orientent pas à elles seules vers un épuisement professionnel. Une fatigue persistante peut relever d'une anémie, d'un trouble thyroïdien ou de bien d'autres causes. C'est la raison pour laquelle un examen médical s'impose : il ne s'agit pas seulement de confirmer un burn-out, mais d'écarter ce qui n'en est pas un.",
        },
        { type: "h3", texte: "Le sommeil, premier indicateur à surveiller" },
        {
          type: "p",
          texte:
            "Parmi ces signes, les troubles du sommeil ont une place particulière. Ils sont à la fois une manifestation et un facteur d'aggravation : on dort moins bien, on récupère moins, on tient moins bien la charge le lendemain. Des réveils nocturnes avec les dossiers en tête, des difficultés d'endormissement qui s'installent sur plusieurs semaines, une fatigue que le week-end ne répare plus : ce sont des éléments concrets à décrire à votre médecin, avec leur durée.",
        },
        {
          type: "encadre",
          titre: "Ce que cet article ne fait pas",
          texte:
            "Nous ne sommes pas médecins. Ces descriptions reprennent celles de la HAS et de l'INRS pour vous aider à reconnaître le moment où il faut consulter. Elles ne permettent de poser un diagnostic ni sur vous, ni sur un collaborateur. La HAS rappelle que le burn-out doit être distingué d'autres troubles, dont les troubles anxieux et les épisodes dépressifs : c'est l'affaire d'un professionnel de santé.",
        },
      ],
    },

    {
      label: "Côté employeur",
      titre: "Repérer les signes d'épuisement chez un collaborateur",
      blocs: [
        {
          type: "p",
          texte:
            "Un dirigeant de PME n'est pas seulement exposé au burn-out. Il est aussi employeur, donc en première ligne pour voir ce qui change chez les autres. Le Code du travail le dit sans détour : selon l'[article L4121-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828), « l'employeur prend les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs ».",
        },
        { type: "h3", texte: "Un phénomène qui progresse" },
        {
          type: "p",
          texte:
            "Les données de Santé publique France montrent que le sujet n'a rien de marginal. Dans [La souffrance psychique en lien avec le travail à partir du Programme de surveillance des maladies à caractère professionnel](https://www.santepubliquefrance.fr/maladies-liees-au-travail/souffrance-psychique-et-epuisement-professionnel/article/la-souffrance-psychique-en-lien-avec-le-travail-a-partir-du-programme-de-surveillance-des-maladies-a), l'agence relève une prévalence de la souffrance psychique liée au travail de 5,9 % chez les femmes et de 2,7 % chez les hommes en 2019, et un doublement de ces taux entre 2007 et 2019. Cette souffrance recouvre plus largement que le seul burn-out, mais elle en dessine le contexte.",
        },
        { type: "h3", texte: "Ce qu'un manager peut observer sans diagnostiquer" },
        {
          type: "liste",
          items: [
            "Un collaborateur fiable qui commence à oublier des engagements ou à multiplier les erreurs d'inattention",
            "Des horaires qui s'allongent sans que le travail avance davantage",
            "Une irritabilité nouvelle en réunion, ou au contraire un silence inhabituel",
            "Un retrait des moments collectifs, du déjeuner, des échanges informels",
            "Un cynisme qui s'installe : « de toute façon, ça ne sert à rien »",
            "Des absences courtes et répétées, souvent pour des motifs physiques",
          ],
        },
        {
          type: "p",
          texte:
            "Votre rôle n'est pas d'interpréter ces signes, encore moins de les nommer devant l'intéressé. Il est d'ouvrir une conversation, en privé, sur ce que vous observez concrètement, de dire que vous êtes inquiet, et de rappeler que le médecin du travail est un interlocuteur possible, tenu au secret médical. Si le problème vient d'un management qui s'est durci sous la pression, un [coaching en management](/infos-utiles/coaching-en-management/) aide parfois l'encadrant à voir ce qu'il ne voit plus.",
        },
      ],
    },

    {
      label: "Que faire",
      titre: "Burn-out : que faire, pour vous ou pour un salarié",
      blocs: [
        {
          type: "p",
          texte:
            "La question « burn-out, que faire ? » a une réponse simple dans son premier temps : consulter. La suite dépend du médecin, pas du dirigeant ni du consultant.",
        },
        {
          type: "tableau",
          entetes: ["Situation", "Premier réflexe"],
          lignes: [
            [
              "Plusieurs signes s'installent depuis des semaines",
              "Rendez-vous chez le médecin traitant, en décrivant les signes et leur durée",
            ],
            [
              "Les signes sont liés au travail et vous êtes salarié",
              "En parler aussi au médecin du travail, qui peut analyser le poste et proposer des aménagements",
            ],
            [
              "Un collaborateur vous paraît en difficulté",
              "Lui en parler en privé et lui indiquer le médecin du travail ; ne pas poser de diagnostic",
            ],
            [
              "Idées noires, sentiment que rien n'a plus de sens",
              "Appeler le 3114 sans attendre ; en cas de danger immédiat, le 15",
            ],
          ],
        },
        { type: "h3", texte: "Le médecin traitant coordonne, le médecin du travail relie au poste" },
        {
          type: "p",
          texte:
            "Selon la HAS, le médecin traitant coordonne la prise en charge et peut orienter vers un psychiatre. Le médecin du travail analyse les conditions de travail, recommande des aménagements et prépare le retour. La HAS indique qu'un arrêt de travail est souvent nécessaire, d'une durée adaptée à l'évolution des symptômes, et recommande une visite de pré-reprise avec le médecin du travail pendant l'arrêt. Les deux médecins peuvent échanger, avec l'accord de la personne.",
        },
        { type: "h3", texte: "Le 3114, pour vous ou pour un proche" },
        {
          type: "p",
          texte:
            "Si les signes vont jusqu'aux idées suicidaires, le [3114, numéro national de prévention du suicide](https://3114.fr/), répond 24 h/24 et 7 j/7, gratuitement. Un professionnel du soin formé à la prévention du suicide décroche. Vous pouvez aussi l'appeler si vous vous inquiétez pour un associé, un salarié ou un proche : il est fait pour cela aussi.",
        },
        { type: "h3", texte: "Préparer le retour, côté entreprise" },
        {
          type: "p",
          texte:
            "Quand un salarié revient après un arrêt pour épuisement, le pire serait qu'il retrouve exactement le poste qui l'a épuisé. Le retour se prépare avec le médecin du travail : charge, objectifs, rythme, interlocuteurs. **Remettre quelqu'un dans la même organisation en lui demandant de mieux la supporter, c'est programmer la rechute.**",
        },
      ],
    },

    {
      label: "Les causes",
      titre: "Épuisement professionnel : les causes se trouvent dans le travail",
      blocs: [
        {
          type: "p",
          texte:
            "Le burn-out est souvent raconté comme une histoire individuelle : quelqu'un de trop perfectionniste, qui ne sait pas dire non. L'OMS et l'INRS disent autre chose. Le burn-out naît d'un stress professionnel chronique, donc de conditions de travail qui durent. C'est une bonne nouvelle pour un dirigeant : ces conditions sont en partie entre ses mains.",
        },
        { type: "h3", texte: "Les facteurs de risque retenus par l'INRS" },
        {
          type: "tableau",
          entetes: ["Facteur de risque", "La question à vous poser"],
          lignes: [
            [
              "Surcharge de travail et pression temporelle",
              "Les objectifs de ce poste sont-ils atteignables dans le temps réellement disponible ?",
            ],
            [
              "Faible contrôle sur son travail",
              "La personne peut-elle décider de l'ordre, de la méthode, du rythme de ce qu'elle fait ?",
            ],
            [
              "Manque de soutien social",
              "À qui s'adresse-t-elle quand elle bloque ? Obtient-elle une réponse ?",
            ],
            [
              "Manque d'équité et de reconnaissance",
              "Les efforts sont-ils vus, et répartis de façon juste entre les membres de l'équipe ?",
            ],
            [
              "Insécurité de la situation",
              "Le poste, le projet, l'avenir de l'équipe sont-ils lisibles pour elle ?",
            ],
          ],
        },
        { type: "h3", texte: "Agir sur les exigences et sur les ressources" },
        {
          type: "p",
          texte:
            "L'INRS résume la prévention collective en une phrase : réduire les exigences et augmenter les ressources. Réduire les exigences, c'est revoir une charge, un délai, un périmètre. Augmenter les ressources, c'est du soutien, de l'équité, de la reconnaissance du travail accompli. Aucune de ces mesures n'est un séminaire bien-être. Toutes relèvent de l'organisation : qui décide, qui porte quoi, qui aide qui.",
        },
        { type: "h3", texte: "Le dirigeant n'échappe pas à la grille" },
        {
          type: "p",
          texte:
            "Appliquez la même grille à votre propre poste. Surcharge, pression temporelle, soutien : c'est souvent là que le dirigeant de PME cumule le plus de facteurs, sans médecin du travail ni manager pour le voir. L'article sur la [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/) détaille ce versant et les dispositifs d'aide qui existent pour les chefs d'entreprise. Le constat est le même : le premier rendez-vous est médical, le deuxième chantier est l'organisation.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Ce qu'un accompagnement peut faire après les signes d'alerte, et ce qu'il ne fait pas",
      blocs: [
        {
          type: "p",
          texte:
            "Un accompagnement ne soigne pas un burn-out. Si vous, ou l'un de vos collaborateurs, présentez les signes décrits plus haut, la priorité est médicale, et nous le dirons dès le premier échange. Aucun coach, aucun consultant, aucun sophrologue ne remplace le médecin.",
        },
        {
          type: "p",
          texte:
            "En revanche, une fois la santé prise en charge, reste la question qui revient au dirigeant : qu'est-ce qui, dans l'entreprise, a produit cet épuisement, et comment éviter qu'il se reproduise ? Chez Un Seul Souffle, le pilier Équilibre & QVT, porté par Olivia Artur, sophrologue et praticienne PNL, travaille sur la charge mentale, l'énergie et le sens au travail, pour le dirigeant comme pour ses équipes. Un conseiller référent suit votre sujet ; une autre expertise de [l'équipe](/notre-equipe/) n'intervient que si le sujet l'exige, par exemple quand la surcharge vient de décisions qui remontent toutes au même endroit.",
        },
        {
          type: "p",
          texte:
            "Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord. Si vous ne savez pas encore si le nœud est chez vous, dans une équipe ou dans l'organisation, commencez par un [diagnostic d'entreprise](/diagnostic/) : il vous aide à voir où regarder avant d'engager quoi que ce soit.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quels sont les premiers signes du burn-out ?",
      r: [
        "Les premiers signes sont souvent peu spécifiques : fatigue qui ne passe plus avec le repos, troubles du sommeil, irritabilité, difficultés de concentration, maux de tête ou de dos. La HAS décrit une installation progressive et insidieuse, en rupture avec l'état antérieur. Aucun signe isolé ne suffit : c'est leur accumulation et leur durée qui doivent conduire à consulter son médecin traitant.",
      ],
    },
    {
      q: "Quels sont les symptômes physiques d'un burn-out ?",
      r: [
        "La Haute Autorité de santé cite la fatigue, les troubles du sommeil, les douleurs musculo-squelettiques, les maux de tête et les troubles digestifs. Elle les qualifie de non spécifiques : ils peuvent avoir bien d'autres causes, ce qui rend l'examen médical indispensable. Ils sont souvent les premiers pour lesquels on consulte, avant de parler d'épuisement.",
      ],
    },
    {
      q: "Burn-out : que faire en premier ?",
      r: [
        "Prendre rendez-vous avec votre médecin traitant et lui décrire les signes et leur durée. Selon la HAS, il coordonne la prise en charge, qui passe souvent par un arrêt de travail. Si les difficultés sont liées au travail, le médecin du travail peut analyser le poste et préparer le retour. En cas d'idées suicidaires, appelez le 3114, gratuit et joignable 24 h/24.",
      ],
    },
    {
      q: "Le burn-out est-il une maladie ?",
      r: [
        "Pour l'OMS, non : dans sa classification internationale, le burn-out est un phénomène lié au travail, résultant d'un stress professionnel chronique mal géré, et non une maladie. Il n'en est pas moins sérieux. La HAS a publié une fiche de repérage et de prise en charge, et rappelle que le médecin doit rechercher d'éventuels troubles associés, anxieux ou dépressifs.",
      ],
    },
    {
      q: "Comment réagir si un salarié montre des signes d'épuisement ?",
      r: [
        "Parlez-lui en privé de ce que vous observez concrètement, sans poser de diagnostic ni prononcer le mot burn-out. Dites votre inquiétude et indiquez-lui le médecin du travail, tenu au secret médical. Puis regardez l'organisation de son poste : charge, autonomie, soutien, reconnaissance. L'article L4121-1 du Code du travail impose à l'employeur de protéger la santé physique et mentale des salariés.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Repérage et prise en charge cliniques du syndrome d'épuisement professionnel ou burnout",
      editeur: "Haute Autorité de santé",
      url: "https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge",
    },
    {
      titre: "Burn-out an « occupational phenomenon »: International Classification of Diseases",
      editeur: "Organisation mondiale de la santé",
      url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases",
    },
    {
      titre: "Épuisement professionnel ou burnout : ce qu'il faut retenir",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/epuisement-burnout/ce-qu-il-faut-retenir.html",
    },
    {
      titre:
        "La souffrance psychique en lien avec le travail à partir du Programme de surveillance des maladies à caractère professionnel : résultats des enquêtes transversales 2013 à 2019 et évolution depuis 2007",
      editeur: "Santé publique France",
      url: "https://www.santepubliquefrance.fr/maladies-liees-au-travail/souffrance-psychique-et-epuisement-professionnel/article/la-souffrance-psychique-en-lien-avec-le-travail-a-partir-du-programme-de-surveillance-des-maladies-a",
    },
    {
      titre: "Article L4121-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828",
    },
    {
      titre: "Numéro national de prévention du suicide - 3114",
      editeur: "3114, piloté par le ministère chargé de la santé",
      url: "https://3114.fr/",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2026-10-26",
  accent: "qvt",
  pilier: { href: "/transformation-dirigeant/", ancre: "accompagnement dirigeant" },

  valide: false,
};
