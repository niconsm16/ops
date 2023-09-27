import { getData } from './../services/getServices.mjs'
import { tableDepuration, searchImage, searchDebut } from "../helpers/searchHelpers.mjs"


/**
 * Search the character name in a tag
 * @param {string} text Text to analize 
 * @param {string} tag tag to search info 
 * @returns {string[]} Return a collection of character names available
 */
export const searchNamesOnTag = (text, tag) => {

    const tagExist = text.includes(tag)
    let names = []

    if (tagExist) {

        const indexStart = text.indexOf('<' + tag)
        const indexEnd = text.indexOf('</' + tag)

        const selection = text.substring(indexStart, indexEnd)
        const rows = selection.split('<tr>')

        names = tableDepuration(rows, 'title', 'Chapter')
    }
    return names
}



export const searchInfo = async (names) => {

    if (names.length <= 0)
        return console.log('No se obtuvieron nombres')

    // Iterar
    const data = await getData(names[0])
    // const data = await getData(names[1])
    // const data = await getData(names[10])
    // const data = await getData(names[100])
    // const data = await getData(names[1000])
    const img = searchImage(data, '<img src="')
    const debutManga = searchDebut(data, 'Debut')
    console.log(debutManga)

}