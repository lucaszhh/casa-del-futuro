import { NextApiRequest, NextApiResponse } from "next"
import { ICourse } from "../../../../types"
import { courses } from "../../../../data"
import { useState } from "react"

type response = {
    message: string,
    course: ICourse | undefined
}

const handler = async (req : NextApiRequest, res : NextApiResponse<response | ICourse>) => {

	const { id } = req.query

	const findEvent = ()=>{
		const course = courses.find((e)=>e.id == id)
		if(course){
			return course
		}
		return {id:"",title:"",description:"",image:""}
	}

	if(!findEvent){
		res.status(403).json({message: "No se encontraron eventos", course: findEvent})
	}
	
	res.status(200).json(findEvent())
}


export default handler