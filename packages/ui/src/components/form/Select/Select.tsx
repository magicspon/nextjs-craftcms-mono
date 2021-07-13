import * as React from 'react'

export interface ISelectProps {
	children: React.ReactNode
}

function Select({ children }: ISelectProps): JSX.Element {
	return <div>{children}</div>
}

export default Select
