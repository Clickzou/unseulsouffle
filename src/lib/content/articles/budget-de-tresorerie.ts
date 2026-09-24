import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « budget de trésorerie » (590/mois, KD 21). Secondaires : « plan de
 * trésorerie », « budget de la trésorerie » (590).
 *
 * L'intention « DAF externalisé » appartient au pilier /daf-externalise-toulouse/ :
 * cet article traite l'outil (construire et tenir un budget de trésorerie) et
 * renvoie vers le pilier.
 *
 * POINTS SENSIBLES
 * - Titre réglementé : le cabinet ne tient aucune comptabilité. Marjorie Anglade
 *   est expert-comptable inscrite, mais intervient ici en directrice financière
 *   externalisée. Le texte ne doit jamais laisser entendre une tenue de comptes.
 * - Le chapitre « Exemple » repose sur une PME FICTIVE aux montants ronds,
 *   présentée comme telle : ce ne sont pas des statistiques. À faire valider.
 * - Liens internes limités aux articles publiés avant le 30/11/2026
 *   (calcul-bfr, seuil-de-rentabilite, daf-externe-ou-expert-comptable).
 * Sources ouvertes le 24/09/2026.
 */
export const article: Article = {
  slug: "budget-de-tresorerie",

  motCle: "budget de trésorerie (590/mois, KD 21) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "plan de trésorerie",
    "budget de la trésorerie (590/mois)",
  ],

  // 41 / 42
  metaTitle: "Budget de trésorerie : méthode et exemple",
  // 144 / 150
  metaDescription:
    "Construire un budget de trésorerie mois par mois : les lignes à prévoir, les pièges de la TVA et des délais clients, et comment le tenir à jour.",

  h1: "Budget de trésorerie : le construire, le lire et le tenir à jour",

  chapo:
    "Un budget de trésorerie prévoit, mois par mois, tout l'argent qui entrera sur vos comptes et tout celui qui en sortira, pour savoir à l'avance quand le solde passera sous la ligne de flottaison. Ce n'est ni un compte de résultat ni un exercice réservé aux grandes entreprises : c'est l'outil qui permet à un dirigeant de PME de décider d'un recrutement, d'un investissement ou d'une négociation bancaire avant que la tension n'arrive, et non après. Il se construit en une ou deux journées à partir de données que vous avez déjà. Il ne vaut que s'il est tenu : comparé chaque mois au réalisé, et prolongé pour garder toujours plusieurs mois de visibilité devant vous.",

  essentiel: {
    reponse:
      "Le budget de trésorerie, aussi appelé plan de trésorerie prévisionnel, est un tableau qui ventile mois par mois les encaissements et les décaissements prévus par l'entreprise, en montants TTC et à la date réelle du paiement, pas à celle de la facture. Le solde du mois et le solde cumulé indiquent à l'avance les mois de tension et le besoin de financement à couvrir. Aucune loi ne l'impose à une PME de moins de 300 salariés et de moins de 18 millions d'euros de chiffre d'affaires, mais c'est l'outil de décision financière le plus utile au dirigeant.",
    points: [
      "Tout est compté en TTC, au mois où l'argent bouge réellement",
      "Le point de départ est le solde bancaire réel, pas le résultat comptable",
      "Les pièges classiques : TVA, charges sociales, échéances annuelles, saisonnalité",
      "Un budget utile se compare chaque mois au réalisé et se prolonge d'un mois",
      "Son intérêt : décider avant la tension, pas la constater sur le relevé",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qu'est-ce qu'un budget de trésorerie ?",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création le définit simplement : c'est [« un tableau sur lequel sont portés tous les encaissements et décaissements que vous prévoyez »](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet), ventilés mois par mois. **Le budget de trésorerie ne répond pas à la question « gagnons-nous de l'argent ? » mais à la question « aurons-nous l'argent au moment où il faut payer ? ».** Une entreprise rentable peut manquer de trésorerie, et une entreprise en perte peut encore payer ses factures pendant des mois.",
        },
        { type: "h3", texte: "Budget de trésorerie, plan de trésorerie, budget de la trésorerie" },
        {
          type: "p",
          texte:
            "Les trois expressions désignent le même outil. On parle plutôt de plan de trésorerie dans un dossier de création ou de financement, et de budget de trésorerie quand il s'inscrit dans le budget annuel de l'entreprise : il vient alors en dernier, parce qu'il traduit en flux d'argent le budget des ventes, celui des achats, celui des investissements et celui du financement. Le mot compte peu. Ce qui compte, c'est la maille mensuelle et la règle de la date de paiement.",
        },
        { type: "h3", texte: "Ce qui le distingue du compte de résultat" },
        {
          type: "tableau",
          entetes: ["Compte de résultat prévisionnel", "Budget de trésorerie"],
          lignes: [
            ["Mesure la richesse créée : produits moins charges", "Mesure l'argent disponible : encaissements moins décaissements"],
            ["Montants hors taxes", "Montants TTC pour les opérations soumises à la TVA"],
            ["Une vente compte à la date de la facture", "Une vente compte au mois où le client paie"],
            ["Un investissement pèse par l'amortissement, sur plusieurs années", "Un investissement pèse en totalité au mois du paiement"],
            ["Un emprunt n'y apparaît que par ses intérêts", "Un emprunt apparaît à son versement, puis à chaque échéance, capital compris"],
            ["Lu une fois par an, à la clôture", "Lu chaque mois, et mis à jour"],
          ],
        },
      ],
    },

    {
      label: "Pourquoi",
      titre: "Pourquoi un budget de trésorerie change la manière de décider",
      exergue: "La tension de trésorerie est rarement une surprise pour celui qui tient un budget. Elle l'est presque toujours pour celui qui n'en a pas.",
      blocs: [
        {
          type: "p",
          texte:
            "Sans budget, la trésorerie se pilote au solde bancaire : on regarde le compte le matin, on décale un fournisseur quand il baisse. C'est une conduite au rétroviseur. Le budget de trésorerie inverse la logique : il annonce la tension trois ou six mois à l'avance, quand il reste encore des options pour la traiter. C'est ce que nous proposons en premier dans une mission de [DAF externalisé](/daf-externalise-toulouse/), parce que c'est l'outil qui change le plus vite la qualité des décisions.",
        },
        { type: "h3", texte: "Un contexte qui ne pardonne pas l'improvisation" },
        {
          type: "p",
          texte:
            "Les données de la Banque de France rappellent que la marge d'erreur est mince. À fin juillet 2026, elle recensait [70 605 défaillances d'entreprises en cumul sur douze mois](https://www.banque-france.fr/fr/statistiques/entreprises/defaillances-dentreprises-2026-07). Et les retards de paiement pèsent directement sur la trésorerie des PME : selon le [rapport 2024 de l'Observatoire des délais de paiement](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024), sans ces retards, les PME auraient disposé de 15 milliards d'euros de trésorerie supplémentaire en 2024.",
        },
        { type: "h3", texte: "Obligatoire pour les grandes, utile pour toutes" },
        {
          type: "p",
          texte:
            "Le Code de commerce n'impose des documents de gestion prévisionnelle, dont un plan de financement prévisionnel et un compte de résultat prévisionnel, qu'aux sociétés commerciales d'au moins [300 salariés ou 18 millions d'euros de chiffre d'affaires net](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041603987), selon l'[article L232-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006228895) et son décret d'application. Une PME de 10 à 250 salariés n'y est donc généralement pas tenue. Ce n'est pas une raison pour s'en passer : la loi impose le document aux entreprises qui ont déjà un directeur financier, pas à celles qui en auraient le plus besoin.",
        },
      ],
    },

    {
      label: "Méthode",
      titre: "Construire le budget de la trésorerie en cinq étapes",
      blocs: [
        {
          type: "p",
          texte:
            "La méthode tient en cinq étapes. Un tableur suffit : un budget de trésorerie n'a pas besoin d'un logiciel, il a besoin de données justes et d'une personne qui le tient.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Partir du solde réel.** Le solde bancaire du premier jour, tous comptes confondus, découverts compris. Jamais le résultat comptable.",
            "**Lister les encaissements.** Ventes encaissées selon les délais réels de vos clients, pas selon vos conditions générales. Puis les autres entrées : subventions, remboursements de TVA, apports, emprunts.",
            "**Lister les décaissements.** Fournisseurs, salaires, charges sociales, loyers, TVA, impôts, échéances d'emprunt, investissements. Chacun au mois où il sera payé.",
            "**Calculer les soldes.** Solde du mois, puis solde cumulé. Le mois où le cumulé passe sous votre seuil de sécurité est le mois à préparer dès aujourd'hui.",
            "**Écrire les hypothèses.** À côté du tableau, une ligne par hypothèse : délai client retenu, hausse de prix, recrutement prévu. Sans elles, personne ne pourra relire le budget dans trois mois.",
          ],
        },
        { type: "h3", texte: "Quel horizon, quelle maille" },
        {
          type: "p",
          texte:
            "La maille mensuelle convient à la plupart des PME, sur un horizon de douze mois. Quand la trésorerie est tendue, on ajoute un plan à la semaine sur les huit à treize semaines qui viennent : c'est là que se joue le choix entre payer un fournisseur le 10 ou le 25. Les deux se complètent, le premier pour décider, le second pour exécuter.",
        },
        { type: "h3", texte: "Les délais clients, hypothèse la plus sensible" },
        {
          type: "p",
          texte:
            "Entre entreprises, l'[article L441-10 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392) plafonne le délai de paiement convenu à soixante jours après la date de facture, ou quarante-cinq jours fin de mois si le contrat le prévoit, et fixe à trente jours le délai applicable à défaut d'accord. Votre budget, lui, doit retenir le délai constaté. Si un client important paie habituellement avec trois semaines de retard, c'est cette date qui entre dans le tableau. La mécanique qui relie délais clients, stocks et délais fournisseurs est détaillée dans notre article sur le [calcul du BFR](/infos-utiles/calcul-bfr/).",
        },
      ],
    },

    {
      label: "Les lignes",
      titre: "Plan de trésorerie : les lignes que l'on oublie",
      blocs: [
        {
          type: "p",
          texte:
            "Un budget de trésorerie se trompe rarement sur le chiffre d'affaires. Il se trompe sur le calendrier des sorties, parce que les grosses échéances ne tombent pas au rythme de l'activité. Voici les lignes qui créent le plus d'écarts.",
        },
        {
          type: "tableau",
          entetes: ["Ligne", "Le piège à éviter"],
          lignes: [
            ["Ventes", "Les porter au mois de la facture et non au mois du paiement réel du client"],
            ["TVA", "Oublier que la TVA collectée n'est pas à vous : elle ressort au mois de la déclaration"],
            ["Salaires et charges sociales", "Porter les charges sociales au mois de la paie au lieu du mois de leur échéance"],
            ["Échéances annuelles", "Omettre assurances, taxes locales, primes, régularisations : elles tombent en une fois"],
            ["Emprunts", "N'inscrire que les intérêts : c'est l'échéance entière, capital compris, qui sort du compte"],
            ["Investissements", "Les lisser comme un amortissement alors qu'ils se paient souvent en une ou deux fois"],
            ["Saisonnalité", "Diviser le chiffre d'affaires annuel par douze au lieu de reprendre le profil des années passées"],
          ],
        },
        { type: "h3", texte: "La TVA, première source d'écart" },
        {
          type: "p",
          texte:
            "Bpifrance Création rappelle que chaque flux se porte [en TTC pour les opérations assujetties à la TVA](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet). Il faut donc prévoir la ligne de reversement. Au régime réel normal, la déclaration est [mensuelle ou trimestrielle et se dépose au cours du mois qui suit](https://www.impots.gouv.fr/professionnel/les-regimes-dimposition-la-tva) la période concernée. Au régime simplifié, deux acomptes tombent en juillet et en décembre, égaux à 55 % puis 40 % de la TVA due au titre de l'année précédente, avant la régularisation annuelle : deux mois où la sortie peut surprendre.",
        },
        { type: "h3", texte: "Les sorties qui ne ressemblent pas à l'activité" },
        {
          type: "p",
          texte:
            "Une prime de fin d'année, une échéance d'assurance, un acompte d'impôt : ces montants ne dépendent pas des ventes du mois. Le plus simple est de reprendre les relevés bancaires des douze derniers mois, ligne par ligne, et de repérer tout ce qui ne revient pas chaque mois. C'est fastidieux une fois, puis le budget s'en souvient pour vous.",
        },
      ],
    },

    {
      label: "Exemple",
      titre: "Exemple de budget de trésorerie : lire un mois de tension",
      blocs: [
        {
          type: "p",
          texte:
            "Prenons une PME fictive de négoce, qui dispose de 80 000 euros sur ses comptes à la fin avril et d'un chiffre d'affaires régulier. Les montants sont ronds et inventés pour l'illustration ; seul le raisonnement compte.",
        },
        { type: "h3", texte: "Ce que dit le compte de résultat" },
        {
          type: "p",
          texte:
            "L'entreprise est rentable. En avril, elle signe un gros client et prévoit une hausse d'activité. Elle achète un stock supplémentaire en avril, payable en mai. Le compte de résultat de mai sera bon : les ventes progressent.",
        },
        { type: "h3", texte: "Ce que dit le budget de trésorerie" },
        {
          type: "p",
          texte:
            "Le nouveau client paie à soixante jours : ses premières factures d'avril ne seront encaissées qu'en juin. En mai, le stock est payé, les salaires aussi, la TVA d'avril est reversée, et l'échéance annuelle d'assurance tombe. Le solde du mois est négatif de 60 000 euros, et le solde cumulé tombe de 80 000 à 20 000 euros, sous le seuil de sécurité que le dirigeant s'est fixé à un mois de charges fixes. **La croissance est une bonne nouvelle pour le compte de résultat et une dépense pour la trésorerie.**",
        },
        { type: "h3", texte: "Ce que le dirigeant peut encore faire en février" },
        {
          type: "p",
          texte:
            "Le contrat se négocie depuis février. Si le dirigeant intègre ce scénario au budget dès ce moment-là, le creux de mai lui laisse trois mois pour agir : négocier un acompte à la commande avec le nouveau client, étaler l'achat de stock, demander à la banque une ligne de court terme pendant que les comptes sont bons. Vu fin mai sur le relevé, il ne reste que le découvert et les reports de paiement. C'est toute la différence entre un budget de trésorerie et un solde bancaire. Si vous voulez savoir à partir de quel chiffre d'affaires ce type de pari devient rentable, notre article sur le [seuil de rentabilité](/infos-utiles/seuil-de-rentabilite/) donne la méthode.",
        },
      ],
    },

    {
      label: "Suivi",
      titre: "Faire vivre le budget de trésorerie mois après mois",
      blocs: [
        {
          type: "p",
          texte:
            "Un budget de trésorerie construit en janvier et rangé dans un dossier ne sert à rien en avril. Sa valeur vient de la comparaison régulière entre ce qui était prévu et ce qui s'est passé. Bpifrance Création souligne d'ailleurs que le plan permet de connaître [« le solde de trésorerie du mois, le solde cumulé d'un mois sur l'autre »](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet) : encore faut-il le relire.",
        },
        { type: "h3", texte: "Le prévu et le réalisé côte à côte" },
        {
          type: "p",
          texte:
            "Chaque mois, on remplace la colonne prévisionnelle du mois écoulé par les montants réels, relevés bancaires à l'appui, et on regarde les écarts ligne par ligne. Un écart ponctuel se note. Un écart qui se répète signale une hypothèse fausse, et c'est elle qu'il faut corriger pour les mois suivants, pas seulement le chiffre.",
        },
        { type: "h3", texte: "Un budget glissant" },
        {
          type: "p",
          texte:
            "Une fois le mois clos, on ajoute un mois au bout du tableau. Le dirigeant garde ainsi toujours la même profondeur de visibilité, au lieu d'un budget qui se raccourcit jusqu'à décembre et laisse un angle mort sur le début de l'année suivante.",
        },
        { type: "h3", texte: "Qui le tient, et avec qui" },
        {
          type: "p",
          texte:
            "Le budget se nourrit de la comptabilité, des carnets de commandes et des échéanciers. Il gagne à s'appuyer sur des situations intermédiaires produites à temps par votre expert-comptable, qui n'a pas à tenir le budget à votre place : les rôles de chacun sont détaillés dans notre article [DAF externe ou expert-comptable](/infos-utiles/daf-externe-ou-expert-comptable/). En interne, une personne est responsable de la mise à jour, et le dirigeant le lit à date fixe.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Quand le budget de trésorerie annonce une tension",
      blocs: [
        {
          type: "p",
          texte:
            "Le budget ne résout rien à lui seul : il donne du temps. Face à un creux annoncé, les options se classent de la moins coûteuse à la plus coûteuse.",
        },
        {
          type: "liste",
          items: [
            "**Accélérer les encaissements** : factures émises le jour de la livraison, relances à date fixe, acomptes à la commande sur les gros contrats",
            "**Décaler ce qui peut l'être** sans abîmer la relation : un investissement non urgent, une commande de stock fractionnée",
            "**Négocier avant d'en avoir besoin** : une ligne de court terme se discute mieux avec des comptes sains et un budget en main qu'avec un découvert déjà dépassé",
            "**Revoir la marge** si le creux revient chaque année : le problème n'est alors plus le calendrier, mais le modèle",
          ],
        },
        { type: "h3", texte: "Ce que nous faisons, et ce que nous ne faisons pas" },
        {
          type: "p",
          texte:
            "Au cabinet, c'est [Marjorie Anglade](/marjorie-anglade/) qui porte le pilotage financier, en directrice financière à temps partagé : elle construit le budget de trésorerie avec vous, le relie à vos tableaux de bord et vous prépare au rendez-vous bancaire. Nous ne tenons pas votre comptabilité : le travail se fait à partir des comptes établis par votre expert-comptable. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord.",
        },
        {
          type: "encadre",
          titre: "La question qui tranche",
          texte:
            "Pouvez-vous dire aujourd'hui, à quelques milliers d'euros près, le solde de vos comptes à la fin du troisième mois ? Si oui, votre budget de trésorerie fait son travail. Sinon, c'est le premier outil à mettre en place.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si votre difficulté est financière, commerciale ou d'organisation, commencez par le [diagnostic d'entreprise](/diagnostic/) : quelques minutes pour situer le blocage avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre un budget de trésorerie et un plan de trésorerie ?",
      r: [
        "Sur le fond, aucune. Les deux expressions désignent un tableau qui ventile mois par mois les encaissements et les décaissements prévus. On parle plus souvent de plan de trésorerie dans un dossier de création ou de financement, et de budget de trésorerie lorsqu'il s'inscrit dans la gestion budgétaire annuelle de l'entreprise, à la suite des budgets des ventes, des achats et des investissements.",
      ],
    },
    {
      q: "Faut-il établir un budget de trésorerie en HT ou en TTC ?",
      r: [
        "En TTC pour toutes les opérations soumises à la TVA, car c'est le montant qui entre ou sort réellement du compte bancaire. En contrepartie, il faut prévoir une ligne de reversement de TVA au mois où la déclaration est payée, et une ligne de remboursement si l'entreprise est en crédit de TVA. Les salaires, eux, ne portent pas de TVA et s'inscrivent pour leur montant net versé.",
      ],
    },
    {
      q: "Sur quelle durée faut-il faire un budget de trésorerie ?",
      r: [
        "Douze mois en maille mensuelle couvrent les besoins de la plupart des PME. Le budget doit être glissant : chaque mois clos, on ajoute un mois au bout, pour garder toujours la même profondeur de visibilité. En période de tension, on le complète par un plan hebdomadaire sur les huit à treize semaines à venir, qui permet de choisir la date de chaque paiement.",
      ],
    },
    {
      q: "Un budget de trésorerie est-il obligatoire pour une PME ?",
      r: [
        "Non, dans la plupart des cas. Le Code de commerce impose des documents de gestion prévisionnelle aux sociétés commerciales d'au moins 300 salariés ou 18 millions d'euros de chiffre d'affaires net. En dessous, rien n'oblige à en tenir un. En pratique, la banque en demande souvent un pour accorder un financement, et c'est surtout l'outil qui permet au dirigeant d'anticiper une tension plutôt que de la subir.",
      ],
    },
    {
      q: "Mon expert-comptable peut-il faire mon budget de trésorerie ?",
      r: [
        "Oui, beaucoup de cabinets comptables proposent des prévisionnels. La question est celle du suivi : un budget utile se met à jour chaque mois, se confronte au réalisé et s'appuie sur des informations que seul le dirigeant détient, comme une commande en discussion ou un recrutement envisagé. Selon votre organisation, ce suivi est assuré par l'expert-comptable, par une personne en interne ou par un directeur financier à temps partagé.",
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
      titre: "Défaillances d'entreprises - 2026-07",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/statistiques/entreprises/defaillances-dentreprises-2026-07",
    },
    {
      titre: "Rapport de l'Observatoire des délais de paiement 2024",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024",
    },
    {
      titre: "Article L232-2 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006228895",
    },
    {
      titre: "Article R232-2 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041603987",
    },
    {
      titre: "Article L441-10 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392",
    },
    {
      titre: "Les régimes d'imposition à la TVA",
      editeur: "impots.gouv.fr",
      url: "https://www.impots.gouv.fr/professionnel/les-regimes-dimposition-la-tva",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2026-11-30",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: true,
};
