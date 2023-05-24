import  Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

type Props = {
    title: string
}

const Title = ({title} : Props) => {
  return (
    <Box sx={{backgroundColor: "#800080", textAlign: "center", margin: "20px 0"}}>
            <Typography variant="title" sx={{ padding: "2rem 2.5rem 0rem", fontWeight: "bold", textTransform: "uppercase", color: "#FFF" }}>
                {title}
            </Typography>
    </Box>
  )
}

export default Title