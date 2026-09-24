import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « gestion de trésorerie » (480/mois, KD 9). Secondaires : « gérer sa
 * trésorerie », « gestion de la trésorerie d'entreprise », « tension de trésorerie ».
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite la discipline de gestion (quotidien, encaissements,
 * décaissements, financement court terme, difficultés) et renvoie vers le pilier.
 * Il ne refait pas les articles outils déjà publiés (budget de trésorerie, flux
 * de trésorerie, calcul du BFR) : il les cite.
 *
 * POINTS SENSIBLES
 * - Titre réglementé : Marjorie Anglade est expert-comptable inscrite à l'Ordre,
 *   mais intervient au cabinet en directrice financière externalisée ; le cabinet
 *   ne tient aucune comptabilité. Le texte ne doit jamais laisser entendre le
 *   contraire.
 * - Chapitre « difficultés » : procédures (médiation du crédit, délais fiscaux,
 *   CCSF, mandat ad hoc, conciliation) présentées sans conseil juridique ; renvoi
 *   vers l'expert-comptable et un avocat pour les actes.
 * - Fraude au changement de coordonnées bancaires : évoquée sans aucun chiffre.
 * - Liens internes limités aux articles publiés avant le 22/03/2027.
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "gestion-de-tresorerie",

  motCle: "gestion de trésorerie (480/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "gérer sa trésorerie",
    "gestion de la trésorerie d'entreprise",
    "tension de trésorerie",
    "financement court terme",
  ],

  // 41 / 42
  metaTitle: "Gestion de trésorerie : la méthode en PME",
  // 149 / 150
  metaDescription:
    "Gestion de trésorerie en PME : le rituel hebdomadaire, les encaissements, les paiements, les financements court terme et que faire en cas de tension.",

  h1: "Gestion de trésorerie : piloter l'argent disponible d'une PME semaine après semaine",

  chapo:
    "La gestion de trésorerie consiste à savoir, chaque semaine, combien d'argent l'entreprise a réellement, combien elle aura dans les prochains mois, et à agir avant que le solde ne décide à votre place. Ce n'est ni un tableau Excel ni une affaire de comptable : c'est une routine de dirigeant. Elle tient en quatre gestes. Suivre une position fiable, faire rentrer l'argent plus vite, maîtriser les sorties sans abîmer les fournisseurs, et négocier les financements courts avant d'en avoir besoin. Une entreprise rentable peut manquer de trésorerie ; une entreprise qui gère sa trésorerie voit la tension venir et garde le choix des réponses.",

  essentiel: {
    reponse:
      "La gestion de trésorerie d'une entreprise regroupe l'ensemble des actions qui assurent qu'elle peut payer ses échéances à tout moment : suivi de la position bancaire, prévision des encaissements et décaissements, relance des clients, calendrier des paiements, recours aux crédits à court terme et placement des excédents. Elle se pratique à trois horizons : le jour, pour la position ; le mois, pour le plan de trésorerie ; l'année, pour le budget et les financements. En PME, elle repose sur un rituel hebdomadaire court, tenu par le dirigeant ou son directeur financier, à partir des données de la comptabilité.",
    points: [
      "Trois horizons : position du jour, plan à trois mois, budget annuel",
      "Le poste client est le premier gisement : délais légaux, relances, pénalités de retard",
      "Les paiements se planifient et se sécurisent, ils ne se décalent pas au hasard",
      "Facilité de caisse, découvert, Dailly, affacturage : à négocier avant la tension, pas pendant",
      "En cas de difficulté : banque, médiation du crédit, délais fiscaux et sociaux, le plus tôt possible",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Gestion de trésorerie : de quoi parle-t-on vraiment ?",
      blocs: [
        {
          type: "p",
          texte:
            "La trésorerie, c'est l'argent disponible : les soldes de vos comptes bancaires, moins ce que vous devez déjà à la banque à très court terme. La gestion de trésorerie, c'est tout ce que vous faites pour que ce montant reste suffisant, sans dormir inutilement. **Gérer sa trésorerie, ce n'est pas regarder son compte : c'est savoir ce qu'il affichera dans huit semaines, et pourquoi.**",
        },
        { type: "h3", texte: "Trois horizons, trois outils" },
        {
          type: "tableau",
          entetes: ["Horizon", "Ce que vous pilotez"],
          lignes: [
            ["Le jour et la semaine", "La position de trésorerie : soldes réels, paiements partis, encaissements attendus, dates de valeur"],
            ["Le mois et le trimestre", "Le plan de trésorerie glissant : entrées et sorties prévues, semaine par semaine ou mois par mois"],
            ["L'année", "Le budget de trésorerie, les investissements, les financements à négocier avec la banque"],
          ],
        },
        {
          type: "p",
          texte:
            "Le budget de l'année se construit une fois et se révise ; nous l'avons détaillé dans notre article sur le [budget de trésorerie](/infos-utiles/budget-de-tresorerie/). La lecture comptable des entrées et sorties, par nature d'opération, fait l'objet d'un autre article sur les [flux de trésorerie](/infos-utiles/flux-de-tresorerie/). Ici, nous parlons de la pratique : les décisions qui se prennent chaque semaine, entre deux clôtures.",
        },
        { type: "h3", texte: "Ce que la gestion de trésorerie n'est pas" },
        {
          type: "p",
          texte:
            "Elle n'est pas la comptabilité. Votre expert-comptable enregistre ce qui s'est passé et arrête les comptes ; la gestion de trésorerie regarde devant. Elle n'est pas non plus la recherche du solde maximal : un compte très excédentaire toute l'année signale souvent un investissement reporté ou un financement mal calibré. L'objectif est un solde suffisant, prévisible, et une marge de sécurité connue. Ce regard tourné vers les semaines à venir est le cœur du métier de directeur financier, qu'il soit salarié ou, dans beaucoup de PME, [DAF externalisé](/daf-externalise-toulouse/) à temps partagé.",
        },
      ],
    },

    {
      label: "Les causes",
      titre: "Pourquoi une entreprise rentable manque de trésorerie",
      blocs: [
        {
          type: "p",
          texte:
            "C'est la situation qui surprend le plus de dirigeants : le compte de résultat est bénéficiaire, et pourtant le compte bancaire est à découvert. Le résultat mesure ce que l'entreprise gagne ; la trésorerie mesure quand l'argent arrive. Entre les deux, il y a des décalages, et ce sont eux qu'il faut gérer.",
        },
        { type: "h3", texte: "Le besoin en fonds de roulement" },
        {
          type: "p",
          texte:
            "Vous payez vos fournisseurs et vos salaires avant d'être payé par vos clients, et vous stockez avant de vendre. Ce décalage immobilise de l'argent en permanence : c'est le besoin en fonds de roulement. Plus l'activité grandit, plus il grandit avec elle. Si vous ne l'avez jamais chiffré, commencez par notre méthode de [calcul du BFR](/infos-utiles/calcul-bfr/) : c'est le chiffre qui explique la plupart des tensions.",
        },
        { type: "h3", texte: "Les retards de paiement des clients" },
        {
          type: "p",
          texte:
            "Un client qui paie en retard vous fait crédit sans vous le demander. Le phénomène n'a rien de marginal : selon le [rapport 2024 de l'Observatoire des délais de paiement de la Banque de France](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024), le retard moyen de paiement atteignait 13,6 jours au quatrième trimestre 2024, et les PME auraient disposé de 15 milliards d'euros de trésorerie supplémentaire si leurs clients avaient payé à l'heure.",
        },
        { type: "h3", texte: "Les échéances concentrées et les investissements autofinancés" },
        {
          type: "p",
          texte:
            "TVA, charges sociales, acomptes d'impôt, primes de fin d'année, loyer trimestriel : certaines sorties tombent le même mois. Ajoutez une machine payée comptant alors qu'elle servira dix ans, et la trésorerie d'exploitation finance un investissement qu'un emprunt aurait dû porter. Ce sont des tensions prévisibles, donc évitables.",
        },
      ],
    },

    {
      label: "Le quotidien",
      titre: "Gérer sa trésorerie au quotidien : le rituel hebdomadaire",
      blocs: [
        {
          type: "p",
          texte:
            "La gestion de trésorerie d'une PME ne demande pas un service dédié. Elle demande un rendez-vous fixe, court, avec des données à jour. Nous recommandons une demi-heure par semaine, toujours le même jour, avec la personne qui suit les règlements et, idéalement, le dirigeant.",
        },
        { type: "h3", texte: "Partir d'une position fiable" },
        {
          type: "p",
          texte:
            "La position de trésorerie additionne les soldes de tous les comptes, retranche les paiements déjà émis mais pas encore débités, et ajoute les encaissements certains. Un solde bancaire lu tel quel ment souvent : un virement de salaires programmé pour demain ne s'y voit pas encore. Le rapprochement régulier entre la banque et la comptabilité évite ces angles morts.",
        },
        { type: "h3", texte: "Les cinq questions du rendez-vous" },
        {
          type: "liste",
          items: [
            "**Où en sommes-nous ?** La position réelle, tous comptes confondus",
            "**Qui nous doit de l'argent en retard ?** La liste des factures échues, par montant, avec la prochaine action pour chacune",
            "**Que devons-nous payer d'ici huit semaines ?** Les grosses échéances, en particulier fiscales et sociales",
            "**Qu'est-ce qui a changé depuis la semaine dernière ?** Commande gagnée ou perdue, client en difficulté, investissement avancé",
            "**Le point bas prévu est-il couvert ?** Si non, quelle action, décidée par qui, avant quelle date",
          ],
        },
      ],
    },

    {
      label: "Les encaissements",
      titre: "Accélérer les encaissements : le poste client, premier gisement",
      blocs: [
        {
          type: "p",
          texte:
            "Avant de chercher un financement, cherchez l'argent qui vous est déjà dû. Le poste client est presque toujours le levier le plus rapide et le moins coûteux d'une gestion de trésorerie sérieuse.",
        },
        { type: "h3", texte: "Connaître et appliquer le cadre légal" },
        {
          type: "p",
          texte:
            "Entre professionnels, l'[article L441-10 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392) fixe le délai de paiement à trente jours après réception de la marchandise ou exécution de la prestation, à défaut d'accord. Le délai convenu ne peut pas dépasser soixante jours après la date de facture, ou quarante-cinq jours fin de mois si le contrat le prévoit. En cas de retard, des pénalités sont dues, par défaut au taux de refinancement de la Banque centrale européenne majoré de dix points, ainsi qu'une indemnité forfaitaire pour frais de recouvrement, fixée à 40 euros par l'[article D441-5](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043197457).",
        },
        { type: "h3", texte: "Facturer vite, relancer tôt" },
        {
          type: "liste",
          items: [
            "Facturer le jour de la livraison ou de la fin de prestation, pas en fin de mois",
            "Demander un acompte à la commande sur les affaires longues ou sur mesure",
            "Relancer avant l'échéance sur les grosses factures, pour vérifier que rien ne bloque la validation",
            "Appeler le lendemain de l'échéance, puis écrire, puis mettre en demeure : un calendrier fixe, connu de toute l'équipe",
            "Faire remonter les litiges au commercial concerné : une facture contestée ne se paie pas",
          ],
        },
      ],
    },

    {
      label: "Les décaissements",
      titre: "Maîtriser les décaissements sans abîmer ses fournisseurs",
      blocs: [
        {
          type: "p",
          texte:
            "La tentation est connue : quand le solde baisse, on décale le paiement d'un fournisseur. Fait au hasard, c'est coûteux. Le fournisseur se protège, raccourcit vos délais, et vous perdez de la trésorerie et une relation.",
        },
        { type: "h3", texte: "Planifier plutôt que décaler" },
        {
          type: "p",
          texte:
            "Un échéancier des paiements, tenu avec le plan de trésorerie, permet de regrouper les règlements à dates fixes, de payer à l'échéance convenue, ni avant ni après, et de négocier à froid. Demander un étalement à un fournisseur trois semaines avant l'échéance, avec un calendrier précis, passe beaucoup mieux qu'un retard constaté.",
        },
        { type: "h3", texte: "Sécuriser les paiements" },
        {
          type: "p",
          texte:
            "La gestion de trésorerie inclut la sécurité des virements. Deux règles simples limitent le risque de fraude : une double validation au-delà d'un montant fixé, et la vérification de tout changement de coordonnées bancaires d'un fournisseur par un appel à votre interlocuteur habituel, au numéro que vous connaissez déjà, jamais à celui indiqué dans le message qui annonce le changement.",
        },
      ],
    },

    {
      label: "Le financement",
      titre: "Financer une tension de trésorerie : les outils à court terme",
      blocs: [
        {
          type: "p",
          texte:
            "Certaines tensions sont structurelles et saisonnières : une activité qui achète au printemps et vend à l'automne aura toujours un creux. Elles se financent. Bpifrance Création décrit les principaux [crédits bancaires à court terme](https://bpifrance-creation.fr/encyclopedie/financements/credits-a-court-terme/credits-bancaires-a-court-terme) ouverts aux entreprises.",
        },
        {
          type: "tableau",
          entetes: ["Outil", "À quoi il sert"],
          lignes: [
            ["Facilité de caisse", "Couvrir quelques jours de décalage dans le mois, par exemple autour de la paie"],
            ["Découvert autorisé", "Absorber un besoin récurrent sur une période définie, jusqu'à un an"],
            ["Crédit de campagne", "Financer une activité saisonnière, sur plusieurs mois"],
            ["Escompte", "Obtenir le paiement anticipé de créances matérialisées par des effets de commerce"],
            ["Cession Dailly", "Recevoir une avance sur des factures clients, sans que le client en soit nécessairement informé"],
            ["Affacturage", "Céder ses factures à un organisme spécialisé qui avance les fonds et assure le recouvrement"],
          ],
        },
        { type: "h3", texte: "Négocier avant d'en avoir besoin" },
        {
          type: "p",
          texte:
            "Une ligne de trésorerie se négocie quand les comptes sont bons et le plan de trésorerie clair. Demandée en urgence, avec un solde déjà négatif, elle coûte plus cher ou n'est pas accordée. Présenter chaque année à votre banquier le budget et le point bas prévu fait partie de la gestion de trésorerie, au même titre que la relance des clients.",
        },
        { type: "h3", texte: "Ne pas financer du long avec du court" },
        {
          type: "p",
          texte:
            "Un découvert permanent qui finance une machine ou un rachat de fonds de commerce est un signal d'alerte : l'entreprise porte un besoin durable avec un outil fait pour quelques semaines. La bonne réponse est alors un emprunt à moyen terme ou un renforcement des fonds propres, à discuter avec votre banquier et votre expert-comptable.",
        },
      ],
    },

    {
      label: "Les difficultés",
      titre: "Tension de trésorerie : les recours quand elle devient difficulté",
      blocs: [
        {
          type: "p",
          texte:
            "Quand le plan de trésorerie montre un trou que les leviers habituels ne comblent pas, le pire réflexe est d'attendre. Plusieurs dispositifs publics existent, et ils fonctionnent d'autant mieux qu'ils sont sollicités tôt. Bpifrance Création les récapitule dans sa fiche [que faire face à des problèmes de trésorerie](https://bpifrance-creation.fr/moment-de-vie/que-faire-face-a-problemes-tresorerie).",
        },
        { type: "h3", texte: "La médiation du crédit" },
        {
          type: "p",
          texte:
            "Si votre banque refuse un financement ou réduit une ligne existante, la [médiation du crédit de la Banque de France](https://www.banque-france.fr/fr/a-votre-service/entreprises/mediation-credit) peut intervenir. Le service est gratuit et confidentiel, ouvert aux entreprises de toute taille. Le dossier est admis dans les 48 heures, et la banque dispose ensuite de cinq jours pour revoir sa position.",
        },
        { type: "h3", texte: "Les délais fiscaux et sociaux" },
        {
          type: "p",
          texte:
            "Une société qui traverse des difficultés ponctuelles peut [demander des délais de paiement à l'administration fiscale](https://entreprendre.service-public.gouv.fr/vosdroits/F38095), auprès de son service des impôts des entreprises, à condition d'être à jour de ses déclarations. Pour des dettes fiscales et sociales plus lourdes, la commission des chefs des services financiers (CCSF) peut accorder un plan d'étalement global.",
        },
        { type: "h3", texte: "Les procédures préventives" },
        {
          type: "p",
          texte:
            "Le mandat ad hoc et la conciliation, ouverts auprès du tribunal de commerce, permettent de négocier avec les créanciers dans un cadre confidentiel. Ce sont des actes juridiques : ils se préparent avec un avocat et votre expert-comptable. Notre rôle, dans ces situations, se limite à fournir un plan de trésorerie fiable, qui est la première pièce demandée partout.",
        },
        {
          type: "encadre",
          titre: "La question qui tranche",
          texte:
            "Pouvez-vous dire aujourd'hui à quelle semaine se situera votre point bas de trésorerie dans les trois prochains mois, et de combien ? Si oui, vous gérez votre trésorerie. Si non, c'est le premier outil à mettre en place, avant tout financement.",
        },
      ],
    },

    {
      label: "L'organisation",
      titre: "Organiser la gestion de la trésorerie d'entreprise dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME de 10 à 250 salariés, la trésorerie repose souvent sur une seule personne, fréquemment le dirigeant lui-même, qui la suit de tête. Cela tient tant que l'activité est simple. Dès que les clients, les sites ou les échéances se multiplient, il faut répartir les rôles.",
        },
        {
          type: "liste",
          items: [
            "**Le service comptable ou l'assistante de gestion** : saisie à jour, rapprochement bancaire, relances de premier niveau",
            "**L'expert-comptable** : comptes fiables et à temps, situations intermédiaires, déclarations",
            "**Le directeur financier, salarié ou externalisé** : plan de trésorerie, relation bancaire, arbitrages de financement",
            "**Le dirigeant** : les décisions, sur la base d'une lecture claire et hebdomadaire",
          ],
        },
        {
          type: "p",
          texte:
            "Beaucoup de PME n'ont pas de quoi occuper un directeur financier à plein temps. C'est le cas que nous traitons avec la direction financière à temps partagé : un volume défini, un point régulier, et des outils que votre équipe apprend à tenir. La différence entre ce rôle et celui de votre expert-comptable est détaillée dans notre comparatif [DAF externe ou expert-comptable](/infos-utiles/daf-externe-ou-expert-comptable/).",
        },
        {
          type: "p",
          texte:
            "Au cabinet, ce travail est porté par [Marjorie Anglade](/marjorie-anglade/), expert-comptable diplômée et inscrite à l'Ordre, qui intervient ici comme directrice financière à temps partagé, à côté de votre expert-comptable et non à sa place. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord. Si la tension de trésorerie révèle un problème qui n'est pas financier, une marge rognée par l'organisation de la production par exemple, elle fait appel à un collègue sur ce point précis, et seulement si le sujet l'exige.",
        },
        {
          type: "p",
          texte:
            "Pour savoir si votre gestion de trésorerie est le vrai sujet, ou le symptôme d'un autre, commencez par notre [diagnostic d'entreprise](/diagnostic/) : quelques minutes pour situer le blocage, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la gestion de trésorerie en entreprise ?",
      r: [
        "C'est l'ensemble des actions qui garantissent qu'une entreprise peut payer ses échéances à tout moment : suivre la position bancaire réelle, prévoir les entrées et sorties des prochains mois, relancer les clients, planifier les paiements, négocier les crédits à court terme et placer les excédents. Elle se distingue de la comptabilité, qui enregistre le passé. En PME, elle repose sur un plan de trésorerie glissant et un point hebdomadaire court.",
      ],
    },
    {
      q: "Comment améliorer rapidement sa trésorerie ?",
      r: [
        "Le levier le plus rapide est presque toujours le poste client : facturer dès la livraison, relancer dès le lendemain de l'échéance, traiter les litiges qui bloquent les paiements et demander des acomptes sur les affaires longues. Viennent ensuite la planification des paiements fournisseurs, la revue des dépenses récurrentes et, si le besoin est saisonnier, une ligne de crédit à court terme négociée avec la banque avant la tension.",
      ],
    },
    {
      q: "Quels sont les délais de paiement légaux entre entreprises ?",
      r: [
        "Selon l'article L441-10 du Code de commerce, le délai est de trente jours après réception de la marchandise ou exécution de la prestation, à défaut d'accord. Les parties peuvent convenir d'un délai plus long, dans la limite de soixante jours après la date de facture, ou de quarante-cinq jours fin de mois si le contrat le prévoit. Tout retard entraîne des pénalités et une indemnité forfaitaire de 40 euros.",
      ],
    },
    {
      q: "Quelle différence entre facilité de caisse et découvert autorisé ?",
      r: [
        "La facilité de caisse couvre un décalage de quelques jours dans le mois, par exemple autour du versement des salaires : le compte doit redevenir positif le reste du temps. Le découvert autorisé couvre un besoin plus durable, sur une période définie qui peut aller jusqu'à un an. Les deux se négocient avec la banque, pour un montant plafonné, et donnent lieu à des intérêts.",
      ],
    },
    {
      q: "Que faire si ma banque refuse un financement de trésorerie ?",
      r: [
        "Demandez d'abord les raisons du refus et vérifiez que votre dossier comporte un plan de trésorerie crédible. Si le refus persiste, la médiation du crédit de la Banque de France peut être saisie en ligne. Le service est gratuit et confidentiel : le dossier est admis sous 48 heures, puis la banque dispose de cinq jours pour revoir sa position. Informez votre expert-comptable de la démarche.",
      ],
    },
  ],

  sources: [
    {
      titre: "Rapport de l'Observatoire des délais de paiement 2024",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024",
    },
    {
      titre: "Médiation du crédit",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/a-votre-service/entreprises/mediation-credit",
    },
    {
      titre: "Article L441-10 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392",
    },
    {
      titre: "Article D441-5 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043197457",
    },
    {
      titre: "Crédits bancaires à court terme",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/financements/credits-a-court-terme/credits-bancaires-a-court-terme",
    },
    {
      titre: "Que faire face à des problèmes de trésorerie ?",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/moment-de-vie/que-faire-face-a-problemes-tresorerie",
    },
    {
      titre: "Obtenir des délais de paiement auprès de l'administration fiscale (société)",
      editeur: "Service Public Entreprendre",
      url: "https://entreprendre.service-public.gouv.fr/vosdroits/F38095",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-03-22",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: true,
};
