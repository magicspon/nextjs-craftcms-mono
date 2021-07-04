// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

const path = require('path')
const { readdirSync } = require('fs')

const packages = path.resolve(process.cwd(), 'packages')

const getDirectories = readdirSync(packages, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name)
	.reverse()

module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Enter the page name:',
	},
	{
		type: 'input',
		name: 'path',
		message: 'Enter the pages directory',
		initial: '/',
	},
	{
		type: 'select',
		name: 'package',
		message: 'Package',
		choices: getDirectories,
	},
	{
		type: 'select',
		name: 'strategy',
		message: 'uses getStaticPaths',
		choices: ['SSG', 'SSR'],
		initial: 'SSG',
	},
	{
		type: 'toggle',
		name: 'paths',
		message: 'uses getStaticPaths',
		initial: false,
	},
]
