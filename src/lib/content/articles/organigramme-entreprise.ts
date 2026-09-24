import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, organisation et coopération. Signé Muriel Saffroy.
 * Requête : « comment faire un organigramme » (590/mois, KD 10). Secondaires :
 * « organigramme hiérarchique » (590), « qu'est-ce qu'un organigramme » (590).
 *
 * L'intention « conseil en organisation » appartient au pilier
 * /transformation-entreprise/ : cet article traite la méthode (dessiner, puis
 * faire vivre un organigramme) et renvoie vers lui.
 *
 * POINTS SENSIBLES — JURIDIQUE. Le chapitre « Ce que l'organigramme engage »
 * cite l'article L2312-8 du Code du travail (consultation du CSE, entreprises
 * d'au moins 50 salariés) et l'arrêt Cass. crim. 11 mars 1993 (délégation de
 * pouvoirs). Formulations volontairement prudentes : l'organigramme n'est
 * présenté ni comme obligatoire, ni comme valant délégation. Renvoi vers un
 * avocat pour les actes. Sources vérifiées le 24/09/2026.
 */
export const article: Article = {
  slug: "organigramme-entreprise",

  motCle: "comment faire un organigramme (590/mois, KD 10) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "organigramme hiérarchique (590/mois)",
    "qu'est-ce qu'un organigramme (590/mois)",
    "organigramme d'entreprise",
    "organigramme fonctionnel",
  ],

  // 39 / 42
  metaTitle: "Comment faire un organigramme : méthode",
  // 150 / 150
  metaDescription:
    "Comment faire un organigramme d'entreprise utile : les types, la méthode en six étapes, les erreurs à éviter et ce qu'il engage vraiment dans une PME.",

  h1: "Comment faire un organigramme d'entreprise qui serve vraiment",

  chapo:
    "Pour faire un organigramme utile, ne commencez pas par le logiciel : commencez par la réalité. Listez les fonctions dont l'entreprise a besoin, rattachez chacune à une personne, écrivez qui décide quoi, puis confrontez le dessin à la façon dont les décisions circulent réellement. Un organigramme d'entreprise n'est pas un trombinoscope. C'est la carte des responsabilités, et il ne vaut que s'il dit vrai. Dans beaucoup de PME, il existe bien, mais il décrit une organisation que personne n'applique. Voici ce qu'est un organigramme, les formes possibles, la méthode en six étapes et les erreurs qui le rendent inutile.",

  essentiel: {
    reponse:
      "Un organigramme est la représentation graphique de la structure d'une entreprise : les fonctions, les personnes qui les tiennent et les liens d'autorité entre elles. L'organigramme hiérarchique, le plus courant, montre qui rend compte à qui. Pour en faire un, on part des fonctions et non des personnes, on fixe un seul responsable par fonction, on précise le périmètre de décision de chacun, on vérifie le dessin avec les équipes, puis on le met à jour à chaque changement. Il n'est pas obligatoire, mais il sert de base aux fiches de poste, aux délégations et à l'information du personnel.",
    points: [
      "Un organigramme montre les fonctions, les responsables et les liens d'autorité, pas le fonctionnement réel",
      "Formes courantes : hiérarchique, fonctionnel, par activité ou par site, matriciel",
      "Méthode : partir des fonctions, un responsable par case, des périmètres de décision écrits, une vérification sur le terrain",
      "Erreur la plus fréquente : dessiner l'organisation souhaitée en la présentant comme l'organisation actuelle",
      "À partir de 50 salariés, modifier l'organisation relève de la consultation du CSE",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qu'est-ce qu'un organigramme d'entreprise ?",
      blocs: [
        {
          type: "p",
          texte:
            "Un organigramme est un schéma. Il représente les fonctions de l'entreprise sous forme de cases, les personnes qui les occupent, et des traits qui indiquent qui rend compte à qui. **Il répond à une question simple : pour tel sujet, qui est responsable, et de qui dépend-il ?** S'il ne permet pas d'y répondre en quelques secondes, il ne remplit pas son rôle.",
        },
        { type: "h3", texte: "Ce qu'un organigramme montre" },
        {
          type: "liste",
          items: [
            "**Les fonctions** : direction, production, commercial, administration, finance, qualité, logistique",
            "**Les titulaires** : le nom de la personne qui tient chaque fonction, ou la mention d'un poste vacant",
            "**Les liens d'autorité** : qui fixe les objectifs de qui, qui arbitre en cas de désaccord",
            "**Les niveaux** : combien d'étages séparent un opérateur de la direction",
          ],
        },
        { type: "h3", texte: "Ce qu'il ne montre pas" },
        {
          type: "p",
          texte:
            "Un organigramme ne dit rien de la façon dont le travail circule d'un service à l'autre, ni de la manière dont les décisions se prennent réellement. Il ne montre pas que le responsable de production appelle directement le dirigeant pour chaque devis urgent, ni que l'assistante de direction est de fait la seule à connaître tous les dossiers clients. C'est pour cela que, dans notre méthode, le diagnostic d'une organisation s'appuie sur le fonctionnement réel et non sur l'organigramme. Le schéma reste le point de départ indispensable ; il n'est jamais le point d'arrivée.",
        },
        { type: "h3", texte: "À partir de quand en faire un" },
        {
          type: "p",
          texte:
            "Aucun texte n'impose à une PME de tenir un organigramme. Selon la [définition de l'INSEE](https://www.insee.fr/fr/metadonnees/definition/c1962), une PME occupe moins de 250 personnes : entre dix et deux cent cinquante salariés, l'écart est énorme. À dix, tout le monde sait qui fait quoi. Au-delà d'une vingtaine de personnes, ou dès qu'apparaît un premier niveau d'encadrement, les nouveaux arrivants ne le savent plus. L'organigramme devient alors l'outil qui évite à chacun de reconstituer seul l'organisation.",
        },
      ],
    },

    {
      label: "Les formes",
      titre: "Organigramme hiérarchique, fonctionnel, matriciel : les principaux types",
      blocs: [
        {
          type: "p",
          texte:
            "Il n'existe pas de bon type d'organigramme dans l'absolu. Chaque forme met en avant une logique : l'autorité, le métier, le client, le territoire. Le choix dépend de ce que vous voulez rendre lisible, et donc de la question que vos équipes se posent le plus souvent.",
        },
        {
          type: "tableau",
          entetes: ["Type d'organigramme", "Ce qu'il met en avant, et pour qui"],
          lignes: [
            ["Hiérarchique", "Les liens d'autorité, de la direction aux équipes. Le plus courant en PME, le plus lisible pour un nouvel arrivant."],
            ["Fonctionnel", "Les grandes fonctions (production, vente, finance) et leurs missions. Utile quand les rôles comptent plus que les noms."],
            ["Par activité ou par produit", "Chaque ligne d'activité avec ses propres moyens. Adapté aux entreprises qui ont plusieurs métiers distincts."],
            ["Géographique", "Les sites, agences ou établissements. Pertinent pour une PME multisite ou après un rachat."],
            ["Matriciel", "Une double appartenance : un métier et un projet, ou un métier et un site. Plus fidèle à certaines réalités, plus difficile à lire."],
            ["Circulaire ou en cercles", "La direction au centre, les équipes autour. Signale une volonté de proximité, mais efface souvent les liens d'autorité."],
          ],
        },
        { type: "h3", texte: "L'organigramme hiérarchique, point de départ de la plupart des PME" },
        {
          type: "p",
          texte:
            "L'organigramme hiérarchique se lit de haut en bas : la direction en haut, puis les responsables de service, puis les équipes. Il a un grand mérite, celui de répondre à la question que se pose chaque salarié : à qui dois-je rendre compte ? Il a une limite, celle de laisser croire que tout passe par la ligne hiérarchique, alors que l'essentiel du travail quotidien se fait entre services, à l'horizontale.",
        },
        { type: "h3", texte: "Quand combiner deux formes" },
        {
          type: "p",
          texte:
            "Beaucoup d'entreprises gagnent à publier deux vues : un organigramme hiérarchique pour l'autorité, et un organigramme fonctionnel pour les missions. Une PME industrielle avec deux sites peut aussi présenter une vue par site sous une direction commune. L'important est que chaque vue réponde à une question précise, et que toutes restent cohérentes entre elles.",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Comment faire un organigramme en six étapes",
      exergue: "Partez des fonctions, pas des personnes : c'est la seule façon de voir ce qui manque.",
      blocs: [
        {
          type: "p",
          texte:
            "La tentation est d'ouvrir un logiciel et de placer des noms dans des cases. C'est le moyen le plus sûr d'obtenir un organigramme qui reproduit les habitudes au lieu de clarifier les responsabilités. La méthode ci-dessous inverse l'ordre : les fonctions d'abord, les noms ensuite, le logiciel en dernier. Si vous constatez en chemin que le problème n'est pas le schéma mais l'organisation elle-même, c'est le terrain du [conseil en organisation](/transformation-entreprise/).",
        },
        { type: "h3", texte: "Étape 1 : lister les fonctions, sans les noms" },
        {
          type: "p",
          texte:
            "Écrivez les fonctions dont l'entreprise a besoin pour tourner : produire, vendre, acheter, livrer, facturer, recruter, garantir la qualité, tenir la sécurité, piloter la trésorerie. Faites-le sans penser aux personnes en place. Cette liste révèle souvent des fonctions orphelines, que tout le monde croit tenues par quelqu'un d'autre.",
        },
        { type: "h3", texte: "Étape 2 : regrouper et rattacher" },
        {
          type: "p",
          texte:
            "Regroupez les fonctions en services cohérents, puis rattachez chaque service à un responsable. Choisissez à ce moment la forme principale : hiérarchique, par activité ou par site. Une règle à tenir : une case, un responsable. Deux noms dans la même case signifient en pratique que personne ne tranche.",
        },
        { type: "h3", texte: "Étape 3 : placer les personnes et écrire les périmètres" },
        {
          type: "p",
          texte:
            "Seulement maintenant, placez les noms. Pour chaque case, rédigez en deux ou trois lignes ce que la personne décide seule, ce qu'elle décide après avis, et ce qu'elle doit faire valider. Ce travail prépare les fiches de poste : Bpifrance Création rappelle, dans sa fiche [Recruter du personnel](https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/equipe-developpement-competences/recruter-du-personnel), que définir un besoin suppose de décrire les caractéristiques du poste avant le profil recherché.",
        },
        { type: "h3", texte: "Étape 4 : confronter le dessin au terrain, puis publier" },
        {
          type: "p",
          texte:
            "Montrez le projet aux responsables concernés, un par un, avec une seule question : est-ce ainsi que les choses se passent ? Les écarts sont précieux. Ensuite viennent la mise en forme, la diffusion et une date de mise à jour. Les deux dernières étapes, publier et tenir à jour, sont celles que l'on oublie le plus souvent.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Lister** les fonctions nécessaires, sans les noms",
            "**Regrouper** en services et choisir la forme principale",
            "**Placer** les personnes et écrire les périmètres de décision",
            "**Vérifier** le dessin avec les responsables concernés",
            "**Publier** avec une date, là où les équipes le trouvent",
            "**Mettre à jour** à chaque arrivée, départ ou changement de rôle",
          ],
        },
      ],
    },

    {
      label: "Les pièges",
      titre: "Les erreurs qui rendent un organigramme inutile",
      blocs: [
        {
          type: "p",
          texte:
            "Un organigramme raté ne fait pas de bruit. Il est rangé dans le livret d'accueil, personne ne le consulte, et les salariés continuent de s'adresser à ceux qui répondent vraiment. Cinq erreurs expliquent la plupart de ces échecs.",
        },
        { type: "h3", texte: "Dessiner l'organisation rêvée" },
        {
          type: "p",
          texte:
            "C'est l'erreur la plus répandue : présenter comme actuelle une organisation que l'on voudrait avoir. Un directeur commercial qui n'a pas encore été recruté, un responsable de service qui n'a jamais reçu l'autorité correspondante. **Un organigramme qui ment perd sa crédibilité dès la première semaine, et avec lui la parole de celui qui l'a publié.** Si une cible existe, publiez-la à part, avec une date.",
        },
        { type: "h3", texte: "Confondre titre et responsabilité" },
        {
          type: "p",
          texte:
            "Une case intitulée « responsable qualité » ne dit pas si cette personne peut arrêter une livraison non conforme. Or c'est exactement ce que les autres ont besoin de savoir. Dans beaucoup de PME, les rôles existent sur l'organigramme sans que personne ait reçu le droit explicite de trancher, et donc de se tromper. Dans ce cadre, faire valider chaque décision par le dirigeant devient la conduite la plus rationnelle.",
        },
        { type: "h3", texte: "Rattacher trop de monde au dirigeant" },
        {
          type: "p",
          texte:
            "Quand dix ou quinze personnes rendent compte directement au dirigeant, l'organigramme décrit une file d'attente. Chaque arbitrage remonte, et la vitesse de l'entreprise se règle sur l'agenda d'une seule personne. Nous abordons ce mécanisme dans notre article sur la manière de [prendre une décision](/infos-utiles/prendre-une-decision/) : ce qui ne se délègue pas finit par ralentir tout le reste.",
        },
        { type: "h3", texte: "Oublier les fonctions partagées et les prestataires" },
        {
          type: "p",
          texte:
            "Un expert-comptable, un service informatique externalisé, une direction commerciale à temps partagé : ces fonctions ne sont pas salariées, mais elles tiennent une responsabilité réelle. Les faire figurer, en pointillés par exemple, évite que les équipes ignorent à qui s'adresser. Notre article sur le [directeur commercial externalisé](/infos-utiles/directeur-commercial-externalise/) montre comment une telle fonction s'insère dans une équipe de direction.",
        },
        {
          type: "encadre",
          titre: "Le test des trois questions",
          texte:
            "Montrez votre organigramme à un salarié arrivé depuis moins de trois mois. Demandez-lui qui valide un devis, qui arbitre un conflit de planning, qui décide d'un recrutement dans son service. S'il ne trouve pas la réponse sur le schéma, le schéma est à reprendre.",
        },
      ],
    },

    {
      label: "Le cadre",
      titre: "Ce qu'un organigramme engage : délégations, CSE, fiches de poste",
      blocs: [
        {
          type: "p",
          texte:
            "Un organigramme n'est pas un document juridique. Il n'en est pas moins lu, en cas de litige ou de contrôle, comme un indice de la façon dont l'entreprise répartit les responsabilités. Trois points méritent d'être connus avant de le publier. Ils ne remplacent pas l'avis d'un avocat ou de votre expert-comptable pour les actes eux-mêmes.",
        },
        { type: "h3", texte: "Il ne vaut pas délégation de pouvoirs" },
        {
          type: "p",
          texte:
            "Placer un responsable de production sous le dirigeant ne lui transfère pas la responsabilité pénale en matière de sécurité. La Cour de cassation l'a posé dans un [arrêt du 11 mars 1993](https://www.legifrance.gouv.fr/juri/id/JURITEXT000007068462/) : le chef d'entreprise qui n'a pas personnellement pris part à l'infraction peut s'exonérer s'il prouve avoir délégué ses pouvoirs à une personne pourvue de la compétence, de l'autorité et des moyens nécessaires. L'organigramme peut montrer l'autorité. La délégation elle-même se prépare séparément, avec un conseil juridique.",
        },
        { type: "h3", texte: "Le modifier peut appeler la consultation du CSE" },
        {
          type: "p",
          texte:
            "Selon service-public.fr, le [comité social et économique](https://entreprendre.service-public.gouv.fr/vosdroits/F34474) doit être mis en place dans les entreprises de 11 salariés et plus. À partir de 50 salariés, l'[article L2312-8 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196) prévoit qu'il est informé et consulté sur les questions intéressant l'organisation, la gestion et la marche générale de l'entreprise, notamment les mesures de nature à affecter le volume ou la structure des effectifs. Une réorganisation qui redessine l'organigramme entre donc souvent dans ce champ : mieux vaut le vérifier avant d'annoncer quoi que ce soit.",
        },
        { type: "h3", texte: "Il doit rester cohérent avec les fiches de poste" },
        {
          type: "p",
          texte:
            "Un salarié dont la fiche de poste dit une chose et l'organigramme une autre ne sait pas à quoi se fier, et son manager non plus. Chaque mise à jour du schéma devrait donc déclencher une relecture des fiches concernées. L'inverse est vrai : une fiche de poste modifiée sans toucher à l'organigramme crée un écart que personne ne remarquera avant le premier désaccord.",
        },
      ],
    },

    {
      label: "Selon la taille",
      titre: "Organigramme d'une PME : ce qui change entre 10 et 250 salariés",
      blocs: [
        {
          type: "p",
          texte:
            "La bonne forme d'organigramme dépend moins du secteur que du stade de l'entreprise. Les seuils ci-dessous sont des repères de lecture, pas des règles : une PME de soixante personnes sur un seul site peut fonctionner avec deux niveaux quand une autre de quarante, répartie sur trois sites, en a besoin de trois.",
        },
        {
          type: "tableau",
          entetes: ["Stade de l'entreprise", "Ce que l'organigramme doit rendre visible"],
          lignes: [
            ["Autour de dix à vingt salariés", "Qui tient chaque fonction, y compris celles que le dirigeant garde, et les prestataires clés"],
            ["Premier niveau d'encadrement", "Les responsables de service, leur périmètre de décision et ce qui reste au dirigeant"],
            ["Passage des 50 salariés", "Une équipe de direction identifiée, les fonctions support distinctes, un lien avec les obligations du CSE"],
            ["Plusieurs sites ou activités", "La logique principale choisie (site, activité, métier) et les fonctions communes"],
            ["Préparation d'une transmission", "Les relais qui peuvent décider sans le dirigeant, et les fonctions encore concentrées sur lui"],
          ],
        },
        { type: "h3", texte: "Le moment critique : le premier niveau d'encadrement" },
        {
          type: "p",
          texte:
            "Le passage le plus délicat n'est pas un seuil d'effectif. C'est le jour où des salariés cessent de rendre compte au dirigeant pour rendre compte à un responsable. Si l'organigramme change sans que le périmètre de décision du nouveau responsable soit écrit, les équipes continuent d'aller voir le dirigeant, et le responsable se retrouve sans autorité réelle. [Muriel Saffroy](/muriel-saffroy/), qui a mis en place un encadrement intermédiaire lorsqu'elle dirigeait des sites industriels, a connu ce passage du côté de la direction avant de l'accompagner comme conseil.",
        },
        { type: "h3", texte: "Quand l'organigramme sert à préparer la suite" },
        {
          type: "p",
          texte:
            "Un organigramme peut aussi servir à mesurer la dépendance au dirigeant. Entourez les fonctions qui s'arrêteraient s'il était absent un mois. Cette carte, rarement dessinée, est l'une des plus utiles avant une croissance, un rachat ou une transmission.",
        },
      ],
    },

    {
      label: "Le faire vivre",
      titre: "Au-delà du schéma : faire vivre l'organigramme",
      blocs: [
        {
          type: "p",
          texte:
            "Un organigramme juste le jour de sa publication peut être faux six mois plus tard. Les départs, les arrivées et les changements de rôle ne se voient pas sur un document que personne ne tient. Trois habitudes suffisent à le garder utile.",
        },
        {
          type: "liste",
          items: [
            "**Un propriétaire** : une personne nommée, souvent aux ressources humaines ou à l'assistance de direction, met le schéma à jour à chaque mouvement",
            "**Une date visible** : l'organigramme affiche sa date de mise à jour, pour que chacun sache s'il peut s'y fier",
            "**Une revue annuelle** : une fois par an, l'équipe de direction relit le schéma et les périmètres de décision, en se demandant ce qui ne correspond plus",
          ],
        },
        { type: "h3", texte: "Quand le schéma révèle un problème d'organisation" },
        {
          type: "p",
          texte:
            "Faire un organigramme honnête produit parfois un constat inconfortable : un dirigeant relié à tout le monde, des fonctions sans titulaire, des responsables sans autorité. Redessiner les cases ne suffit pas alors. Il faut revoir la manière dont les décisions se prennent, installer une co-responsabilité réelle, et accepter de ne pas revenir sur ce qui a été confié. C'est un chantier d'organisation, sur un périmètre que vous fixez, et non un exercice graphique.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si votre difficulté tient au schéma ou au fonctionnement qu'il cache, commencez par la situer. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à repérer, en quelques minutes, où se trouve le nœud avant d'engager quoi que ce soit.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un organigramme, en une phrase ?",
      r: [
        "Un organigramme est la représentation graphique de la structure d'une entreprise : il montre les fonctions, les personnes qui les occupent et les liens d'autorité entre elles. Il répond à la question « qui est responsable de quoi, et de qui dépend-il ? ». Il ne décrit pas le fonctionnement réel, c'est-à-dire la façon dont le travail et les décisions circulent entre services, qui demande une autre lecture.",
      ],
    },
    {
      q: "L'organigramme est-il obligatoire dans une entreprise ?",
      r: [
        "Non, aucun texte n'impose à une PME de tenir un organigramme. Il devient pourtant difficile de s'en passer dès qu'apparaît un premier niveau d'encadrement. Il sert de base aux fiches de poste, à l'accueil des nouveaux salariés et à la préparation des délégations. À partir de 50 salariés, une modification de l'organisation peut en outre relever de l'information et de la consultation du CSE.",
      ],
    },
    {
      q: "Quelle différence entre organigramme hiérarchique et organigramme fonctionnel ?",
      r: [
        "L'organigramme hiérarchique montre les liens d'autorité : qui rend compte à qui, de la direction jusqu'aux équipes. L'organigramme fonctionnel montre les grandes fonctions de l'entreprise et leurs missions, sans insister sur la chaîne de commandement. Le premier répond à « à qui dois-je rendre compte ? », le second à « qui s'occupe de quoi ? ». Beaucoup de PME gagnent à publier les deux vues, cohérentes entre elles.",
      ],
    },
    {
      q: "Avec quel outil faire un organigramme ?",
      r: [
        "Un tableur, un logiciel de présentation ou un outil de diagramme suffisent dans la plupart des PME. Les logiciels de gestion des ressources humaines génèrent aussi des organigrammes à partir des fiches salariés, ce qui facilite la mise à jour. Le choix de l'outil compte beaucoup moins que la méthode : partir des fonctions, un responsable par case, des périmètres de décision écrits et une date de mise à jour visible.",
      ],
    },
    {
      q: "Un organigramme vaut-il délégation de pouvoirs ?",
      r: [
        "Non. Faire figurer un responsable sur l'organigramme ne lui transfère pas la responsabilité du dirigeant. Selon la jurisprudence de la Cour de cassation, une délégation de pouvoirs suppose que le délégataire dispose de la compétence, de l'autorité et des moyens nécessaires, et c'est au dirigeant d'en apporter la preuve. L'organigramme peut en être un indice, mais la délégation se prépare séparément, idéalement avec un avocat.",
      ],
    },
    {
      q: "À quelle fréquence mettre à jour l'organigramme ?",
      r: [
        "À chaque arrivée, départ ou changement de rôle, idéalement par une personne nommée pour cela. Une revue annuelle par l'équipe de direction permet en plus de vérifier que les périmètres de décision correspondent toujours à la réalité. Afficher la date de mise à jour sur le document est une précaution simple : les salariés savent immédiatement s'ils peuvent s'y fier ou non.",
      ],
    },
  ],

  sources: [
    {
      titre: "Définition - Petite et moyenne entreprise / PME",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1962",
    },
    {
      titre: "Comité social et économique (CSE)",
      editeur: "service-public.fr (Entreprendre)",
      url: "https://entreprendre.service-public.gouv.fr/vosdroits/F34474",
    },
    {
      titre: "Article L2312-8 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196",
    },
    {
      titre: "Cour de Cassation, Chambre criminelle, du 11 mars 1993, 91-80.958, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000007068462/",
    },
    {
      titre: "Recruter du personnel",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/piloter-lentreprise/equipe-developpement-competences/recruter-du-personnel",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-10-19",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: true,
};
