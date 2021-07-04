module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	ignoreFiles: ['packages/cms/**/*.css', '**/*.tsx'],
	plugins: [],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'layer',
				],
			},
		],
		'declaration-block-trailing-semicolon': 'always', // Ensure there is a semi-colon at the end of a declaration block
	},
}
