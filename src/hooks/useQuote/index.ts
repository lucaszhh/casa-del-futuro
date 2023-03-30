import { useEffect, useState } from "react"
import { IQuote } from "../../../types"


export const useQuote = () =>{

	const [quote, setQuote] = useState<IQuote>()

	useEffect(()=>{
		const fetchData = async ()=>{
			const res = await fetch("/api/quote")
			const resQuote = await res.json()
			setQuote(resQuote)
		}
		fetchData()
	}, [])
	return quote
}