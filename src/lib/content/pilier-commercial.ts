import type { PagePilier } from "@/lib/content/pilier";

/**
 * Silo 6 — Stratégie commerciale (master § 3). Référent : Nicolas Vimini, partenaire.
 * Intention propriétaire : « conseil en stratégie commerciale » (70/mois, KD 9) et
 * « consultant en stratégie commerciale » (50/mois, KD 0) — SE Ranking, 27/09/2026.
 * Secondaires : stratégie commerciale (290), accompagnement commercial (140), audit
 * commercial (110), organisation commerciale (110), pilotage commercial (90).
 *
 * ANTI-CANNIBALISATION. « Directeur commercial externalisé » appartient à l'article
 * /infos-utiles/directeur-commercial-externalise/, « force de vente externalisée » et
 * « externalisation commerciale » à /infos-utiles/force-de-vente-externalisee/. La page
 * les cite et les lie, elle ne les cible pas en title ni en H1.
 *
 * Aucune offre commerciale dans tarifs.ts : pas de grille, pas de prix inventé.
 * Seuls faits sur Nicolas Vimini : sa fiche dans `equipe` (home.ts).
 */
export const pilierCommercial: PagePilier = {
  href: "/conseil-strategie-commerciale-toulouse/",
  fil: "Stratégie commerciale",
  accent: "commercial",

  // « Conseil en stratégie commerciale, Toulouse » = 42 + 18 = 60 / 60
  metaTitle: "Conseil en stratégie commerciale, Toulouse",
  // 146 / 150
  metaDescription:
    "Conseil en stratégie commerciale pour TPE et PME à Toulouse : audit commercial, cap, organisation et pilotage de la vente par des indicateurs utiles.",
  nomService: "Conseil en stratégie commerciale pour TPE et PME",

  h1: "Conseil en stratégie commerciale pour PME à Toulouse : de la vente au feeling à un cap piloté",
  lede:
    "Beaucoup de PME vendent bien sans savoir exactement pourquoi, ni combien de temps cela durera. Notre conseil en stratégie commerciale remet de l'ordre dans ce qui fait votre chiffre d'affaires : à qui vous vendez, à quel prix, avec quelle organisation, et comment vous le suivez. Un consultant en stratégie commerciale, Nicolas Vimini, porte le sujet du diagnostic jusqu'à la mise en œuvre.",

  essentiel: {
    reponse:
      "Le conseil en stratégie commerciale d'Un Seul Souffle aide les dirigeants de TPE et PME de 10 à 250 salariés à clarifier leur cap commercial, à structurer leur organisation de vente et à la piloter par quelques indicateurs. Il commence par un audit commercial du fonctionnement réel — clients, offre, prix, équipe, suivi — puis fixe avec le dirigeant les chantiers prioritaires et les accompagne sur le terrain. Le référent est Nicolas Vimini, directeur commercial externalisé avec vingt ans d'expérience en développement commercial. Il ne vend pas à votre place : il construit avec vous et votre équipe une façon de vendre qui tient sans lui. L'intervention se souscrit seule, sur le périmètre convenu, à Toulouse et en Occitanie.",
    points: [
      "Pour qui : TPE et PME de 10 à 250 salariés, dirigeant qui porte encore la vente",
      "Référent : Nicolas Vimini, directeur commercial externalisé, 20 ans en développement commercial",
      "Ce que ça couvre : audit commercial, cap, politique commerciale, organisation, indicateurs",
      "Ce que ça n'est pas : une équipe de vendeurs mise à disposition",
      "Périmètre : arrêté avec vous, écrit dans la proposition",
      "Se souscrit seul, sans accompagnement global",
      "Zone : Toulouse, Haute-Garonne, Occitanie",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "Quand une PME a besoin d'un conseil en stratégie commerciale",
      blocs: [
        {
          type: "p",
          texte:
            "Dans la plupart des PME, la stratégie commerciale existe, mais dans la tête du dirigeant. Tant que l'entreprise est petite, cela suffit : il connaît chaque client, fixe les prix lui-même et sent quand le carnet de commandes se vide. **Le besoin d'un conseil en stratégie commerciale apparaît quand la croissance a dépassé ce que le dirigeant peut porter seul** — et que le chiffre d'affaires dépend encore de lui.",
        },
        {
          type: "liste",
          items: [
            "Une grande part du chiffre d'affaires repose sur quelques clients, et vous le savez",
            "Les prix et les remises se décident au cas par cas, sans règle écrite",
            "Vos commerciaux vendent ce qui est facile, pas ce qui rapporte",
            "Vous découvrez le mois écoulé en fin de mois, sans voir venir le suivant",
            "Un recrutement commercial n'a pas donné ce que vous attendiez",
            "Vous savez qu'il faut prospecter, mais personne n'en a le temps",
          ],
        },
        {
          type: "p",
          texte:
            "Aucun de ces signes n'est grave pris seul. Ensemble, ils disent la même chose : l'entreprise vend à l'énergie de son dirigeant plutôt qu'avec un cap partagé. C'est le blocage « stratégie incertaine » que nous décrivons sur la [page d'accueil du cabinet](/). Si vous hésitez sur la nature du blocage, le [diagnostic d'entreprise](/diagnostic/) en ligne vous aide à le situer en quelques minutes.",
        },
      ],
    },

    {
      label: "La confusion à lever",
      titre: "Conseil, directeur commercial externalisé, force de vente : trois réponses différentes",
      blocs: [
        {
          type: "p",
          texte:
            "Trois solutions se présentent quand la vente ne suit plus, et elles sont souvent confondues. Elles ne répondent pas au même problème. **Le conseil en stratégie commerciale décide de ce qu'il faut faire ; un directeur commercial externalisé le fait tenir dans la durée ; une force de vente externalisée exécute une partie de la vente.**",
        },
        {
          type: "tableau",
          entetes: ["Le besoin", "La réponse adaptée"],
          lignes: [
            [
              "Le cap est flou : quels clients viser, quelle offre pousser, à quel prix",
              "Conseil en stratégie commerciale : audit, choix, feuille de route",
            ],
            [
              "Le cap existe, mais personne ne pilote l'équipe ni les indicateurs",
              "[Directeur commercial externalisé](/infos-utiles/directeur-commercial-externalise/) à temps partagé",
            ],
            [
              "La stratégie est claire, il manque des bras pour prospecter",
              "[Force de vente externalisée](/infos-utiles/force-de-vente-externalisee/) : des commerciaux prestataires",
            ],
            [
              "Les règles de prix et de remise ne sont écrites nulle part",
              "[Politique commerciale](/infos-utiles/politique-commerciale/) formalisée avec l'équipe",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Externaliser des commerciaux avant d'avoir fixé le cap revient à accélérer sans savoir où l'on va : les rendez-vous se multiplient, la marge ne suit pas. C'est pourquoi notre intervention commence presque toujours par la stratégie, même quand la demande porte sur l'organisation de la vente.",
        },
      ],
    },

    {
      label: "Le travail",
      titre: "Ce que fait un consultant en stratégie commerciale dans votre PME",
      blocs: [
        {
          type: "p",
          texte:
            "Le travail suit un ordre, parce que chaque étape s'appuie sur la précédente. Nicolas Vimini ne livre pas un rapport : il construit chaque outil avec vous et vos commerciaux, puis vérifie qu'il est utilisé.",
        },
        { type: "h3", texte: "1. L'audit commercial : lire ce qui se passe vraiment" },
        {
          type: "p",
          texte:
            "L'audit commercial part des faits, pas des impressions. D'où vient le chiffre d'affaires, client par client et offre par offre ? Quelle marge rapporte chacun ? Comment un prospect devient-il client aujourd'hui, et où se perd-il ? Ces questions trouvent leurs réponses dans vos données de facturation, votre outil de suivi s'il existe, et des entretiens avec l'équipe. Le résultat surprend souvent : les meilleurs clients en volume ne sont pas toujours les plus rentables.",
        },
        { type: "h3", texte: "2. Le cap : choisir où aller, et ce qu'on arrête" },
        {
          type: "p",
          texte:
            "Une stratégie commerciale utile tient en peu de choix : les segments de clients à conquérir en priorité, l'offre à mettre en avant, le positionnement prix, les canaux de vente. Choisir, c'est aussi renoncer : aux clients qui coûtent plus qu'ils ne rapportent, aux offres que personne ne vend. Ces choix se traduisent ensuite en règles de prix et de remise, puis en un [plan d'action commercial](/infos-utiles/plan-d-action-commercial/) daté.",
        },
        { type: "h3", texte: "3. L'organisation commerciale : qui fait quoi" },
        {
          type: "p",
          texte:
            "L'organisation commerciale répond à des questions simples qui restent souvent sans réponse : qui prospecte, qui suit les comptes existants, qui décide d'une remise, combien de temps chacun consacre réellement à la vente. Tant que tout remonte au dirigeant, l'entreprise ne peut pas grandir plus vite que son agenda. Le travail consiste à répartir ces rôles et à écrire ce qui revient à chacun.",
        },
        { type: "h3", texte: "4. Le pilotage commercial : peu d'indicateurs, suivis chaque semaine" },
        {
          type: "p",
          texte:
            "Le pilotage commercial repose sur quelques indicateurs choisis pour votre activité — nombre de rendez-vous, taux de transformation, panier moyen, marge par segment — revus lors d'un point régulier avec l'équipe. Un tableau de vingt lignes que personne ne lit ne pilote rien. Le suivi de la marge se construit avec le [DAF externalisé](/daf-externalise-toulouse/) du cabinet quand il intervient déjà chez vous.",
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez",
          texte:
            "Un cap commercial écrit en une page, des règles de prix que l'équipe applique, une répartition claire des rôles, un plan d'action daté et quelques indicateurs revus chaque semaine. La traduction concrète : un chiffre d'affaires qui dépend moins de vous, et une marge que vous voyez venir.",
        },
      ],
    },

    {
      label: "Les erreurs courantes",
      titre: "Cinq erreurs qui freinent la vente dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Les mêmes erreurs reviennent d'une PME à l'autre, quel que soit le secteur. Aucune ne relève d'un manque de travail : elles viennent presque toujours d'une organisation commerciale qui a grandi sans être pensée. Les reconnaître est souvent le premier résultat d'un audit commercial.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Recruter un commercial pour régler un problème de stratégie.** Sans cible claire ni règles de prix, le nouveau venu vend comme il peut, et l'échec est mis sur son compte. Le cap se fixe avant le recrutement, pas après.",
            "**Mesurer le chiffre d'affaires, pas la marge.** Un commercial payé au volume accorde les remises qui font signer. Le chiffre monte, la rentabilité baisse, et personne ne le voit avant la clôture.",
            "**Laisser chaque remise se négocier au cas par cas.** Sans règle écrite, le prix dépend de celui qui négocie et du jour de la semaine. Une grille simple, connue de tous, protège la marge sans ralentir la vente.",
            "**Prospecter seulement quand le carnet se vide.** La prospection lancée dans l'urgence produit ses effets des mois plus tard, trop tard. Tenue chaque semaine, même à petit volume, elle lisse l'activité.",
            "**Garder le dirigeant au centre de chaque grosse affaire.** Tant que les clients importants ne parlent qu'à lui, l'entreprise ne peut pas grandir plus vite que son agenda, et sa valeur dépend de sa présence.",
          ],
        },
        {
          type: "p",
          texte:
            "Ces cinq erreurs se corrigent sans révolution : quelques règles écrites, des rôles répartis, un point de pilotage régulier. C'est le cœur du travail décrit plus haut, mené avec l'équipe plutôt qu'imposé par une note de service.",
        },
      ],
    },

    {
      label: "Le modèle",
      titre: "Un référent, un périmètre écrit, votre équipe au travail",
      blocs: [
        {
          type: "p",
          texte:
            "Votre interlocuteur est un seul consultant, du lancement de la mission à la fin de l'intervention : Nicolas Vimini, partenaire du cabinet. Directeur commercial externalisé, il compte vingt ans d'expérience en développement commercial. Il intervient pour clarifier la stratégie commerciale, structurer l'organisation et piloter l'activité avec des indicateurs adaptés. Sa présentation est sur la page [notre équipe](/notre-equipe/#nicolas-vimini).",
        },
        {
          type: "p",
          texte:
            "**Le périmètre est arrêté avec vous et écrit dans la proposition.** Si l'audit montre que le problème tient à l'organisation de l'entreprise ou à ses marges, votre référent vous le dit et peut faire appel à une autre expertise du cabinet, sur ce point précis. Le périmètre ne s'élargit pas sans votre accord, et on ne touche pas à ce qui fonctionne.",
        },
        {
          type: "p",
          texte:
            "Ce modèle a une contrepartie qu'il vaut mieux dire : vos commerciaux seront sollicités. L'audit passe par des entretiens avec eux, et les nouvelles règles se construisent avec ceux qui les appliqueront. Une stratégie écrite sans l'équipe commerciale est contournée dès la première négociation difficile.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un conseil en stratégie commerciale ?",
      r: [
        "C'est l'intervention d'un consultant extérieur qui aide le dirigeant à décider à qui vendre, quoi, à quel prix et avec quelle organisation, puis à suivre ces choix par quelques indicateurs.",
        "Chez Un Seul Souffle, elle commence par un audit commercial du fonctionnement réel et se poursuit sur le terrain avec l'équipe, jusqu'à ce que les nouvelles règles soient appliquées.",
      ],
    },
    {
      q: "Quelle différence avec un directeur commercial externalisé ?",
      r: [
        "Le conseil en stratégie commerciale fixe le cap et les règles. Un directeur commercial externalisé pilote l'équipe dans la durée, à temps partagé, une fois ce cap posé.",
        "Les deux se combinent souvent : la mission de conseil ouvre le sujet, le pilotage à temps partagé le fait tenir. Nicolas Vimini peut assurer les deux rôles.",
      ],
    },
    {
      q: "Allez-vous réorganiser toute mon équipe commerciale ?",
      r: [
        "Non. Le périmètre est arrêté avec vous au départ et écrit dans la proposition. Nous traitons les chantiers retenus, pas davantage.",
        "Ce qui fonctionne reste en place. L'audit sert justement à distinguer ce qui marche de ce qui bloque, avant de changer quoi que ce soit.",
      ],
    },
    {
      q: "Combien coûte un conseil en stratégie commerciale ?",
      r: [
        "Le coût dépend du périmètre : un audit commercial seul, ou un accompagnement de plusieurs mois jusqu'au pilotage. Il est fixé après le premier échange de 30 minutes avec Muriel ou Marjorie, qui est gratuit, et écrit dans la proposition avant tout engagement.",
      ],
    },
    {
      q: "Faut-il prendre tout l'accompagnement du cabinet ?",
      r: [
        "Non. Le conseil en stratégie commerciale se souscrit seul, avec un seul référent.",
        "Si l'audit met au jour un problème qui n'est pas commercial — une organisation qui freine, une marge mal connue — nous vous le disons. Vous restez libre de le traiter ou non.",
      ],
    },
    {
      q: "Intervenez-vous sur site ou à distance ?",
      r: [
        "Les deux. Les entretiens avec l'équipe et les points de pilotage se tiennent de préférence dans vos locaux, à Toulouse, en Haute-Garonne et en Occitanie ; l'analyse des données se fait à distance.",
      ],
    },
  ],

  bascule: {
    titre: "Si le blocage dépasse la vente",
    texte:
      "Un chiffre d'affaires qui stagne a souvent une cause hors du service commercial : des rôles flous, des décisions qui remontent toutes au dirigeant, une production qui ne suit pas. Dans ce cas, c'est l'organisation de l'entreprise qui se travaille — sur le périmètre que vous décidez.",
    href: "/transformation-entreprise/",
    ancre: "Découvrir le conseil en organisation",
  },
};
