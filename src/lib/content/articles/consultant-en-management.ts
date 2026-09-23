import type { Article } from "@/lib/content/article";

/**
 * Article de fond — « consultant en management » (470/mois, KD 10).
 * Angle : guide d'achat pour le dirigeant de PME. Pilier : home (/).
 * Sources consultées le 2026-09-23 (voir `sources`).
 */
export const article: Article = {
  slug: "consultant-en-management",

  motCle: "consultant en management (470)",
  motsClesSecondaires: [
    "cabinet de conseil en management",
    "consultant management PME",
    "faire appel à un consultant",
  ],

  // 41 / 42
  metaTitle: "Consultant en management : guide pour PME",
  metaDescription:
    "Consultant en management : quel profil choisir, comment écrire le besoin, quels livrables exiger et quelles aides pour financer la mission en PME.",
  h1: "Consultant en management : le guide pour bien choisir en PME",
  chapo:
    "Un consultant en management aide le dirigeant à résoudre un problème précis d'organisation, de décision ou de pilotage, puis à installer la solution dans l'entreprise. Pour une PME, le bon choix tient en quatre décisions : identifier le bon profil (conseil en stratégie, conseil en organisation, coach ou manager de transition), écrire le besoin en une page, exiger des livrables datés et vérifier les aides publiques avant de signer. Ce guide vous donne les questions à poser et les signaux qui doivent vous faire renoncer.",

  essentiel: {
    reponse:
      "Un consultant en management est un prestataire externe qui diagnostique un problème d'organisation, de management ou de pilotage, propose des solutions et, selon le contrat, accompagne leur mise en œuvre. Pour une PME, il se choisit sur la nature du problème plutôt que sur la notoriété du cabinet : un cap à redéfinir, une structure qui n'exécute plus, une posture de dirigeant ou un poste vacant n'appellent pas le même profil. Une mission sérieuse part d'un besoin écrit, fixe un périmètre et des livrables datés, et désigne un interlocuteur unique. Des aides publiques existent, chez Bpifrance et en région Occitanie notamment, à demander avant le démarrage.",
    points: [
      "Quatre profils à ne pas confondre : conseil en stratégie, conseil en organisation, coach, manager de transition",
      "Le besoin tient en une page : situation, problème constaté, résultat attendu, contraintes, calendrier",
      "À exiger : un périmètre écrit, un calendrier, des livrables nommés et un interlocuteur unique",
      "Premier signal d'alerte : une solution proposée avant tout diagnostic",
      "Aides : missions de conseil Bpifrance, Contrat RH-conseil de la Région Occitanie, PCRH via votre OPCO, toujours avant de commencer",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Ce que fait un consultant en management, et ce qu'il ne fait pas",
      blocs: [
        {
          type: "p",
          texte:
            "Vous dirigez une PME de quelques dizaines de salariés. Les décisions remontent toutes à vous, deux responsables ne se parlent plus, la croissance a dépassé l'organisation. Vous savez qu'il faut un regard extérieur, sans savoir qui appeler ni quoi demander. C'est exactement l'espace où intervient un consultant en management.",
        },
        { type: "h3", texte: "Un regard extérieur sur un problème précis" },
        {
          type: "p",
          texte:
            "Le consultant en management travaille sur la manière dont l'entreprise est dirigée et organisée : qui décide quoi, comment l'information circule, comment les équipes coopèrent, comment le dirigeant pilote. Il apporte trois choses que l'interne produit difficilement : du temps consacré au problème, une méthode pour l'analyser, et une position neutre vis-à-vis des personnes concernées.",
        },
        {
          type: "p",
          texte:
            "**Son travail se juge à ce qui change dans l'entreprise, pas au volume du rapport remis.** Un diagnostic sans suite coûte le prix de la mission et laisse le problème intact, avec en prime des équipes qui ont répondu aux entretiens pour rien.",
        },
        { type: "h3", texte: "Diagnostiquer, recommander, accompagner" },
        {
          type: "p",
          texte:
            "Une mission de conseil en management suit en général trois temps. Le diagnostic établit la situation réelle par des entretiens, de l'observation et l'analyse des documents. La recommandation hiérarchise ce qu'il faut changer. L'accompagnement aide l'entreprise à le mettre en œuvre. Certains consultants s'arrêtent au deuxième temps, d'autres vont jusqu'au troisième : c'est la première question à trancher avant de signer.",
        },
        { type: "h3", texte: "Ce qu'il ne remplace pas" },
        {
          type: "p",
          texte:
            "Un consultant ne prend pas vos décisions à votre place et ne dirige pas vos équipes. S'il le fait, ce n'est plus du conseil mais une délégation de pouvoir, qui relève d'un autre métier. Il ne remplace pas non plus un expert-comptable, un avocat ou un recruteur : il peut vous aider à formuler le besoin, pas exercer leur profession. Un Seul Souffle, [cabinet de conseil à Toulouse](/), intervient sur ce périmètre de conseil et d'accompagnement, auprès de PME et d'ETI de 10 à 250 salariés.",
        },
      ],
    },

    {
      label: "Profils",
      titre: "Conseil en stratégie, en organisation, coach, manager de transition : quel profil ?",
      blocs: [
        {
          type: "p",
          texte:
            "Sous l'étiquette « consultant en management » se rangent des métiers très différents. Le premier tri se fait sur la nature de votre problème, pas sur le nom du cabinet.",
        },
        {
          type: "tableau",
          entetes: ["Profil", "Ce qu'il fait, et quand le choisir"],
          lignes: [
            [
              "Conseil en stratégie",
              "Travaille le cap : marchés, positionnement, offre, choix d'investissement. À choisir quand vous ne savez plus où aller, pas quand vous savez où aller sans y arriver.",
            ],
            [
              "Conseil en organisation",
              "Travaille la structure : rôles, circuits de décision, processus, coordination entre services. À choisir quand le cap est clair mais que l'entreprise n'arrive pas à l'exécuter.",
            ],
            [
              "Coach de dirigeant ou d'équipe",
              "Travaille la posture et la relation : manière de décider, de déléguer, de coopérer. Ne livre pas de solution d'organisation. À choisir quand le blocage tient aux personnes plus qu'à la structure.",
            ],
            [
              "Manager de transition",
              "Occupe un poste opérationnel pour une durée limitée, avec autorité hiérarchique. À choisir quand un poste clé est vacant ou qu'une crise exige quelqu'un aux commandes, pas un conseiller.",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Les frontières ne sont pas étanches. Un [conseil en organisation](/transformation-entreprise/) bute souvent sur une question de posture du dirigeant ; un coaching révèle parfois un problème de structure. Ce qui compte est que le prestataire dise clairement dans quel registre il intervient, et qu'il vous oriente ailleurs quand le problème sort de son champ.",
        },
        { type: "h3", texte: "Conseiller ou opérationnel : la vraie ligne de partage" },
        {
          type: "p",
          texte:
            "La distinction la plus utile oppose ceux qui conseillent à ceux qui exécutent. Le consultant, le coach et le conseil en stratégie vous laissent la décision et la responsabilité. Le manager de transition les prend pour un temps. Nous détaillons ce choix dans [manager de transition ou direction à temps partagé](/infos-utiles/manager-de-transition-ou-direction-a-temps-partage/), et la frontière avec l'accompagnement individuel dans notre article sur le [coaching en management](/infos-utiles/coaching-en-management/).",
        },
        {
          type: "p",
          texte:
            "Une précision, pour être clair : Un Seul Souffle ne fait pas de management de transition. Si votre besoin est un intérim de direction, un cabinet spécialisé dans ce métier sera mieux placé que nous.",
        },
      ],
    },

    {
      label: "Déclencheurs",
      titre: "Quand faire appel à un consultant en management",
      blocs: [
        {
          type: "p",
          texte:
            "Un consultant a un coût, en argent et en temps d'équipe. Il se justifie quand le problème résiste aux solutions internes, pas au premier signe de tension.",
        },
        { type: "h3", texte: "Les situations qui justifient un regard extérieur" },
        {
          type: "liste",
          items: [
            "**La croissance a dépassé la structure.** Les processus tiennent par les personnes, et chaque départ fragilise un pan de l'activité.",
            "**Les décisions remontent toutes au dirigeant.** Les managers attendent votre validation, et votre agenda devient le goulot d'étranglement de l'entreprise.",
            "**Un conflit ou une zone floue paralyse un projet.** Deux services se renvoient la responsabilité, et personne en interne n'a la légitimité pour trancher.",
            "**Une transformation touche plusieurs dimensions à la fois.** Nouvelle activité, rachat, changement d'outil, transmission : l'organisation doit bouger en même temps que la stratégie.",
            "**Vous avez déjà essayé seul.** Réorganisation, recrutement d'un adjoint, nouveaux rituels : le problème est revenu sous une autre forme.",
          ],
        },
        { type: "h3", texte: "Les situations où ce n'est pas la bonne réponse" },
        {
          type: "p",
          texte:
            "Un consultant en management n'est pas la bonne réponse quand le problème est purement technique, un logiciel ou une obligation réglementaire par exemple. Ni quand la décision est déjà prise et qu'il s'agirait seulement de la faire valider par un tiers. Ni quand l'entreprise n'a pas le temps de s'impliquer.",
        },
        {
          type: "p",
          texte:
            "Ce dernier point est le plus souvent sous-estimé. Une mission de conseil mobilise le dirigeant et une partie de l'encadrement. Si personne ne peut dégager ce temps, elle produira un document, pas un changement. Mieux vaut alors reporter de quelques mois que lancer une mission qui s'essoufflera.",
        },
      ],
    },

    {
      label: "Le besoin",
      titre: "Faire appel à un consultant : rédiger votre besoin en une page",
      blocs: [
        {
          type: "p",
          texte:
            "La qualité d'une mission se joue avant le premier rendez-vous. Un besoin mal formulé produit des propositions impossibles à comparer, et un périmètre qui dérive en cours de route. Une page suffit, à condition d'y mettre les bonnes rubriques.",
        },
        { type: "h3", texte: "Les cinq rubriques du besoin" },
        {
          type: "liste",
          items: [
            "**La situation.** Activité, effectif, organisation actuelle, événements récents. Quelques lignes factuelles.",
            "**Le problème, tel que vous le constatez.** Des faits observables, pas un diagnostic : « les devis attendent ma signature pendant des jours » plutôt que « nous avons un problème de process ».",
            "**Le résultat attendu.** Ce qui doit être vrai à la fin de la mission, formulé de manière vérifiable.",
            "**Les contraintes.** Budget envisagé, disponibilité des équipes, sujets sensibles, ce à quoi vous ne voulez pas toucher.",
            "**Le calendrier.** Date de démarrage souhaitée, échéances extérieures : un salon, une clôture, le départ d'un salarié clé.",
          ],
        },
        { type: "h3", texte: "Décrire le symptôme, pas la solution" },
        {
          type: "p",
          texte:
            "L'erreur la plus fréquente consiste à commander une solution plutôt qu'à décrire un problème : « nous voulons un nouvel organigramme ». Un organigramme peut être la réponse, ou seulement déplacer le problème. En décrivant ce que vous constatez, vous laissez au consultant la place de faire son travail. Et vous vous donnez un critère pour juger sa proposition : explique-t-elle vos constats mieux que vous ne le faisiez ?",
        },
        { type: "h3", texte: "Ce qui est dans le périmètre, et ce qui n'y est pas" },
        {
          type: "p",
          texte:
            "Écrivez aussi ce qui est hors champ. **Un périmètre ouvert se lit comme une facture ouverte.** Si vous ne voulez pas qu'on touche à la force commerciale ou à la production, dites-le dès la première page. Cela évite les propositions gonflées et protège vos équipes d'un chantier qu'elles n'ont pas demandé.",
        },
      ],
    },

    {
      label: "Choisir",
      titre: "Comment choisir un cabinet de conseil en management",
      blocs: [
        {
          type: "p",
          texte:
            "Consultez deux ou trois prestataires sur le même besoin écrit. Au-delà, la comparaison devient une mission à part entière ; en deçà, vous n'avez aucun point de repère.",
        },
        { type: "h3", texte: "Les questions à poser au premier rendez-vous" },
        {
          type: "liste",
          items: [
            "**Qui interviendra concrètement ?** Le consultant rencontré en rendez-vous est-il celui qui mènera la mission ?",
            "**Qu'avez-vous compris de mon problème ?** Une bonne réponse reformule vos constats et pose des questions que vous ne vous étiez pas posées.",
            "**Comment se déroule le diagnostic, et qui rencontrez-vous ?** La direction seulement, ou aussi le terrain ?",
            "**Quels livrables, à quelles dates ?** Des documents nommés et un calendrier, pas « un rapport à l'issue de la mission ».",
            "**Qu'est-ce qui est inclus, et qu'est-ce qui sera facturé en plus ?** Déplacements, jours supplémentaires, ateliers.",
            "**Comment la mission s'arrête-t-elle ?** Quel est le point de sortie, et comment l'entreprise continue-t-elle sans vous ?",
            "**Puis-je parler à un dirigeant que vous avez accompagné ?** Un court échange en dit plus qu'une plaquette.",
          ],
        },
        { type: "h3", texte: "Les signaux d'alerte" },
        {
          type: "liste",
          items: [
            "Une solution proposée avant tout diagnostic, ou une méthode identique quelle que soit l'entreprise",
            "Un devis en jours sans livrable rattaché à chaque étape",
            "Un périmètre qui s'élargit dès le premier rendez-vous à d'autres sujets que celui qui vous amène",
            "Un interlocuteur qui change entre la vente et l'exécution",
            "Des résultats chiffrés promis à l'avance sur un sujet humain ou organisationnel",
            "Une mission conçue pour durer, sans point de sortie écrit",
          ],
        },
        { type: "h3", texte: "Comparer les propositions sur la même grille" },
        {
          type: "p",
          texte:
            "Ramenez chaque proposition aux mêmes critères : compréhension du problème, démarche, livrables, calendrier, charge demandée à vos équipes, prix total et conditions de sortie. La proposition la moins chère sur le papier coûte souvent le plus cher si elle s'arrête au rapport et vous laisse seul pour la mise en œuvre.",
        },
      ],
    },

    {
      label: "Déroulé",
      titre: "Déroulé d'une mission et livrables à exiger",
      blocs: [
        {
          type: "p",
          texte:
            "Quel que soit le cabinet, une mission de conseil en management bien construite passe par des étapes identifiables. Chacune doit produire un livrable que vous pouvez relire, discuter et contester.",
        },
        {
          type: "tableau",
          entetes: ["Étape", "Livrable à exiger"],
          lignes: [
            [
              "Cadrage",
              "Une proposition écrite : périmètre, objectifs vérifiables, démarche, calendrier, prix, interlocuteur, conditions de sortie",
            ],
            [
              "Diagnostic",
              "Une restitution écrite qui distingue les faits constatés, leur analyse et les priorités, avec la liste des personnes rencontrées",
            ],
            [
              "Plan d'action",
              "Des chantiers hiérarchisés, avec pour chacun un responsable interne, une échéance et un critère de réussite",
            ],
            [
              "Mise en œuvre",
              "Des points d'étape datés, un suivi des chantiers et les documents produits : rôles, circuits de décision, rituels de pilotage",
            ],
            [
              "Clôture",
              "Un bilan des écarts entre objectifs et résultats, et la liste de ce que l'entreprise poursuit seule",
            ],
          ],
        },
        { type: "h3", texte: "La charge réelle pour vos équipes" },
        {
          type: "p",
          texte:
            "Une mission mobilise votre temps et celui de votre encadrement : entretiens, ateliers, relectures, mise en œuvre. Demandez qu'elle soit estimée dans la proposition. Un consultant qui la passe sous silence prépare une mission qui prendra du retard dès que l'activité reprendra le dessus.",
        },
        { type: "h3", texte: "Un interlocuteur, un périmètre, une durée" },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, un parcours dure de 3 à 12 mois selon la profondeur de l'intervention. Le périmètre est arrêté avec vous, écrit dans la proposition, et ne s'élargit pas sans votre accord : on ne touche pas à ce qui fonctionne. Un conseiller référent porte votre sujet du début à la fin, et fait intervenir une autre expertise de l'équipe seulement si le sujet l'exige. Le détail des cinq étapes figure sur la page [notre méthode](/un-seul-souffle/).",
        },
      ],
    },

    {
      label: "Financement",
      titre: "Consultant management PME : les aides pour financer la mission",
      blocs: [
        {
          type: "p",
          texte:
            "Plusieurs dispositifs publics réduisent le coût d'une mission de conseil. Ils partagent une règle : la demande se fait avant le démarrage. Vérifiez-les au moment d'écrire votre besoin, pas après avoir signé.",
        },
        { type: "h3", texte: "Les missions de conseil de Bpifrance" },
        {
          type: "p",
          texte:
            "Bpifrance propose des [missions de conseil de 8 ou 13 jours homme](https://www.bpifrance.fr/nos-solutions/conseil/conseil), présentées comme subventionnées et réalisées en binôme par un responsable conseil Bpifrance et un consultant habilité par Bpifrance. Parmi les thèmes listés figurent le 360°, qui cartographie l'entreprise pour déterminer ses sujets prioritaires, la stratégie, et une mission Organisation / RH / Management qui porte notamment sur les process, l'organigramme et les rôles de chacun. Bpifrance met aussi à disposition des autodiagnostics en ligne gratuits. Les conditions d'accès et le niveau de prise en charge se vérifient directement auprès de Bpifrance.",
        },
        { type: "h3", texte: "En Occitanie : le Contrat RH-conseil" },
        {
          type: "p",
          texte:
            "La Région Occitanie cofinance, par le [Contrat RH-conseil](https://www.laregion.fr/contrat-RH), jusqu'à 50 % d'une prestation externe de conseil, cabinet ou consultant expert RH, destinée à proposer et mettre en œuvre un plan de structuration RH. L'aide est plafonnée à 20 000 €, avec un forfait journalier plafonné à 1 200 €. Elle vise les entreprises implantées en Occitanie, de plus d'un an, de 5 à 250 salariés. La Région précise que toute demande doit être antérieure au démarrage de l'action, et qu'une seule aide est accordée par entreprise et par an, avec un délai de trois ans entre deux demandes.",
        },
        {
          type: "p",
          texte:
            "Ce dispositif couvre le champ des ressources humaines. Une mission centrée sur l'organisation du travail, les rôles et le management peut s'en rapprocher ; une mission de stratégie commerciale, non. Posez la question à la Région avant de bâtir le dossier.",
        },
        { type: "h3", texte: "La PCRH, par votre OPCO" },
        {
          type: "p",
          texte:
            "La [prestation de conseil en ressources humaines](https://idf.drieets.gouv.fr/PCRH-Prestation-conseil-ressources-humaines), ou PCRH, s'adresse aux entreprises de moins de 250 salariés. Son coût est pris en charge jusqu'à 100 % par l'État, en cofinancement avec l'OPCO. Parmi ses thématiques figurent l'organisation du travail, l'amélioration du dialogue social et la professionnalisation de la fonction RH. La demande passe par l'OPCO dont relève votre entreprise.",
        },
        { type: "h3", texte: "Se faire orienter gratuitement" },
        {
          type: "p",
          texte:
            "Si vous ne savez pas quel dispositif s'applique, deux services publics orientent sans frais. [Team RH Occitanie](https://occitanie.dreets.gouv.fr/PCRH) réunit l'État, la Région, France Travail et d'autres partenaires sur les questions RH des TPE et PME. Le [Service Public Conseillers entreprises](https://conseillers-entreprises.service-public.fr/) vous met en relation avec le conseiller compétent, notamment pour améliorer l'organisation du travail.",
        },
        {
          type: "p",
          texte:
            "Avant même de consulter, faites le point sur votre situation. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer le nœud, dans l'organisation, le pilotage ou la décision, et donc à savoir quel profil de consultant appeler.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle différence entre un consultant en management et un coach ?",
      r: [
        "Le consultant en management analyse l'organisation et propose des solutions : rôles, circuits de décision, processus, pilotage. Le coach ne livre pas de solution d'organisation ; il aide le dirigeant ou l'équipe à trouver ses propres réponses en travaillant la posture, la manière de décider et de coopérer. Les deux se complètent souvent, car un problème de structure bute tôt ou tard sur une question de posture. Demandez au prestataire dans quel registre il intervient.",
      ],
    },
    {
      q: "Quelle différence entre un consultant en management et un manager de transition ?",
      r: [
        "Le consultant conseille : vous gardez la décision et la responsabilité. Le manager de transition occupe un poste opérationnel pour une durée limitée, avec autorité sur les équipes, par exemple pour remplacer un directeur absent ou conduire un redressement. Le premier convient quand vous avez besoin d'un regard extérieur et d'une méthode, le second quand il manque quelqu'un aux commandes.",
      ],
    },
    {
      q: "Combien coûte un consultant en management pour une PME ?",
      r: [
        "Il n'existe pas de tarif de référence public : le prix dépend du nombre de jours, du profil des intervenants et de la part de mise en œuvre incluse. Pour comparer, demandez un prix total rattaché à des livrables plutôt qu'un seul taux journalier. Vérifiez aussi les aides : Bpifrance subventionne certaines missions de conseil, et la Région Occitanie cofinance jusqu'à 50 % d'une prestation de conseil RH éligible, à demander avant le démarrage.",
      ],
    },
    {
      q: "Combien de temps dure une mission de conseil en management ?",
      r: [
        "Tout dépend de la profondeur de l'intervention : un diagnostic seul est plus court qu'un accompagnement mené jusqu'à la mise en œuvre. Bpifrance, par exemple, structure ses missions de conseil en 8 ou 13 jours homme. Chez Un Seul Souffle, un parcours dure de 3 à 12 mois. L'essentiel est que la durée, les jalons et le point de sortie figurent dans la proposition écrite, avant le démarrage.",
      ],
    },
    {
      q: "Un consultant en management va-t-il vouloir tout réorganiser ?",
      r: [
        "Il ne devrait pas. Une mission sérieuse part d'un besoin précis et d'un périmètre écrit, qui ne s'élargit pas sans votre accord. Si un consultant étend le sujet dès le premier rendez-vous, c'est un signal d'alerte. Chez Un Seul Souffle, un conseiller référent prend en charge votre sujet, on ne touche pas à ce qui fonctionne, et une autre expertise n'intervient que si le sujet l'exige.",
      ],
    },
    {
      q: "Faut-il choisir un consultant proche de son entreprise ?",
      r: [
        "Pour un sujet d'organisation, la proximité compte : le diagnostic se fait sur le terrain, en rencontrant les équipes, et l'accompagnement demande une présence régulière. Un consultant proche intervient plus facilement sur site et connaît les dispositifs d'aide régionaux. Ce n'est pas pour autant un critère suffisant : la compréhension de votre problème et la clarté de la proposition passent avant la distance.",
      ],
    },
  ],

  sources: [
    {
      titre: "Conseil | Bpifrance",
      editeur: "Bpifrance",
      url: "https://www.bpifrance.fr/nos-solutions/conseil/conseil",
    },
    {
      titre: "Contrat RH-conseil",
      editeur: "Région Occitanie / Pyrénées-Méditerranée",
      url: "https://www.laregion.fr/contrat-RH",
    },
    {
      titre: "PCRH : Prestation de conseil en ressources humaines pour les TPE-PME",
      editeur: "DREETS Île-de-France (ministère du Travail)",
      url: "https://idf.drieets.gouv.fr/PCRH-Prestation-conseil-ressources-humaines",
    },
    {
      titre: "Team RH Occitanie : un portail innovant d'appui RH « sur mesure » pour les TPE-PME",
      editeur: "DREETS Occitanie",
      url: "https://occitanie.dreets.gouv.fr/PCRH",
    },
    {
      titre: "Service Public Conseillers entreprises",
      editeur: "Service public (État)",
      url: "https://conseillers-entreprises.service-public.fr/",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-09-23",
  accent: "organisation",
  pilier: { href: "/", ancre: "cabinet de conseil à Toulouse" },

  valide: false,
};
