import * as React from 'react'
import DeletIcon from '@ui/svgs/delete.svg'

export interface ICheckboxProps {
	children: React.ReactNode
}

function Checkbox({ children }: ICheckboxProps): JSX.Element {
	return (
		<div>
			{children} <DeletIcon data-testid="hello world" />
		</div>
	)
}

export default Checkbox
