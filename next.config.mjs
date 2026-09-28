/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trailing slash obligatoire partout : liens internes, canonical, sitemap.
  // Réf. docs/seo/SEO_MASTER_UNSEULSOUFFLE.md § 2
  trailingSlash: true,

  images: {
    formats: ["image/webp"],
  },

  async redirects() {
    return [
      {
        // Ancienne URL du pilier finance : elle portait « expert-comptable », titre
        // réglementé, alors que la requête qui compte est « DAF externalisé »
        // (docs/seo/ETUDE_MOTS_CLES.md). 301 — jamais 302 (master § 2).
        source: "/expert-comptable-daf-externalisee-pme/",
        destination: "/daf-externalise-toulouse/",
        statusCode: 301,
      },
      {
        // La rubrique d'articles s'appelle « Infos utiles » dans le menu : l'URL suit.
        source: "/actualites/",
        destination: "/infos-utiles/",
        statusCode: 301,
      },
      {
        // La page 1 de la liste d'articles n'a qu'une URL : /infos-utiles/.
        source: "/infos-utiles/page/1/",
        destination: "/infos-utiles/",
        statusCode: 301,
      },
      {
        source: "/actualites/:slug/",
        destination: "/infos-utiles/:slug/",
        statusCode: 301,
      },
      // Adresses de l'ancien site WordPress (sitemap relevé le 28/09/2026) sans
      // équivalent à l'identique : leur référencement suit la nouvelle page.
      {
        source: "/la-solitude-du-dirigeant-comment-trouver-des-solutions-grace-au-coaching-au-codeveloppement-et-a-lintelligence-collective/",
        destination: "/infos-utiles/solitude-du-dirigeant/",
        statusCode: 301,
      },
      {
        // « Organisation PME » : devenue le pilier transformation & organisation.
        source: "/organisation-pme-offres-muriel/",
        destination: "/transformation-entreprise/",
        statusCode: 301,
      },
      {
        source: "/category/:slug/",
        destination: "/infos-utiles/",
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      {
        // Aperçus provisoires des articles programmés (src/lib/apercu.ts) : jamais
        // indexés, jamais mis en cache, et le jeton ne part pas dans le Referer.
        source: "/apercu/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Cache-Control", value: "private, no-store" },
        ],
      },
      {
        // Cache navigateur long sur les assets — absent du site legacy (3,3 Mo par page).
        source: "/:all*(webp|avif|png|jpg|jpeg|svg|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
