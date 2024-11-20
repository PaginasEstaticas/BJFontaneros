export async function get() {
	const siteUrl = 'https://www.bjfontaneros.com'; // Cambia esto según tu URL
  
	return {
	  body: `User-agent: *
		Allow: /
		Sitemap: ${siteUrl}/sitemap.xml`,
	};
  }  