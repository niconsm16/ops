import { FC } from 'react';
import { Wanted, WantedBounty, WantedName, WantedStatus } from '../Items';

interface Props {
    name: string,
    status: string,
    bounty: string
}

const css = {
    width: 'inherit',
    height: 'inherit',
    gridArea: 'primary'
};

export const CardDataPrimary: FC<Props> =
    ({ name, status, bounty }) =>
        <div data-primary="data" style={css}>
            <WantedStatus status={status} />
            <WantedName name={name} />
            <WantedBounty bounty={bounty} />
        </div>;