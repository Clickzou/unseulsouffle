import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/Footer";
import { NON_INDEXABLE } from "@/lib/seo/indexation";

/**
 * Mentions légales — obligation LCEN (loi du 21 juin 2004, art. 6-III).
 *
 * Le site legacy affichait six champs `[À COMPLÉTER]` : l'audit l'a classé en
 * urgence, parce que l'absence de mentions légales est sanctionnable et non
 * seulement inesthétique.
 *
 * Tous les champs sont renseignés (cliente, 22 et 24/09/2026 ; hébergeur vérifié
 * le 24/09/2026). Seul le RCS reste à confirmer sur le Kbis.
 *
 * `noindex` — master § 2 : les pages légales ne sont pas indexées, mais restent
 * suivies pour ne pas casser le maillage.
 */
export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site unseulsouffle.fr.",
  alternates: { canonical: "/mentions-legales/" },
  robots: NON_INDEXABLE,
};

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-rule-2 py-7 last:border-b-0">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.13em] text-teal">{titre}</h2>
      <div className="mt-3.5 max-w-prose text-[16px] leading-[1.75] [&_a]:text-teal [&_a:hover]:underline">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Mentions légales"
          label="Informations légales"
          accent="finance"
          h1="Mentions légales"
          lede="Informations relatives à l'éditeur et à l'hébergeur du site unseulsouffle.fr, conformément à la loi pour la confiance dans l'économie numérique."
        />

        <Section ton="surface">
          <div className="max-w-[70ch]">
            <Bloc titre="Éditeur du site">
              <p>
                <strong className="font-normal text-ink">SARL Un Seul Souffle</strong>
                <br />
                Société à responsabilité limitée au capital de 600 €
                <br />
                2 rue du Fort — 31450 Ayguesvives, France
                <br />
                SIRET : 100 662 436 00029
                <br />
                {/* RCS déduit du siège (Ayguesvives relève du greffe de Toulouse) —
                    à vérifier sur l'extrait Kbis. */}
                RCS Toulouse 100 662 436
                <br />
                Numéro de TVA intracommunautaire : FR33100662436
                <br />
                Téléphone : <a href="tel:+33663446585">06 63 44 65 85</a> (Muriel Saffroy) —{" "}
                <a href="tel:+33625080009">06 25 08 00 09</a> (Marjorie Anglade)
                <br />
                Courriel :{" "}
                <a href="mailto:contact@unseulsouffle.fr">contact@unseulsouffle.fr</a>
              </p>
            </Bloc>

            <Bloc titre="Direction de la publication">
              <p>
                Directrice de la publication : Marjorie Anglade, associée fondatrice
              </p>
            </Bloc>

            <Bloc titre="Hébergement">
              <p>
                Ce site est hébergé par <strong className="font-normal text-ink">Vercel Inc.</strong>
                <br />
                {/* Adresse : celle des CGU et de la politique de confidentialité de
                    vercel.com (vérifiée le 24/09/2026). Téléphone : celui déclaré par
                    Vercel à la SEC (Form D) — le site n'en publie aucun. */}
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                <br />
                Téléphone : +1 559 288 7060
                <br />
                <a href="https://vercel.com" rel="noopener">
                  vercel.com
                </a>
              </p>
            </Bloc>

            <Bloc titre="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur ce site — textes, images, méthode,
                identité visuelle et logo — est protégé par le droit d&apos;auteur et reste la
                propriété d&apos;Un Seul Souffle, sauf mention contraire. Toute reproduction,
                représentation ou diffusion, totale ou partielle, sans autorisation écrite
                préalable est interdite.
              </p>
              <p className="mt-3">
                Les photographies de l&apos;équipe sont publiées avec l&apos;accord des personnes
                représentées.
              </p>
            </Bloc>

            <Bloc titre="Données personnelles">
              <p>
                Le traitement des données collectées via le formulaire de contact et les outils de
                mesure d&apos;audience est décrit dans la{" "}
                <Link href="/confidentialite/">politique de confidentialité</Link>.
              </p>
            </Bloc>

            <Bloc titre="Responsabilité">
              <p>
                Un Seul Souffle s&apos;efforce d&apos;assurer l&apos;exactitude des informations
                diffusées sur ce site. Les contenus sont fournis à titre informatif et ne
                constituent ni un conseil personnalisé, ni un engagement contractuel. Seule une
                proposition écrite et signée engage le cabinet.
              </p>
            </Bloc>

            <Bloc titre="Liens externes">
              <p>
                Ce site peut renvoyer vers des sites tiers. Un Seul Souffle n&apos;exerce aucun
                contrôle sur leur contenu et décline toute responsabilité à leur égard.
              </p>
            </Bloc>

            <Bloc titre="Droit applicable">
              <p>
                Le présent site est soumis au droit français. Tout litige relatif à son
                utilisation relève de la compétence des tribunaux français.
              </p>
            </Bloc>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
