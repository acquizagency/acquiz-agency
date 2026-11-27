import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/site/Breadcrumbs";
import JsonLd from "../../components/site/JsonLd";
import { formatPostDate, posts } from "../../lib/posts";
import { breadcrumbJsonLd, buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog acquisition & publicité en ligne | Acquiz Agency",
  description:
    "Guides pratiques sur le ROAS, Meta Ads, Google Ads et l'optimisation de landing pages pour générer plus de leads et de ventes.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Accueil", path: "/" }, { name: "Blog" }]} />
      <h1 className="mt-6 font-display text-3xl font-bold text-charcoal sm:text-5xl">
        Blog acquisition & publicité en ligne
      </h1>
      <p className="mt-5 max-w-2xl font-body text-lg text-charcoal/70">
        Des guides concrets pour piloter vos campagnes et améliorer votre rentabilité publicitaire.
      </p>
      <ul className="mt-10 space-y-5">
        {[...posts].sort((a, b) => b.date.localeCompare(a.date)).map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex flex-col gap-5 rounded-3xl border border-charcoal/10 bg-white/60 p-4 transition-colors hover:border-charcoal/30 sm:flex-row sm:items-center sm:p-5"
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                width={p.image.width}
                height={p.image.height}
                sizes="(max-width: 640px) 100vw, 260px"
                className="h-auto w-full shrink-0 rounded-2xl border border-charcoal/10 sm:w-[260px]"
              />
              <div className="px-2 pb-2 sm:p-0">
                <p className="font-body text-sm text-charcoal/60">
                  {formatPostDate(p.date)} · {p.readingMinutes} min de lecture
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-charcoal sm:text-2xl">
                  {p.title}
                </h2>
                <p className="mt-2 font-body text-charcoal/70">{p.description}</p>
                <span className="mt-4 inline-block font-body text-sm font-semibold text-charcoal">
                  Lire l&apos;article{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
