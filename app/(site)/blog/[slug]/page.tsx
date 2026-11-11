import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "../../../components/site/Breadcrumbs";
import CtaBand from "../../../components/site/CtaBand";
import JsonLd from "../../../components/site/JsonLd";
import { formatPostDate, getPost, posts } from "../../../lib/posts";
import { getService } from "../../../lib/services";
import { breadcrumbJsonLd, buildMetadata } from "../../../lib/seo";
import { SITE_NAME, absoluteUrl } from "../../../lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.title} | ${SITE_NAME}`,
    description: p.description,
    path: `/blog/${p.slug}`,
    type: "article",
    publishedTime: p.date,
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();

  const path = `/blog/${p.slug}`;
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: p.title, path },
  ];
  const related = p.relatedServices.map((slug) => getService(slug)).filter(Boolean);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl("/og-image.png"),
    author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo/wordmark-dark.png") },
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={[{ name: "Accueil", path: "/" }, { name: "Blog", path: "/blog" }, { name: p.title }]} />

      <p className="mt-6 font-body text-sm text-charcoal/60">
        <time dateTime={p.date}>{formatPostDate(p.date)}</time> · {p.readingMinutes} min de lecture
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
        {p.title}
      </h1>

      <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-charcoal/80">
        {p.content.map((b, i) => {
          if (b.type === "h2")
            return (
              <h2 key={i} className="pt-6 font-display text-2xl font-semibold text-charcoal">
                {b.text}
              </h2>
            );
          if (b.type === "ul")
            return (
              <ul key={i} className="space-y-2">
                {b.items.map((li) => (
                  <li key={li} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            );
          return <p key={i}>{b.text}</p>;
        })}
      </div>

      <div className="mt-14">
        <CtaBand />
      </div>

      {related.length > 0 && (
        <aside className="mt-12">
          <h2 className="font-display text-lg font-semibold text-charcoal">Nos services liés</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {related.map((r) => (
              <li key={r!.slug}>
                <Link
                  href={`/services/${r!.slug}`}
                  className="inline-block rounded-full border border-charcoal/15 px-4 py-2 font-body text-sm text-charcoal hover:border-charcoal/40"
                >
                  {r!.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}
