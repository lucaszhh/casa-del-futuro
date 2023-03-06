import { NextApiRequest, NextApiResponse } from "next"
import { IEvent } from "../../../../types"
import { events } from "../../../../data"

type response = {
    message: string,
    events: IEvent[]
}

const handler = async (req : NextApiRequest, res : NextApiResponse<response>) => {

	if(!events){
		res.status(403).json({message: "No se encontraron eventos", events})
	}

	res.status(200).json({message: "Evento encontrado", events})
}


export default handler