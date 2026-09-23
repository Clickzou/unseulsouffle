import type { Article } from "@/lib/content/article";

/**
 * Article de fond — requête « manager de transition » (3 100/mois, KD 80).
 * Un Seul Souffle n'exerce PAS le management de transition : l'article aide le
 * dirigeant à choisir entre trois formules, sans revendiquer ce métier ni le
 * dénigrer (brief § 3). Rattaché au pilier /transformation-entreprise/.
 */
export const article: Article = {
  slug: "manager-de-transition-ou-direction-a-temps-partage",

  motCle: "manager de transition (3 100 recherches/mois)",
  motsClesSecondaires: [
    "management de transition",
    "management de transition toulouse (210 recherches/mois)",
    "direction à temps partagé",
  ],

  // 40 / 42
  metaTitle: "Manager de transition ou temps partagé ?",
  metaDescription:
    "Manager de transition, direction à temps partagé ou accompagnement : définitions, durée, coût et comparatif pour choisir la bonne formule en PME.",

  h1: "Manager de transition ou direction à temps partagé : que choisir pour votre PME ?",
  chapo:
    "Un manager de transition est un cadre dirigeant externe qui prend un poste pour une mission définie et limitée dans le temps : remplacer un directeur parti, redresser une situation, conduire un projet lourd. C'est la bonne réponse quand un poste de direction doit être tenu tout de suite, au quotidien. Si votre besoin est une compétence de direction régulière mais pas à plein temps, la direction à temps partagé est plus adaptée. Et si le problème tient à l'organisation plutôt qu'à un fauteuil vide, un accompagnement vaut mieux qu'un remplaçant. Voici comment trancher entre les trois.",

  essentiel: {
    reponse:
      "Le management de transition consiste à confier temporairement un poste de direction à un professionnel externe, pour une mission précise avec un début et une fin. Il convient quand un poste doit être occupé immédiatement : départ, absence, crise, projet à piloter au quotidien. La direction à temps partagé apporte une compétence de direction quelques jours par mois, dans la durée, à une PME qui n'a pas besoin d'un cadre à plein temps. L'accompagnement ne tient aucun poste : il aide le dirigeant et ses équipes à régler un problème d'organisation qu'ils porteront ensuite seuls. Un Seul Souffle n'est pas un cabinet de management de transition ; ce guide vous aide à choisir la formule qui correspond à votre situation.",
    points: [
      "Manager de transition : un poste tenu par un externe, pour une mission limitée dans le temps",
      "Direction à temps partagé : une fonction de direction exercée quelques jours par mois, sans limite de durée fixée à l'avance",
      "Accompagnement : un conseiller référent aide l'équipe en place à résoudre un problème d'organisation, sans prendre le poste",
      "Le bon critère de choix : un fauteuil vide, une compétence manquante ou une organisation qui bloque",
      "Dans les trois cas, exigez une mission écrite, un objectif vérifiable et une date de fin ou de révision",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qu'est-ce qu'un manager de transition ?",
      blocs: [
        {
          type: "p",
          texte:
            "Vous venez d'apprendre le départ de votre directeur industriel. Ou votre directrice financière part en congé long au moment de la clôture. Ou un client majeur vient de faire défaut et la trésorerie se tend. Dans ces trois cas, la question n'est pas de savoir qui recruter dans six mois : c'est de savoir qui tient la barre lundi matin. **C'est exactement la question à laquelle répond le manager de transition.**",
        },
        { type: "h3", texte: "Une définition partagée par la profession" },
        {
          type: "p",
          texte:
            "La fédération professionnelle du secteur, France Transition, définit le management de transition comme [le recours par une organisation à des compétences managériales opérationnelles externes](https://www.francetransition.org/definition/) pour accomplir une mission spécifique, avec un objectif précis, un début et une fin. Bpifrance retient la même lecture : [recourir de manière temporaire à un professionnel du management pour accomplir une mission spécifique](https://bigmedia.bpifrance.fr/nos-dossiers/comment-fonctionne-le-management-de-transition), souvent dans un contexte de crise ou de changement.",
        },
        {
          type: "p",
          texte:
            "Le mot important est « opérationnelles ». Le manager de transition ne vient pas observer ni recommander : il occupe le poste, prend les décisions qui s'y rattachent et encadre l'équipe. France Transition insiste d'ailleurs sur ce point en distinguant le métier du conseil, du recrutement et de la chasse de tête.",
        },
        { type: "h3", texte: "Qui sont les managers de transition" },
        {
          type: "p",
          texte:
            "Ce sont des cadres dirigeants expérimentés. Bpifrance indique qu'un manager de transition a [généralement une carrière de 15 à 25 ans derrière lui](https://bigmedia.bpifrance.fr/nos-dossiers/comment-fonctionne-le-management-de-transition), ce qui lui permet d'être opérationnel sans période d'apprentissage. Toujours selon Bpifrance, ces professionnels exercent le plus souvent en portage salarial, en indépendants ou au sein de cabinets spécialisés.",
        },
        {
          type: "p",
          texte:
            "Le portage salarial est un cadre prévu par le Code du travail : l'entreprise cliente signe un contrat commercial avec une société de portage, qui emploie et rémunère le professionnel, dit « salarié porté » ([article L1254-1](https://code.travail.gouv.fr/code-du-travail/l1254-1)). Pour vous, dirigeant, cela ne change pas grand-chose au quotidien : vous achetez une prestation, pas un contrat de travail.",
        },
        {
          type: "p",
          texte:
            "Une précision utile avant d'aller plus loin : le manager de transition règle une question de poste. Si votre difficulté porte sur la manière dont l'entreprise fonctionne, les rôles, les circuits de décision, la coordination entre services, c'est une question de [conseil en organisation](/transformation-entreprise/), et nous y revenons plus bas.",
        },
      ],
    },

    {
      label: "En pratique",
      titre: "Management de transition : missions, durée et facturation",
      blocs: [
        {
          type: "p",
          texte:
            "Avant de signer, un dirigeant veut savoir trois choses : ce que le manager va faire, combien de temps il restera et comment il sera payé. Les données publiées par la profession permettent d'y répondre avec des ordres de grandeur sérieux.",
        },
        { type: "h3", texte: "Les missions les plus courantes" },
        {
          type: "p",
          texte:
            "Bpifrance distingue [trois grandes familles de situations](https://bigmedia.bpifrance.fr/nos-dossiers/comment-fonctionne-le-management-de-transition) :",
        },
        {
          type: "liste",
          items: [
            "**Le management relais** : un dirigeant ou un cadre s'absente ou quitte l'entreprise, et il faut assurer la continuité jusqu'à son retour ou jusqu'au recrutement de son successeur",
            "**La conduite d'un projet de croissance ou de transformation** : réorganisation, internationalisation, changement d'outils ou de processus qui demande un pilote à plein régime",
            "**La résolution d'une crise** : redressement financier, restructuration, fusion, conflit social ou incident majeur",
          ],
        },
        {
          type: "p",
          texte:
            "Le baromètre de France Transition, qui agrège les données de 23 cabinets adhérents, confirme ce poids du remplacement : sur le premier semestre 2025, il recense [473 missions de management relais terminées](https://www.francetransition.org/download/13954/) sur 914 missions achevées dans la période.",
        },
        { type: "h3", texte: "Une durée de quelques mois" },
        {
          type: "p",
          texte:
            "Une mission de transition se compte en mois, pas en années. Selon le même [baromètre France Transition du premier semestre 2025](https://www.francetransition.org/download/13954/), la durée moyenne des missions terminées sur la période était de 6,87 mois, et de 6,5 mois pour les missions de management relais. Le baromètre indique aussi que 77 missions se sont conclues par l'embauche du manager par l'entreprise cliente : une issue possible, mais minoritaire.",
        },
        { type: "h3", texte: "Une facturation à la journée" },
        {
          type: "p",
          texte:
            "Le management de transition se facture au jour d'intervention. Le [baromètre France Transition](https://www.francetransition.org/download/13954/) donne un prix moyen de 1 333 euros hors taxes par jour pour les missions signées au premier semestre 2025. La répartition est plus parlante que la moyenne : 601 missions se situaient entre 1 000 et 1 500 euros par jour, 236 entre 1 500 et 2 000 euros, 219 sous 1 000 euros et 44 au-delà de 2 000 euros.",
        },
        {
          type: "p",
          texte:
            "Ces chiffres portent sur les missions passées par les cabinets adhérents de la fédération, pas sur celles des indépendants qui contractent en direct. Ils donnent un repère, pas un devis. Pour estimer le coût réel de votre mission, multipliez le prix journalier par le nombre de jours prévus chaque mois, puis par la durée : c'est ce total, et non le prix du jour, qu'il faut comparer au coût d'un recrutement ou d'une autre formule.",
        },
      ],
    },

    {
      label: "Le bon cas",
      titre: "Quand faire appel à un manager de transition",
      blocs: [
        {
          type: "p",
          texte:
            "Le management de transition est une excellente réponse à un problème précis. Il devient une réponse coûteuse et frustrante quand on l'applique au mauvais problème. Trois situations le justifient clairement.",
        },
        { type: "h3", texte: "Un poste clé est vide et ne peut pas attendre" },
        {
          type: "p",
          texte:
            "Départ brutal, maladie, recrutement qui échoue en période d'essai : la fonction doit être tenue, et la tenir vous-même en plus de votre rôle n'est pas une option durable. Le manager relais maintient les décisions courantes et donne le temps de recruter sans précipitation. C'est aussi une manière d'éviter une embauche faite dans l'urgence, que l'on regrette souvent.",
        },
        { type: "h3", texte: "Une crise demande un pilote à plein temps" },
        {
          type: "p",
          texte:
            "Quand la situation exige des décisions quotidiennes, rapides et parfois impopulaires, un externe expérimenté apporte deux choses que l'équipe en place n'a pas toujours : l'habitude de ce type de moment et une neutralité que Bpifrance met en avant, puisqu'il [n'est pas appelé à rester dans l'entreprise](https://bigmedia.bpifrance.fr/nos-dossiers/comment-fonctionne-le-management-de-transition). Il peut trancher sans avoir à ménager sa carrière interne.",
        },
        { type: "h3", texte: "Un projet dépasse la capacité de l'équipe" },
        {
          type: "p",
          texte:
            "Une réorganisation industrielle, l'intégration d'une entreprise rachetée, le déploiement d'un nouvel outil de gestion : certains projets demandent un chef de projet dédié pendant plusieurs mois. Si personne en interne n'a ni le temps ni l'expérience de ce type de chantier, un manager de transition peut le piloter et le transmettre.",
        },
        {
          type: "encadre",
          titre: "Le signal qui ne trompe pas",
          texte:
            "Si vous pouvez écrire en une phrase le poste à tenir, l'objectif à atteindre et la date à laquelle quelqu'un d'autre reprendra le relais, le management de transition est probablement la bonne formule.",
        },
      ],
    },

    {
      label: "L'alternative",
      titre: "La direction à temps partagé : une fonction tenue sans poste à plein temps",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de PME n'ont pas un poste vide : elles ont une fonction qui n'a jamais été vraiment tenue. Personne ne pilote la trésorerie à trois mois, ou le commercial repose sur le dirigeant seul. Le besoin est réel, permanent, mais il ne représente pas un temps plein. Bpifrance résume bien cette double contrainte : le dirigeant doit [s'adjoindre des compétences supplémentaires, sans toutefois pouvoir payer un spécialiste à plein temps](https://www.bpifrance.fr/nos-actualites/le-boom-du-travail-a-temps-partage-setend-aux-pme).",
        },
        { type: "h3", texte: "Ce que recouvre le temps partagé" },
        {
          type: "p",
          texte:
            "Un directeur à temps partagé exerce une fonction de direction dans plusieurs entreprises à la fois, quelques jours par mois dans chacune. Il prend en charge la fonction dans la durée, avec un rythme régulier, plutôt qu'une mission courte à plein régime. Le Code du travail prévoit même un cadre dédié : l'entrepreneur de travail à temps partagé, dont l'activité est de mettre à disposition [du personnel qualifié que les entreprises ne peuvent recruter elles-mêmes en raison de leur taille ou de leurs moyens](https://code.travail.gouv.fr/code-du-travail/l1252-2). Dans la pratique, beaucoup de directeurs à temps partagé interviennent aussi en indépendants ou en portage.",
        },
        { type: "h3", texte: "Les fonctions les plus concernées" },
        {
          type: "p",
          texte:
            "La finance et le commercial sont les deux fonctions où le modèle est le plus répandu dans les PME, parce que leur besoin est continu sans justifier un poste complet. Au sein de notre cabinet, deux personnes interviennent de cette manière : Marjorie Anglade, associée fondatrice, en [DAF externalisé](/daf-externalise-toulouse/) sur le prévisionnel de trésorerie et les tableaux de bord, et Nicolas Vimini, partenaire, en direction commerciale à temps partagé. Nous détaillons ce second cas dans notre article sur le [directeur commercial externalisé](/infos-utiles/directeur-commercial-externalise/).",
        },
        { type: "h3", texte: "Ses limites" },
        {
          type: "p",
          texte:
            "Le temps partagé ne remplace pas une présence quotidienne. Il ne convient pas à une crise qui exige des décisions chaque matin, ni à un poste de management d'une équipe nombreuse qui a besoin de son responsable sur place. Il suppose aussi qu'une personne en interne prenne le relais entre deux passages : sans ce relais, les décisions s'accumulent en attendant la prochaine visite.",
        },
      ],
    },

    {
      label: "Troisième voie",
      titre: "Quand le problème n'est pas un poste : l'accompagnement",
      blocs: [
        {
          type: "p",
          texte:
            "Il existe un cas que ni le manager de transition ni le directeur à temps partagé ne règlent : celui où tous les postes sont tenus, où les personnes sont compétentes, et où l'entreprise bloque quand même. Les décisions remontent toutes au dirigeant, les services se coordonnent mal, les mêmes problèmes reviennent de réunion en réunion.",
        },
        { type: "h3", texte: "Un remplaçant ne règle pas un problème de système" },
        {
          type: "p",
          texte:
            "Installer un manager de transition dans une organisation qui dysfonctionne produit souvent le même résultat : tant qu'il est là, ça tient, parce qu'il absorbe lui-même les arbitrages. À son départ, le fonctionnement antérieur revient. Le problème n'était pas l'absence d'un bon manager, mais la manière dont les rôles et les décisions sont répartis.",
        },
        {
          type: "p",
          texte:
            "Dans ce cas, la bonne formule est un accompagnement : un intervenant qui ne prend pas le poste, mais aide le dirigeant et ses équipes à changer la façon dont l'entreprise fonctionne. Les décisions restent les vôtres, et c'est précisément ce qui permet au changement de tenir après son départ. Le cadre général de ce métier est détaillé dans notre article sur le [consultant en management](/infos-utiles/consultant-en-management/).",
        },
        { type: "h3", texte: "Ce que fait Un Seul Souffle, et ce qu'il ne fait pas" },
        {
          type: "p",
          texte:
            "Soyons clairs : nous ne sommes pas un cabinet de management de transition, et nous ne plaçons pas de dirigeants intérimaires. Nous accompagnons des PME et des ETI de 10 à 250 salariés, à Toulouse et en Occitanie, sur des parcours de 3 à 12 mois. Un conseiller référent prend votre sujet en charge et reste votre interlocuteur du début à la fin ; une autre expertise du cabinet n'intervient que si le sujet l'exige, sur ce point précis.",
        },
        {
          type: "p",
          texte:
            "Quand le nœud tient au dirigeant lui-même, à sa charge de décision ou à sa difficulté à déléguer, c'est un [accompagnement dirigeant](/transformation-dirigeant/) qui répond au besoin, pas un renfort de management.",
        },
      ],
    },

    {
      label: "Comparatif",
      titre: "Manager de transition, temps partagé ou accompagnement : le tableau comparatif",
      blocs: [
        {
          type: "p",
          texte:
            "Les trois formules ne s'opposent pas : elles répondent à trois problèmes différents. Le premier tableau les compare critère par critère, le second part de votre situation.",
        },
        {
          type: "tableau",
          entetes: ["Critère", "Transition · Temps partagé · Accompagnement"],
          lignes: [
            [
              "Ce qu'on achète",
              "Transition : un poste tenu. Temps partagé : une fonction exercée régulièrement. Accompagnement : un changement porté par l'équipe en place.",
            ],
            [
              "Présence",
              "Transition : dans l'entreprise, au rythme du poste. Temps partagé : quelques jours par mois. Accompagnement : des temps de travail planifiés, sur le terrain et avec le dirigeant.",
            ],
            [
              "Durée",
              "Transition : une mission de quelques mois, avec une date de fin. Temps partagé : dans la durée, révisable. Accompagnement : un parcours borné, fixé au départ.",
            ],
            [
              "Qui décide",
              "Transition : le manager, dans le périmètre du poste. Temps partagé : le directeur sur sa fonction. Accompagnement : le dirigeant et ses équipes.",
            ],
            [
              "Facturation habituelle",
              "Transition : au jour, sur la durée de la mission. Temps partagé : un volume de jours mensuel. Accompagnement : selon le parcours retenu.",
            ],
            [
              "Ce qui reste après",
              "Transition : la continuité assurée et un projet livré. Temps partagé : la fonction, tant que le contrat dure. Accompagnement : une organisation qui fonctionne sans l'intervenant.",
            ],
          ],
        },
        {
          type: "tableau",
          entetes: ["Votre situation", "La formule la plus adaptée"],
          lignes: [
            ["Votre directeur financier part le mois prochain", "Manager de transition, le temps de recruter"],
            ["Une crise impose des décisions quotidiennes", "Manager de transition, avec un objectif et une date de sortie"],
            [
              "Personne ne pilote la trésorerie, mais un DAF à plein temps serait surdimensionné",
              "Direction financière à temps partagé",
            ],
            ["Le commercial repose entièrement sur vous", "Direction commerciale à temps partagé"],
            [
              "Tous les postes sont tenus, mais tout remonte à vous",
              "Accompagnement de l'organisation",
            ],
            ["Vous décidez dans l'urgence et déléguez mal", "Accompagnement du dirigeant"],
          ],
        },
        {
          type: "p",
          texte:
            "**Si vous hésitez entre deux lignes, posez-vous une seule question : le problème disparaîtrait-il si la bonne personne occupait le bon poste demain ?** Si oui, cherchez une personne : manager de transition ou directeur à temps partagé. Si non, le problème est ailleurs, et un remplaçant ne le résoudra pas.",
        },
      ],
    },

    {
      label: "Choisir",
      titre: "Management de transition à Toulouse : comment choisir votre intervenant",
      blocs: [
        {
          type: "p",
          texte:
            "Que vous cherchiez un manager de transition à Toulouse, un directeur à temps partagé ou un cabinet d'accompagnement en Occitanie, les mêmes vérifications s'appliquent. Elles prennent une heure et évitent des mois de malentendu.",
        },
        { type: "h3", texte: "Écrire la mission avant de choisir la personne" },
        {
          type: "p",
          texte:
            "Rédigez une page : la situation, l'objectif vérifiable, la date de fin ou de révision, ce que l'intervenant décide seul et ce qu'il vous soumet. Si vous n'arrivez pas à écrire l'objectif, c'est un indice que vous n'êtes pas encore face à un besoin de management de transition, mais face à un problème à diagnostiquer.",
        },
        { type: "h3", texte: "Les questions à poser en entretien" },
        {
          type: "liste",
          items: [
            "Avez-vous déjà tenu ce poste, ou conduit ce type de projet, dans une entreprise de notre taille ?",
            "Comment se passent vos trente premiers jours, concrètement ?",
            "À qui transmettez-vous le poste à la fin, et comment préparez-vous ce passage ?",
            "Combien de jours par mois intervenez-vous, et qui prend le relais entre deux passages ?",
            "Sous quel statut intervenez-vous : indépendant, portage salarial, cabinet ?",
            "Que se passe-t-il si l'objectif n'est pas atteint à la date prévue ?",
          ],
        },
        { type: "h3", texte: "Vérifier ce qui se passera après" },
        {
          type: "p",
          texte:
            "Le vrai critère de réussite d'une intervention externe, quelle que soit sa forme, est ce qui reste quand l'intervenant part. Un manager de transition doit préparer son successeur. Un directeur à temps partagé doit laisser des outils que l'équipe sait utiliser. Un accompagnement doit rendre l'entreprise autonome. Demandez comment ce passage sera organisé dès le premier rendez-vous, pas à la fin de la mission.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore quel est votre vrai problème, un poste, une compétence ou une organisation, commencez par là. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer ce qui bloque avant de choisir la formule qui y répond.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre un manager de transition et un consultant ?",
      r: [
        "Le manager de transition occupe un poste et prend les décisions qui s'y rattachent : il est opérationnel, encadre une équipe et répond d'objectifs. Le consultant, lui, analyse, recommande ou accompagne, mais ne tient pas le poste. Les décisions restent au dirigeant et à ses équipes. La profession du management de transition revendique d'ailleurs cette différence et se distingue explicitement du conseil.",
      ],
    },
    {
      q: "Combien de temps dure une mission de management de transition ?",
      r: [
        "Une mission se compte en mois, pas en années. Le baromètre publié par France Transition, la fédération du secteur, montre une durée moyenne de quelques mois, un peu plus courte pour les missions de remplacement que pour les autres. La durée dépend surtout de l'objectif : assurer un intérim le temps d'un recrutement est plus court que conduire une restructuration. Dans tous les cas, la date de fin se fixe au départ et se révise explicitement.",
      ],
    },
    {
      q: "Comment est facturé un manager de transition ?",
      r: [
        "Il est facturé à la journée, le plus souvent par un cabinet spécialisé, une société de portage salarial ou directement en tant qu'indépendant. Le coût réel d'une mission se calcule en multipliant le prix du jour par le nombre de jours prévus chaque mois, puis par la durée. C'est ce total qu'il faut comparer au coût d'un recrutement ou d'une direction à temps partagé.",
      ],
    },
    {
      q: "Direction à temps partagé ou manager de transition : lequel choisir pour une PME ?",
      r: [
        "Choisissez un manager de transition si un poste doit être tenu tout de suite et chaque jour, pour une période limitée : départ, absence, crise. Choisissez la direction à temps partagé si votre PME a besoin d'une compétence de direction régulière, en finance ou en commercial par exemple, sans que le volume de travail justifie un poste à plein temps. Le premier comble un vide, le second installe une fonction.",
      ],
    },
    {
      q: "Un Seul Souffle propose-t-il du management de transition ?",
      r: [
        "Non. Un Seul Souffle est un cabinet d'accompagnement de dirigeants de PME et d'ETI à Toulouse et en Occitanie : un conseiller référent prend votre sujet en charge, sans occuper de poste dans l'entreprise. Certains membres de l'équipe interviennent à temps partagé sur une fonction, la finance ou le commercial. Si votre besoin est un intérim de direction, un cabinet de management de transition sera mieux placé.",
      ],
    },
  ],

  sources: [
    {
      titre: "Comment fonctionne le management de transition ?",
      editeur: "Bpifrance (Big média)",
      url: "https://bigmedia.bpifrance.fr/nos-dossiers/comment-fonctionne-le-management-de-transition",
    },
    {
      titre: "Le boom du travail à temps partagé s'étend aux PME",
      editeur: "Bpifrance",
      url: "https://www.bpifrance.fr/nos-actualites/le-boom-du-travail-a-temps-partage-setend-aux-pme",
    },
    {
      titre: "Qu'est-ce que le Management de Transition ?",
      editeur: "France Transition, fédération des acteurs du management de transition",
      url: "https://www.francetransition.org/definition/",
    },
    {
      titre: "France Transition Baromètre 2025 — 1S 2025",
      editeur: "France Transition, fédération des acteurs du management de transition",
      url: "https://www.francetransition.org/download/13954/",
    },
    {
      titre: "L1252-2 - Code du travail numérique",
      editeur: "Ministère du Travail (Code du travail numérique)",
      url: "https://code.travail.gouv.fr/code-du-travail/l1252-2",
    },
    {
      titre: "L1254-1 - Code du travail numérique",
      editeur: "Ministère du Travail (Code du travail numérique)",
      url: "https://code.travail.gouv.fr/code-du-travail/l1254-1",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-09-23",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
