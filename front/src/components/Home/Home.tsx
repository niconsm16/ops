import { FC, useContext } from 'react';

import { HomeCel, HomeDesktop, HomeLaptop, HomeTablet } from '..';
import { checkDevice } from '../../context/helpers/ResponsiveHelpers';
import { ResponsiveContext } from '../../context/ResponsiveContext';
import { EResponsive } from '../../context/enums/ResponsiveEnums';


export const Home: FC = () => {

    const responsiveSizes = useContext(ResponsiveContext)

    const device = checkDevice(responsiveSizes)

    switch (device) {
        case EResponsive.small:
            return <HomeCel />;

        case EResponsive.tablet:
            return <HomeTablet />;

        case EResponsive.laptop:
            return <HomeLaptop />

        case EResponsive.desktop:
            return <HomeDesktop />

        default:
            return <div>Si</div>
    }
}