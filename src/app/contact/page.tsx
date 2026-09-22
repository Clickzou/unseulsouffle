import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section, SectionHead, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { SITE_URL } from "@/lib/content/home";

/**
 * Page de conversion nº 2 — l'entretien découverte.
 *
 * Deux obligations traitées ici, toutes deux au devis validé du 17/09/2026 :
 *  - la mention RGPD sous le formulaire (absente du site legacy) ;
 *  - le NAP complet, qui doit être identique au footer, au JSON-LD, aux mentions
 *    légales et à la fiche Google Business.
 *
 * Le formulaire n'a pas de backend : il est volontairement inerte et l'indique.
 * Un formulaire qui semble marcher et ne part nulle part perd des prospects sans
 * que personne le sache — c'est le travers relevé à l'audit sur le CTA cassé.
 */
export const metadata: Metadata = {
  // 54 / 60
  title: "Contact — entretien gratuit de 30 minutes",
  // 146 / 150
  description:
    "Parlez à Marjorie Anglade et Muriel Saffroy. Premier échange de 30 minutes, gratuit et confidentiel, pour qualifier votre situation. Occitanie.",
  alternates: { canonical: "/contact/" },
  robots: { index: true, follow: true },
};

const DEROULE = [
  "Vous décrivez votre situation, sans préparation particulière",
  "Nous disons si le sujet relève de notre accompagnement, ou non",
  "Si oui, vous recevez une proposition écrite — périmètre, format, tarif",
  "Rien ne démarre sans votre accord explicite",
];

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact/#page`,
        url: `${SITE_URL}/contact/`,
        name: "Contact — Un Seul Souffle",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/contact/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact/` },
        ],
      },
    ],
  };
}

/** Champ de formulaire — styles regroupés ici pour ne pas les répéter six fois. */
function Champ({
  id,
  label,
  type = "text",
  requis = false,
  zone = false,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  requis?: boolean;
  zone?: boolean;
  autoComplete?: string;
}) {
  const classes =
    "mt-2 w-full rounded-bouton border border-rule bg-surface px-4 py-3 text-[15.5px] text-ink " +
    "outline-none transition-colors placeholder:text-muted focus:border-teal";

  return (
    <p className={zone ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
        {label}
        {requis && <span className="text-amber"> *</span>}
      </label>
      {zone ? (
        <textarea id={id} name={id} rows={5} required={requis} className={classes} />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={requis}
          autoComplete={autoComplete}
          className={classes}
        />
      )}
    </p>
  );
}

export default function ContactPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Contact"
          label="Premier échange"
          accent="organisation"
          h1="Parler à Marjorie et Muriel"
          lede="Un premier échange de 30 minutes, gratuit et confidentiel. Il sert à qualifier votre situation et à vérifier que nous sommes les bonnes personnes — y compris quand la réponse est non."
        />

        <Reveal>
          <Section ton="surface">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
              <div>
                <SectionHead label="Écrire" titre="Décrivez votre situation" />

                {/* TODO client : brancher l'envoi (Brevo, Formspree ou route API)
                    et le consentement analytics avant mise en ligne. */}
                <p className="mb-7 rounded-carte border-l-2 border-amber bg-amber-wash px-5 py-4 font-mono text-[13px] leading-relaxed text-amber">
                  [Formulaire non branché] Aucun envoi n&apos;est effectué tant que le service de
                  réception n&apos;est pas configuré. En attendant, écrivez à contact@unseulsouffle.fr.
                </p>

                <form className="grid gap-5 sm:grid-cols-2">
                  <Champ id="nom" label="Nom et prénom" requis autoComplete="name" />
                  <Champ id="entreprise" label="Entreprise" autoComplete="organization" />
                  <Champ id="email" label="Email" type="email" requis autoComplete="email" />
                  <Champ id="telephone" label="Téléphone" type="tel" autoComplete="tel" />
                  <Champ id="message" label="Votre situation en quelques lignes" requis zone />

                  <div className="sm:col-span-2">
                    <Button href="#" className="pointer-events-none opacity-60">
                      Demander un entretien
                    </Button>
                  </div>
                </form>

                {/* Mention RGPD — absente du site legacy, exigée au devis validé. */}
                <p className="mt-7 max-w-prose border-t border-rule-2 pt-5 text-[13.5px] leading-relaxed text-muted">
                  Les informations recueillies dans ce formulaire sont utilisées uniquement pour
                  répondre à votre demande et, le cas échéant, préparer un entretien. Elles ne sont
                  ni revendues ni transmises à des tiers. Conformément au Règlement général sur la
                  protection des données, vous disposez d&apos;un droit d&apos;accès, de
                  rectification, d&apos;effacement et d&apos;opposition sur vos données : écrivez à{" "}
                  <a href="mailto:contact@unseulsouffle.fr" className="text-teal hover:underline">
                    contact@unseulsouffle.fr
                  </a>
                  . Voir la{" "}
                  <Link href="/confidentialite/" className="text-teal hover:underline">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>

              <aside className="grid gap-8 self-start">
                <div>
                  <Label>Coordonnées</Label>
                  <address className="mt-4 text-[15.5px] not-italic leading-loose">
                    <strong className="font-normal text-ink">Un Seul Souffle</strong>
                    <br />
                    2 rue du Fort
                    <br />
                    31450 Ayguesvives
                    <br />
                    <span className="font-mono text-xs text-amber">[Téléphone]</span>
                    <br />
                    <a
                      href="mailto:contact@unseulsouffle.fr"
                      className="text-teal hover:underline"
                    >
                      contact@unseulsouffle.fr
                    </a>
                  </address>
                </div>

                <div>
                  <Label>Zone d&apos;intervention</Label>
                  <p className="mt-4 text-[15.5px] leading-relaxed">
                    Toulouse, Haute-Garonne et Occitanie, avec déplacement sur site. Au-delà sur
                    recommandation, avec une part de séances à distance.
                  </p>
                </div>

                <div>
                  <Label>Pas encore prêt à échanger ?</Label>
                  <p className="mt-4 text-[15.5px] leading-relaxed">
                    Le diagnostic prend cinq minutes et ne demande aucun engagement.
                  </p>
                  <div className="mt-4">
                    <Button href="/diagnostic/" variant="line" arrow>
                      Diagnostiquer mon entreprise
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section>
            <SectionHead label="Ce qui se passe ensuite" titre="Le déroulé, sans surprise" />
            <ol className="grid max-w-prose gap-3">
              {DEROULE.map((etape, i) => (
                <li key={etape} className="relative pl-9 text-[16.5px] leading-[1.65]">
                  <span className="absolute left-0 top-[2px] font-mono text-[12px] text-teal">
                    0{i + 1}
                  </span>
                  {etape}
                </li>
              ))}
            </ol>
          </Section>
        </Reveal>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
      />
    </>
  );
}
