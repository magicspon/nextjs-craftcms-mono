import * as React from 'react'
import Tit from '@ui/components/Tit'

export interface IBoxProps {
	children: React.ReactNode
}

function Box({ children }: IBoxProps): JSX.Element {
	return <Tit>{children}</Tit>
}

export default Box
