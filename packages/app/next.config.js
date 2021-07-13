const { join } = require('path')

const workspace = join(__dirname, '..')

module.exports = {
	poweredByHeader: false,

	eslint: {
		dirs: ['src'],
	},

	images: {
		sizes: [320, 480, 820, 1020],
		domains: [process.env.IMAGE_DOMAIN],
	},

	webpack: (config, options) => {
		// eslint-disable-next-line no-param-reassign
		config.module = {
			...config.module,
			rules: [
				...config.module.rules,
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				},
				/** Allows import modules from packages in workspace. */
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
