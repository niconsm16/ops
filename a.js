let regexp
let a = ' aaaabcdgcbda'
regexp = /(cd.*)$/
console.log(regexp.exec(a))

regexp = /^(.*cd)/
console.log(regexp.exec(a))