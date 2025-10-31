import Link from 'next/link'
import products from '@/data/products.json'

export default function Tags() {
  const tagSet = new Set();
  products.forEach(p => (p.tags || []).forEach(t => tagSet.add(t)));
  const tags = Array.from(tagSet).sort();
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Browse by Tag</h1>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <Link key={t} className="badge hover:bg-gray-50" href={`/tags/${encodeURIComponent(t)}`}>{t}</Link>
        ))}
      </div>
    </section>
  )
}
