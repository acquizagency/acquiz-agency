import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/site/Breadcrumbs";
import CtaBand from "../../components/site/CtaBand";
import JsonLd from "../../components/site/JsonLd";
import ServiceBadge from "../../components/site/ServiceBadge";
import { services } from "../../lib/services";
import { breadcrumbJsonLd, buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nos services publicitaires : Meta, Google, TikTok, LinkedIn, Snap | Acquiz Agency",
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

      <div className="mt-16">
        <CtaBand />
      </div>
    </div>
  );
}
