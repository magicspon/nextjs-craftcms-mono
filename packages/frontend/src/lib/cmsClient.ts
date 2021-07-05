import { GraphQLClient } from 'graphql-request'

interface IHeaders {
	authorization: string
	[k: string]: any
}

export default function main(
	preview?: string | null,
	token?: string,
): GraphQLClient {
	const endpoints = `${process.env.CRAFT_CMS_GRAPHQL_ENDPOINT}`
	const src = preview
		? `${endpoints}?x-craft-live-preview=${preview}`
		: endpoints

	const headers: IHeaders = {
		authorization: `Bearer ${process.env.CRAFT_CMS_GRAPHQL_TOKEN || token}`,
	}

	if (preview) {
		headers['x-craft-token'] = preview
	}

	const graphQLClient = new GraphQLClient(src, {
		headers,
	})

	return graphQLClient
}
