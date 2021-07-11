import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from '.'

export default {
	title: 'form/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
