import * as React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import cmsClient from '@lib/cmsClient'
import getPreviewToken from '@utils/data/getPreviewToken'
import getEntryType from '@utils/data/getEntryType'
import writeDataToDisk from '@utils/data/writeDataToDisk'
import { PagePathQuery, pageQueries } from '@gql/page.gql'
import parseSEO from '@utils/data/parseSEO'

export interface IPageProps {
	type: 'post' | 'pagination'
	[k: string]: any
}

function Page(props: IPageProps): JSX.Element {
	return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default Page

export const getStaticProps: GetStaticProps = async ({
	params,
	preview,
	previewData,
}) => {
	// no params.. go home
	if (!params || !params?.page) {
		return {
			notFound: true,
		}
	}
	// if we are in preview mode, get the token from the previewData
	const { token, typeHandle } = getPreviewToken(
		preview,
		previewData as {
			token: string
			typeHandle: string
		},
	)
	const client = cmsClient(token)
	const page = params.page as string[]
	const uri = page.join('/')

	// if it's preview mode, use the typeHandle passed from the preview api
	// if we're building/dev mode, find the typeHandle from the data written to file
	const entryType = preview ? typeHandle : await getEntryType('pages.data', uri)
	const type = entryType || 'pages'
	const query = pageQueries[type as 'pages' | 'landingPages']
	const { entry } = await client.request(query, {
		uri,
		seo: uri,
	})
	const { seo, ...pageProps } = entry

	return {
		props: {
			seo: parseSEO(seo),
			...pageProps,
			entryType,
		},
	}
}

type TEntry = {
	uri: string
}

type TResponse = {
	entries: TEntry[]
}

export const getStaticPaths: GetStaticPaths = async () => {
	const client = cmsClient()
	const { entries }: TResponse = await client.request(PagePathQuery)
	const paths = entries.map((entry) => ({
		params: { page: entry.uri.split('/') },
	}))

	await writeDataToDisk(JSON.stringify(entries), 'pages.data')

	return {
		paths,
		fallback: false,
	}
}
