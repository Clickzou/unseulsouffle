import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/home";
import { INDEXABLE } from "@/lib/seo/indexation";

/**
 * Les crawlers IA sont autorisés EXPLICITEMENT, avec les mêmes exclusions que `*`.
 * Master § 2 et § 8 : sur ce marché, un dirigeant interroge de plus en plus une IA
 * avant Google — se fermer aux crawlers génératifs revient à sortir du jeu.
 *
 * Tant que `INDEXABLE` est à `false`, tout est interdit au crawl.
 *
 * Attention au piège classique : un `Disallow: /` empêche les robots de LIRE la
 * balise `noindex` des pages. Les deux ne se remplacent donc pas, ils se
 * complètent — le blocage au crawl évite la découverte, la balise couvre le cas
 * où une URL serait connue par ailleurs. Ici le site n'a aucun lien entrant, et
 * la bascule rétablira les deux d'un coup.
 */
const CRAWLERS_IA = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-User",
  "CCBot",
  "Applebot-Extended",
];

const DISALLOW = ["/wp-admin/", "/api/"];

export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) {
    // Refonte en cours : aucun robot, aucun sitemap annoncé.
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...CRAWLERS_IA.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
