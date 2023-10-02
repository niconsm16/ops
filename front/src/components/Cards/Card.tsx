import { FC } from 'react';
import { CardDataPrimary, CardDataSecondary, CardOrnamentEmpty, CardOrnamentLeft, CardOrnamentMarine, CardOrnamentRight, CardPhoto } from './';
import { Wanted } from '../Items';
import { Character } from '../../model';

interface ICard {
    char: Character
}

export const Card: FC<ICard> = ({ char }) => {

    return <div className='cards__template--cel'>
        <CardOrnamentEmpty side='left' />
        <Wanted />
        <CardPhoto img={char.img} />
        <CardOrnamentEmpty side='right' />

        <CardOrnamentLeft />
        <CardDataPrimary
            name={char.name}
            status={char.status}
            bounty={char.bounty}
        />
        <CardOrnamentRight />

        <CardDataSecondary data={char} />
        <CardOrnamentMarine />
    </div>

}