export default async function fetcher(
	url: string,
	input: string,
): Promise<any> {
	const response = await fetch(url, {
		method: 'POST',
		body: input,
	})

	if (!response.ok) {
		const info = await response.json()
		const error = new Error(info.error)

		throw error
	}

	return response.json()
}
