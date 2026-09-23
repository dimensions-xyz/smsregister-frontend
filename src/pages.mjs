import {
  featureIcon,
  legalLayout,
  pageDocument,
  playBadge,
} from "./components.mjs";
import { faqItems, privacySections, termsSections } from "./content.mjs";
import { SITE } from "./config.mjs";

const featureCards = [
  ["message", "Verification codes", "Keep ordered numbers and received codes together in My Numbers."],
  ["globe", "Services and countries", "Browse live service, country, availability, and price data from the provider catalog."],
  ["wallet", "Clear SRCoin balance", "Buy SRCoin packs through Google Play and see the cost before placing an order."],
  ["history", "Order history", "Track Pending, Completed, Expired, and Refunded orders in one place."],
  ["bell", "Code notifications", "Get a push notification when a verification code arrives, if notifications are enabled."],
  ["shield", "Account controls", "Sign in with Google, manage settings, contact support, or delete your account."],
];

const homeBody = `<section class="hero">
  <div class="hero-orb orb-one"></div><div class="hero-orb orb-two"></div>
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow"><span></span> Virtual numbers for Android</p>
      <h1>Verification codes,<br><em>without the clutter.</em></h1>
      <p class="hero-lede">Order a temporary number for a supported service, follow the SMS status, and manage every SRCoin from one focused app.</p>
      <div class="hero-actions">${playBadge()}</div>
      <p class="hero-note">Google account required · SRCoin prices shown before every order</p>
    </div>
    <div class="flow-card" aria-label="SMSRegister order flow">
      <div class="flow-card-head"><span>Order flow</span><span class="secure-pill">Secure session</span></div>
      <ol class="flow-list">
        <li><span class="flow-number">01</span><div><strong>Choose a service</strong><small>Select an available country and SRCoin price.</small></div><span class="flow-check">✓</span></li>
        <li><span class="flow-number">02</span><div><strong>Use your number</strong><small>Your order stays active for 30 minutes.</small></div><span class="flow-status">Active</span></li>
        <li><span class="flow-number">03</span><div><strong>Receive the code</strong><small>See it in My Numbers and by notification.</small></div><span class="flow-signal">•••</span></li>
      </ol>
      <div class="balance-strip"><span><small>Balance</small><strong>SRCoins stay easy to track</strong></span><span class="coin-mark">◎</span></div>
    </div>
  </div>
</section>

<section class="trust-band" aria-label="Product highlights">
  <div class="container trust-row"><span>30-minute order window</span><span>Google Sign-In</span><span>Google Play purchases</span><span>SMS arrival notifications</span></div>
</section>

<section class="section container" id="features">
  <div class="section-heading split-heading"><div><p class="eyebrow">Everything in one flow</p><h2>From number to code,<br>with every step visible.</h2></div><p>SMSRegister keeps ordering, status, codes, SRCoin activity, and support close at hand - without turning a simple task into a complicated dashboard.</p></div>
  <div class="feature-grid">${featureCards
    .map(
      ([icon, title, text]) => `<article class="feature-card"><span class="feature-icon">${featureIcon(icon)}</span><h3>${title}</h3><p>${text}</p></article>`,
    )
    .join("")}</div>
</section>

<section class="section process-section">
  <div class="container process-grid">
    <div><p class="eyebrow">Built around the real order lifecycle</p><h2>Simple when it works.<br>Clear when it doesn’t.</h2><p>If a code arrives, it is saved to the order. If it never arrives, an eligible pending order can be refunded after its 30-minute window.</p><a class="button-secondary" href="./faq/">Read the FAQ <span aria-hidden="true">→</span></a></div>
    <div class="status-stack" aria-label="Order statuses">
      <div class="status-card"><span class="status-icon pending">1</span><div><strong>Pending</strong><small>Waiting for a verification code</small></div><span>30:00</span></div>
      <div class="status-connector"></div>
      <div class="status-card"><span class="status-icon complete">2</span><div><strong>Completed</strong><small>Code received and stored</small></div><span class="status-tag complete">Delivered</span></div>
      <div class="status-card muted"><span class="status-icon refund">↺</span><div><strong>No code?</strong><small>Request eligible SRCoin refund after expiry</small></div><span class="status-tag">Refund</span></div>
    </div>
  </div>
</section>

<section class="cta-section container">
  <div class="cta-card"><div><p class="eyebrow">Ready on Android</p><h2>Keep verification moving.</h2><p>Download SMSRegister from Google Play and use your first supported service when you need it.</p></div>${playBadge()}</div>
</section>`;

