import React from "react"
import Image from "next/image"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import { ICourse } from "../../../types"
import Box from "@mui/material/Box"
import ResponsiveImage from "@/components/responsiveImage"
import { Typography } from "@mui/material"
import Head from "next/head"

type Props = {
	course: ICourse
}

const Event: NextPage<Props> = ({ course }: Props) => {
	return (
		course &&
		<>
			<Head>
				<title>Casa del futuro</title>
			</Head>
			<Box sx={{display: "flex", alignItems: "center", border: "solid #C4C4C4 1px",borderRadius:"20px", margin:"10%", padding: "10px" ,'@media screen and (max-width: 768px)': {flexDirection:"column"}}}>
				<Image src={course.category.icon} alt={course.category.category} width={350} height={280}  style={{width:"100%", maxWidth:"350px", height:"auto",margin:"auto"}}/>
				<Box>
					<Typography variant="subtitle2" color="text.secondary" gutterBottom>
							{course.category.category}
					</Typography>
					<Typography variant="h1">{course.title}</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						Duración: {course.duration}
					</Typography>
					<Typography variant="subtitle1">{course.description}</Typography>
				</Box>
			</Box>
		</>
	)
}

export default Event

const URL_WEB = process.env.URL_WEB

export const getServerSideProps: GetServerSideProps = async (context : GetServerSidePropsContext) => {
	const id = parseInt(context.params?.id as string)
	const res = await fetch(URL_WEB + `api/courses/${id}`)
	const course = await res.json()
	return {
		props: { course ,
		revalidate: 10,}
	}
}

