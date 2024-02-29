const fs = require('fs');
const path = require('path');

// Lista ścieżek twojej strony
const pages = [
	'/',
	'/o-nas',
	'/kontakt',
	'/konsultacja',
	'/blog',
	'/polityka-prywatnosci',
	'/usługi',
	'/portfolio',
	'/formularz-zgloszeniowy',
	// Dodaj więcej ścieżek
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) =>
			`<url>
  <loc>${`https://modezp.com${page}`}</loc>
</url>`
	)
	.join('')}
</urlset>
`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
