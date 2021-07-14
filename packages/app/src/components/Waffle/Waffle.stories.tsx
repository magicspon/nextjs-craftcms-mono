import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Waffle from '.'

export default {
	title: 'Example/Waffle',
	component: Waffle,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Waffle>

const Template: ComponentStory<typeof Waffle> = (args) => <Waffle {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
