import React from 'react'
import { render, screen } from '@testing-library/react'
import Prose, { IProseProps } from '..'

const defaultProps: IProseProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Prose {...props} />)

describe('Prose', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
