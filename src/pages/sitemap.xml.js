export async function get() {
	const siteUrl = 'https://www.bjfontaneros.com'; // Cambia esto según tu URL
	const pages = [
	  '/',
	  '/reformas',
	  '/proyectos',
	  '/contacto',
	]; // Lista de tus rutas manuales
  
	const urls = pages
	  .map(
		(page) => `<url>
	<loc>${siteUrl}${page}</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<changefreq>monthly</changefreq>
	<priority>0.8</priority>
  </url>`
	  )
	  .join('\n');
  
	return {
	  headers: {
		'Content-Type': 'application/xml',
	  },
	  body: `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${urls}
  </urlset>`,
	};
  }  