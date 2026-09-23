# SMSRegister Website

Static, dependency-free marketing and information website for the SMSRegister Android app.

## Local development

```bash
npm run build
npm run check
npm run preview
```

The production-ready site is generated in `dist/`. Routes are emitted as real directories (`faq/index.html`, `privacy-policy/index.html`, and `terms-and-conditions/index.html`) so direct links and refreshes work on GitHub Pages without SPA fallbacks.

Shared product settings, including `GOOGLE_PLAY_URL` and the support address, live in `src/config.mjs`.
