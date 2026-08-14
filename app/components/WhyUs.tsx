"use client";

import FadeIn from "./FadeIn";
import { PinIcon, TrophyIcon, CertificateIcon, LightningIcon } from "./WhyUsIcons";

const reasons = [
  {
    title: "Expérience terrain à Paris",
    desc: "Une expertise forgée en agence média parisienne, au contact quotidien de vraies campagnes et de vrais budgets.",
    Icon: PinIcon,
  },
  {
    title: "Habitués aux gros comptes",
    desc: "Une expérience confirmée sur des comptes exigeants, avec la rigueur et les standards que ça impose.",
    Icon: TrophyIcon,
  },
  {
    title: "Certifications professionnelles",
    desc: "Des certifications reconnues sur les principales plateformes publicitaires, maintenues à jour en continu.",
    Icon: CertificateIcon,
  },
  {
    title: "Toujours à la pointe",
    desc: "Une veille permanente sur les nouvelles méthodes et outils, quand la plupart des agences travaillent encore à l'ancienne.",
    Icon: LightningIcon,
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-center font-body text-sm uppercase tracking-wider text-charcoal/50">
          Notre différence
        </p>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-charcoal sm:text-4xl">
          Pourquoi travailler avec nous ?
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ title, desc, Icon }, i) => (
          <FadeIn key={title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-charcoal/10 bg-white/50 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal text-cream">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-charcoal">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm text-charcoal/70">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
