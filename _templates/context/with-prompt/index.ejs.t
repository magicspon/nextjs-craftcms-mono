---
to: packages/<%= package %>/src/containers/<%= h.changeCase.pascalCase(name) %>/index.ts
---

export { default } from './<%= h.changeCase.pascalCase(name) %>Provider'
export type { I<%= h.changeCase.pascalCase(name) %>ProviderProps } from './<%= h.changeCase.pascalCase(name) %>Provider'
