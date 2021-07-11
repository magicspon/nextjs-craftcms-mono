import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Prose from '.'

export default {
	title: 'type/Prose',
	component: Prose,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Prose>

const Template: ComponentStory<typeof Prose> = (args) => <Prose {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
