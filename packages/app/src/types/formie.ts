export interface IOption {
	value: string
	label: string
}

export interface IFieldNode {
	handle: string
	type: string
	id: string
	required: boolean
	name: string
	placeholder: any
	displayName: string
	options?: IOption[]
}

export interface IField extends IFieldNode {
	fields?: IFieldNode[]
}
export interface IRow {
	id: string
	fields: IField[]
}

export interface IPage {
	id: string
	rows: IRow[]
}

export interface IForm {
	id: string
	handle: string
	pages: IPage[]
}

export interface IFormKeys {
	handle: string
	type: string
}
