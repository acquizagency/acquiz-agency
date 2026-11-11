export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  relatedServices: string[];
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
    relatedServices: ["meta-ads", "google-ads", "landing-page-cro"],
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
    relatedServices: ["meta-ads", "google-ads"],
    content: [
      {
        type: "p",
        text: "Vous avez un budget publicitaire à investir et une seule question : Meta Ads ou Google Ads ? La réponse tient en une idée : Google capte une demande qui existe déjà, Meta crée l'envie chez des personnes qui ne cherchaient rien.",
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
    relatedServices: ["landing-page-cro", "meta-ads"],
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
