import React from 'react'
import { render, screen } from '@testing-library/react'
import MagicLabel, { IMagicLabelProps } from '..'

const defaultProps: IMagicLabelProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<MagicLabel {...props} />)

describe('MagicLabel', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
