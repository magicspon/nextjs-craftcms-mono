import React from 'react'
import { render, screen } from '@testing-library/react'
import Input, { IInputProps } from '..'

const defaultProps: IInputProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Input {...props} />)

describe('Input', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
