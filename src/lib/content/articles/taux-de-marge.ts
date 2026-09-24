import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « comment calculer le taux de marge » (590/mois, KD 27).
 * Secondaires : « taux de marge brute » (480), « marge brute » (540).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite le calcul et l'usage du taux de marge, et renvoie vers lui.
 * Ne pas empiéter sur marge-nette (résultat net), seuil-de-rentabilite (marge sur
 * coûts variables) ni taux-de-rentabilite (rentabilité économique et financière).
 *
 * POINTS SENSIBLES
 * - Marjorie Anglade est expert-comptable diplômée, inscrite à l'Ordre, mais le
 *   cabinet ne tient pas de comptabilité : elle intervient ici en directrice
 *   financière externalisée. Le texte ne doit pas laisser entendre autre chose.
 * - Revente à perte (C. com. L442-5) : simple rappel, sans conseil juridique.
 * - Chiffres Banque de France et définitions INSEE / Bpifrance vérifiés le 24/09/2026.
 */
export const article: Article = {
  slug: "taux-de-marge",

  motCle: "comment calculer le taux de marge (590/mois, KD 27) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "taux de marge brute (480/mois)",
    "marge brute (540/mois)",
    "taux de marque",
    "coefficient multiplicateur",
  ],

  // 33 / 42
  metaTitle: "Comment calculer le taux de marge",
  // 145 / 150
  metaDescription:
    "Taux de marge, taux de marque, marge brute : les formules, des exemples chiffrés, les pièges de calcul et comment suivre sa marge chaque mois en PME.",

  h1: "Comment calculer le taux de marge, et ne plus le confondre avec le taux de marque",

  chapo:
    "Pour calculer le taux de marge, retranchez le coût d'achat hors taxes du prix de vente hors taxes, puis divisez cette marge par le coût d'achat et multipliez par 100. Un produit acheté 60 euros et vendu 100 euros dégage 40 euros de marge, soit un taux de marge de 66,7 %. La formule tient en une ligne ; les erreurs viennent d'ailleurs. On confond taux de marge et taux de marque, on oublie les frais qui font partie du coût, on compare son chiffre à des statistiques qui ne mesurent pas la même chose. Voici les formules, des exemples pas à pas, et la manière de faire du taux de marge un outil de décision plutôt qu'un chiffre de fin d'année.",

  essentiel: {
    reponse:
      "Le taux de marge rapporte la marge au coût d'achat : taux de marge = (prix de vente HT − coût d'achat HT) ÷ coût d'achat HT × 100. Le taux de marque rapporte la même marge au prix de vente HT. Pour un produit acheté 60 € et vendu 100 € HT, la marge est de 40 €, le taux de marge de 66,7 % et le taux de marque de 40 %. La marge brute, au niveau de l'entreprise, se calcule sur les ventes de la période et le coût des marchandises réellement vendues, variation de stock comprise.",
    points: [
      "Taux de marge = marge ÷ coût d'achat HT ; taux de marque = marge ÷ prix de vente HT",
      "Le taux de marge est toujours supérieur au taux de marque pour un même produit",
      "Le coût d'achat inclut les frais qui le rendent vendable : transport, droits, emballage",
      "Le « taux de marge » de l'INSEE et de la Banque de France (EBE ÷ valeur ajoutée) est un autre indicateur",
      "Un taux moyen cache les écarts : le calcul par client, produit ou chantier est celui qui sert à décider",
    ],
  },

  chapitres: [
    {
      label: "La formule",
      titre: "Comment calculer le taux de marge en deux étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Le calcul repose sur deux montants hors taxes : ce que vous payez pour disposer du produit, et ce que votre client vous paie. Bpifrance Création donne la définition de référence dans sa fiche sur le [taux de marque](https://bpifrance-creation.fr/taux-marque) : la marge est égale au prix de vente HT moins le coût de revient, et le taux de marge compare cette marge au prix de revient. **Le taux de marge répond à une seule question : combien gagnez-vous pour chaque euro que vous dépensez pour acheter ou fabriquer ?**",
        },
        { type: "h3", texte: "Étape 1 : calculer la marge en euros" },
        {
          type: "p",
          texte:
            "Marge = prix de vente HT − coût d'achat HT. Pour un négociant, le coût d'achat est le prix payé au fournisseur, augmenté des frais accessoires qui rendent la marchandise vendable : transport, droits de douane, emballage. Pour un fabricant, on parle de coût de revient. Travaillez toujours hors taxes.",
        },
        { type: "h3", texte: "Étape 2 : rapporter la marge au coût" },
        {
          type: "p",
          texte:
            "Taux de marge = marge ÷ coût d'achat HT × 100. Reprenons le produit acheté 60 € et vendu 100 € HT : 40 ÷ 60 × 100 = 66,7 %. Acheté 75 €, le même produit ne dégagerait plus que 25 € de marge, soit 33,3 % : le taux de marge est divisé par deux sans que le prix ait bougé.",
        },
        {
          type: "tableau",
          entetes: ["Indicateur", "Formule"],
          lignes: [
            ["Marge unitaire", "Prix de vente HT − coût d'achat HT"],
            ["Taux de marge", "Marge ÷ coût d'achat HT × 100"],
            ["Taux de marque", "Marge ÷ prix de vente HT × 100"],
            ["Coefficient multiplicateur HT", "Prix de vente HT ÷ coût d'achat HT"],
            ["Marge commerciale (entreprise)", "Ventes de marchandises − coût d'achat des marchandises vendues"],
          ],
        },
        {
          type: "p",
          texte:
            "C'est l'un des premiers calculs que refait un [DAF externalisé](/daf-externalise-toulouse/) dans une PME : la marge globale est connue à la clôture, rarement celle de chaque client ou produit en cours d'année.",
        },
      ],
    },

    {
      label: "Marge ou marque",
      titre: "Taux de marge et taux de marque : la confusion qui coûte cher",
      blocs: [
        {
          type: "p",
          texte:
            "Les deux taux utilisent la même marge. Ils changent de dénominateur. Le taux de marge divise par le coût, le taux de marque divise par le prix de vente. Bpifrance Création le souligne : il ne faut pas confondre le taux de marque avec le taux de marge, qui compare la marge au prix de revient. Pour un même produit, le taux de marge est toujours le plus élevé des deux.",
        },
        { type: "h3", texte: "Pourquoi l'erreur est si fréquente" },
        {
          type: "p",
          texte:
            "Le commercial part du prix affiché, l'acheteur du prix fournisseur. Quand l'objectif est « 40 % de marge » sans dénominateur précisé, chacun l'applique à sa façon. Appliquer 40 % au coût d'achat donne un prix de 84 € pour un produit acheté 60 € ; viser 40 % de marque donne 100 €. **L'écart est de 16 € par vente, perdu sans que personne ait commis d'erreur de calcul.**",
        },
        { type: "h3", texte: "Passer de l'un à l'autre" },
        {
          type: "p",
          texte:
            "Deux formules suffisent. Taux de marge = taux de marque ÷ (1 − taux de marque). Taux de marque = taux de marge ÷ (1 + taux de marge). Le tableau ci-dessous donne les correspondances les plus courantes, avec le coefficient multiplicateur hors taxes qui permet de passer directement du coût d'achat au prix de vente.",
        },
        {
          type: "tableau",
          entetes: ["Taux de marque visé", "Taux de marge et coefficient HT correspondants"],
          lignes: [
            ["20 %", "Taux de marge 25 % · coefficient 1,25"],
            ["25 %", "Taux de marge 33,3 % · coefficient 1,33"],
            ["30 %", "Taux de marge 42,9 % · coefficient 1,43"],
            ["40 %", "Taux de marge 66,7 % · coefficient 1,67"],
            ["50 %", "Taux de marge 100 % · coefficient 2"],
            ["60 %", "Taux de marge 150 % · coefficient 2,5"],
          ],
        },
        {
          type: "p",
          texte:
            "Attention : dans le commerce de détail, le coefficient passe souvent du coût HT au prix TTC. Il intègre alors la TVA et n'est plus comparable au coefficient HT.",
        },
      ],
    },

    {
      label: "Marge brute",
      titre: "Marge brute et taux de marge brute : le calcul à l'échelle de l'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Sur un produit, le calcul est immédiat. Sur une année, il faut tenir compte des stocks : vous n'avez pas vendu exactement ce que vous avez acheté. La marge brute se lit alors dans les soldes intermédiaires de gestion, dont Bpifrance Création détaille le [calcul pas à pas](https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/comprendre-calculer-soldes).",
        },
        { type: "h3", texte: "Pour une activité de négoce : la marge commerciale" },
        {
          type: "p",
          texte:
            "Marge commerciale = ventes nettes de marchandises − coût d'achat des marchandises vendues. Ce coût se calcule ainsi : achats de marchandises + stock en début de période − stock en fin de période. Exemple : un distributeur vend pour 1 000 000 € HT sur l'année. Il a acheté 620 000 € de marchandises, avec un stock de 150 000 € en janvier et de 170 000 € en décembre. Le coût des marchandises vendues est de 600 000 €, la marge commerciale de 400 000 €, soit un taux de marge de 66,7 %.",
        },
        {
          type: "p",
          texte:
            "Sans la variation de stock, ce distributeur calculerait 380 000 € de marge et croirait avoir perdu 20 000 € qu'il a bel et bien gagnés. D'où l'importance d'un inventaire fiable à chaque clôture.",
        },
        { type: "h3", texte: "Pour une activité de production : la marge brute de production" },
        {
          type: "p",
          texte:
            "Un fabricant ne revend pas en l'état. Selon la même fiche de Bpifrance Création, la marge brute de production est égale à la production de l'exercice diminuée du coût d'achat des matières premières consommées. Une entreprise qui fabrique et revend calcule les deux marges séparément.",
        },
        { type: "h3", texte: "Taux de marge brute : vérifier le dénominateur" },
        {
          type: "p",
          texte:
            "Dans l'usage courant, beaucoup d'entreprises appellent « taux de marge brute » la marge brute rapportée au chiffre d'affaires HT, ce qui correspond en réalité à un taux de marque. Dans notre exemple, 400 000 ÷ 1 000 000 donne 40 %, là où le taux de marge au sens strict est de 66,7 %. L'erreur n'est pas de choisir l'une ou l'autre, c'est de comparer deux chiffres calculés sur des bases différentes.",
        },
      ],
    },

    {
      label: "Statistiques",
      titre: "Le taux de marge de l'INSEE et de la Banque de France : un autre indicateur",
      blocs: [
        {
          type: "p",
          texte:
            "Si vous cherchez à situer votre taux de marge par rapport à une moyenne publiée, prudence. L'INSEE définit le [taux de marge en statistique d'entreprise](https://www.insee.fr/fr/metadonnees/definition/c1574) comme le rapport de l'excédent brut d'exploitation (EBE) à la valeur ajoutée. Ce ratio mesure la part de la richesse créée qui reste à l'entreprise après avoir payé ses salariés et ses impôts de production. **Il n'a rien à voir avec l'écart entre votre prix de vente et votre coût d'achat.**",
        },
        { type: "h3", texte: "Ce que disent les chiffres récents sur les PME" },
        {
          type: "p",
          texte:
            "La Banque de France retient la même définition dans son [bulletin sur la situation financière des PME et des ETI](https://www.banque-france.fr/system/files/2026-08/BDF265-3_PME-ETI_web2_0.pdf), fondé sur 1,5 million de liasses fiscales 2025. En moyenne, ce taux de marge a résisté en 2025, et progressé pour toutes les tailles d'entreprise. La moyenne cache pourtant des situations opposées : 50 % des PME hors microentreprises et 48 % des ETI ont vu leur taux de marge diminuer en 2025, contre 55 % et 56 % en 2024.",
        },
        {
          type: "p",
          texte:
            "Le bulletin explique cette résistance d'abord par la baisse du poids des charges de personnel dans la valeur ajoutée : ce taux bouge avec la masse salariale, pas avec vos prix d'achat.",
        },
        { type: "h3", texte: "Comment s'en servir" },
        {
          type: "p",
          texte:
            "Calculez les deux, sans les mélanger. Le taux de marge commerciale sert à fixer vos prix ; le ratio EBE sur valeur ajoutée vous situe face aux entreprises de votre taille. Un bon premier avec un mauvais second signale souvent des charges de structure trop lourdes.",
        },
      ],
    },

    {
      label: "Par client, par produit",
      titre: "Calculer le taux de marge par client, produit ou chantier",
      blocs: [
        {
          type: "p",
          texte:
            "Le taux de marge global est une moyenne : il dit que l'ensemble gagne de l'argent, pas où. Le calcul détaillé est celui qui permet de décider.",
        },
        { type: "h3", texte: "Les coûts qu'on oublie d'affecter" },
        {
          type: "liste",
          items: [
            "**Le transport** : franco de port, livraisons fractionnées, retours",
            "**Les remises différées** : ristournes de fin d'année, remises de volume versées a posteriori",
            "**La sous-traitance et les commissions** propres à un chantier ou à un compte",
            "**Les pertes** : casse, invendus, rebuts, produits périmés",
            "**Les délais de paiement** : un client à 60 jours coûte plus en trésorerie qu'un client à 30 jours",
          ],
        },
        { type: "h3", texte: "Un exemple sur trois clients" },
        {
          type: "tableau",
          entetes: ["Client", "Ventes HT, coûts directs, marge et taux de marge"],
          lignes: [
            ["Client A", "300 000 € de ventes, 180 000 € de coûts directs, 120 000 € de marge : taux de marge 66,7 %"],
            ["Client B", "500 000 € de ventes, 350 000 € de coûts directs, 150 000 € de marge : taux de marge 42,9 %"],
            ["Client C", "200 000 € de ventes, 170 000 € de coûts directs, 30 000 € de marge : taux de marge 17,6 %"],
            ["Ensemble", "1 000 000 € de ventes, 700 000 € de coûts directs, 300 000 € de marge : taux de marge 42,9 %"],
          ],
        },
        {
          type: "p",
          texte:
            "Le taux moyen de 42,9 % est flatteur. Le client C représente pourtant 20 % du chiffre d'affaires et 10 % seulement de la marge. La question n'est pas forcément de s'en séparer : c'est de renégocier, de revoir le service rendu, ou d'accepter la situation en connaissance de cause.",
        },
        {
          type: "p",
          texte:
            "Cette marge par client est très proche de la marge sur coûts variables qui sert à calculer le point mort. Notre article sur le [seuil de rentabilité](/infos-utiles/seuil-de-rentabilite/) montre comment passer de l'une à l'autre, et ce que chaque point de marge perdu coûte en chiffre d'affaires à aller chercher.",
        },
      ],
    },

    {
      label: "Fixer ses prix",
      titre: "Fixer un prix de vente à partir d'un taux de marge cible",
      blocs: [
        {
          type: "p",
          texte:
            "Le calcul se fait aussi dans l'autre sens : vous connaissez votre coût et la marge dont vous avez besoin, vous cherchez le prix. Si vous raisonnez en taux de marge, prix de vente HT = coût d'achat HT × (1 + taux de marge). Si vous raisonnez en taux de marque, prix de vente HT = coût d'achat HT ÷ (1 − taux de marque). Pour un coût de 60 € et un taux de marque visé de 40 %, le prix est de 60 ÷ 0,6 = 100 € HT.",
        },
        { type: "h3", texte: "Ce que coûte vraiment une remise" },
        {
          type: "p",
          texte:
            "Reprenons ce produit à 100 € HT, qui laisse 40 € de marge. Une remise de 10 % ramène le prix à 90 € et la marge à 30 €. Pour dégager la même marge totale, il faut vendre 40 ÷ 30 = 1,33 fois plus, soit un tiers de volume en plus. **Une remise de 10 % sur le prix peut ainsi coûter 25 % de la marge.** C'est le calcul à faire avant d'accorder une remise, pas après.",
        },
        { type: "h3", texte: "Une limite légale pour la revente en l'état" },
        {
          type: "p",
          texte:
            "Pour les commerçants qui revendent un produit en l'état, l'[article L442-5 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051467834) interdit de revendre ou d'annoncer la revente à un prix inférieur au prix d'achat effectif, sous peine d'une amende pouvant atteindre 0,4 % du chiffre d'affaires annuel hors taxes réalisé en France. Le texte prévoit des exceptions ; en cas de doute sur une promotion, consultez votre avocat.",
        },
      ],
    },

    {
      label: "Piloter",
      titre: "Suivre son taux de marge chaque mois, et décider avec",
      blocs: [
        {
          type: "p",
          texte:
            "Découvert à la clôture, un taux de marge ne sert qu'à constater. Suivi chaque mois, il alerte. Il faut pour cela des achats et des ventes enregistrés à temps, et une estimation du stock en fin de mois.",
        },
        { type: "h3", texte: "Trois indicateurs à mettre côte à côte" },
        {
          type: "liste",
          items: [
            "**Le taux de marge du mois et du cumul**, comparé au budget et à l'année précédente",
            "**La marge en euros** : un taux stable sur un volume en baisse fait reculer le résultat",
            "**La marge par famille ou par client principal**, pour localiser un écart",
          ],
        },
        { type: "h3", texte: "La marge n'est pas la trésorerie" },
        {
          type: "p",
          texte:
            "Une entreprise peut améliorer sa marge et manquer de trésorerie. Une marge encaissée à 60 jours, sur des marchandises payées comptant et stockées trois mois, mobilise de l'argent avant d'en rapporter : c'est la logique détaillée dans notre article sur le [calcul du BFR](/infos-utiles/calcul-bfr/).",
        },
        { type: "h3", texte: "Qui porte ce suivi" },
        {
          type: "p",
          texte:
            "Votre expert-comptable produit les comptes ; le suivi mensuel de la marge relève du pilotage, donc d'un directeur financier. Au cabinet, [Marjorie Anglade](/marjorie-anglade/), expert-comptable de formation, l'assure en directrice financière à temps partagé, à partir des comptes établis par votre expert-comptable et sans les tenir à sa place. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord ; si l'érosion de marge vient d'une cause commerciale ou industrielle, elle fait appel au collègue concerné, sur ce point précis.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas aujourd'hui quels clients ou quels produits portent votre marge, c'est le premier point à éclaircir. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer vos priorités de pilotage en quelques minutes.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la formule du taux de marge ?",
      r: [
        "Taux de marge = (prix de vente HT − coût d'achat HT) ÷ coût d'achat HT × 100. Le numérateur est la marge en euros, le dénominateur le coût d'achat ou de revient. Pour un produit acheté 60 € et vendu 100 € HT, la marge est de 40 € et le taux de marge de 66,7 %. Travaillez toujours hors taxes, et intégrez au coût les frais qui rendent le produit vendable : transport, droits, emballage.",
      ],
    },
    {
      q: "Quelle différence entre taux de marge et taux de marque ?",
      r: [
        "Les deux utilisent la même marge, mais pas le même dénominateur. Le taux de marge divise la marge par le coût d'achat HT ; le taux de marque la divise par le prix de vente HT. Pour un même produit, le taux de marge est toujours plus élevé. Un taux de marque de 40 % correspond à un taux de marge de 66,7 %. Préciser lequel on utilise évite des écarts de prix importants entre commerciaux et acheteurs.",
      ],
    },
    {
      q: "Comment calculer la marge brute d'une entreprise ?",
      r: [
        "Pour une activité de négoce, marge commerciale = ventes nettes de marchandises − coût d'achat des marchandises vendues, ce coût étant égal aux achats de la période, plus le stock de début, moins le stock de fin. Pour une activité de production, marge brute de production = production de l'exercice − coût des matières premières consommées. Une entreprise qui fait les deux calcule chaque marge séparément.",
      ],
    },
    {
      q: "Qu'est-ce qu'un bon taux de marge ?",
      r: [
        "Il n'existe pas de chiffre universel : un négociant à fort volume vit avec un taux faible, un fabricant sur mesure a besoin d'un taux élevé. Le bon taux est celui qui couvre vos charges de structure et laisse un résultat, à votre niveau d'activité. Méfiez-vous des moyennes publiées par l'INSEE ou la Banque de France : leur taux de marge rapporte l'EBE à la valeur ajoutée, ce n'est pas le même indicateur.",
      ],
    },
    {
      q: "Comment passer d'un taux de marque à un prix de vente ?",
      r: [
        "Divisez le coût d'achat HT par (1 − taux de marque). Pour un coût de 60 € et un taux de marque visé de 40 %, le prix de vente est de 60 ÷ 0,6 = 100 € HT. Si vous raisonnez en taux de marge, multipliez le coût par (1 + taux de marge) : 60 × 1,667 donne le même prix. Le coefficient multiplicateur HT, ici 1,67, permet de faire le calcul en une seule opération.",
      ],
    },
  ],

  sources: [
    {
      titre: "Taux de marque",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/taux-marque",
    },
    {
      titre: "Comprendre et calculer les soldes intermédiaires de gestion pour améliorer sa rentabilité",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/comprendre-calculer-soldes",
    },
    {
      titre: "Taux de marge (statistique d'entreprise)",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1574",
    },
    {
      titre:
        "Quelle est la situation financière des PME et des ETI françaises à l'issue du cycle de taux d'intérêt 2022-2025 ? (Bulletin de la Banque de France 265/3, juillet-août 2026)",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/system/files/2026-08/BDF265-3_PME-ETI_web2_0.pdf",
    },
    {
      titre: "Article L442-5 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051467834",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-01-25",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
