import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tit from '.'

export default {
	title: 'Example/Tit',
	component: Tit,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Tit>

const Template: ComponentStory<typeof Tit> = (args) => <Tit {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'hello world',
}
