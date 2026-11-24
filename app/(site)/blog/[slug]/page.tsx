import Image from "next/image";
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
    // Google tronque les titres au-delà de ~60 caractères : on retire la marque si besoin.
    title: `${p.title} | ${SITE_NAME}`.length <= 60 ? `${p.title} | ${SITE_NAME}` : p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    type: "article",
    publishedTime: p.date,
    image: { url: p.image.src, width: p.image.width, height: p.image.height, alt: p.image.alt },
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
    image: [
      {
        "@type": "ImageObject",
        url: absoluteUrl(p.image.src),
        width: p.image.width,
        height: p.image.height,
        caption: p.image.alt,
      },
      ...p.content.flatMap((b) =>
        b.type === "img"
          ? [{ "@type": "ImageObject", url: absoluteUrl(b.src), width: b.width, height: b.height, caption: b.alt }]
          : [],
      ),
    ],
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

      <Image
        src={p.image.src}
        alt={p.image.alt}
        width={p.image.width}
        height={p.image.height}
        priority
        sizes="(max-width: 768px) 100vw, 768px"
        className="mt-8 h-auto w-full rounded-2xl border border-charcoal/10"
      />

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
          if (b.type === "img")
            return (
              <figure key={i} className="my-8">
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.width}
                  height={b.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full rounded-2xl border border-charcoal/10"
                />
                {b.caption && (
                  <figcaption className="mt-3 text-center font-body text-sm text-charcoal/60">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
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
