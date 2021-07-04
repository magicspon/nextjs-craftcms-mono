import * as React from 'react'

interface IBox {
	children: React.ReactNode
}

export default function IBox({ children }: IBox): JSX.Element {
	return <div className="bg-blue-500 text-white">{children}</div>
}
