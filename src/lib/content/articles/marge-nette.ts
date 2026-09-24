import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « marge nette » (590/mois, KD 9). Secondaires : « calcul marge nette » (480),
 * « taux de marge nette ».
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite un indicateur et renvoie vers lui.
 *
 * Sources ouvertes le 24/09/2026 : INSEE (définition du résultat net comptable),
 * Bpifrance Création (soldes intermédiaires de gestion), entreprendre.service-public.gouv.fr
 * (taux d'IS, vérifié le 17/02/2026 par l'éditeur), Banque de France (Bulletin 265/3).
 * L'exemple chiffré (PME à 3 M€ de chiffre d'affaires) est une illustration construite
 * pour l'article, présentée comme telle : ce n'est pas un cas client.
 *
 * POINTS SENSIBLES — Taux d'IS à revérifier avant publication (loi de finances 2027).
 * Marjorie Anglade est expert-comptable inscrite à l'Ordre, mais le cabinet ne tient
 * pas de comptabilité : le texte ne présente jamais l'analyse comme une prestation
 * comptable.
 */
export const article: Article = {
  slug: "marge-nette",

  motCle: "marge nette (590/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "calcul marge nette (480/mois)",
    "taux de marge nette",
  ],

  // 37 / 42
  metaTitle: "Marge nette : calcul, taux et lecture",
  // 150 / 150
  metaDescription:
    "Marge nette et taux de marge nette : la formule, un exemple du chiffre d'affaires au résultat net, et les causes d'une marge qui s'érode dans une PME.",

  h1: "Marge nette : la calculer, la lire et savoir pourquoi elle baisse",
  chapo:
    "La marge nette est ce qui reste à votre entreprise une fois toutes les charges payées, impôt sur les sociétés compris : c'est le résultat net de l'exercice. Rapportée au chiffre d'affaires hors taxes, elle donne le taux de marge nette, qui répond à une question simple : sur 100 euros vendus, combien vous en gardez-vous vraiment ? Le calcul est rapide. La lecture l'est moins, car la marge nette est le dernier maillon d'une chaîne. Quand elle baisse, la cause se trouve presque toujours plus haut : dans les prix, les achats, la masse salariale ou le financement. Voici comment la calculer, la comparer et remonter à la source.",

  essentiel: {
    reponse:
      "La marge nette correspond au résultat net comptable : le chiffre d'affaires diminué de toutes les charges de l'exercice, y compris les charges financières, le résultat exceptionnel, la participation des salariés et l'impôt sur les bénéfices. Le taux de marge nette se calcule ainsi : résultat net ÷ chiffre d'affaires HT × 100. Il mesure la rentabilité finale de l'activité. Comme il intègre des éléments qui ne relèvent pas de l'exploitation, il se lit avec la marge brute et l'excédent brut d'exploitation.",
    points: [
      "Marge nette = résultat net de l'exercice, bénéfice ou perte",
      "Taux de marge nette = résultat net ÷ chiffre d'affaires HT × 100",
      "Elle se lit en cascade : marge brute, valeur ajoutée, EBE, résultat d'exploitation, résultat net",
      "Une marge nette ne se compare qu'à secteur, taille et statut juridique comparables",
      "Un bénéfice n'est pas de la trésorerie : la marge nette ne dit rien des encaissements",
    ],
  },

  chapitres: [
    {
      label: "La définition",
      titre: "Marge nette : définition et place dans le compte de résultat",
      blocs: [
        {
          type: "p",
          texte:
            "Dans le langage courant, « marge nette » désigne parfois la marge d'un produit après ses coûts directs. En comptabilité et en analyse financière, elle désigne le résultat net. L'INSEE définit le [résultat net comptable](https://www.insee.fr/fr/metadonnees/definition/c1100) comme la mesure des ressources nettes qui restent à l'entreprise à l'issue de l'exercice, après prise en compte de la dépréciation du capital. Il apparaît au compte de résultat et au bilan, dans les capitaux propres, avec un signe négatif en cas de perte.",
        },
        { type: "h3", texte: "Le dernier étage d'une cascade" },
        {
          type: "p",
          texte:
            "Le compte de résultat se lit comme un escalier. Bpifrance Création détaille les [soldes intermédiaires de gestion](https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/comprendre-calculer-soldes) qui y mènent : marge commerciale, production, valeur ajoutée, excédent brut d'exploitation (EBE), résultat d'exploitation, résultat courant avant impôts, résultat exceptionnel, puis résultat net. **Chaque marche retire une famille de charges ; la marge nette est ce qui reste en bas.**",
        },
        { type: "h3", texte: "Pourquoi le dirigeant doit la connaître par cœur" },
        {
          type: "p",
          texte:
            "Le résultat net est ce qui peut être distribué aux associés, mis en réserve pour financer l'entreprise ou servir à absorber une mauvaise année. C'est aussi l'un des premiers chiffres que regardent votre banque et un éventuel repreneur. Suivre la marge nette une fois par an, à la clôture, c'est découvrir trop tard un problème né des mois plus tôt. C'est pourquoi un [DAF externalisé](/daf-externalise-toulouse/) la suit en cours d'exercice, avec les étages qui la précèdent.",
        },
      ],
    },

    {
      label: "Le calcul",
      titre: "Calcul de la marge nette : la formule et un exemple",
      blocs: [
        {
          type: "p",
          texte:
            "Selon la définition de l'INSEE, le résultat net s'obtient à partir du résultat courant avant impôts, auquel on ajoute le résultat exceptionnel, puis dont on retire la participation des salariés et l'impôt sur les bénéfices. Pour le reconstituer depuis le haut du compte de résultat, prenons une PME fictive, construite pour l'exemple, qui réalise 3 000 000 € de chiffre d'affaires hors taxes.",
        },
        {
          type: "tableau",
          entetes: ["Étape du calcul", "Montant"],
          lignes: [
            ["Chiffre d'affaires HT", "3 000 000 €"],
            ["− Achats consommés, sous-traitance et charges externes", "1 500 000 € → valeur ajoutée : 1 500 000 €"],
            ["− Impôts et taxes (45 000 €) et charges de personnel (1 100 000 €)", "EBE : 355 000 €"],
            ["− Dotations aux amortissements et provisions", "120 000 € → résultat d'exploitation : 235 000 €"],
            ["− Charges financières nettes", "25 000 € → résultat courant avant impôts : 210 000 €"],
            ["± Résultat exceptionnel", "− 10 000 € → résultat avant impôt : 200 000 €"],
            ["− Impôt sur les sociétés", "45 750 €"],
            ["= Résultat net, ou marge nette", "154 250 €"],
          ],
        },
        { type: "h3", texte: "Le détail de l'impôt" },
        {
          type: "p",
          texte:
            "Pour une PME qui remplit les conditions, [service-public.gouv.fr](https://entreprendre.service-public.gouv.fr/vosdroits/F23575) indique un taux réduit d'impôt sur les sociétés de 15 % jusqu'à 42 500 € de bénéfice, puis le taux normal de 25 % au-delà. Les deux conditions : un chiffre d'affaires de 10 millions d'euros au plus, et un capital entièrement libéré, détenu à 75 % au moins par des personnes physiques. Ici : 6 375 € sur les premiers 42 500 €, puis 39 375 € sur les 157 500 € restants. L'exemple suppose, pour simplifier, que le résultat fiscal est égal au résultat comptable, ce qui est rarement exact.",
        },
        { type: "h3", texte: "La participation des salariés" },
        {
          type: "p",
          texte:
            "Elle vient aussi en déduction lorsqu'elle existe. Dans notre exemple, elle est nulle. Si votre entreprise y est soumise, ou si elle a mis en place un accord volontaire, elle s'intercale entre le résultat avant impôt et le résultat net.",
        },
      ],
    },

    {
      label: "Le taux",
      titre: "Taux de marge nette : le ratio qui permet de comparer",
      blocs: [
        {
          type: "p",
          texte:
            "Un résultat net en euros ne se compare à rien : 154 250 € n'a pas le même sens sur 3 millions ou sur 30 millions de chiffre d'affaires. Le taux de marge nette le rend comparable d'une année sur l'autre. Formule : résultat net ÷ chiffre d'affaires HT × 100.",
        },
        { type: "h3", texte: "Dans notre exemple" },
        {
          type: "p",
          texte:
            "154 250 ÷ 3 000 000 = 5,1 %. Sur 100 euros facturés, l'entreprise en conserve un peu plus de 5 une fois tout payé. Cette lecture a une conséquence directe : une facture impayée de 10 000 € efface la marge nette dégagée sur près de 195 000 € de ventes. Une remise de 1 % accordée sur l'ensemble du chiffre d'affaires, elle, coûte 30 000 € de résultat avant impôt.",
        },
        { type: "h3", texte: "Le taux ne dit rien sans son historique" },
        {
          type: "p",
          texte:
            "Un taux de 5 % peut être excellent dans la distribution et médiocre dans le conseil. Ce qui compte d'abord, c'est sa trajectoire. Un taux qui passe de 7 % à 5 % en deux exercices signale une dérive, même si le chiffre d'affaires progresse. Suivez-le sur trois à cinq ans, et en cours d'année sur les situations intermédiaires.",
        },
      ],
    },

    {
      label: "Les niveaux de marge",
      titre: "Marge brute, EBE, marge nette : ce que chaque niveau vous dit",
      blocs: [
        {
          type: "p",
          texte:
            "La marge nette résume tout, donc elle n'explique rien. Pour comprendre d'où vient une variation, il faut remonter les étages. Bpifrance Création souligne que l'EBE reste l'indicateur privilégié pour comparer des entreprises entre elles, parce qu'il ne dépend ni des choix de financement ni des événements exceptionnels.",
        },
        {
          type: "tableau",
          entetes: ["Niveau de marge", "La question à laquelle il répond"],
          lignes: [
            ["Marge brute ou marge commerciale", "Mes prix couvrent-ils largement ce que j'achète ou produis ?"],
            ["Valeur ajoutée", "Quelle richesse mon activité crée-t-elle, au-delà des achats et prestations extérieures ?"],
            ["Excédent brut d'exploitation", "Mon métier, avant amortissements et financement, dégage-t-il de l'argent ?"],
            ["Résultat d'exploitation", "Mon activité couvre-t-elle aussi l'usure de mes équipements ?"],
            ["Résultat courant avant impôts", "Et une fois ma dette rémunérée ?"],
            ["Marge nette (résultat net)", "Que reste-t-il pour les associés et les réserves, tout compris ?"],
          ],
        },
        { type: "h3", texte: "Ne pas confondre taux de marge et taux de marge nette" },
        {
          type: "p",
          texte:
            "Dans les statistiques publiques, « taux de marge » désigne le plus souvent l'EBE rapporté à la valeur ajoutée, pas le résultat net rapporté au chiffre d'affaires. C'est la définition retenue par la Banque de France. Dans notre exemple, il est de 23,7 %, alors que le taux de marge nette est de 5,1 %. Les deux sont justes ; ils ne mesurent pas la même chose. Pour la marge sur vos ventes, notre article sur la manière de [calculer le taux de marge](/infos-utiles/taux-de-marge/) détaille les formules commerciales.",
        },
      ],
    },

    {
      label: "Comparer",
      titre: "Une bonne marge nette : comparer ce qui est comparable",
      blocs: [
        {
          type: "p",
          texte:
            "« Quelle est une bonne marge nette ? » est la question la plus posée, et celle qui appelle la réponse la plus prudente. Il n'existe pas de taux universel. Trois facteurs faussent presque toutes les comparaisons.",
        },
        { type: "h3", texte: "Le secteur et le modèle économique" },
        {
          type: "p",
          texte:
            "Un négoce qui revend beaucoup de marchandises travaille sur de gros volumes avec un taux faible. Une activité de service à forte valeur ajoutée affiche un taux plus élevé, avec d'autres risques. Comparez-vous à des entreprises du même métier et de taille proche, par exemple à travers les ratios sectoriels que votre expert-comptable ou votre banque peut vous fournir.",
        },
        { type: "h3", texte: "La rémunération du dirigeant et le statut" },
        {
          type: "p",
          texte:
            "Dans une société, la rémunération du dirigeant est une charge qui réduit le résultat. Dans une entreprise individuelle imposée à l'impôt sur le revenu, le bénéfice inclut ce qui rémunère l'exploitant. Un dirigeant qui se verse peu affiche mécaniquement une marge nette plus forte. Pour comparer deux entreprises, ou deux années, retraitez ce point.",
        },
        { type: "h3", texte: "Les éléments non récurrents" },
        {
          type: "p",
          texte:
            "Une cession d'actif, un litige soldé, une subvention exceptionnelle font bouger le résultat net sans rien dire de l'activité. Avant de conclure qu'une année a été bonne ou mauvaise, isolez le résultat exceptionnel et regardez le résultat courant.",
        },
      ],
    },

    {
      label: "Les causes",
      titre: "Pourquoi la marge nette s'érode : cinq causes fréquentes",
      blocs: [
        {
          type: "p",
          texte:
            "Vous n'êtes pas seul si votre marge a reculé. Selon le [Bulletin de la Banque de France sur la situation financière des PME et ETI](https://www.banque-france.fr/system/files/2026-08/BDF265-3_PME-ETI_web2_0.pdf), 50 % des PME hors microentreprises ont vu leur taux de marge diminuer en 2025, et leur chiffre d'affaires n'a progressé que de 1,5 %, contre 4,2 % en moyenne sur 1997-2019. Quand l'activité ralentit, chaque dérive de coût se voit davantage en bas du compte de résultat.",
        },
        {
          type: "liste",
          items: [
            "**Des prix qui n'ont pas suivi les coûts** : les hausses d'achats, d'énergie ou de salaires ont été absorbées au lieu d'être répercutées, par crainte de perdre des clients",
            "**Un mix de ventes qui se dégrade** : le chiffre d'affaires tient, mais il vient davantage des produits, clients ou chantiers les moins margés",
            "**Des charges fixes qui ont grossi plus vite que l'activité** : recrutements, locaux, outils engagés pour une croissance qui n'est pas venue, ce qui relève aussi du [seuil de rentabilité](/infos-utiles/seuil-de-rentabilite/)",
            "**Un coût du financement plus lourd** : emprunts renouvelés à des taux plus élevés, découvert utilisé en permanence",
            "**Des pertes invisibles** : remises non suivies, travaux non facturés, retours, casse, impayés passés en perte",
          ],
        },
        { type: "h3", texte: "Remonter à l'étage qui a bougé" },
        {
          type: "p",
          texte:
            "La méthode est toujours la même : comparer la cascade sur deux ou trois exercices, étage par étage, en pourcentage du chiffre d'affaires. Si la marge brute tient mais que l'EBE baisse, regardez les charges de personnel et les charges externes. Si l'EBE tient mais que le résultat net baisse, regardez les amortissements, la dette et l'exceptionnel. On trouve ainsi en quelques heures ce qu'on cherche parfois pendant des mois.",
        },
      ],
    },

    {
      label: "Agir",
      titre: "Améliorer la marge nette sans fragiliser l'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Couper dans toutes les charges de 5 % est la réponse la plus rapide, et souvent la plus coûteuse : on affaiblit ce qui fonctionne en même temps que ce qui ne fonctionne pas. Une marge nette se reconstruit en visant la cause identifiée.",
        },
        { type: "h3", texte: "Commencer par les prix" },
        {
          type: "p",
          texte:
            "Une hausse de prix acceptée par le marché va entièrement dans la marge. Dans notre exemple, 2 % de hausse sans perte de volume ajoutent 60 000 € au résultat avant impôt et portent la marge nette à 199 250 €, soit 6,5 % au lieu de 5,1 %. Aucune économie de charges n'a un effet aussi direct. Encore faut-il savoir quels clients et quels produits le supportent.",
        },
        { type: "h3", texte: "Connaître la marge par activité" },
        {
          type: "p",
          texte:
            "Tant que la marge n'est connue qu'en global, on ne sait pas où agir. Calculer la marge par client, par gamme ou par chantier montre souvent qu'une partie de l'activité finance l'autre. La décision peut alors être de revoir un tarif, de changer une façon de produire, ou d'arrêter ce qui détruit de la valeur.",
        },
        { type: "h3", texte: "Garder un œil sur la trésorerie" },
        {
          type: "p",
          texte:
            "Une marge nette qui progresse ne remplit pas forcément le compte bancaire : les stocks, les délais clients et les remboursements d'emprunts n'apparaissent pas dans le résultat. C'est pourquoi l'analyse de la marge se double d'un suivi des [flux de trésorerie](/infos-utiles/flux-de-tresorerie/).",
        },
        { type: "h3", texte: "Suivre la marge chaque mois, pas chaque année" },
        {
          type: "p",
          texte:
            "Le travail sur la marge porte ses fruits quand il devient un rendez-vous régulier, sur des situations intermédiaires fiables. Au cabinet, c'est [Marjorie Anglade](/marjorie-anglade/) qui le conduit, en directrice financière à temps partagé : elle travaille à partir des comptes établis par votre expert-comptable, sans les tenir, sur un périmètre écrit avec vous. Si une marge qui s'érode vient d'un problème d'organisation ou commercial, elle fait appel à un collègue sur ce point précis, et seulement si le sujet l'exige. Pour situer d'abord où se trouve votre blocage, commencez par notre [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Comment calculer la marge nette ?",
      r: [
        "La marge nette est égale au résultat net de l'exercice. Partez du chiffre d'affaires, retirez toutes les charges d'exploitation, les amortissements, les charges financières, ajoutez ou retirez le résultat exceptionnel, puis déduisez la participation des salariés et l'impôt sur les sociétés. Le résultat net figure directement en bas du compte de résultat établi à la clôture.",
      ],
    },
    {
      q: "Quelle est la formule du taux de marge nette ?",
      r: [
        "Taux de marge nette = résultat net ÷ chiffre d'affaires hors taxes × 100. Une entreprise qui réalise 3 000 000 € de chiffre d'affaires et 154 250 € de résultat net affiche un taux de marge nette de 5,1 % : sur 100 euros vendus, elle conserve un peu plus de 5 euros une fois toutes ses charges et son impôt payés.",
      ],
    },
    {
      q: "Quelle différence entre marge brute et marge nette ?",
      r: [
        "La marge brute mesure l'écart entre le prix de vente et le coût d'achat ou de production de ce qui est vendu. La marge nette mesure ce qui reste après toutes les charges : salaires, loyers, amortissements, intérêts, impôt. Une entreprise peut avoir une bonne marge brute et une marge nette faible si sa structure ou son endettement sont trop lourds.",
      ],
    },
    {
      q: "Qu'est-ce qu'une bonne marge nette pour une PME ?",
      r: [
        "Il n'existe pas de taux de référence universel. Le niveau dépend du secteur, du modèle économique, de la rémunération du dirigeant et du statut de l'entreprise. Un négoce vit souvent avec un taux faible sur de gros volumes, une activité de service avec un taux plus élevé. Le plus utile est de comparer votre taux à son historique et à des entreprises du même métier.",
      ],
    },
    {
      q: "Une marge nette positive garantit-elle une bonne trésorerie ?",
      r: [
        "Non. Le résultat net est un calcul comptable : il enregistre les ventes quand elles sont facturées, pas quand elles sont encaissées, et il ignore le remboursement du capital des emprunts ou la hausse des stocks. Une entreprise bénéficiaire peut donc manquer de trésorerie, surtout en période de croissance. Il faut suivre les deux indicateurs ensemble.",
      ],
    },
  ],

  sources: [
    {
      titre: "Résultat net comptable",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1100",
    },
    {
      titre: "Comprendre et calculer les soldes intermédiaires de gestion pour améliorer sa rentabilité",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/finance-pilotage-economique/comprendre-calculer-soldes",
    },
    {
      titre: "Impôt sur les sociétés (IS) : taux, déclaration, paiement",
      editeur: "entreprendre.service-public.gouv.fr",
      url: "https://entreprendre.service-public.gouv.fr/vosdroits/F23575",
    },
    {
      titre:
        "Quelle est la situation financière des PME et des ETI françaises à l'issue du cycle de taux d'intérêt 2022-2025 ?",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/system/files/2026-08/BDF265-3_PME-ETI_web2_0.pdf",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-05-03",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
