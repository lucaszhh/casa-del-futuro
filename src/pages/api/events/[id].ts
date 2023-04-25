import { NextApiRequest, NextApiResponse } from "next"
import { IEvent } from "../../../../types"
import { events } from "../../../../data"

type response = {
    message: string
}

const handler = async (req : NextApiRequest, res : NextApiResponse<response | IEvent >) => {
	const { id } = req.query
	const event = events.find((e)=>e.id == id)
	if(event){
		res.status(200).json(event)
	}
	else{
		res.status(403).json({message: "No se encontraron eventos"})
	}
}

export default handler