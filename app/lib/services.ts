export type Faq = { q: string; a: string };

export type Block = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServicePageData = {
  slug: string;
  name: string;
  shortDesc: string;
  logo?: string;
  fullBleedLogo?: boolean;
  badgeClassName?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  blocks: Block[];
  faq: Faq[];
  relatedServices: string[];
  relatedPosts: string[];
};

export const services: ServicePageData[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads",
    shortDesc:
      "Campagnes Facebook & Instagram orientées leads et ventes : structure professionnelle, créas qui performent, optimisation continue.",
    logo: "/platform-logos/meta.png",
    metaTitle: "Agence Meta Ads (Facebook & Instagram) | Acquiz Agency",
    metaDescription:
      "Campagnes Meta Ads (Facebook & Instagram) orientées leads et ventes : structure pro, créas qui performent, tracking fiable. Audit gratuit sous 24h.",
    h1: "Agence Meta Ads : des campagnes Facebook & Instagram qui convertissent",
    intro:
      "Meta Ads (Facebook et Instagram) reste l'un des leviers les plus puissants pour générer des leads et des ventes, à condition d'aller plus loin que « booster » des publications. Nous construisons, pilotons et optimisons vos campagnes de A à Z, avec un seul objectif : un coût d'acquisition rentable pour votre activité.",
    blocks: [
      {
        title: "Ce que nous prenons en charge",
        bullets: [
          "Audit de votre compte publicitaire, de votre Pixel et de l'API de conversions (CAPI)",
          "Stratégie de campagnes : acquisition, retargeting et fidélisation",
          "Création et test de créas : vidéos, visuels statiques, carrousels, formats Reels et Stories",
          "Ciblage : audiences larges, audiences similaires, remarketing (visiteurs, personnes engagées, clients)",
          "Campagnes de conversion, de génération de leads (formulaires instantanés) et de catalogue pour l'e-commerce",
          "Optimisation continue et reporting clair",
        ],
      },
      {
        title: "Pourquoi tant de campagnes Meta échouent",
        paragraphs: [
          "Dans la majorité des comptes que nous auditons, les mêmes causes reviennent : un suivi mal configuré qui prive l'algorithme de données fiables, trop de campagnes qui dispersent le budget, des créas peu testées, et une page de destination qui ne prolonge pas la promesse de l'annonce.",
          "Nous traitons ces quatre points avant même de parler d'augmenter le budget. Un bon réglage de base vaut mieux qu'une dépense supplémentaire.",
        ],
      },
      {
        title: "Pour quelles activités Meta Ads fonctionne le mieux",
        paragraphs: [
          "Meta Ads s'adresse particulièrement aux e-commerçants et marques D2C, aux infopreneurs, aux services locaux, à l'immobilier et aux entreprises qui cherchent à générer des leads auprès du grand public. Le levier est moins adapté lorsque votre cible est très restreinte et professionnelle : LinkedIn Ads sera alors souvent préférable.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel budget prévoir pour Meta Ads ?",
        a: "Nous recommandons au minimum 1 000 €/mois de budget publicitaire par plateforme, afin que l'algorithme dispose d'assez de données pour optimiser vos campagnes.",
      },
      {
        q: "Faut-il un Pixel et l'API de conversions ?",
        a: "Oui. Le Pixel Meta et l'API de conversions (CAPI) remontent les événements importants (achats, leads) à l'algorithme. Sans eux, l'optimisation se fait à l'aveugle. Nous les configurons et les vérifions avant le lancement.",
      },
      {
        q: "En combien de temps voit-on des résultats ?",
        a: "Les premiers signaux apparaissent généralement dès 2 semaines. Les résultats stables arrivent à partir du 3e mois, le temps que l'algorithme sorte de sa phase d'apprentissage et que les ajustements portent leurs fruits.",
      },
    ],
    relatedServices: ["google-ads", "landing-page-cro"],
    relatedPosts: ["pixel-meta-api-conversions-tracking", "meta-ads-ou-google-ads", "cout-agence-publicite-en-ligne"],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    shortDesc:
      "Search, Shopping, Performance Max : des comptes qui capturent l'intention d'achat et protègent votre budget.",
    logo: "/platform-logos/google-ads.png",
    metaTitle: "Agence Google Ads (SEA) | Acquiz Agency",
    metaDescription:
      "Campagnes Google Ads (Search, Shopping, Performance Max) qui captent l'intention d'achat et protègent votre budget. Audit gratuit sous 24h.",
    h1: "Agence Google Ads : captez les clients qui vous cherchent déjà",
    intro:
      "Avec Google Ads, vous apparaissez au moment précis où un prospect exprime un besoin : c'est le levier d'intention par excellence. Mais un compte mal structuré consomme un budget très vite. Nous construisons des campagnes Search, Shopping, Performance Max et YouTube qui capturent la demande existante et protègent votre budget.",
    blocks: [
      {
        title: "Ce que nous prenons en charge",
        bullets: [
          "Campagnes Search : recherche de mots-clés, structure en groupes d'annonces, annonces responsives et extensions",
          "Gestion des mots-clés négatifs et analyse régulière des termes de recherche",
          "Shopping et Performance Max pour l'e-commerce, avec optimisation du flux Merchant Center",
          "YouTube et Demand Gen pour élargir votre portée",
          "Stratégies d'enchères intelligentes (CPA cible, ROAS cible) adaptées à votre volume de conversions",
          "Suivi des conversions fiable (balise Google, conversions optimisées, import GA4)",
        ],
      },
      {
        title: "Search, Shopping, Performance Max : quel format pour quel objectif ?",
        paragraphs: [
          "Le réseau de recherche (Search) est idéal pour les services et la génération de leads, car l'intention de l'internaute est explicite. Shopping met en avant vos produits directement dans les résultats et convient à l'e-commerce.",
          "Performance Max automatise la diffusion sur l'ensemble des inventaires Google. Il peut être très efficace, mais demande des assets de qualité et un suivi serré pour garder le contrôle. YouTube et Demand Gen servent plutôt à élargir la portée et à relancer des audiences.",
        ],
      },
      {
        title: "Les erreurs qui coûtent cher",
        bullets: [
          "Des mots-clés trop larges sans liste de mots-clés négatifs",
          "Des enchères automatiques lancées sans suivi des conversions fiable",
          "Une page de destination hors sujet, qui dégrade la conversion et la qualité de l'annonce",
          "Performance Max laissé en pilote automatique, sans contrôle ni analyse",
        ],
      },
    ],
    faq: [
      {
        q: "Google Ads ou SEO : que choisir ?",
        a: "Le SEO construit une visibilité durable mais demande du temps ; Google Ads donne des résultats immédiats et mesurables. Les deux sont complémentaires : Google Ads permet de tester vos offres et vos mots-clés rapidement, et le SEO prend le relais sur le long terme.",
      },
      {
        q: "Combien coûte un clic sur Google Ads ?",
        a: "Cela varie fortement selon votre secteur, la concurrence et la qualité de vos annonces et de votre page. Le bon indicateur n'est pas le coût du clic, mais le coût par lead ou par vente par rapport à votre marge.",
      },
      {
        q: "Le suivi des conversions est-il inclus ?",
        a: "Oui. Nous configurons et vérifions le suivi des conversions avant tout lancement. Sans données fiables, les enchères automatiques ne peuvent pas optimiser correctement.",
      },
    ],
    relatedServices: ["meta-ads", "landing-page-cro"],
    relatedPosts: ["meta-ads-ou-google-ads", "cout-agence-publicite-en-ligne", "agence-ou-freelance-publicite-en-ligne"],
  },
  {
    slug: "tiktok-ads",
    name: "TikTok Ads",
    shortDesc:
      "Créas vidéo natives, hooks efficaces et ciblage précis pour toucher une audience large sur TikTok.",
    logo: "/platform-logos/tiktok-white.png",
    badgeClassName: "bg-black",
    metaTitle: "Agence TikTok Ads | Acquiz Agency",
    metaDescription:
      "Campagnes TikTok Ads : créas vidéo natives, hooks efficaces, tests créatifs et suivi fiable pour générer des ventes. Audit gratuit sous 24h.",
    h1: "Agence TikTok Ads : des créas vidéo natives qui font vendre",
    intro:
      "TikTok est devenu une plateforme d'acquisition à part entière, bien au-delà du divertissement. Ici, ce n'est pas le ciblage qui fait la différence, c'est la créa : une vidéo qui ressemble à un contenu natif capte l'attention là où une publicité classique est zappée en une seconde.",
    blocks: [
      {
        title: "Ce que nous prenons en charge",
        bullets: [
          "Stratégie créative : hooks, scripts et angles testés",
          "Briefs pour créateurs et contenus UGC",
          "Campagnes In-Feed et Spark Ads (boost de contenus existants)",
          "Configuration du Pixel TikTok et de l'Events API",
          "Tests créatifs structurés et rotation pour limiter la fatigue publicitaire",
          "Reporting clair sur ce qui performe",
        ],
      },
      {
        title: "Pourquoi la créa est le premier levier",
        paragraphs: [
          "Sur TikTok, les premières secondes décident de tout : si la vidéo n'accroche pas immédiatement, elle est passée. Les audiences ont aussi tendance à se lasser plus vite d'une même publicité, ce qui impose un renouvellement régulier des créas.",
          "C'est pourquoi nous construisons un plan de production créative en même temps que le plan média, plutôt que de lancer une unique vidéo en espérant qu'elle tienne.",
        ],
      },
      {
        title: "Pour quelles activités",
        paragraphs: [
          "TikTok Ads convient particulièrement aux marques D2C, à la mode, à la beauté, à la food, aux applications et aux infopreneurs, c'est-à-dire aux offres grand public qui peuvent produire du contenu vidéo de manière régulière.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il avoir un compte TikTok actif ?",
        a: "Pas obligatoirement : on peut diffuser des publicités sans communauté organique. Un compte actif permet néanmoins d'utiliser les Spark Ads, qui boostent des publications existantes et gagnent en crédibilité.",
      },
      {
        q: "Quel type de vidéos fonctionne ?",
        a: "Des vidéos verticales et natives, qui accrochent dès les premières secondes et montrent le produit en situation plutôt qu'une publicité trop léchée. Nous testons plusieurs hooks et angles pour identifier ce qui performe.",
      },
      {
        q: "TikTok convient-il au B2B ?",
        a: "C'est possible selon la cible, mais LinkedIn reste généralement plus adapté pour toucher des décideurs. TikTok fonctionne surtout pour des offres grand public ou des audiences larges.",
      },
    ],
    relatedServices: ["snap-ads", "meta-ads"],
    relatedPosts: ["roas-calcul-objectif", "cout-agence-publicite-en-ligne"],
  },
  {
    slug: "linkedin-ads",
    name: "LinkedIn Ads",
    shortDesc:
      "Sponsored Content et Lead Gen Forms pour toucher les bons décideurs B2B avec un message impactant.",
    logo: "/platform-logos/linkedin.png",
    fullBleedLogo: true,
    metaTitle: "Agence LinkedIn Ads (B2B) | Acquiz Agency",
    metaDescription:
      "Campagnes LinkedIn Ads pour toucher les bons décideurs B2B : Sponsored Content, Lead Gen Forms, ciblage précis. Audit gratuit sous 24h.",
    h1: "Agence LinkedIn Ads : touchez les bons décideurs B2B",
    intro:
      "LinkedIn permet de cibler des décideurs selon leur fonction, leur secteur et la taille de leur entreprise. Le coût par clic y est plus élevé que sur d'autres plateformes, mais lorsque la cible est précise et l'offre à forte valeur (SaaS, formation, services B2B), le retour peut largement le justifier.",
    blocks: [
      {
        title: "Ce que nous prenons en charge",
        bullets: [
          "Sponsored Content : image, vidéo, carrousel et document",
          "Lead Gen Forms (formulaires natifs) pour générer des leads sans friction",
          "Message Ads et Conversation Ads",
          "Ciblage par fonction, séniorité, secteur et taille d'entreprise",
          "Audiences Matched : listes de comptes et retargeting via l'Insight Tag",
          "Suivi des leads jusqu'à votre CRM",
        ],
      },
      {
        title: "Un ciblage précis, un budget maîtrisé",
        paragraphs: [
          "Sur LinkedIn, un ciblage trop large gaspille le budget et un ciblage trop étroit empêche la diffusion. Nous calibrons la taille de l'audience selon votre budget et vos objectifs, puis nous adaptons le message à chaque fonction visée : un directeur marketing et un directeur financier n'ont pas les mêmes préoccupations.",
        ],
      },
      {
        title: "Pour quelles activités",
        paragraphs: [
          "LinkedIn Ads s'adresse aux éditeurs de logiciels (SaaS), à la formation professionnelle, aux cabinets de conseil, aux services B2B et à l'événementiel professionnel : toutes les offres dont la valeur d'un client justifie un coût d'acquisition plus élevé.",
        ],
      },
    ],
    faq: [
      {
        q: "LinkedIn Ads est-il trop cher ?",
        a: "Le coût par clic est plus élevé qu'ailleurs, mais ce qui compte, c'est le coût par lead qualifié. Sur une offre B2B à forte valeur, un lead qualifié issu de LinkedIn peut être plus rentable qu'un lead moins cher mais mal ciblé.",
      },
      {
        q: "Quelle taille d'audience viser ?",
        a: "Il faut une audience suffisamment large pour que la diffusion se fasse, mais assez précise pour rester pertinente. Nous ajustons cette taille selon votre budget et vos objectifs.",
      },
      {
        q: "Lead Gen Forms ou landing page ?",
        a: "Les formulaires natifs réduisent la friction et convertissent souvent mieux, mais une landing page permet de mieux qualifier les prospects. Nous testons les deux selon votre objectif.",
      },
    ],
    relatedServices: ["google-ads", "landing-page-cro"],
    relatedPosts: ["landing-page-7-elements-conversion", "agence-ou-freelance-publicite-en-ligne"],
  },
  {
    slug: "snap-ads",
    name: "Snap Ads",
    shortDesc:
      "Formats immersifs et créas vidéo natives pour toucher une audience jeune et mobile.",
    logo: "/platform-logos/snapchat.png",
    badgeClassName: "bg-[#FFFC00]",
    metaTitle: "Agence Snapchat Ads (Snap Ads) | Acquiz Agency",
    metaDescription:
      "Campagnes Snapchat Ads : formats immersifs, créas vidéo natives et audience jeune et mobile, avec un suivi fiable. Audit gratuit sous 24h.",
    h1: "Agence Snapchat Ads : atteignez une audience jeune et mobile",
    intro:
      "Snapchat touche une audience jeune, très présente sur mobile, qui consomme du contenu vidéo plein écran. Encore sous-exploitée par de nombreuses marques, elle peut offrir des coûts d'acquisition compétitifs, à condition d'adapter ses créas au format.",
    blocks: [
      {
        title: "Ce que nous prenons en charge",
        bullets: [
          "Snap Ads vidéo plein écran",
          "Story Ads et Collection Ads",
          "Pixel Snap et API de conversions",
          "Audiences : centres d'intérêt, audiences similaires et retargeting",
          "Tests créatifs et optimisation continue",
          "Reporting clair sur vos résultats",
        ],
      },
      {
        title: "Un format à part",
        paragraphs: [
          "Format vertical plein écran, messages courts, rythme rapide : nous concevons des créas pensées pour Snapchat plutôt que recyclées d'autres plateformes. L'objectif est d'avoir l'air d'un contenu natif, pas d'une publicité interrompant l'expérience.",
        ],
      },
      {
        title: "Pour quelles activités",
        paragraphs: [
          "Snap Ads convient aux marques D2C, à la mode, à la food, à l'événementiel, aux applications, et plus généralement aux entreprises dont la cible est composée de jeunes adultes et dont l'offre se prête à une présentation visuelle et mobile.",
        ],
      },
    ],
    faq: [
      {
        q: "Snapchat Ads est-il pertinent pour mon activité ?",
        a: "Surtout si votre cible est composée de jeunes adultes et que votre offre se prête à une présentation visuelle et mobile. Pour une cible plus âgée ou très B2B, d'autres plateformes seront plus adaptées.",
      },
      {
        q: "Peut-on réutiliser nos créas TikTok ou Reels ?",
        a: "Parfois comme base de travail, mais les performances sont meilleures avec des adaptations dédiées au format et au rythme de Snapchat.",
      },
      {
        q: "Faut-il un budget minimum ?",
        a: "Nous recommandons au minimum 1 000 €/mois de budget publicitaire par plateforme, afin que l'algorithme dispose d'assez de données pour optimiser.",
      },
    ],
    relatedServices: ["tiktok-ads", "meta-ads"],
    relatedPosts: ["roas-calcul-objectif", "cout-agence-publicite-en-ligne"],
  },
  {
    slug: "landing-page-cro",
    name: "Landing page & CRO",
    shortDesc:
      "Pages d'atterrissage conçues pour convertir : message clair, un seul objectif, chargement rapide.",
    metaTitle: "Création de landing page & CRO | Acquiz Agency",
    metaDescription:
      "Landing pages conçues pour convertir vos visiteurs en leads ou clients : message clair, un seul objectif, chargement rapide. Livraison en 72h.",
    h1: "Création de landing page optimisée pour la conversion (CRO)",
    intro:
      "Le meilleur budget publicitaire du monde ne sert à rien si la page qui reçoit le trafic ne convertit pas. Nous concevons et développons des landing pages pensées pour une seule chose : transformer vos visiteurs en leads ou en clients. Message clair, un seul objectif, chargement rapide et suivi complet pour savoir ce qui fonctionne.",
    blocks: [
      {
        title: "Ce que comprend une landing page Acquiz Agency",
        bullets: [
          "Rédaction orientée conversion : promesse, preuves et gestion des objections",
          "Design sur mesure, aligné sur votre identité",
          "Développement rapide et optimisé pour mobile",
          "Formulaire ou prise de contact relié à votre messagerie",
          "Suivi des événements (soumission de formulaire, clics) pour vos campagnes",
          "Livraison en 72h",
        ],
      },
      {
        title: "Qu'est-ce que le CRO ?",
        paragraphs: [
          "Le CRO (Conversion Rate Optimization) désigne l'ensemble des méthodes qui permettent d'augmenter la part de visiteurs accomplissant l'action souhaitée : demander un devis, s'inscrire, acheter. Il repose sur l'analyse des données (où les visiteurs décrochent), la formulation d'hypothèses, puis les tests.",
          "Améliorer le taux de conversion réduit directement votre coût d'acquisition, sans augmenter votre budget publicitaire.",
        ],
      },
      {
        title: "Les principes que nous appliquons",
        bullets: [
          "Cohérence entre l'annonce et la page (message match)",
          "Un seul objectif et un seul appel à l'action",
          "Preuves sociales et traitement des objections",
          "Formulaire allégé au strict nécessaire",
          "Vitesse de chargement et approche mobile d'abord",
        ],
      },
    ],
    faq: [
      {
        q: "Pourquoi une landing page plutôt qu'un site classique ?",
        a: "Un site classique poursuit plusieurs objectifs et multiplie les liens qui dispersent l'attention. Une landing page est dédiée à une offre et à un objectif, ce qui augmente la probabilité que le visiteur passe à l'action.",
      },
      {
        q: "En combien de temps livrez-vous une landing page ?",
        a: "Nos landing pages sont livrées en 72h.",
      },
      {
        q: "Peut-on tester plusieurs versions de la page ?",
        a: "Oui. Une fois le trafic en place, nous pouvons comparer plusieurs versions (titre, visuel, formulaire) pour identifier celle qui convertit le mieux.",
      },
    ],
    relatedServices: ["meta-ads", "google-ads"],
    relatedPosts: ["landing-page-7-elements-conversion", "pixel-meta-api-conversions-tracking", "roas-calcul-objectif"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
