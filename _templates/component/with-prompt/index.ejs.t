---
to: packages/<%= package %>/src/components/<%= h.changeCase.pascalCase(name) %>/index.ts
---

export { default } from './<%= h.changeCase.pascalCase(name) %>'
export type { I<%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>'
