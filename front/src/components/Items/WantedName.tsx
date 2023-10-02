import { FC } from 'react';


interface Props {
    name: string
}

export const WantedName: FC<Props> = ({ name }) => {

    name = name.toUpperCase()

    const css = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '4rem'
    }

    return <div style={css}>
        <h3>{name}</h3>
    </div>

}