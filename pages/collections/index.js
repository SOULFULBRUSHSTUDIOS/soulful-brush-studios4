import Link from 'next/link'
import collections from '@/data/collections.json'

export default function Collections() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Collections</h1>
      <ul className="grid sm:grid-cols-2 gap-4">
        {collections.map(c => (
          <li key={c.slug} className="card">
            <h3 className="font-medium text-lg">{c.name}</h3>
            <Link className="link" href={`/collections/${c.slug}`}>Open</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
