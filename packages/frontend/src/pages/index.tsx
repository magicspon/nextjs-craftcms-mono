import * as React from 'react'
import Box from '@components/ui/Box'

function IndexPage(): JSX.Element {
	return (
		<Box>
			<p>
				The following Button resolved using built-in Next.js{' '}
				<a href="https://nextjs.org/docs/advanced-features/module-path-aliases">
					Absolute Imports
				</a>{' '}
				feature:
			</p>
			<p>The following Button resolved using custom alias configuration:</p>
		</Box>
	)
}

export default IndexPage
