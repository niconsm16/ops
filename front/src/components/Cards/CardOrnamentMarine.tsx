import { FC } from 'react';


const css = {
    gridArea: 'or-marine',
    display: 'flex',
    width: 'inherit',
    height: 'inherit',
    padding: '1rem',
    alignItems: 'end',
}

export const CardOrnamentMarine: FC = () =>
    <div style={css}>
        <img width={'100%'} height={'auto'} src='/src/assets/img/ornament_marine.svg' />
    </div>