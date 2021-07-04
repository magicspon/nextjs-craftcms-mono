import React from 'react'
import Ui, { IUiProps } from '..'
import { render, screen } from '@testing-library/react'

const defaultProps: IUiProps = {
	children: 'hello world',
}

const setup = (props = defaultProps) => render(<Ui {...props} />)

describe('Ui', () => {
	it('renders', () => {
		setup({ children: 'hello world' })
		expect(screen.getByText('hello world'))
	})
})
