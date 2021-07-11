import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Textarea from '.'

export default {
	title: 'form/Textarea',
	component: Textarea,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
