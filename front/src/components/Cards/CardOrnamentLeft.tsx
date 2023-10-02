import { FC } from 'react';


const css = {
    width: '100%',
    gridArea: 'or-left',
    alignSelf: 'baseline',
}

export const CardOrnamentLeft: FC = () =>
    <div style={css}>
        <img
            data-side="left"
            src='/src/assets/img/ornament_left.svg'
        />
    </div>
