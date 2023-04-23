import { NextApiRequest, NextApiResponse } from "next"
import { quote } from "../../../../data"
import { IQuote } from "../../../../types"

type response = {
    message: string,
}


const handler = async (req : NextApiRequest, res : NextApiResponse<response | IQuote>) => {

    const randomQuote = quote[Math.floor(Math.random() * quote.length)]

	if(!randomQuote){
		res.status(403).json({message: "No se encontraro quote"})
	}

	res.status(200).json(randomQuote)
}


export default handler