/**
 * Données structurées JSON-LD.
 *
 * Le FAQPage est généré depuis `faq` (src/lib/content/home.ts) : le balisage ne peut
 * donc pas diverger du contenu affiché. Les entrées marquées `aFournir` sont exclues —
 * on ne balise jamais un placeholder.
 *
 * Réf. docs/seo/SEO_MASTER_UNSEULSOUFFLE.md § 2 et § 8
 */

import { SITE_URL, faq, parcours } from "@/lib/content/home";
import type { PagePilier } from "@/lib/content/pilier";

/**
 * NAP officiel, fourni par la cliente le 22/09/2026.
 *
 * Le siège est à Ayguesvives (31), pas à Toulouse : c'est cette adresse qui doit
 * figurer partout — JSON-LD, footer, mentions légales, fiche Google Business —
 * sous peine d'incohérence NAP, qui coûte plus cher en SEO local qu'un code
 * postal moins prestigieux. Toulouse reste la zone d'intervention (`areaServed`),
 * ce qui est la manière correcte de cibler la ville sans y domicilier le cabinet.
 *
 * Manque encore : le téléphone professionnel.
 */
const ADRESSE = {
  streetAddress: "2 rue du Fort",
  postalCode: "31450",
  addressLocality: "Ayguesvives",
  addressRegion: "Occitanie",
  addressCountry: "FR",
};

/** SIRET — obligation LCEN pour les mentions légales, et entité forte pour le GEO. */
const SIRET = "10066243600029";

/** TODO client — alimente l'entité pour les moteurs IA (master § 8, point 5). */
const PROFILS = [
  "https://fr.linkedin.com/in/muriel-saffroy",
  // "[LinkedIn page entreprise]",
  // "[LinkedIn Marjorie Anglade]",
  // "[chaîne YouTube]",
  // "[podcast]",
];

export function buildHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Un Seul Souffle",
        url: `${SITE_URL}/`,
        email: "contact@unseulsouffle.fr",
        slogan: "Structurer aujourd'hui, renforcer demain",
        description:
          "Équipe de direction externalisée qui accompagne les dirigeants de PME et d'ETI. Un conseiller référent prend en charge chaque situation et s'appuie, quand le sujet l'exige, sur quatre autres expertises de direction : finance, organisation et coopération, stratégie commerciale, production, qualité de vie au travail.",
        address: { "@type": "PostalAddress", ...ADRESSE },
        identifier: { "@type": "PropertyValue", propertyID: "SIRET", value: SIRET },
        areaServed: [
          { "@type": "City", name: "Toulouse" },
          { "@type": "AdministrativeArea", name: "Haute-Garonne" },
          { "@type": "AdministrativeArea", name: "Occitanie" },
        ],
        sameAs: PROFILS,
        founder: [
          { "@type": "Person", name: "Muriel Saffroy" },
          { "@type": "Person", name: "Marjorie Anglade" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "contact@unseulsouffle.fr",
          availableLanguage: "French",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Accompagnement de dirigeants de PME et ETI",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: "Conseil en organisation et accompagnement de dirigeants",
        audience: { "@type": "BusinessAudience", name: "PME et ETI de 10 à 250 salariés" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Parcours d'accompagnement",
          itemListElement: [
            ...parcours.map((p) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: p.titre, url: `${SITE_URL}${p.href}` },
            })),
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pilotage financier externalisé",
                url: `${SITE_URL}/expert-comptable-daf-externalisee-pme/`,
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faq
          .filter((item) => !item.aFournir)
          .map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.r.join(" ") },
          })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Un Seul Souffle",
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

/**
 * JSON-LD d'une page pilier — master § 2 : `Service` + `BreadcrumbList` + `FAQPage`.
 *
 * Le `Service` est rattaché à l'`Organization` de la home par son `@id` : les
 * deux pages décrivent la même entité, et les moteurs doivent la reconnaître
 * comme telle plutôt que de compter trois organisations sur un même domaine.
 *
 * Les entrées `aFournir` sont exclues du FAQPage, comme sur la home : on ne
 * balise jamais un placeholder.
 */
export function buildPilierSchema(page: PagePilier) {
  const url = `${SITE_URL}${page.href}`;
  const questions = page.faq.filter((item) => !item.aFournir);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.nomService,
        description: page.essentiel.reponse,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Toulouse" },
          { "@type": "AdministrativeArea", name: "Haute-Garonne" },
          { "@type": "AdministrativeArea", name: "Occitanie" },
        ],
        audience: { "@type": "BusinessAudience", name: "PME et ETI de 10 à 250 salariés" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: page.fil, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: questions.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.r.join(" ") },
        })),
      },
    ],
  };
}
