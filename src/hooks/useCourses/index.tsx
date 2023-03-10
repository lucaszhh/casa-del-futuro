import { useEffect, useState } from "react"
import { ICourse } from "../../../types"


export const useCourses = () =>{

	const [courses, setCourses] = useState<ICourse[]>([])

	useEffect(()=>{
		const fetchData = async ()=>{
			const res = await fetch("/api/courses")
			const resCourses = await res.json()
			setCourses(resCourses)
		}
		fetchData()
	}, [])

	return courses

}


