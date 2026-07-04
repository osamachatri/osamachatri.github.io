import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = [
  { loc: 'https://osamachatri.dev/', lastmod: '2026-07-04', priority: '1.0' },
  { loc: 'https://osamachatri.dev/#about', lastmod: '2026-07-04', priority: '0.8' },
  { loc: 'https://osamachatri.dev/#projects', lastmod: '2026-07-04', priority: '0.9' },
  { loc: 'https://osamachatri.dev/#contact', lastmod: '2026-07-04', priority: '0.7' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const distPath = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distPath)) fs.mkdirSync(distPath, { recursive: true });
fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully.');
