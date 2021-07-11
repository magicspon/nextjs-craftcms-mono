import * as React from 'react'
import Box from '@ui/components/Box'
import DeleteIcon from '@svgs/delete.svg'

export interface IBoxProps {
	children: React.ReactNode
}

export default function IBox({ children }: IBoxProps): JSX.Element {
	return (
		<Box>
			{children} <DeleteIcon />
		</Box>
	)
}
