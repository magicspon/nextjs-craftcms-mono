---
to: packages/<%= package %>/src/hooks/use<%= h.changeCase.pascalCase(name) %>/index.ts
---

export { default } from './use<%= h.changeCase.pascalCase(name) %>'
export type { Iuse<%= h.changeCase.pascalCase(name) %>, Iuse<%= h.changeCase.pascalCase(name) %>Props } from './use<%= h.changeCase.pascalCase(name) %>'
