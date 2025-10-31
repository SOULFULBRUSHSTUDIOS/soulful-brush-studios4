import { loadAll, byType } from '../../../../lib/catalog';

export const dynamic = 'force-static';

export default function TypeCollection({ params }:{ params: { type: string } }){
  const all = loadAll();
  const items = byType(all, decodeURIComponent(params.type));
  return (<main>
    <h1>Type: {decodeURIComponent(params.type)}</h1>
    <section className="cardgrid">
      {items.map(p=>(<article className="card" key={p.handle}>
        <img className="productImg" src={p.image||''} alt={p.title}/>
        <div><h3>{p.title}</h3><p style={{opacity:.85}}>{[p.vendor,p.type].filter(Boolean).join(' • ')}</p></div>
        <a className="cta" href={`https://heart-soul-by-kfb.myshopify.com/search?q=${encodeURIComponent(p.handle)}`} target="_blank" rel="noopener">View in Shopify</a>
      </article>))}
    </section>
  </main>);
}
