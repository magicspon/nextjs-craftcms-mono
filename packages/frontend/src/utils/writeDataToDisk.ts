import { promises as fs } from 'fs'
import { dataDirectory } from '@utils/constants'

export default async function writeDataToDisk(
	data: string,
	name: string,
): Promise<void> {
	await fs.writeFile(`${dataDirectory}/${name}.json`, data, 'utf8')
}
