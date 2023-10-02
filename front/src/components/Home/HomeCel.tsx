import { FC } from 'react';
import { Cards } from '../Cards/Cards';


export const HomeCel: FC = () => {

    return (
        <div className="background__cel">
            <img src="/src/assets/img/logo.svg" className="logo" alt="" />
            <h2>Personajes:</h2>
            <Cards />
        </div>
    )
}