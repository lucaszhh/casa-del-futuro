import React from "react"
import { CardsLayout, CardsLayoutTitle, CardsSection } from "./cardLayout.styled"
import { IEvent, ICourse } from "../../../types"
import 'animate.css';
import BasicCard from "../cardMU";

type props = {
    data: IEvent[] | ICourse[],
    isEvent: boolean,
    random?: boolean
}

const CardLayout = ({data, isEvent, random}: props) => {

    const shuffle : (data: IEvent[] | ICourse[] ) => IEvent[] | ICourse[] = (data) => {
        if(random){
            return data.sort(() => 0.5 - Math.random())
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
        <CardsSection>
            <CardsLayoutTitle>{isEvent?"Eventos":"Cursos"}</CardsLayoutTitle>
            <CardsLayout className="animate__backInUp">{cardList}</CardsLayout>
        </CardsSection>
    )
}

export default CardLayout