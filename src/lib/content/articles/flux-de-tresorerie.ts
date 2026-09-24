import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « flux de trésorerie » (590/mois, KD 22). Secondaires : « calcul
 * trésorerie nette » (590), « trésorerie définition » (590).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article explique la notion, le calcul et la lecture des flux, et renvoie
 * vers lui pour le pilotage.
 *
 * VIGILANCE — MÉTIER RÉGLEMENTÉ. Marjorie Anglade est expert-comptable inscrite
 * à l'Ordre (DEC 2021), mais au cabinet elle intervient en directrice financière
 * externalisée : le cabinet ne tient aucune comptabilité et ne produit ni comptes
 * annuels ni déclarations. Le texte ne doit jamais laisser entendre le contraire.
 *
 * Les montants de l'exemple chiffré (chapitre 2) sont fictifs et présentés comme
 * tels ; ce ne sont pas des statistiques. Liens vers articles : uniquement des
 * slugs publiés avant le 28/12/2026 (calcul-bfr, budget-de-tresorerie,
 * daf-externe-ou-expert-comptable).
 */
export const article: Article = {
  slug: "flux-de-tresorerie",

  motCle: "flux de trésorerie (590/mois, KD 22) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "calcul trésorerie nette (590/mois)",
    "trésorerie définition (590/mois)",
    "tableau des flux de trésorerie",
  ],

  // 41 / 42
  metaTitle: "Flux de trésorerie : définition et calcul",
  // 150 / 150
  metaDescription:
    "Flux de trésorerie et trésorerie nette : définition, calcul pas à pas, les trois familles de flux et comment les lire pour anticiper au lieu de subir.",

  h1: "Flux de trésorerie : définition, calcul et lecture pour piloter une PME",

  chapo:
    "Un flux de trésorerie est un mouvement d'argent réel : un encaissement qui entre sur votre compte ou un décaissement qui en sort. La somme de ces flux sur une période explique pourquoi votre trésorerie a monté ou baissé, ce que le compte de résultat ne dit pas. Une PME peut afficher un bénéfice et manquer d'argent, parce que ses clients paient tard, que son stock gonfle ou qu'elle rembourse un emprunt. Classer les flux en trois familles, exploitation, investissement et financement, permet de voir d'où vient l'argent et où il part. Les prévoir mois par mois permet de décider avant la tension, pas pendant.",

  essentiel: {
    reponse:
      "Les flux de trésorerie sont les entrées et sorties d'argent effectives d'une entreprise sur une période. Ils se classent en trois familles : flux d'exploitation (l'activité courante), flux d'investissement (achats et cessions d'actifs durables) et flux de financement (emprunts, remboursements, apports, dividendes). Leur somme donne la variation de la trésorerie nette, c'est-à-dire des liquidités disponibles diminuées des concours bancaires courants. Au bilan, la trésorerie nette se calcule aussi comme le fonds de roulement moins le besoin en fonds de roulement. Une entreprise rentable peut avoir des flux négatifs : résultat et trésorerie ne mesurent pas la même chose.",
    points: [
      "Flux de trésorerie : encaissements moins décaissements, sur une période donnée",
      "Trésorerie nette : disponibilités moins découverts et concours bancaires courants, ou FR moins BFR",
      "Trois familles de flux : exploitation, investissement, financement",
      "Bénéfice n'est pas trésorerie : délais clients, stocks, TVA et remboursements font l'écart",
      "Le suivi utile regarde devant : un plan de trésorerie mensuel, mis à jour",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Trésorerie et flux de trésorerie : définition simple",
      blocs: [
        {
          type: "p",
          texte:
            "La trésorerie, c'est l'argent dont l'entreprise dispose réellement à un instant donné : le solde de ses comptes bancaires, ses placements disponibles à très court terme et sa caisse, diminués des découverts utilisés. C'est une photographie. Les flux de trésorerie, eux, sont le film : tous les mouvements qui ont fait passer la trésorerie d'un montant à un autre entre deux dates. **La trésorerie dit où vous en êtes ; les flux disent pourquoi.**",
        },
        { type: "h3", texte: "Un flux, c'est une date de paiement, pas une date de facture" },
        {
          type: "p",
          texte:
            "Un flux se constate le jour où l'argent bouge. Une facture émise en mars et réglée en mai produit un encaissement en mai. Un achat de janvier payable en mars est un décaissement de mars. Bpifrance Création applique exactement cette règle dans sa méthode du [plan de trésorerie](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet) : chaque entrée ou sortie est portée dans la colonne du mois où elle doit normalement se produire, et en TTC pour les opérations soumises à la TVA. C'est la première différence avec la comptabilité, qui enregistre les opérations quand elles naissent.",
        },
        { type: "h3", texte: "Ce qui n'est pas un flux de trésorerie" },
        {
          type: "p",
          texte:
            "Une dotation aux amortissements réduit votre résultat, mais aucun euro ne sort ce jour-là : l'argent est sorti le jour de l'achat de la machine. Une provision pour un litige probable, une variation de stock constatée à l'inventaire, une facture à recevoir : tout cela modifie le résultat sans toucher le compte bancaire. À l'inverse, le remboursement du capital d'un emprunt vide le compte sans apparaître en charge. C'est ce décalage qui rend la trésorerie difficile à lire à partir des seuls comptes annuels.",
        },
        {
          type: "p",
          texte:
            "C'est aussi pourquoi le suivi des flux est au cœur du métier de directeur financier. Quand nous intervenons comme [DAF externalisé](/daf-externalise-toulouse/) auprès de PME de Toulouse et d'Occitanie, le premier outil mis en place est presque toujours un suivi des flux à venir, avant même les tableaux de bord.",
        },
      ],
    },

    {
      label: "Le calcul",
      titre: "Calcul de la trésorerie nette : deux méthodes qui doivent tomber juste",
      blocs: [
        {
          type: "p",
          texte:
            "La trésorerie nette se calcule de deux façons. Elles partent de documents différents et doivent donner le même résultat. Si ce n'est pas le cas, une écriture manque ou un compte est mal classé.",
        },
        { type: "h3", texte: "Méthode directe : ce que vous avez moins ce que vous devez à vue" },
        {
          type: "p",
          texte:
            "Trésorerie nette = disponibilités (comptes bancaires créditeurs, caisse, placements mobilisables immédiatement) − concours bancaires courants (découverts, soldes créditeurs de banque, lignes de court terme utilisées). C'est le calcul du dirigeant qui regarde ses relevés, à condition de ne pas oublier les découverts autorisés en cours d'utilisation, qui ne sont pas de la trésorerie mais de la dette.",
        },
        { type: "h3", texte: "Méthode par le bilan : FR − BFR = T" },
        {
          type: "p",
          texte:
            "Le guide du prévisionnel des CCI rappelle l'équation que tout bilan vérifie : [« Fonds de roulement (FR) – Besoin en fonds de roulement (BFR) = Trésorerie (T) »](https://business-builder.cci.fr/guide-creation/le-previsionnel-financier/le-bilan-le-bfr-et-la-tresorerie). Le fonds de roulement est ce qui reste des ressources durables (capitaux propres, emprunts à long terme) une fois les investissements financés. Le besoin en fonds de roulement, que le même guide calcule comme stocks plus créances moins dettes à court terme, est l'argent immobilisé par le cycle d'exploitation. Nous détaillons son calcul dans notre article sur le [calcul du BFR](/infos-utiles/calcul-bfr/).",
        },
        { type: "h3", texte: "Un exemple chiffré, pour fixer les idées" },
        {
          type: "p",
          texte:
            "Prenons une PME fictive. Ses capitaux propres et ses emprunts à long terme s'élèvent à 900 000 euros, ses immobilisations nettes à 700 000 euros : son fonds de roulement est de 200 000 euros. Ses stocks valent 150 000 euros, ses créances clients 260 000 euros, ses dettes fournisseurs, fiscales et sociales 290 000 euros : son BFR est de 120 000 euros. Sa trésorerie nette est donc de 80 000 euros. Si ses clients paient avec un mois de retard supplémentaire et que les créances passent à 340 000 euros, le BFR monte à 200 000 euros et la trésorerie nette tombe à zéro, sans que le chiffre d'affaires ni le résultat aient bougé.",
        },
        {
          type: "tableau",
          entetes: ["Élément (exemple fictif)", "Montant"],
          lignes: [
            ["Fonds de roulement (ressources durables − immobilisations)", "900 000 − 700 000 = 200 000 €"],
            ["Besoin en fonds de roulement (stocks + créances − dettes court terme)", "150 000 + 260 000 − 290 000 = 120 000 €"],
            ["Trésorerie nette (FR − BFR)", "200 000 − 120 000 = 80 000 €"],
            ["Même entreprise, un mois de retard client en plus", "200 000 − 200 000 = 0 €"],
          ],
        },
      ],
    },

    {
      label: "Les trois familles",
      titre: "Les trois flux de trésorerie : exploitation, investissement, financement",
      blocs: [
        {
          type: "p",
          texte:
            "Le classement en trois familles est la convention retenue par les tableaux de flux. Il répond à une question simple : l'argent qui entre vient-il de votre métier, de la vente d'actifs ou de vos financeurs ? Une entreprise saine finance l'essentiel de ses investissements par ses flux d'exploitation. Une entreprise qui ne tient que par ses emprunts a un problème, même si sa trésorerie est positive.",
        },
        {
          type: "tableau",
          entetes: ["Famille de flux", "Ce qu'elle contient"],
          lignes: [
            ["Flux d'exploitation", "Encaissements clients, paiements fournisseurs, salaires et charges sociales, impôts et taxes, TVA reversée"],
            ["Flux d'investissement", "Achats de machines, véhicules, logiciels, locaux ; cessions d'actifs ; prises de participation"],
            ["Flux de financement", "Nouveaux emprunts, remboursements du capital, apports des associés, dividendes versés"],
            ["Variation de trésorerie", "Somme des trois familles, égale à la trésorerie de fin moins la trésorerie de début"],
          ],
        },
        { type: "h3", texte: "Le flux d'exploitation, le seul qui dure" },
        {
          type: "p",
          texte:
            "Il mesure la capacité du métier à produire de l'argent. On l'approche en partant de la capacité d'autofinancement, que Bpifrance Création définit comme [« les ressources financières générées par l'activité de l'entreprise au cours d'un exercice »](https://bpifrance-creation.fr/capacite-dautofinancement), puis en retirant la hausse du BFR. Un flux d'exploitation durablement négatif signale que l'activité consomme plus d'argent qu'elle n'en produit.",
        },
        { type: "h3", texte: "Investissement et financement, à lire ensemble" },
        {
          type: "p",
          texte:
            "Un flux d'investissement négatif n'est pas une mauvaise nouvelle : l'entreprise renouvelle son outil. La question est de savoir qui le paie. Si un emprunt de cinq ans finance une machine utilisée dix ans, l'équilibre est bon. Si un découvert finance cette même machine, la trésorerie d'exploitation paiera deux fois : l'activité et l'investissement.",
        },
      ],
    },

    {
      label: "Le paradoxe",
      titre: "Bénéfice mais pas de trésorerie : pourquoi les flux divergent du résultat",
      blocs: [
        {
          type: "p",
          texte:
            "C'est la situation la plus déroutante pour un dirigeant : le compte de résultat affiche un bénéfice, et le compte bancaire est à découvert. **Le résultat mesure ce que l'entreprise a gagné ; les flux mesurent ce qu'elle a encaissé.** Quatre écarts expliquent presque toujours la différence.",
        },
        {
          type: "liste",
          items: [
            "**Les délais clients** : le chiffre d'affaires est compté à la facture, l'argent arrive des semaines plus tard",
            "**Les stocks** : chaque euro de matière achetée et pas encore vendue est un euro sorti du compte",
            "**Les remboursements d'emprunt** : le capital remboursé n'est pas une charge, mais c'est une sortie d'argent",
            "**Le calendrier fiscal et social** : TVA, acomptes d'impôt sur les sociétés, charges sociales tombent à dates fixes, pas au rythme des encaissements",
          ],
        },
        { type: "h3", texte: "Les retards de paiement, un flux que vous ne maîtrisez pas" },
        {
          type: "p",
          texte:
            "Les délais clients sont le premier poste à surveiller. Selon le [rapport 2024 de l'Observatoire des délais de paiement](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024) de la Banque de France, le retard moyen de paiement a atteint 13,6 jours au quatrième trimestre 2024, et les PME auraient disposé de 15 milliards d'euros de trésorerie supplémentaire sans ces retards. Pour une PME, quelques jours de retard d'un gros client peuvent suffire à déplacer une échéance de paie.",
        },
        { type: "h3", texte: "La croissance, grande consommatrice de trésorerie" },
        {
          type: "p",
          texte:
            "Une entreprise qui grandit achète, stocke et paie ses équipes avant d'encaisser. Plus elle grandit vite, plus son BFR augmente, et plus ses flux d'exploitation peuvent être négatifs alors que tout va bien sur le papier. Le contexte général ne protège pas : la Banque de France décrit pour 2024 des PME et ETI à la [« trésorerie toujours solide »](https://www.banque-france.fr/fr/publications-et-statistiques/publications/la-situation-financiere-des-pme-et-des-eti-en-2024-face-des-perspectives-incertaines-des), tout en prévenant que certaines entreprises fragiles pourraient connaître des difficultés accrues. Une moyenne solide ne dit rien de votre propre calendrier.",
        },
      ],
    },

    {
      label: "Le tableau",
      titre: "Le tableau des flux de trésorerie : le construire et le lire",
      blocs: [
        {
          type: "p",
          texte:
            "Le tableau des flux de trésorerie récapitule, pour un exercice passé, les trois familles de flux et la variation de trésorerie qui en résulte. Il se construit à partir de deux bilans successifs et du compte de résultat.",
        },
        { type: "h3", texte: "Un document utile, rarement obligatoire en PME" },
        {
          type: "p",
          texte:
            "L'[article L123-12 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006219304) définit les comptes annuels comme le bilan, le compte de résultat et une annexe, qui forment un tout indissociable. Le tableau des flux n'en fait pas partie. Les documents de gestion prévisionnelle ne deviennent obligatoires qu'au-delà de seuils : l'[article R232-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041603987) vise les sociétés commerciales d'au moins 300 salariés ou dont le chiffre d'affaires net atteint 18 millions d'euros. L'[article R232-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006263835) leur impose alors notamment un tableau de financement annuel, un plan de financement prévisionnel et un compte de résultat prévisionnel. En dessous, rien ne vous y oblige, et c'est précisément pour cela que beaucoup de PME n'en ont pas.",
        },
        { type: "h3", texte: "Les trois questions à poser au tableau" },
        {
          type: "liste",
          items: [
            "**Le flux d'exploitation est-il positif ?** S'il est négatif deux années de suite, le métier ne finance plus l'entreprise",
            "**Couvre-t-il les investissements ?** Si non, qui a comblé l'écart : un emprunt adapté ou le découvert ?",
            "**Que finance l'endettement nouveau ?** Emprunter pour investir est normal ; emprunter pour payer les fournisseurs est un signal",
          ],
        },
        { type: "h3", texte: "Sa limite : il regarde en arrière" },
        {
          type: "p",
          texte:
            "Un tableau des flux établi en avril sur l'exercice clos en décembre explique une situation vieille de plusieurs mois. Il sert à comprendre, à dialoguer avec la banque, à tirer des leçons. Il ne vous dit pas si vous pourrez payer les salaires en juillet. Pour cela, il faut prévoir.",
        },
      ],
    },

    {
      label: "Anticiper",
      titre: "Prévoir ses flux de trésorerie : le plan de trésorerie mois par mois",
      blocs: [
        {
          type: "p",
          texte:
            "Le plan de trésorerie applique la même logique que le tableau des flux, mais vers l'avant. Bpifrance Création le décrit comme un tableau de tous les encaissements et décaissements prévus, mois par mois, dont le [solde doit rester positif chaque mois](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet). C'est l'outil qui transforme une échéance redoutée en donnée connue.",
        },
        { type: "h3", texte: "Construire le premier plan en quatre temps" },
        {
          type: "liste",
          items: [
            "Partir du solde bancaire réel du jour, découverts compris",
            "Lister les encaissements attendus à la date probable de paiement, pas à la date d'échéance théorique",
            "Lister les décaissements certains : salaires, charges sociales, loyers, échéances d'emprunt, TVA, fournisseurs",
            "Calculer le solde fin de mois, puis le comparer chaque mois au réalisé et corriger",
          ],
        },
        { type: "h3", texte: "Prudence sur les entrées, exhaustivité sur les sorties" },
        {
          type: "p",
          texte:
            "Un plan de trésorerie qui rassure à tort est pire que pas de plan. Les encaissements s'inscrivent à la date où le client paie réellement, pas à celle écrite sur la facture. Les décaissements s'inscrivent tous, y compris ceux qui reviennent une fois par an. Un deuxième scénario, avec le retard du plus gros client ou la perte d'un contrat, montre la marge de sécurité réelle. Pour aller plus loin sur la construction annuelle, notre article sur le [budget de trésorerie](/infos-utiles/budget-de-tresorerie/) détaille la méthode.",
        },
        {
          type: "encadre",
          titre: "La question qui tranche",
          texte:
            "Pouvez-vous dire aujourd'hui, à quelques milliers d'euros près, quel sera votre solde bancaire à la fin de chacun des trois prochains mois ? Si oui, vos flux sont pilotés. Si non, ce n'est pas un problème de rentabilité, c'est un problème de visibilité.",
        },
      ],
    },

    {
      label: "Piloter",
      titre: "Piloter ses flux de trésorerie : les bons réflexes et qui peut vous aider",
      blocs: [
        {
          type: "p",
          texte:
            "Suivre ses flux ne demande pas un logiciel coûteux. Cela demande une discipline : un plan tenu à jour, un rythme de revue et quelques décisions prises à temps. Trois réflexes font l'essentiel du travail.",
        },
        { type: "h3", texte: "Agir sur le BFR avant de chercher un financement" },
        {
          type: "p",
          texte:
            "Relancer les factures dès l'échéance, facturer plus tôt, négocier des acomptes, réduire les stocks dormants : chaque jour gagné sur le cycle d'exploitation libère de la trésorerie sans coût financier. Un crédit de court terme vient ensuite, pour absorber un décalage identifié, pas pour masquer un cycle qui dérive.",
        },
        { type: "h3", texte: "Mettre en regard chaque investissement et son financement" },
        {
          type: "p",
          texte:
            "Avant de signer un bon de commande pour une machine ou un véhicule, regardez son effet sur le plan de trésorerie des douze mois suivants. Un investissement rentable payé comptant peut assécher l'entreprise ; le même, financé sur sa durée d'usage, passe sans tension.",
        },
        { type: "h3", texte: "Séparer les rôles entre comptes et pilotage" },
        {
          type: "p",
          texte:
            "Votre expert-comptable produit des comptes justes et à temps : c'est la base de tout suivi de trésorerie. Construire et animer le plan de trésorerie, préparer les arbitrages et le dialogue bancaire relève du pilotage, qui peut être porté en interne ou par un directeur financier à temps partagé. Notre article [DAF externe ou expert-comptable](/infos-utiles/daf-externe-ou-expert-comptable/) détaille qui fait quoi.",
        },
        {
          type: "p",
          texte:
            "Au cabinet, ce pilotage est porté par [Marjorie Anglade](/marjorie-anglade/), expert-comptable de formation, qui intervient ici en directrice financière externalisée : nous ne tenons pas votre comptabilité, nous travaillons à partir des comptes établis par votre expert-comptable. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord. Si vous voulez d'abord savoir si la trésorerie est vraiment votre point de blocage, commencez par notre [diagnostic d'entreprise](/diagnostic/) : il vous aide à situer la difficulté en quelques minutes.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la définition de la trésorerie d'une entreprise ?",
      r: [
        "La trésorerie est l'ensemble des liquidités dont l'entreprise dispose à un instant donné : soldes bancaires créditeurs, caisse et placements mobilisables immédiatement. La trésorerie nette retire de ce montant les concours bancaires courants, comme les découverts utilisés. Au bilan, elle correspond aussi au fonds de roulement diminué du besoin en fonds de roulement. C'est une photographie ; les flux de trésorerie expliquent comment on y est arrivé.",
      ],
    },
    {
      q: "Comment calculer la trésorerie nette ?",
      r: [
        "Deux calculs doivent donner le même résultat. Le premier : disponibilités moins concours bancaires courants, à partir des relevés et du bilan. Le second : fonds de roulement moins besoin en fonds de roulement. Le fonds de roulement est l'excédent des ressources durables sur les immobilisations ; le BFR correspond aux stocks et créances diminués des dettes à court terme. Un écart entre les deux calculs signale une erreur de classement.",
      ],
    },
    {
      q: "Quelle différence entre flux de trésorerie et résultat ?",
      r: [
        "Le résultat compare les produits et les charges d'un exercice, à la date où ils naissent. Les flux de trésorerie mesurent l'argent effectivement encaissé et décaissé. Les délais de paiement, les stocks, les amortissements et les remboursements d'emprunt créent l'écart. C'est pourquoi une entreprise bénéficiaire peut manquer de trésorerie, et une entreprise déficitaire garder quelque temps un solde bancaire confortable.",
      ],
    },
    {
      q: "Le tableau des flux de trésorerie est-il obligatoire pour une PME ?",
      r: [
        "En règle générale, non. Les comptes annuels comprennent le bilan, le compte de résultat et l'annexe. Des documents de gestion prévisionnelle, dont un tableau de financement et un plan de financement prévisionnel, sont exigés des sociétés commerciales d'au moins 300 salariés ou 18 millions d'euros de chiffre d'affaires net. Pour les autres, c'est un outil de gestion volontaire, souvent demandé par les banques. Votre expert-comptable peut vous préciser votre situation.",
      ],
    },
    {
      q: "Que faire si les flux de trésorerie d'exploitation sont négatifs ?",
      r: [
        "Commencez par en chercher la cause : hausse des créances clients, stock qui gonfle, marge qui se dégrade, ou croissance rapide. Les leviers ne sont pas les mêmes. Relancer les impayés et réduire les stocks libèrent de l'argent vite ; une marge insuffisante demande de revoir prix ou coûts. Un financement de court terme peut absorber un décalage passager, pas corriger un modèle qui consomme durablement plus qu'il ne produit.",
      ],
    },
  ],

  sources: [
    {
      titre: "Le plan de trésorerie dans un projet de création d'entreprise",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet",
    },
    {
      titre: "Capacité d'autofinancement",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/capacite-dautofinancement",
    },
    {
      titre: "Le bilan, le BFR et la trésorerie",
      editeur: "CCI France (Business Builder)",
      url: "https://business-builder.cci.fr/guide-creation/le-previsionnel-financier/le-bilan-le-bfr-et-la-tresorerie",
    },
    {
      titre: "Rapport de l'Observatoire des délais de paiement 2024",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024",
    },
    {
      titre:
        "La situation financière des PME et des ETI en 2024 : face à des perspectives incertaines, des fondamentaux plutôt robustes",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/la-situation-financiere-des-pme-et-des-eti-en-2024-face-des-perspectives-incertaines-des",
    },
    {
      titre: "Article L123-12 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006219304",
    },
    {
      titre: "Article R232-2 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041603987",
    },
    {
      titre: "Article R232-3 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006263835",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2026-12-28",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
