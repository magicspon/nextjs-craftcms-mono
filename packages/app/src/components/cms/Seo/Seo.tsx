import * as React from 'react'
import Head from 'next/head'

type Meta = { content: string; [k: string]: any }

export interface ISeoProps {
	title: string
	meta: Meta[]
	links: Meta[]
	jsonLd: Meta[]
}

function Seo({ title, meta, links, jsonLd }: ISeoProps): JSX.Element {
	return (
		<Head>
			<title>{title}</title>
			{meta?.map((item) => (
				<meta key={item.content} {...item} />
			))}
			{links?.map((item) => (
				<link key={item.href} {...item} />
			))}
			{jsonLd?.map((item) => (
				<script key={item['@context']} type="application/ld+json">
					{JSON.stringify(item)}
				</script>
			))}
		</Head>
	)
}

export default Seo
