import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Box from '.'

export default {
	title: 'Example/Button',
	component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: <p>I am a button</p>,
}
