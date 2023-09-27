import { getNames } from './services/getServices.mjs'
import { searchInfo } from './services/searchServices.mjs'

const names = await getNames()

searchInfo(names)


