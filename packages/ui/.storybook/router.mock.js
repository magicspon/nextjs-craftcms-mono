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
