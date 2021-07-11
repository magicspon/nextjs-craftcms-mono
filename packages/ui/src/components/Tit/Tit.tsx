import * as React from 'react'

export interface ITitProps {
	children: React.ReactNode
}

function Tit({ children }: ITitProps): JSX.Element {
	return <div>{children}</div>
}

export default Tit
