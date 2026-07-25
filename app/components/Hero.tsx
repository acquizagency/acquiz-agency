"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trustPoints = [
  { emoji: "🎁", text: "Audit offert sans engagement" },
  { emoji: "⏱️", text: "Réponse en 24h" },
  { emoji: "💰", text: "+ 1 000 000€ dépensés en publicité" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#332D2D 1px, transparent 1px), linear-gradient(90deg, #332D2D 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-10">
        <Image
          src="/logo/wordmark-dark.png"
          alt="Acquiz Agency"
          width={220}
          height={106}
          priority
          className="h-14 w-auto sm:h-16"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border border-charcoal/20 px-5 py-2 font-body text-base text-charcoal/70"
        >
          Agence experte en acquisition Digitale
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-tight text-charcoal sm:text-6xl md:text-7xl"
        >
          Nous nous occupons de votre{" "}
          <span
            className="rounded-md bg-charcoal px-2 text-cream"
            style={{ boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
          >
            acquisition de leads et clients
          </span>
          <br className="sm:hidden" />{" "}
          de A à Z
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl font-body text-lg text-charcoal/70"
        >
          Déléguez votre partie digitale à un expert recommandé par les plus
          grandes entreprises en France. Restez enfin concentré sur le cœur
          de votre business.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 font-body font-semibold text-cream transition-transform hover:scale-[1.03]"
        >
          Je veux un audit gratuit
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.a>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 font-body text-base text-charcoal/70 sm:flex-row sm:gap-8"
        >
          {trustPoints.map((point) => (
            <li key={point.text} className="flex items-center gap-2">
              <span className="text-xl">{point.emoji}</span>
              {point.text}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
