import * as React from 'react'

export interface IInputProps {
	children: React.ReactNode
}

function Input({ children }: IInputProps): JSX.Element {
	return <div>{children}</div>
}

export default Input
