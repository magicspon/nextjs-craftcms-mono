import * as React from 'react'
import { GetStaticProps } from 'next'
import cmsClient from '@lib/cmsClient'
import getPreviewToken from '@utils/data/getPreviewToken'
import { HomeEntryQuery } from '@gql/home.gql'
import parseSEO from '@utils/data/parseSEO'

export interface IPageProps {
	[k: string]: any
}

function Index({ text, ...props }: IPageProps): JSX.Element {
	return (
		<div className="flex text-red-500 bg-spam">
			<p>{text}</p>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	)
}

export default Index

export const getStaticProps: GetStaticProps = async ({
	preview,
	previewData,
}) => {
	const { token } = getPreviewToken(
		preview,
		previewData as {
			token: string
			typeHandle: string
		},
	)

	const client = cmsClient(token)
	const { entry } = await client.request(HomeEntryQuery)
	const { seo, ...pageProps } = entry

	console.log('HELLO')

	return {
		props: {
			seo: parseSEO(seo),
			...pageProps,
			text: 'Home page',
		},
	}
}
