import * as React from 'react'
import type { AppProps } from 'next/app'
import '../styles/index.css'
import Seo from '@components/cms/Seo'
// import globalData from '@data/global.data.json'

export default function AppRoot({
	Component,
	pageProps,
}: AppProps): JSX.Element {
	const { seo, ...props } = pageProps

	return (
		<>
			<Seo {...seo} />
			<Component {...props} />
		</>
	)
}
