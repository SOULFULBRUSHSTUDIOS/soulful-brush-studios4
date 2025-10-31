import { readProductsFromCSV, type Product } from './csv';
export function loadAll(): Product[] { return readProductsFromCSV('data/products.csv'); }
export function unique(values: (string|undefined)[]): string[] { const set=new Set<string>(); for(const v of values){if(v&&v.trim()) set.add(v.trim());} return Array.from(set).sort((a,b)=>a.localeCompare(b,undefined,{sensitivity:'base'})); }
export function allTags(products: Product[]): string[]{ const set=new Set<string>(); for(const p of products){ for(const t of (p.tags||[])) if(t&&t.trim()) set.add(t.trim()); } return Array.from(set).sort((a,b)=>a.localeCompare(b,undefined,{sensitivity:'base'})); }
export function byType(products: Product[], type: string): Product[] { return products.filter(p => (p.type||'').toLowerCase()===type.toLowerCase()); }
export function byVendor(products: Product[], vendor: string): Product[] { return products.filter(p => (p.vendor||'').toLowerCase()===vendor.toLowerCase()); }
export function byTag(products: Product[], tag: string): Product[] { const t=tag.toLowerCase(); return products.filter(p => (p.tags||[]).some(x=>x.toLowerCase()===t)); }
