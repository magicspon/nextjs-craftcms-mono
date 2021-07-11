/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useRouter = () => ({
	path: '/',
	asPath: '/',
	query: {},
	events: {
		on: () => {},
		off: () => {},
	},
	push() {
		return new Promise((resolve) => resolve())
	}, //
})

export default {}
