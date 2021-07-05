import { promises as fs } from 'fs'
import { join } from 'path'

type Entry = {
	slug: string
	typeHandle: string
}

function getEntryTypeFromList(entryList: Entry[], slug: string): Entry | null {
	if (entryList?.length) {
		return entryList.find((entry) => entry.slug === slug) || null
	}

	return null
}

export default async function getEntryType(
	path: string,
	slug: string,
): Promise<string | null> {
	const entryList = await fs.readFile(
		`${join(process.cwd(), 'src/data')}/${path}.json`,
		'utf8',
	)
	const entryListItem = getEntryTypeFromList(JSON.parse(entryList), slug)

	return entryListItem?.typeHandle || null
}
