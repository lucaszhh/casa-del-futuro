import React from "react"
import CardLayout from "@/components/cardLayout"
import { GetServerSideProps, NextPage } from "next"
import { ICourse } from "../../../types"

type Props = {
	courses: ICourse[]
}

const Courses: NextPage<Props> = ({courses}: Props) => {
	return <CardLayout isEvent={false} data={courses}/>
}

const URL_WEB = process.env.URL_WEB

export const getServerSideProps: GetServerSideProps = async () => {
	const resCourse = await fetch(URL_WEB + "api/courses")
	const courses = await resCourse.json()

	return {
		props: { courses }
	}
}

export default Courses