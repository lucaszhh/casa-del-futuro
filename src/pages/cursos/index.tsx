import React, { useContext } from "react"
import { cdfContext } from "@/context"
import CardLayout from "@/components/cardLayout"

const Courses = () => {
	const { courses } = useContext(cdfContext)
	return <CardLayout isEvent={false} data={courses}/>
}

export default Courses