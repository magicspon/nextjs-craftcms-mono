import * as React from 'react'
import { GetStaticProps } from 'next'
import cmsClient from '@lib/cmsClient'
import { FormQuery } from '@gql/formie.gql'
import parseForm from '@utils/formie/parseForm'
import type { IForm } from '@utils/formie/parseForm'

export interface IFormieProps {
	form: IForm
}

function Formie({ form }: IFormieProps): JSX.Element {
	return <pre>{JSON.stringify(form, null, 2)}</pre>
}

export default Formie

export const getStaticProps: GetStaticProps = async () => {
	const seo = {}

	const client = cmsClient()

	const { form } = await client.request(FormQuery)

	return {
		props: {
			seo,
			form: parseForm(form),
		},
	}
}
