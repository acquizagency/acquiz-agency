import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "../../../components/site/Breadcrumbs";
import CtaBand from "../../../components/site/CtaBand";
import JsonLd from "../../../components/site/JsonLd";
import ServiceBadge from "../../../components/site/ServiceBadge";
import { getService, services } from "../../../lib/services";
import { getPost } from "../../../lib/posts";
import { breadcrumbJsonLd, buildMetadata } from "../../../lib/seo";
import { SITE_NAME, absoluteUrl } from "../../../lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.name, path },
  ];
  const related = s.relatedServices.map((slug) => getService(slug)).filter(Boolean);
  const relatedPosts = s.relatedPosts.map((slug) => getPost(slug)).filter(Boolean);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: absoluteUrl(path),
    provider: { "@type": "ProfessionalService", name: SITE_NAME, url: absoluteUrl("/") },
    areaServed: { "@type": "Country", name: "France" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
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

      <Breadcrumbs
        items={[{ name: "Accueil", path: "/" }, { name: "Services", path: "/services" }, { name: s.name }]}
      />

      <div className="mt-6 flex items-start gap-4">
        <ServiceBadge service={s} size="lg" />
        <h1 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
          {s.h1}
        </h1>
      </div>
      <p className="mt-6 font-body text-lg leading-relaxed text-charcoal/75">{s.intro}</p>

      <div className="mt-8">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 font-body font-semibold text-cream transition-transform hover:scale-[1.03]"
        >
          Obtenir mon audit gratuit →
        </Link>
      </div>

      <div className="mt-14 space-y-12">
        {s.blocks.map((b) => (
          <section key={b.title}>
            <h2 className="font-display text-2xl font-semibold text-charcoal">{b.title}</h2>
            {b.paragraphs?.map((p) => (
              <p key={p} className="mt-4 font-body leading-relaxed text-charcoal/75">
                {p}
              </p>
            ))}
            {b.bullets && (
              <ul className="mt-4 space-y-2 font-body text-charcoal/75">
                {b.bullets.map((li) => (
                  <li key={li} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="mt-14 rounded-3xl border border-charcoal/10 bg-white/60 p-6 font-body text-charcoal/75">
        Plus de 30 clients accompagnés, un expert certifié par les principales régies publicitaires.
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-charcoal">Questions fréquentes</h2>
        <div className="mt-6 divide-y divide-charcoal/10 rounded-3xl border border-charcoal/10 bg-white/60">
          {s.faq.map((f) => (
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

      {(related.length > 0 || relatedPosts.length > 0) && (
        <aside className="mt-14 grid gap-10 sm:grid-cols-2">
          {related.length > 0 && (
            <div>
              <h2 className="font-display text-lg font-semibold text-charcoal">Services liés</h2>
              <ul className="mt-3 space-y-2 font-body text-charcoal/75">
                {related.map((r) => (
                  <li key={r!.slug}>
                    <Link href={`/services/${r!.slug}`} className="underline underline-offset-4 hover:text-charcoal">
                      {r!.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="font-display text-lg font-semibold text-charcoal">À lire aussi</h2>
              <ul className="mt-3 space-y-2 font-body text-charcoal/75">
                {relatedPosts.map((p) => (
                  <li key={p!.slug}>
                    <Link href={`/blog/${p!.slug}`} className="underline underline-offset-4 hover:text-charcoal">
                      {p!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      )}
    </article>
  );
}
