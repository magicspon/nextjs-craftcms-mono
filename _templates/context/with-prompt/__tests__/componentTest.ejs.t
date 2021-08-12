---
to: packages/<%= package %>/src/containers/<%= h.changeCase.pascalCase(name) %>/__tests__/<%= h.changeCase.pascalCase(name) %>.test.tsx
---
import React from 'react';
import <%= h.changeCase.pascalCase(name) %>, { I<%= h.changeCase.pascalCase(name) %>Props } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: I<%= h.changeCase.pascalCase(name) %>Props = {
  children: 'hello world'
};

const setup = (props = defaultProps) => render(<<%= h.changeCase.pascalCase(name) %> {...props} />);

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('renders', () => {
    setup({children: 'hello world'});
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });
});
