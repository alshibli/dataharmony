# Data Harmony website

The bilingual (Arabic / English) site for **شركة تناغم البيانات لتقنية المعلومات / Data Harmony Information Technology Company**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
```

Stack: Vite, React, TypeScript, Tailwind CSS and react-router.

## Content

All copy lives in `src/content.ts`, with Arabic and English side by side.

| Content | Status |
|---|---|
| About text, vision, mission, values, the 5 service areas, and the "examples of our work" heading | The company profile (البروفايل التعريفي). The English is a translation. |
| The 4 AI models with their details and links | The original Arabic site |
| Logo and colours (`#009fe3`, `#004664`) | The company logo |
| Call-to-action copy | **Draft.** Marked `DRAFT` in `src/content.ts`; please review. |
| Testimonials, blog posts, contact details, team | **Not written yet.** Left empty on purpose. |

## Editing

- **Contact:** fill in `contact.email`, `contact.phone` and `contact.address`. Setting the email also turns on the contact form, which opens the visitor's email app; there is no backend.
- **Testimonials and blog:** add entries to `testimonials` and `blogPosts`. While a list is empty, its page shows a "coming soon" note.
- **About:** add the team to `about`.

Yellow "Placeholder" boxes mark these spots. They only appear in `npm run dev`, never in the production build.

## Deploying

This is a single-page app, so the host must serve `index.html` for every path (for example `/services`). On Netlify, add a `_redirects` file with `/*  /index.html  200`. On Vercel and Cloudflare Pages this works by default.
