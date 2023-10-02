import * as lang from './config/language.mjs'

const string = '>25 (debut)<br>27 (after timeskip)<sup'
// let regexp = /(?<=>).*?(?=\<sup)/
let regexp = /[0-9]{1,}/
const result = regexp.exec(string)
console.log(result)

// console.log(lang.)
