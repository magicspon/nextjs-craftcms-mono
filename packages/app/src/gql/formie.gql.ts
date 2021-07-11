import { gql } from 'graphql-request'

export const FormFragment = gql`
	fragment Fields on FieldInterface {
		handle
		type
		id
		required
		name
		placeholder
		displayName
		... on Field_Radio {
			id
			name
			options {
				label
				value
			}
		}
		... on Field_Checkboxes {
			id
			name
			options {
				value
				label
			}
		}
		... on Field_Dropdown {
			id
			name
			multiple
			options {
				label
				value
			}
		}
	}

	fragment FormFragment on Form {
		id
		handle
		pages {
			id
			rows {
				... on RowType {
					id
					fields {
						...Fields
						... on Field_Repeater {
							fields {
								...Fields
							}
						}
						... on Field_Group {
							fields {
								...Fields
							}
						}
					}
				}
			}
		}
	}
`

export const FormQuery = gql`
	${FormFragment}

	query FormieFullQuery {
		form: formieForm(handle: "contact") {
			...FormFragment
		}
	}
`
