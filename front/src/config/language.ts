export interface IDataSecondary {
    age: string,
    height: string,
    birthday: string,
    debutManga: string,
    debutAnime: string,
}

interface ILanguage {
    en: { cardDataSecondary: IDataSecondary },
    es: { cardDataSecondary: IDataSecondary }
}

export const language: ILanguage = {
    en: {
        cardDataSecondary: {
            age: "age",
            height: "height",
            birthday: "birthday",
            debutManga: "debut (manga)",
            debutAnime: "debut (anime)",
        }
    },
    es: {
        cardDataSecondary: {
            age: "edad",
            height: "altura",
            birthday: "cumpleaños",
            debutManga: "debut (manga)",
            debutAnime: "debut (anime)",
        }
    }
};
