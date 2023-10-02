type Language = 'es' | 'en'

interface IConfig {
    language: Language,
    database: string
}

export const config: IConfig = {
    language: 'es',
    database: '/src/database/characters.json'
}

