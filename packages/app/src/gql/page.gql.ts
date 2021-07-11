import { gql } from 'graphql-request'

export const PagePathQuery = gql`
	{
		entries(section: "pages", limit: 1000) {
			uri
			typeHandle
		}
	}
`

export const PagesPagesEntryQuery = gql`
	query PagesPagesEntryQuery($uri: [String], $seo: String) {
		entry(section: "pages", uri: $uri) {
			... on pages_pages_Entry {
				seo: seomatic(asArray: true, uri: $seo) {
					... on SeomaticType {
						metaTitleContainer
						metaTagContainer
						metaSiteVarsContainer
						metaLinkContainer
						metaJsonLdContainer
					}
				}
				title
			}
		}
	}
`

export const PagesLandingPageEntryQuery = gql`
	query PagesLandingPageEntryQuery($uri: [String], $seo: String) {
		entry(section: "pages", uri: $uri, type: "landingPages") {
			... on pages_landingPages_Entry {
				seo: seomatic(asArray: true, uri: $seo) {
					... on SeomaticType {
						metaTitleContainer
						metaTagContainer
						metaSiteVarsContainer
						metaLinkContainer
						metaJsonLdContainer
					}
				}
				title
			}
		}
	}
`

export const pageQueries = {
	pages: PagesPagesEntryQuery,
	landingPages: PagesLandingPageEntryQuery,
}
