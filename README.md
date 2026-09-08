# Hetvi Dhimar — English Language Studio

Single-page landing site for Hetvi Dhimar's online English language studio.
Built with **Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript**.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In [vercel.com](https://vercel.com) → **Add New Project** → import the repo. Vercel auto-detects Next.js; no configuration needed.
3. In the project's **Settings → Domains**, add the purchased domain and follow the DNS instructions.

## Editing content

- **[lib/site.ts](lib/site.ts)** — name, email, LinkedIn, WhatsApp number (add it to enable the WhatsApp button), and the live domain (`url`, used for social-share metadata).
- **components/** — one file per section (Hero, About, Programs, Classroom, Approach, Steps, CTA).
- **public/hetvi.jpg / public/classroom.jpg** — swap to update photos.
- Colors live in the `@theme` block of [app/globals.css](app/globals.css).

`local_resources/` holds the original photos and LinkedIn PDF; it is gitignored and never deployed.

## Deployment status

Pushes to `main` trigger an automatic deployment via the Vercel GitHub integration.
