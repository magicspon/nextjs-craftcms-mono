import * as React from 'react'

export interface IToggleProps {
	children: React.ReactNode
}

function Toggle({ children }: IToggleProps): JSX.Element {
	return <div>{children}</div>
}

export default Toggle
