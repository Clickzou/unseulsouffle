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
        source: "/actualites/:slug/",
        destination: "/infos-utiles/:slug/",
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      {
        // Cache navigateur long sur les assets — absent du site legacy (3,3 Mo par page).
        source: "/:all*(webp|avif|png|jpg|jpeg|svg|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
