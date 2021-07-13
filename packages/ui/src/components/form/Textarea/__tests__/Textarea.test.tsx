import React from 'react'
import { render, screen } from '@testing-library/react'
import Textarea, { ITextareaProps } from '..'

const defaultProps: ITextareaProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Textarea {...props} />)

describe('Textarea', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
