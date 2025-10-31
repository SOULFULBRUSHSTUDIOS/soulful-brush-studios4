import { useRouter } from 'next/router'
import products from '@/data/products.json'
import groups from '@/data/groups.json'
import GalleryGrid from '@/components/GalleryGrid'

export default function GroupPage() {
  const { query } = useRouter();
  const slug = (query.slug || '').toString();
  const group = groups.find(g => g.slug === slug);
  const items = products.filter(p => (p.group || '').toLowerCase().replace(/\s+/g,'-') === slug);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-1">{group?.name ?? 'Group'}</h1>
      {!group && <p className="text-sm text-gray-600">Unknown or loading group.</p>}
      <GalleryGrid items={items} />
    </section>
  )
}
