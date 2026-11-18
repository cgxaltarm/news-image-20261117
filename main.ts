// news-image-20261117 — sum up 17 November 2026's world news in one image.
//
// The entry image is prepared artwork: a newspaper front page for
// Tuesday 17 November 2026, 43 stories across 6 continents, led by the
// Crimean Bridge span falling into the sea, Iran–US fire over Bahrain
// and Qeshm, and Trump's first Quad summit in Manila. Every illustration
// on the page was drawn by hand as flat shapes, so the text stays crisp.
//
// This program only copies that image to the output directory make.fun
// expects, so the judged artefact is exactly the prepared image.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// Fail loudly, instead of copying nothing, if the artwork is missing.
if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const destination = join(outputDir, "entry.png");
copyFileSync(source, destination);

console.log(`Wrote ${destination}`);
