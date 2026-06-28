#!/usr/bin/env node
/**
 * Copies curated Cosmos editorial images into public/ for production builds.
 * Symlinks work locally; Vercel needs real files.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const websiteRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(websiteRoot, "../..");
const srcRoot = path.join(
  repoRoot,
  "docs/design-bible/assets/cosmos/originals",
);
const destRoot = path.join(websiteRoot, "public/editorial/cosmos");
const curation = JSON.parse(
  fs.readFileSync(
    path.join(websiteRoot, "lib/editorial-image-curation.json"),
    "utf8",
  ),
);

const ids = new Set(
  [
    ...curation.black_women,
    ...curation.black_men,
    ...curation.white_women,
    ...curation.white_men,
  ].flat(),
);

fs.mkdirSync(destRoot, { recursive: true });

for (const id of ids) {
  for (const ext of ["jpg", "jpeg", "png", "webp", "avif"]) {
    const src = path.join(srcRoot, `${id}.${ext}`);
    if (!fs.existsSync(src)) continue;
    fs.copyFileSync(src, path.join(destRoot, `${id}.${ext}`));
    break;
  }
}

console.log(`Synced ${ids.size} editorial images to public/editorial/cosmos`);
