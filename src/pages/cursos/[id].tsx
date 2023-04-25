import React from "react"
import Image from "next/image"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import { ICourse } from "../../../types"

type Props = {
	course: ICourse
}

const Event: NextPage<Props> = ({ course }: Props) => {
	return (
		course &&
		<div>
			<Image src={course.image} width="100" height="40" alt={course.title} />
			<h3>{course.title}</h3>
			<p>{course.description}</p>
		</div>
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

