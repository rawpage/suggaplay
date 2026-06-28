#!/usr/bin/env node
/**
 * Downloads all images from a public Cosmos collection via the GraphQL API.
 * Usage: node scripts/download-cosmos-collection.mjs [ownerUsername] [slug]
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ownerUsername = process.argv[2] ?? "rawlove";
const slug = process.argv[3] ?? "suggaplay";
const outDir = path.resolve("docs/design-bible/assets/cosmos/originals");
const manifestPath = path.resolve("docs/design-bible/assets/cosmos/manifest.json");

const CLUSTER_QUERY = `
query GetClusterBySlug($input: ClusterGetInput!) {
  cluster(input: $input) {
    id
    name
    slug
    numberOfElements
    coverImageUrl
    owner { username }
  }
}`;

const ELEMENTS_QUERY = `
query GetClusterElements($clusterId: ClusterId, $pageCursor: String, $pageSize: Int) {
  elements(
    filters: { clusterId: $clusterId }
    meta: { pageSize: $pageSize, pageCursor: $pageCursor }
  ) {
    items {
      id
      type
      url
      image { url hash width height }
    }
    meta { nextPageCursor count }
  }
}`;

async function gql(operationName, query, variables) {
  const res = await fetch(`https://api.cosmos.so/graphql?q=${operationName}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ operationName, query, variables }),
  });
  if (!res.ok) throw new Error(`${operationName} HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

function uuidFromCdnUrl(url) {
  const m = url?.match(/cdn\.cosmos\.so\/([a-f0-9-]{36})/i);
  return m?.[1] ?? null;
}

function detectFormat(filePath) {
  try {
    const info = execSync(`file -b "${filePath}"`, { encoding: "utf8" }).trim();
    if (/AVIF/i.test(info)) return "avif";
    if (/JPEG/i.test(info)) return "jpeg";
    if (/PNG/i.test(info)) return "png";
    if (/WebP/i.test(info)) return "webp";
    if (/MP4|ISO Media.*video/i.test(info)) return "mp4";
    return "unknown";
  } catch {
    return "unknown";
  }
}

async function downloadFile(url, destBase) {
  for (const ext of ["jpg", "jpeg", "png", "webp", "avif", "mp4"]) {
    const dest = `${destBase}.${ext}`;
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return dest;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const tmp = `${destBase}.bin`;
  fs.writeFileSync(tmp, buf);
  const format = detectFormat(tmp);
  const ext =
    format === "avif"
      ? "avif"
      : format === "png"
        ? "png"
        : format === "webp"
          ? "webp"
          : format === "mp4"
            ? "mp4"
            : "jpg";
  const dest = `${destBase}.${ext}`;
  fs.renameSync(tmp, dest);
  return dest;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const clusterData = await gql("GetClusterBySlug", CLUSTER_QUERY, {
    input: { ownerUsername, slug },
  });
  const cluster = clusterData.cluster;
  console.log(
    `Collection: ${cluster.name} (@${cluster.owner.username}/${cluster.slug}) — ${cluster.numberOfElements} elements`,
  );

  const items = [];
  let cursor = null;
  do {
    const data = await gql("GetClusterElements", ELEMENTS_QUERY, {
      clusterId: cluster.id,
      pageSize: 100,
      pageCursor: cursor,
    });
    items.push(...data.elements.items);
    cursor = data.elements.meta.nextPageCursor;
    console.log(`Fetched ${items.length} / ${data.elements.meta.count}`);
  } while (cursor);

  const manifestItems = [];
  let downloaded = 0;
  let skipped = 0;

  for (const item of items) {
    const mediaUrl = item.image?.url ?? item.url;
    if (!mediaUrl) continue;
    const id = uuidFromCdnUrl(mediaUrl);
    if (!id) continue;

    const destBase = path.join(outDir, id);
    const existing = fs
      .readdirSync(outDir)
      .find((f) => path.parse(f).name === id);
    let filePath;
    if (existing) {
      filePath = path.join(outDir, existing);
      skipped++;
    } else {
      try {
        filePath = await downloadFile(`https://cdn.cosmos.so/${id}`, destBase);
        downloaded++;
        process.stdout.write(".");
      } catch (err) {
        console.error(`\nFailed ${id}:`, err.message);
        continue;
      }
    }

    manifestItems.push({
      id,
      elementId: item.id,
      type: item.type,
      file: `originals/${path.basename(filePath)}`,
      format: detectFormat(filePath),
      width: item.image?.width ?? null,
      height: item.image?.height ?? null,
      bytes: fs.statSync(filePath).size,
      sourceUrl: `https://cdn.cosmos.so/${id}`,
      role: "editorial",
    });
  }

  const coverId = uuidFromCdnUrl(cluster.coverImageUrl);
  if (coverId && !manifestItems.find((i) => i.id === coverId)) {
    const destBase = path.join(outDir, coverId);
    const filePath = await downloadFile(cluster.coverImageUrl, destBase);
    manifestItems.unshift({
      id: coverId,
      file: `originals/${path.basename(filePath)}`,
      format: detectFormat(filePath),
      bytes: fs.statSync(filePath).size,
      sourceUrl: cluster.coverImageUrl,
      role: "collection-cover",
    });
  }

  const manifest = {
    collection: cluster.name,
    source: `https://www.cosmos.so/${ownerUsername}/${slug}`,
    curator: `@${cluster.owner.username}`,
    clusterId: cluster.id,
    collectedAt: new Date().toISOString().slice(0, 10),
    count: manifestItems.length,
    items: manifestItems.sort((a, b) => a.id.localeCompare(b.id)),
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(
    `\nDone: ${manifestItems.length} assets (${downloaded} new, ${skipped} existing)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
