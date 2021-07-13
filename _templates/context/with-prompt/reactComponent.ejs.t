---
to: packages/<%= package %>/src/containers/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>Provider.tsx
---
import * as React from 'react'

type <%= h.changeCase.pascalCase(name)  %>State = boolean
type <%= h.changeCase.pascalCase(name)  %>Dispatch = (arg: boolean) => void

export const <%= h.changeCase.pascalCase(name)  %>StateContext = React.createContext<<%= h.changeCase.pascalCase(name)  %>State>(false)

export const <%= h.changeCase.pascalCase(name)  %>UpdateContext =
	React.createContext<<%= h.changeCase.pascalCase(name)  %>Dispatch | null>(null)

export function use<%= h.changeCase.pascalCase(name)  %>State(): <%= h.changeCase.pascalCase(name)  %>State {
	return React.useContext(<%= h.changeCase.pascalCase(name)  %>StateContext) as <%= h.changeCase.pascalCase(name)  %>State
}

export function use<%= h.changeCase.pascalCase(name)  %>Dispatch(): <%= h.changeCase.pascalCase(name)  %>Dispatch {
	return React.useContext(<%= h.changeCase.pascalCase(name)  %>UpdateContext) as <%= h.changeCase.pascalCase(name)  %>Dispatch
}

export function use<%= h.changeCase.pascalCase(name)  %>(): [<%= h.changeCase.pascalCase(name)  %>State, <%= h.changeCase.pascalCase(name)  %>Dispatch] {
	return [use<%= h.changeCase.pascalCase(name)  %>State(), use<%= h.changeCase.pascalCase(name)  %>Dispatch()]
}

export interface I<%= h.changeCase.pascalCase(name)  %>ProviderProps {
	children: React.ReactNode
}

function <%= h.changeCase.pascalCase(name)  %>Provider({ children }: I<%= h.changeCase.pascalCase(name)  %>ProviderProps): JSX.Element {
	const [value, set] = React.useState(false)

	return (
		<<%= h.changeCase.pascalCase(name)  %>StateContext.Provider value={value}>
			<<%= h.changeCase.pascalCase(name)  %>UpdateContext.Provider value={set}>
				{children}
			</<%= h.changeCase.pascalCase(name)  %>UpdateContext.Provider>
		</<%= h.changeCase.pascalCase(name)  %>StateContext.Provider>
	)
}

export default <%= h.changeCase.pascalCase(name) %>Provider
