import * as R from 'ramda'
import type * as T from '@defs/formie'

function getFormFieldMeta(input: T.IForm): T.IFormKeys[] {
	const { pages } = input

	const rows = R.pipe<T.IPage[], T.IRow[][], T.IField[][], T.IFormKeys[]>(
		R.pluck('rows'),
		R.chain(R.pluck('fields')),
		R.chain(R.map(({ handle, type }) => ({ handle, type }))),
	)(pages)

	return rows
}

function createMutationHandle({ handle }: T.IForm): string {
	return `save_${handle}_Submission`
}

interface IGetInputTypes {
	handle: string
	type: string
	formHandle: string
}

function getInputType({ type, handle, formHandle }: IGetInputTypes): string {
	return (
		{
			'verbb\\formie\\fields\\formfields\\Name': `${formHandle}_${handle}_FormieNameInput`,
			'verbb\\formie\\fields\\formfields\\Address': `${formHandle}_${handle}_FormieAddressInput`,
			'verbb\\formie\\fields\\formfields\\Repeater': `${formHandle}_${handle}_FormieRepeaterInput`,
			'verbb\\formie\\fields\\formfields\\Group': `${formHandle}_${handle}_FormieGroupInput`,
			'verbb\\formie\\fields\\formfields\\Checkboxes': `[String]`,
			'verbb\\formie\\fields\\formfields\\Number': `Number`,
		}[type] || 'String'
	)
}

const join = R.join(', ')

function createMutationTypes(input: T.IForm): string {
	return R.pipe(
		getFormFieldMeta,
		R.map(
			({ handle, type }) =>
				`$${handle}: ${getInputType({
					type,
					handle,
					formHandle: input.handle,
				})}`,
		),
		join,
	)(input)
}

function createMutationValues(input: T.IForm): string {
	const keys = R.pipe(
		getFormFieldMeta,
		R.pluck('handle'),
		R.map((key) => `${key}: $${key}`),
		join,
	)(input)

	return keys
}

export default function createMutation(form: T.IForm): string {
	const mutationTypes = createMutationTypes(form)
	const mutationHandle = createMutationHandle(form)
	const mutationValues = createMutationValues(form)

	return `
		mutation FormMutation(${mutationTypes}) {
			${mutationHandle}(${mutationValues}) {
				id
			}
		}
	`
}
