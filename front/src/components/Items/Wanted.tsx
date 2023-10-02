import { FC } from 'react';


export const Wanted: FC = () => {

    const css = {
        width: '100%',
        display: 'flex',
        gridArea: 'wanted',
        justifyContent: 'center'
    }

    return <div style={css}>
        <h2>WANTED</h2>
    </div>
}