import { useRouter } from 'next/router'
import products from '@/data/products.json'
import GalleryGrid from '@/components/GalleryGrid'

export default function TagPage() {
  const { query } = useRouter();
  const tag = (query.tag || '').toString().toLowerCase();
  const items = products.filter(p => (p.tags || []).map(t => t.toLowerCase()).includes(tag));
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-1">Tag: {tag}</h1>
      <GalleryGrid items={items} />
    </section>
  )
}
