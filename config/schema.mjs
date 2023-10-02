const regexp = {
    name: {
        start: 'class="mw-page-title-main">',
        regexp: ['closeTag']
    },
    img: {
        start: '<img src="',
        regexp: ['img']
    },
    debutManga: {
        start: 'Debut',
        regexp: ['chapter', 'number']
    },
    debutAnime: {
        start: 'Debut',
        regexp: ['episode', 'number']
    },
    birthday: {
        start: 'Birthday:',
        regexp: ['months']
    },
    bounty: {
        start: '>Bounty',
        regexp: ['bounty']
    },
    age: {
        start: '>Age:',
        regexp: ['age', 'number']
    },
    height: {
        start: '>Height:',
        regexp: ['height']
    },
    status: {
        start: '>Status:',
        regexp: ['status']
    },

    origin: '',
    fruit: {
        original: '',
        en: '',
        type: ''
    },
}



const schema = { regexp }
export default schema