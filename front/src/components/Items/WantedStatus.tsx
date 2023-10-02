import { FC } from 'react';


interface Props {
    status: string
}

export const WantedStatus: FC<Props> = ({ status }) => {

    status = status.toUpperCase()

    return <h5>{status}</h5>

}