import React from "react"
import Image from "next/image"
import { IEvent } from "../../../types"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths: GetStaticPaths = () => {
	return { 
		paths: [
			{ params: { id: "1" }},
			{ params: { id: "2" }},
			{ params: { id: "3" }},
			{ params: { id: "4" }},
		], 
		fallback: false
	}
}

type response = {
    message: string,
    event: IEvent
}

export const getStaticProps : GetStaticProps = async (context)=> {

	const { params } = context
	if(params){
		const e = await fetch(`http://localhost:3000/api/events/${params.id}`)
		const event : response = await e.json()
		
		return {
			props: {
				event: event.event
			},
		}
	}
	return {
		props: {},
	}
}

type props = {
    event: IEvent
}
  
const Event = ({event}: props) => {
	return(
		<div>
			<Image src={event.image} width="100" height="40" alt={event.title}/>
			<h3>{event.title}</h3>
			<p>{event.description}</p>
		</div>      
	)
}

export default Event


