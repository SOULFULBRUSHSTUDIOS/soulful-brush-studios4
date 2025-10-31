# Soulful Brush Studios — Next.js (TypeScript) for Vercel

This project is ready to import to **Vercel** (or push to GitHub then import).

## Quick Deploy
1. Upload this ZIP to GitHub as a repo (or drag-drop the folder in Vercel → New Project).
2. In Vercel, it will auto-detect **Next.js**.
3. Build command: `next build` (already configured in `package.json`).
4. Set env (optional): `NEXT_PUBLIC_GA4_ID` = your GA4 Measurement ID.
5. Deploy.

## Scripts
- `npm run dev` — local dev
- `npm run build` — production build
- `npm start` — production run

## Notes
- TypeScript is enabled. Vercel will install `typescript` and the `@types/*` packages from `devDependencies`.
- GA4 will initialize automatically if `NEXT_PUBLIC_GA4_ID` is set.
- Shopify link is in the header and on the home page cards.


## Product Catalog from CSV
- Put your exported Shopify CSV at `data/products.csv` (this repo already includes a sample with 3 items).
- Deploy. The page **/products** will render a grid from that CSV at build-time.
- Each item links to your Shopify storefront search by handle.
- GA4 event `select_item` fires on clicks (if `NEXT_PUBLIC_GA4_ID` is set).

Columns used (Shopify export compatible):
- Handle, Title, Vendor, Type, Tags, Variant SKU, Variant Price, Variant Inventory Qty, Image Src
