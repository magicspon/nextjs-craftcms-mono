import React from 'react'
import { render, screen } from '@testing-library/react'
import Toggle, { IToggleProps } from '..'

const defaultProps: IToggleProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Toggle {...props} />)

describe('Toggle', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
