import React from "react"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useEvent } from "@/hooks/useEvents"

const Event = () => {
	
	const router = useRouter()
	
	const id = ()=>{
		const id = router.query.id
		if(typeof id == "string"){
			return id
		}
		return "1"
	}
	const event= useEvent(id())
	
	return(
		event&&
		<div>
			<Image src={event.image} width="100" height="40" alt={event.title}/>
			<h3>{event.title}</h3>
			<p>{event.description}</p>
		</div>      
	)
}

export default Event

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

export const getStaticProps : GetStaticProps = async ()=> {

	

	return {
		props: {},
	}
}

