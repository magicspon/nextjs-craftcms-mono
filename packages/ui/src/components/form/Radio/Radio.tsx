import * as React from 'react'

export interface IRadioProps {
	children: React.ReactNode
}

function Radio({ children }: IRadioProps): JSX.Element {
	return <div>{children}</div>
}

export default Radio
