import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Radio from '.'

export default {
	title: 'form/Radio',
	component: Radio,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
