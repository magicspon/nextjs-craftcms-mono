import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from '.'

export default {
	title: 'type/Heading',
	component: Heading,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
