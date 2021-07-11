import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Toggle from '.'

export default {
	title: 'form/Toggle',
	component: Toggle,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
