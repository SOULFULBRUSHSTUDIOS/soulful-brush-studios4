import { loadAll, byVendor } from '../../../../lib/catalog';

export const dynamic = 'force-static';

export default function VendorCollection({ params }:{ params: { vendor: string } }){
  const all = loadAll();
  const items = byVendor(all, decodeURIComponent(params.vendor));
  return (<main>
    <h1>Vendor: {decodeURIComponent(params.vendor)}</h1>
    <section className="cardgrid">
      {items.map(p=>(<article className="card" key={p.handle}>
        <img className="productImg" src={p.image||''} alt={p.title}/>
        <div><h3>{p.title}</h3><p style={{opacity:.85}}>{[p.vendor,p.type].filter(Boolean).join(' • ')}</p></div>
        <a className="cta" href={`https://heart-soul-by-kfb.myshopify.com/search?q=${encodeURIComponent(p.handle)}`} target="_blank" rel="noopener">View in Shopify</a>
      </article>))}
    </section>
  </main>);
}
