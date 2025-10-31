export const dynamic = 'force-dynamic';

export default function AdminPage(){
  return (<main>
    <h1>Admin Analytics</h1>
    <p>This private area can aggregate Shopify, Printify, and GA4 metrics.</p>
    <ul>
      <li>Shopify CSV snapshots: traffic, conversions, top SKUs</li>
      <li>Printify production/fulfillment stats</li>
      <li>GA4 events from site</li>
    </ul>
    <p style={{opacity:.8}}>Configure credentials via <code>ADMIN_USER</code> and <code>ADMIN_PASS</code> in Vercel → Environment Variables.</p>
  </main>);
}
