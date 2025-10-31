export default function GalleryCard({ item }) {
  const desc = item.description && item.description.trim().length > 0
    ? item.description
    : `${item.title} — fine art print by Soulful Brush Studios.`;
  return (
    <div className="card">
      <div className="relative w-full h-56 mb-3 overflow-hidden rounded-xl bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={item.title} src={item.image} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-medium text-lg">{item.title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {item.tags?.map(t => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
    </div>
  );
}
