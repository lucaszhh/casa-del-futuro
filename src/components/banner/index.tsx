import { HOME_BANNER_DESCRIPTION, HOME_BANNER_TITLE } from "../../../constants"
import Image from "next/image"
import cdfBanner from "/public/imgs/casaDelFuturo.png"
import Box  from "@mui/material/Box"


export const Banner = () => {
    return (
        <Box>
            <Image alt="Imagen banner de la casa del futuro" src={cdfBanner} style={{maxWidth: "100%", height: "auto"}} /> 
        </Box>
    )
}