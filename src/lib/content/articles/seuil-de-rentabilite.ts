import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « comment calculer le seuil de rentabilité » (390/mois, KD 27).
 * Secondaires : « point mort calcul » (390), « formule marge sur coût variable » (260),
 * « marge de sécurité calcul » (260).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite une méthode de calcul et renvoie vers lui.
 *
 * Formules : Bpifrance Création et CCI Business Builder, pages ouvertes le 24/09/2026.
 * Contexte chiffré : Banque de France, Bulletin 265/3 (juillet-août 2026).
 * L'exemple de l'atelier (2 M€ de chiffre d'affaires) est une illustration construite
 * pour l'article, présentée comme telle : ce n'est pas un cas client.
 *
 * POINT SENSIBLE — Marjorie Anglade est expert-comptable inscrite à l'Ordre, mais
 * le cabinet ne tient pas de comptabilité : le texte ne présente jamais le calcul
 * comme une prestation comptable.
 */
export const article: Article = {
  slug: "seuil-de-rentabilite",

  motCle: "comment calculer le seuil de rentabilité (390/mois, KD 27) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "point mort calcul (390/mois)",
    "formule marge sur coût variable (260/mois)",
    "marge de sécurité calcul (260/mois)",
  ],

  // 40 / 42
  metaTitle: "Comment calculer le seuil de rentabilité",
  // 148 / 150
  metaDescription:
    "Seuil de rentabilité, point mort, marge de sécurité : les formules, un exemple chiffré pas à pas et ce que ce calcul permet de décider dans une PME.",

  h1: "Comment calculer le seuil de rentabilité, et s'en servir pour décider",
  chapo:
    "Pour calculer le seuil de rentabilité, divisez vos charges fixes par votre taux de marge sur coûts variables. Le résultat est le chiffre d'affaires hors taxes à partir duquel votre entreprise ne perd plus d'argent. Le calcul tient en trois lignes ; la difficulté est ailleurs. Il faut trier correctement les charges, savoir à quelle date de l'année ce seuil sera franchi (le point mort) et mesurer la distance qui vous en sépare (la marge de sécurité). Surtout, il faut s'en servir : un seuil bien calculé dit ce que coûte un recrutement, une hausse de tarif ou une machine, en chiffre d'affaires à aller chercher.",

  essentiel: {
    reponse:
      "Le seuil de rentabilité est le chiffre d'affaires hors taxes pour lequel le résultat de l'entreprise est nul : il couvre exactement les charges fixes et les charges variables. Il se calcule en trois étapes : marge sur coûts variables = chiffre d'affaires HT moins charges variables ; taux de marge sur coûts variables = marge sur coûts variables divisée par le chiffre d'affaires ; seuil de rentabilité = charges fixes divisées par ce taux. Le point mort traduit ce seuil en date, la marge de sécurité en distance.",
    points: [
      "Seuil de rentabilité = charges fixes ÷ taux de marge sur coûts variables",
      "Point mort = seuil de rentabilité ÷ chiffre d'affaires annuel × 365 jours, si l'activité est régulière",
      "Marge de sécurité = chiffre d'affaires − seuil de rentabilité ; rapportée au chiffre d'affaires, elle donne l'indice de sécurité",
      "Tout le calcul dépend du tri entre charges fixes et variables : c'est là que se logent les erreurs",
      "Un euro de charge fixe en plus demande plus d'un euro de chiffre d'affaires : exactement 1 ÷ taux de marge sur coûts variables",
    ],
  },

  chapitres: [
    {
      label: "La formule",
      titre: "Comment calculer le seuil de rentabilité en trois étapes",
      blocs: [
        {
          type: "p",
          texte:
            "La définition est simple. Selon CCI France, le seuil de rentabilité est [« le niveau de ventes pour lequel le bénéfice de l'entreprise serait égal à zéro »](https://business-builder.cci.fr/guide-creation/le-previsionnel-financier/le-seuil-de-rentabilite). En dessous, vous perdez de l'argent ; au-dessus, chaque vente contribue au résultat. **Le seuil ne dit pas si vous êtes rentable : il dit à partir de quel niveau d'activité vous pouvez l'être.** C'est l'un des premiers repères que pose un [DAF externalisé](/daf-externalise-toulouse/) dans une PME, parce qu'il relie chaque décision à un chiffre d'affaires à atteindre.",
        },
        { type: "h3", texte: "Étape 1 : la marge sur coûts variables" },
        {
          type: "p",
          texte:
            "Retirez de votre chiffre d'affaires hors taxes toutes les charges qui varient avec l'activité : achats consommés, sous-traitance, transport, commissions. Ce qui reste est la marge sur coûts variables. C'est la somme disponible pour payer vos charges fixes, puis pour dégager un bénéfice.",
        },
        { type: "h3", texte: "Étape 2 : le taux de marge sur coûts variables" },
        {
          type: "p",
          texte:
            "Divisez cette marge par le chiffre d'affaires. Un taux de 40 % signifie que sur 100 euros vendus, 40 euros restent pour couvrir les charges fixes. Ce taux est le chiffre le plus important du calcul : il mesure ce que chaque euro de vente rapporte réellement à l'entreprise.",
        },
        { type: "h3", texte: "Étape 3 : le seuil lui-même" },
        {
          type: "p",
          texte:
            "Divisez vos charges fixes par ce taux. [Bpifrance Création](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/seuil-rentabilite) donne la même formule et rappelle que le calcul se fait en principe sur des montants hors taxes. Si vous vendez un produit à un prix moyen connu, divisez ensuite le seuil par ce prix : vous obtenez le nombre d'unités à vendre.",
        },
        {
          type: "tableau",
          entetes: ["Indicateur", "Formule"],
          lignes: [
            ["Marge sur coûts variables (MCV)", "Chiffre d'affaires HT − charges variables"],
            ["Taux de marge sur coûts variables", "MCV ÷ chiffre d'affaires HT"],
            ["Seuil de rentabilité (en euros)", "Charges fixes ÷ taux de marge sur coûts variables"],
            ["Seuil de rentabilité (en unités)", "Seuil en euros ÷ prix de vente moyen HT"],
            ["Point mort (en jours)", "Seuil ÷ chiffre d'affaires annuel × 365"],
            ["Marge de sécurité", "Chiffre d'affaires − seuil de rentabilité"],
            ["Indice de sécurité", "Marge de sécurité ÷ chiffre d'affaires"],
          ],
        },
      ],
    },

    {
      label: "Le tri des charges",
      titre: "Charges fixes et charges variables : le tri dont dépend tout le calcul",
      blocs: [
        {
          type: "p",
          texte:
            "La formule ne se trompe jamais ; le tri, souvent. CCI France définit les charges variables comme celles dont le montant peut être considéré comme proportionnel au volume d'activité, et les charges fixes comme celles qui ne sont pas influencées par une variation du chiffre d'affaires. Votre compte de résultat ne fait pas ce tri pour vous : il classe les charges par nature, pas par comportement.",
        },
        { type: "h3", texte: "Les charges qu'on classe facilement" },
        {
          type: "p",
          texte:
            "Les matières premières, les marchandises revendues et la sous-traitance liée aux commandes sont variables. Le loyer, les assurances, les abonnements, les honoraires récurrents et les dotations aux amortissements sont fixes. Les salaires des fonctions support le sont aussi, à effectif constant.",
        },
        { type: "h3", texte: "Les charges semi-variables, source de la plupart des erreurs" },
        {
          type: "p",
          texte:
            "L'énergie d'un atelier, les heures supplémentaires, l'intérim, les frais de déplacement commerciaux ont une part fixe et une part variable. La méthode la plus sûre consiste à regarder leur évolution sur plusieurs mois : ce qui bouge avec l'activité est variable, ce qui reste stable quand l'activité baisse est fixe. Un classement à la louche peut déplacer le seuil de plusieurs dizaines de milliers d'euros.",
        },
        { type: "h3", texte: "La masse salariale, premier bloc de charges fixes" },
        {
          type: "p",
          texte:
            "Dans la plupart des PME, les salaires permanents forment l'essentiel des charges fixes. D'après le [Bulletin de la Banque de France consacré aux PME et ETI en 2025](https://www.banque-france.fr/system/files/2026-08/BDF265-3_PME-ETI_web2_0.pdf), les charges de personnel représentaient 72 % de la valeur ajoutée des PME hors microentreprises en 2025, contre 74 % en 2019. C'est pourquoi un recrutement est la décision qui déplace le plus votre seuil, et c'est celle qu'il faut chiffrer avant de signer.",
        },
      ],
    },

    {
      label: "L'exemple",
      titre: "Formule de la marge sur coût variable : un exemple chiffré pas à pas",
      blocs: [
        {
          type: "p",
          texte:
            "Prenons un atelier fictif, construit pour l'exemple : 2 000 000 € de chiffre d'affaires hors taxes sur l'année, 1 200 000 € de charges variables (matières, sous-traitance, transport) et 650 000 € de charges fixes (salaires permanents, loyer, amortissements, frais généraux). Son résultat avant impôt est de 150 000 €.",
        },
        {
          type: "tableau",
          entetes: ["Calcul", "Résultat"],
          lignes: [
            ["Marge sur coûts variables : 2 000 000 − 1 200 000", "800 000 €"],
            ["Taux de marge sur coûts variables : 800 000 ÷ 2 000 000", "40 %"],
            ["Seuil de rentabilité : 650 000 ÷ 0,40", "1 625 000 €"],
            ["Marge de sécurité : 2 000 000 − 1 625 000", "375 000 €"],
            ["Indice de sécurité : 375 000 ÷ 2 000 000", "18,75 %"],
            ["Point mort : 1 625 000 ÷ 2 000 000 × 365", "297 jours, soit vers le 24 octobre"],
          ],
        },
        { type: "h3", texte: "Ce que ces chiffres disent au dirigeant" },
        {
          type: "p",
          texte:
            "Les dix premiers mois de l'année servent à payer la structure. Le bénéfice se fait sur les deux derniers. Une baisse d'activité de 18,75 % ramène l'atelier à l'équilibre, sans autre changement. Et chaque euro de charge fixe supplémentaire exige 2,50 € de chiffre d'affaires en plus pour être couvert, puisque seuls 40 centimes par euro vendu restent disponibles.",
        },
        { type: "h3", texte: "Le même calcul chez Bpifrance" },
        {
          type: "p",
          texte:
            "Bpifrance Création détaille un exemple comparable : une entreprise qui réalise 120 000 € de chiffre d'affaires avec 48 000 € de charges variables et 36 000 € de charges fixes dégage un taux de marge sur coûts variables de 60 %. Son seuil est de 60 000 €, soit 750 articles à 80 € de prix moyen, atteint au bout de 182,5 jours. Les ordres de grandeur changent, la mécanique reste identique.",
        },
      ],
    },

    {
      label: "Le point mort",
      titre: "Point mort : calcul de la date à laquelle vous devenez rentable",
      blocs: [
        {
          type: "p",
          texte:
            "Le seuil répond à la question « combien ? », le point mort à la question « quand ? ». Bpifrance Création le résume ainsi : il indique à quel moment de l'exercice le niveau de chiffre d'affaires du seuil sera atteint. Il s'exprime en jours, ou en date.",
        },
        { type: "h3", texte: "La formule rapide, et sa limite" },
        {
          type: "p",
          texte:
            "Point mort = seuil de rentabilité ÷ chiffre d'affaires annuel × 365 (ou 360 selon la convention retenue). Cette formule suppose une activité parfaitement régulière sur l'année. C'est rarement le cas dans l'industrie, l'agroalimentaire ou la distribution, où quelques mois concentrent une grande partie des ventes.",
        },
        { type: "h3", texte: "Le calcul mois par mois, plus fidèle" },
        {
          type: "p",
          texte:
            "Si votre activité est saisonnière, cumulez chaque mois la marge sur coûts variables réellement dégagée, et comparez ce cumul aux charges fixes de l'année. Le point mort tombe le mois où le cumul les dépasse. Deux entreprises au même seuil annuel peuvent ainsi le franchir en juin pour l'une, en novembre pour l'autre. La seconde porte un risque bien plus élevé : un mauvais dernier trimestre suffit à faire basculer son exercice.",
        },
        {
          type: "encadre",
          titre: "Une lecture utile en cours d'année",
          texte:
            "Suivre chaque mois le cumul de marge sur coûts variables face aux charges fixes vous dit, dès l'été, si l'exercice sera bénéficiaire. Attendre la clôture pour le découvrir, c'est se priver de six mois pour réagir.",
        },
      ],
    },

    {
      label: "La marge de sécurité",
      titre: "Marge de sécurité : calcul et lecture pour un dirigeant",
      blocs: [
        {
          type: "p",
          texte:
            "La marge de sécurité est l'écart entre votre chiffre d'affaires, réel ou prévu, et votre seuil de rentabilité. Exprimée en pourcentage du chiffre d'affaires, on l'appelle indice de sécurité. Elle répond à la question que tout dirigeant se pose en période incertaine : **de combien mon activité peut-elle baisser avant que je perde de l'argent ?**",
        },
        { type: "h3", texte: "Le calcul" },
        {
          type: "p",
          texte:
            "Marge de sécurité = chiffre d'affaires − seuil de rentabilité. Indice de sécurité = marge de sécurité ÷ chiffre d'affaires. Dans notre atelier, 375 000 € et 18,75 %. Il n'existe pas de norme universelle : une activité à faibles charges fixes supporte une marge de sécurité étroite, une activité très capitalistique beaucoup moins.",
        },
        { type: "h3", texte: "Pourquoi elle compte davantage aujourd'hui" },
        {
          type: "p",
          texte:
            "Pendant des années, la croissance du chiffre d'affaires élargissait la marge de sécurité sans effort. Ce n'est plus le cas. Selon la Banque de France, le chiffre d'affaires des PME hors microentreprises n'a progressé que de 1,5 % en 2025, contre 4,2 % en moyenne sur 1997-2019, et la moitié d'entre elles (50 %) ont vu leur taux de marge diminuer la même année. Quand les volumes stagnent, la marge de sécurité ne grandit plus d'elle-même : elle se construit par les prix, la marge et la maîtrise des charges fixes.",
        },
      ],
    },

    {
      label: "Décider",
      titre: "Ce que le seuil de rentabilité permet de décider",
      blocs: [
        {
          type: "p",
          texte:
            "Un seuil calculé une fois pour le business plan puis oublié ne sert à rien. Recalculé avant chaque décision qui touche aux charges fixes ou à la marge, il devient un outil d'arbitrage. C'est l'usage qu'en fait un directeur financier : traduire chaque option en chiffre d'affaires à aller chercher. Reprenons l'atelier de l'exemple, à activité constante.",
        },
        {
          type: "tableau",
          entetes: ["Décision envisagée", "Effet sur le seuil de rentabilité"],
          lignes: [
            ["Recruter un cadre à 70 000 € par an, charges comprises", "Seuil porté à 1 800 000 € (+ 175 000 €), marge de sécurité ramenée à 10 %"],
            ["Investir dans une machine amortie 60 000 € par an", "Seuil porté à 1 775 000 € (+ 150 000 €)"],
            ["Subir une hausse fournisseur qui fait perdre 2 points de taux de marge", "Seuil porté à environ 1 711 000 €, marge de sécurité ramenée à 14,5 %"],
            ["Augmenter les prix de 3 % sans perdre de volume", "Taux de marge porté à 41,75 %, seuil ramené à environ 1 557 000 €"],
          ],
        },
        { type: "h3", texte: "Un recrutement se chiffre en ventes supplémentaires" },
        {
          type: "p",
          texte:
            "Le poste à 70 000 € ne coûte pas 70 000 € de chiffre d'affaires, il en coûte 175 000 €. La question devient donc concrète : ce recrutement permettra-t-il de vendre 175 000 € de plus, ou de produire la même chose avec moins de charges variables ? Si la réponse est incertaine, le recrutement peut attendre, ou être étalé.",
        },
        { type: "h3", texte: "Le prix est le levier le plus puissant" },
        {
          type: "p",
          texte:
            "Une hausse de 3 % à volume égal va entièrement dans la marge. Elle abaisse le seuil de près de 70 000 € sans toucher à la structure. À l'inverse, une remise accordée sans calcul a exactement l'effet contraire. Avant de négocier un gros contrat à prix serré, vérifiez ce qu'il fait à votre taux de marge global.",
        },
        { type: "h3", texte: "Un investissement se juge aussi sur sa durée" },
        {
          type: "p",
          texte:
            "La machine alourdit le seuil tant qu'elle est amortie. Elle se justifie si elle augmente la capacité vendue ou réduit les charges variables d'au moins autant. Poser la question ainsi, avec des chiffres, évite de décider sur une intuition. Notre article sur la manière de [prendre une décision](/infos-utiles/prendre-une-decision/) détaille comment structurer ce type d'arbitrage.",
        },
      ],
    },

    {
      label: "Les limites",
      titre: "Seuil de rentabilité : les limites du calcul, et comment les corriger",
      blocs: [
        {
          type: "p",
          texte:
            "Le seuil de rentabilité est un modèle. Il suppose des prix stables, des charges fixes vraiment fixes et un mix de ventes constant. Ces hypothèses sont acceptables pour décider, à condition de connaître leurs angles morts.",
        },
        { type: "h3", texte: "Être rentable n'est pas avoir de la trésorerie" },
        {
          type: "p",
          texte:
            "Le seuil se calcule sur des charges comptables. Il inclut les amortissements, qui ne sortent pas de la banque, mais il ignore le remboursement du capital des emprunts, qui en sort. Il ignore aussi le décalage entre la facturation et l'encaissement. CCI France propose d'ailleurs une variante, dite seuil économique, qui tient compte de la capacité d'autofinancement et du remboursement des emprunts. Une entreprise au-dessus de son seuil peut donc manquer de trésorerie, surtout en croissance : c'est le sujet du [calcul du BFR](/infos-utiles/calcul-bfr/).",
        },
        { type: "h3", texte: "Les charges fixes avancent par paliers" },
        {
          type: "p",
          texte:
            "Au-delà d'un certain volume, il faut une équipe de plus, un second local, une deuxième machine. Les charges fixes font alors un saut, et le seuil avec elles. Un seuil calculé sur l'année passée ne vaut que dans la plage d'activité où la structure reste la même.",
        },
        { type: "h3", texte: "Un seuil global cache des activités qui perdent de l'argent" },
        {
          type: "p",
          texte:
            "Si vous vendez plusieurs gammes aux taux de marge différents, le taux global dépend du mix. Vendre davantage de la gamme la moins margée fait monter le seuil, même à chiffre d'affaires égal. Calculer la marge sur coûts variables par activité, par client ou par chantier est souvent l'étape suivante, et la plus instructive.",
        },
        { type: "h3", texte: "Faire vivre le seuil dans le pilotage" },
        {
          type: "p",
          texte:
            "Le seuil devient utile quand il est mis à jour avec les comptes réels, suivi chaque mois et recalculé avant chaque décision structurante. Chez nous, c'est [Marjorie Anglade](/marjorie-anglade/) qui porte ce travail, en directrice financière à temps partagé : elle part des comptes établis par votre expert-comptable, sans les tenir, sur un périmètre écrit qui ne s'élargit pas sans votre accord. Si vous ne savez pas aujourd'hui à quelle date votre exercice devient bénéficiaire, notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer ce qui manque à votre pilotage, en quelques minutes.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la formule du seuil de rentabilité ?",
      r: [
        "Seuil de rentabilité = charges fixes ÷ taux de marge sur coûts variables. Le taux de marge sur coûts variables se calcule en divisant la marge sur coûts variables (chiffre d'affaires HT moins charges variables) par le chiffre d'affaires HT. Par exemple, avec 650 000 € de charges fixes et un taux de 40 %, le seuil est de 1 625 000 € de chiffre d'affaires hors taxes.",
      ],
    },
    {
      q: "Quelle différence entre seuil de rentabilité et point mort ?",
      r: [
        "Le seuil de rentabilité est un montant : le chiffre d'affaires à partir duquel l'entreprise ne perd plus d'argent. Le point mort est une date : le moment de l'exercice où ce chiffre d'affaires est atteint. On le calcule en divisant le seuil par le chiffre d'affaires annuel, puis en multipliant par 365. Si l'activité est saisonnière, mieux vaut le calculer mois par mois.",
      ],
    },
    {
      q: "Comment calculer la marge de sécurité ?",
      r: [
        "La marge de sécurité est la différence entre le chiffre d'affaires, réel ou prévu, et le seuil de rentabilité. Divisée par le chiffre d'affaires, elle donne l'indice de sécurité, exprimé en pourcentage. Il indique de combien l'activité peut baisser avant que l'entreprise passe en perte. Un indice de 20 % signifie qu'une baisse de 20 % du chiffre d'affaires ramène le résultat à zéro.",
      ],
    },
    {
      q: "Faut-il calculer le seuil de rentabilité en HT ou en TTC ?",
      r: [
        "En hors taxes, lorsque l'entreprise est assujettie à la TVA. La TVA collectée n'appartient pas à l'entreprise : elle la reverse à l'État. Chiffre d'affaires, charges variables et charges fixes doivent donc tous être pris hors taxes, sinon le taux de marge sur coûts variables est faussé et le seuil avec lui.",
      ],
    },
    {
      q: "Où trouver les chiffres pour calculer son seuil de rentabilité ?",
      r: [
        "Dans le compte de résultat du dernier exercice, ou dans le prévisionnel pour l'année en cours. La difficulté est de reclasser chaque charge selon qu'elle varie ou non avec l'activité, ce que le compte de résultat ne fait pas. Votre expert-comptable peut vous fournir un détail des comptes ; les situations intermédiaires permettent ensuite de suivre le seuil en cours d'année.",
      ],
    },
  ],

  sources: [
    {
      titre: "Le seuil de rentabilité",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/seuil-rentabilite",
    },
    {
      titre: "Calcul du seuil de rentabilité",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/reprendre-entreprise-etapes/faire-son-business-plan-reprise/calcul-du-seuil",
    },
    {
      titre: "Le seuil de rentabilité",
      editeur: "CCI France (CCI Business Builder)",
      url: "https://business-builder.cci.fr/guide-creation/le-previsionnel-financier/le-seuil-de-rentabilite",
    },
    {
      titre:
        "Quelle est la situation financière des PME et des ETI françaises à l'issue du cycle de taux d'intérêt 2022-2025 ?",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/system/files/2026-08/BDF265-3_PME-ETI_web2_0.pdf",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2026-11-09",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: true,
};
