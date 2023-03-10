import { NextApiRequest, NextApiResponse } from "next"
import { IEvent } from "../../../../types"
import { events } from "../../../../data"
import { useState } from "react"

type response = {
    message: string,
    event: IEvent | undefined
}

const handler = async (req : NextApiRequest, res : NextApiResponse<response | IEvent >) => {

	const { id } = req.query

	const findEvent = ()=>{
		const event = events.find((e)=>e.id == id)
		if(event){
			return event
		}
		return {id:"",title:"",description:"",image:""}
	}

	if(!findEvent){
		res.status(403).json({message: "No se encontraron eventos", event: findEvent})
	}
	
	res.status(200).json(findEvent())
}


export default handler