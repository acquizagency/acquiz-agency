"use client";

import FadeIn from "./FadeIn";

const problems = [
  "Vous avez lancé des pubs mais les résultats ne suivent pas",
  "Votre budget pub part dans des clics qui n'achètent rien",
  "Vous ne savez pas vraiment ce qui fonctionne ou non dans vos campagnes",
  "Vous cherchez un moyen de vendre ou d'obtenir des rendez-vous mais vous ne savez pas quoi mettre en place",
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <FadeIn>
        <p className="text-center font-body text-sm uppercase tracking-wider text-charcoal/50">
          Ça vous parle ?
        </p>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-charcoal sm:text-4xl">
          Vouloir piloter ses pubs sans expertise, c&apos;est piloter à
          l&apos;aveugle un budget qui compte
        </h2>
      </FadeIn>

      <div className="mt-12 flex flex-col gap-4">
        {problems.map((problem, i) => (
          <FadeIn key={problem} delay={i * 0.1}>
            <div className="flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-white/50 p-5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-charcoal font-bold text-cream">
                ✕
              </span>
              <p className="font-body text-charcoal/80">{problem}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
