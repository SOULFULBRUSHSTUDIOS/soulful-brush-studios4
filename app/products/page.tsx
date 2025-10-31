import { readProductsFromCSV, type Product } from '../../lib/csv';
export const dynamic = 'force-static';
function pick<T>(arr:T[],page:number,per:number){const s=(page-1)*per;return arr.slice(s,s+per);}
function toNum(v:any,f:number){if(!v)return f;const n=Number(Array.isArray(v)?v[0]:v);return isFinite(n)&&n>0?n:f;}
function toStr(v:any){if(!v)return '';return Array.isArray(v)?v[0]:v;}
export default async function ProductsPage({searchParams}:{searchParams:{[k:string]:string|string[]|undefined}}){
  const all:Product[] = readProductsFromCSV('data/products.csv');
  const q=toStr(searchParams.q).toLowerCase();const per=toNum(searchParams.per_page,24);const pg=toNum(searchParams.page,1);
  const filtered=q?all.filter(p=>[p.title,p.vendor,p.type,(p.tags||[]).join(' ')].filter(Boolean).join(' ').toLowerCase().includes(q)):all;
  const total=filtered.length;const pages=Math.max(1,Math.ceil(total/per));const cur=Math.min(Math.max(1,pg),pages);const items=pick(filtered,cur,per);
  const mk=(n:number)=>{const u=new URLSearchParams();if(q)u.set('q',q);if(per!==24)u.set('per_page',String(per));u.set('page',String(n));return `/products?${u.toString()}`;};
  return (<main><section className="cardgrid">
    {items.map(p=>(<article className="card" key={p.handle}><img className="productImg" src={p.image||''} alt={p.title}/><div><h3>{p.title}</h3><p style={{opacity:.85}}>{[p.vendor,p.type].filter(Boolean).join(' • ')}</p>{p.price?<p><strong>${p.price.toFixed(2)}</strong>{p.qty!==undefined?` • ${p.qty} in stock`:''}</p>:null}{p.tags?.length?<p style={{opacity:.7,fontSize:'.9rem'}}>#{p.tags.slice(0,8).join(' #')}</p>:null}</div><a className="cta" href={`https://heart-soul-by-kfb.myshopify.com/search?q=${encodeURIComponent(p.handle)}`} target="_blank" rel="noopener">View in Shopify</a></article>))}
  </section><nav className="pagination" aria-label="Pagination">{Array.from({length:pages}).map((_,i)=>{const n=i+1;return <a key={n} className="pagebtn" href={mk(n)} aria-current={n===cur?'page':undefined}>{n}</a>;})}</nav></main>);
}