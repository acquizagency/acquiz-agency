"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { LandingPageIcon, type IconComponent } from "./PlatformIcon";

type Service = {
  platform: string;
  sub: string;
  desc: string;
  logo?: string;
  fullBleedLogo?: boolean;
  badgeClassName?: string;
  Icon?: IconComponent;
};

const services: Service[] = [
  {
    platform: "Meta Ads",
    sub: "Facebook & Instagram",
    desc: "Campagnes de conversion, lead gen, retargeting. Structure professionnelle, créatives qui performent, optimisation continue.",
    logo: "/platform-logos/meta.png",
  },
  {
    platform: "Google Ads",
    sub: "SEA",
    desc: "Search, Shopping, PMax. Nous construisons des comptes qui capturent l'intention d'achat et protègent votre budget.",
    logo: "/platform-logos/google-ads.png",
  },
  {
    platform: "TikTok Ads",
    sub: "Social Ads",
    desc: "Créas vidéos virales, hooks efficaces, ciblage précis. CPM parmi les plus bas du marché.",
    logo: "/platform-logos/tiktok-white.png",
    badgeClassName: "bg-black",
  },
  {
    platform: "LinkedIn Ads",
    sub: "Social Ads",
    desc: "Sponsored Content, Lead Gen Forms. Idéal pour toucher les bons décideurs B2B avec un message impactant.",
    logo: "/platform-logos/linkedin.png",
    fullBleedLogo: true,
  },
  {
    platform: "Snap Ads",
    sub: "Social Ads",
    desc: "Formats immersifs et créas vidéos natives, pour toucher une audience jeune et mobile. Coûts d'acquisition souvent très compétitifs.",
    logo: "/platform-logos/snapchat.png",
    badgeClassName: "bg-[#FFFC00]",
  },
  {
    platform: "Landing Page",
    sub: "CRO",
    desc: "Nous concevons et développons des pages optimisées grâce à une nouvelle méthode unique pour transformer vos visiteurs en leads ou clients : message clair, un seul objectif, chargement rapide. Livraison en 72h.",
    Icon: LandingPageIcon,
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-center font-body text-sm uppercase tracking-wider text-charcoal/50">
          Ce que nous faisons
        </p>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-charcoal sm:text-4xl">
          Nos leviers. Une seule obsession : votre ROI.
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map(({ platform, sub, desc, logo, fullBleedLogo, badgeClassName, Icon }, i) => (
          <FadeIn key={platform} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-charcoal/10 bg-white/50 p-8">
              <span
                className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl ${
                  badgeClassName ?? (logo ? (fullBleedLogo ? "" : "bg-white") : "bg-charcoal text-cream")
                }`}
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={platform}
                    width={fullBleedLogo ? 48 : 28}
                    height={fullBleedLogo ? 48 : 28}
                    className={fullBleedLogo ? "h-12 w-12 object-cover" : "h-7 w-7 object-contain"}
                  />
                ) : (
                  Icon && <Icon className="h-6 w-6" />
                )}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-charcoal">
                {platform}
                {sub && <span className="ml-2 font-body text-sm font-normal text-charcoal/50">{sub}</span>}
              </h3>
              <p className="mt-3 font-body text-charcoal/70">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
