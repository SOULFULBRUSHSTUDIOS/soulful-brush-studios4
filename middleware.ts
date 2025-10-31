import { NextResponse } from 'next/server';import type { NextRequest } from 'next/server';
export const config = { matcher: ['/admin/:path*'] };
export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER || ''; const pass = process.env.ADMIN_PASS || '';
  if (!user || !pass) return new NextResponse('Admin is not configured.', { status: 503 });
  const auth = req.headers.get('authorization');
  if (auth) { const [scheme, enc] = auth.split(' '); if (scheme?.toLowerCase()==='basic' && enc){ const [u,p] = Buffer.from(enc,'base64').toString().split(':'); if (u===user && p===pass) return NextResponse.next(); } }
  const res = new NextResponse('Authentication required', { status: 401 }); res.headers.set('WWW-Authenticate','Basic realm="Soulful Brush Admin"'); return res;
}