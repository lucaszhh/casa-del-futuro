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

type IuseEvent = (id: string) => IEvent | undefined

export const useEvent : IuseEvent = (id) =>{

	const [event, setEvent] = useState<IEvent>({id:"",title:"",description:"",image:""})

	useEffect(()=>{
		const fetchData = async ()=>{
			const res = await fetch(`/api/events/${id}`)
			const resEvents = await res.json()
			setEvent(resEvents)
		}
		fetchData()
	}, [id])
	if(event){
		return event
	}
}


