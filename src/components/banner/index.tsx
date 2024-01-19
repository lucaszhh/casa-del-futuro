import { HOME_BANNER_DESCRIPTION, HOME_BANNER_TITLE } from "../../../constants"
import Image from "next/image"
import cdfBanner from "/public/imgs/casaDelFuturo.png"
import Box  from "@mui/material/Box"
import styles from "./style.module.css"
import { Typography } from "@mui/material"


export const Banner = () => {
    return (
        <Box className={styles.container} >
            <Typography className={styles.texto1} variant="h1">{HOME_BANNER_TITLE}</Typography>
            <Typography className={styles.texto} variant="h2">{HOME_BANNER_DESCRIPTION}</Typography>
        </Box>
        )
}


{/* <Image alt="Imagen banner de la casa del futuro" src={cdfBanner} style={{maxWidth: "100%", height: "auto"}} /> */}
        