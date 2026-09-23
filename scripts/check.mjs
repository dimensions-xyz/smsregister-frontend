import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "../src/config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const expected = [
  "index.html",
  "faq/index.html",
  "support/index.html",
  "privacy-policy/index.html",
  "terms-and-conditions/index.html",
  "assets/styles.css",
  "assets/site.js",
  "favicon.svg",
  "site.webmanifest",
  "sitemap.xml",
  "robots.txt",
  ".nojekyll",
];

for (const file of expected) await access(path.join(dist, file));

const pages = await Promise.all(
  expected
    .filter((file) => file.endsWith(".html"))
    .map(async (file) => ({ file, html: await readFile(path.join(dist, file), "utf8") })),
);

const requiredLinks = ["faq/", "support/", "privacy-policy/", "terms-and-conditions/"];
for (const { file, html } of pages) {
  if (!html.includes('<html lang="en">')) throw new Error(`${file}: missing English language declaration`);
  if (!html.includes('name="description"')) throw new Error(`${file}: missing meta description`);
  if (!html.includes('name="color-scheme" content="light"')) throw new Error(`${file}: light-only color scheme is missing`);
  if (!html.includes('rel="canonical"')) throw new Error(`${file}: missing canonical URL`);
  if (!html.includes('property="og:title"')) throw new Error(`${file}: missing Open Graph metadata`);
  if (!html.includes('name="twitter:card"')) throw new Error(`${file}: missing X card metadata`);
  if (!html.includes('type="application/ld+json"')) throw new Error(`${file}: missing structured data`);
  if (!html.includes('rel="manifest"')) throw new Error(`${file}: missing web manifest`);
  if (/\u2014|\u2013|\s--\s/.test(html)) throw new Error(`${file}: long or double dash detected`);
  if (/virtual-currency|cryptocurrency|crypto currency/i.test(html)) {
    throw new Error(`${file}: cryptocurrency wording detected`);
  }
  if (/<!--|-->/.test(html)) throw new Error(`${file}: HTML comment detected`);
  const structuredData = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (!structuredData) throw new Error(`${file}: structured data payload is missing`);
  JSON.parse(structuredData);
  for (const route of requiredLinks) {
    if (!html.includes(route)) throw new Error(`${file}: missing navigation link to ${route}`);
  }
}

const home = pages.find((page) => page.file === "index.html").html;
if (!home.includes(SITE.googlePlayUrl)) throw new Error("Home: Google Play URL is missing");
if (/phone mockup|screenshot/i.test(home)) throw new Error("Home: screenshot placeholder detected");
if (/How it works/i.test(home)) throw new Error('Home: removed "How it works" copy is still present');

for (const file of ["privacy-policy/index.html", "terms-and-conditions/index.html"]) {
  const legal = pages.find((page) => page.file === file).html;
  if (!legal.includes("data-scrollspy")) throw new Error(`${file}: scrollspy navigation is missing`);
  if (!legal.includes('aria-current="location"')) throw new Error(`${file}: initial active section is missing`);
}

const css = await readFile(path.join(dist, "assets", "styles.css"), "utf8");
if (css.includes("prefers-color-scheme: dark")) throw new Error("Dark mode rule detected");

const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
for (const route of requiredLinks) {
  if (!sitemap.includes(`${SITE.origin}/${route}`)) throw new Error(`Sitemap: missing ${route}`);
}

const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
if (!robots.includes(`${SITE.origin}/sitemap.xml`)) throw new Error("Robots: sitemap URL is missing");

console.log(`Checked ${pages.length} pages, SEO metadata, structured data, navigation, wording, and light mode.`);
