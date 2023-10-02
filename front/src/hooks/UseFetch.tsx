import { FC, useEffect, useState } from 'react';


interface IResponse<T> {
    info: T[],
    loading: boolean,
    loadData: () => void
}

const getData = async (url: string) =>
    await (await fetch(url)).json();

export const UseFetch = <_, T>(url: string): IResponse<T> => {

    const [ loading, setLoading ] = useState(true)
    const [ info, setInfo ] = useState<T[]>([])

    const loadData = () =>
        setLoading(true)

    const saveData = (data: T[]) =>
        setInfo(data)

    const loaded = () =>
        setLoading(false)

    const load = () => getData(url)
        .then(res => saveData(res))
        .finally(() => loaded())


    useEffect(() => {
        loading && load()
    }, [ loading ])

    return { info, loading, loadData };
};