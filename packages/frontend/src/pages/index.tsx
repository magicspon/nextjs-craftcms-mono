import * as React from 'react'
import { GetStaticProps } from 'next'
import cmsClient from '@lib/cmsClient'
import getPreviewToken from '@utils/getPreviewToken'
import { HomeEntryQuery } from '@gql/home.gql'
import parseSEO from '@utils/parseSEO'

export interface IPageProps {
	[k: string]: any
}

function Index(props: IPageProps): JSX.Element {
	return <pre>{JSON.stringify(props, null, 2)}</pre>
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

	return {
		props: {
			seo: parseSEO(seo),
			...pageProps,
		},
	}
}
