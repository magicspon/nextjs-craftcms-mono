const rules = {
	ON: 2,
	OFF: 0,
	WARN: 1,
}

module.exports = {
	ignorePatterns: ['*/*/.storybook/*'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-hooks', '@typescript-eslint'],
	parserOptions: {
		project: ['./tsconfig.json', './packages/*/tsconfig.json'],
		createDefaultProgram: true,
		sourceType: 'module',
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript',
		'plugin:react/recommended',
		'eslint-config-prettier',
	],
	rules: {
		'@typescript-eslint/camelcase': rules.OFF,
		'@typescript-eslint/explicit-function-return-type': rules.OFF,
		'@typescript-eslint/explicit-member-accessibility': rules.OFF,
		'@typescript-eslint/no-non-null-assertion': rules.OFF,
		'@typescript-eslint/no-unused-vars': rules.OFF,
		'@typescript-eslint/array-type': rules.OFF,
		'@typescript-eslint/no-explicit-any': rules.OFF,
		'@typescript-eslint/no-empty-interface': rules.OFF,
		'@typescript-eslint/no-empty-function': rules.OFF,
		'@typescript-eslint/no-use-before-define': rules.OFF,
		'@typescript-eslint/no-object-literal-type-assertion': rules.OFF,
		'@typescript-eslint/no-var-requires': rules.OFF,
		'react/no-deprecated': rules.OFF,
		'react/prop-types': rules.OFF,
		'react-hooks/rules-of-hooks': rules.ON,
		'react-hooks/exhaustive-deps': rules.WARN,
		'prefer-spread': rules.WARN,
		'react/jsx-props-no-spreading': rules.OFF,
		'jsx-a11y/anchor-is-valid': rules.OFF,
		'import/no-extraneous-dependencies': rules.OFF,
		'import/prefer-default-export': rules.OFF,
	},
	overrides: [
		{
			files: ['*.json'],
			rules: {
				'@typescript-eslint/no-unused-expressions': rules.OFF,
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
}
