// tailwind.config.mjs
import typography from '@tailwindcss/typography' // Importa el plugin

export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						h1: { fontFamily: 'Montserrat', fontSize: theme('fontSize.4xl') },
						h2: { fontFamily: 'Montserrat', fontSize: theme('fontSize.3xl') },
						h3: { fontFamily: 'Montserrat', fontSize: theme('fontSize.2xl') },
						h4: { fontFamily: 'Montserrat', fontSize: theme('fontSize.xl') },
						h5: { fontFamily: 'Montserrat', fontSize: theme('fontSize.lg') },
						h6: { fontFamily: 'Montserrat', fontSize: theme('fontSize.base') },
						p: { fontFamily: 'Inter' },
					},
				},
			}),
		},
	},
	plugins: [typography], // Usa la variable importada
}
