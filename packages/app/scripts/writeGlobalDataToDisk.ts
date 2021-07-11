import path from 'path'
import dotenv from 'dotenv'
import { GlobalDataQuery } from '../src/gql/global.gql'
import cmsClient from '../src/lib/cmsClient'
import writeDataToDisk from '../src/utils/data/writeDataToDisk'

const envFile = path.resolve(process.cwd(), '.env.local')

dotenv.config({ path: envFile })

async function main(): Promise<void> {
	const client = cmsClient()
	const data = await client.request(GlobalDataQuery)

	await writeDataToDisk(JSON.stringify(data), 'global.data')
}

main()
