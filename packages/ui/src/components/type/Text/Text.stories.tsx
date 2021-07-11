import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from '.'

export default {
	title: 'type/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
