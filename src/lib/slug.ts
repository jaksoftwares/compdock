export const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const fromSlugMatches = (slug: string, candidate: string) =>
  toSlug(candidate) === slug.toLowerCase();
