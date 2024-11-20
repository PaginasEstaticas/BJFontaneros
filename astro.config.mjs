import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://paginasestaticas.github.io/',
	integrations: [mdx(), sitemap({
		filter: (page) =>
		  page !== 'https://stargazers.club/secret-vip-lounge-1/' &&
		  page !== 'https://stargazers.club/secret-vip-lounge-2/' &&
		  page !== 'https://stargazers.club/secret-vip-lounge-3/' &&
		  page !== 'https://stargazers.club/secret-vip-lounge-4/',
	  })],
});
