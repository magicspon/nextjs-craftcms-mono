import * as React from 'react'

export interface IBoxProps {
	children: React.ReactNode
}

function Box({ children }: IBoxProps): JSX.Element {
	return <div className="bg-red-50">{children}</div>
}

export default Box
