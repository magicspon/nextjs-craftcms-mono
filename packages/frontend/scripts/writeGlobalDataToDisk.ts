import path from 'path'
import { promises as fs } from 'fs'

async function Something(): Promise<void> {
	const output = path.join(process.cwd(), 'src/data/test.data.json')

	await fs.writeFile(output, JSON.stringify({ hello: 'world' }), 'utf8')
}

Something()
