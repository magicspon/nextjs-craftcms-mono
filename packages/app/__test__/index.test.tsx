import React from 'react'
import { render, screen } from '@testing-library/react'
import Index from '../src/pages/index'

describe('Index page', () => {
	it('should render elements properly', () => {
		render(<Index />)

		expect(screen.getByText('Home page')).toBeInTheDocument()
	})
})
