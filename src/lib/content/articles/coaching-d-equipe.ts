import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 4 (coopération, intelligence collective), pilier Muriel Saffroy.
 * Requête : « coaching d'équipe » (390/mois, KD 17, SE Ranking 2026-09-23).
 * Toutes les données chiffrées viennent des sources listées en fin de fichier,
 * consultées le 2026-09-23.
 */
export const article: Article = {
  slug: "coaching-d-equipe",

  motCle: "coaching d'équipe (390/mois)",
  motsClesSecondaires: ["coaching d'équipe en entreprise", "coaching collectif", "team coaching"],

  metaTitle: "Coaching d'équipe : le guide du dirigeant",
  metaDescription:
    "Coaching d'équipe en PME : ce qu'il est, ce qu'il n'est pas, quand y recourir, combien de temps il dure et comment choisir un coach qualifié.",
  h1: "Coaching d'équipe : ce qu'il est, quand y recourir, comment choisir",
  chapo:
    "Un coaching d'équipe travaille la façon dont une équipe fonctionne ensemble, pas les personnes une par une. Il se justifie quand le problème tient au collectif : un comité de direction qui discute sans trancher, deux services qui se renvoient les dossiers, une équipe qui a doublé en deux ans. Ce n'est ni un team building, ni une formation, ni une médiation. Il s'étale sur plusieurs mois, et la qualification du coach se vérifie. Voici de quoi décider en connaissance de cause.",

  essentiel: {
    reponse:
      "Le coaching d'équipe est un accompagnement dans lequel un coach travaille avec une équipe réelle, sur plusieurs mois, pour l'aider à mieux utiliser ses ressources collectives et à atteindre ses objectifs communs. Il diffère du team building (un événement ponctuel), de la formation (un contenu identique pour tous) et de la médiation (le règlement d'un différend avec l'aide d'un tiers). Il est utile quand le blocage tient au fonctionnement du collectif et non à une personne. Le titre de coach n'étant pas une garantie en soi, on vérifie la formation, la supervision, le code de déontologie et, si possible, une accréditation spécifique au coaching d'équipe.",
    points: [
      "Pour qui : une équipe qui partage un objectif et dépend de ses membres pour l'atteindre, pas un simple groupe",
      "Quand : codir qui ne décide pas, tensions entre services, croissance rapide, équipe nouvellement constituée",
      "Durée : plusieurs mois, avec des temps forts au lancement, à mi-parcours et en fin de cycle",
      "Choix du coach : formation, supervision, code de déontologie, accréditation en coaching d'équipe (ICF, EMCC, SF Coach)",
      "Mesure : des indicateurs posés au départ sur les décisions, la coopération et le vécu de l'équipe",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qu'est-ce qu'un coaching d'équipe ?",
      blocs: [
        {
          type: "p",
          texte:
            "Vous avez une équipe compétente. Pris un par un, vos managers sont bons. Et pourtant, réunis autour de la table, ils produisent moins que la somme de leurs talents : les sujets tournent, les décisions se reportent, les vrais désaccords se règlent dans le couloir. C'est précisément ce terrain que couvre le coaching d'équipe.",
        },
        { type: "h3", texte: "La définition des fédérations professionnelles" },
        {
          type: "p",
          texte:
            "La Fédération internationale de coaching le décrit comme [un processus de cocréation et de réflexion entre le coach et l'équipe](https://www.coachfederation.fr/deontologie-referentiels/referentiel-de-competences-coaching-dequipes/), qui agit sur les dynamiques et les relations pour aider les membres à atteindre leurs objectifs communs. La Société française de coaching insiste sur le même point : c'est [une pratique qui prend en compte le groupe dans son ensemble](https://www.sfcoach.org/equipe/), et pas seulement les personnes qui le composent.",
        },
        {
          type: "p",
          texte:
            "La recherche en donne une version plus opérationnelle. Pour J. Richard Hackman et Ruth Wageman, de Harvard, le coaching d'équipe est une interaction directe avec l'équipe, destinée à aider ses membres à utiliser leurs ressources collectives de façon coordonnée et adaptée à la tâche ([A Theory of Team Coaching, 2005](https://dash.harvard.edu/handle/1/11077685)). **Le client n'est pas chacun des participants : c'est l'équipe en tant que système.**",
        },
        { type: "h3", texte: "Une équipe, pas un groupe" },
        {
          type: "p",
          texte:
            "Le préalable est souvent oublié. Une revue de littérature de l'Institute for Employment Studies rappelle qu'avant d'engager un coaching d'équipe, il faut [s'assurer qu'on a affaire à une vraie équipe](https://www.employment-studies.co.uk/system/files/resources/files/mp88.pdf) : des personnes qui partagent un objectif et dépendent les unes des autres pour l'atteindre. Appliqué à un simple groupe de responsables qui travaillent en parallèle, le bénéfice attendu reste, selon ses termes, très limité.",
        },
        {
          type: "p",
          texte:
            "En PME, la question se pose d'abord pour le comité de direction. Beaucoup de codirs sont des réunions de reporting où chacun défend son périmètre. Avant de parler de coaching, il faut donc savoir si vous voulez en faire une équipe, c'est-à-dire un lieu où l'on décide ensemble et où l'on répond collectivement du résultat.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, ce travail sur la coopération, les rôles et les modes de décision est porté par [Muriel Saffroy](/muriel-saffroy/), associée fondatrice et référente du pilier organisation et coopération. Il prolonge souvent un [coaching dirigeant](/transformation-dirigeant/) : clarifier la façon dont vous décidez ne suffit pas si votre équipe continue de tout faire remonter.",
        },
      ],
    },

    {
      label: "Distinctions",
      titre: "Coaching d'équipe, team building, formation, médiation : les différences",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot « coaching » s'applique aujourd'hui à beaucoup de prestations. Une étude publiée dans le Journal of Managerial Psychology a interrogé [410 praticiens sur la façon dont ils distinguent le coaching d'équipe des autres interventions](https://research.aston.ac.uk/en/publications/conceptualizing-the-distinctiveness-of-team-coaching/) : ses auteurs constatent que la frontière avec la formation d'équipe, le développement d'équipe et le team building reste floue, et en tirent huit thèmes pour la clarifier. Pour vous, l'enjeu est simple : savoir ce que vous achetez.",
        },
        {
          type: "tableau",
          entetes: ["Démarche", "Ce qu'elle fait, et ce qu'elle ne fait pas"],
          lignes: [
            [
              "Coaching d'équipe",
              "Accompagne une équipe réelle sur plusieurs mois, à partir de son travail réel. Vise sa capacité à décider, coopérer et s'ajuster seule. Le coach ne donne pas la solution.",
            ],
            [
              "Team building",
              "Un événement d'un ou deux jours, centré sur les relations et la cohésion. Rapproche les personnes ; l'effet durable sur la performance est incertain.",
            ],
            [
              "Formation",
              "Transmet un contenu identique pour tous : une méthode, un outil, une compétence. Ne traite pas la façon dont votre équipe fonctionne réellement.",
            ],
            [
              "Médiation",
              "Aide plusieurs personnes à régler un différend précis avec l'aide d'un tiers. Traite un conflit déclaré, pas le fonctionnement ordinaire de l'équipe.",
            ],
            [
              "Facilitation",
              "Conduit une réunion ou un atelier vers un résultat défini à l'avance. Utile pour produire un livrable, pas pour faire évoluer l'équipe dans la durée.",
            ],
            [
              "Coaching individuel",
              "Travaille avec une personne, le plus souvent le dirigeant ou un manager. Ne change pas à lui seul les habitudes du collectif.",
            ],
          ],
        },
        { type: "h3", texte: "Team building et coaching d'équipe" },
        {
          type: "p",
          texte:
            "La revue de l'IES reprend une définition du team building comme une intervention spécifique, typiquement [un programme d'une journée ou plus](https://www.employment-studies.co.uk/system/files/resources/files/mp88.pdf), centré sur les relations interpersonnelles. Elle note que les preuves de son effet durable sur la productivité sont mitigées, alors que le coaching d'équipe porte sur les processus de travail et prend beaucoup plus d'un ou deux jours. Un séminaire au vert peut détendre l'atmosphère. Il ne change pas la manière dont votre codir arbitre un budget.",
        },
        { type: "h3", texte: "Médiation et coaching d'équipe" },
        {
          type: "p",
          texte:
            "La médiation a une définition juridique. Le code de procédure civile la décrit comme [un processus structuré par lequel plusieurs personnes tentent, avec l'aide d'un tiers, de parvenir à un accord](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025181183/) destiné à résoudre le différend qui les oppose. Quand deux associés ou deux directeurs ne se parlent plus, c'est par là qu'il faut commencer. Un coaching d'équipe engagé sur un conflit ouvert expose le coach à devenir l'arbitre, ce qui n'est pas son rôle.",
        },
      ],
    },

    {
      label: "Situations",
      titre: "Quand le coaching d'équipe en entreprise est utile",
      blocs: [
        {
          type: "p",
          texte:
            "Le coaching d'équipe en entreprise répond à un type de problème précis : **les personnes sont compétentes, mais leur fonctionnement collectif coûte plus qu'il ne rapporte.** Quatre situations reviennent en PME.",
        },
        { type: "h3", texte: "Un comité de direction qui ne décide pas" },
        {
          type: "p",
          texte:
            "Les réunions sont régulières, l'ordre du jour est chargé, et les décisions finissent toujours sur le bureau du dirigeant. Chacun présente ses chiffres, personne ne tranche sur le périmètre d'un autre. Le coaching porte alors sur ce que le codir décide réellement, selon quelle règle, et sur ce qui se passe quand un membre n'est pas d'accord. C'est aussi, pour le dirigeant, la condition pour cesser d'être le seul point de passage.",
        },
        { type: "h3", texte: "Des tensions entre services" },
        {
          type: "p",
          texte:
            "Production et commerce, bureau d'études et atelier, siège et agences : les frictions aux interfaces sont banales. Elles deviennent un sujet quand chaque service a construit son récit sur l'autre et que les dossiers transversaux n'avancent plus. Un coaching réunissant les responsables concernés travaille les règles du jeu entre eux. Si les rôles et les processus sont eux-mêmes mal définis, c'est d'abord un travail de [conseil en organisation](/transformation-entreprise/) qu'il faut mener.",
        },
        { type: "h3", texte: "Une croissance rapide, une équipe nouvelle" },
        {
          type: "p",
          texte:
            "Une entreprise qui grandit vite recrute des managers qui n'ont pas l'historique des fondateurs, et les habitudes informelles cessent de fonctionner. De même, une équipe de direction fraîchement constituée, après un rachat, une réorganisation ou l'arrivée d'un nouveau dirigeant, doit poser ses règles avant que les malentendus ne s'installent. L'IES observe que les organisations font appel au coaching d'équipe [lors de transitions majeures de rôle ou de composition](https://www.employment-studies.co.uk/system/files/resources/files/mp88.pdf), ou quand une équipe rencontre des problèmes importants.",
        },
        { type: "h3", texte: "Quand ce n'est pas la bonne réponse" },
        {
          type: "liste",
          items: [
            "**Le problème tient à une personne** : un manager en difficulté relève d'un accompagnement individuel ou d'une décision de management, pas d'un travail collectif.",
            "**Le conflit est ouvert** : médiation d'abord, coaching éventuellement ensuite.",
            "**La structure est en cause** : si personne ne sait qui décide quoi parce que l'organisation ne l'a jamais écrit, le coaching butera sur cette absence.",
            "**Le dirigeant ne veut pas bouger** : une équipe ne coopère pas durablement si celui qui la dirige revient sur ce qu'elle décide.",
          ],
        },
        {
          type: "p",
          texte:
            "Ce dernier point rejoint une conclusion de Hackman et Wageman : un bon coaching produit davantage d'effet sur une équipe [bien structurée et soutenue](https://dash.harvard.edu/handle/1/11077685) que sur une équipe qui ne l'est pas. Le coaching ne compense pas une équipe mal conçue.",
        },
      ],
    },

    {
      label: "Déroulé",
      titre: "Le déroulé type d'une démarche de coaching collectif",
      blocs: [
        {
          type: "p",
          texte:
            "Chaque coach a sa méthode, mais une démarche sérieuse de coaching collectif suit à peu près la même trame. Si la proposition que vous recevez saute l'une de ces étapes, demandez pourquoi.",
        },
        {
          type: "liste",
          items: [
            "**La demande.** Vous exposez la situation au coach. Il vérifie que le problème est bien collectif, qu'il s'agit d'une équipe réelle et qu'un coaching est la bonne réponse. Il peut vous répondre que non.",
            "**Le cadrage et le contrat.** Objectifs, participants, nombre et rythme des séances, règles de confidentialité, place du dirigeant, modalités de bilan. Tout est écrit avant de commencer.",
            "**L'état des lieux.** Entretiens individuels avec les membres, observation d'une réunion réelle, parfois un questionnaire. Le coach voit l'équipe travailler avant de la coacher.",
            "**Les séances collectives.** L'équipe traite ses sujets réels : une décision en suspens, une règle de fonctionnement, un désaccord récurrent. Le coach travaille la manière dont elle s'y prend, pas le contenu à sa place.",
            "**Les points d'étape.** Un bilan intermédiaire avec le dirigeant et l'équipe, pour ajuster ce qui doit l'être.",
            "**Le bilan final.** Ce qui a changé au regard des objectifs de départ, et la façon dont l'équipe continue sans coach.",
          ],
        },
        { type: "h3", texte: "La place du dirigeant" },
        {
          type: "p",
          texte:
            "Dans un coaching de comité de direction, le dirigeant est à la fois commanditaire et membre de l'équipe. C'est la difficulté principale de l'exercice. Le cadrage doit dire clairement ce qui remonte vers lui et ce qui reste dans le groupe. L'IES relève d'ailleurs que le coach doit tenir [la confidentialité des échanges individuels](https://www.employment-studies.co.uk/system/files/resources/files/mp88.pdf) lorsqu'il revient au collectif. Un dirigeant qui attend un compte rendu nominatif de ce que chacun a dit n'achète pas un coaching d'équipe.",
        },
        { type: "h3", texte: "Ce que cela demande à votre équipe" },
        {
          type: "p",
          texte:
            "Autant le dire franchement : un coaching d'équipe prend du temps de direction. Les séances collectives mobilisent vos principaux responsables en même temps, et le travail se poursuit entre les séances. C'est la contrepartie d'une démarche qui s'appuie sur le travail réel plutôt que sur des cas d'école. Chez Un Seul Souffle, les cercles d'avancée réunissent six à huit personnes en sessions de trois heures sur trois mois : le volume est connu avant de commencer.",
        },
      ],
    },

    {
      label: "Durée",
      titre: "Durée et rythme d'un coaching d'équipe",
      blocs: [
        {
          type: "p",
          texte:
            "Aucune norme ne fixe la durée d'un coaching d'équipe, et il faut se méfier des offres qui en promettent une toute faite. Les sources sérieuses convergent en revanche sur deux points : il s'inscrit dans la durée, et le moment des interventions compte autant que leur nombre.",
        },
        { type: "h3", texte: "Plusieurs mois, pas quelques jours" },
        {
          type: "p",
          texte:
            "La revue de l'IES décrit le coaching d'équipe comme une intervention sur une période étendue, par opposition à l'événement unique du team building. L'un des cas qu'elle présente, dans un service du système de santé britannique, s'est étalé sur [neuf mois](https://www.employment-studies.co.uk/system/files/resources/files/mp88.pdf). ICF France, de son côté, rappelle que le coaching est [limité dans le temps](https://www.coachfederation.fr/faq/) : la durée est fixée au contrat, pas laissée ouverte.",
        },
        { type: "h3", texte: "Trois moments qui comptent" },
        {
          type: "p",
          texte:
            "Hackman et Wageman ont montré que les équipes sont surtout réceptives au coaching à [trois moments de leur cycle de travail](https://dash.harvard.edu/handle/1/11077685), chacun appelant un type d'intervention différent.",
        },
        {
          type: "tableau",
          entetes: ["Moment du cycle", "Ce que le coaching y apporte"],
          lignes: [
            [
              "Au lancement",
              "Engagement : donner à chacun une raison de s'investir dans le travail commun, clarifier ce que l'équipe doit produire.",
            ],
            [
              "À mi-parcours",
              "Stratégie : l'équipe a assez d'expérience pour juger ce qui marche et revoir sa façon de travailler.",
            ],
            [
              "En fin de cycle",
              "Apprentissage : tirer les leçons du travail accompli pour renforcer les savoir-faire de l'équipe.",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Conséquence pratique pour un dirigeant : calez le coaching sur un cycle réel de l'entreprise, un exercice budgétaire, un projet d'investissement, une intégration après rachat. Des séances mensuelles détachées de tout enjeu concret produisent peu.",
        },
      ],
    },

    {
      label: "Choisir",
      titre: "Comment choisir un coach d'équipe",
      blocs: [
        {
          type: "p",
          texte:
            "N'importe qui peut se présenter comme coach. La fédération ICF France résume les critères qu'elle juge incontournables : [un coach formé, supervisé, engagé à respecter un code de déontologie](https://www.coachfederation.fr/faq/). Pour le coaching d'équipe, ajoutez l'expérience des dynamiques de groupe : l'IES rappelle que les praticiens expérimentés jugent insuffisante une formation au seul coaching individuel.",
        },
        { type: "h3", texte: "Les accréditations spécifiques au team coaching" },
        {
          type: "liste",
          items: [
            "**ICF.** La certification avancée en coaching d'équipe (ACTC) suppose de détenir déjà un niveau ACC, PCC ou MCC, [au moins 60 heures de formation au coaching d'équipe et au moins cinq accompagnements d'équipe](https://coachingfederation.org/credentialing/icf-credentials-overview/compare-credentials/).",
            "**EMCC Global.** L'accréditation individuelle en coaching d'équipe (ITCA) comporte [quatre niveaux](https://emccglobal.org/home/accreditation/itca/), avec un nombre minimal d'équipes accompagnées, une supervision individuelle continue et l'adhésion au code d'éthique de la fédération.",
            "**SF Coach.** La Société française de coaching délivre une [accréditation de coach d'équipe](https://www.sfcoach.org/equipe/) réservée à ses membres, qui exige une pratique en entreprise, un nombre significatif de coachings d'équipe menés et l'accès à une supervision, qu'elle qualifie de prérequis incontournable.",
          ],
        },
        { type: "h3", texte: "Vérifier une certification RNCP" },
        {
          type: "p",
          texte:
            "Plusieurs titres de coach professionnel sont inscrits au répertoire national des certifications professionnelles. France compétences explique comment [vérifier qu'une certification est reconnue par l'État](https://www.francecompetences.fr/fiche/votre-futur-diplome-est-il-reconnu-par-letat-2/) : elle doit figurer au RNCP, être indiquée comme active sur sa fiche, et l'organisme doit être habilité à la préparer. Demandez le numéro RNCP et vérifiez-le vous-même : certaines fiches sont arrivées à échéance.",
        },
        { type: "h3", texte: "Les questions à poser en entretien" },
        {
          type: "liste",
          items: [
            "Combien d'équipes avez-vous accompagnées, de quelle taille, dans quel type d'entreprise ?",
            "Qui supervise votre pratique, et à quel rythme ?",
            "À quel code de déontologie vous référez-vous ?",
            "Comment traitez-vous ce que vous apprenez en entretien individuel ?",
            "Dans quel cas refuseriez-vous la mission ?",
            "Comment saurons-nous, à la fin, que le coaching a produit quelque chose ?",
          ],
        },
        {
          type: "p",
          texte:
            "La dernière question est la plus révélatrice. Un coach qui ne sait pas y répondre concrètement vous vendra des séances, pas un résultat. Si votre besoin porte surtout sur la posture de vos managers avec leurs propres équipes, le [coaching en management](/infos-utiles/coaching-en-management/) est une autre porte d'entrée.",
        },
      ],
    },

    {
      label: "Mesure",
      titre: "Mesurer l'effet d'un team coaching",
      blocs: [
        {
          type: "p",
          texte:
            "La recherche est prudente sur l'efficacité du team coaching. La revue de l'IES constate [peu de preuves empiriques](https://www.employment-studies.co.uk/system/files/resources/files/mp88.pdf) de ses bénéfices, et l'étude publiée dans le Journal of Managerial Psychology souligne que l'absence de définition partagée freine la construction d'une théorie solide. Méfiez-vous donc de toute promesse chiffrée : c'est à vous de définir ce qui doit changer, et de le vérifier.",
        },
        { type: "h3", texte: "Trois critères, pas un seul" },
        {
          type: "p",
          texte:
            "Hackman et Wageman jugent l'efficacité d'une équipe sur [trois dimensions](https://dash.harvard.edu/handle/1/11077685) : ce qu'elle produit répond aux attentes de ceux qui l'utilisent ; elle devient plus capable de travailler ensemble à l'avenir ; l'expérience collective contribue à l'apprentissage et au bien-être de ses membres plutôt qu'elle ne les use. Un coaching qui améliore le premier critère en sacrifiant le troisième n'a pas réussi.",
        },
        { type: "h3", texte: "Des indicateurs posés au départ" },
        {
          type: "liste",
          items: [
            "**Décisions** : nombre de sujets reportés d'une réunion à l'autre, délai entre la mise à l'ordre du jour et la décision, part des décisions qui remontent au dirigeant.",
            "**Coopération** : dossiers transversaux bloqués, désaccords traités en réunion plutôt qu'en aparté.",
            "**Vécu** : un court questionnaire à l'équipe, passé au début et à la fin, sur la clarté des rôles et la possibilité de dire un désaccord.",
            "**Autonomie** : ce que l'équipe sait faire seule à la fin, sans le coach.",
          ],
        },
        {
          type: "p",
          texte:
            "Ces indicateurs n'ont de valeur que s'ils sont relevés avant la première séance : sans point de départ daté, un bilan reste une impression. C'est aussi ce qui vous permet de décider, à mi-parcours, de poursuivre ou d'arrêter.",
        },
        {
          type: "p",
          texte:
            "Le coaching d'équipe s'inscrit dans un ensemble plus large de pratiques de coopération, que nous détaillons dans notre article sur [l'intelligence collective en entreprise](/infos-utiles/intelligence-collective-en-entreprise/). Et si vous ne savez pas encore si votre blocage tient à l'équipe, à l'organisation ou à la structure, commencez par un [diagnostic d'entreprise](/diagnostic/) : il vous dira où regarder avant d'engager qui que ce soit.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle différence entre coaching d'équipe et team building ?",
      r: [
        "Le team building est un événement ponctuel, souvent d'un ou deux jours, qui vise la cohésion et les relations entre les personnes. Le coaching d'équipe s'étale sur plusieurs mois et part du travail réel de l'équipe : ses décisions, ses règles de fonctionnement, ses désaccords. Le premier rapproche les gens, le second change la façon dont ils travaillent ensemble. Les deux ne s'excluent pas, mais ils ne répondent pas au même problème.",
      ],
    },
    {
      q: "Combien de temps dure un coaching d'équipe ?",
      r: [
        "Aucune norme ne fixe sa durée. Les sources de référence le décrivent comme une intervention étalée sur plusieurs mois, limitée dans le temps et fixée au contrat. La recherche de Hackman et Wageman montre que le moment des séances compte autant que leur nombre : au lancement d'un cycle de travail, à mi-parcours et à la fin. Mieux vaut donc caler le coaching sur un cycle réel de l'entreprise, comme un exercice budgétaire ou un projet.",
      ],
    },
    {
      q: "Le dirigeant doit-il participer aux séances ?",
      r: [
        "Quand l'équipe coachée est le comité de direction, oui : le dirigeant en fait partie, et un codir ne change pas ses habitudes sans lui. Il est alors à la fois commanditaire et participant, ce qui impose de fixer au cadrage ce qui lui est restitué et ce qui reste dans le groupe. Pour une équipe de managers intermédiaires, sa présence se discute selon l'objectif poursuivi.",
      ],
    },
    {
      q: "Comment vérifier qu'un coach d'équipe est qualifié ?",
      r: [
        "Le titre de coach ne suffit pas. Demandez la formation suivie et, pour une certification RNCP, son numéro, à vérifier sur le site de France compétences. Demandez qui supervise sa pratique et à quel code de déontologie il se réfère. Les fédérations délivrent des accréditations propres au coaching d'équipe : ACTC chez ICF, ITCA chez EMCC Global, accréditation de coach d'équipe chez SF Coach. Enfin, interrogez-le sur les équipes déjà accompagnées.",
      ],
    },
    {
      q: "Un coaching d'équipe peut-il résoudre un conflit ouvert ?",
      r: [
        "Rarement. Quand deux membres de l'équipe ne se parlent plus, la réponse adaptée est d'abord une médiation : un processus structuré où les personnes cherchent un accord avec l'aide d'un tiers. Engager un coaching d'équipe sur un conflit déclaré pousse le coach à devenir arbitre, ce qui n'est pas son rôle. Une fois le différend réglé, le coaching peut aider l'équipe à rebâtir des règles de fonctionnement.",
      ],
    },
  ],

  sources: [
    {
      titre: "Référentiel de compétences Coaching d'Équipes",
      editeur: "ICF France (Fédération internationale de coaching)",
      url: "https://www.coachfederation.fr/deontologie-referentiels/referentiel-de-competences-coaching-dequipes/",
    },
    {
      titre: "Foire aux Questions",
      editeur: "ICF France (Fédération internationale de coaching)",
      url: "https://www.coachfederation.fr/faq/",
    },
    {
      titre: "Compare ICF Coaching Credentials | ACC, PCC, MCC & ACTC",
      editeur: "International Coaching Federation",
      url: "https://coachingfederation.org/credentialing/icf-credentials-overview/compare-credentials/",
    },
    {
      titre: "Accreditation for team coaches",
      editeur: "EMCC Global",
      url: "https://emccglobal.org/home/accreditation/itca/",
    },
    {
      titre: "Spécialisation en coaching d'équipe",
      editeur: "SF Coach (Société française de coaching)",
      url: "https://www.sfcoach.org/equipe/",
    },
    {
      titre: "A Theory of Team Coaching (Hackman et Wageman, Academy of Management Review, 2005)",
      editeur: "Harvard University, DASH",
      url: "https://dash.harvard.edu/handle/1/11077685",
    },
    {
      titre: "Team Coaching: a Literature Review (Ben Hicks, 2010)",
      editeur: "Institute for Employment Studies",
      url: "https://www.employment-studies.co.uk/system/files/resources/files/mp88.pdf",
    },
    {
      titre: "Conceptualizing the distinctiveness of Team Coaching (Journal of Managerial Psychology, 2019)",
      editeur: "Aston University",
      url: "https://research.aston.ac.uk/en/publications/conceptualizing-the-distinctiveness-of-team-coaching/",
    },
    {
      titre: "Vérifiez en quelques clics si votre futur diplôme est reconnu par l'État",
      editeur: "France compétences",
      url: "https://www.francecompetences.fr/fiche/votre-futur-diplome-est-il-reconnu-par-letat-2/",
    },
    {
      titre: "Article 1530 - Code de procédure civile",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025181183/",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-09-23",
  accent: "organisation",
  pilier: { href: "/muriel-saffroy/", ancre: "Muriel Saffroy" },

  valide: true,
};
