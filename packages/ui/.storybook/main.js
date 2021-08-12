const sb = require('../../storybook')

const config = sb(__dirname, {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	webpackFinal: (config) => {
		// config.resolve.alias['next/router'] = require.resolve(
		// 	'@spon/shared/storybook/router.mock.js',
		// )

		return config
	},
})

module.exports = config
