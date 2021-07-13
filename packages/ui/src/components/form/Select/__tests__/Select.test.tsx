import React from 'react'
import { render, screen } from '@testing-library/react'
import Select, { ISelectProps } from '..'

const defaultProps: ISelectProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Select {...props} />)

describe('Select', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
