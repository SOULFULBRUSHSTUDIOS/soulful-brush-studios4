export default function Analysis() {
  const enabled = process.env.NEXT_PUBLIC_SHOW_ANALYSIS === 'true';
  if (!enabled) {
    return <p className="text-gray-600">Not found.</p>;
  }
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Internal Analysis</h1>
      <p className="text-gray-700">This page is hidden from customers unless NEXT_PUBLIC_SHOW_ANALYSIS=true.</p>
      <ul className="list-disc pl-5">
        <li>Future: charts, GA4 summaries, Printify/Shopify imports.</li>
      </ul>
    </section>
  );
}
