import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface IBoxProps {
	children: React.ReactNode
	src: string
}

function Box({ children, src }: IBoxProps): JSX.Element {
	return (
		<div className="bg-red-50">
			{children}
			<Link href="#0">
				<a>hello</a>
			</Link>
			<Image src={src} layout="fill" />
		</div>
	)
}

export default Box
