/**
 * Génère les 5 visuels du carrousel de hero via fal.ai (Flux Pro v1.1 Ultra).
 *
 *   node scripts/gen-hero-images.mjs            # génère ce qui manque
 *   node scripts/gen-hero-images.mjs --force    # régénère tout
 *   node scripts/gen-hero-images.mjs 2 4        # régénère les slots 2 et 4
 *
 * ⚠ Cache d'un an sur les images : après régénération, renommer le fichier
 * (et `heroImages` dans home.ts), sinon l'ancienne version reste affichée.
 *
 * FAL_KEY est lue depuis l'environnement, sinon depuis le .env.local de clickzou-v2
 * (jamais affichée). Sortie : public/hero/hero-N.webp, 16:9.
 *
 * Conformité docs/seo/image-generation-guidelines.md de Clickzou :
 *  - politique « indirect » : présence humaine crédible, AUCUN visage frontal
 *    reconnaissable (dos, silhouette, profil hors-cadre, mains au travail)
 *  - photoréaliste strict — pas d'illustration, de flat design ni de rendu 3D
 *  - aucun texte incrusté dans l'image
 *  - angles variés d'un visuel à l'autre (monotonie = baisse d'engagement)
 *
 * Note : les guidelines Clickzou imposent gpt-image-1 ; fal.ai est ici un choix
 * explicite du projet, aligné sur les scripts gen-plyz-*.mjs existants.
 *
 * Ces images passent sous un voile navy soutenu (voir HeroCarousel.tsx) : les prompts
 * demandent une lumière directionnelle contrastée et évitent les fonds surexposés,
 * qui ressortiraient en aplats gris sous le voile.
 */

import { fal } from "@fal-ai/client";
import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "hero");
const CLICKZOU_ENV = path.resolve(
  ROOT,
  "../../../2- SITE CLICKZOU/SITE IA/clickzou-v2/.env.local",
);

const MODEL = "fal-ai/flux-pro/v1.1-ultra";

/** Suffixe commun : photoréalisme + politique « indirect » sur les visages. */
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

// Retour client (2026-09-23) : pas de feuilles, tableaux ou écrans vierges —
// ils font faux en grand format. Les scènes ne montrent aucun support écrit.
const SANS_SUPPORT =
  "IMPORTANT: no paper, no documents, no notebooks, no whiteboard, no flipchart, no screens, " +
  "no laptop, no sticky notes anywhere in the scene.";

const IMAGES = [
  {
    file: "atelier-equipe",
    alt: "Dirigeant et deux responsables en discussion debout dans l'atelier d'une PME",
    prompt:
      "Three people standing in conversation on the floor of a bright mid-sized French manufacturing workshop, " +
      "seen from behind and in three-quarter back view, one of them gesturing with an open hand towards the machines. " +
      "Work jackets and a navy blazer, safety floor markings, warm late-afternoon light through high windows, " +
      "machines softly out of focus. Natural, candid, working atmosphere. " + SANS_SUPPORT,
  },
  {
    file: "ligne-production",
    alt: "Dirigeant et responsable de production devant une ligne de fabrication",
    prompt:
      "Over-the-shoulder shot on the floor of a small French manufacturing plant. " +
      "Two figures seen from behind — one in a well-cut jacket, one in a work coat — " +
      "standing in front of a production line, one arm raised pointing at a machine down the line. " +
      "Machinery slightly out of focus in the background, cool daylight from high windows " +
      "cutting through the space, teal-painted steel structures, honest industrial atmosphere. " +
      "Not a glossy showroom: a real working plant, slightly worn. " + SANS_SUPPORT,
  },
  {
    file: "recul-fenetre",
    alt: "Dirigeante face à la fenêtre de son bureau, moment de recul stratégique",
    prompt:
      "Quiet side view of a single executive standing at a large window in a first-floor office, " +
      "seen entirely from behind as a dark silhouette against soft morning light, hands in pockets. " +
      "Southern French city rooftops in warm terracotta and a distant skyline visible outside, slightly out of focus. " +
      "Minimal room, a plant and an empty armchair in the foreground. Contemplative, spacious, understated. " + SANS_SUPPORT,
  },
  {
    file: "couloir-bureaux",
    alt: "Deux personnes marchant côte à côte dans un espace de bureaux lumineux",
    prompt:
      "Two professionals walking side by side down a bright open-plan office corridor with light oak and large windows, " +
      "photographed strictly from behind at a distance, backs of heads only, no face visible at all, " +
      "one gesturing with an open hand as they talk. Green plants, warm natural light, calm purposeful mood. " + SANS_SUPPORT,
  },
  {
    file: "site-industriel",
    alt: "Site industriel d'une PME en Occitanie en fin de journée",
    prompt:
      "Exterior wide shot of a modest industrial building of a family-owned company " +
      "in the Occitanie countryside near Toulouse, at golden hour. " +
      "Long low warehouse in pale concrete and dark steel, a few parked cars, " +
      "plane trees casting long shadows across the tarmac, cypress and dry southern vegetation. " +
      "One distant silhouette walking towards the entrance, very small in frame. " +
      "Warm raking light, deep blue sky gradient above, calm end-of-day atmosphere.",
  },
];

