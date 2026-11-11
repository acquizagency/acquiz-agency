import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Acquiz Agency — accueil">
          <Image
            src="/logo/wordmark-dark.png"
            alt="Acquiz Agency"
            width={220}
            height={106}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-4 font-body text-sm text-charcoal/80 sm:gap-6"
        >
          <Link href="/services" className="hover:text-charcoal">
            Services
          </Link>
          <Link href="/blog" className="hover:text-charcoal">
            Blog
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-charcoal px-4 py-2 font-semibold text-cream transition-transform hover:scale-[1.03]"
          >
            Audit gratuit
          </Link>
        </nav>
      </div>
    </header>
  );
}
