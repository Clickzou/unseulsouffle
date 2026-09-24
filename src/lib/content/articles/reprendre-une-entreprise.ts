import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « accompagnement reprise entreprise » (90/mois, KD 12). Secondaires :
 * « comment reprendre une entreprise » (110), « cession entreprise Bpifrance » (170).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * l'article traite la reprise du point de vue du repreneur et renvoie vers lui.
 *
 * VIGILANCE — RÔLES RÉGLEMENTÉS. Marjorie Anglade est expert-comptable diplômée
 * (DEC 2021), inscrite à l'Ordre ; au cabinet elle intervient comme directrice
 * financière externalisée. Le cabinet ne tient pas de comptabilité et ne réalise ni
 * audit d'acquisition, ni acte juridique : ces travaux restent à l'expert-comptable,
 * à l'avocat et au notaire du repreneur. Points juridiques (information des
 * salariés, transfert des contrats) : textes lus sur Légifrance le 24/09/2026,
 * formulés prudemment, avec renvoi vers l'avocat.
 */
export const article: Article = {
  slug: "reprendre-une-entreprise",

  motCle: "accompagnement reprise entreprise (90/mois, KD 12) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "comment reprendre une entreprise (110/mois)",
    "cession entreprise Bpifrance (170/mois)",
    "financer une reprise d'entreprise",
  ],

  // 41 / 42
  metaTitle: "Accompagnement reprise entreprise : guide",
  // 145 / 150
  metaDescription:
    "Reprendre une PME : les étapes, qui vous accompagne, comment lire les comptes de la cible, financer la reprise et piloter les 100 premiers jours.",

  h1: "Accompagnement reprise entreprise : les étapes, les chiffres et qui fait quoi",

  chapo:
    "Réussir une reprise d'entreprise tient moins au prix négocié qu'à trois questions posées assez tôt : l'entreprise gagne-t-elle vraiment de l'argent, peut-elle rembourser la dette de reprise, et tient-elle sans son cédant ? Un accompagnement de reprise d'entreprise sert à y répondre avant de signer. Il ne se résume pas à un conseiller : l'expert-comptable audite les comptes, l'avocat sécurise les actes, la banque et Bpifrance financent, et un regard financier de pilotage relie le tout au prévisionnel. Bpifrance Création compte en moyenne 12 à 18 mois pour une reprise. Voici les étapes, les rôles, les chiffres du financement et ce qui se joue après la signature.",

  essentiel: {
    reponse:
      "Reprendre une entreprise se déroule en une douzaine d'étapes, de la préparation du projet aux 100 premiers jours, sur une durée moyenne de 12 à 18 mois selon Bpifrance Création. L'accompagnement d'une reprise mobilise plusieurs professionnels : conseiller de chambre consulaire, expert-comptable, avocat, notaire, banque et Bpifrance. Côté financement, Bpifrance Création indique qu'un apport personnel couvre en moyenne 30 % des besoins, que le prêt bancaire ne couvre pas plus de 70 % du prix d'acquisition et que Bpifrance peut garantir 60 % des prêts consentis. Le marché est large : 370 000 TPE, PME et ETI sont concernées par une transmission d'ici 2030.",
    points: [
      "Une reprise dure en moyenne 12 à 18 mois, de la préparation à la signature",
      "Chaque professionnel a son périmètre : audit, actes, financement, pilotage",
      "Trois vérifications financières avant tout : marge réelle, besoin en fonds de roulement, capacité de remboursement",
      "Financement type : apport, prêt bancaire, crédit vendeur, garantie et prêt Bpifrance",
      "Les 100 premiers jours se préparent avant la signature, tableau de bord compris",
    ],
  },

  chapitres: [
    {
      label: "Le marché",
      titre: "Reprendre une entreprise : ce que disent les chiffres",
      blocs: [
        {
          type: "p",
          texte:
            "Les candidats à la reprise ne manquent pas d'entreprises à regarder. Selon l'étude présentée par Bpifrance Le Lab, avec CCI France, CMA France et le C.R.A, dans [Transmission et reprise d'entreprise : un potentiel de marché élevé mais des freins à lever pour faciliter les transactions](https://presse.bpifrance.fr/transmission-et-reprise-dentreprise-un-potentiel-de-marche-eleve-mais-des-freins-a-lever-pour-faciliter-les-transactions), **370 000 TPE, PME et ETI sont concernées par une transmission à l'horizon 2030**, dont 58 000 PME et 1 200 ETI. L'étude repose sur environ 5 000 réponses de chefs d'entreprise.",
        },
        { type: "h3", texte: "Un écart entre intentions et transmissions réelles" },
        {
          type: "p",
          texte:
            "Au rythme actuel, seules 130 000 de ces entreprises seraient effectivement transmises. L'étude identifie quatre freins : les freins psychologiques, le manque d'anticipation des cédants, le financement de la reprise et le manque de transparence du marché. Elle relève aussi que 70 % des dirigeants qui prévoient de transmettre dans plus d'un an n'en sont qu'au démarrage du processus.",
        },
        { type: "h3", texte: "Ce que cela change pour un repreneur" },
        {
          type: "p",
          texte:
            "Deux conséquences pratiques. D'abord, beaucoup de cédants arrivent peu préparés : chiffres incomplets, organisation qui repose sur eux, dossier à reconstituer. Ensuite, 30 % des repreneurs interrogés citent la difficulté à trouver les financements comme principal obstacle. **Le travail d'un repreneur consiste donc autant à documenter l'entreprise qu'à la choisir.**",
        },
      ],
    },

    {
      label: "Les étapes",
      titre: "Comment reprendre une entreprise : les étapes d'une reprise",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création décrit, dans [Reprendre une entreprise étape par étape](https://bpifrance-creation.fr/moment-de-vie/reprendre-entreprise-etape-etape), un parcours en douze étapes, sur une durée moyenne comprise entre 12 et 18 mois. Nous les regroupons ici en cinq temps, avec ce qui s'y joue réellement.",
        },
        {
          type: "tableau",
          entetes: ["Temps de la reprise", "Ce qui s'y joue"],
          lignes: [
            [
              "Préparer le projet et chercher une cible",
              "Définir ce que vous savez faire, le secteur, la taille et le budget ; consulter les bourses d'opportunités, dont celle de Bpifrance",
            ],
            [
              "Premiers diagnostics et rencontre du cédant",
              "Écarter vite les cibles fragiles ; comprendre pourquoi le cédant vend et ce qui repose sur lui",
            ],
            [
              "Évaluation, lettre d'intention, audits",
              "Fixer une fourchette de prix, puis vérifier les comptes, le juridique, le social et le fiscal",
            ],
            [
              "Montage juridique, business plan, financement",
              "Choisir entre rachat de titres et de fonds de commerce, bâtir le prévisionnel de reprise, obtenir les prêts",
            ],
            [
              "Protocole, closing, 100 premiers jours",
              "Signer l'acte de cession, accomplir les formalités, prendre la main sans casser ce qui fonctionne",
            ],
          ],
        },
        { type: "h3", texte: "Le prévisionnel de reprise, fil rouge du dossier" },
        {
          type: "p",
          texte:
            "D'une étape à l'autre, un document circule : le prévisionnel de reprise. Il sert à fixer le prix que l'entreprise peut supporter, à convaincre la banque, puis à piloter après la signature. C'est précisément le travail d'un [DAF externalisé](/daf-externalise-toulouse/) : construire ce prévisionnel à partir des comptes certifiés ou établis par l'expert-comptable, le tenir à jour pendant la négociation et le transformer, après la reprise, en outil de pilotage.",
        },
      ],
    },

    {
      label: "Qui fait quoi",
      titre: "Accompagnement reprise entreprise : qui intervient, et sur quoi",
      blocs: [
        {
          type: "p",
          texte:
            "Un repreneur n'a pas besoin d'un seul accompagnateur, mais de plusieurs professionnels aux périmètres nets. Bpifrance Création cite un conseiller des chambres consulaires, un expert-comptable, un avocat spécialisé et un notaire. S'y ajoutent la banque, Bpifrance et, souvent, un regard financier tourné vers l'après-reprise.",
        },
        {
          type: "tableau",
          entetes: ["Interlocuteur", "Son rôle dans la reprise"],
          lignes: [
            [
              "Conseiller CCI ou CMA",
              "Information et orientation du repreneur, mise en relation avec les réseaux d'accompagnement",
            ],
            [
              "Expert-comptable",
              "Analyse et audit des comptes de la cible, évaluation, aide au montage ; ces travaux engagent sa responsabilité professionnelle",
            ],
            [
              "Avocat",
              "Montage juridique, lettre d'intention, audit juridique et social, protocole d'accord et clauses de garantie",
            ],
            [
              "Notaire",
              "Actes et formalités, selon la nature de l'opération",
            ],
            [
              "Banque et Bpifrance",
              "Prêt de reprise, garantie, prêt complémentaire ; ils décident sur la base du prévisionnel",
            ],
            [
              "Directeur financier à temps partagé",
              "Prévisionnel de reprise, lecture des marges et du BFR, dossier bancaire, tableau de bord des premiers mois",
            ],
          ],
        },
        { type: "h3", texte: "Où se situe un DAF à temps partagé" },
        {
          type: "p",
          texte:
            "Il ne remplace aucun des autres. Il ne réalise pas l'audit d'acquisition, qui reste celui de l'expert-comptable mandaté, et ne rédige aucun acte. Son rôle est de traduire ce que révèlent les comptes en décisions : ce que l'entreprise peut rembourser, ce qu'il faut corriger dans les six premiers mois, ce qu'il faut surveiller chaque semaine. [Marjorie Anglade](/marjorie-anglade/), expert-comptable diplômée et inscrite à l'Ordre, intervient au cabinet dans ce rôle de directrice financière externalisée, et non comme expert-comptable : nous ne tenons pas de comptabilité.",
        },
        { type: "h3", texte: "Un périmètre écrit" },
        {
          type: "p",
          texte:
            "Quel que soit l'accompagnateur, faites écrire son périmètre : ce qu'il vérifie, ce qu'il produit, à quelle date. Une reprise mobilise beaucoup d'intervenants, et chacun peut croire qu'un autre a regardé un point que personne n'a vérifié.",
        },
      ],
    },

    {
      label: "Lire la cible",
      titre: "Lire les comptes de l'entreprise à reprendre : trois vérifications",
      blocs: [
        {
          type: "p",
          texte:
            "Un bilan dit ce que l'entreprise a été. Le repreneur a besoin de savoir ce qu'elle sera, avec lui, avec une dette de reprise en plus. Trois vérifications font la différence entre une bonne affaire et un rachat de problèmes.",
        },
        { type: "h3", texte: "La marge réelle, par client et par activité" },
        {
          type: "p",
          texte:
            "Le résultat global peut masquer une activité qui perd de l'argent, compensée par une autre. Demandez la marge par client, par produit ou par chantier. Si le cédant ne sait pas la produire, c'est une information en soi : l'entreprise est pilotée à l'intuition, et vous hériterez de cette intuition sans en avoir l'expérience.",
        },
        { type: "h3", texte: "Le besoin en fonds de roulement et la trésorerie" },
        {
          type: "p",
          texte:
            "Une entreprise rentable peut manquer de trésorerie si ses clients paient lentement ou si ses stocks gonflent. **Le besoin en fonds de roulement conditionne la trésorerie des premiers mois, donc votre capacité à payer les premières échéances de prêt.** Pour en comprendre la mécanique, voyez notre article sur le [calcul du BFR](/infos-utiles/calcul-bfr/) ; pour la reprise, retenez qu'il se regarde sur plusieurs mois, pas seulement à la date du bilan.",
        },
        { type: "h3", texte: "Les dépendances : clients, fournisseurs, cédant" },
        {
          type: "p",
          texte:
            "Quelle part du chiffre d'affaires repose sur les cinq premiers clients ? Quels contrats, quelles relations tiennent à la personne du cédant ? Qui, dans l'équipe, sait faire ce que lui seul fait aujourd'hui ? Ces dépendances ne figurent dans aucun bilan. Elles se négocient pourtant dans le protocole : accompagnement du cédant pendant une période de transition, clauses adaptées, étalement d'une partie du prix.",
        },
      ],
    },

    {
      label: "Le financement",
      titre: "Financer une reprise : apport, banque, crédit vendeur et Bpifrance",
      blocs: [
        {
          type: "p",
          texte:
            "Le montage financier d'une reprise combine presque toujours plusieurs sources. Bpifrance Création en donne les ordres de grandeur dans [Comment financer un projet de reprise d'entreprise ?](https://bpifrance-creation.fr/moments-de-vie/comment-financer-projet-reprise-dentreprise).",
        },
        {
          type: "tableau",
          entetes: ["Source de financement", "Repères donnés par Bpifrance Création"],
          lignes: [
            ["Apport personnel", "Couvre en moyenne 30 % des besoins d'investissement"],
            [
              "Prêt bancaire",
              "Généralement sur 7 ans ; il ne couvre pas plus de 70 % du prix d'acquisition",
            ],
            [
              "Crédit vendeur",
              "Le cédant accepte d'être payé plus tard pour une partie du prix, 50 % au maximum, généralement sur 1 à 3 ans",
            ],
            [
              "Prêt transmission Bpifrance",
              "De 40 000 à 5 000 000 d'euros, aux côtés de votre banque",
            ],
            ["Garantie Bpifrance", "Garantit les prêts consentis à hauteur de 60 % de leur montant"],
            [
              "Prêt d'honneur",
              "Auprès d'Initiative France ou du Réseau Entreprendre, couplé à un prêt bancaire",
            ],
          ],
        },
        { type: "h3", texte: "Cession d'entreprise et Bpifrance : ce que Bpifrance fait, et ne fait pas" },
        {
          type: "p",
          texte:
            "Bpifrance intervient à deux endroits. En amont, sa bourse de la transmission, que Bpifrance Création présente dans [Reprise d'entreprise : comment ça marche ?](https://bpifrance-creation.fr/moment-de-vie/reprise-dentreprise-comment-ca-marche), recense des annonces d'entreprises à céder, ce qui en fait l'un des points d'entrée des repreneurs. Au moment du financement, elle garantit des prêts bancaires et accorde des prêts de reprise aux côtés de la banque. Elle ne remplace pas la banque, et elle ne se prononce pas sur le prix : c'est votre prévisionnel qui porte le dossier.",
        },
        { type: "h3", texte: "La vraie question : la capacité de remboursement" },
        {
          type: "p",
          texte:
            "Le prix se discute, l'échéancier ne pardonne pas. La dette de reprise se rembourse avec la trésorerie que l'entreprise dégage, après ses propres besoins. Un [prévisionnel financier](/infos-utiles/previsionnel-financier/) construit sur des hypothèses prudentes montre si les annuités tiennent dans une année moyenne, et pas seulement dans la meilleure. Si elles ne tiennent qu'avec une croissance forte, le prix est trop élevé ou le montage à revoir.",
        },
      ],
    },

    {
      label: "Les obligations",
      titre: "Reprise d'entreprise : deux règles du Code à connaître",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne sommes pas juristes, et les actes d'une reprise se préparent avec un avocat. Deux règles méritent cependant d'être connues du repreneur dès le départ, parce qu'elles pèsent sur le calendrier et sur l'organisation.",
        },
        { type: "h3", texte: "L'information préalable des salariés" },
        {
          type: "p",
          texte:
            "Dans les sociétés qui n'ont pas l'obligation de mettre en place un comité social et économique doté de certaines attributions, l'[article L23-10-1 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054140991) prévoit que, lorsque le propriétaire de plus de 50 % des parts ou de la majorité du capital veut les vendre, les salariés en sont informés au plus tard un mois avant la vente, afin de pouvoir présenter une offre. Ce délai d'un mois, qui remplace l'ancien délai de deux mois, vaut pour les ventes conclues à partir du 26 juillet 2026 (loi du 26 mai 2026). La vente peut intervenir plus tôt si chaque salarié a fait connaître sa décision de ne pas en présenter. Le texte prévoit une amende civile pouvant atteindre 0,5 % du montant de la vente. C'est une obligation du cédant, mais le repreneur a intérêt à vérifier qu'elle a été respectée.",
        },
        { type: "h3", texte: "Les contrats de travail suivent l'entreprise" },
        {
          type: "p",
          texte:
            "L'[article L1224-1 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900875) pose que, lors d'une modification de la situation juridique de l'employeur, notamment par vente, tous les contrats de travail en cours subsistent entre le nouvel employeur et le personnel. Vous reprenez donc une équipe, avec ses contrats, ses anciennetés et ses usages. L'audit social sert à les connaître avant de signer.",
        },
      ],
    },

    {
      label: "Après la signature",
      titre: "Les 100 premiers jours après la reprise : piloter sans tout changer",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création fait des 100 premiers jours une étape à part entière, et rappelle que le nouveau chef d'entreprise doit très vite s'imposer en rassurant les salariés. Côté finances, ces trois mois ont une particularité : la trésorerie est souvent au plus bas, les premières échéances arrivent, et le cédant n'est plus là pour dire ce qui est normal.",
        },
        { type: "h3", texte: "Un tableau de bord dès la première semaine" },
        {
          type: "p",
          texte:
            "Quelques indicateurs suffisent : trésorerie à treize semaines, encaissements clients, marge des commandes signées, carnet de commandes. Ils doivent être lus chaque semaine, par vous. Notre article sur le [tableau de bord KPI](/infos-utiles/tableau-de-bord-kpi/) détaille comment le choisir sans le surcharger.",
        },
        { type: "h3", texte: "Observer avant de réorganiser" },
        {
          type: "p",
          texte:
            "La tentation est de corriger tout ce que l'audit a signalé. Mieux vaut trier : ce qui menace la trésorerie se traite tout de suite, le reste attend d'avoir compris pourquoi les choses sont faites ainsi. **On ne touche pas à ce qui fonctionne, surtout quand on ne sait pas encore pourquoi cela fonctionne.**",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, un repreneur de PME ou d'ETI de 10 à 250 salariés en Occitanie peut s'appuyer sur un conseiller référent pour le pilotage financier, sur un périmètre écrit : prévisionnel de reprise, dossier bancaire, tableau de bord des premiers mois. Si un sujet sort de ce périmètre, l'organisation d'une équipe qui perd son dirigeant historique par exemple, une autre expertise du cabinet peut intervenir, avec votre accord. Pour situer d'abord l'entreprise reprise ou celle que vous regardez, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Comment reprendre une entreprise ?",
      r: [
        "Bpifrance Création décrit douze étapes : préparer le projet, chercher une cible, réaliser les premiers diagnostics, rencontrer le cédant, évaluer l'entreprise, signer une lettre d'intention et lancer les audits, choisir le montage juridique, bâtir le business plan, obtenir le financement, signer le protocole puis l'acte de cession, et réussir les 100 premiers jours. Chaque étape mobilise un professionnel différent.",
      ],
    },
    {
      q: "Combien de temps faut-il pour reprendre une entreprise ?",
      r: [
        "Selon Bpifrance Création, une reprise s'inscrit dans une durée moyenne comprise entre 12 et 18 mois, de la préparation du projet à la signature. La recherche d'une cible et l'obtention du financement sont souvent les phases les plus longues. Il faut y ajouter les 100 premiers jours après la signature, que Bpifrance Création traite comme une étape à part entière.",
      ],
    },
    {
      q: "Quel apport personnel pour reprendre une entreprise ?",
      r: [
        "Bpifrance Création indique qu'un apport personnel couvre en moyenne 30 % des besoins d'investissement, et que le prêt bancaire ne couvre pas plus de 70 % du prix d'acquisition. Un prêt d'honneur peut renforcer cet apport, et un crédit vendeur peut étaler jusqu'à la moitié du prix. Le montant exact dépend du dossier et de la capacité de remboursement de l'entreprise.",
      ],
    },
    {
      q: "Que propose Bpifrance pour une cession ou une reprise d'entreprise ?",
      r: [
        "Bpifrance propose une bourse de la transmission qui recense des entreprises à céder, un prêt transmission de 40 000 à 5 000 000 d'euros accordé aux côtés de la banque, et une garantie qui couvre 60 % du montant des prêts consentis, selon Bpifrance Création. Ces outils complètent le prêt bancaire ; ils ne le remplacent pas et ne dispensent pas d'un prévisionnel solide.",
      ],
    },
    {
      q: "Qui peut accompagner un repreneur d'entreprise ?",
      r: [
        "Plusieurs professionnels, chacun sur son périmètre : un conseiller de CCI ou de CMA pour l'orientation, un expert-comptable pour l'audit et l'évaluation, un avocat pour les actes et les garanties, un notaire pour les formalités, la banque et Bpifrance pour le financement. Un directeur financier à temps partagé peut construire le prévisionnel de reprise et piloter les premiers mois.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Transmission et reprise d'entreprise : un potentiel de marché élevé mais des freins à lever pour faciliter les transactions",
      editeur: "Bpifrance (communiqué, étude Bpifrance Le Lab)",
      url: "https://presse.bpifrance.fr/transmission-et-reprise-dentreprise-un-potentiel-de-marche-eleve-mais-des-freins-a-lever-pour-faciliter-les-transactions",
    },
    {
      titre: "Un marché de 370 000 entreprises à reprendre d'ici 2030",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/entrepreneur/actualites/marche-370-000-entreprises-a-reprendre-dici-2030",
    },
    {
      titre: "Reprendre une entreprise étape par étape",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/moment-de-vie/reprendre-entreprise-etape-etape",
    },
    {
      titre: "Comment financer un projet de reprise d'entreprise ?",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/moments-de-vie/comment-financer-projet-reprise-dentreprise",
    },
    {
      titre: "Reprise d'entreprise : comment ça marche ?",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/moment-de-vie/reprise-dentreprise-comment-ca-marche",
    },
    {
      titre: "Article L23-10-1 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054140991",
    },
    {
      titre: "Article L1224-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900875",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-09-06",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: true,
};
