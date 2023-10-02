import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { IResponsive } from './interfaces/ResponsiveInterfaces';
import { BackgroundLayout } from '../layouts/BackgroundLayout';


const initialState: IResponsive = {
    width: visualViewport?.width || 0,
    height: visualViewport?.height || 0,
}

export const ResponsiveContext =
    createContext<IResponsive>(initialState);


export const ResponsiveProvider: FC<PropsWithChildren> = ({ children }) => {

    const [ responsive, setResponsive ] = useState<IResponsive>(initialState);

    const actualState: IResponsive = {
        width: visualViewport?.width || 0,
        height: visualViewport?.height || 0,
    }

    const sizeChange = () =>
        setResponsive(actualState);


    useEffect(() => {
        window.addEventListener("resize", sizeChange)
        return () => window.removeEventListener("resize", sizeChange)
    }, [ responsive ]);


    // DOM

    return (
        <ResponsiveContext.Provider value={responsive}>
            <BackgroundLayout>
                {children}
            </BackgroundLayout>
        </ResponsiveContext.Provider>);
};
