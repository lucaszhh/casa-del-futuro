import { Typography } from "@mui/material"
import Box  from "@mui/material/Box"
import Image from "next/image"
import { IAbotUs } from "../../../types"

type Props = {
    data: IAbotUs
}

const AboutUs = ({data}: Props) => {
    return(
        <>
            <Box sx={{display: "flex", alignItems: "center", justifyContent:"center",gap: "100px",backgroundColor:"#800080", color: "#FFF", padding: "80px 20px"}}>
                <Box sx={{display: "flex", flexDirection:"column", justifyContent:"space-between", width:"40%", gap:"30px"}}>
                    <Typography variant="h2">Un poco de nosotros</Typography>
                    <Typography>{data.description}</Typography>
                </Box>
                <Image style={{borderRadius: "50%"}} src={data.image} width={400} height={400} alt="casa del futuro"/>
            </Box>
        </>
    )
}

export default AboutUs