import { getNames } from './services/getServices.mjs'
import { searchInfo } from './services/searchServices.mjs'
import { saveToJSON } from './services/saveServices.mjs'
import errors from './error/errors.mjs'

const names = await getNames()

const data = await searchInfo(names)

saveToJSON('characters', data, errors.errorFile)
