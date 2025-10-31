import fs from 'node:fs';
import path from 'node:path';

export type Product = {
  handle: string;
  title: string;
  vendor?: string;
  type?: string;
  tags?: string[];
  sku?: string;
  price?: number;
  qty?: number;
  image?: string;
};

function parseLine(line: string): string[] {
  // Simple CSV split that respects quotes (not perfect but fine for standard Shopify export)
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += c;
    }
  }
  result.push(current);
  return result.map(s => s.replace(/^\s+|\s+$/g, ''));
}

export function readProductsFromCSV(csvRelPath: string): Product[] {
  const filePath = path.join(process.cwd(), csvRelPath);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const header = parseLine(lines[0]);
  const getIndex = (name: string) => header.indexOf(name);

  const idx = {
    Handle: getIndex('Handle'),
    Title: getIndex('Title'),
    Vendor: getIndex('Vendor'),
    Type: getIndex('Type'),
    Tags: getIndex('Tags'),
    SKU: getIndex('Variant SKU'),
    Price: getIndex('Variant Price'),
    Qty: getIndex('Variant Inventory Qty'),
    Image: getIndex('Image Src'),
  };

  const products: Product[] = lines.slice(1).map((ln) => {
    const cols = parseLine(ln);
    const tags = idx.Tags >= 0 && cols[idx.Tags] ? cols[idx.Tags].split(',').map(t => t.trim()) : [];
    const price = idx.Price >= 0 && cols[idx.Price] ? Number(cols[idx.Price]) : undefined;
    const qty = idx.Qty >= 0 && cols[idx.Qty] ? Number(cols[idx.Qty]) : undefined;
    return {
      handle: idx.Handle >= 0 ? cols[idx.Handle] : '',
      title: idx.Title >= 0 ? cols[idx.Title] : '',
      vendor: idx.Vendor >= 0 ? cols[idx.Vendor] : undefined,
      type: idx.Type >= 0 ? cols[idx.Type] : undefined,
      tags,
      sku: idx.SKU >= 0 ? cols[idx.SKU] : undefined,
      price,
      qty,
      image: idx.Image >= 0 ? cols[idx.Image] : undefined,
    };
  }).filter(p => p.handle);

  return products;
}
