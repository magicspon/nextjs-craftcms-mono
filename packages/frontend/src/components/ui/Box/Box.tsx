import * as React from 'react'
import Icon from '@svgs/delete.svg'

interface IBox {
	children: React.ReactNode
}

export default function IBox({ children }: IBox): JSX.Element {
	return (
		<div className="text-white bg-blue-500">
			{children} <Icon />
		</div>
	)
}
