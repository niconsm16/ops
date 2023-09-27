import { searchNamesOnTag } from "./../services/searchServices.mjs";
import config from "./../config/config.mjs"


export const getNames = () =>
    fetch(config.url + config.urlList)
        .then(res => res.text())
        .then(res => searchNamesOnTag(res, 'tbody'))


export const getData = (name) =>
    fetch(config.url + name)
        .then(res => res.text())
        .then(data => data)
