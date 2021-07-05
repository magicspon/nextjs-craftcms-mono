interface IPreviewDataProps {
	token: string
	typeHandle: string
}

interface IPreviewData {
	token: string | null
	typeHandle: string | null
}

export default function getPreviewToken(
	preview?: boolean,
	previewData?: IPreviewDataProps,
): IPreviewData {
	const p = previewData
	const previewToken = preview && previewData ? p?.token || null : null

	return {
		token: previewToken,
		typeHandle: p?.typeHandle || null,
	}
}
