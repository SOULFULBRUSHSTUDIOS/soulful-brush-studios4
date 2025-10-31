import Link from 'next/link';
import { loadAll, unique } from '../../lib/catalog';

export const dynamic = 'force-static';

export default function CollectionsIndex(){
  const all = loadAll();
  const types = unique(all.map(p=>p.type));
  const vendors = unique(all.map(p=>p.vendor));
  return (<main>
    <h1>Collections</h1>
    <section className="cardgrid">
      <article className="card"><h3>By Type</h3><ul>{types.map(t=>(<li key={t}><Link href={`/collections/type/${encodeURIComponent(t)}`}>{t}</Link></li>))}</ul></article>
      <article className="card"><h3>By Vendor</h3><ul>{vendors.map(v=>(<li key={v}><Link href={`/collections/vendor/${encodeURIComponent(v)}`}>{v}</Link></li>))}</ul></article>
    </section>
  </main>);
}
