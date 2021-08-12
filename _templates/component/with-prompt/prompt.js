// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

const path = require('path')
const { readdirSync } = require('fs')

const packages = path.resolve(process.cwd(), 'packages')

const getDirectories = readdirSync(packages, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)

module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Enter the component name:',
	},
	{
		type: 'select',
		name: 'package',
		message: 'Package',
		choices: getDirectories,
	},
	{
		type: 'confirm',
		name: 'tests',
		message: 'Do you want to include tests:',
	},
	{
		type: 'confirm',
		name: 'storybook',
		message: 'Do you want to include a story:',
	},
]
