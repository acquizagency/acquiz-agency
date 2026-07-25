import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Acquiz Agency",
  robots: "noindex, nofollow",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/" className="font-body text-sm text-charcoal/60 hover:text-charcoal">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-6 font-display text-3xl font-bold text-charcoal sm:text-4xl">
        Politique de confidentialité
      </h1>

      <div className="mt-10 flex flex-col gap-8 font-body text-charcoal/80">
        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Responsable du traitement
          </h2>
          <p className="mt-2">
            Amin Da Silva, entrepreneur individuel exerçant sous le nom commercial
            Acquiz Agency, est responsable du traitement des données collectées sur
            ce site.
            <br />
            Contact :{" "}
            <a href="mailto:contact@acquiz.fr" className="underline">
              contact@acquiz.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Données collectées
          </h2>
          <p className="mt-2">
            Le formulaire de contact de ce site collecte les données suivantes :
            prénom, adresse email, site web ou activité, budget publicitaire
            mensuel, et un message facultatif. Aucune autre donnée personnelle
            n&apos;est collectée automatiquement : ce site n&apos;utilise pas de
            cookies de suivi ni d&apos;outils de mesure d&apos;audience à ce jour.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Finalité du traitement
          </h2>
          <p className="mt-2">
            Ces données sont utilisées exclusivement pour répondre à votre demande
            d&apos;audit ou de renseignement, et pour vous recontacter dans ce cadre.
            Elles ne font l&apos;objet d&apos;aucune prospection commerciale non
            sollicitée ni d&apos;aucune cession à des tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Base légale
          </h2>
          <p className="mt-2">
            Le traitement repose sur votre consentement, exprimé lors de
            l&apos;envoi volontaire du formulaire de contact.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Destinataires des données
          </h2>
          <p className="mt-2">
            Les données transmises via le formulaire sont reçues uniquement par
            Amin Da Silva. Elles transitent techniquement par les prestataires
            suivants, qui agissent en tant que sous-traitants :
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Resend</strong> — service d&apos;envoi d&apos;emails
              transactionnels, utilisé pour acheminer le contenu du formulaire par
              email.
            </li>
            <li>
              <strong>Vercel</strong> — hébergeur du site.
            </li>
          </ul>
          <p className="mt-2">
            Ces prestataires sont basés aux États-Unis. Leurs conditions
            d&apos;utilisation prévoient des garanties appropriées (notamment des
            clauses contractuelles types) encadrant ce transfert de données hors de
            l&apos;Union européenne.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Durée de conservation
          </h2>
          <p className="mt-2">
            Les données transmises via le formulaire sont conservées le temps
            nécessaire au traitement de votre demande, et au maximum 3 ans à
            compter de notre dernier échange, sauf obligation légale contraire.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Vos droits
          </h2>
          <p className="mt-2">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement, de limitation, d&apos;opposition et de portabilité
            sur vos données personnelles. Vous pouvez exercer ces droits à tout
            moment en écrivant à{" "}
            <a href="mailto:contact@acquiz.fr" className="underline">
              contact@acquiz.fr
            </a>
            . Vous disposez également du droit d&apos;introduire une réclamation
            auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              cnil.fr
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Sécurité
          </h2>
          <p className="mt-2">
            Des mesures techniques raisonnables sont mises en place pour protéger
            vos données contre tout accès, modification ou divulgation non
            autorisés.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-charcoal">
            Modification de cette politique
          </h2>
          <p className="mt-2">
            Cette politique de confidentialité peut être mise à jour, notamment en
            cas d&apos;évolution des outils utilisés sur ce site (par exemple
            l&apos;ajout d&apos;outils de mesure d&apos;audience). La date de
            dernière mise à jour figure ci-dessous.
          </p>
          <p className="mt-2 text-sm text-charcoal/50">
            Dernière mise à jour : juillet 2026.
          </p>
        </section>
      </div>
    </main>
  );
}
