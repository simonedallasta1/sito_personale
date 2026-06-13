# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a **personal portfolio website for Simone Dall'Asta**. A first **draft (bozza) is now scaffolded** as a static, build-free site. The working language of the site and content is **Italian**.

- `README.md` — the project's source-of-truth knowledge base (goals, bio/CV content, skills, projects, GDPR requirements). **Read it before changing content**; CV data, project list and skills come from here.
- `index.html` — single-page site: hero, Chi sono, Esperienze (timeline), Competenze, Portfolio, Contatti. Content is currently **hardcoded in the HTML** (not yet extracted to `src/data/*.json`).
- `privacy-policy.html`, `cookie-policy.html` — legal pages, **DRAFT placeholders** (see GDPR section below).
- `assets/css/style.css` — full design system (dark theme + indigo→cyan gradient, glassmorphism cards, reveal-on-scroll, responsive). System font stack only — **no external font requests**.
- `assets/js/main.js` — vanilla JS: mobile nav, IntersectionObserver reveals, contact-form handler (not wired to a backend), cookie-notice banner.
- `assets/img/profilo-*.{webp,jpg}` — self-hosted profile photos (288/192/96), referenced via `<picture>`/`srcset`.

There is **no build, lint, or test step** — it's plain static files. To preview, open `index.html` directly or serve the folder (e.g. `python -m http.server`). Deploy target remains **GitHub Pages**.

## Stack decision (executed)

Chose **vanilla HTML/CSS/JS** over Astro for the draft: instantly previewable with no build, lightest possible, privacy-first, ideal for GitHub Pages. Astro/Next remain valid future options if a build pipeline or component reuse becomes necessary. The README's proposed `src/{pages,components,data}` structure was **not** adopted for the draft (flat static layout instead); revisit if migrating to a framework.

## GDPR / privacy status of the current draft

The draft is deliberately **privacy-first and currently cookie-free**: no analytics, no external fonts, no third-party embeds → no consent-requiring cookies. The `localStorage` "cookie-notice-ack" key is strictly technical. Open items before going live:

- **Contact form is not wired up.** `index.html` form `action="#"` is a placeholder. When connecting it (Web3Forms/Formspree per README §7.5) it will collect personal data — the privacy-consent checkbox + honeypot are already in place, but the privacy policy must be finalized first.
- **Legal pages are DRAFTS, not legal advice.** `privacy-policy.html` / `cookie-policy.html` need real titolare details and ideally a professional review before publication.
- **The cookie banner is currently informational only** (no real consent gating) because there's nothing to gate. The moment any analytics, YouTube embed, external font, or marketing pixel is added, it MUST be blocked until explicit consent (use a real consent manager like Klaro!), and the cookie policy updated.
- Keep fonts self-hosted/system and all assets local — never reintroduce Google Fonts or hot-linked images.

## Hard constraints — these shape every implementation choice

These are firm requirements from the README, not nice-to-haves:

- **Privacy-first / GDPR by design.** The whole stack is deliberately chosen to avoid consent-requiring cookies: cookieless analytics (Umami/Plausible), **self-hosted fonts** (never Google Fonts — that leaks IPs to Google), cookieless contact forms (Web3Forms/Formspree with a honeypot). Any third-party script (analytics, external fonts, YouTube embeds, marketing pixels) **must be blocked until the user consents** — load it after consent via a consent manager (Klaro! preferred), never unconditionally in `<head>`.
- **Self-host all assets.** Never hot-link images/fonts from external CDNs (e.g. `fbcdn.net`) — signed CDN URLs expire and hot-linking leaks visitor IPs to third parties, contradicting the privacy stance.
- **Performance budget.** Target Lighthouse ≥ 90 across Performance/Best-Practices/SEO/Accessibility. Modern image formats (WebP/AVIF) with `srcset`, lazy-loading, minimal CSS/JS, no heavy unnecessary libraries.
- **Responsive / mobile-first** and accessible (contrast, alt text, keyboard nav), with SEO meta/Open Graph/sitemap.

## Content notes

All site copy and CV data live in the README and should be treated as authoritative — pull bio, experience, education, skills, and project entries from there. Keep them as structured data files (see `src/data/` above) so pages stay presentation-only.
