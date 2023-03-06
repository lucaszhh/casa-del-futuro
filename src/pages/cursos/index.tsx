import Image from "next/image"
import React from "react"
import { courses } from "../../../data"

const Course = () => {
	return (
		<div>Cursos
			<ul>
				{
					courses.map((course)=>{
						return(
							<li key={course.id}>
								<Image src={course.image} width="100" height="40" alt={course.title}/>
								<h3>{course.title}</h3>
								<p>{course.description}</p>
							</li>
						)
					})
				}

			</ul>
		</div>
		
	)
}

export default Course