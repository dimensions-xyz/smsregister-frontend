import { ROUTES, SITE } from "./config.mjs";

const icons = {
  play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00d06c" d="M3.6 2.5 14.2 12 3.6 21.5c-.4-.4-.6-1-.6-1.7V4.2c0-.7.2-1.3.6-1.7Z"/><path fill="#ffd640" d="m14.2 12 3.3-3 3.6 2c1.2.7 1.2 1.3 0 2l-3.6 2-3.3-3Z"/><path fill="#ff4b55" d="m3.6 21.5 10.6-9.5 3.3 3-11.4 6.4c-1 .6-1.9.6-2.5.1Z"/><path fill="#39a8ff" d="M3.6 2.5c.6-.5 1.5-.5 2.5.1L17.5 9l-3.3 3L3.6 2.5Z"/></svg>`,
};

function routeHref(route, depth) {
  const root = depth ? "../" : "./";
  return route.key === "home" ? root : `${root}${route.href}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function brandLink(depth = 0) {
  const assetRoot = depth ? "../" : "./";
  return `<a class="brand" href="${depth ? "../" : "./"}" aria-label="SMSRegister home">
    <span class="brand-mark"><img src="${assetRoot}favicon.svg" alt="" width="38" height="38"></span>
    <span>SMSRegister</span>
  </a>`;
}

export function header(active, depth = 0) {
  const links = ROUTES.map(
    (route) =>
      `<a href="${routeHref(route, depth)}"${route.key === active ? ' class="active" aria-current="page"' : ""}>${route.label}</a>`,
  ).join("");

  return `<header class="site-header">
    <div class="container nav-shell">
      ${brandLink(depth)}
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Open navigation</span><span></span><span></span><span></span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary navigation">${links}</nav>
    </div>
  </header>`;
}

export function footer(depth = 0) {
  const links = ROUTES.slice(1)
    .map((route) => `<a href="${routeHref(route, depth)}">${route.label}</a>`)
    .join("");

  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        ${brandLink(depth)}
        <p>Simple access to verification numbers, built for Android.</p>
      </div>
      <nav aria-label="Footer navigation">${links}</nav>
    </div>
    <div class="container footer-bottom">
      <span>© <span data-current-year>2026</span> SMSRegister. All rights reserved.</span>
      <a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>
    </div>
  </footer>`;
}

export function playBadge() {
  return `<a class="play-badge" href="${SITE.googlePlayUrl}" target="_blank" rel="noopener noreferrer" aria-label="Get SMSRegister on Google Play">
    ${icons.play}
    <span><small>GET IT ON</small><strong>Google Play</strong></span>
  </a>`;
}

export function pageDocument({
  title,
  description,
  active,
  depth = 0,
  body,
  pageClass = "",
  canonicalPath = "/",
  schemaType = "WebPage",
  schemaProperties = {},
}) {
  const assetRoot = depth ? "../" : "./";
  const canonicalUrl = new URL(canonicalPath, SITE.origin).href;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.origin}/#website`,
        url: `${SITE.origin}/`,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
      },
      {
        "@type": schemaType,
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE.origin}/#website` },
        ...schemaProperties,
      },
    ],
  }).replaceAll("<", "\\u003c");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDescription}">
  <meta name="theme-color" content="#f8f8ff">
  <meta name="color-scheme" content="light">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeHtml(SITE.name)}">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDescription}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDescription}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="alternate" hreflang="en" href="${canonicalUrl}">
  <link rel="alternate" hreflang="x-default" href="${canonicalUrl}">
  <link rel="icon" href="${assetRoot}favicon.svg" type="image/svg+xml" sizes="any">
  <link rel="manifest" href="${assetRoot}site.webmanifest">
  <link rel="stylesheet" href="${assetRoot}assets/styles.css">
  <script type="application/ld+json">${structuredData}</script>
  <script src="${assetRoot}assets/site.js" defer></script>
</head>
<body class="${pageClass}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  ${header(active, depth)}
  <main id="main-content">${body}</main>
  ${footer(depth)}
</body>
</html>`;
}

export function featureIcon(name) {
  const paths = {
    message: '<path d="M5 6.5h14v9H10l-5 4v-13Z"/><path d="M8.5 10h7M8.5 13h4.5"/>',
    globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.2 2.2 3.2 4.8 3.2 8S14.2 17.8 12 20c-2.2-2.2-3.2-4.8-3.2-8S9.8 6.2 12 4Z"/>',
    wallet: '<path d="M4.5 7.5h13a2 2 0 0 1 2 2v8h-15v-10Z"/><path d="M4.5 8V6.5a2 2 0 0 1 2-2h10v3M15 12h4.5v3H15a1.5 1.5 0 0 1 0-3Z"/>',
    history: '<path d="M5.6 7.2A8 8 0 1 1 4 12"/><path d="M4 6v5h5M12 8v4l3 2"/>',
    bell: '<path d="M6.5 16.5h11l-1.3-2V11a4.2 4.2 0 0 0-8.4 0v3.5l-1.3 2ZM10 19h4"/>',
    shield: '<path d="M12 3.5 19 6v5c0 4.5-2.8 7.4-7 9.5C7.8 18.4 5 15.5 5 11V6l7-2.5Z"/><path d="m9 12 2 2 4-4"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
}

export function legalLayout({ eyebrow, title, intro, sections }) {
  const toc = sections
    .map(
      (section, index) =>
        `<a href="#${section.id}" data-section="${section.id}"${index === 0 ? ' class="active" aria-current="location"' : ""}>${section.title.replace(/^\d+\.\s*/, "")}</a>`,
    )
    .join("");
  const content = sections
    .map(
      (section) => `<section id="${section.id}" class="legal-section">
        <h2>${section.title}</h2>
        ${section.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>`,
    )
    .join("");

  return `<div class="page-hero compact container">
      <p class="eyebrow">${eyebrow}</p>
      <h1>${title}</h1>
      <p class="page-intro">${intro}</p>
      <p class="last-updated">Last updated: ${SITE.lastUpdated}</p>
    </div>
    <div class="container legal-grid">
      <aside class="legal-toc" aria-label="On this page" data-scrollspy>
        <strong>On this page</strong>${toc}
      </aside>
      <article class="legal-content">${content}</article>
    </div>`;
}
