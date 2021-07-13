---
to: packages/<%= package %>/src/hooks/use<%= h.changeCase.pascalCase(name)  %>/use<%= h.changeCase.pascalCase(name)  %>.tsx
---
import * as React from 'react'

export interface I<%= h.changeCase.pascalCase(name) %>Props {
	initialIndex: number
}

export interface I<%= h.changeCase.pascalCase(name) %> {
	count: number
	increment: () => void
}

function use<%= h.changeCase.pascalCase(name) %>({ initialIndex }: I<%= h.changeCase.pascalCase(name) %>Props) : I<%= h.changeCase.pascalCase(name) %> {
  const [count, setCount] = React.useState(initialIndex)

  const increment = React.useCallback(() => setCount((x) => x + 1), [])

  return { count, increment }
}

export default use<%= h.changeCase.pascalCase(name) %>
