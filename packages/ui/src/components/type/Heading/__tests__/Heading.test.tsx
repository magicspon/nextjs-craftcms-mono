import React from 'react'
import { render, screen } from '@testing-library/react'
import Heading, { IHeadingProps } from '..'

const defaultProps: IHeadingProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Heading {...props} />)

describe('Heading', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
