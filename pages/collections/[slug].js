import { useRouter } from 'next/router'
import products from '@/data/products.json'
import collections from '@/data/collections.json'
import GalleryGrid from '@/components/GalleryGrid'

export default function CollectionPage() {
  const router = useRouter();
  const { slug } = router.query || {};
  const col = collections.find(c => c.slug === slug);

  const items = products.filter(p => (p.collection || '').toLowerCase().replace(/\s+/g,'-') === slug);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-1">{col?.name ?? 'Collection'}</h1>
      {!col && <p className="text-sm text-gray-600">Unknown or loading collection.</p>}
      <GalleryGrid items={items} />
    </section>
  )
}
