import readDataFromDisk from '@utils/data/readDataFromDisk'

type Entry = {
	uri: string
	typeHandle: string
}

function getEntryTypeFromList(entryList: Entry[], uri: string): Entry | null {
	if (entryList?.length) {
		return entryList.find((entry) => entry.uri === uri) || null
	}

	return null
}

export default async function getEntryType(
	path: string,
	uri: string,
): Promise<string | null> {
	const entryList = await readDataFromDisk(path)
	const entryListItem = getEntryTypeFromList(JSON.parse(entryList), uri)

	return entryListItem?.typeHandle || null
}
