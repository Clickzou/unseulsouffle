import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « transmission entreprise familiale » (210/mois, KD 8).
 * Secondaires : « vendre son entreprise » (390), « Bpifrance transmission » (320).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite la préparation d'une transmission familiale (ou d'une vente)
 * et renvoie vers le pilier.
 *
 * POINTS SENSIBLES
 * - Titre réglementé : le cabinet ne tient aucune comptabilité et ne rédige aucun
 *   acte. Marjorie Anglade est expert-comptable inscrite, mais intervient ici en
 *   directrice financière externalisée. Le texte renvoie les actes au notaire, à
 *   l'avocat et à l'expert-comptable de l'entreprise.
 * - Fiscalité : pacte Dutreil décrit d'après l'article 787 B du CGI dans sa version
 *   en vigueur depuis le 21/02/2026 (engagement individuel porté à six ans). À
 *   revérifier sur Légifrance avant publication (loi de finances 2027 possible).
 * - Information des salariés : règles modifiées pour les ventes conclues à partir du 26/07/2026 (loi n° 2026-403) ; le texte reste
 *   général et renvoie vers un avocat.
 * - Liens internes limités aux articles publiés avant le 26/07/2027.
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "transmission-entreprise-familiale",

  motCle: "transmission entreprise familiale (210/mois, KD 8) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "vendre son entreprise (390/mois)",
    "Bpifrance transmission (320/mois)",
    "succession entreprise familiale",
  ],

  // 35 / 42
  metaTitle: "Transmission d'entreprise familiale",
  // 150 / 150
  metaDescription:
    "Transmission d'entreprise familiale ou vente : les options, le calendrier, le pacte Dutreil, les aides Bpifrance et comment rendre l'entreprise prête.",

  h1: "Transmission d'entreprise familiale : préparer le passage de relais",

  chapo:
    "Une transmission d'entreprise familiale réussie se prépare des années avant la signature, et l'essentiel du travail ne porte pas sur la fiscalité. Il porte sur trois questions : l'entreprise peut-elle fonctionner sans vous, ses chiffres sont-ils lisibles par quelqu'un d'autre, et la famille est-elle d'accord sur qui reprend quoi ? Le cadre fiscal, notamment le pacte Dutreil, allège fortement le coût d'une donation, et Bpifrance finance les reprises. Mais la plupart des transmissions qui échouent échouent faute d'anticipation. Si aucun enfant ne reprend, vendre son entreprise à un tiers se prépare avec la même méthode.",

  essentiel: {
    reponse:
      "La transmission d'une entreprise familiale consiste à faire passer à la génération suivante, ou à un repreneur, à la fois le capital, la direction et la gouvernance de l'entreprise. Selon Bpifrance Le Lab, 65 % des dirigeants de PME et d'ETI familiales souhaitent transmettre à un membre de leur famille, mais 47 % des 60-69 ans n'ont pas formalisé de plan de succession. Elle se prépare en trois chantiers : rendre l'entreprise moins dépendante du dirigeant, fiabiliser et rendre lisibles ses chiffres, organiser l'accord familial, avant de choisir le montage juridique et fiscal avec les professionnels du droit.",
    points: [
      "Capital, direction et gouvernance se transmettent séparément, et pas forcément à la même date",
      "Les professionnels de la transmission estiment qu'il faut au moins 12 à 18 mois pour un processus fluide, et souvent plusieurs années de préparation",
      "Le pacte Dutreil exonère 75 % de la valeur des titres transmis, sous conditions d'engagements de conservation et de direction",
      "Bpifrance accompagne cédants et repreneurs : Bourse de la transmission, prêts, garanties, fonds propres",
      "L'entreprise la plus facile à transmettre est celle qui fonctionne déjà sans son dirigeant",
    ],
  },

  chapitres: [
    {
      label: "Le constat",
      titre: "Transmission d'entreprise familiale : un passage que peu de dirigeants préparent",
      blocs: [
        {
          type: "p",
          texte:
            "Les entreprises familiales veulent rester familiales. L'étude de Bpifrance Le Lab sur [les entreprises familiales à l'épreuve des générations](https://presse.bpifrance.fr/dans-sa-nouvelle-etude-bpifrance-le-lab-decrypte-les-enjeux-de-transmission-des-entreprises-familiales-a-lepreuve-des-generations-comment-les-pme-et-eti-familiales-regardent-elles-lavenir-comment-le), fondée sur 2 233 réponses de dirigeants de PME et d'ETI, montre que 65 % des dirigeants d'entreprises familiales souhaitent transmettre à un membre de leur famille. **Pourtant, 47 % des 60-69 ans et 36 % des plus de 70 ans n'ont pas formalisé de plan de cession ou de succession.** Et 76 % des PME et ETI familiales n'ont ni conseil de famille ni charte familiale.",
        },
        { type: "h3", texte: "Un marché qui ne trouve pas preneur" },
        {
          type: "p",
          texte:
            "Le constat vaut au-delà des familles. Bpifrance Le Lab a interrogé près de 5 000 dirigeants de TPE, PME et ETI pour son étude [Transmission en France : un marché de 370 000 entreprises d'ici 2030](https://lelab.bpifrance.fr/transmission-en-france-un-marche-de-370-000-entreprises-d-ici-2030/), publiée en septembre 2026. En 2024, seules 26 000 entreprises d'au moins un salarié ont été transmises, pour un potentiel de 74 000. Et lorsque la transmission est prévue dans plus d'un an, 70 % des dirigeants n'ont pas entamé la préparation ou n'en sont qu'au stade de la réflexion.",
        },
        { type: "h3", texte: "Pourquoi on repousse" },
        {
          type: "p",
          texte:
            "Les raisons sont rarement techniques. Parler de sa succession, c'est parler de son départ, parfois de sa mort, et de ce que l'on attend de ses enfants. La même étude note que le dirigeant doit se préparer psychologiquement à céder, et parfois faire son « deuil ». Tant que la question n'est pas posée, chacun dans la famille fait ses propres hypothèses, et elles ne sont pas les mêmes. C'est aussi pour cela que tant de dirigeants la portent seuls, comme le décrit notre article sur la [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/).",
        },
      ],
    },

    {
      label: "Trois transmissions",
      titre: "Capital, direction, gouvernance : ce qui se transmet vraiment",
      blocs: [
        {
          type: "p",
          texte:
            "On parle de « la » transmission comme d'un événement unique. En pratique, trois choses changent de mains, et les confondre crée la plupart des conflits.",
        },
        {
          type: "tableau",
          entetes: ["Ce qui se transmet", "La question à trancher"],
          lignes: [
            ["Le capital", "Qui détient les parts, dans quelles proportions, avec quelle compensation pour les enfants qui ne reprennent pas"],
            ["La direction", "Qui dirige au quotidien, à quelle date, avec quelle période de tuilage avec le cédant"],
            ["La gouvernance", "Qui décide des grandes orientations, comment la famille actionnaire s'exprime, comment se règlent les désaccords"],
          ],
        },
        { type: "h3", texte: "Héritier et dirigeant ne sont pas le même rôle" },
        {
          type: "p",
          texte:
            "Un enfant peut hériter de parts sans diriger l'entreprise, et un directeur général extérieur peut diriger une entreprise restée familiale. Séparer ces deux rôles élargit les options : l'enfant qui a le projet reprend la direction et la majorité, les autres restent associés minoritaires, ou sont désintéressés autrement. Ce qui compte est que chacun sache à l'avance ce qu'on attend de lui. Et que les chiffres de l'entreprise soient assez clairs pour que ces arbitrages se fassent sur des faits : c'est souvent là qu'un [DAF externalisé](/daf-externalise-toulouse/) intervient en premier, bien avant le choix du montage.",
        },
        { type: "h3", texte: "La gouvernance familiale se construit avant" },
        {
          type: "p",
          texte:
            "Selon Bpifrance Le Lab, 42 % des entreprises familiales de cinquième génération et plus sont dotées d'une gouvernance familiale, contre 20 % de celles de première génération. Un conseil de famille, une charte, ou simplement une réunion annuelle où l'on parle de l'entreprise à tous les actionnaires : ces outils servent surtout à fixer les règles avant qu'un désaccord ne les rende nécessaires.",
        },
      ],
    },

    {
      label: "Les options",
      titre: "Transmettre en famille ou vendre son entreprise : comparer les voies",
      blocs: [
        {
          type: "p",
          texte:
            "La transmission familiale n'est pas la seule voie, et elle n'est pas toujours la meilleure pour l'entreprise ni pour la famille. L'étude 2026 de Bpifrance Le Lab montre que, pour 48 % des cédants, le critère le plus important est de garantir la pérennité de l'entreprise et de préserver les emplois, devant les qualités humaines du repreneur (40 %) et ses compétences (38 %).",
        },
        {
          type: "tableau",
          entetes: ["Voie de transmission", "Ce qui la caractérise"],
          lignes: [
            ["Donation ou succession à un ou plusieurs enfants", "Coût fiscal réduit par les abattements et le pacte Dutreil ; enjeu d'équité entre les enfants"],
            ["Vente à un membre de la famille", "Le repreneur doit financer le rachat ; le prix doit être défendable face aux autres héritiers"],
            ["Vente à des salariés ou à l'équipe de direction", "Continuité forte ; le financement est souvent l'obstacle principal"],
            ["Vente à un tiers ou à un concurrent", "Prix de marché ; recherche de repreneur plus longue, confidentialité à organiser"],
            ["Transmission progressive", "Le capital et la direction passent par étapes, le cédant accompagne pendant une période définie"],
          ],
        },
        { type: "h3", texte: "Quand vendre son entreprise devient la bonne réponse" },
        {
          type: "p",
          texte:
            "Aucun enfant ne veut reprendre, ou aucun n'a le projet : forcer la succession fragilise l'entreprise et la famille. Vendre son entreprise à un tiers se prépare alors avec la même rigueur. Le premier obstacle cité par les cédants potentiels est le manque de repreneurs (19 %), juste devant des offres à un prix jugé trop faible (18 %), selon l'étude de 2026. Un dossier clair, des chiffres fiables et une entreprise qui tourne sans son dirigeant répondent aux deux.",
        },
        { type: "h3", texte: "La vente aux salariés : une piste à ne pas écarter" },
        {
          type: "p",
          texte:
            "Un cadre ou un groupe de salariés connaît déjà l'entreprise, ses clients et ses équipes. Leur principal frein est financier : toujours selon Bpifrance Le Lab, 44 % des repreneurs salariés ont eu du mal à trouver les financements nécessaires, contre 23 % des repreneurs familiaux. Pour une cession à un tiers, vérifiez aussi avec votre avocat les obligations d'information préalable des salariés, dont les règles ont été modifiées par la loi du 26 mai 2026 pour les ventes conclues à partir du 26 juillet 2026, comme le précise la fiche [Cession du fonds de commerce aux salariés](https://entreprendre.service-public.gouv.fr/vosdroits/F37195) de Service Public Entreprendre.",
        },
      ],
    },

    {
      label: "Rendre transmissible",
      titre: "Rendre l'entreprise transmissible avant de la transmettre",
      blocs: [
        {
          type: "p",
          texte:
            "Un repreneur, enfant ou tiers, ne reprend pas vos intentions : il reprend ce qui existe. **Une entreprise qui ne fonctionne que grâce à son dirigeant perd une partie de sa valeur le jour où il part.** C'est le chantier le plus long, et celui qu'on commence le plus tard.",
        },
        { type: "h3", texte: "Réduire la dépendance au dirigeant" },
        {
          type: "p",
          texte:
            "Les clients clés ne connaissent que vous, les prix se décident dans votre tête, la banque n'appelle que vous : chacun de ces points est un risque pour le repreneur. Les répartir prend du temps. Déléguer des décisions réelles, avec les bons outils juridiques, fait partie de la préparation ; notre article sur la [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/) en décrit les conditions.",
        },
        { type: "h3", texte: "Des chiffres lisibles par quelqu'un d'autre" },
        {
          type: "p",
          texte:
            "Le successeur, ses conseils et sa banque vont examiner les comptes, les marges, la trésorerie et les engagements. S'il faut des jours pour rassembler ces éléments, ou si certaines informations n'existent que dans votre mémoire, l'entreprise paraît plus risquée qu'elle ne l'est. Un prévisionnel de trésorerie tenu, des marges connues par activité et un [tableau de bord de KPI](/infos-utiles/tableau-de-bord-kpi/) lu chaque mois changent la discussion : le repreneur voit une entreprise pilotée, pas une boîte noire.",
        },
        {
          type: "p",
          texte:
            "C'est précisément le travail d'une direction financière en amont d'une transmission : structurer le pilotage financier, fiabiliser les données transmises à l'expert-comptable et préparer les éléments que demanderont le repreneur et ses financeurs. Chez nous, ce travail est porté par [Marjorie Anglade](/marjorie-anglade/), expert-comptable inscrite à l'Ordre, qui intervient ici en directrice financière à temps partagé, aux côtés de votre expert-comptable et sans tenir vos comptes.",
        },
        { type: "h3", texte: "Séparer ce qui est à l'entreprise et ce qui est à la famille" },
        {
          type: "p",
          texte:
            "Immobilier détenu en direct, comptes courants d'associés, véhicules, avantages accordés à des proches : dans une entreprise familiale, les frontières sont souvent floues. Les clarifier avant la transmission évite des discussions de valeur pénibles au moment où chacun a besoin de s'entendre.",
        },
      ],
    },

    {
      label: "Le cadre fiscal",
      titre: "Pacte Dutreil et donation : ce que prévoit la fiscalité",
      blocs: [
        {
          type: "p",
          texte:
            "Le coût fiscal d'une donation d'entreprise fait souvent peur, et à tort. Deux mécanismes le réduisent fortement. Leurs conditions sont strictes : ce qui suit décrit le principe, le montage se fait avec votre notaire, votre avocat et votre expert-comptable.",
        },
        { type: "h3", texte: "Le pacte Dutreil : 75 % de la valeur exonérée" },
        {
          type: "p",
          texte:
            "L'[article 787 B du Code général des impôts](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048806649), dans sa version en vigueur depuis le 21 février 2026, exonère de droits de mutation à titre gratuit les parts ou actions transmises « à concurrence de 75 % de leur valeur ». En contrepartie, les titres doivent faire l'objet d'un engagement collectif de conservation d'au moins deux ans, portant pour une société non cotée sur au moins 17 % des droits financiers et 34 % des droits de vote. Chaque héritier ou donataire s'engage ensuite à conserver les titres reçus pendant six ans, et l'un des signataires ou des bénéficiaires doit exercer une fonction de direction pendant l'engagement collectif et les trois années qui suivent la transmission.",
        },
        { type: "h3", texte: "Les abattements de donation" },
        {
          type: "p",
          texte:
            "Indépendamment du pacte, [impots.gouv.fr](https://www.impots.gouv.fr/particulier/questions/que-puis-je-donner-mes-enfants-petits-enfants-sans-avoir-payer-de-droits) rappelle que chaque parent peut donner jusqu'à 100 000 € à chaque enfant sans payer de droits, abattement utilisable tous les 15 ans, en une fois ou en plusieurs dons. Donner tôt, et en plusieurs temps, permet donc d'utiliser plusieurs fois ces abattements.",
        },
        {
          type: "encadre",
          titre: "À vérifier avec vos conseils",
          texte:
            "Les conditions du pacte Dutreil ont été durcies en 2026 et peuvent encore évoluer. Leur non-respect remet en cause l'exonération. Avant toute décision, faites valider le montage par votre notaire ou votre avocat, avec l'expert-comptable de l'entreprise.",
        },
      ],
    },

    {
      label: "Les financements",
      titre: "Bpifrance transmission : les dispositifs utiles",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance a fait de la transmission un axe prioritaire. Son [Plan Transmission PME - ETI](https://www.bpifrance.fr/plan-transmission-pme-eti) rappelle que 41 % des dirigeants de PME envisagent de céder leur entreprise dans les cinq prochaines années, et réunit des outils pour les cédants comme pour les repreneurs.",
        },
        {
          type: "liste",
          items: [
            "**La Bourse de la transmission** : une plateforme de mise en relation qui centralise plus de 45 000 annonces d'entreprises à reprendre",
            "**Le Prêt Transmission** : pour financer le rachat de titres ou d'un fonds de commerce",
            "**La garantie des financements de reprise** : pour les reprises d'entreprises de plus de trois ans, qui aide la banque à prêter",
            "**Le prêt d'honneur à taux zéro** : pour renforcer l'apport personnel du repreneur",
            "**Les interventions en fonds propres** : pour les opérations de transmission ou de réorganisation du capital",
          ],
        },
        { type: "h3", texte: "Le Prêt Croissance Transmission" },
        {
          type: "p",
          texte:
            "Dernier venu, le [Prêt Croissance Transmission](https://www.bpifrance.fr/catalogue-offres/pret-croissance-transmission) est un prêt sans garantie sur les actifs de l'entreprise ni sur le patrimoine du dirigeant, de 50 000 € à 5 000 000 €, sur trois à sept ans avec un différé d'amortissement de deux ans au plus. Il s'adresse aux TPE, PME et ETI de plus de trois ans, et peut être porté par une holding de reprise.",
        },
        { type: "h3", texte: "Le financement se prépare côté cédant aussi" },
        {
          type: "p",
          texte:
            "Un enfant ou un salarié qui rachète devra convaincre une banque. Des comptes clairs, un prévisionnel crédible et une trésorerie sous contrôle rendent son dossier plus solide. En préparant l'entreprise, vous préparez aussi le financement de votre successeur.",
        },
      ],
    },

    {
      label: "Le calendrier",
      titre: "Le calendrier d'une transmission familiale bien préparée",
      blocs: [
        {
          type: "p",
          texte:
            "Le président de l'association Cédants et Repreneurs d'Affaires, cité par Bpifrance Le Lab, estime qu'il faut « 12 à 18 mois minimum » pour un processus de transmission fluide. C'est un minimum. Une transmission familiale qui inclut la préparation d'un successeur se pense plutôt sur plusieurs années.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Poser la question** : votre projet personnel, votre horizon, et une première conversation franche avec la famille",
            "**Faire le point sur l'entreprise** : dépendance au dirigeant, qualité des chiffres, organisation, ce qui doit être solide avant le départ",
            "**Choisir la voie** : famille, salariés ou tiers, avec l'avis de vos conseils juridiques et fiscaux",
            "**Préparer le successeur** : responsabilités confiées progressivement, décisions réellement déléguées",
            "**Signer et accompagner** : actes rédigés par les professionnels du droit, période de tuilage définie à l'avance, puis retrait réel du cédant",
          ],
        },
        { type: "h3", texte: "Le retrait du cédant, étape souvent oubliée" },
        {
          type: "p",
          texte:
            "Un cédant qui reste dans les murs sans rôle défini brouille l'autorité du successeur. La durée et le contenu du tuilage se fixent avant, par écrit. Partir vraiment fait partie de la réussite de la transmission.",
        },
        {
          type: "p",
          texte:
            "Préparer une transmission est l'une des situations dans lesquelles nous intervenons : votre référent travaille sur les chantiers retenus avec vous, sur un périmètre écrit qui ne s'élargit pas sans votre accord. Pour savoir par où commencer, notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer les points à consolider avant le passage de relais.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Combien de temps faut-il pour préparer la transmission d'une entreprise familiale ?",
      r: [
        "Les professionnels de la transmission cités par Bpifrance Le Lab estiment qu'il faut au minimum 12 à 18 mois pour un processus fluide. Pour une transmission familiale, qui suppose de préparer un successeur, de réduire la dépendance au dirigeant et d'organiser l'accord entre héritiers, mieux vaut raisonner en années. Commencer tôt permet aussi d'étaler les donations et d'utiliser plusieurs fois les abattements fiscaux.",
      ],
    },
    {
      q: "Qu'est-ce que le pacte Dutreil ?",
      r: [
        "C'est un dispositif prévu par l'article 787 B du Code général des impôts qui exonère de droits de donation ou de succession 75 % de la valeur des titres d'une entreprise transmise. En échange, les titres doivent être conservés dans le cadre d'un engagement collectif puis individuel, et un bénéficiaire ou signataire doit diriger l'entreprise pendant une durée minimale. Les conditions sont strictes : faites valider le montage par un notaire ou un avocat.",
      ],
    },
    {
      q: "Faut-il transmettre à ses enfants ou vendre son entreprise ?",
      r: [
        "Tout dépend du projet des enfants et de la santé de l'entreprise. Une transmission familiale imposée à un enfant qui n'en a pas le projet fragilise les deux. Si aucun ne souhaite reprendre, la vente à des salariés ou à un tiers peut mieux garantir la pérennité de l'entreprise. Dans tous les cas, la préparation est la même : une entreprise qui fonctionne sans vous et des chiffres lisibles.",
      ],
    },
    {
      q: "Quelles aides Bpifrance pour une transmission d'entreprise ?",
      r: [
        "Bpifrance propose la Bourse de la transmission, qui centralise plus de 45 000 annonces, le Prêt Transmission, une garantie des financements de reprise, un prêt d'honneur à taux zéro et des interventions en fonds propres. Le Prêt Croissance Transmission, sans garantie sur les actifs ni sur le patrimoine du dirigeant, va de 50 000 € à 5 millions d'euros sur trois à sept ans.",
      ],
    },
    {
      q: "Un DAF externalisé peut-il aider à préparer une transmission ?",
      r: [
        "Oui, sur le volet financier : fiabiliser les chiffres, construire un prévisionnel crédible, clarifier les marges et préparer les éléments que demanderont le repreneur et sa banque. Il travaille avec l'expert-comptable de l'entreprise. Les actes juridiques, le montage fiscal et la rédaction des pactes relèvent du notaire et de l'avocat.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Dans sa nouvelle étude, Bpifrance Le Lab décrypte les enjeux de transmission des entreprises familiales à l'épreuve des générations. Comment les PME et ETI familiales regardent-elles l'avenir ? Comment le préparent-elles ?",
      editeur: "Bpifrance",
      url: "https://presse.bpifrance.fr/dans-sa-nouvelle-etude-bpifrance-le-lab-decrypte-les-enjeux-de-transmission-des-entreprises-familiales-a-lepreuve-des-generations-comment-les-pme-et-eti-familiales-regardent-elles-lavenir-comment-le",
    },
    {
      titre: "Transmission en France : un marché de 370 000 entreprises d'ici 2030",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/transmission-en-france-un-marche-de-370-000-entreprises-d-ici-2030/",
    },
    {
      titre: "Le Plan Transmission PME - ETI",
      editeur: "Bpifrance",
      url: "https://www.bpifrance.fr/plan-transmission-pme-eti",
    },
    {
      titre: "Prêt Croissance Transmission",
      editeur: "Bpifrance",
      url: "https://www.bpifrance.fr/catalogue-offres/pret-croissance-transmission",
    },
    {
      titre: "Article 787 B - Code général des impôts",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048806649",
    },
    {
      titre: "Que puis-je donner à mes enfants, petits-enfants sans avoir à payer de droits ?",
      editeur: "impots.gouv.fr",
      url: "https://www.impots.gouv.fr/particulier/questions/que-puis-je-donner-mes-enfants-petits-enfants-sans-avoir-payer-de-droits",
    },
    {
      titre: "Cession du fonds de commerce aux salariés",
      editeur: "Service Public Entreprendre",
      url: "https://entreprendre.service-public.gouv.fr/vosdroits/F37195",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-07-26",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: true,
};
