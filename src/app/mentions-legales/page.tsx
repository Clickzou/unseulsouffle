import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/Footer";

/**
 * Mentions légales — obligation LCEN (loi du 21 juin 2004, art. 6-III).
 *
 * Le site legacy affichait six champs `[À COMPLÉTER]` : l'audit l'a classé en
 * urgence, parce que l'absence de mentions légales est sanctionnable et non
 * seulement inesthétique.
 *
 * Les champs fournis par la cliente le 22/09/2026 sont intégrés. Ceux qui
 * manquent restent visibles en orange : un placeholder doit gêner jusqu'à ce que
 * la donnée arrive, sinon il survit à la mise en ligne.
 *
 * `noindex` — master § 2 : les pages légales ne sont pas indexées, mais restent
 * suivies pour ne pas casser le maillage.
 */
export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site unseulsouffle.fr.",
  alternates: { canonical: "/mentions-legales/" },
  robots: { index: false, follow: true },
};

/** Champ non fourni — rendu visible, jamais inventé. */
function AFournir({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[12.5px] text-amber">[{children}]</span>;
}

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
                <strong className="font-normal text-ink">Un Seul Souffle</strong>
                <br />
                2 rue du Fort — 31450 Ayguesvives, France
                <br />
                SIRET : 10066243600029
                <br />
                Forme juridique : <AFournir>à fournir</AFournir>
                <br />
                Capital social : <AFournir>à fournir</AFournir>
                <br />
                Numéro de TVA intracommunautaire : <AFournir>à fournir</AFournir>
                <br />
                Téléphone : <AFournir>à fournir</AFournir>
                <br />
                Courriel :{" "}
                <a href="mailto:contact@unseulsouffle.fr">contact@unseulsouffle.fr</a>
              </p>
            </Bloc>

            <Bloc titre="Direction de la publication">
              <p>
                Directrice de la publication : <AFournir>nom à confirmer</AFournir>
              </p>
            </Bloc>

            <Bloc titre="Hébergement">
              <p>
                Ce site est hébergé par <strong className="font-normal text-ink">Vercel Inc.</strong>
                <br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                <br />
                <a href="https://vercel.com" rel="noopener">
                  vercel.com
                </a>
              </p>
              <p className="mt-3">
                <AFournir>
                  Coordonnées à vérifier sur vercel.com avant publication — siège et
                  téléphone de contact
                </AFournir>
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

          <p className="mt-10 max-w-prose rounded-carte border-l-2 border-amber bg-amber-wash px-5 py-4 font-mono text-[13px] leading-relaxed text-amber">
            [Avant mise en ligne] Les champs en orange sont obligatoires au titre de la LCEN.
            Forme juridique, capital, TVA, téléphone, directrice de publication et coordonnées de
            l&apos;hébergeur doivent être renseignés avant publication.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}
