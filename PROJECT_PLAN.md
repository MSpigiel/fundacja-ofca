# Fundacja Ofca - Project Plan

## Status: Phase 2 Complete, Phase 3 Next

---

## Agreed Requirements
- Simple, clean, aesthetic showcase website for Fundacja Ofca
- **Accessibility (a11y) for disabled people is a priority** — WCAG 2.1 AA compliance, semantic HTML, keyboard navigation, screen reader support, proper contrast, ARIA attributes
- Multi-language: Polish (primary) + English
- Custom admin panel for non-technical user (1-2 admins)
- CMS features:
  - News/posts management (rich text: inline images, logos, links, mini gallery)
  - Home page photo slider (click → links to news article)
  - PDF document management (statute, yearly reports since 2015)
- Auto-deploy on push to GitHub (Vercel)
- Visual style inspired by festiwalofca.pl (background color, fonts, font colors, layout)
- NO diamond/rhombus graphics — use photos
- Functionality reference: oppenheim.org/pl (minimalist, similar UX patterns)
- "Fundacja OFCA" text as logo placeholder until new logo is designed

## Site Structure (from Word doc + screenshot)

### Navigation Layout
Center-logo nav: items split on both sides of the logo
```
O FUNDACJI | PROJEKTY | AKTUALNOŚCI | [FUNDACJA OFCA] | CENTRUM WSPIERANIA ORG. POZARZĄDOWYCH | KONTAKT
```

### Page Map

