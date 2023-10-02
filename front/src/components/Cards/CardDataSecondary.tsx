import { FC } from 'react';
import { language, config } from '../../config';
import { Character } from '../../model';

interface Props {
    data: Character
}

export const CardDataSecondary: FC<Props> = ({ data }) => {

    const css = { gridArea: 'secondary' }

    const { age, height, birthday, debutManga, debutAnime } =
        language[ config.language ].cardDataSecondary;


    return <div data-secondary="data" style={css}>
        <h6>{`${age}: ${data.age} - ${height}: ${data.height} - ${birthday}: ${data.birthday} - ${debutManga}: ${data.debutManga} - ${debutAnime}: ${data.debutAnime}`.toUpperCase()}</h6>
    </div>
}