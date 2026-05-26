/**
 * Server middleware that adds security headers to every response.
 * Covers OWASP recommended headers for a Nuxt SSR site.
 */
export default defineEventHandler((event) => {
  const headers = event.node.res

  // Prevent clickjacking — only allow same-origin framing
  headers.setHeader('X-Frame-Options', 'SAMEORIGIN')

  // Block MIME-type sniffing (prevents browsers from interpreting files as a different MIME type)
  headers.setHeader('X-Content-Type-Options', 'nosniff')

  // Limit referrer information leaked to third parties
  headers.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Prevent reflected XSS in older browsers (modern browsers use CSP instead)
  headers.setHeader('X-XSS-Protection', '1; mode=block')

  // Opt out of FLoC and other tracking APIs
  headers.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Content Security Policy — allow our own origin, Google Fonts, Vercel Blob CDN, Upstash
  headers.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      // Scripts: self + Nuxt inline scripts (needed for SSR hydration)
      "script-src 'self' 'unsafe-inline'",
      // Styles: self + Google Fonts + Nuxt inline styles
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts: self + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + Vercel Blob CDN + data URIs (for inline previews)
      "img-src 'self' https://*.public.blob.vercel-storage.com data: blob:",
      // API connections: self + Upstash Redis
      "connect-src 'self' https://*.upstash.io",
      // Disallow <object>, <embed>, <applet>
      "object-src 'none'",
      // Only allow iframes from same origin
      "frame-ancestors 'self'",
      // Form submissions only to same origin
      "form-action 'self'",
      // Require HTTPS for all resources in production
      'upgrade-insecure-requests',
    ].join('; '),
  )

  // Strict Transport Security — enforce HTTPS for 1 year (only effective over HTTPS)
  headers.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
})
