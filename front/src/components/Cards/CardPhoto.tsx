import { FC } from 'react';


interface Props {
    img: string
}

const css = {
    gridArea: 'img',
}

export const CardPhoto: FC<Props> = ({ img }) =>
    <div style={css} >
        <img data-image="photo" src={img} alt="image" />
        {/* <img data-image="photo" src="/src/assets/img/test.png" alt="image" /> */}
    </div>