export const pages = [
  {
    output: "index.html",
    html: pageDocument({
      title: "SMSRegister - Virtual Numbers for SMS Verification",
      description: SITE.description,
      active: "home",
      canonicalPath: "/",
      schemaType: "WebPage",
      schemaProperties: {
        mainEntity: {
          "@type": "MobileApplication",
          name: SITE.name,
          description: SITE.description,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Android",
          url: `${SITE.origin}/`,
          downloadUrl: SITE.googlePlayUrl,
        },
      },
      body: homeBody,
      pageClass: "home-page",
    }),
  },
  {
    output: "faq/index.html",
    html: pageDocument({
      title: "FAQ - SMSRegister",
      description: "Answers about SMSRegister orders, SRCoins, verification codes, refunds, notifications, and account deletion.",
      active: "faq",
      depth: 1,
      canonicalPath: "/faq/",
      schemaType: "FAQPage",
      schemaProperties: {
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      pageClass: "faq-page",
      body: `<div class="page-hero container"><p class="eyebrow">Help center</p><h1>Frequently asked questions</h1><p class="page-intro">Straight answers based on how SMSRegister currently handles accounts, orders, codes, SRCoins, and refunds.</p></div>
      <section class="container faq-layout"><div class="faq-list">${faqItems
        .map(
          (item, index) => `<details class="faq-item"${index === 0 ? " open" : ""}><summary><span>${item.question}</span><span class="faq-toggle" aria-hidden="true"></span></summary><div><p>${item.answer}</p></div></details>`,
        )
        .join("")}</div><aside class="support-card"><span class="feature-icon">${featureIcon("message")}</span><h2>Still need help?</h2><p>Visit Support for the right details to include and the fastest way to reach the team.</p><a href="../support/">Go to Support <span aria-hidden="true">→</span></a></aside></section>`,
    }),
  },
  {
    output: "support/index.html",
    html: pageDocument({
      title: "Support - SMSRegister",
      description: "Get help with SMSRegister orders, refunds, SRCoins, notifications, sign-in, and account access.",
      active: "support",
      depth: 1,
      canonicalPath: "/support/",
      schemaType: "ContactPage",
      schemaProperties: {
        mainEntity: {
          "@type": "Organization",
          name: SITE.name,
          url: `${SITE.origin}/`,
          email: SITE.supportEmail,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: SITE.supportEmail,
            availableLanguage: "English",
          },
        },
      },
      pageClass: "support-page",
      body: `<div class="page-hero support-hero container">
        <p class="eyebrow">SMSRegister Support</p>
        <h1>Help that starts<br>with the right details.</h1>
        <p class="page-intro">Choose the topic closest to your issue, gather the details below, and contact the support team directly.</p>
      </div>
      <section class="container support-topic-grid" aria-label="Support topics">
        <article class="support-topic"><span class="feature-icon">${featureIcon("history")}</span><div><h2>Orders & refunds</h2><p>Help with unavailable numbers, pending orders, expired orders, received codes, and eligible SRCoin refunds.</p></div></article>
        <article class="support-topic"><span class="feature-icon">${featureIcon("wallet")}</span><div><h2>SRCoins & purchases</h2><p>Questions about Google Play SRCoin packs, wallet activity, balance updates, refunds, or reversals.</p></div></article>
        <article class="support-topic"><span class="feature-icon">${featureIcon("bell")}</span><div><h2>Codes & notifications</h2><p>Help when a code is not shown, a push notification does not arrive, or Android notifications are disabled.</p></div></article>
        <article class="support-topic"><span class="feature-icon">${featureIcon("shield")}</span><div><h2>Account & sign-in</h2><p>Support for Google Sign-In, expired sessions, account access, account limits, and account deletion.</p></div></article>
      </section>
      <section class="container contact-section">
        <div class="contact-card">
          <div class="contact-copy"><p class="eyebrow">Contact support</p><h2>Tell us what happened.</h2><p>Email the team from the address connected to your account when possible. Never include your password, access token, or verification code.</p><a class="support-email-button" href="mailto:${SITE.supportEmail}?subject=SMSRegister%20Support">Email ${SITE.supportEmail}<span aria-hidden="true">→</span></a></div>
          <div class="contact-checklist"><p>Helpful details to include</p><ul><li><span>01</span>Your SMSRegister user ID</li><li><span>02</span>The relevant order ID, if any</li><li><span>03</span>What you expected and what happened</li><li><span>04</span>Your app version and device model</li></ul></div>
        </div>
      </section>
      <section class="container support-bottom"><div><p class="eyebrow">Before you email</p><h2>Your answer may already be here.</h2><p>Read verified answers about 30-minute orders, refund eligibility, SRCoins, notifications, and account deletion.</p></div><a class="button-secondary" href="../faq/">Browse the FAQ <span aria-hidden="true">→</span></a></section>`,
    }),
  },
  {
    output: "privacy-policy/index.html",
    html: pageDocument({
      title: "Privacy Policy - SMSRegister",
      description: "How SMSRegister processes account, order, purchase, notification, device, and diagnostic information.",
      active: "privacy",
      depth: 1,
      canonicalPath: "/privacy-policy/",
      pageClass: "legal-page",
      body: legalLayout({
        eyebrow: "Legal · Privacy",
        title: "Privacy Policy",
        intro: "A clear account of the information SMSRegister uses to authenticate accounts, fulfill number orders, manage SRCoins, deliver notifications, and protect the service.",
        sections: privacySections,
      }),
    }),
  },
  {
    output: "terms-and-conditions/index.html",
    html: pageDocument({
      title: "Terms & Conditions - SMSRegister",
      description: "Terms governing SMSRegister accounts, virtual-number orders, SRCoins, SMS delivery, refunds, and service availability.",
      active: "terms",
      depth: 1,
      canonicalPath: "/terms-and-conditions/",
      pageClass: "legal-page",
      body: legalLayout({
        eyebrow: "Legal · Service terms",
        title: "Terms & Conditions",
        intro: "The rules that apply when you use SMSRegister, order a virtual number, purchase SRCoins, receive a code, or request an eligible refund.",
        sections: termsSections,
      }),
    }),
  },
];
