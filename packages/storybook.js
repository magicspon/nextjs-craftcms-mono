/* eslint-disable no-param-reassign */
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const postcss = require('postcss')

/**
 *
 * @param {string} dir : the current __dirname
 * @param {object} config : the storybook config file
 * @returns
 */

module.exports = (dir, { webpackFinal = (conf) => conf, ...sbConfig } = {}) => {
	const pathToInlineSvg = path.resolve(dir, '../src/svgs')

	return {
		addons: [
			'@storybook/addon-links',
			'@storybook/addon-essentials',
			'@storybook/addon-a11y',
			'@storybook/addon-jest',
			{
				name: '@storybook/addon-postcss',
				options: {
					postcssLoaderOptions: {
						implementation: postcss,
					},
				},
			},
		],

		...sbConfig,

		webpackFinal: async (config) => {
			const { rules } = config.module

			config.resolve.plugins.push(
				new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
			)

			const fileLoaderRule = rules.find((rule) => rule.test?.test('.svg'))
			fileLoaderRule.exclude = pathToInlineSvg

			config.module.rules.push({
				test: /\.svg$/,
				include: pathToInlineSvg,
				use: ['@svgr/webpack'],
			})

			return webpackFinal(config)
		},
	}
}
