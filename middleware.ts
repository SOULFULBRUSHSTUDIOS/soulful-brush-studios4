import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = { matcher: ['/admin/:path*'] }

export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER || ''
  const pass = process.env.ADMIN_PASS || ''

  // If no credentials configured, block access by default
  if (!user || !pass) {
    return new NextResponse('Admin is not configured.', { status: 503 })
  }

  const auth = req.headers.get('authorization')

  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme?.toLowerCase() === 'basic' && encoded) {
      const decoded = Buffer.from(encoded, 'base64').toString()
      const [u, p] = decoded.split(':')
      if (u === user && p === pass) {
        return NextResponse.next()
      }
    }
  }

  // Ask for credentials
  const res = new NextResponse('Authentication required', { status: 401 })
  res.headers.set('WWW-Authenticate', 'Basic realm="Soulful Brush Admin"')
  return res
}
