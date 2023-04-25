import { NextApiRequest, NextApiResponse } from "next"
import { ICourse } from "../../../../types"
import { courses } from "../../../../data"

type response = {
    message: string
}

const handler = async (req : NextApiRequest, res : NextApiResponse<response | ICourse>) => {
	const { id } = req.query
	const course = courses.find((e)=>e.id == id)
	if(course){
		res.status(200).json(course)
	} 
	else{
		res.status(403).json({message: "No se encontraron eventos"})
	}
}

export default handler