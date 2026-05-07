# Fundacja Ofca - Website

## Project Overview
A clean, aesthetic, simple showcase website ("wizytowka") for Fundacja Ofca.
Multi-language (PL/EN), with a lightweight custom CMS for admin content management.

## Tech Stack
- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: Tailwind CSS
- **i18n**: @nuxtjs/i18n (Polish + English)
- **CMS**: Custom file-based (JSON files in `/content/` directory), with a simple admin panel
- **Deployment**: Vercel (auto-deploy on push to `main`)
- **Package manager**: npm

## Project Structure
```
app/
  pages/           # Route pages
  components/      # Reusable Vue components
  layouts/         # Page layouts
  composables/     # Shared logic
content/           # JSON data files for CMS (posts, slider images, etc.)
server/
  api/             # API routes for admin CMS operations
public/            # Static assets (images, favicon)
i18n/              # Translation files (pl.json, en.json)
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run generate` — Static generation
- `npm run preview` — Preview production build

## Key Decisions
- **Accessibility is a priority** — WCAG 2.1 AA compliance, semantic HTML, keyboard nav, screen reader support, proper contrast, ARIA labels. Every component must be accessible from the start.
- File-based CMS using JSON (no database for now, upgradeable to DB later)
- Admin panel is a custom Vue UI (user-friendly for non-technical admin)
- **Admin auth via Google OAuth** with email whitelist (only approved accounts can log in)
- Security headers (CSP, X-Frame-Options, etc.), input sanitization, file upload validation
- All CMS API routes protected by auth middleware
- No third-party CMS services
- Vercel free tier for hosting
- Design assets (logo, colors) to be provided later
- Tab structure / content to be defined later

## Development Notes
- Node >= 20 required
- Nuxt 4 compatibility mode (template: minimal)
