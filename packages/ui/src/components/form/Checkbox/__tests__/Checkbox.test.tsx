import React from 'react'
import { render, screen } from '@testing-library/react'
import Checkbox, { ICheckboxProps } from '..'

const defaultProps: ICheckboxProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Checkbox {...props} />)

describe('Checkbox', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByTestId('hello world'))
	})
})
