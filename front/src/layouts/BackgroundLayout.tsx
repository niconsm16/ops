import { FC, PropsWithChildren } from 'react';


export const BackgroundLayout: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className="background__size">
            {children}
        </div>
    )
}
