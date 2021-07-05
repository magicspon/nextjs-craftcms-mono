import { gql } from 'graphql-request'

export const BlogPathQuery = gql`
	{
		entries(section: "blog", limit: 1000) {
			... on blog_blog_Entry {
				slug
				typeHandle
			}
		}
	}
`

export const BlogEntryQuery = gql`
	query BlogEntryQuery($uri: [String], $seo: String) {
		entry(section: "blog", uri: $uri) {
			... on blog_blog_Entry {
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

export const BlogPaginationQuery = gql`
	query BlogPaginationQuery($limit: Int, $offset: Int) {
		entries(section: "blog", limit: $limit, offset: $offset) {
			... on blog_blog_Entry {
				uri
			}
		}
		count: entryCount(section: "blog")
	}
`
