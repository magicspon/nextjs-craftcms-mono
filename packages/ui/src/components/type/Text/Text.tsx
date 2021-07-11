import * as React from 'react'

export interface ITextProps {
	children: React.ReactNode
}

function Text({ children }: ITextProps): JSX.Element {
	return <div>{children}</div>
}

export default Text
