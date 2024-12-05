/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			typography: {
				h: {
					fontFamily: 'Montserrat',
				},
				p: {
					fontFamily: 'Inter',
				},
			},
		},
	},
	variants: {},
	plugins: [],
}
