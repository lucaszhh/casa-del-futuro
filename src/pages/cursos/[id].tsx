import React from "react"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useCourse } from "@/hooks/useCourses"

const Event = () => {
	
	const router = useRouter()
	
	const id = ()=>{
		const id = router.query.id
		if(typeof id == "string"){
			return id
		}
		return "1"
	}
	const course = useCourse(id())
    console.log(course);
    
	
	return(
		course&&
		<div>
			<Image src={course.image} width="100" height="40" alt={course.title}/>
			<h3>{course.title}</h3>
			<p>{course.description}</p>
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

