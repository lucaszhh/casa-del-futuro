import React from "react"
import CardLayout from "@/components/cardLayout"
import { GetServerSideProps, NextPage } from "next"
import { ICourse } from "../../../types"
import AboutUs from "@/components/aboutUs"
import { escuelaProgramacion, coursesProgramacion, coursesMayo, coursesMarzo } from "../../../data"
import Title from "@/components/title"
import Head from "next/head"

type Props = {
	courses: ICourse[]
}

const Courses: NextPage<Props> = ({courses}: Props) => {
	return (
		<>
			<Head>
				<title>Casa del futuro</title>
			</Head>
			<Title title="Junio" ></Title>
			<AboutUs data={escuelaProgramacion}></AboutUs>
			<CardLayout isEvent={false} data={coursesProgramacion}/>
			<Title title="Mayo" ></Title>
			<CardLayout isEvent={false} data={coursesMayo}/>
			<Title title="Marzo" ></Title>
			<CardLayout isEvent={false} data={coursesMarzo}/>
		</>
	)
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