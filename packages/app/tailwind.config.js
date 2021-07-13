const preset = require('@spon/ui/tailwind.config')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}', '../ui/src/**/*.{js,ts,jsx,tsx}'],

	presets: [preset],
}
