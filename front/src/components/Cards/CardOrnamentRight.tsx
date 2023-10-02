import { FC } from 'react';


const css = {
    width: '100%',
    gridArea: 'or-right',
}

export const CardOrnamentRight: FC = () =>
    <div style={css}>
        <img data-side="right"
            src='/src/assets/img/ornament_right.svg'
        />
    </div>
