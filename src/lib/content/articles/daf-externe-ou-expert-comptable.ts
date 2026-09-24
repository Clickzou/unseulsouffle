import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « DAF externe » (70/mois, KD 8). Secondaires : « DAF part-time » (110),
 * « expert-comptable ou DAF », « rôle d'un DAF en PME ».
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite la comparaison des rôles et renvoie vers lui.
 *
 * VIGILANCE — TITRE RÉGLEMENTÉ. Marjorie Anglade est expert-comptable inscrite à
 * l'Ordre (confirmé par la cliente le 24/09/2026), mais le cabinet Un Seul Souffle
 * n'exerce pas l'expertise comptable et ne tient aucune comptabilité
 * (ordonnance du 19 septembre 1945, art. 2 et 20).
 */
export const article: Article = {
  slug: "daf-externe-ou-expert-comptable",

  motCle: "DAF externe (70/mois)",
  motsClesSecondaires: [
    "DAF part-time (110/mois)",
    "expert-comptable ou DAF",
    "rôle d'un DAF en PME",
  ],

  // 33 / 42
  metaTitle: "DAF externe ou expert-comptable ?",
  // 146 / 150
  metaDescription:
    "Expert-comptable, DAF salarié ou DAF externe : qui fait quoi dans une PME, les signaux qui appellent un DAF et comment les deux travaillent ensemble.",

  h1: "DAF externe ou expert-comptable : qui fait quoi dans une PME ?",
  chapo:
    "Un DAF externe ne remplace pas votre expert-comptable, et votre expert-comptable n'est pas votre directeur financier. Le premier est une profession réglementée : il tient, révise et arrête vos comptes, et lui seul peut le faire à titre habituel pour une entreprise qui ne l'emploie pas. Le second prépare vos décisions : trésorerie à venir, marges, financement, dialogue avec la banque. Une PME de 10 à 250 salariés a presque toujours besoin du premier. Elle a besoin du second le jour où ses chiffres arrivent trop tard pour décider. Voici comment distinguer les trois rôles, repérer le moment où un DAF devient utile et organiser le travail entre eux.",

  essentiel: {
    reponse:
      "L'expert-comptable, inscrit au tableau de l'Ordre, tient et arrête les comptes et établit les déclarations : c'est une mission encadrée par la loi. Le directeur administratif et financier (DAF) pilote la finance de l'entreprise pour préparer les décisions : prévisionnel de trésorerie, tableaux de bord, analyse de marge, relation bancaire. Une PME peut avoir un DAF salarié à plein temps, ou un DAF externe à temps partagé, aussi appelé DAF part-time, qui intervient quelques jours par période. Le DAF externe travaille à partir des comptes produits par l'expert-comptable : les deux se complètent, ils ne se remplacent pas.",
    points: [
      "Expert-comptable : profession réglementée, tenue et arrêté des comptes, déclarations",
      "DAF : pilotage et décision, tourné vers les mois à venir",
      "DAF externe ou part-time : la compétence d'un DAF sans créer le poste",
      "Signaux : trésorerie tendue, croissance rapide, banque qui demande un prévisionnel, projet de financement",
      "Les deux travaillent ensemble : l'un produit les comptes, l'autre s'en sert pour décider",
    ],
  },

  chapitres: [
    {
      label: "Les trois rôles",
      titre: "Expert-comptable, DAF salarié, DAF externe : qui fait quoi",
      blocs: [
        {
          type: "p",
          texte:
            "La confusion vient d'un fait simple : les trois travaillent sur les mêmes chiffres. Ils ne leur posent pas la même question. **L'expert-comptable demande si les comptes sont justes ; le DAF demande ce que l'entreprise peut se permettre.** Le DAF salarié et le DAF externe font le même métier, avec une présence différente.",
        },
        { type: "h3", texte: "L'expert-comptable : les comptes et les obligations" },
        {
          type: "p",
          texte:
            "Il tient ou révise la comptabilité, établit les comptes annuels et, le plus souvent, prépare les déclarations fiscales et sociales. Il travaille sur des périodes closes. Son livrable principal est un bilan et un compte de résultat fiables, sur lesquels il engage sa responsabilité professionnelle.",
        },
        { type: "h3", texte: "Le DAF salarié : un cadre de direction à plein temps" },
        {
          type: "p",
          texte:
            "Il fait partie de l'équipe de direction, siège au comité de direction et pilote la finance au quotidien. Il encadre souvent une équipe comptable interne et suit tout, de la trésorerie aux contrats. C'est le format naturel d'une entreprise dont la complexité occupe une personne à temps plein.",
        },
        { type: "h3", texte: "Le DAF externe : le même métier, à temps partagé" },
        {
          type: "p",
          texte:
            "Le DAF externe, qu'on appelle aussi DAF part-time ou DAF à temps partagé, exerce les missions de pilotage d'un directeur financier sans être salarié de l'entreprise. Il intervient selon un volume convenu, sur un périmètre écrit. C'est ce que nous proposons sous le nom de [DAF externalisé](/daf-externalise-toulouse/), pour les PME et ETI de Toulouse et d'Occitanie : une directrice financière à temps partagé, qui travaille à côté de votre expert-comptable et non à sa place.",
        },
        {
          type: "tableau",
          entetes: ["Votre besoin", "Qui s'en charge"],
          lignes: [
            ["Tenir la comptabilité, arrêter les comptes annuels", "L'expert-comptable (ou un service comptable interne)"],
            ["Établir et déposer les déclarations fiscales et sociales", "L'expert-comptable, dans la plupart des PME"],
            ["Savoir où sera la trésorerie dans trois ou six mois", "Le DAF, salarié ou externe"],
            ["Comprendre quels clients, produits ou chantiers gagnent de l'argent", "Le DAF, à partir des comptes produits par l'expert-comptable"],
            ["Préparer un dossier de financement et le défendre devant la banque", "Le DAF, avec les comptes établis par l'expert-comptable"],
            ["Arbitrer un investissement, un recrutement, une hausse de prix", "Le dirigeant, éclairé par son DAF"],
            ["Piloter une équipe finance interne au quotidien", "Le DAF salarié, rarement un DAF externe"],
          ],
        },
      ],
    },

    {
      label: "Le cadre légal",
      titre: "Ce que la loi réserve à l'expert-comptable",
      blocs: [
        {
          type: "p",
          texte:
            "L'expert-comptable n'est pas un prestataire parmi d'autres : son titre et une partie de ses missions sont protégés. L'[article 2 de l'ordonnance du 19 septembre 1945](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000032364676) définit l'expert-comptable comme celui qui fait profession habituelle de réviser et d'apprécier les comptabilités des entreprises auxquelles il n'est pas lié par un contrat de travail, et de les tenir, centraliser, ouvrir, arrêter, surveiller, redresser et consolider.",
        },
        {
          type: "p",
          texte:
            "Ces travaux sont réservés. L'[article 20 de la même ordonnance](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000045178543) qualifie d'exercice illégal le fait, sans être inscrit au tableau de l'Ordre, d'exécuter habituellement ces travaux pour autrui ou d'en assurer la direction suivie. **Un DAF externe qui n'est pas inscrit à l'Ordre ne tient donc pas votre comptabilité.** Notre cabinet, lui, ne tient aucune comptabilité, par choix : Marjorie Anglade est expert-comptable inscrite à l'Ordre, mais elle intervient ici en directrice financière, à côté de votre expert-comptable et non à sa place.",
        },
        { type: "h3", texte: "L'expert-comptable n'est pas obligatoire, la comptabilité l'est" },
        {
          type: "p",
          texte:
            "Une précision souvent mal comprise : l'administration fiscale rappelle qu'[aucune disposition légale n'oblige une entreprise à recourir à un expert-comptable](https://www.impots.gouv.fr/professionnel/questions/suis-je-oblige-de-recourir-aux-services-dun-expert-comptable). Ce qui est obligatoire, ce sont les obligations comptables et déclaratives attachées au régime de l'entreprise. Si ces travaux ne sont pas faits en interne par un salarié, ils ne peuvent être confiés à l'extérieur qu'à un professionnel inscrit.",
        },
        { type: "h3", texte: "Vérifier une inscription en deux minutes" },
        {
          type: "p",
          texte:
            "L'Ordre publie un [annuaire des experts-comptables](https://annuaire.experts-comptables.org/), gratuit, qui annonce « 22 000 experts-comptables à votre service » et permet de vérifier qu'un professionnel est bien inscrit. C'est le bon réflexe avant de confier vos comptes à quelqu'un, et un bon moyen de lever le doute si un prestataire entretient la confusion entre les deux métiers.",
        },
        {
          type: "p",
          texte:
            "La même ordonnance autorise aussi l'expert-comptable à analyser la situation de l'entreprise sous son aspect économique et financier. Beaucoup de cabinets proposent d'ailleurs des missions de prévisionnel ou de conseil. La frontière n'est donc pas une interdiction pour l'expert-comptable de conseiller, c'est une question de temps, de présence et de mandat, que le chapitre suivant détaille.",
        },
      ],
    },

    {
      label: "Le métier",
      titre: "Le rôle d'un DAF en PME, concrètement",
      blocs: [
        {
          type: "p",
          texte:
            "La fiche métier de l'Apec résume la fonction en une phrase : le DAF [« met en œuvre les choix stratégiques dans leur dimension financière »](https://www.apec.fr/tous-nos-metiers/gestion-finance-et-administration/directeur-administratif-et-financier.html). Elle précise qu'en PME ses activités sont « polyvalentes et opérationnelles » et qu'il travaille en « business partner » du dirigeant. Traduit en semaine de travail, cela donne quatre chantiers.",
        },
        {
          type: "liste",
          items: [
            "**Trésorerie** : un prévisionnel à plusieurs mois, mis à jour, qui dit quand la tension arrivera et de combien",
            "**Pilotage** : quelques indicateurs lus chaque mois, pas un classeur de cinquante onglets que personne n'ouvre",
            "**Rentabilité** : la marge par client, par produit ou par chantier, pour savoir où l'entreprise gagne et où elle perd",
            "**Financement** : la préparation des dossiers, le dialogue avec la banque, les arbitrages entre emprunt, fonds propres et autofinancement",
          ],
        },
        { type: "h3", texte: "Le DAF parle au futur" },
        {
          type: "p",
          texte:
            "La différence avec l'expert-comptable tient d'abord au calendrier. Les comptes annuels décrivent un exercice terminé. Un DAF regarde les trois, six ou douze prochains mois et pose les questions que le bilan ne pose pas : pouvons-nous recruter au printemps, que se passe-t-il si ce client paie avec deux mois de retard, cette machine se finance-t-elle sur sa durée d'usage ?",
        },
        { type: "h3", texte: "Le DAF est présent au moment de la décision" },
        {
          type: "p",
          texte:
            "La seconde différence tient à la place. L'expert-comptable est consulté ; le DAF est dans la pièce quand la décision se prend. Il connaît les projets en cours, les tensions avec tel fournisseur, l'échéance d'un contrat. C'est ce qui lui permet de chiffrer une option avant qu'elle soit choisie, et pas seulement de constater ses effets après coup.",
        },
      ],
    },

    {
      label: "Deux formats",
      titre: "DAF salarié ou DAF part-time : comparer les deux formats",
      blocs: [
        {
          type: "p",
          texte:
            "Une fois le besoin de pilotage reconnu, la vraie question est celle du format. Le poste salarié apporte une présence continue. Le DAF externe apporte la compétence au volume dont l'entreprise a réellement besoin. Aucun des deux n'est supérieur dans l'absolu : tout dépend de la charge de travail financière réelle de votre entreprise.",
        },
        {
          type: "tableau",
          entetes: ["DAF salarié", "DAF externe à temps partagé"],
          lignes: [
            ["Contrat de travail, poste créé dans l'organigramme", "Contrat de prestation, sans création de poste"],
            ["Présence quotidienne, disponible pour toutes les urgences", "Présence planifiée, avec des points réguliers et des échanges entre deux"],
            ["Encadre une équipe comptable et administrative interne", "S'appuie sur l'expert-comptable et les personnes déjà en place"],
            ["Recrutement long, intégration progressive", "Démarrage plus rapide sur un périmètre défini"],
            ["Justifié quand la finance occupe une personne à plein temps", "Justifié quand le besoin est réel mais pas quotidien"],
            ["Connaissance intime de l'entreprise, construite sur la durée", "Regard extérieur, à entretenir par des points réguliers"],
          ],
        },
        { type: "h3", texte: "Le piège du poste créé trop tôt" },
        {
          type: "p",
          texte:
            "Recruter un DAF à plein temps dans une entreprise qui n'a pas de quoi l'occuper expose à un risque connu : le poste glisse vers la saisie et l'administratif, et la personne recrutée pour piloter finit par exécuter. Le temps partagé évite ce décalage, et le volume peut évoluer avec l'entreprise. Pour certaines, il prépare d'ailleurs le recrutement d'un DAF salarié quelques années plus tard, avec des outils déjà en place.",
        },
        { type: "h3", texte: "Le piège du DAF externe qu'on ne voit jamais" },
        {
          type: "p",
          texte:
            "À l'inverse, un DAF externe n'est utile que s'il est régulièrement présent au moment où se prennent les décisions. Une intervention réduite à l'envoi d'un tableau mensuel ressemble davantage à du reporting qu'à une direction financière. Le rythme des points se fixe au départ et s'écrit dans la proposition. La question se pose dans les mêmes termes pour les autres fonctions de direction, comme le montre notre article sur le [directeur commercial externalisé](/infos-utiles/directeur-commercial-externalise/).",
        },
      ],
    },

    {
      label: "Les signaux",
      titre: "Expert-comptable ou DAF : quatre signaux qu'il vous faut un directeur financier",
      blocs: [
        {
          type: "p",
          texte:
            "Si vos comptes sont justes et rendus à temps, votre expert-comptable fait son travail. Le besoin d'un DAF apparaît ailleurs : dans le délai entre ce que vous savez et ce que vous devez décider. Quatre situations le rendent visible.",
        },
        { type: "h3", texte: "1. Votre trésorerie se pilote au solde bancaire" },
        {
          type: "p",
          texte:
            "Vous regardez le compte le matin et vous décalez un paiement fournisseur quand le solde baisse. La tension est rarement une surprise pour quelqu'un qui tient un prévisionnel ; elle l'est presque toujours pour celui qui n'en a pas. Le contexte n'aide pas : selon l'[Observatoire des délais de paiement de la Banque de France](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024), le retard moyen de paiement a atteint 13,6 jours au quatrième trimestre 2024, et sans ces retards les PME auraient disposé de 15 milliards d'euros de trésorerie supplémentaire.",
        },
        { type: "h3", texte: "2. L'activité grandit plus vite que les chiffres" },
        {
          type: "p",
          texte:
            "Le chiffre d'affaires progresse, les effectifs aussi, et le résultat ne suit pas. Plus de stock, plus d'encours clients, plus de charges fixes : la croissance consomme de la trésorerie avant d'en produire. C'est le moment où il faut savoir quelle activité finance l'autre, et c'est une question de pilotage, pas de comptabilité.",
        },
        { type: "h3", texte: "3. Votre banque demande un prévisionnel" },
        {
          type: "p",
          texte:
            "Pour un emprunt ou une ligne de trésorerie, la banque ne se contente pas du dernier bilan. Elle veut savoir comment l'entreprise remboursera. Bpifrance Création détaille par exemple ce qu'on attend d'un [plan de financement à trois ans](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-financement-a-3-ans) : des besoins et des ressources chiffrés, année par année. Si rassembler ces éléments vous prend des jours, et si vous ne savez pas les défendre en rendez-vous, le besoin est là.",
        },
        { type: "h3", texte: "4. Vous préparez une levée de fonds ou une opération" },
        {
          type: "p",
          texte:
            "Entrée d'un investisseur, rachat d'un concurrent, préparation d'une transmission : ces opérations demandent un business plan crédible, des hypothèses assumées et quelqu'un pour répondre aux questions de l'autre partie. C'est typiquement une mission bornée dans le temps, qui convient bien au temps partagé. Si le besoin est plutôt de reprendre les commandes d'une entreprise en crise, c'est un autre métier : voir notre comparatif [manager de transition ou direction à temps partagé](/infos-utiles/manager-de-transition-ou-direction-a-temps-partage/).",
        },
        {
          type: "encadre",
          titre: "La question qui tranche",
          texte:
            "Savez-vous aujourd'hui, à quelques milliers d'euros près, ce que sera votre trésorerie dans trois mois ? Si la réponse est oui, votre besoin de DAF est peut-être limité. Si c'est non, ce n'est pas un manque de comptabilité : c'est un manque de pilotage.",
        },
      ],
    },

    {
      label: "Le binôme",
      titre: "Comment l'expert-comptable et le DAF externe travaillent ensemble",
      blocs: [
        {
          type: "p",
          texte:
            "Un DAF externe qui se pose en concurrent de l'expert-comptable fait perdre du temps à tout le monde. Le bon fonctionnement repose sur une répartition écrite, connue des deux, et sur un flux de données régulier. **L'expert-comptable produit des chiffres fiables ; le DAF les transforme en décisions.**",
        },
        { type: "h3", texte: "Une répartition claire des tâches" },
        {
          type: "liste",
          items: [
            "L'expert-comptable garde la tenue ou la révision des comptes, les comptes annuels, les déclarations et tout ce qui engage sa responsabilité",
            "Le DAF externe construit le prévisionnel, les tableaux de bord et l'analyse de marge, à partir de ces comptes",
            "Les situations intermédiaires, mensuelles ou trimestrielles, sont le point de rencontre : leur rythme se fixe à trois",
            "Les échanges avec la banque se préparent avec le DAF ; les documents comptables qui les accompagnent viennent de l'expert-comptable",
          ],
        },
        { type: "h3", texte: "Le rythme des données, condition de tout le reste" },
        {
          type: "p",
          texte:
            "Un prévisionnel construit sur une comptabilité en retard de plusieurs mois ne vaut pas grand-chose. Avant de commencer, il faut donc s'accorder sur la date à laquelle les pièces sont transmises, sur celle à laquelle la saisie est faite, et sur le niveau de détail utile au pilotage, par exemple une analytique par activité. Ce réglage se fait avec l'expert-comptable, pas contre lui.",
        },
        { type: "h3", texte: "Ce que le dirigeant y gagne" },
        {
          type: "p",
          texte:
            "Vous n'avez plus à jouer les traducteurs entre deux mondes. L'expert-comptable sait à quoi servent les chiffres qu'il produit, le DAF sait sur quoi il peut s'appuyer, et vous recevez une lecture claire au lieu de deux jeux de documents. Pour un dirigeant qui porte seul la plupart des arbitrages, avoir un interlocuteur financier dans la pièce change aussi la manière de décider : les arbitrages ne se font plus seul face au relevé bancaire.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Démarrer avec un DAF externe : les premières étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Une mission de DAF externe réussie commence par un périmètre étroit et un résultat visible. Voici la manière dont nous l'abordons, et dont vous pouvez l'exiger de n'importe quel prestataire.",
        },
        { type: "h3", texte: "Poser le constat avant de proposer" },
        {
          type: "p",
          texte:
            "Le premier temps sert à comprendre l'état de vos données, vos échéances et la question qui vous empêche de décider. Il associe votre expert-comptable dès le départ. Ce constat dit aussi ce qui fonctionne et qui ne sera pas touché.",
        },
        { type: "h3", texte: "Écrire le périmètre" },
        {
          type: "p",
          texte:
            "La proposition précise ce qui est fait, à quel rythme et pour quelle durée. Chez nous, il ne s'élargit pas sans votre accord. Le pilotage financier se souscrit seul. Votre interlocutrice est [Marjorie Anglade](/marjorie-anglade/), associée fondatrice qui porte le pilotage financier au cabinet ; si un sujet sort de son champ, par exemple une marge qui se dégrade pour une raison d'organisation, elle fait appel à un collègue du [conseil en organisation](/transformation-entreprise/), sur ce point précis.",
        },
        { type: "h3", texte: "Livrer un premier outil utile" },
        {
          type: "p",
          texte:
            "Le prévisionnel de trésorerie vient en général en premier, parce qu'il change le plus vite la manière de décider. Les tableaux de bord et l'analyse de marge suivent. L'objectif est que ces outils vous servent, et que votre équipe sache les tenir, pas qu'ils dépendent de nous.",
        },
        {
          type: "p",
          texte:
            "Si vous hésitez encore entre renforcer la relation avec votre expert-comptable et faire appel à un DAF externe, commencez par mesurer où se situe le blocage. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à le situer en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Un DAF externe peut-il tenir la comptabilité de mon entreprise ?",
      r: [
        "Pas s'il n'est pas inscrit au tableau de l'Ordre des experts-comptables. L'ordonnance du 19 septembre 1945 réserve la tenue, la révision et l'arrêté des comptes pour autrui aux experts-comptables inscrits. Un DAF externe non inscrit travaille à partir des comptes produits par votre expert-comptable ou par votre service comptable interne. Il construit le prévisionnel, les tableaux de bord et l'analyse de marge, sans jamais tenir les comptes lui-même.",
      ],
    },
    {
      q: "Mon expert-comptable peut-il jouer le rôle de DAF ?",
      r: [
        "En partie. La loi l'autorise à analyser la situation économique et financière de l'entreprise, et beaucoup de cabinets proposent des prévisionnels ou des missions de conseil. La limite est souvent pratique : un DAF est présent au moment des décisions, connaît les projets en cours et suit la trésorerie mois après mois. Si votre expert-comptable peut assurer cette présence, il peut tenir ce rôle. Sinon, un DAF externe vient compléter son travail.",
      ],
    },
    {
      q: "DAF externe, DAF part-time, DAF à temps partagé : quelle différence ?",
      r: [
        "Aucune sur le fond. Ces trois expressions désignent un directeur administratif et financier qui intervient dans votre entreprise sans en être salarié, pour un volume de temps défini. On parle aussi de DAF externalisé ou de directeur financier à temps partagé. Ce qui compte n'est pas le nom, mais le périmètre écrit, le rythme des points avec le dirigeant et la manière dont le travail s'articule avec l'expert-comptable.",
      ],
    },
    {
      q: "À partir de quand une PME a-t-elle besoin d'un DAF ?",
      r: [
        "Le critère le plus fiable n'est pas l'effectif mais le décalage entre vos chiffres et vos décisions. Une trésorerie pilotée au solde bancaire, une croissance qui ne se retrouve pas dans le résultat, une banque qui demande un prévisionnel que vous peinez à produire, ou un projet de levée de fonds sont les signaux les plus courants. Si l'un d'eux vous concerne, un DAF externe mérite d'être étudié.",
      ],
    },
    {
      q: "Faut-il changer d'expert-comptable quand on fait appel à un DAF externe ?",
      r: [
        "Non. Un DAF externe s'appuie sur votre expert-comptable, il ne le remplace pas. Il faut en revanche caler ensemble le rythme de transmission des pièces, la date des situations intermédiaires et le niveau de détail utile au pilotage. Un expert-comptable qui tient des comptes justes et à jour est la meilleure base pour un pilotage utile. Le changer n'a de sens que si les comptes arrivent durablement trop tard.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Article 2 - Ordonnance n° 45-2138 du 19 septembre 1945 portant institution de l'ordre des experts-comptables et réglementant le titre et la profession d'expert-comptable",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000032364676",
    },
    {
      titre:
        "Article 20 - Ordonnance n° 45-2138 du 19 septembre 1945 portant institution de l'ordre des experts-comptables et réglementant le titre et la profession d'expert-comptable",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000045178543",
    },
    {
      titre: "Suis-je obligé de recourir aux services d'un expert-comptable ?",
      editeur: "impots.gouv.fr",
      url: "https://www.impots.gouv.fr/professionnel/questions/suis-je-oblige-de-recourir-aux-services-dun-expert-comptable",
    },
    {
      titre: "Annuaire des experts-comptables",
      editeur: "Ordre des experts-comptables",
      url: "https://annuaire.experts-comptables.org/",
    },
    {
      titre: "Directeur administratif et financier F/H",
      editeur: "Apec",
      url: "https://www.apec.fr/tous-nos-metiers/gestion-finance-et-administration/directeur-administratif-et-financier.html",
    },
    {
      titre: "Rapport de l'Observatoire des délais de paiement 2024",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024",
    },
    {
      titre: "Le plan de financement à 3 ans dans un projet de création d'entreprise",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-financement-a-3-ans",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2026-09-23",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
