"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import FadeIn from "./FadeIn";

const stats = [
  { value: 1000000, prefix: "+", suffix: "€", label: "dépensés sur les plateformes publicitaires" },
  { value: 600000, prefix: "+", suffix: "€", label: "de CA générés pour nos clients" },
  { value: 2.6, prefix: "", suffix: "", decimals: 1, label: "ROAS moyen obtenu sur nos clients" },
  { value: 98, prefix: "", suffix: "%", label: "clients satisfaits" },
];

function Counter({
  value,
  prefix,
  suffix,
  decimals = 0,
}: {
  value: number;
  prefix: string;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Number((value * progress).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value, decimals]);

  const formatted = display.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-charcoal sm:text-5xl">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-charcoal/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-center font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Des résultats, pas des promesses.
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
                <p className="mt-2 font-body text-sm text-charcoal/60">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
