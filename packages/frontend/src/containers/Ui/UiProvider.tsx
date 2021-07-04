import * as React from 'react'

type UiState = boolean
type UiDispatch = (arg: boolean) => void

export const UiStateContext = React.createContext<UiState>(false)

export const UiUpdateContext = React.createContext<UiDispatch | null>(null)

export function useUiState(): UiState {
	return React.useContext(UiStateContext) as UiState
}

export function useUiDispatch(): UiDispatch {
	return React.useContext(UiUpdateContext) as UiDispatch
}

export function useLoading(): [UiState, UiDispatch] {
	return [useUiState(), useUiDispatch()]
}

export interface IUiProviderProps {
	children: React.ReactNode
}

function UiProvider({ children }: IUiProviderProps): JSX.Element {
	const [value, set] = React.useState(false)

	return (
		<UiStateContext.Provider value={value}>
			<UiUpdateContext.Provider value={set}>
				{children}
			</UiUpdateContext.Provider>
		</UiStateContext.Provider>
	)
}

export default UiProvider
