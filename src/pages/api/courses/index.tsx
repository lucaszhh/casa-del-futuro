import { NextApiRequest, NextApiResponse } from "next"
import { ICourse } from "../../../../types"
import { courses } from "../../../../data"

type response = {
    message?: string,
    courses: ICourse[]
}


const handler = async (req : NextApiRequest, res : NextApiResponse<response | ICourse[]>) => {

	if(!courses){
		res.status(403).json({message: "No se encontraron eventos", courses})
	}

	res.status(200).json(courses)
}


export default handler