const plugin = require('tailwindcss/plugin')

const PX_BASE = 16
/**
 * Convert pixels to rems, or ems.
 *
 * @function px2
 * @param {number} value
 * @param {string} unit - default to rem
 * @return {string}
 */
const px2 = (value, unit = 'rem') => `${value / PX_BASE}${unit}`

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {},
	},

	plugins: [],
}