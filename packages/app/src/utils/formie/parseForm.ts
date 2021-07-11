import * as R from 'ramda'
import type * as T from '@defs/formie'
import createFormMutation from '@utils/formie/createFormMutation'

const cleanType = (field: T.IField) => ({
	...field,
	type: R.replace('verbb\\formie\\fields\\formfields\\', '', field.type),
})

const parseFields = R.map((field: T.IField) => {
	const { fields } = field
	const cleanField = cleanType(field)

	if (fields) {
		return {
			...cleanField,
			fields: R.map(cleanType, fields),
		}
	}

	return cleanField
})

const parseRows = R.map((row: T.IRow) => ({
	id: row.id,
	fields: parseFields(row.fields),
}))

const parsePages = R.map((page: T.IPage) => {
	const { rows } = page

	return {
		id: page.id,
		rows: parseRows(rows),
	}
})

export interface IForm extends T.IForm {
	mutation: string
}

export default function parseForm(form: T.IForm): IForm {
	const { pages, id, handle } = form

	return {
		id,
		handle,
		mutation: createFormMutation(form),
		pages: parsePages(pages),
	}
}
