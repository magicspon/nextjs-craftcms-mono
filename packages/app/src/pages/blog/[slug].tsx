import * as React from 'react'
import * as R from 'ramda'
import { GetStaticProps, GetStaticPaths } from 'next'
import cmsClient from '@lib/cmsClient'
import {
	BlogPathQuery,
	BlogEntryQuery,
	BlogPaginationQuery,
} from '@gql/blog.gql'
import getPreviewToken from '@utils/data/getPreviewToken'
import getEntryType from '@utils/data/getEntryType'
import writeDataToDisk from '@utils/data/writeDataToDisk'
import parseSEO from '@utils/data/parseSEO'

export interface IBlogPostProps {
	type: 'post' | 'pagination'
	[k: string]: any
}

function BlogPost(props: IBlogPostProps): JSX.Element {
	return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default BlogPost

type TEntry = {
	slug: string
}

type TResponse = {
	entries: TEntry[]
}

const PER_PAGE = 3

export const getStaticProps: GetStaticProps = async ({
	params,
	preview,
	previewData,
}) => {
	// no params.. go home
	if (!params) {
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
	const slug = params.slug as string
	const uri = `blog/${slug}`

	const pageNo = Number(slug)
	// if it's a number, then it's a pagination page
	const isPaginationPage = !Number.isNaN(pageNo)

	if (isPaginationPage) {
		// set the offset for the pagination query
		const offset = (pageNo - 1) * PER_PAGE

		const { entries, count } = await client.request(BlogPaginationQuery, {
			offset,
			limit: PER_PAGE,
		})

		return {
			props: {
				type: 'pagination',
				pageNo,
				totalPages: Math.ceil(count / PER_PAGE),
				entries,
			},
		}
	}

	// if it's preview mode, use the typeHandle passed from the preview api
	// if we're building/dev mode, find the typeHandle from the data written to file
	const entryType = preview ? typeHandle : await getEntryType('blog.data', uri)
	const { entry } = await client.request(BlogEntryQuery, {
		uri,
		seo: uri,
	})

	const { seo, ...pageProps } = entry

	return {
		props: {
			seo: parseSEO(seo),
			type: 'post',
			...pageProps,
			typeHandle: entryType || null,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const client = cmsClient()
	const { entries }: TResponse = await client.request(BlogPathQuery)
	const paths = entries.map((entry) => ({ params: { slug: entry.slug } }))

	await writeDataToDisk(
		JSON.stringify(
			entries.map(({ slug, ...entry }) => ({
				...entry,
				uri: `blog/${slug}`,
			})),
		),
		'blog.data',
	)

	const pages = R.splitEvery(PER_PAGE, paths)
	const paginatedPage = pages.map((_, index) => ({
		params: { slug: `${index + 1}` },
	}))

	return {
		paths: [...paths, ...paginatedPage],
		fallback: false,
	}
}
