import * as React from 'react'

export interface IHeadingProps {
	children: React.ReactNode
}

function Heading({ children }: IHeadingProps): JSX.Element {
	return <div>{children}</div>
}

export default Heading