#### 1. Home (Strona Główna)
- Photo slider (smaller than Oppenheim's, same functionality: click image → news article)
- "Fundacja OFCA" in nav acts as home link (will be replaced by logo later)

#### 2. O Fundacji (About) — no submenu
Single page with sections:
- O fundacji — about text
- Zarząd Fundacji — board members text
- Statut Fundacji — PDF download button
- Sprawozdania merytoryczne — yearly report PDFs download (since 2015, ~12 docs)
- Sprawozdania finansowe — yearly financial report PDFs download
- Reference layout: oppenheim.org/pl foundation page (statute + reports together)

#### 3. Projekty (Projects) — dropdown submenu
Each project is a separate sub-page with text + mini photo gallery (click to enlarge + browse):
- Festiwal OFCA
- Warsztaty cyrkowe dla dzieci
- Centrum Wspierania Organizacji Pozarządowych
- Gallery reference: Oppenheim OP_BOOKS page (thumbnail → lightbox → browse all)

#### 4. Aktualności (News) — no submenu, **CMS-managed**
- List view: card grid with image + title + excerpt
- Click card → full article on separate page
- **Admin must be able to**: add/edit/delete articles with rich text, inline images/logos, links, mini photo gallery
- Reference layout: Oppenheim Aktualności page

#### 5. Centrum Wspierania Organizacji Pozarządowych — dropdown submenu
Sub-pages:
- Cele i zakres wsparcia (Goals & scope)
- Godziny pracy (Working hours)
- Rezerwacja Sali (Room reservation)
- Kontakt (Contact for this center)

#### 6. Kontakt (Contact) — no submenu
- Address
- Email addresses
- Phone numbers
- Bank account number

## Tech Stack (Agreed)
| Layer       | Choice              | Reason                                    |
|-------------|---------------------|-------------------------------------------|
| Framework   | Nuxt 3              | Vue-based, SSR/SSG, great DX              |
| Styling     | Tailwind CSS        | Clean, modern, fast to build              |
| i18n        | @nuxtjs/i18n        | PL + EN support                           |
| CMS storage | JSON files (local)  | Simple, no DB needed, upgradeable later   |
| Admin panel | Custom Vue pages    | User-friendly for non-tech admin          |
| Hosting     | Vercel (free tier)  | Auto-deploy from GitHub on push           |

---

## Phases

### Phase 1: Initial Setup [COMPLETE]
- [x] Initialize Nuxt 3 project (minimal template)
- [x] Initialize git repo
- [x] Install dependencies (nuxt, vue, vue-router, tailwind, i18n)
- [x] Configure nuxt.config.ts (tailwind, i18n PL/EN)
- [x] Create project structure (pages/, components/, layouts/, content/, i18n/, server/api/)
- [x] Create "coming soon" landing page with language switcher
- [x] Vercel config
- [x] Push to GitHub (MSpigiel/fundacja-ofca)
- [x] Deploy to Vercel (https://fundacja-ofca.vercel.app)

### Phase 2: Layout & Navigation [COMPLETE]
- [x] Main layout: header with center-logo nav, footer
- [x] Nav with dropdown submenus (Projekty, Centrum Wspierania)
- [x] Mobile hamburger menu
- [x] Language switcher (PL/EN) in nav
- [x] Page routing for all 10 pages (including sub-pages)
- [x] Visual style from festiwalofca.pl (cream bg #F8EFE6, Antonio headings, Lato body, dark text #201E1E)
- [x] Tailwind config with extracted color palette (cream, dark, pink, purple, orange, gold)
- [x] Skip-to-content link (a11y)
- [x] Footer with site map, contact, social links

### Phase 3: Content Pages [NEXT]
- [ ] Home page with photo slider (click → article)
- [ ] O Fundacji page (sections: about, board, statute PDF, reports PDFs)
- [ ] Projekty sub-pages (Festiwal OFCA, Warsztaty, Centrum) with photo galleries
- [ ] Photo gallery component (thumbnail grid → lightbox with browse)
- [ ] Aktualności list page (card grid: image + title + excerpt)
- [ ] Aktualności single article page (rich content, inline images, mini gallery)
- [ ] Centrum Wspierania sub-pages (4 sub-pages)
- [ ] Kontakt page (address, email, phone, bank account)
- [ ] PDF download component (for statute + yearly reports)

### Phase 4: Admin Panel / CMS [NOT STARTED]
- [ ] Google OAuth authentication
- [ ] Email whitelist for allowed admins
- [ ] Admin route group protected by auth middleware
- [ ] Dashboard overview
- [ ] News article editor (rich text: headings, images, logos, links, mini gallery)
- [ ] Home page slider manager (upload images, link to articles, reorder)
- [ ] PDF document manager (upload/manage statute + reports)
- [ ] Input sanitization on all CMS content (prevent XSS)
- [ ] File upload validation (type whitelist, size limits)
- [ ] Preview before publish
- [ ] User-friendly UI for non-technical admin

### Phase 4.5: Security Hardening [NOT STARTED]
- [ ] Security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- [ ] CSRF protection verification (SameSite cookies)
- [ ] CMS API routes locked behind auth middleware
- [ ] Rate limiting on auth and API endpoints
- [ ] Security audit / review before launch

### Phase 5: Accessibility & Polish [NOT STARTED]
- [ ] Accessibility audit (axe / Lighthouse)
- [ ] WCAG 2.1 AA compliance check (contrast, keyboard nav, screen reader, focus indicators)
- [ ] Skip-to-content link
- [ ] ARIA landmarks and labels on all interactive elements
- [ ] Alt text on all images (including CMS-managed images)
- [ ] Accessible admin panel
- [ ] SEO meta tags
- [ ] Performance optimization
- [ ] Connect custom domain
- [ ] Final review with client
- [ ] Launch

---

## Security Approach (Agreed)
- Google OAuth for admin authentication
- Email whitelist (only approved emails can access admin panel)
- Input sanitization on all CMS-managed content
- File upload validation (image types only, size limits)
- Security headers hardened in nuxt.config.ts
- All CMS API routes require authenticated session

## Design Direction
- **Inspired by**: festiwalofca.pl (colors, fonts, layout, menu) — but NOT a copy
- **Functionality reference**: oppenheim.org/pl (minimalist, similar content patterns)
- **No diamond/rhombus graphics** — photos only
- **Photo galleries**: thumbnail grid → lightbox with prev/next browse (like Oppenheim OP_BOOKS)
- **Slider**: smaller than Oppenheim, click image → news article
- **Logo**: text placeholder "Fundacja OFCA" until new logo designed

## Open Questions
- Dropdown menus: hover or click trigger?
- News editor: WYSIWYG or markdown-based?
- PDF management: admin-uploadable via CMS or developer-managed?
- Centrum Wspierania is both a nav item AND a project under Projekty — same content or separate?
- Admin whitelisted emails (which Google accounts?)
- Contact form needed or just static info?
- Exact colors/fonts from festiwalofca.pl to use?

---

## Session Log
- **2026-05-07**: Project kickoff. Agreed on tech stack. Initialized Nuxt 3 project. Installed deps (Tailwind, i18n). Created coming soon landing page. Pushed to GitHub (MSpigiel/fundacja-ofca). Deployed to Vercel at https://fundacja-ofca.vercel.app. Phase 1 complete.
- **2026-05-07**: Analyzed context files (email, Word doc, screenshot). Extracted full site structure with 6 main sections. Updated plan with detailed page map, design direction, and open questions. PDF in context folder is unrelated (removed).
- **2026-05-07**: Phase 2 complete. Built full layout: center-logo nav, dropdown menus, mobile hamburger, footer. Extracted exact styles from festiwalofca.pl CSS (Antonio + Lato fonts, cream #F8EFE6 bg, color palette). Created all 10 page route stubs. Deployed to Vercel. Vercel CLI also configured for direct deploys.
- **2026-05-08**: Session ended. Next: Phase 3 — fill in content pages one by one, starting with Home (slider) or whichever page client prioritizes.
