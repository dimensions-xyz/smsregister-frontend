import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/pages.mjs";
import { ROUTES, SITE } from "../src/config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.resolve(root, "dist");

if (!dist.startsWith(`${root}${path.sep}`)) {
  throw new Error("Refusing to build outside the project directory.");
}

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "assets"), { recursive: true });
await mkdir(path.join(dist, "assets", "fonts"), { recursive: true });

for (const page of pages) {
  const output = path.resolve(dist, page.output);
  if (!output.startsWith(`${dist}${path.sep}`)) {
    throw new Error(`Invalid output path: ${page.output}`);
  }
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, page.html, "utf8");
}

await cp(path.join(root, "src", "styles.css"), path.join(dist, "assets", "styles.css"));
await cp(path.join(root, "src", "site.js"), path.join(dist, "assets", "site.js"));
await cp(path.join(root, "node_modules", "@fontsource-variable", "geist", "files", "geist-latin-wght-normal.woff2"), path.join(dist, "assets", "fonts", "geist-latin-wght-normal.woff2"));
await cp(path.join(root, "node_modules", "@fontsource-variable", "geist", "files", "geist-latin-ext-wght-normal.woff2"), path.join(dist, "assets", "fonts", "geist-latin-ext-wght-normal.woff2"));
await cp(path.join(root, "node_modules", "@fontsource-variable", "geist-mono", "files", "geist-mono-latin-wght-normal.woff2"), path.join(dist, "assets", "fonts", "geist-mono-latin-wght-normal.woff2"));
await cp(path.join(root, "node_modules", "@fontsource-variable", "geist-mono", "files", "geist-mono-latin-ext-wght-normal.woff2"), path.join(dist, "assets", "fonts", "geist-mono-latin-ext-wght-normal.woff2"));
await cp(path.join(root, "public", "favicon.svg"), path.join(dist, "favicon.svg"));
await cp(path.join(root, "public", "icon-192.png"), path.join(dist, "icon-192.png"));
await cp(path.join(root, "public", "icon-512.png"), path.join(dist, "icon-512.png"));
await cp(path.join(root, "public", "apple-touch-icon.png"), path.join(dist, "apple-touch-icon.png"));
await cp(path.join(root, "src", "site.webmanifest"), path.join(dist, "site.webmanifest"));

const publicUrls = ROUTES.map((route) =>
  route.key === "home"
    ? `${SITE.origin}/`
    : new URL(route.href, `${SITE.origin}/`).href,
);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicUrls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.origin}/sitemap.xml
`;

await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(dist, "robots.txt"), robots, "utf8");
await writeFile(path.join(dist, ".nojekyll"), "", "utf8");

console.log(`Built ${pages.length} pages in ${dist}`);
