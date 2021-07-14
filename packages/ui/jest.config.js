const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')
const jestConfig = require('../jest.config')

module.exports = {
	...jestConfig,
	rootDir: './',
	moduleNameMapper: {
		'\\.(css)$': 'identity-obj-proxy',
		'^.+\\.svg$': '<rootDir>/__mocks__/svg.mock.js',
		...pathsToModuleNameMapper(compilerOptions.paths, {
			prefix: '<rootDir>/',
		}),
	},
}
