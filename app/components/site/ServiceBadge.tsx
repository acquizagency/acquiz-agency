import Image from "next/image";
import { LandingPageIcon } from "../PlatformIcon";
import type { ServicePageData } from "../../lib/services";

export default function ServiceBadge({
  service,
  size = "md",
}: {
  service: ServicePageData;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-16 w-16 rounded-2xl" : "h-12 w-12 rounded-xl";
  const px = size === "lg" ? 64 : 48;
  const inner = size === "lg" ? "h-9 w-9" : "h-7 w-7";
  const innerPx = size === "lg" ? 36 : 28;

  const background =
    service.badgeClassName ??
    (service.logo ? (service.fullBleedLogo ? "" : "bg-white") : "bg-charcoal text-cream");

  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden border border-charcoal/5 ${box} ${background}`}
    >
      {service.logo ? (
        service.fullBleedLogo ? (
          <Image
            src={service.logo}
            alt=""
            width={px}
            height={px}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={service.logo}
            alt=""
            width={innerPx}
            height={innerPx}
            className={`${inner} object-contain`}
          />
        )
      ) : (
        <LandingPageIcon className={size === "lg" ? "h-8 w-8" : "h-6 w-6"} />
      )}
    </span>
  );
}
