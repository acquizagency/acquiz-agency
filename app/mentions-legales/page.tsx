import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Acquiz Agency",
  robots: "noindex, nofollow",
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/" className="font-body text-sm text-charcoal/60 hover:text-charcoal">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-6 font-display text-3xl font-bold text-charcoal sm:text-4xl">
        Mentions légales
      </h1>

      <div className="mt-10 flex flex-col gap-8 font-body text-charcoal/80">
        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">Éditeur du site</h2>
          <p className="mt-2">
            Le site acquiz.fr est édité par Amin Da Silva, entrepreneur individuel.
            <br />
            SIRET : 944 620 897 00016
            <br />
            Activité : Publicité (code NAF 73.11Z)
            <br />
            Siège social : 93010 Bondy, France
            <br />
            Email :{" "}
            <a href="mailto:contact@acquiz.fr" className="underline">
              contact@acquiz.fr
            </a>
            <br />
            Téléphone :{" "}
            <a href="tel:+33767817910" className="underline">
              +33 7 67 81 79 10
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Directeur de la publication
          </h2>
          <p className="mt-2">Amin Da Silva</p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">Hébergement</h2>
          <p className="mt-2">
            Ce site est hébergé par Vercel Inc.
            <br />
            440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
            <br />
            <a href="https://vercel.com" className="underline">
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site (textes, logos, visuels,
            éléments graphiques) est la propriété exclusive d&apos;Acquiz Agency, sauf
            mention contraire. Toute reproduction, représentation, modification ou
            exploitation, totale ou partielle, sans autorisation préalable, est
            interdite.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">Données personnelles</h2>
          <p className="mt-2">
            Les informations recueillies via le formulaire de contact sont utilisées
            uniquement pour répondre à votre demande et ne sont transmises à aucun
            tiers. Pour en savoir plus, consultez notre{" "}
            <Link href="/politique-de-confidentialite" className="underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Limitation de responsabilité
          </h2>
          <p className="mt-2">
            Acquiz Agency s&apos;efforce d&apos;assurer l&apos;exactitude des informations
            diffusées sur ce site, sans garantie d&apos;exhaustivité. Acquiz Agency ne
            saurait être tenu responsable des erreurs, omissions, ou de
            l&apos;indisponibilité du site.
          </p>
        </section>
      </div>
    </main>
  );
}
