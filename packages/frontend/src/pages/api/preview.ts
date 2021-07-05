import type { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'
import cmsClient from '@lib/cmsClient'
import * as R from 'ramda'

export default async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> => {
	const { token } = req.query

	if (!token) {
		res.status(401).json({ message: 'Token missing' })
		return
	}
	if (!req.query.entryUid) {
		res.status(401).json({ message: 'Not allowed to access this route' })
		return
	}

	const secret = Array.isArray(token) ? R.last(token) : token

	const client = cmsClient(secret)

	const pageQuery = gql`
		query ($uid: [String]) {
			entry(uid: $uid, status: null) {
				id
				uri
				typeHandle
			}
		}
	`

	const data = await client.request(pageQuery, {
		uid: req.query.entryUid,
	})

	if (!data?.entry?.uri) {
		res.status(404).json({
			message: `URL of the entry ${req.query.entryUid} could not be fetched`,
		})
		return
	}

	res.setPreviewData({
		token: secret,
		typeHandle: data?.entry?.typeHandle,
	})

	const {
		entry: { uri },
	} = data

	const isHome = uri === '__home__'

	const location = `/${isHome ? '' : uri}`

	// Redirect to the path from the fetched url
	res.writeHead(307, { Location: location })
	res.end()
}
