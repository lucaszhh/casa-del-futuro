import { NextApiRequest, NextApiResponse } from "next"
import { IEvent } from "../../../../types"
import { events } from "../../../../data"

type response = {
    message: string,
    event: IEvent
}

const handler = async (req : NextApiRequest, res : NextApiResponse<response>) => {

	const { id } = req.query
    
	const findEvent : IEvent = events.find((e)=>e.id == id)

	if(!findEvent){
		res.status(403).json({message: "No se encontraron eventos", event: findEvent})
	}

	res.status(200).json({message: "Evento encontrado", event: findEvent})
}


export default handler