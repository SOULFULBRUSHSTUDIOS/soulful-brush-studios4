export const dynamic = 'force-dynamic';
export default function AdminPage(){
  return (<main>
    <h1>Admin Analytics</h1>
    <p>This private area can aggregate Shopify, Printify, and GA4 metrics.</p>
    <p style={{opacity:.8}}>Protects with Basic Auth via <code>ADMIN_USER</code> and <code>ADMIN_PASS</code> in Vercel Environment Variables.</p>
  </main>);
}