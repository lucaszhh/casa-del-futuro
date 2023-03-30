import { NextApiRequest, NextApiResponse } from "next"
import { IEvent } from "../../../../types"
import { events } from "../../../../data"

type response = {
    message: string,
}


const handler = async (req : NextApiRequest, res : NextApiResponse<response | IEvent[]>) => {

	if(!events){
		res.status(404).json({message: "No se encontraron eventos"})
	}

	res.status(200).json(events)
}


export default handler