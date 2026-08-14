"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Audit gratuit sous 24h",
    desc: "Nous analysons vos comptes, votre tracking, votre page d'atterissage et vos résultats actuels.",
  },
  {
    n: "02",
    title: "Stratégie sur-mesure",
    desc: "Nous vous présentons un plan clair avec une méthode inédite et à jour avec les algorithmes : plateformes, landing page, budget, créatifs, objectifs.",
  },
  {
    n: "03",
    title: "Lancement & optimisation",
    desc: "Nous pilotons tout de A à Z, vous voyez les résultats évoluer chaque semaine.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-center font-body text-sm uppercase tracking-wider text-charcoal/50">
          Comment ça marche ?
        </p>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-charcoal sm:text-4xl">
          Simple, transparent, mesurable.
        </h2>
      </FadeIn>

      <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-charcoal/15 sm:block" />
        {steps.map((step, i) => (
          <FadeIn key={step.n} delay={i * 0.1}>
            <div className="relative text-center sm:text-left">
              <span className="font-display text-6xl font-bold text-charcoal/10">
                {step.n}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-charcoal/70">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
