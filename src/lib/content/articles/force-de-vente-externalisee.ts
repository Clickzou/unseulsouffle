import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 6, stratégie commerciale. Signé Nicolas Vimini.
 * Pilier du silo à créer : en attendant, l'article se rattache à la home.
 * Requête : « force de vente externalisée » (590/mois, KD 6). Secondaires :
 * « externaliser la force de vente » (590), « force commerciale » (590).
 *
 * Anti-doublon : l'article « directeur commercial externalisé » traite la
 * DIRECTION de la fonction commerciale. Celui-ci traite les COMMERCIAUX
 * externalisés (prestation de vente, agents, VRP multicartes) et y renvoie.
 *
 * POINTS SENSIBLES :
 * - Le cabinet ne fournit pas de commerciaux : il aide à décider, à cadrer et à
 *   piloter. À faire confirmer par l'auteur.
 * - Cadre juridique (prêt de main-d'œuvre illicite, obligation de vigilance,
 *   statut d'agent commercial et de VRP) : textes vérifiés sur Légifrance le
 *   24/09/2026, formulation prudente, renvoi vers un avocat pour le contrat.
 * - Aucun tarif de marché cité : aucune source publique fiable consultée.
 */
export const article: Article = {
  slug: "force-de-vente-externalisee",

  motCle: "force de vente externalisée (590/mois, KD 6) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "externaliser la force de vente (590/mois)",
    "force commerciale (590/mois)",
    "commerciaux externalisés",
  ],

  // 34 / 42
  metaTitle: "Force de vente externalisée en PME",
  // 148 / 150
  metaDescription:
    "Force de vente externalisée : les formats possibles, le cadre légal, les coûts à comparer et la façon de piloter un prestataire sans perdre la main.",

  h1: "Force de vente externalisée : quand et comment externaliser vos commerciaux",

  chapo:
    "Une force de vente externalisée est une équipe de commerciaux qui prospecte et vend pour votre compte sans être salariée de votre entreprise : prestataire spécialisé, agents commerciaux ou VRP multicartes. Pour une PME, c'est un moyen rapide d'ouvrir un marché, de tester une offre ou de couvrir un territoire sans recruter. Ce n'est pas un moyen de se décharger du commercial. Une force de vente externalisée vend ce qu'on lui donne à vendre, à qui on lui dit de le vendre : si votre cible, votre offre et votre suivi ne sont pas clairs, elle amplifie le flou. Voici comment choisir le bon format, ce que la loi encadre et comment piloter un prestataire.",

  essentiel: {
    reponse:
      "Externaliser la force de vente consiste à confier tout ou partie de la prospection et de la vente à des commerciaux qui ne sont pas vos salariés. Trois formats dominent : la prestation d'une société spécialisée, qui met ses commerciaux au service de vos objectifs ; l'agent commercial, mandataire indépendant rémunéré à la commission ; le VRP multicartes, salarié de plusieurs employeurs. Le choix dépend du cycle de vente, du besoin de contrôle et de la durée visée. Dans tous les cas, l'entreprise garde la stratégie, les prix, les données clients et le pilotage.",
    points: [
      "Trois formats : prestataire de vente, agent commercial, VRP multicartes",
      "Pertinent pour tester un marché, couvrir un territoire ou absorber un pic",
      "À garder en interne : la cible, l'offre, les prix, le fichier clients et le pilotage",
      "Cadre légal : pas de prêt de main-d'œuvre déguisé, obligation de vigilance dès 5 000 € HT",
      "Réussite : un brief écrit, des indicateurs partagés et une revue régulière",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qu'est-ce qu'une force de vente externalisée ?",
      blocs: [
        {
          type: "p",
          texte:
            "La force commerciale d'une entreprise, c'est l'ensemble des personnes qui trouvent des clients, les convainquent et entretiennent la relation. Dans beaucoup de PME, elle se résume au dirigeant et à un ou deux commerciaux. **L'externaliser, c'est ajouter des bras de vente sans créer de postes.** Les commerciaux restent liés à une autre structure, ou travaillent à leur compte.",
        },
        { type: "h3", texte: "Ce que la force de vente externalisée fait" },
        {
          type: "p",
          texte:
            "Selon le contrat, elle prend en charge la prospection (identifier et appeler des cibles, obtenir des rendez-vous), la vente (présenter l'offre, négocier, signer dans les limites fixées), ou l'animation d'un réseau existant (visiter des points de vente, réactiver des clients dormants). Elle peut intervenir à distance, sur le terrain, ou les deux.",
        },
        { type: "h3", texte: "Ce qu'elle ne fait pas" },
        {
          type: "p",
          texte:
            "Elle ne décide pas de votre positionnement, ne fixe pas votre politique de prix et ne réorganise pas votre équipe. Ce travail relève de la direction commerciale, qu'elle soit portée par le dirigeant, par un directeur salarié ou par un [directeur commercial externalisé](/infos-utiles/directeur-commercial-externalise/), dont nous avons détaillé le rôle. La question à se poser avant de signer est donc simple : vous manque-t-il des bras pour vendre, ou une tête pour organiser la vente ?",
        },
        {
          type: "p",
          texte:
            "En tant que [cabinet de conseil à Toulouse](/) qui accompagne des PME et ETI de 10 à 250 salariés, nous voyons souvent ce choix se faire dans l'urgence, après un trimestre décevant. C'est justement le moment où il mérite d'être posé à froid.",
        },
      ],
    },

    {
      label: "Les formats",
      titre: "Prestataire, agent commercial, VRP multicartes : trois façons d'externaliser",
      blocs: [
        {
          type: "p",
          texte:
            "Les trois formats n'engagent ni le même contrôle, ni le même coût, ni les mêmes obligations en fin de contrat. Le tableau ci-dessous résume ce qui les distingue.",
        },
        {
          type: "tableau",
          entetes: ["Format", "Ce qu'il faut savoir"],
          lignes: [
            [
              "Société de force de vente externalisée",
              "Prestation de services : le prestataire recrute, encadre et paie ses commerciaux, qui travaillent sur vos objectifs. Mise en route rapide, facturation au forfait, au temps passé ou avec une part variable. Vous achetez un résultat ou une activité, pas des personnes à diriger.",
            ],
            [
              "Agent commercial",
              "Mandataire indépendant qui négocie, et éventuellement conclut, des contrats en votre nom. Rémunéré à la commission, il représente souvent plusieurs mandants. Il a droit à une indemnité en fin de contrat, sauf exceptions prévues par la loi.",
            ],
            [
              "VRP multicartes",
              "Salarié de plusieurs employeurs, il exerce de façon exclusive et constante le métier de représentant. Le contrat fixe les produits, le secteur ou la clientèle et la rémunération. Vous êtes son employeur pour la part qui vous concerne.",
            ],
            [
              "Commercial salarié (pour comparaison)",
              "Poste créé dans votre entreprise, sous votre autorité directe. Contrôle maximal, coût fixe, recrutement et intégration plus longs.",
            ],
          ],
        },
        { type: "h3", texte: "L'agent commercial : un statut défini par le Code de commerce" },
        {
          type: "p",
          texte:
            "L'[article L134-1 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006220397) définit l'agent commercial comme un mandataire qui, à titre de profession indépendante et sans être lié par un contrat de louage de services, est chargé de façon permanente de négocier et, éventuellement, de conclure des contrats au nom et pour le compte de ses mandants. [Bpifrance Création](https://bpifrance-creation.fr/activites-reglementees/agent-commercial) rappelle qu'il s'immatricule au registre spécial des agents commerciaux et qu'il est travailleur indépendant, contrairement au VRP. Point à connaître avant de signer : l'[article L134-12](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006220456) lui ouvre droit, à la cessation du contrat, à une indemnité compensatrice en réparation du préjudice subi.",
        },
        { type: "h3", texte: "Le VRP multicartes : un salarié partagé" },
        {
          type: "p",
          texte:
            "L'[article L7311-3 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006904716) fixe les conditions du statut de VRP : travailler pour un ou plusieurs employeurs, exercer de façon exclusive et constante la représentation, ne faire aucune opération commerciale pour son compte, et être lié par des engagements qui précisent les produits, le secteur ou la clientèle, et le taux de rémunération. La [CCI Paris Île-de-France](https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/le-vrp-statut-et-contrat-de-travail) précise que le contrat d'un VRP multicartes doit mentionner les maisons ou produits qu'il représente déjà.",
        },
      ],
    },

    {
      label: "Les bonnes raisons",
      titre: "Externaliser la force de vente : dans quels cas c'est pertinent",
      blocs: [
        {
          type: "p",
          texte:
            "Externaliser n'est ni un aveu d'échec ni une solution universelle. C'est un bon choix quand le besoin est borné dans le temps ou dans l'espace, et quand l'offre sait déjà se vendre.",
        },
        {
          type: "liste",
          items: [
            "**Tester un nouveau marché ou une nouvelle offre** avant d'y affecter des recrutements : quelques mois de prospection disent si la demande existe",
            "**Couvrir un territoire éloigné** où un commercial salarié passerait plus de temps sur la route qu'en rendez-vous",
            "**Absorber un pic** : lancement de produit, salon, saisonnalité, campagne de réactivation de clients dormants",
            "**Remplir le haut du tunnel** quand vos commerciaux passent leurs journées à prospecter au lieu de conclure",
            "**Gagner du temps** quand recruter prendrait trop longtemps : France Travail titre son enquête 2025 sur les besoins en main-d'œuvre « [Un projet d'embauche sur deux jugé difficile](https://www.francetravail.org/statistiques-analyses/entreprises/metiers/bmo/enquete-besoins-en-main-d-oeuvre-2025.html?type=article) »",
          ],
        },
        { type: "h3", texte: "Les cas où ce n'est pas la bonne réponse" },
        {
          type: "p",
          texte:
            "Si votre offre ne trouve pas son marché, des commerciaux supplémentaires le démontreront plus vite et plus cher. Si le cycle de vente dure un an et repose sur une expertise technique pointue, un prestataire mettra longtemps à être crédible face à vos clients. Et si le problème est que personne ne suit les devis ni ne pilote les ventes, ajouter des bras ne règle rien : il faut d'abord structurer la fonction.",
        },
        { type: "h3", texte: "La question du dirigeant premier vendeur" },
        {
          type: "p",
          texte:
            "Dans une PME où les plus gros clients appellent le dirigeant, une force de vente externalisée peut prendre en charge la conquête pendant que lui garde les comptes historiques. C'est souvent un bon compromis de départ. Il ne remplace pas, à terme, le travail qui consiste à rendre le portefeuille clients indépendant d'une seule personne.",
        },
      ],
    },

    {
      label: "Le cadre légal",
      titre: "Force de vente externalisée : ce que la loi encadre",
      blocs: [
        {
          type: "p",
          texte:
            "Externaliser des commerciaux, c'est faire travailler des personnes qui ne sont pas vos salariés. Le droit du travail surveille de près cette situation, et deux règles concernent directement le dirigeant qui signe.",
        },
        { type: "h3", texte: "Pas de prêt de main-d'œuvre déguisé" },
        {
          type: "p",
          texte:
            "L'[article L8241-1 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030442435) est net : « Toute opération à but lucratif ayant pour objet exclusif le prêt de main-d'oeuvre est interdite. » Le travail temporaire et le travail à temps partagé font partie des exceptions prévues par le texte. Une prestation de force de vente est licite quand le prestataire vend un service : il encadre ses commerciaux, organise leur travail et s'engage sur une mission. **Le risque apparaît quand l'entreprise cliente dirige elle-même les commerciaux au quotidien**, comme s'ils étaient ses salariés, et que le prestataire se contente de facturer leurs heures.",
        },
        {
          type: "p",
          texte:
            "La frontière s'apprécie au cas par cas, sur les faits. Concrètement, passez vos demandes par le responsable désigné du prestataire, fixez des objectifs de mission plutôt que des consignes individuelles, et faites relire le contrat par un avocat si vous avez un doute.",
        },
        { type: "h3", texte: "L'obligation de vigilance dès 5 000 € HT" },
        {
          type: "p",
          texte:
            "L'[article L8222-1 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197683/) impose de vérifier, à la signature puis périodiquement pendant l'exécution, que votre cocontractant respecte ses obligations d'immatriculation et de déclaration. L'[article R8222-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030422273) fixe le seuil : toute opération d'un montant au moins égal à 5 000 euros hors taxes. La [DREETS Bretagne](https://bretagne.dreets.gouv.fr/Sous-traitance-les-obligations-de-vigilance-du-donneur-d-ordre) rappelle qu'en cas de manquement, si un travail dissimulé est constaté chez le prestataire, le donneur d'ordre peut être tenu à une solidarité financière avec lui.",
        },
        {
          type: "encadre",
          titre: "Les pièces à demander avant de démarrer",
          texte:
            "L'article D8222-5 du Code du travail les liste : un justificatif d'immatriculation et une attestation de fourniture des déclarations sociales et de paiement des cotisations (l'attestation de vigilance de l'Urssaf) de moins de six mois, à obtenir à la signature puis tous les six mois jusqu'à la fin de la mission. Pour un agent commercial, vérifiez aussi son immatriculation au registre spécial des agents commerciaux.",
        },
      ],
    },

    {
      label: "Le vrai coût",
      titre: "Coût d'une force commerciale externalisée : ce qu'il faut comparer",
      blocs: [
        {
          type: "p",
          texte:
            "Les devis de prestataires se comparent mal entre eux, et encore moins avec un salaire. La bonne méthode consiste à ramener chaque option au coût d'une vente conclue, pas au coût d'une journée.",
        },
        { type: "h3", texte: "Les modes de rémunération" },
        {
          type: "liste",
          items: [
            "**Forfait ou temps passé** : vous payez une activité (jours de prospection, nombre d'appels, rendez-vous). Prévisible, mais le risque commercial reste chez vous",
            "**Commission sur les ventes** : le modèle de l'agent commercial. Faible coût fixe, mais une commission sur un contrat récurrent pèse longtemps sur la marge",
            "**Formule mixte** : un fixe qui couvre l'activité, une part variable qui récompense le résultat. C'est souvent le meilleur alignement",
          ],
        },
        { type: "h3", texte: "Les coûts qu'on oublie" },
        {
          type: "p",
          texte:
            "Le temps que vous passerez à former le prestataire sur votre offre, à répondre à ses questions techniques et à relire ses comptes rendus. Les outils à partager. Les leads qu'il transmet et que votre équipe doit ensuite traiter. Et, pour un agent commercial, l'indemnité de fin de contrat, qui doit être anticipée dès la signature.",
        },
        { type: "h3", texte: "Raisonner en marge, pas en chiffre d'affaires" },
        {
          type: "p",
          texte:
            "Une force de vente externalisée qui signe beaucoup de petits contrats à forte remise peut faire monter le chiffre d'affaires et baisser le résultat. Avant de fixer une commission, calculez ce que chaque vente rapporte une fois tous les coûts déduits. Si ce calcul vous paraît fragile, c'est un sujet de pilotage financier, que nous traitons avec notre offre de [DAF externalisé](/daf-externalise-toulouse/).",
        },
      ],
    },

    {
      label: "Le choix",
      titre: "Choisir et briefer un prestataire de force de vente",
      blocs: [
        {
          type: "p",
          texte:
            "Le choix du prestataire compte moins que la qualité de ce que vous lui confiez. Un bon prestataire mal briefé produira des rendez-vous inutiles. Un brief précis vaut plusieurs semaines de gagnées.",
        },
        { type: "h3", texte: "Les questions à poser en consultation" },
        {
          type: "liste",
          items: [
            "Qui, concrètement, appellera ou rencontrera mes clients, et quelle est son expérience de ma typologie de vente ?",
            "Qui encadre ces commerciaux chez vous, et qui sera mon interlocuteur unique ?",
            "Quels indicateurs me transmettez-vous, à quelle fréquence et sous quelle forme ?",
            "À qui appartiennent les données collectées sur les prospects, et comment me sont-elles restituées en fin de mission ?",
            "Comment se passe l'arrêt du contrat, et avec quel préavis ?",
          ],
        },
        { type: "h3", texte: "Ce que doit contenir le brief" },
        {
          type: "p",
          texte:
            "La cible précise (secteurs, tailles d'entreprise, fonctions des interlocuteurs), les arguments et les objections fréquentes, les prix et la marge de négociation autorisée, ce qui constitue un rendez-vous ou un lead qualifié, et le circuit de transmission vers votre équipe. **Écrivez aussi ce que le prestataire n'a pas le droit de promettre** : délais, remises, fonctionnalités.",
        },
        { type: "h3", texte: "Commencer petit" },
        {
          type: "p",
          texte:
            "Un premier périmètre limité, sur un segment ou un territoire, pendant une durée courte avec un point d'étape écrit, permet de juger sur pièces avant d'élargir. C'est aussi la meilleure protection contre un engagement long signé sur une promesse.",
        },
      ],
    },

    {
      label: "Le pilotage",
      titre: "Piloter une force de vente externalisée sans perdre la main",
      blocs: [
        {
          type: "p",
          texte:
            "Externaliser la vente ne signifie pas externaliser le pilotage. Ce qui reste chez vous est même ce qui décide de la réussite : la stratégie, les prix, la relation avec les grands comptes et la connaissance des clients.",
        },
        {
          type: "tableau",
          entetes: ["Indicateur", "Ce qu'il vous dit"],
          lignes: [
            ["Activité (appels, rendez-vous obtenus)", "Si le prestataire travaille au rythme convenu. À lire avec les résultats, jamais seul"],
            ["Taux de qualification des leads", "La part des contacts transmis que votre équipe juge réellement utiles : le reflet de la qualité du brief"],
            ["Taux de transformation", "La part des rendez-vous qui deviennent des devis, puis des commandes"],
            ["Marge des ventes signées", "Si le chiffre d'affaires apporté gagne réellement de l'argent"],
            ["Coût par vente conclue", "Le seul chiffre qui permet de comparer avec un recrutement interne"],
          ],
        },
        { type: "h3", texte: "Le rituel de revue" },
        {
          type: "p",
          texte:
            "Une revue courte et régulière avec le responsable du prestataire : lecture des chiffres, retours de terrain, ajustement du ciblage. Les objections entendues par ses commerciaux sont une information précieuse sur votre offre. Encore faut-il qu'elle vous remonte.",
        },
        { type: "h3", texte: "Garder la propriété des données" },
        {
          type: "p",
          texte:
            "Exigez que chaque contact, chaque échange et chaque devis soient saisis dans votre outil de suivi client, ou restitués dans un format exploitable. En fin de mission, c'est tout ce qui reste de l'investissement.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, la stratégie commerciale est portée par Nicolas Vimini, directeur commercial externalisé qui compte 20 ans d'expérience en développement commercial. Il vous aide à décider s'il faut externaliser, à écrire le brief et à piloter le résultat ; les autres expertises de [notre équipe](/notre-equipe/) n'interviennent que si le sujet l'exige, sur un périmètre écrit avec vous. Si vous ne savez pas encore si votre blocage est commercial, organisationnel ou financier, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle différence entre force de vente externalisée et agent commercial ?",
      r: [
        "L'agent commercial est une forme de force de vente externalisée, avec un statut défini par le Code de commerce : mandataire indépendant, il négocie et parfois conclut des contrats en votre nom, contre une commission, et peut représenter plusieurs entreprises. Une société de force de vente externalisée vend un service : elle recrute, encadre et paie ses propres commerciaux. L'agent a droit à une indemnité en fin de contrat, sauf exceptions prévues par la loi.",
      ],
    },
    {
      q: "Combien de temps faut-il pour juger une force de vente externalisée ?",
      r: [
        "Cela dépend de votre cycle de vente. Les indicateurs d'activité et de qualification des leads se lisent en quelques semaines. Les ventes conclues demandent au moins la durée d'un cycle de vente complet, parfois plus pour des contrats importants. Fixez un point d'étape écrit dès la signature, avec les critères qui décideront de la suite, pour éviter de prolonger une mission par défaut.",
      ],
    },
    {
      q: "Puis-je donner des instructions directes aux commerciaux externalisés ?",
      r: [
        "Avec prudence. Dans une prestation de services, c'est le prestataire qui encadre ses commerciaux. Si votre entreprise les dirige au quotidien comme ses propres salariés, l'opération peut être regardée comme un prêt de main-d'œuvre illicite, interdit par l'article L8241-1 du Code du travail. Passez vos demandes par le responsable désigné du prestataire et faites relire le contrat par un avocat en cas de doute.",
      ],
    },
    {
      q: "Une force de vente externalisée peut-elle remplacer un directeur commercial ?",
      r: [
        "Non. Une force de vente externalisée prospecte et vend, elle ne fixe pas votre stratégie, vos prix ni l'organisation de votre équipe. Si personne ne pilote les ventes dans l'entreprise, des commerciaux externes produiront de l'activité sans cap. Dans ce cas, la priorité est de structurer la direction commerciale, en interne ou à temps partagé, puis de décider s'il faut des bras supplémentaires.",
      ],
    },
    {
      q: "Quelles vérifications faire avant de signer avec un prestataire de vente ?",
      r: [
        "Pour tout contrat d'au moins 5 000 euros hors taxes, le Code du travail impose de vérifier que le prestataire est immatriculé et à jour de ses déclarations sociales, à la signature puis tous les six mois : justificatif d'immatriculation et attestation de vigilance de l'Urssaf. Vérifiez aussi qui encadrera les commerciaux, à qui appartiendront les données clients et les conditions d'arrêt du contrat.",
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
      titre: "Article L134-12 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006220456",
    },
    {
      titre: "Article L7311-3 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006904716",
    },
    {
      titre: "Article L8241-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030442435",
    },
    {
      titre: "Article L8222-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197683/",
    },
    {
      titre: "Article R8222-1 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030422273",
    },
    {
      titre: "Article D8222-5 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046078939",
    },
    {
      titre: "Agent commercial | réglementation de l'activité",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/activites-reglementees/agent-commercial",
    },
    {
      titre: "Statut et contrat de travail du VRP, VRP multicartes ou représentant de commerce",
      editeur: "CCI Paris Ile-de-France",
      url: "https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/le-vrp-statut-et-contrat-de-travail",
    },
    {
      titre: "Sous-traitance : les obligations de vigilance du donneur d'ordre",
      editeur: "DREETS Bretagne",
      url: "https://bretagne.dreets.gouv.fr/Sous-traitance-les-obligations-de-vigilance-du-donneur-d-ordre",
    },
    {
      titre: "Enquête \"Besoins en Main-d'Oeuvre\" 2025",
      editeur: "France Travail",
      url: "https://www.francetravail.org/statistiques-analyses/entreprises/metiers/bmo/enquete-besoins-en-main-d-oeuvre-2025.html?type=article",
    },
  ],

  auteur: "nicolas-vimini",
  datePublication: "2026-11-02",
  accent: "commercial",
  pilier: { href: "/", ancre: "cabinet de conseil à Toulouse" },

  valide: true,
};
