/**
 * Génère la photo du bloc « L'essentiel » de chaque page d'offre via fal.ai
 * (Flux Pro v1.1 Ultra).
 *
 *   node scripts/gen-pilier-images.mjs              # génère ce qui manque
 *   node scripts/gen-pilier-images.mjs --force      # régénère tout
 *   node scripts/gen-pilier-images.mjs finance      # une page précise
 *
 * Même clé, même modèle et même politique d'image que gen-hero-images.mjs :
 * photoréaliste, aucun visage frontal reconnaissable, aucun texte incrusté.
 * Sortie : public/images/piliers/<cle>.webp, 4:3, 1400 × 1050 (ou le dossier indiqué
 * par l'entrée, pour la cordée de la page cabinet).
 *
 * Cache d'un an `immutable` sur les images (next.config.mjs) : une image régénérée
 * doit changer de nom de fichier, sinon les visiteurs gardent l'ancienne.
 */

import { fal } from "@fal-ai/client";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images", "piliers");
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
  dirigeant:
    "Close-up at table height of a one-to-one conversation in a calm, bright office: only the forearms and hands of two people " +
    "sitting face to face across a small round wooden table. One pair of hands holds a plain white cup, the other hand is open " +
    "mid-gesture, explaining. A closed notebook and a pen on the table. No heads, no faces, no shoulders in the frame. " +
    "Soft window light, blurred plants in the background, warm and confidential atmosphere.",
  entreprise:
    "A manager and a team leader walking side by side through the floor of a well-organized mid-sized French workshop, " +
    "seen from behind, a clear gap between them, one pointing towards a production area with neatly marked flows and shelves. " +
    "Clean industrial space, natural light from high windows, orderly and calm.",
  commercial:
    "Close-up at table height of a business meeting in the small showroom of a French industrial SME: only the forearms and " +
    "hands of two people across a light wooden table, one hand sliding a small manufactured metal part towards the other, " +
    "a closed plain grey catalogue and a pen beside it. No heads, no faces, no shoulders in the frame. No whiteboard, no " +
    "screen, no paper with writing. Blurred shelves with products in the background, natural light, confident atmosphere.",
  finance:
    "A person seen from behind sitting at a clean desk in a bright office, looking at a laptop whose screen is turned away from " +
    "the camera, a closed leather folder and a plain white cup beside it. Through the large window, the warm red brick rooftops " +
    "of Toulouse under a clear sky. Calm, focused, precise atmosphere.",
  // Pages d'expertise ajoutées après le retour cliente du 04/10/2026.
  // Première génération refusée : visages de face reconnaissables, uniquement des hommes.
  cooperation:
    "Close-up at table height of a working session around a high light-oak table in a French SME: only the forearms and " +
    "hands of five people, women and men, some sleeves of work jackets, some of shirts and a cardigan. One hand passes a closed " +
    "plain grey folder to another, two hands rest flat on the table, one hand open mid-gesture. No heads, no faces, no " +
    "shoulders in the frame. Blurred workshop through a glass wall in the background, natural light, cooperative atmosphere.",
  qvt:
    "A person seen from behind sitting alone on a wooden bench in the small planted courtyard of a French company during a " +
    "break, holding a plain white cup with both hands, looking at the trees. In the soft-focus background, the glass facade of " +
    "the offices and two blurred colleagues walking. Quiet, restful, early morning light, calm and human atmosphere.",
  "organisation-industrielle":
    "Wide view of a well-organized production workshop of a French SME: clean floor with painted flow lanes, workstations " +
    "aligned along a logical flow, neatly stored parts on blank shelves. In the middle ground an engineer seen from behind, " +
    "in a light work jacket, observing a machine and holding a tablet whose screen is turned away. High windows, natural light, orderly.",
  "strategie-industrielle":
    "A company director seen from behind, standing at the railing of a mezzanine and looking down over a vast industrial " +
    "production hall: lines of machines, wide aisles, an empty area of floor ready for future expansion. Golden late-afternoon " +
    "light falling through skylights, sense of scale, perspective and long-term vision.",
  // Page « Le cabinet » : la cordée en montagne (demande de la cliente).
  cordee: {
    dossier: "cabinet",
    prompt:
      "A rope team of four mountaineers roped together, seen from behind and from far away, climbing a snowy ridge of the " +
      "Pyrenees towards a sunlit summit. The leader goes first, the rope clearly visible linking each climber to the next, " +
      "regular spacing, steady pace. Deep blue sky, crisp early-morning light, vast mountain landscape, calm determination. " +
      "Outdoor mountaineering photograph, no company setting.",
  },
};

function loadFalKey() {
  if (process.env.FAL_KEY) return process.env.FAL_KEY;
  for (const line of readFileSync(CLICKZOU_ENV, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*FAL_KEY\s*=\s*(.+?)\s*$/);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  throw new Error("FAL_KEY absente.");
}

/** Une entrée est un prompt (sortie dans images/piliers/) ou { dossier, prompt }. */
const promptDe = (entree) => (typeof entree === "string" ? entree : entree.prompt);
const sortieDe = (slug, entree) =>
  typeof entree === "string"
    ? path.join(OUT_DIR, `${slug}.webp`)
    : path.join(ROOT, "public", entree.dossier, `${slug}.webp`);

async function generer(slug, entree) {
  const prompt = promptDe(entree);
  const result = await fal.subscribe(MODEL, {
    input: {
      prompt: `${prompt} ${REALISM}`,
      aspect_ratio: "4:3",
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
  const out = sortieDe(slug, entree);
  mkdirSync(path.dirname(out), { recursive: true });
  await sharp(Buffer.from(await res.arrayBuffer()))
    .resize(1400, 1050, { fit: "cover" })
    .webp({ quality: 80 })
    .toFile(out);
  return Math.round(statSync(out).size / 1024);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const cibles = args.filter((a) => !a.startsWith("--"));

fal.config({ credentials: loadFalKey() });
mkdirSync(OUT_DIR, { recursive: true });

const liste = Object.entries(IMAGES).filter(([slug, entree]) => {
  if (cibles.length) return cibles.includes(slug);
  return force || !existsSync(sortieDe(slug, entree));
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
