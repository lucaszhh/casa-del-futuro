import { useEffect, useState } from "react"
import { IEvent } from "../../../types"


export const useEvents = () =>{

	const [events, setEvents] = useState<IEvent[]>([])

	useEffect(()=>{
		const fetchData = async ()=>{
			const res = await fetch("/api/events")
			const resEvents = await res.json()
			setEvents(resEvents)
		}
		fetchData()
	}, [])
	return events
}


