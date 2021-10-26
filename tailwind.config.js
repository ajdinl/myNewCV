const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mybackground: '#efefef',
				myblue: '#38b6ff',
				mygreen: '#008037',
				mygrey: '#5b5e66',
			},
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
}
