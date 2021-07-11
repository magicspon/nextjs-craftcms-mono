import * as React from 'react'

export interface ITextareaProps {
	children: React.ReactNode
}

function Textarea({ children }: ITextareaProps): JSX.Element {
	return <div>{children}</div>
}

export default Textarea
