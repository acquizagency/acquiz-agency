import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/site/Breadcrumbs";
import CtaBand from "../../components/site/CtaBand";
import JsonLd from "../../components/site/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "../../lib/seo";
import { SITE_NAME, absoluteUrl } from "../../lib/site";

const PATH = "/audit-gratuit";

export const metadata: Metadata = buildMetadata({
  title: "Audit gratuit de compte publicitaire | Acquiz Agency",
  description:
    "Audit gratuit et sans engagement de vos campagnes Meta Ads et Google Ads : tracking, structure, créas et landing page. Réponse sous 24h.",
  path: PATH,
});

const analysed = [
  {
    title: "Le tracking",
    text: "Pixel Meta, API de conversions, balise Google, événements et déduplication : vos conversions remontent-elles correctement aux plateformes ?",
  },
  {
    title: "La structure des campagnes",
    text: "Objectifs, audiences, répartition des budgets, découpage des campagnes et des groupes d'annonces.",
  },
  {
    title: "Les créas et les messages",
    text: "Qualité et variété des visuels et des vidéos, angles testés, signes de fatigue créative.",
  },
  {
    title: "La landing page",
    text: "Cohérence avec l'annonce, clarté du message, longueur du formulaire, vitesse et affichage mobile.",
  },
  {
    title: "Vos indicateurs",
    text: "Coût par lead ou par acquisition, ROAS, et surtout leur comparaison avec votre marge réelle.",
  },
];

const steps = [
  "Vous remplissez le formulaire : prénom, e-mail, téléphone et adresse de votre site. Le budget publicitaire est facultatif.",
  "Nous analysons votre site, votre offre et, si vous en avez, vos campagnes en cours.",
  "Nous vous recontactons sous 24h pour vous présenter nos constats et les priorités à traiter.",
];

const selfCheck = [
  "Votre Pixel et votre API de conversions envoient-ils bien les événements, sans doublons ?",
  "Connaissez-vous votre ROAS d'équilibre, c'est-à-dire le ROAS en dessous duquel vous perdez de l'argent ?",
  "Vos créas sont-elles renouvelées régulièrement, ou la fréquence d'affichage grimpe-t-elle ?",
  "Le message de la landing page reprend-il exactement la promesse de l'annonce ?",
  "Suivez-vous les appels et les formulaires jusqu'à la vente, pas seulement les clics ?",
];

const faq = [
  {
    q: "L'audit est-il vraiment gratuit ?",
    a: "Oui. L'audit est offert et sans engagement : vous n'avez rien à payer pour recevoir notre analyse.",
  },
  {
    q: "Dois-je déjà avoir des campagnes pour en bénéficier ?",
    a: "Non. Si vous n'avez pas encore lancé de publicité, nous analysons votre site, votre offre et votre suivi pour déterminer par quelle plateforme commencer et avec quel budget.",
  },
  {
    q: "Sous quel délai ai-je un retour ?",
    a: "Nous vous répondons sous 24h après réception de votre demande.",
  },
  {
    q: "Quelles plateformes sont couvertes ?",
    a: "Meta Ads (Facebook et Instagram), Google Ads, TikTok Ads, LinkedIn Ads et Snap Ads, ainsi que votre landing page.",
  },
];

export default function AuditPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Audit gratuit", path: PATH },
  ];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Audit gratuit de compte publicitaire",
    serviceType: "Audit de campagnes publicitaires",
    description:
      "Audit gratuit et sans engagement des campagnes Meta Ads et Google Ads : tracking, structure, créas, landing page et indicateurs.",
    url: absoluteUrl(PATH),
    provider: { "@type": "ProfessionalService", name: SITE_NAME, url: absoluteUrl("/") },
    areaServed: { "@type": "Country", name: "France" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <Breadcrumbs items={[{ name: "Accueil", path: "/" }, { name: "Audit gratuit" }]} />

      <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
        Audit gratuit de votre compte publicitaire (Meta Ads, Google Ads)
      </h1>
      <p className="mt-6 font-body text-lg leading-relaxed text-charcoal/75">
        Vous dépensez déjà en publicité sans être certain que cela rapporte, ou vous hésitez à vous
        lancer ? Nous passons en revue votre tracking, vos campagnes, vos créas et votre landing page, puis
        nous vous disons clairement ce qui freine vos résultats et par où commencer. L&apos;audit est
        offert et sans engagement.
      </p>
      <div className="mt-8">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 font-body font-semibold text-cream transition-transform hover:scale-[1.03]"
        >
          Demander mon audit gratuit →
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-charcoal">Ce que nous analysons</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {analysed.map((a) => (
            <li key={a.title} className="rounded-2xl border border-charcoal/10 bg-white/60 p-5">
              <h3 className="font-display text-lg font-semibold text-charcoal">{a.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-charcoal">Comment ça se passe</h2>
        <ol className="mt-6 space-y-4">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-4 font-body text-charcoal/75">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal font-display text-sm font-semibold text-cream">
                {i + 1}
              </span>
              <span className="pt-1">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-charcoal">
          Faire un premier diagnostic vous-même
        </h2>
        <p className="mt-4 font-body leading-relaxed text-charcoal/75">
          Avant de nous contacter, voici cinq vérifications rapides. Si vous répondez « non » ou « je ne
          sais pas » à plusieurs d&apos;entre elles, un audit vous fera gagner du temps et de l&apos;argent.
        </p>
        <ul className="mt-4 space-y-2 font-body text-charcoal/75">
          {selfCheck.map((c) => (
            <li key={c} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-body leading-relaxed text-charcoal/75">
          Pour approfondir :{" "}
          <Link href="/blog/pixel-meta-api-conversions-tracking" className="underline underline-offset-4 hover:text-charcoal">
            mettre en place un tracking fiable
          </Link>
          ,{" "}
          <Link href="/blog/roas-calcul-objectif" className="underline underline-offset-4 hover:text-charcoal">
            calculer son ROAS et son objectif
          </Link>{" "}
          et{" "}
          <Link href="/blog/landing-page-7-elements-conversion" className="underline underline-offset-4 hover:text-charcoal">
            les 7 éléments d&apos;une landing page qui convertit
          </Link>
          .
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-charcoal">Questions fréquentes</h2>
        <div className="mt-6 divide-y divide-charcoal/10 rounded-3xl border border-charcoal/10 bg-white/60">
          {faq.map((f) => (
            <details key={f.q} className="group px-6 py-4">
              <summary className="cursor-pointer list-none font-display font-semibold text-charcoal">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span aria-hidden="true" className="transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 font-body leading-relaxed text-charcoal/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-14">
        <CtaBand />
      </div>
    </article>
  );
}
