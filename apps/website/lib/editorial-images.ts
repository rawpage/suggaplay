import curation from "./editorial-image-curation.json";

export type EditorialDemographic =
  | "black_women"
  | "black_men"
  | "white_women"
  | "white_men";

type Curation = Record<EditorialDemographic, string[]>;

const curated = curation as Curation & { perCategory: number };

/** Public URL for a Cosmos editorial asset by UUID. */
export function editorialImageSrc(id: string, ext: "jpg" | "avif" = "jpg") {
  return `/editorial/cosmos/${id}.${ext}`;
}

/** Interleave demographics so the homepage grid stays balanced. */
export function interleavedHomepageImages(count = 64): string[] {
  const n = Math.min(
    count / 4,
    curated.black_women.length,
    curated.black_men.length,
    curated.white_women.length,
    curated.white_men.length,
  );
  const result: string[] = [];
  for (let i = 0; i < n; i++) {
    result.push(
      curated.black_women[i],
      curated.black_men[i],
      curated.white_women[i],
      curated.white_men[i],
    );
  }
  return result;
}

export function heroFeatureImages() {
  return {
    hero: curated.black_women[0],
    rail: [
      curated.white_women[0],
      curated.black_men[0],
      curated.white_men[0],
    ] as string[],
  };
}

export function sectionAccentImages(start: number, length: number) {
  return interleavedHomepageImages(64).slice(start, start + length);
}

export { curated as editorialCuration };
