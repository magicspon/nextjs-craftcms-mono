const { join } = require('path')

const workspace = join(__dirname, '..')

module.exports = {
	poweredByHeader: false,

	eslint: {
		dirs: ['src'],
	},

	webpack: (config, options) => {
		/** Allows import modules from packages in workspace. */
		config.module = {
			...config.module,
			rules: [
				...config.module.rules,
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				},
				{
					test: /\.(js|jsx|ts|tsx)$/,
					include: [workspace],
					exclude: /node_modules/,
					use: options.defaultLoaders.babel,
				},
			],
		}

		return config
	},
}
