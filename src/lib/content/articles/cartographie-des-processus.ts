import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, transformation de l'entreprise. Signé Yohan Castelar.
 * Requête : « cartographie des processus » (260/mois, KD 9). Secondaire :
 * « fiche processus » (390).
 *
 * ANTI-DOUBLON : « processus métier » (06/2027) traite la notion et la description
 * d'UN processus. Celui-ci traite la carte d'ensemble : familles, méthode, fiche
 * processus comme annexe de la carte, outils, erreurs. Il ne peut pas lier
 * l'article « processus métier », publié après lui.
 *
 * Sources ouvertes le 24/09/2026 : ISO, « Principes de management de la qualité »
 * (PDF, PMQ 4) ; ISO 9001:2015, extrait officiel diffusé par iTeh (§ 4.4) ; France Num, fiche du MOOC BPMN CARTOPRO'S ; Bpifrance Big Media,
 * article sur la Value Stream Mapping (29/06/2026). Les estimations chiffrées de
 * cet article Bpifrance (Lean Enterprise Institute, Gartner) ne sont PAS reprises :
 * elles sont de seconde main. Aucun cas client, aucun résultat chiffré du cabinet.
 */
export const article: Article = {
  slug: "cartographie-des-processus",

  motCle: "cartographie des processus (260/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "fiche processus (390/mois)",
    "comment faire une cartographie des processus",
    "processus de pilotage, de réalisation et de support",
  ],

  // 39 / 42
  metaTitle: "Cartographie des processus : la méthode",
  // 145 / 150
  metaDescription:
    "Cartographie des processus : les trois familles, la méthode en six étapes, le contenu d'une fiche processus et les erreurs qui rendent la carte vaine.",

  h1: "Cartographie des processus : la méthode pas à pas pour une PME",

  chapo:
    "Une cartographie des processus est une représentation, sur une seule page, de la façon dont votre entreprise transforme une demande client en produit livré et facturé. Elle range les activités en trois familles, pilotage, réalisation et support, et montre surtout ce qui circule entre elles. Bien faite, elle répond à une question que l'organigramme laisse ouverte : où la valeur se perd-elle entre deux services ? Elle se construit en quelques semaines, à partir du travail réel observé sur le terrain, pas des procédures écrites. Chaque processus reçoit ensuite une fiche processus d'une page : finalité, pilote, entrées, sorties, indicateurs. Voici la méthode, les outils et les erreurs à éviter.",

  essentiel: {
    reponse:
      "La cartographie des processus est un schéma qui représente l'ensemble des processus d'une entreprise et leurs interactions. Elle les classe en trois familles : les processus de pilotage (stratégie, décisions), de réalisation (ce qui produit la valeur pour le client) et de support (achats, ressources humaines, finance, informatique). La norme ISO 9001 repose sur cette approche processus, sans imposer de format de carte. Chaque processus est détaillé dans une fiche processus qui précise sa finalité, son pilote, ses entrées, ses sorties et ses indicateurs.",
    points: [
      "Une carte d'ensemble tient sur une page",
      "Trois familles : pilotage, réalisation, support, reliées par des flux de produits et d'information",
      "La carte se construit à partir du travail observé, pas de l'organigramme ni des procédures écrites",
      "Chaque processus a un pilote nommé et une fiche processus d'une page",
      "Les dysfonctionnements se logent presque toujours aux interfaces, entre deux processus",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Cartographie des processus : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Un processus est une suite d'activités qui transforme quelque chose qui entre (une commande, une matière, une demande) en quelque chose qui sort et qui a de la valeur pour quelqu'un. La cartographie des processus en donne la vue d'ensemble : quels processus existent dans votre entreprise, comment ils s'enchaînent, et qui en est responsable. **Une bonne carte ne décrit pas le travail en détail : elle montre comment les morceaux tiennent ensemble.**",
        },
        {
          type: "h3",
          texte: "Ce que dit la norme ISO",
        },
        {
          type: "p",
          texte:
            "L'approche processus est l'un des sept principes de management de la qualité qui sous-tendent ISO 9000 et ISO 9001. Selon le document de l'ISO [Principes de management de la qualité](https://www.iso.org/iso/fr/pub100080.pdf), « des résultats cohérents et prévisibles sont obtenus de manière plus efficace et efficiente lorsque les activités sont comprises et gérées comme des processus corrélés fonctionnant comme un système cohérent ». Parmi les actions possibles, l'ISO cite le fait de « déterminer les interdépendances entre processus » et de définir les autorités et les responsabilités relatives à leur management.",
        },
        {
          type: "p",
          texte:
            "La norme ISO 9001:2015 en tire des exigences concrètes. Son paragraphe 4.4, lisible dans l'[extrait officiel de la norme](https://cdn.standards.iteh.ai/samples/62085/531aa6c849a94072be59504d54a598e5/ISO-9001-2015.pdf), demande notamment de déterminer les éléments d'entrée et de sortie des processus, « la séquence et l'interaction de ces processus », les indicateurs de performance associés, les ressources nécessaires, et d'attribuer les responsabilités et autorités. Le texte ne prescrit aucune forme graphique : la cartographie est simplement la façon la plus lisible de répondre à ces exigences.",
        },
        {
          type: "h3",
          texte: "Processus, procédure, organigramme : trois objets différents",
        },
        {
          type: "p",
          texte:
            "La confusion est fréquente. L'organigramme dit qui rend compte à qui. La procédure dit comment réaliser une tâche précise, pas à pas. La cartographie dit comment la valeur traverse l'entreprise, d'un service à l'autre. Un [organigramme d'entreprise](/infos-utiles/organigramme-entreprise/) bien construit est utile, mais il est vertical ; les processus, eux, sont transversaux, et c'est là que se trouvent les pertes.",
        },
        {
          type: "p",
          texte:
            "C'est pour cette raison qu'une démarche de [conseil en organisation](/transformation-entreprise/) commence souvent par une lecture des flux plutôt que par une refonte des postes : on ne réorganise bien que ce que l'on a d'abord vu fonctionner.",
        },
      ],
    },

    {
      label: "Les trois familles",
      titre: "Processus de pilotage, de réalisation et de support",
      blocs: [
        {
          type: "p",
          texte:
            "Presque toutes les cartographies utilisent la même convention : trois familles de processus, disposées en bandes horizontales. En haut, le pilotage. Au centre, la réalisation, qui va de la demande du client à la satisfaction du client. En bas, le support. Ce découpage n'est pas une obligation normative, mais c'est le plus lisible, et il oblige à se poser la bonne question pour chaque activité : sert-elle le client directement, ou sert-elle ceux qui le servent ?",
        },
        {
          type: "tableau",
          entetes: ["Famille", "Ce qu'elle recouvre dans une PME"],
          lignes: [
            [
              "Processus de pilotage (ou de management)",
              "Définir la stratégie, fixer les objectifs, arbitrer les ressources, suivre les indicateurs, conduire l'amélioration",
            ],
            [
              "Processus de réalisation (ou opérationnels)",
              "Vendre, concevoir, acheter les matières propres au produit, produire, livrer, facturer, assurer le service après-vente",
            ],
            [
              "Processus de support",
              "Ressources humaines, finance et comptabilité, informatique, maintenance, achats généraux, entretien des locaux",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Combien de processus sur la carte ?",
        },
        {
          type: "p",
          texte:
            "Il n'existe pas de chiffre juste. En pratique, une carte lisible pour une PME compte huit à quinze processus. En dessous, chaque case est trop large pour avoir un pilote ; au-dessus, la carte devient un inventaire. Si un processus demande plus de mots qu'il n'en tient dans sa case, découpez-le en sous-processus et détaillez-les dans une carte de second niveau.",
        },
      ],
    },

    {
      label: "Pourquoi",
      titre: "Pourquoi cartographier ses processus dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "On ne cartographie pas par goût du schéma. On y vient parce que quelque chose coince et que personne ne sait dire où.",
        },
        {
          type: "liste",
          items: [
            "**Les mêmes erreurs reviennent** : commandes saisies deux fois, livraisons incomplètes, factures qui partent en retard, sans qu'aucun service ne se sente responsable",
            "**Tout repose sur quelques personnes** : quand elles sont absentes, le flux s'arrête, parce que le processus n'existe que dans leur tête",
            "**La croissance va plus vite que la structure** : ce qui marchait à vingt ne marche plus à soixante, et les arrangements informels craquent",
            "**Un projet transversal démarre** : un nouveau logiciel de gestion, un déménagement, une certification, une reprise d'entreprise",
            "**Les indicateurs ne disent rien d'utile** : on mesure beaucoup, mais pas aux endroits où la valeur se perd",
          ],
        },
        {
          type: "h3",
          texte: "Voir les interfaces, là où se logent les pertes",
        },
        {
          type: "p",
          texte:
            "À l'intérieur d'un service, le travail est généralement bien tenu. **Les pertes se logent entre les services : l'information qui arrive incomplète, le dossier qui attend sur un bureau, la décision que personne n'a le droit de prendre.** Parmi les bénéfices de l'approche processus, l'ISO cite justement « une réduction des obstacles interfonctionnels ». Une carte rend ces interfaces visibles.",
        },
        {
          type: "h3",
          texte: "Préparer un gain de productivité sans pressurer les équipes",
        },
        {
          type: "p",
          texte:
            "Quand on cherche un [gain de productivité](/infos-utiles/gain-de-productivite/), la tentation est de demander à chacun d'aller plus vite. La carte montre une autre voie : supprimer les attentes, les ressaisies et les allers-retours. Le gain vient du flux, pas de l'effort individuel.",
        },
        {
          type: "h3",
          texte: "Rendre l'entreprise moins dépendante de son dirigeant",
        },
        {
          type: "p",
          texte:
            "Dans beaucoup de PME, le dirigeant est lui-même une interface : les arbitrages entre commerce, production et finance passent par lui. La carte les rend visibles et permet de décider lesquels confier au pilote d'un processus. C'est une étape décisive pour préparer une [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/) qui tienne dans la durée.",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Comment faire une cartographie des processus en six étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Cette méthode convient à une PME de 10 à 250 salariés. Elle privilégie le terrain : une carte dessinée seul dans un bureau décrit l'entreprise telle qu'on l'imagine.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Fixer l'objectif et le périmètre** : toute l'entreprise, un site, ou un flux précis comme la commande client",
            "**Constituer un petit groupe** : quatre à huit personnes de services différents, dont au moins une qui fait le travail au quotidien",
            "**Lister les processus** : partir des sorties attendues par le client et remonter, puis ajouter pilotage et support",
            "**Observer le terrain** : suivre un dossier réel de bout en bout, noter les attentes, les ressaisies, les allers-retours",
            "**Dessiner et relier** : une page, trois bandes, des flèches pour les flux de produits et d'information",
            "**Nommer les pilotes et valider** : un responsable par processus, une relecture par ceux qui font le travail",
          ],
        },
        {
          type: "h3",
          texte: "Partir du client, pas de l'organigramme",
        },
        {
          type: "p",
          texte:
            "La question de départ n'est pas « que fait chaque service ? » mais « que reçoit le client, et par quelles étapes cela passe-t-il ? ». Formulez les processus avec un verbe à l'infinitif : vendre, concevoir, produire, livrer, facturer. Un nom de service (« l'ADV », « l'atelier ») est un indice que vous êtes en train de redessiner l'organigramme.",
        },
        {
          type: "h3",
          texte: "Aller voir le travail réel",
        },
        {
          type: "p",
          texte:
            "Dans son article sur la [Value Stream Mapping](https://bigmedia.bpifrance.fr/news/value-stream-mapping-la-cartographie-au-service-de-la-performance-en-entreprise), Bpifrance décrit une démarche collective qui commence par définir le périmètre, réunir des profils variés (opérateurs, managers, logistique, qualité), puis observer le fonctionnement réel du processus, étape par étape : temps de traitement et d'attente, mouvements physiques, échanges d'informations. Ce n'est qu'ensuite qu'on dessine l'état actuel.",
        },
        {
          type: "h3",
          texte: "Valider avec ceux qui font le travail",
        },
        {
          type: "p",
          texte:
            "Une carte validée par la seule direction est une hypothèse. Demandez aux équipes : « est-ce que c'est comme ça que ça se passe ? ». Leurs corrections montrent l'écart entre travail prescrit et travail réel, là où se trouvent les leviers.",
        },
      ],
    },

    {
      label: "Fiche processus",
      titre: "La fiche processus : l'annexe qui rend la carte utilisable",
      blocs: [
        {
          type: "p",
          texte:
            "La carte montre les processus ; la fiche processus dit comment chacun est tenu. Elle tient sur une page. Sans fiche, une carte reste un joli schéma ; avec, elle devient un outil de pilotage que chaque responsable peut s'approprier.",
        },
        {
          type: "tableau",
          entetes: ["Rubrique de la fiche processus", "Ce qu'on y écrit"],
          lignes: [
            ["Finalité", "Pourquoi ce processus existe, en une phrase tournée vers son client, interne ou externe"],
            ["Pilote", "Une personne nommée, pas un service : celle qui répond du résultat et peut arbitrer"],
            ["Début et fin", "L'événement qui déclenche le processus et celui qui le termine"],
            ["Entrées et fournisseurs", "Ce que le processus reçoit, et de quel processus ou partenaire"],
            ["Sorties et clients", "Ce qu'il produit, et pour quel processus ou client"],
            ["Activités principales", "Cinq à dix étapes, pas davantage ; le détail relève des procédures"],
            ["Ressources", "Personnes, outils, logiciels, équipements nécessaires"],
            ["Indicateurs", "Deux ou trois mesures au plus : délai, qualité, coût, selon la finalité"],
            ["Risques et interfaces sensibles", "Les points où le processus casse le plus souvent"],
          ],
        },
        {
          type: "h3",
          texte: "Un pilote, pas un propriétaire",
        },
        {
          type: "p",
          texte:
            "La rubrique la plus importante est aussi la plus délicate. Le pilote n'exécute pas tout le processus : il veille à ce qu'il produise son résultat, et il a le droit de proposer et de trancher des changements. L'ISO invite précisément à « définir les autorités, les responsabilités et les obligations relatives au management des processus ». **Nommer un pilote sans lui donner ce droit revient à désigner un coupable, pas un responsable.**",
        },
      ],
    },

    {
      label: "Outils",
      titre: "Quel outil et quel niveau de détail choisir ?",
      blocs: [
        {
          type: "p",
          texte:
            "Choisissez d'abord le niveau de détail, ensuite l'outil. Pour une carte d'ensemble, un mur et des post-it suffisent souvent. Pour décrire finement un processus, des notations plus rigoureuses deviennent utiles.",
        },
        {
          type: "tableau",
          entetes: ["Outil ou notation", "Quand l'utiliser"],
          lignes: [
            [
              "Carte en trois bandes (pilotage, réalisation, support)",
              "Vue d'ensemble de l'entreprise, partagée avec toute l'équipe de direction",
            ],
            [
              "SIPOC (fournisseurs, entrées, processus, sorties, clients)",
              "Cadrer un processus avant de le détailler, ou remplir une fiche processus",
            ],
            [
              "Logigramme ou diagramme en couloirs",
              "Montrer qui fait quoi dans un processus qui traverse plusieurs services",
            ],
            [
              "BPMN",
              "Décrire précisément un processus, notamment avant de le paramétrer dans un logiciel",
            ],
            [
              "Value Stream Mapping (VSM)",
              "Flux de production : rendre visibles les stocks, les attentes et les gaspillages",
            ],
          ],
        },
        {
          type: "h3",
          texte: "BPMN, le standard pour décrire finement",
        },
        {
          type: "p",
          texte:
            "Selon la fiche de France Num consacrée au MOOC [Introduction à la cartographie des processus métiers avec BPMN](https://www.francenum.gouv.fr/formations/introduction-la-cartographie-des-processus-metiers-avec-bpmn-cartopros), BPMN (Business Process Model and Notation) est une méthode de modélisation qui décrit les chaînes de valeur et les activités métier sous forme graphique ; elle constitue la norme internationale ISO/CEI 19510. Le cours, en ligne, dure six semaines, dont quatre de formation. Il est utile si l'un de vos collaborateurs doit modéliser des processus régulièrement. Pour une carte d'ensemble, en revanche, BPMN est trop détaillé.",
        },
        {
          type: "h3",
          texte: "La VSM pour les flux de production",
        },
        {
          type: "p",
          texte:
            "Dans un atelier, la Value Stream Mapping ajoute ce que les autres outils oublient : le temps. Bpifrance rappelle qu'elle vise à réduire sept types de gaspillages, dont la surproduction, les attentes, les stocks excédentaires et les produits défectueux. Elle débouche sur un processus cible et un plan d'actions : c'est le bon prolongement de la carte sur le processus « produire ».",
        },
      ],
    },

    {
      label: "Erreurs",
      titre: "Les erreurs qui rendent une cartographie des processus inutile",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup d'entreprises ont une cartographie dans un classeur. Peu s'en servent. Les causes sont presque toujours les mêmes.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["Erreur fréquente", "Ce qu'il faut faire à la place"],
          lignes: [
            [
              "Cartographier l'organigramme, service par service",
              "Partir du client et suivre le flux à travers les services",
            ],
            [
              "Décrire l'entreprise telle qu'elle devrait fonctionner",
              "Dessiner d'abord l'état réel, avec ses contournements",
            ],
            [
              "Confier la carte à un seul rédacteur, souvent le responsable qualité",
              "La construire en groupe, avec ceux qui font le travail",
            ],
            [
              "Viser l'exhaustivité dès le premier jet",
              "Une page d'abord, le détail seulement là où ça coince",
            ],
            [
              "Nommer un service comme pilote",
              "Nommer une personne, avec le droit de proposer et de trancher",
            ],
            [
              "Ranger la carte une fois l'audit passé",
              "La relire chaque année et à chaque changement d'organisation",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Confondre la carte et le chantier",
        },
        {
          type: "p",
          texte:
            "La cartographie est un diagnostic, pas une solution. Elle montre où les flux se perdent ; elle ne dit pas encore comment les réparer. Ne cherchez pas non plus à tout corriger à la fois : traitez d'abord les deux ou trois interfaces qui coûtent le plus en délais, en erreurs ou en tensions.",
        },
      ],
    },

    {
      label: "Et après",
      titre: "De la cartographie au terrain : faire vivre la carte",
      blocs: [
        {
          type: "p",
          texte:
            "Une cartographie des processus n'a de valeur que si elle change le quotidien. Trois usages la font vivre : support des revues de direction, où chaque pilote présente ses indicateurs ; accueil des nouveaux arrivants ; référence de chaque projet de changement, qui se pose d'abord sur la carte.",
        },
        {
          type: "p",
          texte:
            "Dans [notre méthode](/un-seul-souffle/), cartographier est justement la troisième étape : une lecture systémique des flux, des rôles et des tensions, par immersion terrain et entretiens, qui débouche sur une stratégie d'action priorisée, fondée sur le fonctionnement réel et non sur l'organigramme. Un conseiller référent conduit ce travail avec vous ; une autre expertise du cabinet n'intervient que si le sujet l'exige, par exemple quand un flux révèle un problème de marge. Le périmètre est arrêté avec vous au départ et ne s'élargit pas sans votre accord. **On ne touche pas à ce qui fonctionne.**",
        },
        {
          type: "p",
          texte:
            "Si vous sentez que votre organisation freine sans savoir exactement où, commencez par un [diagnostic d'entreprise](/diagnostic/) : il vous aide à situer le problème avant de décider s'il faut cartographier toute l'entreprise ou un seul flux.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'une cartographie des processus ?",
      r: [
        "C'est un schéma, généralement sur une page, qui représente l'ensemble des processus d'une entreprise et leurs interactions. Les processus y sont classés en trois familles : pilotage, réalisation et support. La carte montre comment une demande client traverse les services jusqu'à la livraison et la facturation. Elle sert à repérer les interfaces où la valeur se perd, à nommer un responsable par processus et à préparer les projets d'amélioration.",
      ],
    },
    {
      q: "Que contient une fiche processus ?",
      r: [
        "Une fiche processus tient sur une page. Elle précise la finalité du processus, son pilote, l'événement qui le déclenche et celui qui le termine, ses entrées et leurs fournisseurs, ses sorties et leurs clients, ses principales activités, ses ressources, deux ou trois indicateurs et les risques ou interfaces sensibles. Elle complète la cartographie : la carte montre l'ensemble, la fiche dit comment chaque processus est tenu.",
      ],
    },
    {
      q: "La cartographie des processus est-elle obligatoire pour ISO 9001 ?",
      r: [
        "La norme ISO 9001:2015 repose sur l'approche processus : son paragraphe 4.4 demande de déterminer les processus nécessaires, leur séquence et leurs interactions. Il ne prescrit pas de forme graphique. En pratique, une cartographie est le moyen le plus simple de montrer ces interactions à un auditeur. Mais une PME non certifiée a tout autant intérêt à en faire une, pour voir où ses flux se perdent.",
      ],
    },
    {
      q: "Combien de temps faut-il pour cartographier ses processus ?",
      r: [
        "Pour une PME, une première carte d'ensemble se construit en quelques ateliers, répartis sur quelques semaines, auxquels s'ajoute le temps d'observation du terrain. La durée dépend surtout du périmètre et de la disponibilité des équipes. Mieux vaut une carte d'une page validée rapidement, puis approfondie là où les flux coincent, qu'une cartographie exhaustive qui demande des mois et ne sert plus quand elle est terminée.",
      ],
    },
  ],

  sources: [
    {
      titre: "Principes de management de la qualité",
      editeur: "ISO (Organisation internationale de normalisation)",
      url: "https://www.iso.org/iso/fr/pub100080.pdf",
    },
    {
      titre: "ISO 9001:2015 Systèmes de management de la qualité — Exigences (extrait, § 4.4)",
      editeur: "ISO, aperçu diffusé par iTeh Standards",
      url: "https://cdn.standards.iteh.ai/samples/62085/531aa6c849a94072be59504d54a598e5/ISO-9001-2015.pdf",
    },
    {
      titre: "Introduction à la cartographie des processus métiers avec BPMN - CARTOPRO'S",
      editeur: "France Num (ministère de l'Économie)",
      url: "https://www.francenum.gouv.fr/formations/introduction-la-cartographie-des-processus-metiers-avec-bpmn-cartopros",
    },
    {
      titre: "Value Stream Mapping : la cartographie au service de la performance en entreprise",
      editeur: "Bpifrance (Big Media)",
      url: "https://bigmedia.bpifrance.fr/news/value-stream-mapping-la-cartographie-au-service-de-la-performance-en-entreprise",
    },
  ],

  auteur: "yohan-castelar",
  datePublication: "2027-03-08",
  accent: "production",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: true,
};
