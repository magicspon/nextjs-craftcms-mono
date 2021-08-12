---
to: "<%= storybook ? `packages/${package}/src/components/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.stories.tsx` : null %>"
---
import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'

import type { I<%= h.changeCase.pascalCase(name) %>Props } from '.'
import <%= h.changeCase.pascalCase(name) %> from '.'

export default {
	component: <%= h.changeCase.pascalCase(name) %>,
	title: 'core/<%= h.changeCase.pascalCase(name) %>',
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>

const Template: Story<I<%= h.changeCase.pascalCase(name) %>Props> = (args) => <<%= h.changeCase.pascalCase(name) %> {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'hello world' }
