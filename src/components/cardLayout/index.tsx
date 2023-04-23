import React from "react"
import { IEvent, ICourse } from "../../../types"
import BasicCard from "../card";
import { Box, Typography } from "@mui/material";

type props = {
    data: IEvent[] | ICourse[],
    isEvent: boolean,
    random?: boolean
}

const CardLayout = ({data, isEvent, random}: props) => {

    const shuffle : (data: IEvent[] | ICourse[] ) => IEvent[] | ICourse[] = (data) => {
        if(random){
            const datarandom = data.sort(() => 0.5 - Math.random()).slice(0,4)
            console.log("random",datarandom)
            return datarandom
        } else{
            return data
        }
    }
    
    const cardList = shuffle(data).map((data)=>{
        if(isEvent){
            return <BasicCard isEvent data={data}></BasicCard>
        }
        return <BasicCard isEvent={false} data={data}></BasicCard>
    })

    return (
        <Box sx={{    display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", paddingBottom: "5rem"}}>
                <Typography variant="h3" sx={{ padding: "2rem 2.5rem 0rem", fontWeight:"bold"}}>
                    {isEvent?"Eventos":"Cursos"}
                </Typography>
                <Box sx={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"50px", maxWidth:"1000px", }}>
                    {cardList}
                </Box>
        </Box>
    )
}

export default CardLayout