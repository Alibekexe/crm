export default {
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/google-fonts',
	],
	googleFonts: {
		families: {
			Roboto: true,
			Inter: [400, 700],
			'Josefin Sans': true,
			Lato: [100, 300],
			Raleway: {
				wght: [100, 400],
				ital: [100],
			},
			'Crimson Pro': {
				wght: [200, 900],
				ital: [200, 700],
			},
		},
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
}
