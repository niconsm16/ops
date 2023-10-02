import { getData } from './../services/getServices.mjs'
import { tableDepuration, searchElement } from "../helpers/searchHelpers.mjs"
import schema from '../config/schema.mjs'


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

    const characters = []

    //# Para prueba de datos individuales descomentar esto
    //# Probar indices 0, 20, 100, 1000
    // const data = await getData(names[20])

    // const name = searchElement(data, schema.regexp.name)
    // const img = searchElement(data, schema.regexp.img)
    // const debutManga = searchElement(data, schema.regexp.debutManga)
    // const debutAnime = searchElement(data, schema.regexp.debutAnime)
    // const birthday = searchElement(data, schema.regexp.birthday)
    // const bounty = searchElement(data, schema.regexp.bounty)
    // const height = searchElement(data, schema.regexp.height)
    // const age = searchElement(data, schema.regexp.age)
    // const status = searchElement(data, schema.regexp.status)

    // console.log({ name, img, debutAnime, debutManga, birthday, bounty, height, age })
    // console.log({ status })

    //# Para prueba de guardado descomentar esto
    // const character = {
    //     name: searchElement(data, schema.regexp.name),
    //     img: searchElement(data, schema.regexp.img),
    //     debutManga: searchElement(data, schema.regexp.debutManga),
    //     debutAnime: searchElement(data, schema.regexp.debutAnime),
    //     birthday: searchElement(data, schema.regexp.birthday),
    //     bounty: searchElement(data, schema.regexp.bounty),
    //     height: searchElement(data, schema.regexp.height),
    //     age: searchElement(data, schema.regexp.age),
    //     status: searchElement(data, schema.regexp.status),
    // }
    // characters.push(character)

    //# Codigo final
    for (const name of names) {

        const data = await getData(name)

        const character = {
            name: searchElement(data, schema.regexp.name),
            img: searchElement(data, schema.regexp.img),
            debutManga: searchElement(data, schema.regexp.debutManga),
            debutAnime: searchElement(data, schema.regexp.debutAnime),
            birthday: searchElement(data, schema.regexp.birthday),
            bounty: searchElement(data, schema.regexp.bounty),
            height: searchElement(data, schema.regexp.height),
            age: searchElement(data, schema.regexp.age),
            status: searchElement(data, schema.regexp.status),
        }
        console.log(character)
        characters.push(character)
    }

    return characters
}