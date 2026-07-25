"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const clients = [
  { file: "/1-removebg-preview.png", name: "Agencity" },
  { file: "/2-removebg-preview.png", name: "UPEC" },
  { file: "/lefebvre-dalloz.png", name: "Lefebvre Dalloz" },
  { file: "/4-removebg-preview.png", name: "AB Prestige" },
  { file: "/5-removebg-preview.png", name: "Les Ateliers du Détailing" },
  { file: "/6-removebg-preview.png", name: "Kiosque Immobilier" },
  { file: "/mirakle.png", name: "Mirakle" },
  { file: "/fd-logo.png", name: "FD" },
];

export default function LogoBar() {
  return (
    <section className="border-y border-charcoal/10 py-12">
      <FadeIn>
        <p className="mb-8 text-center font-body text-sm uppercase tracking-wider text-charcoal/50">
          Ils nous ont fait confiance
        </p>
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max gap-12">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex h-28 w-48 shrink-0 items-center justify-center"
              >
                <Image
                  src={client.file}
                  alt={client.name}
                  width={260}
                  height={104}
                  loading="eager"
                  className="h-20 w-full object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
