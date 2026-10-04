/**
 * Prépare les portraits de l'équipe : recadrage carré intelligent + WebP.
 *
 *   node scripts/prepare-photos.mjs
 *
 * Source : captures-ecrans/equipe-2026-10/ (séance photo commune, fournie par la
 *          cliente le 04/10/2026 ; la première série venait du site legacy)
 * Sortie : public/equipe/<slug>-v2.webp, 320 × 320 (vignettes rondes)
 *         public/equipe/portrait/<slug>-v2.webp, 720 × 900 (4:5, page équipe)
 *
 * Le suffixe `-v2` n'est pas décoratif : les images sont servies avec un cache
 * d'un an `immutable` (next.config.mjs). Une photo remplacée doit changer de nom,
 * sinon navigateurs et CDN gardent l'ancienne. Prochaine série : `-v3`.
 *
 * Par défaut, `sharp.strategy.attention` recadre sur la zone la plus saillante.
 * Ce n'est pas fiable sur tous les portraits : sur une photo en pied avec une
 * chemise blanche en plein soleil, l'algorithme cadre le vêtement et coupe le
 * visage. Un `cadre` explicite reprend alors la main :
 *
 *   cadre: { x, y, zoom }
 *     x, y  position du visage, en fraction de la largeur / hauteur (0 à 1)
 *     zoom  côté du carré, en fraction de la plus petite dimension (défaut 1)
 *
 * Repérer les valeurs à l'œil sur la photo source, puis rejouer le script.
 *
 */

import { existsSync, mkdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "captures-ecrans", "equipe-2026-10");
const VERSION = "-v2";
const OUT_DIR = path.join(ROOT, "public", "equipe");

const TAILLE = 320;
const PORTRAIT = { largeur: 720, hauteur: 900 };
const OUT_PORTRAIT = path.join(OUT_DIR, "portrait");

const PHOTOS = [
  // Le recadrage `attention` coupait le haut des cheveux dans la vignette ronde.
  { src: "Marjorie.jpg", slug: "marjorie-anglade", nom: "Marjorie Anglade",
    cadre: { x: 0.45, y: 0.45, zoom: 1 } },
  { src: "Muriel.jpg", slug: "muriel-saffroy", nom: "Muriel Saffroy",
    cadre: { x: 0.5, y: 0.42, zoom: 0.85 } },
  { src: "Olivia.jpg", slug: "olivia-artur", nom: "Olivia Artur" },
  { src: "Nicolas.jpg", slug: "nicolas-vimini", nom: "Nicolas Vimini" },
  { src: "Yohan.jpg", slug: "yohan-castelar", nom: "Yohan Castelar",
    cadre: { x: 0.5, y: 0.42, zoom: 0.85 } },
  { src: "Patrick.jpg", slug: "patrick-calvet", nom: "Patrick Calvet" },
];

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(OUT_PORTRAIT, { recursive: true });

/**
 * Portrait 4:5 : le visage visé par `cadre` est placé dans le tiers haut, le
 * cadre s'élargit pour montrer le buste. Sans `cadre`, recadrage `attention`.
 */
async function portrait(photo, src) {
  const out = path.join(OUT_PORTRAIT, `${photo.slug}${VERSION}.webp`);
  let image = sharp(await orientee(src));
  if (photo.cadre) {
    const { width, height } = await sharp(await orientee(src)).metadata();
    const { x, y, zoom = 1 } = photo.cadre;
    const largeur = Math.round(Math.min(width, height / 1.25, Math.min(width, height) * zoom * 1.5));
    const hauteur = Math.round(largeur * 1.25);
    const left = Math.max(0, Math.min(Math.round(width * x - largeur / 2), width - largeur));
    const top = Math.max(0, Math.min(Math.round(height * y - hauteur * 0.33), height - hauteur));
    image = image.extract({ left, top, width: largeur, height: hauteur });
  }
  await image
    .resize(PORTRAIT.largeur, PORTRAIT.hauteur, {
      fit: "cover",
      ...(photo.cadre ? {} : { position: sharp.strategy.attention }),
    })
    .webp({ quality: 84 })
    .toFile(out);
}

/** Applique l'orientation EXIF (photos de téléphone) avant tout recadrage. */
async function orientee(src) {
  return sharp(src).rotate().toBuffer();
}

let echecs = 0;

for (const photo of PHOTOS) {
  const src = path.join(SRC_DIR, photo.src);
  const out = path.join(OUT_DIR, `${photo.slug}${VERSION}.webp`);

  process.stdout.write(`  ${photo.nom.padEnd(18)} `);

  if (!existsSync(src)) {
    console.log(`ABSENT — ${photo.src}`);
    echecs++;
    continue;
  }

  try {
    let image = sharp(await orientee(src));

    if (photo.cadre) {
      const { width, height } = await sharp(await orientee(src)).metadata();
      const { x, y, zoom = 1 } = photo.cadre;
      const cote = Math.round(Math.min(width, height) * zoom);
      // Le carré est centré sur le point visé, puis ramené dans les limites de
      // l'image : viser près d'un bord décale le cadre au lieu de faire échouer
      // l'extraction.
      const left = Math.max(0, Math.min(Math.round(width * x - cote / 2), width - cote));
      const top = Math.max(0, Math.min(Math.round(height * y - cote / 2), height - cote));
      image = image.extract({ left, top, width: cote, height: cote });
    }

    await image
      .resize(TAILLE, TAILLE, {
        fit: "cover",
        ...(photo.cadre ? {} : { position: sharp.strategy.attention }),
      })
      .webp({ quality: 88 })
      .toFile(out);

    await portrait(photo, src);

    const ko = Math.round(statSync(out).size / 1024);
    console.log(`ok (${ko} Ko)${photo.cadre ? "  cadrage manuel" : ""}`);
  } catch (error) {
    console.log(`ÉCHEC — ${error.message}`);
    echecs++;
  }
}

console.log(`\nSortie : ${OUT_DIR}`);

process.exit(echecs ? 1 : 0);
