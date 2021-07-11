import * as React from 'react'

export interface IProseProps {
	children: React.ReactNode
}

function Prose({ children }: IProseProps): JSX.Element {
	return <div>{children}</div>
}

export default Prose
