import { readProductsFromCSV } from '@/lib/csv';

export const dynamic = 'force-static'; // build-time

export default async function ProductsPage() {
  const products = readProductsFromCSV('data/products.csv');

  return (
    <main>
      <section className="hero">
        <h1>Products</h1>
        <p>Catalog imported from Shopify CSV (or your own list). Click any item to open the Shopify store.</p>
      </section>

      <section className="cardgrid">
        {products.map((p) => (
          <article className="card" key={p.handle}>
            <div>
              <h3>{p.title}</h3>
              <p style={{opacity:.85}}>{[p.vendor, p.type].filter(Boolean).join(' • ')}</p>
              {p.price ? <p><strong>${p.price.toFixed(2)}</strong>{p.qty!==undefined ? ` • ${p.qty} in stock` : ''}</p> : null}
              {p.tags?.length ? <p style={{opacity:.7, fontSize:'.9rem'}}>#{p.tags.slice(0,6).join(' #')}</p> : null}
            </div>
            <a
              className="cta"
              href={`https://heart-soul-by-kfb.myshopify.com/search?q=${encodeURIComponent(p.handle)}`}
              target="_blank"
              rel="noopener"
              onClick={() => {
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // @ts-ignore
                  window.gtag('event', 'select_item', {
                    item_list_name: 'catalog',
                    items: [{ item_id: p.sku || p.handle, item_name: p.title, price: p.price }],
                  });
                }
              }}
            >
              View in Shopify
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
