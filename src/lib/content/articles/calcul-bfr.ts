import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « calcul BFR » (1300/mois, KD 0). Secondaires : « comment calculer le
 * BFR » (480), « BFR normatif » (320), « besoin en fonds de roulement définition » (390).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite le calcul et la lecture du BFR, puis renvoie vers lui.
 *
 * POINTS SENSIBLES
 * - Marjorie Anglade est expert-comptable diplômée (DEC 2021), inscrite à l'Ordre,
 *   mais le cabinet ne tient aucune comptabilité : le texte la présente en
 *   directrice financière externalisée, jamais en teneur de comptes.
 * - L'exemple chiffré principal est celui de Bpifrance Création, cité comme tel.
 *   L'exemple du BFR normatif (chapitre 5) est une illustration théorique, calculée
 *   par nous et présentée comme telle : aucun cas client.
 * - Premier article du calendrier (05/10/2026) : liens internes limités aux
 *   articles déjà en ligne.
 */
export const article: Article = {
  slug: "calcul-bfr",

  motCle: "calcul BFR (1300/mois, KD 0) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "comment calculer le BFR (480/mois)",
    "BFR normatif (320/mois)",
    "besoin en fonds de roulement définition (390/mois)",
  ],

  metaTitle: "Calcul BFR : formule et exemple chiffré",
  metaDescription:
    "Calcul du BFR : la formule, un exemple chiffré, le BFR en jours de chiffre d'affaires, le BFR normatif et les leviers pour le réduire dans une PME.",

  h1: "Calcul du BFR : formule, exemple chiffré et lecture pour une PME",
  chapo:
    "Le calcul du BFR tient en une ligne : stocks, plus créances clients, moins dettes fournisseurs. Le résultat est la somme que votre entreprise doit avancer en permanence pour tourner, parce qu'elle paie avant d'être payée. Le calcul est simple ; ce qui compte, c'est de l'exprimer en jours de chiffre d'affaires, de le suivre dans le temps et de savoir ce qu'il deviendra quand l'activité grandira. Une PME rentable peut manquer de trésorerie uniquement parce que son besoin en fonds de roulement croît plus vite que ses ventes. Voici la formule, un exemple chiffré, la méthode du BFR normatif et les leviers pour le réduire.",

  essentiel: {
    reponse:
      "Le besoin en fonds de roulement (BFR) mesure le décalage de trésorerie créé par l'activité courante. Il se calcule ainsi : BFR = stocks + créances clients − dettes fournisseurs, en y ajoutant, pour une vision complète, les autres créances et dettes d'exploitation (TVA, dettes fiscales et sociales). Un BFR positif doit être financé, par le fonds de roulement ou par des crédits court terme. Exprimé en jours de chiffre d'affaires hors taxes, il se compare d'une année à l'autre et permet de prévoir le besoin lié à la croissance : c'est le principe du BFR normatif.",
    points: [
      "Formule de base : stocks + créances clients − dettes fournisseurs",
      "BFR en jours = BFR ÷ chiffre d'affaires HT × 365",
      "Trésorerie nette = fonds de roulement − BFR",
      "BFR normatif : chaque poste exprimé en jours de chiffre d'affaires, pour projeter le besoin quand l'activité change",
      "Trois leviers : délais clients, niveau des stocks, délais fournisseurs dans les limites légales",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Besoin en fonds de roulement : définition simple",
      blocs: [
        {
          type: "p",
          texte:
            "Une entreprise achète, stocke, produit, livre, facture, puis encaisse. Entre la première dépense et le dernier encaissement, il s'écoule des semaines, parfois des mois. Pendant ce temps, l'argent est immobilisé dans le cycle. Bpifrance Création le résume ainsi : [le BFR correspond au décalage de trésorerie issu de l'activité courante de l'entreprise](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/besoin-fonds-roulement-bfr). **Le BFR n'est pas une perte : c'est de l'argent avancé, qui reviendra, mais qu'il faut financer en attendant.**",
        },
        { type: "h3", texte: "Les trois postes qui le composent" },
        {
          type: "liste",
          items: [
            "**Les stocks** : matières premières, encours de production, produits finis ou marchandises. Tant qu'ils ne sont pas vendus, ils ont été payés sans rien rapporter.",
            "**Les créances clients** : ce que vos clients vous doivent pour des ventes déjà facturées. C'est souvent le poste le plus lourd dans les services et l'industrie.",
            "**Les dettes fournisseurs** : ce que vous devez à vos fournisseurs. Elles viennent en déduction, car elles financent une partie de votre cycle.",
          ],
        },
        { type: "h3", texte: "BFR, fonds de roulement, trésorerie : trois notions liées" },
        {
          type: "p",
          texte:
            "Le fonds de roulement, lui, mesure les ressources durables (capitaux propres, emprunts à long terme) qui restent disponibles après le financement des immobilisations. La relation entre les deux donne votre trésorerie nette : **trésorerie nette = fonds de roulement − BFR**. Si le BFR dépasse le fonds de roulement, la différence est financée par le découvert ou des crédits court terme. C'est pourquoi un dirigeant peut afficher un bon résultat et voir pourtant son compte bancaire se tendre : le résultat a été absorbé par le cycle.",
        },
        {
          type: "p",
          texte:
            "Suivre ce mécanisme mois après mois fait partie du travail d'un directeur financier. Dans une PME qui n'a pas de quoi occuper un DAF à plein temps, c'est le rôle d'un [DAF externalisé](/daf-externalise-toulouse/) : partir des comptes établis par l'expert-comptable pour anticiper le besoin, plutôt que le découvrir sur le relevé.",
        },
      ],
    },

    {
      label: "La formule",
      titre: "Comment calculer le BFR : la formule pas à pas",
      blocs: [
        {
          type: "p",
          texte:
            "La formule de base est celle que retient Bpifrance Création : BFR = stocks moyens + encours moyen de créances clients − encours moyen de dettes fournisseurs. Pour un calcul complet à partir d'un bilan, on parle de BFR d'exploitation et l'on ajoute les autres postes liés à l'activité courante.",
        },
        {
          type: "tableau",
          entetes: ["Poste du bilan", "Sens dans le calcul du BFR"],
          lignes: [
            ["Stocks de matières, encours, produits finis, marchandises", "À ajouter"],
            ["Créances clients et comptes rattachés", "À ajouter"],
            ["Autres créances d'exploitation (TVA déductible, avances versées aux fournisseurs)", "À ajouter"],
            ["Charges constatées d'avance liées à l'exploitation", "À ajouter"],
            ["Dettes fournisseurs et comptes rattachés", "À retrancher"],
            ["Dettes fiscales et sociales (TVA collectée, salaires et charges à payer)", "À retrancher"],
            ["Avances et acomptes reçus des clients", "À retrancher"],
          ],
        },
        { type: "h3", texte: "Où trouver les chiffres" },
        {
          type: "p",
          texte:
            "Les montants se lisent à l'actif circulant et au passif circulant de votre bilan. Le calcul à la clôture donne une photo ; elle peut être trompeuse si votre activité est saisonnière, car la date de clôture tombe rarement au moment du pic. Pour un pilotage utile, refaites le calcul sur les situations intermédiaires, mensuelles ou trimestrielles, ou travaillez sur des encours moyens.",
        },
        { type: "h3", texte: "Hors taxes ou toutes taxes comprises ?" },
        {
          type: "p",
          texte:
            "Les créances clients et les dettes fournisseurs figurent au bilan TTC, puisque c'est ce que le client vous versera et ce que vous verserez au fournisseur. Bpifrance Création recommande d'ailleurs, dans un prévisionnel, de raisonner en TTC sur ces deux postes, car la TVA encaissée ou décaissée pèse sur la trésorerie. Les stocks, eux, s'évaluent hors taxes. Gardez la même convention d'une année à l'autre : un BFR qui change de méthode de calcul ne se compare plus.",
        },
        { type: "h3", texte: "Le piège des éléments hors exploitation" },
        {
          type: "p",
          texte:
            "Une dette envers un fournisseur d'immobilisations, une créance sur la cession d'une machine ou un compte courant d'associé ne relèvent pas du cycle d'exploitation. Les intégrer fausse la lecture. Isolez-les : ils relèvent du financement ou de l'investissement, pas de l'activité courante.",
        },
      ],
    },

    {
      label: "En jours",
      titre: "Calcul du BFR en jours de chiffre d'affaires",
      blocs: [
        {
          type: "p",
          texte:
            "Un BFR de 400 000 euros ne dit pas grand-chose seul. Pour une entreprise qui réalise 1 million d'euros de chiffre d'affaires, c'est considérable ; pour une autre qui en réalise 10, c'est léger. **Exprimer le BFR en jours de chiffre d'affaires hors taxes le rend comparable dans le temps et d'une activité à l'autre.**",
        },
        { type: "h3", texte: "La formule en jours" },
        {
          type: "p",
          texte:
            "BFR en jours = BFR ÷ chiffre d'affaires HT × 365. Le résultat se lit ainsi : votre entreprise doit financer en permanence l'équivalent de tant de jours de ventes. Suivre ce nombre d'une année sur l'autre est plus parlant que suivre un montant, qui grossit mécaniquement avec l'activité.",
        },
        { type: "h3", texte: "Décomposer par poste" },
        {
          type: "p",
          texte:
            "Le chiffre global cache ses causes. Pour savoir où agir, décomposez-le en trois ratios, chacun rapporté à la bonne base.",
        },
        {
          type: "tableau",
          entetes: ["Ratio", "Calcul usuel"],
          lignes: [
            ["Délai moyen de paiement des clients", "Créances clients TTC ÷ chiffre d'affaires TTC × 365"],
            ["Délai moyen de paiement des fournisseurs", "Dettes fournisseurs TTC ÷ achats TTC × 365"],
            ["Rotation des stocks de marchandises ou de matières", "Stock moyen HT ÷ achats consommés HT × 365"],
            ["Rotation des stocks de produits finis", "Stock moyen HT ÷ coût de production des ventes × 365"],
            ["BFR global en jours de chiffre d'affaires", "BFR ÷ chiffre d'affaires HT × 365"],
          ],
        },
      ],
    },

    {
      label: "Exemple",
      titre: "Exemple de calcul du BFR, étape par étape",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création publie un [exemple complet de calcul du BFR](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/besoin-fonds-roulement-bfr) pour une entreprise de production. Nous le reprenons tel quel, car il montre la méthode sur chaque poste. Les hypothèses : un chiffre d'affaires de 500 000 euros HT, soit 600 000 euros TTC avec une TVA à 20 %, des achats égaux à 40 % du chiffre d'affaires HT (200 000 euros HT, 240 000 euros TTC), 40 % des clients qui paient à 30 jours et 60 % à 60 jours, 30 % des fournisseurs payés à 60 jours et 70 % à 30 jours, un stock de matières d'un mois et demi d'achats et un stock de produits finis de 8 jours de chiffre d'affaires.",
        },
        {
          type: "tableau",
          entetes: ["Poste", "Calcul et résultat"],
          lignes: [
            ["Stock de matières premières", "200 000 € × 1,5 ÷ 12 = 25 000 €"],
            ["Stock de produits finis", "500 000 € × 8 ÷ 365 = 10 960 €"],
            ["Créances clients (48 jours de CA TTC)", "600 000 € × 48 ÷ 365 = 78 900 €"],
            ["Dettes fournisseurs (39 jours d'achats TTC)", "240 000 € × 39 ÷ 365 = 25 640 €"],
            ["BFR", "(25 000 + 10 960 + 78 900) − 25 640 = 89 220 €"],
          ],
        },
        { type: "h3", texte: "Ce que dit ce résultat" },
        {
          type: "p",
          texte:
            "Les 48 jours clients viennent d'une moyenne pondérée : 40 % × 30 jours + 60 % × 60 jours. Les 39 jours fournisseurs, de la même façon : 30 % × 60 + 70 % × 30. Rapporté au chiffre d'affaires HT, ce BFR de 89 220 euros représente environ 65 jours de ventes (89 220 ÷ 500 000 × 365). Autrement dit, l'entreprise doit disposer en permanence de plus de deux mois de chiffre d'affaires pour faire tourner son cycle.",
        },
        { type: "h3", texte: "Où se trouve le gisement" },
        {
          type: "p",
          texte:
            "Dans cet exemple, les créances clients pèsent près de 70 % des emplois du cycle (78 900 sur 114 860 euros). C'est là qu'un effort produit le plus d'effet : amener tous les clients à 30 jours ramènerait les créances à environ 49 300 euros (600 000 × 30 ÷ 365), soit près de 30 000 euros de trésorerie libérée, sans vendre un euro de plus.",
        },
      ],
    },

    {
      label: "BFR normatif",
      titre: "Le BFR normatif : prévoir le besoin quand l'activité grandit",
      blocs: [
        {
          type: "p",
          texte:
            "Le BFR normatif répond à une question de dirigeant : si mon chiffre d'affaires augmente de 20 %, combien de trésorerie cette croissance va-t-elle consommer ? La méthode consiste à exprimer chaque poste du BFR en jours de chiffre d'affaires HT, à partir de délais jugés normaux pour l'entreprise, puis à appliquer ce nombre de jours au chiffre d'affaires prévu.",
        },
        { type: "h3", texte: "La méthode en quatre étapes" },
        {
          type: "liste",
          items: [
            "Retenir, pour chaque poste, un délai représentatif : délai client réel, délai fournisseur réel, durée de stockage",
            "Convertir chaque délai en jours de chiffre d'affaires HT, en le pondérant par le poids du poste (les achats ne représentent qu'une part des ventes, la TVA s'ajoute aux créances et aux dettes)",
            "Additionner les postes d'emploi, retrancher les postes de ressource : on obtient le BFR normatif en jours",
            "Multiplier par le chiffre d'affaires HT prévu, divisé par 365",
          ],
        },
        { type: "h3", texte: "Une illustration théorique" },
        {
          type: "p",
          texte:
            "Prenons une PME fictive qui réalise 3 millions d'euros de chiffre d'affaires HT, avec un BFR normatif de 48 jours de chiffre d'affaires (25 jours de stocks, 58 jours de créances clients, 35 jours de dettes fournisseurs, tous exprimés en jours de CA HT). Son BFR vaut environ 394 500 euros (3 000 000 × 48 ÷ 365). Si son chiffre d'affaires passe à 3,6 millions, le BFR monte à environ 473 400 euros. **La croissance de 20 % coûte à elle seule près de 79 000 euros de trésorerie, avant même le premier euro de bénéfice supplémentaire.**",
        },
        {
          type: "p",
          texte:
            "Le même calcul montre ce que vaut un levier : réduire de 10 jours le délai client sur 3,6 millions de chiffre d'affaires libère environ 98 600 euros (3 600 000 × 10 ÷ 365). C'est plus que le besoin créé par la croissance.",
        },
        { type: "h3", texte: "Les limites du normatif" },
        {
          type: "p",
          texte:
            "Le BFR normatif raisonne en moyenne annuelle. Il ne montre pas le pic d'une activité saisonnière, ni le mois où un gros client paie en retard. Pour cela, il faut un prévisionnel de trésorerie mensuel, qui reprend les encaissements et décaissements réels. Le normatif sert à dimensionner le besoin et à négocier un financement ; le prévisionnel sert à passer les mois difficiles.",
        },
      ],
    },

    {
      label: "Interpréter",
      titre: "Interpréter son BFR : positif, négatif, en hausse",
      blocs: [
        {
          type: "p",
          texte:
            "Il n'existe pas de bon BFR dans l'absolu. Un industriel qui stocke des matières et accorde des délais à ses clients aura structurellement un BFR élevé ; un commerce payé comptant pourra avoir un BFR négatif. **Ce qui compte, c'est l'évolution de votre BFR en jours et son rapport avec le fonds de roulement disponible.**",
        },
        { type: "h3", texte: "Un BFR positif, le cas le plus courant" },
        {
          type: "p",
          texte:
            "La plupart des PME industrielles, de services ou de négoce ont un BFR positif. S'il n'est pas couvert par le fonds de roulement, l'entreprise dépend de ses lignes court terme (découvert, escompte, affacturage). Connue, chiffrée et négociée avec la banque, cette situation se gère. Découverte, elle devient dangereuse.",
        },
        { type: "h3", texte: "Un BFR négatif, une ressource à ne pas dépenser" },
        {
          type: "p",
          texte:
            "Quand les clients paient avant que les fournisseurs soient réglés, le cycle dégage de la trésorerie. C'est le modèle de la grande distribution, et de certaines activités qui encaissent des acomptes importants. Cette trésorerie n'appartient pas vraiment à l'entreprise : elle disparaît si l'activité ralentit. L'utiliser pour financer des investissements durables est un risque classique.",
        },
        { type: "h3", texte: "Un BFR qui augmente plus vite que les ventes" },
        {
          type: "p",
          texte:
            "C'est le signal à surveiller. Il traduit un client qui paie plus tard, un stock qui s'accumule ou un fournisseur qui a raccourci ses conditions. Le contexte ne pousse pas à l'optimisme : selon le [rapport annuel de l'Observatoire des délais de paiement](https://www.banque-france.fr/fr/communiques-de-presse/le-rapport-annuel-de-lobservatoire-des-delais-de-paiement-appelle-maintenir-la-vigilance-quant-aux) publié par la Banque de France en juillet 2025, le retard moyen de paiement atteignait 13,6 jours fin 2024, et ces retards privent les PME et les microentreprises d'environ 15 milliards d'euros de trésorerie. Les entreprises de plus de 1 000 salariés restent les plus mauvais payeurs, avec 18 jours de retard en moyenne.",
        },
      ],
    },

    {
      label: "Réduire",
      titre: "Réduire le BFR : les leviers poste par poste",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création cite quatre leviers : réduire le délai de rotation des stocks, réduire le crédit consenti aux clients, allonger le crédit obtenu des fournisseurs, exiger un acompte. Dans une PME, chacun se traduit par des gestes précis.",
        },
        {
          type: "tableau",
          entetes: ["Levier", "Ce qu'il faut faire concrètement"],
          lignes: [
            ["Facturer plus tôt", "Émettre la facture à la livraison ou à l'avancement, pas en fin de mois ni à la fin du chantier"],
            ["Encaisser plus vite", "Relancer avant l'échéance, pas après ; suivre une balance âgée chaque semaine"],
            ["Demander un acompte", "Sur les commandes importantes ou les fabrications spécifiques, dès la signature"],
            ["Revoir les conditions de paiement", "Écrire le délai dans les conditions générales et le faire respecter à la signature des contrats"],
            ["Alléger les stocks", "Identifier les références qui dorment, revoir les quantités minimales de commande"],
            ["Négocier avec les fournisseurs", "Obtenir des délais adaptés, dans le respect des plafonds légaux"],
          ],
        },
        { type: "h3", texte: "Les délais fournisseurs ont une limite légale" },
        {
          type: "p",
          texte:
            "Allonger les délais fournisseurs a un plafond. L'[article L441-10 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392) fixe le délai par défaut à trente jours après réception des marchandises ou exécution de la prestation, et interdit de convenir d'un délai supérieur à soixante jours après l'émission de la facture, ou à quarante-cinq jours fin de mois par dérogation. Au-delà, vous financez votre BFR sur le dos de vos fournisseurs, avec un risque de sanction et de relation dégradée. Ce même plafond vous protège côté clients : il fonde vos relances.",
        },
        { type: "h3", texte: "Quand le stock est un sujet d'organisation" },
        {
          type: "p",
          texte:
            "Un stock trop lourd tient rarement à la seule finance. Il vient souvent d'un flux de production mal cadencé, de prévisions commerciales imprécises ou d'un manque de coordination entre achats et atelier. Dans ce cas, le chiffre signale le problème, mais la solution passe par le [conseil en organisation](/transformation-entreprise/), sur le flux lui-même.",
        },
      ],
    },

    {
      label: "Piloter",
      titre: "Du calcul du BFR au pilotage : qui s'en charge dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Le calcul du BFR est à la portée de tout dirigeant qui a son bilan sous les yeux. Son suivi, en revanche, demande de la régularité : les mêmes ratios, à la même date, chaque mois, et une explication quand ils bougent. **Un BFR calculé une fois par an à la clôture sert à comprendre le passé ; suivi chaque mois, il sert à décider.**",
        },
        { type: "h3", texte: "L'expert-comptable produit les chiffres" },
        {
          type: "p",
          texte:
            "Votre expert-comptable établit le bilan et, si vous le lui demandez, des situations intermédiaires. C'est la base fiable dont tout calcul dépend. Notre article [DAF externe ou expert-comptable](/infos-utiles/daf-externe-ou-expert-comptable/) détaille la répartition des rôles entre les deux métiers.",
        },
        { type: "h3", texte: "Le directeur financier s'en sert pour décider" },
        {
          type: "p",
          texte:
            "Le suivi du BFR, son intégration dans le prévisionnel de trésorerie et la préparation d'un dossier de financement relèvent du pilotage. Au cabinet, c'est le travail de [Marjorie Anglade](/marjorie-anglade/), associée fondatrice, expert-comptable de formation et inscrite à l'Ordre, qui intervient ici en directrice financière à temps partagé : le cabinet ne tient pas votre comptabilité, il travaille à partir des comptes produits par votre expert-comptable. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord.",
        },
        {
          type: "p",
          texte:
            "Si votre trésorerie se tend sans que vous sachiez dire si le problème vient des clients, des stocks ou de la croissance, commencez par situer le blocage. Notre [diagnostic d'entreprise](/diagnostic/) vous y aide en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la formule de calcul du BFR ?",
      r: [
        "La formule de base est : BFR = stocks + créances clients − dettes fournisseurs. Pour un calcul complet à partir du bilan, on ajoute les autres créances d'exploitation, comme la TVA déductible, et on retranche les dettes fiscales et sociales ainsi que les acomptes reçus des clients. On obtient le besoin en fonds de roulement d'exploitation, c'est-à-dire la somme que l'entreprise doit financer en permanence pour faire tourner son cycle.",
      ],
    },
    {
      q: "Quelle différence entre fonds de roulement et BFR ?",
      r: [
        "Le fonds de roulement mesure les ressources durables, capitaux propres et dettes à long terme, qui restent disponibles après le financement des immobilisations. Le BFR mesure le besoin créé par le cycle d'exploitation. La différence entre les deux donne la trésorerie nette : si le fonds de roulement couvre le BFR, la trésorerie est positive ; sinon, l'écart est financé par le découvert ou des crédits court terme.",
      ],
    },
    {
      q: "Comment calculer le BFR normatif ?",
      r: [
        "On exprime chaque poste du BFR en jours de chiffre d'affaires hors taxes : stocks, créances clients, dettes fournisseurs, en tenant compte de leur poids réel par rapport aux ventes. On additionne les emplois, on retranche les ressources, puis on multiplie le nombre de jours obtenu par le chiffre d'affaires prévu divisé par 365. Le BFR normatif sert surtout à estimer la trésorerie que consommera une hausse d'activité.",
      ],
    },
    {
      q: "Un BFR négatif est-il une bonne nouvelle ?",
      r: [
        "Souvent, oui : il signifie que vos clients vous paient avant que vous ne régliez vos fournisseurs, et que votre cycle dégage de la trésorerie. C'est le cas de la grande distribution ou d'activités qui encaissent des acomptes. Mais cette trésorerie dépend du niveau d'activité : si les ventes baissent, elle fond. Il est prudent de ne pas l'engager dans des investissements durables.",
      ],
    },
    {
      q: "Faut-il calculer le BFR en HT ou en TTC ?",
      r: [
        "Les créances clients et les dettes fournisseurs se lisent TTC, car c'est la somme réellement encaissée ou payée, TVA comprise. Bpifrance Création recommande d'ailleurs de raisonner en TTC sur ces postes dans un prévisionnel. Les stocks s'évaluent hors taxes. Pour exprimer le BFR en jours, on le rapporte au chiffre d'affaires hors taxes. L'essentiel est de garder la même convention d'une année sur l'autre.",
      ],
    },
  ],

  sources: [
    {
      titre: "Le besoin en fonds de roulement (BFR)",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/besoin-fonds-roulement-bfr",
    },
    {
      titre:
        "Le rapport annuel de l'Observatoire des délais de paiement appelle à maintenir la vigilance quant aux délais observés dans l'économie française",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/communiques-de-presse/le-rapport-annuel-de-lobservatoire-des-delais-de-paiement-appelle-maintenir-la-vigilance-quant-aux",
    },
    {
      titre: "Article L441-10 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2026-10-05",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
