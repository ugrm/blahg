import dotenv from 'dotenv';
dotenv.config({ path: '.env.production' });

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // update with your domain later
});


import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://blahg.netlify.app/",
	base: "/",
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: "material-theme-darker",
			langs: [],
		},
	},
});
