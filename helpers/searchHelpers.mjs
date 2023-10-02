import regexp from './../config/regexp.mjs'
import config from './../config/config.mjs'
import * as language from './../config/language.mjs'

/**
 * 
 * @param {string[]} rows Cutting trs 
 * @param {string} attr Attribute that depure
 * @param {string} except value that excludes in depuration
 * @returns {string[]} an array with names found or an empty array
 */
export const tableDepuration = (rows, attr, except) => {

    const names = []
    // console.log(rows[1])
    for (const row of rows) {

        const columns = row.split('<td')
        const columnSelect = [columns[2]].toString()

        const columnClean = columnSelect.split(`${attr}="`)
        const title = [columnClean[1]].toString()

        const nameClean = title.split('"')
        const name = [nameClean[0]].toString()

        if (!name.includes(except) && name !== '')
            names.push(name)
    }
    return names
}


/**
 * A searcher in a long string
 * @param {string} data block obtained for the page 
 * @param {object} schema a schema of selection start and array of regexps
 * @returns {string} link of the character image
 */
export const searchElement = (data, { start, regexp: re }) => {

    const indexStart = data.indexOf(start) + start.length
    const indexEnd = indexStart + config.defaultValues.captureLength
    let target = data.substring(indexStart, indexEnd)

    for (const e of re) {
        target = regexp[e].exec(target)
        target = target !== null ? target[0] : target
    }

    return target || language[config.language].noInfo
}
