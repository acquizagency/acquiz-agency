import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/site/Breadcrumbs";
import CtaBand from "../../components/site/CtaBand";
import JsonLd from "../../components/site/JsonLd";
import ServiceBadge from "../../components/site/ServiceBadge";
import { services } from "../../lib/services";
import { breadcrumbJsonLd, buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services de publicité en ligne | Acquiz Agency",
  description:
    "Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, Snap Ads et landing pages : découvrez comment Acquiz Agency génère leads et ventes pour votre activité.",
  path: "/services",
});

export default function ServicesHub() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
  ];
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={[{ name: "Accueil", path: "/" }, { name: "Services" }]} />
      <h1 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-charcoal sm:text-5xl">
        Nos services d&apos;acquisition en publicité en ligne
      </h1>
      <p className="mt-5 max-w-2xl font-body text-lg text-charcoal/70">
        Un seul interlocuteur pour piloter vos campagnes sur les plateformes qui comptent et
        optimiser la page où vos visiteurs deviennent clients.
      </p>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white/60 p-6 transition-colors hover:border-charcoal/30"
            >
              <ServiceBadge service={s} />
              <h2 className="mt-5 font-display text-xl font-semibold text-charcoal">{s.name}</h2>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-charcoal/70">
                {s.shortDesc}
              </p>
              <span className="mt-5 font-body text-sm font-semibold text-charcoal">
                En savoir plus{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold text-charcoal">
          Une méthode commune à tous nos leviers
        </h2>
        <p className="mt-4 font-body leading-relaxed text-charcoal/75">
          Quelle que soit la plateforme, nous suivons la même logique : on ne dépense pas un euro de plus
          avant de savoir ce que rapporte le précédent.
        </p>
        <ul className="mt-5 space-y-4 font-body leading-relaxed text-charcoal/75">
          <li>
            <strong className="font-semibold text-charcoal">Un tracking fiable d&apos;abord.</strong> Sans
            conversions correctement mesurées, les algorithmes optimisent sur de mauvais signaux. C&apos;est la
            première chose que nous vérifions (voir{" "}
            <Link href="/blog/pixel-meta-api-conversions-tracking" className="underline underline-offset-4 hover:text-charcoal">
              notre guide sur le Pixel Meta et l&apos;API de conversions
            </Link>
            ).
          </li>
          <li>
            <strong className="font-semibold text-charcoal">Un objectif de rentabilité chiffré.</strong> Nous
            partons de votre marge pour fixer un coût d&apos;acquisition ou un ROAS cible réaliste (voir{" "}
            <Link href="/blog/roas-calcul-objectif" className="underline underline-offset-4 hover:text-charcoal">
              comment calculer et choisir son ROAS
            </Link>
            ).
          </li>
          <li>
            <strong className="font-semibold text-charcoal">Une page qui convertit.</strong> Une bonne annonce
            envoie du trafic, c&apos;est la landing page qui le transforme en contacts ou en ventes (voir{" "}
            <Link href="/blog/landing-page-7-elements-conversion" className="underline underline-offset-4 hover:text-charcoal">
              les 7 éléments d&apos;une landing page efficace
            </Link>
            ).
          </li>
          <li>
            <strong className="font-semibold text-charcoal">Une optimisation continue.</strong> Tests de
            créas, ajustement des audiences et des budgets, et un reporting clair pour que vous sachiez
            toujours où va votre argent.
          </li>
        </ul>
        <p className="mt-5 font-body leading-relaxed text-charcoal/75">
          Pas sûr de la plateforme à privilégier ? Lisez notre comparatif{" "}
          <Link href="/blog/meta-ads-ou-google-ads" className="underline underline-offset-4 hover:text-charcoal">
            Meta Ads ou Google Ads
          </Link>
          , ou{" "}
          <Link href="/audit-gratuit" className="underline underline-offset-4 hover:text-charcoal">
            demandez un audit gratuit
          </Link>
          .
        </p>
      </section>

      <div className="mt-16">
        <CtaBand />
      </div>
    </div>
  );
}
