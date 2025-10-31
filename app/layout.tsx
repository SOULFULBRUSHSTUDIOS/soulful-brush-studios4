import '../styles/globals.css';import GoogleAnalytics from '../components/GA';import type { ReactNode } from 'react';
export const metadata = { title: 'Soulful Brush Studios', description: 'Original artwork, print-ready collections, and curated pieces.' };
export default function RootLayout({ children }:{ children: ReactNode }){
  return (<html lang="en"><body><div className="container">
    <header className="header">
      <div className="logo">Soulful <span className="badge">Brush</span> Studios</div>
      <nav><a href="/">Home</a>&nbsp;·&nbsp;<a href="/products">Products</a>&nbsp;·&nbsp;<a href="/collections">Collections</a>&nbsp;·&nbsp;<a href="https://heart-soul-by-kfb.myshopify.com" target="_blank" rel="noopener">Shopify Store</a></nav>
    </header>
    {children}
    <footer className="footer">© {new Date().getFullYear()} Soulful Brush Studios. All rights reserved.</footer>
  </div><GoogleAnalytics/></body></html>);
}