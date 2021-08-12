import * as R from 'ramda'

interface ISeoProps {
	metaTitleContainer: string
	metaTagContainer: string
	metaLinkContainer: string
	metaJsonLdContainer: string
}

type Meta = { [k: string]: any }

type TSEO = {
	metaTitleContainer: {
		title: {
			title: string
		}
	}
	metaTagContainer: Meta
	metaLinkContainer: Meta
	metaJsonLdContainer: Meta
}

export interface ISEO {
	title: string
	meta: Meta[]
	links: Meta[]
	jsonLd: Meta[]
}

const filterEmptyValues = (item: any): boolean => item?.length !== 0

const flattenValues = R.pipe(R.values, R.filter(filterEmptyValues), R.flatten)

export default function parseSEO(seo: ISeoProps): ISEO {
	const parsed = R.toPairs(seo).reduce<TSEO>(
		(acc, [key, value]) => ({ ...acc, [key]: JSON.parse(value) }),
		{} as TSEO,
	)

	const {
		metaTitleContainer,
		metaTagContainer,
		metaLinkContainer,
		metaJsonLdContainer,
	} = parsed

	const meta = flattenValues(metaTagContainer)
	const links = flattenValues(metaLinkContainer)
	const jsonLd = flattenValues(metaJsonLdContainer)

	return {
		title: metaTitleContainer.title.title,
		meta,
		links,
		jsonLd,
	}
}
