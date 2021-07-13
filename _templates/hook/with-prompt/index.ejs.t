---
to: packages/<%= package %>/src/hooks/use<%= h.changeCase.pascalCase(name) %>/index.ts
---

export { default } from './use<%= h.changeCase.pascalCase(name) %>'
export type { I<%= h.changeCase.pascalCase(name) %>, I<%= h.changeCase.pascalCase(name) %>Props } from './use<%= h.changeCase.pascalCase(name) %>'
