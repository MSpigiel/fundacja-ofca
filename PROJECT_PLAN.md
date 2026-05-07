# Fundacja Ofca - Project Plan

## Status: Phase 1 - Initial Setup

---

## Agreed Requirements
- Simple, clean, aesthetic showcase website for Fundacja Ofca
- **Accessibility (a11y) for disabled people is a priority** — WCAG 2.1 AA compliance, semantic HTML, keyboard navigation, screen reader support, proper contrast, ARIA attributes
- Multi-language: Polish (primary) + English
- Custom admin panel for non-technical user (1-2 admins)
- CMS features:
  - News/posts management (create, edit, delete posts from admin panel)
  - Photo slider (configurable images)
  - Possibly one more configurable section (TBD)
- Auto-deploy on push to GitHub (Vercel)
- Design references and logo/colors to be provided later
- Tab/page structure to be defined later

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

### Phase 1: Initial Setup [IN PROGRESS]
- [x] Initialize Nuxt 3 project (minimal template)
- [x] Initialize git repo
- [x] Install base dependencies (nuxt, vue, vue-router)
- [ ] Install Tailwind CSS module
- [ ] Install i18n module
- [ ] Configure nuxt.config.ts (tailwind, i18n)
- [ ] Create basic project structure (pages/, components/, layouts/, content/, i18n/, server/api/)
- [ ] Create minimal landing page (placeholder "coming soon" style)
- [ ] Create Vercel config
- [ ] Push to GitHub
- [ ] Deploy to Vercel (get live URL)
- [ ] Share URL with friend for validation

### Phase 2: Layout & Navigation [NOT STARTED]
- [ ] Design and implement main layout (header, nav, footer)
- [ ] Set up page routing (tabs structure - TBD)
- [ ] Implement language switcher (PL/EN)
- [ ] Apply design assets when provided (logo, colors, fonts)
- [ ] Responsive design (mobile-first)

### Phase 3: Content Pages [NOT STARTED]
- [ ] Home page with hero section
- [ ] About page (foundation info)
- [ ] News page (list of posts from CMS)
- [ ] Single news post page
- [ ] Photo gallery/slider page
- [ ] Contact page
- [ ] (Other pages TBD based on requirements)

### Phase 4: Admin Panel / CMS [NOT STARTED]
- [ ] Admin route group with simple auth (password-based)
- [ ] Dashboard overview
- [ ] News post editor (create/edit/delete)
- [ ] Photo slider manager (upload/reorder/delete images)
- [ ] Preview before publish
- [ ] User-friendly UI for non-technical admin

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

## Open Questions / TBD
- Page/tab structure (which pages exactly?)
- Design references, logo, color palette
- What is the "one more configurable thing" beyond news + slider?
- Admin authentication approach (simple password? invite-only?)
- Contact form handling (email service?)
- Any specific content for launch?

---

## Session Log
- **2026-05-07**: Project kickoff. Agreed on tech stack. Initialized Nuxt 3 project. Hit disk space issue (resolved with npm cache clean). Created project documentation.
