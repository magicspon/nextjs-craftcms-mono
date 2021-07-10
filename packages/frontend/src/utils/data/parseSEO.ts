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

	const meta = R.values(metaTagContainer).filter(filterEmptyValues)
	const links = R.values(metaLinkContainer).filter(filterEmptyValues)
	const jsonLd = R.values(metaJsonLdContainer).filter(filterEmptyValues)

	return {
		title: metaTitleContainer.title.title,
		meta,
		links,
		jsonLd,
	}
}
