import { promises as fs } from 'fs'
import { dataDirectory } from '@utils/constants'

export default async function readDataFromDisk(path: string): Promise<string> {
	const entryList = await fs.readFile(`${dataDirectory}/${path}.json`, 'utf8')

	return entryList
}
