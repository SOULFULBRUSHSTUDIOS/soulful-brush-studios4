# Soulful Brush Studios – Web

A minimal Next.js (Pages Router) site with Tailwind CSS. It fixes prior 500 errors on group/collection links, adds tag-based galleries, and hides the internal **Analysis** page by default.

## What’s inside
- `/collections` with dynamic `[slug]` (safe slug handling to prevent 500s)
- `/groups` with dynamic `[slug]`
- `/tags` and `/tags/[tag]` for tag-based galleries
- Hidden **Analysis** link (only shows if `NEXT_PUBLIC_SHOW_ANALYSIS=true`)
- Description fallback so cards never render blank descriptions
- Simple JSON data in `/data` (swap for your real content or a CMS later)

## Quick start (local)
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Environment Variables
Create `.env.local` (not committed) from `.env.example`:

```
# Show/hide the Analysis nav link (default is hidden)
NEXT_PUBLIC_SHOW_ANALYSIS=false

# Optional GA4 ID (wired later)
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
```

## Deploy to Vercel (GitHub flow)
1. **Create a GitHub repo** (new, empty).  
2. On your computer, unzip this project, then:
```bash
git init
git add .
git commit -m "Initial import – Soulful Brush web"
git branch -M main
git remote add origin https://github.com/YOUR-USER/soulful-brush-web.git
git push -u origin main
```
3. Go to **Vercel → New Project → Import Git Repository** → select your `soulful-brush-web` repo.
4. In **Environment Variables**, set:
   - `NEXT_PUBLIC_SHOW_ANALYSIS` = `false` (keeps Analysis hidden)
   - (Optional) `NEXT_PUBLIC_GA4_MEASUREMENT_ID` = `G-XXXXXXXXXX`
5. Click **Deploy**. Vercel will build and give you a URL.

## Deploy to Vercel (Upload flow – no GitHub)
1. Zip the project folder (use the zip provided in chat, or create your own).
2. In **Vercel → New Project → Import → Upload**, drop the zip.
3. Add the same environment variables as above.
4. Deploy.

## Where the 500 error was fixed
- Previously, clicking a Group/Collection sometimes passed an undefined slug → Next tried to render with missing params → 500.
- In `/groups/[slug].js` and `/collections/[slug].js` we:
  - Safely read the slug from the router.
  - Render a friendly “Unknown or loading” message if the slug isn’t matched yet.
  - Filter products defensively so empty results render gracefully (no 500s).

## Customizing data
Edit `/data/products.json`, `/data/groups.json`, `/data/collections.json`.  
Empty or missing `description` values fall back to a safe default on cards.

## Roadmap
- Hook up real product data (Shopify Storefront API)
- GA4 pageview events if `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is set
- Move to CMS (Sanity/Contentlayer) if desired
