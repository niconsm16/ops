import { IResponsive } from "../interfaces/ResponsiveInterfaces"
import { breakpoints } from "../config/config"
import { EResponsive } from "../enums/ResponsiveEnums"


export const checkDevice = (sizes: IResponsive): EResponsive => {

    if (sizes.width <= 0)
        return EResponsive.nodisplay

    if (sizes.width < breakpoints.xs)
        return EResponsive.minimum

    if (sizes.width < breakpoints.s)
        return EResponsive.small

    if (sizes.width < breakpoints.m)
        return EResponsive.tablet

    if (sizes.width < breakpoints.l)
        return EResponsive.laptop

    if (sizes.width < breakpoints.xl)
        return EResponsive.desktop

    if (sizes.width < breakpoints.xxl)
        return EResponsive.x2k

    return EResponsive.max
}