/* ─────────────────────────── clé API ─────────────────────────── */

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

/* ─────────────────────────── génération ─────────────────────────── */

async function generate(image) {
  const result = await fal.subscribe(MODEL, {
    input: {
      prompt: `${image.prompt} ${REALISM}`,
      aspect_ratio: "16:9",
      num_images: 1,
      output_format: "jpeg",
      safety_tolerance: "2",
      enable_safety_checker: true,
    },
    logs: false,
  });

  const url = result?.data?.images?.[0]?.url;
  if (!url) throw new Error(`Aucune image renvoyée pour ${image.file}`);

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Téléchargement ${image.file} : HTTP ${response.status}`);

  const buffer = Buffer.from(await response.arrayBuffer());
  const out = path.join(OUT_DIR, `${image.file}.webp`);

  // WebP qualité 82 : le voile du hero masque les artefacts, inutile de payer
  // le poids d'un 90+. Réf. master § 2 (poids de page).
  await sharp(buffer).resize(2400, 1350, { fit: "cover" }).webp({ quality: 82 }).toFile(out);

  return { out, ko: Math.round(statSync(out).size / 1024) };
}

/* ─────────────────────────── main ─────────────────────────── */

const args = process.argv.slice(2);
const force = args.includes("--force");
const slots = args.filter((a) => /^\d+$/.test(a)).map(Number);

fal.config({ credentials: loadFalKey() });
mkdirSync(OUT_DIR, { recursive: true });

const cible = IMAGES.filter((img, i) => {
  if (slots.length) return slots.includes(i + 1);
  if (force) return true;
  return !existsSync(path.join(OUT_DIR, `${img.file}.webp`));
});

if (!cible.length) {
  console.log("Rien à générer. --force pour tout régénérer.");
  process.exit(0);
}

console.log(`Génération de ${cible.length} visuel(s) via ${MODEL}…\n`);

let echecs = 0;
for (const image of cible) {
  process.stdout.write(`  ${image.file} … `);
  try {
    const { ko } = await generate(image);
    console.log(`ok (${ko} Ko)`);
  } catch (error) {
    echecs++;
    console.log(`ÉCHEC — ${error.message}`);
  }
}

console.log(`\nSortie : ${OUT_DIR}`);
console.log(
  "Contrôle manuel obligatoire (guidelines § 7) : aucun visage frontal reconnaissable,\n" +
    "aucun texte incrusté, pas de mains déformées, éclairage cohérent.\n" +
    "Régénérer un visuel non conforme : node scripts/gen-hero-images.mjs <n>",
);

process.exit(echecs ? 1 : 0);
