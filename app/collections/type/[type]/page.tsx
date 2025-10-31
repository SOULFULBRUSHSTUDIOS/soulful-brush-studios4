import { loadAll, byType } from '../../../../lib/catalog';
export const dynamic = 'force-dynamic';
export default function TypeCollection({ params }:{ params: { type: string } }){
  const all = loadAll();
  const items = byType(all, params.type);
  return (<main>
    <h1>Type: {params.type}</h1>
    <section className="cardgrid">
      {items.map(p=>(<article className="card" key={p.handle}>
        <img className="productImg" src={p.image||''} alt={p.title}/>
        <div><h3>{p.title}</h3><p className="meta">{[p.vendor,p.type].filter(Boolean).join(' • ')}</p>{p.description?<p className="desc">{p.description}</p>:p.tags?.length?<p className="desc">#{p.tags.slice(0,6).join(' #')}</p>:null}</div>
        <a className="cta" href={`https://heart-soul-by-kfb.myshopify.com/search?q=${encodeURIComponent(p.handle)}`} target="_blank" rel="noopener">View in Shopify</a>
      </article>))}
    </section>
  </main>);
}