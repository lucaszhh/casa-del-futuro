import { HOME_BANNER_DESCRIPTION, HOME_BANNER_TITLE } from "../../../constants"
import { DivImage } from "./banner.styled"
import imageBanner from "./imageBanner.png"

export const Banner = () => {
    return (
            <DivImage alt="Imagen banner de la casa del futuro" src={imageBanner} height={450} width={1050}/> 
    )
}