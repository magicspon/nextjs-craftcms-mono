import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../Waffle.stories'

const { Primary } = composeStories(stories)

describe('Waffle', () => {
	it('renders', () => {
		render(<Primary />)
		expect(screen.getByText('hello world'))
	})
})
