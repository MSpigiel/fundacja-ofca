# Fundacja Ofca - Website

## Project Overview
A clean, aesthetic, simple showcase website ("wizytowka") for Fundacja Ofca.
Multi-language (PL/EN), with a lightweight custom CMS for admin content management.

## Tech Stack
- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: Tailwind CSS
- **i18n**: @nuxtjs/i18n (Polish + English, currently PL only active)
- **CMS**: Custom admin panel with Tiptap WYSIWYG editor
- **Article storage**: Upstash Redis (via Vercel KV integration)
- **Image storage**: Vercel Blob (CDN-delivered, client-side WebP compression)
- **Deployment**: Vercel (auto-deploy on push to `main`)
- **Domain**: fundacjaofca.pl
- **Package manager**: npm

## Project Structure
```
app/
  pages/           # Route pages (news/, admin/, center/, projects/)
  components/      # Reusable Vue components (+ admin/ subfolder)
  layouts/         # Page layouts
  composables/     # Shared data fetching (useArticles)
  utils/           # Shared utilities (formatDate, compressImage)
server/
  api/             # API routes (articles CRUD, image upload)
  utils/           # Server utilities (Redis client, slugify, sanitize)
types/             # TypeScript interfaces
public/            # Static assets (images, favicon)
i18n/              # Translation files (pl.json, en.json)
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run generate` — Static generation
- `npm run preview` — Preview production build

## Environment Variables
Required in `.env` (see `.env.example`):
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob storage for image uploads
- `KV_REST_API_URL` — Upstash Redis URL for article storage
- `KV_REST_API_TOKEN` — Upstash Redis auth token
- `ADMIN_PASSWORD` — Admin panel password (set on Vercel via `npx vercel env add ADMIN_PASSWORD`)

## Key Decisions
- **Accessibility is a priority** — WCAG 2.1 AA compliance, semantic HTML, keyboard nav, screen reader support, proper contrast, ARIA labels. Every component must be accessible from the start.
- Upstash Redis for article data (migrated from file-based JSON — Vercel filesystem is read-only)
- Vercel Blob for images with client-side WebP compression before upload
- Tiptap WYSIWYG editor for non-technical admin (bold, italic, headings, lists, links, images)
- Admin panel is a custom Vue UI within the same Nuxt app (`/admin` routes)
- **Admin auth via password** with session cookies (httpOnly, secure, 7-day expiry, in-memory session store)
- Security headers, input sanitization (server-side HTML sanitize), file upload validation (type + 5MB limit)
- No third-party CMS services
- Vercel free tier for hosting

## API Routes
- `GET /api/articles` — List all (optional `?limit=N`)
- `GET /api/articles/:slug` — Single article
- `POST /api/articles` — Create article (auth required)
- `PUT /api/articles/:slug` — Update article (auth required)
- `DELETE /api/articles/:slug` — Delete article + cleanup blobs (auth required)
- `POST /api/upload` — Upload image to Vercel Blob (auth required)
- `POST /api/auth/login` — Admin login
- `POST /api/auth/logout` — Admin logout
- `GET /api/auth/check` — Session validation

## Development Notes
- Node >= 20 required
- Nuxt 4 compatibility mode
- Server utils are auto-imported by Nuxt (no explicit imports needed in API routes)
- Components in `admin/` subfolder are auto-imported with `Admin` prefix (e.g. `AdminTiptapEditor`)
- Utils in `app/utils/` are auto-imported (e.g. `formatDate`, `compressImage`)
