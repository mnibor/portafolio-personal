// astro.config.mjs
import { defineConfig } from 'astro/config'
import astroIcon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroIcon({
			include: ['mdi'], // Esto es lo importante
		}),
	],
})
