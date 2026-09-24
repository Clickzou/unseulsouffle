import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 6, stratégie commerciale (master § 3). Pilier du silo à
 * créer : en attendant, l'article se rattache à la home.
 * Requête : « politique commerciale » (390/mois, KD 9, SE Ranking 24/09/2026).
 * Secondaires : « stratégies commerciales » (290), « stratégie business » (390).
 * Signé par Nicolas Vimini : seuls les faits de sa bio (home.ts) sont utilisés.
 *
 * POINT SENSIBLE — DROIT DE LA NÉGOCIATION COMMERCIALE. Les règles citées sur les
 * conditions générales de vente et les délais de paiement viennent des articles
 * L441-1 et L441-10 du code de commerce, lus sur Légifrance le 24/09/2026. Le
 * texte renvoie vers un avocat pour la rédaction des CGV : ne pas le transformer
 * en conseil juridique.
 *
 * Liens vers d'autres articles : uniquement des articles publiés avant le
 * 21/12/2026 (force-de-vente-externalisee, seuil-de-rentabilite,
 * directeur-commercial-externalise).
 */
export const article: Article = {
  slug: "politique-commerciale",

  motCle: "politique commerciale (390/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "stratégies commerciales (290/mois)",
    "stratégie business (390/mois)",
    "politique de prix PME",
    "conditions générales de vente",
  ],

  metaTitle: "Politique commerciale d'une PME : méthode",
  metaDescription:
    "Politique commerciale : définition, différence avec la stratégie, prix et conditions de vente, indicateurs et méthode pour l'écrire dans une PME.",

  h1: "Politique commerciale : la définir, l'écrire et la faire appliquer dans une PME",

  chapo:
    "La politique commerciale d'une PME, c'est l'ensemble des règles qui disent à qui l'entreprise vend, quoi, à quel prix, par quels canaux et à quelles conditions. Elle traduit la stratégie business en décisions que vos commerciaux appliquent chaque jour sans avoir à vous appeler. Dans beaucoup d'entreprises de 10 à 250 salariés, elle n'est écrite nulle part : elle vit dans la tête du dirigeant, et chaque remise se négocie au cas par cas. Le coût est invisible jusqu'au jour où les marges fondent. Voici comment la construire, ce que la loi impose sur les prix et les conditions de vente, et comment la piloter avec quelques indicateurs.",

  essentiel: {
    reponse:
      "Une politique commerciale est le cadre écrit qui encadre la vente dans une entreprise : les clients visés, l'offre, la politique de prix et de remises, les canaux de distribution, la communication et les conditions de vente. Elle découle de la stratégie commerciale, qui fixe le cap à plusieurs années, et la rend applicable au quotidien. Entre professionnels, les conditions générales de vente, lorsqu'elles existent, constituent le socle unique de la négociation commerciale (article L441-1 du code de commerce). Une politique commerciale utile tient en quelques pages, se pilote avec cinq ou six indicateurs et se révise au moins une fois par an.",
    points: [
      "Stratégie commerciale : le cap. Politique commerciale : les règles qui permettent de le tenir",
      "Six composantes : cibles, offre, prix et remises, canaux, communication, conditions de vente",
      "Le prix et les délais de paiement sont encadrés par le code de commerce entre professionnels",
      "Une politique commerciale se mesure : marge par client, taux de transformation, remise moyenne, délai d'encaissement",
      "Sans règles écrites, chaque vente dépend du dirigeant, et l'entreprise ne peut pas grandir plus vite que lui",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Politique commerciale, stratégie commerciale, stratégie business : trois niveaux distincts",
      blocs: [
        {
          type: "p",
          texte:
            "Les trois expressions sont souvent employées l'une pour l'autre. Elles désignent pourtant trois niveaux de décision, du plus large au plus concret. **La stratégie dit où l'entreprise va ; la politique commerciale dit comment chaque vente doit se passer pour y arriver.**",
        },
        { type: "h3", texte: "La stratégie business : le choix des marchés" },
        {
          type: "p",
          texte:
            "La stratégie business, ou stratégie d'entreprise, répond à des questions de fond : sur quels marchés l'entreprise veut-elle se développer, avec quelle offre, contre quels concurrents, et avec quels moyens ? Elle engage l'entreprise sur plusieurs années. C'est le dirigeant, avec ses associés ou son comité de direction, qui la porte.",
        },
        { type: "h3", texte: "La stratégie commerciale : le plan pour conquérir ces marchés" },
        {
          type: "p",
          texte:
            "La stratégie commerciale décline ce choix sur le terrain de la vente : quels segments de clients prioriser, quel positionnement de prix, quelle organisation de la force de vente, quels objectifs de chiffre d'affaires et de marge. Elle se formule sur deux à trois ans et se réajuste chaque année.",
        },
        { type: "h3", texte: "La politique commerciale : les règles du quotidien" },
        {
          type: "p",
          texte:
            "La politique commerciale transforme ce plan en règles applicables : la grille tarifaire, les remises autorisées et qui peut les accorder, les conditions de paiement, les clients qu'on accepte ou qu'on refuse, les canaux par lesquels on vend. Un commercial doit pouvoir la consulter avant un rendez-vous et savoir jusqu'où il peut aller sans appeler personne.",
        },
        {
          type: "p",
          texte:
            "C'est à ce troisième niveau que la plupart des PME décrochent. La stratégie est claire dans la tête du dirigeant, les objectifs sont fixés, mais rien ne relie les deux aux décisions prises chaque jour en rendez-vous. Comme [cabinet de conseil à Toulouse](/) qui travaille avec des PME et des ETI de 10 à 250 salariés, c'est souvent par ce chaînon manquant que nous abordons le sujet commercial.",
        },
        {
          type: "tableau",
          entetes: ["Niveau", "Ce qu'il fixe"],
          lignes: [
            ["Stratégie business", "Les marchés visés, l'offre, le positionnement face à la concurrence, à trois à cinq ans"],
            ["Stratégie commerciale", "Les segments prioritaires, les objectifs de chiffre d'affaires et de marge, l'organisation de la vente, à deux ou trois ans"],
            ["Politique commerciale", "Les prix, les remises, les conditions de vente, les canaux, les règles de décision, révisés chaque année"],
            ["Plan d'action commercial", "Les actions datées, les responsables et les moyens pour atteindre les objectifs de l'année"],
          ],
        },
      ],
    },

    {
      label: "Les composantes",
      titre: "Les six composantes d'une politique commerciale",
      blocs: [
        {
          type: "p",
          texte:
            "Les manuels de marketing parlent des « 4P » : produit, prix, distribution et communication. Bpifrance Création rappelle que la [politique de distribution](https://bpifrance-creation.fr/encyclopedie/letude-marche/determiner-sa-strategie/politique-distribution-comment-loffre-va-toucher) s'inscrit dans ce marketing mix, à côté du produit, du prix et de la promotion. Pour une PME qui vend à d'autres entreprises, deux éléments s'ajoutent : le choix des clients et les conditions de vente.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Les cibles** : les segments de clients prioritaires, et ceux que l'entreprise ne cherche plus à servir",
            "**L'offre** : la gamme, ce qui est standard, ce qui se fait sur mesure et à quel prix",
            "**Le prix et les remises** : le barème, les remises autorisées, les niveaux de délégation",
            "**Les canaux** : vente directe, distributeurs, agents, vente en ligne, et la règle quand deux canaux visent le même client",
            "**La communication** : les messages, les supports, les salons, la présence en ligne",
            "**Les conditions de vente** : délais de paiement, pénalités, minimum de commande, garanties",
          ],
        },
        { type: "h3", texte: "Le choix des clients, la composante la plus souvent oubliée" },
        {
          type: "p",
          texte:
            "Une politique commerciale dit aussi à qui l'entreprise ne vend pas, ou plus. Un client qui exige des remises hors barème, paie tard et mobilise le bureau d'études pour des commandes modestes peut coûter plus qu'il ne rapporte. Tant que la règle n'est pas écrite, personne n'ose le dire, et le commercial qui le signe est félicité pour le chiffre d'affaires.",
        },
        { type: "h3", texte: "La cohérence entre les composantes" },
        {
          type: "p",
          texte:
            "Chaque composante prise isolément peut sembler raisonnable. Le problème vient des contradictions : un positionnement haut de gamme vendu par un distributeur qui négocie sur le prix, une offre sur mesure facturée au tarif standard, une communication qui promet des délais que la production ne tient pas. Écrire la politique commerciale sur un seul document oblige à voir ces contradictions.",
        },
      ],
    },

    {
      label: "Prix et cadre légal",
      titre: "Politique de prix et conditions de vente : ce que dit le code de commerce",
      blocs: [
        {
          type: "p",
          texte:
            "Entre professionnels, la politique commerciale n'est pas entièrement libre. Le code de commerce encadre la transparence des conditions de vente et les délais de paiement. **Ces règles ne sont pas une contrainte administrative de plus : elles donnent à la PME un point d'appui dans la négociation.**",
        },
        { type: "h3", texte: "Les conditions générales de vente, socle de la négociation" },
        {
          type: "p",
          texte:
            "L'[article L441-1 du code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414469) prévoit que les conditions générales de vente comprennent notamment les conditions de règlement et les éléments de détermination du prix, comme le barème des prix unitaires et les éventuelles réductions de prix. Le même article précise que, lorsqu'elles sont établies, elles constituent le socle unique de la négociation commerciale. Elles peuvent être différenciées selon les catégories d'acheteurs.",
        },
        {
          type: "p",
          texte:
            "Elles doivent être communiquées à tout acheteur professionnel qui en fait la demande. Le refus est passible d'une amende administrative pouvant atteindre 15 000 euros pour une personne physique et 75 000 euros pour une personne morale. La [CCI Paris Île-de-France](https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-conditions-generales-de-vente-entre-professionnels) rappelle que les CGV ne sont pas obligatoires, mais qu'elles clarifient la relation et limitent les contestations.",
        },
        { type: "h3", texte: "Les délais de paiement, une décision de politique commerciale" },
        {
          type: "p",
          texte:
            "L'[article L441-10 du code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392) fixe le délai de paiement à trente jours après la réception des marchandises ou l'exécution de la prestation, sauf accord des parties. Le délai convenu ne peut pas dépasser soixante jours à compter de la date d'émission de la facture, ou, par dérogation expressément stipulée, quarante-cinq jours fin de mois. Les pénalités de retard sont exigibles sans rappel, et une indemnité forfaitaire pour frais de recouvrement est due.",
        },
        {
          type: "p",
          texte:
            "Accorder un délai plus long qu'un concurrent revient à financer son client. L'enjeu est réel : selon le [rapport de l'Observatoire des délais de paiement de la Banque de France](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024), le retard moyen de paiement atteignait 13,6 jours au quatrième trimestre 2024, et les PME auraient disposé de 15 milliards d'euros de trésorerie supplémentaire sans ces retards.",
        },
        {
          type: "encadre",
          titre: "À faire valider par un professionnel du droit",
          texte:
            "La rédaction des conditions générales de vente, des clauses de pénalités ou de réserve de propriété engage l'entreprise. Faites-les relire par un avocat en droit des affaires. Le rôle de la politique commerciale est de décider des règles ; celui du juriste est de les écrire correctement.",
        },
      ],
    },

    {
      label: "Stratégies commerciales",
      titre: "Stratégies commerciales : choisir un axe avant d'écrire les règles",
      blocs: [
        {
          type: "p",
          texte:
            "Une politique commerciale sans stratégie claire devient une liste de règles contradictoires. Avant de fixer une grille de remises, il faut savoir quel type de croissance l'entreprise recherche. Les stratégies commerciales se ramènent le plus souvent à quelques choix structurants.",
        },
        {
          type: "tableau",
          entetes: ["Stratégie commerciale", "Ce qu'elle implique pour la politique commerciale"],
          lignes: [
            ["Conquête de nouveaux clients", "Budget de prospection, offres d'entrée, commerciaux chasseurs, suivi du taux de transformation"],
            ["Développement des clients existants", "Gestion des comptes clés, ventes additionnelles, remises liées au volume ou à la fidélité"],
            ["Spécialisation sur une niche", "Refus assumé des clients hors cible, prix justifiés par l'expertise, communication spécialisée"],
            ["Élargissement de la gamme", "Règles de prix pour les nouveaux produits, formation des commerciaux, suivi de la marge par ligne"],
            ["Ouverture d'un nouveau canal", "Règles de partage entre canaux, conditions accordées aux distributeurs, cohérence des prix publics"],
          ],
        },
        { type: "h3", texte: "Conquérir ou développer : un arbitrage de ressources" },
        {
          type: "p",
          texte:
            "Les deux stratégies ne demandent ni les mêmes profils, ni les mêmes indicateurs. Un commercial à l'aise en prospection n'est pas forcément celui qui fera grandir un compte existant. Beaucoup de PME demandent tout aux mêmes personnes, et obtiennent un peu des deux. Écrire l'arbitrage permet d'affecter le temps commercial en conséquence.",
        },
        { type: "h3", texte: "Vente directe ou indirecte" },
        {
          type: "p",
          texte:
            "Bpifrance Création distingue la distribution directe, sans intermédiaire, la distribution indirecte, par des distributeurs, revendeurs ou places de marché, et les modèles hybrides qui combinent les deux. Chaque modèle se paie : la vente directe coûte en force commerciale, la vente indirecte en marge cédée et en contrôle perdu sur le client final. La politique commerciale fixe la règle du jeu entre les canaux, pour éviter que deux d'entre eux se disputent le même client à des prix différents.",
        },
      ],
    },

    {
      label: "Méthode",
      titre: "Construire la politique commerciale de votre entreprise en cinq étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Une politique commerciale n'a pas besoin d'être volumineuse. Un document de quelques pages, connu de tous les commerciaux et appliqué, vaut mieux qu'un classeur que personne n'ouvre. Voici la démarche que nous suivons.",
        },
        {
          type: "liste",
          items: [
            "**Faire l'état des lieux** : chiffre d'affaires et marge par client, par produit et par canal, remises réellement accordées, délais de paiement réellement obtenus",
            "**Relire la stratégie** : les segments prioritaires, le positionnement de prix, les objectifs à deux ou trois ans",
            "**Écrire les règles** : barème, niveaux de remise et qui peut les accorder, conditions de paiement, clients cibles et hors cible",
            "**Former et outiller** : présenter les règles aux commerciaux, les intégrer aux devis et au logiciel de gestion de la relation client",
            "**Mesurer et réviser** : suivre les indicateurs chaque mois, réviser la politique au moins une fois par an",
          ],
        },
        { type: "h3", texte: "L'état des lieux révèle souvent la politique réelle" },
        {
          type: "p",
          texte:
            "Une politique commerciale existe toujours, même non écrite : c'est l'ensemble des habitudes prises. L'analyse des factures d'une année montre les remises effectivement consenties, les clients qui paient à quatre-vingt-dix jours malgré les conditions affichées, les produits vendus à perte. **Le premier travail consiste à regarder la politique que l'entreprise applique, pas celle qu'elle croit appliquer.**",
        },
        { type: "h3", texte: "Des niveaux de délégation clairs" },
        {
          type: "p",
          texte:
            "Une règle de remise sans règle de délégation renvoie toutes les décisions au dirigeant. La politique commerciale précise jusqu'où un commercial décide seul, à partir de quel niveau il consulte son responsable, et ce qui reste réservé à la direction. C'est ce qui permet au dirigeant de sortir de chaque négociation sans perdre le contrôle des marges.",
        },
        { type: "h3", texte: "Associer ceux qui l'appliqueront" },
        {
          type: "p",
          texte:
            "Des règles écrites seul par le dirigeant et transmises par courriel seront contournées. Des règles discutées avec les commerciaux, qui connaissent les objections des clients, ont plus de chances d'être tenues. La discussion porte sur les modalités ; le cap, lui, reste une décision de direction.",
        },
      ],
    },

    {
      label: "Pilotage",
      titre: "Piloter la politique commerciale avec quelques indicateurs",
      blocs: [
        {
          type: "p",
          texte:
            "Une politique commerciale qu'on ne mesure pas dérive en quelques mois. Il ne s'agit pas de multiplier les tableaux, mais de suivre chaque mois un petit nombre d'indicateurs qui disent si les règles sont appliquées et si elles produisent l'effet voulu.",
        },
        {
          type: "tableau",
          entetes: ["Indicateur", "Ce qu'il révèle"],
          lignes: [
            ["Marge par client et par produit", "Si le chiffre d'affaires gagné rapporte réellement de l'argent"],
            ["Remise moyenne accordée, et part des remises hors barème", "Si la grille de prix est respectée ou contournée"],
            ["Taux de transformation des devis", "Si l'offre et le prix correspondent au marché visé"],
            ["Part du chiffre d'affaires des principaux clients", "Le niveau de dépendance à quelques comptes"],
            ["Délai moyen d'encaissement", "Si les conditions de paiement négociées sont tenues"],
            ["Chiffre d'affaires par segment prioritaire", "Si l'effort commercial va bien vers les cibles choisies"],
          ],
        },
        { type: "h3", texte: "Relier le commercial et la finance" },
        {
          type: "p",
          texte:
            "La meilleure politique de prix reste théorique si elle ignore la structure de coûts. Connaître le volume d'activité à partir duquel l'entreprise couvre ses charges aide à fixer les remises maximales : c'est l'objet de notre article sur le [seuil de rentabilité](/infos-utiles/seuil-de-rentabilite/). Le commercial vend un chiffre d'affaires ; l'entreprise vit de sa marge.",
        },
        { type: "h3", texte: "Une revue annuelle, et des ajustements en cours d'année" },
        {
          type: "p",
          texte:
            "La politique commerciale se révise au moins une fois par an, en même temps que les objectifs. Entre deux révisions, un indicateur qui dérive sur plusieurs mois déclenche une discussion : la règle est-elle mauvaise, ou mal appliquée ? La réponse n'est pas la même, et les deux cas se rencontrent.",
        },
      ],
    },

    {
      label: "Les erreurs",
      titre: "Politique commerciale en PME : cinq erreurs fréquentes",
      blocs: [
        {
          type: "p",
          texte:
            "Les difficultés commerciales des PME tiennent rarement au manque d'énergie. Elles viennent plus souvent de règles absentes, floues ou contradictoires. Cinq situations reviennent régulièrement.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["Ce qui se passe", "Ce qu'il faudrait"],
          lignes: [
            ["Chaque remise se négocie au cas par cas avec le dirigeant", "Une grille de remises et des niveaux de délégation écrits"],
            ["Le chiffre d'affaires est le seul objectif des commerciaux", "Des objectifs qui incluent la marge et le respect des conditions de paiement"],
            ["Tous les clients sont servis de la même façon", "Des segments prioritaires, et des clients qu'on accepte de ne plus chercher"],
            ["Les tarifs n'ont pas bougé depuis plusieurs années", "Une révision annuelle, appuyée sur l'évolution des coûts"],
            ["Deux canaux vendent au même client à des prix différents", "Une règle de partage entre canaux, connue de tous"],
          ],
        },
        { type: "h3", texte: "Confondre politique commerciale et objectifs de vente" },
        {
          type: "p",
          texte:
            "Fixer un objectif de chiffre d'affaires ne dit pas comment l'atteindre. Sans règles, les commerciaux atteignent l'objectif par le chemin le plus court : la remise. L'objectif est tenu, la marge ne l'est pas, et le dirigeant le découvre à la clôture.",
        },
        { type: "h3", texte: "Écrire une politique que l'organisation ne peut pas tenir" },
        {
          type: "p",
          texte:
            "Promettre une livraison en quarante-huit heures ou un service sur mesure suppose que la production, la logistique et l'administration des ventes suivent. Une politique commerciale se construit avec ces fonctions, pas contre elles. Sinon, elle crée des promesses que l'entreprise ne tient pas, et des tensions internes qui remontent toutes au dirigeant.",
        },
      ],
    },

    {
      label: "Qui la porte",
      titre: "Qui doit porter la politique commerciale dans une PME ?",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME, la stratégie commerciale reste une décision du dirigeant. La politique commerciale, en revanche, a besoin d'un responsable qui la fait vivre au quotidien : qui fait respecter les règles, suit les indicateurs et propose les ajustements. Tant que ce rôle n'est tenu par personne, il revient au dirigeant par défaut.",
        },
        { type: "h3", texte: "Trois options selon la taille et les moyens" },
        {
          type: "liste",
          items: [
            "**Un directeur commercial salarié**, quand l'équipe commerciale justifie un poste de direction à plein temps",
            "**Un [directeur commercial externalisé](/infos-utiles/directeur-commercial-externalise/)**, à temps partagé, quand le besoin de direction est réel mais pas quotidien",
            "**Une [force de vente externalisée](/infos-utiles/force-de-vente-externalisee/)**, quand le besoin porte sur la capacité de vente plus que sur la direction, à condition que la politique commerciale soit déjà écrite",
          ],
        },
        { type: "h3", texte: "Ce que nous proposons" },
        {
          type: "p",
          texte:
            "Pour les PME et les ETI de Haute-Garonne et d'Occitanie, nous abordons la politique commerciale comme un chantier de structuration. Nicolas Vimini, directeur commercial externalisé avec vingt ans d'expérience en développement commercial, en est le référent : il clarifie la stratégie commerciale, structure l'organisation et installe le pilotage par les indicateurs. Si le sujet l'exige, par exemple une marge dégradée par une structure de coûts, il fait appel à un autre membre de [l'équipe](/notre-equipe/), sur ce point précis. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si votre frein est commercial, financier ou organisationnel, commencez par le situer. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à identifier le blocage prioritaire en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre politique commerciale et stratégie commerciale ?",
      r: [
        "La stratégie commerciale fixe le cap à deux ou trois ans : les segments de clients prioritaires, le positionnement, les objectifs de chiffre d'affaires et de marge. La politique commerciale traduit ce cap en règles applicables au quotidien : barème de prix, remises autorisées, conditions de paiement, canaux de vente, clients visés. La stratégie répond à la question « où allons-nous ? », la politique à la question « comment chaque vente doit-elle se passer ? ».",
      ],
    },
    {
      q: "Que contient une politique commerciale ?",
      r: [
        "Elle couvre six domaines : les clients ciblés et ceux que l'entreprise ne cherche plus à servir, l'offre, la politique de prix et de remises avec les niveaux de délégation, les canaux de distribution, la communication et les conditions de vente, notamment les délais de paiement. Pour une PME, un document de quelques pages suffit, à condition qu'il soit connu des commerciaux, appliqué et révisé au moins une fois par an.",
      ],
    },
    {
      q: "Les conditions générales de vente sont-elles obligatoires entre professionnels ?",
      r: [
        "Non, une entreprise n'est pas obligée d'en établir. Mais lorsqu'elle en a, l'article L441-1 du code de commerce impose d'y faire figurer les conditions de règlement et les éléments de détermination du prix, et de les communiquer à tout acheteur professionnel qui les demande. Elles constituent alors le socle unique de la négociation commerciale. Leur rédaction mérite la relecture d'un avocat en droit des affaires.",
      ],
    },
    {
      q: "Quel délai de paiement peut-on accorder à un client professionnel ?",
      r: [
        "Selon l'article L441-10 du code de commerce, le délai est de trente jours après la réception des marchandises ou l'exécution de la prestation, sauf accord. Le délai convenu ne peut pas dépasser soixante jours à compter de la date d'émission de la facture, ou quarante-cinq jours fin de mois si c'est expressément prévu. Le délai accordé est une décision de politique commerciale : il pèse directement sur votre trésorerie.",
      ],
    },
    {
      q: "Comment savoir si sa politique commerciale fonctionne ?",
      r: [
        "Suivez chaque mois quelques indicateurs : la marge par client et par produit, la remise moyenne et la part des remises hors barème, le taux de transformation des devis, la dépendance aux principaux clients et le délai moyen d'encaissement. Si le chiffre d'affaires progresse alors que la marge recule, ou si les remises hors barème augmentent, les règles ne sont pas appliquées ou ne sont plus adaptées au marché.",
      ],
    },
  ],

  sources: [
    {
      titre: "Article L441-1 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414469",
    },
    {
      titre: "Article L441-10 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392",
    },
    {
      titre: "Rapport de l'Observatoire des délais de paiement 2024",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024",
    },
    {
      titre: "La politique de distribution : comment l'offre va toucher vos clients ?",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/letude-marche/determiner-sa-strategie/politique-distribution-comment-loffre-va-toucher",
    },
    {
      titre: "Les conditions générales de vente entre professionnels",
      editeur: "CCI Paris Île-de-France",
      url: "https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-conditions-generales-de-vente-entre-professionnels",
    },
  ],

  auteur: "nicolas-vimini",
  datePublication: "2026-12-21",
  accent: "commercial",
  pilier: { href: "/", ancre: "cabinet de conseil à Toulouse" },

  valide: false,
};
