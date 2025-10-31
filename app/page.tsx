export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1>Where soulful lines meet <span className="badge">golden</span> accents.</h1>
        <p>Welcome to Soulful Brush Studios — original artwork, print-ready collections, and curated pieces.</p>
      </section>

      <section className="cardgrid">
        <article className="card">
          <div>
            <h3>Shop the Store</h3>
            <p>Visit our Shopify storefront to browse live products and new drops.</p>
          </div>
          <a className="cta" href="https://heart-soul-by-kfb.myshopify.com" target="_blank" rel="noopener">Open Shopify</a>
        </article>

        <article className="card">
          <div>
            <h3>Business Analytics</h3>
            <p>We aggregate Shopify, Printify, and website metrics. GA4 connects here when the ID is added.</p>
          </div>
          <code>Set NEXT_PUBLIC_GA4_ID in Vercel → Settings → Environment Variables</code>
        </article>

        <article className="card">
          <div>
            <h3>Contact</h3>
            <p>Questions or commission requests? Reach out and let’s build your piece.</p>
          </div>
          <a className="cta" href="mailto:kbobeck01@gmail.com">Email Us</a>
        </article>
      </section>
    </main>
  );
}
