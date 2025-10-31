import Link from 'next/link';

export default function Nav() {
  const showAnalysis = process.env.NEXT_PUBLIC_SHOW_ANALYSIS === 'true';
  return (
    <nav className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="font-semibold">Soulful Brush Studios</Link>
        <div className="flex gap-4">
          <Link href="/collections" className="hover:underline">Collections</Link>
          <Link href="/groups" className="hover:underline">Groups</Link>
          <Link href="/tags" className="hover:underline">Tags</Link>
          {showAnalysis && <Link href="/admin/analysis" className="hover:underline">Analysis</Link>}
        </div>
      </div>
    </nav>
  );
}
