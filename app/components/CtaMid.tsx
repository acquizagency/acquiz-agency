"use client";

import FadeIn from "./FadeIn";

export default function CtaMid() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <FadeIn>
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-charcoal px-8 py-12 text-center sm:flex-row sm:text-left">
          <p className="font-display text-xl font-semibold text-cream sm:text-2xl">
            Vous avez un projet ? Parlons-en : audit gratuit sans engagement
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-body font-semibold text-charcoal transition-transform hover:scale-[1.03]"
          >
            Obtenir mon audit gratuit
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
