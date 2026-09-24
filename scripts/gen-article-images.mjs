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
  // Calendrier 2026-2027
  "calcul-bfr":
    "Late afternoon in the back office of a small French manufacturing company, a person seen from behind sits at a wooden desk covered with paper invoices, binders and a closed laptop, warehouse shelves with stacked boxes visible through an interior glass wall, natural light, documentary photo style, no readable text, no faces, no screens.",
  "prendre-une-decision":
    "Two managers seen from behind standing in front of a whiteboard covered with blank hand-drawn columns and arrows in a small French company office, soft natural window light, no readable text, faces not visible, documentary photo style.",
  "organigramme-entreprise":
    "Two people seen from behind arranging blank sticky notes into a hierarchy on a whiteboard in the office of a small French manufacturing company, workshop visible through a glass partition, soft daylight. No faces visible, no readable text, no screens.",
  "signes-du-burn-out":
    "A person seen from behind sitting alone at a cluttered desk in a small French SME office at dusk, head resting on one hand, a single desk lamp on and stacks of paper folders around, soft natural film photography, no visible faces, no text, no readable screens.",
  "force-de-vente-externalisee":
    "A sales representative seen from behind, sitting in a parked car and reviewing a paper notebook, the plain blank facade of a small industrial building blurred through the windscreen, soft morning light. The building has no sign, no lettering, no logo at all. Every person faces away from the camera; nobody looks toward the lens.",
  "seuil-de-rentabilite":
    "Back view of a woman manager in a small French manufacturing workshop, annotating printed spreadsheets with a pen on a workbench, machines softly blurred in the background, natural daylight, no readable text, no recognizable faces.",
  "management-toxique":
    "Documentary-style photo inside a small French manufacturing workshop at dusk, a team leader seen from behind standing near a workbench while two employees in the background are softly out of focus, tense quiet atmosphere, natural light, no recognizable faces, no text, no readable screens.",
  "gain-de-productivite":
    "Documentary-style photo inside a small French manufacturing workshop, a machine operator seen from behind walking along a production line with carts of metal parts waiting between workstations, soft natural light through high windows. No faces visible, no text, no readable screens or signage.",
  "budget-de-tresorerie":
    "A woman seen from behind at a wooden desk in the small office of a French manufacturing SME, sorting printed bank statements and invoices next to a calculator, a blurred workshop visible through the glass partition, natural light. No faces, no readable text, no screens.",
  "charge-mentale":
    "A small French company office at dusk, a woman seen from behind standing in front of a wall covered with blank sticky notes, warm desk lamp light, cluttered desk, no readable text, no visible faces, no legible screens. Natural documentary photography style.",
  "delegation-de-pouvoir":
    "A production supervisor seen strictly from behind holding a binder while facing a machining line in a small French SME workshop, the rest of the workshop softly blurred and empty of people, natural daylight. Every person faces away from the camera; nobody looks toward the lens.",
  "politique-commerciale":
    "A salesperson seen from behind leaning over a counter in the showroom of a small French manufacturing company, flipping through a printed price binder, product samples on shelves in soft natural light. No faces visible, no readable text, no screens.",
  "flux-de-tresorerie":
    "A woman seen from behind at a wooden desk in a small French manufacturing company office, pencil in hand over blank printed sheets and a calculator, warehouse shelves blurred through the window behind her. Natural daylight, documentary style, no readable text, no visible faces, no screens.",
  "accompagnement-au-changement":
    "Inside a small French manufacturing workshop, four operators in work clothes seen strictly from behind, standing around a workbench and looking at a large blank paper sheet pinned to a wall, natural daylight, documentary photo style. Every person faces away from the camera; nobody looks toward the lens.",
  "outils-amelioration-continue":
    "Two workers seen from behind standing at a whiteboard covered with blank colored sticky notes in a bright French SME workshop, machines softly blurred in the background, natural light, no readable text, no faces visible.",
  "role-du-manager":
    "A team leader and two operators seen strictly from behind, walking side by side along a production line in a small French factory, soft morning light, documentary photo style. Every person faces away from the camera; nobody looks toward the lens.",
  "taux-de-marge":
    "Warm late-afternoon light in the stockroom of a small French distribution company, a woman manager and a warehouse worker seen from behind reviewing shelves of cardboard boxes with a clipboard, shallow depth of field, no faces visible, no text, no readable labels or screens, documentary photo style.",
  "prevention-risques-psychosociaux":
    "An empty break room in a French manufacturing SME at mid-morning, a wooden table with a few coffee cups and closed notebooks, chairs slightly pushed back as if people just left, soft window light, workshop blurred through a glass partition, documentary photo style. Every person faces away from the camera; nobody looks toward the lens.",
  "structure-matricielle":
    "Two managers seen from behind studying a large wall planning board covered with blank colored cards in the engineering office of a small French manufacturing company, soft daylight, workshop visible through a glass partition, no readable text, no recognizable faces.",
  "plan-d-action-commercial":
    "Two salespeople seen from behind standing at a whiteboard covered with blank colored sticky notes in a small French industrial company office, soft daylight, workshop visible through a glass partition, faces not visible, no readable text or screens.",
  "previsionnel-financier":
    "A woman seen from behind at a wooden desk in a small French manufacturing company office, reviewing blank printed sheets and a notebook, large window overlooking a workshop floor in warm late-afternoon light. No readable text, no visible faces, no screens.",
  "gestion-de-conflit":
    "Two employees seen strictly from behind standing a little apart near a workbench in a small French manufacturing workshop, tense body language, soft natural light, shallow depth of field, documentary photo style. Every person faces away from the camera; nobody looks toward the lens.",
  "cartographie-des-processus":
    "A small team seen from behind stands in front of a wall covered with blank colored sticky notes and hand-drawn arrows in a meeting room overlooking a French SME factory floor, soft daylight, faces not visible, no readable text.",
  "burn-out-ou-depression":
    "Late-afternoon office of a small French manufacturing company, a woman seen from behind sitting alone at her desk and looking out a large window at an empty open-plan space, soft warm light, no faces visible, no text, no readable screens. Documentary photo style, natural colors.",
  "gestion-de-tresorerie":
    "Back view of a woman manager at a wooden desk in a small French manufacturing company office, reviewing printed bank statements and a blank paper wall calendar, workshop visible through a glass partition, soft daylight. No faces visible, no readable text or screens.",
  "comite-de-direction":
    "An empty meeting room in a French industrial SME just before a management meeting, a simple wooden table with six chairs, closed notebooks and coffee cups set out, a large window overlooking the workshop floor, warm natural light, documentary photo style. Every person faces away from the camera; nobody looks toward the lens.",
  "management-de-projet":
    "A workshop supervisor seen from behind facing a wall board covered with blank colored sticky notes arranged in columns, next to production machines in a small French manufacturing company, blurred colleagues in the background, no readable text, no recognizable faces.",
  "outils-d-aide-a-la-decision":
    "A business owner seen from behind at a meeting table in a small French company office, comparing two blank printed folders and a calculator, workshop floor softly blurred through a window. No faces visible, no readable text, no screens.",
  "qvt-ou-qvct":
    "A small team of four people seen from behind, standing around a whiteboard covered in blank sticky notes in the corner of a bright French SME workshop, with workbenches and daylight in the background, candid documentary style, no recognizable faces, no text, no readable screens.",
  "reorganisation-entreprise":
    "Two managers seen from behind, standing in front of a whiteboard covered with blank sticky notes and arrows in a meeting room overlooking a small French factory floor, natural light; no recognizable faces, no readable text or screens.",
  "marge-nette":
    "Close-up of hands holding a pen above a blank sheet of paper next to a calculator and a coffee cup on a wooden meeting table in a small French company office, soft window light; the paper is completely blank, no printing on it. Every person faces away from the camera; nobody looks toward the lens.",
  "manager-une-equipe":
    "Natural documentary photo of a short standing team meeting in a bright French SME workshop, a female team manager seen from behind facing four colleagues who are blurred in soft focus, relaxed engaged mood, morning light, no recognizable faces, no text, no readable screens or boards.",
  "cohesion-d-equipe":
    "Candid photo of a small team of four colleagues seen from behind, standing together around a workbench in a bright French SME workshop at the end of the day, relaxed body language, one coffee cup resting on a crate. No recognizable faces, no text, no readable screens.",
  "tableau-de-bord-kpi":
    "A small leadership meeting in a French SME conference room, three people blurred around a table with blank printed sheets and coffee cups in sharp focus in the foreground, soft daylight, shallow depth of field. No recognizable faces, no readable text, no screens.",
  "courbe-du-changement":
    "A French small manufacturing workshop during a reorganization, moving boxes and trolleys in the aisle, two workers seen from behind carrying a workbench to a new spot, soft daylight from high windows, no faces, no readable text or signage, no screens. Realistic documentary photography.",
  "processus-metier":
    "Photo inside the office of a French SME manufacturing workshop, two people seen from behind arranging blank colored sticky notes on a wall to map a workflow, the production floor blurred through a glass partition, no readable text, no recognizable faces.",
  "taux-de-rentabilite":
    "A business owner seen from behind at a meeting table in a small French industrial company office, annotating printed financial statements with a pen, a glass partition showing a blurred workshop beyond. No recognizable faces, no readable text, no screens.",
  "leadership-manager":
    "A team leader in a safety jacket seen strictly from behind, standing among three blurred workers who are also turned away from the camera, around a workbench on the shop floor of a small French factory, morning light, documentary photography, shallow depth of field. Every person faces away from the camera; nobody looks toward the lens.",
  "surcharge-emotionnelle":
    "A woman business owner seen from behind stands alone by the window of a modest office in a French SME, holding a cup, taking a quiet pause at the end of the day, soft warm light, colleagues blurred in the background, documentary photo style, no text, no readable screens.",
  "croissance-externe":
    "Two business owners seen from behind walking across the courtyard of a small industrial site in southern France, carrying folders, warm late-afternoon light, faces not visible, no readable text or signage.",
  "manager-fonctionnel":
    "Two managers in white coats seen from behind review a binder at the edge of a food-processing workshop in a small French company, figures slightly blurred, no faces visible. No text, no readable documents or screens, natural light.",
  "decision-strategique":
    "A small meeting room in a French SME with a large window, a wooden table covered with blank paper documents, open notebooks and coffee cups, one person seen from behind standing at the window, soft natural daylight, candid documentary photography. Every person faces away from the camera; nobody looks toward the lens.",
  "transmission-entreprise-familiale":
    "An older and a younger person walking side by side down the aisle of a family-owned French distribution warehouse, seen from behind, warm late-afternoon light through high windows, shelves slightly blurred, no readable text, no screens, no recognizable faces, documentary photo style.",
  "outils-intelligence-collective":
    "A small group of six people seen from behind and slightly blurred, sitting in a circle on simple chairs in a bright meeting room of a French SME workshop, notebooks on their knees and blank sticky notes on a wall, natural light, no readable text, no recognizable faces.",
  "delegation-de-signature":
    "Close-up of a person's hands, face out of frame, near an open blank signature folder and a fountain pen on a wooden desk in the administrative office of a small French manufacturing company, natural window light, no readable text or screens.",
  "seminaire-cohesion-d-equipe":
    "A small group of coworkers seen from behind walking together on a countryside trail in southern France, casual outdoor clothes and small backpacks, soft morning light, slightly blurred. No faces visible, no text, no signage.",
  "budget-previsionnel":
    "Documentary photo in the meeting room of a small French industrial company, a woman seen from behind reviewing printed sheets spread on a wooden table, workshop visible through a window, soft daylight. No recognizable faces, no readable text or numbers, no screens.",
  "gerant-d-entreprise":
    "A business owner seen from behind walks alone through the workshop of a small French manufacturing company at the end of the day, holding a notebook, warm low light, blurred workers in the background, no visible faces or readable text.",
  "reprendre-une-entreprise":
    "Two people seen from behind walking through the workshop of a small French industrial company at the end of the day, one carrying a folder, idle machines and warm natural light from high windows, no faces visible, no text, no readable screens. Documentary photo style, natural colors.",
  "auditer-une-entreprise":
    "Over-the-shoulder view of a woman consultant holding a notebook while a blurred shop-floor supervisor points along a production line in a French agri-food SME, natural light, documentary style. No recognizable faces, no text, no readable screens.",
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
