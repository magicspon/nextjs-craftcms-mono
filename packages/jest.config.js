module.exports = {
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
	},
	transformIgnorePatterns: ['/node_modules/'],
	testEnvironment: 'jsdom',
}
