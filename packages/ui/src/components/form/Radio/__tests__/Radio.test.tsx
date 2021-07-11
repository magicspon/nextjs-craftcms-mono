import React from 'react'
import { render, screen } from '@testing-library/react'
import Radio, { IRadioProps } from '..'

const defaultProps: IRadioProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Radio {...props} />)

describe('Radio', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
