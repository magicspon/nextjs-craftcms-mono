import { gql } from 'graphql-request'

export const GlobalDataQuery = gql`
	{
		globalSet(handle: "contact") {
			... on contact_GlobalSet {
				email
				address
				tel
			}
		}
	}
`
