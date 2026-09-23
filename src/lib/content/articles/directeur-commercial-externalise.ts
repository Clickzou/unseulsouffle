import type { Article } from "@/lib/content/article";

/**
 * Silo 6 — Stratégie commerciale (master § 3). Pilier du silo à créer : en
 * attendant, l'article se rattache à la home.
 * Requête : « directeur commercial externalisé » (50/mois, KD 5, SE Ranking 2026-09-23).
 * Signé par Nicolas Vimini : seuls les faits de sa bio (home.ts) sont utilisés.
 */
export const article: Article = {
  slug: "directeur-commercial-externalise",

  motCle: "directeur commercial externalisé (50/mois, KD 5)",
  motsClesSecondaires: [
    "directeur commercial à temps partagé",
    "externaliser sa direction commerciale",
    "structurer sa stratégie commerciale PME",
  ],

  // 39 / 42
  metaTitle: "Directeur commercial externalisé en PME",
  // 141 / 150
  metaDescription:
    "Directeur commercial externalisé : son rôle, ce qui le distingue d'un agent ou d'un consultant, quand y recourir et quels indicateurs suivre.",

  h1: "Directeur commercial externalisé : structurer le commercial d'une PME sans tout porter seul",

  chapo:
    "Un directeur commercial externalisé est un cadre de direction qui pilote la fonction commerciale d'une PME à temps partagé, quelques jours par semaine ou par mois, sans être salarié à plein temps. Il ne vend pas à la place de vos équipes : il fixe la stratégie commerciale, organise la force de vente, installe des indicateurs et recrute puis encadre les commerciaux. C'est la réponse adaptée quand le dirigeant porte seul le développement commercial et que l'entreprise n'a ni le volume ni le budget pour un directeur commercial à temps plein.",

  essentiel: {
    reponse:
      "Un directeur commercial externalisé prend en charge, à temps partagé, la direction de la fonction commerciale d'une PME : définition de la stratégie commerciale, organisation de l'équipe de vente, pilotage par des indicateurs, recrutement et management des commerciaux. Il se distingue d'un commercial externalisé ou d'un agent commercial, qui vendent, et d'un consultant, qui recommande sans piloter. On y recourt quand le dirigeant porte seul le commercial et que le chiffre d'affaires dépend de lui. La mission se termine quand l'entreprise sait piloter ses ventes sans lui.",
    points: [
      "Rôle : diriger la fonction commerciale, pas vendre à la place des commerciaux",
      "Format : temps partagé, sur une durée et un périmètre écrits dans la proposition",
      "Quatre chantiers : stratégie, organisation, pilotage par indicateurs, recrutement et management",
      "Pour qui : PME dont le dirigeant est encore le premier commercial de l'entreprise",
      "Point de sortie : une équipe et des outils qui fonctionnent sans le directeur externalisé",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Directeur commercial externalisé : un poste de direction, pas une force de vente",
      blocs: [
        {
          type: "p",
          texte:
            "Dans beaucoup de PME, la direction commerciale n'existe pas en tant que fonction. Elle existe en tant que personne : le dirigeant. Il connaît les grands comptes, négocie les contrats importants et fixe les prix à l'intuition. **Le problème apparaît quand le chiffre d'affaires ne peut plus grandir plus vite que l'agenda du dirigeant.**",
        },
        {
          type: "p",
          texte:
            "Le directeur commercial externalisé vient occuper ce poste vacant. Il assume les responsabilités d'un directeur commercial salarié (le cap, l'organisation, le pilotage, l'équipe) mais sur une fraction du temps. C'est le même modèle que le [DAF externalisé](/daf-externalise-toulouse/) côté finance : une compétence de direction dimensionnée au besoin réel de l'entreprise.",
        },
        {
          type: "h3",
          texte: "Pourquoi ce format existe",
        },
        {
          type: "p",
          texte:
            "Bpifrance résume bien la contrainte du dirigeant de PME : « homme-orchestre » à la création, il doit s'entourer de compétences supplémentaires quand l'entreprise grandit, « sans toutefois pouvoir payer un spécialiste à plein temps » ([Bpifrance, Le boom du travail à temps partagé s'étend aux PME](https://www.bpifrance.fr/nos-actualites/le-boom-du-travail-a-temps-partage-setend-aux-pme)).",
        },
        {
          type: "p",
          texte:
            "Rappel de périmètre : au sens de l'[INSEE](https://www.insee.fr/fr/metadonnees/definition/c1962), une PME occupe moins de 250 personnes et réalise un chiffre d'affaires annuel qui n'excède pas 50 millions d'euros (ou un total de bilan qui n'excède pas 43 millions d'euros).",
        },
        {
          type: "h3",
          texte: "Ce que nous en faisons",
        },
        {
          type: "p",
          texte:
            "En tant que [cabinet de conseil à Toulouse](/) qui accompagne des PME et des ETI de 10 à 250 salariés, nous abordons la direction commerciale externalisée comme un chantier de structuration. Un référent unique prend le sujet en charge, sur le périmètre convenu avec vous, et pas sur le reste de l'entreprise.",
        },
      ],
    },

    {
      label: "Missions",
      titre: "Ce que fait un directeur commercial externalisé, concrètement",
      blocs: [
        {
          type: "p",
          texte:
            "Le contenu d'une mission varie selon le point de départ, mais il se répartit toujours entre quatre chantiers. Tous ne sont pas ouverts en même temps : on commence par celui qui bloque.",
        },
        {
          type: "h3",
          texte: "Stratégie : qui vous vendez, quoi, et à quel prix",
        },
        {
          type: "p",
          texte:
            "Le premier travail consiste à rendre explicite ce qui est implicite. Quels clients rapportent réellement de la marge ? Quels segments sont servis par habitude ? Le directeur commercial externalisé clarifie le positionnement, hiérarchise les cibles et structure l'offre pour qu'un commercial puisse la présenter sans que le dirigeant soit dans la pièce.",
        },
        {
          type: "h3",
          texte: "Organisation : qui fait quoi dans le cycle de vente",
        },
        {
          type: "p",
          texte:
            "Il découpe ensuite le cycle de vente en étapes, du premier contact à la signature puis à la fidélisation, et attribue chaque étape à quelqu'un. Qui prospecte ? Qui qualifie ? Qui chiffre ? Qui relance un devis resté sans réponse ?",
        },
        {
          type: "h3",
          texte: "Pilotage : des indicateurs au lieu de l'intuition",
        },
        {
          type: "p",
          texte:
            "Il installe un petit nombre d'indicateurs, un rituel pour les lire (la revue commerciale hebdomadaire ou mensuelle) et un outil pour les produire, en général un logiciel de gestion de la relation client. Nous détaillons plus bas les indicateurs utiles en PME.",
        },
        {
          type: "h3",
          texte: "Recrutement et management des commerciaux",
        },
        {
          type: "p",
          texte:
            "Enfin, il définit les profils nécessaires, participe aux recrutements, fixe les objectifs, construit la rémunération variable et encadre les commerciaux au quotidien. **C'est souvent le chantier qui justifie à lui seul la mission** : un dirigeant qui n'a jamais managé de commerciaux recrute fréquemment à son image, puis ne sait pas comment suivre ou corriger le travail de la personne recrutée.",
        },
      ],
    },

    {
      label: "Comparatif",
      titre: "Directeur commercial externalisé, commercial externalisé, agent commercial, consultant : les différences",
      blocs: [
        {
          type: "p",
          texte:
            "Ces solutions sont souvent confondues. La question à vous poser est simple : **vous manque-t-il des bras pour vendre, ou une tête pour organiser la vente ?**",
        },
        {
          type: "tableau",
          entetes: ["Solution", "Ce qu'elle fait, et ce qu'elle ne fait pas"],
          lignes: [
            [
              "Directeur commercial externalisé",
              "Dirige la fonction commerciale à temps partagé : stratégie, organisation, indicateurs, recrutement et management des commerciaux. Ne remplace pas la force de vente, il la construit et la pilote.",
            ],
            [
              "Commercial externalisé (force de vente externalisée)",
              "Prospecte et vend pour votre compte, dans le cadre d'une prestation de service. Apporte du volume d'activité commerciale, sans structurer votre organisation ni manager vos équipes.",
            ],
            [
              "Agent commercial",
              "Mandataire indépendant qui négocie, et éventuellement conclut, des contrats en votre nom. Rémunéré à la commission, il vend souvent pour plusieurs mandants et ne dirige pas votre équipe.",
            ],
            [
              "Consultant en stratégie commerciale",
              "Analyse la situation et formule des recommandations, sur un périmètre et une durée limités. Ne pilote pas l'activité au quotidien et ne manage pas les commerciaux après la remise de ses conclusions.",
            ],
            [
              "Directeur commercial salarié",
              "Même rôle que le directeur externalisé, à plein temps et dans la durée. Pertinent quand l'équipe commerciale et le volume d'activité justifient un poste complet.",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Le cas particulier de l'agent commercial",
        },
        {
          type: "p",
          texte:
            "L'agent commercial a un statut légal précis. L'[article L134-1 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006220397) le définit comme un mandataire qui, « à titre de profession indépendante », est chargé « de façon permanente, de négocier et, éventuellement, de conclure » des contrats au nom et pour le compte de ses mandants. [Bpifrance Création](https://bpifrance-creation.fr/activites-reglementees/agent-commercial) précise qu'il est rémunéré par une commission sur les ventes, qu'il s'immatricule au registre spécial des agents commerciaux et que, contrairement au VRP qui est salarié, il est travailleur indépendant. Il a par ailleurs droit à une indemnité compensatrice en fin de contrat, sauf faute grave ou rupture à son initiative : un point à connaître avant de signer.",
        },
        {
          type: "p",
          texte:
            "Les deux ne s'opposent pas : un directeur commercial externalisé peut recourir à un agent pour couvrir un territoire, puis piloter ses résultats.",
        },
        {
          type: "h3",
          texte: "Et le manager de transition ?",
        },
        {
          type: "p",
          texte:
            "Le manager de transition occupe un poste à plein temps pendant une période limitée, souvent pour remplacer un dirigeant absent ou conduire une restructuration. Le directeur commercial à temps partagé, lui, intervient une partie du temps sur une durée plus longue. Nous comparons les deux formules en détail dans [manager de transition ou direction à temps partagé](/infos-utiles/manager-de-transition-ou-direction-a-temps-partage/).",
        },
      ],
    },

    {
      label: "Signaux",
      titre: "Externaliser sa direction commerciale : les signaux qu'il est temps",
      blocs: [
        {
          type: "p",
          texte:
            "Aucun seuil d'effectif ne déclenche mécaniquement le besoin. Si vous reconnaissez trois de ces signaux, la question mérite d'être posée.",
        },
        {
          type: "liste",
          items: [
            "**Vous êtes le premier commercial de l'entreprise.** Les plus gros clients vous appellent vous, et les négociations importantes ne se concluent pas sans vous.",
            "**Le chiffre d'affaires suit votre agenda.** Les mois où vous êtes absorbé par la production, les recrutements ou la banque, les ventes ralentissent.",
            "**Vous avez recruté un commercial, et cela n'a pas marché.** Sans objectifs clairs ni suivi, vous ne savez pas vraiment pourquoi le résultat n'est pas venu.",
            "**Personne ne sait dire ce qu'il y a dans le pipeline.** Les devis en cours sont dans des boîtes mail, des fichiers ou des mémoires, et la prévision de ventes à trois mois est une estimation.",
            "**Les prix sont fixés au cas par cas.** Personne ne mesure l'effet des remises sur la marge.",
            "**Vous préparez une transmission.** Un repreneur regardera de près si le portefeuille clients dépend de vous ou de l'entreprise.",
          ],
        },
        {
          type: "h3",
          texte: "Le signal que l'on sous-estime : la charge du dirigeant",
        },
        {
          type: "p",
          texte:
            "Porter seul le commercial, c'est aussi porter seul la pression du carnet de commandes. Quand chaque mois creux vous est imputable, la fonction commerciale devient une source de charge mentale autant qu'un sujet d'organisation. Nous abordons cette dimension dans notre article sur la [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/). Une direction commerciale structurée ne supprime pas la pression, mais elle la répartit.",
        },
        {
          type: "h3",
          texte: "Quand ce n'est pas la bonne réponse",
        },
        {
          type: "p",
          texte:
            "Si votre offre ne trouve pas son marché, aucun directeur commercial ne compensera ce manque. Si votre difficulté est de produire ou de livrer ce que vous vendez déjà, le nœud n'est pas commercial. Et si vous avez surtout besoin de rendez-vous qualifiés à court terme, un commercial externalisé répond plus directement au besoin.",
        },
      ],
    },

    {
      label: "Déroulé",
      titre: "Directeur commercial à temps partagé : comment se déroule une mission",
      blocs: [
        {
          type: "p",
          texte:
            "Une mission de direction commerciale à temps partagé suit quatre temps. Leur durée dépend de la situation de départ ; chez nous, un parcours dure de 3 à 12 mois selon sa profondeur, et le périmètre est écrit dans la proposition avant tout démarrage.",
        },
        {
          type: "h3",
          texte: "1. L'état des lieux commercial",
        },
        {
          type: "p",
          texte:
            "Le directeur commercial externalisé commence par regarder ce qui existe : répartition du chiffre d'affaires par client et par offre, cycle de vente réel, outils utilisés, rôles de chacun, historique des recrutements commerciaux. L'objectif est d'identifier la cause du plafond, pas de dresser un inventaire.",
        },
        {
          type: "h3",
          texte: "2. La feuille de route",
        },
        {
          type: "p",
          texte:
            "Il en tire un nombre limité de chantiers prioritaires, validés avec vous : par exemple recentrer les cibles, formaliser l'offre, installer un outil de suivi, recruter un premier commercial. **On ne touche pas à ce qui fonctionne.** Si un client historique est bien géré par vous, il n'y a aucune raison de le transférer dès le premier mois.",
        },
        {
          type: "h3",
          texte: "3. La mise en œuvre, au rythme convenu",
        },
        {
          type: "p",
          texte:
            "Vient ensuite le travail de fond, conduit sur le terrain avec vos équipes : animation de la revue commerciale, accompagnement des commerciaux en rendez-vous, construction des outils, recrutement. Le temps d'intervention est fixé au contrat, en jours par semaine ou par mois. La présence est régulière, et dure assez longtemps pour que les nouvelles habitudes s'installent.",
        },
        {
          type: "h3",
          texte: "4. La transmission",
        },
        {
          type: "p",
          texte:
            "La mission réussit quand elle devient inutile. Le directeur commercial externalisé transmet la revue commerciale à un responsable interne, documente les processus et, si l'entreprise a grandi assez, aide à recruter le directeur commercial salarié qui lui succédera.",
        },
        {
          type: "encadre",
          titre: "Quel cadre juridique pour le temps partagé ?",
          texte:
            "Le professionnel peut intervenir comme prestataire indépendant, être salarié à temps partiel de plusieurs entreprises, ou être mis à disposition par un groupement d'employeurs (loi du 25 juillet 1985) ou une entreprise de travail à temps partagé (loi du 2 août 2005). Le choix engage la responsabilité, la confidentialité et la sortie de la mission : il se tranche avant de signer.",
        },
        {
          type: "p",
          texte:
            "La fiche de la [CCI Paris Ile-de-France sur le travail à temps partagé](https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/le-travail-temps-partage) détaille les conditions de chacune de ces formules.",
        },
      ],
    },

    {
      label: "Pilotage",
      titre: "Structurer sa stratégie commerciale en PME : les indicateurs à piloter",
      blocs: [
        {
          type: "p",
          texte:
            "Un tableau de bord commercial de PME n'a pas besoin de trente lignes. Il en faut assez pour répondre à trois questions : allons-nous atteindre l'objectif, pourquoi, et que faisons-nous cette semaine pour y arriver. Voici ceux que nous retenons le plus souvent.",
        },
        {
          type: "tableau",
          entetes: ["Indicateur", "Ce qu'il vous dit"],
          lignes: [
            [
              "Chiffre d'affaires par client et concentration",
              "La part de vos ventes qui dépend de vos premiers clients. Une forte concentration est un risque commercial, et un sujet pour un repreneur.",
            ],
            [
              "Marge par client ou par offre",
              "Qui rapporte réellement. Le chiffre d'affaires seul cache les clients qui coûtent plus qu'ils ne rapportent.",
            ],
            [
              "Valeur du pipeline pondérée",
              "Le montant des affaires en cours, pondéré par leur probabilité de signature. La base d'une prévision de ventes crédible.",
            ],
            [
              "Taux de transformation par étape",
              "La part des contacts qui deviennent des devis, et des devis qui deviennent des commandes. Il montre où le cycle de vente fuit.",
            ],
            [
              "Durée moyenne du cycle de vente",
              "Le délai entre le premier contact et la signature. Indispensable pour savoir quand une action de prospection produira du chiffre.",
            ],
            [
              "Activité commerciale",
              "Rendez-vous, relances et devis émis par commercial. Un indicateur d'effort, à lire avec les résultats et jamais seul.",
            ],
            [
              "Taux de fidélisation",
              "La part des clients de l'an dernier qui commandent encore cette année. Souvent plus rentable à améliorer que la conquête.",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Un outil, mais d'abord un processus",
        },
        {
          type: "p",
          texte:
            "Ces indicateurs supposent que les données soient saisies quelque part. [France Num](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/gestion-de-la-relation-client/comment-ameliorer-votre), le portail de la Direction générale des Entreprises, rappelle qu'un logiciel de gestion de la relation client centralise les informations sur les clients et prospects et les restitue en tableaux de bord. Il souligne aussi qu'avant de le déployer, il faut établir un schéma des étapes qui vont du premier contact jusqu'à l'achat. Un outil installé avant le processus enregistre le désordre au lieu de le corriger.",
        },
        {
          type: "h3",
          texte: "Le rituel qui fait vivre les chiffres",
        },
        {
          type: "p",
          texte:
            "Un indicateur que personne ne regarde ne pilote rien. La revue commerciale, courte et régulière, sert à lire le pipeline et à arbitrer les prochaines actions. Quand la lecture des chiffres touche à la marge ou à la trésorerie, la finance peut être associée, si le sujet l'exige.",
        },
      ],
    },

    {
      label: "Conditions",
      titre: "Réussir avec un directeur commercial externalisé : ce qui dépend de vous",
      blocs: [
        {
          type: "p",
          texte:
            "Un directeur commercial externalisé ne réussit pas seul. Trois conditions dépendent du dirigeant, et il vaut mieux les regarder en face avant de commencer.",
        },
        {
          type: "h3",
          texte: "Accepter de lâcher une partie du commercial",
        },
        {
          type: "p",
          texte:
            "Le dirigeant qui a construit son portefeuille client a du mal à le confier. Le transfert se fait client par client, à un rythme décidé ensemble, mais il doit avoir lieu. Si toutes les décisions commerciales continuent de remonter à vous, la mission produira des outils sans changer le fonctionnement.",
        },
        {
          type: "h3",
          texte: "Donner accès aux chiffres et aux équipes",
        },
        {
          type: "p",
          texte:
            "Le directeur commercial externalisé a besoin des données de vente et de marge, et d'une légitimité claire auprès des commerciaux. Annoncez son rôle à l'équipe, dites ce qu'il décide et ce qui reste de votre ressort.",
        },
        {
          type: "h3",
          texte: "Bien choisir la personne",
        },
        {
          type: "p",
          texte:
            "Demandez à la personne comment elle a déjà structuré une équipe commerciale, comment elle mesure sa propre réussite et comment elle prévoit de partir. Vérifiez que son expérience correspond à votre type de vente, et fixez par écrit le périmètre, le temps d'intervention et les indicateurs de réussite.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, le sujet est porté par Nicolas Vimini, directeur commercial externalisé qui compte 20 ans d'expérience en développement commercial. Il est votre référent sur le périmètre commercial ; les autres expertises de [l'équipe](/notre-equipe/) n'interviennent que si un chantier le demande. Si vous ne savez pas encore si votre blocage est commercial, organisationnel ou financier, commencez par un [diagnostic d'entreprise](/diagnostic/) : il vous aidera à situer le nœud avant de choisir la réponse.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre un directeur commercial externalisé et un commercial externalisé ?",
      r: [
        "Le commercial externalisé vend : il prospecte, prend des rendez-vous et signe des affaires pour votre compte. Le directeur commercial externalisé dirige : il définit la stratégie commerciale, organise l'équipe de vente, installe les indicateurs et recrute puis manage les commerciaux. Le premier ajoute des bras à votre force de vente, le second construit et pilote la force de vente elle-même. Les deux peuvent se combiner.",
      ],
    },
    {
      q: "Combien de temps un directeur commercial à temps partagé passe-t-il dans l'entreprise ?",
      r: [
        "Le temps d'intervention se fixe au contrat, en jours par semaine ou par mois, selon l'ampleur des chantiers et la taille de l'équipe commerciale. Il est en général plus soutenu au démarrage, pendant l'état des lieux et la mise en place des outils, puis s'allège quand l'équipe prend le relais. Chez Un Seul Souffle, un parcours dure de 3 à 12 mois selon sa profondeur.",
      ],
    },
    {
      q: "Un directeur commercial externalisé peut-il recruter mes commerciaux ?",
      r: [
        "Oui, c'est l'une de ses missions principales. Il définit le profil recherché à partir de votre cycle de vente, participe aux entretiens, prépare l'intégration et fixe les premiers objectifs. Surtout, il encadre ensuite la personne recrutée : c'est souvent l'absence de ce suivi, plus que le mauvais choix de candidat, qui fait échouer le premier recrutement commercial d'une PME. La décision finale d'embauche reste la vôtre.",
      ],
    },
    {
      q: "Faut-il un directeur commercial externalisé ou un agent commercial ?",
      r: [
        "Ils ne répondent pas au même besoin. L'agent commercial est un mandataire indépendant, rémunéré à la commission, qui négocie et conclut des ventes en votre nom. Le directeur commercial externalisé organise et pilote votre fonction commerciale. Si votre offre est claire et que vous manquez de présence sur un territoire, un agent peut suffire. Si personne ne pilote les ventes, commencez par la direction.",
      ],
    },
    {
      q: "Le directeur commercial externalisé va-t-il reprendre mes clients historiques ?",
      r: [
        "Pas d'office. Le transfert des comptes que vous gérez se décide avec vous, client par client, à un rythme convenu dans la feuille de route. On ne touche pas à ce qui fonctionne : un grand compte bien suivi par le dirigeant peut le rester. L'objectif est que le développement commercial ne dépende plus uniquement de vous, pas de vous retirer toute relation client.",
      ],
    },
  ],

  sources: [
    {
      titre: "Article L134-1 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006220397",
    },
    {
      titre: "Agent commercial | réglementation de l'activité",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/activites-reglementees/agent-commercial",
    },
    {
      titre: "Petite et moyenne entreprise",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1962",
    },
    {
      titre: "Le boom du travail à temps partagé s'étend aux PME",
      editeur: "Bpifrance",
      url: "https://www.bpifrance.fr/nos-actualites/le-boom-du-travail-a-temps-partage-setend-aux-pme",
    },
    {
      titre: "Le travail à temps partagé : définition, conditions de mise en oeuvre en entreprises",
      editeur: "CCI Paris Ile-de-France",
      url: "https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/le-travail-temps-partage",
    },
    {
      titre:
        "Comment améliorer votre gestion de la relation client en utilisant une plateforme CRM (Customer Relationship Management) ?",
      editeur: "France Num (Direction générale des Entreprises)",
      url: "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/gestion-de-la-relation-client/comment-ameliorer-votre",
    },
  ],

  auteur: "nicolas-vimini",
  datePublication: "2026-09-23",
  accent: "commercial",
  pilier: { href: "/", ancre: "cabinet de conseil à Toulouse" },
  valide: false,
};
