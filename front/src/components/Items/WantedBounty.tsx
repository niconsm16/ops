import { FC } from 'react';

interface Props {
    bounty: string
}

const css = {
    display: 'flex',
    width: '100%',
    margin: '.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '5px',
}

const span1 = {
    width: '20%',
    TextAlign: 'end',
    marginRight: '.5rem'
}

const span2 = {
    width: '80%'
}

const text = {
    width: '80%',
    transform: 'scaleX(1.3)',
}

export const WantedBounty: FC<Props> = ({ bounty }) => {


    return <div style={css}>
        <span style={span1}>
            <img
                src="/src/assets/img/belly.svg"
                alt="Belly or Beri logo"
                data-bounty="belly"
            />
        </span>
        <span style={span2}>
            <h4 style={text}>{bounty}-</h4>
        </span>
    </div>
}