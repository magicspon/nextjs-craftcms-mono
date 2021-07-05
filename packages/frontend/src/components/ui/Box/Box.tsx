import * as React from 'react'
import Icon from '@svgs/delete.svg'

export interface IBoxProps {
	children: React.ReactNode
}

export default function IBox({ children }: IBoxProps): JSX.Element {
	return (
		<div className="text-white bg-blue-500">
			{children} <Icon />
		</div>
	)
}
