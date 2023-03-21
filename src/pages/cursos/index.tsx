import React, { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { cdfContext } from "@/context"

const Courses = () => {

	const { courses } = useContext(cdfContext)

	return (
		<div>Cursos
			<ul>
				{
					courses?.map((course)=>{
						return(
							<li key={course.id}>
								<Link href={`/cursos/${course.id}`}>
									<Image src={course.image} width="100" height="40" alt={course.title}/>
									<h3>{course.title}</h3>
									<p>{course.description}</p>
								</Link>
							</li>
						)
					})
				}

			</ul>
		</div>
	)
}

export default Courses