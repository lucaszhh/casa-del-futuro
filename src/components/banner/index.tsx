import { HOME_BANNER_DESCRIPTION, HOME_BANNER_TITLE } from "../../../constants"
import { DivImage } from "./banner.styled"

export const Banner = () => {
    return (
        <>
            <DivImage>
                <h3>{HOME_BANNER_TITLE}</h3>
                <p>{HOME_BANNER_DESCRIPTION}</p>
            </DivImage>
        </>
    )
}