import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Olivia Artur.
 * Requête : « burn out ou dépression » (590/mois, KD 12). Secondaires :
 * « dépression ou burn out » (590), « burnout et dépression » (590).
 *
 * SUJET DE SANTÉ. Aucun diagnostic, aucun conseil médical, aucun test
 * d'auto-évaluation : l'article aide à comprendre la distinction et renvoie
 * systématiquement vers le médecin traitant, le médecin du travail et, en cas de
 * détresse, le 3114. Sources vérifiées le 24/09/2026 (HAS, OMS, INRS, Ameli,
 * Santé publique France, 3114).
 *
 * Complémentaire de « signes-du-burn-out » (publié le 26/10/2026) : ne pas
 * reprendre ici la liste des signes, qui y est détaillée.
 */
export const article: Article = {
  slug: "burn-out-ou-depression",

  motCle: "burn out ou dépression (590/mois, KD 12) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "dépression ou burn out (590/mois)",
    "burnout et dépression (590/mois)",
    "différence burn-out dépression",
  ],

  // 40 / 42
  metaTitle: "Burn-out ou dépression : les différences",
  // 144 / 150
  metaDescription:
    "Burn-out ou dépression : ce qui les rapproche, ce qui les distingue selon la HAS et l'OMS, pourquoi l'un peut mener à l'autre, et qui consulter.",

  h1: "Burn-out ou dépression : comprendre la différence, et savoir qui consulter",

  chapo:
    "Burn-out ou dépression ? La question se pose souvent, parce que les deux se ressemblent : fatigue, sommeil perturbé, difficulté à se concentrer, sentiment de ne plus être à la hauteur. Ils ne sont pourtant pas du même ordre. Le burn-out est un épuisement lié au travail, que l'OMS et la Haute Autorité de santé ne classent pas comme une maladie. La dépression est une maladie, qui touche toutes les sphères de la vie. L'un peut mener à l'autre, et ils peuvent coexister. Surtout, la réponse n'est pas à trancher seul : c'est à un médecin de faire la différence, et c'est pour cela qu'il faut le consulter tôt.",

  essentiel: {
    reponse:
      "Le burn-out, ou syndrome d'épuisement professionnel, est défini par l'OMS comme un syndrome résultant d'un stress chronique au travail qui n'a pas été géré avec succès ; il n'est pas classé comme une maladie. La dépression est une maladie psychique : selon l'Assurance Maladie, elle suppose des symptômes présents presque chaque jour pendant au moins deux semaines, avec un retentissement sur toute la vie. L'INRS résume la différence : la dépression s'exprime dans tous les aspects de la vie, le burn-out d'abord dans la sphère professionnelle. Seul un médecin peut poser un diagnostic.",
    points: [
      "Le burn-out est un phénomène lié au travail, la dépression une maladie qui déborde le travail",
      "Les symptômes se recoupent largement : on ne les distingue pas par soi-même",
      "Un burn-out peut évoluer vers une dépression, et la HAS demande de rechercher un trouble dépressif sous-jacent",
      "Premier interlocuteur : le médecin traitant, en lien avec le médecin du travail",
      "En cas d'idées noires : le 3114, gratuit, 24 h/24 et 7 j/7 ; en cas de danger immédiat, le 15",
    ],
  },

  chapitres: [
    {
      label: "Deux notions",
      titre: "Burn-out ou dépression : deux notions qui ne sont pas du même ordre",
      blocs: [
        {
          type: "p",
          texte:
            "Opposer burn-out et dépression laisse croire qu'il s'agit de deux maladies voisines, entre lesquelles il faudrait choisir. Ce n'est pas le cas. **Le burn-out décrit un état lié au travail ; la dépression est une maladie.** Les deux mots ne jouent pas dans la même catégorie, et c'est la première chose à comprendre avant de chercher à les distinguer.",
        },
        { type: "h3", texte: "Le burn-out, un phénomène lié au travail" },
        {
          type: "p",
          texte:
            "Dans sa classification internationale des maladies, l'OMS définit le burn-out comme un syndrome résultant d'un stress chronique au travail qui n'a pas été géré avec succès. Dans [Burn-out an « occupational phenomenon »](https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases), elle retient trois dimensions : l'épuisement, une distance mentale accrue vis-à-vis de son travail, souvent teintée de cynisme, et une efficacité professionnelle réduite. Elle précise que le burn-out **n'est pas classé comme une condition médicale** et que le terme ne s'applique qu'au contexte professionnel.",
        },
        {
          type: "p",
          texte:
            "La Haute Autorité de santé dit la même chose en France. Sa fiche [Repérage et prise en charge cliniques du syndrome d'épuisement professionnel ou burnout](https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge), validée en 2017 et mise à jour en décembre 2025, indique que le syndrome d'épuisement professionnel « n'est pas une maladie caractérisée ». Cela ne veut pas dire qu'il n'est pas sérieux : la HAS précise qu'un arrêt de travail est le plus souvent nécessaire.",
        },
        { type: "h3", texte: "La dépression, une maladie qui déborde le travail" },
        {
          type: "p",
          texte:
            "La dépression, elle, est une maladie. L'Assurance Maladie la décrit, dans sa page [Comprendre la dépression](https://www.ameli.fr/assure/sante/themes/depression-troubles-depressifs/comprendre-depression), comme « une véritable maladie psychique », distincte d'une tristesse passagère, et rappelle que « la volonté seule ne permet pas de s'en sortir ». Ses causes sont multiples : événements de vie, vulnérabilité familiale, maladie chronique, facteurs neurobiologiques.",
        },
        {
          type: "p",
          texte:
            "Cette différence de nature explique pourquoi la question « burn-out ou dépression ? » n'appelle pas une réponse par élimination. On peut être épuisé par son travail sans être déprimé, déprimé sans que le travail soit en cause, ou les deux à la fois.",
        },
      ],
    },

    {
      label: "Ce qui les rapproche",
      titre: "Dépression ou burn-out : pourquoi on les confond si souvent",
      blocs: [
        {
          type: "p",
          texte:
            "Si la question revient autant, c'est que les manifestations se recoupent : on dort mal, on se lève fatigué, on n'arrive plus à se concentrer, on doute de soi.",
        },
        { type: "h3", texte: "Des symptômes qui se recoupent" },
        {
          type: "p",
          texte:
            "Les signes de la dépression, tels que les présente l'Assurance Maladie dans [Dépression : symptômes, diagnostic et évolution](https://www.ameli.fr/assure/sante/themes/depression-troubles-depressifs/symptomes-diagnostic-evolution), comprennent notamment une tristesse constante, une perte d'intérêt, des troubles du sommeil, de la fatigue et une dévalorisation de soi. La HAS, de son côté, liste parmi les manifestations de l'épuisement professionnel la fatigue, les troubles du sommeil, l'irritabilité, les troubles de la concentration, le repli sur soi et les doutes sur ses propres compétences.",
        },
        {
          type: "p",
          texte:
            "**Fatigue, sommeil, concentration, estime de soi : les deux listes partagent l'essentiel de leurs termes.** C'est pour cela qu'aucune liste de symptômes, ni celle-ci ni une autre, ne permet de trancher seul. Nous avons détaillé ailleurs [les signes du burn-out, registre par registre](/infos-utiles/signes-du-burn-out/) : lus sans un médecin, ils ne disent pas de quoi il s'agit.",
        },
        { type: "h3", texte: "Un mot plus facile à dire que l'autre" },
        {
          type: "p",
          texte:
            "Il y a aussi une raison moins médicale. « Burn-out » se dit plus volontiers que « dépression » : le mot place la cause dans le travail, là où l'autre semble désigner une fragilité personnelle. Ce choix de vocabulaire peut conduire à attendre que le travail s'allège pour aller mieux, alors qu'une maladie se soigne.",
        },
        {
          type: "p",
          texte:
            "Le dirigeant y est particulièrement exposé. Il a de bonnes raisons de rattacher sa fatigue au travail, puisqu'il en porte beaucoup, et de mauvaises raisons de ne pas consulter : le temps, l'image, le sentiment de devoir tenir. Nous avons décrit ce mécanisme dans l'article sur [la solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/). C'est aussi pourquoi, dans un [accompagnement dirigeant](/transformation-dirigeant/), la question du suivi médical passe avant toutes les autres.",
        },
      ],
    },

    {
      label: "Ce qui les distingue",
      titre: "Burnout et dépression : ce qui les distingue selon les autorités de santé",
      blocs: [
        {
          type: "p",
          texte:
            "Les autorités de santé posent quelques repères qui aident à comprendre ce que le médecin va chercher. Le tableau ci-dessous les rassemble ; ce n'est en aucun cas un outil de diagnostic.",
        },
        {
          type: "tableau",
          entetes: ["Burn-out (épuisement professionnel)", "Dépression (épisode dépressif caractérisé)"],
          lignes: [
            [
              "Statut : phénomène lié au travail, non classé comme maladie (OMS, HAS)",
              "Statut : maladie psychique (Assurance Maladie)",
            ],
            [
              "Origine : un stress chronique au travail qui n'a pas été géré avec succès (OMS)",
              "Origine : multiple, événements de vie, vulnérabilité, maladie, facteurs biologiques",
            ],
            [
              "Sphère : s'exprime d'abord dans la sphère professionnelle (INRS)",
              "Sphère : s'exprime dans tous les aspects de la vie (INRS)",
            ],
            [
              "Repère central : épuisement, distance au travail, efficacité réduite (OMS)",
              "Repère central : tristesse ou perte d'intérêt presque chaque jour, au moins deux semaines (Ameli)",
            ],
            [
              "Reconnaissance professionnelle : pas en tant que tel, faute d'être une maladie (INRS)",
              "Reconnaissance professionnelle : possible pour une dépression sévère, au cas par cas (INRS)",
            ],
          ],
        },
        { type: "h3", texte: "La sphère touchée : le repère de l'INRS" },
        {
          type: "p",
          texte:
            "L'INRS, dans sa [foire aux questions sur l'épuisement professionnel](https://www.inrs.fr/risques/epuisement-burnout/faq.html), propose la distinction la plus simple à retenir : « À la différence de la dépression qui s'exprime dans tous les aspects de la vie, il ne s'exprime au départ que dans la sphère professionnelle. » Les mots « au départ » comptent. Ils disent qu'un épuisement peut, avec le temps, déborder sur le reste de la vie.",
        },
        { type: "h3", texte: "La durée et l'intensité : le repère de la dépression" },
        {
          type: "p",
          texte:
            "Selon l'Assurance Maladie, le diagnostic de dépression suppose au moins cinq symptômes, présents presque chaque jour pendant au moins deux semaines, et une souffrance qui retentit sur la vie professionnelle, sociale et familiale. L'intensité est ensuite qualifiée de légère, modérée ou sévère. L'Assurance Maladie insiste : « Il est difficile de juger par soi-même de son état psychologique et l'évaluation par un médecin est indispensable. »",
        },
      ],
    },

    {
      label: "Quand l'un mène à l'autre",
      titre: "Du burn-out à la dépression : quand les deux se superposent",
      blocs: [
        {
          type: "p",
          texte:
            "La vraie difficulté n'est pas de choisir entre les deux mots. C'est qu'ils ne s'excluent pas. **Un épuisement professionnel peut conduire à une dépression, et une dépression peut se cacher derrière ce que l'on appelle un burn-out.**",
        },
        { type: "h3", texte: "Une spirale plutôt qu'un diagnostic" },
        {
          type: "p",
          texte:
            "L'INRS décrit le burn-out non comme une maladie psychiatrique en soi, mais comme « une spirale dangereuse qui peut conduire à la dépression » ou à l'apparition de maladies somatiques. C'est pour cette raison que l'épuisement ne se laisse pas « passer » en attendant des jours meilleurs : plus il dure, plus le risque d'évolution augmente.",
        },
        { type: "h3", texte: "Ce que le médecin va rechercher" },
        {
          type: "p",
          texte:
            "La HAS demande que l'évaluation d'un épuisement professionnel identifie les « pathologies sous-jacentes éventuelles telles que, notamment, un trouble de l'adaptation, un trouble anxieux, un trouble dépressif ». Autrement dit, face à un burn-out, le médecin cherche précisément s'il n'y a pas aussi une dépression. Ce n'est pas une nuance théorique : la prise en charge n'est pas la même, et c'est au médecin de la définir.",
        },
        { type: "h3", texte: "Pourquoi l'étiquette compte moins que la consultation" },
        {
          type: "p",
          texte:
            "La question « burn-out ou dépression ? » est légitime, mais sa réponse ne change pas la première étape : prendre rendez-vous. S'arrêter à l'étiquette « burn-out » peut retarder la prise en charge d'une dépression ; s'arrêter à « dépression » peut faire oublier ce qui, dans le travail, a produit l'épuisement.",
        },
      ],
    },

    {
      label: "Les chiffres",
      titre: "Dépression et épuisement : ce que disent les chiffres en France",
      blocs: [
        {
          type: "p",
          texte:
            "La dépression n'a rien de marginal. Selon [Épisodes dépressifs : prévalence et recours aux soins](https://www.santepubliquefrance.fr/sante-mentale/depression-et-anxiete/rapportsynthese/episodes-depressifs-prevalence-et-recours-aux-soins-barometre-de-sante-publique-france-resultats-de), synthèse du Baromètre de Santé publique France 2024, **15,6 % des adultes de 18 à 79 ans ont vécu un épisode dépressif caractérisé dans l'année.** L'Assurance Maladie relève que les jeunes adultes de 18 à 29 ans sont particulièrement touchés (22 %), ainsi que les femmes (18 %, contre 13 % des hommes).",
        },
        { type: "h3", texte: "Près d'une personne sur deux sans prise en charge" },
        {
          type: "p",
          texte:
            "Le même baromètre montre que 44 % des personnes ayant vécu un épisode dépressif dans l'année n'ont bénéficié d'aucune prise en charge, et 54 % chez les hommes. Il relève aussi que les agriculteurs, artisans, commerçants, chefs d'entreprise et ouvriers sont particulièrement mal pris en charge. Quand un soin existe, le médecin généraliste reste le premier point de contact.",
        },
        { type: "h3", texte: "Un épuisement difficile à compter" },
        {
          type: "p",
          texte:
            "Le burn-out, lui, se mesure mal, précisément parce qu'il n'est pas une maladie répertoriée. Selon la page de l'INRS [Accidents du travail et maladies professionnelles](https://www.inrs.fr/risques/psychosociaux/accidents-travail-maladies-professionnelles.html) consacrée aux risques psychosociaux, seules trois pathologies psychiques peuvent être examinées par un comité régional de reconnaissance : la dépression sévère, l'anxiété généralisée et le syndrome post-traumatique. Ce que l'on appelle un burn-out n'apparaît donc dans les statistiques qu'à travers l'une d'elles.",
        },
      ],
    },

    {
      label: "Qui consulter",
      titre: "Burn-out ou dépression : qui consulter, et dans quel ordre",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne sommes pas médecins, et cet article ne remplace pas un avis médical. Voici en revanche les portes à connaître, de la plus urgente à la plus habituelle. Aucune n'exige d'avoir d'abord tranché entre burn-out et dépression.",
        },
        {
          type: "liste",
          items: [
            "**En cas de danger immédiat**, pour vous ou pour quelqu'un d'autre : le 15 (Samu) ou le 18 (pompiers).",
            "**En cas de détresse ou d'idées suicidaires** : le [3114, numéro national de prévention du suicide](https://3114.fr/), gratuit, joignable 24 h/24 et 7 j/7 dans toute la France. Un professionnel du soin formé à la prévention du suicide répond. Vous pouvez aussi l'appeler si vous vous inquiétez pour un proche, un associé ou un salarié.",
            "**Votre médecin traitant**, dans tous les autres cas. Selon la HAS, c'est lui qui coordonne la prise en charge d'un épuisement professionnel et oriente, si besoin, vers un psychiatre.",
            "**Le médecin du travail**, pour ce qui relève des conditions de travail. La HAS recommande que le médecin traitant se mette en contact avec lui, notamment pour préparer la reprise.",
          ],
        },
        {
          type: "encadre",
          titre: "Un conseil de bon sens, pas un conseil médical",
          texte:
            "Si vous vous posez la question « burn-out ou dépression ? » depuis plusieurs semaines, c'est en soi une raison suffisante de prendre rendez-vous. Aucun coach, aucun consultant, aucun sophrologue ne remplace ce rendez-vous.",
        },
      ],
    },

    {
      label: "Côté employeur",
      titre: "Quand c'est un salarié : ce que le dirigeant peut faire, et ce qu'il ne doit pas faire",
      blocs: [
        {
          type: "p",
          texte:
            "Un collaborateur change, s'isole, s'absente. La tentation est de mettre un mot sur ce que l'on voit. C'est précisément ce qu'il faut éviter.",
        },
        { type: "h3", texte: "Ne pas qualifier, orienter" },
        {
          type: "p",
          texte:
            "Dire à un salarié qu'il « fait un burn-out » ou qu'il « est en dépression », c'est poser un diagnostic que personne dans l'entreprise n'est en position de poser. Ce qui est utile tient en trois gestes : dire ce que l'on observe, sans l'interpréter ; proposer d'en parler au médecin du travail ou à son médecin traitant ; regarder, de son côté, ce qui dans le travail pèse sur lui. Si l'inquiétude est vive, le 3114 répond aussi aux proches et aux collègues.",
        },
        { type: "h3", texte: "Regarder le travail, pas la personne" },
        {
          type: "p",
          texte:
            "La part de l'employeur n'est pas médicale, elle est organisationnelle. Charge de travail, rôles flous, décisions qui remontent toutes au même endroit, manque de reconnaissance : ce sont les leviers sur lesquels vous avez prise. Ils valent pour vos équipes comme pour vous, et nous les avons développés à propos de [la charge mentale](/infos-utiles/charge-mentale/).",
        },
        { type: "h3", texte: "La reconnaissance en maladie professionnelle" },
        {
          type: "p",
          texte:
            "L'INRS est clair : le burn-out n'étant pas une maladie, il ne peut pas être reconnu comme maladie professionnelle. Une dépression sévère peut l'être, hors tableaux, si l'incapacité prévisible atteint au moins 25 % et qu'un comité régional établit un lien direct et essentiel avec le travail. Pour une situation concrète, rapprochez-vous de votre service de prévention et de santé au travail ou d'un avocat en droit social.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Ce qu'un accompagnement peut faire après un burn-out ou une dépression, et ce qu'il ne fait pas",
      blocs: [
        {
          type: "p",
          texte:
            "Un accompagnement ne soigne ni un épuisement ni une dépression, et ne remplace pas le repos prescrit. Si votre situation relève d'un suivi médical, c'est par là que tout commence, et nous vous le dirons dès le premier échange.",
        },
        {
          type: "p",
          texte:
            "En revanche, une fois la santé prise en charge, une question demeure : qu'est-ce qui, dans l'organisation, a produit la surcharge, et comment éviter qu'elle se reconstitue au retour ? C'est l'objet d'un [coaching dirigeant](/transformation-dirigeant/) : remettre de la clarté dans les priorités, réduire le pilotage dans l'urgence, redistribuer des décisions qui reposaient sur une seule personne. Un conseiller référent suit ce travail du début à la fin ; un autodiagnostic de qualité de vie au travail peut compléter l'étape Aligner si vous en avez besoin.",
        },
        {
          type: "p",
          texte:
            "**Le médecin s'occupe de la santé, l'accompagnement s'occupe de ce qui, dans le travail, a rendu la charge intenable.** Les deux peuvent se succéder, jamais se remplacer. Si vous voulez d'abord situer votre entreprise, et voir si le nœud est chez vous ou dans l'organisation, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre burn-out et dépression ?",
      r: [
        "Le burn-out est un syndrome lié au stress chronique au travail, que l'OMS et la HAS ne classent pas comme une maladie. La dépression est une maladie psychique. Selon l'INRS, le burn-out s'exprime d'abord dans la sphère professionnelle, la dépression partout. Les symptômes se recoupent : seul un médecin peut faire la différence.",
      ],
    },
    {
      q: "Un burn-out peut-il se transformer en dépression ?",
      r: [
        "Oui. L'INRS décrit le burn-out comme une spirale dangereuse qui peut conduire à la dépression ou à des maladies somatiques. La HAS demande d'ailleurs que l'évaluation d'un épuisement professionnel recherche un éventuel trouble dépressif, anxieux ou d'adaptation sous-jacent. C'est une raison de consulter tôt, plutôt que d'attendre que la fatigue passe d'elle-même.",
      ],
    },
    {
      q: "Comment savoir si je fais un burn-out ou une dépression ?",
      r: [
        "Vous ne pouvez pas le savoir seul, et aucun questionnaire en ligne ne le dira. L'Assurance Maladie rappelle qu'il est difficile de juger soi-même de son état psychologique et que l'évaluation par un médecin est indispensable. Prenez rendez-vous avec votre médecin traitant, qui coordonne la prise en charge. En cas d'idées noires, appelez le 3114, gratuit et joignable 24 h/24.",
      ],
    },
    {
      q: "Le burn-out est-il reconnu comme une maladie ?",
      r: [
        "Non. L'OMS le classe parmi les facteurs influant sur l'état de santé, pas parmi les maladies, et la HAS indique qu'il n'est pas une maladie caractérisée. Il n'est pas pour autant anodin : la HAS précise qu'un arrêt de travail est le plus souvent nécessaire. Et, selon l'INRS, il ne peut pas être reconnu comme maladie professionnelle ; une dépression sévère peut l'être, dans des conditions strictes.",
      ],
    },
    {
      q: "Qui consulter en premier en cas d'épuisement ?",
      r: [
        "Votre médecin traitant. Selon la HAS, c'est lui qui coordonne la prise en charge d'un épuisement professionnel et oriente si besoin vers un psychiatre, en lien avec le médecin du travail pour les conditions de travail et la reprise. En cas de détresse ou de pensées suicidaires, le 3114 répond 24 h/24 et 7 j/7 ; en cas de danger immédiat, appelez le 15.",
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
      titre: "Epuisement professionnel ou burnout. Foire aux questions",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/epuisement-burnout/faq.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS) : Accidents du travail et maladies professionnelles",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/accidents-travail-maladies-professionnelles.html",
    },
    {
      titre: "Comprendre la dépression",
      editeur: "Assurance Maladie (ameli.fr)",
      url: "https://www.ameli.fr/assure/sante/themes/depression-troubles-depressifs/comprendre-depression",
    },
    {
      titre: "Dépression : symptômes, diagnostic et évolution",
      editeur: "Assurance Maladie (ameli.fr)",
      url: "https://www.ameli.fr/assure/sante/themes/depression-troubles-depressifs/symptomes-diagnostic-evolution",
    },
    {
      titre:
        "Épisodes dépressifs : prévalence et recours aux soins. Baromètre de Santé publique France : résultats de l'édition 2024",
      editeur: "Santé publique France",
      url: "https://www.santepubliquefrance.fr/sante-mentale/depression-et-anxiete/rapportsynthese/episodes-depressifs-prevalence-et-recours-aux-soins-barometre-de-sante-publique-france-resultats-de",
    },
    {
      titre: "Numéro national de prévention du suicide - 3114",
      editeur: "3114, piloté par le ministère chargé de la santé",
      url: "https://3114.fr/",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2027-03-15",
  accent: "qvt",
  pilier: { href: "/transformation-dirigeant/", ancre: "accompagnement dirigeant" },

  valide: false,
};
