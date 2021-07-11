const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const path = require('path')

const pathToInlineSvg = path.resolve(__dirname, '../src/svgs')

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',

		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],

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

		config.resolve.alias['next/router'] = require.resolve('./router.mock.js')

		return config
	},
}
