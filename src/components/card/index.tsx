import { useState } from "react"
import { ICourse, IEvent } from "../../../types"
import Button from "../button"
import { CardStyled, CardImage, CardInformation, CardLayoutButton, CardDescription } from "./card.styled"

type props = {
    data: IEvent | ICourse,
    isEvent: boolean
}

const Card = ({ data, isEvent }: props) => {

    const [verMas, setVerMas] = useState<boolean>(false)

    return(
        <CardStyled key={data.id} >
            <CardImage width={200} height={150} src={data.image}  alt="" />
            <CardInformation>
                <p>Duración: {data.duration}</p>
                <h2>{data.title}</h2>
                <CardDescription>
                    {data.description}
                </CardDescription>
                <CardLayoutButton href={isEvent? `/eventos/${data.id}` : `/cursos/${data.id}`}>
                    <Button content={`Ver ${isEvent?"evento":"curso"}`} />
                </CardLayoutButton>
            </CardInformation>
        </CardStyled>
    )
}

export default Card