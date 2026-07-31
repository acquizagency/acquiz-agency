"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Quel budget minimum pour commencer ?",
    a: "Nous recommandons au minimum 1 000€/mois de budget publicitaire par plateforme pour que les algorithmes aient assez de données.",
  },
  {
    q: "Est-ce que vous gérez aussi le tracking ?",
    a: "Oui. Le tracking est configuré et vérifié sur toutes les plateformes publicitaires avant le lancement de toute campagne. Sans données fiables, aucune optimisation n'a de sens.",
  },
  {
    q: "Y a-t-il un engagement ou contrat longue durée ?",
    a: "Engagement de 3 mois minimum. C'est le temps nécessaire pour que les algorithmes publicitaires sortent de leur phase d'apprentissage et que les ajustements successifs révèlent le vrai potentiel de vos campagnes. En dessous de 3 mois, aucun résultat n'est représentatif.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Premiers signaux dès 2 semaines. Résultats stables à partir du 3e mois, le temps que les algorithmes sortent de leur phase d'apprentissage et que les ajustements révèlent le vrai potentiel de vos campagnes.",
  },
  {
    q: "Vous travaillez avec quel type de clients ?",
    a: "E-commerçants et entreprises en lead generation — TPE, PME, entrepreneurs qui veulent des résultats mesurables sans passer par une grosse agence impersonnelle.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-charcoal/10 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-display font-semibold text-charcoal">{q}</span>
        <span
          className="shrink-0 text-2xl font-light text-charcoal transition-transform"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 font-body text-charcoal/70">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="bg-charcoal/5 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <h2 className="text-center font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Questions fréquentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
