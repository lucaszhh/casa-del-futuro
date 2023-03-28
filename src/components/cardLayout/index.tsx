import React from "react"
import Card from "@/components/card"
import { CardsLayout, CardsLayoutTitle, CardsSection } from "./cardLayout.styled"
import { IEvent, ICourse } from "../../../types"
import 'animate.css';

type props = {
    data: IEvent[] | ICourse[],
    isEvent: boolean
}

const CardLayout = ({data, isEvent}: props) => {

    const shuffle : (data: IEvent[] | ICourse[] ) => IEvent[] | ICourse[] = (data) => {
        return data.sort(() => 0.5 - Math.random())
    } 
    
    const cardList = shuffle(data).map((data)=>{
        if(isEvent){
            return <Card isEvent data={data}></Card>
        }
        return <Card isEvent={false} data={data}></Card>
    })

    return (
        <CardsSection>
            <CardsLayoutTitle>{isEvent?"Eventos":"Cursos"}</CardsLayoutTitle>
            <CardsLayout className="animate__backInUp">{cardList}</CardsLayout>
        </CardsSection>
    )
}

export default CardLayout