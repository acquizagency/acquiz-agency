import Link from "next/link";

export default function CtaBand({
  title = "Un audit gratuit de votre situation, sous 24h",
  text = "Nous analysons vos comptes, votre tracking et votre page d'atterrissage, puis nous vous présentons un plan clair.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-charcoal px-8 py-10 text-center sm:flex-row sm:text-left">
      <div>
        <p className="font-display text-xl font-semibold text-cream sm:text-2xl">{title}</p>
        <p className="mt-2 font-body text-sm text-cream/70">{text}</p>
        <Link
          href="/audit-gratuit"
          className="mt-3 inline-block font-body text-sm text-cream underline underline-offset-4 hover:text-cream/80"
        >
          Voir ce que comprend l&apos;audit
        </Link>
      </div>
      <Link
        href="/#contact"
        className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-body font-semibold text-charcoal transition-transform hover:scale-[1.03]"
      >
        Obtenir mon audit gratuit
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
