export default function Page(){
  return (<main>
    <section className="hero">
      <div className="hero-inner">
        <h1 className="headline">Where soulful lines meet <span className="badge">golden</span> accents.</h1>
        <p className="sub">Welcome to Soulful Brush Studios — original artwork, print-ready collections, and curated pieces.</p>
        <div className="btnrow">
          <a className="btn primary" href="https://heart-soul-by-kfb.myshopify.com" target="_blank" rel="noopener">Open Shopify</a>
          <a className="btn ghost" href="/products">Browse Products</a>
        </div>
      </div>
    </section>

    <section className="section shop push">
      <div className="inner">
        <h2>Shop the Store</h2>
        <p>Explore our live catalog of prints and products. Each item links to Shopify for secure checkout.</p>
        <a className="cta" href="/products">View Products</a>
      </div>
    </section>

    {process.env.NEXT_PUBLIC_SHOW_ANALYTICS==='true' && (<section className="section analytics push">
      <div className="inner">
        <h2>Business Analytics</h2>
        <p>We aggregate Shopify, Printify, and website metrics. GA4 connects here once your measurement ID is added in Vercel.</p>
        <code>Set <strong>NEXT_PUBLIC_GA4_ID</strong> in Project → Settings → Environment Variables</code>
      </div>
    </section>)}

    <section className="section contact push">
      <div className="inner">
        <h2>Contact</h2>
        <p>Questions or commission requests? Reach out and let’s build your piece.</p>
        <a className="cta" href="mailto:kbobeck01@gmail.com">Email Us</a>
      </div>
    </section>
  </main>);
}