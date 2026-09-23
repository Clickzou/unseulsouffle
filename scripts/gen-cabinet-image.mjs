/**
 * Génère le visuel de la section « Le constat » de la page cabinet via fal.ai
 * (Flux Pro v1.1 Ultra) : une entreprise qui avance sans son dirigeant.
 *
 *   node scripts/gen-cabinet-image.mjs            # génère s'il manque
 *   node scripts/gen-cabinet-image.mjs --force    # régénère
 *
 * Même clé, même modèle et même politique d'image que gen-hero-images.mjs
 * (photoréaliste, aucun visage frontal reconnaissable, aucun texte incrusté).
 * Sortie : public/cabinet/autonomie.webp, 3:4, pour la colonne de droite (340 px).
 */

import { fal } from "@fal-ai/client";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "cabinet");
const OUT = path.join(OUT_DIR, "autonomie.webp");
const CLICKZOU_ENV = path.resolve(
  ROOT,
  "../../../2- SITE CLICKZOU/SITE IA/clickzou-v2/.env.local",
);

const MODEL = "fal-ai/flux-pro/v1.1-ultra";

const REALISM =
  "Real photograph, not an illustration, not digital art, not 3D render. " +
  "Shot on a Canon EOS R5, 35mm lens, f/2.8, natural directional light, realistic depth of field, " +
  "subtle film grain, true-to-life colours, documentary corporate photography. " +
  "If people appear they must have NO recognizable faces: seen from behind, in silhouette, " +
  "far away, blurred, in profile with the face out of frame, or only hands and arms at work. " +
  "No close-up portraits, no identifiable individuals, no eye contact with the camera. " +
  "CRITICAL: absolutely no writing anywhere in the frame. No text, no letters, no words, " +
  "no numbers, no logos, no signage, no labels, no handwriting. Any paper, board, screen or " +
  "sticky note visible must be blank, or so out of focus that no character can be made out. " +
  "Surfaces are empty and clean rather than covered in writing.";

const PROMPT =
  "Vertical shot through the open glass door of an empty manager's office in a mid-sized " +
  "French company. In the sharp foreground, inside the office: a tidy desk, a leather chair " +
  "pushed in and unoccupied, a jacket hung on its back — the director is away. " +
  "Beyond the glass, softly out of focus, the open-plan floor is busy and calm: a small team " +
  "gathered standing around a table, seen from behind and in blurred silhouettes, one person " +
  "leaning forward to point at something on the table, others walking past carrying folders. " +
  "The company keeps moving on its own. Warm late-morning daylight from large windows, " +
  "light oak, white walls, green plants, restrained contemporary interior.";

function loadFalKey() {
  if (process.env.FAL_KEY) return process.env.FAL_KEY;
  if (!existsSync(CLICKZOU_ENV)) {
    throw new Error(
      `FAL_KEY absente de l'environnement et .env.local introuvable (${CLICKZOU_ENV}).`,
    );
  }
  for (const line of readFileSync(CLICKZOU_ENV, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*FAL_KEY\s*=\s*(.+?)\s*$/);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  throw new Error("FAL_KEY absente du .env.local de clickzou-v2.");
}

if (existsSync(OUT) && !process.argv.includes("--force")) {
  console.log("Visuel déjà présent. --force pour le régénérer.");
  process.exit(0);
}

fal.config({ credentials: loadFalKey() });
mkdirSync(OUT_DIR, { recursive: true });

const result = await fal.subscribe(MODEL, {
  input: {
    prompt: `${PROMPT} ${REALISM}`,
    aspect_ratio: "3:4",
    num_images: 1,
    output_format: "jpeg",
    safety_tolerance: "2",
    enable_safety_checker: true,
  },
  logs: false,
});

const url = result?.data?.images?.[0]?.url;
if (!url) throw new Error("Aucune image renvoyée.");

const response = await fetch(url);
if (!response.ok) throw new Error(`Téléchargement : HTTP ${response.status}`);

// 1020 px de large : trois fois la colonne de 340 px, net sur écran Retina.
await sharp(Buffer.from(await response.arrayBuffer()))
  .resize(1020, 1360, { fit: "cover" })
  .webp({ quality: 82 })
  .toFile(OUT);

console.log(`ok — ${OUT} (${Math.round(statSync(OUT).size / 1024)} Ko)`);
console.log(
  "Contrôle manuel obligatoire : aucun visage frontal reconnaissable, aucun texte incrusté.",
);
