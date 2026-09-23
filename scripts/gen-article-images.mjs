/**
 * Génère la photo de couverture de chaque article (Infos utiles) via fal.ai
 * (Flux Pro v1.1 Ultra).
 *
 *   node scripts/gen-article-images.mjs              # génère ce qui manque
 *   node scripts/gen-article-images.mjs --force      # régénère tout
 *   node scripts/gen-article-images.mjs coaching-d-equipe   # un article précis
 *
 * Même clé, même modèle et même politique d'image que gen-hero-images.mjs :
 * photoréaliste, aucun visage frontal reconnaissable, aucun texte incrusté.
 * Sortie : public/images/articles/<slug>.webp, 16:9, 1600 × 900.
 */

import { fal } from "@fal-ai/client";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images", "articles");
const CLICKZOU_ENV = path.resolve(ROOT, "../../../2- SITE CLICKZOU/SITE IA/clickzou-v2/.env.local");
const MODEL = "fal-ai/flux-pro/v1.1-ultra";

const REALISM =
  "Real photograph, not an illustration, not digital art, not 3D render. " +
  "Shot on a Canon EOS R5, 35mm lens, f/2.8, natural directional light, realistic depth of field, " +
  "subtle film grain, true-to-life colours, documentary corporate photography, contemporary French company. " +
  "If people appear they must have NO recognizable faces: seen from behind, in silhouette, " +
  "far away, blurred, in profile with the face out of frame, or only hands and arms at work. " +
  "No close-up portraits, no identifiable individuals, no eye contact with the camera. " +
  "CRITICAL: absolutely no writing anywhere in the frame. No text, no letters, no words, " +
  "no numbers, no logos, no signage, no labels, no handwriting, no charts. Any paper, board, " +
  "screen or sticky note visible must be blank, or so out of focus that no character can be made out.";

const IMAGES = {
  "manager-de-transition-ou-direction-a-temps-partage":
    "An executive in a dark coat arriving on a Monday morning at a mid-sized French manufacturing company, " +
    "seen entirely from behind walking down a bright corridor with glass-walled offices, carrying a leather bag. " +
    "Cool morning light, polished concrete floor, a sense of someone taking over a role.",
  "intelligence-collective-en-entreprise":
    "Top-down overhead shot of a large wooden meeting table where five pairs of hands arrange blank paper cards " +
    "into groups, one hand pointing, another moving a card. Only forearms and hands visible, no heads. " +
    "Warm side light, coffee cups, closed notebooks, collaborative atmosphere.",
  "coaching-d-equipe":
    "Wide shot from the back of a bright meeting room: a small team of four people standing in front of a large blank whiteboard, " +
    "ALL with their backs turned to the camera, heads facing the whiteboard, one raising a hand to point at it. " +
    "Nobody faces the camera, no face visible at all. Large windows, plants, light oak, calm and attentive mood.",
  "coaching-en-management":
    "Two professionals walking along the mezzanine of a modern workshop, seen from behind, a clear gap of one metre between them, " +
    "no physical contact. The one on the left holds a closed folder, the one on the right points with an open hand towards the " +
    "production floor below, which is softly out of focus. Golden late-afternoon light through high windows.",
  "consultant-en-management":
    "Over-the-shoulder view of two people at a table in a sober company meeting room, reviewing blank printed pages " +
    "together, one hand holding a pen, the other resting on a closed laptop. Faces out of frame. " +
    "Soft window light, light walls, glass of water, focused working session.",
  "daf-externe-ou-expert-comptable":
    "Close-up of hands on a tidy oak desk: one hand holding a fountain pen above blank sheets of paper, " +
    "a calculator seen from a low angle so its screen is not visible, reading glasses, a plain white porcelain coffee cup " +
    "with no pattern and no marking. Warm morning light, shallow depth of field, calm and precise atmosphere.",
  "solitude-du-dirigeant":
    "A lone company director seen from behind as a silhouette, standing at a large window of an empty office at dusk, " +
    "the lights of a southern French city with terracotta rooftops glowing outside. " +
    "Empty desks and chairs around, one desk lamp on, quiet contemplative mood, deep blue hour tones.",
  "directeur-commercial-externalise":
    "A handshake between two professionals in the entrance of a bright industrial showroom, framed from the chest down, " +
    "faces out of frame, one wearing a navy jacket. Products softly blurred in the background, " +
    "natural light, confident business atmosphere.",
};

function loadFalKey() {
  if (process.env.FAL_KEY) return process.env.FAL_KEY;
  for (const line of readFileSync(CLICKZOU_ENV, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*FAL_KEY\s*=\s*(.+?)\s*$/);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  throw new Error("FAL_KEY absente.");
}

async function generer(slug, prompt) {
  const result = await fal.subscribe(MODEL, {
    input: {
      prompt: `${prompt} ${REALISM}`,
      aspect_ratio: "16:9",
      num_images: 1,
      output_format: "jpeg",
      safety_tolerance: "2",
      enable_safety_checker: true,
    },
    logs: false,
  });
  const url = result?.data?.images?.[0]?.url;
  if (!url) throw new Error("aucune image renvoyée");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`téléchargement HTTP ${res.status}`);
  const out = path.join(OUT_DIR, `${slug}.webp`);
  await sharp(Buffer.from(await res.arrayBuffer()))
    .resize(1600, 900, { fit: "cover" })
    .webp({ quality: 80 })
    .toFile(out);
  return Math.round(statSync(out).size / 1024);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const cibles = args.filter((a) => !a.startsWith("--"));

fal.config({ credentials: loadFalKey() });
mkdirSync(OUT_DIR, { recursive: true });

const liste = Object.entries(IMAGES).filter(([slug]) => {
  if (cibles.length) return cibles.includes(slug);
  return force || !existsSync(path.join(OUT_DIR, `${slug}.webp`));
});

// En parallèle : les appels fal sont indépendants.
const resultats = await Promise.allSettled(liste.map(([slug, prompt]) => generer(slug, prompt)));
let echecs = 0;
resultats.forEach((r, i) => {
  const slug = liste[i][0];
  if (r.status === "fulfilled") console.log(`ok     ${slug} (${r.value} Ko)`);
  else {
    echecs++;
    console.log(`ÉCHEC  ${slug} — ${r.reason?.message}`);
  }
});
console.log("Contrôle manuel obligatoire : aucun visage reconnaissable, aucun texte incrusté.");
process.exit(echecs ? 1 : 0);
