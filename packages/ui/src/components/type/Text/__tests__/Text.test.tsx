import React from 'react'
import { render, screen } from '@testing-library/react'
import Text, { ITextProps } from '..'

const defaultProps: ITextProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Text {...props} />)

describe('Text', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
