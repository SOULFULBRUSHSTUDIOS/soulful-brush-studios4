import Link from 'next/link'
import groups from '@/data/groups.json'

export default function Groups() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Groups</h1>
      <ul className="grid sm:grid-cols-2 gap-4">
        {groups.map(g => (
          <li key={g.slug} className="card">
            <h3 className="font-medium text-lg">{g.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{g.description}</p>
            <Link className="link" href={`/groups/${g.slug}`}>Open</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
