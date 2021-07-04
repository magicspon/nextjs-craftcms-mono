---
to: packages/<%= package %>/src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import * as React from 'react'

export interface I<%= h.changeCase.pascalCase(name) %>Props {
	children: React.ReactNode
}

function <%= h.changeCase.pascalCase(name) %>({ children }: I<%= h.changeCase.pascalCase(name) %>Props) : JSX.Element {
  return (
    <div>{children}</div>
  )
}

export default <%= h.changeCase.pascalCase(name) %>
