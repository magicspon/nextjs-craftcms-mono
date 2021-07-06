---
to: packages/<%= package %>/src/containers/<%= h.changeCase.pascalCase(name) %>/index.ts
---

export { default, use<%= h.changeCase.pascalCase(name)  %>State, use<%= h.changeCase.pascalCase(name)  %>Dispatch, use<%= h.changeCase.pascalCase(name)  %> } from './<%= h.changeCase.pascalCase(name) %>Provider'
export type { I<%= h.changeCase.pascalCase(name) %>ProviderProps } from './<%= h.changeCase.pascalCase(name) %>Provider'
