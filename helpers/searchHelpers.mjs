import regexp from './../config/regexp.mjs'


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
 * 
 * @param {string} data block obtained for the page 
 * @returns {string} link of the character image
 */
export const searchImage = (data, selection) => {

    const indexStart = data.indexOf(selection) + selection.length
    const cutData = data.substring(indexStart, indexStart + 400)

    const indexEnd = cutData.indexOf('.png')
    const link = cutData.slice(0, indexEnd + 4)

    return link
}

/**
 * Search Debut in Manga and Anime
 * @param {string} data block obtained for the page 
 * @param {string} selection to search and limit the search 
 * @returns {[string, string]} an array with debut of manga - episode 
 */
export const searchDebut = (data, selection) => {

    const indexStart = data.indexOf(selection) + selection.length
    const content = data.substring(indexStart, indexStart + 400)

    let res = regexp.chapter.exec(content)
    let res2 = regexp.number.exec(res)[0]

    let res3 = regexp.episode.exec(content)
    let res4 = regexp.number.exec(res3)[0]

    return [res2, res4]
}