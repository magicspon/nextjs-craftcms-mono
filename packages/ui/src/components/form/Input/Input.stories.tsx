import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from '.'

export default {
	title: 'form/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
