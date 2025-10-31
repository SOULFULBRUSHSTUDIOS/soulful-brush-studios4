import products from '@/data/products.json'
import GalleryGrid from '@/components/GalleryGrid'

export default function Home() {
  return (
    <section>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Art Prints & Collections</h1>
        <p className="text-gray-700">Welcome to Soulful Brush Studios. Explore groups, collections, and tags.</p>
      </header>
      <GalleryGrid items={products.slice(0, 6)} />
    </section>
  )
}
