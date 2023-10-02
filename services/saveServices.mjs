import fs from 'fs'

export const saveToTXT = (name, data, err) =>
    fs.writeFile(`/data/${name}.txt`, data, { flag: 'wx' }, err)

export const saveToJSON = (name, data, err) =>
    fs.writeFile(`data/${name}.json`, JSON.stringify(data), { flag: 'w' }, err)
