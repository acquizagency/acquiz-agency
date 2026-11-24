export type PostImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | ({ type: "img" } & PostImage);

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  image: PostImage;
  relatedServices: string[];
  relatedPosts: string[];
  content: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "roas-calcul-objectif",
    title: "ROAS : comment le calculer et quel objectif viser ?",
    description:
      "Définition, formule et exemples : découvrez comment calculer votre ROAS, le comparer à votre marge et fixer un objectif réaliste pour vos campagnes.",
    date: "2026-11-11",
    readingMinutes: 5,
    image: {
      src: "/blog/roas-calcul-objectif.png",
      alt: "Visuel de l'article sur le calcul du ROAS et l'objectif à viser en publicité en ligne",
      width: 1200,
      height: 630,
    },
    relatedServices: ["meta-ads", "google-ads", "landing-page-cro"],
    relatedPosts: ["budget-publicitaire-debuter-meta-google-ads", "publicites-facebook-ne-convertissent-pas"],
    content: [
      {
        type: "p",
        text: "Le ROAS est l'indicateur le plus cité en publicité en ligne, et l'un des plus mal compris. Un ROAS de 3 est-il bon ? Cela dépend entièrement de votre marge. Voici comment le calculer, l'interpréter et fixer un objectif qui a du sens pour votre activité.",
      },
      { type: "h2", text: "Qu'est-ce que le ROAS ?" },
      {
        type: "p",
        text: "ROAS signifie Return On Ad Spend, soit le retour sur dépenses publicitaires. Il mesure le chiffre d'affaires généré pour chaque euro dépensé en publicité.",
      },
      { type: "h2", text: "La formule du ROAS" },
      {
        type: "p",
        text: "ROAS = chiffre d'affaires généré par la publicité ÷ dépenses publicitaires.",
      },
      {
        type: "p",
        text: "Exemple : vous dépensez 1 000 € en publicité et vos campagnes génèrent 3 000 € de chiffre d'affaires. Votre ROAS est de 3 (ou 300 %) : chaque euro investi en rapporte trois.",
      },
      {
        type: "img",
        src: "/blog/formule-roas.png",
        alt: "Schéma de la formule du ROAS : le chiffre d'affaires généré par la publicité divisé par les dépenses publicitaires. Exemple : 3 000 € de ventes pour 1 000 € dépensés donnent un ROAS de 3.",
        caption: "La formule du ROAS, avec un exemple chiffré.",
        width: 1200,
        height: 420,
      },
      { type: "h2", text: "ROAS et rentabilité : ne pas les confondre" },
      {
        type: "p",
        text: "Le ROAS parle de chiffre d'affaires, pas de bénéfice. Un ROAS de 3 peut être très rentable pour une activité à forte marge… et déficitaire pour une autre. Le bon repère est le ROAS de rentabilité, c'est-à-dire le ROAS en dessous duquel vous perdez de l'argent sur chaque vente.",
      },
      {
        type: "p",
        text: "ROAS de rentabilité = 1 ÷ taux de marge brute.",
      },
      {
        type: "ul",
        items: [
          "Marge brute de 50 % : seuil de rentabilité à 2 (1 ÷ 0,5)",
          "Marge brute de 40 % : seuil de rentabilité à 2,5 (1 ÷ 0,4)",
          "Marge brute de 25 % : seuil de rentabilité à 4 (1 ÷ 0,25)",
        ],
      },
      {
        type: "p",
        text: "Au-dessus de ce seuil, la vente dégage une marge après coût publicitaire. En dessous, la vente coûte plus qu'elle ne rapporte, avant prise en compte de la valeur à vie du client.",
      },
      { type: "h2", text: "Quel ROAS viser ?" },
      {
        type: "p",
        text: "Il n'existe pas de bon ROAS universel. Votre objectif dépend de trois éléments : votre marge, votre modèle (achat unique ou récurrent) et vos autres coûts (livraison, frais fixes). Fixez d'abord votre seuil de rentabilité, puis visez un ROAS qui laisse une marge confortable au-dessus.",
      },
      {
        type: "p",
        text: "Si vos clients rachètent, vous pouvez accepter un ROAS plus faible sur le premier achat, car la valeur à vie du client compense. À l'inverse, pour un produit acheté une seule fois, le premier achat doit être rentable.",
      },
      { type: "h2", text: "Les limites du ROAS affiché par les plateformes" },
      {
        type: "p",
        text: "Le ROAS que vous voyez dans Meta Ads ou Google Ads dépend de la fenêtre d'attribution choisie, de la qualité du suivi et de la manière dont chaque plateforme s'attribue les ventes. Deux plateformes peuvent revendiquer la même vente. Il est donc essentiel de recouper ces chiffres avec vos données réelles (outil de paiement, CRM).",
      },
      { type: "h2", text: "Comment améliorer son ROAS" },
      {
        type: "ul",
        items: [
          "Fiabiliser le tracking : Pixel, API de conversions et événements correctement configurés",
          "Tester les créas : le visuel et l'accroche sont le premier levier de performance",
          "Optimiser la landing page : un meilleur taux de conversion améliore le ROAS sans toucher au budget",
          "Augmenter le panier moyen : offres groupées, ventes additionnelles",
          "Structurer les campagnes : moins de campagnes, mieux alimentées en données",
        ],
      },
      {
        type: "p",
        text: "Chez Acquiz Agency, nous partons toujours de votre marge pour définir l'objectif de ROAS, puis nous construisons le plan d'action pour l'atteindre. Un audit gratuit permet de savoir où vous en êtes.",
      },
    ],
  },
  {
    slug: "meta-ads-ou-google-ads",
    title: "Meta Ads ou Google Ads : par où commencer ?",
    description:
      "Google capte la demande existante, Meta la crée. Comparez les deux plateformes et choisissez celle qui convient à votre activité et à votre budget.",
    date: "2026-11-11",
    readingMinutes: 4,
    image: {
      src: "/blog/meta-ads-ou-google-ads.png",
      alt: "Visuel de l'article comparant Meta Ads et Google Ads pour choisir par où commencer",
      width: 1200,
      height: 630,
    },
    relatedServices: ["meta-ads", "google-ads"],
    relatedPosts: ["budget-publicitaire-debuter-meta-google-ads", "cout-agence-publicite-en-ligne"],
    content: [
      {
        type: "p",
        text: "Vous avez un budget publicitaire à investir et une seule question : Meta Ads ou Google Ads ? La réponse tient en une idée : Google capte une demande qui existe déjà, Meta crée l'envie chez des personnes qui ne cherchaient rien.",
      },
      {
        type: "img",
        src: "/blog/google-ads-vs-meta-ads.png",
        alt: "Comparatif Google Ads et Meta Ads : Google capte une intention d'achat auprès d'internautes qui cherchent activement, Meta crée la demande auprès d'utilisateurs qui font défiler leur fil.",
        caption: "Google Ads capte la demande existante, Meta Ads la crée.",
        width: 1200,
        height: 470,
      },
      { type: "h2", text: "Google Ads : capter une intention d'achat" },
      {
        type: "p",
        text: "Sur Google, l'internaute tape une requête : il a un besoin et le formule. Vos annonces apparaissent à ce moment précis. C'est un levier d'intention : le trafic est souvent plus qualifié, mais limité par le volume de recherches qui existent sur votre offre.",
      },
      { type: "h2", text: "Meta Ads : créer la demande" },
      {
        type: "p",
        text: "Sur Facebook et Instagram, les utilisateurs ne cherchent pas votre produit : ils font défiler leur fil. Votre publicité doit capter l'attention et donner envie. Le volume potentiel est plus vaste, mais le résultat repose davantage sur la qualité des créas et du message.",
      },
      { type: "h2", text: "Comment choisir ?" },
      {
        type: "ul",
        items: [
          "Vous vendez un service que les gens recherchent activement (artisan, avocat, logiciel, formation) : commencez par Google Search.",
          "Vous vendez un produit visuel, une offre d'impulsion ou une nouveauté que personne ne cherche encore (e-commerce D2C, mode, beauté, food) : commencez par Meta.",
          "Vous avez un catalogue de produits : Google Shopping et le catalogue Meta se complètent.",
          "Vous visez des décideurs B2B précis : LinkedIn Ads peut être plus adapté que les deux.",
        ],
      },
      { type: "h2", text: "Faut-il faire les deux ?" },
      {
        type: "p",
        text: "À terme, oui, car les deux plateformes sont complémentaires : Meta fait découvrir et alimente vos audiences de retargeting, Google capte ceux qui cherchent vraiment. Mais avec un budget limité, mieux vaut concentrer vos moyens sur une seule plateforme plutôt que de les disperser. Nous recommandons au minimum 1 000 € par mois et par plateforme pour que les algorithmes disposent d'assez de données.",
      },
      { type: "h2", text: "Ce qui compte avant de lancer" },
      {
        type: "ul",
        items: [
          "Un suivi fiable : Pixel et API de conversions côté Meta, suivi des conversions côté Google",
          "Une landing page cohérente avec l'annonce",
          "Un objectif chiffré basé sur votre marge, et non sur une moyenne du marché",
        ],
      },
      {
        type: "p",
        text: "Si vous hésitez, un audit gratuit permet de définir quelle plateforme prioriser selon votre activité, votre marge et votre budget.",
      },
    ],
  },
  {
    slug: "landing-page-7-elements-conversion",
    title: "Landing page : les 7 éléments qui font convertir",
    description:
      "Message clair, preuve sociale, formulaire court, vitesse : les 7 éléments d'une landing page qui transforme vos visiteurs en leads ou en clients.",
    date: "2026-11-11",
    readingMinutes: 4,
    image: {
      src: "/blog/landing-page-7-elements-conversion.png",
      alt: "Visuel de l'article sur les 7 éléments d'une landing page qui convertit",
      width: 1200,
      height: 630,
    },
    relatedServices: ["landing-page-cro", "meta-ads"],
    relatedPosts: ["landing-page-ou-site-web-publicite", "publicites-facebook-ne-convertissent-pas"],
    content: [
      {
        type: "p",
        text: "Vous investissez en publicité pour envoyer du trafic vers une page. Si cette page ne convertit pas, vous payez pour des visites qui ne servent à rien. Voici les sept éléments qui font la différence entre une page qui convertit et une page qui laisse partir ses visiteurs.",
      },
      { type: "h2", text: "1. Un message en accord avec l'annonce" },
      {
        type: "p",
        text: "Le visiteur doit retrouver sur la page la promesse qui l'a fait cliquer. Si l'annonce parle d'un audit gratuit en 24h et que la page parle d'autre chose, il repart. C'est ce qu'on appelle la cohérence de message, ou message match.",
      },
      { type: "h2", text: "2. Une proposition de valeur claire en quelques secondes" },
      {
        type: "p",
        text: "Dès l'écran d'arrivée, le visiteur doit comprendre ce que vous proposez, pour qui, et pourquoi c'est intéressant. Un titre précis, un sous-titre qui le complète, et c'est tout.",
      },
      { type: "h2", text: "3. Un seul objectif, un seul appel à l'action" },
      {
        type: "p",
        text: "Chaque lien ou bouton supplémentaire disperse l'attention. Une landing page efficace n'a qu'un objectif (demander un devis, réserver un appel, s'inscrire) et répète le même appel à l'action tout au long de la page, sans menu de navigation vers le reste du site.",
      },
      { type: "h2", text: "4. Des preuves sociales vérifiables" },
      {
        type: "p",
        text: "Logos clients, avis, résultats chiffrés : la preuve sociale rassure. Elle ne fonctionne que si elle est réelle et vérifiable ; une preuve inventée détruit la confiance en un instant.",
      },
      { type: "h2", text: "5. Les objections traitées" },
      {
        type: "p",
        text: "Prix, engagement, délai, résultats : posez-vous les questions que se pose votre prospect avant de contacter une entreprise, et répondez-y directement sur la page, par exemple dans une section FAQ.",
      },
      { type: "h2", text: "6. Un formulaire aussi court que possible" },
      {
        type: "p",
        text: "Chaque champ supplémentaire réduit le taux de complétion. Ne demandez que ce dont vous avez besoin pour recontacter la personne. Le reste peut se qualifier lors de l'échange.",
      },
      { type: "h2", text: "7. Une page rapide et pensée pour mobile" },
      {
        type: "p",
        text: "Une grande partie du trafic publicitaire arrive sur mobile. Une page lente ou mal adaptée fait fuir les visiteurs avant même qu'ils aient lu votre titre. Compressez les images, limitez les scripts, et testez sur de vrais téléphones.",
      },
      { type: "h2", text: "Mesurer et tester pour progresser" },
      {
        type: "p",
        text: "Une landing page n'est jamais vraiment terminée. En suivant les événements (clics, soumissions de formulaire) et en testant des variantes de titre, de visuel ou de formulaire, vous améliorez progressivement le taux de conversion, ce qui réduit directement votre coût d'acquisition.",
      },
      {
        type: "p",
        text: "Chez Acquiz Agency, nous concevons des landing pages qui intègrent ces principes dès le départ. Votre page actuelle convertit-elle ? Nous pouvons l'analyser gratuitement.",
      },
    ],
  },
  {
    slug: "cout-agence-publicite-en-ligne",
    title: "Combien coûte une agence de publicité en ligne ?",
    description:
      "Forfait, pourcentage du budget ou mixte : comprenez comment les agences facturent Meta Ads et Google Ads, et ce qu'il faut vérifier avant de signer.",
    date: "2026-11-17",
    readingMinutes: 5,
    image: {
      src: "/blog/cout-agence-publicite-en-ligne.png",
      alt: "Visuel de l'article sur le coût d'une agence de publicité en ligne et ses modèles de tarification",
      width: 1200,
      height: 630,
    },
    relatedServices: ["meta-ads", "google-ads"],
    relatedPosts: ["budget-publicitaire-debuter-meta-google-ads", "agence-ou-freelance-publicite-en-ligne"],
    content: [
      {
        type: "p",
        text: "« Combien ça coûte ? » est la première question que se pose toute entreprise qui veut déléguer sa publicité en ligne. La réponse dépend moins d'un tarif unique que de la façon dont l'agence facture. Voici les modèles les plus courants, ce qui fait varier le prix et les points à vérifier avant de s'engager.",
      },
      { type: "h2", text: "Deux budgets à ne pas confondre" },
      {
        type: "p",
        text: "Le budget média est l'argent que vous dépensez directement auprès des plateformes (Meta, Google, TikTok…). Il est facturé par la plateforme, pas par l'agence. Les honoraires rémunèrent le travail de l'agence : stratégie, création, pilotage, optimisation et reporting. Quand on compare des offres, il faut toujours séparer ces deux lignes.",
      },
      { type: "h2", text: "Les trois modèles de tarification" },
      {
        type: "ul",
        items: [
          "Le forfait fixe mensuel : un montant constant, quel que soit votre budget média. Simple à budgétiser, mais il doit être cohérent avec le temps réellement passé sur votre compte.",
          "Le pourcentage du budget média : les honoraires évoluent avec vos dépenses publicitaires. L'agence est incitée à faire croître le budget, ce qui n'est pas toujours aligné avec votre rentabilité.",
          "Le modèle mixte : un fixe réduit complété d'une part variable, parfois liée à des objectifs de performance. Il aligne les intérêts, à condition que les objectifs soient mesurables et définis à l'avance.",
        ],
      },
      {
        type: "img",
        src: "/blog/modeles-tarification-agence.png",
        alt: "Schéma des trois modèles de tarification d'une agence : forfait fixe, pourcentage du budget média et modèle mixte, avec leurs avantages et leurs limites.",
        caption: "Forfait fixe, pourcentage du budget ou modèle mixte : avantages et limites.",
        width: 1200,
        height: 480,
      },
      { type: "h2", text: "Quels ordres de grandeur ?" },
      {
        type: "p",
        text: "Les tarifs publiés varient fortement d'une source à l'autre. À titre indicatif, on retrouve fréquemment sur le marché français :",
      },
      {
        type: "ul",
        items: [
          "Pour une agence : de l'ordre de 1 500 à 5 000 € par mois de gestion, parfois davantage pour des comptes complexes ou multi-plateformes.",
          "Pour une facturation au pourcentage : généralement entre 10 et 20 % du budget média.",
          "Pour un freelance : le plus souvent un tarif inférieur à celui d'une agence, sur un périmètre plus restreint.",
        ],
      },
      {
        type: "p",
        text: "Ces montants correspondent uniquement à la gestion : le budget média versé à Google ou à Meta s'y ajoute. Ce sont des repères issus de comparateurs d'agences et d'articles du secteur, pas la grille tarifaire d'Acquiz Agency : le coût réel dépend de votre périmètre, de votre budget et de vos objectifs.",
      },
      { type: "h2", text: "Ce qui fait varier le prix" },
      {
        type: "ul",
        items: [
          "Le nombre de plateformes pilotées (une seule ou plusieurs)",
          "Le budget média géré et la complexité du compte (catalogue produits, plusieurs pays, plusieurs offres)",
          "La production créative : visuels, vidéos, déclinaisons de formats",
          "La landing page : reprise de l'existante ou création d'une page dédiée",
          "Le niveau de suivi : fréquence des optimisations, reporting, réunions",
          "La mise en place et l'audit du tracking",
        ],
      },
      { type: "h2", text: "Les points à vérifier avant de signer" },
      {
        type: "ul",
        items: [
          "Que comprend exactement le tarif : création des visuels, landing page, reporting, appels de suivi ?",
          "Y a-t-il des frais de mise en place ou de gestion en plus des honoraires mensuels ?",
          "Quelle est la durée d'engagement et comment peut-on y mettre fin ?",
          "Le compte publicitaire et le pixel vous appartiennent-ils ? Vous devez rester propriétaire de vos données et de votre historique.",
          "Comment la performance est-elle mesurée et partagée : accès en lecture à vos comptes ou simple PDF mensuel ?",
        ],
      },
      { type: "h2", text: "Quel budget média prévoir ?" },
      {
        type: "p",
        text: "Les algorithmes ont besoin de données pour apprendre. Nous recommandons un minimum d'environ 1 000 € par mois et par plateforme pour obtenir des résultats exploitables. En dessous, les tests prennent trop de temps et les conclusions restent fragiles. Les honoraires doivent rester raisonnables au regard de ce budget : il n'a pas de sens de payer des honoraires supérieurs à l'argent que vous investissez en publicité.",
      },
      { type: "h2", text: "Comparer deux devis" },
      {
        type: "p",
        text: "Ne comparez pas seulement le prix : comparez le périmètre, la transparence et la manière dont l'agence raisonne sur votre rentabilité. Une agence qui vous parle de marge, de coût d'acquisition cible et de ROAS d'équilibre (voir notre article sur le calcul du ROAS) travaille pour votre résultat, pas seulement pour votre budget.",
      },
      {
        type: "p",
        text: "Pour obtenir une estimation adaptée à votre situation, demandez un audit gratuit : nous analysons votre activité, votre budget et vos objectifs, puis nous vous présentons un plan et un cadre tarifaire clairs.",
      },
    ],
  },
  {
    slug: "agence-ou-freelance-publicite-en-ligne",
    title: "Agence ou freelance en publicité : comment choisir ?",
    description:
      "Freelance, agence ou expert indépendant : avantages, limites et questions à poser pour choisir qui pilotera vos campagnes Meta Ads et Google Ads.",
    date: "2026-11-17",
    readingMinutes: 5,
    image: {
      src: "/blog/agence-ou-freelance-publicite-en-ligne.png",
      alt: "Visuel de l'article pour choisir entre une agence et un freelance en publicité en ligne",
      width: 1200,
      height: 630,
    },
    relatedServices: ["meta-ads", "google-ads", "landing-page-cro"],
    relatedPosts: ["cout-agence-publicite-en-ligne", "roas-calcul-objectif"],
    content: [
      {
        type: "p",
        text: "Confier ses campagnes publicitaires à un tiers est une décision structurante : de cette personne ou de cette équipe dépendent votre coût d'acquisition et, en pratique, votre croissance. Freelance ou agence ? Il n'existe pas de bonne réponse universelle, mais il existe des critères clairs pour décider.",
      },
      { type: "h2", text: "Le freelance : proximité et expertise ciblée" },
      {
        type: "ul",
        items: [
          "Avantages : un interlocuteur unique qui connaît votre compte en détail, une grande réactivité, des tarifs généralement plus lisibles.",
          "Limites : la capacité est limitée à une personne (absence, surcharge), et les compétences couvrent rarement tous les besoins, notamment la création vidéo ou le développement de pages.",
        ],
      },
      { type: "h2", text: "L'agence : une équipe et des process" },
      {
        type: "ul",
        items: [
          "Avantages : plusieurs profils complémentaires (média buying, création, tracking, développement), une continuité de service, des méthodes structurées.",
          "Limites : un coût souvent plus élevé, et parfois un interlocuteur commercial différent de la personne qui travaille réellement sur votre compte.",
        ],
      },
      { type: "h2", text: "Cinq critères pour décider" },
      {
        type: "ul",
        items: [
          "Votre budget média : en dessous de quelques milliers d'euros par mois, une structure lourde est rarement rentable.",
          "L'étendue de vos besoins : uniquement du pilotage de campagnes, ou aussi créas, landing page et tracking ?",
          "Votre niveau d'implication : souhaitez-vous un point direct avec la personne qui pilote ?",
          "La spécialisation : l'interlocuteur maîtrise-t-il la plateforme qui compte pour vous et votre secteur ?",
          "La transparence : accès à vos comptes, reporting clair, propriété des données.",
        ],
      },
      { type: "h2", text: "Les questions à poser à n'importe quel prestataire" },
      {
        type: "ul",
        items: [
          "Qui va concrètement travailler sur mon compte, et à quelle fréquence ?",
          "Comment mesurez-vous la performance, et sur quels indicateurs vous engagez-vous ?",
          "Pouvez-vous me montrer des cas concrets et des résultats chiffrés sur des activités proches de la mienne ?",
          "Les comptes publicitaires et le pixel seront-ils à mon nom ?",
          "Quelles sont les conditions de sortie ?",
        ],
      },
      { type: "h2", text: "Un modèle intermédiaire : l'expert indépendant" },
      {
        type: "p",
        text: "Entre le freelance isolé et l'agence de grande taille, certains experts indépendants travaillent en direct avec le client tout en s'appuyant sur un réseau de spécialistes pour la création et le développement. C'est le modèle que nous avons choisi chez Acquiz Agency : un interlocuteur unique, certifié par les principales régies publicitaires, avec la capacité de livrer créas et landing pages.",
      },
      {
        type: "p",
        text: "Quel que soit votre choix, exigez de la transparence et un objectif de rentabilité clair. Si vous voulez comparer, un audit gratuit vous donne un avis concret sur vos comptes, sans engagement.",
      },
    ],
  },
  {
    slug: "pixel-meta-api-conversions-tracking",
    title: "Pixel Meta et API de conversions : un tracking fiable",
    description:
      "Pixel, API de conversions, déduplication et consentement : les bases d'un suivi fiable pour que Meta optimise vos campagnes sur de vraies conversions.",
    date: "2026-11-17",
    readingMinutes: 6,
    image: {
      src: "/blog/pixel-meta-api-conversions-tracking.png",
      alt: "Visuel de l'article sur le Pixel Meta et l'API de conversions pour un tracking fiable",
      width: 1200,
      height: 630,
    },
    relatedServices: ["meta-ads", "google-ads", "landing-page-cro"],
    relatedPosts: ["publicites-facebook-ne-convertissent-pas", "roas-calcul-objectif"],
    content: [
      {
        type: "p",
        text: "Les algorithmes de Meta apprennent à partir des événements que vous leur envoyez : visites, leads, achats. Si ces données sont incomplètes ou fausses, l'optimisation se fait sur de mauvais signaux et votre coût d'acquisition grimpe. Le tracking n'est pas un détail technique : c'est la base de la performance.",
      },
      { type: "h2", text: "Le Pixel Meta : le suivi côté navigateur" },
      {
        type: "p",
        text: "Le Pixel est un code installé sur votre site. Il envoie à Meta les actions réalisées par les visiteurs depuis leur navigateur. Son point faible : il dépend du navigateur. Bloqueurs de publicité, restrictions sur les cookies et refus de consentement peuvent empêcher une partie des événements de remonter.",
      },
      { type: "h2", text: "L'API de conversions : le suivi côté serveur" },
      {
        type: "p",
        text: "L'API de conversions envoie les événements directement depuis votre serveur (ou un outil intermédiaire) vers Meta, sans passer par le navigateur du visiteur. Elle complète le Pixel et permet de récupérer des événements qui seraient autrement perdus. Meta recommande de combiner les deux.",
      },
      { type: "h2", text: "La déduplication : éviter de compter deux fois" },
      {
        type: "p",
        text: "Quand le Pixel et l'API envoient le même événement, Meta doit comprendre qu'il s'agit d'une seule conversion. Pour cela, chaque événement doit porter le même nom et le même identifiant d'événement (event_id) des deux côtés. Sans déduplication, vos conversions sont gonflées et vos chiffres ne sont plus fiables.",
      },
      {
        type: "img",
        src: "/blog/pixel-api-conversions-deduplication.png",
        alt: "Schéma du suivi Meta : le visiteur déclenche un événement envoyé à la fois par le Pixel Meta (navigateur) et par l'API de conversions (serveur), puis Meta les déduplique grâce à un event_id commun pour ne compter qu'une conversion.",
        caption: "Le Pixel et l'API envoient le même événement : la déduplication évite le double comptage.",
        width: 1200,
        height: 480,
      },
      { type: "h2", text: "Le consentement et le RGPD" },
      {
        type: "p",
        text: "En France, le suivi publicitaire nécessite le consentement de l'internaute. Votre bandeau de cookies doit être configuré pour que les balises Meta ne se déclenchent qu'après acceptation. Un suivi non conforme vous expose à un risque juridique, et un suivi trop restrictif prive vos campagnes de données : il faut trouver le bon réglage et le documenter.",
      },
      { type: "h2", text: "Les événements essentiels à suivre" },
      {
        type: "ul",
        items: [
          "Lead ou formulaire envoyé pour la génération de contacts",
          "ViewContent, AddToCart, InitiateCheckout et Purchase pour l'e-commerce, avec la valeur et la devise de la commande",
          "Contact ou clic sur le téléphone pour les activités qui reçoivent des appels",
        ],
      },
      { type: "h2", text: "Comment vérifier que tout fonctionne" },
      {
        type: "ul",
        items: [
          "Utilisez l'outil Test des événements dans le Gestionnaire d'événements de Meta pour vérifier que chaque action déclenche le bon événement.",
          "Contrôlez la qualité de correspondance des événements : plus vous transmettez de paramètres (e-mail, téléphone hachés), mieux Meta rattache l'événement à un utilisateur.",
          "Vérifiez que les événements Pixel et serveur sont bien dédupliqués.",
          "Comparez les conversions de Meta à celles de votre CRM ou de votre back-office : un écart important est un signal d'alerte.",
        ],
      },
      { type: "h2", text: "Les erreurs fréquentes" },
      {
        type: "ul",
        items: [
          "Un événement Lead déclenché à chaque chargement de la page de remerciement, y compris les rechargements",
          "Des événements d'achat sans valeur ni devise",
          "Un double comptage faute de déduplication",
          "Un bandeau de cookies qui bloque toutes les balises, ou aucune",
        ],
      },
      {
        type: "p",
        text: "Avant d'augmenter votre budget, assurez-vous que votre tracking est solide. C'est la première chose que nous contrôlons dans l'audit gratuit : état du Pixel, de l'API de conversions et des événements, avec les corrections à prioriser.",
      },
    ],
  },
  {
    slug: "publicites-facebook-ne-convertissent-pas",
    title: "Publicités Facebook qui ne convertissent pas : 7 causes",
    description:
      "Tracking, landing page, offre, créas, budget : les 7 causes les plus fréquentes d'une pub Facebook ou Instagram qui ne convertit pas, et les corriger.",
    date: "2026-11-24",
    readingMinutes: 6,
    image: {
      src: "/blog/publicites-facebook-ne-convertissent-pas.png",
      alt: "Visuel de l'article sur les 7 causes d'une publicité Facebook ou Instagram qui ne convertit pas",
      width: 1200,
      height: 630,
    },
    relatedServices: ["meta-ads", "landing-page-cro"],
    relatedPosts: [
      "pixel-meta-api-conversions-tracking",
      "landing-page-7-elements-conversion",
      "roas-calcul-objectif",
    ],
    content: [
      {
        type: "p",
        text: "Vous dépensez en publicité sur Facebook et Instagram, les clics arrivent, mais pas les contacts ni les ventes. Avant d'augmenter le budget ou de changer de plateforme, il faut identifier où se situe la fuite. Voici les sept causes les plus fréquentes, dans l'ordre où nous les vérifions.",
      },
      { type: "h2", text: "1. Un tracking défaillant" },
      {
        type: "p",
        text: "Si le Pixel ou l'API de conversions ne remontent pas correctement vos conversions, Meta optimise à l'aveugle et vos rapports sont faussés : vous pouvez avoir de bons résultats sans le savoir, ou croire que tout va bien alors que non. Vérifiez que chaque événement important (lead, achat) se déclenche une seule fois, avec sa valeur.",
      },
      { type: "h2", text: "2. Une landing page qui ne tient pas la promesse de l'annonce" },
      {
        type: "p",
        text: "L'annonce attire le clic, la page doit transformer. Un décalage de message, une page lente sur mobile, un formulaire trop long ou plusieurs appels à l'action concurrents font fuir les visiteurs. Le message, le visuel et l'offre doivent être reconnaissables d'une étape à l'autre.",
      },
      { type: "h2", text: "3. Une offre ou une proposition de valeur floue" },
      {
        type: "p",
        text: "Une publicité efficace dit clairement ce que le visiteur obtient, pour qui, et pourquoi maintenant. Si votre annonce pourrait être celle d'un concurrent, elle ne se démarque pas. Testez des angles différents : le problème résolu, le résultat obtenu, la preuve, l'objection levée.",
      },
      { type: "h2", text: "4. Des créas peu efficaces ou usées" },
      {
        type: "p",
        text: "Sur Meta, la créa est le premier levier de performance : c'est elle qui arrête le défilement du fil. Les mêmes visuels diffusés pendant des semaines finissent par lasser l'audience : la fréquence monte, et le coût par résultat aussi. Prévoyez un renouvellement régulier et testez plusieurs formats (vidéo, image, carrousel).",
      },
      { type: "h2", text: "5. Un budget dilué sur trop d'ensembles de publicités" },
      {
        type: "p",
        text: "Multiplier les audiences et les campagnes disperse le budget : chaque ensemble reçoit trop peu de données pour apprendre. Avec un budget modeste, mieux vaut peu de campagnes bien alimentées que beaucoup de petites.",
      },
      { type: "h2", text: "6. Des modifications trop fréquentes" },
      {
        type: "p",
        text: "Après un lancement ou un changement important, Meta passe par une phase d'apprentissage. D'après Meta, un ensemble de publicités en sort lorsqu'il obtient environ 50 événements d'optimisation en 7 jours. Modifier le budget, le ciblage ou les annonces à chaque consultation relance cette phase et empêche de tirer des conclusions.",
      },
      { type: "h2", text: "7. Un objectif d'optimisation inadapté" },
      {
        type: "p",
        text: "Si la campagne est optimisée pour les clics ou les vues de page, Meta cherche des personnes qui cliquent, pas des personnes qui achètent ou laissent leurs coordonnées. Choisissez l'événement le plus proche de votre objectif commercial (lead, achat), tant que vous avez assez de volume pour que l'algorithme apprenne.",
      },
      { type: "h2", text: "Dans quel ordre diagnostiquer ?" },
      {
        type: "p",
        text: "Commencez par ce qui est le plus fondamental et le moins coûteux à vérifier : le tracking, puis la cohérence entre l'annonce et la page, puis l'offre et les créas, et enfin la structure et les réglages. Corriger la structure d'un compte dont le tracking est faux ne sert à rien.",
      },
      {
        type: "img",
        src: "/blog/ordre-diagnostic-publicite.png",
        alt: "Schéma en cinq étapes pour diagnostiquer une publicité qui ne convertit pas : 1 tracking, 2 cohérence entre l'annonce et la page, 3 offre, 4 créas, 5 structure et réglages.",
        caption: "L'ordre dans lequel nous vérifions un compte qui ne convertit pas.",
        width: 1200,
        height: 360,
      },
      { type: "h2", text: "Et si le problème est ailleurs ?" },
      {
        type: "p",
        text: "Parfois, le problème n'est pas la publicité mais l'économie de l'offre : un prix ou une marge qui ne permettent pas d'acquérir un client de façon rentable. Comparez votre coût d'acquisition à votre marge avant de conclure que « ça ne marche pas ».",
      },
      {
        type: "p",
        text: "Pas sûr de l'endroit où votre compte perd de l'argent ? Notre audit gratuit passe en revue ces sept points et vous indique les priorités.",
      },
    ],
  },
  {
    slug: "budget-publicitaire-debuter-meta-google-ads",
    title: "Quel budget pub pour débuter sur Meta et Google Ads ?",
    description:
      "Comment fixer son budget publicitaire de départ : partir du coût d'acquisition cible, calculer un budget de test et savoir quand l'augmenter.",
    date: "2026-11-24",
    readingMinutes: 5,
    image: {
      src: "/blog/budget-publicitaire-debuter-meta-google-ads.png",
      alt: "Visuel de l'article sur le budget publicitaire de départ pour Meta Ads et Google Ads",
      width: 1200,
      height: 630,
    },
    relatedServices: ["meta-ads", "google-ads"],
    relatedPosts: [
      "roas-calcul-objectif",
      "cout-agence-publicite-en-ligne",
      "meta-ads-ou-google-ads",
    ],
    content: [
      {
        type: "p",
        text: "« Combien dois-je investir pour commencer ? » Il n'existe pas de somme magique : le bon budget est celui qui vous permet d'obtenir assez de résultats pour juger si une campagne est rentable. Voici une méthode pour le calculer plutôt que de le deviner.",
      },
      { type: "h2", text: "Partir de votre coût d'acquisition cible" },
      {
        type: "p",
        text: "Commencez par déterminer ce que vous pouvez payer pour acquérir un lead ou un client tout en restant rentable. Ce coût d'acquisition maximum découle de votre marge : c'est la même logique que pour le ROAS d'équilibre.",
      },
      { type: "h2", text: "Une formule simple pour un budget de test" },
      {
        type: "p",
        text: "Budget de test = coût d'acquisition cible × nombre de résultats nécessaires pour conclure.",
      },
      {
        type: "img",
        src: "/blog/formule-budget-test.png",
        alt: "Schéma de la formule du budget de test : coût d'acquisition cible multiplié par le nombre de résultats nécessaires. Exemple : 40 € par lead pour 30 leads donnent 1 200 € de budget de test.",
        caption: "Le budget de test, avec un exemple chiffré.",
        width: 1200,
        height: 430,
      },
      {
        type: "p",
        text: "Exemple : vous pouvez payer 40 € par lead et vous voulez en observer une trentaine avant de décider. Il faut alors prévoir environ 1 200 €, étalés sur plusieurs semaines. Le nombre de résultats nécessaire est un repère, pas une règle : plus il est élevé, plus la conclusion est fiable.",
      },
      { type: "h2", text: "Pourquoi un test trop court ne prouve rien" },
      {
        type: "p",
        text: "Les plateformes ont besoin de données pour optimiser. Avec une somme très faible sur quelques jours, vous obtenez quelques clics et peut-être un résultat : trop peu pour distinguer un coup de chance d'une vraie performance. Un test trop court mène souvent à abandonner un levier qui aurait fonctionné, ou à en croire un qui ne fonctionne pas.",
      },
      { type: "h2", text: "Concentrer plutôt que disperser" },
      {
        type: "p",
        text: "Avec un budget limité, lancez une seule plateforme, une ou deux campagnes et une offre claire. Notre repère habituel est d'au moins 1 000 € par mois et par plateforme pour disposer de données exploitables. Mieux vaut réussir sur un levier, puis étendre, que d'en lancer trois avec un budget insuffisant sur chacun.",
      },
      { type: "h2", text: "Budget quotidien ou budget total ?" },
      {
        type: "p",
        text: "Meta propose un budget quotidien ou un budget sur la durée de la campagne. Le budget quotidien convient à une diffusion continue, le budget total à une opération limitée dans le temps, comme une promotion ou un événement.",
      },
      { type: "h2", text: "Quand augmenter le budget ?" },
      {
        type: "ul",
        items: [
          "Votre coût d'acquisition reste sous votre seuil de rentabilité depuis plusieurs semaines",
          "Votre tracking est fiable et vérifié",
          "Plusieurs créas performent, et pas une seule",
          "Vous augmentez par paliers modérés (souvent autour de 20 %) plutôt que d'un seul coup, pour ne pas déstabiliser l'optimisation",
        ],
      },
      { type: "h2", text: "Et le budget de l'agence ou du freelance ?" },
      {
        type: "p",
        text: "Les honoraires de gestion s'ajoutent au budget média. Pour estimer l'ensemble de votre investissement, consultez notre article sur le coût d'une agence de publicité en ligne.",
      },
      {
        type: "p",
        text: "Pour un budget adapté à votre marge, à votre activité et à vos objectifs, demandez notre audit gratuit : nous vous indiquons par quelle plateforme commencer et avec quelle somme.",
      },
    ],
  },
  {
    slug: "landing-page-ou-site-web-publicite",
    title: "Landing page ou site web : où envoyer le trafic payant ?",
    description:
      "Landing page ou site web pour vos campagnes Google Ads et Meta Ads ? Les différences, ce que dit Google et quand envoyer le trafic vers votre site.",
    date: "2026-11-24",
    readingMinutes: 5,
    image: {
      src: "/blog/landing-page-ou-site-web-publicite.png",
      alt: "Visuel de l'article comparant landing page et site web pour le trafic publicitaire",
      width: 1200,
      height: 630,
    },
    relatedServices: ["landing-page-cro", "google-ads", "meta-ads"],
    relatedPosts: ["landing-page-7-elements-conversion", "meta-ads-ou-google-ads"],
    content: [
      {
        type: "p",
        text: "Votre site est soigné, mais vos campagnes Google Ads ou Meta Ads y envoient-elles les visiteurs au bon endroit ? Le choix de la page de destination influence directement le taux de conversion, donc le coût de chaque lead ou de chaque vente.",
      },
      { type: "h2", text: "Landing page et site web : la différence" },
      {
        type: "p",
        text: "Un site web présente l'ensemble de votre activité, avec une navigation large : accueil, offres, à propos, blog. Une landing page est une page conçue pour obtenir une seule action (demander un devis, s'inscrire, acheter), qui reprend le message de l'annonce avec le moins de distractions possible.",
      },
      {
        type: "img",
        src: "/blog/landing-page-vs-site-web.png",
        alt: "Comparatif entre un site web, qui présente toute l'activité avec une navigation large, et une landing page, qui vise une seule action avec un message identique à l'annonce.",
        caption: "Un site web présente votre activité, une landing page vise une action.",
        width: 1200,
        height: 470,
      },
      { type: "h2", text: "Pourquoi une page dédiée est souvent plus efficace" },
      {
        type: "ul",
        items: [
          "Le message reprend celui de l'annonce : le visiteur sait tout de suite qu'il est au bon endroit.",
          "Un seul objectif : pas de menu ni de liens qui détournent de l'action.",
          "La page peut être adaptée à une audience ou à un mot-clé précis.",
          "Vous mesurez plus facilement ce qui se passe sur la page et ce que vous pouvez améliorer.",
        ],
      },
      { type: "h2", text: "Ce que dit Google" },
      {
        type: "p",
        text: "Dans sa documentation, Google recommande de choisir une page de destination qui correspond étroitement au texte de l'annonce. L'expérience sur la page de destination fait aussi partie des facteurs du niveau de qualité d'un mot-clé, qui influence le coût et la position de vos annonces. Autre règle technique : le domaine de la page de destination doit correspondre à celui de l'URL affichée dans l'annonce.",
      },
      { type: "h2", text: "Quand envoyer le trafic vers votre site" },
      {
        type: "ul",
        items: [
          "Les campagnes sur votre nom de marque : les internautes vous connaissent déjà et cherchent votre site.",
          "L'e-commerce : les pages produit et catégorie jouent le rôle de pages de destination, à condition d'être claires et rapides.",
          "Les cas où la confiance se construit sur plusieurs pages (références, équipe, études de cas).",
        ],
      },
      { type: "h2", text: "À vérifier avant d'envoyer du trafic" },
      {
        type: "ul",
        items: [
          "Le titre de la page reprend la promesse de l'annonce",
          "Un seul appel à l'action principal",
          "Un chargement rapide sur mobile",
          "Un formulaire aussi court que possible",
          "Des preuves vérifiables (avis, chiffres, références)",
          "Le suivi des conversions en place",
        ],
      },
      {
        type: "p",
        text: "Chez Acquiz Agency, nous concevons et développons des landing pages dédiées à vos campagnes, pensées pour convertir. Votre page actuelle est-elle à la hauteur ? Nous pouvons l'analyser gratuitement.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
