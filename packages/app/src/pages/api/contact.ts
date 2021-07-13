import type { NextApiRequest, NextApiResponse } from 'next'
import cmsClient from '@lib/cmsClient'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<JSON | void> {
	if (req.method === 'POST') {
		try {
			const client = cmsClient()
			const { mutation, body } = JSON.parse(req.body)

			await client.request(mutation, body)

			return res.status(200).json({ success: true })
		} catch (err) {
			return res.status(500).json({ error: err.toString() })
		}
	} else {
		return res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
