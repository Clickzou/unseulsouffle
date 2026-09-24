import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Muriel Saffroy.
 * Requête : « délégation de pouvoir » (480/mois, KD 9). Secondaires : « modèle de
 * délégation de pouvoirs » (480), « délégataire définition » (480).
 *
 * VIGILANCE — SUJET JURIDIQUE. Le régime de la délégation de pouvoirs est
 * jurisprudentiel : chaque règle citée renvoie à un arrêt publié sur Légifrance
 * ou à l'article de l'INRS (Travail & Sécurité n° 781) qui les recense, tous
 * consultés le 24/09/2026. Le texte ne fournit PAS de modèle rédigé : il liste les
 * clauses à prévoir et renvoie vers un avocat ou l'expert-comptable pour l'acte.
 * Le cabinet n'exerce aucune activité juridique : il travaille la répartition
 * réelle des décisions, jamais la rédaction de l'acte.
 *
 * Maillage : les articles « délégation de signature » (08/2027) et « rôle du
 * manager » (01/2027) sont postérieurs, donc non liés.
 */
export const article: Article = {
  slug: "delegation-de-pouvoir",

  motCle: "délégation de pouvoir (480/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "modèle de délégation de pouvoirs (480/mois)",
    "délégataire définition (480/mois)",
  ],

  // 42 / 42
  metaTitle: "Délégation de pouvoir : conditions, modèle",
  // 150 / 150
  metaDescription:
    "Délégation de pouvoir en PME : définition, rôle du délégataire, trois conditions de validité, clauses d'un modèle et pièges qui la rendent inopérante.",

  h1: "Délégation de pouvoir : ce qu'elle transfère vraiment, et à quelles conditions",

  chapo:
    "Une délégation de pouvoir permet au dirigeant de confier à un salarié une partie de ses pouvoirs, avec la responsabilité qui va avec, y compris la responsabilité pénale. Elle ne tient que si le délégataire dispose réellement de la compétence, de l'autorité et des moyens nécessaires, sur un périmètre précis et stable. Un papier signé ne suffit pas : le juge regarde ce qui se passe dans l'atelier ou le service. Pour un dirigeant de PME, c'est donc autant un acte juridique qu'une décision d'organisation. Voici ce qu'elle transfère, ce qu'elle ne transfère pas, les clauses d'un modèle et les raisons pour lesquelles elle échoue le plus souvent.",

  essentiel: {
    reponse:
      "La délégation de pouvoir est l'acte par lequel le chef d'entreprise (délégant) transfère à un salarié (délégataire) une partie de ses pouvoirs de décision et les moyens de les exercer. Depuis un arrêt de la Cour de cassation du 11 mars 1993, le dirigeant qui n'a pas personnellement pris part à une infraction peut s'exonérer de sa responsabilité pénale s'il prouve avoir délégué ses pouvoirs à une personne pourvue de la compétence, de l'autorité et des moyens nécessaires. Aucun écrit n'est exigé, mais la preuve pèse sur celui qui invoque la délégation.",
    points: [
      "Trois conditions cumulatives chez le délégataire : compétence, autorité, moyens",
      "Un objet précis et limité : un dirigeant ne peut pas déléguer l'intégralité de ses pouvoirs",
      "Pas deux délégataires pour le même travail : la Cour de cassation l'a jugé en 2004",
      "L'écrit n'est pas obligatoire, il est indispensable pour prouver et pour subdéléguer",
      "La délégation ne protège pas le dirigeant qui participe à l'infraction, ni la personne morale",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Délégation de pouvoir : définition et effets",
      blocs: [
        {
          type: "p",
          texte:
            "L'INRS la définit comme [« un acte juridique par lequel l'employeur (délégant) se dessaisit d'une partie de ses pouvoirs et des moyens de les exercer au bénéfice d'un salarié »](https://www.inrs.fr/media.html?refINRS=TS781page52). La jurisprudence l'admet depuis un arrêt de 1902, pour une raison pratique : au-delà d'une certaine taille, le dirigeant ne peut pas vérifier en personne que chaque règle est appliquée dans chaque atelier, sur chaque chantier, dans chaque équipe.",
        },
        { type: "h3", texte: "Ce que la délégation transfère" },
        {
          type: "p",
          texte:
            "Elle transfère un pouvoir de décision, les obligations attachées à ce pouvoir et la responsabilité qui en découle. **Quand elle est valable, c'est le délégataire qui répond pénalement des manquements dans son périmètre, à la place du dirigeant.** Côté civil et commercial, [Bpifrance Création](https://bpifrance-creation.fr/encyclopedie/gerer-lentreprise/gestion-evenements-exceptionnels/delegation-pouvoir) rappelle que le délégataire engage la société dans les limites de sa délégation : ses décisions sont celles de l'entreprise.",
        },
        { type: "h3", texte: "Pourquoi le sujet concerne d'abord la santé et la sécurité" },
        {
          type: "p",
          texte:
            "La délégation de pouvoir sert dans tous les domaines, mais c'est en santé et sécurité au travail que l'enjeu est le plus lourd. L'[article L4741-1 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000020627480/) punit d'une amende de 10 000 euros « le fait pour l'employeur ou son délégataire » de méconnaître par sa faute personnelle une série de règles de sécurité, et cette amende s'applique autant de fois qu'il y a de salariés concernés. Le texte nomme le délégataire : le Code du travail reconnaît donc explicitement le mécanisme.",
        },
        { type: "h3", texte: "Une décision d'organisation avant d'être un acte" },
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants abordent la délégation de pouvoir comme une assurance : on signe, on range, on est couvert. C'est l'inverse. Le juge ne s'arrête pas au document, il regarde si la personne désignée décidait réellement. Une délégation qui ne correspond pas au fonctionnement réel de l'entreprise ne protège personne. C'est pourquoi nous la traitons, dans le [coaching dirigeant](/transformation-dirigeant/), comme une question de répartition des décisions : qui tranche quoi, jusqu'où, avec quel budget.",
        },
      ],
    },

    {
      label: "Le délégataire",
      titre: "Délégataire : définition et trois conditions de validité",
      blocs: [
        {
          type: "p",
          texte:
            "Le délégataire est la personne qui reçoit la délégation. Selon Bpifrance Création, c'est en principe un salarié de l'entreprise placé sous l'autorité hiérarchique du dirigeant, qui doit disposer « des moyens, des compétences, de l'autorité et de l'indépendance nécessaires ». La formule de référence vient de la chambre criminelle de la Cour de cassation, dans un [arrêt du 11 mars 1993](https://www.legifrance.gouv.fr/juri/id/JURITEXT000007068463/) : le chef d'entreprise peut s'exonérer « s'il rapporte la preuve qu'il a délégué ses pouvoirs à une personne pourvue de la compétence, de l'autorité et des moyens nécessaires ».",
        },
        { type: "h3", texte: "La compétence" },
        {
          type: "p",
          texte:
            "Le juge l'apprécie selon les connaissances techniques et juridiques, l'expérience et l'ancienneté dans le poste. L'INRS cite une délégation écartée parce qu'elle avait été confiée à un chef de chantier de 21 ans, arrivé dans l'entreprise moins d'un an plus tôt, et une autre parce que le chef d'établissement n'avait pas les connaissances techniques suffisantes pour un site à risques importants. La compétence doit correspondre à l'étendue de la mission, pas au titre du poste.",
        },
        { type: "h3", texte: "L'autorité" },
        {
          type: "p",
          texte:
            "Le délégataire doit pouvoir donner des ordres et les faire respecter. Une personne chargée de transmettre les directives de ses supérieurs n'a pas cette autonomie. Le pouvoir disciplinaire pèse en faveur de la délégation, sans que la jurisprudence exige, selon l'INRS, le pouvoir de licencier. Si les équipes savent qu'un désaccord se règle en appelant le dirigeant, l'autorité n'est pas là.",
        },
        { type: "h3", texte: "Les moyens" },
        {
          type: "p",
          texte:
            "Ils sont humains, techniques, financiers et disciplinaires. L'INRS rapporte le cas d'un directeur de production dont la délégation n'a pas été retenue parce qu'il ne disposait pas du pouvoir d'engager des dépenses pour former le personnel et mettre le matériel en conformité. **Déléguer la sécurité sans déléguer le budget qui la finance revient à ne rien déléguer.**",
        },
        {
          type: "tableau",
          entetes: ["Condition", "Ce que le juge vérifie concrètement"],
          lignes: [
            ["Compétence", "Formation, expérience, ancienneté, adéquation avec les risques du périmètre"],
            ["Autorité", "Pouvoir de donner des ordres, de les faire appliquer, de sanctionner"],
            ["Moyens", "Budget, personnel, matériel, accès à l'information, capacité d'engager des dépenses"],
            ["Objet précis", "Un domaine et un périmètre définis, pas une mission générale de surveillance"],
            ["Stabilité", "Une délégation permanente, pas ponctuelle ; elle est suspendue pendant un arrêt maladie"],
          ],
        },
      ],
    },

    {
      label: "Les limites",
      titre: "Ce qu'une délégation de pouvoir ne permet pas",
      blocs: [
        {
          type: "p",
          texte:
            "La délégation de pouvoir n'est pas un moyen de se décharger de tout. La jurisprudence lui fixe des limites que tout dirigeant doit connaître avant d'en signer une.",
        },
        { type: "h3", texte: "Déléguer une partie, jamais la totalité" },
        {
          type: "p",
          texte:
            "Bpifrance Création est explicite : « un dirigeant ne peut pas déléguer l'intégralité de ses pouvoirs ». L'INRS cite des délégations annulées pour excès de généralité, comme la « totale gestion d'un chantier » confiée à un chef de chantier le jour même de son embauche en CDD. Le seul fait d'être cadre supérieur ne suffit pas non plus : sans attributions clairement définies, il n'y a pas de délégation.",
        },
        { type: "h3", texte: "Un seul délégataire par travail" },
        {
          type: "p",
          texte:
            "Dans un [arrêt du 23 novembre 2004](https://www.legifrance.gouv.fr/juri/id/JURITEXT000007069463/), la Cour de cassation a jugé que le chef d'entreprise ne peut « déléguer ses pouvoirs à plusieurs personnes pour l'exécution d'un même travail », parce que ce cumul restreint l'autorité de chacun et entrave ses initiatives. Plusieurs délégations restent possibles si chacune porte sur un périmètre distinct.",
        },
        { type: "h3", texte: "La participation personnelle neutralise la délégation" },
        {
          type: "p",
          texte:
            "L'arrêt de 1993 réserve l'exonération au dirigeant « qui n'a pas personnellement pris part à la réalisation de l'infraction ». Un dirigeant qui donne lui-même l'ordre dangereux, ou qui contourne son délégataire, redevient responsable. C'est la limite la plus souvent oubliée : elle dépend du comportement quotidien, pas du document.",
        },
        { type: "h3", texte: "La personne morale et le Code pénal" },
        {
          type: "p",
          texte:
            "L'INRS rappelle deux points. La société elle-même ne s'exonère pas : le délégataire étant considéré comme son représentant, sa responsabilité peut être engagée sur le fondement de l'article 121-2 du Code pénal. Et en cas d'homicide ou de blessures involontaires, la responsabilité est cumulative : le dirigeant qui a délégué peut encore être poursuivi pour sa propre imprudence ou négligence. La délégation déplace la responsabilité ; elle ne la fait pas disparaître.",
        },
      ],
    },

    {
      label: "Distinguer",
      titre: "Délégation de pouvoir, de signature, de tâches : ne pas confondre",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME, le mot « délégation » recouvre trois réalités très différentes. Les confondre produit soit une fausse protection juridique, soit un manager qui croit décider alors qu'il exécute.",
        },
        {
          type: "tableau",
          entetes: ["Type de délégation", "Ce qu'elle transfère"],
          lignes: [
            [
              "Délégation de pouvoir",
              "Un pouvoir de décision, les moyens de l'exercer et la responsabilité, y compris pénale, sur un périmètre défini",
            ],
            [
              "Délégation de signature",
              "Le droit de signer certains actes au nom du dirigeant, sans pouvoir de décision propre : la responsabilité reste au délégant",
            ],
            [
              "Délégation de tâches",
              "L'exécution d'un travail ; la décision, le cadre et la responsabilité restent chez celui qui délègue",
            ],
            [
              "Subdélégation",
              "Le délégataire transfère à son tour une partie de ses pouvoirs à un autre salarié, aux mêmes conditions",
            ],
          ],
        },
        { type: "h3", texte: "La délégation de signature, un outil différent" },
        {
          type: "p",
          texte:
            "Bpifrance Création distingue nettement la délégation de pouvoir de la délégation de signature, qui ne confère pas de pouvoir de décision. Le signataire appose sa signature pour le compte du dirigeant, sur des actes que celui-ci a décidés. Utile pour fluidifier les bons de commande ou les courriers, elle ne transfère aucune responsabilité.",
        },
        { type: "h3", texte: "La subdélégation" },
        {
          type: "p",
          texte:
            "Elle est admise depuis 1983. Depuis un [arrêt du 30 octobre 1996](https://www.legifrance.gouv.fr/juri/id/JURITEXT000007066703/), sa validité « n'est pas subordonnée à l'autorisation du chef d'entreprise », dès lors qu'elle est régulièrement consentie et que le subdélégataire réunit lui aussi compétence, autorité et moyens. Dans une ETI à plusieurs sites, c'est souvent elle qui porte la sécurité au plus près du terrain.",
        },
        { type: "h3", texte: "La délégation de tâches, là où tout commence" },
        {
          type: "p",
          texte:
            "Dans bien des PME, le manque ne tient pas aux délégations de pouvoir signées, mais aux décisions réellement lâchées. Confier l'exécution tout en validant chaque étape n'est pas déléguer. Ce décalage entre l'organigramme et la réalité est traité dans notre article sur l'[organigramme d'entreprise](/infos-utiles/organigramme-entreprise/).",
        },
      ],
    },

    {
      label: "Le modèle",
      titre: "Modèle de délégation de pouvoirs : les clauses à prévoir",
      blocs: [
        {
          type: "p",
          texte:
            "Aucun formalisme n'est imposé. L'INRS rappelle que, selon la Cour de cassation, la validité de la délégation « n'est pas subordonnée à l'existence d'un écrit ». Mais la preuve incombe à celui qui l'invoque, et l'arrêt de 1993 écarte les simples allégations. En pratique, l'écrit est indispensable ; il s'impose même de fait dès qu'il y a une chaîne de subdélégations.",
        },
        { type: "h3", texte: "Le contenu d'un modèle de délégation de pouvoirs" },
        {
          type: "liste",
          items: [
            "**Les parties** : le délégant, avec sa qualité de représentant légal, et le délégataire, avec son poste",
            "**L'objet précis** : le domaine (sécurité d'un site, achats jusqu'à un montant, gestion du personnel d'un service) et les obligations qu'il recouvre",
            "**La compétence** : la formation, l'expérience et, le cas échéant, les habilitations qui la justifient",
            "**L'autorité** : sur quelles personnes elle s'exerce, avec quel pouvoir disciplinaire",
            "**Les moyens** : budget, capacité d'engager des dépenses, personnel, matériel, accès à l'information",
            "**La durée** : suffisamment longue pour accomplir la mission, et la date d'effet",
            "**La possibilité de subdéléguer**, ou son exclusion",
            "**La mention du transfert de responsabilité**, pénale comprise, et la signature du délégataire",
          ],
        },
        { type: "h3", texte: "L'acceptation du délégataire" },
        {
          type: "p",
          texte:
            "La jurisprudence n'exige pas d'acceptation expresse, précise l'INRS, mais le délégataire doit être clairement informé de l'étendue de sa mission, du transfert de responsabilité pénale et des moyens dont il dispose. Faire signer le document et en discuter en face à face est la meilleure façon de s'en assurer.",
        },
        {
          type: "encadre",
          titre: "Pourquoi nous ne fournissons pas de modèle rédigé",
          texte:
            "Une délégation de pouvoir engage la responsabilité pénale de deux personnes. Un modèle téléchargé, recopié sans l'adapter aux risques de votre activité, expose à une délégation trop générale, donc inopérante. Faites rédiger ou relire l'acte par votre avocat, ou par votre expert-comptable s'il vous accompagne sur ces sujets. Notre travail porte sur l'amont : décider qui doit recevoir quoi.",
        },
      ],
    },

    {
      label: "En pratique",
      titre: "Pourquoi une délégation de pouvoir échoue dans une PME",
      exergue: "Le juge regarde ce que le délégataire pouvait réellement décider, pas ce que le document lui accordait.",
      blocs: [
        {
          type: "p",
          texte:
            "Une délégation de pouvoir se juge sur le terrain, et c'est sur le terrain qu'elle échoue. Dans une PME, les causes sont rarement juridiques : elles tiennent au fonctionnement quotidien entre le dirigeant et la personne qui reçoit la délégation.",
        },
        { type: "h3", texte: "Le dirigeant reprend ce qu'il a délégué" },
        {
          type: "p",
          texte:
            "Le scénario est classique. Le responsable de production a une délégation en bonne et due forme, mais chaque arbitrage important remonte au bureau du dirigeant, qui tranche. Au bout de quelques mois, l'équipe a compris où se prennent les décisions. L'autorité du délégataire s'est vidée, et la délégation avec elle. Pour le dirigeant, le coût est double : il reste exposé et il continue de tout porter, ce que décrit notre article sur la [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/).",
        },
        { type: "h3", texte: "Le budget ne suit pas" },
        {
          type: "p",
          texte:
            "Le délégataire est responsable de la sécurité, mais chaque dépense au-delà de quelques centaines d'euros demande une validation. Les moyens, troisième condition de l'arrêt de 1993, font défaut. La question à poser est simple : si demain il faut remplacer un équipement ou former une équipe, le délégataire peut-il l'engager seul ?",
        },
        { type: "h3", texte: "Personne ne l'a relue depuis sa signature" },
        {
          type: "p",
          texte:
            "Le délégataire a changé de poste, l'atelier a déménagé, un nouveau process a été installé, et la délégation date de six ans. L'exigence de stabilité joue alors à l'envers : le document décrit une organisation qui n'existe plus.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Mettre en place une délégation de pouvoir en PME, étape par étape",
      blocs: [
        {
          type: "p",
          texte:
            "Une délégation solide se prépare avant de se rédiger. Voici l'ordre que nous recommandons, du constat à la revue annuelle.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Lister les décisions** qui remontent aujourd'hui à vous et, parmi elles, celles qui relèvent d'une obligation réglementaire (sécurité, environnement, droit du travail)",
            "**Découper en périmètres distincts** : un domaine, un site ou un service par délégataire, jamais deux personnes sur le même travail",
            "**Vérifier les trois conditions** pour chaque personne pressentie : compétence, autorité, moyens. Si l'une manque, la construire d'abord",
            "**Faire rédiger l'acte** par votre conseil juridique, en y reportant le budget et le pouvoir disciplinaire réellement accordés",
            "**Annoncer la délégation** aux équipes concernées, pour que l'autorité du délégataire soit visible",
            "**Revoir chaque année** les délégations, et à chaque changement de poste, d'organisation ou d'activité",
          ],
        },
        { type: "h3", texte: "Le point le plus difficile : ne pas revenir dessus" },
        {
          type: "p",
          texte:
            "Une fois la délégation posée, le dirigeant doit accepter que le délégataire décide autrement que lui, dans son périmètre. C'est l'exercice qui demande le plus de travail, parce qu'il touche à la manière dont chacun [prend une décision](/infos-utiles/prendre-une-decision/) et à la confiance entre deux personnes. C'est précisément le champ de [Muriel Saffroy](/muriel-saffroy/), référente organisation et coopération au cabinet : clarifier qui décide quoi, et faire tenir cette règle dans la durée.",
        },
        { type: "h3", texte: "Ce que nous faisons, et ce que nous ne faisons pas" },
        {
          type: "p",
          texte:
            "Nous ne rédigeons pas d'actes juridiques. Nous aidons le dirigeant à identifier les décisions à confier, à préparer les personnes qui les recevront et à tenir la délégation dans le temps. Un conseiller référent porte le sujet ; si la question touche aux moyens financiers du délégataire, il fait appel au pilier finance, sur ce point précis et dans le périmètre convenu avec vous.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si le blocage tient à la délégation, à l'organisation ou à votre propre charge, commencez par le situer : notre [diagnostic d'entreprise](/diagnostic/) vous aide à y voir clair en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'une délégation de pouvoir ?",
      r: [
        "C'est l'acte par lequel le dirigeant transfère à un salarié une partie de ses pouvoirs de décision et les moyens de les exercer. Lorsqu'elle est valable, le délégataire assume les obligations et la responsabilité, y compris pénale, attachées à ce périmètre. Elle repose sur une construction de la jurisprudence : la Cour de cassation exige que le délégataire dispose de la compétence, de l'autorité et des moyens nécessaires.",
      ],
    },
    {
      q: "Quelle est la définition du délégataire ?",
      r: [
        "Le délégataire est la personne qui reçoit la délégation de pouvoir. C'est en principe un salarié de l'entreprise, placé sous l'autorité du dirigeant, qui doit être pourvu de la compétence, de l'autorité et des moyens nécessaires à sa mission. Il engage la société dans les limites de sa délégation et répond, à la place du délégant, des manquements commis dans son périmètre. Il peut lui-même subdéléguer, aux mêmes conditions.",
      ],
    },
    {
      q: "Une délégation de pouvoir doit-elle être écrite ?",
      r: [
        "Non, la loi n'impose aucun formalisme et la Cour de cassation admet une délégation non écrite. Mais la preuve de la délégation pèse sur celui qui l'invoque, et de simples affirmations ne suffisent pas. En pratique, un écrit précis, signé par le délégataire, est donc indispensable. Il devient incontournable dès qu'il existe une chaîne de subdélégations.",
      ],
    },
    {
      q: "Existe-t-il un modèle de délégation de pouvoirs gratuit ?",
      r: [
        "Des modèles circulent, mais un modèle recopié sans adaptation expose à une délégation trop générale, que le juge écarte. Utilisez-le comme liste de clauses : parties, objet précis, compétence, autorité, moyens et budget, durée, subdélégation, transfert de responsabilité, signature du délégataire. Faites ensuite rédiger ou relire l'acte par votre avocat, au regard des risques réels de votre activité.",
      ],
    },
    {
      q: "Le dirigeant est-il totalement protégé après une délégation de pouvoir ?",
      r: [
        "Non. La délégation ne joue pas s'il a personnellement pris part à l'infraction. La société reste responsable, le délégataire étant considéré comme son représentant. En cas d'homicide ou de blessures involontaires, le dirigeant peut encore être poursuivi pour sa propre imprudence ou négligence. La délégation répartit la responsabilité, elle ne dispense pas le dirigeant de bien choisir, d'équiper et de suivre ses délégataires.",
      ],
    },
  ],

  sources: [
    {
      titre: "Cour de Cassation, Chambre criminelle, du 11 mars 1993, 91-80.598, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000007068463/",
    },
    {
      titre: "Cour de Cassation, Chambre criminelle, du 23 novembre 2004, 04-81.601, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000007069463/",
    },
    {
      titre: "Cour de Cassation, Chambre criminelle, du 30 octobre 1996, 94-83.650, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000007066703/",
    },
    {
      titre: "Article L4741-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000020627480/",
    },
    {
      titre: "La délégation de pouvoirs dans le domaine de la santé et de la sécurité au travail",
      editeur: "INRS, Travail & Sécurité n° 781",
      url: "https://www.inrs.fr/media.html?refINRS=TS781page52",
    },
    {
      titre: "La délégation de pouvoir",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/gerer-lentreprise/gestion-evenements-exceptionnels/delegation-pouvoir",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-12-14",
  accent: "organisation",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: true,
};
