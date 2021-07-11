import * as React from 'react'

export interface IMagicLabelProps {
	children: React.ReactNode
}

function MagicLabel({ children }: IMagicLabelProps): JSX.Element {
	return <div>{children}</div>
}

export default MagicLabel
