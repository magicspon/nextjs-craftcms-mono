import * as React from 'react'
import type { AppProps } from 'next/app'
import '@styles/index.css'

export default function AppRoot({
	Component,
	pageProps,
}: AppProps): JSX.Element {
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}
