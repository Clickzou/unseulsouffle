import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, conseil en organisation. Signé Olivia Artur.
 * Requête : « prévention des risques psychosociaux » (480/mois, KD 27).
 * Secondaires : « 6 facteurs de risques psychosociaux » (320), « questionnaire
 * RPS » (260), « diagnostic RPS » (260).
 *
 * Sujet sensible : aucun diagnostic, aucun conseil médical. Olivia Artur est
 * sophrologue et praticienne PNL, pas médecin ni intervenante en prévention des
 * risques professionnels (IPRP) enregistrée : le texte ne le laisse jamais
 * entendre. Il renvoie vers le médecin du travail, le médecin traitant et le 3114.
 * Le volet juridique reste descriptif (Légifrance) : pas de conseil sur un
 * contentieux. Sources ouvertes le 24/09/2026. Les pages de la Dares étaient
 * inaccessibles ce jour-là (protection anti-robot) : aucun chiffre Dares cité.
 */
export const article: Article = {
  slug: "prevention-risques-psychosociaux",

  motCle: "prévention des risques psychosociaux (480/mois, KD 27) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "6 facteurs de risques psychosociaux (320/mois)",
    "questionnaire RPS (260/mois)",
    "diagnostic RPS (260/mois)",
  ],

  // 40 / 42
  metaTitle: "Prévention des risques psychosociaux PME",
  // 143 / 150
  metaDescription:
    "Prévention des risques psychosociaux en PME : les 6 facteurs, le diagnostic RPS, le bon usage d'un questionnaire et un plan d'action qui tient.",

  h1: "Prévention des risques psychosociaux : la méthode pour une PME",

  chapo:
    "La prévention des risques psychosociaux ne consiste pas à apprendre à vos salariés à mieux supporter le stress. Elle consiste à repérer, dans l'organisation du travail, ce qui use les personnes, puis à le corriger. La loi vous en fait une obligation : protéger la santé physique et mentale des salariés, et inscrire ces risques dans le document unique. La méthode tient en quatre temps : connaître les six familles de facteurs, poser un diagnostic RPS à partir des situations réelles, utiliser un questionnaire seulement comme appui, puis tenir un plan d'action court et suivi. Et quand une personne va mal, la première porte reste le médecin.",

  essentiel: {
    reponse:
      "Les risques psychosociaux (RPS) sont les risques pour la santé mentale, physique et sociale engendrés par les conditions d'emploi et par des facteurs organisationnels et relationnels. Le cadre de référence en France les regroupe en six familles : intensité et temps de travail, exigences émotionnelles, manque d'autonomie, rapports sociaux dégradés, conflits de valeurs, insécurité de la situation de travail. L'employeur doit les évaluer et les inscrire dans le document unique d'évaluation des risques professionnels. La prévention efficace est collective et porte sur le travail, pas sur la résistance individuelle des salariés.",
    points: [
      "Les six familles de facteurs servent de grille pour le diagnostic RPS et pour le document unique",
      "L'évaluation part des situations de travail réelles, avec les salariés et le service de santé au travail",
      "Un questionnaire RPS ne suffit jamais seul : l'INRS demande de le compléter par des entretiens, des observations et des documents",
      "Un diagnostic sans plan d'action démobilise : mieux vaut trois actions tenues que quinze promises",
      "Une personne en souffrance relève du médecin du travail ou du médecin traitant ; en cas de détresse, le 3114",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Prévention des risques psychosociaux : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot RPS recouvre des réalités très différentes, du stress au harcèlement. La définition de référence clarifie les choses. Selon le rapport du Collège d'expertise sur le suivi des risques psychosociaux au travail, rédigé par Michel Gollac et Marceline Bodier et publié en 2011, [Mesurer les facteurs psychosociaux de risque au travail pour les maîtriser](https://www.cnis.fr/wp-content/uploads/2017/11/DPR_2011_RENCONTRE_risques_psychosociaux.pdf), ce sont « les risques pour la santé mentale, physique et sociale, engendrés par les conditions d'emploi et les facteurs organisationnels et relationnels susceptibles d'interagir avec le fonctionnement mental ».",
        },
        { type: "h3", texte: "Un risque se définit par son origine, pas par ses effets" },
        {
          type: "p",
          texte:
            "Le même rapport le dit nettement : ce qui rend un risque psychosocial, **ce n'est pas sa manifestation, mais son origine.** Un mal de dos, une insomnie, une dépression peuvent en découler. La prévention ne commence donc pas par les symptômes des personnes. Elle commence par la manière dont le travail est organisé, réparti et encadré.",
        },
        { type: "h3", texte: "Ce que la loi vous demande" },
        {
          type: "p",
          texte:
            "L'[article L4121-1 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828) impose à l'employeur de prendre « les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs » : actions de prévention, information et formation, organisation et moyens adaptés. L'[article L4121-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033019913) précise les principes à suivre, dont celui de planifier la prévention en y intégrant l'organisation du travail, les conditions de travail, les relations sociales et les risques liés au harcèlement moral.",
        },
      ],
    },

    {
      label: "La grille",
      titre: "Les 6 facteurs de risques psychosociaux, traduits pour une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Le rapport de 2011 a regroupé les facteurs de risque en six familles. L'INRS, qui reprend cette grille dans son dossier sur les [facteurs de risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html), en fait la base de toute évaluation. Leur intérêt pour un dirigeant est pratique : ils transforment un malaise diffus en questions précises sur le travail.",
        },
        {
          type: "tableau",
          entetes: ["Facteur de risque", "À quoi il ressemble dans une PME"],
          lignes: [
            ["Intensité et temps de travail", "Objectifs flous ou irréalistes, polyvalence subie, urgences permanentes, horaires imprévisibles"],
            ["Exigences émotionnelles", "Clients difficiles, obligation de garder son calme face à l'agressivité, contact avec la détresse d'autrui"],
            ["Manque d'autonomie", "Aucune marge sur la façon de faire, décisions qui remontent toutes au dirigeant, compétences inutilisées"],
            ["Rapports sociaux dégradés", "Manque de soutien du manager ou des collègues, reconnaissance absente, sentiment d'injustice dans la répartition"],
            ["Conflits de valeurs", "Devoir bâcler un travail, vendre ce qu'on juge inutile, agir contre son éthique professionnelle"],
            ["Insécurité de la situation de travail", "Peur de perdre son emploi, réorganisations annoncées tard, changements subis sans explication"],
          ],
        },
        { type: "h3", texte: "Des facteurs qui se cumulent" },
        {
          type: "p",
          texte:
            "Dans une petite structure, ces facteurs s'additionnent vite. Une commande urgente fait sauter le planning, le chef d'atelier arbitre sans pouvoir décider, le client s'impatiente et l'équipe sent qu'on lui demande de livrer moins bien : quatre familles touchées en une journée. C'est pour cela que la grille sert moins à cocher des cases qu'à voir où les tensions se croisent. Et c'est pour cela que la prévention des RPS relève d'abord du [conseil en organisation](/transformation-entreprise/) : la plupart de ces tensions naissent de la répartition des rôles, des priorités et des décisions, bien avant de se lire dans l'humeur des équipes.",
        },
        { type: "h3", texte: "Le dirigeant n'est pas hors de la grille" },
        {
          type: "p",
          texte:
            "Ces facteurs s'appliquent aussi à vous. Intensité, isolement, conflits de valeurs quand il faut licencier : notre article sur [la charge mentale](/infos-utiles/charge-mentale/) montre comment ce poids s'accumule en haut de l'organisation.",
        },
      ],
    },

    {
      label: "Les enjeux",
      titre: "Pourquoi la prévention des RPS concerne aussi les PME",
      blocs: [
        {
          type: "p",
          texte:
            "On associe souvent les RPS aux grands groupes. Les données disent autre chose, et le droit ne fait pas de distinction de taille.",
        },
        { type: "h3", texte: "Des effets mesurés sur la santé" },
        {
          type: "p",
          texte:
            "L'INRS a actualisé l'état des connaissances en compilant plus de 800 études, selon son communiqué [Risques psychosociaux au travail et effets sur la santé des salariés](https://www.inrs.fr/header/presse/cp-expositions-psychosociales-effets-sante.html). Quelques exemples cités : un temps de travail supérieur à 48 heures par semaine s'accompagne d'un excès de risque de plus de 20 % d'accident vasculaire cérébral ; une forte demande psychologique double le risque de burn-out ; le manque de soutien social s'accompagne d'un excès de risque de plus de 40 % de lombalgies. **Les RPS ne restent pas dans la tête : ils finissent dans le corps et dans les arrêts de travail.**",
        },
        {
          type: "p",
          texte:
            "L'Assurance Maladie le confirme dans [Affections psychiques d'origine professionnelle : reconnaissance et rôle du CMI](https://www.ameli.fr/medecin/actualites/affections-psychiques-d-origine-professionnelle-reconnaissance-et-role-du-cmi), publié en avril 2026. En 2024, 1 805 maladies psychiques ont été reconnues comme maladies professionnelles, soit 9 % de plus en un an, dont 73 % de dépressions. Près de 29 000 accidents du travail reconnus la même année sont en lien avec des affections psychiques, soit plus de 5 % des accidents du travail.",
        },
        { type: "h3", texte: "Le document unique inclut les RPS" },
        {
          type: "p",
          texte:
            "L'[article R4121-1 du Code du travail](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000018488244/) impose de transcrire l'évaluation des risques dans un document unique, et l'article R4121-2 d'en faire la mise à jour au moins chaque année dans les entreprises d'au moins onze salariés, ainsi qu'à chaque changement important. L'INRS le rappelle dans sa [FAQ sur les risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/faq.html) : les RPS doivent y figurer au même titre que les autres risques.",
        },
      ],
    },

    {
      label: "Le diagnostic",
      titre: "Diagnostic RPS : conduire l'évaluation pas à pas",
      blocs: [
        {
          type: "p",
          texte:
            "Le dossier [Prévenir les risques psychosociaux : prévention](https://www.inrs.fr/risques/psychosociaux/prevention.html) de l'INRS le dit d'emblée : « il n'existe pas de solutions toutes faites ». Les solutions se cherchent entreprise par entreprise, après une évaluation des facteurs propres à chacune. L'INRS décrit cinq étapes : préparer la démarche, analyser les situations de travail réelles, élaborer un plan d'actions, le mettre en œuvre, puis le suivre et l'évaluer.",
        },
        { type: "h3", texte: "1. Poser les règles avant de poser les questions" },
        {
          type: "p",
          texte:
            "La première étape fixe le cadre, validé avec le CSE s'il existe, ou avec les salariés. Trois règles comptent plus que les autres. La démarche porte sur les situations de travail, pas sur la psychologie des personnes ni sur leur vie privée. Elle ne cherche pas de coupable : l'INRS conseille de séparer dans le temps l'analyse des causes et toute recherche de responsabilité. Enfin, la parole des salariés interrogés est protégée. Ces règles s'écrivent.",
        },
        { type: "h3", texte: "2. Associer les bonnes personnes" },
        {
          type: "p",
          texte:
            "La démarche doit être participative : salariés, représentants du personnel et service de prévention et de santé au travail. Dans une PME sans CSE, un petit groupe de pilotage suffit, avec le dirigeant, un ou deux managers et des salariés volontaires de métiers différents.",
        },
        { type: "h3", texte: "3. Analyser le travail réel, pas l'organigramme" },
        {
          type: "p",
          texte:
            "L'analyse passe par des situations concrètes, des exemples, des faits. Qui décide quand deux urgences se télescopent ? Que se passe-t-il quand un client menace ? Combien de consignes contradictoires reçoit un chef d'équipe dans une semaine ? Cette étape repère aussi ce qui fonctionne bien et doit être préservé. On ne touche pas à ce qui marche.",
        },
        {
          type: "p",
          texte:
            "Les indicateurs de l'entreprise complètent le tableau : absentéisme, turnover, accidents, heures supplémentaires, demandes de mutation, et les tendances générales que le médecin du travail peut partager sans lever le secret médical. Aucun indicateur ne prouve un RPS à lui seul. Ensemble, ils montrent où regarder.",
        },
      ],
    },

    {
      label: "Le questionnaire",
      titre: "Questionnaire RPS : utile, à condition de ne pas s'y limiter",
      blocs: [
        {
          type: "p",
          texte:
            "Le questionnaire RPS rassure parce qu'il produit des chiffres. C'est aussi son piège. Sur sa page consacrée aux [questionnaires risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/questionnaires.html), l'INRS précise que ces outils « doivent dans tous les cas être complétés par d'autres méthodes ou d'autres sources d'informations : analyse documentaire, entretiens, observations au poste de travail ». L'INRS en a analysé une quarantaine, dont les plus connus sont celui de Karasek et celui de Siegrist.",
        },
        { type: "h3", texte: "Deux outils gratuits selon la taille de l'entreprise" },
        {
          type: "p",
          texte:
            "Pour les entreprises de moins de 50 salariés, l'INRS propose l'outil en ligne [Faire le point RPS](https://www.inrs.fr/media.html?refINRS=outil37). Il aide à identifier les facteurs de risque et à les intégrer au document unique, et son utilisation implique que les salariés parlent de leur activité, de leur métier et du terrain. L'INRS précise qu'il est conçu pour une petite entreprise qui ne se trouve pas en situation de dialogue social dégradé. Au-delà de 50 salariés, sa FAQ oriente vers l'outil RPS-DU.",
        },
        {
          type: "tableau",
          entetes: ["Ce qu'un questionnaire RPS apporte", "Ce qu'il ne fait pas"],
          lignes: [
            ["Une mesure de la perception des salariés sur leur travail", "Expliquer pourquoi ces perceptions existent"],
            ["Une comparaison entre services ou dans le temps", "Désigner les actions à mener"],
            ["Une parole possible pour ceux qui n'osent pas parler", "Remplacer les entretiens et l'observation du travail"],
            ["Un point de départ pour les groupes de travail", "Tenir lieu de diagnostic RPS"],
          ],
        },
        { type: "h3", texte: "Les précautions qui évitent l'effet boomerang" },
        {
          type: "liste",
          items: [
            "**Anonymat réel** : dans une équipe de huit personnes, croiser le service et l'ancienneté suffit à identifier quelqu'un. Regroupez les résultats",
            "**Restitution à tous** : un questionnaire dont les salariés ne voient jamais les résultats ne sera pas rempli deux fois",
            "**Engagement préalable** : ne lancez pas de questionnaire si vous n'êtes pas prêt à agir sur ce qu'il révélera",
          ],
        },
      ],
    },

    {
      label: "Le plan",
      titre: "Du diagnostic au plan de prévention des risques psychosociaux",
      blocs: [
        {
          type: "p",
          texte:
            "L'INRS met en garde contre le « diagnostic sans suite », qui démobilise les salariés. Un plan de prévention utile tient sur une page : quelques actions, un responsable chacune, une date, un indicateur de suivi. Il s'intègre au document unique et se revoit au moins à chaque mise à jour.",
        },
        { type: "h3", texte: "Agir d'abord sur le travail" },
        {
          type: "p",
          texte:
            "L'INRS privilégie la prévention collective, « centrée sur le travail et son organisation ». Les formations à la gestion du stress ou des conflits peuvent aider, mais l'institut les juge « pas suffisantes » : **la prévention vise à adapter le travail à l'homme et non l'inverse.** Les actions les plus efficaces sont souvent organisationnelles : clarifier qui décide quoi, arbitrer les priorités, redonner des marges de manœuvre.",
        },
        { type: "h3", texte: "Méfiez-vous du conflit de personnes" },
        {
          type: "p",
          texte:
            "Quand un problème se présente comme une mésentente entre deux personnes, la tentation est de faire appel à un médiateur. L'INRS observe que les conflits au travail trouvent très souvent leur origine dans l'organisation elle-même. Si le problème tient au comportement d'un encadrant, notre article sur le [management toxique](/infos-utiles/management-toxique/) aide à distinguer ce qui relève de la personne et ce qui relève du système.",
        },
        { type: "h3", texte: "Suivre et ajuster" },
        {
          type: "p",
          texte:
            "Une action se juge sur ses effets : si le planning est arbitré chaque lundi, les urgences du vendredi diminuent-elles ? Revenez vers le groupe de pilotage à trois et six mois.",
        },
      ],
    },

    {
      label: "Les rôles",
      titre: "Dirigeant, managers, médecin du travail : qui fait quoi",
      blocs: [
        {
          type: "p",
          texte:
            "La prévention des risques psychosociaux relève de l'employeur, en concertation avec les acteurs de l'entreprise. Confondre les rôles est l'erreur la plus fréquente.",
        },
        { type: "h3", texte: "Le dirigeant porte la démarche" },
        {
          type: "p",
          texte:
            "Il donne les moyens, il est présent aux étapes clés, et il accepte que l'analyse mette en cause ses propres choix d'organisation. C'est souvent le point le plus inconfortable.",
        },
        { type: "h3", texte: "Les managers repèrent, ils ne soignent pas" },
        {
          type: "p",
          texte:
            "Un manager de proximité voit avant tout le monde qu'une personne change. Son rôle est d'en parler avec elle et de l'orienter, pas d'interpréter. Notre article sur les [signes du burn-out](/infos-utiles/signes-du-burn-out/) décrit ce qu'il faut regarder et vers qui se tourner.",
        },
        { type: "h3", texte: "La santé relève des professionnels de santé" },
        {
          type: "encadre",
          titre: "Si une personne va mal",
          texte:
            "Nous ne sommes pas médecins et cet article ne permet aucun diagnostic. Un salarié en souffrance peut demander une visite auprès du médecin du travail, et consulter son médecin traitant. En cas de détresse ou d'idées suicidaires, le [3114](https://3114.fr/), numéro national de prévention du suicide, répond gratuitement, 24 h/24 et 7 j/7 ; en cas de danger immédiat, appelez le 15.",
        },
        { type: "h3", texte: "Quand faire appel à un regard extérieur" },
        {
          type: "p",
          texte:
            "L'INRS indique qu'une entreprise peut d'abord solliciter le service prévention de sa Carsat ou son service de prévention et de santé au travail. Si elle manque de temps, de compétences ou de recul, ou si la situation est très tendue, elle peut faire appel à un cabinet-conseil pour le travail d'analyse, à condition que ce recours reste ponctuel et qu'il laisse l'entreprise autonome. C'est la logique de [notre méthode](/un-seul-souffle/) : un conseiller référent travaille avec vous sur les causes organisationnelles repérées, sur un périmètre écrit, et l'entreprise garde la main une fois le travail fait. Pour savoir si le nœud est dans l'organisation ou ailleurs, commencez par notre [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quels sont les 6 facteurs de risques psychosociaux ?",
      r: [
        "Le cadre de référence, issu du rapport du Collège d'expertise publié en 2011 et repris par l'INRS, regroupe les facteurs en six familles : l'intensité et le temps de travail, les exigences émotionnelles, le manque d'autonomie, les rapports sociaux au travail dégradés, les conflits de valeurs et l'insécurité de la situation de travail. Ils servent de grille pour évaluer les risques et les inscrire dans le document unique.",
      ],
    },
    {
      q: "La prévention des risques psychosociaux est-elle obligatoire dans une PME ?",
      r: [
        "Oui. Le Code du travail impose à tout employeur de protéger la santé physique et mentale des salariés et d'évaluer les risques professionnels dans un document unique. Les risques psychosociaux en font partie, quelle que soit la taille de l'entreprise. À partir de onze salariés, le document unique doit être mis à jour au moins chaque année, et dans tous les cas lors d'un changement important d'organisation.",
      ],
    },
    {
      q: "Faut-il faire remplir un questionnaire RPS aux salariés ?",
      r: [
        "Ce n'est pas obligatoire et ce n'est jamais suffisant. L'INRS rappelle qu'un questionnaire doit être complété par des entretiens, des observations du travail et l'analyse des documents de l'entreprise. Dans une entreprise de moins de 50 salariés, l'outil gratuit Faire le point RPS de l'INRS fait parler les salariés de leur travail réel, ce qui produit souvent plus d'informations utiles qu'un questionnaire individuel.",
      ],
    },
    {
      q: "Qui peut réaliser un diagnostic RPS ?",
      r: [
        "L'employeur en reste responsable et le conduit avec les salariés, le CSE s'il existe et le service de prévention et de santé au travail. Pour démarrer, le service prévention de la Carsat et le service de santé au travail apportent information et conseils de méthode. Un cabinet extérieur peut prendre en charge l'analyse si l'entreprise manque de temps ou de recul, à condition de transmettre ses méthodes pour qu'elle devienne autonome.",
      ],
    },
    {
      q: "Que faire si un salarié montre des signes d'épuisement ?",
      r: [
        "En parler avec lui, sans poser de diagnostic, et l'orienter vers le médecin du travail ou son médecin traitant. En parallèle, regarder ce qui, dans son travail, a pu produire la surcharge : c'est là que se situe votre levier d'employeur. En cas de détresse ou d'idées suicidaires, le 3114 est joignable gratuitement, 24 h/24 et 7 j/7. En cas de danger immédiat, appelez le 15.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Mesurer les facteurs psychosociaux de risque au travail pour les maîtriser. Rapport du Collège d'expertise sur le suivi des risques psychosociaux au travail",
      editeur: "Collège d'expertise (M. Gollac, M. Bodier), publié par le Cnis",
      url: "https://www.cnis.fr/wp-content/uploads/2017/11/DPR_2011_RENCONTRE_risques_psychosociaux.pdf",
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
    {
      titre: "Prévenir les risques psychosociaux (RPS). Questionnaires risques psychosociaux",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/questionnaires.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). FAQ Risques psychosociaux",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/faq.html",
    },
    {
      titre: "Outil Faire le point RPS - Outil - INRS",
      editeur: "INRS",
      url: "https://www.inrs.fr/media.html?refINRS=outil37",
    },
    {
      titre: "Risques psychosociaux au travail et effets sur la santé des salariés",
      editeur: "INRS",
      url: "https://www.inrs.fr/header/presse/cp-expositions-psychosociales-effets-sante.html",
    },
    {
      titre: "Affections psychiques d'origine professionnelle : reconnaissance et rôle du CMI",
      editeur: "Assurance Maladie (ameli.fr)",
      url: "https://www.ameli.fr/medecin/actualites/affections-psychiques-d-origine-professionnelle-reconnaissance-et-role-du-cmi",
    },
    {
      titre: "Article L4121-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828",
    },
    {
      titre: "Article L4121-2 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033019913",
    },
    {
      titre: "Titre II : Principes généraux de prévention (Articles R4121-1 à R4121-4) - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000018488244/",
    },
    {
      titre: "3114, numéro national de prévention du suicide",
      editeur: "Ministère chargé de la santé",
      url: "https://3114.fr/",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2027-02-01",
  accent: "qvt",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
