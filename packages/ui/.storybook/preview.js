import '../src/styles/index.css'

import * as Image from 'next/image'
import * as Link from 'next/link'

Object.defineProperty(Image, 'default', {
	configurable: true,
	value: (props) => <img {...props} />,
})

Object.defineProperty(Link, 'default', {
	configurable: true,
	value: (props) => props.children,
})

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
