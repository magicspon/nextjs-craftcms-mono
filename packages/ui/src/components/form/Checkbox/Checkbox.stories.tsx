import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '.'

export default {
	title: 'form/Checkbox',
	component: Checkbox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
