import { FC, FunctionComponent } from 'react';
import { Card } from './';
import { config } from '../../config';
import { Character } from '../../model';
import { UseFetch } from '../../hooks';

export const Cards: FC = () => {

    const { info, loading } = UseFetch<FC, Character>(config.database);

    return loading
        ? <div>Cargando</div>
        : (
            <div className="cards__background--cel">
                {info.map((char, i) => i <= 100 &&
                    <Card char={char} key={i} />)}
            </div>
        )
}