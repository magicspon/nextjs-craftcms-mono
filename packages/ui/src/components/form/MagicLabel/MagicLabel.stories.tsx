import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MagicLabel from '.'

export default {
	title: 'form/MagicLabel',
	component: MagicLabel,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MagicLabel>

const Template: ComponentStory<typeof MagicLabel> = (args) => (
	<MagicLabel {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
