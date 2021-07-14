import * as React from 'react'

export interface IWaffleProps {
	children: React.ReactNode
}

function Waffle({ children }: IWaffleProps): JSX.Element {
	return <div>{children}</div>
}

export default Waffle
