"use client";

import { FormEvent, useState } from "react";
import FadeIn from "./FadeIn";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <FadeIn>
        <h2 className="text-center font-display text-3xl font-bold text-charcoal sm:text-4xl">
          Décrivez-nous votre projet
        </h2>
        <p className="mt-3 text-center font-body text-charcoal/70">
          Nous vous répondons sous 24h avec une première analyse offerte.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 rounded-3xl border border-charcoal/10 bg-white/50 p-8">
          {status === "success" ? (
            <div className="py-8 text-center">
              <p className="text-4xl">🎉</p>
              <h3 className="mt-4 font-display text-2xl font-bold text-charcoal">
                Merci !
              </h3>
              <p className="mt-2 font-body text-charcoal/70">
                Nous avons bien reçu votre demande. Nous vous contacterons
                sans faute sous 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal">
                  Prénom *
                </label>
                <input
                  required
                  name="prenom"
                  placeholder="Jean"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 font-body text-charcoal outline-none focus:border-charcoal/40"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jean@exemple.fr"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 font-body text-charcoal outline-none focus:border-charcoal/40"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal">
                  Téléphone *
                </label>
                <input
                  required
                  type="tel"
                  name="telephone"
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 font-body text-charcoal outline-none focus:border-charcoal/40"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal">
                  Site web ou activité *
                </label>
                <input
                  required
                  name="site"
                  placeholder="monsite.fr ou ex : boutique de vêtements en ligne"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 font-body text-charcoal outline-none focus:border-charcoal/40"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal">
                  Budget pub mensuel *
                </label>
                <select
                  required
                  name="budget"
                  defaultValue=""
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 font-body text-charcoal outline-none focus:border-charcoal/40"
                >
                  <option value="" disabled>
                    Sélectionnez...
                  </option>
                  <option value="<500">Moins de 500€/mois</option>
                  <option value="500-2000">500€ – 2 000€/mois</option>
                  <option value="2000-5000">2 000€ – 5 000€/mois</option>
                  <option value=">5000">+5 000€/mois</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Décrivez votre activité et vos objectifs..."
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 font-body text-charcoal outline-none focus:border-charcoal/40"
                />
              </div>

              {status === "error" && (
                <p className="font-body text-sm text-charcoal/80">
                  Une erreur s&apos;est produite. Essayez de m&apos;écrire
                  directement à{" "}
                  <a href="mailto:contact@acquiz.fr" className="underline">
                    contact@acquiz.fr
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 rounded-full bg-charcoal px-8 py-4 font-body font-semibold text-cream transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "loading"
                  ? "Envoi en cours..."
                  : "Envoyer ma demande → nous répondons sous 24h"}
              </button>
            </form>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-6 flex flex-col items-center gap-2 font-body text-sm text-charcoal/60 sm:flex-row sm:justify-center sm:gap-6">
          <a href="mailto:contact@acquiz.fr" className="hover:text-charcoal">
            📧 contact@acquiz.fr
          </a>
          <a href="tel:+33767817910" className="hover:text-charcoal">
            📞 +33 7 67 81 79 10
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
