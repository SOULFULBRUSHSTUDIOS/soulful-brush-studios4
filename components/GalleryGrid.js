import GalleryCard from './GalleryCard';

export default function GalleryGrid({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-gray-600">Nothing here yet.</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {items.map(i => <GalleryCard key={i.id} item={i} />)}
    </div>
  );
}
