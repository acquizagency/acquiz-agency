"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "../lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal py-10">
      <div className="mx-auto max-w-6xl px-6">
        <nav
          aria-label="Services et blog"
          className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-b border-cream/10 pb-8 font-body text-sm text-cream/70"
        >
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-cream">
              {s.name}
            </Link>
          ))}
          <Link href="/blog" className="hover:text-cream">
            Blog
          </Link>
          <Link href="/audit-gratuit" className="hover:text-cream">
            Audit gratuit
          </Link>
        </nav>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Image
          src="/logo/wordmark-cream.png"
          alt="Acquiz Agency"
          width={160}
          height={77}
          className="h-6 w-auto"
        />
        <p className="font-body text-sm text-cream/60">
          © 2026 Acquiz — SIRET 94462089700016
        </p>
        <div className="flex gap-6 font-body text-sm text-cream/60">
          <Link href="/mentions-legales" className="hover:text-cream">
            Mentions légales
          </Link>
          <Link href="/politique-de-confidentialite" className="hover:text-cream">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
