import { Typography } from "@mui/material"
import Box  from "@mui/material/Box"
import Image from "next/image"
import { IAbotUs } from "../../../types"
import ResponsiveImage from "../responsiveImage"

type Props = {
    data: IAbotUs
}

const AboutUs = ({data}: Props) => {
    return(
        <>
            <Box sx={{display: "flex", alignItems: "center", justifyContent:"center",gap: "100px",backgroundColor:"#800080", color: "#FFF", padding: "80px 20px", '@media screen and (max-width: 768px)': {flexDirection:"column", textAlign:"center", gap:"50px"}}}>
                <Box sx={{display: "flex", flexDirection:"column", justifyContent:"space-between", width:"40%", gap:"30px", '@media screen and (max-width: 768px)': {width:"unset"}}}>
                    <Typography variant="h2">{data.title}</Typography>
                    <Typography>{data.description}</Typography>
                </Box>
                <ResponsiveImage  src={data.image} width={400} height={400} alt="casa del futuro"/>
            </Box>
        </>
    )
}

export default AboutUs