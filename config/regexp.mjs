const regexp = {
    number: /[0-9]{1,}/,
    chapter: /Chapter_[0-9]{1,}/,
    episode: /Episode_[0-9]{1,}/,
    closeTag: /.*?(?=\<\/)/,
    bounty: /(?<=\/span>).*?(?=<sup)/,
    age: /(?<=>).*?(?=<sup)/,
    height: /(?<=>).*?(?=<sup)/,
    status: /(?<=pi-font">).*?(?=\<\/)/,
    cursive: /(?<=\<i>\<i>).*?(?=\<\/i>)/,
    img: /^.*?\.(png|jpg|bmp|jpeg|webp)/,
    months: /(January|February|March|April|May|June|July|August|September|October|November|December)\s[0-9]{1,2}(st|nd|rd|th)/
}

export default regexp