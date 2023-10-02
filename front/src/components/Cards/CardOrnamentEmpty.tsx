import { FC } from 'react';

type Side = 'left' | 'right'

interface ISide {
    side: Side
}

export const CardOrnamentEmpty: FC<ISide> = ({ side }) => {

    const css = {
        width: 'inherit',
        gridArea: `empty-${side}`
    }

    return (
        <div style={css}></div>
    )
}