import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/Footer";
import { NON_INDEXABLE } from "@/lib/seo/indexation";

/**
 * Politique de confidentialité — RGPD.
 *
 * Le site legacy laissait trois champs `[À COMPLÉTER]` et servait un bandeau
 * cookies en anglais (audit 2026-08-31). Les deux figurent au devis validé.
 *
 * Le tableau des traitements est écrit pour être lu par un dirigeant, pas par un
 * juriste : finalité, base légale, durée. C'est ce que la CNIL attend et c'est
 * aussi ce qui rassure — une page de confidentialité illisible inquiète autant
 * qu'une page absente.
 */
export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Traitement des données personnelles sur le site unseulsouffle.fr.",
  alternates: { canonical: "/confidentialite/" },
  robots: NON_INDEXABLE,
};

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

const TRAITEMENTS: [string, string, string][] = [
  [
    "Formulaire de contact",
    "Répondre à votre demande et préparer un éventuel entretien",
    "Intérêt légitime — conservation 3 ans après le dernier contact",
  ],
  [
    "Diagnostic en ligne",
    "Vous restituer votre résultat et, si vous le demandez, en discuter",
    "Consentement — conservation 3 ans après le dernier contact",
  ],
  [
    "Mesure d'audience",
    "Comprendre la fréquentation du site et améliorer son contenu",
    "Consentement, recueilli via le bandeau cookies — 13 mois",
  ],
  [
    "Gestion de la relation client",
    "Exécuter les prestations convenues et respecter nos obligations comptables",
    "Contrat et obligation légale — 10 ans pour les pièces comptables",
  ],
];

export default function ConfidentialitePage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Confidentialité"
          label="Données personnelles"
          accent="organisation"
          h1="Politique de confidentialité"
          lede="Quelles données nous collectons, pourquoi, combien de temps nous les conservons, et comment exercer vos droits. Nous ne vendons ni ne cédons vos données à des tiers."
        />

        <Section ton="surface">
          <div className="max-w-[70ch]">
            <Bloc titre="Responsable du traitement">
              <p>
                Un Seul Souffle — 2 rue du Fort, 31450 Ayguesvives, France. SIRET
                10066243600029. Contact :{" "}
                <a href="mailto:contact@unseulsouffle.fr">contact@unseulsouffle.fr</a>.
              </p>
              <p className="mt-3">
                Délégué à la protection des données : <AFournir>le cas échéant, à préciser</AFournir>
              </p>
            </Bloc>

            <Bloc titre="Données collectées et finalités">
              <div className="-mx-1 mt-2 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-rule">
                      {["Traitement", "Finalité", "Base légale et durée"].map((t) => (
                        <th
                          key={t}
                          scope="col"
                          className="py-3 pr-5 font-mono text-[10px] font-normal uppercase tracking-[0.13em] text-muted"
                        >
                          {t}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TRAITEMENTS.map(([quoi, finalite, base]) => (
                      <tr key={quoi} className="border-b border-rule-2 align-top">
                        <th
                          scope="row"
                          className="py-3.5 pr-5 text-left text-[14.5px] font-normal text-ink"
                        >
                          {quoi}
                        </th>
                        <td className="py-3.5 pr-5 text-[14.5px] leading-relaxed">{finalite}</td>
                        <td className="py-3.5 pr-5 text-[14.5px] leading-relaxed text-muted">
                          {base}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Bloc>

            <Bloc titre="Destinataires">
              <p>
                Vos données sont traitées par les associées du cabinet et, le cas échéant, par les
                prestataires techniques qui hébergent le site et acheminent les messages. Elles ne
                sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.
              </p>
              <p className="mt-3">
                Hébergement du site : Vercel Inc. Autres sous-traitants et outils :{" "}
                <AFournir>outil d&apos;emailing, outil de diagnostic, mesure d&apos;audience — à lister</AFournir>
              </p>
            </Bloc>

            <Bloc titre="Transferts hors Union européenne">
              <p>
                Le site est hébergé par Vercel Inc., société de droit américain. À ce titre,
                certaines données techniques liées à la consultation du site — adresse IP,
                journaux de connexion — peuvent être traitées en dehors de l&apos;Union
                européenne. Ces transferts sont encadrés par les clauses contractuelles types
                adoptées par la Commission européenne, intégrées à l&apos;accord de traitement des
                données conclu avec l&apos;hébergeur.
              </p>
              <p className="mt-3">
                <AFournir>
                  À compléter une fois les autres outils arrêtés — un outil d&apos;emailing ou de
                  questionnaire établi hors UE devra être ajouté ici
                </AFournir>
              </p>
            </Bloc>

            <Bloc titre="Vos droits">
              <p>
                Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
                limitation, d&apos;opposition et de portabilité sur vos données, ainsi que du droit
                de retirer votre consentement à tout moment. Pour les exercer, écrivez à{" "}
                <a href="mailto:contact@unseulsouffle.fr">contact@unseulsouffle.fr</a>. Une réponse
                vous sera apportée dans un délai d&apos;un mois.
              </p>
              <p className="mt-3">
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés,
                vous pouvez adresser une réclamation à la CNIL —{" "}
                <a href="https://www.cnil.fr" rel="noopener">
                  www.cnil.fr
                </a>
                .
              </p>
            </Bloc>

            <Bloc titre="Cookies">
              <p>
                Le site dépose des cookies strictement nécessaires à son fonctionnement, qui ne
                requièrent pas votre consentement, et des cookies de mesure d&apos;audience, qui ne
                sont déposés qu&apos;après votre accord via le bandeau prévu à cet effet. Vous
                pouvez modifier votre choix à tout moment.
              </p>
              <p className="mt-3">
                <AFournir>Bandeau cookies à installer, en français</AFournir> — le site actuel
                affiche un bandeau en anglais, ce qui ne constitue pas un recueil de consentement
                valable.
              </p>
            </Bloc>

            <Bloc titre="Sécurité">
              <p>
                Le site est servi en HTTPS. Les accès d&apos;administration sont protégés et
                limités aux personnes habilitées.
              </p>
            </Bloc>

            <Bloc titre="Mise à jour">
              <p>
                Cette politique peut évoluer, notamment lorsque de nouveaux outils sont mis en
                place. Dernière mise à jour : septembre 2026. Voir également les{" "}
                <Link href="/mentions-legales/">mentions légales</Link>.
              </p>
            </Bloc>
          </div>

          <p className="mt-10 max-w-prose rounded-carte border-l-2 border-amber bg-amber-wash px-5 py-4 font-mono text-[13px] leading-relaxed text-amber">
            [Avant mise en ligne] Compléter la liste des sous-traitants, les transferts hors UE et
            installer le bandeau cookies en français. Les durées de conservation indiquées sont des
            durées d&apos;usage à faire valider.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}
