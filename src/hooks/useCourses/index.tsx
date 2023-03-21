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

type IuseCourse = (id: string) => ICourse | undefined

export const useCourse : IuseCourse = (id) =>{

	const [course, setCourse] = useState<ICourse>({id:"",title:"",description:"",image:""})

	useEffect(()=>{
		const fetchData = async ()=>{
			const res = await fetch(`/api/courses/${id}`)
			const resCourse = await res.json()
			setCourse(resCourse)
		}
		fetchData()
	}, [id])
	if(course){
		return course
	}
}


