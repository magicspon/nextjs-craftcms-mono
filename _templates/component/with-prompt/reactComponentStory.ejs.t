---
to: packages/<%= package %>/src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';

export default {
  title: 'Example/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args) => <<%= h.changeCase.pascalCase(name) %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'hello world'
};
